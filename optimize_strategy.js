#!/usr/bin/env node
/**
 * 策略参数优化器
 * 测试不同参数组合，找到最优配置
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

// 获取策略指标
async function getStrategyMetrics() {
  await sleep(8000); // 等待策略重新计算

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
    trades: parseInt(metrics['交易数']) || 0,
    winRate: parseFloat(metrics['胜率'].replace('%', '')) || 0,
    profitFactor: parseFloat(metrics['盈利因子']) || 0,
    netProfit: parseFloat(metrics['净利润']) || 0
  };
}

// 修改策略参数
function modifyStrategyParams(params) {
  const baseStrategy = readFileSync('./strategy_v3_balanced.pine', 'utf8');

  let modified = baseStrategy;

  // 替换参数
  if (params.maxSurge10d !== undefined) {
    modified = modified.replace(
      /maxSurge10d = input\.float\([^,]+,/,
      `maxSurge10d = input.float(${params.maxSurge10d},`
    );
  }

  if (params.lowPositionPct !== undefined) {
    modified = modified.replace(
      /lowPositionPct = input\.float\([^,]+,/,
      `lowPositionPct = input.float(${params.lowPositionPct},`
    );
  }

  if (params.max5dVolatility !== undefined) {
    modified = modified.replace(
      /max5dVolatility = input\.float\([^,]+,/,
      `max5dVolatility = input.float(${params.max5dVolatility},`
    );
  }

  if (params.stopLossPct !== undefined) {
    modified = modified.replace(
      /stopLossPct = input\.float\([^,]+,/,
      `stopLossPct = input.float(${params.stopLossPct},`
    );
  }

  if (params.takeProfit1 !== undefined) {
    modified = modified.replace(
      /takeProfit1 = input\.float\([^,]+,/,
      `takeProfit1 = input.float(${params.takeProfit1},`
    );
  }

  return modified;
}

// 测试参数组合
async function testParams(symbol, params, testName) {
  console.log(`\n测试: ${testName}`);
  console.log(`  参数: ${JSON.stringify(params)}`);

  // 修改策略
  const modifiedStrategy = modifyStrategyParams(params);
  writeFileSync('./strategy_test_temp.pine', modifiedStrategy, 'utf8');

  // 加载策略
  runCommand('pine set --file ../../strategy_test_temp.pine');
  await sleep(1000);

  // 编译
  runCommand('pine compile');
  await sleep(1000);

  // 获取指标
  const metrics = await getStrategyMetrics();

  if (metrics) {
    console.log(`  结果: 交易${metrics.trades}次, 胜率${metrics.winRate}%, 盈利因子${metrics.profitFactor}, 净利润$${metrics.netProfit}`);

    // 计算综合得分
    const score = metrics.netProfit + (metrics.winRate * 100) + (metrics.profitFactor * 1000);
    console.log(`  综合得分: ${score.toFixed(2)}`);

    return { params, metrics, score, testName };
  }

  return null;
}

// 主函数
async function main() {
  console.log('================================================================================');
  console.log('📊 策略参数优化器');
  console.log('================================================================================\n');

  const symbol = 'NYSE:CSW';
  console.log(`测试股票: ${symbol}\n`);

  // 确保在正确的股票和时间周期
  runCommand(`symbol ${symbol}`);
  await sleep(2000);
  runCommand('timeframe 1');
  await sleep(2000);

  const testCases = [
    {
      name: '基准版本（无优化）',
      params: {
        maxSurge10d: 100.0,  // 实际上禁用此过滤
        lowPositionPct: 100.0,
        max5dVolatility: 100.0
      }
    },
    {
      name: '宽松优化',
      params: {
        maxSurge10d: 25.0,
        lowPositionPct: 80.0,
        max5dVolatility: 25.0
      }
    },
    {
      name: '中等优化',
      params: {
        maxSurge10d: 20.0,
        lowPositionPct: 70.0,
        max5dVolatility: 20.0
      }
    },
    {
      name: '严格优化',
      params: {
        maxSurge10d: 15.0,
        lowPositionPct: 50.0,
        max5dVolatility: 15.0
      }
    },
    {
      name: '调整止损止盈',
      params: {
        maxSurge10d: 20.0,
        lowPositionPct: 70.0,
        max5dVolatility: 20.0,
        stopLossPct: 4.0,
        takeProfit1: 6.0
      }
    }
  ];

  const results = [];

  for (const testCase of testCases) {
    const result = await testParams(symbol, testCase.params, testCase.name);
    if (result) {
      results.push(result);
    }
    await sleep(2000);
  }

  // 排序结果
  results.sort((a, b) => b.score - a.score);

  console.log('\n================================================================================');
  console.log('📈 优化结果排名');
  console.log('================================================================================\n');

  results.forEach((r, idx) => {
    console.log(`${idx + 1}. ${r.testName}`);
    console.log(`   交易: ${r.metrics.trades}, 胜率: ${r.metrics.winRate}%, 盈利因子: ${r.metrics.profitFactor}`);
    console.log(`   净利润: $${r.metrics.netProfit}, 综合得分: ${r.score.toFixed(2)}`);
    console.log(`   参数: ${JSON.stringify(r.params)}\n`);
  });

  // 保存结果
  const outputFile = `optimization_results_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  writeFileSync(outputFile, JSON.stringify({
    test_time: new Date().toISOString(),
    symbol,
    results
  }, null, 2), 'utf-8');

  console.log(`✅ 优化结果已保存到: ${outputFile}`);

  if (results.length > 0) {
    console.log(`\n🏆 最佳配置: ${results[0].testName}`);
    console.log(`   参数: ${JSON.stringify(results[0].params)}`);
  }
}

main().catch(console.error);
