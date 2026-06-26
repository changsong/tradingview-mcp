/**
 * Batch add stocks to current TradingView watchlist
 * Usage: node batch_add_watchlist.mjs
 */
import { evaluate, getClient } from './src/connection.js';

const STOCKS = [
  'SSE:600378','SSE:601958','SSE:600206','SZSE:300706','SZSE:300308',
  'SZSE:300502','SZSE:300394','SZSE:000636','SZSE:300408','SZSE:300285',
  'SZSE:002371','SZSE:002008','SZSE:300340','SSE:603283','SSE:600460',
  'SSE:600703','SSE:600118','SSE:600879','SSE:600584','SZSE:000021',
  'SZSE:002185','SSE:600667','SSE:603986','SZSE:002409','SZSE:002837',
  'SZSE:300476','SSE:601138','SSE:603688','SZSE:000725','SSE:600176',
  'SZSE:002428','SSE:600732','SZSE:002208','SZSE:002747','SZSE:300058',
  'SSE:600961'
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function addOne(symbol) {
  const c = await getClient();

  // Click "添加商品代码" button
  const clicked = await evaluate(`
    (function() {
      var btn = document.querySelector('[data-name="add-symbol-button"]');
      if (!btn || btn.offsetParent === null) {
        // fallback: aria-label
        btn = document.querySelector('[aria-label="添加商品代码"]');
      }
      if (!btn || btn.offsetParent === null) return false;
      btn.click();
      return true;
    })()
  `);

  if (!clicked) {
    console.log(`  SKIP ${symbol}: add button not found`);
    return false;
  }

  await sleep(400);

  // Type symbol
  await c.Input.insertText({ text: symbol });
  await sleep(600);

  // Press Enter to select first result
  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await sleep(400);

  // Press Escape to close any dropdown/search
  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await sleep(200);

  return true;
}

async function main() {
  console.log(`Adding ${STOCKS.length} stocks to watchlist...`);
  let ok = 0;
  let fail = 0;

  for (let i = 0; i < STOCKS.length; i++) {
    const sym = STOCKS[i];
    process.stdout.write(`[${String(i + 1).padStart(2)}/${STOCKS.length}] ${sym} ... `);
    try {
      const result = await addOne(sym);
      if (result) {
        console.log('OK');
        ok++;
      } else {
        console.log('FAIL');
        fail++;
      }
    } catch (e) {
      console.log('ERROR:', e.message);
      fail++;
    }
  }

  console.log(`\nDone. ${ok} added, ${fail} failed, ${STOCKS.length} total.`);
}

main().catch(e => { console.error(e); process.exit(1); });
