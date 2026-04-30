#!/usr/bin/env node
/**
 * 多周期技术面量化分析 → 明日最优入场
 *
 * 时间框架: 1W(25%) · 1D(40%) · 4H(25%) · 1H(10%)
 * 指标体系:
 *   趋势结构  — EMA5/10/20/50/200 排列, HH/HL, EMA200方向
 *   动能系统  — RSI(14), MACD(12,26,9), 柱量变化率
 *   波动压缩  — Squeeze(BB vs KC), BB宽度, ATR%
 *   成交量行为 — 量比, 量能趋势, OBV方向, 量价共振
 *   关键结构位 — 52周高/低, 枢轴高低点, EMA偏离
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const CLI      = 'node src/cli/index.js';
const SYM_FILE = './watchlist/cn_selected.txt';
const OUT_MD   = './watchlist/cn_tech_signals.md';

function run(cmd, ms = 12000) {
  try {
    return JSON.parse(execSync(`${CLI} ${cmd}`, { encoding: 'utf8', cwd: process.cwd(), timeout: ms }));
  } catch { return null; }
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ═══════════════════════════════════════════════════════════════
//  Indicator Library
// ═══════════════════════════════════════════════════════════════

function ema(arr, n) {
  if (arr.length === 0) return [];
  const k = 2 / (n + 1), out = [arr[0]];
  for (let i = 1; i < arr.length; i++) out.push(arr[i] * k + out[i-1] * (1 - k));
  return out;
}

function sma(arr, n) {
  const s = arr.slice(-n);
  return s.reduce((a, b) => a + b, 0) / s.length;
}

function stdev(arr, n) {
  const s = arr.slice(-n), m = s.reduce((a, b) => a + b, 0) / n;
  return Math.sqrt(s.reduce((a, v) => a + (v - m) ** 2, 0) / n);
}

function rsiCalc(C, n = 14) {
  if (C.length < n + 2) return 50;
  let ag = 0, al = 0;
  for (let i = 1; i <= n; i++) { const d = C[i] - C[i-1]; d > 0 ? ag += d : al -= d; }
  ag /= n; al /= n;
  for (let i = n + 1; i < C.length; i++) {
    const d = C[i] - C[i-1];
    ag = (ag * (n-1) + Math.max(0, d)) / n;
    al = (al * (n-1) + Math.max(0, -d)) / n;
  }
  return al === 0 ? 100 : 100 - 100 / (1 + ag / al);
}

function macdCalc(C, fast = 12, slow = 26, sig = 9) {
  if (C.length < slow + sig + 2) return { hist: 0, turning: false, histRising: false, aboveZero: false };
  const ef = ema(C, fast), es = ema(C, slow);
  const diff = ef.map((v, i) => v - es[i]);
  const sigLine = ema(diff.slice(slow - 1), sig);
  const n = sigLine.length;
  const h1 = diff[diff.length - 1] - sigLine[n - 1];
  const h2 = diff[diff.length - 2] - sigLine[n - 2];
  return {
    hist: Math.round(h1 * 10000) / 10000,
    turning:    h1 > 0 && h2 <= 0,
    histRising: h1 > h2,
    aboveZero:  h1 > 0,
  };
}

function atrCalc(H, L, C, n = 14) {
  const trs = [];
  for (let i = 1; i < C.length; i++)
    trs.push(Math.max(H[i]-L[i], Math.abs(H[i]-C[i-1]), Math.abs(L[i]-C[i-1])));
  return sma(trs, Math.min(n, trs.length));
}

function bbandsCalc(C, n = 20, mult = 2) {
  const mid = sma(C, n), sd = stdev(C, n);
  return { upper: mid + mult*sd, mid, lower: mid - mult*sd, bw: (4*sd)/mid };
}

function keltnerCalc(C, H, L, n = 20, mult = 1.5) {
  const mid = ema(C, n).pop();
  const a   = atrCalc(H, L, C, n);
  return { upper: mid + mult*a, mid, lower: mid - mult*a };
}

function obvCalc(C, V) {
  let o = 0; const arr = [0];
  for (let i = 1; i < C.length; i++) {
    o += C[i] > C[i-1] ? V[i] : C[i] < C[i-1] ? -V[i] : 0;
    arr.push(o);
  }
  return arr;
}

// 局部高低点 (用于 HH/HL 判断)
function pivotHL(H, L, left = 3) {
  const PHs = [], PLs = [];
  for (let i = left; i < H.length - left; i++) {
    const ph = H.slice(i-left,i).every(v => v < H[i]) && H.slice(i+1,i+left+1).every(v => v < H[i]);
    const pl = L.slice(i-left,i).every(v => v > L[i]) && L.slice(i+1,i+left+1).every(v => v > L[i]);
    if (ph) PHs.push({ i, p: H[i] });
    if (pl) PLs.push({ i, p: L[i] });
  }
  return { PHs, PLs };
}

// ═══════════════════════════════════════════════════════════════
//  Single-Timeframe Scorer
// ═══════════════════════════════════════════════════════════════

function scoreTF(bars, tfKey) {
  if (!bars || bars.length < 20) return null;
  const C = bars.map(b => b.close);
  const H = bars.map(b => b.high);
  const L = bars.map(b => b.low);
  const V = bars.map(b => b.volume || 0);
  const n = C.length;
  const price = C[n-1];

  // ── EMAs ──
  const e5   = ema(C, 5);
  const e20  = ema(C, 20);
  const e50  = n >= 50  ? ema(C, 50)  : null;
  const e200 = n >= 150 ? ema(C, 200) : null;
  const EMA5   = e5[n-1];
  const EMA20  = e20[n-1];
  const EMA50  = e50  ? e50[n-1]  : null;
  const EMA200 = e200 ? e200[n-1] : null;

  const dist20Pct = ((price - EMA20) / EMA20) * 100;
  const bullEMA   = price > EMA5 && EMA5 > EMA20 && (EMA50 === null || EMA20 > EMA50);
  const aboveEMA200 = EMA200 ? price > EMA200 : true; // default true if insufficient bars
  const ema200Rising = e200 ? e200[n-1] > e200[Math.max(0, n-20)] : true;

  // ── HH/HL Structure ──
  const { PHs, PLs } = pivotHL(H, L, 3);
  const lastPHs = PHs.slice(-3), lastPLs = PLs.slice(-3);
  const hhhl = lastPHs.length >= 2 && lastPLs.length >= 2 &&
               lastPHs[lastPHs.length-1].p > lastPHs[lastPHs.length-2].p &&
               lastPLs[lastPLs.length-1].p > lastPLs[lastPLs.length-2].p;
  const llhl = lastPHs.length >= 2 &&
               lastPHs[lastPHs.length-1].p < lastPHs[lastPHs.length-2].p;

  // ── RSI ──
  const RSI = Math.round(rsiCalc(C, 14) * 10) / 10;

  // ── MACD ──
  const MACD = macdCalc(C);

  // ── Squeeze ──
  const BB  = bbandsCalc(C, 20, 2);
  const KC  = keltnerCalc(C, H, L, 20, 1.5);
  const SQZ = C.length >= 20 && BB.upper < KC.upper && BB.lower > KC.lower;
  const ATR_VAL = atrCalc(H, L, C, 14);
  const atrPct  = (ATR_VAL / price) * 100;

  // ── Volume ──
  const hasVol = V.some(v => v > 0);
  let volRatio = 1, volTrend = 'stable', obvDir = 'flat';
  if (hasVol && n >= 20) {
    const avg20 = sma(V, 20) || 1;
    volRatio = V[n-1] / avg20;
    const avg5  = sma(V.slice(-5), 5);
    const p5    = sma(V.slice(-10, -5), 5);
    volTrend = avg5 > p5 * 1.2 ? 'expanding' : avg5 < p5 * 0.8 ? 'contracting' : 'stable';
    const OBV = obvCalc(C, V);
    const obvEma = ema(OBV, 10);
    obvDir = OBV[n-1] > obvEma[n-1] ? 'up' : 'down';
  }

  // ── 52W High/Low proximity ──
  const lookH = Math.min(n, 250);
  const high52 = Math.max(...H.slice(-lookH));
  const low52  = Math.min(...L.slice(-lookH));
  const nearHigh52 = (high52 - price) / price < 0.04;
  const nearLow52  = (price - low52)  / price < 0.04;

  // ── Key resistance/support from pivot ──
  const resistLevels = PHs.filter(p => p.p > price).sort((a,b) => a.p - b.p);
  const supportLevels = PLs.filter(p => p.p < price).sort((a,b) => b.p - a.p);
  const nearestR = resistLevels[0];
  const nearestS = supportLevels[0];
  const nearResist = nearestR && (nearestR.p - price) / price < 0.04;
  const nearSupport = nearestS && (price - nearestS.p) / price < 0.04;

  // ═══════════════════════════════
  //  SCORING  (total max ~100)
  // ═══════════════════════════════
  let score = 0;
  const notes = [];

  // -- Trend (±35) --
  if (bullEMA)       { score += 12; notes.push('EMA多头排列↑(+12)'); }
  if (aboveEMA200)   { score += 8;  notes.push('站上EMA200(+8)'); }
  else               { score -= 8;  notes.push('EMA200下方(-8)'); }
  if (ema200Rising)  { score += 4;  notes.push('EMA200上行中(+4)'); }
  if (hhhl)          { score += 10; notes.push('HH/HL上升结构(+10)★'); }
  if (llhl)          { score -= 8;  notes.push('LH下降结构(-8)'); }
  if (Math.abs(dist20Pct) < 3)   { score += 5; notes.push(`EMA20附近低吸区(${dist20Pct.toFixed(1)}%,+5)★`); }
  else if (dist20Pct > 12)       { score -= 10; notes.push(`EMA20偏离${dist20Pct.toFixed(1)}%过热(-10)`); }

  // -- Momentum (±30) --
  if (RSI > 50 && RSI < 72)    { score += 8;  notes.push(`RSI${RSI}健康区(+8)`); }
  else if (RSI < 35)           { score += 6;  notes.push(`RSI${RSI}超卖反弹(+6)`); }
  else if (RSI > 80)           { score -= 12; notes.push(`RSI${RSI}超买危险(-12)`); }
  if (MACD.turning)            { score += 12; notes.push('MACD金叉/柱转正(+12)★★'); }
  else if (MACD.aboveZero && MACD.histRising) { score += 8; notes.push('MACD柱正且加速(+8)'); }
  else if (MACD.aboveZero)     { score += 4;  notes.push('MACD柱正(+4)'); }
  else if (!MACD.turning)      { score -= 6;  notes.push('MACD柱负(-6)'); }

  // -- Squeeze/Volatility (±20) --
  if (SQZ)               { score += 18; notes.push('Squeeze压缩！爆发前(+18)★★★'); }
  else if (BB.bw < 0.04) { score += 6;  notes.push('BB收窄蓄能(+6)'); }
  if (atrPct < 1.5)      { score += 3;  notes.push(`ATR低${atrPct.toFixed(1)}%低风险(+3)`); }
  else if (atrPct > 4.5) { score -= 8;  notes.push(`ATR高${atrPct.toFixed(1)}%高风险(-8)`); }

  // -- Volume (±15) --
  if (volTrend === 'expanding')  { score += 8; notes.push('量能持续扩张(+8)'); }
  if (volRatio > 1.5)            { score += 5; notes.push(`量比${volRatio.toFixed(1)}x放量(+5)`); }
  else if (volRatio < 0.5)       { score -= 5; notes.push('显著缩量(-5)'); }
  if (obvDir === 'up')           { score += 4; notes.push('OBV上行(资金流入+4)'); }

  // -- Structure (±12) --
  if (nearSupport)  { score += 8;  notes.push('靠近支撑位低吸(+8)★'); }
  if (nearResist)   { score -= 8;  notes.push('靠近压力位风险(-8)'); }
  if (nearLow52 && !nearHigh52)  { score += 5; notes.push('年内低位区域(+5)'); }
  if (nearHigh52)   { score -= 4;  notes.push('年内高位附近(-4)'); }

  return {
    score,
    notes,
    details: {
      price,
      EMA5: r2(EMA5), EMA20: r2(EMA20), EMA50: EMA50 ? r2(EMA50) : null,
      EMA200: EMA200 ? r2(EMA200) : null,
      dist20Pct: r1(dist20Pct),
      bullEMA, aboveEMA200, ema200Rising, hhhl, llhl,
      RSI,
      MACD,
      SQZ, bbWidth: r1(BB.bw * 100), atrPct: r1(atrPct),
      volRatio: r1(volRatio), volTrend, obvDir,
      nearHigh52, nearLow52, nearResist, nearSupport,
      resistPrice: nearestR ? r2(nearestR.p) : null,
      supportPrice: nearestS ? r2(nearestS.p) : null,
    },
    tf: tfKey,
  };
}

function r1(v) { return Math.round(v * 10) / 10; }
function r2(v) { return Math.round(v * 100) / 100; }

// ═══════════════════════════════════════════════════════════════
//  Composite + Signal
// ═══════════════════════════════════════════════════════════════

const TF_WEIGHT = { '1W': 0.25, '1D': 0.40, '4H': 0.25, '1H': 0.10 };

function composite(tfs) {
  let s = 0, w = 0;
  for (const [tf, res] of Object.entries(tfs)) {
    if (res && TF_WEIGHT[tf]) { s += res.score * TF_WEIGHT[tf]; w += TF_WEIGHT[tf]; }
  }
  return w ? Math.round(s / w * 10) / 10 : 0;
}

function genSignal(tfs, sqzmom) {
  const D = tfs['1D'], W = tfs['1W'], H4 = tfs['4H'], H1 = tfs['1H'];
  const d = D?.details, w = W?.details;
  if (!d) return { bias: '观望', type: '-', chaseOK: 'NO', risks: [] };

  const cs = composite(tfs);
  const dailyNotes = D?.notes || [];

  // -- Bias --
  let bias = '观望';
  if (cs >= 20)       bias = '强看多';
  else if (cs >= 8)   bias = '看多';
  else if (cs >= -5)  bias = '观望';
  else if (cs >= -20) bias = '看空';
  else                bias = '强看空';

  // -- Type --
  let type = '-';
  const hasSqz    = dailyNotes.some(n => n.includes('Squeeze压缩'));
  const macdTurn  = d.MACD.turning;
  const nearS     = d.nearSupport;
  const nearR     = d.nearResist;
  const hhhl      = d.hhhl;
  const overDist  = d.dist20Pct > 8;

  if (hasSqz && bias.includes('看多'))     type = '突破型(Squeeze释放)';
  else if (macdTurn && d.dist20Pct < 3)   type = '反转型(MACD金叉)';
  else if (nearS && bias.includes('看多')) type = '回调低吸(支撑附近)';
  else if (hhhl && !overDist)              type = '趋势追涨(结构完好)';
  else if (overDist && bias.includes('多')) type = '过热追涨(高风险)';
  else if (bias.includes('空'))             type = '下跌趋势';

  // -- Chase OK --
  const chaseOK = bias.includes('看多') &&
    d.RSI < 72 && !nearR && !d.overheated &&
    (hasSqz || macdTurn || (d.MACD.aboveZero && d.volRatio > 1)) ? 'YES' : 'NO';

  // -- Risks --
  const risks = [];
  if (nearR || d.nearHigh52)              risks.push('接近压力位/年内高点');
  if (d.RSI > 75)                         risks.push(`RSI过热(${d.RSI})`);
  if (d.dist20Pct > 12)                   risks.push(`EMA20偏离过大(${d.dist20Pct}%)`);
  if (nearR && d.volRatio < 1.2)          risks.push('价格高位量不足→疑似假突破');
  if (!D.notes.some(n => n.includes('OBV')) && bias.includes('多')) risks.push('OBV未确认(资金可能分歧)');
  if (w && w.llhl)                        risks.push('周线仍为下降结构');

  const overheated  = d.dist20Pct > 12 || d.RSI > 78;
  const fakeBreak   = nearR && d.volRatio < 1.2;
  const momDecay    = d.RSI > 75 || (!d.MACD.aboveZero && !d.MACD.turning);
  const nearResist  = nearR || d.nearHigh52;

  return { bias, type, chaseOK, risks, overheated, fakeBreak, momDecay, nearResist, sqzmom };
}

// ═══════════════════════════════════════════════════════════════
//  Per-Stock Analyzer
// ═══════════════════════════════════════════════════════════════

async function analyzeStock(symbol) {
  process.stdout.write(`  ${symbol.padEnd(16)} `);

  const sw = run(`symbol ${symbol}`);
  if (!sw?.success) { process.stdout.write('❌ 切换失败\n'); return null; }
  await sleep(1000);

  const tfMap = {};
  let stockName = null;
  let sqzmom = 'UNKNOWN';

  // Fetch each timeframe
  const TF_LIST = [
    { key: '1W',  tf: 'W',   bars: 65  },
    { key: '1D',  tf: 'D',   bars: 250 },
    { key: '4H',  tf: '240', bars: 120 },
    { key: '1H',  tf: '60',  bars: 100 },
  ];

  for (const { key, tf, bars } of TF_LIST) {
    const sw2 = run(`timeframe ${tf}`);
    if (!sw2?.success) { process.stdout.write('!'); continue; }
    await sleep(500);

    const ohlcv = run(`ohlcv -n ${bars}`);
    if (ohlcv?.success && ohlcv.bars?.length >= 10) {
      tfMap[key] = scoreTF(ohlcv.bars, key);
      process.stdout.write('▪');
    } else {
      process.stdout.write('○');
    }
  }

  // Get name + SQZMOM (go back to daily)
  const q = run(`quote ${symbol}`);
  if (q?.success) stockName = q.name || q.symbol;

  run('timeframe D');
  await sleep(400);
  const tbl = run('data tables');
  if (tbl?.studies) {
    const s = tbl.studies.find(x => x.name?.includes('SQZMOM'));
    if (s?.tables?.[0]?.rows?.[0]) {
      const raw = s.tables[0].rows[0];
      sqzmom = raw.includes('GO') ? 'GO' : raw.includes('WAIT') ? 'WAIT' : 'STOP';
    }
  }

  const cs = composite(tfMap);
  const sig = genSignal(tfMap, sqzmom);
  process.stdout.write(` 综:${String(cs >= 0 ? '+'+cs : cs).padStart(5)}  ${sig.bias}\n`);

  return {
    symbol, name: stockName || symbol,
    composite: cs, signal: sig, sqzmom,
    tfs: tfMap,
    price: tfMap['1D']?.details?.price,
  };
}

// ═══════════════════════════════════════════════════════════════
//  Report Builder
// ═══════════════════════════════════════════════════════════════

function buildReport(results) {
  const L = [];
  const p = s => L.push(s);

  p('# 多周期技术面分析 · 明日最优入场报告');
  p(`**日期:** 2026-04-30　　**周期权重:** 1W(25%)+1D(40%)+4H(25%)+1H(10%)`);
  p(`**股票池:** ${results.length}只 (SQZMOM日线 GO 信号 + 新闻情绪筛选)`);
  p('');

  // ── Summary Table ──
  p('## 📊 综合技术评分总览');
  p('');
  p('| # | 股票 | 代码 | 综合分 | 信号 | 类型 | 追涨? | SQZMOM | 1W | 1D | 4H | 1H | 风险提示 |');
  p('|---|------|------|--------|------|------|-------|--------|----|----|----|----|---------|');
  results.forEach((r, i) => {
    const sc  = r.composite >= 0 ? `+${r.composite}` : String(r.composite);
    const risk = [
      r.signal.overheated  && '⚠过热',
      r.signal.nearResist  && '⚠压力',
      r.signal.fakeBreak   && '⚠假突',
      r.signal.momDecay    && '⚠动能衰',
    ].filter(Boolean).join(' ') || '✅';
    const sc1w = r.tfs['1W']?.score ?? '-';
    const sc1d = r.tfs['1D']?.score ?? '-';
    const sc4h = r.tfs['4H']?.score ?? '-';
    const sc1h = r.tfs['1H']?.score ?? '-';
    p(`| ${i+1} | ${r.name} | ${r.symbol} | **${sc}** | **${r.signal.bias}** | ${r.signal.type} | ${r.signal.chaseOK} | ${r.sqzmom} | ${sc1w} | ${sc1d} | ${sc4h} | ${sc1h} | ${risk} |`);
  });
  p('');
  p('---');
  p('');

  // ── TOP 15 详细 ──
  p('## 🔍 TOP 15 详细技术分析');
  p('');
  results.slice(0, 15).forEach((r, i) => p(detail(r, i+1)));

  // ── 明日最优候选 ──
  const best = results.filter(r =>
    r.signal.bias.includes('看多') &&
    !r.signal.overheated &&
    !r.signal.fakeBreak &&
    r.composite >= 10
  ).slice(0, 8);

  p('## 🚀 明日最优入场候选（综合最高 + 无重大风险）');
  p('');
  if (best.length === 0) {
    p('> 当前市场情绪过热，暂无低风险高质量做多候选，建议等待回调。');
  } else {
    best.forEach((r, i) => {
      const D = r.tfs['1D'];
      const d = D?.details;
      p(`### 🏆 #${i+1} ${r.name} (${r.symbol})`);
      p('');
      p(`| 判断维度 | 结论 |`);
      p(`|----------|------|`);
      p(`| **信号偏向** | **${r.signal.bias}** |`);
      p(`| **交易类型** | **${r.signal.type}** |`);
      p(`| **是否追涨** | **${r.signal.chaseOK}** |`);
      p(`| 综合评分 | **+${r.composite}** |`);
      p(`| SQZMOM | ${r.sqzmom} |`);
      p(`| 当前价 | ${r.price || '-'} |`);
      if (d) {
        p(`| RSI(14) | ${d.RSI} ${d.RSI < 50 ? '(偏低，上升空间大)' : d.RSI > 70 ? '(偏高，谨慎)' : '(健康区间)'} |`);
        p(`| MACD | 柱${d.MACD.hist > 0 ? '+' : ''}${d.MACD.hist} ${d.MACD.turning ? '**⚡金叉**' : d.MACD.histRising ? '↑加速' : '↓减速'} |`);
        p(`| Squeeze | ${d.SQZ ? '🔴**压缩中(爆发前)**' : '已释放'} |`);
        p(`| EMA多头排列 | ${d.bullEMA ? '✅ 是' : '❌ 否'} |`);
        p(`| HH/HL结构 | ${d.hhhl ? '✅ 上升趋势' : '❌ 非上升'} |`);
        p(`| 量比 | ${d.volRatio}x ${d.volRatio > 1.5 ? '(放量)' : d.volRatio < 0.7 ? '(缩量)' : '(正常)'} |`);
        p(`| OBV方向 | ${d.obvDir === 'up' ? '↑ 资金流入' : '↓ 资金流出'} |`);
        p(`| 关键支撑 | ${d.supportPrice || '-'} |`);
        p(`| 关键压力 | ${d.resistPrice || '-'} |`);
        p(`| 接近压力位 | ${d.nearResist ? '⚠️ 是' : '✅ 否'} |`);
        p(`| 动能衰减 | ${r.signal.momDecay ? '⚠️ 是' : '✅ 否'} |`);
        p(`| 疑似诱多/假突破 | ${r.signal.fakeBreak ? '⚠️ 是' : '✅ 否'} |`);
      }
      p('');
      p('**基于的核心理由:**');
      (D?.notes || []).slice(0, 6).forEach(n => p(`- ${n}`));
      if (r.signal.risks?.length) {
        p('');
        p('**关键风险:**');
        r.signal.risks.forEach(risk => p(`- ⚠️ ${risk}`));
      }
      p('');
      p('---');
      p('');
    });
  }

  // ── 假突破/诱多警示 ──
  const fakeRisks = results.filter(r => r.signal.fakeBreak || r.signal.overheated).slice(0, 8);
  if (fakeRisks.length) {
    p('## ⚠️ 诱多/假突破/过热预警');
    p('');
    fakeRisks.forEach(r => {
      p(`**${r.name}(${r.symbol})** 综:${r.composite} — ${r.signal.risks.join('；')}`);
    });
    p('');
  }

  p('---');
  p(`*生成时间: ${new Date().toISOString()} | 指标: EMA/RSI/MACD/Squeeze(BB+KC)/ATR/OBV*`);
  return L.join('\n');
}

function detail(r, rank) {
  const L = [];
  const p = s => L.push(s);
  const D = r.tfs['1D'], W = r.tfs['1W'], H4 = r.tfs['4H'], H1 = r.tfs['1H'];
  const d = D?.details;

  p(`### ${rank}. ${r.name} (${r.symbol})`);
  p('');

  // Scores by TF
  p('**多周期评分:**');
  p(`- 1W: ${W?.score ?? 'N/A'} | 1D: ${D?.score ?? 'N/A'} | 4H: ${H4?.score ?? 'N/A'} | 1H: ${H1?.score ?? 'N/A'} | **综合: ${r.composite}**`);
  p('');

  // Signal summary
  p('**【交易信号判断】**');
  p(`- 结论: **${r.signal.bias}**`);
  p(`- 类型: ${r.signal.type}`);
  p(`- 是否适合追涨: **${r.signal.chaseOK}**`);
  p(`- SQZMOM: ${r.sqzmom}`);
  if (r.signal.risks?.length) {
    p(`- 关键风险: ${r.signal.risks.join('；')}`);
  }
  p(`- 接近压力位: ${r.signal.nearResist ? '**是⚠️**' : '否'}`);
  p(`- 动能衰减: ${r.signal.momDecay ? '**是⚠️**' : '否'}`);
  p(`- 疑似诱多/假突破: ${r.signal.fakeBreak ? '**是⚠️**' : '否'}`);
  p('');

  if (d) {
    p('**1D关键指标:**');
    p(`| 指标 | 值 | 状态 |`);
    p(`|------|----|----|`);
    p(`| 价格 | ${d.price} | — |`);
    p(`| EMA20距离 | ${d.dist20Pct}% | ${Math.abs(d.dist20Pct) < 3 ? '✅低吸区' : d.dist20Pct > 12 ? '⚠️过热' : '正常'} |`);
    p(`| RSI(14) | ${d.RSI} | ${d.RSI < 35 ? '超卖' : d.RSI > 75 ? '⚠️超买' : '健康'} |`);
    p(`| MACD柱 | ${d.MACD.hist} | ${d.MACD.turning ? '⚡金叉' : d.MACD.histRising ? '↑' : '↓'} |`);
    p(`| Squeeze | ${d.SQZ ? '🔴压缩' : '释放'} | ${d.SQZ ? '爆发前蓄能' : '-'} |`);
    p(`| BB宽度% | ${d.bbWidth}% | ${d.bbWidth < 4 ? '收窄蓄能' : '正常'} |`);
    p(`| ATR% | ${d.atrPct}% | ${d.atrPct < 2 ? '低波动' : d.atrPct > 4 ? '⚠️高波动' : '正常'} |`);
    p(`| 量比 | ${d.volRatio}x | ${d.volRatio > 1.5 ? '放量' : d.volRatio < 0.7 ? '缩量' : '正常'} |`);
    p(`| OBV方向 | ${d.obvDir} | ${d.obvDir === 'up' ? '资金流入' : '资金流出'} |`);
    p(`| EMA多头排列 | ${d.bullEMA ? '✅' : '❌'} | — |`);
    p(`| 站上EMA200 | ${d.aboveEMA200 ? '✅' : '❌'} | — |`);
    p(`| HH/HL结构 | ${d.hhhl ? '✅' : '❌'} | — |`);
    p('');
    if (D?.notes?.length) {
      p('**1D信号详情:**');
      D.notes.forEach(n => p(`- ${n}`));
      p('');
    }
  }

  // 1W summary
  if (W?.details) {
    const wd = W.details;
    p(`**1W关键状态:** EMA多头=${wd.bullEMA ? '✅' : '❌'} | HH/HL=${wd.hhhl ? '✅' : '❌'} | RSI=${wd.RSI} | Squeeze=${wd.SQZ ? '🔴' : '否'}`);
    p('');
  }

  p('---');
  p('');
  return L.join('\n');
}

// ═══════════════════════════════════════════════════════════════
//  Main
// ═══════════════════════════════════════════════════════════════

async function main() {
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║  多周期技术面分析 → 明日最优入场  v2.0                  ║');
  console.log('║  1W·1D·4H·1H | EMA/RSI/MACD/Squeeze/OBV/Structure      ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  const symbols = readFileSync(SYM_FILE, 'utf8').trim().split(',').map(s => s.trim()).filter(Boolean);
  const eta = Math.ceil(symbols.length * 9 / 60);
  console.log(`✅ ${symbols.length} 只股票，预计约 ${eta} 分钟\n`);

  const results = [];
  for (const sym of symbols) {
    const r = await analyzeStock(sym);
    if (r) results.push(r);
    await sleep(150);
  }

  results.sort((a, b) => b.composite - a.composite);

  // Console summary
  console.log('\n' + '═'.repeat(72));
  console.log('📊 多周期综合技术排名 TOP 20');
  console.log('═'.repeat(72));
  results.slice(0, 20).forEach((r, i) => {
    const sc = String(r.composite >= 0 ? `+${r.composite}` : r.composite).padStart(5);
    const nm = (r.name || r.symbol).slice(0, 8).padEnd(8);
    const riskTag = [r.signal.overheated && '过热', r.signal.fakeBreak && '假突', r.signal.nearResist && '压力'].filter(Boolean).join('/');
    console.log(`${String(i+1).padStart(2)}. ${nm} ${r.symbol.padEnd(14)} 分:${sc}  ${(r.signal.bias || '').padEnd(5)} ${(r.signal.type || '').slice(0,14).padEnd(14)} ${riskTag ? '⚠️'+riskTag : '✅'}`);
  });

  const best = results.filter(r => r.signal.bias.includes('看多') && !r.signal.overheated && !r.signal.fakeBreak && r.composite >= 10);
  console.log('\n🚀 明日最优候选:');
  best.slice(0, 6).forEach((r, i) => {
    console.log(`  ${i+1}. ${r.name}(${r.symbol}) 综:${r.composite} ${r.signal.type} 追涨:${r.signal.chaseOK}`);
  });

  const rpt = buildReport(results);
  writeFileSync(OUT_MD, rpt, 'utf8');
  console.log(`\n✅ 报告: ${OUT_MD}\n`);
}

main().catch(console.error);
