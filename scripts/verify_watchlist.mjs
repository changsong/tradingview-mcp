import { evaluate, disconnect } from '../src/connection.js';

// Reliable harvest: keep harvesting until the seen-set stops growing for 3 consecutive scroll passes.
const all = await evaluate(`
  (async function() {
    var ra = document.querySelector('[class*="layout__area--right"]');
    if (!ra) return [];
    var seen = new Set();
    function harvest() {
      var els = ra.querySelectorAll('[data-symbol-full]');
      for (var i = 0; i < els.length; i++) seen.add(els[i].getAttribute('data-symbol-full'));
    }
    // Find scrollable
    var first = ra.querySelector('[data-symbol-full]');
    var node = first, sc = null;
    while (node && node !== ra) {
      if (node.scrollHeight > node.clientHeight + 5) { sc = node; break; }
      node = node.parentElement;
    }
    if (!sc) { harvest(); return Array.from(seen); }

    sc.scrollTop = 0;
    await new Promise(r => setTimeout(r, 300));
    harvest();

    var stable = 0, lastSize = seen.size;
    while (stable < 3) {
      var beforeScroll = sc.scrollTop;
      sc.scrollTop += sc.clientHeight - 50;
      await new Promise(r => setTimeout(r, 250));
      harvest();
      var atBottom = sc.scrollTop === beforeScroll;
      if (seen.size === lastSize && atBottom) stable++;
      else { stable = 0; lastSize = seen.size; }
      if (atBottom && stable < 3) {
        // jiggle back up to force re-render of any skipped rows
        sc.scrollTop -= 20;
        await new Promise(r => setTimeout(r, 200));
        harvest();
      }
    }
    sc.scrollTop = 0;
    return Array.from(seen).sort();
  })()
`, { awaitPromise: true });

const want = ['ENPH','SEDG','GNRC','TYGO','SBGSY','SMERY','SMTGY','GEV','ETN','HTHIY','ABBNY','HMDPF','PWR','NVDA','TSM','AVGO','VRT','ASML','CRWD','TSLA','ARM','VRTX','RXRX'];
const missing = want.filter(t => !all.some(s => s === t || s.endsWith(':' + t)));
const present = want.filter(t => all.some(s => s === t || s.endsWith(':' + t)));
console.log('total in list:', all.length);
console.log('requested present:', present.length, '/', want.length);
if (missing.length) console.log('still missing:', missing);
await disconnect();
