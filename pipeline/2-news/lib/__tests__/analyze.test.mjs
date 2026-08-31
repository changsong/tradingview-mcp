/**
 * Integration tests for analyze.mjs (the orchestrator) — v2 LLM 主分类
 *
 * 由于 analyzeStockData() 现在是 async + LLM 驱动，单测注入一个 mock 分类器
 * 来模拟 LLM 输出，保留对相关性过滤、权重计算、信号生成的端到端验证。
 *
 * Run: node --test pipeline/2-news/lib/__tests__/analyze.test.mjs
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { analyzeStockData } from '../analyze.mjs';

// 简单 mock：按关键词大致判断 type / sentiment，模拟 LLM 输出形状
function mockClassifier(market) {
  return async (items /*, ctx */) => items.map(it => {
    const text = `${it.title || ''} ${it.content || ''}`;
    if (market === 'cn') {
      const bullish = /超预期|增长|获批|大单|买入|签下|批复|增持/.test(text);
      const bearish = /亏损|下滑|处罚|违规|减持|跌停|警示/.test(text);
      let type = '行业';
      if (/财报|业绩|营收|利润|净利|预增|预减|扭亏|同比|环比/.test(text)) type = '财报';
      else if (/收购|并购|合并|重组|批复/.test(text))                   type = '并购';
      else if (/评级|目标价|买入|增持|卖出|减持|研报/.test(text))     type = '分析师动作';
      else if (/诉讼|处罚|违规|召回|警示/.test(text))                  type = '黑天鹅';
      else if (/政策|监管|发改委|央行|证监会|补贴|批复/.test(text))   type = '政策';
      else if (/据悉|消息称|或将|拟/.test(text))                       type = '传闻';
      return {
        type,
        sentiment: bullish ? 2 : bearish ? -2 : 0,
        is_real_catalyst: /大单|批复|公告|预增|预减|净利同比/.test(text),
        confidence: 0.85,
        reasoning: 'mock',
      };
    } else {
      const bullish = /beat|surge|record|growth|approval|win|boom/i.test(text);
      const bearish = /miss|fall|loss|fraud|lawsuit|recall|downgrade/i.test(text);
      let type = 'Industry';
      if (/earnings|revenue|EPS|guidance|profit|margin/i.test(text)) type = 'Earnings';
      else if (/acqui|merger|takeover|buyout|spin.?off/i.test(text)) type = 'M&A';
      else if (/upgrade|downgrade|target|rating|analyst/i.test(text)) type = 'Analyst Action';
      else if (/fraud|lawsuit|recall|fine|probe/i.test(text))         type = 'Black Swan';
      else if (/Fed|tariff|regulation|FDA/i.test(text))               type = 'Policy';
      return {
        type,
        sentiment: bullish ? 2 : bearish ? -2 : 0,
        is_real_catalyst: /earnings|approval|beat|miss|guidance/i.test(text),
        confidence: 0.85,
        reasoning: 'mock',
      };
    }
  });
}

const ctx = (overrides = {}) => ({
  symbol: 'SSE:600160',
  name: '巨化股份',
  today:  new Date('2026-05-04'),
  cutoff: new Date('2026-04-27'),
  market: 'cn',
  classifierFn: mockClassifier(overrides.market || 'cn'),
  ...overrides,
});

describe('analyzeStockData (CN, mock LLM)', () => {
  it('drops noise items (融资净买入 / 重要公告集锦)', async () => {
    const items = [
      { title: '巨化股份：融资净买入2993万元，融资余额35亿元', date: '2026-05-04', source: '东方财富资讯', type: 'news' },
      { title: '4月30日晚间重要公告集锦',                         date: '2026-05-04', source: '东方财富资讯', type: 'news' },
      { title: '巨化股份签下万吨级氟化液大单，业绩超预期',           date: '2026-05-03', source: '新浪财经',     type: 'news' },
    ];
    const r = await analyzeStockData(items, ctx());
    assert.equal(r.tagged.length, 1, '仅保留 1 条有效');
    assert.ok(r.news_dropped >= 2);
    assert.equal(r.tagged[0].sentiment, 1);  // mockClassifier 返回 +2 → mapLLMSentiment → +1
  });

  it('drops out-of-window items', async () => {
    const items = [
      { title: '巨化股份签下大单业绩超预期', date: '2026-04-15', source: '新浪财经', type: 'news' },
      { title: '巨化股份签下大单业绩超预期', date: '2026-05-04', source: '新浪财经', type: 'news' },
    ];
    const r = await analyzeStockData(items, ctx());
    assert.equal(r.tagged.length, 1);
  });

  it('keeps research items even without subject mention', async () => {
    const items = [
      { title: '化工行业景气深度分析', date: '2026-05-03', source: '研报', type: 'research', rating: '买入' },
    ];
    const r = await analyzeStockData(items, ctx());
    assert.equal(r.tagged.length, 1);
  });

  it('returns no-data signal for empty input', async () => {
    const r = await analyzeStockData([], ctx());
    assert.equal(r.score, 50);
    assert.match(r.signal, /No Trade|无数据/);
  });

  it('returns no-data when classifier returns null (LLM failure)', async () => {
    const r = await analyzeStockData(
      [{ title: '巨化股份签下大单业绩超预期', date: '2026-05-04', source: '新浪财经', type: 'news' }],
      ctx({ classifierFn: async () => null })
    );
    assert.equal(r.score, 50);
    assert.equal(r.tagged.length, 0);
    assert.match(r.signal, /No Trade|无数据/);
    assert.match(r.strategy, /LLM/);
  });

  it('produces normalized score in [0,100] and bullish signal for strong long set', async () => {
    const items = [
      { title: '巨化股份业绩超预期，营收同比增长 50%', date: '2026-05-04', source: '新浪财经', type: 'news' },
      { title: '中信证券上调巨化股份目标价，维持买入评级', date: '2026-05-03', source: '研报',     type: 'research', rating: '买入' },
      { title: '巨化股份获巨潮资讯重大并购批复',           date: '2026-05-02', source: '巨潮资讯', type: 'announcement' },
    ];
    const r = await analyzeStockData(items, ctx());
    assert.ok(r.score >= 0 && r.score <= 100);
    assert.ok(r.score > 60, `expected long signal, got ${r.score}`);
  });

  it('cross-stock pollution dropped (US case)', async () => {
    const items = [
      { title: "META's Q1 Earnings Beat Estimates on Ad Growth", date: '2026-05-04', source: 'Yahoo Finance', type: 'news' },
      { title: 'GOOGL Cloud Strong Earnings',                    date: '2026-05-04', source: 'Yahoo Finance', type: 'news' },
      { title: 'FN Inc reports strong revenue beat',              date: '2026-05-03', source: 'Yahoo Finance', type: 'news' },
    ];
    const r = await analyzeStockData(items, ctx({ symbol: 'NYSE:FN', name: ['FN'], market: 'us', classifierFn: mockClassifier('us') }));
    assert.equal(r.tagged.length, 1);
    assert.equal(r.tagged[0].title, 'FN Inc reports strong revenue beat');
  });

  it('tagged entries preserve structural fields (compat with keyword version)', async () => {
    const items = [
      { title: '巨化股份签下万吨级氟化液大单，业绩超预期', date: '2026-05-04', source: '新浪财经', type: 'news' },
    ];
    const r = await analyzeStockData(items, ctx());
    assert.equal(r.tagged.length, 1);
    const t = r.tagged[0];
    // 旧版关键字也产生这些字段，下游消费保持兼容
    assert.ok(typeof t.type === 'string');
    assert.ok([-1, 0, 1].includes(t.sentiment));
    assert.ok(typeof t.weight === 'number');
    assert.ok(typeof t.finalWeight === 'number');
    assert.ok(typeof t.sourceAuthority === 'number');
    assert.ok(typeof t.typeMul === 'number');
    assert.ok(typeof t.recencyFactor === 'number');
    // 新增 LLM 审计字段
    assert.equal(t.llm_reviewed, true);
    assert.equal(typeof t.llm_confidence, 'number');
    assert.equal(typeof t.llm_is_real_catalyst, 'boolean');
  });
});
