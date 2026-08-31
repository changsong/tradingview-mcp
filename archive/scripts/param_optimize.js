#!/usr/bin/env node
/**
 * 参数优化回测 - 测试不同参数组合
 * 用法: node param_optimize.js
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8', cwd: process.cwd(), timeout: 30000
    });
    return JSON.parse(result);
  } catch (error) {
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadStocks(filepath) {
  const content = readFileSync(filepath, 'utf8').trim();
  return content.split(',').map(s => s.trim()).filter(s => s);
}

// 生成带参数的策略代码
function buildStrategy(params) {
  const src = readFileSync('strategy_v8_cn.pine', 'utf8');
  return src
    .replace(/input\.float\(2\.0,\s*"急拉阈值%"\)/, `input.float(${params.pumpPct}, "急拉阈值%")`)
    .replace(/input\.float\(1\.0,\s*"急跌阈值%"\)/, `input.float(${params.dumpPct}, "急跌阈值%")`)
    .replace(/input\.int\(30,\s*"形态检测窗口\(bars\)"\)/, `input.int(${params.windowBars}, "形态检测窗口(bars)")`)
    .replace(/input\.int\(1,\s*"最少形态次数"\)/, `input.int(${params.minPatternCount}, "最少形态次数")`);
}

async function runBacktest(symbols, label) {
  const results = [];
  for (const symbol of symbols) {
    const idx = symbols.indexOf(symbol) + 1;
    process.stdout.write(`  [${idx}/${symbols.length}] ${symbol}... `);
    try {
      runCommand(`symbol ${symbol}`);
      await sleep(7000);
      runCommand('timeframe 5');
      await sleep(4000);
      await sleep(18000);

      const tables = runCommand('data tables');
      if (!tables || !tables.success || tables.study_count === 0) {
        process.stdout.write('⚠️\n');
        continue;
      }
      const rows = tables.studies[0].tables[0].rows;
      const metrics = {};
      rows.forEach(row => {
        const parts = row.split(' | ');
        if (parts.length >= 2) metrics[parts[0].trim()] = parts[1].trim();
      });
      const winRate = parseFloat((metrics['胜率'] || '0%').replace('%', '')) || 0;
      const netProfit = parseFloat((metrics['净利润'] || '0').replace(/[$,]/g, '')) || 0;
      const trades = parseInt(metrics['交易数']) || 0;
      results.push({ symbol, trades, winRate, netProfit });
      process.stdout.write(`✅ ${trades}次 ${winRate}% ¥${netProfit}\n`);
    } catch (e) {
      process.stdout.write(`❌\n`);
    }
    await sleep(500);
  }
  return results;
}

function summarize(results, label) {
  const valid = results.filter(r => r.trades > 0);
  const profitable = results.filter(r => r.netProfit > 0);
  const totalTrades = results.reduce((s, r) => s + r.trades, 0);
  const avgWR = valid.length > 0 ? valid.reduce((s, r) => s + r.winRate, 0) / valid.length : 0;
  const totalProfit = results.reduce((s, r) => s + r.netProfit, 0);
  const profitableRatio = results.length > 0 ? profitable.length / results.length * 100 : 0;
  return { label, totalTrades, avgWR, totalProfit, profitableRatio, profitable: profitable.length, total: results.length };
}

async function main() {
  const symbols = loadStocks('./watchlist/cn.txt');
  console.log(`\n📊 参数优化回测 - ${symbols.length}只股票 5分钟线\n`);

  // 第四轮：在K-pump1.8(¥1,737,421)基础上，微调dumpPct和windowBars
  // K-pump1.8: pumpPct=1.8, dumpPct=0.9, windowBars=60 → ¥1,737,421
  const paramSets = [
    { label: 'R-dump0.8',       pumpPct: 1.8, dumpPct: 0.8, windowBars: 60,  minPatternCount: 1 },
    { label: 'S-dump1.0',       pumpPct: 1.8, dumpPct: 1.0, windowBars: 60,  minPatternCount: 1 },
    { label: 'T-dump1.1',       pumpPct: 1.8, dumpPct: 1.1, windowBars: 60,  minPatternCount: 1 },
    { label: 'U-w50',           pumpPct: 1.8, dumpPct: 0.9, windowBars: 50,  minPatternCount: 1 },
    { label: 'V-w45',           pumpPct: 1.8, dumpPct: 0.9, windowBars: 45,  minPatternCount: 1 },
    { label: 'W-pump2.0',       pumpPct: 2.0, dumpPct: 1.0, windowBars: 60,  minPatternCount: 1 },
  ];

  const allResults = [];

  for (const params of paramSets) {
    console.log(`\n========================================`);
    console.log(`🔧 测试: ${params.label}`);
    console.log(`   pumpPct=${params.pumpPct} dumpPct=${params.dumpPct} windowBars=${params.windowBars} minPattern=${params.minPatternCount}`);
    console.log(`========================================`);

    // 注入参数到策略
    const code = buildStrategy(params);
    writeFileSync('strategy_param_test.pine', code, 'utf-8');

    // 加载并编译
    const setResult = runCommand('pine set --file strategy_param_test.pine');
    if (!setResult?.success) { console.log('❌ 加载失败'); continue; }
    const compileResult = runCommand('pine compile');
    if (!compileResult?.success || compileResult?.has_errors) { console.log('❌ 编译失败'); continue; }
    await sleep(3000);

    const results = await runBacktest(symbols, params.label);
    const summary = summarize(results, params.label);
    allResults.push({ params, summary, results });

    console.log(`\n  📈 ${params.label}: 交易${summary.totalTrades}次 | 胜率${summary.avgWR.toFixed(1)}% | 净利润¥${summary.totalProfit.toFixed(0)} | 盈利股票${summary.profitable}/${summary.total}(${summary.profitableRatio.toFixed(1)}%)`);
  }

  // 最终对比
  console.log('\n\n========================================');
  console.log('📊 参数组合对比汇总');
  console.log('========================================');
  console.log('组合名称          | 交易数 | 胜率%  | 净利润¥    | 盈利占比%');
  console.log('------------------|--------|--------|------------|----------');
  allResults.sort((a, b) => b.summary.totalProfit - a.summary.totalProfit);
  allResults.forEach(r => {
    const s = r.summary;
    console.log(`${s.label.padEnd(18)}| ${String(s.totalTrades).padEnd(7)}| ${s.avgWR.toFixed(1).padEnd(7)}| ${s.totalProfit.toFixed(0).padEnd(11)}| ${s.profitableRatio.toFixed(1)}`);
  });

  const best = allResults[0];
  console.log(`\n🏆 最优: ${best.summary.label} - pumpPct=${best.params.pumpPct} dumpPct=${best.params.dumpPct} windowBars=${best.params.windowBars}`);

  writeFileSync(`param_optimize_${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
    JSON.stringify(allResults, null, 2), 'utf-8');
  console.log('\n✅ 结果已保存');
}

main().catch(console.error);
