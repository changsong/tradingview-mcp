import { evaluate, getClient } from '../src/connection.js';
import { readFileSync } from 'fs';

const symbols = readFileSync('./watchlist/cn_to_add.txt', 'utf8').trim().split('\n');
const WATCHLIST_NAME = 'A股可交易';

async function main() {
  // Step 1: Explore available watchlists and APIs
  console.log(`Adding ${symbols.length} stocks to "${WATCHLIST_NAME}"...\n`);

  const info = await evaluate(`
    (function() {
      var result = {};

      // Find right sidebar watchlist panel
      var btn = document.querySelector('[data-name="base-watchlist-widget-button"]')
        || document.querySelector('[aria-label*="Watchlist"]')
        || document.querySelector('[aria-label*="自选"]');
      result.watchlistBtn = btn ? btn.getAttribute('aria-label') || btn.getAttribute('data-name') : 'NOT_FOUND';

      // Check if right panel is open
      var rightArea = document.querySelector('[class*="layout__area--right"]');
      result.rightPanelOpen = !!(rightArea && rightArea.offsetWidth > 50);

      // Try to find watchlist name dropdown
      var nameEls = document.querySelectorAll('[class*="title"], [class*="header"], [class*="name"], [class*="label"]');
      var watchlistNames = [];
      for (var i = 0; i < nameEls.length; i++) {
        var t = nameEls[i].textContent.trim();
        if (t && t.length < 30 && !t.match(/^[0-9.]+$/)) {
          watchlistNames.push(t);
        }
      }
      result.visibleTexts = watchlistNames.slice(0, 20);

      return result;
    })()
  `);
  console.log('UI State:', JSON.stringify(info, null, 2));

  if (!info.watchlistBtn || info.watchlistBtn === 'NOT_FOUND') {
    console.log('\nWatchlist button not found. Trying to open via keyboard...');
    // Try Alt+W (common shortcut for watchlist)
    const c = await getClient();
    // Just try to switch to a symbol which may auto-open panels
    await evaluate(`(function() {
      // Try to find and click any button that shows watchlist
      var allBtns = document.querySelectorAll('button[aria-label], div[aria-label]');
      for (var i = 0; i < allBtns.length; i++) {
        var label = allBtns[i].getAttribute('aria-label') || '';
        if (label.includes('Watch') || label.includes('自选') || label.includes('watch')) {
          allBtns[i].click();
          return 'clicked: ' + label;
        }
      }
      return 'no watchlist button found';
    })()`);
  }

  // Step 2: Try to add using the approach from watchlist.js core
  // First try the standard add for a test symbol
  console.log('\n--- Testing add approach ---');

  // Try a different approach: use symbol switch to add
  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    console.log(`[${i+1}/${symbols.length}] Adding ${sym}...`);

    // Approach: switch to symbol (adds to recent), then use keyboard shortcut
    const switchResult = await evaluate(`
      (function() {
        try {
          // Try to use TradingView's internal API to add to watchlist
          if (window._triggerWidget && typeof window._triggerWidget === 'function') {
            window._triggerWidget('watchlist.addSymbol', '${sym}');
            return { method: '_triggerWidget', success: true };
          }
        } catch(e) {}

        // Fallback: just switch chart symbol (which often auto-adds to active watchlist)
        return { method: 'try_switch', symbol: '${sym}' };
      })()
    `);
    console.log(`  -> ${JSON.stringify(switchResult)}`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
