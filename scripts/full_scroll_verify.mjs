import { evaluate, getClient } from '../src/connection.js';

const target = ['NASDAQ:AVGO','NASDAQ:NVDA','NASDAQ:MRVL','NASDAQ:LITE','NASDAQ:COHR','NYSE:VSH','NASDAQ:TTMI','NASDAQ:ELTK','NYSE:DELL','NASDAQ:MSFT','NASDAQ:AMD','NASDAQ:CBRS','NASDAQ:SMCI','NYSE:CLS','NASDAQ:MU','NASDAQ:WDC','NASDAQ:STX','NASDAQ:SNDK','NASDAQ:AMKR','NYSE:GLW','NYSE:FN','NYSE:CIEN','NASDAQ:CRDO','NASDAQ:JEWL','NYSE:HUN','NYSE:ASIX','NYSE:WLK','NYSE:CE','NYSE:LYB','NYSE:VRT','NYSE:ETN','NYSE:MOD','NYSE:JCI','NASDAQ:ON','NASDAQ:POWI','NASDAQ:VICR','NASDAQ:MPWR','NASDAQ:VNET','NASDAQ:EQIX','NASDAQ:DGXX','NASDAQ:NBIS','NASDAQ:CRWV','NASDAQ:IREN','NASDAQ:APLD'];

const c = await getClient();

// Scroll listContainer progressively and collect all symbols
const allSymbols = new Set();

// Scroll to top first
await evaluate(`
  (function() {
    var list = document.querySelector('[class*="listContainer"]');
    if (list) list.scrollTop = 0;
  })()
`);
await new Promise(r => setTimeout(r, 500));

// Progressive scroll: collect items, scroll down, repeat
const stepSize = 1100; // slightly less than clientHeight (1192)
const maxScroll = 9806;
let currentScroll = 0;
let prevCount = 0;
let noChangeStreak = 0;

for (let step = 0; step < 20; step++) {
  // Collect visible
  const r = await evaluate(`
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
  const visible = JSON.parse(r);
  visible.forEach(s => allSymbols.add(s));

  const presentCount = target.filter(t => allSymbols.has(t)).length;
  process.stdout.write(`  Scroll ${currentScroll}: ${visible.length} visible, ${allSymbols.size} collected, ${presentCount}/${target.length} targets\r`);

  if (allSymbols.size === prevCount) {
    noChangeStreak++;
    if (noChangeStreak >= 3) break;
  } else {
    noChangeStreak = 0;
  }
  prevCount = allSymbols.size;

  // Scroll down
  currentScroll = Math.min(currentScroll + stepSize, maxScroll);
  await evaluate(`
    (function() {
      var list = document.querySelector('[class*="listContainer"]');
      if (list) list.scrollTop = ${currentScroll};
    })()
  `);
  await new Promise(r => setTimeout(r, 600));
}

console.log('\n');

// Final tally
const present = target.filter(t => allSymbols.has(t));
const missing = target.filter(t => !allSymbols.has(t));

console.log(`\nTotal unique symbols collected: ${allSymbols.size}`);
console.log(`Targets found: ${present.length}/${target.length}`);
if (missing.length > 0) {
  console.log(`\nStill missing (${missing.length}):`);
  missing.forEach(s => console.log('  ' + s));

  // Try to add missing ones one more time with even longer waits
  console.log('\nRetrying missing symbols with extra wait...');
  for (const sym of missing) {
    process.stdout.write(`  ${sym} ... `);
    const btn = await evaluate(`
      (function() {
        var btn = document.querySelector('[data-name="add-symbol-button"]');
        if (btn && btn.offsetParent !== null) { btn.click(); return true; }
        return false;
      })()
    `);
    if (!btn) { console.log('FAIL (no btn)'); continue; }
    await new Promise(r => setTimeout(r, 1000));
    await c.Input.insertText({ text: sym });
    await new Promise(r => setTimeout(r, 2500)); // extra long
    await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
    await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter' });
    await new Promise(r => setTimeout(r, 1500)); // extra long
    await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape' });
    console.log('OK');
    await new Promise(r => setTimeout(r, 500));
  }
} else {
  console.log('ALL 44 CONFIRMED PRESENT!');
}

process.exit(0);
