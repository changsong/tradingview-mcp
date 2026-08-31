import { evaluate } from '../src/connection.js';

// Ensure Pine editor open
const opened = await evaluate(`(function(){
  var btn = document.querySelector('[aria-label="Pine"]') || document.querySelector('[data-name="pine-dialog-button"]');
  if (btn) { btn.click(); return true; }
  return false;
})()`);
console.log('pine btn:', opened);
await new Promise(r => setTimeout(r, 1500));

// List pine-related buttons (visible)
const btns = await evaluate(`(function(){
  var btns = document.querySelectorAll('button');
  var out = [];
  for (var i = 0; i < btns.length; i++) {
    var b = btns[i];
    var text = (b.textContent || '').trim();
    if (b.offsetParent === null) continue;
    if (/添加到图表|保存|更新|compile|编译|add to chart|update on chart|save/i.test(text)) {
      out.push({ text: text.substring(0, 40), cls: (b.className || '').toString().substring(0, 60), visible: b.offsetParent !== null });
    }
  }
  return out;
})()`);
console.log('PINE BTNS:', JSON.stringify(btns, null, 2));

// Click "添加到图表" if present
const clicked = await evaluate(`(function(){
  var btns = document.querySelectorAll('button');
  for (var i = 0; i < btns.length; i++) {
    var b = btns[i];
    var text = (b.textContent || '').trim();
    if (b.offsetParent === null) continue;
    if (/^添加到图表/.test(text) || /^Add to chart$/i.test(text) || /^Update on chart$/i.test(text)) {
      b.click();
      return text.substring(0, 40);
    }
  }
  return null;
})()`);
console.log('CLICKED:', clicked);
await new Promise(r => setTimeout(r, 10000));

const studies = await evaluate(`(function(){
  try {
    var chart = window.TradingViewApi._activeChartWidgetWV.value();
    return chart.getAllStudies().map(function(s){ return {id: s.id, name: s.name}; });
  } catch(e) { return 'err:' + e.message; }
})()`);
console.log('STUDIES:', JSON.stringify(studies, null, 2));
process.exit(0);
