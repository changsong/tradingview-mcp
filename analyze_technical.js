#!/usr/bin/env node
/**
 * 股票技术面综合分析
 * 多周期、多维度技术指标分析与交易信号生成
 */

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

// 推荐股票列表
const STOCKS = [
  { symbol: 'SZSE:002956', name: '西麦食品' },
  { symbol: 'SZSE:300750', name: '宁德时代' },
  { symbol: 'SZSE:002245', name: '蔚蓝锂芯' },
  { symbol: 'SZSE:300408', name: '三环集团' },
  { symbol: 'SSE:605319', name: '无锡振华' },
  { symbol: 'SZSE:300037', name: '新宙邦' },
  { symbol: 'SZSE:300661', name: '圣邦股份' },
  { symbol: 'SZSE:301345', name: '涛涛车业' },
  { symbol: 'SZSE:002475', name: '立讯精密' },
];

// 时间周期
const TIMEFRAMES = ['60', '240', 'D', 'W']; // 1h, 4h, 1d, 1w
const TF_NAMES = { '60': '1小时', '240': '4小时', 'D': '日线', 'W': '周线' };

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      timeout: 30000,
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    return JSON.parse(result.trim());
  } catch (err) {
    return { success: false, error: err.message };
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 计算技术指标
function calculateIndicators(bars) {
  if (!bars || bars.length < 20) return null;

  const closes = bars.map(b => b.close);
  const highs = bars.map(b => b.high);
  const lows = bars.map(b => b.low);
  const volumes = bars.map(b => b.volume);

  // EMA计算
  const ema = (data, period) => {
    const k = 2 / (period + 1);
    let emaVal = data.slice(0, period).reduce((a, b) => a + b, 0) / period;
    const result = [emaVal];
    for (let i = period; i < data.length; i++) {
      emaVal = data[i] * k + emaVal * (1 - k);
      result.push(emaVal);
    }
    return result;
  };

  // SMA计算
  const sma = (data, period) => {
    const result = [];
    for (let i = period - 1; i < data.length; i++) {
      const sum = data.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
      result.push(sum / period);
    }
    return result;
  };

  // RSI计算
  const calculateRSI = (data, period = 14) => {
    const changes = [];
    for (let i = 1; i < data.length; i++) {
      changes.push(data[i] - data[i - 1]);
    }

    let avgGain = 0, avgLoss = 0;
    for (let i = 0; i < period; i++) {
      if (changes[i] > 0) avgGain += changes[i];
      else avgLoss -= changes[i];
    }
    avgGain /= period;
    avgLoss /= period;

    const rsiValues = [];
    for (let i = period; i < changes.length; i++) {
      const change = changes[i];
      if (change > 0) {
        avgGain = (avgGain * (period - 1) + change) / period;
        avgLoss = (avgLoss * (period - 1)) / period;
      } else {
        avgGain = (avgGain * (period - 1)) / period;
        avgLoss = (avgLoss * (period - 1) - change) / period;
      }
      const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
      rsiValues.push(100 - 100 / (1 + rs));
    }
    return rsiValues;
  };

  // MACD计算
  const calculateMACD = (data) => {
    const ema12 = ema(data, 12);
    const ema26 = ema(data, 26);
    const macdLine = [];
    const offset = ema26.length - ema12.length;
    for (let i = 0; i < ema26.length; i++) {
      const idx12 = i + offset;
      if (idx12 >= 0 && idx12 < ema12.length) {
        macdLine.push(ema12[idx12] - ema26[i]);
      }
    }
    const signalLine = ema(macdLine, 9);
    const histogram = [];
    const sigOffset = macdLine.length - signalLine.length;
    for (let i = 0; i < signalLine.length; i++) {
      histogram.push(macdLine[i + sigOffset] - signalLine[i]);
    }
    return {
      macd: macdLine[macdLine.length - 1],
      signal: signalLine[signalLine.length - 1],
      histogram: histogram[histogram.length - 1],
      histogramPrev: histogram.length > 1 ? histogram[histogram.length - 2] : 0,
    };
  };

  // 布林带计算
  const calculateBB = (data, period = 20, mult = 2) => {
    const middle = sma(data, period);
    const lastMiddle = middle[middle.length - 1];
    const slice = data.slice(-period);
    const std = Math.sqrt(slice.reduce((sum, val) => sum + Math.pow(val - lastMiddle, 2), 0) / period);
    return {
      upper: lastMiddle + mult * std,
      middle: lastMiddle,
      lower: lastMiddle - mult * std,
      width: (mult * std * 2) / lastMiddle * 100, // 带宽百分比
    };
  };

  // ATR计算
  const calculateATR = (highs, lows, closes, period = 14) => {
    const tr = [];
    for (let i = 1; i < closes.length; i++) {
      const hl = highs[i] - lows[i];
      const hc = Math.abs(highs[i] - closes[i - 1]);
      const lc = Math.abs(lows[i] - closes[i - 1]);
      tr.push(Math.max(hl, hc, lc));
    }
    return sma(tr, period)[sma(tr, period).length - 1];
  };

  // 成交量分析
  const analyzeVolume = (volumes, closes) => {
    const avgVol = volumes.slice(-20).reduce((a, b) => a + b, 0) / 20;
    const lastVol = volumes[volumes.length - 1];
    const volRatio = lastVol / avgVol;

    // 量价关系
    const priceChange = closes[closes.length - 1] - closes[closes.length - 2];
    const volChange = volumes[volumes.length - 1] - volumes[volumes.length - 2];

    let volumePriceRelation = '正常';
    if (priceChange > 0 && volRatio > 1.5) volumePriceRelation = '放量上涨';
    else if (priceChange > 0 && volRatio < 0.7) volumePriceRelation = '缩量上涨';
    else if (priceChange < 0 && volRatio > 1.5) volumePriceRelation = '放量下跌';
    else if (priceChange < 0 && volRatio < 0.7) volumePriceRelation = '缩量下跌';

    return {
      avgVolume: avgVol,
      lastVolume: lastVol,
      volumeRatio: volRatio,
      volumePriceRelation,
    };
  };

  // 趋势判断
  const analyzeTrend = (closes) => {
    const ema5 = ema(closes, 5);
    const ema10 = ema(closes, 10);
    const ema20 = ema(closes, 20);
    const ema60 = closes.length >= 60 ? ema(closes, 60) : null;

    const last = closes[closes.length - 1];
    const lastEma5 = ema5[ema5.length - 1];
    const lastEma10 = ema10[ema10.length - 1];
    const lastEma20 = ema20[ema20.length - 1];
    const lastEma60 = ema60 ? ema60[ema60.length - 1] : null;

    // 均线多头排列
    const bullishAlignment = lastEma5 > lastEma10 && lastEma10 > lastEma20;
    const bearishAlignment = lastEma5 < lastEma10 && lastEma10 < lastEma20;

    // 价格位置
    const aboveEma20 = last > lastEma20;
    const aboveEma60 = lastEma60 ? last > lastEma60 : null;

    // 趋势强度
    let trendStrength = 0;
    if (last > lastEma5) trendStrength++;
    if (last > lastEma10) trendStrength++;
    if (last > lastEma20) trendStrength++;
    if (lastEma60 && last > lastEma60) trendStrength++;

    let trend = '震荡';
    if (bullishAlignment && trendStrength >= 3) trend = '上升趋势';
    else if (bearishAlignment && trendStrength <= 1) trend = '下降趋势';

    return {
      trend,
      trendStrength,
      bullishAlignment,
      bearishAlignment,
      aboveEma20,
      aboveEma60,
      ema5: lastEma5,
      ema10: lastEma10,
      ema20: lastEma20,
      ema60: lastEma60,
    };
  };

  // 支撑阻力位
  const findKeyLevels = (highs, lows, closes) => {
    const recentHighs = highs.slice(-20);
    const recentLows = lows.slice(-20);
    const last = closes[closes.length - 1];

    const resistance = Math.max(...recentHighs);
    const support = Math.min(...recentLows);

    // 计算距离压力位/支撑位的百分比
    const distToResistance = ((resistance - last) / last) * 100;
    const distToSupport = ((last - support) / last) * 100;

    return {
      resistance,
      support,
      distToResistance,
      distToSupport,
      nearResistance: distToResistance < 2,
      nearSupport: distToSupport < 2,
    };
  };

  // 执行所有计算
  const last = closes[closes.length - 1];
  const rsiValues = calculateRSI(closes);
  const rsi = rsiValues[rsiValues.length - 1];
  const rsiPrev = rsiValues.length > 1 ? rsiValues[rsiValues.length - 2] : rsi;

  const macd = calculateMACD(closes);
  const bb = calculateBB(closes);
  const atr = calculateATR(highs, lows, closes);
  const volume = analyzeVolume(volumes, closes);
  const trend = analyzeTrend(closes);
  const levels = findKeyLevels(highs, lows, closes);

  // 波动率分析
  const volatility = {
    atr,
    atrPercent: (atr / last) * 100,
    bbWidth: bb.width,
    isCompressed: bb.width < 5, // 布林带收窄
    isExpanding: bb.width > 10, // 布林带扩张
  };

  // 动能分析
  const momentum = {
    rsi,
    rsiTrend: rsi > rsiPrev ? '上升' : '下降',
    rsiOverbought: rsi > 70,
    rsiOversold: rsi < 30,
    macd: macd.macd,
    macdSignal: macd.signal,
    macdHistogram: macd.histogram,
    macdCrossUp: macd.histogram > 0 && macd.histogramPrev <= 0,
    macdCrossDown: macd.histogram < 0 && macd.histogramPrev >= 0,
    macdDivergence: macd.histogram > macd.histogramPrev ? '增强' : '减弱',
  };

  return {
    price: last,
    trend,
    momentum,
    volatility,
    volume,
    levels,
    bb,
  };
}

// 生成交易信号
function generateSignal(tfAnalysis) {
  const scores = { bullish: 0, bearish: 0 };
  const reasons = { bullish: [], bearish: [] };
  const risks = [];

  // 分析各周期
  for (const [tf, data] of Object.entries(tfAnalysis)) {
    if (!data) continue;
    const tfName = TF_NAMES[tf];

    // 趋势得分
    if (data.trend.trend === '上升趋势') {
      scores.bullish += tf === 'D' ? 3 : tf === 'W' ? 4 : 2;
      reasons.bullish.push(`${tfName}上升趋势`);
    } else if (data.trend.trend === '下降趋势') {
      scores.bearish += tf === 'D' ? 3 : tf === 'W' ? 4 : 2;
      reasons.bearish.push(`${tfName}下降趋势`);
    }

    // 均线多头排列
    if (data.trend.bullishAlignment) {
      scores.bullish += 2;
      reasons.bullish.push(`${tfName}均线多头`);
    } else if (data.trend.bearishAlignment) {
      scores.bearish += 2;
      reasons.bearish.push(`${tfName}均线空头`);
    }

    // RSI
    if (data.momentum.rsiOversold) {
      scores.bullish += 1;
      reasons.bullish.push(`${tfName}RSI超卖`);
    } else if (data.momentum.rsiOverbought) {
      scores.bearish += 1;
      reasons.bearish.push(`${tfName}RSI超买`);
      risks.push(`${tfName}RSI超买(${data.momentum.rsi.toFixed(1)})`);
    }

    // MACD
    if (data.momentum.macdCrossUp) {
      scores.bullish += 2;
      reasons.bullish.push(`${tfName}MACD金叉`);
    } else if (data.momentum.macdCrossDown) {
      scores.bearish += 2;
      reasons.bearish.push(`${tfName}MACD死叉`);
    }

    if (data.momentum.macdDivergence === '增强' && data.momentum.macdHistogram > 0) {
      scores.bullish += 1;
    } else if (data.momentum.macdDivergence === '减弱' && data.momentum.macdHistogram > 0) {
      risks.push(`${tfName}MACD动能衰减`);
    }

    // 量价关系
    if (data.volume.volumePriceRelation === '放量上涨') {
      scores.bullish += 2;
      reasons.bullish.push(`${tfName}放量上涨`);
    } else if (data.volume.volumePriceRelation === '放量下跌') {
      scores.bearish += 2;
      reasons.bearish.push(`${tfName}放量下跌`);
    } else if (data.volume.volumePriceRelation === '缩量上涨') {
      risks.push(`${tfName}缩量上涨`);
    }

    // 波动率
    if (data.volatility.isCompressed) {
      reasons.bullish.push(`${tfName}波动收窄待突破`);
    }

    // 关键位置
    if (data.levels.nearResistance) {
      risks.push(`${tfName}接近压力位`);
    }
  }

  // 日线和周线权重更高
  const dailyData = tfAnalysis['D'];
  const weeklyData = tfAnalysis['W'];

  // 判断信号类型
  let signalType = '观望';
  let tradeType = '';
  let canChase = 'NO';

  const netScore = scores.bullish - scores.bearish;

  if (netScore >= 8) {
    signalType = '看多';
    if (dailyData?.volatility.isCompressed || dailyData?.momentum.macdCrossUp) {
      tradeType = '突破型';
      canChase = dailyData?.volume.volumeRatio > 1.2 ? 'YES' : 'NO';
    } else if (dailyData?.momentum.rsiOversold || dailyData?.levels.nearSupport) {
      tradeType = '回调低吸';
      canChase = 'NO';
    } else {
      tradeType = '趋势跟随';
      canChase = risks.length === 0 ? 'YES' : 'NO';
    }
  } else if (netScore <= -8) {
    signalType = '看空';
    tradeType = '规避';
    canChase = 'NO';
  } else if (netScore >= 4) {
    signalType = '偏多观望';
    tradeType = '等待确认';
    canChase = 'NO';
  } else if (netScore <= -4) {
    signalType = '偏空观望';
    tradeType = '规避';
    canChase = 'NO';
  } else {
    signalType = '观望';
    tradeType = '震荡';
    canChase = 'NO';
  }

  // 检查假突破风险
  let fakeBreakoutRisk = false;
  if (dailyData) {
    if (dailyData.volume.volumeRatio < 0.8 && dailyData.levels.nearResistance) {
      fakeBreakoutRisk = true;
      risks.push('缩量接近压力位，假突破风险');
    }
    if (dailyData.momentum.rsiOverbought && dailyData.momentum.macdDivergence === '减弱') {
      fakeBreakoutRisk = true;
      risks.push('RSI超买+动能衰减，诱多风险');
    }
  }

  return {
    signal: signalType,
    tradeType,
    canChase,
    netScore,
    bullishScore: scores.bullish,
    bearishScore: scores.bearish,
    bullishReasons: reasons.bullish,
    bearishReasons: reasons.bearish,
    risks,
    fakeBreakoutRisk,
  };
}

// 计算上涨概率
function calculateUpProbability(signal, tfAnalysis) {
  let probability = 50; // 基础概率

  // 根据净得分调整
  probability += signal.netScore * 2;

  // 日线趋势加权
  const daily = tfAnalysis['D'];
  if (daily) {
    if (daily.trend.trend === '上升趋势') probability += 10;
    if (daily.trend.bullishAlignment) probability += 5;
    if (daily.momentum.macdHistogram > 0) probability += 5;
    if (daily.volume.volumePriceRelation === '放量上涨') probability += 8;
    if (daily.momentum.rsiOverbought) probability -= 10;
    if (daily.levels.nearResistance) probability -= 8;
  }

  // 周线趋势加权
  const weekly = tfAnalysis['W'];
  if (weekly) {
    if (weekly.trend.trend === '上升趋势') probability += 8;
    if (weekly.trend.bullishAlignment) probability += 5;
  }

  // 风险扣分
  probability -= signal.risks.length * 3;

  // 限制范围
  return Math.max(10, Math.min(90, probability));
}

// 主函数
async function main() {
  console.log('================================================================================');
  console.log('📈 股票技术面综合分析');
  console.log('================================================================================\n');

  const results = [];

  for (let i = 0; i < STOCKS.length; i++) {
    const stock = STOCKS[i];
    console.log(`\n[${i + 1}/${STOCKS.length}] 正在分析 ${stock.symbol} (${stock.name})...`);

    // 切换股票
    const switchResult = runCommand(`symbol ${stock.symbol}`);
    if (!switchResult.success) {
      console.log(`  ❌ 切换股票失败`);
      continue;
    }
    await sleep(2000);

    const tfAnalysis = {};

    // 分析各时间周期
    for (const tf of TIMEFRAMES) {
      console.log(`  分析 ${TF_NAMES[tf]}...`);

      // 切换时间周期
      runCommand(`timeframe ${tf}`);
      await sleep(1500);

      // 获取K线数据
      const ohlcv = runCommand('ohlcv --count=100');
      if (ohlcv.success && ohlcv.bars && ohlcv.bars.length >= 20) {
        tfAnalysis[tf] = calculateIndicators(ohlcv.bars);
      } else {
        console.log(`    ⚠️ ${TF_NAMES[tf]}数据不足`);
        tfAnalysis[tf] = null;
      }
    }

    // 生成交易信号
    const signal = generateSignal(tfAnalysis);
    const upProbability = calculateUpProbability(signal, tfAnalysis);

    const stockResult = {
      symbol: stock.symbol,
      name: stock.name,
      analysis_time: new Date().toISOString(),
      timeframe_analysis: tfAnalysis,
      signal,
      up_probability: upProbability,
    };

    results.push(stockResult);

    // 打印摘要
    console.log(`  ✅ 分析完成`);
    console.log(`     信号: ${signal.signal} | 类型: ${signal.tradeType}`);
    console.log(`     可追涨: ${signal.canChase} | 上涨概率: ${upProbability}%`);
    if (signal.risks.length > 0) {
      console.log(`     ⚠️ 风险: ${signal.risks.slice(0, 2).join('; ')}`);
    }
  }

  // 排序：按上涨概率排序
  results.sort((a, b) => b.up_probability - a.up_probability);

  // 打印汇总
  console.log('\n================================================================================');
  console.log('📊 技术分析汇总 (按上涨概率排序)');
  console.log('================================================================================\n');

  console.log('排名 | 股票代码      | 名称     | 信号   | 类型     | 追涨 | 概率 | 风险');
  console.log('-----|--------------|----------|--------|----------|------|------|------');

  results.forEach((r, idx) => {
    const riskCount = r.signal.risks.length;
    const riskStr = riskCount === 0 ? '无' : `${riskCount}项`;
    console.log(
      `${String(idx + 1).padStart(2)}   | ${r.symbol.padEnd(12)} | ${r.name.padEnd(8)} | ${r.signal.signal.padEnd(6)} | ${r.signal.tradeType.padEnd(8)} | ${r.signal.canChase.padEnd(4)} | ${String(r.up_probability).padStart(2)}%  | ${riskStr}`
    );
  });

  // 推荐股票
  console.log('\n================================================================================');
  console.log('🎯 明日交易推荐');
  console.log('================================================================================\n');

  const topPicks = results.filter(r => r.up_probability >= 60 && r.signal.signal.includes('多'));

  if (topPicks.length > 0) {
    console.log('【推荐买入】\n');
    topPicks.forEach((r, idx) => {
      console.log(`${idx + 1}. ${r.symbol} ${r.name}`);
      console.log(`   信号: ${r.signal.signal} | 类型: ${r.signal.tradeType}`);
      console.log(`   上涨概率: ${r.up_probability}%`);
      console.log(`   是否适合追涨: ${r.signal.canChase}`);
      console.log(`   看多理由: ${r.signal.bullishReasons.slice(0, 5).join(', ')}`);
      if (r.signal.risks.length > 0) {
        console.log(`   关键风险: ${r.signal.risks.join('; ')}`);
      }
      console.log('');
    });
  } else {
    console.log('当前无明确买入信号，建议观望。\n');
  }

  // 风险提示
  const highRiskStocks = results.filter(r => r.signal.fakeBreakoutRisk || r.signal.risks.length >= 3);
  if (highRiskStocks.length > 0) {
    console.log('【风险警示】\n');
    highRiskStocks.forEach(r => {
      console.log(`⚠️ ${r.symbol} ${r.name}: ${r.signal.risks.join('; ')}`);
    });
    console.log('');
  }

  // 保存JSON
  const outputFile = `technical_analysis_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  const jsonOutput = {
    analysis_time: new Date().toISOString(),
    summary: {
      total_stocks: results.length,
      bullish_count: results.filter(r => r.signal.signal.includes('多')).length,
      bearish_count: results.filter(r => r.signal.signal.includes('空')).length,
      neutral_count: results.filter(r => r.signal.signal === '观望').length,
    },
    ranking: results.map((r, idx) => ({
      rank: idx + 1,
      symbol: r.symbol,
      name: r.name,
      signal: r.signal.signal,
      trade_type: r.signal.tradeType,
      can_chase: r.signal.canChase,
      up_probability: r.up_probability,
      net_score: r.signal.netScore,
      risks: r.signal.risks,
      fake_breakout_risk: r.signal.fakeBreakoutRisk,
      near_resistance: r.timeframe_analysis['D']?.levels.nearResistance || false,
      momentum_weakening: r.timeframe_analysis['D']?.momentum.macdDivergence === '减弱',
      bullish_reasons: r.signal.bullishReasons,
      bearish_reasons: r.signal.bearishReasons,
    })),
    detailed_results: results,
  };

  writeFileSync(outputFile, JSON.stringify(jsonOutput, null, 2), 'utf-8');
  console.log(`✅ 详细结果已保存到: ${outputFile}`);
}

main().catch(console.error);
