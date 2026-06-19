import { evaluate, getClient } from '../src/connection.js';

const c = await getClient();

async function addOne(sym) {
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
  console.log('  Clicked add:', clicked);
  if (!clicked) return false;

  await new Promise(r => setTimeout(r, 800));

  // type
  await c.Input.insertText({ text: sym });
  console.log('  Typed:', sym);
  await new Promise(r => setTimeout(r, 1500));

  // Enter
  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Enter', code: 'Enter' });
  console.log('  Enter pressed');
  await new Promise(r => setTimeout(r, 1000));

  // Escape
  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape' });
  console.log('  Escape pressed');
  await new Promise(r => setTimeout(r, 500));

  // Verify
  const found = await evaluate(`
    (function() {
      var c = document.querySelector('[class*="layout__area--right"]');
      var els = c ? c.querySelectorAll('[data-symbol-full]') : [];
      for (var i = 0; i < els.length; i++) {
        if (els[i].getAttribute('data-symbol-full') === ${JSON.stringify(sym)}) return true;
      }
      return false;
    })()
  `);
  return found;
}

// Test 1: COHR
console.log('Test 1: COHR');
const r1 = await addOne('NASDAQ:COHR');
console.log('  Result:', r1);

// Wait a bit
await new Promise(r => setTimeout(r, 1000));

// Test 2: VSH
console.log('Test 2: NYSE:VSH');
const r2 = await addOne('NYSE:VSH');
console.log('  Result:', r2);

// Final count
const final = await evaluate(`
  (function() {
    var c = document.querySelector('[class*="layout__area--right"]');
    var els = c ? c.querySelectorAll('[data-symbol-full]') : [];
    return JSON.stringify({count: els.length});
  })()
`);
console.log('Final visible count:', final);

process.exit(0);
