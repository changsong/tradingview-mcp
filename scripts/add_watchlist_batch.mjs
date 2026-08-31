// One-off helper: batch-add symbols to the currently-active watchlist via the core watchlist module.
// Skips symbols that are already in the visible portion of the panel.
// Usage: node scripts/add_watchlist_batch.mjs

import * as wl from '../src/core/watchlist.js';
import { evaluate, disconnect } from '../src/connection.js';

const SYMBOLS = [
  'SZSE:002371', 'SSE:603501', 'SZSE:300308', 'SZSE:002463', 'SSE:603919',
  'SZSE:002049', 'SSE:600588', 'SZSE:300274', 'SZSE:300014', 'SZSE:002594',
  'SSE:600406', 'SZSE:002459', 'SSE:600031', 'SZSE:000157', 'SSE:601665',
  'SSE:600585', 'SZSE:002146', 'SZSE:000333', 'SZSE:000651', 'SSE:600690',
  'SZSE:002415', 'SZSE:002281', 'SZSE:002011', 'SSE:600590', 'SZSE:300812',
  'SSE:600316', 'SZSE:002472', 'SZSE:300124', 'SSE:603728', 'SZSE:002979',
  'SSE:601100', 'SZSE:300580', 'SSE:603667', 'SSE:603662', 'SZSE:300354',
  'SZSE:300007', 'SZSE:002050', 'SSE:601689', 'SZSE:002475', 'SZSE:300660',
  'SZSE:002230', 'SZSE:159770', 'SSE:562500', 'SZSE:002028', 'SZSE:002270',
  'SZSE:002922', 'SZSE:300763', 'SSE:605117', 'SZSE:300872', 'SSE:603306',
];

async function getExisting() {
  // Scroll watchlist and collect every data-symbol-full encountered.
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
        // Try first scrollable ancestor of a symbol row
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
      // Small breather so the search popup fully closes before the next iteration
      await new Promise(r => setTimeout(r, 400));
    } catch (e) {
      console.log(`[fail] ${sym} :: ${e.message}`);
      failed++;
    }
  }
  console.log(`\nadded=${added} skipped=${skipped} failed=${failed} total=${SYMBOLS.length}`);
  await disconnect();
})().catch(e => { console.error(e); process.exit(1); });
