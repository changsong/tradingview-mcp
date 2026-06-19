import { evaluate } from '../src/connection.js';

const target = ['NASDAQ:AVGO','NASDAQ:NVDA','NASDAQ:MRVL','NASDAQ:LITE','NASDAQ:COHR','NYSE:VSH','NASDAQ:TTMI','NASDAQ:ELTK','NYSE:DELL','NASDAQ:MSFT','NASDAQ:AMD','NASDAQ:CBRS','NASDAQ:SMCI','NYSE:CLS','NASDAQ:MU','NASDAQ:WDC','NASDAQ:STX','NASDAQ:SNDK','NASDAQ:AMKR','NYSE:GLW','NYSE:FN','NYSE:CIEN','NASDAQ:CRDO','NASDAQ:JEWL','NYSE:HUN','NYSE:ASIX','NYSE:WLK','NYSE:CE','NYSE:LYB','NYSE:VRT','NYSE:ETN','NYSE:MOD','NYSE:JCI','NASDAQ:ON','NASDAQ:POWI','NASDAQ:VICR','NASDAQ:MPWR','NASDAQ:VNET','NASDAQ:EQIX','NASDAQ:DGXX','NASDAQ:NBIS','NASDAQ:CRWV','NASDAQ:IREN','NASDAQ:APLD'];

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

const current = JSON.parse(r);
const present = target.filter(t => current.includes(t));
const missing = target.filter(t => !current.includes(t));

console.log('Total visible:', current.length);
console.log('Present:', present.length + '/' + target.length);
if (missing.length > 0) {
  console.log('Missing (' + missing.length + '):');
  missing.forEach(s => console.log('  ' + s));
} else {
  console.log('ALL PRESENT!');
}

process.exit(0);
