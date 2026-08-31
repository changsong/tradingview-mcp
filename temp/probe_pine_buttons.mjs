import { evaluate, getClient } from '../src/connection.js';

// Ensure pine editor open
try {
  await evaluate(`(function(){
    var bwb = window.TradingView && window.TradingView.bottomWidgetBar;
    if (!bwb) return;
    if (typeof bwb.activateScriptEditorTab === 'function') bwb.activateScriptEditorTab();
    else if (typeof bwb.showWidget === 'function') bwb.showWidget('pine-editor');
  })()`);
  await new Promise(r => setTimeout(r, 1500));
} catch (e) { console.error('open editor fail', e.message); }

const buttons = await evaluate(`(function(){
  var out = [];
  var btns = document.querySelectorAll('button');
  for (var i = 0; i < btns.length; i++) {
    var text = btns[i].textContent.trim();
    if (text && btns[i].offsetParent !== null) {
      out.push(text.slice(0, 60) + ' | class=' + (btns[i].className || '').toString().slice(0, 60));
    }
  }
  return out;
})()`);
console.log('VISIBLE BUTTONS:');
console.log(JSON.stringify(buttons, null, 2));

// Also check if a dialog is open
const dialog = await evaluate(`(function(){
  var dlg = document.querySelector('[role="dialog"], .dialog, [data-name="pine-save-dialog"]');
  return dlg ? (dlg.textContent || '').slice(0, 300) : null;
})()`);
console.log('DIALOG:', dialog);

// get studies
const studies = await evaluate(`(function(){
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    if (chart && typeof chart.getAllStudies === 'function') {
      return chart.getAllStudies().map(function(s){ return {id: s.id, name: s.name}; });
    }
  } catch(e) { return 'err:' + e.message; }
  return null;
})()`);
console.log('STUDIES:', JSON.stringify(studies));

process.exit(0);

