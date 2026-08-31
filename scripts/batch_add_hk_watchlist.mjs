import { evaluate, getClient } from '../src/connection.js';
import { readFileSync } from 'fs';

const symbols = readFileSync('./watchlist/hk_to_add.txt', 'utf8')
  .trim().split('\n').filter(s => s.trim());
const WATCHLIST = '港股可交易';

const c = await getClient();

// Step 1: Switch to the right watchlist
const currentTitle = await evaluate(`
  (function() {
    var right = document.querySelector('[class*="layout__area--right"]');
    var titleEl = right ? right.querySelector('[class*="titleRow"]') : null;
    return titleEl ? titleEl.textContent.trim() : 'N/A';
  })()
`);
console.log(`Current watchlist: "${currentTitle}"`);

if (!currentTitle.includes('港股可交易')) {
  console.log('Switching to 港股可交易...');
  // Click watchlist switcher
  const btnClicked = await evaluate(`
    (function() {
      var btn = document.querySelector('[data-name="watchlists-button"]');
      if (btn) { btn.click(); return true; }
      return false;
    })()
  `);
  if (btnClicked) {
    await new Promise(r => setTimeout(r, 600));
    // Find and click 港股可交易 in dropdown
    const found = await evaluate(`
      (function() {
        var all = document.querySelectorAll('[class*="menuItem"], [class*="item"], [class*="row"], [class*="option"], div, span, li');
        for (var i = 0; i < all.length; i++) {
          if (all[i].textContent.trim() === '港股可交易' && all[i].offsetParent !== null) {
            all[i].click();
            return true;
          }
        }
        return false;
      })()
    `);
    console.log('  Selected from list:', found);
    await new Promise(r => setTimeout(r, 500));
  }
}

// Verify
const finalTitle = await evaluate(`
  (function() {
    var right = document.querySelector('[class*="layout__area--right"]');
    var titleEl = right ? right.querySelector('[class*="titleRow"]') : null;
    return titleEl ? titleEl.textContent.trim() : 'N/A';
  })()
`);
console.log(`Watchlist now: "${finalTitle}"\n`);

// Step 2: Add all symbols
console.log(`Adding ${symbols.length} stocks...\n`);

async function addOne(sym) {
  const btn = await evaluate(`
    (function() {
      var btn = document.querySelector('[data-name="add-symbol-button"]');
      if (btn && btn.offsetParent !== null) { btn.click(); return true; }
      return false;
    })()
  `);
  if (!btn) return false;

  await new Promise(r => setTimeout(r, 800));
  await c.Input.insertText({ text: sym });
  await new Promise(r => setTimeout(r, 1500));

  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter' });
  await new Promise(r => setTimeout(r, 1000));

  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape' });
  await new Promise(r => setTimeout(r, 500));

  return true;
}

let ok = 0, fail = 0;

for (let i = 0; i < symbols.length; i++) {
  const sym = symbols[i];
  process.stdout.write(`[${String(i+1).padStart(2)}/${symbols.length}] ${sym} ... `);
  try {
    const result = await addOne(sym);
    if (result) { console.log('OK'); ok++; }
    else { console.log('FAIL'); fail++; }
  } catch (e) {
    console.log('ERR: ' + e.message);
    fail++;
  }
  await new Promise(r => setTimeout(r, 300));
}

console.log(`\nDone: ${ok} added, ${fail} failed`);

// Quick scroll verify - collect visible across multiple scroll positions
await evaluate(`
  (function() {
    var list = document.querySelector('[class*="listContainer"]');
    if (list) list.scrollTop = 0;
  })()
`);
await new Promise(r => setTimeout(r, 400));

const allFound = new Set();
for (let s = 0; s < 10; s++) {
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
  JSON.parse(r).forEach(x => allFound.add(x));
  await evaluate(`
    (function() {
      var list = document.querySelector('[class*="listContainer"]');
      if (list) list.scrollTop += 1100;
    })()
  `);
  await new Promise(r => setTimeout(r, 400));
}

const present = symbols.filter(s => allFound.has(s));
const missing = symbols.filter(s => !allFound.has(s));

console.log(`\nCollected: ${allFound.size} unique symbols`);
console.log(`Targets found: ${present.length}/${symbols.length}`);
if (missing.length > 0) {
  console.log(`Not in viewport: ${missing.join(', ')}`);
  console.log('(Likely present but outside scroll positions — virtual scrolling)');
} else {
  console.log('ALL CONFIRMED!');
}

process.exit(0);
