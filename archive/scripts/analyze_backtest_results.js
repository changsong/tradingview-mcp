#!/usr/bin/env node

/**
 * A Share SQZMOM PRO v6 Backtest Results Analyzer
 * Analyzes the JSON report from backtest execution and provides detailed insights
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

function analyzeBacktestResults(reportPath) {
  console.log('\n' + '='.repeat(80));
  console.log('A Share SQZMOM PRO v6 - Backtest Results Analysis');
  console.log('='.repeat(80) + '\n');

  // Load report
  let report;
  try {
    const content = readFileSync(reportPath, 'utf-8');
    report = JSON.parse(content);
  } catch (err) {
    console.error(`Error reading report: ${err.message}`);
    process.exit(1);
  }

  // === SECTION 1: EXECUTIVE SUMMARY ===
  console.log('1. EXECUTIVE SUMMARY');
  console.log('-'.repeat(80));
  console.log(`Strategy: ${report.test_metadata.strategy_name}`);
  console.log(`Test Date: ${report.test_metadata.test_date}`);
  console.log(`Timeframe: ${report.test_metadata.test_timeframe}`);
  console.log(`Stocks Tested: ${report.test_metadata.total_stocks_tested}`);
  console.log(`Test Status: ${report.summary.successful_tests}/${report.summary.total_tests} completed\n`);

  // === SECTION 2: OVERALL PERFORMANCE ===
  console.log('2. OVERALL PERFORMANCE METRICS');
  console.log('-'.repeat(80));
  console.log(`Total Tests: ${report.summary.total_tests}`);
  console.log(`Successful: ${report.summary.successful_tests}`);
  console.log(`Failed: ${report.summary.failed_tests}`);
  console.log(`Profitability Rate: ${report.summary.profitability_rate}`);
  console.log(`Profitable Symbols: ${report.summary.profitable_symbols_count} / ${report.summary.successful_tests}`);
  console.log(`Unprofitable Symbols: ${report.summary.unprofitable_symbols_count} / ${report.summary.successful_tests}\n`);

  // === SECTION 3: AGGREGATE METRICS ===
  console.log('3. AGGREGATE METRICS (All Stocks Combined)');
  console.log('-'.repeat(80));
  const agg = report.aggregate_metrics;
  console.log(`Total Trades Across All Stocks: ${agg.total_trades_across_all}`);
  console.log(`Total Profit (Combined): ¥${parseFloat(agg.total_profit_across_all).toFixed(2)}`);
  console.log(`Average Win Rate: ${agg.average_win_rate}`);
  console.log(`Average Return: ${agg.average_return}`);
  console.log(`Average Profit Factor: ${agg.average_profit_factor}`);
  console.log(`Average Max Drawdown: ${agg.average_max_drawdown}\n`);

  // === SECTION 4: BEST PERFORMERS ===
  console.log('4. TOP 5 BEST PERFORMERS');
  console.log('-'.repeat(80));
  report.best_performers.forEach((stock, idx) => {
    console.log(`\n${idx + 1}. ${stock.symbol}`);
    console.log(`   Trades: ${stock.trades}`);
    console.log(`   Win Rate: ${stock.win_rate}`);
    console.log(`   Total Return: ${stock.total_return}`);
    console.log(`   Net Profit: ¥${parseFloat(stock.net_profit).toFixed(2)}`);
    console.log(`   Profit Factor: ${stock.profit_factor}`);
    console.log(`   Max Drawdown: ${stock.max_drawdown}`);
  });

  // === SECTION 5: WORST PERFORMERS ===
  console.log('\n5. TOP 5 WORST PERFORMERS');
  console.log('-'.repeat(80));
  report.worst_performers.forEach((stock, idx) => {
    console.log(`\n${idx + 1}. ${stock.symbol}`);
    console.log(`   Trades: ${stock.trades}`);
    console.log(`   Win Rate: ${stock.win_rate}`);
    console.log(`   Total Return: ${stock.total_return}`);
    console.log(`   Net Profit: ¥${parseFloat(stock.net_profit).toFixed(2)}`);
    console.log(`   Profit Factor: ${stock.profit_factor}`);
    console.log(`   Max Drawdown: ${stock.max_drawdown}`);
  });

  // === SECTION 6: DETAILED ANALYSIS ===
  console.log('\n6. DETAILED ANALYSIS BY STOCK');
  console.log('-'.repeat(80));

  const results = report.detailed_results;

  // Sort by profit
  const byProfit = [...results].sort((a, b) => parseFloat(b.performance.net_profit) - parseFloat(a.performance.net_profit));

  // Calculate statistics
  const stats = {
    allTrades: results.reduce((sum, r) => sum + r.performance.total_trades, 0),
    profitableStocks: results.filter(r => parseFloat(r.performance.net_profit) > 0).length,
    unprofitableStocks: results.filter(r => parseFloat(r.performance.net_profit) <= 0).length,
    avgWinRate: results.reduce((sum, r) => sum + parseFloat(r.performance.win_rate_pct), 0) / results.length,
    avgProfit: results.reduce((sum, r) => sum + parseFloat(r.performance.net_profit), 0) / results.length,
    maxProfit: Math.max(...results.map(r => parseFloat(r.performance.net_profit))),
    minProfit: Math.min(...results.map(r => parseFloat(r.performance.net_profit))),
    maxWinRate: Math.max(...results.map(r => parseFloat(r.performance.win_rate_pct))),
    minWinRate: Math.min(...results.map(r => parseFloat(r.performance.win_rate_pct))),
    avgProfitFactor: results.reduce((sum, r) => sum + parseFloat(r.performance.profit_factor), 0) / results.length,
    avgDrawdown: results.reduce((sum, r) => sum + parseFloat(r.performance.max_drawdown_pct), 0) / results.length
  };

  console.log(`\nStatistics Summary:`);
  console.log(`  Total Trades: ${stats.allTrades}`);
  console.log(`  Profitable Stocks: ${stats.profitableStocks}`);
  console.log(`  Unprofitable Stocks: ${stats.unprofitableStocks}`);
  console.log(`  Average Win Rate: ${stats.avgWinRate.toFixed(2)}%`);
  console.log(`  Average Profit Per Stock: ¥${stats.avgProfit.toFixed(2)}`);
  console.log(`  Max Profit: ¥${stats.maxProfit.toFixed(2)}`);
  console.log(`  Min Profit: ¥${stats.minProfit.toFixed(2)}`);
  console.log(`  Win Rate Range: ${stats.minWinRate.toFixed(2)}% - ${stats.maxWinRate.toFixed(2)}%`);
  console.log(`  Average Profit Factor: ${stats.avgProfitFactor.toFixed(2)}`);
  console.log(`  Average Max Drawdown: ${stats.avgDrawdown.toFixed(2)}%\n`);

  // === SECTION 7: DETAILED PER-STOCK METRICS ===
  console.log('Detailed Per-Stock Performance:');
  console.log('-'.repeat(80) + '\n');

  byProfit.forEach((result, idx) => {
    const perf = result.performance;
    const profitStatus = parseFloat(perf.net_profit) > 0 ? '✅ PROFIT' : '❌ LOSS';

    console.log(`${idx + 1}. ${result.symbol} ${profitStatus}`);
    console.log(`   Trades: ${perf.total_trades} (Win: ${perf.winning_trades}, Loss: ${perf.losing_trades})`);
    console.log(`   Win Rate: ${perf.win_rate_pct}%`);
    console.log(`   Return: ${perf.total_return_pct}%`);
    console.log(`   Net Profit: ¥${parseFloat(perf.net_profit).toFixed(2)}`);
    console.log(`   Gross Profit: ¥${parseFloat(perf.gross_profit).toFixed(2)} | Gross Loss: ¥${parseFloat(perf.gross_loss).toFixed(2)}`);
    console.log(`   Profit Factor: ${perf.profit_factor}`);
    console.log(`   Avg Win/Loss: ¥${parseFloat(perf.avg_winning_trade).toFixed(2)} / ¥${parseFloat(perf.avg_losing_trade).toFixed(2)}`);
    console.log(`   Max Win/Loss: ¥${parseFloat(perf.largest_winning_trade).toFixed(2)} / ¥${parseFloat(perf.largest_losing_trade).toFixed(2)}`);
    console.log(`   Max Drawdown: ${perf.max_drawdown_pct}%`);
    console.log(`   Consecutive Wins/Losses: ${perf.consecutive_wins} / ${perf.consecutive_losses}`);
    console.log(`   Sharpe Ratio: ${perf.sharpe_ratio} | Sortino Ratio: ${perf.sortino_ratio}\n`);
  });

  // === SECTION 8: KEY INSIGHTS ===
  console.log('7. KEY INSIGHTS AND OBSERVATIONS');
  console.log('-'.repeat(80));

  const insights = generateInsights(results, stats);
  insights.forEach(insight => {
    console.log(`• ${insight}`);
  });

  // === SECTION 9: RISK ANALYSIS ===
  console.log('\n8. RISK ANALYSIS');
  console.log('-'.repeat(80));

  const highDrawdownStocks = results.filter(r => parseFloat(r.performance.max_drawdown_pct) > 30)
    .sort((a, b) => parseFloat(b.performance.max_drawdown_pct) - parseFloat(a.performance.max_drawdown_pct))
    .slice(0, 3);

  console.log('\nStocks with High Drawdown (>30%):');
  if (highDrawdownStocks.length === 0) {
    console.log('  None found - good sign for risk management');
  } else {
    highDrawdownStocks.forEach(stock => {
      console.log(`  ${stock.symbol}: ${stock.performance.max_drawdown_pct}% drawdown`);
    });
  }

  const lowWinRateStocks = results.filter(r => parseFloat(r.performance.win_rate_pct) < 40)
    .sort((a, b) => parseFloat(a.performance.win_rate_pct) - parseFloat(b.performance.win_rate_pct))
    .slice(0, 3);

  console.log('\nStocks with Low Win Rate (<40%):');
  if (lowWinRateStocks.length === 0) {
    console.log('  None found');
  } else {
    lowWinRateStocks.forEach(stock => {
      console.log(`  ${stock.symbol}: ${stock.performance.win_rate_pct}% win rate`);
    });
  }

  const lowProfitFactor = results.filter(r => parseFloat(r.performance.profit_factor) < 1.2)
    .sort((a, b) => parseFloat(a.performance.profit_factor) - parseFloat(b.performance.profit_factor))
    .slice(0, 3);

  console.log('\nStocks with Low Profit Factor (<1.2):');
  if (lowProfitFactor.length === 0) {
    console.log('  None found');
  } else {
    lowProfitFactor.forEach(stock => {
      console.log(`  ${stock.symbol}: ${stock.performance.profit_factor} profit factor`);
    });
  }

  // === SECTION 10: RECOMMENDATIONS ===
  console.log('\n9. RECOMMENDATIONS');
  console.log('-'.repeat(80));

  const recommendations = generateRecommendations(results, stats);
  recommendations.forEach((rec, idx) => {
    console.log(`${idx + 1}. ${rec}`);
  });

  // === SECTION 11: EXPORT ANALYSIS ===
  console.log('\n10. EXPORTING ANALYSIS');
  console.log('-'.repeat(80));

  const analysisReport = {
    summary_stats: stats,
    insights: insights,
    recommendations: recommendations,
    high_risk_stocks: highDrawdownStocks.map(r => ({
      symbol: r.symbol,
      max_drawdown_pct: r.performance.max_drawdown_pct
    })),
    low_winrate_stocks: lowWinRateStocks.map(r => ({
      symbol: r.symbol,
      win_rate_pct: r.performance.win_rate_pct
    })),
    profitable_stocks: results.filter(r => parseFloat(r.performance.net_profit) > 0).map(r => ({
      symbol: r.symbol,
      net_profit: parseFloat(r.performance.net_profit).toFixed(2)
    }))
  };

  const analysisPath = reportPath.replace('.json', '_ANALYSIS.json');
  writeFileSync(analysisPath, JSON.stringify(analysisReport, null, 2), 'utf-8');
  console.log(`Analysis exported to: ${analysisPath}`);

  // Also create a CSV for spreadsheet analysis
  const csvPath = reportPath.replace('.json', '_DETAILED.csv');
  let csv = 'Symbol,Trades,Win Rate %,Return %,Net Profit,Gross Profit,Gross Loss,Profit Factor,Avg Win,Avg Loss,Max Win,Max Loss,Max Drawdown %\n';
  results.forEach(r => {
    const p = r.performance;
    csv += `${r.symbol},${p.total_trades},${p.win_rate_pct},${p.total_return_pct},${parseFloat(p.net_profit).toFixed(2)},${parseFloat(p.gross_profit).toFixed(2)},${parseFloat(p.gross_loss).toFixed(2)},${p.profit_factor},${parseFloat(p.avg_winning_trade).toFixed(2)},${parseFloat(p.avg_losing_trade).toFixed(2)},${parseFloat(p.largest_winning_trade).toFixed(2)},${parseFloat(p.largest_losing_trade).toFixed(2)},${p.max_drawdown_pct}\n`;
  });
  writeFileSync(csvPath, csv, 'utf-8');
  console.log(`CSV exported to: ${csvPath}`);

  console.log('\n' + '='.repeat(80));
  console.log('Analysis Complete');
  console.log('='.repeat(80) + '\n');
}

function generateInsights(results, stats) {
  const insights = [];

  // Profitability insight
  const profitablePercent = (stats.profitableStocks / results.length * 100).toFixed(1);
  if (profitablePercent >= 70) {
    insights.push(`Strong overall profitability: ${profitablePercent}% of stocks are profitable`);
  } else if (profitablePercent >= 50) {
    insights.push(`Moderate profitability: ${profitablePercent}% of stocks are profitable`);
  } else {
    insights.push(`Low profitability: Only ${profitablePercent}% of stocks are profitable - strategy may need optimization`);
  }

  // Win rate insight
  if (stats.avgWinRate >= 55) {
    insights.push(`Excellent win rate: ${stats.avgWinRate.toFixed(2)}% - strategy has good entry accuracy`);
  } else if (stats.avgWinRate >= 45) {
    insights.push(`Moderate win rate: ${stats.avgWinRate.toFixed(2)}% - adequate but could be improved`);
  } else {
    insights.push(`Low win rate: ${stats.avgWinRate.toFixed(2)}% - strategy may need refinement`);
  }

  // Profit factor insight
  if (stats.avgProfitFactor >= 2.0) {
    insights.push(`Excellent profit factor: ${stats.avgProfitFactor.toFixed(2)} - strong risk/reward ratio`);
  } else if (stats.avgProfitFactor >= 1.5) {
    insights.push(`Good profit factor: ${stats.avgProfitFactor.toFixed(2)} - decent risk/reward ratio`);
  } else if (stats.avgProfitFactor >= 1.2) {
    insights.push(`Acceptable profit factor: ${stats.avgProfitFactor.toFixed(2)} - marginal but viable`);
  } else {
    insights.push(`Poor profit factor: ${stats.avgProfitFactor.toFixed(2)} - needs improvement`);
  }

  // Drawdown insight
  if (stats.avgDrawdown <= 15) {
    insights.push(`Low average drawdown: ${stats.avgDrawdown.toFixed(2)}% - excellent risk management`);
  } else if (stats.avgDrawdown <= 25) {
    insights.push(`Moderate drawdown: ${stats.avgDrawdown.toFixed(2)}% - acceptable risk level`);
  } else {
    insights.push(`High drawdown: ${stats.avgDrawdown.toFixed(2)}% - significant risk exposure`);
  }

  // Consistency insight
  const profitRange = stats.maxProfit - stats.minProfit;
  const winRateRange = stats.maxWinRate - stats.minWinRate;
  if (winRateRange <= 20) {
    insights.push(`Consistent performance: Win rates vary only ${winRateRange.toFixed(1)}% across stocks`);
  } else {
    insights.push(`Inconsistent performance: Win rates vary widely (${stats.minWinRate.toFixed(2)}% - ${stats.maxWinRate.toFixed(2)}%)`);
  }

  return insights;
}

function generateRecommendations(results, stats) {
  const recommendations = [];

  // Recommendation 1: Strategy viability
  if (stats.profitableStocks / results.length >= 0.6) {
    recommendations.push(`Strategy shows promise: ${(stats.profitableStocks / results.length * 100).toFixed(1)}% win rate suggests viability for paper trading`);
  } else {
    recommendations.push(`Consider parameter optimization: Current profitability suggests need for fine-tuning`);
  }

  // Recommendation 2: Risk management
  if (stats.avgDrawdown <= 20) {
    recommendations.push(`Risk management is effective: Average drawdown of ${stats.avgDrawdown.toFixed(2)}% is acceptable`);
  } else {
    recommendations.push(`Review risk management: Average drawdown of ${stats.avgDrawdown.toFixed(2)}% may be too high`);
  }

  // Recommendation 3: Position sizing
  if (stats.avgProfitFactor >= 1.5) {
    recommendations.push(`Position sizing appears optimal: Profit factor of ${stats.avgProfitFactor.toFixed(2)} supports current sizing`);
  } else {
    recommendations.push(`Consider reducing position size: Low profit factor suggests need for tighter stops`);
  }

  // Recommendation 4: Stock selection
  const topStocks = results.filter(r => parseFloat(r.performance.net_profit) > 0)
    .sort((a, b) => parseFloat(b.performance.net_profit) - parseFloat(a.performance.net_profit))
    .slice(0, 3);
  if (topStocks.length > 0) {
    const topSymbols = topStocks.map(r => r.symbol).join(', ');
    recommendations.push(`Focus on proven winners: ${topSymbols} show strong performance and lower risk`);
  }

  // Recommendation 5: Parameter optimization
  const lowPerformers = results.filter(r => parseFloat(r.performance.net_profit) < -2000);
  if (lowPerformers.length > 3) {
    recommendations.push(`Optimize parameters: ${lowPerformers.length} stocks show significant losses - consider tweaking entry/exit criteria`);
  }

  // Recommendation 6: Entry timing
  if (stats.avgWinRate >= 50) {
    recommendations.push(`Entry timing is reliable: Win rate of ${stats.avgWinRate.toFixed(2)}% indicates good signal quality`);
  } else {
    recommendations.push(`Improve entry signals: Current win rate suggests room for better entry filtering`);
  }

  return recommendations;
}

// Main execution
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node analyze_backtest_results.js <report_file.json>');
  process.exit(1);
}

analyzeBacktestResults(args[0]);
