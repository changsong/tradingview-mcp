#!/usr/bin/env node

/**
 * A Share SQZMOM PRO v6 - Backtest Setup Validator
 * Quick health check before running full backtest
 */

import { execSync } from 'child_process';

const CLI_PATH = 'src/cli/index.js';

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      cwd: process.cwd(),
      timeout: 10000
    });
    return JSON.parse(result);
  } catch (error) {
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function validateSetup() {
  console.log('\n' + '='.repeat(80));
  console.log('A Share SQZMOM PRO v6 - Backtest Setup Validator');
  console.log('='.repeat(80) + '\n');

  let passCount = 0;
  let failCount = 0;

  // Test 1: MCP Health
  console.log('1. Checking MCP Server Connection...');
  const health = runCommand('health');
  if (health && health.success) {
    console.log('   ✅ PASS: MCP server is running\n');
    passCount++;
  } else {
    console.log('   ❌ FAIL: Cannot connect to MCP server');
    console.log('   ACTION: Run "npm start" in project root\n');
    failCount++;
  }

  // Test 2: TradingView Connection
  console.log('2. Checking TradingView Connection...');
  const state = runCommand('state');
  if (state && state.success) {
    console.log('   ✅ PASS: TradingView is accessible via CDP');
    console.log(`   Current Chart: ${state.symbol || 'Unknown'} (${state.timeframe || 'Unknown'})\n`);
    passCount++;
  } else {
    console.log('   ❌ FAIL: Cannot connect to TradingView');
    console.log('   ACTION: Ensure TradingView Desktop is running with CDP enabled');
    console.log('   Windows: tradingview.exe --remote-debugging-port=9222\n');
    failCount++;
  }

  if (failCount > 0) {
    console.log('='.repeat(80));
    console.log('❌ Setup Validation Failed - Cannot proceed with backtest');
    console.log('='.repeat(80) + '\n');
    process.exit(1);
  }

  // Test 3: Symbol Setting
  console.log('3. Testing Symbol Change...');
  const symbolResult = runCommand('symbol SSE:603203');
  if (symbolResult && symbolResult.success) {
    console.log('   ✅ PASS: Can set symbols\n');
    passCount++;
    await sleep(5000);
  } else {
    console.log('   ❌ FAIL: Cannot set symbols');
    console.log('   ACTION: Check that SSE:603203 is a valid symbol\n');
    failCount++;
  }

  // Test 4: Timeframe Setting
  console.log('4. Testing Timeframe Change...');
  const tfResult = runCommand('timeframe D');
  if (tfResult && tfResult.success) {
    console.log('   ✅ PASS: Can set timeframe\n');
    passCount++;
    await sleep(5000);
  } else {
    console.log('   ❌ FAIL: Cannot set timeframe\n');
    failCount++;
  }

  // Test 5: Data Reading
  console.log('5. Testing Data Reading...');
  const dataResult = runCommand('data ohlcv --count 5 --summary');
  if (dataResult && dataResult.success && dataResult.bars && dataResult.bars.length > 0) {
    console.log('   ✅ PASS: Can read price data');
    console.log(`   Last bar: ${dataResult.bars[0].close} at ${dataResult.bars[0].time}\n`);
    passCount++;
  } else {
    console.log('   ❌ FAIL: Cannot read price data');
    console.log('   ACTION: Ensure chart has loaded sufficient data\n');
    failCount++;
  }

  // Test 6: Table Reading
  console.log('6. Testing Strategy Table Reading...');
  const tables = runCommand('data tables');
  if (tables && tables.success && tables.studies && tables.studies.length > 0) {
    console.log('   ✅ PASS: Can read strategy tables');
    console.log(`   Found ${tables.studies.length} studies with tables\n`);
    passCount++;
  } else {
    console.log('   ⚠️  WARNING: No strategy tables found');
    console.log('   ACTION: Ensure the strategy is loaded and visible in TradingView\n');
    // Don't count as fail - strategy might just not be loaded yet
  }

  // Test 7: Label Reading
  console.log('7. Testing Label Reading...');
  const labels = runCommand('data labels --max 10');
  if (labels && labels.success) {
    const labelCount = labels.studies && labels.studies[0] && labels.studies[0].labels
      ? labels.studies[0].labels.length
      : 0;
    console.log(`   ✅ PASS: Can read labels (found ${labelCount} labels)\n`);
    passCount++;
  } else {
    console.log('   ⚠️  WARNING: Cannot read labels\n');
  }

  // Test 8: Script Files
  console.log('8. Checking Required Script Files...');
  try {
    execSync('test -f a_share_sqzmom_pro_v6_backtest.js', { cwd: process.cwd() });
    console.log('   ✅ PASS: Main backtest script found\n');
    passCount++;
  } catch (err) {
    console.log('   ❌ FAIL: Main backtest script not found\n');
    failCount++;
  }

  try {
    execSync('test -f analyze_backtest_results.js', { cwd: process.cwd() });
    console.log('   ✅ PASS: Analysis script found\n');
    passCount++;
  } catch (err) {
    console.log('   ❌ FAIL: Analysis script not found\n');
    failCount++;
  }

  // Test 9: Node Version
  console.log('9. Checking Node.js Version...');
  try {
    const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
    const major = parseInt(nodeVersion.split('.')[0].substring(1));
    if (major >= 18) {
      console.log(`   ✅ PASS: Node.js ${nodeVersion} is compatible\n`);
      passCount++;
    } else {
      console.log(`   ❌ FAIL: Node.js ${nodeVersion} is too old (need 18+)\n`);
      failCount++;
    }
  } catch (err) {
    console.log('   ❌ FAIL: Cannot check Node.js version\n');
    failCount++;
  }

  // Summary
  const total = passCount + failCount;
  const passRate = ((passCount / total) * 100).toFixed(1);

  console.log('='.repeat(80));
  console.log(`VALIDATION SUMMARY: ${passCount}/${total} checks passed (${passRate}%)`);
  console.log('='.repeat(80) + '\n');

  if (failCount === 0) {
    console.log('✅ All critical tests passed! Ready to run backtest.\n');
    console.log('Next step: node a_share_sqzmom_pro_v6_backtest.js\n');
    return true;
  } else if (failCount <= 2) {
    console.log(`⚠️  ${failCount} issues found - may still work, but review warnings above\n`);
    return true;
  } else {
    console.log(`❌ ${failCount} critical issues found - fix before proceeding\n`);
    return false;
  }
}

// System Information Helper
function printSystemInfo() {
  console.log('\n' + '='.repeat(80));
  console.log('SYSTEM INFORMATION');
  console.log('='.repeat(80) + '\n');

  try {
    const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
    console.log(`Node.js: ${nodeVersion}`);
  } catch (err) {
    console.log('Node.js: Not found');
  }

  try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    console.log(`NPM: ${npmVersion}`);
  } catch (err) {
    console.log('NPM: Not found');
  }

  try {
    const gitVersion = execSync('git --version', { encoding: 'utf8' }).trim();
    console.log(`Git: ${gitVersion}`);
  } catch (err) {
    console.log('Git: Not found');
  }

  console.log('\n' + '='.repeat(80) + '\n');
}

// Configuration Guide
function printConfiguration() {
  console.log('\n' + '='.repeat(80));
  console.log('CONFIGURATION GUIDE');
  console.log('='.repeat(80) + '\n');

  console.log('1. Enable CDP in TradingView (Windows):');
  console.log('   • Create a batch file or shortcut');
  console.log('   • Command: "tradingview.exe" --remote-debugging-port=9222');
  console.log('   • Or add to Windows Startup folder\n');

  console.log('2. Verify CDP is running:');
  console.log('   curl http://localhost:9222/json/version\n');

  console.log('3. Start MCP Server:');
  console.log('   npm start\n');

  console.log('4. In another terminal, run validator:');
  console.log('   node validate_backtest_setup.js\n');

  console.log('5. Once all checks pass, run backtest:');
  console.log('   node a_share_sqzmom_pro_v6_backtest.js\n');

  console.log('6. After backtest completes, analyze results:');
  console.log('   node analyze_backtest_results.js a_share_sqzmom_pro_v6_backtest_*.json\n');
}

// Main execution
async function main() {
  printSystemInfo();
  const success = await validateSetup();

  if (!success) {
    printConfiguration();
    process.exit(1);
  }

  console.log('\nTips for running backtest:');
  console.log('• Keep TradingView window visible and not minimized');
  console.log('• Do not interrupt or pause the script');
  console.log('• Avoid manual chart changes while backtest is running');
  console.log('• Monitor TradingView for any error popups');
  console.log('• Typical runtime: 25-35 minutes for 10 stocks\n');
}

main().catch(err => {
  console.error('Validation error:', err.message);
  process.exit(1);
});
