/**
 * Deep-dive: extract full performance data from TradingView strategy.
 * Also resets date filter and reads full-range data.
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
    expression, returnByValue: true, awaitPromise, timeout: 30000,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || 'eval error');
  return result.result?.value;
}

// Find the strategy data source (index 10 based on earlier discovery)
const GET_FULL_PERF = `
(function() {
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    var sources = chart._chartWidget.model().model().dataSources();

    // Find the source with orders (index 10 had hasOrders:true)
    var strat = null;
    for (var i = 0; i < sources.length; i++) {
      if (sources[i] && sources[i]._ordersData) { strat = sources[i]; break; }
    }
    if (!strat) {
      // fallback: any source with reportData
      for (var j = 0; j < sources.length; j++) {
        if (sources[j] && typeof sources[j].reportData === 'function') {
          strat = sources[j]; break;
        }
      }
    }
    if (!strat) return {error: 'no strategy source found'};

    // Get all data
    var rd = typeof strat.reportData === 'function' ? strat.reportData() : null;
    if (!rd) return {error: 'reportData() returned null'};

    var perf = rd.performance;
    if (!perf) return {error: 'no performance in reportData'};

    // Get full performance object
    return {
      success: true,
      currency: rd.currency,
      backtest_from: rd.settings && rd.settings.dateRange && rd.settings.dateRange.backtest ? rd.settings.dateRange.backtest.from : null,
      backtest_to: rd.settings && rd.settings.dateRange && rd.settings.dateRange.backtest ? rd.settings.dateRange.backtest.to : null,
      trade_from: rd.settings && rd.settings.dateRange && rd.settings.dateRange.trade ? rd.settings.dateRange.trade.from : null,
      filled_orders_count: rd.filledOrders ? rd.filledOrders.length : 0,
      all: {
        totalTrades: perf.all ? perf.all.totalTrades : null,
        openTrades: perf.all ? perf.all.totalOpenTrades : null,
        wins: perf.all ? perf.all.numberOfWiningTrades : null,
        losses: perf.all ? perf.all.numberOfLosingTrades : null,
        netProfit: perf.all ? perf.all.netProfit : null,
        netProfitPct: perf.all ? perf.all.netProfitPercent : null,
        winRate: perf.all ? perf.all.percentProfitable : null,
        profitFactor: perf.all ? perf.all.profitFactor : null,
        grossProfit: perf.all ? perf.all.grossProfit : null,
        grossLoss: perf.all ? perf.all.grossLoss : null,
        avgWin: perf.all ? perf.all.avgWinTrade : null,
        avgLoss: perf.all ? perf.all.avgLosTrade : null,
        avgBarsInTrade: perf.all ? perf.all.avgBarsInTrade : null,
        maxDD: perf.maxStrategyDrawDown,
        maxDDPct: perf.maxStrategyDrawDownPercent,
        sharpe: perf.sharpeRatio,
        buyHoldReturnPct: perf.buyHoldReturnPercent,
      }
    };
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
  console.log('Connected:', target.url.slice(0, 80));

  const results = [];

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

    await sleep(6000);

    const data = await ev(client, GET_FULL_PERF);
    console.log(JSON.stringify(data, null, 2));
    results.push({ symbol, data });
  }

  writeFileSync('D:/trade_workspace/tradingview-mcp/v8_full_perf.json', JSON.stringify(results, null, 2));

  // Print summary table
  console.log('\n\n=== FINAL TABLE ===');
  console.log('Symbol        | Trades | Win% | Net P&L (CNY) | PF     | MaxDD%');
  console.log('-------------|--------|------|---------------|--------|-------');
  for (const r of results) {
    const d = r.data;
    if (d.error) {
      console.log(`${r.symbol.padEnd(13)} | ERROR: ${d.error}`);
      continue;
    }
    const a = d.all;
    const t = a.totalTrades || 0;
    const wr = a.winRate !== null ? (a.winRate * 100).toFixed(1) + '%' : 'N/A';
    const np = a.netProfit !== null ? a.netProfit.toFixed(0) : '0';
    const pf = a.profitFactor !== null ? a.profitFactor.toFixed(2) : 'N/A';
    const dd = a.maxDDPct !== null ? a.maxDDPct.toFixed(2) + '%' : '0%';
    console.log(`${r.symbol.padEnd(13)} | ${String(t).padStart(6)} | ${wr.padStart(4)} | ${np.padStart(13)} | ${pf.padStart(6)} | ${dd}`);
  }

  await client.close();
}

main().catch(err => { console.error('FATAL:', err); process.exit(1); });
