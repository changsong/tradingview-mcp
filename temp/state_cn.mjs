import { evaluate } from '../src/connection.js';

const state = await evaluate(`(function(){
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    var out = {};
    try { out.symbol = chart.symbol(); } catch(e) { out.symbol = 'err'; }
    try { out.resolution = chart.chart ? chart.chart().resolution() : 'n/a'; } catch(e) { out.resolution = 'err:' + e.message; }
    try { out.studies = chart.getAllStudies().map(function(s){return {id:s.id, name:s.name};}); } catch(e) { out.studies = 'err:' + e.message; }
    return out;
  } catch(e) { return 'err:' + e.message; }
  return null;
})()`);
console.log('STATE:', JSON.stringify(state, null, 2));
process.exit(0);
