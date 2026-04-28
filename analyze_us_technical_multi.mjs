#!/usr/bin/env node
/**
 * 美股精选股票多周期技术面深度分析
 * 股票: RMBS, MPWR, NBN, CSW
 * 周期: 1H / 4H / 1D / 1W
 */
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const CLI = 'node src/cli/index.js';
const STOCKS = [
  { symbol: 'NASDAQ:RMBS', name: 'Rambus Inc' },
  { symbol: 'NASDAQ:MPWR', name: 'Monolithic Power Systems' },
  { symbol: 'NASDAQ:NBN',  name: 'Northeast Bank' },
  { symbol: 'NYSE:CSW',    name: 'CSW Industrials' },
];
const TIMEFRAMES = [
  { tf: '60',  label: '1H',  bars: 120 },
  { tf: '240', label: '4H',  bars: 120 },
  { tf: 'D',   label: '1D',  bars: 250 },
  { tf: 'W',   label: '1W',  bars: 104 },
];

function run(cmd) {
  try {
    return JSON.parse(execSync(`${CLI} ${cmd}`, { encoding: 'utf8', timeout: 15000 }));
  } catch { return null; }
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── 技术指标计算 ─────────────────────────────────────────────────────────────
function ema(arr, n) {
  const k = 2 / (n + 1);
  let e = arr[0];
  return arr.map(v => (e = v * k + e * (1 - k)));
}

function sma(arr, n) {
  return arr.map((_, i) => i < n - 1 ? null : arr.slice(i - n + 1, i + 1).reduce((a, b) => a + b, 0) / n);
}

function atr(bars, n = 14) {
  const tr = bars.map((b, i) => {
    if (i === 0) return b.high - b.low;
    const prev = bars[i - 1];
    return Math.max(b.high - b.low, Math.abs(b.high - prev.close), Math.abs(b.low - prev.close));
  });
  return sma(tr, n);
}

function rsi(closes, n = 14) {
  const gains = [], losses = [];
  for (let i = 1; i < closes.length; i++) {
    const d = closes[i] - closes[i - 1];
    gains.push(d > 0 ? d : 0);
    losses.push(d < 0 ? -d : 0);
  }
  return gains.map((_, i) => {
    if (i < n - 1) return null;
    const ag = gains.slice(i - n + 1, i + 1).reduce((a, b) => a + b, 0) / n;
    const al = losses.slice(i - n + 1, i + 1).reduce((a, b) => a + b, 0) / n;
    if (al === 0) return 100;
    return 100 - 100 / (1 + ag / al);
  });
}

function macd(closes, fast = 12, slow = 26, signal = 9) {
  const emaFast = ema(closes, fast);
  const emaSlow = ema(closes, slow);
  const macdLine = emaFast.map((v, i) => v - emaSlow[i]);
  const signalLine = ema(macdLine, signal);
  const hist = macdLine.map((v, i) => v - signalLine[i]);
  return { macdLine, signalLine, hist };
}

function bbands(closes, n = 20, k = 2) {
  const mid = sma(closes, n);
  return closes.map((_, i) => {
    if (mid[i] === null) return null;
    const slice = closes.slice(i - n + 1, i + 1);
    const std = Math.sqrt(slice.reduce((s, v) => s + (v - mid[i]) ** 2, 0) / n);
    return { upper: mid[i] + k * std, mid: mid[i], lower: mid[i] - k * std, std, width: (2 * k * std) / mid[i] };
  });
}

function stdev(arr, n) {
  return arr.map((_, i) => {
    if (i < n - 1) return null;
    const sl = arr.slice(i - n + 1, i + 1);
    const m = sl.reduce((a, b) => a + b, 0) / n;
    return Math.sqrt(sl.reduce((s, v) => s + (v - m) ** 2, 0) / n);
  });
}

// Squeeze Momentum (LazyBear)
function squeeze(bars, bbLen = 20, kc_mult = 1.5) {
  const closes = bars.map(b => b.close);
  const highs  = bars.map(b => b.high);
  const lows   = bars.map(b => b.low);
  const bb = bbands(closes, bbLen);
  const atrArr = atr(bars, bbLen);
  const midBB = sma(closes, bbLen);

  return bars.map((_, i) => {
    if (!bb[i] || !atrArr[i] || !midBB[i]) return null;
    const kcUpper = midBB[i] + kc_mult * atrArr[i];
    const kcLower = midBB[i] - kc_mult * atrArr[i];
    const squeezed = bb[i].upper < kcUpper && bb[i].lower > kcLower;
    return { squeezed, bbWidth: bb[i].width };
  });
}

// Volume analysis: OBV & volume trend
function obv(bars) {
  let o = 0;
  return bars.map((b, i) => {
    if (i === 0) return o;
    o += b.close > bars[i - 1].close ? b.volume : b.close < bars[i - 1].close ? -b.volume : 0;
    return o;
  });
}

// Key S/R levels (pivot-based, last 20 bars)
function findSRLevels(bars, lookback = 20) {
  const highs = bars.map(b => b.high);
  const lows  = bars.map(b => b.low);
  const pivotHighs = [], pivotLows = [];
  for (let i = 2; i < bars.length - 2; i++) {
    if (highs[i] >= highs[i-1] && highs[i] >= highs[i-2] && highs[i] >= highs[i+1] && highs[i] >= highs[i+2]) pivotHighs.push(highs[i]);
    if (lows[i]  <= lows[i-1]  && lows[i]  <= lows[i-2]  && lows[i]  <= lows[i+1]  && lows[i]  <= lows[i+2])  pivotLows.push(lows[i]);
  }
  const recentHighs = pivotHighs.slice(-3).sort((a,b) => b-a);
  const recentLows  = pivotLows.slice(-3).sort((a,b) => b-a);
  return { resistance: recentHighs, support: recentLows };
}

// ── 分析单一周期 ────────────────────────────────────────────────────────────
function analyzePeriod(bars, label) {
  if (!bars || bars.length < 30) return null;
  const closes = bars.map(b => b.close);
  const volumes = bars.map(b => b.volume);
  const n = bars.length;
  const last = bars[n - 1];
  const prev = bars[n - 2];

  // EMAs
  const ema20 = ema(closes, 20);
  const ema50 = ema(closes, 50);
  const ema200= ema(closes, Math.min(200, n));
  const e20 = ema20[n-1], e50 = ema50[n-1], e200 = ema200[n-1];

  // RSI
  const rsiArr = rsi(closes);
  const rsiVal = rsiArr.filter(v => v !== null).slice(-1)[0];
  const rsi5   = rsiArr.filter(v => v !== null).slice(-5);

  // MACD
  const { macdLine, signalLine, hist } = macd(closes);
  const macdVal  = macdLine[n-1];
  const sigVal   = signalLine[n-1];
  const histVal  = hist[n-1];
  const histPrev = hist[n-2];
  const macdCrossUp = histVal > 0 && histPrev <= 0;
  const macdCrossDown = histVal < 0 && histPrev >= 0;

  // Bollinger Bands
  const bb = bbands(closes);
  const bbLast = bb.filter(v => v !== null).slice(-1)[0];
  const bbPct = bbLast ? (last.close - bbLast.lower) / (bbLast.upper - bbLast.lower) : 0.5;
  const bbWidthArr = bb.filter(v=>v).map(v => v.width);
  const bbWidthAvg = bbWidthArr.slice(-20).reduce((a,b)=>a+b,0)/20;
  const bbWidthCurr = bbLast?.width || 0;
  const bbSqueeze = bbWidthCurr < bbWidthAvg * 0.8;

  // ATR / Volatility
  const atrArr2 = atr(bars);
  const atrVal  = atrArr2.filter(v=>v!==null).slice(-1)[0];
  const atrPct  = atrVal / last.close * 100;

  // Volume
  const volSMA20 = sma(volumes, 20);
  const volAvg   = volSMA20.filter(v=>v!==null).slice(-1)[0];
  const volRatio = last.volume / (volAvg || 1);
  const obv2     = obv(bars);
  const obvSlope = obv2[n-1] - obv2[n-6]; // 5-bar OBV slope

  // Trend
  const trendUp = last.close > e20 && e20 > e50;
  const trendStr = last.close > e20 && e20 > e50 && e50 > e200 ? 'Strong Up' :
                   last.close > e20 && e20 > e50 ? 'Up' :
                   last.close < e20 && e20 < e50 ? 'Down' :
                   last.close < e20 && e20 < e50 && e50 < e200 ? 'Strong Down' : 'Sideways';

  // Price change
  const chg1 = (last.close - prev.close) / prev.close * 100;
  const chg5 = (last.close - bars[Math.max(0,n-6)].close) / bars[Math.max(0,n-6)].close * 100;

  // S/R levels
  const sr = findSRLevels(bars);
  const nearResistance = sr.resistance.length > 0 && (sr.resistance[0] - last.close) / last.close < 0.02;
  const nearSupport    = sr.support.length > 0    && (last.close - sr.support[0])    / last.close < 0.02;

  // Squeeze momentum
  const sqz = squeeze(bars);
  const sqzLast = sqz.filter(v=>v!==null).slice(-1)[0];
  const inSqueeze = sqzLast?.squeezed || false;

  // Pattern scoring
  let bullScore = 0, bearScore = 0;
  if (trendStr.includes('Up'))   bullScore += 2;
  if (trendStr === 'Strong Up')  bullScore += 1;
  if (rsiVal > 50 && rsiVal < 70) bullScore += 1;
  if (rsiVal > 70) { bullScore += 1; bearScore += 1; } // overbought
  if (rsiVal < 30) bearScore += 2;
  if (macdVal > sigVal) bullScore += 1;
  if (macdCrossUp)  bullScore += 2;
  if (macdCrossDown) bearScore += 2;
  if (bbPct > 0.8) bearScore += 1; // near upper band
  if (bbPct < 0.2) bullScore += 1; // near lower band
  if (inSqueeze)   bullScore += 1; // compression before release
  if (volRatio > 1.5 && chg1 > 0) bullScore += 2; // high volume up
  if (volRatio > 1.5 && chg1 < 0) bearScore += 2; // high volume down
  if (obvSlope > 0) bullScore += 1;
  if (nearResistance) bearScore += 1;
  if (nearSupport)    bullScore += 1;

  return {
    label, close: last.close, high: last.high, low: last.low, volume: last.volume,
    chg1: chg1.toFixed(2), chg5: chg5.toFixed(2),
    ema20: e20?.toFixed(2), ema50: e50?.toFixed(2), ema200: e200?.toFixed(2),
    trend: trendStr,
    rsi: rsiVal?.toFixed(1),
    rsiTrend: rsi5.length >= 3 ? (rsi5[rsi5.length-1] > rsi5[0] ? 'Rising' : 'Falling') : 'N/A',
    macd: { value: macdVal?.toFixed(4), signal: sigVal?.toFixed(4), hist: histVal?.toFixed(4), crossUp: macdCrossUp, crossDown: macdCrossDown },
    bbPct: (bbPct * 100).toFixed(0) + '%',
    bbSqueeze, atrPct: atrPct.toFixed(2) + '%',
    inSqueeze,
    volume: { ratio: volRatio.toFixed(2), trend: obvSlope > 0 ? 'Accumulating' : 'Distributing' },
    sr: { resistance: sr.resistance.map(v => v.toFixed(2)), support: sr.support.map(v => v.toFixed(2)) },
    nearResistance, nearSupport,
    score: { bull: bullScore, bear: bearScore, net: bullScore - bearScore },
  };
}

// ── 综合多周期判断 ──────────────────────────────────────────────────────────
function synthesize(periods) {
  const valid = periods.filter(p => p);
  if (valid.length === 0) return null;

  const weightMap = { '1W': 4, '1D': 3, '4H': 2, '1H': 1 };
  let totalBull = 0, totalBear = 0, totalWeight = 0;

  for (const p of valid) {
    const w = weightMap[p.label] || 1;
    totalBull += p.score.bull * w;
    totalBear += p.score.bear * w;
    totalWeight += w;
  }

  const netScore = (totalBull - totalBear) / totalWeight;
  const daily = valid.find(p => p.label === '1D');
  const weekly = valid.find(p => p.label === '1W');
  const hourly1 = valid.find(p => p.label === '1H');

  // Signal determination
  let signal = netScore > 1.5 ? '看多' : netScore < -1.5 ? '看空' : '观望';

  // Type
  const inSqz = valid.some(p => p.inSqueeze);
  const nearRes = daily?.nearResistance || weekly?.nearResistance;
  const dailyTrend = daily?.trend || '';
  let type = '观望';
  if (signal === '看多') {
    if (inSqz) type = '突破型 (squeeze释放)';
    else if (daily?.rsi < 50 && daily?.macd.value > 0) type = '回调低吸';
    else type = '突破型';
  } else if (signal === '看空') {
    type = '反转 / 看空';
  }

  // Trend alignment across timeframes
  const trendAlign = valid.filter(p => p.trend.includes('Up')).length;
  const trendCount = valid.length;
  const trendAlignPct = (trendAlign / trendCount * 100).toFixed(0) + '%';

  // Chase suitable
  const chaseOK = signal === '看多' && !nearRes && netScore > 2 && trendAlignPct >= '75%';

  // Risks
  const risks = [];
  if (nearRes) risks.push('⚠️ 接近关键压力位，突破需量能配合');
  if (daily?.rsi > 70) risks.push('⚠️ RSI日线超买 (' + daily.rsi + ')，动能衰减风险');
  if (daily?.macd.crossDown) risks.push('⚠️ MACD日线死叉，趋势转弱');
  if (daily?.volume.trend === 'Distributing') risks.push('⚠️ OBV分发形态，主力出货迹象');
  if (weeklyBearSignal(weekly)) risks.push('⚠️ 周线级别看空，短期反弹承压');
  if (daily?.bbPct === '100%' || parseInt(daily?.bbPct) > 90) risks.push('⚠️ 价格触及布林带上轨，短期回调概率高');
  if (!trendAlign) risks.push('⚠️ 多周期趋势背离，信号不一致');

  return { signal, type, chaseOK: chaseOK ? 'YES' : 'NO', netScore: netScore.toFixed(2), trendAlignPct, risks, daily, weekly, hourly1 };
}

function weeklyBearSignal(w) {
  if (!w) return false;
  return w.trend.includes('Down') || (w.rsi < 40) || w.macd.crossDown;
}

// ── 主程序 ──────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n' + '═'.repeat(72));
  console.log('  📊 美股精选股票 — 多周期技术面深度分析');
  console.log(`  📅 分析日期: 2026-04-25  |  周期: 1H / 4H / 1D / 1W`);
  console.log('═'.repeat(72));

  const allResults = [];

  for (const stock of STOCKS) {
    console.log(`\n${'─'.repeat(72)}`);
    console.log(`  📈 ${stock.symbol}  ${stock.name}`);
    console.log('─'.repeat(72));

    // Switch symbol
    run(`symbol ${stock.symbol}`);
    await sleep(2000);

    const periodData = [];

    for (const { tf, label, bars: barCount } of TIMEFRAMES) {
      process.stdout.write(`  [${label}] 抓取数据...`);
      run(`timeframe ${tf}`);
      await sleep(1500);

      const raw = run(`ohlcv -n ${barCount}`);
      if (!raw?.success || !raw.bars?.length) {
        console.log(' ❌ 无数据');
        periodData.push(null);
        continue;
      }

      const result = analyzePeriod(raw.bars, label);
      periodData.push(result);

      if (result) {
        console.log(` ✓  close=${result.close}  trend=${result.trend}  RSI=${result.rsi}  vol=${result.volume.ratio}x`);
      }
    }

    // Take 1D screenshot
    run(`timeframe D`);
    await sleep(1000);
    const shot = run(`screenshot`);
    const shotPath = shot?.path || shot?.file || 'N/A';

    // Synthesize
    const syn = synthesize(periodData);
    const [pW, pD, p4H, p1H] = [
      periodData.find(p=>p?.label==='1W'),
      periodData.find(p=>p?.label==='1D'),
      periodData.find(p=>p?.label==='4H'),
      periodData.find(p=>p?.label==='1H'),
    ];

    // ── Print detailed analysis ──────────────────────────────────────────
    const sigEmoji = syn?.signal === '看多' ? '🟢' : syn?.signal === '看空' ? '🔴' : '🟡';

    console.log(`\n  ┌─── 趋势结构 (Trend Structure) ───────────────────────────────`);
    [pW, pD, p4H, p1H].filter(Boolean).forEach(p => {
      const arrow = p.trend.includes('Up') ? '↑' : p.trend.includes('Down') ? '↓' : '→';
      console.log(`  │  ${p.label.padEnd(4)} ${arrow} ${p.trend.padEnd(14)}  EMA20=${p.ema20}  EMA50=${p.ema50}  EMA200=${p.ema200||'N/A'}`);
    });
    console.log(`  │  周期对齐率: ${syn?.trendAlignPct}`);

    console.log(`  ├─── 动能系统 (Momentum) ──────────────────────────────────────`);
    [pW, pD, p4H, p1H].filter(Boolean).forEach(p => {
      const rsiState = p.rsi > 70 ? '超买' : p.rsi < 30 ? '超卖' : p.rsi > 55 ? '强势' : p.rsi < 45 ? '弱势' : '中性';
      const macdSt   = p.macd.crossUp ? '金叉↑' : p.macd.crossDown ? '死叉↓' : p.macd.value > 0 ? '正值' : '负值';
      console.log(`  │  ${p.label.padEnd(4)} RSI=${p.rsi}(${rsiState})  MACD=${macdSt}(${p.macd.hist})  趋势=${p.rsiTrend}`);
    });

    console.log(`  ├─── 波动压缩与释放 (Volatility / Squeeze) ─────────────────────`);
    [pW, pD, p4H, p1H].filter(Boolean).forEach(p => {
      const sqzStr = p.inSqueeze ? '🟡 压缩中' : '  释放中';
      const bbPos  = `BB位置=${p.bbPct}`;
      console.log(`  │  ${p.label.padEnd(4)} ${sqzStr}  ATR=${p.atrPct}  ${bbPos}  BBSqz=${p.bbSqueeze ? 'YES' : 'no'}`);
    });

    console.log(`  ├─── 成交量行为 (Volume) ──────────────────────────────────────`);
    [pW, pD, p4H, p1H].filter(Boolean).forEach(p => {
      const volSt = p.volume.ratio > 1.5 ? '放量' : p.volume.ratio < 0.7 ? '缩量' : '正常';
      console.log(`  │  ${p.label.padEnd(4)} 量比=${p.volume.ratio}x(${volSt})  OBV=${p.volume.trend}  涨跌=${p.chg1}%`);
    });

    console.log(`  ├─── 关键结构位 (Key Levels) ───────────────────────────────────`);
    if (pD) {
      console.log(`  │  当前价: ${pD.close}`);
      console.log(`  │  压力位: ${pD.sr.resistance.join(' / ') || 'N/A'}${pD.nearResistance ? '  ⚠️ 接近压力' : ''}`);
      console.log(`  │  支撑位: ${pD.sr.support.join(' / ')   || 'N/A'}${pD.nearSupport    ? '  ✅ 贴近支撑' : ''}`);
    }

    console.log(`  ├─── 量价时空 / 资金行为 ──────────────────────────────────────`);
    if (pD && pW) {
      const dayChg5 = pD.chg5, wkChg5 = pW.chg5;
      const priceLeadsVol = pD.chg1 > 0 && pD.volume.ratio > 1.2 ? '价涨量升 ✅' :
                            pD.chg1 < 0 && pD.volume.ratio < 0.8 ? '价跌量缩 (正常调整)' :
                            pD.chg1 > 0 && pD.volume.ratio < 0.8 ? '价涨量缩 ⚠️ 弱势上涨' :
                            pD.chg1 < 0 && pD.volume.ratio > 1.2 ? '价跌量升 ❌ 主力出货' : '量价一致';
      console.log(`  │  日线近期: ${priceLeadsVol}  5日涨跌: ${pD.chg5}%`);
      console.log(`  │  周线5周: ${pW.chg5}%  OBV趋势(日线)=${pD.volume.trend}`);
    }

    if (syn) {
      console.log(`  └─── 综合信号判断 ──────────────────────────────────────────────`);
      console.log(`\n    ${sigEmoji} 结论: ${syn.signal}   净得分: ${syn.netScore}`);
      console.log(`    📌 信号类型: ${syn.type}`);
      console.log(`    🏃 适合追涨: ${syn.chaseOK}`);
      if (syn.risks.length > 0) {
        console.log(`    关键风险:`);
        syn.risks.forEach(r => console.log(`      ${r}`));
      }
      console.log(`    📸 图表快照: ${shotPath}`);
    }

    allResults.push({ symbol: stock.symbol, name: stock.name, syn, periods: periodData, screenshot: shotPath });
    await sleep(500);
  }

  // ── 最终对比 & 推荐 ────────────────────────────────────────────────────────
  console.log('\n\n' + '═'.repeat(72));
  console.log('  🏆 技术面综合评分 & 明日操作优先级');
  console.log('═'.repeat(72));

  const scored = allResults
    .filter(r => r.syn)
    .map(r => ({ ...r, score: parseFloat(r.syn.netScore) }))
    .sort((a, b) => b.score - a.score);

  console.log(`\n  ${'排名'.padEnd(4)} ${'股票'.padEnd(14)} ${'结论'.padEnd(6)} ${'类型'.padEnd(20)} ${'追涨'.padEnd(6)} ${'净分'}`);
  console.log('  ' + '─'.repeat(65));
  scored.forEach((r, i) => {
    const em = r.syn.signal === '看多' ? '🟢' : r.syn.signal === '看空' ? '🔴' : '🟡';
    console.log(`  #${i+1}   ${r.symbol.padEnd(14)} ${em}${r.syn.signal.padEnd(5)} ${r.syn.type.padEnd(20)} ${r.syn.chaseOK.padEnd(6)} ${r.score > 0 ? '+' : ''}${r.score}`);
  });

  // Champion
  const champ = scored[0];
  if (champ) {
    console.log(`\n  🥇 明日最优介入标的: ${champ.symbol} (${champ.name})`);
    console.log(`     净得分: ${champ.score > 0 ? '+' : ''}${champ.score}`);
    console.log(`     理由:`);
    const d = champ.syn.daily, w = champ.syn.weekly;
    if (d) console.log(`       • 日线趋势: ${d.trend}，RSI=${d.rsi}，MACD ${d.macd.crossUp ? '金叉' : d.macd.value > 0 ? '正值' : '负值'}`);
    if (w) console.log(`       • 周线趋势: ${w.trend}，RSI=${w.rsi}，5周涨跌=${w.chg5}%`);
    if (d?.inSqueeze) console.log(`       • Squeeze压缩蓄势，即将释放`);
    console.log(`       • 多周期趋势对齐: ${champ.syn.trendAlignPct}`);
    if (champ.syn.chaseOK === 'YES') {
      console.log(`       • 适合追涨：趋势强、无明显压力位`);
    }
  }

  // Save JSON
  const filename = `technical_analysis_us_${new Date().toISOString().slice(0,10)}.json`;
  writeFileSync(filename, JSON.stringify(allResults, null, 2));
  console.log(`\n  ✅ 完整数据已保存: ${filename}\n`);
}

main().catch(console.error);
