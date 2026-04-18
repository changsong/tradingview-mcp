#!/usr/bin/env node
/**
 * 批量回测US股票列表
 * 收集每只股票的回测数据，找出最佳表现的股票
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      cwd: process.cwd(),
      timeout: 30000
    });
    return JSON.parse(result);
  } catch (error) {
    console.error(`Error: ${cmd}`, error.message);
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 从文件读取股票列表
function loadStocks(filepath) {
  try {
    const content = readFileSync(filepath, 'utf8').trim();
    return content.split(',').map(s => s.trim()).filter(s => s);
  } catch (err) {
    console.error('无法读取股票列表:', err.message);
    return [];
  }
}

// 获取策略指标
async function getStrategyMetrics(symbol) {
  await sleep(10000); // 等待策略重新计算

  const tables = runCommand('data tables');
  if (!tables || !tables.success || tables.study_count === 0) {
    return null;
  }

  const rows = tables.studies[0].tables[0].rows;
  const metrics = {};

  rows.forEach(row => {
    const [key, value] = row.split(' | ');
    metrics[key.trim()] = value.trim();
  });

  return {
    symbol,
    trades: parseInt(metrics['交易数']) || 0,
    winRate: parseFloat(metrics['胜率'].replace('%', '')) || 0,
    profitFactor: parseFloat(metrics['盈利因子']) || 0,
    netProfit: parseFloat(metrics['净利润']) || 0,
    optimizedFilter: metrics['优化过滤'] || '?',
    surge10d: parseFloat(metrics['10日最大涨%']) || 0,
    position26w: parseFloat(metrics['26周位置%']) || 0,
    volatility5d: parseFloat(metrics['5日波动%']) || 0
  };
}

// 主函数
async function main() {
  console.log('================================================================================');
  console.log('📊 批量回测US股票');
  console.log('================================================================================\n');

  const watchlistPath = process.argv[2] || './watchlist/us.txt';
  const symbols = loadStocks(watchlistPath);

  if (symbols.length === 0) {
    console.error('❌ 未找到股票列表');
    return;
  }

  console.log(`✅ 加载了 ${symbols.length} 个股票\n`);
  console.log('开始回测...\n');

  const results = [];

  for (const symbol of symbols) {
    console.log(`\n[${symbols.indexOf(symbol) + 1}/${symbols.length}] 正在测试 ${symbol}...`);

    try {
      // 切换股票
      runCommand(`symbol ${symbol}`);
      await sleep(3000);

      // 设置1分钟周期
      runCommand('timeframe 1');
      await sleep(2000);

      // 获取回测数据
      const metrics = await getStrategyMetrics(symbol);

      if (metrics) {
        results.push(metrics);
        console.log(`  ✅ 交易${metrics.trades}次, 胜率${metrics.winRate}%, 净利润$${metrics.netProfit}`);
      } else {
        console.log(`  ⚠️  无法获取数据`);
      }

    } catch (err) {
      console.error(`  ❌ ${symbol} 测试失败: ${err.message}`);
    }

    await sleep(1000);
  }

  // 分析结果
  console.log('\n================================================================================');
  console.log('📈 回测结果分析');
  console.log('================================================================================\n');

  // 按净利润排序
  const profitable = results.filter(r => r.netProfit > 0).sort((a, b) => b.netProfit - a.netProfit);
  const unprofitable = results.filter(r => r.netProfit <= 0).sort((a, b) => a.netProfit - b.netProfit);

  console.log(`🟢 盈利股票 (${profitable.length}/${results.length}):\n`);
  profitable.forEach((r, idx) => {
    console.log(`${idx + 1}. ${r.symbol}`);
    console.log(`   交易: ${r.trades}, 胜率: ${r.winRate}%, 盈利因子: ${r.profitFactor}`);
    console.log(`   净利润: $${r.netProfit}`);
    console.log(`   优化过滤: ${r.optimizedFilter}, 10日涨幅: ${r.surge10d}%, 26周位置: ${r.position26w}%, 5日波动: ${r.volatility5d}%\n`);
  });

  console.log(`\n🔴 亏损股票 (${unprofitable.length}/${results.length}):\n`);
  unprofitable.slice(0, 10).forEach((r, idx) => {
    console.log(`${idx + 1}. ${r.symbol}: 交易${r.trades}次, 胜率${r.winRate}%, 净利润$${r.netProfit}`);
  });

  // 统计分析
  const totalTrades = results.reduce((sum, r) => sum + r.trades, 0);
  const avgWinRate = results.reduce((sum, r) => sum + r.winRate, 0) / results.length;
  const totalProfit = results.reduce((sum, r) => sum + r.netProfit, 0);

  console.log('\n================================================================================');
  console.log('📊 整体统计');
  console.log('================================================================================\n');
  console.log(`总股票数: ${results.length}`);
  console.log(`总交易数: ${totalTrades}`);
  console.log(`平均胜率: ${avgWinRate.toFixed(2)}%`);
  console.log(`总净利润: $${totalProfit.toFixed(2)}`);
  console.log(`盈利股票占比: ${(profitable.length / results.length * 100).toFixed(2)}%`);

  // 保存结果
  const outputFile = `batch_backtest_results_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  writeFileSync(outputFile, JSON.stringify({
    test_time: new Date().toISOString(),
    strategy: 'US-急涨急跌吸筹策略 v3 (平衡优化)',
    total_stocks: results.length,
    profitable_count: profitable.length,
    unprofitable_count: unprofitable.length,
    total_trades: totalTrades,
    avg_win_rate: avgWinRate,
    total_profit: totalProfit,
    results
  }, null, 2), 'utf-8');

  console.log(`\n✅ 详细结果已保存到: ${outputFile}`);
}

main().catch(console.error);
