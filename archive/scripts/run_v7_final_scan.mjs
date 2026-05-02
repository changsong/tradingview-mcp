/**
 * V7 backtest final scan with score analysis and screenshots
 */
import CDP from 'chrome-remote-interface';
import { writeFileSync } from 'fs';

const SYMBOLS = [
  'SZSE:300750', 'SZSE:002245', 'SZSE:300408', 'SZSE:000657',
  'SSE:605198', 'SZSE:300037', 'SZSE:300661', 'SZSE:002475', 'SSE:601126'
];

const tabs = await CDP.List({ port: 9222 });
const tvTab = tabs.find(t => t.type === 'page' && t.title && t.title.includes('TradingView'));
const client = await CDP({ target: tvTab.id, port: 9222 });
const { Runtime, Page } = client;
await Runtime.enable();
await Page.enable();
await Page.bringToFront();

const CHART_API = 'window.TradingViewApi._activeChartWidgetWV.value()';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function getBounds() {
  const r = await Runtime.evaluate({
    expression: `(function() {
      var btPanel = document.querySelector('[class*="backtesting"]');
      if (!btPanel) return null;
      var rect = btPanel.getBoundingClientRect();
      return { x: rect.x, y: rect.y, w: rect.width, h: rect.height };
    })()`,
    returnByValue: true,
  });
  return r.result.value;
}

const results = [];

for (let i = 0; i < SYMBOLS.length; i++) {
  const sym = SYMBOLS[i];
  console.log(`[${i+1}/9] ${sym}`);

  // Switch symbol
  await Runtime.evaluate({
    expression: `${CHART_API}.setSymbol(${JSON.stringify(sym)}, {})`,
    returnByValue: true,
  });
  await sleep(4500);

  // Get score stats
  const statsR = await Runtime.evaluate({
    expression: `(function() {
      try {
        var chart = ${CHART_API}._chartWidget;
        var sources = chart.model().model().dataSources();
        var strat = null;
        for (var j = sources.length-1; j>=0; j--) {
          if (sources[j]._reportData) { strat = sources[j]; break; }
        }
        if (!strat) return { error: 'no strat' };

        var data = strat._data;
        var lastIdx = data.size() - 1;
        var scores = [];
        for (var k = 0; k <= lastIdx; k++) {
          var v = data.valueAt(k);
          if (v && v[4] !== undefined) scores.push(v[4]);
        }

        var rdFn = strat._reportData;
        var rdVal = (rdFn && typeof rdFn.value === 'function') ? rdFn.value() : rdFn;
        var perf = rdVal ? rdVal.performance : null;

        return {
          sym: ${CHART_API}.symbol(),
          count: scores.length,
          maxScore: scores.length > 0 ? Math.max.apply(null, scores) : 0,
          above50: scores.filter(function(s){return s>=50}).length,
          above60: scores.filter(function(s){return s>=60}).length,
          above70: scores.filter(function(s){return s>=70}).length,
          totalTrades: perf ? perf.all.totalTrades : -1,
          netProfit: perf ? Math.round(perf.all.netProfit) : null,
          netProfitPct: perf ? Math.round(perf.all.netProfitPercent*100)/100 : null,
          winRate: perf ? perf.all.percentProfitable : null,
          maxDD: perf ? Math.round(perf.all.maxStrategyDrawDownPercent*100)/100 : null,
        };
      } catch(e) { return { error: e.message }; }
    })()`,
    returnByValue: true,
  });
  const stats = statsR.result.value;
  console.log('  Stats:', JSON.stringify(stats));

  // Get strategy tester bounds
  const bounds = await getBounds();

  // Screenshot clipped to strategy tester
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const symSafe = sym.replace(':', '_');
  const screenshotPath = `screenshots/v7_${symSafe}_${ts}.png`;

  try {
    let shot;
    if (bounds && bounds.w > 100 && bounds.h > 50) {
      shot = await Page.captureScreenshot({
        format: 'png',
        clip: { x: bounds.x, y: bounds.y, width: bounds.w, height: Math.min(bounds.h, 500), scale: 1 }
      });
    } else {
      shot = await Page.captureScreenshot({ format: 'png' });
    }
    writeFileSync('D:/trade_workspace/tradingview-mcp/' + screenshotPath, Buffer.from(shot.data, 'base64'));
    console.log('  Screenshot saved:', screenshotPath);
  } catch(e) {
    console.log('  Screenshot error:', e.message);
  }

  results.push({ symbol: sym, stats, screenshotPath });
}

console.log('\n\n========================================');
console.log('=== V7 BACKTEST RESULTS (Jan 2025 - Apr 2026, 300 bars) ===');
console.log('========================================');
console.log('Symbol\t\t\tMaxScore Above70 Trades NetProfit WinRate MaxDD%\tScreenshot');
console.log('─'.repeat(120));
results.forEach((r, i) => {
  const s = r.stats;
  if (s.error) {
    console.log(`${i+1}. ${r.symbol}: ERROR - ${s.error}`);
  } else {
    const wr = s.winRate !== null ? (s.winRate*100).toFixed(1)+'%' : '—';
    console.log(`${(i+1)+'. '+s.sym.padEnd(20)}\t${s.maxScore}\t ${s.above70}\t ${s.totalTrades}\t ${s.netProfit}\t ${wr}\t ${s.maxDD}%\t${r.screenshotPath}`);
  }
});

writeFileSync('D:/trade_workspace/tradingview-mcp/v7_backtest_final_results.json', JSON.stringify(results, null, 2));
console.log('\nResults JSON saved: v7_backtest_final_results.json');

await client.close();
