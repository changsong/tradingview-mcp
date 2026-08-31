import { connect, evaluate } from './src/connection.js';

try {
  const client = await connect();
  console.log('CONNECT_OK');
  const r = await evaluate('document.title');
  console.log('TITLE:', r);
  const r2 = await evaluate('typeof window.TradingViewApi');
  console.log('TradingViewApi:', r2);
  const r3 = await evaluate('typeof window.TradingView');
  console.log('TradingView:', r3);
  await client.close();
} catch (e) {
  console.error('CONNECT_FAIL:', e.message);
  process.exit(1);
}
