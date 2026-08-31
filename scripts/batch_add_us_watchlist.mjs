import { evaluate, getClient, setSkipLiveness } from '../src/connection.js';
import { readFileSync } from 'fs';

const symbols = readFileSync('./watchlist/us_to_add.txt', 'utf8')
  .trim().split('\n').filter(s => s.trim());
const WATCHLIST_NAME = '美股可交易';

setSkipLiveness(true);

async function main() {
  const c = await getClient();

  // Step 1: Verify we're on the right watchlist
  const currentTitle = await evaluate(`
    (function() {
      var right = document.querySelector('[class*="layout__area--right"]');
      if (!right) return 'NO_PANEL';
      var title = right.querySelector('[class*="titleRow"]');
      return title ? title.textContent.trim() : 'NO_TITLE';
    })()
  `);
  console.log(`Current watchlist: "${currentTitle}"`);

  if (!currentTitle.includes(WATCHLIST_NAME)) {
    console.log(`Need to switch from "${currentTitle}" to "${WATCHLIST_NAME}"`);
    // Click the watchlist button
    await evaluate(`
      (function() {
        var btn = document.querySelector('[data-name="watchlists-button"]');
        if (btn) btn.click();
      })()
    `);
    await new Promise(r => setTimeout(r, 600));

    // Select from dropdown
    const selected = await evaluate(`
      (function() {
        var name = ${JSON.stringify(WATCHLIST_NAME)};
        var items = document.querySelectorAll('[class*="menuItem"], [class*="item"], [class*="row"], [class*="option"]');
        for (var i = 0; i < items.length; i++) {
          if (items[i].textContent.trim() === name && items[i].offsetParent !== null) {
            items[i].click();
            return true;
          }
        }
        // Fallback: find any clickable with the name
        var all = document.querySelectorAll('div, span, li');
        for (var i = 0; i < all.length; i++) {
          if (all[i].textContent.trim() === name && all[i].offsetParent !== null) {
            all[i].click();
            return true;
          }
        }
        return false;
      })()
    `);
    console.log(`  Switched: ${selected}`);
    await new Promise(r => setTimeout(r, 500));
  }

  // Step 2: Try using TradingView internal widget API directly
  console.log(`\nAdding ${symbols.length} symbols via TradingView API...\n`);

  let ok = 0, fail = 0;
  const failedSymbols = [];

  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    process.stdout.write(`  [${String(i+1).padStart(2)}/${symbols.length}] ${sym} ... `);

    try {
      // Method 1: Try _triggerWidget (TradingView internal)
      const r1 = await evaluate(`
        (function() {
          try {
            if (window._triggerWidget && typeof window._triggerWidget === 'function') {
              window._triggerWidget('watchlist.addSymbol', ${JSON.stringify(sym)});
              return { method: '_triggerWidget', ok: true };
            }
          } catch(e) {
            return { method: '_triggerWidget', ok: false, error: e.message };
          }
          return { method: '_triggerWidget', ok: false, error: 'not a function' };
        })()
      `, { awaitPromise: false });

      if (r1?.ok) {
        console.log('OK (API)');
        ok++;
        await new Promise(r => setTimeout(r, 300));
        continue;
      }

      // Method 2: Use the standard add flow with longer waits
      // Click add button
      const addBtn = await evaluate(`
        (function() {
          var btn = document.querySelector('[data-name="add-symbol-button"]');
          if (btn) { btn.click(); return true; }
          return false;
        })()
      `);

      if (!addBtn) {
        console.log('FAIL (no add button)');
        fail++;
        failedSymbols.push(sym);
        continue;
      }

      await new Promise(r => setTimeout(r, 500));

      // Clear any existing text and type symbol
      // Select all existing text and replace
      await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'a', code: 'KeyA', windowsVirtualKeyCode: 65, modifiers: 2 }); // Ctrl+A
      await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'a', code: 'KeyA', windowsVirtualKeyCode: 65, modifiers: 2 });
      await new Promise(r => setTimeout(r, 100));

      await c.Input.insertText({ text: sym });
      await new Promise(r => setTimeout(r, 1000)); // longer wait for search results

      // Press Enter
      await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
      await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter' });
      await new Promise(r => setTimeout(r, 600));

      // Press Escape
      await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape' });
      await new Promise(r => setTimeout(r, 200));

      console.log('OK (UI)');
      ok++;

    } catch (err) {
      console.log(`ERR: ${err.message}`);
      fail++;
      failedSymbols.push(sym);
    }
  }

  console.log(`\nDone: ${ok} added, ${fail} failed`);
  if (failedSymbols.length > 0) {
    console.log(`Failed: ${failedSymbols.join(', ')}`);
  }

  // Step 3: Verify
  const verify = await evaluate(`
    (function() {
      var container = document.querySelector('[class*="layout__area--right"]');
      if (!container) return JSON.stringify({error:'no panel'});
      var els = container.querySelectorAll('[data-symbol-full]');
      var syms = [];
      for (var i = 0; i < els.length; i++) {
        syms.push(els[i].getAttribute('data-symbol-full'));
      }
      return JSON.stringify({count: syms.length, symbols: syms});
    })()
  `);
  console.log(`\nWatchlist now: ${JSON.parse(verify).count} symbols`);
}

main().catch(err => { console.error(err); process.exit(1); });
