import { connect, evaluate } from '../src/connection.js';

async function main() {
  try {
    console.log('1. Connect...');
    await connect();
    console.log('   OK');

    console.log('\n2. Simple evaluate (1+1)...');
    const r1 = await evaluate('1+1');
    console.log('   Result:', r1);

    console.log('\n3. Check chart API exists...');
    const r2 = await evaluate('typeof window.TradingViewApi');
    console.log('   typeof TradingViewApi:', r2);

    console.log('\n4. Check activeChartWidgetWV...');
    const r3 = await evaluate('typeof window.TradingViewApi._activeChartWidgetWV');
    console.log('   typeof _activeChartWidgetWV:', r3);

    console.log('\n5. Get current symbol...');
    const r4 = await evaluate(`
      (function() {
        try {
          return window.TradingViewApi._activeChartWidgetWV.value().symbol();
        } catch(e) { return 'ERROR: ' + e.message; }
      })()
    `);
    console.log('   Symbol:', r4);

    console.log('\n6. Check bars access (lightweight)...');
    const r5 = await evaluate(`
      (function() {
        try {
          var bars = window.TradingViewApi._activeChartWidgetWV.value()._chartWidget.model().mainSeries().bars();
          return { type: typeof bars, size: bars ? bars.size() : 'null' };
        } catch(e) { return 'ERROR: ' + e.message; }
      })()
    `);
    console.log('   Bars:', JSON.stringify(r5));

    console.log('\n7. Try valueAt on last bar...');
    const r6 = await evaluate(`
      (function() {
        try {
          var bars = window.TradingViewApi._activeChartWidgetWV.value()._chartWidget.model().mainSeries().bars();
          var idx = bars.lastIndex();
          var v = bars.valueAt(idx);
          return { idx, bar: v ? {time:v[0],open:v[1],high:v[2],low:v[3],close:v[4]} : 'null' };
        } catch(e) { return 'ERROR: ' + e.message; }
      })()
    `);
    console.log('   Result:', JSON.stringify(r6));

    console.log('\n✅ All tests passed');
  } catch(e) {
    console.error('FAILED:', e.message);
  }
  process.exit(0);
}
main();
