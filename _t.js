const fs = require('fs');
const wl = fs.readFileSync('watchlist/cn_selected.txt','utf8').split(',').map(s=>s.trim()).filter(Boolean);
const wlSet = new Set(wl);
for (const fn of ['watchlist/cn_combined_signals.md','watchlist/cn_news_signals.md','watchlist/cn_tech_signals.md','reports/2026-08-30/cn_combined_signals.md','reports/2026-08-30/cn_tech_signals.md','reports/2026-08-30/cn_news_signals.md']) {
  try {
    const t = fs.readFileSync(fn,'utf8');
    const syms = new Set();
    const re = /(SSE|SZSE):\d{6}/g; let m;
    while((m=re.exec(t))) syms.add(m[0]);
    const missing = [...wlSet].filter(s=>!syms.has(s));
    console.log(fn, '-> 覆盖:', syms.size, ' 缺失:', missing.length);
  } catch(e){ console.log(fn, '-> 不存在'); }
}
