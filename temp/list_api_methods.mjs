import { evaluate } from '../src/connection.js';

const r = await evaluate(`(function(){
  var out = {};
  var chart = window.TradingViewApi._activeChartWidgetWV.value();
  var keys = [];
  for (var k in chart) { if (typeof chart[k] === 'function') keys.push(k); }
  out.chartKeys = keys.sort();
  var apiKeys = [];
  for (var k2 in window.TradingViewApi) { if (typeof window.TradingViewApi[k2] === 'function') apiKeys.push(k2); }
  out.apiKeys = apiKeys.sort();
  return out;
})()`);
console.log(JSON.stringify(r, null, 2));
process.exit(0);
