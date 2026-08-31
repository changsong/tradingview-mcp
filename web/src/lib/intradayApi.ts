/**
 * Server-side intraday prediction for the web dashboard.
 * Fetches daily OHLCV from Tencent/Sina APIs, computes
 * Floor/Camarilla/Woodie Pivots, ATR range, Bollinger Bands.
 * Independent of TradingView CDP.
 */

// ── helpers ──────────────────────────────────────────────────────────

function r2(v: number): number {
  return Math.round(v * 100) / 100;
}

function sma(arr: number[], n: number): number {
  const slice = arr.slice(-n);
  if (slice.length === 0) return 0;
  return slice.reduce((a, b) => a + b, 0) / slice.length;
}

function stdev(arr: number[], n: number): number {
  const slice = arr.slice(-n);
  if (slice.length < 2) return 0;
  const mean = slice.reduce((a, b) => a + b, 0) / slice.length;
  return Math.sqrt(
    slice.reduce((s, v) => s + (v - mean) ** 2, 0) / slice.length
  );
}

// ── pivot models ─────────────────────────────────────────────────────

function floorPivots(h: number, l: number, c: number) {
  const pp = (h + l + c) / 3;
  return {
    pp: r2(pp),
    r1: r2(2 * pp - l),
    s1: r2(2 * pp - h),
    r2: r2(pp + (h - l)),
    s2: r2(pp - (h - l)),
    r3: r2(h + 2 * (pp - l)),
    s3: r2(l - 2 * (h - pp)),
  };
}

function camarillaPivots(h: number, l: number, c: number) {
  const range = h - l;
  return {
    r4: r2(c + (range * 1.1) / 2),
    s4: r2(c - (range * 1.1) / 2),
    r3: r2(c + (range * 1.1) / 4),
    s3: r2(c - (range * 1.1) / 4),
    r2: r2(c + (range * 1.1) / 6),
    s2: r2(c - (range * 1.1) / 6),
    r1: r2(c + (range * 1.1) / 12),
    s1: r2(c - (range * 1.1) / 12),
  };
}

function woodiePivots(h: number, l: number, c: number) {
  const pp = (h + l + 2 * c) / 4;
  return {
    pp: r2(pp),
    r1: r2(2 * pp - l),
    s1: r2(2 * pp - h),
    r2: r2(pp + (h - l)),
    s2: r2(pp - (h - l)),
  };
}

function calcATR(bars: OHLCV[], period = 14): number {
  const tr: number[] = [];
  for (let i = 1; i < bars.length; i++) {
    const h = bars[i].high,
      l = bars[i].low,
      pc = bars[i - 1].close;
    tr.push(Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc)));
  }
  const slice = tr.slice(-period);
  if (slice.length === 0) return 0;
  return slice.reduce((a, b) => a + b, 0) / slice.length;
}

function bbandsCalc(bars: OHLCV[], n = 20, mult = 2) {
  const closes = bars.map((b) => b.close);
  const mid = sma(closes, n);
  const sd = stdev(closes, n);
  return {
    upper: r2(mid + mult * sd),
    mid: r2(mid),
    lower: r2(mid - mult * sd),
    bw: r2((4 * sd) / mid),
  };
}

function touchStatus(
  currentPrice: number,
  highZone: [number, number],
  lowZone: [number, number]
): string {
  const [hMin] = highZone;
  const [, lMax] = lowZone;
  if (currentPrice >= hMin || currentPrice <= lMax) return "touched";
  const distHigh = ((hMin - currentPrice) / currentPrice) * 100;
  const distLow = ((currentPrice - lMax) / currentPrice) * 100;
  const minDist = Math.min(
    distHigh > 0 ? distHigh : Infinity,
    distLow > 0 ? distLow : Infinity
  );
  if (minDist <= 1) return "near";
  if (minDist <= 2) return "watch";
  return "safe";
}

// ── types ────────────────────────────────────────────────────────────

export interface OHLCV {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface Prediction {
  symbol: string;
  current_price: number;
  prev_day: {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
  };
  pdh_pdl: { pdh: number; pdl: number };
  floor_pivots: Record<string, number>;
  camarilla_pivots: Record<string, number>;
  woodie_pivots: Record<string, number>;
  bollinger_bands: { upper: number; mid: number; lower: number; bw: number };
  atr_range: {
    atr_14: number;
    atr_pct: number;
    projected_high_1x: number;
    projected_low_1x: number;
    projected_high_1p5x: number;
    projected_low_1p5x: number;
  };
  consensus: {
    predicted_high_zone: [number, number];
    predicted_low_zone: [number, number];
    central_pivot: number;
    bias: string;
  };
  touch_status: string;
  error?: string;
}

// ── computation ──────────────────────────────────────────────────────

export function predictFromBars(symbol: string, bars: OHLCV[]): Prediction {
  if (bars.length < 20) {
    return {
      symbol,
      error: `Need >=20 daily bars, got ${bars.length}`,
    } as Prediction;
  }

  const today = bars[bars.length - 1];
  const prev = bars[bars.length - 2];
  const ph = prev.high,
    pl = prev.low,
    pc = prev.close;
  const currentPrice = today.close;

  const floor = floorPivots(ph, pl, pc);
  const camar = camarillaPivots(ph, pl, pc);
  const woodie = woodiePivots(ph, pl, pc);
  const atr14 = calcATR(bars, 14);
  const atrPct = (atr14 / today.open) * 100;
  const bb = bbandsCalc(bars, 20, 2);

  const projHigh1x = r2(today.open + atr14);
  const projLow1x = r2(today.open - atr14);
  const projHigh1p5 = r2(today.open + atr14 * 1.5);
  const projLow1p5 = r2(today.open - atr14 * 1.5);

  const highCandidates = [
    ph,
    floor.r1,
    camar.r1,
    woodie.r1,
    projHigh1x,
    bb.upper,
  ]
    .filter(Boolean)
    .sort((a, b) => a - b);
  const lowCandidates = [
    pl,
    floor.s1,
    camar.s1,
    woodie.s1,
    projLow1x,
    bb.lower,
  ]
    .filter(Boolean)
    .sort((a, b) => a - b);

  const highZone: [number, number] = [
    highCandidates[0],
    highCandidates[highCandidates.length - 1],
  ];
  const lowZone: [number, number] = [
    lowCandidates[0],
    lowCandidates[lowCandidates.length - 1],
  ];
  const centralPivot = (floor.pp + woodie.pp) / 2;

  return {
    symbol,
    current_price: currentPrice,
    prev_day: {
      time: prev.time,
      open: prev.open,
      high: ph,
      low: pl,
      close: pc,
    },
    pdh_pdl: { pdh: ph, pdl: pl },
    floor_pivots: floor,
    camarilla_pivots: camar,
    woodie_pivots: woodie,
    bollinger_bands: bb,
    atr_range: {
      atr_14: r2(atr14),
      atr_pct: r2(atrPct),
      projected_high_1x: projHigh1x,
      projected_low_1x: projLow1x,
      projected_high_1p5x: projHigh1p5,
      projected_low_1p5x: projLow1p5,
    },
    consensus: {
      predicted_high_zone: highZone,
      predicted_low_zone: lowZone,
      central_pivot: r2(centralPivot),
      bias:
        currentPrice > centralPivot
          ? "bullish"
          : currentPrice < centralPivot
            ? "bearish"
            : "neutral",
    },
    touch_status: touchStatus(currentPrice, highZone, lowZone),
  };
}

// ── data fetching ────────────────────────────────────────────────────

const TENCENT_API =
  "https://web.ifzq.gtimg.cn/appstock/app/fqkline/get";
const SINA_US_API =
  "https://stock.finance.sina.com.cn/usstock/api/json_v2.php/US_MinKService.getDailyK";

async function fetchTencentBars(
  market: string,
  symbol: string,
  count: number
): Promise<OHLCV[]> {
  const pureSymbol = symbol.replace(/^(SSE|SZSE|HKEX):/i, "").trim();
  let key: string;
  let dataKey: string;
  if (market === "cn") {
    key =
      pureSymbol.startsWith("60") || pureSymbol.startsWith("68")
        ? `sh${pureSymbol}`
        : `sz${pureSymbol}`;
    dataKey = "qfqday";
  } else if (market === "hk") {
    key = `hk${pureSymbol.padStart(5, "0")}`;
    dataKey = "day";
  } else {
    return [];
  }

  const url = `${TENCENT_API}?param=${key},day,,,${count},qfq`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Tencent fetch failed: ${res.status}`);
  const json = (await res.json()) as any;
  const days = json?.data?.[key]?.[dataKey] as
    | Array<[string, string, string, string, string, string]>
    | undefined;
  if (!days || !Array.isArray(days)) return [];

  return days.map((bar) => ({
    time: Math.floor(new Date(bar[0]).getTime() / 1000),
    open: parseFloat(bar[1]) || 0,
    close: parseFloat(bar[2]) || 0,
    high: parseFloat(bar[3]) || 0,
    low: parseFloat(bar[4]) || 0,
    volume: parseFloat(bar[5]) || 0,
  }));
}

async function fetchSinaBars(
  symbol: string,
  count: number
): Promise<OHLCV[]> {
  const pureSymbol = symbol
    .replace(/^(NASDAQ|NYSE|AMEX|OTC):/i, "")
    .trim();
  const url = `${SINA_US_API}?symbol=${encodeURIComponent(pureSymbol)}&type=daily&num=${count}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sina fetch failed: ${res.status}`);
  const json = (await res.json()) as Array<{
    d: string;
    o: string;
    h: string;
    l: string;
    c: string;
    v: string;
  }>;
  if (!Array.isArray(json)) return [];

  return json
    .filter((bar) => bar.d && bar.c)
    .map((bar) => ({
      time: Math.floor(new Date(bar.d).getTime() / 1000),
      open: parseFloat(bar.o || bar.c) || 0,
      high: parseFloat(bar.h || bar.c) || 0,
      low: parseFloat(bar.l || bar.c) || 0,
      close: parseFloat(bar.c) || 0,
      volume: parseFloat(bar.v || "0") || 0,
    }));
}

export async function fetchDailyBars(
  market: string,
  symbol: string,
  count = 25
): Promise<OHLCV[]> {
  try {
    if (market === "cn" || market === "hk") {
      return await fetchTencentBars(market, symbol, count);
    }
    if (market === "us") {
      return await fetchSinaBars(symbol, count);
    }
    return [];
  } catch (err) {
    console.warn(
      `Daily bars fetch failed for ${market}:${symbol}:`,
      (err as Error).message
    );
    return [];
  }
}

export async function predictIntradayWeb(
  market: string,
  symbols: string[]
): Promise<{
  success: boolean;
  ts: number;
  symbol_count: number;
  predictions: Prediction[];
}> {
  const predictions: Prediction[] = [];

  for (const sym of symbols) {
    try {
      const bars = await fetchDailyBars(market, sym, 25);
      if (bars.length < 20) {
        predictions.push({
          symbol: sym,
          error: `Only ${bars.length} daily bars available (need 20)`,
        } as Prediction);
      } else {
        predictions.push(predictFromBars(sym, bars));
      }
    } catch (err) {
      predictions.push({
        symbol: sym,
        error: (err as Error).message,
      } as Prediction);
    }
  }

  return {
    success: true,
    ts: Date.now(),
    symbol_count: predictions.length,
    predictions,
  };
}
