#!/usr/bin/env node
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';
const VERSION = process.argv[3] || 'v9';

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
  try {
    const content = readFileSync(filepath, 'utf8').trim();
    return content.split(',').map(s => s.trim()).filter(s => s);
  } catch (err) {
    console.error('无法读取股票列表:', err.message);
    return [];
  }
}

async function getStrategyMetrics(symbol) {
  await sleep(20000);
  const tables = runCommand('data tables');
  if (!tables || !tables.success || tables.study_count === 0) return null;

  const rows = tables.studies[0].tables[0].rows;
  const metrics = {};
  rows.forEach(row => {
    const parts = row.split(' | ');
    if (parts.length >= 2) metrics[parts[0].trim()] = parts[1].trim();
  });

  const winRate = parseFloat((metrics['胜率'] || '0%').replace('%', '')) || 0;
  const netProfit = parseFloat((metrics['净利润'] || '0').replace(/[$,]/g, '')) || 0;

  return {
    symbol,
    trades: parseInt(metrics['交易数']) || 0,
    winRate,
    netProfit,
    pricePosition26w: parseFloat(metrics['26周位置%']) || null,
    volatility5d: parseFloat(metrics['5日波动%']) || null,
    dailyTrend: metrics['日线趋势'] || 'N/A'
  };
}

async function main() {
  console.log(`\n📊 批量回测CN股票 - ${VERSION}策略\n`);

  const watchlistPath = process.argv[2] || './watchlist/cn.txt';
  const symbols = loadStocks(watchlistPath);
  if (symbols.length === 0) { console.error('❌ 未找到股票列表'); return; }

  console.log(`✅ 加载了 ${symbols.length} 个股票\n`);
  const results = [];

  for (const symbol of symbols) {
    const idx = symbols.indexOf(symbol) + 1;
    console.log(`[${idx}/${symbols.length}] ${symbol}...`);
    try {
      runCommand(`symbol ${symbol}`);
      await sleep(8000);
      runCommand(`timeframe ${process.argv[4] || '5'}`);
      await sleep(5000);
      const metrics = await getStrategyMetrics(symbol);
      if (metrics) {
        results.push(metrics);
        console.log(`  ✅ 交易${metrics.trades}次, 胜率${metrics.winRate}%, 净利润¥${metrics.netProfit}`);
      } else {
        console.log(`  ⚠️  无法获取数据`);
      }
    } catch (err) {
      console.error(`  ❌ ${symbol}: ${err.message}`);
    }
    await sleep(1000);
  }

  const profitable = results.filter(r => r.netProfit > 0).sort((a, b) => b.netProfit - a.netProfit);
  const unprofitable = results.filter(r => r.netProfit <= 0).sort((a, b) => a.netProfit - b.netProfit);
  const totalTrades = results.reduce((s, r) => s + r.trades, 0);
  const avgWinRate = results.reduce((s, r) => s + r.winRate, 0) / results.length;
  const totalProfit = results.reduce((s, r) => s + r.netProfit, 0);

  console.log('\n================================================================================');
  console.log(`📊 整体统计 - ${VERSION}`);
  console.log('================================================================================');
  console.log(`总股票数: ${results.length}`);
  console.log(`总交易数: ${totalTrades}`);
  console.log(`平均胜率: ${avgWinRate.toFixed(2)}%`);
  console.log(`总净利润: ¥${totalProfit.toFixed(2)}`);
  console.log(`盈利股票占比: ${(profitable.length / results.length * 100).toFixed(2)}%`);

  console.log(`\n🟢 盈利 (${profitable.length}只) TOP10:`);
  profitable.slice(0, 10).forEach((r, i) => {
    console.log(`${i+1}. ${r.symbol}: 交易${r.trades}次, 胜率${r.winRate}%, 净利润¥${r.netProfit}`);
  });

  console.log(`\n🔴 亏损 (${unprofitable.length}只) TOP10:`);
  unprofitable.slice(0, 10).forEach((r, i) => {
    console.log(`${i+1}. ${r.symbol}: 交易${r.trades}次, 胜率${r.winRate}%, 净利润¥${r.netProfit}`);
  });

  const outputFile = `batch_backtest_cn_${VERSION}_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  writeFileSync(outputFile, JSON.stringify({
    test_time: new Date().toISOString(),
    strategy: `CN-急涨急跌吸筹策略 ${VERSION}`,
    total_stocks: results.length,
    profitable_count: profitable.length,
    unprofitable_count: unprofitable.length,
    total_trades: totalTrades,
    avg_win_rate: avgWinRate,
    total_profit: totalProfit,
    results
  }, null, 2), 'utf-8');

  console.log(`\n✅ 结果已保存: ${outputFile}`);
}

main().catch(console.error);
