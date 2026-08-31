import { evaluate } from '../src/connection.js';

const r = await evaluate(`
  (function() {
    var result = {};
    var right = document.querySelector('[class*="layout__area--right"]');
    if (!right) return { error: 'no right panel' };

    // Find the watchlist header/name area
    var headers = right.querySelectorAll('[class*="header"], [class*="titleRow"], [class*="top"], [class*="toolbar"]');
    result.headerCount = headers.length;

    // Look for watchlist name dropdowns
    var all = right.querySelectorAll('button, [class*="name"], [class*="label"], [class*="title"], [role="button"]');
    var items = [];
    for (var i = 0; i < Math.min(all.length, 100); i++) {
      var t = (all[i].textContent || '').trim();
      var aria = all[i].getAttribute('aria-label') || '';
      var dataName = all[i].getAttribute('data-name') || '';
      var cls = (all[i].className || '').substring(0, 50);
      if ((t.length > 1 && t.length < 30) || aria || dataName) {
        items.push({
          text: t,
          aria: aria,
          dataName: dataName,
          tag: all[i].tagName,
          cls: cls
        });
      }
    }
    result.items = items.slice(0, 30);

    // Check for dropdown menus
    var dropdowns = document.querySelectorAll('[class*="dropdown"], [class*="menu"], [class*="popup"], [class*="list"], [class*="select"]');
    var visibleDropdowns = [];
    for (var d = 0; d < dropdowns.length; d++) {
      if (dropdowns[d].offsetParent !== null && dropdowns[d].offsetWidth > 0) {
        var txt = dropdowns[d].textContent.trim().substring(0, 200);
        visibleDropdowns.push({
          cls: (dropdowns[d].className || '').substring(0, 60),
          text: txt
        });
      }
    }
    result.visibleDropdowns = visibleDropdowns.slice(0, 10);

    return JSON.stringify(result);
  })()
`);

console.log(r);
process.exit(0);
