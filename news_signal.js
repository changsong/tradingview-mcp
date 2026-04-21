#!/usr/bin/env node
/**
 * 新闻情绪分析 → 可交易信号
 * 用法: node news_signal.js [--symbols=SSE:603162,...] [--output=result.json]
 */
import { readFileSync, writeFileSync } from 'fs';
import { searchNews } from './src/core/webNews.js';

// ── 配置 ──────────────────────────────────────────────
const DAYS_WINDOW = 5; // 只看最近5天
const MIN_WEIGHT_THRESHOLD = 2; // 低于此权重的新闻过滤掉

// 新闻类型识别规则
const TYPE_RULES = [
  { type: '政策', keywords: ['政策', '监管', '证监会', '国务院', '发改委', '工信部', '补贴', '扶持', '规划', '双碳', '新能源', '国家'] },
  { type: '财报', keywords: ['业绩', '净利润', '营收', '年报', '季报', '预增', '预减', '扭亏', '亏损', '增长', '下滑', '分红', '派息'] },
  { type: '并购', keywords: ['收购', '并购', '重组', '合并', '入股', '战略合作', '签约', '中标', '定增', '股权'] },
  { type: '行业', keywords: ['行业', '赛道', '市场', '需求', '供给', '竞争', '格局', '趋势', '景气', '周期'] },
  { type: '黑天鹅', keywords: ['诉讼', '处罚', '违规', '造假', '退市', '风险', '事故', '危机', '暴雷', '爆雷', '调查'] },
  { type: '传闻', keywords: ['传', '据悉', '消息称', '有消息', '疑似', '或将', '可能', '预计', '预期'] },
];

// 情绪关键词权重
const BULLISH_KW = [
  { kw: '涨停', w: 5 }, { kw: '预增', w: 4 }, { kw: '大幅增长', w: 4 },
  { kw: '买入', w: 3 }, { kw: '强烈推荐', w: 4 }, { kw: '利好', w: 3 },
  { kw: '突破', w: 3 }, { kw: '新高', w: 3 }, { kw: '中标', w: 3 },
  { kw: '增持', w: 3 }, { kw: '上涨', w: 2 }, { kw: '看好', w: 2 },
  { kw: '扭亏', w: 4 }, { kw: '分红', w: 2 }, { kw: '补贴', w: 2 },
  { kw: '合同', w: 2 }, { kw: '订单', w: 2 }, { kw: '盈利', w: 2 },
];
const BEARISH_KW = [
  { kw: '跌停', w: 5 }, { kw: '预减', w: 4 }, { kw: '大幅下滑', w: 4 },
  { kw: '卖出', w: 3 }, { kw: '利空', w: 3 }, { kw: '破位', w: 3 },
  { kw: '亏损', w: 3 }, { kw: '处罚', w: 4 }, { kw: '违规', w: 4 },
  { kw: '减持', w: 3 }, { kw: '下跌', w: 2 }, { kw: '看空', w: 2 },
  { kw: '退市', w: 5 }, { kw: '诉讼', w: 3 }, { kw: '调查', w: 3 },
  { kw: '暴雷', w: 5 }, { kw: '爆雷', w: 5 }, { kw: '造假', w: 5 },
];

// ── 工具函数 ──────────────────────────────────────────
function isWithinDays(dateStr, days) {
  if (!dateStr) return true; // 无日期默认保留
  try {
    const d = new Date(dateStr.replace(/\//g, '-'));
    const now = new Date();
    return (now - d) / 86400000 <= days;
  } catch { return true; }
}

function detectType(text) {
  for (const rule of TYPE_RULES) {
    if (rule.keywords.some(kw => text.includes(kw))) return rule.type;
  }
  return '行业';
}

function scoreSentiment(text) {
  let score = 0;
  let maxW = 0;
  for (const { kw, w } of BULLISH_KW) {
    if (text.includes(kw)) { score += w; maxW = Math.max(maxW, w); }
  }
  for (const { kw, w } of BEARISH_KW) {
    if (text.includes(kw)) { score -= w; maxW = Math.max(maxW, w); }
  }
  const emotion = score > 0 ? 1 : score < 0 ? -1 : 0;
  const weight = Math.min(5, Math.max(1, maxW || 1));
  return { emotion, weight, rawScore: score };
}

function tagNews(items, type_hint) {
  return items
    .filter(item => item.title && isWithinDays(item.date, DAYS_WINDOW))
    .map(item => {
      const text = (item.title || '') + ' ' + (item.snippet || item.content || '');
      const { emotion, weight, rawScore } = scoreSentiment(text);
      const type = type_hint || detectType(text);
      return {
        title: item.title,
        source: item.source || '未知',
        date: item.date || '',
        type,
        emotion,   // +1 / 0 / -1
        weight,    // 1~5
        contribution: emotion * weight,
        rating: item.rating || null,
        url: item.url || null,
        _rawScore: rawScore,
      };
    })
    .filter(item => item.weight >= MIN_WEIGHT_THRESHOLD || item.type === '财报' || item.type === '政策' || item.type === '黑天鹅');
}

function buildSentimentIndex(tagged) {
  const score = tagged.reduce((s, n) => s + n.contribution, 0);
  const bullish = tagged.filter(n => n.emotion === 1);
  const bearish = tagged.filter(n => n.emotion === -1);
  const neutral = tagged.filter(n => n.emotion === 0);
  return {
    sentiment_score: score,
    bullish_count: bullish.length,
    bearish_count: bearish.length,
    neutral_count: neutral.length,
    total: tagged.length,
    bullish_ratio: tagged.length ? ((bullish.length / tagged.length) * 100).toFixed(1) + '%' : '0%',
    bearish_ratio: tagged.length ? ((bearish.length / tagged.length) * 100).toFixed(1) + '%' : '0%',
    neutral_ratio: tagged.length ? ((neutral.length / tagged.length) * 100).toFixed(1) + '%' : '0%',
    overall: score > 3 ? '看涨' : score < -3 ? '看跌' : '中性',
  };
}

function detectPatterns(tagged, sentimentIndex) {
  const patterns = [];

  // 情绪持续增强：最近3条都是正向
  const recent3 = tagged.slice(0, 3);
  if (recent3.length >= 3 && recent3.every(n => n.emotion === 1)) {
    patterns.push({ pattern: 'trend_bullish', desc: '情绪持续增强（近3条均看涨）' });
  }
  if (recent3.length >= 3 && recent3.every(n => n.emotion === -1)) {
    patterns.push({ pattern: 'trend_bearish', desc: '情绪持续走弱（近3条均看跌）' });
  }

  // 情绪反转：前半段与后半段情绪相反
  if (tagged.length >= 4) {
    const half = Math.floor(tagged.length / 2);
    const oldScore = tagged.slice(half).reduce((s, n) => s + n.contribution, 0);
    const newScore = tagged.slice(0, half).reduce((s, n) => s + n.contribution, 0);
    if (oldScore < 0 && newScore > 0) patterns.push({ pattern: 'reversal_bullish', desc: '情绪反转：由空转多' });
    if (oldScore > 0 && newScore < 0) patterns.push({ pattern: 'reversal_bearish', desc: '情绪反转：由多转空' });
  }

  // 黑天鹅检测
  const blackSwan = tagged.filter(n => n.type === '黑天鹅');
  if (blackSwan.length > 0) {
    patterns.push({ pattern: 'black_swan', desc: `发现 ${blackSwan.length} 条黑天鹅事件`, items: blackSwan.map(n => n.title) });
  }

  // 高权重利空
  const heavyBearish = tagged.filter(n => n.emotion === -1 && n.weight >= 4);
  if (heavyBearish.length > 0) {
    patterns.push({ pattern: 'heavy_bearish', desc: `${heavyBearish.length} 条高权重利空`, items: heavyBearish.map(n => n.title) });
  }

  return patterns;
}

function generateSignal(sentimentIndex, patterns, tagged, rawData) {
  const { sentiment_score, bullish_count, bearish_count } = sentimentIndex;
  const hasBlackSwan = patterns.some(p => p.pattern === 'black_swan');
  const hasHeavyBearish = patterns.some(p => p.pattern === 'heavy_bearish');
  const hasTrendBullish = patterns.some(p => p.pattern === 'trend_bullish');
  const hasReversalBullish = patterns.some(p => p.pattern === 'reversal_bullish');
  const hasReversalBearish = patterns.some(p => p.pattern === 'reversal_bearish');

  // 研报评级统计
  const ratings = (rawData.research || []).map(r => r.rating).filter(Boolean);
  const strongBuy = ratings.filter(r => r.includes('买入') || r.includes('推荐')).length;
  const sell = ratings.filter(r => r.includes('卖出') || r.includes('减持')).length;

  // 风险检测
  const risks = [];
  const opportunities = [];

  if (hasBlackSwan) risks.push('存在黑天鹅事件，需高度警惕');
  if (hasHeavyBearish) risks.push('高权重利空新闻，短期压力大');
  if (hasReversalBearish) risks.push('情绪由多转空，可能见顶');
  if (sell > 0) risks.push(`${sell} 家机构给出卖出/减持评级`);

  if (strongBuy >= 2) opportunities.push(`${strongBuy} 家机构强烈推荐买入`);
  if (hasTrendBullish) opportunities.push('情绪持续增强，动能良好');
  if (hasReversalBullish) opportunities.push('情绪由空转多，可能见底反转');
  if (sentiment_score >= 5) opportunities.push('综合情绪分高，市场认可度强');

  // 是否提前炒作
  const preHype = tagged.filter(n => n.type === '传闻' && n.emotion === 1).length >= 2;
  // 情绪过热
  const overHeat = bullish_count >= 5 && bearish_count === 0;
  // 假利好（传闻多但无实质财报/政策支撑）
  const fakePositive = preHype && tagged.filter(n => n.type === '财报' || n.type === '政策').length === 0;

  // 信号决策
  let signal, signal_type, reason;

  if (hasBlackSwan || hasHeavyBearish || hasReversalBearish) {
    signal = 'Short';
    signal_type = hasBlackSwan ? '规避风险' : '趋势做空';
    reason = risks.join('；');
  } else if (fakePositive) {
    signal = 'No Trade';
    signal_type = '假利好规避';
    reason = '传闻驱动，缺乏实质支撑，存在假利好风险';
  } else if (overHeat) {
    signal = 'No Trade';
    signal_type = '情绪过热';
    reason = '情绪过热，追涨风险高，等待回调';
  } else if (sentiment_score >= 4 || (strongBuy >= 2 && sentiment_score >= 0)) {
    signal = 'Long';
    signal_type = hasTrendBullish ? '追涨' : hasReversalBullish ? '反转低吸' : '低吸';
    reason = opportunities.join('；') || '综合情绪偏多';
  } else if (sentiment_score <= -2) {
    signal = 'Short';
    signal_type = '趋势做空';
    reason = risks.join('；') || '综合情绪偏空';
  } else {
    signal = 'No Trade';
    signal_type = '观望';
    reason = '情绪中性，信号不明确，等待催化剂';
  }

  return {
    signal,           // Long / Short / No Trade
    signal_type,      // 追涨 / 低吸 / 反转 / 规避 / 观望
    reason,
    risks,
    opportunities,
    warnings: {
      pre_hype: preHype,
      over_heat: overHeat,
      fake_positive: fakePositive,
    },
  };
}

// ── 主流程 ────────────────────────────────────────────
async function analyzeStock(symbol) {
  console.log(`\n[${symbol}] 抓取新闻...`);
  let rawData;
  try {
    rawData = await searchNews({ symbol, count: 15 });
  } catch (e) {
    console.error(`  ✗ 抓取失败: ${e.message}`);
    return null;
  }

  // 合并所有新闻并打标签
  const researchTagged = tagNews(rawData.research || [], '财报');
  const newsTagged = tagNews(rawData.news || [], null);
  const forumTagged = tagNews(rawData.forum || [], null);
  const allTagged = [...researchTagged, ...newsTagged, ...forumTagged]
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 20); // 最多保留20条高质量新闻

  const sentimentIndex = buildSentimentIndex(allTagged);
  const patterns = detectPatterns(allTagged, sentimentIndex);
  const tradeSignal = generateSignal(sentimentIndex, patterns, allTagged, rawData);

  const result = {
    symbol,
    name: rawData.name || symbol,
    analysis_time: new Date().toISOString(),
    news_window_days: DAYS_WINDOW,
    news_count: {
      research: researchTagged.length,
      news: newsTagged.length,
      forum: forumTagged.length,
      total: allTagged.length,
    },
    sentiment_index: sentimentIndex,
    patterns,
    trade_signal: tradeSignal,
    top_news: allTagged.slice(0, 8).map(n => ({
      title: n.title,
      date: n.date,
      source: n.source,
      type: n.type,
      emotion: n.emotion === 1 ? '看涨(+1)' : n.emotion === -1 ? '看跌(-1)' : '中性(0)',
      weight: n.weight,
      contribution: n.contribution,
      rating: n.rating,
    })),
  };

  const sig = tradeSignal.signal;
  const emoji = sig === 'Long' ? '🟢' : sig === 'Short' ? '🔴' : '⚪';
  console.log(`  ${emoji} ${sig} [${tradeSignal.signal_type}] | 情绪分: ${sentimentIndex.sentiment_score} | ${sentimentIndex.overall}`);
  console.log(`  原因: ${tradeSignal.reason}`);
  if (tradeSignal.warnings.pre_hype) console.log('  ⚠️  警告: 疑似提前炒作');
  if (tradeSignal.warnings.over_heat) console.log('  ⚠️  警告: 情绪过热');
  if (tradeSignal.warnings.fake_positive) console.log('  ⚠️  警告: 疑似假利好');

  return result;
}

async function main() {
  // 读取股票列表
  let symbols = [];
  const symArg = process.argv.find(a => a.startsWith('--symbols='));
  if (symArg) {
    const val = symArg.slice('--symbols='.length);
    if (val.startsWith('filepath=')) {
      const content = readFileSync(val.slice('filepath='.length), 'utf8').trim();
      symbols = content.split(',').map(s => s.trim()).filter(Boolean);
    } else {
      symbols = val.split(',').map(s => s.trim()).filter(Boolean);
    }
  } else {
    // 默认读 cn_selected.txt
    const content = readFileSync('./watchlist/cn_selected.txt', 'utf8').trim();
    symbols = content.split(',').map(s => s.trim()).filter(Boolean);
  }

  const outputArg = process.argv.find(a => a.startsWith('--output='));
  const outputPath = outputArg ? outputArg.slice('--output='.length) : `./news_signal_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;

  console.log(`\n📰 新闻情绪分析 → 可交易信号`);
  console.log(`股票数: ${symbols.length} | 时间窗口: 最近${DAYS_WINDOW}天\n`);
  console.log('='.repeat(60));

  const results = [];
  for (const symbol of symbols) {
    const r = await analyzeStock(symbol);
    if (r) results.push(r);
    await new Promise(res => setTimeout(res, 800)); // 避免请求过快
  }

  // 汇总
  const summary = {
    generated_at: new Date().toISOString(),
    total_stocks: results.length,
    signals: {
      long: results.filter(r => r.trade_signal.signal === 'Long').map(r => r.symbol),
      short: results.filter(r => r.trade_signal.signal === 'Short').map(r => r.symbol),
      no_trade: results.filter(r => r.trade_signal.signal === 'No Trade').map(r => r.symbol),
    },
    stocks: results,
  };

  writeFileSync(outputPath, JSON.stringify(summary, null, 2), 'utf8');

  console.log('\n' + '='.repeat(60));
  console.log('\n📊 汇总结果:\n');
  console.log(`🟢 Long  (${summary.signals.long.length}): ${summary.signals.long.join(', ') || '无'}`);
  console.log(`🔴 Short (${summary.signals.short.length}): ${summary.signals.short.join(', ') || '无'}`);
  console.log(`⚪ 观望  (${summary.signals.no_trade.length}): ${summary.signals.no_trade.join(', ') || '无'}`);
  console.log(`\n✅ 完整JSON已保存: ${outputPath}`);
}

main().catch(console.error);
