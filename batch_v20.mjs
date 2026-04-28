#!/usr/bin/env node
/**
 * v20 batch test — 30 symbols from cn.txt
 * v20 adds ADX > 18 as hard entry requirement
 */

import { spawnSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const sleep = ms => new Promise(r => setTimeout(r, ms));

// Generic CLI call with string args (space-split)
const TV = (args, timeout = 120000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], {
    cwd: __dir, encoding: 'utf8', timeout,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

// CLI call with array args (for complex strings like JS expressions)
const TVargs = (args, timeout = 120000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args], {
    cwd: __dir, encoding: 'utf8', timeout,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

// CLI call with stdin
const TVstdin = (args, stdin, timeout = 120000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], {
    cwd: __dir, encoding: 'utf8', timeout, input: stdin,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

// ─── STEP 1: Load v20 source ──────────────────────────────────────────────
const v20src = readFileSync(path.join(__dir, 'A_Share_SQZMOM_PRO_v20_Daily.pine'), 'utf8');
const cnTxt = readFileSync(path.join(__dir, 'watchlist/cn.txt'), 'utf8');
const allSymbols = cnTxt.trim().split(',').map(s => s.trim()).filter(Boolean);
const symbols = allSymbols.slice(0, 30);

console.log(`\n=== v20 Batch Test (${symbols.length} symbols) ===`);
console.log('v20 change: ADX > 18 as hard entry condition\n');

// ─── STEP 2: Set Pine source ──────────────────────────────────────────────
console.log('Setting Pine source (v20)...');
const setResult = TVstdin('pine set', v20src);
if (!setResult?.success) {
  console.error('Failed to set Pine source:', JSON.stringify(setResult));
  process.exit(1);
}
console.log('Pine source set OK');
await sleep(1000);

// ─── STEP 3: Compile ──────────────────────────────────────────────────────
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

// ─── STEP 4: Remove current study and add v20 ────────────────────────────
console.log('Removing current study from chart...');
const state = TV('state');
if (state?.studies?.length > 0) {
  for (const study of state.studies) {
    console.log(`  Removing: ${study.name} (${study.id})`);
    const rem = TV(`indicator remove ${study.id}`);
    console.log('  Remove result:', JSON.stringify(rem));
    await sleep(1500);
  }
} else {
  console.log('  No studies on chart');
}

// Click "添加到图表" button
const clickJS = `
  const buttons = Array.from(document.querySelectorAll('button'));
  let found = null;
  for (const btn of buttons) {
    const title = (btn.getAttribute('title') || '').trim();
    const text  = (btn.textContent || '').trim();
    if (title === '添加到图表' || title === 'Add to chart' || text === '添加到图表') {
      found = title || text;
      btn.click();
      break;
    }
  }
  JSON.stringify({ clicked: found !== null, label: found, total: buttons.length });
`;

console.log('\nAdding v20 to chart...');
let chartLoaded = false;
for (let attempt = 0; attempt < 5; attempt++) {
  const clickResult = TVargs(['ui', 'eval', clickJS], 15000);
  console.log(`  Attempt ${attempt+1} click:`, JSON.stringify(clickResult));
  await sleep(3000);

  const ns = TV('state');
  const hasV20 = ns?.studies?.some(s => s.name.includes('v20'));
  if (hasV20) {
    console.log(`  v20 confirmed on chart!`);
    chartLoaded = true;
    break;
  }
  if (ns?.studies?.length > 0 && !hasV20) {
    console.log(`  Studies on chart: ${ns.studies.map(s=>s.name).join(', ')}`);
    console.log(`  Different version detected, continuing...`);
    chartLoaded = true;
    break;
  }
  await sleep(2000);
}

if (!chartLoaded) {
  console.error('Failed to add v20 to chart. Current state:', JSON.stringify(TV('state')));
  process.exit(1);
}

await sleep(3000);

// ─── STEP 5: Load v19 for comparison ─────────────────────────────────────
const v19data = JSON.parse(readFileSync(path.join(__dir, 'v19_batch_30.json'), 'utf8'));
const v19map = {};
for (const r of v19data) v19map[r.symbol] = r;

// ─── STEP 6: Batch test ───────────────────────────────────────────────────
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

  const v19 = v19map[symbol] || {};
  const wrD = winRate - (v19.winRate || 0);
  const tD  = trades - (v19.trades || 0);

  process.stdout.write(
    `[${i+1}/${symbols.length}] ${symbol.padEnd(16)} ` +
    `${trades}笔 WR=${winRate.toFixed(0)}% Net=${netPct.toFixed(1)}% DD=${maxDD.toFixed(1)}%` +
    `  (v19: ${v19.trades||0}笔 WR=${(v19.winRate||0).toFixed(0)}%` +
    ` Δt=${tD>=0?'+':''}${tD} ΔWR=${wrD>=0?'+':''}${wrD.toFixed(0)}%)\n`
  );

  results.push({ symbol, trades, winRate, netPct, maxDD });
}

// ─── Summary ──────────────────────────────────────────────────────────────
const w = results.filter(r => r.trades > 0);
const totalT = w.reduce((s, r) => s + r.trades, 0);
const totalWins = w.reduce((s, r) => s + Math.round(r.winRate * r.trades / 100), 0);
const avgWR  = totalT > 0 ? totalWins / totalT * 100 : 0;
const avgNet = w.length > 0 ? w.reduce((s, r) => s + r.netPct, 0) / w.length : 0;
const avgDD  = w.length > 0 ? w.reduce((s, r) => s + r.maxDD, 0) / w.length : 0;
const avgT   = w.length > 0 ? totalT / w.length : 0;

const v19w = v19data.filter(r => r.trades > 0);
const v19T  = v19w.reduce((s, r) => s + r.trades, 0);
const v19Wins = v19w.reduce((s, r) => s + Math.round(r.winRate * r.trades / 100), 0);
const v19WR  = v19T > 0 ? v19Wins / v19T * 100 : 0;
const v19Net = v19w.length > 0 ? v19w.reduce((s, r) => s + r.netPct, 0) / v19w.length : 0;
const v19DD  = v19w.length > 0 ? v19w.reduce((s, r) => s + r.maxDD, 0) / v19w.length : 0;

console.log('\n' + '='.repeat(72));
console.log('v20 vs v19 汇总');
console.log('='.repeat(72));
console.log(`有交易股票: v19=${v19w.length}/30  v20=${w.length}/30`);
console.log(`均值交易数: v19=${(v19T/v19w.length).toFixed(1)}  v20=${avgT.toFixed(1)}  Δ${(avgT-v19T/v19w.length)>=0?'+':''}${(avgT-v19T/v19w.length).toFixed(1)}`);
console.log(`综合胜率:   v19=${v19WR.toFixed(1)}%  v20=${avgWR.toFixed(1)}%  Δ${(avgWR-v19WR)>=0?'+':''}${(avgWR-v19WR).toFixed(1)}%`);
console.log(`均值净收益: v19=${v19Net.toFixed(2)}%  v20=${avgNet.toFixed(2)}%  Δ${(avgNet-v19Net)>=0?'+':''}${(avgNet-v19Net).toFixed(2)}%`);
console.log(`均值最大DD: v19=${v19DD.toFixed(2)}%  v20=${avgDD.toFixed(2)}%`);

const wr50 = w.filter(r => r.winRate >= 50).length;
const wr60 = w.filter(r => r.winRate >= 60).length;
const v19wr50 = v19w.filter(r => r.winRate >= 50).length;
const v19wr60 = v19w.filter(r => r.winRate >= 60).length;
console.log(`\nWR>=50%: v19=${v19wr50}/${v19w.length}  v20=${wr50}/${w.length}`);
console.log(`WR>=60%: v19=${v19wr60}/${v19w.length}  v20=${wr60}/${w.length}`);

console.log('\n最差标的 (WR<30%):');
results.filter(r => r.trades > 0 && r.winRate < 30)
  .sort((a,b) => a.winRate - b.winRate)
  .forEach(r => console.log(`  ${r.symbol.padEnd(16)} ${r.trades}笔 WR=${r.winRate.toFixed(0)}% Net=${r.netPct.toFixed(1)}%`));

console.log('\n最佳标的 (WR>=60%):');
results.filter(r => r.trades > 0 && r.winRate >= 60)
  .sort((a,b) => b.winRate - a.winRate)
  .forEach(r => console.log(`  ${r.symbol.padEnd(16)} ${r.trades}笔 WR=${r.winRate.toFixed(0)}% Net=${r.netPct.toFixed(1)}%`));

const outPath = path.join(__dir, 'v20_batch_30.json');
writeFileSync(outPath, JSON.stringify(results, null, 2));
console.log(`\n✅ 结果保存: ${outPath}`);
