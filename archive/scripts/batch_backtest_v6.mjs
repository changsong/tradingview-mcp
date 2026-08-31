#!/usr/bin/env node
/**
 * 批量回测脚本：对 watchlist/cn.txt 所有标的运行 A Share SQZMOM PRO v6 策略
 * 用法: node batch_backtest_v6.mjs
 */

import { execSync, spawnSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const TV = (args) => {
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], {
    cwd: __dir,
    encoding: 'utf8',
    timeout: 20000,
  });
  if (r.error) throw r.error;
  const out = r.stdout?.trim();
  try { return JSON.parse(out); } catch { return { raw: out, stderr: r.stderr }; }
};

// 读取 cn.txt 标的列表
const cnTxt = readFileSync(path.join(__dir, 'watchlist/cn.txt'), 'utf8').trim();
const symbols = cnTxt.split(',').map(s => s.trim()).filter(Boolean);
console.log(`\n共 ${symbols.length} 个标的，开始回测...\n`);

const results = [];
const errors = [];
let processed = 0;

for (const symbol of symbols) {
  processed++;
  process.stdout.write(`[${processed}/${symbols.length}] ${symbol.padEnd(15)} `);

  try {
    // 切换标的
    const switchResult = TV(`symbol ${symbol}`);
    if (!switchResult.success) {
      process.stdout.write(`切换失败\n`);
      errors.push({ symbol, error: 'symbol switch failed' });
      continue;
    }

    // 等待图表加载（日线策略需要时间计算）
    await new Promise(r => setTimeout(r, 4000));

    // 读取策略指标
    const stratResult = TV('data strategy');
    if (!stratResult.success || stratResult.metric_count === 0) {
      process.stdout.write(`无策略数据\n`);
      errors.push({ symbol, error: stratResult.error || 'no metrics' });
      continue;
    }

    const m = stratResult.metrics;
    const totalTrades = m.totalTrades || 0;
    const winRate = totalTrades > 0 ? ((m.winningTrades || 0) / totalTrades * 100).toFixed(1) : '0.0';
    const netPct = ((m.netProfitPercent || 0) * 100).toFixed(2);
    const pf = m.profitFactor != null ? m.profitFactor.toFixed(3) : '0.000';
    const dd = ((m.maxStrategyDrawDownPercent || 0) * 100).toFixed(2);

    results.push({
      symbol,
      totalTrades,
      wins: m.winningTrades || 0,
      losses: m.losingTrades || 0,
      winRate: parseFloat(winRate),
      netProfit: m.netProfit || 0,
      netProfitPct: parseFloat(netPct),
      profitFactor: parseFloat(pf),
      maxDrawdownPct: parseFloat(dd),
      sharpe: m.sharpeRatio || 0,
      avgBarsInTrade: m.avgBarsInTrade || 0,
      avgWin: m.avgWinTrade || m.avgProfit || 0,
      avgLoss: m.avgLosTrade || 0,
    });

    process.stdout.write(
      `${totalTrades}笔 胜率${winRate}% PF=${pf} 净收益${netPct}% DD=${dd}%\n`
    );

  } catch (err) {
    process.stdout.write(`错误: ${err.message}\n`);
    errors.push({ symbol, error: err.message });
  }
}

// ============================================================
// 汇总统计
// ============================================================
console.log('\n' + '='.repeat(70));
console.log('回测汇总报告 — A Share SQZMOM PRO v6 (Daily)');
console.log('='.repeat(70));

const withTrades = results.filter(r => r.totalTrades > 0);
const noTrades   = results.filter(r => r.totalTrades === 0);

console.log(`\n总标的: ${symbols.length} | 有信号: ${withTrades.length} | 无信号: ${noTrades.length} | 错误: ${errors.length}`);

if (withTrades.length > 0) {
  const avgWinRate  = withTrades.reduce((s, r) => s + r.winRate, 0) / withTrades.length;
  const avgPF       = withTrades.reduce((s, r) => s + r.profitFactor, 0) / withTrades.length;
  const avgNetPct   = withTrades.reduce((s, r) => s + r.netProfitPct, 0) / withTrades.length;
  const avgDD       = withTrades.reduce((s, r) => s + r.maxDrawdownPct, 0) / withTrades.length;
  const totalTrades = withTrades.reduce((s, r) => s + r.totalTrades, 0);
  const totalWins   = withTrades.reduce((s, r) => s + r.wins, 0);

  console.log(`\n综合指标（${withTrades.length}个有信号标的）:`);
  console.log(`  总交易笔数: ${totalTrades}`);
  console.log(`  综合胜率:   ${(totalWins / totalTrades * 100).toFixed(1)}%  (均值: ${avgWinRate.toFixed(1)}%)`);
  console.log(`  平均盈利因子: ${avgPF.toFixed(3)}`);
  console.log(`  平均净收益:  ${avgNetPct.toFixed(2)}%`);
  console.log(`  平均最大回撤: ${avgDD.toFixed(2)}%`);

  // 按盈利因子排序，显示 TOP/BOTTOM 标的
  const sorted = [...withTrades].sort((a, b) => b.profitFactor - a.profitFactor);

  console.log('\n🏆 盈利因子最高 TOP 10:');
  console.log('  标的            交易数  胜率    盈利因子  净收益%');
  sorted.slice(0, 10).forEach(r => {
    console.log(`  ${r.symbol.padEnd(15)} ${String(r.totalTrades).padStart(4)}   ${String(r.winRate.toFixed(1)+'%').padStart(6)}  ${r.profitFactor.toFixed(3).padStart(8)}  ${r.netProfitPct.toFixed(2)}%`);
  });

  console.log('\n⚠️  盈利因子最低 BOTTOM 10:');
  console.log('  标的            交易数  胜率    盈利因子  净收益%');
  sorted.slice(-10).reverse().forEach(r => {
    console.log(`  ${r.symbol.padEnd(15)} ${String(r.totalTrades).padStart(4)}   ${String(r.winRate.toFixed(1)+'%').padStart(6)}  ${r.profitFactor.toFixed(3).padStart(8)}  ${r.netProfitPct.toFixed(2)}%`);
  });

  // 分布分析
  const pfGt15 = withTrades.filter(r => r.profitFactor >= 1.5).length;
  const pfGt12 = withTrades.filter(r => r.profitFactor >= 1.2).length;
  const pfGt1  = withTrades.filter(r => r.profitFactor >= 1.0).length;
  const wr50   = withTrades.filter(r => r.winRate >= 50).length;
  console.log('\n📊 分布统计:');
  console.log(`  盈利因子 >= 1.5: ${pfGt15}/${withTrades.length} (${(pfGt15/withTrades.length*100).toFixed(0)}%)`);
  console.log(`  盈利因子 >= 1.2: ${pfGt12}/${withTrades.length} (${(pfGt12/withTrades.length*100).toFixed(0)}%)`);
  console.log(`  盈利因子 >= 1.0: ${pfGt1}/${withTrades.length} (${(pfGt1/withTrades.length*100).toFixed(0)}%)`);
  console.log(`  胜率 >= 50%:    ${wr50}/${withTrades.length} (${(wr50/withTrades.length*100).toFixed(0)}%)`);
}

// 保存 JSON 结果
const outPath = path.join(__dir, `backtest_v6_cn_${new Date().toISOString().slice(0,19).replace(/:/g,'-')}.json`);
writeFileSync(outPath, JSON.stringify({ summary: { total: symbols.length, withTrades: withTrades.length, errors: errors.length }, results, errors }, null, 2));
console.log(`\n✅ 详细结果已保存: ${outPath}`);
