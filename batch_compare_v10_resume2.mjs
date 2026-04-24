#!/usr/bin/env node
/**
 * Resume v10 batch (no checkConn — just retry on switch fail)
 * Processes the 56 symbols missing from the original run
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

// Existing 64 results
const existing = JSON.parse(readFileSync(path.join(__dir, 'backtest_v10_cn_2026-04-22T21-15-40.json'), 'utf8'));
const done = new Set(existing.results.map(r => r.symbol));

// v6 baseline
const v6data = JSON.parse(readFileSync(path.join(__dir, 'backtest_v6_cn_2026-04-22T20-34-46.json'), 'utf8'));
const v6map = {};
for (const r of v6data.results) v6map[r.symbol] = r;

const allSymbols = readFileSync(path.join(__dir, 'watchlist/cn.txt'), 'utf8')
  .trim().split(',').map(s => s.trim()).filter(Boolean);
const symbols = allSymbols.filter(s => !done.has(s));

console.log(`\nResume v10: ${symbols.length} remaining symbols\n`);

const newResults = [];
let processed = 0, skipped = 0;

for (const symbol of symbols) {
  processed++;

  // Switch with up to 3 attempts (no checkConn — just try)
  let switched = false;
  for (let attempt = 0; attempt < 3 && !switched; attempt++) {
    if (attempt > 0) {
      process.stdout.write(`  重试 ${attempt}/2...\n`);
      await sleep(8000);
    }
    const sw = TV(`symbol ${symbol}`, 90000);
    if (sw?.success) switched = true;
  }

  if (!switched) {
    process.stdout.write(`[${processed}/${symbols.length}] ${symbol} 切换失败\n`);
    skipped++;
    await sleep(2000);
    continue;
  }

  await sleep(5500);  // wait for strategy to compute

  const st = TV('data strategy', 90000);
  const m = st?.metrics || {};
  const totalTrades = m.totalTrades || 0;
  const wins        = m.winningTrades || 0;
  const winRate     = totalTrades > 0 ? wins / totalTrades * 100 : 0;
  const netPct      = (m.netProfitPercent || 0) * 100;
  const pf          = m.profitFactor || 0;
  const dd          = (m.maxStrategyDrawDownPercent || 0) * 100;

  const v6 = v6map[symbol] || {};
  const pfDelta = pf - (v6.profitFactor || 0);
  const sign = pfDelta >= 0 ? '+' : '';

  process.stdout.write(
    `[${processed}/${symbols.length}] ${symbol.padEnd(15)} ` +
    `${totalTrades}笔 胜率${winRate.toFixed(0)}% PF=${pf.toFixed(2)} ` +
    `(v6:${(v6.profitFactor||0).toFixed(2)} Δ${sign}${pfDelta.toFixed(3)})\n`
  );

  newResults.push({
    symbol, totalTrades, wins, losses: totalTrades - wins,
    winRate, netProfitPct: netPct, profitFactor: pf, maxDrawdownPct: dd,
    v6Trades: v6.totalTrades || 0, v6WinRate: v6.winRate || 0, v6PF: v6.profitFactor || 0,
    pfImproved: pf > (v6.profitFactor || 0),
    pfDelta,
  });
}

console.log(`\n处理完成: ${processed - skipped}/${processed} 成功, ${skipped} 跳过\n`);

// Merge
const allResults = [...existing.results, ...newResults];
const w = allResults.filter(r => r.totalTrades > 0);

if (w.length === 0) { console.log('无有效结果'); process.exit(1); }

const totalT = w.reduce((s,r) => s+r.totalTrades, 0);
const totalW = w.reduce((s,r) => s+r.wins, 0);
const avgPF  = w.reduce((s,r) => s+r.profitFactor, 0) / w.length;
const avgNet = w.reduce((s,r) => s+r.netProfitPct, 0) / w.length;
const avgDD  = w.reduce((s,r) => s+r.maxDrawdownPct, 0) / w.length;

const improved  = allResults.filter(r => r.totalTrades > 0 && r.pfDelta > 0.05).length;
const regressed = allResults.filter(r => r.totalTrades > 0 && r.pfDelta < -0.05).length;
const neutral   = allResults.filter(r => r.totalTrades > 0 && Math.abs(r.pfDelta) <= 0.05).length;

console.log('='.repeat(70));
console.log('v6 vs v10 对比报告（完整合并）');
console.log('='.repeat(70));
console.log(`有信号标的：v6=112  v10=${w.length}`);
console.log(`总交易笔数：v6=657  v10=${totalT}`);
console.log(`综合胜率：  v6=43.5%  v10=${(totalW/totalT*100).toFixed(1)}%`);
console.log(`均值胜率：  v6=37.7%  v10=${(w.reduce((s,r)=>s+r.winRate,0)/w.length).toFixed(1)}%`);
console.log(`均值PF：    v6=1.910  v10=${avgPF.toFixed(3)}`);
console.log(`均值净收益：v6=-0.02%  v10=${avgNet.toFixed(2)}%`);
console.log(`均值最大回撤：         v10=${avgDD.toFixed(2)}%`);
console.log(`\nPF提升：${improved}  PF退步：${regressed}  持平：${neutral}`);

const pfGt15 = w.filter(r=>r.profitFactor>=1.5).length;
const pfGt12 = w.filter(r=>r.profitFactor>=1.2).length;
const wr50   = w.filter(r=>r.winRate>=50).length;
console.log(`PF>=1.5：v6=31/112(28%)  v10=${pfGt15}/${w.length}(${(pfGt15/w.length*100).toFixed(0)}%)`);
console.log(`PF>=1.2：v6=?/112        v10=${pfGt12}/${w.length}(${(pfGt12/w.length*100).toFixed(0)}%)`);
console.log(`胜率>=50%：v6=50/112(45%)  v10=${wr50}/${w.length}(${(wr50/w.length*100).toFixed(0)}%)`);

const sorted = [...w].sort((a,b)=>b.profitFactor-a.profitFactor);
console.log('\nTOP 10 (by PF):');
sorted.slice(0,10).forEach(r => {
  const s = r.pfDelta >= 0 ? '+' : '';
  console.log(`  ${r.symbol.padEnd(15)} ${r.totalTrades}笔 WR${r.winRate.toFixed(0)}% PF=${r.profitFactor.toFixed(2)} (v6:${r.v6PF.toFixed(2)} Δ${s}${r.pfDelta.toFixed(2)})`);
});

const byDelta = [...allResults.filter(r=>r.totalTrades>0)].sort((a,b)=>b.pfDelta-a.pfDelta);
console.log('\nMost Improved (v10-v6 PF delta):');
byDelta.slice(0,8).forEach(r => {
  console.log(`  ${r.symbol.padEnd(15)} ${r.v6PF.toFixed(2)} → ${r.profitFactor.toFixed(2)} (Δ+${r.pfDelta.toFixed(2)})`);
});
console.log('\nMost Regressed:');
byDelta.slice(-8).reverse().forEach(r => {
  console.log(`  ${r.symbol.padEnd(15)} ${r.v6PF.toFixed(2)} → ${r.profitFactor.toFixed(2)} (Δ${r.pfDelta.toFixed(2)})`);
});

const outPath = path.join(__dir, `backtest_v10_complete_${new Date().toISOString().slice(0,19).replace(/:/g,'-')}.json`);
writeFileSync(outPath, JSON.stringify({
  summary: { totalSymbols: allSymbols.length, withTrades: w.length, improved, regressed, neutral,
    v10AvgPF: avgPF, v10AvgWR: w.reduce((s,r)=>s+r.winRate,0)/w.length, v10AvgNet: avgNet },
  results: allResults,
}, null, 2));
console.log(`\n✅ 完整结果已保存: ${outPath}`);
