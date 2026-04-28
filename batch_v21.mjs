#!/usr/bin/env node
/**
 * v21 batch test — 30 symbols from cn.txt
 * v21 changes: atrMult 2.0→1.5, atrMultAfterTP1 1.8→1.2, tp2Mult 3.0→3.5
 */

import { spawnSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const sleep = ms => new Promise(r => setTimeout(r, ms));

const TV = (args, timeout = 120000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], {
    cwd: __dir, encoding: 'utf8', timeout,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

const TVargs = (args, timeout = 120000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args], {
    cwd: __dir, encoding: 'utf8', timeout,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

const TVstdin = (args, stdin, timeout = 120000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], {
    cwd: __dir, encoding: 'utf8', timeout, input: stdin,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

const v21src = readFileSync(path.join(__dir, 'A_Share_SQZMOM_PRO_v21_Daily.pine'), 'utf8');
const cnTxt = readFileSync(path.join(__dir, 'watchlist/cn.txt'), 'utf8');
const allSymbols = cnTxt.trim().split(',').map(s => s.trim()).filter(Boolean);
const symbols = allSymbols.slice(0, 30);

console.log(`\n=== v21 Batch Test (${symbols.length} symbols) ===`);
console.log('v21: atrMult 2.0→1.5 | atrMultAfterTP1 1.8→1.2 | tp2Mult 3.0→3.5\n');

// Set Pine source
console.log('Setting Pine source (v21)...');
const setResult = TVstdin('pine set', v21src);
if (!setResult?.success) {
  console.error('Failed to set Pine source:', JSON.stringify(setResult));
  process.exit(1);
}
console.log('Pine source set OK');
await sleep(1000);

// Compile
console.log('Compiling...');
const compileResult = TV('pine compile', 30000);
console.log('Compile:', JSON.stringify(compileResult));
await sleep(2000);

const errResult = TV('pine errors');
if (errResult?.errors?.length > 0) {
  console.error('Compile errors:', JSON.stringify(errResult.errors, null, 2));
  process.exit(1);
}
console.log('No compile errors\n');

// Remove current study
console.log('Removing current study...');
const state = TV('state');
if (state?.studies?.length > 0) {
  for (const study of state.studies) {
    console.log(`  Removing: ${study.name} (${study.id})`);
    TV(`indicator remove ${study.id}`);
    await sleep(1500);
  }
}

// Add v21 to chart
const clickJS = `Array.from(document.querySelectorAll('button')).find(b=>b.getAttribute('title')==='添加到图表')?.click(); 'done'`;

console.log('Adding v21 to chart...');
let chartLoaded = false;
for (let attempt = 0; attempt < 5; attempt++) {
  TVargs(['ui', 'eval', clickJS], 15000);
  await sleep(3000);
  const ns = TV('state');
  if (ns?.studies?.some(s => s.name.includes('v21'))) {
    console.log(`  v21 confirmed on chart!`);
    chartLoaded = true;
    break;
  }
  if (attempt < 4) {
    console.log(`  Attempt ${attempt+1}: not confirmed yet...`);
    await sleep(2000);
  }
}
if (!chartLoaded) {
  const ns = TV('state');
  console.log('Studies on chart:', ns?.studies?.map(s=>s.name));
  // If any strategy is on chart, proceed
  if (ns?.studies?.length > 0) {
    console.log('A strategy is on chart, proceeding...');
    chartLoaded = true;
  } else {
    console.error('No strategy on chart after 5 attempts, exiting');
    process.exit(1);
  }
}

await sleep(3000);

// Load v19 for comparison
const v19data = JSON.parse(readFileSync(path.join(__dir, 'v19_batch_30.json'), 'utf8'));
const v19map = {};
for (const r of v19data) v19map[r.symbol] = r;

// Batch test
const results = [];

for (let i = 0; i < symbols.length; i++) {
  const symbol = symbols[i];

  let switched = false;
  for (let attempt = 0; attempt < 3 && !switched; attempt++) {
    if (attempt > 0) await sleep(5000);
    const sw = TV(`symbol ${symbol}`, 90000);
    if (sw?.success) switched = true;
  }

  if (!switched) {
    process.stdout.write(`[${i+1}/${symbols.length}] ${symbol} SWITCH FAILED\n`);
    results.push({ symbol, trades: 0, winRate: 0, netPct: 0, maxDD: 0, error: 'switch_failed' });
    continue;
  }

  await sleep(5000);

  const st = TV('data strategy', 90000);
  const m = st?.metrics || {};
  const trades  = m.totalTrades || 0;
  const wins    = m.winningTrades || 0;
  const winRate = trades > 0 ? wins / trades * 100 : 0;
  const netPct  = (m.netProfitPercent || 0) * 100;
  const maxDD   = (m.maxStrategyDrawDownPercent || 0) * 100;
  const pf      = m.profitFactor || 0;

  const v19 = v19map[symbol] || {};
  const wrD = winRate - (v19.winRate || 0);
  const netD = netPct - (v19.netPct || 0);

  process.stdout.write(
    `[${i+1}/${symbols.length}] ${symbol.padEnd(16)} ` +
    `${trades}笔 WR=${winRate.toFixed(0)}% Net=${netPct.toFixed(1)}% PF=${pf.toFixed(2)} DD=${maxDD.toFixed(1)}%` +
    `  (v19: ${v19.trades||0}笔 WR=${(v19.winRate||0).toFixed(0)}% Net=${(v19.netPct||0).toFixed(1)}%` +
    ` ΔNet=${netD>=0?'+':''}${netD.toFixed(1)}%)\n`
  );

  results.push({ symbol, trades, winRate, netPct, maxDD, profitFactor: pf });
}

// Summary
const w = results.filter(r => r.trades > 0);
const totalT = w.reduce((s, r) => s + r.trades, 0);
const totalWins = w.reduce((s, r) => s + Math.round(r.winRate * r.trades / 100), 0);
const avgWR  = totalT > 0 ? totalWins / totalT * 100 : 0;
const avgNet = w.length > 0 ? w.reduce((s, r) => s + r.netPct, 0) / w.length : 0;
const avgDD  = w.length > 0 ? w.reduce((s, r) => s + r.maxDD, 0) / w.length : 0;
const avgPF  = w.length > 0 ? w.reduce((s, r) => s + r.profitFactor, 0) / w.length : 0;
const avgT   = w.length > 0 ? totalT / w.length : 0;

const v19w = v19data.filter(r => r.trades > 0);
const v19T  = v19w.reduce((s, r) => s + r.trades, 0);
const v19Wins = v19w.reduce((s, r) => s + Math.round(r.winRate * r.trades / 100), 0);
const v19WR  = v19T > 0 ? v19Wins / v19T * 100 : 0;
const v19Net = v19w.length > 0 ? v19w.reduce((s, r) => s + r.netPct, 0) / v19w.length : 0;
const v19DD  = v19w.length > 0 ? v19w.reduce((s, r) => s + r.maxDD, 0) / v19w.length : 0;

console.log('\n' + '='.repeat(72));
console.log('v21 vs v19 汇总');
console.log('='.repeat(72));
console.log(`有交易股票: v19=${v19w.length}/30  v21=${w.length}/30`);
console.log(`均值交易数: v19=${(v19T/v19w.length).toFixed(1)}  v21=${avgT.toFixed(1)}  Δ${(avgT-v19T/v19w.length)>=0?'+':''}${(avgT-v19T/v19w.length).toFixed(1)}`);
console.log(`综合胜率:   v19=${v19WR.toFixed(1)}%  v21=${avgWR.toFixed(1)}%  Δ${(avgWR-v19WR)>=0?'+':''}${(avgWR-v19WR).toFixed(1)}%`);
console.log(`均值净收益: v19=${v19Net.toFixed(2)}%  v21=${avgNet.toFixed(2)}%  Δ${(avgNet-v19Net)>=0?'+':''}${(avgNet-v19Net).toFixed(2)}%`);
console.log(`均值最大DD: v19=${v19DD.toFixed(2)}%  v21=${avgDD.toFixed(2)}%`);
console.log(`均值PF:     v21=${avgPF.toFixed(3)}`);

const wr50 = w.filter(r => r.winRate >= 50).length;
const wr60 = w.filter(r => r.winRate >= 60).length;
const pf12 = w.filter(r => r.profitFactor >= 1.2).length;
const pf15 = w.filter(r => r.profitFactor >= 1.5).length;
console.log(`\nWR>=50%: v19=${v19w.filter(r=>r.winRate>=50).length}/${v19w.length}  v21=${wr50}/${w.length}`);
console.log(`WR>=60%: v19=${v19w.filter(r=>r.winRate>=60).length}/${v19w.length}  v21=${wr60}/${w.length}`);
console.log(`PF>=1.2: v21=${pf12}/${w.length}  PF>=1.5: v21=${pf15}/${w.length}`);

console.log('\n净收益改善(v21>v19):');
const improved = results.filter(r => r.trades > 0 && r.netPct > (v19map[r.symbol]?.netPct || 0));
improved.sort((a,b) => (b.netPct-(v19map[b.symbol]?.netPct||0)) - (a.netPct-(v19map[a.symbol]?.netPct||0))).slice(0,8).forEach(r => {
  const v = v19map[r.symbol] || {};
  console.log(`  ${r.symbol.padEnd(16)} v19=${(v.netPct||0).toFixed(1)}% → v21=${r.netPct.toFixed(1)}% Δ${(r.netPct-(v.netPct||0))>=0?'+':''}${(r.netPct-(v.netPct||0)).toFixed(1)}%`);
});

console.log('\n净收益退步(v21<v19):');
const regressed = results.filter(r => r.trades > 0 && r.netPct < (v19map[r.symbol]?.netPct || 0));
regressed.sort((a,b) => (a.netPct-(v19map[a.symbol]?.netPct||0)) - (b.netPct-(v19map[b.symbol]?.netPct||0))).slice(0,8).forEach(r => {
  const v = v19map[r.symbol] || {};
  console.log(`  ${r.symbol.padEnd(16)} v19=${(v.netPct||0).toFixed(1)}% → v21=${r.netPct.toFixed(1)}% Δ${(r.netPct-(v.netPct||0)).toFixed(1)}%`);
});

const outPath = path.join(__dir, 'v21_batch_30.json');
writeFileSync(outPath, JSON.stringify(results, null, 2));
console.log(`\n✅ 结果保存: ${outPath}`);
