#!/usr/bin/env node
/**
 * US Combined Analysis: Tech × News → Final Trade Ranking + Entry/Stop/Target
 * Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)
 *   (NewsScore is 0-100 normalized, neutral=50; trendy = Breakout / Trend Follow / Trend Continuation)
 *
 * Inputs (upstream contracts):
 *   ./watchlist/us_tech_signals.json   ← pipeline/3-technical/analyze_tech_us_mtf.mjs
 *   ./watchlist/us_news_signals.json   ← pipeline/2-news/analyze_us_news.mjs
 *
 * Outputs:
 *   ./watchlist/us_combined_signals.md  (always overwritten)
 *   ./reports/<YYYY-MM-DD>/us_*.{md,json}  (daily snapshot for replay)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { snapshotMarket } from '../lib/snapshot.mjs';

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

const TECH_JSON = './watchlist/us_tech_signals.json';
const NEWS_JSON = './watchlist/us_news_signals.json';
const OUT_MD    = './watchlist/us_combined_signals.md';

function loadJson(p, label) {
  if (!existsSync(p)) {
    console.error(`✗ Missing ${label}: ${p}\n  Run \`npm run ${label}:us\` first.`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(p, 'utf8'));
}

function classifyNews(signal) {
  const s = String(signal ?? '');
  const overheated = /Overheat|过热/i.test(s);
  const noTrade    = /No Trade|No Data|Neutral|Watch/i.test(s);
  const longSig    = /\bLong\b|\bStrong\b|GREEN/i.test(s) && !overheated && !noTrade;
  const shortSig   = (/\bShort\b|Avoid|Bearish|RED/i.test(s)) && !longSig && !overheated;
  return { overheated, long: longSig, short: shortSig };
}

function calcLevels(price, atrPct, tradeType) {
  if (price == null || atrPct == null) return { entry: null, stop: null, target: null, rr: null };
  const t = String(tradeType ?? '').toLowerCase();
  let entry, stop, target, stopMul;

  if (t.includes('breakout') || t.includes('突破')) {
    entry  = price * 1.003;
    stopMul = 1.8;
    stop   = price * (1 - atrPct * 1.8 / 100);
    target = price * (1 + atrPct * 2.5 / 100);
  } else if (t.includes('pullback') || t.includes('回调')) {
    entry  = price * 0.985;
    stopMul = 2.0;
    stop   = price * (1 - atrPct * 2.0 / 100);
    target = price * (1 + atrPct * 2.0 / 100);
  } else if (t.includes('trend') || t.includes('趋势')) {
    entry  = price;
    stopMul = 1.5;
    stop   = price * (1 - atrPct * 1.5 / 100);
    target = price * (1 + atrPct * 2.2 / 100);
  } else if (t.includes('overheat') || t.includes('过热')) {
    entry  = price * 0.95;
    stopMul = 2.2;
    stop   = price * (1 - atrPct * 2.2 / 100);
    target = price * (1 + atrPct * 2.0 / 100);
  } else {
    entry  = price;
    stopMul = 1.5;
    stop   = price * (1 - atrPct * 1.5 / 100);
    target = price * (1 + atrPct * 2.0 / 100);
  }

  const round2 = v => +v.toFixed(2);
  entry = round2(entry); stop = round2(stop); target = round2(target);
  const rr = entry === stop ? null : +((target - entry) / (entry - stop)).toFixed(1);
  return { entry, stop, target, rr, stopMul };
}

function gradeOf(tech, cls) {
  if (cls.overheated && tech >= 38) return 'C+';
  if (cls.long && !cls.overheated && tech >= 30) return 'A';
  if (cls.long && !cls.overheated && tech >= 15) return 'B';
  if (!cls.overheated && !cls.short && tech >= 20) return 'C';
  return 'D';
}

function gradeEmoji(g) {
  return g === 'A' ? '🟢' : g === 'B' ? '🔵' : g === 'C+' ? '🟡' : g === 'C' ? '⚪' : '⚫';
}

async function main() {
  const tech = loadJson(TECH_JSON, 'tech');
  const news = loadJson(NEWS_JSON, 'news');

  console.log(`\n  tech: ${Object.keys(tech.stocks ?? {}).length} stocks (${tech.generated_at})`);
  console.log(`  news: ${Object.keys(news.stocks ?? {}).length} stocks (${news.generated_at})\n`);

  const rows = [];
  const TRENDY_TYPES = /Breakout|Trend Follow|Trend Continuation/i;
  for (const [sym, td] of Object.entries(tech.stocks ?? {})) {
    const nd  = news.stocks?.[sym] ?? { score: 0, signal: 'No data', name: td.name };
    const cls = classifyNews(nd.signal);
    const techScore = td.tech_score ?? 0;
    const newsScore = nd.score ?? 0;
    const isTrendy  = TRENDY_TYPES.test(td.type || '');
    const overheatPenalty = (cls.overheated && !isTrendy) ? 5 : 0;
    const trendyBonus = isTrendy ? 5 : 0;
    const combined  = +((techScore * 0.6) + (newsScore * 0.4) - overheatPenalty + trendyBonus).toFixed(1);
    const levels    = calcLevels(td.price, td.atr_pct, td.type);
    const grade     = gradeOf(techScore, cls);
    rows.push({
      sym, name: nd.name || td.name || sym,
      td, nd, cls, techScore, newsScore, combined, levels, grade,
    });
  }
  rows.sort((a, b) => b.combined - a.combined);

  const date = new Date().toISOString().slice(0, 10);
  const L = [];
  const p = s => L.push(s);

  p(`# Combined Analysis Report · Final Entry Ranking (US)`);
  p(`**Date:** ${date}　　**Method:** Tech 60% × News 40% - Overheat Penalty`);
  p(`**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)`);
  p(`**Sources:** ${TECH_JSON} + ${NEWS_JSON}`);
  p('');
  p('---');
  p('');

  p('## 🏆 Final Combined Ranking (A/B/C+/C all included)');
  p('');
  p('| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |');
  p('|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|');
  let rank = 0;
  for (const r of rows) {
    if (r.grade === 'D') continue;
    rank++;
    const lv = r.levels;
    const flags = (r.td.flags ?? []).join('/') || 'OK';
    p(`| ${rank} | **${r.name}** | ${r.sym} | **${r.combined}** | ${gradeEmoji(r.grade)}${r.grade} | ${r.techScore} | ${r.newsScore} | ${r.nd.signal ?? '-'} | ${r.td.type ?? '-'} | ${lv.entry ?? 'TBD'} | ${lv.stop ?? '-'} | ${lv.target ?? '-'} | ${lv.rr != null ? lv.rr+':1' : '-'} | ${flags} |`);
  }
  p('');
  p('---');
  p('');

  const aGrade = rows.filter(r => r.grade === 'A');
  if (aGrade.length) {
    p('## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)');
    p('');
    aGrade.forEach((r, i) => {
      const lv = r.levels;
      p(`### ${i+1}. ${r.name} (${r.sym})`);
      p('');
      p('| Field | Value |');
      p('|-------|-------|');
      p(`| Combined Score | **${r.combined}** |`);
      p(`| Tech Score | ${r.techScore} (${r.td.type ?? '-'}) |`);
      p(`| News Score | ${r.newsScore} → ${r.nd.signal ?? '-'} |`);
      p(`| Current Price | ${r.td.price ?? 'TBD'} |`);
      p(`| **Entry** | **${lv.entry ?? 'TBD'}** |`);
      p(`| **Stop** | **${lv.stop ?? '-'}** (ATR × ${lv.stopMul ?? '-'}) |`);
      p(`| **Target** | **${lv.target ?? '-'}** |`);
      p(`| R/R | ${lv.rr != null ? lv.rr+':1' : '-'} |`);
      p(`| RSI | ${r.td.rsi ?? '-'} |`);
      p(`| ATR% | ${r.td.atr_pct ?? '-'}% |`);
      p(`| Dist EMA20 | ${r.td.ema20d_pct ?? '-'}% |`);
      p(`| Chase OK | ${r.td.chase ? '**YES**' : 'NO'} |`);
      p(`| MTF Alignment | ${r.td.alignment ?? '-'} |`);
      p(`| Risk Flags | ${(r.td.flags ?? []).join(' ') || 'None'} |`);
      p('');
    });
  }

  const cPlus = rows.filter(r => r.grade === 'C+');
  if (cPlus.length) {
    p('---');
    p('');
    p('## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)');
    p('');
    p('> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.');
    p('');
    p('| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |');
    p('|-------|--------|----------|------|------|-------|-----------|------|--------|');
    cPlus.forEach(r => {
      const price = r.td.price, atr = r.td.atr_pct;
      const wait  = price && atr ? +(price * 0.94).toFixed(2) : 'TBD';
      const stop  = price && atr ? +(price * (1 - atr * 2.0 / 100)).toFixed(2) : '-';
      const tgt   = price && atr ? +(price * (1 + atr * 2.0 / 100)).toFixed(2) : '-';
      p(`| **${r.name}** | ${r.sym} | ${r.combined} | ${r.techScore} | ${r.newsScore}(hot) | ${price ?? '-'} | **${wait}** | ${stop} | ${tgt} |`);
    });
    p('');
  }

  p('---');
  p('');
  p('## ⚠️ Notes');
  p('');
  p('1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.');
  p('2. **Honor stops** — close on daily close below stop, no exceptions.');
  p('3. **R/R below 1.5:1** — reduce size or skip.');
  p('4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.');
  p('');
  p(`*Generated: ${new Date().toLocaleString()}*`);

  writeFileSync(OUT_MD, L.join('\n'), 'utf8');

  console.log('═══════════════════════════════════════════');
  console.log('         Final Combined Ranking — TOP 20');
  console.log('═══════════════════════════════════════════');
  console.log('Rank  Name          Grade  Combined  Entry    Stop    Target  R/R');
  let n = 0;
  for (const r of rows) {
    if (r.grade === 'D') continue;
    if (++n > 20) break;
    const lv = r.levels;
    const e = lv.entry  != null ? String(lv.entry).padStart(8)  : '     TBD';
    const s = lv.stop   != null ? String(lv.stop).padStart(8)   : '       -';
    const t = lv.target != null ? String(lv.target).padStart(8) : '       -';
    const rr = lv.rr != null ? `${lv.rr}:1` : '-';
    const ge = gradeEmoji(r.grade) + r.grade.padEnd(2);
    console.log(`${String(n).padStart(3)}   ${(r.name||'').padEnd(12)}  ${ge}  ${String(r.combined).padStart(5)}  ${e}${s}${t}  ${rr}`);
  }
  console.log('═══════════════════════════════════════════');
  console.log(`\n✅ Saved: ${OUT_MD}`);

  const snap = snapshotMarket('us');
  console.log(`📸 Snapshot: ${snap.dir} (${snap.files.length} files)\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
