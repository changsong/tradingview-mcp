import { evaluate } from '../src/connection.js';

const target = ['NASDAQ:AVGO','NASDAQ:NVDA','NASDAQ:MRVL','NASDAQ:LITE','NASDAQ:COHR','NYSE:VSH','NASDAQ:TTMI','NASDAQ:ELTK','NYSE:DELL','NASDAQ:MSFT','NASDAQ:AMD','NASDAQ:CBRS','NASDAQ:SMCI','NYSE:CLS','NASDAQ:MU','NASDAQ:WDC','NASDAQ:STX','NASDAQ:SNDK','NASDAQ:AMKR','NYSE:GLW','NYSE:FN','NYSE:CIEN','NASDAQ:CRDO','NASDAQ:JEWL','NYSE:HUN','NYSE:ASIX','NYSE:WLK','NYSE:CE','NYSE:LYB','NYSE:VRT','NYSE:ETN','NYSE:MOD','NYSE:JCI','NASDAQ:ON','NASDAQ:POWI','NASDAQ:VICR','NASDAQ:MPWR','NASDAQ:VNET','NASDAQ:EQIX','NASDAQ:DGXX','NASDAQ:NBIS','NASDAQ:CRWV','NASDAQ:IREN','NASDAQ:APLD'];

// Scroll to bottom of watchlist to render all rows
const scrollResult = await evaluate(`
  (function() {
    var container = document.querySelector('[class*="layout__area--right"]');
    if (!container) return JSON.stringify({error:'no panel'});

    // Find the scrollable container
    var scrollable = container.querySelector('[class*="scrollable"], [class*="scroll"], [class*="body"], [class*="content"], [class*="list"]');
    if (!scrollable) {
      // Just scroll the container itself
      container.scrollTop = container.scrollHeight;
      return JSON.stringify({scrolled: 'container', height: container.scrollHeight});
    }

    // Scroll to very bottom
    scrollable.scrollTop = scrollable.scrollHeight;
    return JSON.stringify({scrolled: 'scrollable', height: scrollable.scrollHeight, scrollTop: scrollable.scrollTop});
  })()
`);
console.log('Scroll:', scrollResult);

await new Promise(r => setTimeout(r, 500));

// Now count all visible rows
const r = await evaluate(`
  (function() {
    var container = document.querySelector('[class*="layout__area--right"]');
    var els = container ? container.querySelectorAll('[data-symbol-full]') : [];
    var syms = [];
    for (var i = 0; i < els.length; i++) {
      syms.push(els[i].getAttribute('data-symbol-full'));
    }
    return JSON.stringify({count: els.length, last20: syms.slice(-20)});
  })()
`);

const result = JSON.parse(r);
console.log('After scroll — visible rows:', result.count);
console.log('Last 20:', result.last20.join(', '));

// Scroll more if needed
for (let pass = 0; pass < 5; pass++) {
  await evaluate(`
    (function() {
      var container = document.querySelector('[class*="layout__area--right"]');
      var scrollable = container.querySelector('[class*="scrollable"], [class*="scroll"], [class*="body"], [class*="content"]') || container;
      scrollable.scrollTop = scrollable.scrollHeight;
    })()
  `);
  await new Promise(r => setTimeout(r, 400));
}

// Final count
const r2 = await evaluate(`
  (function() {
    var container = document.querySelector('[class*="layout__area--right"]');
    var els = container ? container.querySelectorAll('[data-symbol-full]') : [];
    var syms = [];
    for (var i = 0; i < els.length; i++) {
      syms.push(els[i].getAttribute('data-symbol-full'));
    }
    return JSON.stringify({count: els.length, symbols: syms});
  })()
`);

const final = JSON.parse(r2);
const present = target.filter(t => final.symbols.includes(t));
const missing = target.filter(t => !final.symbols.includes(t));

console.log('\nAfter full scroll — visible rows:', final.count);
console.log('Targets present:', present.length + '/' + target.length);
if (missing.length > 0) {
  console.log('Still missing:', missing.join(', '));
} else {
  console.log('ALL 44 PRESENT!');
}

process.exit(0);
