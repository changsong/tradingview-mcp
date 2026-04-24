/**
 * A Share SQZMOM PRO v7 backtest scan across 9 CN symbols.
 * Uses direct CDP calls via chrome-remote-interface.
 */
import CDP from 'chrome-remote-interface';
import { writeFileSync } from 'fs';
import path from 'path';

const SYMBOLS = [
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

const SCREENSHOTS_DIR = './screenshots';
const CHART_API = 'window.TradingViewApi._activeChartWidgetWV.value()';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getMainPage(client) {
  // Find the TradingView main page tab
  const tabs = await CDP.List({ port: 9222 });
  const tv = tabs.find(t => t.type === 'page' && t.title && t.title.includes('TradingView'));
  return tv;
}

async function setSymbol(client, symbol) {
  const { Runtime } = client;
  const result = await Runtime.evaluate({
    expression: `
      (function() {
        try {
          var chart = ${CHART_API};
          chart.setSymbol(${JSON.stringify(symbol)}, {});
          return { ok: true };
        } catch(e) {
          return { ok: false, error: e.message };
        }
      })()
    `,
    returnByValue: true,
    awaitPromise: false,
  });
  return result.result.value;
}

async function captureScreenshot(client, symbol) {
  const { Page } = client;

  // Try to find strategy tester region using DOM
  // First get screenshot of full page to find strategy tester area
  const shot = await Page.captureScreenshot({ format: 'png' });
  const buf = Buffer.from(shot.data, 'base64');

  // Generate filename
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const sym = symbol.replace(':', '_');
  const filename = `backtest_${sym}_${ts}.png`;
  const filepath = path.join(SCREENSHOTS_DIR, filename);

  writeFileSync(filepath, buf);
  return filepath;
}

async function captureStrategyTester(client, symbol) {
  const { Runtime, Page } = client;

  // Try to find the strategy tester panel dimensions via DOM
  const dimResult = await Runtime.evaluate({
    expression: `
      (function() {
        // Look for strategy tester container
        var selectors = [
          '[data-name="backtesting"]',
          '.strategy-tester-wrapper',
          '[class*="strategyTester"]',
          '[class*="strategy-tester"]',
          '.tv-strategy-report',
          '[data-name="strategy-tester"]',
        ];
        for (var s of selectors) {
          var el = document.querySelector(s);
          if (el) {
            var r = el.getBoundingClientRect();
            return { found: true, selector: s, x: r.x, y: r.y, w: r.width, h: r.height };
          }
        }
        return { found: false };
      })()
    `,
    returnByValue: true,
  });

  const dim = dimResult.result.value;
  console.log('    Strategy tester DOM search:', JSON.stringify(dim));

  // Take full screenshot regardless
  const shot = await Page.captureScreenshot({ format: 'png' });
  const buf = Buffer.from(shot.data, 'base64');

  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const sym = symbol.replace(':', '_');
  const filename = `backtest_${sym}_${ts}.png`;
  const filepath = path.join(SCREENSHOTS_DIR, filename);

  writeFileSync(filepath, buf);
  return { filepath, dim };
}

async function main() {
  console.log('Connecting to CDP on port 9222...');

  // Get the main TradingView tab
  const tabs = await CDP.List({ port: 9222 });
  const tvTab = tabs.find(t => t.type === 'page' && t.title && t.title.includes('TradingView'));

  if (!tvTab) {
    console.error('TradingView tab not found! Available tabs:');
    tabs.forEach(t => console.log(' -', t.type, t.title));
    process.exit(1);
  }

  console.log('Found TradingView tab:', tvTab.title?.substring(0, 60));

  const client = await CDP({ target: tvTab.id, port: 9222 });
  const { Runtime, Page } = client;

  await Page.enable();
  await Runtime.enable();

  const results = [];

  for (let i = 0; i < SYMBOLS.length; i++) {
    const symbol = SYMBOLS[i];
    console.log(`\n[${i+1}/${SYMBOLS.length}] Processing ${symbol}...`);

    // Set symbol
    console.log('  Setting symbol...');
    const setResult = await setSymbol(client, symbol);
    console.log('  Set result:', JSON.stringify(setResult));

    // Wait for chart to load
    console.log('  Waiting 3s for chart load...');
    await sleep(3000);

    // Verify current symbol
    const symCheck = await Runtime.evaluate({
      expression: `
        (function() {
          try {
            return ${CHART_API}.symbol();
          } catch(e) {
            return 'ERROR: ' + e.message;
          }
        })()
      `,
      returnByValue: true,
    });
    console.log('  Current symbol:', symCheck.result.value);

    // Capture screenshot
    console.log('  Capturing screenshot...');
    const { filepath, dim } = await captureStrategyTester(client, symbol);
    console.log('  Screenshot saved:', filepath);

    results.push({
      symbol,
      screenshot: filepath,
      strategyTesterFound: dim.found,
      strategyTesterDim: dim,
    });
  }

  // Final full screenshot
  console.log('\nTaking final full screenshot...');
  const finalShot = await Page.captureScreenshot({ format: 'png' });
  const finalBuf = Buffer.from(finalShot.data, 'base64');
  const finalTs = new Date().toISOString().replace(/[:.]/g, '-');
  const finalPath = path.join(SCREENSHOTS_DIR, `backtest_final_${finalTs}.png`);
  writeFileSync(finalPath, finalBuf);
  console.log('Final screenshot:', finalPath);

  await client.close();

  // Print results table
  console.log('\n\n=== RESULTS TABLE ===');
  console.log('Symbol\t\t\tScreenshot');
  console.log('─'.repeat(80));
  results.forEach(r => {
    console.log(`${r.symbol.padEnd(20)}\t${r.screenshot}`);
  });
  console.log('\nFinal screenshot:', finalPath);

  // Save results as JSON
  const reportPath = path.join('.', 'backtest_scan_results.json');
  writeFileSync(reportPath, JSON.stringify({ results, finalScreenshot: finalPath }, null, 2));
  console.log('\nResults saved to:', reportPath);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
