/**
 * Batch add symbols to the currently active TradingView watchlist.
 * Usage: node scripts/batch_add_watchlist.mjs
 */
import { evaluate, getClient, disconnect } from '../src/connection.js';

const SYMBOLS = [
  'SMCI','DOCN','EQIX','DLR','IRM','VRT','SBGSY','HON','MMM',
  'TTMI','JBL','SANM','FLEX','CLS','PLXS','NVDA','MSFT','GOOGL','AMD',
  'META','AI','AVGO','MRVL','LITE','COHR','GLW','ETN','GEV','SMNEY',
  'HUBB','GNRC','NEE','SO','DUK','ENPH','RUN','FSLR','CSCO','CIEN',
  'ERIC','NOK','VIAV','FCX','SCCO','RIO','ALB','SQM','WPM','QS',
  'SLDP','ENVX','SES','MU','QCOM','ADI','TSLA','LAR','SGML','ENS'
];

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function addSymbols(symbols) {
  const c = await getClient();
  let added = 0;
  let failed = [];

  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    try {
      console.log(`[${i + 1}/${symbols.length}] Adding ${sym}...`);

      // Click "Add symbol" button
      const addClicked = await evaluate(`
        (function() {
          var selectors = [
            '[data-name="add-symbol-button"]',
            '[aria-label="Add symbol"]',
            '[aria-label*="Add symbol"]',
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
              if (/add.*symbol/i.test(ariaLabel) || buttons[i].textContent.trim() === '+') {
                buttons[i].click();
                return { found: true, method: 'fallback' };
              }
            }
          }
          return { found: false };
        })()
      `);

      if (!addClicked?.found) {
        throw new Error('Add symbol button not found');
      }

      await sleep(300);

      // Type the symbol
      await c.Input.insertText({ text: sym });
      await sleep(600);

      // Press Enter to select first result
      await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
      await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter' });
      await sleep(400);

      // Press Escape to close any remaining search popup
      await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape' });
      await sleep(200);

      console.log(`  OK ${sym}`);
      added++;
    } catch (err) {
      console.error(`  FAIL ${sym}: ${err.message}`);
      failed.push(sym);

      // Try to close any open dialogs
      try {
        await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
        await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape' });
      } catch (_) {}
      await sleep(300);
    }
  }

  return { added, failed };
}

async function main() {
  console.log(`=== Adding ${SYMBOLS.length} symbols to watchlist ===`);

  const result = await addSymbols(SYMBOLS);

  console.log(`\n=== Done: ${result.added}/${SYMBOLS.length} added ===`);
  if (result.failed.length > 0) {
    console.log(`Failed (${result.failed.length}): ${result.failed.join(', ')}`);
  }

  await disconnect();
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
