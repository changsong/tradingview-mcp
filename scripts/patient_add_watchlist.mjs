// Add specific symbols, then verify each one is present by scrolling watchlist
// before declaring success. Retries up to N times.
import * as wl from '../src/core/watchlist.js';
import { evaluate, disconnect } from '../src/connection.js';

const SYMBOLS = process.argv.slice(2);
const MAX_RETRIES = 3;

async function isPresent(target) {
  return await evaluate(`
    (async function() {
      var target = ${JSON.stringify(target.toUpperCase())};
      var ra = document.querySelector('[class*="layout__area--right"]');
      if (!ra) return false;
      function check() {
        var els = ra.querySelectorAll('[data-symbol-full]');
        for (var i = 0; i < els.length; i++) {
          var s = (els[i].getAttribute('data-symbol-full') || '').toUpperCase();
          if (s === target || s.endsWith(':' + target)) return true;
        }
        return false;
      }
      var first = ra.querySelector('[data-symbol-full]');
      var sc = null, node = first;
      while (node && node !== ra) {
        if (node.scrollHeight > node.clientHeight + 5) { sc = node; break; }
        node = node.parentElement;
      }
      if (!sc) return check();
      sc.scrollTop = 0;
      await new Promise(r => setTimeout(r, 250));
      if (check()) { return true; }
      var step = Math.max(60, Math.floor(sc.clientHeight / 4));
      var maxSteps = 300;
      for (var i = 0; i < maxSteps; i++) {
        var prev = sc.scrollTop;
        sc.scrollTop = prev + step;
        await new Promise(r => setTimeout(r, 180));
        if (check()) { sc.scrollTop = 0; return true; }
        if (sc.scrollTop === prev) break;
      }
      sc.scrollTop = 0;
      return false;
    })()
  `, { awaitPromise: true });
}

let added = 0, alreadyThere = 0, failed = 0;
for (const sym of SYMBOLS) {
  let ok = false;
  if (await isPresent(sym)) {
    console.log(`[present] ${sym}`);
    alreadyThere++;
    continue;
  }
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      await wl.add({ symbol: sym });
      await new Promise(r => setTimeout(r, 700));
      if (await isPresent(sym)) {
        console.log(`[ok]      ${sym} (attempt ${attempt})`);
        added++;
        ok = true;
        break;
      } else {
        console.log(`[retry]   ${sym} (attempt ${attempt} did not stick)`);
      }
    } catch (e) {
      console.log(`[err]     ${sym}: ${e.message}`);
    }
  }
  if (!ok) { failed++; console.log(`[fail]    ${sym}`); }
}
console.log(`\nadded=${added} already=${alreadyThere} failed=${failed} total=${SYMBOLS.length}`);
await disconnect();
