import { evaluate } from '../src/connection.js';

const r = await evaluate(`(function(){
  var chart = window.TradingViewApi._activeChartWidgetWV.value();
  var own = [];
  for (var k in chart) { own.push(k); }
  return { ownKeys: own.sort(), protoKeys: Object.getOwnPropertyNames(Object.getPrototypeOf(chart)).sort() };
})()`);
console.log(JSON.stringify(r, null, 2));
process.exit(0);
