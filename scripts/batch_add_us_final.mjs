import { evaluate, getClient } from '../src/connection.js';
import { readFileSync } from 'fs';

const symbols = readFileSync('./watchlist/us_to_add.txt', 'utf8')
  .trim().split('\n').filter(s => s.trim());

const c = await getClient();

// Ensure correct watchlist
const title = await evaluate(`
  (function() {
    var right = document.querySelector('[class*="layout__area--right"]');
    var titleEl = right ? right.querySelector('[class*="titleRow"]') : null;
    return titleEl ? titleEl.textContent.trim() : 'N/A';
  })()
`);
console.log(`Watchlist: "${title}"\n`);

async function addOne(sym) {
  // Click Add button
  const btn = await evaluate(`
    (function() {
      var btn = document.querySelector('[data-name="add-symbol-button"]');
      if (btn && btn.offsetParent !== null) { btn.click(); return true; }
      return false;
    })()
  `);
  if (!btn) return false;

  await new Promise(r => setTimeout(r, 800));

  // Type the symbol
  await c.Input.insertText({ text: sym });
  await new Promise(r => setTimeout(r, 1500));

  // Enter
  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter' });
  await new Promise(r => setTimeout(r, 1000));

  // Escape
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
  // Extra delay between symbols
  await new Promise(r => setTimeout(r, 300));
}

console.log(`\nDone: ${ok} added, ${fail} failed`);

// Scroll to bottom and verify
await evaluate(`
  (function() {
    var container = document.querySelector('[class*="layout__area--right"]');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  })()
`);
await new Promise(r => setTimeout(r, 500));

const final = await evaluate(`
  (function() {
    var c = document.querySelector('[class*="layout__area--right"]');
    var els = c ? c.querySelectorAll('[data-symbol-full]') : [];
    var syms = [];
    for (var i = 0; i < els.length; i++) {
      syms.push(els[i].getAttribute('data-symbol-full'));
    }
    return JSON.stringify({count: els.length, symbols: syms});
  })()
`);

const f = JSON.parse(final);
const present = symbols.filter(s => f.symbols.includes(s));
const missing = symbols.filter(s => !f.symbols.includes(s));

console.log(`\nVisible rows: ${f.count}`);
console.log(`Targets visible: ${present.length}/${symbols.length}`);
if (missing.length > 0) {
  console.log(`Not visible (${missing.length}): ${missing.join(', ')}`);
  console.log('(May be in watchlist but outside visible viewport — virtual scrolling)');
}

process.exit(0);
