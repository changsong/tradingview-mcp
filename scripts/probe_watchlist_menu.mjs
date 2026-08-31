import { evaluate, disconnect } from '../src/connection.js';

const r = await evaluate(`
  (async function() {
    var paths = [
      '_widgebarApi',
      '_widgetbarApiDeferredPromise',
      '_watchlistApiDeferredPromise',
    ];
    var out = {};
    for (var p of paths) {
      try {
        var v = window.TradingViewApi[p];
        out[p] = { type: typeof v, isNull: v === null };
        if (v && v.promise && typeof v.promise.then === 'function') {
          try {
            var resolved = await v.promise;
            out[p].resolved_keys = resolved ? Object.keys(resolved).slice(0, 30) : null;
            out[p].resolved_proto = resolved ? Object.getOwnPropertyNames(Object.getPrototypeOf(resolved) || {}).slice(0, 30) : null;
          } catch (e) { out[p].promise_err = String(e); }
        }
        if (v && typeof v === 'object' && !v.promise) {
          out[p].keys = Object.keys(v).slice(0, 30);
        }
      } catch (e) { out[p] = String(e); }
    }
    return out;
  })()
`, { awaitPromise: true });
console.log(JSON.stringify(r, null, 2));
await disconnect();
