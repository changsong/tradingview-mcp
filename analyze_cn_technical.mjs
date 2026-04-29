/**
 * A-Share Multi-Timeframe Technical Analysis Engine
 * 对 A 股推荐股票进行: 趋势/动能/波动/成交量/结构/量价时空 全方位分析
 * 时间框架: 1H / 4H / 1D / 1W
 *
 * 用法:
 *   node analyze_cn_technical.mjs                        ← 读 watchlist/cn_selected.txt
 *   node analyze_cn_technical.mjs --symbols=SSE:603638,SZSE:000657
 */

import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';

const CLI = 'node src/cli/index.js';
const TF_LIST = [
  { key: '1H',  tv: '60',  weight: 1.0, bars: 100 },
  { key: '4H',  tv: '240', weight: 1.5, bars: 100 },
  { key: '1D',  tv: 'D',   weight: 2.0, bars: 100 },
  { key: '1W',  tv: 'W',   weight: 2.0, bars: 60  },
];

function cli(cmd) {
  try {
    return JSON.parse(execSync(`${CLI} ${cmd}`, { encoding: 'utf8', cwd: process.cwd() }));
  } catch { return null; }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ═══════════════════ MATH HELPERS ════════════════════════════════════════════

function ema(arr, period) {
  const k = 2 / (period + 1);
  const out = [];
  let prev = null;
  for (const v of arr) {
    if (prev === null) { prev = v; out.push(v); continue; }
    prev = v * k + prev * (1 - k);
    out.push(prev);
  }
  return out;
}

function sma(arr, period) {
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < period - 1) { out.push(null); continue; }
    out.push(arr.slice(i - period + 1, i + 1).reduce((s, v) => s + v, 0) / period);
  }
  return out;
}

function stdev(arr, period) {
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < period - 1) { out.push(null); continue; }
    const sl = arr.slice(i - period + 1, i + 1);
    const mean = sl.reduce((s, v) => s + v, 0) / period;
    const variance = sl.reduce((s, v) => s + (v - mean) ** 2, 0) / period;
    out.push(Math.sqrt(variance));
  }
  return out;
}

function rsi(closes, period = 14) {
  const changes = closes.slice(1).map((c, i) => c - closes[i]);
  let avgGain = changes.slice(0, period).filter(c => c > 0).reduce((s, v) => s + v, 0) / period;
  let avgLoss = Math.abs(changes.slice(0, period).filter(c => c < 0).reduce((s, v) => s + v, 0)) / period;
  const out = new Array(period).fill(null);
  for (let i = period; i < changes.length; i++) {
    const gain = Math.max(0, changes[i]);
    const loss = Math.abs(Math.min(0, changes[i]));
    avgGain = (avgGain * (period - 1) + gain) / period;
    avgLoss = (avgLoss * (period - 1) + loss) / period;
    out.push(avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss));
  }
  return out;
}

function atr(highs, lows, closes, period = 14) {
  const trs = [];
  for (let i = 1; i < closes.length; i++) {
    trs.push(Math.max(
      highs[i] - lows[i],
      Math.abs(highs[i] - closes[i - 1]),
      Math.abs(lows[i] - closes[i - 1])
    ));
  }
  const atrArr = ema(trs, period);
  return [null, ...atrArr];  // offset by 1
}

function bbands(closes, period = 20, mult = 2) {
  const mid = sma(closes, period);
  const sd = stdev(closes, period);
  return mid.map((m, i) => ({
    mid: m,
    upper: m !== null ? m + mult * sd[i] : null,
    lower: m !== null ? m - mult * sd[i] : null,
    width: (m !== null && m !== 0) ? (4 * sd[i]) / m : null,
  }));
}

function macd(closes, fast = 12, slow = 26, signal = 9) {
  const e12 = ema(closes, fast);
  const e26 = ema(closes, slow);
  const macdLine = e12.map((v, i) => v - e26[i]);
  const signalLine = ema(macdLine.slice(slow - 1), signal);
  const offset = slow - 1;
  return closes.map((_, i) => {
    if (i < offset) return { macd: null, signal: null, hist: null };
    const m = macdLine[i];
    const s = signalLine[i - offset] ?? null;
    return { macd: m, signal: s, hist: s !== null ? m - s : null };
  });
}

// ─ Swing pivot detection (local high/low with lookback 3)
function swingPivots(highs, lows, closes, lookback = 3) {
  const pivots = [];
  for (let i = lookback; i < closes.length - lookback; i++) {
    const isHigh = highs.slice(i - lookback, i).every(h => h <= highs[i])
                && highs.slice(i + 1, i + lookback + 1).every(h => h <= highs[i]);
    const isLow  = lows.slice(i - lookback, i).every(l => l >= lows[i])
               && lows.slice(i + 1, i + lookback + 1).every(l => l >= lows[i]);
    if (isHigh) pivots.push({ type: 'H', price: highs[i], idx: i });
    if (isLow)  pivots.push({ type: 'L', price: lows[i],  idx: i });
  }
  return pivots;
}

// Volume trend: is average volume of last 5 bars above avg of prior 20?
function volumeTrend(volumes) {
  const n = volumes.length;
  if (n < 25) return { trend: 'unknown', ratio: null };
  const recent5 = volumes.slice(n - 5).reduce((s, v) => s + v, 0) / 5;
  const prior20  = volumes.slice(n - 25, n - 5).reduce((s, v) => s + v, 0) / 20;
  return {
    trend:    recent5 > prior20 * 1.1 ? 'expanding' : recent5 < prior20 * 0.85 ? 'shrinking' : 'neutral',
    ratio:    prior20 > 0 ? recent5 / prior20 : null,
  };
}

// ═══════════════════ ANALYSIS PER TIMEFRAME ══════════════════════════════════

function analyzeTF(bars, tfKey) {
  if (!bars || bars.length < 30) return null;
  const closes  = bars.map(b => b.close);
  const highs   = bars.map(b => b.high);
  const lows    = bars.map(b => b.low);
  const volumes = bars.map(b => b.volume || 0);
  const n       = closes.length;

  // EMAs
  const e9  = ema(closes, 9);
  const e20 = ema(closes, 20);
  const e50 = ema(closes, 50);
  const e200= ema(closes, Math.min(200, n - 1));

  const c = closes[n - 1];
  const e9l  = e9[n - 1];
  const e20l = e20[n - 1];
  const e50l = e50[n - 1];
  const e200l= e200[n - 1];

  // Trend: price vs EMA stack
  const aboveE20 = c > e20l;
  const aboveE50 = c > e50l;
  const emaAligned = e9l > e20l && e20l > e50l;    // bullish EMA stack
  const emaCrumble = e9l < e20l && e20l < e50l;    // bearish EMA stack

  let trendScore = 0;
  let trendLabel = '中性';
  if (emaAligned && aboveE20 && aboveE50) { trendScore = 3; trendLabel = '强势上涨'; }
  else if (aboveE20 && !emaCrumble)       { trendScore = 2; trendLabel = '偏多'; }
  else if (!aboveE20 && emaCrumble)       { trendScore = 0; trendLabel = '下跌趋势'; }
  else if (!aboveE20)                     { trendScore = 1; trendLabel = '弱势'; }

  // RSI
  const rsiArr  = rsi(closes, 14);
  const rsiVal  = rsiArr[n - 1] ?? 50;
  let momentumScore = 0;
  let rsiLabel = '';
  if (rsiVal > 70)       { momentumScore = 1; rsiLabel = `超买 ${rsiVal.toFixed(1)}`; }
  else if (rsiVal > 55)  { momentumScore = 3; rsiLabel = `强势区 ${rsiVal.toFixed(1)}`; }
  else if (rsiVal >= 45) { momentumScore = 2; rsiLabel = `中性 ${rsiVal.toFixed(1)}`; }
  else if (rsiVal >= 30) { momentumScore = 1; rsiLabel = `弱势 ${rsiVal.toFixed(1)}`; }
  else                   { momentumScore = 2; rsiLabel = `超卖 ${rsiVal.toFixed(1)}`; } // bounce potential

  // MACD
  const macdArr = macd(closes);
  const macdLast = macdArr[n - 1];
  const macdPrev = macdArr[n - 2] || {};
  const macdBull  = macdLast.hist !== null && macdLast.hist > 0;
  const macdCross = macdLast.hist !== null && macdPrev.hist !== null
                 && macdPrev.hist < 0 && macdLast.hist > 0;
  const macdStrengthening = macdLast.hist !== null && macdPrev.hist !== null
                          && macdLast.hist > macdPrev.hist;
  let macdLabel = macdBull ? '正柱' : '负柱';
  if (macdCross) macdLabel = '金叉！';
  else if (macdStrengthening && macdBull) macdLabel = '正柱扩张';
  else if (!macdStrengthening && !macdBull) macdLabel = '负柱扩张';

  // Bollinger Band Width (squeeze detector)
  const bb = bbands(closes);
  const bbLast = bb[n - 1];
  const bbPrev5Widths = bb.slice(n - 6, n - 1).map(b => b.width).filter(Boolean);
  const avgBBW = bbPrev5Widths.length ? bbPrev5Widths.reduce((s, v) => s + v, 0) / bbPrev5Widths.length : null;
  const inSqueeze  = bbLast.width !== null && avgBBW !== null && bbLast.width < avgBBW * 0.85;
  const bbExpanded = bbLast.width !== null && avgBBW !== null && bbLast.width > avgBBW * 1.2;
  let volatLabel = '';
  let volScore = 0;
  if (inSqueeze)   { volatLabel = '布林压缩(蓄能)'; volScore = 3; }
  else if (bbExpanded) { volatLabel = '带宽扩张(趋势中)'; volScore = 2; }
  else                 { volatLabel = '正常波动'; volScore = 1; }

  // ATR
  const atrArr  = atr(highs, lows, closes);
  const atrVal  = atrArr[n - 1] ?? 0;
  const atrPct  = c > 0 ? (atrVal / c * 100) : 0;

  // Volume
  const volMa20   = sma(volumes, 20);
  const volLast   = volumes[n - 1];
  const volMaLast = volMa20[n - 1] ?? 1;
  const volRatio  = volLast / (volMaLast || 1);
  const volTrend  = volumeTrend(volumes);
  let volLabel = '';
  let volScoreV = 0;
  if (volRatio > 1.8) { volLabel = `放量 ${volRatio.toFixed(1)}x`; volScoreV = 3; }
  else if (volRatio > 1.2) { volLabel = `温和放量 ${volRatio.toFixed(1)}x`; volScoreV = 2; }
  else if (volRatio < 0.6) { volLabel = `缩量 ${volRatio.toFixed(1)}x`; volScoreV = 1; }
  else { volLabel = `正常量 ${volRatio.toFixed(1)}x`; volScoreV = 2; }

  // Structure - find nearest pivot highs/lows to current price
  const pivots = swingPivots(highs, lows, closes);
  const nearResistance = pivots.filter(p => p.type === 'H' && p.price > c)
                               .sort((a, b) => a.price - b.price)[0];
  const nearSupport    = pivots.filter(p => p.type === 'L' && p.price < c)
                               .sort((a, b) => b.price - a.price)[0];
  const resistanceDist = nearResistance ? ((nearResistance.price - c) / c * 100) : null;
  const supportDist    = nearSupport    ? ((c - nearSupport.price)    / c * 100) : null;

  // Price-Volume-Time: check if up-days have above-avg volume (accumulation)
  const last10 = bars.slice(n - 10);
  const upDays   = last10.filter((b, i) => i > 0 && b.close > last10[i - 1].close);
  const downDays = last10.filter((b, i) => i > 0 && b.close < last10[i - 1].close);
  const avgVolUp   = upDays.length   ? upDays.reduce((s, b) => s + (b.volume || 0), 0)   / upDays.length   : 0;
  const avgVolDown = downDays.length ? downDays.reduce((s, b) => s + (b.volume || 0), 0) / downDays.length : 0;
  const accumulation = avgVolUp > avgVolDown * 1.15;  // up-volume dominates → accumulation

  // Recent momentum candles (last 3 bars)
  const last3 = bars.slice(n - 3);
  const bullCandles = last3.filter(b => b.close > b.open).length;
  const bearCandles = last3.filter(b => b.close < b.open).length;

  // Composite TF score (0–10)
  const compositeScore = trendScore * 2 + momentumScore + volScore + volScoreV * 0.5
    + (macdBull ? 1 : 0) + (accumulation ? 1 : 0) + (macdCross ? 1 : 0);

  return {
    tf: tfKey,
    close: c, e9: e9l, e20: e20l, e50: e50l, e200: e200l,
    trendScore, trendLabel,
    rsiVal, momentumScore, rsiLabel,
    macdBull, macdCross, macdStrengthening, macdLabel,
    inSqueeze, bbExpanded, volatLabel, volScore,
    atrVal, atrPct,
    volRatio, volTrend, volLabel, volScoreV,
    nearResistance: nearResistance ? { price: nearResistance.price, dist: resistanceDist } : null,
    nearSupport:    nearSupport    ? { price: nearSupport.price,    dist: supportDist    } : null,
    accumulation,
    bullCandles, bearCandles,
    compositeScore,
  };
}

// ═══════════════════ SIGNAL GENERATOR ═════════════════════════════════════════

function generateSignal(symbol, tfMap, sqzmom) {
  const d1  = tfMap['1D'];
  const d4h = tfMap['4H'];
  const h1  = tfMap['1H'];
  const wk  = tfMap['1W'];

  if (!d1) return { action: 'No Trade', reason: '数据不足' };

  // ─ Multi-TF trend alignment score
  const alignedTFs = [wk, d1, d4h, h1].filter(Boolean).filter(t => t.trendScore >= 2).length;
  const totalTFs   = [wk, d1, d4h, h1].filter(Boolean).length;
  const trendAlignment = alignedTFs / totalTFs;

  // ─ Weighted composite across TFs
  let weightedScore = 0, totalWeight = 0;
  for (const tf of TF_LIST) {
    const t = tfMap[tf.key];
    if (!t) continue;
    weightedScore += t.compositeScore * tf.weight;
    totalWeight   += tf.weight;
  }
  const normalizedScore = totalWeight > 0 ? weightedScore / totalWeight : 0;

  // ─ Momentum state
  const d1Momentum  = d1.rsiVal > 45 && d1.macdBull;
  const d4hMomentum = d4h ? (d4h.rsiVal > 45 && d4h.macdBull) : true;
  const momentumOK  = d1Momentum && d4hMomentum;

  // ─ Volume confirms
  const volConfirm = d1.volRatio > 1.1 || d1.accumulation;

  // ─ Squeeze ready
  const squeezeSetup = d1.inSqueeze || (d4h && d4h.inSqueeze);

  // ─ Danger signals
  const overbought    = d1.rsiVal > 72;
  const resistClose   = d1.nearResistance && d1.nearResistance.dist < 1.5; // within 1.5%
  const bearCandleD1  = d1.bearCandles >= 2;
  const momentumWeak  = d1.rsiVal < 40 && !d1.inSqueeze;

  // ─ Primary decision logic
  let action    = 'No Trade';
  let tradeType = '-';
  let chaseOK   = 'NO';
  let reason    = '';
  const risks   = [];
  const opps    = [];

  if (sqzmom === 'GO' && trendAlignment >= 0.5 && normalizedScore >= 6) {
    // Best case: SQZMOM GO + multi-TF aligned
    action    = 'Long';
    tradeType = squeezeSetup ? '突破型' : '顺势追涨';
    chaseOK   = overbought || resistClose ? 'NO' : 'YES';
    reason    = `SQZMOM GO信号 + ${(trendAlignment * 100).toFixed(0)}%时间框架趋势对齐 + 综合得分${normalizedScore.toFixed(1)}`;
    opps.push('策略信号与技术面共振，最强做多形态');

  } else if (trendAlignment >= 0.75 && normalizedScore >= 7 && momentumOK) {
    action    = 'Long';
    tradeType = squeezeSetup ? '突破型' : '趋势追涨';
    chaseOK   = overbought || resistClose ? 'NO' : 'YES';
    reason    = `${(trendAlignment * 100).toFixed(0)}%时间框架对齐 + 动能强劲(D1 RSI:${d1.rsiVal.toFixed(0)}) + 综合得分${normalizedScore.toFixed(1)}`;

  } else if (squeezeSetup && trendAlignment >= 0.5 && d1.trendScore >= 2) {
    action    = 'Long';
    tradeType = '突破型';
    chaseOK   = 'NO';
    reason    = `布林压缩蓄能 + 趋势偏多，等待放量突破确认再入场`;
    opps.push('压缩即将释放，是价格将爆发的前兆');

  } else if (trendAlignment >= 0.5 && d1.trendScore >= 2 && d1.nearSupport?.dist < 2.5) {
    action    = 'Long';
    tradeType = '回调低吸';
    chaseOK   = 'NO';
    reason    = `趋势向上但回调至支撑位${d1.nearSupport.price.toFixed(2)}(距离${d1.nearSupport.dist.toFixed(1)}%)，适合低吸`;

  } else if (d1.trendScore === 0 || momentumWeak) {
    action    = 'Short';
    tradeType = '趋势做空';
    reason    = `D1趋势得分${d1.trendScore}(${d1.trendLabel})，动能衰减RSI:${d1.rsiVal.toFixed(0)}`;
    risks.push('下跌趋势中不可抄底');

  } else {
    action    = 'No Trade';
    reason    = `信号混乱，多空分歧。趋势对齐率${(trendAlignment * 100).toFixed(0)}% + 综合得分${normalizedScore.toFixed(1)}`;
  }

  // SQZMOM missing penalty
  if (sqzmom === 'WAIT' && action === 'Long') {
    if (tradeType === '趋势追涨') { action = 'No Trade'; reason += '；SQZMOM未确认GO，暂观望'; }
    chaseOK = 'NO';
  }

  // Risk flags
  if (overbought)  risks.push(`⚠ RSI超买(${d1.rsiVal.toFixed(0)})，动能衰减风险`);
  if (resistClose) risks.push(`⚠ 日线接近压力位(${d1.nearResistance.price.toFixed(2)}，距${d1.nearResistance.dist.toFixed(1)}%)，追高被套风险`);
  if (bearCandleD1) risks.push('⚠ 近3根K线存在阴线，短期动能偏弱');
  if (!volConfirm && action === 'Long') risks.push('⚠ 成交量未明显放大，突破有效性存疑');
  if (d1.macdLabel.includes('负柱扩张')) risks.push('⚠ MACD负柱扩张，下跌动能未竭');

  // Opportunity flags
  if (d1.macdCross)  opps.push('D1 MACD金叉，动能由空转多');
  if (d1.accumulation) opps.push('量价关系: 上涨日均量 > 下跌日均量，主力在积累');
  if (squeezeSetup) opps.push('布林压缩蓄能，即将放量突破');
  if (wk && wk.trendScore >= 2) opps.push('周线趋势支持，大趋势方向一致');

  // 诱多/假突破检测
  const fakeBreakRisk = d1.bbExpanded && d1.volRatio < 0.8 && d1.bullCandles >= 2;
  if (fakeBreakRisk) risks.push('🚨 警告: 价格突破但成交量未配合，疑似假突破/诱多！');

  return { action, tradeType, chaseOK, reason, risks, opps, trendAlignment, normalizedScore };
}

// ═══════════════════ PROBABILITY SCORER ═══════════════════════════════════════

function scoreProbability(symbol, tfMap, signal, sqzmom) {
  let score = 0;
  const d1 = tfMap['1D'];
  const d4h = tfMap['4H'];
  const h1 = tfMap['1H'];
  const wk = tfMap['1W'];

  if (!d1) return 0;

  // Trend alignment (0–25)
  score += signal.trendAlignment * 25;

  // SQZMOM (0–20)
  if (sqzmom === 'GO') score += 20;

  // D1 setup (0–20)
  if (d1.inSqueeze) score += 10;    // squeeze = coiled spring
  if (d1.macdBull)  score += 5;
  if (d1.macdCross) score += 8;     // freshly crossed = early momentum
  if (d1.accumulation) score += 7;

  // Volume (0–10)
  if (d1.volRatio > 1.5) score += 10;
  else if (d1.volRatio > 1.1) score += 5;

  // 4H / 1H confirmation (0–10)
  if (d4h && d4h.trendScore >= 2 && d4h.macdBull) score += 5;
  if (h1 && h1.trendScore >= 2 && h1.rsiVal > 50)  score += 5;

  // Weekly trend (0–10)
  if (wk && wk.trendScore >= 2) score += 10;

  // RSI not overbought on D1 (0–5)
  if (d1.rsiVal < 65 && d1.rsiVal > 45) score += 5;

  // Penalty
  if (d1.nearResistance && d1.nearResistance.dist < 2) score -= 8;   // near resistance
  if (d1.rsiVal > 72) score -= 10;  // overbought
  if (!d4h || d4h.trendScore < 1) score -= 5;                        // 4H divergence

  return Math.round(Math.max(0, Math.min(100, score)));
}

// ═══════════════════ DATA FETCHER ═════════════════════════════════════════════

// Retry wrapper: up to 3 attempts with growing backoff
async function cliRetry(cmd, retries = 3, baseMs = 2500) {
  for (let attempt = 0; attempt < retries; attempt++) {
    const res = cli(cmd);
    if (res?.success) return res;
    await sleep(baseMs * (attempt + 1));
  }
  return null;
}

async function fetchStockData(symbol, sqzmom) {
  console.log(`  → 切换到 ${symbol}`);
  const sw = await cliRetry(`symbol ${symbol}`);
  if (!sw?.success) return null;
  await sleep(3000);  // extra settle time after symbol switch

  const tfData = {};
  let sqzmomTable = null;

  for (const tf of TF_LIST) {
    cli(`timeframe ${tf.tv}`);
    await sleep(3000);  // increased: intraday TFs need longer to load

    const ohlcv = await cliRetry(`ohlcv -n ${tf.bars}`, 3, 2000);
    if (!ohlcv?.success || !ohlcv.bars?.length) {
      console.log(`    ⚠ ${tf.key} 无数据`);
      continue;
    }
    tfData[tf.key] = analyzeTF(ohlcv.bars, tf.key);

    // 在 1D 框架下顺带读 SQZMOM 表格数据
    if (tf.key === '1D') {
      const tbl = cli('data tables');
      if (tbl?.success && tbl.studies?.length) {
        const sq = tbl.studies.find(s => s.name?.includes('SQZMOM'));
        if (sq?.tables?.[0]?.rows?.[0]) {
          sqzmomTable = sq.tables[0].rows[0];
        }
      }
    }
    await sleep(800);
  }

  // Restore to daily
  cli('timeframe D');
  await sleep(500);

  return { symbol, sqzmom, tfData, sqzmomTable };
}

// ═══════════════════ REPORT ═══════════════════════════════════════════════════

function tfBar(score, max = 12) {
  const blocks = Math.max(0, Math.min(10, Math.round(score / max * 10)));
  return '█'.repeat(blocks) + '░'.repeat(10 - blocks) + ` ${score.toFixed(1)}`;
}

function printReport(analyses) {
  const LINE  = '═'.repeat(90);
  const DLINE = '─'.repeat(90);

  console.log(`\n${LINE}`);
  console.log('  📈  A股多时间框架技术分析报告  ——  趋势 / 动能 / 波动 / 量价 / 结构');
  console.log(`  生成时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}`);
  console.log(`${LINE}\n`);

  // Sort by probability descending
  const sorted = [...analyses].sort((a, b) => (b.probability ?? 0) - (a.probability ?? 0));

  // ─ Ranking table
  console.log('【综合概率排名 — 明日上涨概率预测】\n');
  console.log('  排名  代码              名称      明日上涨概率  信号       追涨  SQZMOM  TF对齐');
  console.log(`  ${DLINE.substring(0, 80)}`);
  sorted.forEach((a, i) => {
    if (!a.signal) return;
    const s    = a.signal;
    const icon = s.action === 'Long' ? '🟢' : s.action === 'Short' ? '🔴' : '⚪';
    const bar  = '▓'.repeat(Math.max(0,Math.min(10,Math.round(a.probability / 10)))) + '░'.repeat(Math.max(0,10 - Math.min(10,Math.round(a.probability / 10))));
    console.log(`  #${String(i+1).padEnd(4)} ${a.symbol.padEnd(16)} ${(a.name||'').padEnd(8)} ${String(a.probability).padStart(3)}%  ${bar}  ${icon}${(s.action||'-').padEnd(8)} ${(s.chaseOK||'-').padEnd(4)} ${(a.sqzmom||'').padEnd(6)} ${((s.trendAlignment||0)*100).toFixed(0)}%`);
  });

  console.log(`\n${LINE}\n`);

  // ─ Detailed per-stock
  sorted.forEach((a, idx) => {
    if (!a.signal) return;
    const s = a.signal;
    const icon = s.action === 'Long' ? '🟢' : s.action === 'Short' ? '🔴' : '⚪';
    console.log(`${icon} [#${idx+1}] ${a.symbol} ${a.name ? `[${a.name}]` : ''}   明日概率: ${a.probability}%  SQZMOM: ${a.sqzmom}`);
    console.log(`   交易信号: ${s.action.padEnd(8)}  类型: ${s.tradeType.padEnd(8)}  是否适合追涨: ${s.chaseOK}`);
    console.log(`   触发原因: ${s.reason}`);

    // TF breakdown
    console.log('\n   【多时间框架得分】');
    const tfLabels = { '1H': '1小时', '4H': '4小时', '1D': '日  线', '1W': '周  线' };
    for (const tfKey of ['1W', '1D', '4H', '1H']) {
      const t = a.tfData?.[tfKey];
      if (!t) { console.log(`   ${tfLabels[tfKey]}: 无数据`); continue; }
      console.log(`   ${tfLabels[tfKey]} [${tfBar(t.compositeScore)}]  趋势:${t.trendLabel.padEnd(5)} | RSI:${t.rsiVal.toFixed(0).padStart(3)}(${t.rsiLabel.split(' ')[0]}) | MACD:${t.macdLabel} | 量:${t.volLabel} | 波动:${t.volatLabel}`);
    }

    // D1 structure
    const d1 = a.tfData?.['1D'];
    if (d1) {
      console.log('\n   【日线结构分析】');
      console.log(`   EMA: 9=${d1.e9?.toFixed(2)}  20=${d1.e20?.toFixed(2)}  50=${d1.e50?.toFixed(2)}  200=${d1.e200?.toFixed(2)}  现价=${d1.close?.toFixed(2)}`);
      if (d1.nearResistance) console.log(`   上方阻力: ${d1.nearResistance.price.toFixed(2)} (距${d1.nearResistance.dist.toFixed(1)}%)`);
      if (d1.nearSupport)    console.log(`   下方支撑: ${d1.nearSupport.price.toFixed(2)}    (距${d1.nearSupport.dist.toFixed(1)}%)`);
      console.log(`   ATR(14): ${d1.atrVal?.toFixed(2)} (${d1.atrPct?.toFixed(1)}%)  量价关系: ${d1.accumulation ? '✅ 主力积累(上涨量>下跌量)' : '⚠ 无明显积累'}`);
      console.log(`   布林: ${d1.volatLabel}  近3根K线: ${d1.bullCandles}阳/${d1.bearCandles}阴`);
    }

    // SQZMOM raw
    if (a.sqzmomTable) {
      console.log(`\n   【SQZMOM v22 原始信号】`);
      console.log(`   ${a.sqzmomTable.substring(0, 200)}`);
    }

    if (s.opps.length) {
      console.log('\n   ✅ 机会点:');
      s.opps.forEach(o => console.log(`      • ${o}`));
    }
    if (s.risks.length) {
      console.log('\n   ⚠  关键风险:');
      s.risks.forEach(r => console.log(`      • ${r}`));
    }
    console.log('');
  });

  // ─ Final actionable summary
  console.log(LINE);
  console.log('  🎯  明日交易决策汇总');
  console.log(DLINE);

  const longs  = sorted.filter(a => a.signal?.action === 'Long');
  const shorts = sorted.filter(a => a.signal?.action === 'Short');

  if (longs.length) {
    console.log(`\n  ★ 做多候选 (按概率排序):`);
    longs.forEach((a, i) => {
      const s = a.signal;
      console.log(`  ${i+1}. ${a.symbol.padEnd(14)} [${(a.name||'').padEnd(6)}] 概率:${String(a.probability).padStart(3)}%  类型:${s.tradeType.padEnd(8)} 追涨:${s.chaseOK}  ${s.reason.substring(0, 60)}`);
    });
  }
  if (shorts.length) {
    console.log(`\n  ✗ 做空/回避:`);
    shorts.forEach(a => {
      console.log(`    ${a.symbol.padEnd(14)} [${a.name||''}] 概率:${a.probability}%  ${a.signal.reason.substring(0, 60)}`);
    });
  }

  const winner = sorted.find(a => a.signal?.action === 'Long');
  if (winner) {
    console.log(`\n  ⭐ 【首选推荐】${winner.symbol} [${winner.name||''}]`);
    console.log(`     明日上涨概率: ${winner.probability}%`);
    console.log(`     理由: ${winner.signal.reason}`);
    const s = winner.signal;
    console.log(`     操作: ${s.action}  类型: ${s.tradeType}  追涨: ${s.chaseOK}`);
    if (s.risks.length) console.log(`     主要风险: ${s.risks[0]}`);
  }

  console.log(`\n${LINE}\n`);
}

// ═══════════════════ MAIN ═════════════════════════════════════════════════════

function loadStocks() {
  const args = process.argv.slice(2);
  const symArg = args.find(a => a.startsWith('--symbols='));
  if (symArg) {
    return symArg.slice('--symbols='.length).split(',')
      .map(s => ({ symbol: s.trim(), sqzmom: 'GO' })).filter(s => s.symbol);
  }
  const filePath = 'watchlist/cn_selected.txt';
  if (!existsSync(filePath) || !readFileSync(filePath, 'utf8').trim()) {
    console.error('❌ cn_selected.txt 为空，请先运行扫描或使用 --symbols=');
    process.exit(1);
  }
  return readFileSync(filePath, 'utf8').trim()
    .split(',').map(s => ({ symbol: s.trim(), sqzmom: 'GO' })).filter(s => s.symbol);
}

async function main() {
  const stocks = loadStocks();
  console.log(`\n📊 开始多时间框架技术分析，共 ${stocks.length} 只股票 × 4 个时间框架...\n`);

  const analyses = [];
  for (let i = 0; i < stocks.length; i++) {
    const { symbol, sqzmom } = stocks[i];
    process.stdout.write(`[${i + 1}/${stocks.length}] 分析 ${symbol}... `);
    const data = await fetchStockData(symbol, sqzmom);
    if (!data) { console.log('跳过'); continue; }

    // Try to get name from CLI info
    const info = cli(`info`);
    const name = info?.name || info?.description || '';

    const signal      = generateSignal(symbol, data.tfData, sqzmom);
    const probability = scoreProbability(symbol, data.tfData, signal, sqzmom);

    analyses.push({ symbol, name, sqzmom, tfData: data.tfData, sqzmomTable: data.sqzmomTable, signal, probability });
    console.log(`完成 [概率:${probability}% ${signal.action}]`);
    await sleep(800);
  }

  printReport(analyses);
}

main().catch(console.error);
