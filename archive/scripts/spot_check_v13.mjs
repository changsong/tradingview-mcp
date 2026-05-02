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

// v11 reference (actual results from batch)
const v11ref = {
  'SZSE:300505': {pf:9.35, wr:86, t:7},
  'SZSE:002245': {pf:0.00, wr:100, t:4},  // TV PF=inf bug
  'SSE:600660':  {pf:13.98, wr:100, t:2}, // TV PF=inf bug in v12 spot check
  'SSE:603606':  {pf:2.25, wr:67, t:9},
  'SZSE:000957': {pf:0.00, wr:0,  t:6},
  'SSE:603766':  {pf:2.43, wr:70, t:10},
  'SSE:600885':  {pf:1.12, wr:55, t:11},
  'SSE:603103':  {pf:0.00, wr:0,  t:3},
  'SZSE:002469': {pf:0.00, wr:0,  t:3},
};

const testSymbols = Object.keys(v11ref);
console.log('v13 spot-check (' + testSymbols.length + ' symbols)\n');

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

  console.log(sym.padEnd(15) + ' v13: ' + t + '笔 WR=' + wr + '% PF=' + pf + ' Net=' + net + '%' +
    '  | v11: PF=' + (ref.pf||0).toFixed(2) + ' t=' + (ref.t||0) +
    '  PF Δ=' + sign + pfD + '  t Δ=' + tSign + tDelta);
}
