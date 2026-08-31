import { evaluate, getClient } from '../src/connection.js';

const target = ['NASDAQ:AVGO','NASDAQ:NVDA','NASDAQ:MRVL','NASDAQ:LITE','NASDAQ:COHR','NYSE:VSH','NASDAQ:TTMI','NASDAQ:ELTK','NYSE:DELL','NASDAQ:MSFT','NASDAQ:AMD','NASDAQ:CBRS','NASDAQ:SMCI','NYSE:CLS','NASDAQ:MU','NASDAQ:WDC','NASDAQ:STX','NASDAQ:SNDK','NASDAQ:AMKR','NYSE:GLW','NYSE:FN','NYSE:CIEN','NASDAQ:CRDO','NASDAQ:JEWL','NYSE:HUN','NYSE:ASIX','NYSE:WLK','NYSE:CE','NYSE:LYB','NYSE:VRT','NYSE:ETN','NYSE:MOD','NYSE:JCI','NASDAQ:ON','NASDAQ:POWI','NASDAQ:VICR','NASDAQ:MPWR','NASDAQ:VNET','NASDAQ:EQIX','NASDAQ:DGXX','NASDAQ:NBIS','NASDAQ:CRWV','NASDAQ:IREN','NASDAQ:APLD'];

const c = await getClient();

// Find the actual scrollable element in the watchlist panel
const scrollInfo = await evaluate(`
  (function() {
    var right = document.querySelector('[class*="layout__area--right"]');
    if (!right) return JSON.stringify({error:'no panel'});

    // Try to find the actual watchlist body with scrolling
    var candidates = right.querySelectorAll('div');
    var scrollables = [];
    for (var i = 0; i < candidates.length; i++) {
      if (candidates[i].scrollHeight > candidates[i].clientHeight + 10) {
        scrollables.push({
          cls: (candidates[i].className || '').substring(0, 80),
          scrollHeight: candidates[i].scrollHeight,
          clientHeight: candidates[i].clientHeight,
          scrollTop: candidates[i].scrollTop,
          childCount: candidates[i].children.length
        });
      }
    }
    return JSON.stringify({scrollables: scrollables.slice(0, 10)});
  })()
`);
console.log('Scrollables:', scrollInfo);

// Scroll each scrollable to bottom
await evaluate(`
  (function() {
    var right = document.querySelector('[class*="layout__area--right"]');
    if (!right) return;
    var all = right.querySelectorAll('div');
    for (var i = 0; i < all.length; i++) {
      if (all[i].scrollHeight > all[i].clientHeight + 10) {
        all[i].scrollTop = all[i].scrollHeight;
      }
    }
  })()
`);

// Wait for rendering
await new Promise(r => setTimeout(r, 1000));

// Read bottom items
const check1 = await evaluate(`
  (function() {
    var c = document.querySelector('[class*="layout__area--right"]');
    var els = c ? c.querySelectorAll('[data-symbol-full]') : [];
    var syms = [];
    for (var i = Math.max(0, els.length - 40); i < els.length; i++) {
      syms.push(els[i].getAttribute('data-symbol-full'));
    }
    return JSON.stringify({total: els.length, last40: syms});
  })()
`);
console.log('\nAfter scroll to bottom:', JSON.parse(check1).total, 'visible');
console.log('Last 40:', JSON.parse(check1).last40.join(', '));

// Now check all our targets against the visible list
const allVisible = await evaluate(`
  (function() {
    var c = document.querySelector('[class*="layout__area--right"]');
    var els = c ? c.querySelectorAll('[data-symbol-full]') : [];
    var syms = [];
    for (var i = 0; i < els.length; i++) {
      syms.push(els[i].getAttribute('data-symbol-full'));
    }
    return JSON.stringify(syms);
  })()
`);

const visible = JSON.parse(allVisible);
const present = target.filter(t => visible.includes(t));
const missing = target.filter(t => !visible.includes(t));

console.log('\nTargets in visible viewport:', present.length + '/' + target.length);
if (missing.length > 0) {
  console.log('Not visible (' + missing.length + '):', missing.join(', '));
}

// Now scroll to TOP and check there
await evaluate(`
  (function() {
    var right = document.querySelector('[class*="layout__area--right"]');
    if (!right) return;
    var all = right.querySelectorAll('div');
    for (var i = 0; i < all.length; i++) {
      if (all[i].scrollHeight > all[i].clientHeight + 10) {
        all[i].scrollTop = 0;
      }
    }
  })()
`);
await new Promise(r => setTimeout(r, 1000));

const topVisible = await evaluate(`
  (function() {
    var c = document.querySelector('[class*="layout__area--right"]');
    var els = c ? c.querySelectorAll('[data-symbol-full]') : [];
    var syms = [];
    for (var i = 0; i < els.length; i++) {
      syms.push(els[i].getAttribute('data-symbol-full'));
    }
    return JSON.stringify(syms);
  })()
`);

const topV = JSON.parse(topVisible);
const topPresent = target.filter(t => topV.includes(t));
console.log('\nTop viewport targets:', topPresent.length + '/' + target.length);
if (topPresent.length > 0) console.log('  Found at top:', topPresent.join(', '));

// Total unique targets found across both views
const allFound = [...new Set([...present, ...topPresent])];
console.log('\nTotal unique targets found:', allFound.length + '/' + target.length);
const stillMissing = target.filter(t => !allFound.includes(t));
if (stillMissing.length > 0) {
  console.log('Still missing (' + stillMissing.length + '):', stillMissing.join(', '));
} else {
  console.log('ALL 44 CONFIRMED PRESENT!');
}

process.exit(0);
