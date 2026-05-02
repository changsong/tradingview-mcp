#!/usr/bin/env node

/**
 * Phase 1 Optimization Backtest Verification
 *
 * Performs backtest of the optimized SQZMOM strategy (OPT1 + OPT2) on 10 test stocks
 * to verify that optimization improvements meet expected targets:
 * - LONG signals: 20% → 40-50%
 * - Valid compression: 0% → 40-50%
 * - Volume OK: 30% → 60-70%
 *
 * Baseline data from: comprehensive_backtest_2026-04-22T00-01-40-508.json
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const CLI_PATH = 'src/cli/index.js';

const TEST_STOCKS = [
  'SSE:603203', 'SSE:603040', 'SSE:603638',
  'SZSE:002983', 'SZSE:000988',
  'SZSE:000951', 'SSE:603300', 'SSE:600547',
  'SSE:603766', 'SSE:603529'
];

// Baseline data from previous backtest
const BASELINE_DATA = {
  timestamp: '2026-04-21T23:59:22.824Z',
  'SSE:603203': { signal: 'LONG', score: 65, trend: true, compression: false, volume: true },
  'SSE:603040': { signal: 'WAIT', score: 10, trend: false, compression: false, volume: false },
  'SSE:603638': { signal: 'WAIT', score: 55, trend: false, compression: false, volume: true },
  'SZSE:002983': { signal: 'LONG', score: 65, trend: true, compression: false, volume: true },
  'SZSE:000988': { signal: 'WAIT', score: 50, trend: true, compression: false, volume: false },
  'SZSE:000951': { signal: 'WAIT', score: 50, trend: true, compression: false, volume: false },
  'SSE:603300': { signal: 'WAIT', score: 40, trend: false, compression: false, volume: false },
  'SSE:600547': { signal: 'WAIT', score: 10, trend: false, compression: false, volume: false },
  'SSE:603766': { signal: 'WAIT', score: 50, trend: true, compression: false, volume: false },
  'SSE:603529': { signal: 'WAIT', score: 10, trend: false, compression: false, volume: false }
};

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      cwd: process.cwd(),
      timeout: 45000,
      maxBuffer: 10 * 1024 * 1024
    });
    return JSON.parse(result);
  } catch (error) {
    console.error(`  ❌ Command failed: ${cmd}`);
    console.error(`  Error: ${error.message}`);
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Parse strategy metrics from table output
 */
function parseStrategyMetrics(tableData) {
  if (!tableData || !tableData.studies || tableData.studies.length === 0) {
    return null;
  }

  try {
    const rows = tableData.studies[0].tables[0].rows || [];
    if (rows.length === 0) {
      return null;
    }

    // Parse first row which contains: trendUp validCompression volOK validStock fakeBreak score signal
    const row = rows[0];
    const match = row.match(/trendUp:(\w+)\s+validCompression:(\w+)\s+volOK:(\w+)\s+validStock:(\w+)\s+fakeBreak:(\w+)\s+(\d+)\s+(\S+)\s+(\w+)/);

    if (!match) {
      return null;
    }

    return {
      trend: match[1] === 'true',
      compression: match[2] === 'true',
      volume: match[3] === 'true',
      validStock: match[4] === 'true',
      fakeBreak: match[5] === 'true',
      score: parseInt(match[6]),
      emoji: match[7],
      signal: match[8]
    };
  } catch (error) {
    console.error(`  Error parsing metrics: ${error.message}`);
    return null;
  }
}

/**
 * Get current metrics for a stock
 */
async function getCurrentMetrics(symbol) {
  await sleep(15000); // Wait for chart to fully load

  const tables = runCommand('data tables');
  return parseStrategyMetrics(tables);
}

/**
 * Run backtest on a single stock
 */
async function backtestStock(symbol, index, total) {
  console.log(`\n[${index}/${total}] Testing ${symbol}...`);

  try {
    // Switch to symbol
    console.log(`  Switching to ${symbol}...`);
    runCommand(`symbol ${symbol}`);
    await sleep(10000);

    // Set timeframe to daily
    console.log(`  Setting timeframe to daily...`);
    runCommand('timeframe D');
    await sleep(5000);

    // Get current metrics
    console.log(`  Retrieving metrics...`);
    const metrics = await getCurrentMetrics(symbol);

    if (!metrics) {
      console.log(`  ⚠️  Could not retrieve metrics for ${symbol}`);
      return {
        symbol,
        success: false,
        baseline: BASELINE_DATA[symbol] || null,
        current: null
      };
    }

    console.log(`  ✅ Current signal: ${metrics.signal} (score: ${metrics.score})`);
    console.log(`     Trend: ${metrics.trend}, Compression: ${metrics.compression}, Volume: ${metrics.volume}`);

    return {
      symbol,
      success: true,
      baseline: BASELINE_DATA[symbol] || null,
      current: metrics
    };
  } catch (error) {
    console.error(`  ❌ Error testing ${symbol}: ${error.message}`);
    return {
      symbol,
      success: false,
      baseline: BASELINE_DATA[symbol] || null,
      current: null,
      error: error.message
    };
  }
}

/**
 * Generate comparison analysis
 */
function generateComparison(results) {
  const analysis = {
    timestamp: new Date().toISOString(),
    test_date: '2026-04-22',
    strategy: 'A Share SQZMOM PRO v6 (Daily) - Phase 1 Optimization Test',
    summary: {
      baseline_long_signals: 2,
      baseline_wait_signals: 8,
      baseline_valid_compression: 0,
      baseline_compression_rate: '0%',
      baseline_volume_ok_rate: '30%',
      baseline_avg_score: 41
    },
    detailed_results: [],
    comparison_summary: {}
  };

  // Collect successful results
  const successResults = results.filter(r => r.success && r.current);

  // Analyze each stock
  successResults.forEach(result => {
    const baseline = result.baseline;
    const current = result.current;

    const comparison = {
      symbol: result.symbol,
      baseline: {
        signal: baseline?.signal || 'N/A',
        score: baseline?.score || 0,
        trend: baseline?.trend || false,
        compression: baseline?.compression || false,
        volume: baseline?.volume || false
      },
      current: {
        signal: current.signal,
        score: current.score,
        trend: current.trend,
        compression: current.compression,
        volume: current.volume
      },
      changes: {
        signal_changed: (baseline?.signal || 'N/A') !== current.signal,
        score_change: (current.score - (baseline?.score || 0)),
        compression_improvement: !baseline?.compression && current.compression,
        volume_improvement: !baseline?.volume && current.volume
      }
    };

    analysis.detailed_results.push(comparison);
  });

  // Calculate aggregated metrics
  const currentLongSignals = successResults.filter(r => r.current.signal === 'LONG').length;
  const currentCompressionDetected = successResults.filter(r => r.current.compression).length;
  const currentVolumeOK = successResults.filter(r => r.current.volume).length;
  const currentAvgScore = successResults.length > 0
    ? successResults.reduce((sum, r) => sum + r.current.score, 0) / successResults.length
    : 0;

  analysis.comparison_summary = {
    tested_stocks: successResults.length,
    failed_stocks: results.length - successResults.length,
    long_signals: {
      baseline: 2,
      current: currentLongSignals,
      change: currentLongSignals - 2,
      percentage_change: ((currentLongSignals - 2) / 2 * 100).toFixed(1) + '%',
      target_range: '40-50% (4-5 signals)',
      target_met: currentLongSignals >= 4
    },
    valid_compression: {
      baseline: 0,
      current: currentCompressionDetected,
      change: currentCompressionDetected,
      percentage: (currentCompressionDetected / successResults.length * 100).toFixed(1) + '%',
      target_range: '40-50% (4-5 stocks)',
      target_met: currentCompressionDetected >= 4
    },
    volume_ok: {
      baseline: 3,
      current: currentVolumeOK,
      change: currentVolumeOK - 3,
      percentage: (currentVolumeOK / successResults.length * 100).toFixed(1) + '%',
      target_range: '60-70% (6-7 stocks)',
      target_met: currentVolumeOK >= 6
    },
    average_score: {
      baseline: 41,
      current: currentAvgScore.toFixed(1),
      change: (currentAvgScore - 41).toFixed(1),
      interpretation: currentAvgScore > 50 ? 'Improved' : 'No improvement'
    }
  };

  // Success criteria evaluation
  analysis.success_criteria = {
    signal_improvement: {
      criterion: 'LONG signals increase from 2 to 4-5+',
      baseline: 2,
      current: currentLongSignals,
      met: currentLongSignals >= 4,
      status: currentLongSignals >= 4 ? 'PASS' : 'FAIL'
    },
    compression_improvement: {
      criterion: 'Valid compression detection from 0 to 4+',
      baseline: 0,
      current: currentCompressionDetected,
      met: currentCompressionDetected >= 4,
      status: currentCompressionDetected >= 4 ? 'PASS' : 'FAIL'
    },
    signal_quality: {
      criterion: 'Avoid massive false signal increase',
      current_long_ratio: (currentLongSignals / successResults.length * 100).toFixed(1) + '%',
      reasonable: currentLongSignals <= 6,
      status: currentLongSignals <= 6 ? 'PASS' : 'VERIFY'
    }
  };

  return analysis;
}

/**
 * Main execution
 */
async function main() {
  console.log('\n' + '='.repeat(80));
  console.log('📊 Phase 1 Optimization Backtest Verification');
  console.log('='.repeat(80));
  console.log(`\nStrategy: A Share SQZMOM PRO v6 (Daily)`);
  console.log(`Test Date: 2026-04-22`);
  console.log(`Test Stocks: ${TEST_STOCKS.length} stocks`);
  console.log(`Optimization: OPT1 (Relax Squeeze) + OPT2 (Volume Flexibility)`);
  console.log('\nExpected Improvements:');
  console.log('  • LONG signals: 20% → 40-50% (2 → 4-5 stocks)');
  console.log('  • Valid compression: 0% → 40-50% (0 → 4-5 stocks)');
  console.log('  • Volume OK: 30% → 60-70% (3 → 6-7 stocks)');
  console.log('\n' + '='.repeat(80) + '\n');

  const results = [];

  for (let i = 0; i < TEST_STOCKS.length; i++) {
    const symbol = TEST_STOCKS[i];
    const result = await backtestStock(symbol, i + 1, TEST_STOCKS.length);
    results.push(result);

    if (i < TEST_STOCKS.length - 1) {
      await sleep(2000); // Brief pause between stocks
    }
  }

  // Generate comparison analysis
  console.log('\n' + '='.repeat(80));
  console.log('📈 Analysis Results');
  console.log('='.repeat(80) + '\n');

  const analysis = generateComparison(results);

  // Display summary
  console.log(`✅ Tested ${analysis.comparison_summary.tested_stocks} stocks`);
  if (analysis.comparison_summary.failed_stocks > 0) {
    console.log(`⚠️  Failed to retrieve data for ${analysis.comparison_summary.failed_stocks} stocks`);
  }

  console.log('\n📊 LONG Signals:');
  console.log(`  Baseline: ${analysis.comparison_summary.long_signals.baseline}`);
  console.log(`  Current:  ${analysis.comparison_summary.long_signals.current}`);
  console.log(`  Change:   ${analysis.comparison_summary.long_signals.change} (${analysis.comparison_summary.long_signals.percentage_change})`);
  console.log(`  Target:   ${analysis.comparison_summary.long_signals.target_range}`);
  console.log(`  Status:   ${analysis.comparison_summary.long_signals.target_met ? '✅ TARGET MET' : '❌ TARGET NOT MET'}`);

  console.log('\n📊 Valid Compression Detection:');
  console.log(`  Baseline: ${analysis.comparison_summary.valid_compression.baseline}`);
  console.log(`  Current:  ${analysis.comparison_summary.valid_compression.current}`);
  console.log(`  Change:   ${analysis.comparison_summary.valid_compression.change}`);
  console.log(`  Percentage: ${analysis.comparison_summary.valid_compression.percentage}`);
  console.log(`  Target:   ${analysis.comparison_summary.valid_compression.target_range}`);
  console.log(`  Status:   ${analysis.comparison_summary.valid_compression.target_met ? '✅ TARGET MET' : '❌ TARGET NOT MET'}`);

  console.log('\n📊 Volume OK:');
  console.log(`  Baseline: ${analysis.comparison_summary.volume_ok.baseline}`);
  console.log(`  Current:  ${analysis.comparison_summary.volume_ok.current}`);
  console.log(`  Change:   ${analysis.comparison_summary.volume_ok.change}`);
  console.log(`  Percentage: ${analysis.comparison_summary.volume_ok.percentage}`);
  console.log(`  Target:   ${analysis.comparison_summary.volume_ok.target_range}`);
  console.log(`  Status:   ${analysis.comparison_summary.volume_ok.target_met ? '✅ TARGET MET' : '❌ TARGET NOT MET'}`);

  console.log('\n📊 Average Score:');
  console.log(`  Baseline: ${analysis.comparison_summary.average_score.baseline}`);
  console.log(`  Current:  ${analysis.comparison_summary.average_score.current}`);
  console.log(`  Change:   ${analysis.comparison_summary.average_score.change}`);
  console.log(`  Status:   ${analysis.comparison_summary.average_score.interpretation}`);

  console.log('\n✅ Success Criteria Evaluation:');
  Object.entries(analysis.success_criteria).forEach(([key, criterion]) => {
    console.log(`  ${criterion.status === 'PASS' || criterion.status === true ? '✅' : '❌'} ${criterion.criterion}`);
    if (criterion.baseline !== undefined) {
      console.log(`    Baseline: ${criterion.baseline}, Current: ${criterion.current}`);
    }
  });

  // Save analysis to file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `phase1_backtest_results_${timestamp}.json`;
  writeFileSync(filename, JSON.stringify(analysis, null, 2));
  console.log(`\n💾 Results saved to: ${filename}`);

  console.log('\n' + '='.repeat(80) + '\n');

  return analysis;
}

// Execute
main().catch(error => {
  console.error('Fatal error:', error.message);
  process.exit(1);
});
