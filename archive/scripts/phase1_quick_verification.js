#!/usr/bin/env node

/**
 * Quick Phase 1 Optimization Verification
 * Captures current state of 10 test stocks and compares with baseline
 */

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

const TEST_STOCKS = [
  'SSE:603203', 'SSE:603040', 'SSE:603638',
  'SZSE:002983', 'SZSE:000988',
  'SZSE:000951', 'SSE:603300', 'SSE:600547',
  'SSE:603766', 'SSE:603529'
];

// Baseline data from comprehensive_backtest_2026-04-22T00-01-40-508.json
const BASELINE_DATA = {
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
    return null;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function parseMetrics(tableData) {
  if (!tableData || !tableData.studies || tableData.studies.length === 0) {
    return null;
  }

  try {
    const rows = tableData.studies[0].tables[0].rows || [];
    if (rows.length === 0) {
      return null;
    }

    // Parse: trendUp:true validCompression:false volOK:true validStock:true fakeBreak:false 65 🟢 LONG
    const row = rows[0];
    const match = row.match(/trendUp:(\w+)\s+validCompression:(\w+)\s+volOK:(\w+)\s+validStock:(\w+)\s+fakeBreak:(\w+)\s+(\d+)\s+(\S+)\s+(\w+)/);

    if (!match) {
      console.log(`  Parse error on: "${row}"`);
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
    console.error(`  Parse error: ${error.message}`);
    return null;
  }
}

async function backtestStock(symbol, index, total) {
  console.log(`[${index}/${total}] ${symbol}...`);

  try {
    // Switch symbol
    runCommand(`symbol ${symbol}`);
    await sleep(8000);

    // Get tables
    const tables = runCommand('data tables');
    const metrics = parseMetrics(tables);

    if (!metrics) {
      console.log(`     ⚠️  Could not parse metrics`);
      return { symbol, success: false, baseline: BASELINE_DATA[symbol], current: null };
    }

    console.log(`     Signal: ${metrics.signal} (${metrics.score}), Compression: ${metrics.compression ? '✅' : '❌'}, Volume: ${metrics.volume ? '✅' : '❌'}`);

    return {
      symbol,
      success: true,
      baseline: BASELINE_DATA[symbol],
      current: metrics
    };
  } catch (error) {
    console.error(`     ❌ Error: ${error.message}`);
    return { symbol, success: false, baseline: BASELINE_DATA[symbol], current: null };
  }
}

async function main() {
  console.log('\n' + '='.repeat(80));
  console.log('📊 Phase 1 Optimization Verification');
  console.log('='.repeat(80));
  console.log('\nStrategy: A Share SQZMOM PRO v6 (Daily) - OPT1 + OPT2');
  console.log('Test Stocks: ' + TEST_STOCKS.length);
  console.log('\nExpected Improvements:');
  console.log('  • LONG signals: 2 → 4-5 (Baseline 20% → 40-50%)');
  console.log('  • Valid compression: 0 → 4+ (Baseline 0% → 40-50%)');
  console.log('  • Volume OK: 3 → 6+ (Baseline 30% → 60-70%)');
  console.log('\n' + '='.repeat(80) + '\n');

  const results = [];

  for (let i = 0; i < TEST_STOCKS.length; i++) {
    const result = await backtestStock(TEST_STOCKS[i], i + 1, TEST_STOCKS.length);
    results.push(result);
    if (i < TEST_STOCKS.length - 1) {
      await sleep(1000);
    }
  }

  // Analysis
  const successResults = results.filter(r => r.success && r.current);
  const currentLongSignals = successResults.filter(r => r.current.signal === 'LONG').length;
  const currentCompressionDetected = successResults.filter(r => r.current.compression).length;
  const currentVolumeOK = successResults.filter(r => r.current.volume).length;
  const currentAvgScore = successResults.length > 0
    ? successResults.reduce((sum, r) => sum + r.current.score, 0) / successResults.length
    : 0;

  console.log('\n' + '='.repeat(80));
  console.log('📈 RESULTS');
  console.log('='.repeat(80) + '\n');

  console.log('📊 LONG Signals');
  console.log(`  Baseline: 2 (20%) │ Current: ${currentLongSignals} (${(currentLongSignals/successResults.length*100).toFixed(1)}%)`);
  console.log(`  Change: ${currentLongSignals > 2 ? '+' : ''}${currentLongSignals - 2} │ Status: ${currentLongSignals >= 4 ? '✅ TARGET MET' : '⚠️ TARGET NOT MET'}`);

  console.log('\n📊 Valid Compression');
  console.log(`  Baseline: 0 (0%) │ Current: ${currentCompressionDetected} (${(currentCompressionDetected/successResults.length*100).toFixed(1)}%)`);
  console.log(`  Change: +${currentCompressionDetected} │ Status: ${currentCompressionDetected >= 4 ? '✅ TARGET MET' : '⚠️ TARGET NOT MET'}`);

  console.log('\n📊 Volume OK');
  console.log(`  Baseline: 3 (30%) │ Current: ${currentVolumeOK} (${(currentVolumeOK/successResults.length*100).toFixed(1)}%)`);
  console.log(`  Change: ${currentVolumeOK > 3 ? '+' : ''}${currentVolumeOK - 3} │ Status: ${currentVolumeOK >= 6 ? '✅ TARGET MET' : '⚠️ TARGET NOT MET'}`);

  console.log('\n📊 Average Score');
  console.log(`  Baseline: 41 │ Current: ${currentAvgScore.toFixed(1)}`);
  console.log(`  Change: ${currentAvgScore > 41 ? '+' : ''}${(currentAvgScore - 41).toFixed(1)}`);

  // Detailed table
  console.log('\n' + '='.repeat(80));
  console.log('📋 DETAILED COMPARISON');
  console.log('='.repeat(80) + '\n');
  console.log('Symbol          │ Signal Change │ Score │ Compression │ Volume │ Status');
  console.log('-'.repeat(80));

  successResults.forEach(r => {
    const signalChange = r.baseline.signal === r.current.signal ? '=' : '→';
    const signalDisplay = `${r.baseline.signal}${signalChange}${r.current.signal}`;
    const compressionStatus = r.current.compression ? '✅' : '❌';
    const volumeStatus = r.current.volume ? '✅' : '❌';
    const scoreChange = r.current.score > r.baseline.score ? '↑' : r.current.score === r.baseline.score ? '=' : '↓';

    console.log(`${r.symbol.padEnd(15)} │ ${signalDisplay.padEnd(13)} │ ${r.current.score.toString().padEnd(5)} │ ${compressionStatus}         │ ${volumeStatus}      │ ${scoreChange}`);
  });

  // Save results
  const analysis = {
    timestamp: new Date().toISOString(),
    test_date: '2026-04-22',
    strategy: 'A Share SQZMOM PRO v6 (Daily) - OPT1 + OPT2',
    tested_stocks: successResults.length,
    failed_stocks: results.length - successResults.length,
    comparison: {
      long_signals: { baseline: 2, current: currentLongSignals, target_met: currentLongSignals >= 4 },
      valid_compression: { baseline: 0, current: currentCompressionDetected, target_met: currentCompressionDetected >= 4 },
      volume_ok: { baseline: 3, current: currentVolumeOK, target_met: currentVolumeOK >= 6 },
      average_score: { baseline: 41, current: parseFloat(currentAvgScore.toFixed(1)) }
    },
    detailed_results: successResults
  };

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `phase1_optimization_results_${timestamp}.json`;
  writeFileSync(filename, JSON.stringify(analysis, null, 2));
  console.log(`\n💾 Results saved to: ${filename}`);

  console.log('\n' + '='.repeat(80) + '\n');
}

main().catch(error => {
  console.error('Fatal error:', error.message);
  process.exit(1);
});
