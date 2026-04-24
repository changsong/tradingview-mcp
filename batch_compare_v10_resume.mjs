#!/usr/bin/env node
/**
 * Resume v10 batch: only processes the 56 missing symbols, then merges with existing 64-symbol JSON
 */

import { spawnSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));

const TV = (args, timeout = 20000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], {
    cwd: __dir, encoding: 'utf8', timeout,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

const checkConn = () => {
  const r = TV('status', 6000);
  return r?.success === true;
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Load existing partial results (64 done)
const existing = JSON.parse(readFileSync(path.join(__dir, 'backtest_v10_cn_2026-04-22T21-15-40.json'), 'utf8'));
const done = new Set(existing.results.map(r => r.symbol));

// v6 baseline for comparison
const v6data = JSON.parse(readFileSync(path.join(__dir, 'backtest_v6_cn_2026-04-22T20-34-46.json'), 'utf8'));
const v6map = {};
for (const r of v6data.results) v6map[r.symbol] = r;

// All symbols → filter to missing only
const allSymbols = readFileSync(path.join(__dir, 'watchlist/cn.txt'), 'utf8')
  .trim().split(',').map(s => s.trim()).filter(Boolean);
const symbols = allSymbols.filter(s => !done.has(s));

console.log(`\nResume: ${symbols.length} missing symbols to process\n`);

const newResults = [];
let processed = 0;

for (const symbol of symbols) {
  processed++;

  // Connection check with retry
  if (!checkConn()) {
    process.stdout.write(`[${processed}] 连接断开，等待8秒...\n`);
    await sleep(8000);
    if (!checkConn()) {
      process.stdout.write(`连接仍不可用，跳过 ${symbol}\n`);
      continue;
    }
  }

  // Symbol switch with retry
  let switched = false;
  for (let attempt = 0; attempt < 3; attempt++) {
    const sw = TV(`symbol ${symbol}`, 15000);
    if (sw?.success) { switched = true; break; }
    process.stdout.write(`  切换重试 ${attempt+1}/3...\n`);
    await sleep(3000);
  }

  if (!switched) {
    process.stdout.write(`[${processed}/${symbols.length}] ${symbol} 切换失败（跳过）\n`);
    continue;
  }

  await sleep(5000);

  const st = TV('data strategy', 20000);
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

  await sleep(1500);
}

// Merge with existing results
const allResults = [...existing.results, ...newResults];
const w = allResults.filter(r => r.totalTrades > 0);

const totalT = w.reduce((s,r) => s+r.totalTrades, 0);
const totalW = w.reduce((s,r) => s+r.wins, 0);
const avgPF  = w.reduce((s,r) => s+r.profitFactor, 0) / (w.length || 1);
const avgNet = w.reduce((s,r) => s+r.netProfitPct, 0) / (w.length || 1);

const improved  = allResults.filter(r => r.totalTrades > 0 && r.pfDelta > 0.05).length;
const regressed = allResults.filter(r => r.totalTrades > 0 && r.pfDelta < -0.05).length;
const neutral   = allResults.filter(r => r.totalTrades > 0 && Math.abs(r.pfDelta) <= 0.05).length;

console.log('\n' + '='.repeat(70));
console.log('v6 vs v10 完整对比报告（合并结果）');
console.log('='.repeat(70));
console.log(`\n有信号标的：v6=112  v10=${w.length}`);
console.log(`总交易笔数：v6=657  v10=${totalT}`);
console.log(`综合胜率：  v6=43.5%  v10=${(totalW/totalT*100).toFixed(1)}%`);
console.log(`均值胜率：  v6=37.7%  v10=${(w.reduce((s,r)=>s+r.winRate,0)/w.length).toFixed(1)}%`);
console.log(`均值PF：    v6=1.910  v10=${avgPF.toFixed(3)}`);
console.log(`均值净收益：v6=-0.02%  v10=${avgNet.toFixed(2)}%`);
console.log(`\nPF提升：${improved}  PF退步：${regressed}  持平：${neutral}`);

const pfGt15 = w.filter(r=>r.profitFactor>=1.5).length;
const wr50   = w.filter(r=>r.winRate>=50).length;
console.log(`盈利因子>=1.5：v6=31/112(28%)  v10=${pfGt15}/${w.length}(${(pfGt15/w.length*100).toFixed(0)}%)`);
console.log(`胜率>=50%：    v6=50/112(45%)  v10=${wr50}/${w.length}(${(wr50/w.length*100).toFixed(0)}%)`);

const sorted = [...w].sort((a,b)=>b.profitFactor-a.profitFactor);
console.log('\n🏆 v10 TOP 10:');
sorted.slice(0,10).forEach(r => {
  const sign = r.pfDelta >= 0 ? '+' : '';
  console.log(`  ${r.symbol.padEnd(15)} ${r.totalTrades}笔 胜率${r.winRate.toFixed(0)}% PF=${r.profitFactor.toFixed(2)} (v6:${r.v6PF.toFixed(2)} Δ${sign}${r.pfDelta.toFixed(2)})`);
});

const mostImproved = [...allResults.filter(r=>r.totalTrades>0)].sort((a,b)=>b.pfDelta-a.pfDelta);
console.log('\n⬆ 改善最大:');
mostImproved.slice(0,8).forEach(r => {
  console.log(`  ${r.symbol.padEnd(15)} v6 PF=${r.v6PF.toFixed(2)} → v10 PF=${r.profitFactor.toFixed(2)} (Δ+${r.pfDelta.toFixed(2)})`);
});

console.log('\n⬇ 退步最大:');
mostImproved.slice(-8).reverse().forEach(r => {
  console.log(`  ${r.symbol.padEnd(15)} v6 PF=${r.v6PF.toFixed(2)} → v10 PF=${r.profitFactor.toFixed(2)} (Δ${r.pfDelta.toFixed(2)})`);
});

const outPath = path.join(__dir, `backtest_v10_complete_${new Date().toISOString().slice(0,19).replace(/:/g,'-')}.json`);
writeFileSync(outPath, JSON.stringify({
  summary: { totalSymbols: allSymbols.length, withTrades: w.length, improved, regressed, neutral },
  results: allResults,
}, null, 2));
console.log(`\n✅ 完整结果已保存: ${outPath}`);
