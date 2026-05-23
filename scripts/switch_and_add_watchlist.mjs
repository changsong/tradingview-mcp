// Switch the active TradingView watchlist by display name, then optionally batch-add symbols.
// Usage: node scripts/switch_and_add_watchlist.mjs <watchlistName> <sym1,sym2,...>
import * as wl from '../src/core/watchlist.js';
import { evaluate, disconnect, getClient } from '../src/connection.js';

const [, , listName, csv] = process.argv;
if (!listName || !csv) {
  console.error('Usage: node scripts/switch_and_add_watchlist.mjs <watchlistName> <sym1,sym2,...>');
  process.exit(1);
}
const SYMBOLS = csv.split(',').map(s => s.trim()).filter(Boolean);

async function listAvailable() {
  return await evaluate(`
    (async function() {
      var btn = document.querySelector('[data-name="watchlists-button"]');
      if (!btn) return { error: 'watchlists-button not found' };
      btn.click();
      await new Promise(r => setTimeout(r, 600));
      var items = document.querySelectorAll('[data-name="watchlist-menu-item"], [role="menuitem"]');
      var out = [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].offsetParent === null) continue;
        var t = (items[i].textContent || '').trim();
        out.push({ idx: i, dn: items[i].getAttribute('data-name'), text: t.substring(0, 60) });
      }
      // Close the menu
      document.body.click();
      return { items: out };
    })()
  `, { awaitPromise: true });
}

async function switchTo(name) {
  return await evaluate(`
    (async function() {
      var btn = document.querySelector('[data-name="watchlists-button"]');
      if (!btn) return { error: 'watchlists-button not found' };
      var currentText = btn.textContent.trim();
      if (currentText === ${JSON.stringify(name)}) return { switched: false, reason: 'already_active' };
      // Open menu only if not already open
      var menu = document.querySelector('[class*="menuBox"]');
      if (!menu || menu.offsetParent === null) {
        btn.click();
        await new Promise(r => setTimeout(r, 800));
        menu = document.querySelector('[class*="menuBox"]');
      }
      if (!menu) return { error: 'menu did not open' };
      // Watchlist names appear as spans with the label-* class
      var labels = menu.querySelectorAll('span[class*="label-"]');
      var target = null;
      for (var i = 0; i < labels.length; i++) {
        if (labels[i].textContent.trim() === ${JSON.stringify(name)}) {
          target = labels[i];
          break;
        }
      }
      if (!target) {
        document.body.click();
        return { error: 'watchlist not found in menu', currentText: currentText };
      }
      // Click the row container (the gridcell ancestor), not just the span
      var clickable = target.closest('[role="gridcell"]') || target;
      clickable.click();
      await new Promise(r => setTimeout(r, 800));
      var newText = document.querySelector('[data-name="watchlists-button"]').textContent.trim();
      return { switched: true, from: currentText, to: newText };
    })()
  `, { awaitPromise: true });
}

async function getExisting() {
  return await evaluate(`
    (async function() {
      var ra = document.querySelector('[class*="layout__area--right"]');
      if (!ra) return [];
      var seen = new Set();
      function harvest() {
        var els = ra.querySelectorAll('[data-symbol-full]');
        for (var i = 0; i < els.length; i++) seen.add(els[i].getAttribute('data-symbol-full'));
      }
      var first = ra.querySelector('[data-symbol-full]');
      var node = first, sc = null;
      while (node && node !== ra) {
        if (node.scrollHeight > node.clientHeight + 5) { sc = node; break; }
        node = node.parentElement;
      }
      if (sc) {
        sc.scrollTop = 0;
        await new Promise(r => setTimeout(r, 150));
        harvest();
        var p = -1;
        while (sc.scrollTop !== p) {
          p = sc.scrollTop;
          sc.scrollTop += sc.clientHeight - 30;
          await new Promise(r => setTimeout(r, 150));
          harvest();
        }
        sc.scrollTop = 0;
      } else harvest();
      return Array.from(seen);
    })()
  `, { awaitPromise: true });
}

(async () => {
  const sw = await switchTo(listName);
  console.log('[switch]', JSON.stringify(sw));
  if (sw && sw.error) {
    console.log('[info] dumping available watchlists for debugging:');
    const av = await listAvailable();
    console.log(JSON.stringify(av, null, 2));
    process.exit(2);
  }
  // Let TradingView settle after switching
  await new Promise(r => setTimeout(r, 800));

  const existing = new Set(await getExisting());
  console.log(`[info] active list has ${existing.size} symbols`);

  let added = 0, skipped = 0, failed = 0;
  for (const sym of SYMBOLS) {
    // Match either short ticker or any "EX:sym" form already present
    const upper = sym.toUpperCase();
    const already = [...existing].some(s => s === upper || s.endsWith(':' + upper));
    if (already) {
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
