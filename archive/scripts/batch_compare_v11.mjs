#!/usr/bin/env node
/**
 * v11 vs v10 batch comparison — runs on the 60 symbols that had v10 trades
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

// Load v10 data (only test symbols that had v10 trades)
const v10data = JSON.parse(readFileSync(path.join(__dir, 'backtest_v10_cn_2026-04-22T21-15-40.json'), 'utf8'));
const v10map = {};
for (const r of v10data.results) v10map[r.symbol] = r;
const symbols = v10data.results.filter(r => r.totalTrades > 0).map(r => r.symbol);

// v6 baseline
const v6data = JSON.parse(readFileSync(path.join(__dir, 'backtest_v6_cn_2026-04-22T20-34-46.json'), 'utf8'));
const v6map = {};
for (const r of v6data.results) v6map[r.symbol] = r;

console.log(`\nv11 batch: ${symbols.length} symbols (those with v10 trades)\n`);

const results = [];
let processed = 0, skipped = 0;

for (const symbol of symbols) {
  processed++;

  // Symbol switch with retry
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

  const v10 = v10map[symbol] || {};
  const v6  = v6map[symbol]  || {};

  const pfDelta10 = pf - (v10.profitFactor || 0);
  const pfDelta6  = pf - (v6.profitFactor  || 0);
  const sign10 = pfDelta10 >= 0 ? '+' : '';
  const sign6  = pfDelta6  >= 0 ? '+' : '';

  process.stdout.write(
    `[${processed}/${symbols.length}] ${symbol.padEnd(15)} ` +
    `${totalTrades}笔 WR=${winRate.toFixed(0)}% PF=${pf.toFixed(2)} ` +
    `(v10 Δ${sign10}${pfDelta10.toFixed(2)} | v6 Δ${sign6}${pfDelta6.toFixed(2)})\n`
  );

  results.push({
    symbol, totalTrades, wins, losses: totalTrades - wins,
    winRate, netProfitPct: netPct, profitFactor: pf, maxDrawdownPct: dd,
    v10Trades: v10.totalTrades || 0, v10WinRate: v10.winRate || 0, v10PF: v10.profitFactor || 0,
    v6PF: v6.profitFactor || 0,
    pfDelta10, pfDelta6,
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

const v10AvgPF = w.reduce((s,r) => s+r.v10PF, 0) / w.length;

// v10 totals from the source (for comparable calc)
const v10wSyms = w.filter(r => r.v10Trades > 0);
const v10totalT = v10wSyms.reduce((s,r) => s+r.v10Trades, 0);
const v10avgPF_here = v10wSyms.reduce((s,r) => s+r.v10PF, 0) / (v10wSyms.length || 1);

console.log('\n' + '='.repeat(70));
console.log('v10 → v11 对比（相同60股）');
console.log('='.repeat(70));
console.log(`有效信号：v10=${v10wSyms.length}  v11=${w.length}`);
console.log(`总交易数：v10=${v10totalT}  v11=${totalT}`);
console.log(`均值PF：  v10=${v10avgPF_here.toFixed(3)}  v11=${avgPF.toFixed(3)}`);
console.log(`综合胜率：v10 data missing  v11=${(totalW/totalT*100).toFixed(1)}%`);
console.log(`均值净收：v11=${avgNet.toFixed(2)}%  均值最大回撤：v11=${avgDD.toFixed(2)}%`);

const imp10  = results.filter(r => r.totalTrades > 0 && r.pfDelta10 > 0.1).length;
const reg10  = results.filter(r => r.totalTrades > 0 && r.pfDelta10 < -0.1).length;
const neut10 = results.filter(r => r.totalTrades > 0 && Math.abs(r.pfDelta10) <= 0.1).length;
console.log(`\nv11 vs v10: 提升=${imp10} 退步=${reg10} 持平=${neut10}`);

const pf15 = w.filter(r => r.profitFactor >= 1.5).length;
const pf12 = w.filter(r => r.profitFactor >= 1.2).length;
const wr50 = w.filter(r => r.winRate >= 50).length;
console.log(`PF>=1.5: v11=${pf15}/${w.length}(${Math.round(pf15/w.length*100)}%)  v10=13/60(22%)`);
console.log(`PF>=1.2: v11=${pf12}/${w.length}(${Math.round(pf12/w.length*100)}%)`);
console.log(`WR>=50%: v11=${wr50}/${w.length}(${Math.round(wr50/w.length*100)}%)  v10=26/60(43%)`);

const sorted = [...w].sort((a,b) => b.profitFactor - a.profitFactor);
console.log('\nTOP 10 (v11 PF):');
sorted.slice(0,10).forEach(r => {
  const s = r.pfDelta10 >= 0 ? '+' : '';
  console.log(`  ${r.symbol.padEnd(15)} ${r.totalTrades}笔 WR${r.winRate.toFixed(0)}% PF=${r.profitFactor.toFixed(2)} (v10:${r.v10PF.toFixed(2)} Δ${s}${r.pfDelta10.toFixed(2)})`);
});

const byDelta = [...results.filter(r=>r.totalTrades>0)].sort((a,b)=>b.pfDelta10-a.pfDelta10);
console.log('\n⬆ 改善最大 (v11-v10):');
byDelta.slice(0,8).forEach(r => {
  console.log(`  ${r.symbol.padEnd(15)} v10 PF=${r.v10PF.toFixed(2)} → v11 PF=${r.profitFactor.toFixed(2)} Δ+${r.pfDelta10.toFixed(2)}`);
});
console.log('\n⬇ 退步最大:');
byDelta.slice(-8).reverse().forEach(r => {
  console.log(`  ${r.symbol.padEnd(15)} v10 PF=${r.v10PF.toFixed(2)} → v11 PF=${r.profitFactor.toFixed(2)} Δ${r.pfDelta10.toFixed(2)}`);
});

const outPath = path.join(__dir, `backtest_v11_${new Date().toISOString().slice(0,19).replace(/:/g,'-')}.json`);
writeFileSync(outPath, JSON.stringify({
  summary: { symbols: symbols.length, withTrades: w.length, improved: imp10, regressed: reg10, neutral: neut10,
    v11AvgPF: avgPF, v11TotalTrades: totalT, v11AvgWR: totalW/totalT*100, v11AvgNet: avgNet },
  results,
}, null, 2));
console.log(`\n✅ 结果已保存: ${outPath}`);
