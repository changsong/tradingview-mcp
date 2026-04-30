#!/usr/bin/env node
/**
 * US Stock Multi-Timeframe Analysis — Master Synthesis
 *
 * Combines best-of:
 *   • analyze_us_technical.js               → dynamic stock loader, hybrid `values` cross-check,
 *                                              bull-trap / fake-breakout / reversal rules,
 *                                              High/Medium/Low confidence levels
 *   • analyze_us_technical_multi.mjs        → array indicators, pivot HH/HL, weighted MTF synthesis,
 *                                              explicit trend-alignment %
 *   • analyze_us_technical_multiframe.js    → structural range positioning
 *   • analyze_us_mtf.mjs (previous)         → markdown report, news bonus, SQZMOM integration
 *
 * TF Weights : 1W(25%) + 1D(40%) + 4H(25%) + 1H(10%)
 * Indicators : EMA5/20/50/200, RSI(14), MACD(12,26,9), Squeeze(BB+KC), ATR, OBV, Pivot HH/HL
 * Risk Flags : OVERHEAT / FAKE-BRK / BULL-TRAP / MOM-DECAY / RESIST
 * Confidence : HIGH / MEDIUM / LOW
 *
 * Usage:
 *   node analyze_us_mtf.mjs                          # uses watchlist/us_selected.txt
 *   node analyze_us_mtf.mjs --symbols=AAPL,NVDA      # CLI override
 *   node analyze_us_mtf.mjs --top=10                 # cap candidate pool to top-10 by news score
 *   node analyze_us_mtf.mjs --no-live                # skip chart `values` cross-check
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const CLI    = 'node src/cli/index.js';
const OUT_MD = './watchlist/us_tech_signals.md';
const SEL_TXT = './watchlist/us_selected.txt';
const NEWS_MD = './watchlist/us_news_signals.md';

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
  if (!existsSync(NEWS_MD)) return {};
  const raw = readFileSync(NEWS_MD, 'utf8');
  const map = {};
  // Match: | 1 | **NYSE:ENVA** | **+31** | 🟢 Long (Strong) | ...
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

function r1(v) { return Math.round(v * 10) / 10; }
function r2(v) { return Math.round(v * 100) / 100; }

function scoreTF(bars, tfKey, live = {}) {
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
  const RSI_calc = Math.round(rsiCalc(C, 14) * 10) / 10;
  const MACD     = macdCalc(C);

  // Hybrid: prefer live values when present and substantially different
  let RSI = RSI_calc;
  let RSI_live = null;
  if (typeof live.rsi === 'number') {
    RSI_live = Math.round(live.rsi * 10) / 10;
    if (Math.abs(RSI_live - RSI_calc) > 5) RSI = RSI_live;  // chart wins on big divergence
  }
  let macdHist_live = null;
  if (typeof live.macdHist === 'number') {
    macdHist_live = Math.round(live.macdHist * 10000) / 10000;
    // adopt live histogram sign if it disagrees with computed
    if ((MACD.hist > 0) !== (macdHist_live > 0)) {
      MACD.hist      = macdHist_live;
      MACD.aboveZero = macdHist_live > 0;
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

  // 20-bar range position (legacy structural dimension)
  const last20H = Math.max(...H.slice(-20)), last20L = Math.min(...L.slice(-20));
  const rangePct = last20H > last20L ? ((price - last20L) / (last20H - last20L)) * 100 : 50;

  // ── Scoring ──
  let score = 0; const notes = [];

  // Trend (±35)
  if (bullEMA)       { score += 12; notes.push('EMA bull alignment (+12)'); }
  if (aboveEMA200)   { score += 8;  notes.push('Above EMA200 (+8)'); }
  else               { score -= 8;  notes.push('Below EMA200 (-8)'); }
  if (ema200Rising)  { score += 4;  notes.push('EMA200 rising (+4)'); }
  if (hhhl)          { score += 10; notes.push('HH/HL uptrend structure (+10) ***'); }
  if (llhl)          { score -= 8;  notes.push('LH downtrend structure (-8)'); }
  if (Math.abs(dist20Pct) < 3)  { score += 5;  notes.push(`Near EMA20 dip zone (${dist20Pct.toFixed(1)}%, +5) ***`); }
  else if (dist20Pct > 12)      { score -= 10; notes.push(`EMA20 deviation ${dist20Pct.toFixed(1)}% overextended (-10)`); }

  // Momentum (±30)
  if (RSI > 50 && RSI < 72)  { score += 8;  notes.push(`RSI ${RSI} healthy zone (+8)`); }
  else if (RSI < 35)         { score += 6;  notes.push(`RSI ${RSI} oversold bounce (+6)`); }
  else if (RSI > 80)         { score -= 12; notes.push(`RSI ${RSI} overbought danger (-12)`); }
  if (MACD.turning)          { score += 12; notes.push('MACD golden cross / hist flip (+12) ***'); }
  else if (MACD.aboveZero && MACD.histRising) { score += 8; notes.push('MACD hist positive & accelerating (+8)'); }
  else if (MACD.aboveZero)   { score += 4;  notes.push('MACD hist positive (+4)'); }
  else if (!MACD.turning)    { score -= 6;  notes.push('MACD hist negative (-6)'); }

  // Squeeze / Volatility (±20)
  if (SQZ)               { score += 18; notes.push('SQUEEZE compression — pre-breakout (+18) ***'); }
  else if (BB.bw < 0.04) { score += 6;  notes.push('BB narrowing, coiling (+6)'); }
  if (atrPct < 1.5)      { score += 3;  notes.push(`ATR ${atrPct.toFixed(1)}% low volatility (+3)`); }
  else if (atrPct > 4.5) { score -= 8;  notes.push(`ATR ${atrPct.toFixed(1)}% high risk (-8)`); }

  // Volume (±17)
  if (volTrend === 'expanding') { score += 8; notes.push('Volume expanding trend (+8)'); }
  if (volRatio > 1.5)           { score += 5; notes.push(`Vol ratio ${volRatio.toFixed(1)}x surge (+5)`); }
  else if (volRatio < 0.5)      { score -= 5; notes.push('Significantly low volume (-5)'); }
  if (obvDir === 'up')          { score += 4; notes.push('OBV rising — smart money inflow (+4)'); }

  // Structure (±12)
  if (nearSupport)  { score += 8; notes.push('Near support level — dip buy zone (+8) ***'); }
  if (nearResist)   { score -= 8; notes.push('Near resistance — caution (-8)'); }
  if (nearLow52 && !nearHigh52) { score += 5; notes.push('Near 52W low — reversal zone (+5)'); }
  if (nearHigh52)   { score -= 4; notes.push('Near 52W high (-4)'); }

  return {
    score, notes,
    details: {
      price, EMA5: r2(EMA5), EMA20: r2(EMA20),
      EMA50: EMA50 ? r2(EMA50) : null, EMA200: EMA200 ? r2(EMA200) : null,
      dist20Pct: r1(dist20Pct), bullEMA, aboveEMA200, ema200Rising, hhhl, llhl,
      RSI, RSI_calc, RSI_live, MACD, macdHist_live, SQZ,
      bbWidth: r1(BB.bw * 100), atrPct: r1(atrPct),
      volRatio: r1(volRatio), volTrend, obvDir,
      nearHigh52, nearLow52, nearResist, nearSupport,
      resistPrice: nearestR ? r2(nearestR.p) : null,
      supportPrice: nearestS ? r2(nearestS.p) : null,
      rangePct: r1(rangePct),
    },
    tf: tfKey,
  };
}

// ═══════════════════════════════════════════════════════════════
//  Multi-TF Synthesis: Composite + Trend Alignment + Signal
// ═══════════════════════════════════════════════════════════════

const TF_WEIGHT = { '1W': 0.25, '1D': 0.40, '4H': 0.25, '1H': 0.10 };

function composite(tfs) {
  let s = 0, w = 0;
  for (const [tf, res] of Object.entries(tfs)) {
    if (res && TF_WEIGHT[tf]) { s += res.score * TF_WEIGHT[tf]; w += TF_WEIGHT[tf]; }
  }
  return w ? Math.round(s / w * 10) / 10 : 0;
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
    nearResist: false, reversal: false, newsBonus: 0, adjScore: 0, sqzmom,
  };
  const d = D.details;
  const cs = composite(tfs);

  // Bias from composite (raw, before adjustment)
  let bias = cs >= 20 ? 'Strong Long'
           : cs >=  8 ? 'Long'
           : cs >= -5 ? 'Watch'
           : cs >= -20? 'Short'
           : 'Strong Short';

  // ── Risk pattern detection (v3 rules) ──
  const overheated  = d.dist20Pct > 12 || d.RSI > 78;
  const overbought  = d.RSI > 70;
  const nearResist  = d.nearResist || d.nearHigh52;
  const lowVol      = d.volRatio < 1.2;
  const highInRange = d.rangePct > 90 || d.dist20Pct > 8;

  // Rule: BULL TRAP — overbought near resistance (诱多)
  const bullTrap  = overbought && nearResist;
  // Rule: FAKE BREAKOUT — high in range, near resistance, weak volume
  const fakeBreak = nearResist && lowVol && highInRange;
  // Rule: MOMENTUM DECAY
  const momDecay  = d.RSI > 75 || (!d.MACD.aboveZero && !d.MACD.turning && bias.includes('Long'));
  // Rule: REVERSAL — oversold + near support + 1H MACD turning up
  const reversal  = d.RSI < 35 && d.nearSupport && (H1?.details?.MACD?.turning ?? false);

  // Signal type classification
  const hasSqz = D.notes.some(n => n.includes('SQUEEZE'));
  let type = '-';
  if (reversal)                                       type = 'Reversal (Oversold Bounce)';
  else if (hasSqz && bias.includes('Long'))           type = 'Breakout (Squeeze Release)';
  else if (d.MACD.turning && d.dist20Pct < 3)        type = 'Reversal (MACD Cross)';
  else if (d.nearSupport && bias.includes('Long'))    type = 'Pullback Buy (Near Support)';
  else if (d.hhhl && !overheated)                     type = 'Trend Follow (HH/HL Intact)';
  else if (overheated && bias.includes('Long'))       type = 'Overextended Chase (High Risk)';
  else if (bias.includes('Short'))                    type = 'Downtrend';
  else if (bias.includes('Long'))                     type = 'Trend Continuation';
  else                                                type = 'Range / No Edge';

  // ── Score adjustment from trap rules ──
  let adjScore = cs;
  if (bullTrap)  adjScore -= 12;
  if (fakeBreak) adjScore -= 10;
  if (reversal)  adjScore +=  8;
  adjScore = Math.round(adjScore * 10) / 10;

  // Demote bias on severe trap risk
  if (bullTrap && bias === 'Strong Long') bias = 'Long';
  else if (bullTrap && bias === 'Long')   bias = 'Watch';
  if (fakeBreak && bias === 'Strong Long') bias = 'Long';

  // News bonus (capped)
  const newsBonus = meta?.newsScore != null ? Math.min(10, Math.round(meta.newsScore / 3)) : 0;

  // Chase-OK gating
  const chaseOK = bias.includes('Long') &&
                  d.RSI < 72 && !nearResist && !bullTrap && !fakeBreak &&
                  (hasSqz || d.MACD.turning || (d.MACD.aboveZero && d.volRatio > 1)) ? 'YES' : 'NO';

  // Risk list (human-readable)
  const risks = [];
  if (bullTrap)        risks.push(`Bull trap risk: RSI ${d.RSI} + near resistance`);
  if (fakeBreak)       risks.push('Fake breakout risk: high in range + low volume');
  if (overheated && !bullTrap) risks.push(`Overextended: dist20=${d.dist20Pct}%, RSI=${d.RSI}`);
  if (nearResist && !bullTrap && !fakeBreak) risks.push('Near resistance / 52W high');
  if (momDecay)        risks.push('Momentum decay (RSI>75 or MACD weak)');
  if (W?.details?.llhl) risks.push('Weekly LH structure (downtrend pressure)');
  if (d.obvDir === 'down' && bias.includes('Long')) risks.push('OBV diverging (distribution)');
  if (meta?.newsScore != null && meta.newsScore < 5 && bias.includes('Long'))
    risks.push('Weak news catalyst — pure technical');

  // ── Confidence level ──
  // High   : strong final score, low risk count, alignment one-sided
  // Medium : decent score and tolerable risks
  // Low    : everything else
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

async function analyzeStock(meta, opts) {
  const { symbol, newsScore, newsSignal } = meta;
  process.stdout.write(`  ${symbol.padEnd(16)} `);

  const sw = run(`symbol ${symbol}`);
  if (!sw?.success) { process.stdout.write('X switch failed\n'); return null; }
  await sleep(1200);

  const tfMap = {};
  for (const { key, tf, bars } of TF_LIST) {
    const sw2 = run(`timeframe ${tf}`);
    if (!sw2?.success) { process.stdout.write('!'); continue; }
    await sleep(700);

    const ohlcv = run(`ohlcv -n ${bars}`);
    if (!ohlcv?.success || !ohlcv.bars?.length || ohlcv.bars.length < 20) {
      process.stdout.write('o');
      continue;
    }

    // Hybrid: opportunistically read live RSI/MACD off chart
    let live = {};
    if (!opts.noLive) {
      live = readLiveValues();
    }

    tfMap[key] = scoreTF(ohlcv.bars, key, live);
    process.stdout.write(live.rsi != null ? '+' : '|');
  }

  // Quote (for friendly name)
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
  const finalScore = Math.round((sig.adjScore + sig.newsBonus) * 10) / 10;

  process.stdout.write(
    ` tech:${(cs >= 0 ? '+' + cs : cs).toString().padStart(5)}` +
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

  p('# US Stock Multi-Timeframe Analysis — Best Entry Tomorrow');
  p(`**Date:** ${now.slice(0, 10)}  |  **TF Weights:** 1W(25%) + 1D(40%) + 4H(25%) + 1H(10%)`);
  p(`**Candidate Pool:** ${results.length} stocks  |  **Sources:** us_selected.txt${opts.haveNews ? ' + us_news_signals.md' : ''}`);
  p('');

  // Summary table
  p('## Summary Ranking');
  p('');
  p('| # | Symbol | Name | Tech (1W/1D/4H/1H) | Align | News | Final | Bias | Conf | Type | Chase | SQZMOM | Risk |');
  p('|---|--------|------|--------------------|-------|------|-------|------|------|------|-------|--------|------|');
  results.forEach((r, i) => {
    const tc = r.composite >= 0 ? `+${r.composite}` : String(r.composite);
    const fc = r.finalScore >= 0 ? `+${r.finalScore}` : String(r.finalScore);
    const sc = ['1W', '1D', '4H', '1H'].map(k => r.tfs[k]?.score ?? '-').join('/');
    const risk = [
      r.signal.overheated && 'OVERHEAT',
      r.signal.bullTrap   && 'BULL-TRAP',
      r.signal.fakeBreak  && 'FAKE-BRK',
      r.signal.nearResist && 'RESIST',
      r.signal.momDecay   && 'MOM-DECAY',
    ].filter(Boolean).join(' ') || 'OK';
    p(`| ${i+1} | **${r.symbol}** | ${r.name} | ${tc} (${sc}) | ${r.alignment.label} | ${r.newsScore != null ? '+'+r.newsScore : '-'} | **${fc}** | **${r.signal.bias}** | **${r.signal.confidence}** | ${r.signal.type} | ${r.signal.chaseOK} | ${r.sqzmom} | ${risk} |`);
  });
  p('');
  p('---');
  p('');

  // Detailed per-stock
  p('## Detailed Technical Analysis');
  p('');
  results.forEach((r, i) => p(detail(r, i + 1)));

  // Best candidates section
  const best = results.filter(r =>
    r.signal.bias.includes('Long') &&
    !r.signal.overheated &&
    !r.signal.fakeBreak &&
    !r.signal.bullTrap &&
    r.finalScore >= 8 &&
    r.signal.confidence !== 'Low'
  );

  p('## Top Entry Candidates for Tomorrow');
  p('');
  if (best.length === 0) {
    p('> No low-risk long setup with Medium/High confidence. Wait for pullback or new catalyst.');
    p('');
  } else {
    best.forEach((r, i) => {
      const D = r.tfs['1D'];
      const d = D?.details;
      p(`### #${i+1} — ${r.name} (${r.symbol})`);
      p('');
      p('| Dimension | Assessment |');
      p('|-----------|-----------|');
      p(`| **Signal Bias** | **${r.signal.bias}** |`);
      p(`| **Confidence** | **${r.signal.confidence}** |`);
      p(`| **Trade Type** | **${r.signal.type}** |`);
      p(`| **Chase OK?** | **${r.signal.chaseOK}** |`);
      p(`| Multi-TF Alignment | ${r.alignment.summary} → ${r.alignment.label} |`);
      p(`| Tech Composite | ${r.composite >= 0 ? '+' + r.composite : r.composite} (after trap-rule adj: ${r.adjScore >= 0 ? '+'+r.adjScore : r.adjScore}) |`);
      p(`| News Score | ${r.newsScore != null ? '+'+r.newsScore : '-'} (${r.newsSignal}) |`);
      p(`| Final Combined | **${r.finalScore >= 0 ? '+'+r.finalScore : r.finalScore}** |`);
      p(`| SQZMOM Daily | ${r.sqzmom} |`);
      p(`| Current Price | ${r.price ?? '-'} |`);
      if (d) {
        const liveTag = d.RSI_live != null && Math.abs(d.RSI_live - d.RSI_calc) > 5 ? ` (live=${d.RSI_live}, calc=${d.RSI_calc})` : '';
        p(`| RSI(14) | ${d.RSI}${liveTag} ${d.RSI < 50 ? '(room to run)' : d.RSI > 70 ? '(elevated — caution)' : '(healthy)'} |`);
        p(`| MACD | hist ${d.MACD.hist > 0 ? '+' : ''}${d.MACD.hist} ${d.MACD.turning ? '**GOLDEN CROSS**' : d.MACD.histRising ? 'accelerating up' : 'decelerating'} |`);
        p(`| Squeeze | ${d.SQZ ? '**COMPRESSED — pre-breakout**' : 'released'} |`);
        p(`| EMA Alignment | ${d.bullEMA ? 'Bull stack' : 'Not aligned'} |`);
        p(`| HH/HL Structure | ${d.hhhl ? 'YES — uptrend intact' : 'NO'} |`);
        p(`| Volume Ratio | ${d.volRatio}x ${d.volRatio > 1.5 ? '(surging)' : d.volRatio < 0.7 ? '(light)' : '(normal)'} |`);
        p(`| OBV Direction | ${d.obvDir === 'up' ? 'Rising — smart money inflow' : 'Falling — distribution'} |`);
        p(`| Key Support | ${d.supportPrice ?? 'N/A'} |`);
        p(`| Key Resistance | ${d.resistPrice ?? 'N/A'} |`);
      }
      p('');
      p('**Core Reasons:**');
      (D?.notes || []).slice(0, 7).forEach(n => p(`- ${n}`));
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

  // Trap warnings
  const traps = results.filter(r => r.signal.bullTrap || r.signal.fakeBreak || r.signal.overheated);
  if (traps.length) {
    p('## Bull Trap / Fake Breakout / Overheated Warnings');
    p('');
    traps.forEach(r => {
      const flags = [
        r.signal.bullTrap   && 'BULL-TRAP',
        r.signal.fakeBreak  && 'FAKE-BRK',
        r.signal.overheated && 'OVERHEAT',
      ].filter(Boolean).join(', ');
      p(`- **${r.name} (${r.symbol})** [${flags}] — final:${r.finalScore} — ${r.signal.risks.join('; ')}`);
    });
    p('');
  }

  p('---');
  p(`*Generated: ${now}*`);
  p(`*Indicators: EMA5/20/50/200, RSI(14), MACD(12,26,9), Squeeze(BB+KC), ATR, OBV, Pivot HH/HL*`);
  p(`*Hybrid mode: live RSI/MACD from chart \`values\` cross-checked when divergence > 5*`);
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
  p(`- 1W: ${W?.score ?? 'N/A'} | 1D: ${D?.score ?? 'N/A'} | 4H: ${H4?.score ?? 'N/A'} | 1H: ${H1?.score ?? 'N/A'} | **Composite: ${r.composite}** | **Adj (trap rules): ${r.adjScore}** | **Final (w/ news): ${r.finalScore}**`);
  p(`- Trend Alignment: ${r.alignment.summary}  →  **${r.alignment.label}**`);
  p('');
  p('**[TRADE SIGNAL]**');
  p(`- Conclusion: **${r.signal.bias}** (${r.signal.confidence})`);
  p(`- Type: ${r.signal.type}`);
  p(`- Chase OK: **${r.signal.chaseOK}**`);
  p(`- SQZMOM: ${r.sqzmom}`);
  if (r.signal.risks?.length) p(`- Key Risks: ${r.signal.risks.join('; ')}`);
  p(`- Bull Trap: ${r.signal.bullTrap ? '**YES — overbought near resistance**' : 'No'}`);
  p(`- Fake Breakout: ${r.signal.fakeBreak ? '**YES — high range + low volume**' : 'No'}`);
  p(`- Reversal Setup: ${r.signal.reversal ? '**YES — oversold + support + 1H MACD turning**' : 'No'}`);
  p(`- Momentum Decay: ${r.signal.momDecay ? '**YES**' : 'No'}`);
  p('');

  if (d) {
    p('**1D Key Indicators:**');
    p('| Indicator | Value | Status |');
    p('|-----------|-------|--------|');
    p(`| Price | ${d.price} | — |`);
    p(`| EMA20 Distance | ${d.dist20Pct}% | ${Math.abs(d.dist20Pct) < 3 ? 'Dip zone' : d.dist20Pct > 12 ? 'Overextended' : 'Normal'} |`);
    const liveExtra = d.RSI_live != null ? ` (calc=${d.RSI_calc}, live=${d.RSI_live})` : '';
    p(`| RSI(14) | ${d.RSI}${liveExtra} | ${d.RSI < 35 ? 'Oversold' : d.RSI > 75 ? 'Overbought' : 'Healthy'} |`);
    p(`| MACD hist | ${d.MACD.hist} | ${d.MACD.turning ? 'GOLDEN CROSS' : d.MACD.histRising ? 'Up' : 'Down'} |`);
    p(`| Squeeze | ${d.SQZ ? 'COMPRESSED' : 'Released'} | ${d.SQZ ? 'Pre-breakout coil' : '-'} |`);
    p(`| BB Width% | ${d.bbWidth}% | ${d.bbWidth < 4 ? 'Coiling' : 'Normal'} |`);
    p(`| ATR% | ${d.atrPct}% | ${d.atrPct < 2 ? 'Low vol' : d.atrPct > 4 ? 'High risk' : 'Normal'} |`);
    p(`| Volume Ratio | ${d.volRatio}x | ${d.volRatio > 1.5 ? 'Surge' : d.volRatio < 0.7 ? 'Dry' : 'Normal'} |`);
    p(`| OBV | ${d.obvDir} | ${d.obvDir === 'up' ? 'Inflow' : 'Outflow'} |`);
    p(`| EMA Bull Stack | ${d.bullEMA ? 'YES' : 'NO'} | — |`);
    p(`| Above EMA200 | ${d.aboveEMA200 ? 'YES' : 'NO'} | — |`);
    p(`| HH/HL | ${d.hhhl ? 'YES' : 'NO'} | — |`);
    p(`| 20-bar range pos | ${d.rangePct}% | ${d.rangePct > 80 ? 'High' : d.rangePct < 20 ? 'Low' : 'Mid'} |`);
    p(`| Support | ${d.supportPrice ?? '-'} | ${d.nearSupport ? 'Near support' : '-'} |`);
    p(`| Resistance | ${d.resistPrice ?? '-'} | ${d.nearResist ? 'NEAR RESIST' : '-'} |`);
    p('');
    if (D?.notes?.length) {
      p('**1D Signal Detail:**');
      D.notes.forEach(n => p(`- ${n}`));
      p('');
    }
  }

  if (W?.details) {
    const wd = W.details;
    p(`**1W Status:** EMA stack=${wd.bullEMA ? 'YES' : 'NO'} | HH/HL=${wd.hhhl ? 'YES' : 'NO'} | RSI=${wd.RSI} | Squeeze=${wd.SQZ ? 'YES' : 'No'} | Score=${W.score}`);
  }
  if (H4?.details) {
    const h4d = H4.details;
    p(`**4H Status:** RSI=${h4d.RSI} | MACD=${h4d.MACD.aboveZero ? 'above zero' : 'below zero'}${h4d.MACD.turning ? ' CROSS' : ''} | Squeeze=${h4d.SQZ ? 'YES' : 'No'} | Vol=${h4d.volRatio}x | Score=${H4.score}`);
  }
  if (H1?.details) {
    const h1d = H1.details;
    p(`**1H Status:** RSI=${h1d.RSI} | MACD=${h1d.MACD.aboveZero ? 'above zero' : 'below zero'}${h1d.MACD.turning ? ' CROSS' : ''} | Score=${H1.score}`);
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
  const opts = { noLive: !!args['no-live'], top: args.top ? parseInt(args.top, 10) : null };

  const symbols = loadSymbols(args);
  const newsMap = loadNewsScores();
  const haveNews = Object.keys(newsMap).length > 0;

  // Build candidate pool, attaching news metadata when available
  let candidates = symbols.map(sym => ({
    symbol: sym,
    newsScore:  newsMap[sym]?.newsScore  ?? null,
    newsSignal: newsMap[sym]?.newsSignal ?? null,
  }));

  // Optionally filter by top-N news score
  if (opts.top && haveNews) {
    candidates = candidates
      .filter(c => c.newsScore != null)
      .sort((a, b) => b.newsScore - a.newsScore)
      .slice(0, opts.top);
  }

  console.log('\n+----------------------------------------------------------+');
  console.log('|  US Stock MTF Analysis (Master) -> Best Entry Tomorrow   |');
  console.log('|  EMA / RSI / MACD / Squeeze / OBV / Structure / SQZMOM   |');
  console.log('|  + bull-trap, fake-breakout, reversal, confidence levels |');
  console.log('+----------------------------------------------------------+\n');
  console.log(`Candidates    : ${candidates.length} stocks`);
  console.log(`Sources       : ${SEL_TXT}${haveNews ? ' + ' + NEWS_MD : ' (no news data)'}`);
  console.log(`Live values   : ${opts.noLive ? 'OFF' : 'ON (chart values cross-check when divergence > 5)'}`);
  console.log('');

  const results = [];
  for (const meta of candidates) {
    const r = await analyzeStock(meta, opts);
    if (r) results.push(r);
    await sleep(200);
  }

  results.sort((a, b) => b.finalScore - a.finalScore);

  console.log('\n' + '='.repeat(96));
  console.log('Multi-TF Technical Ranking');
  console.log('='.repeat(96));
  results.forEach((r, i) => {
    const tc = String(r.composite >= 0 ? `+${r.composite}` : r.composite).padStart(5);
    const fc = String(r.finalScore >= 0 ? `+${r.finalScore}` : r.finalScore).padStart(5);
    const nm = (r.name || r.symbol).slice(0, 12).padEnd(12);
    const flags = [
      r.signal.bullTrap   && 'BULL-TRAP',
      r.signal.fakeBreak  && 'FAKE',
      r.signal.overheated && 'OVERHEAT',
      r.signal.nearResist && 'RESIST',
    ].filter(Boolean).join('/');
    console.log(
      `${String(i + 1).padStart(2)}. ${nm} ${r.symbol.padEnd(14)} ` +
      `tech:${tc}  final:${fc}  align:${r.alignment.label.padEnd(11)} ` +
      `${(r.signal.bias || '').padEnd(12)} [${r.signal.confidence.padEnd(6)}] ` +
      `${flags ? '⚠ ' + flags : 'OK'}`
    );
  });

  const best = results.filter(r =>
    r.signal.bias.includes('Long') && !r.signal.overheated && !r.signal.fakeBreak &&
    !r.signal.bullTrap && r.finalScore >= 8 && r.signal.confidence !== 'Low'
  );
  console.log('\nTop Entry Candidates Tomorrow:');
  if (best.length === 0) {
    console.log('  None meeting criteria — consider waiting for pullback or fresh catalyst');
  } else {
    best.slice(0, 5).forEach((r, i) => {
      console.log(`  ${i+1}. ${r.name}(${r.symbol}) final:+${r.finalScore} [${r.signal.confidence}] ${r.signal.type} chase:${r.signal.chaseOK}`);
    });
  }

  const rpt = buildReport(results, { haveNews });
  writeFileSync(OUT_MD, rpt, 'utf8');
  console.log(`\nReport saved: ${OUT_MD}\n`);
}

main().catch(console.error);
