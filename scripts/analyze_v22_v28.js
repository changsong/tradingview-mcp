import { readFileSync } from 'fs';

const dir = './reports/2026-05-08';
const versions = ['v22','v23','v24','v25','v26','v27','v28'];

const data = {};
for (const v of versions) {
  const fp = `${dir}/${v}_batch_backtest.json`;
  try {
    data[v] = JSON.parse(readFileSync(fp, 'utf8'));
  } catch (e) {
    console.log(`${v}: READ ERROR — ${e.message}`);
  }
}

// ===== Per-version summary =====
console.log('='.repeat(90));
console.log('VERSION COMPARISON — Summary Metrics');
console.log('='.repeat(90));
console.log(
  'Ver   Trades   Wins   Losses   WR%    AvgWin%  AvgLoss%  WinDays  LossDays  Stocks'
);

for (const v of versions) {
  const d = data[v];
  if (!d) continue;
  const stocks = d.per_symbol || [];
  const netSums = stocks.reduce((s, x) => s + parseFloat(x.net_pct || 0), 0);
  const avgNet = stocks.length > 0 ? (netSums / stocks.length).toFixed(2) : '0.00';
  const wr = d.overall_win_rate != null ? Number(d.overall_win_rate).toFixed(1) : '-';
  const awp = d.avg_win_pct != null ? Number(d.avg_win_pct).toFixed(2) : '-';
  const alp = d.avg_loss_pct != null ? Number(d.avg_loss_pct).toFixed(2) : '-';
  const awd = d.avg_win_days != null ? Number(d.avg_win_days).toFixed(1) : '-';
  const ald = d.avg_loss_days != null ? Number(d.avg_loss_days).toFixed(1) : '-';
  console.log(
    `${v}   ${String(d.total_trades).padStart(5)}   ${String(d.total_wins).padStart(4)}   ${String(d.total_losses).padStart(5)}   ${String(wr).padStart(5)}  ${String(awp).padStart(7)}  ${String(alp).padStart(8)}  ${String(awd).padStart(7)}  ${String(ald).padStart(8)}  ${String(avgNet).padStart(7)}  ${d.symbols_with_trades}`
  );
}

// ===== Top 10 net% stocks per version =====
console.log('\n' + '='.repeat(90));
console.log('TOP 10 STOCKS BY NET% — Per Version');
console.log('='.repeat(90));

for (const v of versions) {
  const d = data[v];
  if (!d) continue;
  const sorted = [...(d.per_symbol || [])].sort((a,b) => {
    const na = parseFloat(a.net_pct || 0);
    const nb = parseFloat(b.net_pct || 0);
    return nb - na;
  });
  console.log(`\n--- ${v} ---`);
  sorted.slice(0, 10).forEach((s, i) => {
    console.log(`  ${String(i+1).padStart(2)}. ${s.symbol.padEnd(16)} T:${String(s.trades).padStart(3)}  WR:${String(s.win_rate).padStart(6)}  PF:${String(s.pf).padStart(6)}  Net:${s.net_pct}`);
  });
}

// ===== Consistent losers (across all versions) =====
console.log('\n' + '='.repeat(90));
console.log('CONSISTENT LOSERS (negative net% in all 7 versions)');
console.log('='.repeat(90));

const allSymbols = new Set();
for (const v of versions) {
  if (!data[v]) continue;
  (data[v].per_symbol || []).forEach(s => allSymbols.add(s.symbol));
}

const losers = [];
for (const sym of allSymbols) {
  const recs = [];
  for (const v of versions) {
    if (!data[v]) continue;
    const s = (data[v].per_symbol || []).find(x => x.symbol === sym);
    if (s) recs.push({ v, net: parseFloat(s.net_pct || 0), tr: s.trades });
  }
  if (recs.length >= 7 && recs.every(r => r.net < 0)) {
    const avgNet = (recs.reduce((s,r) => s + r.net, 0) / recs.length).toFixed(2);
    const avgTr = Math.round(recs.reduce((s,r) => s + r.tr, 0) / recs.length);
    losers.push({ sym, avgNet, avgTr, details: recs.map(r => `${r.v}:${r.net.toFixed(2)}`).join(' ') });
  }
}
losers.sort((a,b) => parseFloat(a.avgNet) - parseFloat(b.avgNet));
losers.forEach(l => {
  console.log(`  ${l.sym.padEnd(16)} avgNet:${String(l.avgNet).padStart(6)}%  avgTrades:${l.avgTr}  [${l.details}]`);
});
console.log(`  Total: ${losers.length} stocks`);

// ===== Consistent winners =====
console.log('\n' + '='.repeat(90));
console.log('CONSISTENT WINNERS (positive net% in all 7 versions)');
console.log('='.repeat(90));

const winners = [];
for (const sym of allSymbols) {
  const recs = [];
  for (const v of versions) {
    if (!data[v]) continue;
    const s = (data[v].per_symbol || []).find(x => x.symbol === sym);
    if (s) recs.push({ v, net: parseFloat(s.net_pct || 0), tr: s.trades });
  }
  if (recs.length >= 7 && recs.every(r => r.net > 0)) {
    const avgNet = (recs.reduce((s,r) => s + r.net, 0) / recs.length).toFixed(2);
    const avgTr = Math.round(recs.reduce((s,r) => s + r.tr, 0) / recs.length);
    winners.push({ sym, avgNet, avgTr, details: recs.map(r => `${r.v}:${r.net.toFixed(2)}`).join(' ') });
  }
}
winners.sort((a,b) => parseFloat(b.avgNet) - parseFloat(a.avgNet));
winners.forEach(l => {
  console.log(`  ${l.sym.padEnd(16)} avgNet:${String(l.avgNet).padStart(6)}%  avgTrades:${l.avgTr}  [${l.details}]`);
});
console.log(`  Total: ${winners.length} stocks`);

// ===== Loss exit reasons =====
console.log('\n' + '='.repeat(90));
console.log('LOSS EXIT REASONS — Per Version');
console.log('='.repeat(90));

for (const v of versions) {
  const d = data[v];
  if (!d || !d.loss_exit_reasons) continue;
  const total = Object.values(d.loss_exit_reasons).reduce((a,b) => a + b, 0);
  console.log(`\n${v} (${total} total losses):`);
  const sorted = Object.entries(d.loss_exit_reasons).sort((a,b) => b[1] - a[1]);
  sorted.forEach(([reason, count]) => {
    const pct = (count / total * 100).toFixed(1);
    console.log(`  ${reason.padEnd(35)} ${String(count).padStart(4)} (${pct}%)`);
  });
}

// ===== Win exit reasons =====
console.log('\n' + '='.repeat(90));
console.log('WIN EXIT REASONS — Per Version');
console.log('='.repeat(90));

for (const v of versions) {
  const d = data[v];
  if (!d || !d.win_exit_reasons) continue;
  const total = Object.values(d.win_exit_reasons).reduce((a,b) => a + b, 0);
  console.log(`\n${v} (${total} total wins):`);
  const sorted = Object.entries(d.win_exit_reasons).sort((a,b) => b[1] - a[1]);
  sorted.forEach(([reason, count]) => {
    const pct = (count / total * 100).toFixed(1);
    console.log(`  ${reason.padEnd(35)} ${String(count).padStart(4)} (${pct}%)`);
  });
}

// ===== Loss size distribution =====
console.log('\n' + '='.repeat(90));
console.log('LOSS SIZE DISTRIBUTION');
console.log('='.repeat(90));

for (const v of versions) {
  const d = data[v];
  if (!d || !d.loss_size_distribution) continue;
  console.log(`\n${v}: ${JSON.stringify(d.loss_size_distribution)}`);
}

// ===== Rank by composite score =====
console.log('\n' + '='.repeat(90));
console.log('COMPOSITE RANKING (higher = better)');
console.log('='.repeat(90));
console.log('Score = WR% × 0.35 + AvgNet% × 100 × 0.35 + Trades × 0.005 + (AvgWin/AvgLoss) × 0.1');
console.log('');

const scores = versions.map(v => {
  const d = data[v];
  if (!d) return { v, score: 0 };
  const stocks = d.per_symbol || [];
  const avgNet = stocks.reduce((s, x) => s + parseFloat(x.net_pct || 0), 0) / Math.max(1, stocks.length);
  const wr = Number(d.overall_win_rate) || 0;
  const aw = Number(d.avg_win_pct) || 0;
  const al = Math.abs(Number(d.avg_loss_pct) || 1);
  const ratio = al > 0 ? aw / al : 0;
  const score = wr * 0.35 + avgNet * 100 * 0.35 + (d.total_trades * 0.005) + ratio * 0.1;
  return { v, score: score.toFixed(2), wr: wr.toFixed(1), avgNet: avgNet.toFixed(2), trades: d.total_trades, ratio: ratio.toFixed(2) };
});

scores.sort((a,b) => parseFloat(b.score) - parseFloat(a.score));
scores.forEach((s, i) => {
  console.log(`${String(i+1).padStart(2)}. ${s.v}  Score:${s.score}  WR:${s.wr}%  AvgNet:${s.avgNet}%  Trades:${s.trades}  W/L:${s.ratio}`);
});
