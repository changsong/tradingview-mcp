#!/usr/bin/env node
/**
 * A股多周期技术面深度分析 — Master v2 (准确率优化版)
 *
 * v2 增强（同步 US v2，+ A 股专属）：
 *   • ADX(14) 趋势强度过滤 — 震荡市削弱趋势分
 *   • RSI 看多/看空背离检测
 *   • Stoch RSI 动能确认
 *   • 量能高潮 (Volume Climax) 检测 — 抓底部反转
 *   • Squeeze 持续天数计数 — 蓄能越久爆发越强
 *   • 多周期收益加速度（3d/5d/10d/20d 单调递增）
 *   • 支撑位测试次数加权（多次测试 = 强支撑）
 *   • R/R 风险报酬比 + ATR 止损 + Pivot 目标价
 *   • 相对沪深300 强度 RS — 区分随大盘 vs 真领涨
 *   • A股专属：涨跌停板检测 + 连板天数（±10% 主板，±20% 创业板/科创/北交）
 *
 * 周期权重：1W(25%) + 1D(40%) + 4H(25%) + 1H(10%)
 * 风险标签：过热 / 假突 / 诱多 / 动能衰 / 压力位 / 震荡 / 看空背离 / R/R不足
 * 信心度  ：高 / 中 / 低
 *
 * 用法：
 *   node analyze_tech_cn_mtf.mjs                          # 读 cn_selected.txt
 *   node analyze_tech_cn_mtf.mjs --symbols=SSE:600519,SZSE:000001
 *   node analyze_tech_cn_mtf.mjs --top=10                 # 按新闻分前 N 只
 *   node analyze_tech_cn_mtf.mjs --no-live                # 关闭 chart 实时值校准
 *   node analyze_tech_cn_mtf.mjs --no-bench               # 跳过相对大盘计算
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// 锁定 CWD 为项目根，使 ./watchlist 等相对路径稳定
process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

const CLI       = 'node src/cli/index.js';
const OUT_MD    = './watchlist/cn_tech_signals.md';
const OUT_JSON  = './watchlist/cn_tech_signals.json';
const SEL_TXT   = './watchlist/cn_selected.txt';
const NEWS_MD   = './watchlist/cn_news_signals.md';
const NEWS_JSON = './watchlist/cn_news_signals.json';
const BENCH_SYM = 'SSE:000300';   // 沪深 300

// ═══════════════════════════════════════════════════════════════
//  CLI args + 动态加载股票池 + 新闻分加权
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
    console.error(`未找到 ${SEL_TXT}，且未提供 --symbols`);
    process.exit(1);
  }
  return readFileSync(SEL_TXT, 'utf8').trim().split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
}

// CN 新闻 md 格式：| 1 | 福赛科技 | SZSE:301529 | **+31** | ⚠️ No Trade (情绪过热) | ...
function loadNewsScores() {
  // 优先读 JSON 契约（pipeline/2-news 阶段产物）
  if (existsSync(NEWS_JSON)) {
    try {
      const j = JSON.parse(readFileSync(NEWS_JSON, 'utf8'));
      const map = {};
      for (const [sym, s] of Object.entries(j.stocks ?? {})) {
        const sig = String(s.signal ?? '');
        const newsSignal = /Long\s*\(强\)|强\s*看多/i.test(sig) ? '强看多'
                         : /Long\s*\(中\)|中等?看多/i.test(sig) ? '中看多'
                         : /Short|做空|跌|空/i.test(sig)        ? '看空/避险'
                         : /过热/i.test(sig)                      ? '过热观望'
                         : '中性';
        map[sym] = { newsScore: s.score, newsSignal, newsName: s.name };
      }
      if (Object.keys(map).length) return map;
    } catch (e) {
      console.warn(`[loadNewsScores] JSON parse 失败，回退 MD：${e.message}`);
    }
  }
  if (!existsSync(NEWS_MD)) return {};
  const raw = readFileSync(NEWS_MD, 'utf8');
  const map = {};
  const re = /\|\s*\d+\s*\|\s*([^|]+?)\s*\|\s*([A-Z]+:\d+)\s*\|\s*\*\*([+\-]?\d+)\*\*\s*\|\s*([^|]+?)\s*\|/g;
  let m;
  while ((m = re.exec(raw))) {
    const name = m[1].trim();
    const sym  = m[2].trim();
    const score = parseInt(m[3], 10);
    const sig = m[4].trim();
    const newsSignal = /Long\s*\(强\)/i.test(sig) || /强\s*看多/.test(sig) ? '强看多'
                     : /Long\s*\(中\)/i.test(sig) || /中等?看多/.test(sig) ? '中看多'
                     : /Short|做空|跌|空/.test(sig)                         ? '看空/避险'
                     : /过热|No Trade.*过热/.test(sig)                       ? '过热观望'
                     : '中性';
    map[sym] = { newsScore: score, newsSignal, newsName: name };
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
//  指标库
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

// ── ADX(14) Wilder ──
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

// ── RSI Divergence ──
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

// ── Stoch RSI ──
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

// ── Squeeze 持续 ──
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

// ── 收益加速度 ──
function returnAccel(C) {
  const n = C.length;
  if (n < 22) return { ret3: 0, ret5: 0, ret10: 0, ret20: 0, accel: false };
  const ret3  = (C[n-1] / C[n-4]  - 1) * 100;
  const ret5  = (C[n-1] / C[n-6]  - 1) * 100;
  const ret10 = (C[n-1] / C[n-11] - 1) * 100;
  const ret20 = (C[n-1] / C[n-21] - 1) * 100;
  const accel = ret3 > 0 && ret5 > 0 && ret10 > 0 && (ret3 / 3) > (ret5 / 5);
  return { ret3: r1(ret3), ret5: r1(ret5), ret10: r1(ret10), ret20: r1(ret20), accel };
}

// ── 支撑测试次数 ──
function supportTestCount(PLs, level, tolerance = 0.025) {
  if (!level) return 0;
  return PLs.filter(p => Math.abs(p.p - level) / level < tolerance).length;
}

// ── 相对大盘强度 ──
function computeRS(stockBars, benchBars, lookback = 20) {
  if (!stockBars || !benchBars) return null;
  if (stockBars.length < lookback + 1 || benchBars.length < lookback + 1) return null;
  const sRet = (stockBars.at(-1).close / stockBars[stockBars.length - 1 - lookback].close - 1) * 100;
  const bRet = (benchBars.at(-1).close / benchBars[benchBars.length - 1 - lookback].close - 1) * 100;
  return r1(sRet - bRet);
}

// ── A 股涨跌停 + 连板检测 ──
function detectLimit(bars, symbol) {
  if (!bars || bars.length < 2) return null;
  const code = (symbol.split(':').pop() || '');
  const isSTAR    = /^688/.test(code);                         // 科创板 ±20%
  const isChiNext = /^30/.test(code);                          // 创业板 ±20%
  const isBJ      = /^(43|83|87|92|82|85)/.test(code);        // 北交所 ±30% (但默认 ±20% 安全估计)
  const limitPct  = (isSTAR || isChiNext || isBJ) ? 20.0 : 10.0;

  const last = bars.at(-1), prev = bars.at(-2);
  const chg = (last.close - prev.close) / prev.close * 100;
  // 留 0.3% 浮点容差
  const upLim = chg >= limitPct - 0.3;
  const dnLim = chg <= -(limitPct - 0.3);

  // 连续涨停天数（向后扫）
  let upStreak = 0, dnStreak = 0;
  for (let i = bars.length - 1; i > 0; i--) {
    const c = (bars[i].close - bars[i-1].close) / bars[i-1].close * 100;
    if (c >= limitPct - 0.3) upStreak++; else break;
  }
  for (let i = bars.length - 1; i > 0; i--) {
    const c = (bars[i].close - bars[i-1].close) / bars[i-1].close * 100;
    if (c <= -(limitPct - 0.3)) dnStreak++; else break;
  }

  return {
    chg: r1(chg),
    limitPct,
    upLimit: upLim,
    downLimit: dnLim,
    upStreak,
    dnStreak,
    market: isSTAR ? '科创' : isChiNext ? '创业' : isBJ ? '北交' : '主板',
  };
}

// ═══════════════════════════════════════════════════════════════
//  Hybrid: 从 chart values 拉实时 RSI/MACD
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
//  单周期评分
// ═══════════════════════════════════════════════════════════════

function scoreTF(bars, tfKey, live = {}, extra = {}) {
  if (!bars || bars.length < 20) return null;
  const C = bars.map(b => b.close), H = bars.map(b => b.high);
  const L = bars.map(b => b.low),   V = bars.map(b => b.volume || 0);
  const n = C.length, price = C[n - 1];

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

  const { PHs, PLs } = pivotHL(H, L, 3);
  const lastPHs = PHs.slice(-3), lastPLs = PLs.slice(-3);
  const hhhl = lastPHs.length >= 2 && lastPLs.length >= 2 &&
               lastPHs.at(-1).p > lastPHs.at(-2).p &&
               lastPLs.at(-1).p > lastPLs.at(-2).p;
  const llhl = lastPHs.length >= 2 && lastPHs.at(-1).p < lastPHs.at(-2).p;

  const RSI_calc = r1(rsiCalc(C, 14));
  const MACD     = macdCalc(C);

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

  const BB  = bbandsCalc(C, 20, 2);
  const KC  = keltnerCalc(C, H, L, 20, 1.5);
  const SQZ = BB.upper < KC.upper && BB.lower > KC.lower;
  const ATR_VAL = atrCalc(H, L, C, 14);
  const atrPct  = (ATR_VAL / price) * 100;

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

  const lookH = Math.min(n, 250);
  const high52 = Math.max(...H.slice(-lookH)), low52 = Math.min(...L.slice(-lookH));
  const nearHigh52 = (high52 - price) / price < 0.04;
  const nearLow52  = (price - low52)  / price < 0.04;

  const resistLevels  = PHs.filter(p => p.p > price).sort((a, b) => a.p - b.p);
  const supportLevels = PLs.filter(p => p.p < price).sort((a, b) => b.p - a.p);
  const nearestR = resistLevels[0], nearestS = supportLevels[0];
  const nearResist  = nearestR && (nearestR.p - price) / price < 0.04;
  const nearSupport = nearestS && (price - nearestS.p) / price < 0.04;

  const last20H = Math.max(...H.slice(-20)), last20L = Math.min(...L.slice(-20));
  const rangePct = last20H > last20L ? ((price - last20L) / (last20H - last20L)) * 100 : 50;

  // v2 增强指标
  const ADX = adxCalc(H, L, C, 14);
  const RSI_ARR = rsiSeries(C, 14);
  const DIV = rsiDivergence(C, RSI_ARR, 30);
  const STO_RSI = stochRsi(RSI_ARR);
  const CLIMAX = volumeClimax(bars);
  const SQZ_STREAK = squeezeStreak(bars);
  const RA = returnAccel(C);
  const supportTests = nearSupport ? supportTestCount(PLs, nearestS.p) : 0;

  const atrStop = ATR_VAL ? r2(price - 1.5 * ATR_VAL) : null;
  const target  = nearestR ? r2(nearestR.p) : null;
  const rr      = (nearestR && nearestS && (price - nearestS.p) > 0)
                  ? r1((nearestR.p - price) / (price - nearestS.p))
                  : null;

  // ── 评分 ──
  let score = 0; const notes = [];
  const chopDiscount = ADX?.chop ? 0.5 : 1;

  // 趋势 (±35)
  if (bullEMA)       { const v = Math.round(12 * chopDiscount); score += v; notes.push(`EMA多头排列(+${v}${ADX?.chop ? ' 震荡折半' : ''})`); }
  if (aboveEMA200)   { score += 8;  notes.push('站上EMA200(+8)'); }
  else               { score -= 8;  notes.push('EMA200下方(-8)'); }
  if (ema200Rising)  { score += 4;  notes.push('EMA200上行(+4)'); }
  if (hhhl)          { const v = Math.round(10 * chopDiscount); score += v; notes.push(`HH/HL上升结构(+${v})★`); }
  if (llhl)          { score -= 8;  notes.push('LH下降结构(-8)'); }
  if (Math.abs(dist20Pct) < 3)  { score += 5;  notes.push(`EMA20附近低吸(${r1(dist20Pct)}%,+5)★`); }
  else if (dist20Pct > 12)      { score -= 10; notes.push(`EMA20偏离${r1(dist20Pct)}%过热(-10)`); }

  // ADX (±9)
  if (ADX) {
    if (ADX.trending && ADX.bullishDM)   { score += 6; notes.push(`ADX${ADX.adx} 趋势向上(+6)`); }
    if (ADX.veryStrong && ADX.bullishDM) { score += 3; notes.push(`ADX${ADX.adx} 极强趋势(+3)★`); }
    if (ADX.chop)                         { notes.push(`ADX${ADX.adx} 震荡市 — 趋势分已折半`); }
    if (ADX.trending && !ADX.bullishDM)   { score -= 4; notes.push(`ADX趋势但-DI主导(-4)`); }
  }

  // 动能 (±30)
  if (RSI > 50 && RSI < 72)  { score += 8;  notes.push(`RSI${RSI}健康区(+8)`); }
  else if (RSI < 35)         { score += 6;  notes.push(`RSI${RSI}超卖反弹(+6)`); }
  else if (RSI > 80)         { score -= 12; notes.push(`RSI${RSI}超买危险(-12)`); }
  if (MACD.turning)          { score += 12; notes.push('MACD金叉/柱转正(+12)★★'); }
  else if (MACD.aboveZero && MACD.histRising) { score += 8; notes.push('MACD柱正且加速(+8)'); }
  else if (MACD.aboveZero)   { score += 4;  notes.push('MACD柱正(+4)'); }
  else if (!MACD.turning)    { score -= 6;  notes.push('MACD柱负(-6)'); }

  // 背离 (±10)
  if (DIV.bull) { score += 10; notes.push('RSI看多背离(+10)★★'); }
  if (DIV.bear) { score -= 10; notes.push('RSI看空背离(-10)★★'); }

  // Stoch RSI (±4)
  if (STO_RSI != null) {
    if (STO_RSI < 20)      { score += 4; notes.push(`Stoch RSI${r1(STO_RSI)}超卖(+4)`); }
    else if (STO_RSI > 80) { score -= 4; notes.push(`Stoch RSI${r1(STO_RSI)}超买(-4)`); }
  }

  // 波动 (±20 + streak)
  if (SQZ)               { score += 18; notes.push('Squeeze压缩!爆发前(+18)★★★'); }
  else if (BB.bw < 0.04) { score += 6;  notes.push('BB收窄蓄能(+6)'); }
  if (SQZ && SQZ_STREAK >= 5)      { score += 6; notes.push(`Squeeze已${SQZ_STREAK}根 充分蓄能(+6)★`); }
  else if (SQZ && SQZ_STREAK >= 3) { score += 3; notes.push(`Squeeze已${SQZ_STREAK}根(+3)`); }
  if (atrPct < 1.5)      { score += 3;  notes.push(`ATR低${r1(atrPct)}%(+3)`); }
  else if (atrPct > 4.5) { score -= 8;  notes.push(`ATR高${r1(atrPct)}%(-8)`); }

  // 量能高潮 (+12)
  if (CLIMAX) { score += 12; notes.push('量能高潮 — 抛售耗尽反转(+12)★★'); }

  // 量能 (±17)
  if (volTrend === 'expanding') { score += 8; notes.push('量能持续扩张(+8)'); }
  if (volRatio > 1.5)           { score += 5; notes.push(`量比${r1(volRatio)}x放量(+5)`); }
  else if (volRatio < 0.5)      { score -= 5; notes.push('显著缩量(-5)'); }
  if (obvDir === 'up')          { score += 4; notes.push('OBV上行 资金流入(+4)'); }

  // 收益加速度 (+5)
  if (RA.accel) { score += 5; notes.push(`收益加速 3d:${RA.ret3}% 5d:${RA.ret5}%(+5)★`); }

  // 结构 (±12)
  if (nearSupport) {
    const bonus = supportTests >= 3 ? 12 : supportTests >= 2 ? 9 : 6;
    score += bonus;
    notes.push(`支撑位附近(${supportTests}次测试)+${bonus} ${supportTests >= 2 ? '★★' : '★'}`);
  }
  if (nearResist)   { score -= 8; notes.push('压力位附近(-8)'); }
  if (nearLow52 && !nearHigh52) { score += 5; notes.push('年内低位区域(+5)'); }
  if (nearHigh52)   { score -= 4; notes.push('年内高位附近(-4)'); }

  // R/R (仅 1D)
  if (rr != null && tfKey === '1D') {
    if (rr >= 2)        { score += 5; notes.push(`R/R ${rr} 极佳(+5)★`); }
    else if (rr >= 1.5) { score += 2; notes.push(`R/R ${rr} 可接受(+2)`); }
    else if (rr < 1)    { score -= 8; notes.push(`R/R ${rr} 入场点差(-8)`); }
  }

  // RS vs CSI300 (仅 1D)
  if (extra.rs != null && tfKey === '1D') {
    if (extra.rs > 50)       { score += 15; notes.push(`RS+${extra.rs}% 远超大盘(+15)★★★`); }
    else if (extra.rs > 30)  { score += 10; notes.push(`RS+${extra.rs}% 大幅跑赢(+10)★★`); }
    else if (extra.rs > 15)  { score += 5;  notes.push(`RS+${extra.rs}% 跑赢大盘(+5)★`); }
    else if (extra.rs > 0)   { score += 2;  notes.push(`RS+${extra.rs}% 略强大盘(+2)`); }
    else if (extra.rs < -5)  { score -= 4;  notes.push(`RS${extra.rs}% 跑输大盘(-4)`); }
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
      limitInfo: extra.limitInfo ?? null,
    },
    tf: tfKey,
  };
}

// ═══════════════════════════════════════════════════════════════
//  多周期合成
// ═══════════════════════════════════════════════════════════════

const TF_WEIGHT = { '1W': 0.35, '1D': 0.40, '4H': 0.20, '1H': 0.05 };

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
    bias: '观望', type: '-', chaseOK: 'NO', risks: [], confidence: '低',
    overheated: false, fakeBreak: false, bullTrap: false, momDecay: false,
    nearResist: false, reversal: false, lowRR: false, chop: false, bearDiv: false,
    upLimitToday: false, downLimitToday: false, upStreak: 0,
    newsBonus: 0, adjScore: 0, sqzmom,
  };
  const d = D.details;
  const cs = composite(tfs);

  let bias = cs >= 20 ? '强看多'
           : cs >=  8 ? '看多'
           : cs >= -5 ? '观望'
           : cs >= -20? '看空'
           : '强看空';

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
  const momDecay  = d.RSI > 75 || (!d.MACD.aboveZero && !d.MACD.turning && bias.includes('看多'));
  const reversal  = d.RSI < 35 && d.nearSupport && (
    (H1?.details?.MACD?.turning ?? false) || d.divergence?.bull === true || d.climax
  );

  // A 股专属：涨跌停信号
  const lim = d.limitInfo;
  const upLimitToday   = lim?.upLimit === true;
  const downLimitToday = lim?.downLimit === true;
  const upStreak       = lim?.upStreak ?? 0;

  const hasSqz = D.notes.some(n => n.includes('Squeeze'));
  let type = '-';
  if (downLimitToday)                                  type = '跌停 — 强烈避险';
  else if (upLimitToday && upStreak === 1)             type = '首板涨停 — 强买盘信号';
  else if (upLimitToday && upStreak === 2)             type = '二板涨停 — 强势加速';
  else if (upLimitToday && upStreak >= 3)              type = '高位连板 — 注意反包';
  else if (reversal)                                   type = '反转(超卖+确认信号)';
  else if (d.climax)                                   type = '反转(量能高潮)';
  else if (d.divergence?.bull)                         type = '反转(看多背离)';
  else if (hasSqz && bias.includes('看多'))            type = '突破型(Squeeze释放)';
  else if (d.MACD.turning && d.dist20Pct < 3)         type = '反转(MACD金叉)';
  else if (d.nearSupport && bias.includes('看多'))     type = '回调低吸(支撑)';
  else if (d.hhhl && !overheated)                      type = '趋势追涨(结构完好)';
  else if (overheated && bias.includes('看多'))        type = '过热追涨(高风险)';
  else if (bias.includes('看空'))                      type = '下跌趋势';
  else if (bias.includes('看多'))                      type = '趋势延续';
  else                                                 type = '震荡 / 无优势';

  // 调整分
  let adjScore = cs;
  if (bullTrap)                              adjScore -= 12;
  if (fakeBreak)                             adjScore -= 10;
  if (reversal)                              adjScore +=  8;
  if (bearDiv)                               adjScore -=  6;
  if (lowRR)                                 adjScore -=  4;
  if (chop)                                  adjScore -=  4;
  // A 股涨跌停加分（最强信号之一）
  if (upLimitToday && upStreak === 1)        adjScore += 15;
  else if (upLimitToday && upStreak === 2)   adjScore += 20;
  else if (upLimitToday && upStreak >= 3)    adjScore += 12;
  if (downLimitToday)                        adjScore -= 25;
  adjScore = r1(adjScore);

  // bias 降级
  if (bullTrap && bias === '强看多')   bias = '看多';
  else if (bullTrap && bias === '看多') bias = '观望';
  if (fakeBreak && bias === '强看多')  bias = '看多';
  if (bearDiv   && bias === '强看多')  bias = '看多';
  if (chop      && bias === '强看多')  bias = '看多';
  if (downLimitToday)                  bias = '强看空';

  const newsBonus = meta?.newsScore != null ? Math.min(10, Math.round(meta.newsScore / 3)) : 0;

  // chase OK
  const chaseOK = bias.includes('看多') &&
                  d.RSI < 72 && !nearResist && !bullTrap && !fakeBreak && !lowRR && !chop && !bearDiv &&
                  !downLimitToday &&
                  (hasSqz || d.MACD.turning || (d.MACD.aboveZero && d.volRatio > 1) || (upLimitToday && upStreak <= 2)) ? 'YES' : 'NO';

  // 风险
  const risks = [];
  if (downLimitToday)                       risks.push(`跌停封板(连续${lim.dnStreak}天)— 强烈避险`);
  if (bullTrap)                             risks.push(`诱多: RSI${d.RSI}+近压力位`);
  if (fakeBreak)                            risks.push('假突破: 高位+低成交量');
  if (overheated && !bullTrap)              risks.push(`过热: dist20=${d.dist20Pct}%, RSI=${d.RSI}`);
  if (nearResist && !bullTrap && !fakeBreak) risks.push('近压力位/年内高点');
  if (momDecay)                             risks.push('动能衰减');
  if (W?.details?.llhl)                     risks.push('周线 LH 下降结构');
  if (d.obvDir === 'down' && bias.includes('看多')) risks.push('OBV 资金流出(分歧)');
  if (chop)                                 risks.push(`震荡市(ADX${d.ADX?.adx})`);
  if (bearDiv)                              risks.push('RSI 看空背离 — 动能耗尽');
  if (lowRR)                                risks.push(`R/R 不足(${d.rr})`);
  if (upLimitToday && upStreak >= 3)        risks.push(`高位连板(${upStreak}板)注意反包`);
  if (meta?.newsScore != null && meta.newsScore < 0 && bias.includes('看多'))
    risks.push('新闻负面 — 警惕基本面');

  // 信心度
  const finalAbs   = Math.abs(adjScore + newsBonus);
  const riskCount  = risks.length;
  const alignBull  = (alignment?.upPct   ?? 0) >= 0.75;
  const alignBear  = (alignment?.downPct ?? 0) >= 0.75;
  let confidence = '低';
  if (finalAbs >= 22 && riskCount <= 1 && (alignBull || alignBear)) confidence = '高';
  else if (finalAbs >= 10 && riskCount <= 2)                        confidence = '中';

  return {
    bias, type, chaseOK, risks, confidence, sqzmom,
    overheated, fakeBreak, bullTrap, momDecay, nearResist, reversal,
    chop, bearDiv, lowRR,
    upLimitToday, downLimitToday, upStreak,
    newsBonus, adjScore,
  };
}

// ═══════════════════════════════════════════════════════════════
//  单股流水线
// ═══════════════════════════════════════════════════════════════

const TF_LIST = [
  { key: '1W', tf: 'W',   bars:  65 },
  { key: '1D', tf: 'D',   bars: 250 },
  { key: '4H', tf: '240', bars: 120 },
  { key: '1H', tf: '60',  bars: 100 },
];

async function fetchBenchBars() {
  process.stdout.write(`  抓取基准 ${BENCH_SYM} ...`);
  const sw = run(`symbol ${BENCH_SYM}`);
  if (!sw?.success) { process.stdout.write(' ❌ 失败\n'); return null; }
  await sleep(1500);
  run('timeframe D');
  await sleep(800);
  const o = run('ohlcv -n 60');
  const bars = (o?.success && o.bars) ? o.bars : null;
  process.stdout.write(bars ? ` ✓ ${bars.length} 根\n` : ' ❌ 无数据\n');
  return bars;
}

async function analyzeStock(meta, opts, benchBars) {
  const { symbol, newsScore, newsSignal, newsName } = meta;
  process.stdout.write(`  ${symbol.padEnd(16)} `);

  const sw = run(`symbol ${symbol}`);
  if (!sw?.success) { process.stdout.write('❌ 切换失败\n'); return null; }
  await sleep(1100);

  const tfMap = {};
  let dailyBars = null;

  for (const { key, tf, bars } of TF_LIST) {
    const sw2 = run(`timeframe ${tf}`);
    if (!sw2?.success) { process.stdout.write('!'); continue; }
    await sleep(600);

    const ohlcv = run(`ohlcv -n ${bars}`);
    if (!ohlcv?.success || !ohlcv.bars?.length || ohlcv.bars.length < 20) {
      process.stdout.write('○');
      continue;
    }

    let live = {};
    if (!opts.noLive) live = readLiveValues();

    if (key === '1D') dailyBars = ohlcv.bars;

    const extra = {};
    if (key === '1D' && benchBars) extra.rs = computeRS(ohlcv.bars, benchBars, 20);
    if (key === '1D')              extra.limitInfo = detectLimit(ohlcv.bars, symbol);

    tfMap[key] = scoreTF(ohlcv.bars, key, live, extra);
    process.stdout.write(live.rsi != null ? '+' : '▪');
  }

  const q = run(`quote ${symbol}`);
  let stockName = newsName || symbol;
  if (q?.success) stockName = q.name || stockName;

  // SQZMOM 表
  run('timeframe D');
  await sleep(400);
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
  const limStr = dD?.limitInfo?.upLimit ? `🔥${dD.limitInfo.upStreak}板` : dD?.limitInfo?.downLimit ? '❄跌停' : '';

  process.stdout.write(
    ` 综:${(cs >= 0 ? '+' + cs : cs).toString().padStart(5)}` +
    `  ${adxStr.padEnd(8)}` +
    (rsStr ? `  ${rsStr.padEnd(8)}` : '') +
    (limStr ? `  ${limStr.padEnd(8)}` : '') +
    `  对齐:${align.label.padEnd(11)}` +
    (newsScore != null ? `  闻:${newsScore >= 0 ? '+' : ''}${newsScore}` : '') +
    `  ${sig.bias} [${sig.confidence}]\n`
  );

  return {
    symbol, name: stockName,
    composite: cs, adjScore: sig.adjScore, finalScore,
    newsScore: newsScore ?? null, newsSignal: newsSignal ?? '-',
    signal: sig, sqzmom, alignment: align,
    tfs: tfMap,
    price: tfMap['1D']?.details?.price,
  };
}

// ═══════════════════════════════════════════════════════════════
//  报告生成
// ═══════════════════════════════════════════════════════════════

function buildReport(results, opts) {
  const L = [];
  const p = s => L.push(s);
  const now = new Date().toISOString();

  p('# A股多周期技术面分析 · 明日最优入场报告 (v2)');
  p(`**日期:** ${now.slice(0, 10)}　**周期权重:** 1W(25%)+1D(40%)+4H(25%)+1H(10%)`);
  p(`**股票池:** ${results.length} 只　**数据源:** cn_selected.txt${opts.haveNews ? ' + cn_news_signals.md' : ''}${opts.haveBench ? ' + 沪深300 基准' : ''}`);
  p('');

  p('## 📊 综合技术评分总览');
  p('');
  p('| # | 名称 | 代码 | 综合(1W/1D/4H/1H) | 对齐 | ADX | RS | R/R | 涨停 | 闻 | 终值 | 信号 | 信心 | 类型 | 追涨 | SQZMOM | 风险 |');
  p('|---|------|------|------------------|------|-----|----|----|------|----|------|------|------|------|------|--------|------|');
  results.forEach((r, i) => {
    const tc = r.composite >= 0 ? `+${r.composite}` : String(r.composite);
    const fc = r.finalScore >= 0 ? `+${r.finalScore}` : String(r.finalScore);
    const sc = ['1W', '1D', '4H', '1H'].map(k => r.tfs[k]?.score ?? '-').join('/');
    const dD = r.tfs['1D']?.details;
    const adx = dD?.ADX ? `${dD.ADX.adx}${dD.ADX.chop ? '⚠' : dD.ADX.veryStrong ? '★' : ''}` : '-';
    const rs = dD?.rs != null ? (dD.rs >= 0 ? `+${dD.rs}` : String(dD.rs)) : '-';
    const rr = dD?.rr != null ? r1(dD.rr) : '-';
    const lim = dD?.limitInfo?.upLimit ? `🔥${dD.limitInfo.upStreak}板`
              : dD?.limitInfo?.downLimit ? '❄跌停' : '-';
    const risk = [
      r.signal.overheated  && '过热',
      r.signal.bullTrap    && '诱多',
      r.signal.fakeBreak   && '假突',
      r.signal.nearResist  && '压力',
      r.signal.momDecay    && '动能衰',
      r.signal.chop        && '震荡',
      r.signal.bearDiv     && '看空背离',
      r.signal.lowRR       && 'RR差',
      r.signal.downLimitToday && '跌停',
    ].filter(Boolean).join(' ') || '✓';
    p(`| ${i+1} | ${r.name} | ${r.symbol} | ${tc} (${sc}) | ${r.alignment.label} | ${adx} | ${rs} | ${rr} | ${lim} | ${r.newsScore != null ? (r.newsScore >= 0 ? '+'+r.newsScore : r.newsScore) : '-'} | **${fc}** | **${r.signal.bias}** | **${r.signal.confidence}** | ${r.signal.type} | ${r.signal.chaseOK} | ${r.sqzmom} | ${risk} |`);
  });
  p('');
  p('---');
  p('');

  p('## 🔍 TOP 15 详细技术分析');
  p('');
  results.slice(0, 15).forEach((r, i) => p(detail(r, i + 1)));

  // 明日最优候选
  const best = results.filter(r =>
    r.signal.bias.includes('看多') &&
    !r.signal.overheated && !r.signal.fakeBreak && !r.signal.bullTrap &&
    !r.signal.bearDiv && !r.signal.chop && !r.signal.lowRR &&
    !r.signal.downLimitToday &&
    r.finalScore >= 8 && r.signal.confidence !== '低'
  );

  p('## 🚀 明日最优入场候选（中/高信心 + 无重大风险）');
  p('');
  if (best.length === 0) {
    p('> 暂无低风险高质量做多候选，建议等待回调或新催化。');
    p('');
  } else {
    best.forEach((r, i) => {
      const D = r.tfs['1D']; const d = D?.details;
      p(`### 🏆 #${i+1} ${r.name} (${r.symbol})`);
      p('');
      p('| 维度 | 结论 |');
      p('|------|------|');
      p(`| **信号偏向** | **${r.signal.bias}** |`);
      p(`| **信心度** | **${r.signal.confidence}** |`);
      p(`| **交易类型** | **${r.signal.type}** |`);
      p(`| **是否追涨** | **${r.signal.chaseOK}** |`);
      p(`| 多周期对齐 | ${r.alignment.summary} → ${r.alignment.label} |`);
      p(`| 综合分 | ${r.composite >= 0 ? '+'+r.composite : r.composite} → 调整后 ${r.adjScore >= 0 ? '+'+r.adjScore : r.adjScore} |`);
      p(`| 新闻分 | ${r.newsScore != null ? (r.newsScore >= 0 ? '+'+r.newsScore : r.newsScore) : '-'} (${r.newsSignal}) |`);
      p(`| 终合分 | **${r.finalScore >= 0 ? '+'+r.finalScore : r.finalScore}** |`);
      p(`| SQZMOM日线 | ${r.sqzmom} |`);
      p(`| 当前价 | ${r.price ?? '-'} |`);
      if (d) {
        p(`| ATR 止损 | ${d.atrStop ?? '-'} (1.5× ATR) |`);
        p(`| Pivot 目标价 | ${d.target ?? '-'} |`);
        p(`| 风险报酬比 R/R | ${d.rr ?? '-'}${d.rr != null && d.rr >= 2 ? ' ★' : d.rr != null && d.rr < 1.5 ? ' ⚠' : ''} |`);
        p(`| ADX(14) | ${d.ADX?.adx ?? '-'} (${d.ADX?.chop ? '震荡' : d.ADX?.trending ? (d.ADX.bullishDM ? '上升趋势' : '下降趋势') : '弱势'}) |`);
        p(`| RS vs 沪深300 | ${d.rs != null ? (d.rs >= 0 ? '+'+d.rs : d.rs) + '%' : '-'} |`);
        if (d.limitInfo) {
          if (d.limitInfo.upLimit)        p(`| **涨停板** | 🔥 第 ${d.limitInfo.upStreak} 板 (${d.limitInfo.market} ±${d.limitInfo.limitPct}%) |`);
          else if (d.limitInfo.downLimit) p(`| **跌停板** | ❄ 连续 ${d.limitInfo.dnStreak} 跌停 |`);
        }
        p(`| RSI(14) | ${d.RSI} ${d.RSI < 50 ? '(偏低)' : d.RSI > 70 ? '(偏高)' : '(健康)'} |`);
        p(`| Stoch RSI | ${d.stochRsi ?? '-'} ${d.stochRsi != null && d.stochRsi < 20 ? '(超卖)' : d.stochRsi != null && d.stochRsi > 80 ? '(超买)' : ''} |`);
        p(`| RSI 背离 | ${d.divergence?.bull ? '**看多 ★★**' : d.divergence?.bear ? '**看空 ⚠**' : '无'} |`);
        p(`| MACD | 柱 ${d.MACD.hist > 0 ? '+' : ''}${d.MACD.hist} ${d.MACD.turning ? '**⚡金叉**' : d.MACD.histRising ? '↑加速' : '↓减速'} |`);
        p(`| Squeeze | ${d.SQZ ? `🔴**压缩中** (${d.SQZ_STREAK}根)` : '已释放'} |`);
        p(`| EMA 多头排列 | ${d.bullEMA ? '✅ 是' : '❌ 否'} |`);
        p(`| HH/HL 结构 | ${d.hhhl ? '✅ 上升结构完好' : '❌ 否'} |`);
        p(`| 量比 | ${d.volRatio}x |`);
        p(`| 量能高潮 | ${d.climax ? '✅ **是 — 抛售耗尽**' : '否'} |`);
        p(`| OBV 方向 | ${d.obvDir === 'up' ? '↑ 资金流入' : '↓ 资金流出'} |`);
        p(`| 收益 3d/5d/20d | ${d.ret3}% / ${d.ret5}% / ${d.ret20}% ${d.retAccel ? '★ 加速' : ''} |`);
        p(`| 关键支撑 (${d.supportTests || 0}次测试) | ${d.supportPrice ?? '-'} |`);
        p(`| 关键压力 | ${d.resistPrice ?? '-'} |`);
      }
      p('');
      p('**核心理由:**');
      (D?.notes || []).slice(0, 8).forEach(n => p(`- ${n}`));
      if (r.signal.risks.length) {
        p('');
        p('**关键风险:**');
        r.signal.risks.forEach(risk => p(`- ⚠️ ${risk}`));
      }
      p('');
      p('---');
      p('');
    });
  }

  // 涨停焦点
  const limitFocus = results.filter(r => r.signal.upLimitToday);
  if (limitFocus.length) {
    p('## 🔥 今日涨停焦点');
    p('');
    p('| 股票 | 代码 | 板数 | 板块 | 终合分 | 信号 | 类型 | 备注 |');
    p('|------|------|------|------|--------|------|------|------|');
    limitFocus.forEach(r => {
      const lim = r.tfs['1D']?.details?.limitInfo;
      p(`| ${r.name} | ${r.symbol} | ${lim?.upStreak ?? 1}板 | ${lim?.market ?? '-'} | ${r.finalScore >= 0 ? '+' + r.finalScore : r.finalScore} | **${r.signal.bias}** | ${r.signal.type} | ${r.signal.risks[0] || '-'} |`);
    });
    p('');
  }

  // 警示区
  const traps = results.filter(r => r.signal.bullTrap || r.signal.fakeBreak || r.signal.overheated || r.signal.bearDiv || r.signal.downLimitToday);
  if (traps.length) {
    p('## ⚠️ 诱多/假突破/过热/看空背离/跌停 警示');
    p('');
    traps.forEach(r => {
      const flags = [
        r.signal.bullTrap        && '诱多',
        r.signal.fakeBreak       && '假突',
        r.signal.overheated      && '过热',
        r.signal.bearDiv         && '看空背离',
        r.signal.downLimitToday  && '跌停',
      ].filter(Boolean).join(', ');
      p(`- **${r.name} (${r.symbol})** [${flags}] 终合分:${r.finalScore} — ${r.signal.risks.join('; ')}`);
    });
    p('');
  }

  p('---');
  p(`*生成时间: ${now}*`);
  p(`*指标(v2): EMA5/20/50/200, RSI, MACD, ADX(14), Squeeze(BB+KC), ATR, OBV, Pivot HH/HL, Stoch RSI, RSI 背离*`);
  p(`*增强: ADX 震荡过滤 / 背离检测 / 量能高潮 / Squeeze 持续 / 收益加速 / 支撑次数 / R/R + ATR 止损 / RS-vs-沪深300 / 涨跌停连板*`);
  return L.join('\n');
}

function detail(r, rank) {
  const L = [];
  const p = s => L.push(s);
  const D = r.tfs['1D'], W = r.tfs['1W'], H4 = r.tfs['4H'], H1 = r.tfs['1H'];
  const d = D?.details;

  p(`### ${rank}. ${r.name} (${r.symbol})`);
  p('');
  if (r.newsScore != null) p(`新闻: ${r.newsScore >= 0 ? '+' : ''}${r.newsScore} (${r.newsSignal})  |  信心度: **${r.signal.confidence}**`);
  else                     p(`信心度: **${r.signal.confidence}**`);
  p('');
  p('**多周期评分:**');
  p(`- 1W: ${W?.score ?? 'N/A'} | 1D: ${D?.score ?? 'N/A'} | 4H: ${H4?.score ?? 'N/A'} | 1H: ${H1?.score ?? 'N/A'} | **综合: ${r.composite}** | **调整: ${r.adjScore}** | **终合: ${r.finalScore}**`);
  p(`- 趋势对齐: ${r.alignment.summary}  →  **${r.alignment.label}**`);
  p('');
  p('**【交易信号判断】**');
  p(`- 结论: **${r.signal.bias}** (${r.signal.confidence})`);
  p(`- 类型: ${r.signal.type}`);
  p(`- 是否追涨: **${r.signal.chaseOK}**`);
  p(`- SQZMOM: ${r.sqzmom}`);
  if (d?.atrStop != null) p(`- 止损 / 目标: ${d.atrStop} / ${d.target ?? '-'}  (R/R: ${d.rr ?? '-'})`);
  if (d?.limitInfo?.upLimit) p(`- 🔥 涨停: 第 ${d.limitInfo.upStreak} 板 (${d.limitInfo.market})`);
  if (d?.limitInfo?.downLimit) p(`- ❄ 跌停: 连续 ${d.limitInfo.dnStreak} 跌停`);
  if (r.signal.risks?.length) p(`- 关键风险: ${r.signal.risks.join('；')}`);
  p(`- 诱多: ${r.signal.bullTrap ? '**是 ⚠**' : '否'}　|　假突破: ${r.signal.fakeBreak ? '**是 ⚠**' : '否'}　|　反转: ${r.signal.reversal ? '**是 ✓**' : '否'}`);
  p(`- 震荡市: ${r.signal.chop ? '**是 (ADX低)**' : '否'}　|　看空背离: ${r.signal.bearDiv ? '**是 ⚠**' : '否'}　|　R/R 不足: ${r.signal.lowRR ? '**是**' : '否'}`);
  p('');

  if (d) {
    p('**1D 关键指标:**');
    p('| 指标 | 值 | 状态 |');
    p('|------|----|----|');
    p(`| 价格 | ${d.price} | — |`);
    p(`| ATR 止损 / 目标 | ${d.atrStop ?? '-'} / ${d.target ?? '-'} | R/R: ${d.rr ?? '-'} |`);
    p(`| ADX(14) | ${d.ADX?.adx ?? '-'} (+DI:${d.ADX?.plusDI ?? '-'} -DI:${d.ADX?.minusDI ?? '-'}) | ${d.ADX?.chop ? '震荡' : d.ADX?.veryStrong ? '极强趋势' : d.ADX?.trending ? '趋势中' : '弱势'} |`);
    p(`| RS vs 沪深300 | ${d.rs != null ? (d.rs >= 0 ? '+'+d.rs : d.rs) + '%' : '-'} | ${d.rs > 5 ? '领涨' : d.rs > 0 ? '跑赢' : d.rs < -5 ? '跑输' : '-'} |`);
    if (d.limitInfo) p(`| 今日涨跌幅 | ${d.limitInfo.chg >= 0 ? '+' : ''}${d.limitInfo.chg}% (${d.limitInfo.market} ±${d.limitInfo.limitPct}%) | ${d.limitInfo.upLimit ? `🔥 ${d.limitInfo.upStreak}板涨停` : d.limitInfo.downLimit ? `❄ ${d.limitInfo.dnStreak}天跌停` : '正常'} |`);
    p(`| EMA20 距离 | ${d.dist20Pct}% | ${Math.abs(d.dist20Pct) < 3 ? '✅低吸区' : d.dist20Pct > 12 ? '⚠️过热' : '正常'} |`);
    const liveExtra = d.RSI_live != null ? ` (calc=${d.RSI_calc}, live=${d.RSI_live})` : '';
    p(`| RSI(14) | ${d.RSI}${liveExtra} | ${d.RSI < 35 ? '超卖' : d.RSI > 75 ? '⚠️超买' : '健康'} |`);
    p(`| Stoch RSI | ${d.stochRsi ?? '-'} | ${d.stochRsi != null && d.stochRsi < 20 ? '超卖' : d.stochRsi != null && d.stochRsi > 80 ? '超买' : '中性'} |`);
    p(`| RSI 背离 | ${d.divergence?.bull ? '看多 ★' : d.divergence?.bear ? '看空 ⚠' : '无'} | — |`);
    p(`| MACD 柱 | ${d.MACD.hist} | ${d.MACD.turning ? '⚡金叉' : d.MACD.histRising ? '↑' : '↓'} |`);
    p(`| Squeeze | ${d.SQZ ? `🔴压缩 (${d.SQZ_STREAK}根)` : '释放'} | ${d.SQZ_STREAK >= 5 ? '充分蓄能' : d.SQZ ? '蓄能中' : '-'} |`);
    p(`| BB 宽度% | ${d.bbWidth}% | ${d.bbWidth < 4 ? '收窄' : '正常'} |`);
    p(`| ATR% | ${d.atrPct}% | ${d.atrPct < 2 ? '低波动' : d.atrPct > 4 ? '⚠️高波动' : '正常'} |`);
    p(`| 量比 | ${d.volRatio}x | ${d.volRatio > 1.5 ? '放量' : d.volRatio < 0.7 ? '缩量' : '正常'} |`);
    p(`| 量能高潮 | ${d.climax ? '是 ★' : '否'} | ${d.climax ? '抛售耗尽' : '-'} |`);
    p(`| OBV | ${d.obvDir} | ${d.obvDir === 'up' ? '资金流入' : '资金流出'} |`);
    p(`| 收益 3/5/10/20d | ${d.ret3}/${d.ret5}/${d.ret10}/${d.ret20}% | ${d.retAccel ? '★ 加速中' : '-'} |`);
    p(`| EMA 多头排列 | ${d.bullEMA ? '✅' : '❌'} | — |`);
    p(`| 站上 EMA200 | ${d.aboveEMA200 ? '✅' : '❌'} | — |`);
    p(`| HH/HL | ${d.hhhl ? '✅' : '❌'} | — |`);
    p(`| 20根范围位置 | ${d.rangePct}% | ${d.rangePct > 80 ? '高位' : d.rangePct < 20 ? '低位' : '中位'} |`);
    p(`| 支撑 / 测试 | ${d.supportPrice ?? '-'} (${d.supportTests || 0}次) | ${d.nearSupport ? '近支撑' : '-'} |`);
    p(`| 压力 | ${d.resistPrice ?? '-'} | ${d.nearResist ? '近压力' : '-'} |`);
    p('');
    if (D?.notes?.length) {
      p('**1D 信号详情:**');
      D.notes.forEach(n => p(`- ${n}`));
      p('');
    }
  }

  if (W?.details) {
    const wd = W.details;
    p(`**1W:** EMA多排=${wd.bullEMA ? '✓' : '✗'} | HH/HL=${wd.hhhl ? '✓' : '✗'} | RSI=${wd.RSI} | ADX=${wd.ADX?.adx ?? '-'} | Squeeze=${wd.SQZ ? '🔴' : '-'} | 分=${W.score}`);
  }
  if (H4?.details) {
    const h4d = H4.details;
    p(`**4H:** RSI=${h4d.RSI} | MACD=${h4d.MACD.aboveZero ? '+' : '-'}${h4d.MACD.turning ? ' ⚡' : ''} | ADX=${h4d.ADX?.adx ?? '-'} | 量=${h4d.volRatio}x | 分=${H4.score}`);
  }
  if (H1?.details) {
    const h1d = H1.details;
    p(`**1H:** RSI=${h1d.RSI} | MACD=${h1d.MACD.aboveZero ? '+' : '-'}${h1d.MACD.turning ? ' ⚡' : ''} | 分=${H1.score}`);
  }
  p('');
  p('---');
  p('');
  return L.join('\n');
}

// ═══════════════════════════════════════════════════════════════
//  主程序
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
    newsName:   newsMap[sym]?.newsName   ?? null,
  }));

  if (opts.top && haveNews) {
    candidates = candidates
      .filter(c => c.newsScore != null)
      .sort((a, b) => b.newsScore - a.newsScore)
      .slice(0, opts.top);
  }

  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║  A股多周期技术分析 (v2 准确率优化版)                     ║');
  console.log('║  EMA/RSI/MACD/ADX/Squeeze/OBV + StochRSI + 背离          ║');
  console.log('║  + 量能高潮/Squeeze持续/收益加速/支撑/RR/RS-沪深300/涨停 ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');
  console.log(`股票池        : ${candidates.length} 只`);
  console.log(`数据源        : ${SEL_TXT}${haveNews ? ' + ' + NEWS_MD : ' (无新闻数据)'}`);
  console.log(`实时值校准    : ${opts.noLive ? '关' : '开'}`);
  console.log(`相对强度基准  : ${opts.noBench ? '关' : BENCH_SYM}`);
  console.log('');

  const benchBars = opts.noBench ? null : await fetchBenchBars();

  const results = [];
  for (const meta of candidates) {
    const r = await analyzeStock(meta, opts, benchBars);
    if (r) results.push(r);
    await sleep(200);
  }

  results.sort((a, b) => b.finalScore - a.finalScore);

  console.log('\n' + '═'.repeat(120));
  console.log('多周期综合技术排名 (v2)');
  console.log('═'.repeat(120));
  results.slice(0, 30).forEach((r, i) => {
    const tc = String(r.composite >= 0 ? `+${r.composite}` : r.composite).padStart(5);
    const fc = String(r.finalScore >= 0 ? `+${r.finalScore}` : r.finalScore).padStart(5);
    const nm = (r.name || r.symbol).slice(0, 8).padEnd(8);
    const dD = r.tfs['1D']?.details;
    const adx = dD?.ADX ? String(dD.ADX.adx).padStart(4) : ' -- ';
    const rs  = dD?.rs != null ? (dD.rs >= 0 ? `+${dD.rs}` : String(dD.rs)).padStart(5) : '  -- ';
    const lim = dD?.limitInfo?.upLimit ? `🔥${dD.limitInfo.upStreak}板` : dD?.limitInfo?.downLimit ? '❄跌停' : '    ';
    const flags = [
      r.signal.bullTrap        && '诱多',
      r.signal.fakeBreak       && '假突',
      r.signal.overheated      && '过热',
      r.signal.bearDiv         && '看空背离',
      r.signal.chop            && '震荡',
      r.signal.lowRR           && 'RR差',
      r.signal.downLimitToday  && '跌停',
    ].filter(Boolean).join('/');
    console.log(
      `${String(i + 1).padStart(2)}. ${nm} ${r.symbol.padEnd(14)} ` +
      `综:${tc}  终:${fc}  ADX:${adx}  RS:${rs}  ${lim.padEnd(5)} 对齐:${r.alignment.label.padEnd(11)} ` +
      `${(r.signal.bias || '').padEnd(6)} [${(r.signal.confidence || '').padEnd(2)}] ` +
      `${flags ? '⚠' + flags : '✓'}`
    );
  });

  const best = results.filter(r =>
    r.signal.bias.includes('看多') &&
    !r.signal.overheated && !r.signal.fakeBreak && !r.signal.bullTrap &&
    !r.signal.bearDiv && !r.signal.chop && !r.signal.lowRR && !r.signal.downLimitToday &&
    r.finalScore >= 8 && r.signal.confidence !== '低'
  );
  console.log('\n🚀 明日最优入场候选 (v2 严格闸门):');
  if (best.length === 0) {
    console.log('  无标的通过全部闸门 — 建议等待回调或新催化');
  } else {
    best.slice(0, 6).forEach((r, i) => {
      const d = r.tfs['1D']?.details;
      console.log(`  ${i+1}. ${r.name}(${r.symbol}) 终合:+${r.finalScore} [${r.signal.confidence}] ${r.signal.type} 追涨:${r.signal.chaseOK} 止损:${d?.atrStop ?? '-'} 目标:${d?.target ?? '-'} R/R:${d?.rr ?? '-'}`);
    });
  }

  // 涨停焦点
  const limitToday = results.filter(r => r.signal.upLimitToday);
  if (limitToday.length) {
    console.log('\n🔥 今日涨停焦点:');
    limitToday.forEach(r => {
      const lim = r.tfs['1D']?.details?.limitInfo;
      console.log(`  ${r.name}(${r.symbol}) 第${lim?.upStreak ?? 1}板 ${lim?.market ?? '-'} 终合:${r.finalScore >= 0 ? '+'+r.finalScore : r.finalScore} 类型:${r.signal.type}`);
    });
  }

  const rpt = buildReport(results, { haveNews, haveBench: !!benchBars });
  writeFileSync(OUT_MD, rpt, 'utf8');
  console.log(`\n✅ 报告已保存: ${OUT_MD}\n`);

  // ── 写下游契约 JSON（被 4-combined 阶段消费）──
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
      limit_info: d.limitInfo ?? null,
    };
  };
  const techJson = {
    generated_at: new Date().toISOString(),
    market: 'cn',
    weights: { '1W': 0.35, '1D': 0.40, '4H': 0.20, '1H': 0.05 },
    bench: benchBars ? BENCH_SYM : null,
    stocks: Object.fromEntries(results.map(r => {
      const sig = r.signal;
      const dD = r.tfs['1D']?.details ?? {};
      const flags = [
        sig.overheated      && '过热',
        sig.fakeBreak       && '假突',
        sig.bullTrap        && '诱多',
        sig.momDecay        && '动能衰',
        sig.nearResist      && '压力',
        sig.chop            && '震荡',
        sig.bearDiv         && '看空背离',
        sig.lowRR           && 'RR差',
        sig.reversal        && '反转',
        sig.upLimitToday    && '涨停',
        sig.downLimitToday  && '跌停',
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
        limit_info: dD.limitInfo ?? null,
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
  console.log(`✅ 下游契约 JSON 已保存: ${OUT_JSON}\n`);
}

main().catch(console.error);
