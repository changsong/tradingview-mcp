#!/usr/bin/env node
/**
 * A股可交易信号分析 — 基于新闻情绪
 * 读取 cn_selected.txt，对每只股票执行：
 *   1. 获取新闻/研报/快讯（去噪）
 *   2. 打标签：类型 + 情绪 + 影响权重
 *   3. 情绪指数 = Σ(情绪 × 权重)
 *   4. 识别关键模式：趋势/反转/背离
 *   5. 输出 Long/Short/No Trade 信号 + 可解释原因
 *   6. 必须识别：提前炒作 / 情绪过热 / 假利好
 */

import { searchNews } from './src/core/webNews.js';
import { readFileSync, writeFileSync } from 'fs';

// ═══════════════════════════════════════════════════════════
// 1. 新闻类型分类 — A股专项
// ═══════════════════════════════════════════════════════════

const CATEGORY_RULES = [
  { type: 'policy',    label: '政策', weight: 1.4, keywords: ['政策', '监管', '批准', '国务院', '发改委', '工信部', '证监会', '税收', '补贴', '扶持', '央行', '降息', '降准', '专项债'] },
  { type: 'earnings',  label: '财报', weight: 1.5, keywords: ['业绩', '净利润', '营收', '财报', '年报', '季报', '业绩预告', '超预期', '不及预期', '增长', '亏损', '扭亏'] },
  { type: 'merger',    label: '并购', weight: 1.5, keywords: ['收购', '并购', '重组', '合并', '战略合作', '参股', '入股', '控股', '定增', '资产注入'] },
  { type: 'industry',  label: '行业', weight: 1.1, keywords: ['行业', '市场', '竞争', '需求', '供应链', '产业链', '渗透率', '市占率', '新增订单'] },
  { type: 'guidance',  label: '指引', weight: 1.3, keywords: ['指引', '预测', '展望', '计划', '目标', '预期', '预计', '将于', '拟', '研发进展'] },
  { type: 'blackswan', label: '黑天鹅', weight: 1.7, keywords: ['突发', '意外', '黑天鹅', '事故', '违规', '处罚', '立案', '诉讼', '停牌', '闪崩', '暴雷', '造假'] },
  { type: 'rumor',     label: '传闻', weight: 0.7, keywords: ['传闻', '据悉', '消息人士', '据说', '听说', '坊间', '市场传言', '有望', '或将', '可能'] },
];

function categorize(text) {
  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some(k => text.includes(k))) return rule;
  }
  return { type: 'other', label: '其他', weight: 1.0 };
}

// ═══════════════════════════════════════════════════════════
// 2. 情绪打分 — 逐词累加
// ═══════════════════════════════════════════════════════════

const BULLISH_WORDS = [
  '涨', '上涨', '大涨', '暴涨', '飙升', '涨停', '买入', '增持', '看好', '利好',
  '突破', '新高', '强势', '积极', '乐观', '反弹', '回升', '超预期', '超额完成',
  '创新高', '扩产', '中标', '签约', '拿下', '获批', '获得', '胜诉', '超额',
];

const BEARISH_WORDS = [
  '跌', '下跌', '大跌', '暴跌', '跳水', '跌停', '卖出', '减持', '看空', '利空',
  '破位', '新低', '弱势', '悲观', '调整', '不及预期', '亏损', '减少', '下滑',
  '降级', '处罚', '违规', '诉讼', '立案', '造假', '暴雷', '风险', '警示',
];

function scoreSentiment(text) {
  let b = 0, s = 0;
  BULLISH_WORDS.forEach(w => { if (text.includes(w)) b++; });
  BEARISH_WORDS.forEach(w => { if (text.includes(w)) s++; });
  return b > s ? 1 : s > b ? -1 : 0;
}

// ═══════════════════════════════════════════════════════════
// 3. 新闻质量评分（去噪用）
// ═══════════════════════════════════════════════════════════

const TRUSTED_SOURCES = ['东方财富', '新华', '证券', '财联社', '第一财经', '中国证券', '上交所', '深交所', '研报'];
const NOISE_KEYWORDS  = ['广告', '推广', '赞助', '活动报名', '私信', '联系客服'];

function qualityScore(item, catWeight) {
  if (NOISE_KEYWORDS.some(k => (item.title || '').includes(k))) return 0;

  let q = 40;
  if (TRUSTED_SOURCES.some(s => (item.source || '').includes(s))) q += 20;
  if (item.type === 'research') q += 15;          // 研报来源加分
  const len = (item.title || '').length + (item.snippet || item.content || '').length;
  if (len > 20 && len < 500) q += 10;
  if ((item.replies || 0) > 10) q += 5;
  if ((item.views || 0) > 500) q += 10;
  q = Math.round(q * catWeight);
  return Math.min(100, q);
}

// ═══════════════════════════════════════════════════════════
// 4. 5天时效过滤
// ═══════════════════════════════════════════════════════════

function isRecent(dateStr, days = 5) {
  if (!dateStr) return true; // 没日期的不过滤
  const d = new Date(dateStr);
  if (isNaN(d)) return true;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return d >= cutoff;
}

// ═══════════════════════════════════════════════════════════
// 5. 核心分析：构建情绪指数
// ═══════════════════════════════════════════════════════════

function buildIndex(rawNews) {
  const tagged = [];
  for (const item of rawNews) {
    const text = ((item.title || '') + ' ' + (item.snippet || item.content || '')).toLowerCase();
    const cat  = categorize(text);
    const q    = qualityScore(item, cat.weight);
    if (q < 30) continue;   // 低质量噪音丢弃

    const senti = scoreSentiment(text);
    // 影响权重 1-5，综合质量和类型
    const w = Math.min(5, Math.max(1, Math.round((q / 50) * cat.weight * 2.5)));

    tagged.push({
      title:    item.title,
      date:     item.date,
      source:   item.source,
      type:     item.type,
      category: cat.type,
      catLabel: cat.label,
      sentiment: senti,       // +1 / 0 / -1
      weight:   w,             // 1-5
      quality:  q,
      recent:   isRecent(item.date, 5),
      url:      item.url,
    });
  }

  // 情绪指数 = Σ(s × w) / Σ(w)
  const recentTagged = tagged.filter(n => n.recent);
  let score = 0, totalW = 0;
  recentTagged.forEach(n => { score += n.sentiment * n.weight; totalW += n.weight; });
  const normScore = totalW > 0 ? score / totalW : 0;

  const bull = recentTagged.filter(n => n.sentiment === 1);
  const bear = recentTagged.filter(n => n.sentiment === -1);
  const neut = recentTagged.filter(n => n.sentiment === 0);
  const tot  = recentTagged.length || 1;

  return {
    all: tagged,
    recent: recentTagged,
    sentiment_score: parseFloat(normScore.toFixed(3)),
    bull_count: bull.length,
    bear_count: bear.length,
    neut_count: neut.length,
    bull_ratio: ((bull.length / tot) * 100).toFixed(1) + '%',
    bear_ratio: ((bear.length / tot) * 100).toFixed(1) + '%',
    neut_ratio: ((neut.length / tot) * 100).toFixed(1) + '%',
    total_effective: recentTagged.length,
  };
}

// ═══════════════════════════════════════════════════════════
// 6. 关键模式识别（必须识别的3类风险）
// ═══════════════════════════════════════════════════════════

function identifyPatterns(idx) {
  const { recent, sentiment_score: score, bull_count, bear_count } = idx;
  const flags = [];
  const warnings = [];

  // ── 趋势 ──
  const slice1 = recent.slice(0, Math.ceil(recent.length / 2));
  const slice2 = recent.slice(Math.ceil(recent.length / 2));
  const avg1 = slice1.length ? slice1.reduce((s,n) => s+n.sentiment,0)/slice1.length : 0;
  const avg2 = slice2.length ? slice2.reduce((s,n) => s+n.sentiment,0)/slice2.length : 0;
  if (avg1 - avg2 > 0.35)  flags.push({ type: 'trend_up',   label: '情绪持续增强', desc: '近期新闻明显偏多，情绪升温中' });
  if (avg2 - avg1 > 0.35)  flags.push({ type: 'trend_down', label: '情绪持续减弱', desc: '近期新闻明显偏空，情绪冷却中' });

  // ── 反转 ──
  if (avg1 > 0.3 && avg2 < -0.1) flags.push({ type: 'reversal_up',   label: '情绪反转向多', desc: '旧消息偏空→近期偏多，潜在反转机会' });
  if (avg1 < -0.1 && avg2 > 0.3) flags.push({ type: 'reversal_down', label: '情绪反转向空', desc: '旧消息偏多→近期偏空，警惕顶部' });

  // ── 高权重催化剂 ──
  const highW = recent.filter(n => n.weight >= 4);
  if (highW.some(n => n.sentiment > 0)) flags.push({ type: 'catalyst_bull', label: '重磅利好', desc: `${highW.filter(n=>n.sentiment>0).length}条高权重看涨新闻` });
  if (highW.some(n => n.sentiment < 0)) flags.push({ type: 'catalyst_bear', label: '重磅利空', desc: `${highW.filter(n=>n.sentiment<0).length}条高权重看跌新闻` });

  // ── 风险检测：提前炒作 ──
  const hasMerger   = recent.some(n => n.category === 'merger');
  const hasPolicyHi = recent.filter(n => n.category === 'policy' && n.weight >= 4).length > 0;
  if ((hasMerger || hasPolicyHi) && score > 0.5) {
    warnings.push({
      type: 'pre_speculation',
      label: '⚠️ 可能已提前炒作',
      desc: '存在并购/政策高权重利好同时情绪指数高，需警惕消息提前price-in',
      severity: 'high',
    });
  }

  // ── 风险检测：情绪过热 ──
  if (bull_count > 0 && bear_count === 0 && bull_count >= 5) {
    warnings.push({
      type: 'overheated',
      label: '🔥 情绪过热（清一色看涨）',
      desc: `连续 ${bull_count} 条看涨无一看跌，散户情绪极端，谨慎追高`,
      severity: 'high',
    });
  }
  if (score > 0.6 && bull_count / Math.max(1, bull_count + bear_count) > 0.85) {
    warnings.push({
      type: 'overheated_soft',
      label: '⚠️ 情绪偏热',
      desc: '看涨占比超 85%，短期或已消化大量利好，需关注量价配合',
      severity: 'medium',
    });
  }

  // ── 风险检测：假利好 ──
  const rumorOnly = recent.filter(n => n.category === 'rumor' && n.sentiment === 1);
  const solidBull = recent.filter(n => n.sentiment === 1 && n.category !== 'rumor');
  if (rumorOnly.length > solidBull.length && score > 0.3) {
    warnings.push({
      type: 'false_positive',
      label: '❌ 疑似假利好（传闻主导）',
      desc: `利好主要来自 ${rumorOnly.length} 条传闻，实质支撑不足，建议等待确认公告`,
      severity: 'high',
    });
  }

  // ── 背离检测（新闻与价格方向相反暗示） ──
  // 仅标记为潜在背离，实际需结合 SQZMOM 分析
  if (score < -0.2 && bear_count > bull_count && flags.some(f => f.type === 'trend_up')) {
    flags.push({ type: 'divergence', label: '情绪背离', desc: '新闻偏空但情绪出现改善，需结合价格确认' });
  }

  return { flags, warnings };
}

// ═══════════════════════════════════════════════════════════
// 7. 生成可交易信号
// ═══════════════════════════════════════════════════════════

function generateSignal(idx, patterns, symbol) {
  const { sentiment_score: score, bull_ratio, bear_ratio, neut_ratio, total_effective } = idx;
  const { flags, warnings } = patterns;

  if (total_effective === 0) {
    return { signal: 'NO_TRADE', confidence: 0, reason: '近5天无有效新闻，无法判断', style: '-', risks: [], opportunities: [] };
  }

  let signal = 'NO_TRADE';
  let confidence = 40;
  let reason = '';
  let style = '';
  const risks = warnings.map(w => `${w.label}：${w.desc}`);
  const opportunities = [];

  // 基础信号
  if (score >= 0.4) {
    signal = 'LONG';
    confidence = Math.min(85, 50 + score * 50);
    reason = `情绪指数 ${score.toFixed(3)}（看涨 ${bull_ratio}），近5天利好主导`;
  } else if (score <= -0.4) {
    signal = 'SHORT / 回避';
    confidence = Math.min(85, 50 + Math.abs(score) * 50);
    reason = `情绪指数 ${score.toFixed(3)}（看跌 ${bear_ratio}），近5天利空主导`;
  } else {
    signal = 'NO_TRADE';
    confidence = 40;
    reason = `情绪指数 ${score.toFixed(3)} 处于中性区间（多空均衡），等待方向确认`;
  }

  // 交易风格判断
  const hasReversal = flags.some(f => f.type === 'reversal_up');
  const hasCatalyst  = flags.some(f => f.type === 'catalyst_bull');
  const isTrendUp    = flags.some(f => f.type === 'trend_up');

  if (signal === 'LONG') {
    if (hasCatalyst && isTrendUp)      { style = '趋势追涨（强势）'; confidence = Math.min(90, confidence + 10); }
    else if (hasReversal)              { style = '反转低吸'; opportunities.push('情绪由空转多，适合左侧轻仓布局'); }
    else                               { style = '低吸/轻仓建仓'; }
  } else if (signal.includes('SHORT')) {
    style = '回避或高位减仓';
  } else {
    style = '观望';
  }

  // 风险降级
  const hasHighRisk = warnings.some(w => w.severity === 'high');
  if (hasHighRisk && signal === 'LONG') {
    confidence = Math.max(25, confidence - 20);
    style = '谨慎参与（高风险）';
    reason += '；但存在高风险警告，建议轻仓或等待回调确认';
  }

  // 机会点
  if (flags.some(f => f.type === 'catalyst_bull')) opportunities.push('重磅利好催化，关注成交量放大确认');
  if (flags.some(f => f.type === 'trend_up'))      opportunities.push('情绪持续升温，趋势可能延续');
  if (score > 0.2 && score < 0.4)                  opportunities.push('情绪温和偏多，适合低位轻仓介入，等待情绪进一步明确');

  return {
    symbol,
    signal,
    confidence: Math.round(confidence),
    reason,
    style,
    risks,
    opportunities,
  };
}

// ═══════════════════════════════════════════════════════════
// 8. 输出报告
// ═══════════════════════════════════════════════════════════

function printReport(symbol, stockName, idx, patterns, sig, newsResult) {
  const SEP = '═'.repeat(80);
  const sep = '─'.repeat(80);

  console.log('\n' + SEP);
  console.log(`📰  ${symbol}  ${stockName || ''}  新闻情绪交易信号分析`);
  console.log(SEP);

  // ── 数据来源摘要 ──
  const totalFetch = (newsResult.news?.length||0) + (newsResult.research?.length||0) + (newsResult.forum?.length||0);
  console.log(`\n📡 数据采集：共 ${totalFetch} 条 | 研报 ${newsResult.research?.length||0} | 快讯 ${newsResult.news?.length||0} | 论坛 ${newsResult.forum?.length||0}`);
  console.log(`   近5天有效新闻（去噪后）：${idx.total_effective} 条`);

  // ── 情绪指数 ──
  console.log('\n' + sep);
  console.log('📊  情绪指数');
  console.log(sep);
  const bar = (ratio) => {
    const n = Math.round(parseFloat(ratio) / 5);
    return '█'.repeat(n) + '░'.repeat(20 - n);
  };
  const scoreLabel = idx.sentiment_score > 0.4 ? '偏多' : idx.sentiment_score < -0.4 ? '偏空' : '中性';
  console.log(`   综合情绪得分：${idx.sentiment_score.toFixed(3)}  [${scoreLabel}]  (范围 -1 ~ +1)`);
  console.log(`   看涨  ${bar(idx.bull_ratio)} ${idx.bull_ratio}  (${idx.bull_count}条)`);
  console.log(`   中性  ${bar(idx.neut_ratio)} ${idx.neut_ratio}  (${idx.neut_count}条)`);
  console.log(`   看跌  ${bar(idx.bear_ratio)} ${idx.bear_ratio}  (${idx.bear_count}条)`);

  // ── 近5天重要新闻逐条展示 ──
  console.log('\n' + sep);
  console.log('📋  近5天重要新闻（按影响权重排序）');
  console.log(sep);
  const top = [...idx.recent]
    .sort((a, b) => (b.weight * Math.abs(b.sentiment) || 0) - (a.weight * Math.abs(a.sentiment) || 0))
    .slice(0, 10);

  if (top.length === 0) {
    console.log('   （无近5天新闻）');
  } else {
    top.forEach((n, i) => {
      const sLabel = n.sentiment === 1 ? '🟢+1' : n.sentiment === -1 ? '🔴-1' : '⚪ 0';
      const wStr   = '★'.repeat(n.weight) + '☆'.repeat(5 - n.weight);
      console.log(`\n   [${i+1}] ${n.title}`);
      console.log(`       类型:${n.catLabel.padEnd(5)}  情绪:${sLabel}  权重:${wStr}(${n.weight})  来源:${n.source||'-'}  日期:${n.date||'?'}`);
    });
  }

  // ── 关键模式 ──
  console.log('\n' + sep);
  console.log('🔍  关键模式识别');
  console.log(sep);
  if (patterns.flags.length === 0 && patterns.warnings.length === 0) {
    console.log('   无显著模式');
  }
  patterns.flags.forEach(f => console.log(`   ▸ [${f.label}]  ${f.desc}`));

  // ── 风险警告（重点！） ──
  if (patterns.warnings.length > 0) {
    console.log('\n' + sep);
    console.log('⚠️   风险警告（必读）');
    console.log(sep);
    patterns.warnings.forEach(w => {
      console.log(`   ${w.label}`);
      console.log(`   ${w.desc}`);
      console.log(`   严重程度：${ w.severity === 'high' ? '🔴 高' : '🟡 中'}`);
      console.log();
    });
  }

  // ── 交易信号 ──
  console.log(sep);
  console.log('🎯  交易信号');
  console.log(sep);
  const sigEmoji = sig.signal === 'LONG' ? '🟢' : sig.signal.includes('SHORT') ? '🔴' : '⚪';
  console.log(`   信号：${sigEmoji} ${sig.signal}`);
  console.log(`   置信度：${sig.confidence}%`);
  console.log(`   交易风格：${sig.style}`);
  console.log(`   触发原因：${sig.reason}`);

  if (sig.opportunities.length > 0) {
    console.log('\n   ✨ 机会点：');
    sig.opportunities.forEach((o, i) => console.log(`      ${i+1}. ${o}`));
  }
  if (sig.risks.length > 0) {
    console.log('\n   🚨 风险点：');
    sig.risks.forEach((r, i) => console.log(`      ${i+1}. ${r}`));
  }

  console.log('\n' + SEP + '\n');
}

// ═══════════════════════════════════════════════════════════
// 9. 主入口
// ═══════════════════════════════════════════════════════════

async function main() {
  console.log('🔎  A股可交易新闻情绪信号分析 — 近5天重要新闻\n');

  // 读取 cn_selected.txt
  let symbols = [];
  try {
    const content = readFileSync('./watchlist/cn_selected.txt', 'utf8').trim();
    symbols = content.split(',').map(s => s.trim()).filter(Boolean);
    console.log(`✅ 加载 ${symbols.length} 支选中股票：${symbols.join(', ')}\n`);
  } catch (e) {
    console.error('❌ 无法读取 cn_selected.txt：' + e.message);
    return;
  }

  const allResults = [];
  const ts = new Date().toISOString().replace(/[:.]/g, '-');

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    console.log(`[${i+1}/${symbols.length}] 正在获取 ${symbol} 的新闻数据...`);

    let newsResult;
    try {
      newsResult = await searchNews({ symbol, count: 20, source: 'all' });
    } catch (err) {
      console.log(`  ❌ 获取失败：${err.message}\n`);
      continue;
    }

    const stockName = newsResult.name || '';
    const rawNews   = [
      ...(newsResult.research || []),
      ...(newsResult.news     || []),
      ...(newsResult.forum    || []),
    ];

    console.log(`  ✅ 原始数据 ${rawNews.length} 条（研报 ${newsResult.research?.length||0} / 快讯 ${newsResult.news?.length||0} / 论坛 ${newsResult.forum?.length||0}）`);

    // 构建情绪指数（仅近5天）
    const idx       = buildIndex(rawNews);
    const patterns  = identifyPatterns(idx);
    const sig       = generateSignal(idx, patterns, symbol);

    console.log(`  📊 情绪得分：${idx.sentiment_score.toFixed(3)}  看涨:${idx.bull_ratio} 看跌:${idx.bear_ratio}`);
    console.log(`  🎯 信号：${sig.signal}（置信 ${sig.confidence}%）— ${sig.style}`);
    if (patterns.warnings.length > 0) {
      console.log(`  ⚠️  警告：${patterns.warnings.map(w=>w.label).join(' | ')}`);
    }

    // 详细报告
    printReport(symbol, stockName, idx, patterns, sig, newsResult);

    allResults.push({ symbol, name: stockName, index: idx, patterns, signal: sig });

    // 防止请求过快
    if (i < symbols.length - 1) await new Promise(r => setTimeout(r, 1200));
  }

  // 保存 JSON 结果
  const outFile = `news_signal_cn_${ts}.json`;
  writeFileSync(outFile, JSON.stringify(allResults, null, 2));
  console.log(`\n✅ 分析完成。详细 JSON 保存至：${outFile}`);
}

main().catch(console.error);
