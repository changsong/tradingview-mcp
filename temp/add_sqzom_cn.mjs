import { evaluate } from '../src/connection.js';

const studies = await evaluate(`(function(){
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    if (chart && typeof chart.getAllStudies === 'function') {
      return chart.getAllStudies().map(function(s){ return {id: s.id, name: s.name, visible: s.visible}; });
    }
  } catch(e) { return 'err:' + e.message; }
  return null;
})()`);
console.log('STUDIES:', JSON.stringify(studies, null, 2));

// Try createStudy by saved script name
const r1 = await evaluate(`(function(){
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    chart.createStudy('A Share SQZMOM PRO v27 (Daily)', false, false, []);
    return 'ok';
  } catch(e) { return 'err:' + e.message; }
})()`);
console.log('ADD v27:', r1);
await new Promise(r => setTimeout(r, 3000));

const studies2 = await evaluate(`(function(){
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    return chart.getAllStudies().map(function(s){ return {id: s.id, name: s.name}; });
  } catch(e) { return 'err:' + e.message; }
  return null;
})()`);
console.log('STUDIES AFTER:', JSON.stringify(studies2, null, 2));

process.exit(0);
