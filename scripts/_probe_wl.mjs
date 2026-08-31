import { evaluate, disconnect } from '../src/connection.js';
const r = await evaluate(`(async () => {
  // Expand watchlist widget body and headers
  const widget = document.querySelector('[data-test-id-widget-type="watchlist"]');
  if (widget) {
    const body = widget.querySelector('.widgetbar-widgetbody');
    if (body) body.style.height = '500px';
    const header = widget.querySelector('.widgetHeader-X9EuSe_t');
    if (header) header.style.height = 'auto';
  }
  window.dispatchEvent(new Event('resize'));
  await new Promise(r => setTimeout(r, 2000));
  const wlBtn = document.querySelector('[data-name="watchlists-button"]');
  return {
    wlBtn: !!wlBtn,
    wlText: wlBtn ? wlBtn.textContent.trim() : null,
    widgetBodyH: widget?.querySelector('.widgetbar-widgetbody')?.offsetHeight,
    widgetBodyChildren: widget?.querySelector('.widgetbar-widgetbody')?.children.length
  };
})()`, { awaitPromise: true });
console.log(JSON.stringify(r, null, 2));
await disconnect();
