/**
 * Intraday high/low prediction — Floor Pivots, Camarilla, Woodie,
 * ATR range, PDH/PDL, Bollinger Bands.
 * Reads daily OHLCV via CDP, computes projection zones for up to 5 symbols.
 */
import * as chart from './chart.js';
import * as cdata from './data.js';

// ── helpers ──────────────────────────────────────────────────────────

function r2(v) {
  return Math.round(v * 100) / 100;
}

function sma(arr, n) {
  const slice = arr.slice(-n);
  if (slice.length === 0) return 0;
  return slice.reduce((a, b) => a + b, 0) / slice.length;
}

function stdev(arr, n) {
  const slice = arr.slice(-n);
  if (slice.length < 2) return 0;
  const mean = slice.reduce((a, b) => a + b, 0) / slice.length;
  return Math.sqrt(slice.reduce((s, v) => s + (v - mean) ** 2, 0) / slice.length);
}

// ── Floor Pivot Points ───────────────────────────────────────────────

function floorPivots(h, l, c) {
  const pp = (h + l + c) / 3;
  return {
    pp: r2(pp),
    r1: r2(2 * pp - l),       s1: r2(2 * pp - h),
    r2: r2(pp + (h - l)),      s2: r2(pp - (h - l)),
    r3: r2(h + 2 * (pp - l)),  s3: r2(l - 2 * (h - pp)),
  };
}

// ── Camarilla Pivot Points ───────────────────────────────────────────

function camarillaPivots(h, l, c) {
  const range = h - l;
  return {
    r4: r2(c + range * 1.1 / 2),  s4: r2(c - range * 1.1 / 2),
    r3: r2(c + range * 1.1 / 4),  s3: r2(c - range * 1.1 / 4),
    r2: r2(c + range * 1.1 / 6),  s2: r2(c - range * 1.1 / 6),
    r1: r2(c + range * 1.1 / 12), s1: r2(c - range * 1.1 / 12),
  };
}

// ── Woodie Pivot Points ──────────────────────────────────────────────

function woodiePivots(h, l, c) {
  const pp = (h + l + 2 * c) / 4;
  return {
    pp: r2(pp),
    r1: r2(2 * pp - l),       s1: r2(2 * pp - h),
    r2: r2(pp + (h - l)),      s2: r2(pp - (h - l)),
  };
}

// ── ATR(14) SMA ──────────────────────────────────────────────────────

function calcATR(bars, period = 14) {
  const tr = [];
  for (let i = 1; i < bars.length; i++) {
    const h = bars[i].high, l = bars[i].low, pc = bars[i - 1].close;
    tr.push(Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc)));
  }
  const slice = tr.slice(-period);
  if (slice.length === 0) return 0;
  return slice.reduce((a, b) => a + b, 0) / slice.length;
}

// ── Bollinger Bands ──────────────────────────────────────────────────

function bbandsCalc(bars, n = 20, mult = 2) {
  const closes = bars.map(b => b.close);
  const mid = sma(closes, n);
  const sd = stdev(closes, n);
  return {
    upper: r2(mid + mult * sd),
    mid: r2(mid),
    lower: r2(mid - mult * sd),
    bw: r2((4 * sd) / mid),
  };
}

// ── price alerts ─────────────────────────────────────────────────────

function checkAlerts(currentPrice, highZone, lowZone, symbol) {
  const alerts = [];
  const [hMin, hMax] = highZone;
  const [lMin, lMax] = lowZone;

  const distHigh = ((hMin - currentPrice) / currentPrice) * 100;
  const distLow = ((currentPrice - lMax) / currentPrice) * 100;

  if (currentPrice >= hMin) {
    alerts.push({ type: 'in_high_zone', level: hMin, message: `${symbol} entered predicted high zone (${hMin})` });
  } else if (distHigh > 0 && distHigh <= 1) {
    alerts.push({ type: 'near_high', level: hMin, distance_pct: r2(distHigh), message: `${symbol} near predicted high zone ${hMin} (${r2(distHigh)}% away)` });
  }

  if (currentPrice <= lMax) {
    alerts.push({ type: 'in_low_zone', level: lMax, message: `${symbol} entered predicted low zone (${lMax})` });
  } else if (distLow > 0 && distLow <= 1) {
    alerts.push({ type: 'near_low', level: lMax, distance_pct: r2(distLow), message: `${symbol} near predicted low zone ${lMax} (${r2(distLow)}% away)` });
  }

  return alerts;
}

// ── touch status (for web dashboard) ─────────────────────────────────

function touchStatus(currentPrice, highZone, lowZone) {
  const [hMin] = highZone;
  const [, lMax] = lowZone;
  if (currentPrice >= hMin || currentPrice <= lMax) return 'touched';
  const distHigh = ((hMin - currentPrice) / currentPrice) * 100;
  const distLow = ((currentPrice - lMax) / currentPrice) * 100;
  const minDist = Math.min(distHigh > 0 ? distHigh : Infinity, distLow > 0 ? distLow : Infinity);
  if (minDist <= 1) return 'near';
  if (minDist <= 2) return 'watch';
  return 'safe';
}

// ── per-symbol computation ───────────────────────────────────────────

function computePrediction(symbol, bars) {
  if (bars.length < 20) {
    return { symbol, error: `Need >=20 daily bars, got ${bars.length}` };
  }

  const today = bars[bars.length - 1];
  const prev = bars[bars.length - 2];
  const ph = prev.high, pl = prev.low, pc = prev.close;

  const currentPrice = today.close;

  const floor   = floorPivots(ph, pl, pc);
  const camar   = camarillaPivots(ph, pl, pc);
  const woodie  = woodiePivots(ph, pl, pc);
  const atr14   = calcATR(bars, 14);
  const atrPct  = (atr14 / today.open) * 100;
  const bb      = bbandsCalc(bars, 20, 2);

  const projHigh1x  = r2(today.open + atr14);
  const projLow1x   = r2(today.open - atr14);
  const projHigh1p5 = r2(today.open + atr14 * 1.5);
  const projLow1p5  = r2(today.open - atr14 * 1.5);

  const highCandidates = [ph, floor.r1, camar.r1, woodie.r1, projHigh1x, bb.upper].filter(Boolean).sort((a, b) => a - b);
  const lowCandidates  = [pl, floor.s1, camar.s1, woodie.s1, projLow1x, bb.lower].filter(Boolean).sort((a, b) => a - b);

  const highZone = [highCandidates[0], highCandidates[highCandidates.length - 1]];
  const lowZone  = [lowCandidates[0],  lowCandidates[lowCandidates.length - 1]];

  const centralPivot = (floor.pp + woodie.pp) / 2; // average of Floor & Woodie PP

  return {
    symbol,
    current_price: currentPrice,
    prev_day: {
      time: prev.time, open: prev.open, high: ph, low: pl, close: pc,
    },
    pdh_pdl: { pdh: ph, pdl: pl },
    floor_pivots: floor,
    camarilla_pivots: camar,
    woodie_pivots: woodie,
    bollinger_bands: bb,
    atr_range: {
      atr_14: r2(atr14), atr_pct: r2(atrPct),
      projected_high_1x: projHigh1x, projected_low_1x: projLow1x,
      projected_high_1p5x: projHigh1p5, projected_low_1p5x: projLow1p5,
    },
    consensus: {
      predicted_high_zone: highZone,
      predicted_low_zone:  lowZone,
      central_pivot: r2(centralPivot),
      bias: currentPrice > centralPivot ? 'bullish' : currentPrice < centralPivot ? 'bearish' : 'neutral',
    },
    alerts: checkAlerts(currentPrice, highZone, lowZone, symbol),
    touch_status: touchStatus(currentPrice, highZone, lowZone),
  };
}

// ── quick price-only snapshot (for stream mode) ──────────────────────

function quickSnapshot(symbol, prediction, currentPrice) {
  const highZone = prediction.consensus.predicted_high_zone;
  const lowZone  = prediction.consensus.predicted_low_zone;

  return {
    symbol,
    current_price: currentPrice,
    consensus: prediction.consensus,
    alerts: checkAlerts(currentPrice, highZone, lowZone, symbol),
    touch_status: touchStatus(currentPrice, highZone, lowZone),
  };
}

// ── public API ───────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

export async function predictIntraday({ symbols, delay_ms = 2000 }) {
  if (!Array.isArray(symbols) || symbols.length === 0) {
    throw new Error('symbols must be a non-empty array');
  }
  if (symbols.length > 5) {
    throw new Error(`Maximum 5 symbols allowed, got ${symbols.length}`);
  }

  const results = [];
  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    try {
      if (i > 0) await sleep(delay_ms);
      await chart.setSymbol({ symbol: sym });
      await chart.setTimeframe({ timeframe: 'D' });
      const ohlcv = await cdata.getOhlcv({ count: 20 });
      results.push(computePrediction(sym, ohlcv.bars));
    } catch (err) {
      results.push({ symbol: sym, error: err.message });
    }
  }

  return {
    success: true,
    ts: Date.now(),
    symbol_count: results.length,
    predictions: results,
  };
}

export async function streamIntraday({ symbols, interval = 10000, refreshInterval = 30 }) {
  if (!Array.isArray(symbols) || symbols.length === 0) {
    throw new Error('symbols must be a non-empty array');
  }
  if (symbols.length > 5) {
    throw new Error(`Maximum 5 symbols allowed, got ${symbols.length}`);
  }

  process.stderr.write(`intraday stream — ${symbols.join(', ')} — poll ${interval}ms, full refresh every ${refreshInterval}min\n`);

  let predictions = [];
  let tickCount = 0;
  let refreshTick = 0;

  // Initial full prediction
  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    try {
      if (i > 0) await sleep(2000);
      await chart.setSymbol({ symbol: sym });
      await chart.setTimeframe({ timeframe: 'D' });
      const ohlcv = await cdata.getOhlcv({ count: 20 });
      predictions.push(computePrediction(sym, ohlcv.bars));
    } catch (err) {
      predictions.push({ symbol: sym, error: err.message });
    }
  }

  const refreshTicks = Math.round((refreshInterval * 60 * 1000) / interval);

  const emit = (data) => {
    process.stdout.write(JSON.stringify({ _ts: Date.now(), _stream: 'intraday', ...data }) + '\n');
  };

  // Emit initial full predictions
  for (const p of predictions) {
    emit({ type: 'full', ...p });
  }

  // Poll loop
  const timer = setInterval(async () => {
    tickCount++;
    refreshTick++;

    const shouldRefresh = refreshTick >= refreshTicks;

    for (let i = 0; i < symbols.length; i++) {
      const sym = symbols[i];
      try {
        await chart.setSymbol({ symbol: sym });

        if (shouldRefresh) {
          // Full refresh: re-read bars, recompute all models
          await chart.setTimeframe({ timeframe: 'D' });
          const ohlcv = await cdata.getOhlcv({ count: 20 });
          const full = computePrediction(sym, ohlcv.bars);
          predictions[i] = full;
          emit({ type: 'full', ...full });
        } else {
          // Quick snapshot: just read current price
          const quote = await cdata.getQuote({ symbol: sym });
          const snap = quickSnapshot(sym, predictions[i], quote.last || quote.close);
          if (snap.alerts.length > 0) {
            emit({ type: 'snapshot', ...snap });
          }
        }

        if (i < symbols.length - 1) await sleep(1000);
      } catch (err) {
        process.stderr.write(`[intraday] ${sym} error: ${err.message}\n`);
      }
    }

    if (shouldRefresh) refreshTick = 0;

    process.stderr.write(`\r[intraday] tick ${tickCount}  `);
  }, interval);

  const cleanup = () => {
    clearInterval(timer);
    process.stderr.write('\n[intraday] stream stopped\n');
  };

  process.on('SIGINT', () => { cleanup(); process.exit(0); });
  process.on('SIGTERM', () => { cleanup(); process.exit(0); });

  // Keep process alive
  return new Promise(() => {});
}
