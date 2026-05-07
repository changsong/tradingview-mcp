#!/usr/bin/env node
/**
 * US Stock Multi-Timeframe Analysis — Master v2 (Accuracy-Tuned)
 *
 * v2 enhancements (over v1):
 *   • ADX(14) trend-strength filter — discount trend signals in chop
 *   • Bullish/Bearish RSI divergence (regular)
 *   • Stochastic RSI as extra momentum confirmation
 *   • Volume Climax detection (capitulation reversal)
 *   • Squeeze duration counter (longer compression = stronger break)
 *   • Multi-bar return acceleration (3d/5d/10d/20d monotonicity)
 *   • Support test count (multiple pivot tests = stronger level)
 *   • Risk/Reward ratio + ATR stop + pivot target — gates BUY signals
 *   • Relative Strength vs SPY benchmark (true leadership detector)
 *
 * TF Weights : 1W(25%) + 1D(40%) + 4H(25%) + 1H(10%)
 * Indicators : EMA5/20/50/200, RSI, MACD, ADX, Squeeze(BB+KC),
 *              ATR, OBV, Pivot HH/HL, Stoch RSI, RSI divergence
 * Risk Flags : OVERHEAT / FAKE-BRK / BULL-TRAP / MOM-DECAY / RESIST
 *              CHOP / POOR-RR / BEAR-DIV
 * Confidence : HIGH / MEDIUM / LOW
 *
 * Usage:
 *   node analyze_tech_us_mtf.mjs                          # uses watchlist/us_selected.txt
 *   node analyze_tech_us_mtf.mjs --symbols=AAPL,NVDA      # CLI override
 *   node analyze_tech_us_mtf.mjs --top=10                 # cap candidate pool by news score
 *   node analyze_tech_us_mtf.mjs --no-live                # skip chart `values` cross-check
 *   node analyze_tech_us_mtf.mjs --no-bench               # skip RS-vs-SPY computation
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Lock CWD to project root so ./watchlist relative paths work from any invocation dir
process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

const CLI       = 'node src/cli/index.js';
const OUT_MD    = './watchlist/us_tech_signals.md';
const OUT_JSON  = './watchlist/us_tech_signals.json';
const SEL_TXT   = './watchlist/us_selected.txt';
const NEWS_MD   = './watchlist/us_news_signals.md';
const NEWS_JSON = './watchlist/us_news_signals.json';
const BENCH_SYM = 'AMEX:SPY';

// ═══════════════════════════════════════════════════════════════
//  CLI args + dynamic stock loader (+ optional news enrichment)
// ═══════════════════════════════════════════════════════════════

function parseArgs() {
  const out = {};
  for (const a of process.argv.slice(2)) {
    const [k, v] = a.replace(/^--/, '').split('=');
    out[k] = v ?? true;
  }
  return out;
}

function loadSymbols(args) {
  if (args.symbols) {
    return args.symbols.split(',').map(s => s.trim()).filter(Boolean);
  }
  if (!existsSync(SEL_TXT)) {
    console.error(`No --symbols and ${SEL_TXT} missing.`);
    process.exit(1);
  }
  return readFileSync(SEL_TXT, 'utf8').trim().split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
}

function loadNewsScores() {
  // Prefer JSON contract (pipeline/2-news output)
  if (existsSync(NEWS_JSON)) {
    try {
      const j = JSON.parse(readFileSync(NEWS_JSON, 'utf8'));
      const map = {};
      for (const [sym, s] of Object.entries(j.stocks ?? {})) {
        const sig = String(s.signal ?? '');
        const newsSignal = /Long\s*\(Strong\)|Strong Long/i.test(sig) ? 'Strong Long'
                         : /Long\s*\(Mid\)|Mid Long/i.test(sig)        ? 'Mid Long'
                         : /Short|Avoid/i.test(sig)                     ? 'Short/Avoid'
                         : 'Neutral';
        map[sym] = { newsScore: s.score, newsSignal };
      }
      if (Object.keys(map).length) return map;
    } catch (e) {
      console.warn(`[loadNewsScores] JSON parse failed, falling back to MD: ${e.message}`);
    }
  }
  if (!existsSync(NEWS_MD)) return {};
  const raw = readFileSync(NEWS_MD, 'utf8');
  const map = {};
  const re = /\|\s*\d+\s*\|\s*\*\*([A-Z]+:[A-Z]+)\*\*\s*\|\s*\*\*([+\-]?\d+)\*\*\s*\|\s*([^|]+?)\s*\|/g;
  let m;
  while ((m = re.exec(raw))) {
    const sym = m[1].trim();
    const score = parseInt(m[2], 10);
    const sig = m[3].trim();
    const newsSignal = /Long\s*\(Strong\)/i.test(sig) ? 'Strong Long'
                     : /Long\s*\(Mid\)/i.test(sig)    ? 'Mid Long'
                     : /Short|Avoid/i.test(sig)       ? 'Short/Avoid'
                     : 'Neutral';
    map[sym] = { newsScore: score, newsSignal };
  }
  return map;
}

function run(cmd, ms = 12000) {
  try {
    return JSON.parse(execSync(`${CLI} ${cmd}`, { encoding: 'utf8', cwd: process.cwd(), timeout: ms }));
  } catch { return null; }
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

function r1(v) { return Math.round(v * 10) / 10; }
function r2(v) { return Math.round(v * 100) / 100; }

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
  return s.length ? s.reduce((a, b) => a + b, 0) / s.length : 0;
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
    ag = (ag * (n-1) + Math.max(0,  d)) / n;
    al = (al * (n-1) + Math.max(0, -d)) / n;
  }
  return al === 0 ? 100 : 100 - 100 / (1 + ag / al);
}
function rsiSeries(C, n = 14) {
  if (C.length < n + 2) return [];
  const out = new Array(n).fill(50);
  let ag = 0, al = 0;
  for (let i = 1; i <= n; i++) { const d = C[i] - C[i-1]; d > 0 ? ag += d : al -= d; }
  ag /= n; al /= n;
  out.push(al === 0 ? 100 : 100 - 100 / (1 + ag / al));
  for (let i = n + 1; i < C.length; i++) {
    const d = C[i] - C[i-1];
    ag = (ag * (n-1) + Math.max(0, d)) / n;
    al = (al * (n-1) + Math.max(0, -d)) / n;
    out.push(al === 0 ? 100 : 100 - 100 / (1 + ag / al));
  }
  return out;
}
function macdCalc(C, fast = 12, slow = 26, sig = 9) {
  if (C.length < slow + sig + 2) return { hist: 0, turning: false, histRising: false, aboveZero: false };
  const ef = ema(C, fast), es = ema(C, slow);
  const diff = ef.map((v, i) => v - es[i]);
  const sigLine = ema(diff.slice(slow - 1), sig);
  const n = sigLine.length;
  const h1 = diff[diff.length - 1] - sigLine[n - 1];
  const h2 = diff[diff.length - 2] - sigLine[n - 2];
  return { hist: Math.round(h1 * 10000) / 10000, turning: h1 > 0 && h2 <= 0, histRising: h1 > h2, aboveZero: h1 > 0 };
}
function atrCalc(H, L, C, n = 14) {
  const trs = [];
  for (let i = 1; i < C.length; i++)
    trs.push(Math.max(H[i] - L[i], Math.abs(H[i] - C[i-1]), Math.abs(L[i] - C[i-1])));
  return sma(trs, Math.min(n, trs.length));
}
function bbandsCalc(C, n = 20, mult = 2) {
  const mid = sma(C, n), sd = stdev(C, n);
  return { upper: mid + mult * sd, mid, lower: mid - mult * sd, bw: (4 * sd) / mid };
}
function keltnerCalc(C, H, L, n = 20, mult = 1.5) {
  const mid = ema(C, n).pop();
  const a   = atrCalc(H, L, C, n);
  return { upper: mid + mult * a, lower: mid - mult * a };
}
function obvCalc(C, V) {
  let o = 0; const arr = [0];
  for (let i = 1; i < C.length; i++) {
    o += C[i] > C[i-1] ? V[i] : C[i] < C[i-1] ? -V[i] : 0;
    arr.push(o);
  }
  return arr;
}
function pivotHL(H, L, left = 3) {
  const PHs = [], PLs = [];
  for (let i = left; i < H.length - left; i++) {
    const ph = H.slice(i-left, i).every(v => v < H[i]) && H.slice(i+1, i+left+1).every(v => v < H[i]);
    const pl = L.slice(i-left, i).every(v => v > L[i]) && L.slice(i+1, i+left+1).every(v => v > L[i]);
    if (ph) PHs.push({ i, p: H[i] });
    if (pl) PLs.push({ i, p: L[i] });
  }
  return { PHs, PLs };
}

// ── ADX(14) — Wilder ──
function wilderSmooth(arr, n) {
  if (arr.length < n) return [];
  const out = [];
  let s = 0;
  for (let i = 0; i < n; i++) s += arr[i];
  out.push(s);
  for (let i = n; i < arr.length; i++) {
    s = s - s / n + arr[i];
    out.push(s);
  }
  return out;
}
function adxCalc(H, L, C, n = 14) {
  if (H.length < 2 * n + 2) return null;
  const tr = [], pDM = [], mDM = [];
  for (let i = 1; i < H.length; i++) {
    const up = H[i] - H[i-1];
    const dn = L[i-1] - L[i];
    pDM.push(up > dn && up > 0 ? up : 0);
    mDM.push(dn > up && dn > 0 ? dn : 0);
    tr.push(Math.max(H[i]-L[i], Math.abs(H[i]-C[i-1]), Math.abs(L[i]-C[i-1])));
  }
  const trS = wilderSmooth(tr, n), pS = wilderSmooth(pDM, n), mS = wilderSmooth(mDM, n);
  if (trS.length === 0) return null;
  const plusDI = pS.map((v, i) => 100 * v / (trS[i] || 1));
  const minusDI = mS.map((v, i) => 100 * v / (trS[i] || 1));
  const dx = plusDI.map((v, i) => 100 * Math.abs(v - minusDI[i]) / ((v + minusDI[i]) || 1));
  const adxRaw = wilderSmooth(dx, n);
  if (adxRaw.length === 0) return null;
  const adx = adxRaw.at(-1) / n;
  return {
    adx: r1(adx),
    plusDI: r1(plusDI.at(-1)),
    minusDI: r1(minusDI.at(-1)),
    trending: adx > 25,
    chop: adx < 20,
    bullishDM: plusDI.at(-1) > minusDI.at(-1),
    veryStrong: adx > 35,
  };
}

// ── RSI Divergence (regular) ──
function findPivots(arr, type, left = 2) {
  const out = [];
  for (let i = left; i < arr.length - left; i++) {
    let ok = true;
    for (let j = 1; j <= left; j++) {
      if (type === 'low'  && (arr[i-j] <= arr[i] || arr[i+j] <= arr[i])) { ok = false; break; }
      if (type === 'high' && (arr[i-j] >= arr[i] || arr[i+j] >= arr[i])) { ok = false; break; }
    }
    if (ok) out.push({ i, v: arr[i] });
  }
  return out;
}
function rsiDivergence(C, RSI, lookback = 30) {
  if (C.length < 10 || RSI.length < 10) return { bull: false, bear: false };
  const sliceC = C.slice(-lookback), sliceR = RSI.slice(-lookback);
  const pl = findPivots(sliceC, 'low',  2).slice(-2);
  const ph = findPivots(sliceC, 'high', 2).slice(-2);
  const rl = findPivots(sliceR, 'low',  2).slice(-2);
  const rh = findPivots(sliceR, 'high', 2).slice(-2);
  const bull = pl.length >= 2 && rl.length >= 2 && pl[1].v < pl[0].v && rl[1].v > rl[0].v;
  const bear = ph.length >= 2 && rh.length >= 2 && ph[1].v > ph[0].v && rh[1].v < rh[0].v;
  return { bull, bear };
}

// ── Stochastic RSI ──
function stochRsi(rsiArr, n = 14) {
  if (rsiArr.length < n) return null;
  const recent = rsiArr.slice(-n);
  const min = Math.min(...recent), max = Math.max(...recent);
  return max === min ? 50 : ((rsiArr.at(-1) - min) / (max - min)) * 100;
}

// ── Volume Climax ──
function volumeClimax(bars) {
  const n = bars.length;
  if (n < 22) return false;
  const last = bars[n-1];
  const avg20 = bars.slice(-21, -1).reduce((s, b) => s + (b.volume || 0), 0) / 20;
  if (avg20 === 0) return false;
  const surge = last.volume > avg20 * 2.5;
  const range = last.high - last.low;
  if (range === 0) return false;
  const bullishCandle = last.close > last.open && (last.close - last.open) > range * 0.6;
  const last20Low = Math.min(...bars.slice(-20, -1).map(b => b.low));
  const nearLow = (last.low - last20Low) / last20Low < 0.03;
  return surge && bullishCandle && nearLow;
}

// ── Squeeze duration counter ──
function squeezeStreak(bars) {
  if (bars.length < 22) return 0;
  const C = bars.map(b => b.close), H = bars.map(b => b.high), L = bars.map(b => b.low);
  let streak = 0;
  for (let i = bars.length - 1; i >= 21; i--) {
    const sC = C.slice(0, i + 1), sH = H.slice(0, i + 1), sL = L.slice(0, i + 1);
    const bb = bbandsCalc(sC, 20, 2);
    const kc = keltnerCalc(sC, sH, sL, 20, 1.5);
    if (bb.upper < kc.upper && bb.lower > kc.lower) streak++;
    else break;
  }
  return streak;
}

// ── Return Acceleration ──
function returnAccel(C) {
  const n = C.length;
  if (n < 22) return { ret3: 0, ret5: 0, ret10: 0, ret20: 0, accel: false };
  const ret3  = (C[n-1] / C[n-4]  - 1) * 100;
  const ret5  = (C[n-1] / C[n-6]  - 1) * 100;
  const ret10 = (C[n-1] / C[n-11] - 1) * 100;
  const ret20 = (C[n-1] / C[n-21] - 1) * 100;
  // Accelerating: positives + recent-rate > longer-rate
  const accel = ret3 > 0 && ret5 > 0 && ret10 > 0 && (ret3 / 3) > (ret5 / 5);
  return { ret3: r1(ret3), ret5: r1(ret5), ret10: r1(ret10), ret20: r1(ret20), accel };
}

// ── Support test count ──
function supportTestCount(PLs, level, tolerance = 0.025) {
  if (!level) return 0;
  return PLs.filter(p => Math.abs(p.p - level) / level < tolerance).length;
}

// ── Relative Strength (computed in analyzeStock against benchmark) ──
function computeRS(stockBars, benchBars, lookback = 20) {
  if (!stockBars || !benchBars) return null;
  if (stockBars.length < lookback + 1 || benchBars.length < lookback + 1) return null;
  const sRet = (stockBars.at(-1).close / stockBars[stockBars.length - 1 - lookback].close - 1) * 100;
  const bRet = (benchBars.at(-1).close / benchBars[benchBars.length - 1 - lookback].close - 1) * 100;
  return r1(sRet - bRet);
}

// ═══════════════════════════════════════════════════════════════
//  Hybrid: read live RSI / MACD from chart `values`
// ═══════════════════════════════════════════════════════════════

function readLiveValues() {
  const v = run('values');
  if (!v?.success || !Array.isArray(v.studies)) return {};
  const rec = {};
  for (const s of v.studies) {
    const name = (s.name || '').toLowerCase();
    const vals = s.values || {};
    if (name.includes('relative strength') && rec.rsi == null) {
      const num = parseFloat(Object.values(vals)[0]);
      if (!Number.isNaN(num)) rec.rsi = num;
    } else if ((name === 'macd' || (name.includes('macd') && !name.includes('squeeze')))) {
      for (const [k, val] of Object.entries(vals)) {
        const num = parseFloat(val);
        if (Number.isNaN(num)) continue;
        const lk = k.toLowerCase();
        if (lk.includes('hist'))      rec.macdHist = num;
        else if (lk.includes('signal')) rec.macdSignal = num;
        else                            rec.macdValue = num;
      }
    }
  }
  return rec;
}

// ═══════════════════════════════════════════════════════════════
//  Single-Timeframe Scorer
// ═══════════════════════════════════════════════════════════════

function scoreTF(bars, tfKey, live = {}, extra = {}) {
  if (!bars || bars.length < 20) return null;
  const C = bars.map(b => b.close), H = bars.map(b => b.high);
  const L = bars.map(b => b.low),   V = bars.map(b => b.volume || 0);
  const n = C.length, price = C[n - 1];

  // EMAs
  const e5   = ema(C, 5),  e20  = ema(C, 20);
  const e50  = n >= 50  ? ema(C, 50)  : null;
  const e200 = n >= 150 ? ema(C, 200) : null;
  const EMA5 = e5[n-1], EMA20 = e20[n-1];
  const EMA50  = e50  ? e50[n-1]  : null;
  const EMA200 = e200 ? e200[n-1] : null;
  const dist20Pct = ((price - EMA20) / EMA20) * 100;
  const bullEMA   = price > EMA5 && EMA5 > EMA20 && (EMA50 === null || EMA20 > EMA50);
  const aboveEMA200 = EMA200 ? price > EMA200 : true;
  const ema200Rising = e200 ? e200[n-1] > e200[Math.max(0, n - 20)] : true;

  // HH/HL pivot structure
  const { PHs, PLs } = pivotHL(H, L, 3);
  const lastPHs = PHs.slice(-3), lastPLs = PLs.slice(-3);
  const hhhl = lastPHs.length >= 2 && lastPLs.length >= 2 &&
               lastPHs.at(-1).p > lastPHs.at(-2).p &&
               lastPLs.at(-1).p > lastPLs.at(-2).p;
  const llhl = lastPHs.length >= 2 && lastPHs.at(-1).p < lastPHs.at(-2).p;

  // Computed RSI / MACD
  const RSI_calc = r1(rsiCalc(C, 14));
  const MACD     = macdCalc(C);

  // Hybrid: prefer live values when present and substantially different
  let RSI = RSI_calc;
  let RSI_live = null;
  if (typeof live.rsi === 'number') {
    RSI_live = r1(live.rsi);
    if (Math.abs(RSI_live - RSI_calc) > 5) RSI = RSI_live;
  }
  let macdHist_live = null;
  if (typeof live.macdHist === 'number') {
    macdHist_live = Math.round(live.macdHist * 10000) / 10000;
    if ((MACD.hist > 0) !== (macdHist_live > 0)) {
      MACD.hist = macdHist_live; MACD.aboveZero = macdHist_live > 0;
    }
  }

  // Squeeze
  const BB  = bbandsCalc(C, 20, 2);
  const KC  = keltnerCalc(C, H, L, 20, 1.5);
  const SQZ = BB.upper < KC.upper && BB.lower > KC.lower;
  const ATR_VAL = atrCalc(H, L, C, 14);
  const atrPct  = (ATR_VAL / price) * 100;

  // Volume / OBV
  const hasVol = V.some(v => v > 0);
  let volRatio = 1, volTrend = 'stable', obvDir = 'flat';
  if (hasVol && n >= 20) {
    const avg20 = sma(V, 20) || 1;
    volRatio = V[n-1] / avg20;
    const avg5 = sma(V.slice(-5), 5), p5 = sma(V.slice(-10, -5), 5);
    volTrend = avg5 > p5 * 1.2 ? 'expanding' : avg5 < p5 * 0.8 ? 'contracting' : 'stable';
    const OBV = obvCalc(C, V), obvEma = ema(OBV, 10);
    obvDir = OBV[n-1] > obvEma[n-1] ? 'up' : 'down';
  }

  // Range proximity
  const lookH = Math.min(n, 250);
  const high52 = Math.max(...H.slice(-lookH)), low52 = Math.min(...L.slice(-lookH));
  const nearHigh52 = (high52 - price) / price < 0.04;
  const nearLow52  = (price - low52)  / price < 0.04;

  // Pivot resistance/support
  const resistLevels  = PHs.filter(p => p.p > price).sort((a, b) => a.p - b.p);
  const supportLevels = PLs.filter(p => p.p < price).sort((a, b) => b.p - a.p);
  const nearestR = resistLevels[0], nearestS = supportLevels[0];
  const nearResist  = nearestR && (nearestR.p - price) / price < 0.04;
  const nearSupport = nearestS && (price - nearestS.p) / price < 0.04;

  // 20-bar range pos (for fakeBreak detection)
  const last20H = Math.max(...H.slice(-20)), last20L = Math.min(...L.slice(-20));
  const rangePct = last20H > last20L ? ((price - last20L) / (last20H - last20L)) * 100 : 50;

  // ── Enhanced indicators (v2) ──
  const ADX = adxCalc(H, L, C, 14);
  const RSI_ARR = rsiSeries(C, 14);
  const DIV = rsiDivergence(C, RSI_ARR, 30);
  const STO_RSI = stochRsi(RSI_ARR);
  const CLIMAX = volumeClimax(bars);
  const SQZ_STREAK = squeezeStreak(bars);
  const RA = returnAccel(C);
  const supportTests = nearSupport ? supportTestCount(PLs, nearestS.p) : 0;

  // R/R + Stop / Target
  const atrStop = ATR_VAL ? r2(price - 1.5 * ATR_VAL) : null;
  const target  = nearestR ? r2(nearestR.p) : null;
  const rr      = (nearestR && nearestS && (price - nearestS.p) > 0)
                  ? r1((nearestR.p - price) / (price - nearestS.p))
                  : null;

  // ── Scoring ──
  let score = 0; const notes = [];

  // ADX-based chop discount
  const chopDiscount = ADX?.chop ? 0.5 : 1;  // halve trend-block scores in chop

  // Trend (±35, scaled by chopDiscount on bullEMA / hhhl)
  if (bullEMA)       { const v = Math.round(12 * chopDiscount); score += v; notes.push(`EMA bull alignment (+${v}${ADX?.chop ? ' chop-disc' : ''})`); }
  if (aboveEMA200)   { score += 8;  notes.push('Above EMA200 (+8)'); }
  else               { score -= 8;  notes.push('Below EMA200 (-8)'); }
  if (ema200Rising)  { score += 4;  notes.push('EMA200 rising (+4)'); }
  if (hhhl)          { const v = Math.round(10 * chopDiscount); score += v; notes.push(`HH/HL uptrend (+${v}) ★`); }
  if (llhl)          { score -= 8;  notes.push('LH downtrend (-8)'); }
  if (Math.abs(dist20Pct) < 3)  { score += 5;  notes.push(`Near EMA20 dip zone (${r1(dist20Pct)}%, +5) ★`); }
  else if (dist20Pct > 12)      { score -= 10; notes.push(`EMA20 deviation ${r1(dist20Pct)}% overextended (-10)`); }

  // ADX score (±9)
  if (ADX) {
    if (ADX.trending && ADX.bullishDM)   { score += 6; notes.push(`ADX ${ADX.adx} trend up (+6)`); }
    if (ADX.veryStrong && ADX.bullishDM) { score += 3; notes.push(`ADX ${ADX.adx} VERY STRONG (+3) ★`); }
    if (ADX.chop)                         { /* trend already discounted */ notes.push(`ADX ${ADX.adx} CHOP — trend signals halved`); }
    if (ADX.trending && !ADX.bullishDM)   { score -= 4; notes.push(`ADX trending but DI bearish (-4)`); }
  }

  // Momentum (±30)
  if (RSI > 50 && RSI < 72)  { score += 8;  notes.push(`RSI ${RSI} healthy (+8)`); }
  else if (RSI < 35)         { score += 6;  notes.push(`RSI ${RSI} oversold bounce (+6)`); }
  else if (RSI > 80)         { score -= 12; notes.push(`RSI ${RSI} overbought (-12)`); }
  if (MACD.turning)          { score += 12; notes.push('MACD golden cross (+12) ★'); }
  else if (MACD.aboveZero && MACD.histRising) { score += 8; notes.push('MACD hist accelerating (+8)'); }
  else if (MACD.aboveZero)   { score += 4;  notes.push('MACD hist positive (+4)'); }
  else if (!MACD.turning)    { score -= 6;  notes.push('MACD hist negative (-6)'); }

  // Divergence (±10)
  if (DIV.bull) { score += 10; notes.push('Bullish RSI divergence (+10) ★★'); }
  if (DIV.bear) { score -= 10; notes.push('Bearish RSI divergence (-10) ★★'); }

  // Stoch RSI (±4)
  if (STO_RSI != null) {
    if (STO_RSI < 20)      { score += 4; notes.push(`Stoch RSI ${r1(STO_RSI)} oversold (+4)`); }
    else if (STO_RSI > 80) { score -= 4; notes.push(`Stoch RSI ${r1(STO_RSI)} overbought (-4)`); }
  }

  // Squeeze / Volatility (±20 + streak bonus)
  if (SQZ)               { score += 18; notes.push('SQUEEZE compression — pre-breakout (+18) ★★★'); }
  else if (BB.bw < 0.04) { score += 6;  notes.push('BB narrowing, coiling (+6)'); }
  if (SQZ && SQZ_STREAK >= 5)      { score += 6; notes.push(`Squeeze ${SQZ_STREAK} bars — fully coiled (+6) ★`); }
  else if (SQZ && SQZ_STREAK >= 3) { score += 3; notes.push(`Squeeze ${SQZ_STREAK} bars — coiling (+3)`); }
  if (atrPct < 1.5)      { score += 3;  notes.push(`ATR ${r1(atrPct)}% low vol (+3)`); }
  else if (atrPct > 4.5) { score -= 8;  notes.push(`ATR ${r1(atrPct)}% high risk (-8)`); }

  // Volume Climax (+12)
  if (CLIMAX) { score += 12; notes.push('Volume CLIMAX — capitulation reversal (+12) ★★'); }

  // Volume (±17)
  if (volTrend === 'expanding') { score += 8; notes.push('Volume expanding (+8)'); }
  if (volRatio > 1.5)           { score += 5; notes.push(`Vol ${r1(volRatio)}x surge (+5)`); }
  else if (volRatio < 0.5)      { score -= 5; notes.push('Significantly low volume (-5)'); }
  if (obvDir === 'up')          { score += 4; notes.push('OBV rising — inflow (+4)'); }

  // Return acceleration (+5)
  if (RA.accel) { score += 5; notes.push(`Return accel 3d:${RA.ret3}% 5d:${RA.ret5}% (+5) ★`); }

  // Structure (±12) — replace simple support bonus with test-count weighted
  if (nearSupport) {
    const bonus = supportTests >= 3 ? 12 : supportTests >= 2 ? 9 : 6;
    score += bonus;
    notes.push(`Near support (${supportTests} test${supportTests !== 1 ? 's' : ''}) +${bonus} ${supportTests >= 2 ? '★★' : '★'}`);
  }
  if (nearResist)   { score -= 8; notes.push('Near resistance (-8)'); }
  if (nearLow52 && !nearHigh52) { score += 5; notes.push('Near 52W low — reversal zone (+5)'); }
  if (nearHigh52)   { score -= 4; notes.push('Near 52W high (-4)'); }

  // R/R scoring (only on 1D where we have meaningful structure)
  if (rr != null && tfKey === '1D') {
    if (rr >= 2)        { score += 5; notes.push(`R/R ${rr} excellent (+5) ★`); }
    else if (rr >= 1.5) { score += 2; notes.push(`R/R ${rr} acceptable (+2)`); }
    else if (rr < 1)    { score -= 8; notes.push(`R/R ${rr} poor entry (-8)`); }
  }

  // Relative strength (only on 1D)
  if (extra.rs != null && tfKey === '1D') {
    if (extra.rs > 5)       { score += 6; notes.push(`RS +${extra.rs}% leading market (+6) ★`); }
    else if (extra.rs > 0)  { score += 3; notes.push(`RS +${extra.rs}% beating market (+3)`); }
    else if (extra.rs < -5) { score -= 4; notes.push(`RS ${extra.rs}% lagging market (-4)`); }
  }

  return {
    score, notes,
    details: {
      price, EMA5: r2(EMA5), EMA20: r2(EMA20),
      EMA50: EMA50 ? r2(EMA50) : null, EMA200: EMA200 ? r2(EMA200) : null,
      dist20Pct: r1(dist20Pct), bullEMA, aboveEMA200, ema200Rising, hhhl, llhl,
      RSI, RSI_calc, RSI_live, MACD, macdHist_live, SQZ, SQZ_STREAK,
      bbWidth: r1(BB.bw * 100), atrPct: r1(atrPct), atrStop, target, rr,
      volRatio: r1(volRatio), volTrend, obvDir, climax: CLIMAX,
      nearHigh52, nearLow52, nearResist, nearSupport, supportTests,
      resistPrice: nearestR ? r2(nearestR.p) : null,
      supportPrice: nearestS ? r2(nearestS.p) : null,
      rangePct: r1(rangePct),
      ADX, divergence: DIV, stochRsi: STO_RSI != null ? r1(STO_RSI) : null,
      ret3: RA.ret3, ret5: RA.ret5, ret10: RA.ret10, ret20: RA.ret20, retAccel: RA.accel,
      rs: extra.rs ?? null,
    },
    tf: tfKey,
  };
}

// ═══════════════════════════════════════════════════════════════
//  Multi-TF Synthesis
// ═══════════════════════════════════════════════════════════════

const TF_WEIGHT = { '1W': 0.25, '1D': 0.40, '4H': 0.25, '1H': 0.10 };

function composite(tfs) {
  let s = 0, w = 0;
  for (const [tf, res] of Object.entries(tfs)) {
    if (res && TF_WEIGHT[tf]) { s += res.score * TF_WEIGHT[tf]; w += TF_WEIGHT[tf]; }
  }
  return w ? r1(s / w) : 0;
}

function trendAlignment(tfs) {
  const order = ['1W', '1D', '4H', '1H'];
  let up = 0, down = 0, total = 0;
  const arrows = [];
  for (const k of order) {
    const t = tfs[k];
    if (!t?.details) { arrows.push(`${k}:N/A`); continue; }
    total += 1;
    const d = t.details;
    if (d.bullEMA && d.aboveEMA200)        { up++;   arrows.push(`${k}↑`); }
    else if (!d.bullEMA && !d.aboveEMA200) { down++; arrows.push(`${k}↓`); }
    else                                   {         arrows.push(`${k}→`); }
  }
  return {
    up, down, total,
    upPct:   total ? up   / total : 0,
    downPct: total ? down / total : 0,
    summary: arrows.join(' '),
    label:   total ? `${up}/${total} (${Math.round(up / total * 100)}%)` : 'N/A',
  };
}

function genSignal(tfs, sqzmom, meta, alignment) {
  const D = tfs['1D'], W = tfs['1W'], H1 = tfs['1H'];
  if (!D?.details) return {
    bias: 'Watch', type: '-', chaseOK: 'NO', risks: [], confidence: 'Low',
    overheated: false, fakeBreak: false, bullTrap: false, momDecay: false,
    nearResist: false, reversal: false, lowRR: false, chop: false, bearDiv: false,
    newsBonus: 0, adjScore: 0, sqzmom,
  };
  const d = D.details;
  const cs = composite(tfs);

  let bias = cs >= 20 ? 'Strong Long'
           : cs >=  8 ? 'Long'
           : cs >= -5 ? 'Watch'
           : cs >= -20? 'Short'
           : 'Strong Short';

  // Risk patterns
  const overheated  = d.dist20Pct > 12 || d.RSI > 78;
  const overbought  = d.RSI > 70;
  const nearResist  = d.nearResist || d.nearHigh52;
  const lowVol      = d.volRatio < 1.2;
  const highInRange = d.rangePct > 90 || d.dist20Pct > 8;
  const chop        = d.ADX?.chop === true;
  const bearDiv     = d.divergence?.bear === true;
  const lowRR       = d.rr != null && d.rr < 1.5;

  const bullTrap  = overbought && nearResist;
  const fakeBreak = nearResist && lowVol && highInRange;
  const momDecay  = d.RSI > 75 || (!d.MACD.aboveZero && !d.MACD.turning && bias.includes('Long'));
  const reversal  = d.RSI < 35 && d.nearSupport && (
    (H1?.details?.MACD?.turning ?? false) || d.divergence?.bull === true || d.climax
  );

  // Type
  const hasSqz = D.notes.some(n => n.includes('SQUEEZE'));
  let type = '-';
  if (reversal)                                        type = 'Reversal (Oversold + Confirmation)';
  else if (d.climax)                                   type = 'Reversal (Volume Climax)';
  else if (d.divergence?.bull)                         type = 'Reversal (Bullish RSI Divergence)';
  else if (hasSqz && bias.includes('Long'))            type = 'Breakout (Squeeze Release)';
  else if (d.MACD.turning && d.dist20Pct < 3)         type = 'Reversal (MACD Cross)';
  else if (d.nearSupport && bias.includes('Long'))     type = 'Pullback Buy (Near Support)';
  else if (d.hhhl && !overheated)                      type = 'Trend Follow (HH/HL Intact)';
  else if (overheated && bias.includes('Long'))        type = 'Overextended Chase (High Risk)';
  else if (bias.includes('Short'))                     type = 'Downtrend';
  else if (bias.includes('Long'))                      type = 'Trend Continuation';
  else                                                 type = 'Range / No Edge';

  // Adjustments
  let adjScore = cs;
  if (bullTrap)  adjScore -= 12;
  if (fakeBreak) adjScore -= 10;
  if (reversal)  adjScore +=  8;
  if (bearDiv)   adjScore -=  6;
  if (lowRR)     adjScore -=  4;
  if (chop)      adjScore -=  4;
  adjScore = r1(adjScore);

  if (bullTrap && bias === 'Strong Long')   bias = 'Long';
  else if (bullTrap && bias === 'Long')     bias = 'Watch';
  if (fakeBreak && bias === 'Strong Long')  bias = 'Long';
  if (bearDiv   && bias === 'Strong Long')  bias = 'Long';
  if (chop      && bias === 'Strong Long')  bias = 'Long';

  const newsBonus = meta?.newsScore != null ? Math.min(10, Math.round(meta.newsScore / 3)) : 0;

  // Chase-OK gating (now includes lowRR + chop)
  const chaseOK = bias.includes('Long') &&
                  d.RSI < 72 && !nearResist && !bullTrap && !fakeBreak && !lowRR && !chop && !bearDiv &&
                  (hasSqz || d.MACD.turning || (d.MACD.aboveZero && d.volRatio > 1)) ? 'YES' : 'NO';

  // Risks
  const risks = [];
  if (bullTrap)        risks.push(`Bull trap: RSI ${d.RSI} + near resistance`);
  if (fakeBreak)       risks.push('Fake breakout: high range + low volume');
  if (overheated && !bullTrap) risks.push(`Overextended: dist20=${d.dist20Pct}%, RSI=${d.RSI}`);
  if (nearResist && !bullTrap && !fakeBreak) risks.push('Near resistance / 52W high');
  if (momDecay)        risks.push('Momentum decay');
  if (W?.details?.llhl) risks.push('Weekly LH structure');
  if (d.obvDir === 'down' && bias.includes('Long')) risks.push('OBV diverging (distribution)');
  if (chop)            risks.push(`Choppy market (ADX ${d.ADX?.adx})`);
  if (bearDiv)         risks.push('Bearish RSI divergence — momentum exhaustion');
  if (lowRR)           risks.push(`Poor R/R (${d.rr}) — wait for pullback`);
  if (meta?.newsScore != null && meta.newsScore < 5 && bias.includes('Long'))
    risks.push('Weak news catalyst');

  // Confidence
  const finalAbs   = Math.abs(adjScore + newsBonus);
  const riskCount  = risks.length;
  const alignBull  = (alignment?.upPct   ?? 0) >= 0.75;
  const alignBear  = (alignment?.downPct ?? 0) >= 0.75;
  let confidence = 'Low';
  if (finalAbs >= 22 && riskCount <= 1 && (alignBull || alignBear)) confidence = 'High';
  else if (finalAbs >= 10 && riskCount <= 2)                        confidence = 'Medium';

  return {
    bias, type, chaseOK, risks, confidence, sqzmom,
    overheated, fakeBreak, bullTrap, momDecay, nearResist, reversal,
    chop, bearDiv, lowRR,
    newsBonus, adjScore,
  };
}

// ═══════════════════════════════════════════════════════════════
//  Per-Stock Pipeline
// ═══════════════════════════════════════════════════════════════

const TF_LIST = [
  { key: '1W', tf: 'W',   bars:  65 },
  { key: '1D', tf: 'D',   bars: 250 },
  { key: '4H', tf: '240', bars: 120 },
  { key: '1H', tf: '60',  bars: 100 },
];

async function fetchBenchBars() {
  process.stdout.write(`  Fetching benchmark ${BENCH_SYM}...`);
  let sw = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await sleep(2000 * attempt);
    sw = run(`symbol ${BENCH_SYM}`);
    if (sw?.success) break;
  }
  if (!sw?.success) { process.stdout.write(' X failed\n'); return null; }
  await sleep(2000);
  run('timeframe D');
  await sleep(800);
  const o = run('ohlcv -n 60');
  const bars = (o?.success && o.bars) ? o.bars : null;
  process.stdout.write(bars ? ` OK (${bars.length} bars)\n` : ' X no data\n');
  return bars;
}

async function analyzeStock(meta, opts, benchBars) {
  const { symbol, newsScore, newsSignal } = meta;
  process.stdout.write(`  ${symbol.padEnd(16)} `);

  let sw = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await sleep(2000 * attempt);
    sw = run(`symbol ${symbol}`);
    if (sw?.success) break;
  }
  if (!sw?.success) { process.stdout.write('X switch failed\n'); return null; }
  await sleep(2000);

  const tfMap = {};
  let dailyBarsForRS = null;

  for (const { key, tf, bars } of TF_LIST) {
    const sw2 = run(`timeframe ${tf}`);
    if (!sw2?.success) { process.stdout.write('!'); continue; }
    await sleep(700);

    const ohlcv = run(`ohlcv -n ${bars}`);
    if (!ohlcv?.success || !ohlcv.bars?.length || ohlcv.bars.length < 20) {
      process.stdout.write('o');
      continue;
    }

    let live = {};
    if (!opts.noLive) live = readLiveValues();

    if (key === '1D') dailyBarsForRS = ohlcv.bars;

    const extra = {};
    if (key === '1D' && benchBars) {
      extra.rs = computeRS(ohlcv.bars, benchBars, 20);
    }

    tfMap[key] = scoreTF(ohlcv.bars, key, live, extra);
    process.stdout.write(live.rsi != null ? '+' : '|');
  }

  const q = run(`quote ${symbol}`);
  const stockName = q?.success ? (q.name || q.symbol || symbol) : symbol;

  // SQZMOM table on D
  run('timeframe D');
  await sleep(500);
  const tbl = run('data tables');
  let sqzmom = 'UNKNOWN';
  if (tbl?.studies) {
    const s = tbl.studies.find(x => /sqzmom|squeeze/i.test(x.name || ''));
    if (s?.tables?.[0]?.rows?.[0]) {
      const raw = JSON.stringify(s.tables[0].rows[0]).toUpperCase();
      sqzmom = raw.includes('GO') ? 'GO' : raw.includes('WAIT') ? 'WAIT' : raw.includes('STOP') ? 'STOP' : 'UNKNOWN';
    }
  }

  const align = trendAlignment(tfMap);
  const cs = composite(tfMap);
  const sig = genSignal(tfMap, sqzmom, meta, align);
  const finalScore = r1(sig.adjScore + sig.newsBonus);

  const dD = tfMap['1D']?.details;
  const adxStr = dD?.ADX ? `ADX${dD.ADX.adx}` : 'ADX:-';
  const rsStr = dD?.rs != null ? `RS${dD.rs >= 0 ? '+' : ''}${dD.rs}` : '';

  process.stdout.write(
    ` tech:${(cs >= 0 ? '+' + cs : cs).toString().padStart(5)}` +
    `  ${adxStr.padEnd(8)}` +
    (rsStr ? `  ${rsStr.padEnd(8)}` : '') +
    `  align:${align.label.padEnd(11)}` +
    `  news:${newsScore != null ? '+' + newsScore : 'N/A'}` +
    `  ${sig.bias} [${sig.confidence}]\n`
  );

  return {
    symbol, name: stockName,
    composite: cs, adjScore: sig.adjScore, finalScore,
    newsScore: newsScore ?? 0, newsSignal: newsSignal ?? '-',
    signal: sig, sqzmom, alignment: align,
    tfs: tfMap,
    price: tfMap['1D']?.details?.price,
  };
}

// ═══════════════════════════════════════════════════════════════
//  Markdown Report
// ═══════════════════════════════════════════════════════════════

function buildReport(results, opts) {
  const L = [];
  const p = s => L.push(s);
  const now = new Date().toISOString();

  p('# US Stock Multi-Timeframe Analysis — Best Entry Tomorrow (v2)');
  p(`**Date:** ${now.slice(0, 10)}  |  **TF Weights:** 1W(25%) + 1D(40%) + 4H(25%) + 1H(10%)`);
  p(`**Candidates:** ${results.length}  |  **Sources:** us_selected.txt${opts.haveNews ? ' + us_news_signals.md' : ''}${opts.haveBench ? ' + SPY benchmark' : ''}`);
  p('');

  p('## Summary Ranking');
  p('');
  p('| # | Symbol | Name | Tech (1W/1D/4H/1H) | Align | ADX | RS | R/R | News | Final | Bias | Conf | Type | Chase | SQZMOM | Risk |');
  p('|---|--------|------|--------------------|-------|-----|----|----|------|-------|------|------|------|-------|--------|------|');
  results.forEach((r, i) => {
    const tc = r.composite >= 0 ? `+${r.composite}` : String(r.composite);
    const fc = r.finalScore >= 0 ? `+${r.finalScore}` : String(r.finalScore);
    const sc = ['1W', '1D', '4H', '1H'].map(k => r.tfs[k]?.score ?? '-').join('/');
    const dD = r.tfs['1D']?.details;
    const adx = dD?.ADX ? `${dD.ADX.adx}${dD.ADX.chop ? '⚠' : dD.ADX.veryStrong ? '★' : ''}` : '-';
    const rs = dD?.rs != null ? (dD.rs >= 0 ? `+${dD.rs}` : String(dD.rs)) : '-';
    const rr = dD?.rr != null ? r1(dD.rr) : '-';
    const risk = [
      r.signal.overheated && 'OVERHEAT',
      r.signal.bullTrap   && 'BULL-TRAP',
      r.signal.fakeBreak  && 'FAKE-BRK',
      r.signal.nearResist && 'RESIST',
      r.signal.momDecay   && 'MOM-DECAY',
      r.signal.chop       && 'CHOP',
      r.signal.bearDiv    && 'BEAR-DIV',
      r.signal.lowRR      && 'POOR-RR',
    ].filter(Boolean).join(' ') || 'OK';
    p(`| ${i+1} | **${r.symbol}** | ${r.name} | ${tc} (${sc}) | ${r.alignment.label} | ${adx} | ${rs} | ${rr} | ${r.newsScore != null ? '+'+r.newsScore : '-'} | **${fc}** | **${r.signal.bias}** | **${r.signal.confidence}** | ${r.signal.type} | ${r.signal.chaseOK} | ${r.sqzmom} | ${risk} |`);
  });
  p('');
  p('---');
  p('');

  p('## Detailed Technical Analysis');
  p('');
  results.forEach((r, i) => p(detail(r, i + 1)));

  const best = results.filter(r =>
    r.signal.bias.includes('Long') &&
    !r.signal.overheated && !r.signal.fakeBreak && !r.signal.bullTrap &&
    !r.signal.bearDiv && !r.signal.chop && !r.signal.lowRR &&
    r.finalScore >= 8 && r.signal.confidence !== 'Low'
  );

  p('## Top Entry Candidates for Tomorrow');
  p('');
  if (best.length === 0) {
    p('> No low-risk long setup with Medium/High confidence and clean R/R. Wait for pullback or fresh catalyst.');
    p('');
  } else {
    best.forEach((r, i) => {
      const D = r.tfs['1D']; const d = D?.details;
      p(`### #${i+1} — ${r.name} (${r.symbol})`);
      p('');
      p('| Dimension | Assessment |');
      p('|-----------|-----------|');
      p(`| **Signal Bias** | **${r.signal.bias}** |`);
      p(`| **Confidence** | **${r.signal.confidence}** |`);
      p(`| **Trade Type** | **${r.signal.type}** |`);
      p(`| **Chase OK?** | **${r.signal.chaseOK}** |`);
      p(`| Multi-TF Alignment | ${r.alignment.summary} → ${r.alignment.label} |`);
      p(`| Tech Composite | ${r.composite >= 0 ? '+' + r.composite : r.composite} → adj ${r.adjScore >= 0 ? '+'+r.adjScore : r.adjScore} |`);
      p(`| News Score | ${r.newsScore != null ? '+'+r.newsScore : '-'} (${r.newsSignal}) |`);
      p(`| Final Combined | **${r.finalScore >= 0 ? '+'+r.finalScore : r.finalScore}** |`);
      p(`| SQZMOM Daily | ${r.sqzmom} |`);
      p(`| Current Price | ${r.price ?? '-'} |`);
      if (d) {
        p(`| ATR Stop Loss | ${d.atrStop ?? '-'} (1.5× ATR) |`);
        p(`| Pivot Target | ${d.target ?? '-'} |`);
        p(`| Risk/Reward | ${d.rr ?? '-'}${d.rr != null && d.rr >= 2 ? ' ★' : d.rr != null && d.rr < 1.5 ? ' ⚠' : ''} |`);
        p(`| ADX(14) | ${d.ADX?.adx ?? '-'} (${d.ADX?.chop ? 'CHOP' : d.ADX?.trending ? (d.ADX.bullishDM ? 'Trending up' : 'Trending down') : 'Weak'}) |`);
        p(`| RS vs SPY | ${d.rs != null ? (d.rs >= 0 ? '+'+d.rs : d.rs) + '%' : '-'} |`);
        const liveTag = d.RSI_live != null && Math.abs(d.RSI_live - d.RSI_calc) > 5 ? ` (live=${d.RSI_live}, calc=${d.RSI_calc})` : '';
        p(`| RSI(14) | ${d.RSI}${liveTag} ${d.RSI < 50 ? '(room)' : d.RSI > 70 ? '(elevated)' : '(healthy)'} |`);
        p(`| Stoch RSI | ${d.stochRsi ?? '-'} ${d.stochRsi != null && d.stochRsi < 20 ? '(oversold)' : d.stochRsi != null && d.stochRsi > 80 ? '(overbought)' : ''} |`);
        p(`| RSI Divergence | ${d.divergence?.bull ? '**BULLISH ★★**' : d.divergence?.bear ? '**BEARISH ⚠**' : 'None'} |`);
        p(`| MACD | hist ${d.MACD.hist > 0 ? '+' : ''}${d.MACD.hist} ${d.MACD.turning ? '**GOLDEN CROSS**' : d.MACD.histRising ? 'accel up' : 'decel'} |`);
        p(`| Squeeze | ${d.SQZ ? `**COMPRESSED** (${d.SQZ_STREAK} bars)` : 'released'} |`);
        p(`| EMA Alignment | ${d.bullEMA ? 'Bull stack' : 'Not aligned'} |`);
        p(`| HH/HL Structure | ${d.hhhl ? 'YES — uptrend intact' : 'NO'} |`);
        p(`| Volume Ratio | ${d.volRatio}x |`);
        p(`| Volume Climax | ${d.climax ? '**YES — capitulation**' : 'No'} |`);
        p(`| OBV Direction | ${d.obvDir === 'up' ? 'Rising — inflow' : 'Falling'} |`);
        p(`| Returns 3d/5d/20d | ${d.ret3}% / ${d.ret5}% / ${d.ret20}% ${d.retAccel ? '★ accel' : ''} |`);
        p(`| Support (${d.supportTests || 0} tests) | ${d.supportPrice ?? 'N/A'} |`);
        p(`| Key Resistance | ${d.resistPrice ?? 'N/A'} |`);
      }
      p('');
      p('**Core Reasons:**');
      (D?.notes || []).slice(0, 8).forEach(n => p(`- ${n}`));
      if (r.signal.risks.length) {
        p('');
        p('**Key Risks:**');
        r.signal.risks.forEach(risk => p(`- WARNING: ${risk}`));
      }
      p('');
      p('---');
      p('');
    });
  }

  const traps = results.filter(r => r.signal.bullTrap || r.signal.fakeBreak || r.signal.overheated || r.signal.bearDiv);
  if (traps.length) {
    p('## Bull Trap / Fake Breakout / Overheated / Bearish Divergence Warnings');
    p('');
    traps.forEach(r => {
      const flags = [
        r.signal.bullTrap   && 'BULL-TRAP',
        r.signal.fakeBreak  && 'FAKE-BRK',
        r.signal.overheated && 'OVERHEAT',
        r.signal.bearDiv    && 'BEAR-DIV',
      ].filter(Boolean).join(', ');
      p(`- **${r.name} (${r.symbol})** [${flags}] — final:${r.finalScore} — ${r.signal.risks.join('; ')}`);
    });
    p('');
  }

  p('---');
  p(`*Generated: ${now}*`);
  p(`*Indicators (v2): EMA5/20/50/200, RSI, MACD, ADX(14), Squeeze(BB+KC), ATR, OBV, Pivot HH/HL, Stoch RSI, RSI Divergence*`);
  p(`*Enhancements: ADX chop filter, divergence detect, volume climax, squeeze streak, return accel, support tests, R/R + ATR stop, RS vs SPY*`);
  return L.join('\n');
}

function detail(r, rank) {
  const L = [];
  const p = s => L.push(s);
  const D = r.tfs['1D'], W = r.tfs['1W'], H4 = r.tfs['4H'], H1 = r.tfs['1H'];
  const d = D?.details;

  p(`### ${rank}. ${r.name} (${r.symbol})`);
  p('');
  if (r.newsScore != null) p(`News: +${r.newsScore} (${r.newsSignal})  |  Confidence: **${r.signal.confidence}**`);
  else                     p(`Confidence: **${r.signal.confidence}**`);
  p('');
  p('**Multi-TF Scores:**');
  p(`- 1W: ${W?.score ?? 'N/A'} | 1D: ${D?.score ?? 'N/A'} | 4H: ${H4?.score ?? 'N/A'} | 1H: ${H1?.score ?? 'N/A'} | **Composite: ${r.composite}** | **Adj: ${r.adjScore}** | **Final: ${r.finalScore}**`);
  p(`- Trend Alignment: ${r.alignment.summary}  →  **${r.alignment.label}**`);
  p('');
  p('**[TRADE SIGNAL]**');
  p(`- Conclusion: **${r.signal.bias}** (${r.signal.confidence})`);
  p(`- Type: ${r.signal.type}`);
  p(`- Chase OK: **${r.signal.chaseOK}**`);
  p(`- SQZMOM: ${r.sqzmom}`);
  if (d?.atrStop != null) p(`- Stop / Target: ${d.atrStop} / ${d.target ?? '-'}  (R/R: ${d.rr ?? '-'})`);
  if (r.signal.risks?.length) p(`- Key Risks: ${r.signal.risks.join('; ')}`);
  p(`- Bull Trap: ${r.signal.bullTrap ? '**YES**' : 'No'}`);
  p(`- Fake Breakout: ${r.signal.fakeBreak ? '**YES**' : 'No'}`);
  p(`- Reversal Setup: ${r.signal.reversal ? '**YES**' : 'No'}`);
  p(`- Choppy Market: ${r.signal.chop ? '**YES (ADX low)**' : 'No'}`);
  p(`- Bearish Divergence: ${r.signal.bearDiv ? '**YES**' : 'No'}`);
  p(`- Poor R/R: ${r.signal.lowRR ? '**YES**' : 'No'}`);
  p('');

  if (d) {
    p('**1D Key Indicators:**');
    p('| Indicator | Value | Status |');
    p('|-----------|-------|--------|');
    p(`| Price | ${d.price} | — |`);
    p(`| ATR Stop / Target | ${d.atrStop ?? '-'} / ${d.target ?? '-'} | R/R: ${d.rr ?? '-'} |`);
    p(`| ADX(14) | ${d.ADX?.adx ?? '-'} (+DI:${d.ADX?.plusDI ?? '-'} -DI:${d.ADX?.minusDI ?? '-'}) | ${d.ADX?.chop ? 'CHOP' : d.ADX?.veryStrong ? 'VERY STRONG' : d.ADX?.trending ? 'Trending' : 'Weak'} |`);
    p(`| RS vs SPY | ${d.rs != null ? (d.rs >= 0 ? '+'+d.rs : d.rs) + '%' : '-'} | ${d.rs > 5 ? 'Leader' : d.rs > 0 ? 'Outperform' : d.rs < -5 ? 'Laggard' : '-'} |`);
    p(`| EMA20 Distance | ${d.dist20Pct}% | ${Math.abs(d.dist20Pct) < 3 ? 'Dip zone' : d.dist20Pct > 12 ? 'Overextended' : 'Normal'} |`);
    const liveExtra = d.RSI_live != null ? ` (calc=${d.RSI_calc}, live=${d.RSI_live})` : '';
    p(`| RSI(14) | ${d.RSI}${liveExtra} | ${d.RSI < 35 ? 'Oversold' : d.RSI > 75 ? 'Overbought' : 'Healthy'} |`);
    p(`| Stoch RSI | ${d.stochRsi ?? '-'} | ${d.stochRsi != null && d.stochRsi < 20 ? 'Oversold' : d.stochRsi != null && d.stochRsi > 80 ? 'Overbought' : 'Mid'} |`);
    p(`| RSI Divergence | ${d.divergence?.bull ? 'BULLISH ★' : d.divergence?.bear ? 'BEARISH ⚠' : 'None'} | — |`);
    p(`| MACD hist | ${d.MACD.hist} | ${d.MACD.turning ? 'GOLDEN CROSS' : d.MACD.histRising ? 'Up' : 'Down'} |`);
    p(`| Squeeze | ${d.SQZ ? `COMPRESSED (${d.SQZ_STREAK} bars)` : 'Released'} | ${d.SQZ_STREAK >= 5 ? 'Fully coiled' : d.SQZ ? 'Coiling' : '-'} |`);
    p(`| BB Width% | ${d.bbWidth}% | ${d.bbWidth < 4 ? 'Coiling' : 'Normal'} |`);
    p(`| ATR% | ${d.atrPct}% | ${d.atrPct < 2 ? 'Low vol' : d.atrPct > 4 ? 'High risk' : 'Normal'} |`);
    p(`| Volume Ratio | ${d.volRatio}x | ${d.volRatio > 1.5 ? 'Surge' : d.volRatio < 0.7 ? 'Dry' : 'Normal'} |`);
    p(`| Volume Climax | ${d.climax ? 'YES ★' : 'No'} | ${d.climax ? 'Capitulation' : '-'} |`);
    p(`| OBV | ${d.obvDir} | ${d.obvDir === 'up' ? 'Inflow' : 'Outflow'} |`);
    p(`| Returns 3d/5d/10d/20d | ${d.ret3}/${d.ret5}/${d.ret10}/${d.ret20}% | ${d.retAccel ? '★ accelerating' : '-'} |`);
    p(`| EMA Bull Stack | ${d.bullEMA ? 'YES' : 'NO'} | — |`);
    p(`| Above EMA200 | ${d.aboveEMA200 ? 'YES' : 'NO'} | — |`);
    p(`| HH/HL | ${d.hhhl ? 'YES' : 'NO'} | — |`);
    p(`| Range pos (20-bar) | ${d.rangePct}% | ${d.rangePct > 80 ? 'High' : d.rangePct < 20 ? 'Low' : 'Mid'} |`);
    p(`| Support / tests | ${d.supportPrice ?? '-'} (${d.supportTests || 0} tests) | ${d.nearSupport ? 'Near' : '-'} |`);
    p(`| Resistance | ${d.resistPrice ?? '-'} | ${d.nearResist ? 'NEAR' : '-'} |`);
    p('');
    if (D?.notes?.length) {
      p('**1D Signal Detail:**');
      D.notes.forEach(n => p(`- ${n}`));
      p('');
    }
  }

  if (W?.details) {
    const wd = W.details;
    p(`**1W:** EMA stack=${wd.bullEMA ? 'Y' : 'N'} | HH/HL=${wd.hhhl ? 'Y' : 'N'} | RSI=${wd.RSI} | ADX=${wd.ADX?.adx ?? '-'} | Squeeze=${wd.SQZ ? 'Y' : 'N'} | Score=${W.score}`);
  }
  if (H4?.details) {
    const h4d = H4.details;
    p(`**4H:** RSI=${h4d.RSI} | MACD=${h4d.MACD.aboveZero ? '+' : '-'}${h4d.MACD.turning ? ' ✕' : ''} | ADX=${h4d.ADX?.adx ?? '-'} | Vol=${h4d.volRatio}x | Score=${H4.score}`);
  }
  if (H1?.details) {
    const h1d = H1.details;
    p(`**1H:** RSI=${h1d.RSI} | MACD=${h1d.MACD.aboveZero ? '+' : '-'}${h1d.MACD.turning ? ' ✕' : ''} | Score=${H1.score}`);
  }
  p('');
  p('---');
  p('');
  return L.join('\n');
}

// ═══════════════════════════════════════════════════════════════
//  Main
// ═══════════════════════════════════════════════════════════════

async function main() {
  const args = parseArgs();
  const opts = {
    noLive: !!args['no-live'],
    noBench: !!args['no-bench'],
    top: args.top ? parseInt(args.top, 10) : null,
  };

  const symbols = loadSymbols(args);
  const newsMap = loadNewsScores();
  const haveNews = Object.keys(newsMap).length > 0;

  let candidates = symbols.map(sym => ({
    symbol: sym,
    newsScore:  newsMap[sym]?.newsScore  ?? null,
    newsSignal: newsMap[sym]?.newsSignal ?? null,
  }));

  if (opts.top && haveNews) {
    candidates = candidates
      .filter(c => c.newsScore != null)
      .sort((a, b) => b.newsScore - a.newsScore)
      .slice(0, opts.top);
  }

  console.log('\n+----------------------------------------------------------+');
  console.log('|  US Stock MTF Analysis (Master v2 — Accuracy Tuned)      |');
  console.log('|  EMA/RSI/MACD/ADX/Squeeze/OBV + StochRSI + Divergence    |');
  console.log('|  + Climax/Streak/RetAccel/Support/RR/RS-vs-SPY            |');
  console.log('+----------------------------------------------------------+\n');
  console.log(`Candidates    : ${candidates.length} stocks`);
  console.log(`Sources       : ${SEL_TXT}${haveNews ? ' + ' + NEWS_MD : ' (no news)'}`);
  console.log(`Live values   : ${opts.noLive ? 'OFF' : 'ON'}`);
  console.log(`RS benchmark  : ${opts.noBench ? 'OFF' : BENCH_SYM}`);
  console.log('');

  const benchBars = opts.noBench ? null : await fetchBenchBars();

  const results = [];
  for (const meta of candidates) {
    const r = await analyzeStock(meta, opts, benchBars);
    if (r) results.push(r);
    await sleep(200);
  }

  results.sort((a, b) => b.finalScore - a.finalScore);

  console.log('\n' + '='.repeat(120));
  console.log('Multi-TF Technical Ranking (v2)');
  console.log('='.repeat(120));
  results.forEach((r, i) => {
    const tc = String(r.composite >= 0 ? `+${r.composite}` : r.composite).padStart(5);
    const fc = String(r.finalScore >= 0 ? `+${r.finalScore}` : r.finalScore).padStart(5);
    const nm = (r.name || r.symbol).slice(0, 12).padEnd(12);
    const dD = r.tfs['1D']?.details;
    const adx = dD?.ADX ? String(dD.ADX.adx).padStart(4) : ' -- ';
    const rs  = dD?.rs != null ? (dD.rs >= 0 ? `+${dD.rs}` : String(dD.rs)).padStart(5) : '  -- ';
    const flags = [
      r.signal.bullTrap   && 'BULL-TRAP',
      r.signal.fakeBreak  && 'FAKE',
      r.signal.overheated && 'OVERHEAT',
      r.signal.bearDiv    && 'BEAR-DIV',
      r.signal.chop       && 'CHOP',
      r.signal.lowRR      && 'POOR-RR',
    ].filter(Boolean).join('/');
    console.log(
      `${String(i + 1).padStart(2)}. ${nm} ${r.symbol.padEnd(14)} ` +
      `tech:${tc}  final:${fc}  ADX:${adx}  RS:${rs}  align:${r.alignment.label.padEnd(11)} ` +
      `${(r.signal.bias || '').padEnd(12)} [${r.signal.confidence.padEnd(6)}] ` +
      `${flags ? '⚠ ' + flags : 'OK'}`
    );
  });

  const best = results.filter(r =>
    r.signal.bias.includes('Long') &&
    !r.signal.overheated && !r.signal.fakeBreak && !r.signal.bullTrap &&
    !r.signal.bearDiv && !r.signal.chop && !r.signal.lowRR &&
    r.finalScore >= 8 && r.signal.confidence !== 'Low'
  );
  console.log('\nTop Entry Candidates Tomorrow (v2 strict gates):');
  if (best.length === 0) {
    console.log('  None passing all gates — wait for pullback or fresh setup');
  } else {
    best.slice(0, 5).forEach((r, i) => {
      const d = r.tfs['1D']?.details;
      console.log(`  ${i+1}. ${r.name}(${r.symbol}) final:+${r.finalScore} [${r.signal.confidence}] ${r.signal.type} chase:${r.signal.chaseOK} stop:${d?.atrStop ?? '-'} target:${d?.target ?? '-'} R/R:${d?.rr ?? '-'}`);
    });
  }

  const rpt = buildReport(results, { haveNews, haveBench: !!benchBars });
  writeFileSync(OUT_MD, rpt, 'utf8');
  console.log(`\nReport saved: ${OUT_MD}\n`);

  // ── Downstream contract JSON (consumed by 4-combined stage) ──
  const tfShape = (tf) => {
    if (!tf?.details) return null;
    const d = tf.details;
    return {
      score: tf.score,
      price: d.price,
      ema5: d.EMA5, ema20: d.EMA20, ema50: d.EMA50, ema200: d.EMA200,
      dist20_pct: d.dist20Pct,
      bull_ema: d.bullEMA, above_ema200: d.aboveEMA200,
      rsi: d.RSI, rsi_live: d.RSI_live ?? null,
      macd_hist: d.MACD?.hist ?? null, macd_turning: d.MACD?.turning ?? null, macd_above_zero: d.MACD?.aboveZero ?? null,
      adx: d.ADX?.adx ?? null, adx_chop: d.ADX?.chop ?? null,
      atr_pct: d.atrPct, atr_stop: d.atrStop, target: d.target, rr: d.rr,
      vol_ratio: d.volRatio, obv_dir: d.obvDir,
      near_resist: d.nearResist, near_support: d.nearSupport,
      resist_price: d.resistPrice, support_price: d.supportPrice,
      sqz: d.SQZ, sqz_streak: d.SQZ_STREAK,
      stoch_rsi: d.stochRsi, divergence: d.divergence,
      ret3: d.ret3, ret5: d.ret5, ret10: d.ret10, ret20: d.ret20,
      rs: d.rs ?? null,
    };
  };
  const techJson = {
    generated_at: new Date().toISOString(),
    market: 'us',
    weights: { '1W': 0.25, '1D': 0.40, '4H': 0.25, '1H': 0.10 },
    bench: benchBars ? BENCH_SYM : null,
    stocks: Object.fromEntries(results.map(r => {
      const sig = r.signal;
      const dD = r.tfs['1D']?.details ?? {};
      const flags = [
        sig.overheated && 'overheated',
        sig.fakeBreak  && 'fake_break',
        sig.bullTrap   && 'bull_trap',
        sig.momDecay   && 'mom_decay',
        sig.nearResist && 'near_resist',
        sig.chop       && 'chop',
        sig.bearDiv    && 'bear_div',
        sig.lowRR      && 'low_rr',
        sig.reversal   && 'reversal',
      ].filter(Boolean);
      return [r.symbol, {
        name: r.name,
        tech_score: r.finalScore,
        composite: r.composite,
        adj_score: r.adjScore,
        news_score: r.newsScore,
        news_signal: r.newsSignal,
        verdict: sig.bias,
        type: sig.type,
        chase: sig.chaseOK === 'YES',
        confidence: sig.confidence,
        sqzmom: r.sqzmom,
        alignment: r.alignment.label,
        alignment_summary: r.alignment.summary,
        flags,
        risks: sig.risks ?? [],
        price: r.price ?? null,
        atr_pct: dD.atrPct ?? null,
        atr_stop: dD.atrStop ?? null,
        target: dD.target ?? null,
        rr: dD.rr ?? null,
        ema20d_pct: dD.dist20Pct ?? null,
        rsi: dD.RSI ?? null,
        adx: dD.ADX?.adx ?? null,
        support: dD.supportPrice ?? null,
        resist: dD.resistPrice ?? null,
        rs: dD.rs ?? null,
        tf: {
          '1W': tfShape(r.tfs['1W']),
          '1D': tfShape(r.tfs['1D']),
          '4H': tfShape(r.tfs['4H']),
          '1H': tfShape(r.tfs['1H']),
        },
      }];
    })),
  };
  writeFileSync(OUT_JSON, JSON.stringify(techJson, null, 2), 'utf8');
  console.log(`Downstream contract JSON saved: ${OUT_JSON}\n`);
}

main().catch(console.error);
