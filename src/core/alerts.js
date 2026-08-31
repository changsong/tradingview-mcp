/**
 * Core alert logic.
 */
import { evaluate, evaluateAsync, getClient, safeString, requireFinite } from '../connection.js';
import { setSymbol as setChartSymbol } from './chart.js';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitFor(predicateExpr, timeoutMs = 5000, intervalMs = 200) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const ok = await evaluate(`(function(){ try { return !!(${predicateExpr}); } catch(e){ return false; } })()`);
    if (ok) return true;
    await sleep(intervalMs);
  }
  return false;
}

const PRICE_INPUT_FINDER = `
  (function() {
    var inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    for (var i = 0; i < inputs.length; i++) {
      var el = inputs[i];
      if (el.offsetParent === null) continue;
      var ph = el.placeholder || '';
      if (/查找|search|find/i.test(ph)) continue;
      var v = (el.value || '').trim();
      if (/^-?\\d+(\\.\\d+)?$/.test(v)) return el;
    }
    return null;
  })()
`;

async function sendEscape() {
  const c = await getClient();
  await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
}

export async function create({ symbol, price, condition = 'crossing', message } = {}) {
  const validPrice = requireFinite(price, 'price');
  if (condition !== 'crossing') {
    throw new Error(`Unsupported condition: ${condition}. Only "crossing" is supported.`);
  }

  if (symbol) {
    await setChartSymbol({ symbol });
    await sleep(300);
  }

  const resolvedSymbol = await evaluate(`
    (function() {
      try { return window.TradingViewApi._activeChartWidgetWV.value().symbol(); }
      catch(e) { return null; }
    })()
  `);

  const dialogAlreadyOpen = await evaluate(`!!(${PRICE_INPUT_FINDER})`);
  if (dialogAlreadyOpen) {
    await sendEscape();
    await sleep(300);
  }

  const widgetbarVisible = await evaluate(`
    (function() {
      var w = document.querySelector('.widgetbar-widget-alerts');
      return !!(w && w.offsetParent);
    })()
  `);
  if (!widgetbarVisible) {
    const opened = await evaluate(`
      (function() {
        var btn = document.querySelector('[data-name="alerts"]');
        if (!btn) return false;
        btn.click();
        return true;
      })()
    `);
    if (!opened) throw new Error('Could not find right-toolbar alerts button [data-name="alerts"]');
    const appeared = await waitFor(`(function(){ var w = document.querySelector('.widgetbar-widget-alerts'); return w && w.offsetParent; })()`, 3000);
    if (!appeared) throw new Error('Alerts widgetbar did not open within 3s');
  }

  const createBtnClicked = await evaluate(`
    (function() {
      var widget = document.querySelector('.widgetbar-widget-alerts');
      if (!widget) return { ok: false, reason: 'widget_missing' };
      var els = widget.querySelectorAll('[title]');
      for (var i = 0; i < els.length; i++) {
        var t = els[i].getAttribute('title') || '';
        if (t === 'Create Alert' || t === '创建警报') {
          els[i].click();
          return { ok: true, title: t };
        }
      }
      return { ok: false, reason: 'button_missing', titles: Array.from(els).map(function(b){return b.getAttribute('title');}) };
    })()
  `);
  if (!createBtnClicked || !createBtnClicked.ok) {
    throw new Error(`Could not click "Create Alert" button (reason: ${createBtnClicked?.reason}, titles seen: ${JSON.stringify(createBtnClicked?.titles)})`);
  }

  const inputAppeared = await waitFor(PRICE_INPUT_FINDER, 3000);
  if (!inputAppeared) throw new Error('Alert dialog price input did not appear within 3s');

  const rect = await evaluate(`
    (function() {
      var el = ${PRICE_INPUT_FINDER};
      if (!el) return null;
      var r = el.getBoundingClientRect();
      return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
    })()
  `);
  if (!rect) throw new Error('Could not locate price input rect');

  const c = await getClient();
  for (let i = 1; i <= 3; i++) {
    await c.Input.dispatchMouseEvent({ type: 'mousePressed',  x: rect.x, y: rect.y, button: 'left', clickCount: i });
    await c.Input.dispatchMouseEvent({ type: 'mouseReleased', x: rect.x, y: rect.y, button: 'left', clickCount: i });
  }
  await sleep(50);
  await c.Input.insertText({ text: String(validPrice) });
  await sleep(100);

  await evaluate(`
    (function() {
      var el = ${PRICE_INPUT_FINDER};
      if (el) {
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
    })()
  `);

  if (message) {
    await evaluate(`
      (function() {
        var textareas = document.querySelectorAll('textarea');
        for (var i = 0; i < textareas.length; i++) {
          var ta = textareas[i];
          if (ta.offsetParent === null) continue;
          var nativeSet = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;
          nativeSet.call(ta, ${safeString(message)});
          ta.dispatchEvent(new Event('input', { bubbles: true }));
          ta.dispatchEvent(new Event('change', { bubbles: true }));
          return true;
        }
        return false;
      })()
    `);
  }

  const beforeList = await list();
  const beforeIds = new Set((beforeList.alerts || []).map((a) => a.alert_id));

  const submitRect = await evaluate(`
    (function() {
      var btns = document.querySelectorAll('button');
      for (var i = 0; i < btns.length; i++) {
        var b = btns[i];
        if (b.offsetParent === null) continue;
        var t = (b.textContent || '').trim();
        if (t === '创建订单' || t === 'Create' || t === 'Create Alert') {
          var r = b.getBoundingClientRect();
          return { x: r.x + r.width / 2, y: r.y + r.height / 2, text: t };
        }
      }
      return null;
    })()
  `);
  if (!submitRect) throw new Error('Could not find submit button (expected 创建订单 / Create / Create Alert)');

  await c.Input.dispatchMouseEvent({ type: 'mouseMoved',    x: submitRect.x, y: submitRect.y });
  await c.Input.dispatchMouseEvent({ type: 'mousePressed',  x: submitRect.x, y: submitRect.y, button: 'left', clickCount: 1 });
  await c.Input.dispatchMouseEvent({ type: 'mouseReleased', x: submitRect.x, y: submitRect.y, button: 'left', clickCount: 1 });

  const closed = await waitFor(`!(${PRICE_INPUT_FINDER})`, 3000);

  let newAlertId = null;
  const verifyDeadline = Date.now() + 3000;
  while (Date.now() < verifyDeadline) {
    const cur = await list();
    const candidate = (cur.alerts || []).find((a) => !beforeIds.has(a.alert_id));
    if (candidate) { newAlertId = candidate.alert_id; break; }
    await sleep(500);
  }

  if (!newAlertId) {
    return {
      success: false,
      error: 'Alert dialog submitted but no new alert appeared in API within 3s',
      symbol: resolvedSymbol,
      price: validPrice,
      condition,
      message: message || null,
      dialog_closed: !!closed,
      source: 'ui_click',
    };
  }

  return {
    success: true,
    symbol: resolvedSymbol,
    price: validPrice,
    condition,
    message: message || null,
    alert_id: newAlertId,
    source: 'ui_click',
  };
}

export async function list() {
  const result = await evaluateAsync(`
    fetch('https://pricealerts.tradingview.com/list_alerts', { credentials: 'include' })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.s !== 'ok' || !Array.isArray(data.r)) return { alerts: [], error: data.errmsg || 'Unexpected response' };
        return {
          alerts: data.r.map(function(a) {
            var sym = '';
            try { sym = JSON.parse(a.symbol.replace(/^=/, '')).symbol || a.symbol; } catch(e) { sym = a.symbol; }
            return {
              alert_id: a.alert_id,
              symbol: sym,
              type: a.type,
              message: a.message,
              active: a.active,
              condition: a.condition,
              resolution: a.resolution,
              created: a.create_time,
              last_fired: a.last_fire_time,
              expiration: a.expiration,
            };
          })
        };
      })
      .catch(function(e) { return { alerts: [], error: e.message }; })
  `);
  return { success: true, alert_count: result?.alerts?.length || 0, source: 'internal_api', alerts: result?.alerts || [], error: result?.error };
}

export async function deleteAlerts({ delete_all }) {
  if (delete_all) {
    const result = await evaluate(`
      (function() {
        var alertBtn = document.querySelector('[data-name="alerts"]');
        if (alertBtn) alertBtn.click();
        var header = document.querySelector('[data-name="alerts"]');
        if (header) {
          header.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, clientX: 100, clientY: 100 }));
          return { context_menu_opened: true };
        }
        return { context_menu_opened: false };
      })()
    `);
    return { success: true, note: 'Alert deletion requires manual confirmation in the context menu.', context_menu_opened: result?.context_menu_opened || false, source: 'dom_fallback' };
  }
  throw new Error('Individual alert deletion not yet supported. Use delete_all: true.');
}
