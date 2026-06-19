import { evaluate, getClient } from '../src/connection.js';

const c = await getClient();

// Step 1: click add button
console.log('1. Clicking add button...');
const btn = await evaluate(`
  (function() {
    var btn = document.querySelector('[data-name="add-symbol-button"]');
    if (!btn) return JSON.stringify({error: 'no button'});
    btn.click();
    return JSON.stringify({clicked: true});
  })()
`);
console.log('   ', btn);

await new Promise(r => setTimeout(r, 800));

// Step 2: check what appeared
console.log('2. Scanning for search input...');
const inputs = await evaluate(`
  (function() {
    var result = [];
    // Find any visible input elements
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].offsetParent !== null && inputs[i].offsetWidth > 0) {
        result.push({
          placeholder: inputs[i].getAttribute('placeholder') || '',
          type: inputs[i].type || 'text',
          value: inputs[i].value || '',
          cls: (inputs[i].className || '').substring(0, 80),
          visible: true
        });
      }
    }
    // Also check for overlays/popups
    var overlays = document.querySelectorAll('[class*="overlay"], [class*="popup"], [class*="dialog"], [class*="modal"]');
    var visibleOverlays = [];
    for (var o = 0; o < overlays.length; o++) {
      if (overlays[o].offsetParent !== null && overlays[o].offsetWidth > 100) {
        visibleOverlays.push({
          cls: (overlays[o].className || '').substring(0, 80),
          text: overlays[o].textContent.trim().substring(0, 100)
        });
      }
    }
    result.overlays = visibleOverlays.slice(0, 10);
    return JSON.stringify(result);
  })()
`);
console.log('   ', inputs);

// Step 3: try to type and see what happens
console.log('3. Typing AVGO...');
await c.Input.insertText({ text: 'AVGO' });
await new Promise(r => setTimeout(r, 1500));

// Step 4: check search results
console.log('4. Checking search results...');
const results = await evaluate(`
  (function() {
    var result = {};
    // Check input value
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].offsetParent !== null && inputs[i].offsetWidth > 0) {
        result.inputValue = inputs[i].value;
        result.inputPlaceholder = inputs[i].getAttribute('placeholder') || '';
      }
    }
    // Check any list items / search results
    var items = document.querySelectorAll('[class*="item"], [class*="result"], [class*="row"], [class*="option"], [class*="searchItem"]');
    var visibleItems = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].offsetParent !== null && items[i].offsetWidth > 0) {
        var t = items[i].textContent.trim();
        if (t && t.length > 1 && t.length < 100) {
          visibleItems.push(t);
        }
      }
    }
    result.visibleItems = visibleItems.slice(0, 15);
    return JSON.stringify(result);
  })()
`);
console.log('   ', results);

// Step 5: Press Enter
console.log('5. Pressing Enter...');
await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter' });
await new Promise(r => setTimeout(r, 1000));

// Step 6: Check if symbol was added
console.log('6. Checking watchlist after Enter...');
const check = await evaluate(`
  (function() {
    var container = document.querySelector('[class*="layout__area--right"]');
    var els = container ? container.querySelectorAll('[data-symbol-full]') : [];
    var syms = [];
    for (var i = 0; i < els.length; i++) {
      syms.push(els[i].getAttribute('data-symbol-full'));
    }
    return JSON.stringify({count: els.length, last5: syms.slice(-5), hasAvgo: syms.filter(function(s){return s.indexOf('AVGO')!==-1})});
  })()
`);
console.log('   ', check);

// Step 7: Press Escape
console.log('7. Pressing Escape...');
await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape' });

console.log('Done.');
process.exit(0);
