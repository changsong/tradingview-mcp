import { connect } from '../src/connection.js';
import * as coreData from '../src/core/data.js';

async function main() {
  try {
    await connect();
    console.log('Connected. Getting OHLCV without expectedSymbol...');
    const o = await coreData.getOhlcv({ count: 2 });
    console.log('Success:', o.success);
    console.log('Bars:', o.bars?.length);
    if (o.bars?.length > 0) {
      o.bars.forEach((b,i) => {
        const dt = new Date(b.time*1000).toISOString().slice(0,10);
        console.log(`  [${i}] ${dt} O:${b.open} H:${b.high} L:${b.low} C:${b.close}`);
      });
    }
  } catch(e) {
    console.error('Error:', e.message);
  }
  process.exit(0);
}
main();
