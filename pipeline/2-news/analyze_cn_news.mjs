#!/usr/bin/env node
/**
 * A股新闻情绪量化分析 → 可交易信号
 *
 * 流程：
 *  1. 读取 cn_selected.txt 股票列表
 *  2. 并行抓取每只股票的新闻/研报/公告（最近7天）
 *  3. 对每条新闻打标签: 类型 | 情绪(+1/0/-1) | 权重(1~5)
 *  4. 构建情绪指数: Score = Σ(情绪 × 权重)
 *  5. 识别模式: 趋势 / 反转 / 情绪过热 / 疑似提前炒作 / 假利好
 *  6. 输出: Long / Short / No Trade + 触发原因
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { searchNews, extractCode, detectMarket } from '../../src/core/webNews.js';

// 锁定 CWD 为项目根，使 ./watchlist 等相对路径稳定
process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

// ─── 配置 ────────────────────────────────────────────────────────────────────
const SYMBOLS_FILE = './watchlist/cn_selected.txt';
const OUTPUT_MD    = './watchlist/cn_news_signals.md';
const OUTPUT_JSON  = './watchlist/cn_news_signals.json';
const DAYS_BACK    = 7;   // 往前7天覆盖5个交易日
const NEWS_COUNT   = 20;  // 每股最多拉取条数
const BATCH_SIZE   = 5;   // 并行批次大小

const today  = new Date();
const cutoff = new Date(today);
cutoff.setDate(today.getDate() - DAYS_BACK);
const cutoffStr   = cutoff.toISOString().split('T')[0];   // 2026-04-23
const todayStr    = today.toISOString().split('T')[0];     // 2026-04-30

// ─── 新闻类型规则（按优先级排列）────────────────────────────────────────────
const TYPE_RULES = [
  { type: '黑天鹅', regex: /诉讼|事故|处罚|违规|召回|质量问题|警示|强制退市|造假|欺诈|起诉|索赔|重大损失|重大违约|监管处罚/ },
  { type: '财报',   regex: /业绩|营收|利润|净利|财报|年报|季报|预告|预增|预减|扭亏|亏损|归母|每股收益|同比|环比|营业/ },
  { type: '并购',   regex: /收购|并购|合并|重组|控股|参股|战略合作|资产注入|剥离|出售|定增|增发|股权转让|要约收购/ },
  { type: '政策',   regex: /政策|监管|规定|法规|政府|央行|财政部|证监会|发改委|工信部|补贴|扶持|批复|审批|许可|资质|国家队|专项/ },
  { type: '传闻',   regex: /据悉|消息称|知情人士|有消息|据报道|疑似|传出|据悉|或将|预计获批|拟/ },
  { type: '行业',   regex: /行业|板块|赛道|竞争|格局|产业链|供应链|新能源|半导体|AI|人工智能|芯片|光伏|储能|机器人|医疗|生物/ },
];

function classifyType(title = '') {
  for (const rule of TYPE_RULES) {
    if (rule.regex.test(title)) return rule.type;
  }
  return '行业';
}

// ─── 情绪打分 (+1 / 0 / -1) ──────────────────────────────────────────────────
const BULLISH_RE = /利好|涨停|新高|突破|买入|增持|超预期|大幅增长|同比增长|环比增|扭亏|获批|中标|签约|合作|补贴|政策支持|走强|拉升|底部|企稳|反弹|强势|看多|积极/;
const BEARISH_RE = /利空|跌停|新低|破位|卖出|减持|不及预期|大幅下降|同比下滑|净亏损|警示|处罚|违规|召回|下调|终止|失败|拖累|压力|风险|负面|下行|恶化/;

function scoreSentiment(title = '', type, rating) {
  // 研报评级优先
  if (rating) {
    if (/买入|强烈推荐|强推/.test(rating))         return  1;
    if (/增持|推荐|看好|跑赢市场/.test(rating))     return  1;
    if (/中性|持有|观望|同步表现/.test(rating))     return  0;
    if (/卖出|减持|回避|落后市场/.test(rating))     return -1;
  }
  // 黑天鹅类型强制 -1
  if (type === '黑天鹅') return -1;
  if (BULLISH_RE.test(title)) return  1;
  if (BEARISH_RE.test(title)) return -1;
  return 0;
}

// ─── 影响权重 (1~5) ───────────────────────────────────────────────────────────
function calcWeight(item, newsType) {
  let w = 2;
  // 来源权威性
  if (item.type === 'announcement')                 w += 2;  // 官方公告
  if (item.type === 'research')                     w += 1;  // 研报
  if (item.source?.includes('公告') || item.source?.includes('巨潮')) w += 1;
  // 新闻类型
  if (newsType === '财报')    w += 1;
  if (newsType === '政策')    w += 1;
  if (newsType === '并购')    w += 2;
  if (newsType === '黑天鹅')  w += 2;
  if (newsType === '传闻')    w -= 1;
  return Math.max(1, Math.min(5, w));
}

// ─── 日期过滤 ─────────────────────────────────────────────────────────────────
function isRecent(dateStr = '') {
  if (!dateStr) return false;
  try {
    const d = new Date(dateStr.slice(0, 10));
    return d >= cutoff && d <= today;
  } catch { return false; }
}

// ─── 模式识别 ─────────────────────────────────────────────────────────────────
function detectPatterns(tagged) {
  if (tagged.length === 0) return [];

  const sorted = [...tagged].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const half   = Math.max(1, Math.floor(sorted.length / 2));
  const recent = sorted.slice(0, half);
  const older  = sorted.slice(half);

  const scoreOf = arr => arr.reduce((s, i) => s + i.sentiment * i.weight, 0);
  const recentScore = scoreOf(recent);
  const olderScore  = older.length ? scoreOf(older) : 0;

  const patterns = [];

  // 趋势：同方向持续
  if (recentScore > 2 && olderScore >= 0) patterns.push('情绪持续增强↑(trend)');
  if (recentScore < -2 && olderScore <= 0) patterns.push('情绪持续走弱↓(trend)');

  // 反转：方向翻转
  if (recentScore > 2 && olderScore < -1)  patterns.push('情绪由空转多↑(reversal)');
  if (recentScore < -2 && olderScore > 1)  patterns.push('情绪由多转空↓(reversal)');

  // 情绪过热：全部正面无负面
  const posCount  = tagged.filter(i => i.sentiment > 0).length;
  const negCount  = tagged.filter(i => i.sentiment < 0).length;
  if (posCount >= 5 && negCount === 0) patterns.push('⚠️情绪过热(单边乐观,注意回调)');

  // 传闻主导 → 假利好风险
  const rumorCount = tagged.filter(i => i.type === '传闻').length;
  if (rumorCount / tagged.length > 0.5 && recentScore > 0) {
    patterns.push('⚠️传闻主导(假利好风险)');
  }

  // 疑似提前炒作：无财报/政策/并购硬催化，但评分高
  const hasFundamental = tagged.some(i =>
    ['财报', '政策', '并购'].includes(i.type) && i.sentiment > 0
  );
  if (!hasFundamental && recentScore > 4) {
    patterns.push('⚠️疑似提前炒作(无硬催化)');
  }

  // 情绪背离：有黑天鹅但仍有大量正面新闻
  const hasBlackSwan = tagged.some(i => i.type === '黑天鹅');
  if (hasBlackSwan && posCount > negCount) {
    patterns.push('⚠️情绪背离(黑天鹅被掩盖)');
  }

  return patterns;
}

// ─── 信号生成 ─────────────────────────────────────────────────────────────────
function generateSignal(score, patterns, tagged) {
  const hasRisk      = patterns.some(p => p.startsWith('⚠️'));
  const hasBlackSwan = tagged.some(i => i.type === '黑天鹅' && i.sentiment < 0);

  // 黑天鹅 → 优先规避
  if (hasBlackSwan) {
    return {
      signal: '🔴 No Trade / Short',
      strategy: '黑天鹅事件规避，等待事件明朗化再评估',
      suitableFor: '反转(等底部确认)',
      confidence: '高',
    };
  }

  if (score >= 8) {
    if (hasRisk) {
      return {
        signal: '⚠️ No Trade (情绪过热)',
        strategy: '情绪分过高但存在过热/炒作风险，等待回调低吸，不追高',
        suitableFor: '低吸(等回调)',
        confidence: '低(风险压制)',
      };
    }
    return {
      signal: '🟢 Long (强)',
      strategy: '多重利好共振，基本面+情绪双支撑，适合追涨或持有',
      suitableFor: '追涨 / 持有',
      confidence: '高',
    };
  }

  if (score >= 4) {
    const s = hasRisk
      ? { signal: '⚠️ Long (谨慎)', strategy: '情绪偏多但有风险信号，建议小仓位低吸', suitableFor: '低吸(控仓)', confidence: '中(有风险)' }
      : { signal: '🟢 Long (中)',   strategy: '情绪偏多，适合低吸或轻仓参与',          suitableFor: '低吸 / 轻仓追', confidence: '中' };
    return s;
  }

  if (score >= 1) {
    return {
      signal: '⚪ No Trade (微多)',
      strategy: '情绪轻微偏多，信号不足，以观望为主，等待更强催化',
      suitableFor: '观望',
      confidence: '低',
    };
  }

  if (score >= -2) {
    return {
      signal: '⚪ No Trade (中性)',
      strategy: '情绪中性，无明显方向，观望',
      suitableFor: '观望',
      confidence: '低',
    };
  }

  if (score >= -5) {
    return {
      signal: '🔴 No Trade / 规避',
      strategy: '情绪偏空，建议规避或减仓，等待情绪企稳',
      suitableFor: '反转(等企稳信号)',
      confidence: '中',
    };
  }

  return {
    signal: '🔴 Short / 规避',
    strategy: '情绪持续走弱，多重利空，建议离场或反向关注',
    suitableFor: '反转(等底部)',
    confidence: '高',
  };
}

// ─── 单股分析 ─────────────────────────────────────────────────────────────────
async function analyzeStock(symbol) {
  const code = extractCode(symbol);
  process.stdout.write(`  [${symbol}] 抓取中...`);

  try {
    const result = await searchNews({ symbol, source: 'news', count: NEWS_COUNT });

    // 合并新闻 + 研报
    const allNews = [
      ...result.news.map(n     => ({ ...n, category: 'news'     })),
      ...result.research.map(n => ({ ...n, category: 'research' })),
    ];

    // 过滤到最近7天
    const recent = allNews.filter(n => isRecent(n.date));
    process.stdout.write(` → ${recent.length}条近期新闻\n`);

    if (recent.length === 0) {
      return {
        symbol, name: result.name || code,
        score: 0, signal: '⚪ No Trade (无数据)',
        strategy: '近7天无新闻数据', suitableFor: '观望', confidence: '-',
        patterns: [], tagged: [], positive_factors: [], negative_factors: [],
        news_count: 0, sources_status: result.sources_status,
      };
    }

    // 打标签
    const tagged = recent.map(item => {
      const type      = classifyType(item.title || '');
      const sentiment = scoreSentiment(item.title || '', type, item.rating);
      const weight    = calcWeight(item, type);
      return { ...item, type, sentiment, weight };
    });

    // 情绪指数
    const score = tagged.reduce((s, i) => s + i.sentiment * i.weight, 0);

    // 模式识别
    const patterns = detectPatterns(tagged);

    // 信号
    const { signal, strategy, suitableFor, confidence } = generateSignal(score, patterns, tagged);

    // 利好/利空摘要（最多3条）
    const positive_factors = tagged
      .filter(i => i.sentiment > 0)
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 3)
      .map(i => `[${i.type}|权${i.weight}] ${(i.title || '').slice(0, 60)}`);

    const negative_factors = tagged
      .filter(i => i.sentiment < 0)
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 3)
      .map(i => `[${i.type}|权${i.weight}] ${(i.title || '').slice(0, 60)}`);

    return {
      symbol, name: result.name || code,
      score: Math.round(score * 10) / 10,
      signal, strategy, suitableFor, confidence, patterns,
      positive_factors, negative_factors,
      tagged: tagged.slice(0, 8),  // 报告用 top 8
      news_count: recent.length,
      sources_status: result.sources_status,
    };
  } catch (err) {
    process.stdout.write(` ❌ 错误: ${err.message}\n`);
    return {
      symbol, name: code, score: 0,
      signal: '⚪ No Trade (抓取失败)', strategy: err.message,
      suitableFor: '-', confidence: '-', patterns: [], tagged: [],
      positive_factors: [], negative_factors: [], news_count: 0,
    };
  }
}

// ─── 报告生成 ─────────────────────────────────────────────────────────────────
function buildReport(results) {
  const lines = [];
  const h = s => lines.push(s);

  h(`# A股新闻情绪分析 · 交易信号报告`);
  h(`**分析日期:** ${todayStr}　　**新闻窗口:** ${cutoffStr} ~ ${todayStr}（最近7天）`);
  h(`**股票池:** cn_selected.txt (${results.length}只)`);
  h('');

  // ── 汇总表 ──
  h('## 📊 汇总总览（按情绪分排序）');
  h('');
  h('| # | 股票 | 代码 | 情绪分 | 信号 | 适合策略 | 置信度 | 关键模式 |');
  h('|---|------|------|--------|------|----------|--------|---------|');
  results.forEach((r, idx) => {
    const sc  = r.score >= 0 ? `+${r.score}` : String(r.score);
    const pat = (r.patterns ?? []).map(p => p.replace(/⚠️/g, '⚠')).slice(0, 1).join('') || '-';
    h(`| ${idx+1} | ${r.name || '-'} | ${r.symbol} | **${sc}** | ${r.signal} | ${r.suitableFor || '-'} | ${r.confidence || '-'} | ${pat} |`);
  });
  h('');
  h('---');
  h('');

  // 分组
  const longStrong   = results.filter(r => r.signal.includes('Long (强)'));
  const longMid      = results.filter(r => r.signal.includes('Long (中)'));
  const longCautious = results.filter(r => r.signal.includes('Long (谨慎)'));
  const overheated   = results.filter(r => r.signal.includes('情绪过热'));
  const risks        = results.filter(r =>
    (r.patterns ?? []).some(p => p.startsWith('⚠️')) &&
    !r.signal.includes('情绪过热')
  );
  const shorts       = results.filter(r => r.signal.includes('Short') || r.signal.includes('规避'));
  const neutral      = results.filter(r => r.signal.startsWith('⚪'));

  // ── LONG ──
  if (longStrong.length) {
    h(`## 🟢 强多信号 (${longStrong.length}只) — 推荐优先关注`);
    h('');
    longStrong.forEach(r => h(formatDetail(r)));
  }
  if (longMid.length) {
    h(`## 🟢 中多信号 (${longMid.length}只) — 可轻仓参与`);
    h('');
    longMid.forEach(r => h(formatDetail(r)));
  }
  if (longCautious.length) {
    h(`## 🟡 谨慎多信号 (${longCautious.length}只) — 小仓+严控止损`);
    h('');
    longCautious.forEach(r => h(formatDetail(r)));
  }

  // ── 风险提示 ──
  if (overheated.length) {
    h(`## ⚠️ 情绪过热警告 (${overheated.length}只) — 不追高，等回调`);
    h('');
    overheated.forEach(r => h(formatDetail(r)));
  }
  if (risks.length) {
    h(`## ⚠️ 存在风险模式 (${risks.length}只) — 需鉴别真假信号`);
    h('');
    risks.forEach(r => h(formatDetail(r)));
  }

  // ── SHORT ──
  if (shorts.length) {
    h(`## 🔴 规避/做空信号 (${shorts.length}只)`);
    h('');
    shorts.forEach(r => h(formatDetail(r)));
  }

  // ── 观望 ──
  if (neutral.length) {
    h(`## ⚪ 观望信号 (${neutral.length}只)`);
    h('');
    neutral.forEach(r => {
      h(`### ${r.name} (${r.symbol})`);
      h(`- 情绪分: ${r.score} | 新闻数: ${r.news_count} | ${r.strategy}`);
      if ((r.patterns ?? []).length)
        h(`- 模式: ${r.patterns.join(' | ')}`);
      h('');
    });
  }

  // ── 附录：假信号识别指南 ──
  h('---');
  h('');
  h('## 📌 假信号识别备忘');
  h('');
  h('| 风险类型 | 判断依据 | 应对策略 |');
  h('|----------|----------|----------|');
  h('| 提前炒作 | 无硬催化(财报/政策/并购)，情绪分虚高 | 等实质性公告落地再入场 |');
  h('| 情绪过热 | 所有新闻全为正面，无一条负面 | 等回调确认支撑再考虑 |');
  h('| 假利好   | 传闻主导(>50%)，无官方公告确认 | 等公告确认前不进场 |');
  h('| 情绪背离 | 有黑天鹅但市场仍乐观 | 先规避，等事件明朗 |');
  h('');
  h('---');
  h(`*生成时间: ${new Date().toISOString()} | 数据来源: 东方财富/新浪财经/巨潮资讯/研报*`);

  return lines.join('\n');
}

function formatDetail(r) {
  const lines = [];
  const h = s => lines.push(s);
  const sc = r.score >= 0 ? `+${r.score}` : String(r.score);

  h(`### ${r.name} (${r.symbol})`);
  h('');
  h(`| 指标 | 详情 |`);
  h(`|------|------|`);
  h(`| 情绪分 | **${sc}** |`);
  h(`| 交易信号 | **${r.signal}** |`);
  h(`| 操作策略 | ${r.strategy} |`);
  h(`| 适合方式 | ${r.suitableFor} |`);
  h(`| 置信度 | ${r.confidence} |`);
  h(`| 分析新闻数 | ${r.news_count}条 |`);

  if ((r.patterns ?? []).length) {
    h(`| 识别模式 | ${r.patterns.join(' \\| ')} |`);
  }

  h('');

  if (r.positive_factors?.length) {
    h('**📈 利好因素:**');
    r.positive_factors.forEach(f => h(`- 🟢 ${f}`));
    h('');
  }
  if (r.negative_factors?.length) {
    h('**📉 利空因素:**');
    r.negative_factors.forEach(f => h(`- 🔴 ${f}`));
    h('');
  }

  if (r.tagged?.length) {
    h('**📰 关键新闻明细 (情绪标注):**');
    h('');
    h('| 日期 | 类型 | 情绪 | 权重 | 标题 |');
    h('|------|------|------|------|------|');
    r.tagged.forEach(item => {
      const emo   = item.sentiment > 0 ? '🟢+1' : item.sentiment < 0 ? '🔴-1' : '⚪ 0';
      const title = (item.title || '').slice(0, 50).replace(/\|/g, '｜');
      h(`| ${item.date || '-'} | ${item.type} | ${emo} | ${item.weight} | ${title} |`);
    });
    h('');
  }

  h('---');
  h('');
  return lines.join('\n');
}

// ─── 主流程 ───────────────────────────────────────────────────────────────────
async function main() {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║   A股新闻情绪量化分析 → 可交易信号  v1.0               ║');
  console.log(`║   分析窗口: ${cutoffStr} ~ ${todayStr}                    ║`);
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');

  const content = readFileSync(SYMBOLS_FILE, 'utf8').trim();
  const symbols = content.split(',').map(s => s.trim()).filter(Boolean);
  console.log(`✅ 加载 ${symbols.length} 只股票\n`);

  const results = [];
  const batches  = Math.ceil(symbols.length / BATCH_SIZE);

  for (let i = 0; i < symbols.length; i += BATCH_SIZE) {
    const batch = symbols.slice(i, i + BATCH_SIZE);
    console.log(`\n┌── 批次 ${Math.floor(i / BATCH_SIZE) + 1}/${batches} [${batch.length}只] ─────────────────────────`);

    const settled = await Promise.allSettled(batch.map(s => analyzeStock(s)));
    settled.forEach(r => {
      if (r.status === 'fulfilled') results.push(r.value);
      else console.warn('  ⚠ 异常:', r.reason?.message);
    });

    console.log('└──────────────────────────────────────────────────────────');

    // 批次间短暂缓冲，降低限流风险
    if (i + BATCH_SIZE < symbols.length) await new Promise(r => setTimeout(r, 800));
  }

  // 按情绪分降序排列
  results.sort((a, b) => b.score - a.score);

  // ── 终端摘要 ──
  console.log('\n');
  console.log('═'.repeat(70));
  console.log('📊 交易信号汇总 (按情绪分降序)');
  console.log('═'.repeat(70));
  results.forEach((r, i) => {
    const sc  = String(r.score >= 0 ? `+${r.score}` : r.score).padStart(5);
    const nm  = (r.name || r.symbol).padEnd(10).slice(0, 10);
    const sym = r.symbol.padEnd(15);
    const pat = (r.patterns ?? []).filter(p => p.startsWith('⚠️')).map(p => p.slice(3, 15)).join('|');
    console.log(`${String(i+1).padStart(2)}. ${nm} ${sym} 分:${sc}  ${r.signal}  ${pat}`);
  });

  // ── 汇总行 ──
  const longs  = results.filter(r => r.signal.includes('Long') && !r.signal.includes('谨慎'));
  const alerts = results.filter(r => (r.patterns ?? []).some(p => p.startsWith('⚠️')));
  const shorts = results.filter(r => r.signal.includes('Short') || r.signal.includes('规避'));

  console.log('\n');
  console.log(`🟢 做多候选: ${longs.map(r => r.name || r.symbol).join(', ') || '无'}`);
  console.log(`⚠️  风险股票: ${alerts.map(r => r.name || r.symbol).join(', ') || '无'}`);
  console.log(`🔴 规避股票: ${shorts.map(r => r.name || r.symbol).join(', ') || '无'}`);

  // ── 写报告 ──
  const report = buildReport(results);
  writeFileSync(OUTPUT_MD, report, 'utf8');
  console.log(`\n✅ 详细报告已保存: ${OUTPUT_MD}`);

  // ── 写下游契约 JSON（被 4-combined 阶段消费）──
  const json = {
    generated_at: new Date().toISOString(),
    market: 'cn',
    source: 'src/core/webNews.js',
    window: { from: cutoffStr, to: todayStr, days: DAYS_BACK },
    stocks: Object.fromEntries(results.map(r => [r.symbol, {
      name: r.name,
      score: r.score,
      signal: r.signal,
      strategy: r.strategy,
      suitable_for: r.suitableFor,
      confidence: r.confidence,
      patterns: r.patterns ?? [],
      positive_factors: r.positive_factors ?? [],
      negative_factors: r.negative_factors ?? [],
      news_count: r.news_count,
      top_news: (r.tagged ?? []).slice(0, 5).map(t => ({
        date: t.date || null,
        title: (t.title || '').slice(0, 100),
        type: t.type,
        sentiment: t.sentiment,
        weight: t.weight,
      })),
    }])),
  };
  writeFileSync(OUTPUT_JSON, JSON.stringify(json, null, 2), 'utf8');
  console.log(`✅ 下游契约 JSON 已保存: ${OUTPUT_JSON}\n`);
}

main().catch(err => {
  console.error('致命错误:', err);
  process.exit(1);
});
