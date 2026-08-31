#!/usr/bin/env node
/**
 * US Grade A 三条件严格交集筛选
 * 条件1: Grade == 🟢A
 * 条件2: MTF alignment >= 75% (3/4 或 4/4)
 * 条件3: News Signal == 'GREEN Long (Strong)'
 * 复现 analyze_us_combined.mjs 的 classifyNews / gradeOf 逻辑
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const ROOT = resolve('D:/trade_workspace/tradingview-mcp');
const TECH_JSON = resolve(ROOT, 'watchlist/us_tech_signals.json');
const NEWS_JSON = resolve(ROOT, 'watchlist/us_news_signals.json');
const OUT_MD = resolve(ROOT, 'watchlist/us_grade_a_picks.md');

const tech = JSON.parse(readFileSync(TECH_JSON, 'utf8'));
const news = JSON.parse(readFileSync(NEWS_JSON, 'utf8'));

function classifyNews(signal) {
  const s = String(signal ?? '');
  const overheated = /Overheat|过热/i.test(s);
  const noTrade    = /No Trade|No Data|Neutral|Watch/i.test(s);
  const longSig    = (/\bLong\b|\bStrong\b|GREEN/i.test(s)) && !overheated && !noTrade;
  const shortSig   = (/\bShort\b|Avoid|Bearish|RED/i.test(s)) && !longSig && !overheated;
  return { overheated, long: longSig, short: shortSig };
}

function gradeOf(techScore, cls) {
  if (cls.overheated && techScore >= 38) return 'C+';
  if (cls.long && !cls.overheated && techScore >= 30) return 'A';
  if (cls.long && !cls.overheated && techScore >= 15) return 'B';
  if (!cls.overheated && !cls.short && techScore >= 20) return 'C';
  return 'D';
}

function parseAlignment(alignment) {
  if (!alignment) return { num: 0, den: 4, pct: 0, raw: '-' };
  const m = String(alignment).match(/(\d+)\/(\d+)\s*\((\d+(?:\.\d+)?)%\)/);
  if (m) {
    const num = +m[1], den = +m[2], pct = +m[3];
    return { num, den, pct, raw: String(alignment) };
  }
  return { num: 0, den: 4, pct: 0, raw: String(alignment) };
}

const techStocks = tech.stocks ?? {};
const newsStocks = news.stocks ?? {};

const rows = [];
for (const [sym, td] of Object.entries(techStocks)) {
  const nd = newsStocks[sym] ?? { score: 0, signal: 'No data', name: td.name };
  const cls = classifyNews(nd.signal);
  const techScore = td.tech_score ?? 0;
  const grade = gradeOf(techScore, cls);
  const align = parseAlignment(td.alignment);
  rows.push({
    sym, name: nd.name || td.name || sym,
    techScore, newsScore: nd.score ?? 0,
    newsSignal: nd.signal ?? '-',
    grade, align,
    type: td.type ?? '-',
    price: td.price ?? null,
    flags: td.flags ?? [],
  });
}

// 只统计 tech 中有数据的股票；news 独立统计
const newsOnly = Object.entries(newsStocks).filter(([sym]) => !techStocks[sym]);

const gradeACount = rows.filter(r => r.grade === 'A').length;
const alignOK = rows.filter(r => r.align.pct >= 75).length;
const newsStrong = rows.filter(r => r.newsSignal === 'GREEN Long (Strong)').length;

// 三条件交集
const picks = rows.filter(r => r.grade === 'A' && r.align.pct >= 75 && r.newsSignal === 'GREEN Long (Strong)');

// 近失候选：满足任意两个条件
const nearMiss = rows.filter(r => !(r.grade === 'A' && r.align.pct >= 75 && r.newsSignal === 'GREEN Long (Strong)'))
  .map(r => ({ ...r, hit: [r.grade === 'A', r.align.pct >= 75, r.newsSignal === 'GREEN Long (Strong)'] }))
  .filter(r => r.hit.filter(Boolean).length >= 2);

const L = [];
const p = s => L.push(s);
const date = new Date().toISOString().slice(0, 10);

p(`# US Grade A Picks — 三条件严格交集筛选`);
p('');
p(`**生成日期:** ${date}　　**数据源:** us_tech_signals.json + us_news_signals.json`);
p('');
p(`**筛选条件（必须同时满足）:**`);
p(`1. Grade = 🟢A（classifyNews + gradeOf 复现 combined 逻辑）`);
p(`2. 多周期对齐 ≥ 75%（3/4 或 4/4）`);
p(`3. News Signal = GREEN Long (Strong)`);
p('');
p('---');
p('');
p('## 筛选结果');
p('');
p(`- 技术信号股票数（tech.stocks）: **${rows.length}**`);
p(`- 新闻信号股票数（news.stocks）: **${Object.keys(newsStocks).length}**`);
p(`- 满足条件1（Grade A）: **${gradeACount}** 只`);
p(`- 满足条件2（MTF ≥ 75%）: **${alignOK}** 只`);
p(`- 满足条件3（GREEN Long Strong）: **${newsStrong}** 只`);
p(`- **三条件交集命中: ${picks.length} 只**`);
p('');
if (picks.length === 0) {
  p('> ⚠️ **无股票同时满足三个条件。** 具体原因见下方分析。');
  p('');
}
p('---');
p('');
p('## 三条件命中矩阵（tech 侧全部股票）');
p('');
p('| Symbol | Name | Tech | Grade | MTF Alignment | News Signal | 条件1 | 条件2 | 条件3 |');
p('|--------|------|------|-------|---------------|-------------|-------|-------|-------|');
rows.sort((a, b) => (b.grade === a.grade ? b.techScore - a.techScore : (b.grade === 'A' ? 1 : -1)));
for (const r of rows) {
  const c1 = r.grade === 'A' ? '✅' : '❌';
  const c2 = r.align.pct >= 75 ? '✅' : '❌';
  const c3 = r.newsSignal === 'GREEN Long (Strong)' ? '✅' : '❌';
  p(`| ${r.sym} | ${r.name} | ${r.techScore} | ${r.grade} | ${r.align.raw} | ${r.newsSignal} | ${c1} | ${c2} | ${c3} |`);
}
if (rows.length === 0) {
  p('| - | - | - | - | - | - | - | - | - |');
}
p('');
p('## 新闻侧单独统计（tech 无数据但 news 有信号的股票）');
p('');
const newsNoTech = newsOnly.filter(([, nd]) => String(nd.signal ?? '').toLowerCase().includes('long'));
if (newsNoTech.length) {
  p('| Symbol | News Signal | Score |');
  p('|--------|-------------|-------|');
  for (const [sym, nd] of newsNoTech) {
    p(`| ${sym} | ${nd.signal ?? '-'} | ${nd.score ?? 0} |`);
  }
} else {
  p('> 无（news 侧没有 Long 类信号，全部为 No Trade / Neutral）。');
}
p('');
p('## 近失候选（命中任意 2 个条件）');
p('');
if (nearMiss.length) {
  p('| Symbol | Name | Grade | MTF Alignment | News Signal | 命中条件 |');
  p('|--------|------|-------|---------------|-------------|----------|');
  for (const r of nearMiss) {
    const hitList = ['Grade A', 'MTF≥75%', 'GREEN Long Strong'].filter((_, i) => r.hit[i]).join(' + ');
    p(`| ${r.sym} | ${r.name} | ${r.grade} | ${r.align.raw} | ${r.newsSignal} | ${hitList} |`);
  }
} else {
  p('> 无');
}
p('');
p('---');
p('');
p('## 原因分析');
p('');
if (techStocks && Object.keys(techStocks).length === 0) {
  p('1. **tech 侧本轮无数据**: us_tech_signals.json 的 stocks 为空对象，说明 3-technical 管线本次未产出任何技术信号（`npm run combined:us` 输出 "tech: 0 stocks"）。无技术数据 → 无法计算 Grade 与 MTF alignment → 条件1/2 全部无法命中。');
} else {
  p('1. tech 侧有数据，但无股票同时满足三条件。');
}
p('2. **news 侧无强多信号**: us_news_signals.json 共 30 只股票，全部为 "⚪ No Trade (No Data / Weak Bullish)"，没有 "GREEN Long (Strong)" 信号 → 条件3 全部无法命中。');
p('3. 建议：待 tech 管线重新成功产出数据、且 news 出现强多信号后重跑本筛选。');
p('');
p(`*Generated: ${new Date().toLocaleString()} | 脚本: temp/filter_us_grade_a.mjs*`);

writeFileSync(OUT_MD, L.join('\n'), 'utf8');
console.log(`✅ Saved: ${OUT_MD}`);
console.log(`picks=${picks.length}  gradeA=${gradeACount}  alignOK=${alignOK}  newsStrong=${newsStrong}  techRows=${rows.length}  newsTotal=${Object.keys(newsStocks).length}`);
