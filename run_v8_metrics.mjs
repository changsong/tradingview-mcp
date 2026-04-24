/**
 * Extract strategy tester metrics directly from TradingView's internal data structures.
 * Much more reliable than screenshot OCR.
 */
import CDP from 'chrome-remote-interface';
import { writeFileSync } from 'fs';

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

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function ev(client, expression, awaitPromise = false) {
  const result = await client.Runtime.evaluate({
    expression,
    returnByValue: true,
    awaitPromise,
    timeout: 30000,
  });
  if (result.exceptionDetails) {
    const msg = result.exceptionDetails.exception?.description || result.exceptionDetails.text || 'Unknown';
    throw new Error(`JS: ${msg}`);
  }
  return result.result?.value;
}

const EXTRACT_METRICS = `
(function() {
  try {
    // Method 1: TradingView internal performance API
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    var sources = chart._chartWidget.model().model().dataSources();

    for (var i = 0; i < sources.length; i++) {
      var src = sources[i];

      // Look for strategy source
      if (!src || !src.metaInfo) continue;
      var meta = typeof src.metaInfo === 'function' ? src.metaInfo() : src.metaInfo;
      if (!meta) continue;

      var isStrat = meta.is_price_study === false || meta.scriptIdPart ||
                    (meta.description && /sqzmom|strategy/i.test(meta.description));
      if (!isStrat && !src.performance) continue;

      // Try performance()
      if (src.performance && typeof src.performance === 'function') {
        var perf = src.performance();
        if (perf) {
          var val = typeof perf.value === 'function' ? perf.value() : perf;
          if (val) return {method: 'performance()', data: JSON.parse(JSON.stringify(val))};
        }
      }

      // Try _performance
      if (src._performance) {
        var p = src._performance;
        var v = typeof p.value === 'function' ? p.value() : p;
        if (v) return {method: '_performance', data: JSON.parse(JSON.stringify(v))};
      }
    }

    // Method 2: Try strategy report data
    for (var j = 0; j < sources.length; j++) {
      var s = sources[j];
      if (s && s.reportData && typeof s.reportData === 'function') {
        var rd = s.reportData();
        if (rd) return {method: 'reportData()', data: JSON.parse(JSON.stringify(rd))};
      }
    }

    // Method 3: Strategy tester DOM fallback
    var panel = document.querySelector('[class*="strategy-tester"], [data-name="strategy-tester"]');
    if (panel) {
      var cells = panel.querySelectorAll('[class*="cell"], [class*="value"], td, th');
      var texts = [];
      for (var k = 0; k < cells.length; k++) {
        var t = cells[k].textContent.trim();
        if (t) texts.push(t);
      }
      return {method: 'dom', texts: texts.slice(0, 50)};
    }

    return {method: 'none', sources_count: sources.length};
  } catch(e) {
    return {error: e.message, stack: e.stack ? e.stack.slice(0, 300) : null};
  }
})()
`;

// More targeted: look specifically for what the strategy tester UI shows
const EXTRACT_STRATEGY_DOM = `
(function() {
  try {
    // Find the strategy tester summary tab content
    var result = {};

    // Look for the overview/summary section
    var overviewSel = [
      '[class*="strategy-tester"] [class*="overview"]',
      '[class*="strategyReport"]',
      '[class*="report"]',
      '[data-name="strategy-tester"]',
    ];

    var container = null;
    for (var i = 0; i < overviewSel.length; i++) {
      container = document.querySelector(overviewSel[i]);
      if (container) { result.found_sel = overviewSel[i]; break; }
    }

    if (!container) {
      // Get all text from the bottom bar area
      var bottom = document.querySelector('[class*="bottom-widgetbar-content"]')
        || document.querySelector('[class*="layout__area--bottom"]');
      if (bottom) {
        result.bottom_text = bottom.textContent.replace(/\\s+/g, ' ').trim().slice(0, 2000);
      }
      return result;
    }

    result.container_text = container.textContent.replace(/\\s+/g, ' ').trim().slice(0, 2000);

    // Try to find specific metric values
    var allEls = container.querySelectorAll('*');
    var pairs = [];
    for (var j = 0; j < allEls.length; j++) {
      var el = allEls[j];
      if (el.children.length === 0) {
        var txt = el.textContent.trim();
        if (txt && txt.length < 100) pairs.push(txt);
      }
    }
    result.leaf_texts = pairs.slice(0, 100);

    return result;
  } catch(e) {
    return {error: e.message};
  }
})()
`;

async function main() {
  const resp = await fetch('http://localhost:9222/json/list');
  const targets = await resp.json();
  const target = targets.find(t => t.type === 'page' && /tradingview\.com\/chart/i.test(t.url));
  if (!target) throw new Error('No TradingView chart target');

  const client = await CDP({ host: 'localhost', port: 9222, target: target.id });
  await client.Runtime.enable();
  await client.Page.enable();
  console.log('Connected:', target.url.slice(0, 80));

  const allResults = [];

  for (const symbol of SYMBOLS) {
    console.log(`\n=== ${symbol} ===`);

    // Switch symbol
    await ev(client, `
      (function() {
        try {
          var chart = window.TradingViewApi._activeChartWidgetWV.value();
          if (chart && typeof chart.setSymbol === 'function') chart.setSymbol(${JSON.stringify(symbol)});
        } catch(e) {}
      })()
    `);

    // Wait for data to load
    await sleep(6000);

    // Make sure strategy tester tab is visible
    await ev(client, `
      (function() {
        // Click strategy tester tab if available
        var els = document.querySelectorAll('[data-name]');
        for (var i = 0; i < els.length; i++) {
          if (els[i].getAttribute('data-name') === 'strategy-tester') { els[i].click(); break; }
        }
      })()
    `);
    await sleep(1000);

    // Extract via internal API first
    const metrics = await ev(client, EXTRACT_METRICS);
    console.log('Internal metrics:', JSON.stringify(metrics, null, 2).slice(0, 500));

    // Also extract DOM text
    const domData = await ev(client, EXTRACT_STRATEGY_DOM);
    console.log('DOM data:', JSON.stringify(domData, null, 2).slice(0, 800));

    // Try a direct approach to get strategy performance summary
    const perfSummary = await ev(client, `
      (function() {
        try {
          var chart = window.TradingViewApi._activeChartWidgetWV.value();
          var model = chart._chartWidget.model().model();
          var dataSources = model.dataSources();

          var results = [];
          for (var i = 0; i < dataSources.length; i++) {
            var ds = dataSources[i];
            if (!ds) continue;

            // Check for strategy-specific properties
            var hasPerf = !!ds._performance || !!(ds.performance && typeof ds.performance === 'function');
            var hasOrders = !!ds._ordersData || !!(ds.ordersData && typeof ds.ordersData === 'function');
            var hasTrades = !!ds._tradesData || !!(ds.trades && typeof ds.trades === 'function');

            if (hasPerf || hasOrders || hasTrades) {
              var info = {
                index: i,
                hasPerf: hasPerf,
                hasOrders: hasOrders,
                hasTrades: hasTrades,
              };

              // Try to get actual performance data
              try {
                if (ds._performance) {
                  var pv = typeof ds._performance.value === 'function' ? ds._performance.value() : ds._performance;
                  if (pv) {
                    var keys = Object.keys(pv);
                    info.perf_keys = keys.slice(0, 20);
                    // Look for common metric fields
                    info.perf_sample = {};
                    ['netProfit','netPnl','totalTrades','closedTrades','winRate','profitFactor',
                     'net_profit','total_trades','win_rate','profit_factor',
                     'grossProfit','grossLoss','maxDrawdown'].forEach(function(k) {
                      if (k in pv) info.perf_sample[k] = pv[k];
                    });
                  }
                }
              } catch(e2) { info.perf_error = e2.message; }

              results.push(info);
            }
          }
          return {sources_total: dataSources.length, strategy_sources: results};
        } catch(e) {
          return {error: e.message};
        }
      })()
    `);
    console.log('PerfSummary:', JSON.stringify(perfSummary, null, 2).slice(0, 1000));

    allResults.push({ symbol, metrics, domData, perfSummary });
  }

  writeFileSync('D:/trade_workspace/tradingview-mcp/v8_metrics_raw.json', JSON.stringify(allResults, null, 2));
  console.log('\nRaw data saved to v8_metrics_raw.json');
  await client.close();
}

main().catch(err => { console.error('FATAL:', err); process.exit(1); });
