import { evaluate } from '../src/connection.js';

const r = await evaluate(`(function(){
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    var studies = chart.getAllStudies();
    for (var i = 0; i < studies.length; i++) {
      var s = studies[i];
      if (/US Stock SQZMOM/i.test(s.name)) {
        chart.removeStudy(s.id);
        return 'removed ' + s.id + ' ' + s.name;
      }
    }
    return 'no us study found';
  } catch(e) { return 'err:' + e.message; }
})()`);
console.log('REMOVE:', r);
await new Promise(r => setTimeout(r, 3000));
const studies = await evaluate(`(function(){
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    return chart.getAllStudies().map(function(s){ return {id: s.id, name: s.name}; });
  } catch(e) { return 'err:' + e.message; }
})()`);
console.log('STUDIES:', JSON.stringify(studies, null, 2));
process.exit(0);
