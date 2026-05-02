const data = JSON.parse(require('fs').readFileSync('D:/trade_workspace/tradingview-mcp/batch_backtest_results_2026-04-18T14-07-03-472Z.json', 'utf8'));
const results = data.results || data;
const arr = Array.isArray(results) ? results : Object.values(results);
const withTrades = arr.filter(r => r.trades > 0).sort((a,b) => b.netProfit - a.netProfit);

console.log('=== 有交易的股票 (按净利润排序) ===');
withTrades.forEach((r,i) => {
  const pos = r.pricePosition26w != null ? r.pricePosition26w.toFixed(1) : 'N/A';
  const vol = r.volatility5d != null ? r.volatility5d.toFixed(1) : 'N/A';
  const surge = r.surge10d != null ? r.surge10d.toFixed(1) : 'N/A';
  console.log((i+1) + '. ' + r.symbol + ': 交易' + r.trades + '次, 胜率' + r.winRate + '%, 净利润$' + r.netProfit + ', 26周:' + pos + '%, 5日波动:' + vol + '%, 10日涨幅:' + surge + '%');
});

const profitable = withTrades.filter(r => r.netProfit > 0);
const losing = withTrades.filter(r => r.netProfit < 0);

console.log('\n=== 统计 ===');
console.log('总股票: ' + arr.length);
console.log('有交易: ' + withTrades.length);
console.log('盈利: ' + profitable.length);
console.log('亏损: ' + losing.length);
console.log('总净利润: $' + withTrades.reduce((s,r)=>s+r.netProfit,0).toFixed(0));

console.log('\n=== 亏损股票分析 ===');
losing.sort((a,b) => a.netProfit - b.netProfit).forEach(r => {
  const pos = r.pricePosition26w != null ? r.pricePosition26w.toFixed(1) : 'N/A';
  const vol = r.volatility5d != null ? r.volatility5d.toFixed(1) : 'N/A';
  console.log(r.symbol + ': 净利润$' + r.netProfit + ', 交易' + r.trades + '次, 胜率' + r.winRate + '%, 26周:' + pos + '%, 5日波动:' + vol + '%');
});

// Analyze profitable stock characteristics
if (profitable.length > 0) {
  const avgPos = profitable.filter(r => r.pricePosition26w != null).reduce((s,r) => s + r.pricePosition26w, 0) / profitable.filter(r => r.pricePosition26w != null).length;
  const avgVol = profitable.filter(r => r.volatility5d != null).reduce((s,r) => s + r.volatility5d, 0) / profitable.filter(r => r.volatility5d != null).length;
  console.log('\n=== 盈利股票平均特征 ===');
  console.log('平均26周位置: ' + avgPos.toFixed(1) + '%');
  console.log('平均5日波动: ' + avgVol.toFixed(1) + '%');
}
