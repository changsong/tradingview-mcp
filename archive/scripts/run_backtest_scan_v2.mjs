/**
 * A Share SQZMOM PRO v7 backtest scan - v2
 * Uses waitForChartReady pattern and focuses the window before each screenshot.
 * Captures strategy tester via DOM clip.
 */
import CDP from 'chrome-remote-interface';
import { writeFileSync, mkdirSync } from 'fs';
import path from 'path';
import { execSync } from 'child_process';

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

async function waitForSymbol(Runtime, expectedSymbol, maxWaitMs = 8000) {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    const r = await Runtime.evaluate({
      expression: `(function() {
        try { return ${CHART_API}.symbol(); }
        catch(e) { return null; }
      })()`,
      returnByValue: true,
    });
    const current = r.result.value;
    if (current === expectedSymbol) return true;
    await sleep(300);
  }
  return false;
}

async function waitForStrategyTesterReady(Runtime, maxWaitMs = 10000) {
  // Wait for strategy tester to have loaded data (net profit cell non-empty)
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    const r = await Runtime.evaluate({
      expression: `(function() {
        // Check if strategy tester has data loaded
        var cells = document.querySelectorAll('[class*="report-"]');
        if (cells.length > 0) return true;
        // Also check for the backtesting panel
        var panels = document.querySelectorAll('[data-name="backtesting"], [class*="strategyTester"], [class*="strategy-tester"]');
        return panels.length > 0;
      })()`,
      returnByValue: true,
    });
    if (r.result.value) return true;
    await sleep(500);
  }
  return false;
}

async function captureWithClip(Page, Runtime, symbol) {
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const sym = symbol.replace(':', '_');

  // Try to find strategy tester bounds
  const dimResult = await Runtime.evaluate({
    expression: `(function() {
      var selectors = [
        '[data-name="backtesting"]',
        '[class*="backtesting"]',
        '[class*="strategyReport"]',
        '[class*="strategy-report"]',
        '[class*="strategyTester"]',
        '.js-strategy-report',
      ];
      for (var s of selectors) {
        var el = document.querySelector(s);
        if (el) {
          var r = el.getBoundingClientRect();
          if (r.width > 0 && r.height > 0) {
            return { found: true, selector: s, x: r.x, y: r.y, w: r.width, h: r.height };
          }
        }
      }
      // Fallback: look for anything in bottom half of screen with data
      var allEls = document.querySelectorAll('*');
      for (var el of allEls) {
        var r = el.getBoundingClientRect();
        if (r.y > window.innerHeight * 0.6 && r.height > 100 && r.width > 200) {
          var cls = el.className || '';
          if (typeof cls === 'string' && (cls.includes('bottom') || cls.includes('panel') || cls.includes('tester') || cls.includes('report') || cls.includes('strategy'))) {
            return { found: true, selector: cls.substring(0,50), x: r.x, y: r.y, w: r.width, h: r.height };
          }
        }
      }
      return { found: false, windowH: window.innerHeight, windowW: window.innerWidth };
    })()`,
    returnByValue: true,
  });

  const dim = dimResult.result.value;
  console.log(`  ST bounds: ${JSON.stringify(dim)}`);

  // Take full screenshot
  const fullShot = await Page.captureScreenshot({ format: 'png' });
  const fullBuf = Buffer.from(fullShot.data, 'base64');
  const fullPath = path.join(SCREENSHOTS_DIR, `backtest_${sym}_full_${ts}.png`);
  writeFileSync(fullPath, fullBuf);

  // Also try clipped screenshot if we have bounds
  let clipPath = null;
  if (dim.found && dim.w > 50 && dim.h > 50) {
    try {
      const clipShot = await Page.captureScreenshot({
        format: 'png',
        clip: {
          x: Math.max(0, dim.x - 5),
          y: Math.max(0, dim.y - 5),
          width: dim.w + 10,
          height: dim.h + 10,
          scale: 1,
        },
      });
      const clipBuf = Buffer.from(clipShot.data, 'base64');
      clipPath = path.join(SCREENSHOTS_DIR, `backtest_${sym}_ST_${ts}.png`);
      writeFileSync(clipPath, clipBuf);
      console.log(`  Clipped ST screenshot: ${clipPath}`);
    } catch (e) {
      console.log(`  Clip failed: ${e.message}`);
    }
  }

  return { fullPath, clipPath, dim };
}

async function getStrategyMetrics(Runtime) {
  // Try to extract key metrics from the strategy tester DOM
  const r = await Runtime.evaluate({
    expression: `(function() {
      try {
        // Look for strategy tester data in the DOM
        var result = {};

        // Net profit
        var npEls = document.querySelectorAll('[class*="netProfit"], [class*="net-profit"]');
        if (npEls.length > 0) result.netProfit = npEls[0].textContent?.trim();

        // Total trades
        var trEls = document.querySelectorAll('[class*="totalTrades"], [class*="total-trades"]');
        if (trEls.length > 0) result.totalTrades = trEls[0].textContent?.trim();

        // Win rate
        var wrEls = document.querySelectorAll('[class*="winRate"], [class*="win-rate"], [class*="percentProfitable"]');
        if (wrEls.length > 0) result.winRate = wrEls[0].textContent?.trim();

        // Try the overview tab values - look for table cells with numbers
        var cells = document.querySelectorAll('[class*="report"] td, [class*="report"] [class*="value"]');
        var vals = [];
        for (var c of cells) {
          var txt = c.textContent?.trim();
          if (txt && txt.length > 0 && txt.length < 30) vals.push(txt);
        }
        result.rawCells = vals.slice(0, 20);

        return result;
      } catch(e) {
        return { error: e.message };
      }
    })()`,
    returnByValue: true,
  });
  return r.result.value;
}

async function main() {
  console.log('Connecting to CDP...');
  const tabs = await CDP.List({ port: 9222 });
  const tvTab = tabs.find(t => t.type === 'page' && t.title && t.title.includes('TradingView'));
  if (!tvTab) { console.error('TradingView not found'); process.exit(1); }

  console.log('Tab:', tvTab.title?.substring(0, 60));
  const client = await CDP({ target: tvTab.id, port: 9222 });
  const { Runtime, Page, Input } = client;
  await Page.enable();
  await Runtime.enable();

  // Bring TradingView window to front
  await Page.bringToFront();
  await sleep(500);

  const results = [];

  for (let i = 0; i < SYMBOLS.length; i++) {
    const symbol = SYMBOLS[i];
    console.log(`\n[${i+1}/${SYMBOLS.length}] ${symbol}`);

    // Set symbol
    await Runtime.evaluate({
      expression: `(function() {
        try {
          ${CHART_API}.setSymbol(${JSON.stringify(symbol)}, {});
          return true;
        } catch(e) { return false; }
      })()`,
      returnByValue: true,
    });

    // Wait for symbol to actually change
    console.log('  Waiting for symbol switch...');
    const switched = await waitForSymbol(Runtime, symbol, 10000);
    console.log('  Switched:', switched);

    // Wait for strategy tester to recalculate
    console.log('  Waiting for strategy tester...');
    await sleep(4000);

    // Get current symbol to confirm
    const symR = await Runtime.evaluate({
      expression: `(function() { try { return ${CHART_API}.symbol(); } catch(e) { return 'ERR: '+e.message; } })()`,
      returnByValue: true,
    });
    console.log('  Confirmed symbol:', symR.result.value);

    // Try to extract metrics
    const metrics = await getStrategyMetrics(Runtime);
    console.log('  Metrics:', JSON.stringify(metrics));

    // Capture screenshot
    const { fullPath, clipPath, dim } = await captureWithClip(Page, Runtime, symbol);
    console.log('  Full screenshot:', fullPath);

    results.push({
      symbol,
      confirmed: symR.result.value,
      switched,
      metrics,
      fullScreenshot: fullPath,
      clipScreenshot: clipPath,
      strategyTesterDim: dim,
    });
  }

  // Final screenshot
  await sleep(1000);
  const finalShot = await Page.captureScreenshot({ format: 'png' });
  const finalTs = new Date().toISOString().replace(/[:.]/g, '-');
  const finalPath = path.join(SCREENSHOTS_DIR, `backtest_final_v2_${finalTs}.png`);
  writeFileSync(finalPath, Buffer.from(finalShot.data, 'base64'));
  console.log('\nFinal screenshot:', finalPath);

  await client.close();

  // Print results table
  console.log('\n\n=== RESULTS TABLE ===');
  console.log('No.\tSymbol\t\t\tSwitched\tScreenshot');
  console.log('─'.repeat(100));
  results.forEach((r, i) => {
    console.log(`${i+1}\t${r.symbol.padEnd(20)}\t${r.switched}\t\t${r.fullScreenshot}`);
  });
  console.log('\nFinal:', finalPath);

  // Save JSON report
  writeFileSync('./backtest_scan_results_v2.json', JSON.stringify({ results, finalScreenshot: finalPath }, null, 2));
  console.log('JSON saved: backtest_scan_results_v2.json');
}

main().catch(e => { console.error(e); process.exit(1); });
