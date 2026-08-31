// One-off helper: batch-add A-share symbols to the currently-active watchlist ("A股可交易").
// Skips symbols already present. Uses full exchange-qualified symbols.
// Usage: node scripts/add_watchlist_a_shares.mjs

import * as wl from '../src/core/watchlist.js';
import { evaluate, disconnect } from '../src/connection.js';

const SYMBOLS = [
  'SZSE:300748', 'SZSE:000970', 'SSE:600366', 'SZSE:300224', 'SZSE:000795',
  'SZSE:000969', 'SZSE:301141', 'SZSE:002645', 'SZSE:002056', 'SSE:600111',
  'SSE:600549', 'SSE:600392', 'SZSE:000758', 'SZSE:300835', 'SZSE:002057',
  'SSE:600330', 'SSE:600114', 'SZSE:301531', 'SZSE:301622', 'SSE:600980',
  'SSE:516150',
];

async function getExisting() {
  return await evaluate(`
    (async function() {
      var rightArea = document.querySelector('[class*="layout__area--right"]');
      if (!rightArea) return [];
      var seen = new Set();
      function harvest() {
        var els = rightArea.querySelectorAll('[data-symbol-full]');
        for (var i = 0; i < els.length; i++) seen.add(els[i].getAttribute('data-symbol-full'));
      }
      var scrollable = rightArea.querySelector('[class*="listContainer"]')
        || rightArea.querySelector('[class*="scrollable"]')
        || rightArea.querySelector('[class*="symbolList"]');
      if (!scrollable) {
        var first = rightArea.querySelector('[data-symbol-full]');
        var node = first;
        while (node && node !== rightArea) {
          if (node.scrollHeight > node.clientHeight + 5) { scrollable = node; break; }
          node = node.parentElement;
        }
      }
      if (scrollable) {
        scrollable.scrollTop = 0;
        await new Promise(r => setTimeout(r, 150));
        harvest();
        var prev = -1;
        while (scrollable.scrollTop !== prev) {
          prev = scrollable.scrollTop;
          scrollable.scrollTop += scrollable.clientHeight - 30;
          await new Promise(r => setTimeout(r, 150));
          harvest();
        }
        scrollable.scrollTop = 0;
      } else {
        harvest();
      }
      return Array.from(seen);
    })()
  `, { awaitPromise: true });
}

(async () => {
  const existing = new Set(await getExisting());
  console.log(`[info] existing watchlist size: ${existing.size}`);
  let added = 0, skipped = 0, failed = 0;
  for (const sym of SYMBOLS) {
    if (existing.has(sym)) {
      console.log(`[skip] ${sym} (already present)`);
      skipped++;
      continue;
    }
    try {
      await wl.add({ symbol: sym });
      console.log(`[ok]   ${sym}`);
      added++;
      await new Promise(r => setTimeout(r, 400));
    } catch (e) {
      console.log(`[fail] ${sym} :: ${e.message}`);
      failed++;
    }
  }
  console.log(`\nadded=${added} skipped=${skipped} failed=${failed} total=${SYMBOLS.length}`);
  await disconnect();
})().catch(e => { console.error(e); process.exit(1); });
