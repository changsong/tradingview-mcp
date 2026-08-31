import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const stocks = [
  'SSE:603203',
  'SSE:603040',
  'SSE:603638',
  'SZSE:002983',
  'SZSE:000988',
  'SZSE:000951',
  'SSE:603300',
  'SSE:600547',
  'SSE:603766',
  'SSE:603529'
];

async function runCommand(command, args = []) {
  return new Promise((resolve, reject) => {
    const proc = spawn('node', ['src/cli/index.js', command, ...args], {
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: false,
      cwd: __dirname,
      timeout: 30000
    });

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      try {
        if (code === 0 && stdout) {
          resolve(JSON.parse(stdout));
        } else {
          resolve({ success: false, error: stderr || 'Command failed', code });
        }
      } catch (e) {
        resolve({ success: false, error: e.message, stdout });
      }
    });

    proc.on('error', (err) => {
      reject(err);
    });
  });
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function backtest() {
  const results = {
    timestamp: new Date().toISOString(),
    stocks: [],
    aggregated: {
      totalStocks: stocks.length,
      averageWinRate: 0,
      averageReturn: 0,
      averageProfitFactor: 0,
      averageMaxDrawdown: 0,
      totalTrades: 0,
      bestPerformer: null,
      worstPerformer: null
    }
  };

  console.log('Starting comprehensive backtest for A Share SQZMOM PRO v6 (Daily)');
  console.log(`Testing ${stocks.length} stocks...`);
  console.log('='.repeat(80));

  for (let i = 0; i < stocks.length; i++) {
    const symbol = stocks[i];
    console.log(`\n[${i + 1}/${stocks.length}] Testing ${symbol}...`);

    try {
      // Switch to stock
      console.log(`  - Switching to ${symbol}`);
      await runCommand('symbol', [symbol]);

      // Wait for chart to update
      await sleep(2000);

      // Get chart state
      console.log(`  - Getting chart state`);
      const state = await runCommand('state', []);

      // Get strategy data
      console.log(`  - Fetching strategy metrics`);
      const strategy = await runCommand('data', ['strategy']);

      // Get trades
      console.log(`  - Fetching trade list`);
      const trades = await runCommand('data', ['trades']);

      // Get tables
      console.log(`  - Fetching indicator tables`);
      const tables = await runCommand('data', ['tables']);

      const stockData = {
        symbol,
        state: state.success ? state : null,
        strategy: strategy.success ? strategy : null,
        trades: trades.success ? trades : null,
        tables: tables.success ? tables : null,
        timestamp: new Date().toISOString()
      };

      results.stocks.push(stockData);
      console.log(`  ✓ ${symbol} data collected`);

    } catch (err) {
      console.error(`  ✗ Error testing ${symbol}: ${err.message}`);
      results.stocks.push({
        symbol,
        error: err.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('Backtest complete. Saving results...');

  // Save raw results
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('Z')[0];
  const resultsFile = `comprehensive_backtest_${timestamp}.json`;
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  console.log(`Saved: ${resultsFile}`);

  return results;
}

backtest().catch(console.error);
