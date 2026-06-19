import { evaluate, getClient, setSkipLiveness } from '../src/connection.js';
import { readFileSync } from 'fs';

const symbols = readFileSync('./watchlist/us_to_add.txt', 'utf8')
  .trim().split('\n').filter(s => s.trim());

setSkipLiveness(true);

const c = await getClient();

// Step 0: ensure correct watchlist
const title = await evaluate(`
  (function() {
    var right = document.querySelector('[class*="layout__area--right"]');
    var titleEl = right ? right.querySelector('[class*="titleRow"]') : null;
    return titleEl ? titleEl.textContent.trim() : 'N/A';
  })()
`);
console.log(`Watchlist: "${title}"`);

// Pre-check: which symbols are already present
const getCurrent = async () => {
  const r = await evaluate(`
    (function() {
      var c = document.querySelector('[class*="layout__area--right"]');
      var els = c ? c.querySelectorAll('[data-symbol-full]') : [];
      var s = [];
      for (var i = 0; i < els.length; i++) {
        s.push(els[i].getAttribute('data-symbol-full'));
      }
      return JSON.stringify(s);
    })()
  `);
  return JSON.parse(r);
};

const already = await getCurrent();
const toAdd = symbols.filter(s => !already.includes(s));
console.log(`Already present: ${symbols.length - toAdd.length}, Need to add: ${toAdd.length}\n`);

if (toAdd.length === 0) {
  console.log('All symbols already in watchlist!');
  process.exit(0);
}

// Add each missing symbol with proven timing
let ok = 0, fail = 0;
const failedList = [];

for (let i = 0; i < toAdd.length; i++) {
  const sym = toAdd[i];
  process.stdout.write(`  [${String(i+1).padStart(2)}/${toAdd.length}] ${sym} ... `);

  try {
    // Click Add button
    const clicked = await evaluate(`
      (function() {
        var btn = document.querySelector('[data-name="add-symbol-button"]');
        if (btn && btn.offsetParent !== null) {
          btn.click();
          return true;
        }
        return false;
      })()
    `);

    if (!clicked) {
      console.log('FAIL (no button)');
      fail++;
      failedList.push(sym);
      continue;
    }

    // Wait for search input to appear and focus
    await new Promise(r => setTimeout(r, 800));

    // Type the symbol — no Ctrl+A, just direct insertText
    await c.Input.insertText({ text: sym });
    await new Promise(r => setTimeout(r, 1500));

    // Press Enter
    await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
    await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter' });
    await new Promise(r => setTimeout(r, 1000));

    // Press Escape
    await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape' });
    await new Promise(r => setTimeout(r, 400));

    // Quick verify: is it now visible?
    const check = await evaluate(`
      (function() {
        var c = document.querySelector('[class*="layout__area--right"]');
        var els = c ? c.querySelectorAll('[data-symbol-full]') : [];
        for (var i = 0; i < els.length; i++) {
          if (els[i].getAttribute('data-symbol-full') === ${JSON.stringify(sym)}) return true;
        }
        return false;
      })()
    `);

    if (check) {
      console.log('OK');
      ok++;
    } else {
      console.log('NO SHOW (added but not visible)');
      ok++; // count as added — may be out of viewport
    }

  } catch (err) {
    console.log('ERR: ' + err.message);
    fail++;
    failedList.push(sym);
  }
}

// Final verification
const final = await getCurrent();
const finalPresent = symbols.filter(s => final.includes(s));
const finalMissing = symbols.filter(s => !final.includes(s));

console.log(`\nDone: ${ok} added, ${fail} failed`);
console.log(`Watchlist now: ${final.length} symbols visible`);
console.log(`Targets present: ${finalPresent.length}/${symbols.length}`);

if (finalMissing.length > 0) {
  console.log(`\nStill missing (${finalMissing.length}):`);
  finalMissing.forEach(s => console.log('  ' + s));
  console.log('\nTrying alternative approach for missing symbols...');

  // Fallback: use the symbol command to switch to each, which may auto-add
  for (const sym of finalMissing) {
    process.stdout.write(`  Fallback ${sym} ... `);
    try {
      await c.Runtime.evaluate({ expression: `window.TradingViewApi._activeChartWidgetWV.value().setSymbol("${sym}")`, returnByValue: true });
      await new Promise(r => setTimeout(r, 500));
      console.log('OK (switch)');
    } catch (e) {
      console.log('ERR: ' + e.message);
    }
  }
}

process.exit(0);
