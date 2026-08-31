/**
 * Quick diagnostic: test CDP symbol + ohlcv on one stock
 */
import { connect } from '../src/connection.js';
import * as coreChart from '../src/core/chart.js';
import * as coreData from '../src/core/data.js';

async function main() {
  try {
    console.log('1. Connecting CDP...');
    await connect();
    console.log('   Connected OK');

    console.log('\n2. Get current state...');
    const state = await coreChart.getState();
    console.log('   Symbol:', state.symbol);
    console.log('   Resolution:', state.resolution);
    console.log('   ChartType:', state.chartType);

    console.log('\n3. Switch to NASDAQ:NVDA...');
    const sw = await coreChart.setSymbol({ symbol: 'NASDAQ:NVDA' });
    console.log('   Result:', JSON.stringify(sw));

    console.log('\n4. Set timeframe D...');
    const tf = await coreChart.setTimeframe({ timeframe: 'D' });
    console.log('   Result:', JSON.stringify(tf));

    console.log('\n5. Get OHLCV (2 bars)...');
    const o = await coreData.getOhlcv({ count: 2, expectedSymbol: 'NASDAQ:NVDA' });
    console.log('   Bars count:', o.bars?.length);
    if (o.bars?.length > 0) {
      o.bars.forEach((b, i) => {
        const dt = new Date(b.time * 1000).toISOString().slice(0,10);
        console.log(`   [${i}] ${dt} O:${b.open} H:${b.high} L:${b.low} C:${b.close} V:${b.volume}`);
      });
      const pct = ((o.bars[1].close - o.bars[0].close) / o.bars[0].close * 100).toFixed(2);
      console.log(`   Change: ${pct}%`);
    }
    console.log('\n✅ Success');
  } catch (e) {
    console.error('\n❌ Failed:', e.message);
    console.error('Stack:', e.stack?.split('\n').slice(0,3).join('\n'));
  }
  process.exit(0);
}

main();
