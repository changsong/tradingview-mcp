import CDP from 'chrome-remote-interface';

const targets = await CDP.List({ port: 9222 });
const chart = targets.find(t => t.type === 'page' && /tradingview\.com\/chart/i.test(t.url));
console.log('chart target:', chart ? chart.id : 'NONE');
const tabbed = targets.filter(t => t.type === 'page' && /tabbed-window/i.test(t.url));
console.log('tabbed count:', tabbed.length);

const target = chart || tabbed[0];
if (!target) { console.log('no target'); process.exit(1); }

const client = await CDP({ target: target, port: 9222 });
await client.Page.enable();
await client.Runtime.enable();
// navigate to chart URL
await client.Page.navigate({ url: 'https://www.tradingview.com/chart/' });
await new Promise(r => setTimeout(r, 8000));
const res = await client.Runtime.evaluate({
  expression: '({ u: location.href, hasApi: !!window.TradingViewApi, hasWidget: !!(window.TradingViewApi && window.TradingViewApi._activeChartWidgetWV) })',
  returnByValue: true
});
console.log(JSON.stringify(res.result?.value));
client.close();
process.exit(0);
