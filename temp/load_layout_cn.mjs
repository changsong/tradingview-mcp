import { evaluate } from '../src/connection.js';

const r = await evaluate(`(function(){
  try {
    window.TradingViewApi.loadChartFromServer('175795030');
    return 'load called';
  } catch(e) { return 'err:' + e.message; }
})()`);
console.log('LOAD:', r);
await new Promise(r => setTimeout(r, 15000));

const state = await evaluate(`(function(){
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    var out = { symbol: chart.symbol(), resolution: chart.chart().resolution(), studies: chart.getAllStudies().map(function(s){return {id:s.id, name:s.name};}) };
    return out;
  } catch(e) { return 'err:' + e.message; }
  return null;
})()`);
console.log('STATE:', JSON.stringify(state, null, 2));
process.exit(0);
