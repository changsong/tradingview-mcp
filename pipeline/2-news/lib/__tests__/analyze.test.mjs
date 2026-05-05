/**
 * Integration tests for analyze.mjs (the orchestrator)
 * Run: node --test pipeline/2-news/lib/__tests__/analyze.test.mjs
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { analyzeStockData } from '../analyze.mjs';

const ctx = (overrides = {}) => ({
  symbol: 'SSE:600160',
  name: '巨化股份',
  today:  new Date('2026-05-04'),
  cutoff: new Date('2026-04-27'),
  market: 'cn',
  ...overrides,
});

describe('analyzeStockData (CN)', () => {
  it('drops noise items (融资净买入 / 重要公告集锦)', () => {
    const items = [
      { title: '巨化股份：融资净买入2993万元，融资余额35亿元', date: '2026-05-04', source: '东方财富资讯', type: 'news' },
      { title: '4月30日晚间重要公告集锦',                         date: '2026-05-04', source: '东方财富资讯', type: 'news' },
      { title: '巨化股份签下万吨级氟化液大单，业绩超预期',           date: '2026-05-03', source: '新浪财经',     type: 'news' },
    ];
    const r = analyzeStockData(items, ctx());
    assert.equal(r.tagged.length, 1, '仅保留 1 条有效');
    assert.ok(r.news_dropped >= 2);
    assert.equal(r.tagged[0].sentiment, 1);
  });

  it('drops out-of-window items', () => {
    const items = [
      { title: '巨化股份签下大单业绩超预期', date: '2026-04-15', source: '新浪财经', type: 'news' },  // 旧
      { title: '巨化股份签下大单业绩超预期', date: '2026-05-04', source: '新浪财经', type: 'news' },  // 新
    ];
    const r = analyzeStockData(items, ctx());
    assert.equal(r.tagged.length, 1);
  });

  it('keeps research items even without subject mention (type=research bypass)', () => {
    const items = [
      { title: '化工行业景气深度分析', date: '2026-05-03', source: '研报', type: 'research', rating: '买入' },
    ];
    const r = analyzeStockData(items, ctx());
    assert.equal(r.tagged.length, 1);
    assert.equal(r.tagged[0].sentiment, 1);
  });

  it('returns no-data signal for empty input', () => {
    const r = analyzeStockData([], ctx());
    assert.equal(r.score, 50);
    assert.match(r.signal, /No Trade|无数据/);
  });

  it('produces normalized score in [0,100]', () => {
    const items = [
      { title: '巨化股份业绩超预期，营收同比增长 50%', date: '2026-05-04', source: '新浪财经', type: 'news' },
      { title: '中信证券上调巨化股份目标价，维持买入评级', date: '2026-05-03', source: '研报', type: 'research', rating: '买入' },
      { title: '巨化股份获巨潮资讯重大并购批复',         date: '2026-05-02', source: '巨潮资讯', type: 'announcement' },
    ];
    const r = analyzeStockData(items, ctx());
    assert.ok(r.score >= 0 && r.score <= 100);
    assert.ok(r.score > 75, `expected strong long, got ${r.score}`);
    assert.match(r.signal, /Long.*强|Long \(中\)|过热|谨慎/);
  });

  it('cross-stock pollution dropped (US case)', () => {
    const items = [
      { title: "META's Q1 Earnings Beat Estimates on Ad Growth", date: '2026-05-04', source: 'Yahoo Finance', type: 'news' },
      { title: 'GOOGL Cloud Strong Earnings',                    date: '2026-05-04', source: 'Yahoo Finance', type: 'news' },
      { title: 'FN Inc reports strong revenue beat',              date: '2026-05-03', source: 'Yahoo Finance', type: 'news' },
    ];
    const r = analyzeStockData(items, ctx({ symbol: 'NYSE:FN', name: ['FN'], market: 'us' }));
    assert.equal(r.tagged.length, 1);
    assert.equal(r.tagged[0].title, 'FN Inc reports strong revenue beat');
  });
});
