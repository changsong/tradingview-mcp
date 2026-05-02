/**
 * Render the technical analysis report from collected raw data
 * Uses the probability scores collected during analysis run
 */

// Raw scores from the completed analysis run
const rawResults = [
  { symbol: 'SSE:600236',  probability: 0,  action: 'No Trade', tradeType: '-',       chaseOK: 'NO',  trendAlignment: 1.00, sqzmom: 'GO', rsiD1: null, note: '数据获取失败' },
  { symbol: 'SSE:600531',  probability: 69, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 0.50, sqzmom: 'GO', rsiD1: 58 },
  { symbol: 'SSE:601138',  probability: 64, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 0.75, sqzmom: 'GO', rsiD1: 54 },
  { symbol: 'SSE:603019',  probability: 67, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 0.50, sqzmom: 'GO', rsiD1: 56 },
  { symbol: 'SSE:603025',  probability: 65, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 53 },
  { symbol: 'SSE:603062',  probability: 82, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 62 },
  { symbol: 'SSE:603083',  probability: 72, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 58 },
  { symbol: 'SSE:603638',  probability: 69, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 55 },
  { symbol: 'SSE:605599',  probability: 30, action: 'No Trade', tradeType: '-',       chaseOK: 'NO',  trendAlignment: 0.00, sqzmom: 'GO', rsiD1: 45, note: '趋势未对齐，分歧明显' },
  { symbol: 'SZSE:000657', probability: 72, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 61 },
  { symbol: 'SZSE:000682', probability: 66, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 0.75, sqzmom: 'GO', rsiD1: 52 },
  { symbol: 'SZSE:002281', probability: 65, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 0.75, sqzmom: 'GO', rsiD1: 53 },
  { symbol: 'SZSE:002371', probability: 77, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 60 },
  { symbol: 'SZSE:002475', probability: 0,  action: 'No Trade', tradeType: '-',       chaseOK: 'NO',  trendAlignment: 1.00, sqzmom: 'GO', rsiD1: null, note: '数据获取失败' },
  { symbol: 'SZSE:002487', probability: 65, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 54 },
  { symbol: 'SZSE:002588', probability: 69, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 57 },
  { symbol: 'SZSE:300037', probability: 87, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 64 },
  { symbol: 'SZSE:300357', probability: 42, action: 'No Trade', tradeType: '-',       chaseOK: 'NO',  trendAlignment: 0.00, sqzmom: 'GO', rsiD1: 42, note: '短期趋势破位，SQZMOM尚未恢复' },
  { symbol: 'SZSE:300458', probability: 50, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 0.50, sqzmom: 'GO', rsiD1: 48 },
  { symbol: 'SZSE:300577', probability: 71, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 0.75, sqzmom: 'GO', rsiD1: 59 },
  { symbol: 'SZSE:300661', probability: 77, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 61 },
  { symbol: 'SZSE:300750', probability: 60, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 50 },
  { symbol: 'SZSE:300866', probability: 57, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 52 },
  { symbol: 'SZSE:300870', probability: 72, action: 'Long',     tradeType: '突破型',   chaseOK: 'YES', trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 60 },
  { symbol: 'SZSE:301345', probability: 66, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 0.75, sqzmom: 'GO', rsiD1: 55 },
  { symbol: 'SZSE:301529', probability: 57, action: 'Long',     tradeType: '回调低吸', chaseOK: 'NO',  trendAlignment: 1.00, sqzmom: 'GO', rsiD1: 53 },
];

// ─── Now get OHLCV summary for top stocks to get actual TA detail ─────────────
import { execSync } from 'child_process';
const CLI = 'node src/cli/index.js';

function cli(cmd) {
  try { return JSON.parse(execSync(`${CLI} ${cmd}`, { encoding: 'utf8', cwd: process.cwd() })); }
  catch { return null; }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

const LINE  = '═'.repeat(90);
const DLINE = '─'.repeat(90);

function pct(v) { return v >= 0 ? `+${v.toFixed(2)}%` : `${v.toFixed(2)}%`; }

async function fetchTopDetail(symbols) {
  const detail = {};
  for (const sym of symbols) {
    cli(`symbol ${sym}`);
    await sleep(3000);
    cli('timeframe D');
    await sleep(2500);
    const d = cli('ohlcv -n 60 -s');
    if (d?.success) detail[sym] = d;
    cli('timeframe 60');
    await sleep(2500);
    const h1 = cli('ohlcv -n 60 -s');
    if (h1?.success) detail[sym + '_1H'] = h1;
    await sleep(500);
  }
  return detail;
}

async function main() {
  const sorted = [...rawResults].sort((a, b) => b.probability - a.probability);
  const longs  = sorted.filter(r => r.action === 'Long');
  const noTrade = sorted.filter(r => r.action !== 'Long');

  // Fetch OHLCV detail for top 8 Long candidates
  const top8 = longs.slice(0, 8).map(r => r.symbol);
  console.log(`\n获取 Top ${top8.length} 只股票的日线+1H 详细数据...\n`);
  const detail = await fetchTopDetail(top8);

  // ══════════════════════════════════════════════════════════════
  console.log(`\n${LINE}`);
  console.log('  📈  A股多时间框架技术分析报告  ——  趋势/动能/波动/量价/结构');
  console.log(`  分析时间: ${new Date().toLocaleString('zh-CN',{timeZone:'Asia/Shanghai'})}`);
  console.log(`  分析标的: 26 只 SQZMOM GO 信号股票 × 4 时间框架 (1H/4H/1D/1W)`);
  console.log(`${LINE}\n`);

  // Summary ranking
  console.log('【综合概率排名 — 明日上涨概率预测】\n');
  console.log('  排名  代码              信号        概率  进度条             追涨  TF对齐率');
  console.log(`  ${DLINE.substring(0,80)}`);
  sorted.forEach((r, i) => {
    const icon = r.action === 'Long' ? '🟢' : r.action === 'Short' ? '🔴' : '⚪';
    const p = Math.max(0, Math.min(10, Math.round(r.probability / 10)));
    const bar = '▓'.repeat(p) + '░'.repeat(10 - p);
    console.log(`  #${String(i+1).padEnd(3)} ${r.symbol.padEnd(16)} ${icon}${(r.action||'-').padEnd(9)} ${String(r.probability).padStart(3)}%  [${bar}]  ${(r.chaseOK||'-').padEnd(3)}  ${((r.trendAlignment||0)*100).toFixed(0)}%`);
  });

  console.log(`\n${LINE}\n`);

  // Detailed analysis per stock (Long candidates only)
  console.log('【做多候选详细分析】\n');
  longs.forEach((r, idx) => {
    const d = detail[r.symbol];
    const h1 = detail[r.symbol + '_1H'];

    console.log(`${'─'.repeat(90)}`);
    console.log(`🟢 #${idx+1}  ${r.symbol}   明日上涨概率: ${r.probability}%  SQZMOM: ${r.sqzmom}`);
    console.log(`   信号: ${r.action}  |  类型: ${r.tradeType}  |  追涨: ${r.chaseOK}  |  TF趋势对齐: ${(r.trendAlignment*100).toFixed(0)}%`);

    // D1 stats
    if (d?.success) {
      const chg = ((d.close - d.open) / d.open * 100);
      const l5 = d.last_5_bars || [];
      const l5changes = l5.slice(1).map((b,i) => ((b.close - l5[i].close)/l5[i].close*100));
      const recentMom  = l5changes.slice(-3).reduce((s,v)=>s+v,0);
      const volTrend   = l5.length >= 3 ? (l5[l5.length-1].volume > l5[l5.length-3].volume ? '量能递增' : '量能递减') : '';
      console.log(`\n   【日线 (1D)】`);
      console.log(`   近20日: 高${d.high?.toFixed(2)} 低${d.low?.toFixed(2)} 涨幅${d.change_pct} | 最新收: ${d.close?.toFixed(2)} | 均量: ${(d.avg_volume/10000).toFixed(0)}万`);
      console.log(`   近5日K线: ${l5.map(b => b.close > b.open ? '阳' : '阴').join('')}  | 近3日动量: ${recentMom.toFixed(2)}%  ${volTrend}`);
      const lastBar = l5[l5.length-1];
      if (lastBar) {
        const shadow = (lastBar.high - lastBar.low) > 0 ? ((Math.abs(lastBar.close - lastBar.open)) / (lastBar.high - lastBar.low)) * 100 : 0;
        console.log(`   最后一根K: O=${lastBar.open} H=${lastBar.high} L=${lastBar.low} C=${lastBar.close} 实体率:${shadow.toFixed(0)}%  量:${(lastBar.volume/10000).toFixed(0)}万`);
      }
    }

    if (h1?.success) {
      console.log(`\n   【1H 短线结构】`);
      const l5h = h1.last_5_bars || [];
      const hChg = l5h.length >= 2 ? ((l5h[l5h.length-1].close - l5h[0].close)/l5h[0].close*100).toFixed(2) : '?';
      console.log(`   最近5根1H K线趋势: ${l5h.map(b=>b.close>b.open?'阳':'阴').join('')}  近5H涨跌: ${hChg}%  1H收盘: ${h1.close?.toFixed(2)}`);
    }

    // Risk/opportunity assessment
    console.log(`\n   【风险与机会】`);
    const risks = [];
    const opps  = [];

    if (r.rsiD1 > 68) risks.push(`RSI日线超买 (${r.rsiD1})，追高有回调风险`);
    if (r.rsiD1 < 45) risks.push(`RSI日线偏弱 (${r.rsiD1})，动能尚未恢复`);
    if (r.trendAlignment < 0.75) risks.push(`仅${(r.trendAlignment*100).toFixed(0)}% TF趋势对齐，多时间框架信号不一致`);
    if (d?.last_5_bars) {
      const l5 = d.last_5_bars;
      const bearCount = l5.slice(-3).filter(b=>b.close<b.open).length;
      if (bearCount >= 2) risks.push('近3日出现2根以上阴线，短期动能偏弱');
      // Volume on up-bars vs down-bars
      const upBars   = l5.filter(b=>b.close>b.open);
      const downBars = l5.filter(b=>b.close<b.open);
      const upVol    = upBars.length   ? upBars.reduce((s,b)=>s+b.volume,0)/upBars.length   : 0;
      const downVol  = downBars.length ? downBars.reduce((s,b)=>s+b.volume,0)/downBars.length : 0;
      if (upVol > downVol * 1.3) opps.push(`量价配合: 上涨日均量(${(upVol/10000).toFixed(0)}万) 明显大于下跌日均量(${(downVol/10000).toFixed(0)}万) → 主力积累`);
      else if (downVol > upVol * 1.3) risks.push(`量价背离: 下跌日成交量(${(downVol/10000).toFixed(0)}万) 大于上涨日(${(upVol/10000).toFixed(0)}万) → 注意出货迹象`);
    }
    if (r.trendAlignment >= 1.0) opps.push('全时间框架趋势对齐，方向共振最强');
    if (r.tradeType === '突破型') opps.push('突破型设置，放量则可追涨');
    if (r.sqzmom === 'GO') opps.push('SQZMOM v22 GO信号：动量压缩后释放，信号质量高');

    if (opps.length) { console.log('   ✅ 机会:'); opps.forEach(o=>console.log(`      • ${o}`)); }
    if (risks.length){ console.log('   ⚠  风险:'); risks.forEach(r=>console.log(`      • ${r}`)); }

    console.log('');
  });

  // No Trade stocks summary
  if (noTrade.length) {
    console.log(`\n${DLINE}`);
    console.log('【观望/回避股票】');
    noTrade.forEach(r => {
      console.log(`  ⚪ ${r.symbol.padEnd(16)} 概率:${r.probability}%  ${r.note || '技术信号不足，等待更明确信号'}`);
    });
  }

  // ── Final decision
  console.log(`\n${LINE}`);
  console.log('  🎯  明日交易决策 — 按概率排序');
  console.log(DLINE);
  console.log('\n  序号  代码              概率   信号类型    追涨  D1 RSI  推荐理由');
  console.log(`  ${DLINE.substring(0,80)}`);
  longs.forEach((r, i) => {
    const rsiStr = r.rsiD1 ? `RSI:${r.rsiD1}` : 'RSI:?';
    const alStr  = `TF:${(r.trendAlignment*100).toFixed(0)}%`;
    console.log(`  [${String(i+1).padEnd(2)}] ${r.symbol.padEnd(16)} ${String(r.probability).padStart(3)}%  ${r.tradeType.padEnd(10)} ${r.chaseOK.padEnd(4)} ${rsiStr.padEnd(8)} SQZMOM GO + ${alStr}`);
  });

  const top1 = longs[0];
  const top2 = longs[1];
  const top3 = longs[2];
  console.log(`\n${LINE}`);
  console.log('  ⭐  【首选推荐 Top 3 — 明日最值得关注】');
  console.log(DLINE);
  [[top1,'🥇'],[top2,'🥈'],[top3,'🥉']].filter(([r])=>r).forEach(([r, medal]) => {
    const d = detail[r.symbol];
    const note = r.tradeType === '突破型'
      ? `开盘确认放量即可追入，止损设在支撑位下方`
      : `等回调至支撑区低吸，不追高`;
    console.log(`\n  ${medal} ${r.symbol}   概率: ${r.probability}%   信号: ${r.action} / ${r.tradeType}`);
    console.log(`     SQZMOM GO + ${(r.trendAlignment*100).toFixed(0)}%时间框架趋势对齐 + D1 RSI:${r.rsiD1||'?'}`);
    if (d) console.log(`     日线最新: 收${d.close} | 近20日高${d.high} 低${d.low} | 均量${(d.avg_volume/10000).toFixed(0)}万`);
    console.log(`     操作建议: ${note}`);
    console.log(`     追涨适合: ${r.chaseOK}`);
  });
  console.log(`\n${LINE}\n`);
}

main().catch(console.error);
