/**
 * 7只GO信号股票 · 多周期技术分析引擎
 * 时间框架: 1H / 4H / 1D / 1W
 * 分析维度: 趋势/动能/波动压缩/成交量/量价时空/关键结构位/资金行为
 */
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const CLI = 'node src/cli/index.js';
const STOCKS = [
  'SSE:605599',
  'SSE:603486',
  'SSE:600388',
  'SZSE:300661',
];
const TIMEFRAMES = ['60', '240', 'D', 'W'];  // 1H=60, 4H=240, 1D=D, 1W=W
const TF_LABELS  = { '60':'1H', '240':'4H', 'D':'1D', 'W':'1W' };
const sleep = ms => new Promise(r => setTimeout(r, ms));

function run(cmd) {
  try {
    return JSON.parse(execSync(`${CLI} ${cmd}`, { encoding:'utf8', cwd: process.cwd() }));
  } catch { return null; }
}

// ──────────────────────────────────────────
// 技术指标计算库
// ──────────────────────────────────────────
function ema(arr, n) {
  const k = 2/(n+1);
  const result = [];
  let prev = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const val = i === 0 ? arr[0] : arr[i] * k + prev * (1-k);
    result.push(val);
    prev = val;
  }
  return result;
}

function sma(arr, n) {
  return arr.map((_, i) => i < n-1 ? null : arr.slice(i-n+1, i+1).reduce((a,b)=>a+b,0)/n);
}

function rsi(closes, n=14) {
  const gains=[], losses=[];
  for (let i=1;i<closes.length;i++) {
    const d = closes[i]-closes[i-1];
    gains.push(d>0?d:0);
    losses.push(d<0?-d:0);
  }
  const result = Array(n).fill(null);
  let avgG = gains.slice(0,n).reduce((a,b)=>a+b,0)/n;
  let avgL = losses.slice(0,n).reduce((a,b)=>a+b,0)/n;
  result.push(avgL===0 ? 100 : 100-100/(1+avgG/avgL));
  for (let i=n;i<gains.length;i++) {
    avgG = (avgG*(n-1)+gains[i])/n;
    avgL = (avgL*(n-1)+losses[i])/n;
    result.push(avgL===0 ? 100 : 100-100/(1+avgG/avgL));
  }
  return result;
}

function macd(closes, fast=12, slow=26, sig=9) {
  const ef = ema(closes, fast);
  const es = ema(closes, slow);
  const line = ef.map((v,i) => v - es[i]);
  const signal = ema(line, sig);
  const hist = line.map((v,i) => v - signal[i]);
  return { line, signal, hist };
}

function atr(bars, n=14) {
  const tr = bars.map((b,i) => i===0 ? b.high-b.low :
    Math.max(b.high-b.low, Math.abs(b.high-bars[i-1].close), Math.abs(b.low-bars[i-1].close)));
  const result = [];
  let prev = tr.slice(0,n).reduce((a,b)=>a+b,0)/n;
  result.push(...Array(n-1).fill(null), prev);
  for (let i=n;i<tr.length;i++) {
    prev = (prev*(n-1)+tr[i])/n;
    result.push(prev);
  }
  return result;
}

function bbands(closes, n=20, mult=2) {
  return closes.map((_,i) => {
    if (i < n-1) return null;
    const slice = closes.slice(i-n+1,i+1);
    const mid = slice.reduce((a,b)=>a+b,0)/n;
    const std = Math.sqrt(slice.reduce((a,b)=>a+(b-mid)**2,0)/n);
    return { upper: mid+mult*std, mid, lower: mid-mult*std, width: 2*mult*std/mid };
  });
}

function keltner(bars, n=20, mult=1.5) {
  const closes = bars.map(b=>b.close);
  const ma = sma(closes, n);
  const atrArr = atr(bars, n);
  return ma.map((m,i) => m==null || atrArr[i]==null ? null : ({
    upper: m + mult*atrArr[i],
    lower: m - mult*atrArr[i],
  }));
}

function volMa(volumes, n=20) {
  return sma(volumes, n);
}

// SQZ: BB 宽度 < KC 宽度 * 0.8
function sqzStatus(bars) {
  const closes = bars.map(b=>b.close);
  const bb = bbands(closes, 20, 2);
  const kc = keltner(bars, 20, 1.5);
  return bb.map((b,i) => {
    if (!b || !kc[i]) return null;
    const bbW = b.upper - b.lower;
    const kcW = kc[i].upper - kc[i].lower;
    return bbW < kcW * 0.8;
  });
}

// SQZMOM val: linreg(close - mid_KC, 20, 0)
function sqzMomVal(bars, n=20) {
  const closes = bars.map(b=>b.close);
  const highs  = bars.map(b=>b.high);
  const lows   = bars.map(b=>b.low);
  const result = [];
  for (let i=0; i<bars.length; i++) {
    if (i < n-1) { result.push(null); continue; }
    const slice_h = highs.slice(i-n+1,i+1);
    const slice_l = lows.slice(i-n+1,i+1);
    const hhv = Math.max(...slice_h);
    const llv = Math.min(...slice_l);
    const mid = (hhv+llv)/2;
    const src = closes.slice(i-n+1,i+1).map(c=>c-mid);
    // linreg: least squares y=a+bx, return a (y at x=0 which is last point)
    const m = n;
    let sumX=0,sumY=0,sumXY=0,sumX2=0;
    for (let j=0;j<m;j++) { sumX+=j; sumY+=src[j]; sumXY+=j*src[j]; sumX2+=j*j; }
    const slope = (m*sumXY-sumX*sumY)/(m*sumX2-sumX*sumX);
    const intercept = (sumY-slope*sumX)/m;
    result.push(intercept + slope*(m-1));
  }
  return result;
}

// 检测 EMA 趋势排列
function trendStructure(closes) {
  const e20  = ema(closes,20);
  const e60  = ema(closes,60);
  const e200 = ema(closes,200);
  const last = closes.length-1;
  const c  = closes[last];
  const e20v = e20[last], e60v = e60[last], e200v = e200[last];

  const bullAlign = e20v > e60v && e60v > e200v && c > e20v;
  const bearAlign = e20v < e60v && e60v < e200v && c < e20v;

  // EMA slope (最近5根)
  const slope20  = (e20[last]  - e20[Math.max(0,last-5)])  / 5;
  const slope60  = (e60[last]  - e60[Math.max(0,last-5)])  / 5;
  const slope200 = (e200[last] - e200[Math.max(0,last-5)]) / 5;

  return {
    bullAlign, bearAlign,
    price: c.toFixed(2),
    ema20: e20v.toFixed(2), ema60: e60v.toFixed(2), ema200: e200v.toFixed(2),
    slope20: slope20.toFixed(4), slope200: slope200.toFixed(4),
    pAboveE20: c > e20v, pAboveE60: c > e60v, pAboveE200: c > e200v,
    trendLabel: bullAlign ? '📈多头排列' : bearAlign ? '📉空头排列' : '↔️震荡排列',
  };
}

// RSI 背离检测（简化版）
function rsiDivergence(bars, rsiArr) {
  const closes = bars.map(b=>b.close);
  const n = closes.length;
  if (n < 20) return '数据不足';
  const recentPriceHigh  = Math.max(...closes.slice(-10));
  const prevPriceHigh    = Math.max(...closes.slice(-20,-10));
  const recentRsiHigh    = Math.max(...rsiArr.slice(-10).filter(v=>v!=null));
  const prevRsiHigh      = Math.max(...rsiArr.slice(-20,-10).filter(v=>v!=null));
  const recentPriceLow   = Math.min(...closes.slice(-10));
  const prevPriceLow     = Math.min(...closes.slice(-20,-10));
  const recentRsiLow     = Math.min(...rsiArr.slice(-10).filter(v=>v!=null));
  const prevRsiLow       = Math.min(...rsiArr.slice(-20,-10).filter(v=>v!=null));

  if (recentPriceHigh > prevPriceHigh && recentRsiHigh < prevRsiHigh - 2) return '⚠️ 顶背离(看跌)';
  if (recentPriceLow  < prevPriceLow  && recentRsiLow  > prevRsiLow  + 2) return '✅ 底背离(看涨)';
  return '无背离';
}

// 关键结构位（近40根最高/最低）
function keyLevels(bars) {
  const n = Math.min(40, bars.length);
  const slice = bars.slice(-n);
  const highs = slice.map(b=>b.high);
  const lows  = slice.map(b=>b.low);
  const resistance = Math.max(...highs);
  const support    = Math.min(...lows);
  const close = bars[bars.length-1].close;
  const distToRes = ((resistance-close)/close*100).toFixed(2);
  const distToSup = ((close-support)/close*100).toFixed(2);
  // 近10根是否接近压力
  const nearResistance = parseFloat(distToRes) < 3;
  const nearSupport    = parseFloat(distToSup) < 3;
  return { resistance: resistance.toFixed(2), support: support.toFixed(2),
           distToRes, distToSup, nearResistance, nearSupport };
}

// 成交量行为分析
function volumeAnalysis(bars) {
  const n = Math.min(40, bars.length);
  const slice = bars.slice(-n);
  const volumes = slice.map(b=>b.volume);
  const closes  = slice.map(b=>b.close);
  const vma20   = volMa(volumes, 20);
  const lastVol = volumes[volumes.length-1];
  const lastVma = vma20[vma20.length-1];
  const vol5    = volumes.slice(-5).reduce((a,b)=>a+b,0)/5;
  const vol20   = volumes.slice(-20).reduce((a,b)=>a+b,0)/20;
  const volMomRatio = vol5/vol20;

  // 量能是否放大
  const volExpanding = lastVol > lastVma * 1.2;
  const volShrinking = lastVol < lastVma * 0.7;

  // 成交量配合价格方向（最近5根）
  let accumBars=0, distribBars=0;
  const last5 = bars.slice(-5);
  last5.forEach((b,i) => {
    if (i===0) return;
    const up = b.close > b.open;
    const vRatio = b.volume / (lastVma||1);
    if (up && vRatio > 1.1) accumBars++;
    if (!up && vRatio > 1.1) distribBars++;
  });

  return {
    volRatio:  (lastVol/(lastVma||1)).toFixed(2),
    volMomRatio: volMomRatio.toFixed(2),
    volExpanding, volShrinking,
    accumBars, distribBars,
    volLabel: volExpanding ? '🔥放量' : volShrinking ? '📉缩量' : '➡️量能正常',
    behaviorLabel: accumBars >= 2 ? '🟢吸筹放量' : distribBars >= 2 ? '🔴出货迹象' : '中性',
  };
}

// 资金行为模拟（大单判断）
function capitalFlow(bars) {
  const last20 = bars.slice(-20);
  let buyPressure=0, sellPressure=0;
  last20.forEach(b => {
    const bodyPct = Math.abs(b.close-b.open)/(b.high-b.low+0.001);
    const tailUp  = (b.high - Math.max(b.close,b.open))/(b.high-b.low+0.001);
    const tailDn  = (Math.min(b.close,b.open) - b.low)/(b.high-b.low+0.001);
    if (b.close > b.open && bodyPct > 0.6 && b.volume > 0) buyPressure  += b.volume * bodyPct;
    if (b.close < b.open && bodyPct > 0.6 && b.volume > 0) sellPressure += b.volume * bodyPct;
  });
  const ratio = sellPressure > 0 ? buyPressure/sellPressure : 99;
  return {
    buyRatio: ratio.toFixed(2),
    label: ratio > 1.5 ? '🟢主力买入为主' : ratio < 0.67 ? '🔴主力卖出为主' : '⚖️多空均衡',
  };
}

// 综合多周期数据
function analyzeTF(bars, tfLabel) {
  if (!bars || bars.length < 30) return { tfLabel, error: '数据不足' };

  const closes  = bars.map(b=>b.close);
  const n       = bars.length;

  // 1. 趋势
  const trend = trendStructure(closes);

  // 2. 动能 RSI + MACD + SQZMOM
  const rsiArr  = rsi(closes);
  const lastRsi = rsiArr[n-1] || 50;
  const macdObj = macd(closes);
  const lastMacdLine = macdObj.line[n-1];
  const lastMacdHist = macdObj.hist[n-1];
  const prevMacdHist = macdObj.hist[n-2];
  const macdCrossUp  = prevMacdHist < 0 && lastMacdHist >= 0;
  const macdCrossDn  = prevMacdHist > 0 && lastMacdHist <= 0;
  const macdExpand   = Math.abs(lastMacdHist) > Math.abs(prevMacdHist||0);

  // 3. 波动/压缩
  const sqz    = sqzStatus(bars);
  const sqzMom = sqzMomVal(bars);
  const lastSqz    = sqz[n-1];
  const lastSqzMom = sqzMom[n-1];
  const prevSqzMom = sqzMom[n-2];
  const sqzCount   = (() => {
    let cnt=0;
    for (let i=n-1;i>=0&&sqz[i];i--) cnt++;
    return cnt;
  })();
  const sqzReleased = sqz[n-2] === true && sqz[n-1] === false; // 刚释放

  const bb = bbands(closes);
  const lastBb = bb[n-1];
  const prevBb = bb[n-5];
  const bbWidthShrink = lastBb && prevBb ? lastBb.width < prevBb.width * 0.9 : false;
  const bbWidthExpand = lastBb && prevBb ? lastBb.width > prevBb.width * 1.1 : false;

  const atrArr = atr(bars);
  const lastAtr = atrArr[n-1] || 0;
  const atrPct  = lastAtr / closes[n-1] * 100;

  // 4. 成交量
  const vol = volumeAnalysis(bars);

  // 5. 结构位
  const levels = keyLevels(bars);

  // 6. 背离
  const diverg = rsiDivergence(bars, rsiArr);

  // 7. 资金行为
  const capital = capitalFlow(bars);

  // ── 综合评分 (per-TF) ──
  let score = 50;
  if (trend.bullAlign)       score += 15;
  else if (trend.bearAlign)  score -= 15;
  if (lastRsi < 35)          score += 10; // 超卖
  else if (lastRsi > 70)     score -= 10; // 超买
  else if (lastRsi > 50 && lastRsi < 65) score += 5;
  if (lastMacdHist > 0 && macdExpand) score += 8;
  else if (lastMacdHist < 0)           score -= 5;
  if (macdCrossUp)           score += 12;
  if (macdCrossDn)           score -= 12;
  if (sqzReleased && lastSqzMom > 0) score += 15;
  if (lastSqz && sqzCount >= 3 && sqzCount <= 10 && lastSqzMom > 0 && lastSqzMom > (prevSqzMom||0)) score += 8;
  if (vol.volExpanding && vol.accumBars >= 2) score += 8;
  if (vol.distribBars >= 2 && vol.volExpanding) score -= 8;
  if (diverg.includes('底背离')) score += 10;
  if (diverg.includes('顶背离')) score -= 10;
  if (levels.nearResistance)  score -= 5; // 接近压力位
  score = Math.max(0, Math.min(100, Math.round(score)));

  // RSI 状态文字
  const rsiLabel = lastRsi > 75 ? '⛔超买' : lastRsi > 60 ? '↑偏强' : lastRsi < 25 ? '✅超卖' : lastRsi < 40 ? '↓偏弱' : '➡️中性';

  return {
    tfLabel,
    score,
    trend,
    momentum: {
      rsi: lastRsi.toFixed(1),
      rsiLabel,
      macdLine: lastMacdLine.toFixed(4),
      macdHist: lastMacdHist.toFixed(4),
      macdDir: lastMacdHist > 0 ? (macdExpand?'🟢扩张上行':'🟡收敛上行') : (macdExpand?'🔴扩张下行':'🟠收敛下行'),
      macdCrossUp, macdCrossDn,
      divergence: diverg,
    },
    volatility: {
      sqzActive:   !!lastSqz,
      sqzCount,
      sqzMomVal:   lastSqzMom?.toFixed(4)||'0',
      sqzMomUp:    !!lastSqzMom && lastSqzMom > (prevSqzMom||0),
      sqzReleased,
      bbWidth:     lastBb ? (lastBb.width*100).toFixed(2)+'%' : '-',
      bbWidthShrink, bbWidthExpand,
      atrPct:      atrPct.toFixed(2)+'%',
    },
    volume: vol,
    levels,
    capital,
  };
}

// ──────────────────────────────────────────
// 多周期综合信号生成
// ──────────────────────────────────────────
function generateMultiTFSignal(tfData, symbol, v11) {
  // 权重: 1W=4, 1D=3, 4H=2, 1H=1
  const weights = { '1W':4, '1D':3, '4H':2, '1H':1 };
  let weightedScore = 0, totalWeight = 0;

  const valid = tfData.filter(t=>!t.error);
  valid.forEach(t => {
    const w = weights[t.tfLabel] || 1;
    weightedScore += t.score * w;
    totalWeight   += w;
  });
  const finalScore = totalWeight > 0 ? Math.round(weightedScore/totalWeight) : 50;

  // 各时间框架趋势一致性
  const bullCount = valid.filter(t => t.trend.bullAlign).length;
  const bearCount = valid.filter(t => t.trend.bearAlign).length;
  const trendConsistency = bullCount === valid.length ? '🟢全周期多头' :
                           bearCount === valid.length ? '🔴全周期空头' :
                           bullCount > bearCount ? '偏多(部分周期分歧)' : '偏空(部分周期分歧)';

  // SQZMOM释放信号（日线+4H共振最强）
  const d1  = valid.find(t => t.tfLabel === '1D');
  const h4  = valid.find(t => t.tfLabel === '4H');
  const h1  = valid.find(t => t.tfLabel === '1H');
  const w1  = valid.find(t => t.tfLabel === '1W');

  const sqzReleaseD1  = d1?.volatility.sqzReleased && d1?.volatility.sqzMomUp;
  const sqzActiveD1   = d1?.volatility.sqzActive && d1?.volatility.sqzMomUp;
  const sqzReleaseH4  = h4?.volatility.sqzReleased;
  const macdBullD1    = d1?.momentum.macdHist > 0;
  const rsiD1         = parseFloat(d1?.momentum.rsi||50);
  const rsiH4         = parseFloat(h4?.momentum.rsi||50);
  const nearResD1     = d1?.levels.nearResistance;
  const macdCrossD1   = d1?.momentum.macdCrossUp;
  const divergD1      = d1?.momentum.divergence;
  const capitalD1     = d1?.capital.buyRatio;
  const volD1         = d1?.volume;

  // ── 信号判断逻辑 ──
  let action='观望', type='', chaseOK='NO', confidence='低';
  const risks=[], reasons=[];

  // 黑天鹅: 所有周期空头
  if (bearCount === valid.length) {
    action = '看空'; type='破位'; chaseOK='NO'; confidence='高';
    reasons.push('全周期EMA空头排列');
  }
  // 最强多头: 日线SQZ释放+MACD上穿+量能配合
  else if (sqzReleaseD1 && d1?.momentum.macdCrossUp && d1?.volume.volExpanding) {
    action='看多'; type='突破型'; chaseOK='YES'; confidence='高';
    reasons.push('日线SQZMOM释放+MACD金叉+放量突破');
  }
  // 日线SQZ进行中+MACD上行+周线多头
  else if (sqzActiveD1 && macdBullD1 && w1?.trend.bullAlign) {
    action='看多'; type='回调低吸'; chaseOK='NO'; confidence='高';
    reasons.push('日线压缩中+MACD上行+周线多头排列，等待释放');
  }
  // MACD日线金叉
  else if (macdCrossD1 && bullCount >= 2) {
    action='看多'; type='突破型'; chaseOK=rsiD1<65?'YES':'NO'; confidence='中';
    reasons.push('日线MACD金叉，多周期趋势偏多');
  }
  // 底背离
  else if (divergD1?.includes('底背离') && rsiD1 < 45) {
    action='看多'; type='反转'; chaseOK='NO'; confidence='中';
    reasons.push('日线RSI底背离，可能反转向上');
  }
  // v11特征优先: trendUp=true且日线压缩中
  else if (v11?.trendUp && v11?.validComp) {
    action='看多'; type='回调低吸'; chaseOK='NO'; confidence='中';
    reasons.push('v11 trendUp+validComp确认，等SQZMOM释放');
  }
  // 偏多但不强
  else if (finalScore >= 58 && bullCount >= 2) {
    action='看多'; type='回调低吸'; chaseOK='NO'; confidence='低';
    reasons.push(`综合评分${finalScore}，多头结构但需等确认`);
  }
  // 默认观望
  else {
    action='观望'; type=''; chaseOK='NO'; confidence='低';
    reasons.push(`综合评分${finalScore}，信号不明确`);
  }

  // ── 风险识别 ──
  if (nearResD1) risks.push('⚠️ 日线接近压力位(3%内)，突破前勿追');
  if (rsiD1 > 70) risks.push('⚠️ 日线RSI超买，动能衰减风险');
  if (rsiH4 > 70) risks.push('⚠️ 4H RSI超买，短线追高风险');
  if (divergD1?.includes('顶背离')) risks.push('⚠️ 日线RSI顶背离，警惕假突破');
  if (volD1?.distribBars >= 2) risks.push('⚠️ 日线出货迹象，主力可能减仓');
  if (d1?.volume.volRatio < 0.6 && action==='看多') risks.push('⚠️ 量能不足(<0.6x)，突破有效性存疑');
  if (!v11?.trendUp && action==='看多') risks.push('⚠️ EMA大趋势尚未确认(trendUp=false)');
  if (v11?.fakeBreak) risks.push('🚨 v11检测到假突破(fakeBreak=true)');
  if (!v11?.validComp && action==='看多') risks.push('⚠️ 当前无有效压缩，可能没有弹簧效应');

  // 是否诱多判断
  const induceLong = (nearResD1 && d1?.momentum.macdCrossUp && rsiD1 > 65) ||
                     (divergD1?.includes('顶背离') && action==='看多');
  if (induceLong) risks.push('🚨 疑似诱多/假突破：接近压力+RSI高位');

  return { finalScore, trendConsistency, action, type, chaseOK, confidence, reasons, risks };
}

// ──────────────────────────────────────────
// 主流程
// ──────────────────────────────────────────
const V11 = {
  'SSE:605599':  { trendUp:true,  validComp:true,  volMom:false, fakeBreak:false },
  'SSE:603486':  { trendUp:true,  validComp:true,  volMom:false, fakeBreak:false },
  'SSE:600388':  { trendUp:true,  validComp:true,  volMom:false, fakeBreak:false },
  'SZSE:300661': { trendUp:true,  validComp:true,  volMom:false, fakeBreak:false },
};

const NAMES = {
  'SSE:605599':'菜百股份', 'SSE:603486':'兴森科技', 'SSE:600388':'龙净环保', 'SZSE:300661':'圣邦股份',
};

async function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║   7只GO信号股票 · 多周期技术面深度分析                    ║');
  console.log(`║   时间: ${new Date().toLocaleString('zh-CN').padEnd(50)}║`);
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  const allResults = [];

  for (const symbol of STOCKS) {
    const name = NAMES[symbol];
    console.log(`\n${'═'.repeat(70)}`);
    console.log(`📌 ${symbol}  ${name}`);
    console.log('═'.repeat(70));

    const tfAnalysis = [];

    for (const tf of TIMEFRAMES) {
      process.stdout.write(`  切换 ${TF_LABELS[tf]}... `);

      // 切换股票+周期
      const sw = run(`symbol ${symbol}`);
      await sleep(800);
      const tfr = run(`timeframe ${tf}`);
      await sleep(1200);

      if (!sw?.success || !tfr?.success) {
        console.log('切换失败');
        tfAnalysis.push({ tfLabel: TF_LABELS[tf], error:'切换失败' });
        continue;
      }

      // 获取 OHLCV (100根)
      const ohlcv = run('ohlcv -n 100');
      if (!ohlcv?.success || !ohlcv.bars || ohlcv.bars.length < 20) {
        console.log(`数据不足(${ohlcv?.bars?.length||0}根)`);
        tfAnalysis.push({ tfLabel: TF_LABELS[tf], error:'数据不足' });
        continue;
      }

      const result = analyzeTF(ohlcv.bars, TF_LABELS[tf]);
      tfAnalysis.push(result);

      // 简要输出
      const t = result.trend;
      const m = result.momentum;
      const v = result.volatility;
      const vol = result.volume;
      console.log(`完成(${ohlcv.bars.length}根)`);
      console.log(`    趋势:${t.trendLabel}  RSI:${m.rsi}${m.rsiLabel}  MACD:${m.macdDir}`);
      console.log(`    SQZ:${v.sqzActive?'🔵压缩中':'○'}(${v.sqzCount}根) MomVal:${v.sqzMomVal} ${v.sqzReleased?'⚡刚释放!':''}`);
      console.log(`    成交量:${vol.volLabel} ${vol.behaviorLabel}  压力距离:${result.levels.distToRes}%  得分:${result.score}`);

      await sleep(300);
    }

    // 切回日线
    run(`timeframe D`);
    await sleep(500);

    // 多周期综合信号
    const signal = generateMultiTFSignal(tfAnalysis, symbol, V11[symbol]);

    console.log(`\n  ┌─────────────────── 综合信号 ───────────────────┐`);
    const actionIcon = signal.action==='看多'?'🟢 看多':signal.action==='看空'?'🔴 看空':'⚫ 观望';
    console.log(`  │  结论: ${actionIcon}  置信度:${signal.confidence}  综合评分:${signal.finalScore}/100`);
    console.log(`  │  类型: ${signal.type||'-'}  追涨: ${signal.chaseOK}`);
    console.log(`  │  趋势一致性: ${signal.trendConsistency}`);
    console.log(`  │  触发原因: ${signal.reasons.join(' | ')}`);
    if (signal.risks.length>0) {
      console.log(`  │  风险: ${signal.risks.join('\n  │       ')}`);
    }
    console.log(`  └────────────────────────────────────────────────┘`);

    allResults.push({ symbol, name, v11: V11[symbol], tfAnalysis, signal });
  }

  // ──────────────── 最终排行 ────────────────
  const sorted = [...allResults].sort((a,b) => b.signal.finalScore - a.signal.finalScore);
  const longStocks = sorted.filter(s => s.signal.action==='看多');

  console.log('\n\n' + '╔' + '═'.repeat(68) + '╗');
  console.log('║  🏆 明日最可能上涨排行榜 · 综合评分降序                        ║');
  console.log('╚' + '═'.repeat(68) + '╝\n');
  console.log('  排  股票            名称          评分  信号  追涨  置信  类型');
  console.log('  ' + '─'.repeat(70));
  sorted.forEach((r,i) => {
    const a = r.signal.action==='看多'?'🟢看多':r.signal.action==='看空'?'🔴看空':'⚫观望';
    console.log(`  #${i+1}  ${r.symbol.padEnd(15)} ${r.name.padEnd(7)} ${String(r.signal.finalScore).padStart(4)}  ${a}  ${r.signal.chaseOK.padEnd(4)}  ${r.signal.confidence}  ${r.signal.type||'-'}`);
  });

  console.log('\n\n🥇 明日首选:');
  if (longStocks.length > 0) {
    const best = longStocks[0];
    console.log(`  ${best.symbol} ${best.name}  (综合评分 ${best.signal.finalScore}/100)`);
    console.log(`  类型: ${best.signal.type}  追涨: ${best.signal.chaseOK}  置信: ${best.signal.confidence}`);
    console.log(`  理由: ${best.signal.reasons.join(' + ')}`);
    if (best.signal.risks.length>0)
      console.log(`  风险: ${best.signal.risks.slice(0,2).join(' | ')}`);

    // 详细多时间框架说明
    console.log(`\n  📊 多周期验证:`);
    best.tfAnalysis.filter(t=>!t.error).forEach(t => {
      console.log(`    [${t.tfLabel}] 评分:${t.score} ${t.trend.trendLabel} RSI:${t.momentum.rsi} SQZ:${t.volatility.sqzActive?'压缩中':'未压缩'}(${t.volatility.sqzCount}根) MACD:${t.momentum.macdDir}`);
    });

    if (longStocks.length > 1) {
      console.log('\n🥈 备选候选:');
      longStocks.slice(1,3).forEach(s => {
        console.log(`  ${s.symbol} ${s.name}  评分:${s.signal.finalScore}  类型:${s.signal.type}  ${s.signal.reasons[0]}`);
      });
    }
  } else {
    console.log('  暂无满足多头信号的股票，建议全部观望');
    console.log('\n  评分最高候选（观望等待确认）:');
    sorted.slice(0,2).forEach(s => {
      console.log(`  ${s.symbol} ${s.name}  评分:${s.signal.finalScore}  ${s.signal.reasons[0]}`);
    });
  }

  console.log('\n\n⚡ 关键风险汇总:');
  sorted.forEach(s => {
    if (s.signal.risks.length > 0) {
      console.log(`  ${s.symbol} ${s.name}: ${s.signal.risks.slice(0,2).join(' | ')}`);
    }
  });

  // 保存
  const out = `technical_analysis_4stocks_${new Date().toISOString().slice(0,10)}.json`;
  writeFileSync(out, JSON.stringify({ time: new Date().toISOString(), results: sorted }, null, 2));
  console.log(`\n\n💾 完整数据已保存: ${out}`);
  console.log(`\n分析完成! 共分析 ${STOCKS.length} 只股票 × ${TIMEFRAMES.length} 个时间框架 = ${STOCKS.length*TIMEFRAMES.length} 次数据采集`);
}

main().catch(console.error);
