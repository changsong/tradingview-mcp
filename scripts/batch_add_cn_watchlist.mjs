import { evaluate, getClient, setSkipLiveness } from '../src/connection.js';
import { readFileSync } from 'fs';

const symbols = readFileSync('./watchlist/cn_to_add.txt', 'utf8')
  .trim().split('\n')
  .filter(s => s.trim());
const WATCHLIST_NAME = 'A股可交易';

setSkipLiveness(true);

async function switchWatchlist(name) {
  // Click the watchlist dropdown button to open the list
  const clicked = await evaluate(`
    (function() {
      var name = ${JSON.stringify(name)};

      // First try: click the watchlist name/title in the right panel header
      var rightArea = document.querySelector('[class*="layout__area--right"]');
      if (rightArea) {
        // Find dropdown/selector elements
        var selects = rightArea.querySelectorAll('select, [class*="dropdown"], [class*="select"], [class*="picker"], [class*="chooser"]');
        for (var i = 0; i < selects.length; i++) {
          var text = selects[i].textContent || '';
          if (text.includes(name)) {
            selects[i].click();
            return { method: 'direct_click', found: true };
          }
        }

        // Try clicking any element containing the watchlist name
        var allEls = rightArea.querySelectorAll('div, span, button');
        for (var i = 0; i < allEls.length; i++) {
          if (allEls[i].textContent.trim() === name) {
            allEls[i].click();
            return { method: 'name_match', found: true };
          }
        }
      }

      // Fallback: try the watchlist widget button
      var btn = document.querySelector('[data-name="base-watchlist-widget-button"]')
        || document.querySelector('[aria-label*="Watchlist"]')
        || document.querySelector('[aria-label*="自选"]');
      if (btn) { btn.click(); return { method: 'widget_button', found: true }; }

      return { found: false };
    })()
  `);

  console.log(`  Switch watchlist: ${JSON.stringify(clicked)}`);
  await new Promise(r => setTimeout(r, 600));

  // If we opened a dropdown, now find and click the specific watchlist
  if (clicked.method !== 'direct_click') {
    const selected = await evaluate(`
      (function() {
        var name = ${JSON.stringify(name)};
        // Look for the name in any visible popup/menu/dropdown
        var popups = document.querySelectorAll('[class*="popup"], [class*="menu"], [class*="dropdown"], [class*="list"], [class*="overlay"]');
        for (var p = 0; p < popups.length; p++) {
          if (popups[p].offsetParent === null) continue;
          var items = popups[p].querySelectorAll('div, span, li, button');
          for (var i = 0; i < items.length; i++) {
            if (items[i].textContent.trim() === name) {
              items[i].click();
              return { found: true, method: 'popup_click' };
            }
            if (items[i].textContent.trim().indexOf(name) !== -1) {
              items[i].click();
              return { found: true, method: 'popup_partial' };
            }
          }
        }
        return { found: false };
      })()
    `);
    console.log(`  Select from list: ${JSON.stringify(selected)}`);
    await new Promise(r => setTimeout(r, 400));
  }
}

async function addOneSymbol(symbol) {
  const c = await getClient();

  // Click the "Add symbol" button
  const addClicked = await evaluate(`
    (function() {
      var selectors = [
        '[data-name="add-symbol-button"]',
        '[aria-label="Add symbol"]',
        '[aria-label*="Add symbol"]',
        '[aria-label="添加商品代码"]',
        '[aria-label*="添加"]',
        'button[class*="addSymbol"]',
      ];
      for (var s = 0; s < selectors.length; s++) {
        var btn = document.querySelector(selectors[s]);
        if (btn && btn.offsetParent !== null) { btn.click(); return { found: true, selector: selectors[s] }; }
      }
      var container = document.querySelector('[class*="layout__area--right"]');
      if (container) {
        var buttons = container.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
          var ariaLabel = buttons[i].getAttribute('aria-label') || '';
          if (/add.*symbol/i.test(ariaLabel) || /添加/.test(ariaLabel) || buttons[i].textContent.trim() === '+') {
            buttons[i].click();
            return { found: true, method: 'fallback' };
          }
        }
      }
      return { found: false };
    })()
  `);

  if (!addClicked?.found) {
    return { success: false, error: 'Add button not found' };
  }

  await new Promise(r => setTimeout(r, 300));

  // Type symbol
  await c.Input.insertText({ text: symbol });
  await new Promise(r => setTimeout(r, 600));

  // Press Enter to select first result
  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter' });
  await new Promise(r => setTimeout(r, 400));

  // Press Escape to close search
  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape' });

  return { success: true };
}

async function main() {
  console.log(`Adding ${symbols.length} stocks to "${WATCHLIST_NAME}"...\n`);

  // Step 1: Switch to the target watchlist
  console.log('1. Switching watchlist...');
  await switchWatchlist(WATCHLIST_NAME);
  await new Promise(r => setTimeout(r, 500));

  // Step 2: Add all symbols
  console.log(`\n2. Adding ${symbols.length} symbols...\n`);
  let success = 0;
  let failed = 0;

  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    process.stdout.write(`  [${String(i+1).padStart(2)}/${symbols.length}] ${sym} ... `);
    try {
      const result = await addOneSymbol(sym);
      if (result.success) {
        console.log('OK');
        success++;
      } else {
        console.log(`FAIL: ${result.error}`);
        failed++;
      }
    } catch (err) {
      console.log(`ERR: ${err.message}`);
      failed++;
    }
    // Small delay between additions
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\nDone: ${success} added, ${failed} failed`);
}

main().catch(err => { console.error(err); process.exit(1); });
