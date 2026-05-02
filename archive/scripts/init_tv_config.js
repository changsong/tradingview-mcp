#!/usr/bin/env node

/**
 * 初始化TradingView配置脚本
 * 1. 设置图表周期为日线 (D)
 * 2. 加载策略 "US Stock SQZMOM Daily PRO v4 (ATR + EMA20 Stop)"
 */

import { execSync } from 'child_process';

function runCommand(cmd) {
  try {
    console.log(`  执行: node src/cli/index.js ${cmd}`);
    const result = execSync(`node src/cli/index.js ${cmd}`, {
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return JSON.parse(result);
  } catch (error) {
    console.error(`❌ 错误: ${error.message}`);
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function initializeConfig() {
  console.log('🚀 初始化TradingView配置...\n');

  // 检查连接
  console.log('1️⃣  检查TradingView连接...');
  const health = runCommand('status');
  if (!health || !health.success) {
    console.error('❌ TradingView未连接，请确保已运行 launch_tv_debug.bat');
    process.exit(1);
  }
  console.log('✅ TradingView已连接\n');

  // 获取当前图表状态
  console.log('2️⃣  获取当前图表状态...');
  const currentState = runCommand('state');
  if (currentState && currentState.success) {
    console.log(`  当前交易品种: ${currentState.symbol}`);
    console.log(`  当前周期: ${currentState.resolution}`);
  }
  console.log();

  // 设置周期为日线 (D)
  console.log('3️⃣  设置图表周期为日线 (D)...');
  const tfResult = runCommand('timeframe D');
  if (tfResult && tfResult.success) {
    console.log(`✅ 周期已设置为: ${tfResult.resolution}\n`);
  } else {
    console.error('❌ 周期设置失败\n');
  }

  await sleep(2000);

  // 加载策略
  console.log('4️⃣  加载策略: "US Stock SQZMOM Daily PRO v4 (ATR + EMA20 Stop)"...');
  const strategyName = 'US Stock SQZMOM Daily PRO v4 (ATR + EMA20 Stop)';
  const indicatorResult = runCommand(`indicator add "${strategyName}"`);

  if (indicatorResult && indicatorResult.success) {
    console.log(`✅ 策略已加载\n`);
  } else {
    console.log(`⚠️  尝试加载策略失败，继续扫描...\n`);
    console.log(`   错误: ${indicatorResult ? indicatorResult.error || '未知错误' : '无返回结果'}\n`);
  }

  await sleep(1000);

  // 获取当前指标列表
  console.log('5️⃣  获取当前指标列表...');
  const stateAfter = runCommand('state');
  if (stateAfter && stateAfter.success) {
    console.log(`  可见指标数: ${stateAfter.studies ? stateAfter.studies.length : 0}`);
    if (stateAfter.studies && stateAfter.studies.length > 0) {
      console.log('  指标列表:');
      stateAfter.studies.forEach(study => {
        console.log(`    - ${study.name} (ID: ${study.id})`);
      });
    }
  }
  console.log();

  console.log('✅ TradingView配置初始化完成！');
  console.log('   现在可以运行: node scan_stocks.js --symbols=filepath=../watchlist/us.txt --output=./watchlist/us_selected.txt\n');
}

initializeConfig().catch(console.error);
