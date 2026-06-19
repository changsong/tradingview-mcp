import { evaluate } from '../src/connection.js';

const target = ['NASDAQ:AVGO','NASDAQ:NVDA','NASDAQ:MRVL','NASDAQ:LITE','NASDAQ:COHR','NYSE:VSH','NASDAQ:TTMI','NASDAQ:ELTK','NYSE:DELL','NASDAQ:MSFT','NASDAQ:AMD','NASDAQ:CBRS','NASDAQ:SMCI','NYSE:CLS','NASDAQ:MU','NASDAQ:WDC','NASDAQ:STX','NASDAQ:SNDK','NASDAQ:AMKR','NYSE:GLW','NYSE:FN','NYSE:CIEN','NASDAQ:CRDO','NASDAQ:JEWL','NYSE:HUN','NYSE:ASIX','NYSE:WLK','NYSE:CE','NYSE:LYB','NYSE:VRT','NYSE:ETN','NYSE:MOD','NYSE:JCI','NASDAQ:ON','NASDAQ:POWI','NASDAQ:VICR','NASDAQ:MPWR','NASDAQ:VNET','NASDAQ:EQIX','NASDAQ:DGXX','NASDAQ:NBIS','NASDAQ:CRWV','NASDAQ:IREN','NASDAQ:APLD'];

// Scroll to top first
await evaluate(`
  (function() {
    var list = document.querySelector('[class*="listContainer"]');
    if (list) list.scrollTop = 0;
  })()
`);
await new Promise(r => setTimeout(r, 500));

const allSymbols = new Set();
let prevSize = 0;
let noChange = 0;

for (let i = 0; i < 15; i++) {
  const r = await evaluate(`
    (function() {
      var c = document.querySelector('[class*="layout__area--right"]');
      var els = c ? c.querySelectorAll('[data-symbol-full]') : [];
      var syms = [];
      for (var j = 0; j < els.length; j++) {
        syms.push(els[j].getAttribute('data-symbol-full'));
      }
      return JSON.stringify(syms);
    })()
  `);
  JSON.parse(r).forEach(s => allSymbols.add(s));

  if (allSymbols.size === prevSize) {
    noChange++;
    if (noChange >= 3) break;
  } else {
    noChange = 0;
  }
  prevSize = allSymbols.size;

  await evaluate(`
    (function() {
      var list = document.querySelector('[class*="listContainer"]');
      if (list) list.scrollTop += 1100;
    })()
  `);
  await new Promise(r => setTimeout(r, 500));
}

const present = target.filter(t => allSymbols.has(t));
const missing = target.filter(t => !allSymbols.has(t));

console.log(`Total collected: ${allSymbols.size}`);
console.log(`Targets present: ${present.length}/${target.length}`);
if (missing.length > 0) {
  console.log(`Missing (${missing.length}): ${missing.join(', ')}`);
} else {
  console.log('ALL 44 CONFIRMED!');
}
process.exit(0);
