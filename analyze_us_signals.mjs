#!/usr/bin/env node
/**
 * 美股推荐股票新闻信号分析
 * 读取 watchlist/us_selected.txt，通过 usNews.js 抓取真实新闻，
 * 打标签 → 构建情绪指数 → 识别关键模式 → 输出可交易信号
 * 输出: watchlist/us_news_signals.md
 */

import { readFileSync, writeFileSync } from 'fs';
import { searchUSNews } from './src/core/usNews.js';

// ── 新闻类型关键词 ──────────────────────────────────────────────
const NEWS_TYPE_KEYWORDS = {
  earnings: ['earnings', 'revenue', 'profit', 'eps', 'quarterly', 'beat', 'miss', 'guidance', 'outlook', 'results', 'fiscal'],
  merger:   ['merger', 'acquisition', 'deal', 'buyout', 'stake', 'takeover', 'offering', 'ipo', 'divest'],
  policy:   ['regulation', 'sec', 'fed', 'policy', 'law', 'rule', 'government', 'compliance', 'tariff', 'sanction'],
  industry: ['industry', 'sector', 'market', 'demand', 'supply', 'product', 'launch', 'innovation', 'competition'],
  blackswan:['scandal', 'fraud', 'lawsuit', 'bankruptcy', 'investigation', 'crisis', 'recall', 'hack'],
  rumor:    ['rumor', 'speculation', 'reportedly', 'allegedly', 'expected to', 'may soon', 'sources say', 'could be'],
};

// ── 情绪关键词（分级）──────────────────────────────────────────
const SENTIMENT_KW = {
  bullish: {
    strong: ['surge', 'soar', 'breakout', 'rally', 'skyrocket', 'all-time high', 'explosive', 'record high', 'beats expectations'],
    medium: ['bullish', 'buy', 'upgrade', 'outperform', 'gain', 'rise', 'positive', 'strong', 'beat', 'exceed', 'raised guidance'],
    weak:   ['hold', 'accumulate', 'opportunity', 'potential', 'optimistic', 'favorable', 'steady', 'recovery'],
  },
  bearish: {
    strong: ['crash', 'plunge', 'tank', 'collapse', 'dump', 'bloodbath', 'disaster', 'rout', 'meltdown'],
    medium: ['bearish', 'sell', 'downgrade', 'underperform', 'loss', 'fall', 'negative', 'weak', 'misses', 'lowered guidance'],
    weak:   ['caution', 'risk', 'concern', 'warning', 'decline', 'pressure', 'slowdown', 'headwind'],
  },
};

// ── 虚假利好 / 提前炒作 ─────────────────────────────────────────
const HYPE_INDICATORS = [
  'rumor has it', 'sources say', 'could potentially', 'may soon',
  'speculation', 'unconfirmed', 'might be', 'could be', 'pre-hype',
  'early stage', 'potential partnership', 'in talks',
];

// ── 过热标志 ────────────────────────────────────────────────────
const OVERHEAT_INDICATORS = [
  'everyone talking', 'viral', 'going crazy', 'parabolic',
  'unstoppable', 'guaranteed', 'can\'t lose', 'to the moon',
];

// ── 最近5天过滤 ─────────────────────────────────────────────────
function isRecent(dateStr, days = 5) {
  if (!dateStr) return true;
  const d = new Date(dateStr);
  const cutoff = new Date(Date.now() - days * 86400000);
  return d >= cutoff;
}

// ── 单条新闻分析 ────────────────────────────────────────────────
function analyzeItem(item) {
  const text = ((item.title || '') + ' ' + (item.content || '')).toLowerCase();

  // 类型
  let newsType = 'other', typeScore = 0;
  for (const [type, kws] of Object.entries(NEWS_TYPE_KEYWORDS)) {
    const hits = kws.filter(k => text.includes(k)).length;
    if (hits > typeScore) { typeScore = hits; newsType = type; }
  }

  // 情绪评分
  let score = 0;
  for (const kw of SENTIMENT_KW.bullish.strong) if (text.includes(kw)) score += 3;
  for (const kw of SENTIMENT_KW.bullish.medium) if (text.includes(kw)) score += 2;
  for (const kw of SENTIMENT_KW.bullish.weak)   if (text.includes(kw)) score += 1;
  for (const kw of SENTIMENT_KW.bearish.strong) if (text.includes(kw)) score -= 3;
  for (const kw of SENTIMENT_KW.bearish.medium) if (text.includes(kw)) score -= 2;
  for (const kw of SENTIMENT_KW.bearish.weak)   if (text.includes(kw)) score -= 1;

  // 权重
  const weightMap = { earnings: 5, merger: 4, blackswan: 4, policy: 3, industry: 3, rumor: 1, other: 2 };
  const weight = weightMap[newsType] || 2;

  // 虚假利好
  const fakeHits = HYPE_INDICATORS.filter(h => text.includes(h));
  const isFake = fakeHits.length > 0;
  if (isFake) score = +(score * 0.5).toFixed(2);

  // 过热
  const isOverheat = OVERHEAT_INDICATORS.some(h => text.includes(h));

  // 情绪标签
  const sentiment = score > 0 ? +1 : score < 0 ? -1 : 0;

  return {
    title:    item.title,
    date:     item.date || '',
    source:   item.source || 'unknown',
    type:     newsType,
    sentiment,
    weight,
    weighted_score: +(score * weight).toFixed(2),
    is_fake:  isFake,
    is_overheat: isOverheat,
    fake_hints: fakeHits,
    engagement: (item.upvotes || item.likes || 0) + (item.comments || item.replies || 0),
  };
}

// ── 情绪指数构建 ────────────────────────────────────────────────
function buildSentimentIndex(items) {
  if (!items || items.length === 0) return null;

  const analyzed = items.map(analyzeItem);
  const total = analyzed.length;
  const totalWScore = analyzed.reduce((s, n) => s + n.weighted_score, 0);
  const avgScore = +(totalWScore / total).toFixed(2);

  const bull = analyzed.filter(n => n.sentiment > 0).length;
  const bear = analyzed.filter(n => n.sentiment < 0).length;
  const neu  = analyzed.filter(n => n.sentiment === 0).length;
  const fake = analyzed.filter(n => n.is_fake).length;
  const heat = analyzed.filter(n => n.is_overheat).length;

  // 关键模式
  const patterns = [];

  if (total >= 3) {
    const sc = analyzed.slice(-3).map(n => n.weighted_score);
    if (sc[0] < sc[1] && sc[1] < sc[2])
      patterns.push({ type: 'trend', description: '情绪持续增强 (Trend)', implication: '看涨动能积累' });
    else if (sc[0] > sc[1] && sc[1] > sc[2])
      patterns.push({ type: 'trend_down', description: '情绪持续减弱 (Trend↓)', implication: '看跌压力加大' });
  }

  if (total >= 2) {
    const prevAvg = analyzed.slice(0, -1).reduce((s, n) => s + n.weighted_score, 0) / (total - 1);
    const last = analyzed[total - 1].weighted_score;
    if (prevAvg > 0.5 && last < -0.5)
      patterns.push({ type: 'reversal_bear', description: '情绪反转为看跌 (Reversal)', implication: '注意反转风险' });
    else if (prevAvg < -0.5 && last > 0.5)
      patterns.push({ type: 'reversal_bull', description: '情绪反转为看涨 (Reversal)', implication: '可能低吸机会' });
  }

  if (fake / total > 0.3)
    patterns.push({ type: 'high_fake', description: `虚假/传闻占比 ${(fake/total*100).toFixed(0)}%`, implication: '谨防提前炒作' });

  if (heat > 0)
    patterns.push({ type: 'overheat', description: `情绪过热信号 x${heat}`, implication: '高位回调风险' });

  // 顶部5条新闻（按热度+权重）
  const topNews = [...analyzed]
    .sort((a, b) => (b.engagement * b.weight) - (a.engagement * a.weight))
    .slice(0, 5);

  return {
    total, avgScore, totalWScore: +totalWScore.toFixed(2),
    bull, bear, neu, fake, heat,
    bull_pct: (bull/total*100).toFixed(0) + '%',
    bear_pct: (bear/total*100).toFixed(0) + '%',
    neu_pct:  (neu/total*100).toFixed(0) + '%',
    fake_pct: (fake/total*100).toFixed(0) + '%',
    patterns,
    topNews,
  };
}

// ── 交易信号生成 ────────────────────────────────────────────────
function generateSignal(symbol, idx) {
  if (!idx) return { signal: 'NO_TRADE', confidence: 0, strategy: '数据不足', risk: '未知', reasons: [] };

  const { avgScore, fake, total, heat, patterns } = idx;
  const fakeRatio = fake / total;
  const hasOverheat = heat > 0 || patterns.some(p => p.type === 'overheat');
  const hasReversal = patterns.some(p => p.type.includes('reversal'));
  const hasTrend = patterns.find(p => p.type === 'trend');

  let signal = 'NO_TRADE', confidence = 50, strategy = '观望', risk = '低';
  const reasons = [];

  if (avgScore > 1.5 && fakeRatio < 0.3 && !hasOverheat) {
    signal = 'LONG'; confidence = Math.min(85, 60 + avgScore * 10);
    strategy = idx.bull_pct > '65' ? '追涨' : '低吸'; risk = '低';
    reasons.push(`情绪指数 ${avgScore} 强看涨`);
    if (hasTrend) reasons.push('情绪趋势持续增强');
  } else if (avgScore > 0.5 && fakeRatio < 0.4) {
    signal = 'LONG'; confidence = Math.min(70, 50 + avgScore * 15);
    strategy = '低吸'; risk = '中';
    reasons.push(`情绪指数 ${avgScore} 温和看涨`);
  } else if (avgScore < -1.5) {
    signal = 'SHORT'; confidence = Math.min(80, 60 + Math.abs(avgScore) * 10);
    strategy = '逢高做空'; risk = '低';
    reasons.push(`情绪指数 ${avgScore} 强看跌`);
  } else if (avgScore < -0.5) {
    signal = 'SHORT'; confidence = Math.min(65, 45 + Math.abs(avgScore) * 15);
    strategy = '逢高做空'; risk = '中';
    reasons.push(`情绪指数 ${avgScore} 温和看跌`);
  } else if (hasReversal) {
    signal = avgScore >= 0 ? 'LONG' : 'SHORT';
    confidence = Math.min(60, 40 + Math.abs(avgScore) * 10);
    strategy = '反转'; risk = '中';
    reasons.push('识别到情绪反转机会');
  }

  // 风险调整
  if (fakeRatio > 0.4) {
    confidence = Math.max(20, confidence - 25);
    risk = '高';
    reasons.push(`⚠️ 虚假利好占比 ${(fakeRatio*100).toFixed(0)}%，提前炒作风险`);
  }
  if (hasOverheat) {
    confidence = Math.max(20, confidence - 20);
    risk = '高';
    reasons.push('⚠️ 情绪过热，高位回调风险');
  }
  if (total < 3) {
    confidence = Math.max(0, confidence - 20);
    reasons.push('新闻样本较少，可信度降低');
  }

  return { signal, confidence: Math.round(confidence), strategy, risk, reasons };
}

// ── Markdown 报告 ───────────────────────────────────────────────
function renderMarkdown(results, date) {
  const lines = [];
  lines.push(`# 美股推荐股票 - 新闻情绪信号报告`);
  lines.push(`> 生成时间: ${date} | 数据窗口: 近5天`);
  lines.push('');

  // 汇总
  const longs  = results.filter(r => r.signal.signal === 'LONG');
  const shorts = results.filter(r => r.signal.signal === 'SHORT');
  const no     = results.filter(r => r.signal.signal === 'NO_TRADE');
  lines.push(`## 汇总`);
  lines.push(`| 信号 | 数量 |`);
  lines.push(`|------|------|`);
  lines.push(`| ✅ LONG  | ${longs.length} |`);
  lines.push(`| ❌ SHORT | ${shorts.length} |`);
  lines.push(`| ⏸️ NO_TRADE | ${no.length} |`);
  lines.push('');

  // 详情
  lines.push(`## 个股详细信号`);
  lines.push('');

  for (const r of results) {
    const { symbol, idx, signal } = r;
    const ticker = symbol.replace(/^(NASDAQ:|NYSE:)/, '');
    const emoji = signal.signal === 'LONG' ? '✅' : signal.signal === 'SHORT' ? '❌' : '⏸️';

    lines.push(`### ${emoji} ${ticker} — ${signal.signal} | 置信度 ${signal.confidence}% | 策略: ${signal.strategy} | 风险: ${signal.risk}`);

    if (idx) {
      lines.push(`**情绪指数**: ${idx.avgScore}  |  看涨 ${idx.bull_pct} / 看跌 ${idx.bear_pct} / 中性 ${idx.neu_pct}  |  虚假利好 ${idx.fake_pct}  |  新闻条数 ${idx.total}`);
      lines.push('');

      if (idx.patterns.length > 0) {
        lines.push('**关键模式**:');
        idx.patterns.forEach(p => lines.push(`- ⚡ **${p.description}** → ${p.implication}`));
        lines.push('');
      }

      if (signal.reasons.length > 0) {
        lines.push('**信号原因**:');
        signal.reasons.forEach(r => lines.push(`- ${r}`));
        lines.push('');
      }

      if (idx.topNews.length > 0) {
        lines.push('**近期重要新闻 (Top 5)**:');
        idx.topNews.forEach((n, i) => {
          const sentLabel = n.sentiment > 0 ? '📈+1' : n.sentiment < 0 ? '📉-1' : '➖ 0';
          const fakeFlag = n.is_fake ? ' ⚠️假' : '';
          const heatFlag = n.is_overheat ? ' 🔥过热' : '';
          lines.push(`${i+1}. [${n.type}] ${sentLabel} W${n.weight}${fakeFlag}${heatFlag} | ${n.date} | ${n.source}`);
          lines.push(`   > ${n.title}`);
        });
        lines.push('');
      }
    } else {
      lines.push('> 无有效新闻数据');
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  return lines.join('\n');
}

// ── 主程序 ──────────────────────────────────────────────────────
async function main() {
  // 读取股票列表
  const raw = readFileSync('./watchlist/us_selected.txt', 'utf8').trim();
  const symbols = raw.split(',').map(s => s.trim()).filter(Boolean);

  console.log(`\n${'='.repeat(80)}`);
  console.log(`🔍 美股新闻情绪信号分析 — ${symbols.length} 只股票`);
  console.log(`${'='.repeat(80)}\n`);

  const results = [];

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    const ticker = symbol.replace(/^(NASDAQ:|NYSE:|CBOE:)/, '');
    process.stdout.write(`[${i+1}/${symbols.length}] ${ticker.padEnd(8)} 抓取新闻...`);

    let idx = null;
    try {
      const data = await searchUSNews({ symbol: ticker, count: 15 });
      const allNews = [
        ...(data.news  || []).filter(n => isRecent(n.date)),
        ...(data.social || []).filter(n => isRecent(n.date)),
        ...(data.forum  || []).filter(n => isRecent(n.date)),
      ];
      process.stdout.write(` ${allNews.length} 条有效新闻`);
      idx = buildSentimentIndex(allNews);
    } catch (e) {
      process.stdout.write(` 抓取失败: ${e.message}`);
    }

    const signal = generateSignal(symbol, idx);
    results.push({ symbol, idx, signal });

    const em = signal.signal === 'LONG' ? '✅' : signal.signal === 'SHORT' ? '❌' : '⏸️ ';
    console.log(`  → ${em} ${signal.signal} (${signal.confidence}%)`);
  }

  // 按置信度排序
  results.sort((a, b) => b.signal.confidence - a.signal.confidence);

  // 输出 Markdown
  const date = new Date().toISOString().replace('T', ' ').slice(0, 16);
  const md = renderMarkdown(results, date);
  writeFileSync('./watchlist/us_news_signals.md', md, 'utf8');

  // 控制台汇总
  console.log(`\n${'='.repeat(80)}`);
  console.log('📊 信号汇总 (按置信度排序)\n');
  results.forEach((r, i) => {
    const em = r.signal.signal === 'LONG' ? '✅' : r.signal.signal === 'SHORT' ? '❌' : '⏸️ ';
    const ticker = r.symbol.replace(/^(NASDAQ:|NYSE:|CBOE:)/, '');
    const score  = r.idx ? r.idx.avgScore : 'N/A';
    console.log(`${String(i+1).padStart(2)}. ${em} ${ticker.padEnd(8)} | ${r.signal.signal.padEnd(8)} | 置信:${r.signal.confidence}% | 情绪:${String(score).padStart(5)} | ${r.signal.strategy}`);
  });

  const longs  = results.filter(r => r.signal.signal === 'LONG').length;
  const shorts = results.filter(r => r.signal.signal === 'SHORT').length;
  const no     = results.filter(r => r.signal.signal === 'NO_TRADE').length;
  console.log(`\n✅ LONG: ${longs}  ❌ SHORT: ${shorts}  ⏸️ NO_TRADE: ${no}`);
  console.log(`📄 报告已保存: watchlist/us_news_signals.md`);
  console.log(`${'='.repeat(80)}\n`);
}

main().catch(console.error);
