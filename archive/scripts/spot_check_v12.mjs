#!/usr/bin/env node
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dir = path.dirname(fileURLToPath(import.meta.url));

const TV = (args) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], {
    cwd: __dir, encoding: 'utf8', timeout: 90000
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

// v11 reference (from backtest_v11_2026-04-23T13-57-28.json)
const v11ref = {
  'SZSE:300505': {pf:7.44, wr:75, t:8},
  'SZSE:002245': {pf:5.75, wr:86, t:7},
  'SSE:600660':  {pf:3.50, wr:60, t:10},
  'SSE:603606':  {pf:1.31, wr:45, t:11},
  'SZSE:000957': {pf:0.00, wr:0,  t:0},   // was 0 trades in v11
  'SSE:603766':  {pf:1.79, wr:54, t:13},
  'SSE:600885':  {pf:1.47, wr:56, t:25},
  'SSE:603103':  {pf:0.00, wr:0,  t:4},   // 0% WR problem stock
  'SZSE:002469': {pf:0.00, wr:0,  t:3},   // 0% WR problem stock
};

const testSymbols = Object.keys(v11ref);
console.log('v12 spot-check (' + testSymbols.length + ' symbols)\n');

for (const sym of testSymbols) {
  const sw = TV('symbol ' + sym);
  if (!sw?.success) { console.log(sym + ' switch failed'); continue; }
  await sleep(6000);

  const st = TV('data strategy');
  const m = st?.metrics || {};
  const t = m.totalTrades || 0;
  const w = m.winningTrades || 0;
  const wr = t > 0 ? (w/t*100).toFixed(0) : 0;
  const pf = (m.profitFactor || 0).toFixed(2);
  const net = ((m.netProfitPercent || 0)*100).toFixed(1);
  const ref = v11ref[sym] || {};
  const pfD = (parseFloat(pf) - (ref.pf||0)).toFixed(2);
  const sign = parseFloat(pfD) >= 0 ? '+' : '';
  const tDelta = t - (ref.t || 0);
  const tSign = tDelta >= 0 ? '+' : '';

  console.log(sym.padEnd(15) + ' v12: ' + t + '笔 WR=' + wr + '% PF=' + pf + ' Net=' + net + '%' +
    '  | v11: PF=' + (ref.pf||0).toFixed(2) + ' t=' + (ref.t||0) +
    '  PF Δ=' + sign + pfD + '  t Δ=' + tSign + tDelta);
}
