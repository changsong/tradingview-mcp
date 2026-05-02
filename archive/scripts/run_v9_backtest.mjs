/**
 * v9 backtest runner: switch symbol, wait, screenshot strategy tester, extract metrics.
 */

import { setSymbol } from './src/core/chart.js';
import { captureScreenshot } from './src/core/capture.js';
import { getStrategyResults } from './src/core/data.js';

const symbols = [
  'SZSE:300750',
  'SZSE:002245',
  'SZSE:300408',
  'SZSE:000657',
  'SSE:605198',
  'SZSE:300037',
  'SZSE:300661',
  'SZSE:002475',
  'SSE:601126',
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

const results = [];

for (const sym of symbols) {
  console.error(`\n=== Processing ${sym} ===`);

  // a. Switch symbol
  const switchRes = await setSymbol({ symbol: sym });
  console.error(`  Symbol set: ${JSON.stringify(switchRes)}`);

  // b. Wait 5 seconds for strategy tester to update
  await sleep(5000);

  // c. Screenshot strategy tester
  const ssRes = await captureScreenshot({ region: 'strategy_tester' });
  console.error(`  Screenshot: ${ssRes.path || ssRes.file || JSON.stringify(ssRes)}`);

  // d. Try to get strategy report data
  let metrics = {};
  try {
    const report = await getStrategyResults();
    console.error(`  Strategy report: ${JSON.stringify(report).slice(0, 300)}`);
    metrics = report;
  } catch (e) {
    console.error(`  Strategy report error: ${e.message}`);
    metrics = { error: e.message };
  }

  results.push({
    symbol: sym,
    screenshot: ssRes.path || ssRes.file || null,
    metrics,
  });

  // Brief pause before next symbol
  await sleep(1000);
}

console.log(JSON.stringify(results, null, 2));
