#!/usr/bin/env node
/**
 * v12 vs v11 batch comparison — runs on the 60 symbols that had v10 trades
 */

import { spawnSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));

const TV = (args, timeout = 90000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], {
    cwd: __dir, encoding: 'utf8', timeout,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Load v11 data as comparison baseline
const v11data = JSON.parse(readFileSync(path.join(__dir, 'backtest_v11_2026-04-23T13-57-28.json'), 'utf8'));
const v11map = {};
for (const r of v11data.results) v11map[r.symbol] = r;

// Load v10 data (only test symbols that had v10 trades)
const v10data = JSON.parse(readFileSync(path.join(__dir, 'backtest_v10_cn_2026-04-22T21-15-40.json'), 'utf8'));
const symbols = v10data.results.filter(r => r.totalTrades > 0).map(r => r.symbol);

console.log(`\nv12 batch: ${symbols.length} symbols (those with v10 trades)\n`);

const results = [];
let processed = 0, skipped = 0;

for (const symbol of symbols) {
  processed++;

  let switched = false;
  for (let attempt = 0; attempt < 3 && !switched; attempt++) {
    if (attempt > 0) { await sleep(5000); process.stdout.write(`  retry ${attempt}...\n`); }
    const sw = TV(`symbol ${symbol}`, 90000);
    if (sw?.success) switched = true;
  }

  if (!switched) {
    process.stdout.write(`[${processed}/${symbols.length}] ${symbol} 切换失败\n`);
    skipped++;
    continue;
  }

  await sleep(6000);

  const st = TV('data strategy', 90000);
  const m = st?.metrics || {};
  const totalTrades = m.totalTrades || 0;
  const wins        = m.winningTrades || 0;
  const winRate     = totalTrades > 0 ? wins / totalTrades * 100 : 0;
  const netPct      = (m.netProfitPercent || 0) * 100;
  const pf          = m.profitFactor || 0;
  const dd          = (m.maxStrategyDrawDownPercent || 0) * 100;

  const v11 = v11map[symbol] || {};

  const pfDelta11 = pf - (v11.profitFactor || 0);
  const sign11 = pfDelta11 >= 0 ? '+' : '';

  process.stdout.write(
    `[${processed}/${symbols.length}] ${symbol.padEnd(15)} ` +
    `${totalTrades}笔 WR=${winRate.toFixed(0)}% PF=${pf.toFixed(2)} ` +
    `(v11 Δ${sign11}${pfDelta11.toFixed(2)})\n`
  );

  results.push({
    symbol, totalTrades, wins, losses: totalTrades - wins,
    winRate, netProfitPct: netPct, profitFactor: pf, maxDrawdownPct: dd,
    v11Trades: v11.totalTrades || 0, v11WinRate: v11.winRate || 0, v11PF: v11.profitFactor || 0,
    pfDelta11,
  });
}

// Summary
const w = results.filter(r => r.totalTrades > 0);
if (w.length === 0) { console.log('No results'); process.exit(1); }

const totalT = w.reduce((s,r) => s+r.totalTrades, 0);
const totalW = w.reduce((s,r) => s+r.wins, 0);
const avgPF  = w.reduce((s,r) => s+r.profitFactor, 0) / w.length;
const avgNet = w.reduce((s,r) => s+r.netProfitPct, 0) / w.length;
const avgDD  = w.reduce((s,r) => s+r.maxDrawdownPct, 0) / w.length;

const v11wSyms = w.filter(r => r.v11Trades > 0);
const v11totalT = v11wSyms.reduce((s,r) => s+r.v11Trades, 0);
const v11avgPF = v11wSyms.reduce((s,r) => s+r.v11PF, 0) / (v11wSyms.length || 1);

console.log('\n' + '='.repeat(70));
console.log('v11 → v12 对比（相同60股）');
console.log('='.repeat(70));
console.log(`有效信号：v11=${v11wSyms.length}  v12=${w.length}`);
console.log(`总交易数：v11=${v11totalT}  v12=${totalT}`);
console.log(`均值PF：  v11=${v11avgPF.toFixed(3)}  v12=${avgPF.toFixed(3)}`);
console.log(`综合胜率：v12=${(totalW/totalT*100).toFixed(1)}%`);
console.log(`均值净收：v12=${avgNet.toFixed(2)}%  均值最大回撤：v12=${avgDD.toFixed(2)}%`);

const imp11  = results.filter(r => r.totalTrades > 0 && r.pfDelta11 > 0.1).length;
const reg11  = results.filter(r => r.totalTrades > 0 && r.pfDelta11 < -0.1).length;
const neut11 = results.filter(r => r.totalTrades > 0 && Math.abs(r.pfDelta11) <= 0.1).length;
console.log(`\nv12 vs v11: 提升=${imp11} 退步=${reg11} 持平=${neut11}`);

const pf15 = w.filter(r => r.profitFactor >= 1.5).length;
const pf12 = w.filter(r => r.profitFactor >= 1.2).length;
const wr50 = w.filter(r => r.winRate >= 50).length;
const wr60 = w.filter(r => r.winRate >= 60).length;
console.log(`PF>=1.5: v12=${pf15}/${w.length}(${Math.round(pf15/w.length*100)}%)  v11=20/54(37%)`);
console.log(`PF>=1.2: v12=${pf12}/${w.length}(${Math.round(pf12/w.length*100)}%)`);
console.log(`WR>=50%: v12=${wr50}/${w.length}(${Math.round(wr50/w.length*100)}%)  v11=~50%`);
console.log(`WR>=60%: v12=${wr60}/${w.length}(${Math.round(wr60/w.length*100)}%)`);

const sorted = [...w].sort((a,b) => b.profitFactor - a.profitFactor);
console.log('\nTOP 10 (v12 PF):');
sorted.slice(0,10).forEach(r => {
  const s = r.pfDelta11 >= 0 ? '+' : '';
  console.log(`  ${r.symbol.padEnd(15)} ${r.totalTrades}笔 WR${r.winRate.toFixed(0)}% PF=${r.profitFactor.toFixed(2)} (v11:${r.v11PF.toFixed(2)} Δ${s}${r.pfDelta11.toFixed(2)})`);
});

const byDelta = [...results.filter(r=>r.totalTrades>0)].sort((a,b)=>b.pfDelta11-a.pfDelta11);
console.log('\n⬆ 改善最大 (v12-v11 PF):');
byDelta.slice(0,8).forEach(r => {
  console.log(`  ${r.symbol.padEnd(15)} v11 PF=${r.v11PF.toFixed(2)} → v12 PF=${r.profitFactor.toFixed(2)} Δ+${r.pfDelta11.toFixed(2)}`);
});
console.log('\n⬇ 退步最大:');
byDelta.slice(-8).reverse().forEach(r => {
  console.log(`  ${r.symbol.padEnd(15)} v11 PF=${r.v11PF.toFixed(2)} → v12 PF=${r.profitFactor.toFixed(2)} Δ${r.pfDelta11.toFixed(2)}`);
});

const outPath = path.join(__dir, `backtest_v12_${new Date().toISOString().slice(0,19).replace(/:/g,'-')}.json`);
writeFileSync(outPath, JSON.stringify({
  summary: { symbols: symbols.length, withTrades: w.length, improved: imp11, regressed: reg11, neutral: neut11,
    v12AvgPF: avgPF, v12TotalTrades: totalT, v12AvgWR: totalW/totalT*100, v12AvgNet: avgNet },
  results,
}, null, 2));
console.log(`\n✅ 结果已保存: ${outPath}`);
