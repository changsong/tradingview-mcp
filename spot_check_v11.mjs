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

// v10 reference
const v10ref = {
  'SZSE:300505': {pf:7.44, wr:75, t:8},
  'SZSE:002245': {pf:5.75, wr:86, t:7},
  'SSE:600660':  {pf:3.50, wr:60, t:10},
  'SSE:603606':  {pf:1.31, wr:45, t:11},
  'SZSE:000957': {pf:0.00, wr:0,  t:9},
  'SSE:603766':  {pf:1.79, wr:54, t:13},
  'SSE:600885':  {pf:1.47, wr:56, t:25},
  'SSE:600983':  {pf:1.05, wr:40, t:10},  // improved in v10
  'SZSE:300445': {pf:4.35, wr:80, t:5},   // improved in resume
};

const testSymbols = Object.keys(v10ref);
console.log('v11 spot-check (' + testSymbols.length + ' symbols)\n');

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
  const ref = v10ref[sym] || {};
  const pfD = (parseFloat(pf) - (ref.pf||0)).toFixed(2);
  const sign = parseFloat(pfD) >= 0 ? '+' : '';

  console.log(sym.padEnd(15) + ' v11: ' + t + '笔 WR=' + wr + '% PF=' + pf +
    '  | v10: PF=' + (ref.pf||0).toFixed(2) + ' t=' + (ref.t||0) +
    '  Δ=' + sign + pfD);
}
