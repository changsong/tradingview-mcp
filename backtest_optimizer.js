#!/usr/bin/env node
/**
 * 策略回测优化器
 * 自动测试多个股票，收集回测数据，分析优化效果
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
    console.error(`Error running command: ${cmd}`, error.message);
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

// 获取策略回测数据（通过截图OCR或UI抓取）
async function getStrategyMetrics(symbol) {
  // 等待策略加载
  await sleep(8000);

  // 尝试获取策略数据
  const strategyData = runCommand('data strategy');

  // 如果无法直接获取，返回基础信息
  return {
    symbol,
    timestamp: new Date().toISOString(),
    data_available: strategyData && strategyData.success,
    metrics: strategyData?.metrics || {}
  };
}

// 主函数
async function main() {
  console.log('================================================================================');
  console.log('📊 策略回测优化器');
  console.log('================================================================================\n');

  const watchlistPath = process.argv[2] || './watchlist/us_selected.txt';
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
      console.log(`  切换到 ${symbol}...`);
      runCommand(`symbol ${symbol}`);
      await sleep(3000);

      // 设置1分钟周期
      runCommand('timeframe 1');
      await sleep(2000);

      // 获取回测数据
      console.log(`  收集回测数据...`);
      const metrics = await getStrategyMetrics(symbol);

      results.push(metrics);

      console.log(`  ✅ ${symbol} 测试完成`);

    } catch (err) {
      console.error(`  ❌ ${symbol} 测试失败: ${err.message}`);
      results.push({
        symbol,
        error: err.message
      });
    }

    await sleep(1000);
  }

  // 保存结果
  const outputFile = `backtest_results_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  writeFileSync(outputFile, JSON.stringify({
    test_time: new Date().toISOString(),
    strategy: 'US-急涨急跌吸筹策略 v2 (优化版)',
    total_stocks: results.length,
    results
  }, null, 2), 'utf-8');

  console.log(`\n✅ 回测结果已保存到: ${outputFile}`);
  console.log('\n================================================================================');
}

main().catch(console.error);
