#!/usr/bin/env node
/**
 * US SQZMOM v4 Batch Backtest
 * Runs strategy on all us.txt symbols, collects metrics + trade list
 */

import { spawnSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT  = path.join(__dir, '..');
const sleep = ms => new Promise(r => setTimeout(r, ms));

const TV = (args, timeout = 90000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], {
    cwd: ROOT, encoding: 'utf8', timeout,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

const TVargs = (args, timeout = 90000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args], {
    cwd: ROOT, encoding: 'utf8', timeout,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

const TVstdin = (argStr, stdin, timeout = 90000) => {
  const r = spawnSync('node', ['src/cli/index.js', ...argStr.split(' ')], {
    cwd: ROOT, encoding: 'utf8', timeout, input: stdin,
  });
  if (r.error) return null;
  try { return JSON.parse(r.stdout?.trim()); } catch { return null; }
};

// --- config ---
const STRATEGY_FILE = process.argv[2] || path.join(ROOT, 'pine/US_Stock_SQZMOM_Daily_PRO_v4.pine');
const LABEL         = process.argv[3] || 'v4';
const SYMBOLS_FILE  = path.join(ROOT, 'watchlist/us.txt');
const OUT_JSON      = path.join(ROOT, `reports/2026-05-10/us_${LABEL}_batch_backtest.json`);
const OUT_MD        = path.join(ROOT, `reports/2026-05-10/us_${LABEL}_batch_backtest.md`);

// Create output dir
import { mkdirSync } from 'fs';
mkdirSync(path.dirname(OUT_JSON), { recursive: true });

const pineSrc = readFileSync(STRATEGY_FILE, 'utf8');
const allSymbols = readFileSync(SYMBOLS_FILE, 'utf8').trim().split(',').map(s => s.trim()).filter(Boolean);

console.log(`\n=== US SQZMOM ${LABEL} Batch Backtest (${allSymbols.length} symbols) ===`);
console.log(`Strategy: ${path.basename(STRATEGY_FILE)}\n`);

// --- Setup: load strategy ---
console.log('Loading Pine strategy...');
const setResult = TVstdin('pine set', pineSrc);
if (!setResult?.success) { console.error('Failed to set Pine source'); process.exit(1); }
console.log('Pine set OK');
await sleep(1000);

console.log('Compiling...');
const compileResult = TV('pine compile', 30000);
console.log('Compile:', JSON.stringify(compileResult));
await sleep(3000);

const errResult = TV('pine errors');
if (errResult?.errors?.length > 0) {
  console.error('Compile errors:', JSON.stringify(errResult.errors, null, 2));
  process.exit(1);
}
console.log('No compile errors\n');

// --- Remove existing studies and add strategy ---
const state0 = TV('state');
if (state0?.studies?.length > 0) {
  for (const s of state0.studies) {
    console.log(`Removing study: ${s.name} (${s.id})`);
    TV(`indicator remove ${s.id}`);
    await sleep(1500);
  }
}

// Add strategy to chart
// Try both "添加到图表" and "Add to chart" button titles
const clickJS = `
  (function(){
    var titles = ['添加到图表', 'Add to chart', '添加至图表'];
    for(var t of titles){
      var btn = Array.from(document.querySelectorAll('button')).find(b=>b.getAttribute('title')===t);
      if(btn){ btn.click(); return t; }
    }
    // Fallback: look for button with text content
    var btn2 = Array.from(document.querySelectorAll('button')).find(b=>b.textContent.trim()==='添加到图表');
    if(btn2){ btn2.click(); return 'text'; }
    return 'not_found';
  })()
`;
console.log('Adding strategy to chart...');
let chartLoaded = false;

// First check if strategy is already on chart (compiled = auto-added in some TV versions)
const preCheck = TV('state');
if (preCheck?.studies?.length > 0) {
  console.log(`Strategy already on chart: ${preCheck.studies.map(s=>s.name).join(', ')}`);
  chartLoaded = true;
}

if (!chartLoaded) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const clickResult = TVargs(['ui', 'eval', clickJS], 15000);
    console.log(`  click result: ${JSON.stringify(clickResult)}`);
    await sleep(3000);
    const ns = TV('state');
    if (ns?.studies?.length > 0) {
      console.log(`Strategy confirmed: ${ns.studies.map(s=>s.name).join(', ')}`);
      chartLoaded = true;
      break;
    }
    console.log(`Attempt ${attempt+1}: no studies yet...`);
    await sleep(2000);
  }
  if (!chartLoaded) {
    const ns = TV('state');
    if (ns?.studies?.length > 0) chartLoaded = true;
    else { console.error('Strategy not on chart after 6 attempts, exiting'); process.exit(1); }
  }
}

// Ensure Daily timeframe
TV('timeframe D', 15000);
await sleep(2000);

// --- Batch loop ---
const results = [];
const allTrades = [];

for (let i = 0; i < allSymbols.length; i++) {
  const symbol = allSymbols[i];

  // Switch symbol
  let switched = false;
  for (let attempt = 0; attempt < 3 && !switched; attempt++) {
    if (attempt > 0) await sleep(5000);
    const sw = TV(`symbol ${symbol}`, 60000);
    if (sw?.success) switched = true;
  }
  if (!switched) {
    process.stdout.write(`[${i+1}/${allSymbols.length}] ${symbol} SWITCH FAILED\n`);
    results.push({ symbol, trades: 0, winRate: 0, netPct: 0, maxDD: 0, profitFactor: 0, error: 'switch_failed' });
    continue;
  }
  await sleep(5000);

  // Get strategy metrics
  const st = TV('data strategy', 60000);
  const m  = st?.metrics || {};
  const trades   = m.totalTrades || 0;
  const wins     = m.winningTrades || 0;
  const winRate  = trades > 0 ? wins / trades * 100 : 0;
  const netPct   = (m.netProfitPercent || 0) * 100;
  const maxDD    = (m.maxStrategyDrawDownPercent || 0) * 100;
  const pf       = m.profitFactor || 0;
  const avgWin   = (m.avgWinTradePercent || 0) * 100;
  const avgLoss  = (m.avgLosTradePercent || 0) * 100;
  const sharpe   = m.sharpeRatio || 0;

  // Get trade list
  let tradelist = [];
  if (trades > 0) {
    const tl = TV('data trades', 60000);
    tradelist = tl?.trades || [];
    for (const t of tradelist) {
      allTrades.push({ symbol, ...t });
    }
  }

  const lossTrades = tradelist.filter(t => !t.win);
  const winTrades  = tradelist.filter(t => t.win);

  process.stdout.write(
    `[${i+1}/${allSymbols.length}] ${symbol.padEnd(18)} ` +
    `${trades}T WR=${winRate.toFixed(0)}% Net=${netPct.toFixed(1)}% PF=${pf.toFixed(2)} DD=${maxDD.toFixed(1)}%\n`
  );

  results.push({
    symbol, trades, wins, winRate, netPct, maxDD, profitFactor: pf,
    avgWinPct: avgWin, avgLossPct: avgLoss, sharpeRatio: sharpe,
    tradelist: tradelist.map(t => ({
      entry_time: t.entry_time, entry_price: t.entry_price,
      exit_time: t.exit_time, exit_price: t.exit_price,
      exit_comment: t.exit_comment, profit_pct: t.profit_pct, win: t.win
    }))
  });
}

// --- Aggregate stats ---
const valid = results.filter(r => r.trades >= 2);
const hasAny = results.filter(r => r.trades > 0);
const totalT = hasAny.reduce((s,r) => s+r.trades, 0);
const totalW = hasAny.reduce((s,r) => s+r.wins, 0);
const overallWR = totalT > 0 ? totalW/totalT*100 : 0;
const avgNet = valid.length > 0 ? valid.reduce((s,r)=>s+r.netPct,0)/valid.length : 0;
const avgDD  = valid.length > 0 ? valid.reduce((s,r)=>s+r.maxDD,0)/valid.length : 0;
const avgPF  = valid.length > 0 ? valid.reduce((s,r)=>s+r.profitFactor,0)/valid.length : 0;
const avgWR  = valid.length > 0 ? valid.reduce((s,r)=>s+r.winRate,0)/valid.length : 0;
const avgWinPct  = valid.reduce((s,r)=>s+(r.avgWinPct||0),0)/Math.max(valid.length,1);
const avgLossPct = valid.reduce((s,r)=>s+(r.avgLossPct||0),0)/Math.max(valid.length,1);

// Loss analysis
const lossOrders = allTrades.filter(t => !t.win);
const lossReasons = {};
for (const t of lossOrders) {
  lossReasons[t.exit_comment] = (lossReasons[t.exit_comment]||0)+1;
}
const winReasons = {};
for (const t of allTrades.filter(t=>t.win)) {
  winReasons[t.exit_comment] = (winReasons[t.exit_comment]||0)+1;
}

// Sort by loss for analysis
const bigLosses = lossOrders
  .sort((a,b) => a.profit_pct - b.profit_pct)
  .slice(0, 30);

console.log('\n' + '='.repeat(72));
console.log(`US ${LABEL} 批量回测汇总`);
console.log('='.repeat(72));
console.log(`股票总数: ${allSymbols.length}  有交易: ${hasAny.length}  有效样本(≥2笔): ${valid.length}`);
console.log(`总交易笔数: ${totalT}  综合胜率: ${overallWR.toFixed(1)}%`);
console.log(`各股均值胜率: ${avgWR.toFixed(1)}%  均值净收益: ${avgNet.toFixed(2)}%  均值PF: ${avgPF.toFixed(3)}`);
console.log(`均值最大DD: ${avgDD.toFixed(2)}%  平均盈利幅度: ${avgWinPct.toFixed(2)}%  平均亏损幅度: ${avgLossPct.toFixed(2)}%`);
console.log(`盈亏比: ${avgLossPct !== 0 ? (avgWinPct/Math.abs(avgLossPct)).toFixed(2) : 'N/A'}`);
console.log('\n亏损退出原因:', JSON.stringify(lossReasons));
console.log('盈利退出原因:', JSON.stringify(winReasons));

// Save JSON
const output = {
  label: LABEL, generated_at: new Date().toISOString(),
  summary: {
    total_symbols: allSymbols.length, symbols_with_trades: hasAny.length,
    valid_samples: valid.length, total_trades: totalT,
    overall_win_rate: +overallWR.toFixed(2),
    avg_win_rate: +avgWR.toFixed(2), avg_net_pct: +avgNet.toFixed(2),
    avg_drawdown: +avgDD.toFixed(2), avg_profit_factor: +avgPF.toFixed(3),
    avg_win_pct: +avgWinPct.toFixed(2), avg_loss_pct: +avgLossPct.toFixed(2),
    win_loss_ratio: avgLossPct !== 0 ? +(avgWinPct/Math.abs(avgLossPct)).toFixed(2) : 0,
  },
  loss_reasons: lossReasons,
  win_reasons: winReasons,
  top_losses: bigLosses,
  results
};
writeFileSync(OUT_JSON, JSON.stringify(output, null, 2));
console.log(`\nJSON saved: ${OUT_JSON}`);

// --- Generate MD ---
let md = `# US SQZMOM ${LABEL} 批量回测报告\n`;
md += `生成时间: ${new Date().toISOString()}\n\n`;
md += `## 总体统计\n\n`;
md += `| 指标 | 数值 |\n|------|------|\n`;
md += `| 测试股票数 | ${allSymbols.length} |\n`;
md += `| 有交易信号 | ${hasAny.length} 只 |\n`;
md += `| 有效样本(≥2笔) | ${valid.length} 只 |\n`;
md += `| 总交易笔数 | ${totalT} |\n`;
md += `| 综合胜率 | ${overallWR.toFixed(1)}% |\n`;
md += `| 各股平均胜率 | ${avgWR.toFixed(1)}% |\n`;
md += `| 平均净收益 | ${avgNet.toFixed(2)}% |\n`;
md += `| 平均盈利幅度 | +${avgWinPct.toFixed(2)}% |\n`;
md += `| 平均亏损幅度 | ${avgLossPct.toFixed(2)}% |\n`;
md += `| 盈亏比 | ${avgLossPct !== 0 ? (avgWinPct/Math.abs(avgLossPct)).toFixed(2) : 'N/A'} |\n`;
md += `| 平均最大回撤 | ${avgDD.toFixed(2)}% |\n`;
md += `| 平均盈利因子 | ${avgPF.toFixed(3)} |\n\n`;

md += `## 亏损退出原因分布\n\n| 退出原因 | 次数 |\n|---------|------|\n`;
for (const [k,v] of Object.entries(lossReasons).sort((a,b)=>b[1]-a[1])) {
  md += `| ${k} | ${v} |\n`;
}

md += `\n## 盈利退出原因分布\n\n| 退出原因 | 次数 |\n|---------|------|\n`;
for (const [k,v] of Object.entries(winReasons).sort((a,b)=>b[1]-a[1])) {
  md += `| ${k} | ${v} |\n`;
}

// Loss distribution
const lossArr = lossOrders.map(t => t.profit_pct);
const l1 = lossArr.filter(p => p > -2).length;
const l2 = lossArr.filter(p => p <= -2 && p > -5).length;
const l3 = lossArr.filter(p => p <= -5 && p > -10).length;
const l4 = lossArr.filter(p => p <= -10).length;
md += `\n## 亏损幅度分布\n\n| 区间 | 笔数 |\n|------|------|\n`;
md += `| < 2% | ${l1} |\n| 2%-5% | ${l2} |\n| 5%-10% | ${l3} |\n| > 10% | ${l4} |\n`;

md += `\n## 亏损最大的30笔交易\n\n| 股票 | 入场日期 | 出场日期 | 入场价 | 出场价 | 退出原因 | 亏损% |\n|------|---------|---------|--------|--------|---------|-------|\n`;
for (const t of bigLosses) {
  const eDate = new Date(t.entry_time).toISOString().slice(0,10);
  const xDate = new Date(t.exit_time).toISOString().slice(0,10);
  md += `| ${t.symbol} | ${eDate} | ${xDate} | ${t.entry_price} | ${t.exit_price} | ${t.exit_comment} | ${t.profit_pct?.toFixed(2)}% |\n`;
}

md += `\n## 各股回测明细\n\n| 股票 | 交易笔数 | 胜率 | 盈利因子 | 净收益% | 最大回撤% |\n|------|---------|------|---------|--------|----------|\n`;
const sorted = [...results].sort((a,b)=>b.netPct-a.netPct);
for (const r of sorted) {
  if (r.trades === 0) continue;
  md += `| ${r.symbol} | ${r.trades} | ${r.winRate.toFixed(0)}% | ${r.profitFactor.toFixed(2)} | ${r.netPct.toFixed(2)}% | ${r.maxDD.toFixed(2)}% |\n`;
}

writeFileSync(OUT_MD, md);
console.log(`MD saved: ${OUT_MD}`);
console.log('\nDone!');
