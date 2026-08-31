import { evaluate } from '../src/connection.js';

const r = await evaluate(`(function(){
  var btns = document.querySelectorAll('button');
  var out = [];
  for (var i = 0; i < btns.length; i++) {
    var b = btns[i];
    var text = (b.textContent || '').trim();
    var aria = b.getAttribute('aria-label') || '';
    var visible = b.offsetParent !== null;
    if (visible && (text || aria)) {
      out.push({ text: text.substring(0, 60), aria: aria.substring(0, 60), cls: (b.className || '').toString().substring(0, 50) });
    }
  }
  return out;
})()`);
console.log('BUTTONS:', JSON.stringify(r, null, 2));
process.exit(0);
