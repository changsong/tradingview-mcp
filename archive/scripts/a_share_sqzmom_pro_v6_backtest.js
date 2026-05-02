#!/usr/bin/env node

/**
 * A Share SQZMOM PRO v6 Comprehensive Backtest
 * Tests the strategy on 10 selected Chinese stocks with 2-3 years of historical data
 * Collects: Win Rate, Total Return, Profit Factor, Max Drawdown, Trade Count, Avg Win/Loss
 * Exports: JSON report with trade logs and performance metrics
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const CLI_PATH = 'src/cli/index.js';
const STRATEGY_NAME = 'A Share SQZMOM PRO v6 (Daily)';

// Target stocks for backtest - as specified by user
const TARGET_STOCKS = [
  'SSE:603203', 'SSE:603040', 'SSE:603638',
  'SZSE:002983', 'SZSE:000988',
  'SZSE:000951', 'SSE:603300', 'SSE:600547', 'SSE:603766', 'SSE:603529'
];

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      cwd: process.cwd(),
      timeout: 45000,
      maxBuffer: 10 * 1024 * 1024 // 10MB buffer for large outputs
    });
    return JSON.parse(result);
  } catch (error) {
    console.error(`CLI Error: ${error.message}`);
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Extract performance metrics from the strategy's output tables
 * Looks for standard backtest metrics
 */
async function getStrategyMetrics(symbol, timeframe = 'D') {
  // Wait for chart to fully load and render
  await sleep(25000);

  const state = runCommand('state');
  if (!state || !state.success) {
    console.error(`  ❌ Failed to get chart state for ${symbol}`);
    return null;
  }

  // Get all tables (backtest results are displayed in tables)
  const tables = runCommand('data tables');
  if (!tables || !tables.success || !tables.studies || tables.studies.length === 0) {
    console.error(`  ⚠️  No strategy tables found for ${symbol}`);
    return null;
  }

  try {
    // Parse the first table (usually the strategy performance table)
    const firstStudy = tables.studies[0];
    if (!firstStudy.tables || !firstStudy.tables[0]) {
      console.error(`  ⚠️  No table data found for ${symbol}`);
      return null;
    }

    const rows = firstStudy.tables[0].rows || [];
    const metrics = {};

    // Parse all rows into key-value pairs
    rows.forEach(row => {
      const parts = row.split('|').map(p => p.trim());
      if (parts.length >= 2) {
        const key = parts[0];
        const value = parts[1];
        metrics[key] = value;
      }
    });

    // Extract key metrics with fallbacks
    const extractNumber = (key, defaultVal = 0) => {
      const val = metrics[key] || '';
      const num = parseFloat(val.replace(/[%,$,¥,CNY,RMB]/g, ''));
      return isNaN(num) ? defaultVal : num;
    };

    const extractPercent = (key, defaultVal = 0) => {
      const val = metrics[key] || '';
      const num = parseFloat(val.replace(/%/g, ''));
      return isNaN(num) ? defaultVal : num;
    };

    // Standard backtest metrics
    const result = {
      symbol,
      timeframe,

      // Basic counts
      total_trades: parseInt(metrics['Total Trades'] || metrics['交易总数'] || 0) || 0,
      winning_trades: parseInt(metrics['Winning Trades'] || metrics['获利交易'] || 0) || 0,
      losing_trades: parseInt(metrics['Losing Trades'] || metrics['亏损交易'] || 0) || 0,

      // Return metrics
      total_return_pct: extractPercent('Total Return %', 0),
      buy_hold_return_pct: extractPercent('Buy & Hold Return %', 0),
      return_over_drawdown: extractPercent('Return/Drawdown', 0),

      // Win rate
      win_rate_pct: extractPercent('Win Rate %', 0),

      // Profit metrics
      net_profit: extractNumber('Net Profit'),
      gross_profit: extractNumber('Gross Profit'),
      gross_loss: extractNumber('Gross Loss'),
      profit_factor: extractNumber('Profit Factor', 0),

      // Loss metrics
      avg_winning_trade: extractNumber('Avg Winning Trade'),
      avg_losing_trade: extractNumber('Avg Losing Trade'),
      largest_winning_trade: extractNumber('Largest Winning Trade'),
      largest_losing_trade: extractNumber('Largest Losing Trade'),

      // Drawdown
      max_drawdown_pct: extractPercent('Max Drawdown %', 0),
      max_drawdown_duration: metrics['Max Drawdown Duration'] || 'N/A',

      // Additional stats
      recovery_factor: extractNumber('Recovery Factor', 0),
      sharpe_ratio: extractNumber('Sharpe Ratio', 0),
      sortino_ratio: extractNumber('Sortino Ratio', 0),

      // Consecutive wins/losses
      consecutive_wins: parseInt(metrics['Consecutive Wins'] || 0) || 0,
      consecutive_losses: parseInt(metrics['Consecutive Losses'] || 0) || 0,

      raw_metrics: metrics,
      raw_table: rows
    };

    return result;
  } catch (err) {
    console.error(`  ❌ Error parsing metrics: ${err.message}`);
    return null;
  }
}

/**
 * Get trade logs with entry/exit details
 */
async function getTradeLog(symbol) {
  // Get OHLCV data to understand the trading period
  const ohlcv = runCommand('data ohlcv --count 500 --summary');
  if (!ohlcv || !ohlcv.success) {
    return null;
  }

  const trades = [];

  // Try to extract trade information from labels if available
  const labels = runCommand('data labels --max 100');
  if (labels && labels.success && labels.studies && labels.studies.length > 0) {
    const labelData = labels.studies[0].labels || [];

    labelData.forEach((label, idx) => {
      if (label.text && label.price) {
        trades.push({
          trade_id: idx + 1,
          type: label.text.includes('BUY') || label.text.includes('LONG') ? 'BUY' : 'SELL',
          price: label.price,
          label_text: label.text
        });
      }
    });
  }

  return {
    symbol,
    trade_count: trades.length,
    trades: trades
  };
}

/**
 * Main backtest execution
 */
async function runBacktest(symbol, timeframe = 'D') {
  console.log(`\n${'='*80}`);
  console.log(`Testing: ${symbol} (Timeframe: ${timeframe})`);
  console.log(`${'='*80}`);

  try {
    // Step 1: Set symbol
    console.log(`Setting symbol: ${symbol}...`);
    let result = runCommand(`symbol ${symbol}`);
    if (!result || !result.success) {
      console.error(`  ❌ Failed to set symbol`);
      return null;
    }
    await sleep(8000);

    // Step 2: Set timeframe to Daily
    console.log(`Setting timeframe: ${timeframe}...`);
    result = runCommand(`timeframe ${timeframe}`);
    if (!result || !result.success) {
      console.error(`  ❌ Failed to set timeframe`);
      return null;
    }
    await sleep(8000);

    // Step 3: Get metrics
    console.log(`Collecting backtest metrics...`);
    const metrics = await getStrategyMetrics(symbol, timeframe);

    if (!metrics) {
      console.warn(`  ⚠️  Could not extract metrics for ${symbol}`);
      return null;
    }

    // Step 4: Get trade log
    console.log(`Collecting trade log...`);
    const tradeLog = await getTradeLog(symbol);

    // Combine results
    const backtestResult = {
      symbol,
      timeframe,
      test_datetime: new Date().toISOString(),
      status: 'SUCCESS',

      // Performance metrics
      performance: {
        total_trades: metrics.total_trades,
        winning_trades: metrics.winning_trades,
        losing_trades: metrics.losing_trades,
        win_rate_pct: metrics.win_rate_pct,

        total_return_pct: metrics.total_return_pct,
        net_profit: metrics.net_profit,
        gross_profit: metrics.gross_profit,
        gross_loss: metrics.gross_loss,
        profit_factor: metrics.profit_factor,

        avg_winning_trade: metrics.avg_winning_trade,
        avg_losing_trade: metrics.avg_losing_trade,
        largest_winning_trade: metrics.largest_winning_trade,
        largest_losing_trade: metrics.largest_losing_trade,

        max_drawdown_pct: metrics.max_drawdown_pct,
        recovery_factor: metrics.recovery_factor,

        sharpe_ratio: metrics.sharpe_ratio,
        sortino_ratio: metrics.sortino_ratio,

        consecutive_wins: metrics.consecutive_wins,
        consecutive_losses: metrics.consecutive_losses
      },

      // Trade logs
      trades: tradeLog,

      // Raw data for analysis
      raw_metrics: metrics.raw_metrics,
      raw_table: metrics.raw_table
    };

    // Print summary
    console.log(`  ✅ Trades: ${metrics.total_trades} (Win: ${metrics.winning_trades}, Loss: ${metrics.losing_trades})`);
    console.log(`  ✅ Win Rate: ${metrics.win_rate_pct.toFixed(2)}%`);
    console.log(`  ✅ Total Return: ${metrics.total_return_pct.toFixed(2)}%`);
    console.log(`  ✅ Net Profit: ${metrics.net_profit.toFixed(2)}`);
    console.log(`  ✅ Profit Factor: ${metrics.profit_factor.toFixed(2)}`);
    console.log(`  ✅ Max Drawdown: ${metrics.max_drawdown_pct.toFixed(2)}%`);

    return backtestResult;
  } catch (err) {
    console.error(`  ❌ Backtest error: ${err.message}`);
    return null;
  }
}

/**
 * Analyze results and identify winners/losers
 */
function analyzeResults(results) {
  const successful = results.filter(r => r && r.status === 'SUCCESS');
  const failed = results.filter(r => !r || r.status !== 'SUCCESS');

  const profitable = successful.filter(r => r.performance.net_profit > 0)
    .sort((a, b) => b.performance.net_profit - a.performance.net_profit);

  const unprofitable = successful.filter(r => r.performance.net_profit <= 0)
    .sort((a, b) => a.performance.net_profit - b.performance.net_profit);

  // Calculate aggregates
  const totalTrades = successful.reduce((sum, r) => sum + r.performance.total_trades, 0);
  const totalProfit = successful.reduce((sum, r) => sum + r.performance.net_profit, 0);
  const avgWinRate = successful.length > 0
    ? successful.reduce((sum, r) => sum + r.performance.win_rate_pct, 0) / successful.length
    : 0;
  const avgReturn = successful.length > 0
    ? successful.reduce((sum, r) => sum + r.performance.total_return_pct, 0) / successful.length
    : 0;
  const avgProfitFactor = successful.length > 0
    ? successful.reduce((sum, r) => sum + r.performance.profit_factor, 0) / successful.length
    : 0;
  const avgMaxDrawdown = successful.length > 0
    ? successful.reduce((sum, r) => sum + r.performance.max_drawdown_pct, 0) / successful.length
    : 0;

  return {
    total_tests: results.length,
    successful_tests: successful.length,
    failed_tests: failed.length,
    profitable_symbols: profitable.length,
    unprofitable_symbols: unprofitable.length,

    aggregates: {
      total_trades: totalTrades,
      total_profit: totalProfit,
      avg_win_rate: avgWinRate,
      avg_return: avgReturn,
      avg_profit_factor: avgProfitFactor,
      avg_max_drawdown: avgMaxDrawdown
    },

    best_performers: profitable.slice(0, 5),
    worst_performers: unprofitable.slice(0, 5),

    all_results: successful
  };
}

/**
 * Generate comprehensive report
 */
function generateReport(analysis) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `/d/trade_workspace/tradingview-mcp/a_share_sqzmom_pro_v6_backtest_${timestamp}.json`;

  const report = {
    test_metadata: {
      strategy_name: STRATEGY_NAME,
      test_date: new Date().toISOString(),
      test_timeframe: 'Daily (D)',
      total_stocks_tested: TARGET_STOCKS.length,
      description: 'Comprehensive backtest of A Share SQZMOM PRO v6 on 10 selected Chinese stocks'
    },

    summary: {
      total_tests: analysis.total_tests,
      successful_tests: analysis.successful_tests,
      failed_tests: analysis.failed_tests,
      profitable_symbols_count: analysis.profitable_symbols,
      unprofitable_symbols_count: analysis.unprofitable_symbols,
      profitability_rate: (analysis.profitable_symbols / analysis.successful_tests * 100).toFixed(2) + '%'
    },

    aggregate_metrics: {
      total_trades_across_all: analysis.aggregates.total_trades,
      total_profit_across_all: analysis.aggregates.total_profit.toFixed(2),
      average_win_rate: analysis.aggregates.avg_win_rate.toFixed(2) + '%',
      average_return: analysis.aggregates.avg_return.toFixed(2) + '%',
      average_profit_factor: analysis.aggregates.avg_profit_factor.toFixed(2),
      average_max_drawdown: analysis.aggregates.avg_max_drawdown.toFixed(2) + '%'
    },

    best_performers: analysis.best_performers.map(r => ({
      symbol: r.symbol,
      trades: r.performance.total_trades,
      win_rate: r.performance.win_rate_pct.toFixed(2) + '%',
      total_return: r.performance.total_return_pct.toFixed(2) + '%',
      net_profit: r.performance.net_profit.toFixed(2),
      profit_factor: r.performance.profit_factor.toFixed(2),
      max_drawdown: r.performance.max_drawdown_pct.toFixed(2) + '%'
    })),

    worst_performers: analysis.worst_performers.map(r => ({
      symbol: r.symbol,
      trades: r.performance.total_trades,
      win_rate: r.performance.win_rate_pct.toFixed(2) + '%',
      total_return: r.performance.total_return_pct.toFixed(2) + '%',
      net_profit: r.performance.net_profit.toFixed(2),
      profit_factor: r.performance.profit_factor.toFixed(2),
      max_drawdown: r.performance.max_drawdown_pct.toFixed(2) + '%'
    })),

    detailed_results: analysis.all_results.map(r => ({
      symbol: r.symbol,
      timeframe: r.timeframe,
      test_datetime: r.test_datetime,

      performance: {
        total_trades: r.performance.total_trades,
        winning_trades: r.performance.winning_trades,
        losing_trades: r.performance.losing_trades,
        win_rate_pct: r.performance.win_rate_pct.toFixed(2),

        total_return_pct: r.performance.total_return_pct.toFixed(2),
        net_profit: r.performance.net_profit.toFixed(2),
        gross_profit: r.performance.gross_profit.toFixed(2),
        gross_loss: r.performance.gross_loss.toFixed(2),
        profit_factor: r.performance.profit_factor.toFixed(2),

        avg_winning_trade: r.performance.avg_winning_trade.toFixed(2),
        avg_losing_trade: r.performance.avg_losing_trade.toFixed(2),
        largest_winning_trade: r.performance.largest_winning_trade.toFixed(2),
        largest_losing_trade: r.performance.largest_losing_trade.toFixed(2),

        max_drawdown_pct: r.performance.max_drawdown_pct.toFixed(2),
        recovery_factor: r.performance.recovery_factor.toFixed(2),

        sharpe_ratio: r.performance.sharpe_ratio.toFixed(2),
        sortino_ratio: r.performance.sortino_ratio.toFixed(2),

        consecutive_wins: r.performance.consecutive_wins,
        consecutive_losses: r.performance.consecutive_losses
      },

      trades: r.trades,
      raw_metrics: r.raw_metrics
    }))
  };

  writeFileSync(filename, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`\n✅ Report saved to: ${filename}`);
  return filename;
}

/**
 * Main execution
 */
async function main() {
  console.log(`\n${'='*80}`);
  console.log(`A Share SQZMOM PRO v6 (Daily) - Comprehensive Backtest`);
  console.log(`Testing ${TARGET_STOCKS.length} stocks with 2-3 years of historical data`);
  console.log(`${'='*80}\n`);

  // Check health
  const health = runCommand('health');
  if (!health || !health.success) {
    console.error('❌ TradingView connection failed. Please ensure TradingView Desktop is running with CDP enabled.');
    process.exit(1);
  }

  console.log('✅ TradingView connection OK\n');

  const results = [];

  // Run backtest for each stock
  for (let i = 0; i < TARGET_STOCKS.length; i++) {
    const symbol = TARGET_STOCKS[i];
    const backtestResult = await runBacktest(symbol, 'D');

    if (backtestResult) {
      results.push(backtestResult);
      console.log(`[${i+1}/${TARGET_STOCKS.length}] ✅ ${symbol} completed\n`);
    } else {
      console.log(`[${i+1}/${TARGET_STOCKS.length}] ❌ ${symbol} failed\n`);
      results.push(null);
    }

    // Add delay between tests
    if (i < TARGET_STOCKS.length - 1) {
      await sleep(2000);
    }
  }

  // Analyze and report
  console.log(`\n${'='*80}`);
  console.log(`BACKTEST COMPLETE - Analyzing Results`);
  console.log(`${'='*80}\n`);

  const analysis = analyzeResults(results);

  // Print summary
  console.log(`Tests Executed: ${analysis.successful_tests}/${analysis.total_tests}`);
  console.log(`Profitable Symbols: ${analysis.profitable_symbols} / ${analysis.successful_tests}`);
  console.log(`Total Trades Across All: ${analysis.aggregates.total_trades}`);
  console.log(`Total Profit Across All: ${analysis.aggregates.total_profit.toFixed(2)}`);
  console.log(`Average Win Rate: ${analysis.aggregates.avg_win_rate.toFixed(2)}%`);
  console.log(`Average Return: ${analysis.aggregates.avg_return.toFixed(2)}%`);
  console.log(`Average Profit Factor: ${analysis.aggregates.avg_profit_factor.toFixed(2)}`);
  console.log(`Average Max Drawdown: ${analysis.aggregates.avg_max_drawdown.toFixed(2)}%\n`);

  console.log(`🏆 Best Performers:`);
  analysis.best_performers.forEach((r, i) => {
    console.log(`${i+1}. ${r.symbol}: ¥${r.performance.net_profit.toFixed(2)} profit, ${r.performance.win_rate_pct.toFixed(2)}% win rate`);
  });

  console.log(`\n💔 Worst Performers:`);
  analysis.worst_performers.forEach((r, i) => {
    console.log(`${i+1}. ${r.symbol}: ¥${r.performance.net_profit.toFixed(2)} profit, ${r.performance.win_rate_pct.toFixed(2)}% win rate`);
  });

  // Generate JSON report
  const reportFile = generateReport(analysis);

  console.log(`\n${'='*80}`);
  console.log(`✅ BACKTEST COMPLETE`);
  console.log(`Report: ${reportFile}`);
  console.log(`${'='*80}\n`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
