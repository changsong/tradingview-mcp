#!/usr/bin/env node
/**
 * CN Grade A 三条件严格交集筛选
 * 条件1: Grade == 🟢A
 * 条件2: MTF alignment == 3/4 (75%) 或 4/4 (100%)（分母须为 4）
 * 条件3: News Signal 含 'Long (强)'（即 🟢 Long (强)）
 * 复现 analyze_cn_combined.mjs 的 classifyNews / gradeOf 逻辑
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const ROOT = resolve('D:/trade_workspace/tradingview-mcp');
const TECH_JSON = resolve(ROOT, 'watchlist/cn_tech_signals.json');
const NEWS_JSON = resolve(ROOT, 'watchlist/cn_news_signals.json');
const OUT_MD = resolve(ROOT, 'watchlist/cn_gr_grade_a_picks.md');

const tech = JSON.parse(readFileSync(TECH_JSON, 'utf8'));
const news = JSON.parse(readFileSync(NEWS_JSON, 'utf8'));

// 与 analyze_cn_combined.mjs 完全一致
function classifyNews(signal) {
  const s = String(signal ?? '');
  const overheated = /过热/.test(s);
  const noTrade    = /No Trade|无数据/.test(s);
  const longSig    = /Long/.test(s) && !overheated && !noTrade;
  const shortSig   = (/Short/.test(s) || /规避/.test(s)) && !longSig && !overheated;
  return { overheated, long: longSig, short: shortSig };
}

function gradeOf(techScore, cls) {
  if (cls.overheated && techScore >= 38) return 'C+';
  if (cls.long && !cls.overheated && techScore >= 30) return 'A';
  if (cls.long && !cls.overheated && techScore >= 15) return 'B';
  if (!cls.overheated && !cls.short && techScore >= 20) return 'C';
  return 'D';
}

// 与 analyze_cn_combined.mjs 一致：入场/止损/目标位
function calcLevels(price, atrPct, tradeType) {
  if (price == null || atrPct == null) return { entry: null, stop: null, target: null, rr: null };
  const t = String(tradeType ?? '');
  let entry, stop, target;
  if (t.includes('突破')) {
    entry = price * 1.003; stop = price * (1 - atrPct * 1.8 / 100); target = price * (1 + atrPct * 2.5 / 100);
  } else if (t.includes('回调低吸')) {
    entry = price * 0.985; stop = price * (1 - atrPct * 2.0 / 100); target = price * (1 + atrPct * 2.0 / 100);
  } else if (t.includes('趋势追涨')) {
    entry = price; stop = price * (1 - atrPct * 1.5 / 100); target = price * (1 + atrPct * 2.2 / 100);
  } else if (t.includes('过热追涨')) {
    entry = price * 0.95; stop = price * (1 - atrPct * 2.2 / 100); target = price * (1 + atrPct * 2.0 / 100);
  } else {
    entry = price; stop = price * (1 - atrPct * 1.5 / 100); target = price * (1 + atrPct * 2.0 / 100);
  }
  const round2 = v => +v.toFixed(2);
  entry = round2(entry); stop = round2(stop); target = round2(target);
  const rr = entry === stop ? null : +((target - entry) / (entry - stop)).toFixed(1);
  return { entry, stop, target, rr };
}

// 解析 'x/4 (pct%)'，分母必须为 4，返回 num/den
function parseAlignment(alignment) {
  if (!alignment) return { num: 0, den: 4, pct: 0, raw: '-' };
  const m = String(alignment).match(/(\d+)\/(\d+)\s*\((\d+(?:\.\d+)?)%\)/);
  if (m && +m[2] === 4) {
    return { num: +m[1], den: +m[2], pct: +m[3], raw: String(alignment) };
  }
  return { num: 0, den: 4, pct: 0, raw: String(alignment) };
}

const techStocks = tech.stocks ?? {};
const newsStocks = news.stocks ?? {};

const rows = [];
const TRENDY_TYPES = /突破型|趋势追涨|趋势延续/;
const ALL_TFS = ['1W', '1D', '4H', '1H'];
function allTfAdxAbove30(td) { const t = td?.tf; return !!t && ALL_TFS.every(k => t[k]?.adx != null && t[k].adx > 30); }
function allTfRsiInRange(td, lo, hi) { const t = td?.tf; return !!t && ALL_TFS.every(k => t[k]?.rsi != null && t[k].rsi >= lo && t[k].rsi <= hi); }
function overheatPenalty(cls, isTrendy, td) {
  if (!cls.overheated) return 0;
  if (isTrendy) return 0;
  return allTfAdxAbove30(td) ? 2 : 5;
}
for (const [sym, td] of Object.entries(techStocks)) {
  const nd = newsStocks[sym] ?? { score: 0, signal: '无数据', name: td.name };
  const cls = classifyNews(nd.signal);
  const techScore = td.tech_score ?? 0;
  const grade = gradeOf(techScore, cls);
  const align = parseAlignment(td.alignment);
  const levels = calcLevels(td.price, td.atr_pct, td.type);
  const isTrendy = TRENDY_TYPES.test(td.type || '');
  const combined = +((techScore * 0.6) + ((nd.score ?? 0) * 0.4) + (isTrendy ? 5 : 0)
    + (allTfAdxAbove30(td) ? 8 : 0) + (allTfRsiInRange(td, 60, 75) ? 5 : 0)
    - overheatPenalty(cls, isTrendy, td)).toFixed(1);
  rows.push({
    sym, name: nd.name || td.name || sym,
    techScore, newsScore: nd.score ?? 0, combined,
    newsSignal: nd.signal ?? '-',
    grade, align,
    type: td.type ?? '-',
    price: td.price ?? null,
    entry: levels.entry, stop: levels.stop, target: levels.target, rr: levels.rr,
    flags: td.flags ?? [],
    rsi: td.rsi ?? null,
    atr_pct: td.atr_pct ?? null,
    ema20d_pct: td.ema20d_pct ?? null,
    chase: td.chase ?? false,
  });
}

const isStrongLong = r => String(r.newsSignal).includes('Long (强)');
const isAlignOK = r => r.align.den === 4 && (r.align.num === 3 || r.align.num === 4);
const isGradeA = r => r.grade === 'A';

const gradeACount = rows.filter(isGradeA).length;
const alignOK = rows.filter(isAlignOK).length;
const newsStrong = rows.filter(isStrongLong).length;

// 三条件交集
const picks = rows.filter(r => isGradeA(r) && isAlignOK(r) && isStrongLong(r));

// 近失候选：命中任意 2 个条件
const nearMiss = rows
  .filter(r => !(isGradeA(r) && isAlignOK(r) && isStrongLong(r)))
  .map(r => ({ ...r, hit: [isGradeA(r), isAlignOK(r), isStrongLong(r)] }))
  .filter(r => r.hit.filter(Boolean).length >= 2);

const L = [];
const p = s => L.push(s);
const date = new Date().toISOString().slice(0, 10);

p('# CN 综合信号 · Grade A 精选池（🟢A + 多周期对齐 + Long 强）');
p('');
p(`**生成日期:** ${date}　　**数据来源:** ./watchlist/cn_tech_signals.json + ./watchlist/cn_news_signals.json（\`npm run combined:cn\`）`);
p('**筛选条件（必须同时满足）:**');
p('1. 等级 = 🟢A');
p('2. 多周期对齐 = 3/4 (75%) 或 4/4 (100%)');
p('3. 类型 = 🟢 Long (强)');
p('');
p('---');
p('');
p('## 筛选结果');
p('');
p(`- 技术信号股票数（tech.stocks）: **${rows.length}**`);
p(`- 新闻信号股票数（news.stocks）: **${Object.keys(newsStocks).length}**`);
p(`- 满足条件1（Grade A）: **${gradeACount}** 只`);
p(`- 满足条件2（MTF = 3/4 或 4/4）: **${alignOK}** 只`);
p(`- 满足条件3（🟢 Long (强)）: **${newsStrong}** 只`);
p(`- **三条件交集命中: ${picks.length} 只**`);
p('');
p('---');
p('');
p('## 入选名单');
p('');
if (picks.length === 0) {
  p('> ⚠️ **无股票同时满足三个条件。** 具体原因见下方三条件命中矩阵。');
  p('');
} else {
  p('| # | 名称 | 代码 | 综合分 | 等级 | 新闻信号 | 类型 | 多周期对齐 | 入场价 | 止损价 | 目标价 | 盈亏比 |');
  p('|---|------|------|--------|------|---------|------|-----------|--------|--------|--------|--------|');
  picks.forEach((r, i) => {
    const e = r.entry ?? '-'; const s = r.stop ?? '-'; const t = r.target ?? '-';
    const rr = r.rr != null ? `${r.rr}:1` : '-';
    p(`| ${i + 1} | **${r.name}** | ${r.sym} | ${r.combined} | 🟢A | ${r.newsSignal} | ${r.type} | ${r.align.raw} | ${e} | ${s} | ${t} | ${rr} |`);
  });
  p('');
}
p('---');
p('');
p('## 入选明细');
p('');
if (picks.length) {
  for (const r of picks) {
    p(`### ${r.name} (${r.sym})`);
    p('');
    p('| 维度 | 内容 |');
    p('|------|------|');
    p(`| 综合评分 | **${r.combined}** |`);
    p(`| 技术分 | ${r.techScore} (${r.type}) |`);
    p(`| 新闻分 | ${r.newsScore} → ${r.newsSignal} |`);
    p(`| 当前价 | ${r.price} |`);
    p(`| **入场价** | **${r.entry}** |`);
    p(`| **止损价** | **${r.stop}** |`);
    p(`| **目标价** | **${r.target}** |`);
    p(`| 盈亏比 | ${r.rr != null ? r.rr + ':1' : '-'} |`);
    p(`| RSI | ${r.rsi ?? '-'} |`);
    p(`| ATR% | ${r.atr_pct ?? '-'}% |`);
    p(`| EMA20 距离 | ${r.ema20d_pct ?? '-'}% |`);
    p(`| 是否追涨 | ${r.chase ? '**YES**' : 'NO'} |`);
    p(`| 多周期对齐 | ${r.align.raw} |`);
    p(`| 风险标注 | ${(r.flags ?? []).join(' ') || '✅无重大风险'} |`);
    p('');
  }
}
p('');
p('## 三条件命中矩阵（tech 侧全部股票）');
p('');
p('| Symbol | 名称 | Tech | Grade | MTF Alignment | News Signal | 条件1 | 条件2 | 条件3 |');
p('|--------|------|------|-------|---------------|-------------|-------|-------|-------|');
rows.sort((a, b) => (b.grade === a.grade ? b.techScore - a.techScore : (b.grade === 'A' ? 1 : -1)));
for (const r of rows) {
  const c1 = isGradeA(r) ? '✅' : '❌';
  const c2 = isAlignOK(r) ? '✅' : '❌';
  const c3 = isStrongLong(r) ? '✅' : '❌';
  p(`| ${r.sym} | ${r.name} | ${r.techScore} | ${r.grade} | ${r.align.raw} | ${r.newsSignal} | ${c1} | ${c2} | ${c3} |`);
}
if (rows.length === 0) {
  p('| - | - | - | - | - | - | - | - | - |');
}
p('');
p('## 两两交叉统计');
p('');
const aAndAlign = rows.filter(r => isGradeA(r) && isAlignOK(r)).length;
const aAndStrong = rows.filter(r => isGradeA(r) && isStrongLong(r)).length;
const alignAndStrong = rows.filter(r => isAlignOK(r) && isStrongLong(r)).length;
p(`- Grade A ∩ MTF(3/4|4/4): **${aAndAlign}** 只`);
p(`- Grade A ∩ Long(强): **${aAndStrong}** 只`);
p(`- MTF(3/4|4/4) ∩ Long(强): **${alignAndStrong}** 只`);
p('- 三者交集: **' + picks.length + ' 只**');
p('');
p('## 近失候选（命中任意 2 个条件）');
p('');
if (nearMiss.length) {
  p('| Symbol | 名称 | Grade | MTF Alignment | News Signal | 命中条件 |');
  p('|--------|------|-------|---------------|-------------|----------|');
  for (const r of nearMiss) {
    const hitList = ['Grade A', 'MTF 3/4|4/4', 'Long(强)'].filter((_, i) => r.hit[i]).join(' + ');
    p(`| ${r.sym} | ${r.name} | ${r.grade} | ${r.align.raw} | ${r.newsSignal} | ${hitList} |`);
  }
} else {
  p('> 无');
}
p('');
p('---');
p('');
p('## 注意事项');
p('');
p('1. **止损执行纪律**：跌破止损价日线收盘价即出，不要抱侥幸');
p('2. **A股 ±10% 涨跌停机制**：目标价若超过明日涨停板则分批止盈');
p('3. **仓位控制**：A 级单只最大不超过总资金 30%');
p('4. 入选名单为多周期对齐 + 情绪强多共振标的，入场按回调低吸节奏，勿追高');
p('');
p(`*基于报告: ${new Date().toLocaleString()} 生成*`);
p('*（内容由AI生成，仅供参考）*');

writeFileSync(OUT_MD, L.join('\n'), 'utf8');
console.log(`✅ Saved: ${OUT_MD}`);
console.log(`picks=${picks.length}  gradeA=${gradeACount}  alignOK=${alignOK}  newsStrong=${newsStrong}  techRows=${rows.length}  newsTotal=${Object.keys(newsStocks).length}`);
for (const r of picks) console.log(`PICK: ${r.sym} ${r.name} ${r.grade} ${r.align.raw} ${r.newsSignal}`);
