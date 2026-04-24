#!/usr/bin/env node

/**
 * 多时间周期深度技术分析
 * 分析维度: 趋势、动能、波动、成交量、结构位、资金行为
 * 时间周期: 1h, 4h, 1d, 1w
 */

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return JSON.parse(result);
  } catch (error) {
    console.error(`❌ Command failed: ${cmd}`);
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ================== 技术指标计算 ==================

/**
 * 计算 SMA (Simple Moving Average)
 */
function calculateSMA(prices, period) {
  if (prices.length < period) return null;
  const sum = prices.slice(-period).reduce((a, b) => a + b, 0);
  return sum / period;
}

/**
 * 计算 EMA (Exponential Moving Average)
 */
function calculateEMA(prices, period) {
  if (prices.length < period) return null;
  const k = 2 / (period + 1);
  let ema = prices.slice(0, period).reduce((a, b) => a + b, 0) / period;
  for (let i = period; i < prices.length; i++) {
    ema = prices[i] * k + ema * (1 - k);
  }
  return ema;
}

/**
 * 计算 RSI (Relative Strength Index)
 */
function calculateRSI(prices, period = 14) {
  if (prices.length < period + 1) return null;

  let gains = 0, losses = 0;
  for (let i = 1; i <= period; i++) {
    const diff = prices[prices.length - period - 1 + i] - prices[prices.length - period - i];
    if (diff > 0) gains += diff;
    else losses += Math.abs(diff);
  }

  const avgGain = gains / period;
  const avgLoss = losses / period;
  const rs = avgGain / (avgLoss || 1);
  const rsi = 100 - (100 / (1 + rs));

  return parseFloat(rsi.toFixed(2));
}

/**
 * 计算 MACD
 */
function calculateMACD(prices) {
  if (prices.length < 26) return null;
  const ema12 = calculateEMA(prices, 12);
  const ema26 = calculateEMA(prices, 26);
  if (!ema12 || !ema26) return null;

  const macd = ema12 - ema26;
  return parseFloat(macd.toFixed(4));
}

/**
 * 计算 Bollinger Bands
 */
function calculateBollingerBands(prices, period = 20) {
  if (prices.length < period) return null;

  const sma = calculateSMA(prices, period);
  const recentPrices = prices.slice(-period);
  const variance = recentPrices.reduce((sum, p) => sum + Math.pow(p - sma, 2), 0) / period;
  const stdDev = Math.sqrt(variance);

  return {
    upper: parseFloat((sma + stdDev * 2).toFixed(2)),
    middle: parseFloat(sma.toFixed(2)),
    lower: parseFloat((sma - stdDev * 2).toFixed(2)),
    width: parseFloat((stdDev * 4).toFixed(2))
  };
}

/**
 * 分析趋势结构 (Trend Structure)
 */
function analyzeTrendStructure(bars) {
  if (!bars || bars.length < 3) return null;

  const closes = bars.map(b => b.close);
  const highs = bars.map(b => b.high);
  const lows = bars.map(b => b.low);

  // 最近3根K线的趋势
  const recentClose = closes.slice(-1)[0];
  const prev3Closes = closes.slice(-3);
  const isUptrend = prev3Closes.every((p, i) => i === 0 || p > prev3Closes[i - 1]);
  const isDowntrend = prev3Closes.every((p, i) => i === 0 || p < prev3Closes[i - 1]);

  // 高低点序列
  const recentHighs = highs.slice(-5);
  const recentLows = lows.slice(-5);
  const higherHighs = recentHighs.slice(-2)[1] > recentHighs.slice(-3)[0];
  const higherLows = recentLows.slice(-2)[1] > recentLows.slice(-3)[0];
  const lowerHighs = recentHighs.slice(-2)[1] < recentHighs.slice(-3)[0];
  const lowerLows = recentLows.slice(-2)[1] < recentLows.slice(-3)[0];

  // 确定趋势
  let trend = 'NEUTRAL';
  if (higherHighs && higherLows) trend = 'UPTREND';
  else if (lowerHighs && lowerLows) trend = 'DOWNTREND';
  else if (isUptrend) trend = 'UPTREND';
  else if (isDowntrend) trend = 'DOWNTREND';

  // 支撑阻力
  const support = Math.min(...recentLows.slice(-10));
  const resistance = Math.max(...recentHighs.slice(-10));

  return {
    trend,
    direction: trend === 'UPTREND' ? 'UP' : trend === 'DOWNTREND' ? 'DOWN' : 'FLAT',
    support,
    resistance,
    distance_to_support: recentClose - support,
    distance_to_resistance: resistance - recentClose,
    support_near: (recentClose - support) / recentClose < 0.02, // 2%以内
    resistance_near: (resistance - recentClose) / recentClose < 0.02
  };
}

/**
 * 分析动能系统 (Momentum System)
 */
function analyzeMomentum(bars) {
  if (!bars || bars.length < 20) return null;

  const closes = bars.map(b => b.close);
  const rsi = calculateRSI(closes);
  const macd = calculateMACD(closes);

  // 价格动能 (Rate of Change)
  const current = closes[closes.length - 1];
  const prev10 = closes[closes.length - 11];
  const roc = ((current - prev10) / prev10 * 100);

  // 动能判断
  let momentum = 'NEUTRAL';
  let strength = 50;

  if (rsi > 70) {
    momentum = 'OVERBOUGHT';
    strength = 80 + (rsi - 70) * 2;
  } else if (rsi > 60) {
    momentum = 'STRONG_UP';
    strength = 70;
  } else if (rsi > 50) {
    momentum = 'MODERATE_UP';
    strength = 60;
  } else if (rsi < 30) {
    momentum = 'OVERSOLD';
    strength = 20 - (30 - rsi) * 2;
  } else if (rsi < 40) {
    momentum = 'STRONG_DOWN';
    strength = 30;
  } else if (rsi < 50) {
    momentum = 'MODERATE_DOWN';
    strength = 40;
  }

  return {
    rsi,
    rsi_status: rsi > 70 ? 'OVERBOUGHT' : rsi < 30 ? 'OVERSOLD' : 'NEUTRAL',
    macd,
    macd_status: macd > 0 ? 'POSITIVE' : macd < 0 ? 'NEGATIVE' : 'NEUTRAL',
    roc: parseFloat(roc.toFixed(2)),
    momentum_trend: momentum,
    momentum_strength: strength,
    losing_momentum: (rsi > 60 && closes.slice(-3).reduce((a, b) => a + (b > a ? 1 : 0), 0) <= 1)
  };
}

/**
 * 分析波动压缩与释放 (Volatility & Compression)
 */
function analyzeVolatility(bars) {
  if (!bars || bars.length < 20) return null;

  const closes = bars.map(b => b.close);
  const highs = bars.map(b => b.high);
  const lows = bars.map(b => b.low);

  // 计算波动率 (ATR)
  const ranges = bars.map((b, i) => {
    if (i === 0) return b.high - b.low;
    return Math.max(b.high - b.low, b.high - closes[i-1], closes[i-1] - b.low);
  });
  const atr = ranges.slice(-14).reduce((a, b) => a + b, 0) / 14;
  const atr_percent = (atr / closes[closes.length - 1]) * 100;

  // 波动压缩 (Bollinger Bands Squeeze)
  const bb = calculateBollingerBands(closes);
  const avg_bb_width = 0.03; // 假设平均3%
  const is_compressed = bb.width < avg_bb_width * closes[closes.length - 1];

  // 真实波幅与平均波幅比较
  const recent_range = Math.max(...highs.slice(-5)) - Math.min(...lows.slice(-5));
  const historical_range = Math.max(...highs.slice(-20)) - Math.min(...lows.slice(-20));

  return {
    atr: parseFloat(atr.toFixed(2)),
    atr_percent: parseFloat(atr_percent.toFixed(2)),
    bollinger_bands: bb,
    is_compressed: is_compressed,
    compression_score: is_compressed ? 8 : 5,
    recent_range,
    volatility_expansion_signal: bb.width > avg_bb_width * closes[closes.length - 1]
  };
}

/**
 * 分析成交量行为 (Volume Analysis)
 */
function analyzeVolume(bars) {
  if (!bars || bars.length < 10) return null;

  const volumes = bars.map(b => b.volume || 0);
  const avgVolume = volumes.slice(-20).reduce((a, b) => a + b, 0) / 20;
  const currentVolume = volumes[volumes.length - 1];
  const volumeRatio = currentVolume / avgVolume;

  // 上升/下降量分析
  const closes = bars.map(b => b.close);
  let upVolume = 0, downVolume = 0;
  for (let i = 1; i < bars.length; i++) {
    if (closes[i] > closes[i - 1]) {
      upVolume += volumes[i];
    } else {
      downVolume += volumes[i];
    }
  }

  const buyPressure = upVolume / (upVolume + downVolume || 1);

  return {
    current_volume: currentVolume,
    avg_volume_20: parseFloat(avgVolume.toFixed(0)),
    volume_ratio: parseFloat(volumeRatio.toFixed(2)),
    is_high_volume: volumeRatio > 1.5,
    is_low_volume: volumeRatio < 0.7,
    buy_pressure: parseFloat((buyPressure * 100).toFixed(1)),
    volume_trend: upVolume > downVolume ? 'BULLISH' : 'BEARISH'
  };
}

/**
 * 分析关键结构位 (Key Structure Levels)
 */
function analyzeStructure(bars) {
  if (!bars || bars.length < 30) return null;

  const highs = bars.map(b => b.high);
  const lows = bars.map(b => b.low);
  const closes = bars.map(b => b.close);

  const current = closes[closes.length - 1];

  // 最近的高低点
  const recent30Highs = highs.slice(-30);
  const recent30Lows = lows.slice(-30);

  const highestHigh = Math.max(...recent30Highs);
  const lowestLow = Math.min(...recent30Lows);

  // 识别关键水平位
  const keyLevels = [];

  // 最高点和最低点
  keyLevels.push({
    level: highestHigh,
    type: 'RESISTANCE',
    distance: highestHigh - current,
    bars_ago: highs.length - 1 - highs.lastIndexOf(highestHigh)
  });

  keyLevels.push({
    level: lowestLow,
    type: 'SUPPORT',
    distance: current - lowestLow,
    bars_ago: lows.length - 1 - lows.lastIndexOf(lowestLow)
  });

  // 中点
  const midpoint = (highestHigh + lowestLow) / 2;
  keyLevels.push({
    level: midpoint,
    type: 'PIVOT',
    distance: Math.abs(current - midpoint)
  });

  // 距离最近的整数位
  const roundedLevel = Math.round(current);
  keyLevels.push({
    level: roundedLevel,
    type: 'ROUND',
    distance: Math.abs(current - roundedLevel)
  });

  // 排序
  keyLevels.sort((a, b) => a.distance - b.distance);

  // 突破判断
  const isAboveResistance = current > highestHigh * 1.001;
  const isBelowSupport = current < lowestLow * 0.999;

  return {
    current_price: parseFloat(current.toFixed(2)),
    support: parseFloat(lowestLow.toFixed(2)),
    resistance: parseFloat(highestHigh.toFixed(2)),
    range: parseFloat((highestHigh - lowestLow).toFixed(2)),
    range_percent: parseFloat(((highestHigh - lowestLow) / lowestLow * 100).toFixed(2)),
    key_levels: keyLevels.slice(0, 5),
    position_in_range: parseFloat(((current - lowestLow) / (highestHigh - lowestLow) * 100).toFixed(1)),
    is_above_resistance: isAboveResistance,
    is_below_support: isBelowSupport
  };
}

/**
 * 资金行为分析 (Money Flow Analysis - Advanced)
 */
function analyzeMoneyFlow(bars) {
  if (!bars || bars.length < 20) return null;

  const closes = bars.map(b => b.close);
  const highs = bars.map(b => b.high);
  const lows = bars.map(b => b.low);
  const volumes = bars.map(b => b.volume || 0);

  // MFI (Money Flow Index) 类似RSI但用成交量加权
  let positiveFlow = 0, negativeFlow = 0;

  for (let i = 1; i < Math.min(bars.length, 14); i++) {
    const idx = bars.length - 14 + i;
    if (idx < 1) continue;

    const typicalPrice = (highs[idx] + lows[idx] + closes[idx]) / 3;
    const prevTypicalPrice = (highs[idx - 1] + lows[idx - 1] + closes[idx - 1]) / 3;
    const moneyFlow = typicalPrice * volumes[idx];

    if (typicalPrice > prevTypicalPrice) {
      positiveFlow += moneyFlow;
    } else {
      negativeFlow += moneyFlow;
    }
  }

  const mfi = 100 - (100 / (1 + (positiveFlow / (negativeFlow || 1))));

  // 资金积累/分派 (Accumulation/Distribution)
  let ad = 0;
  for (let i = 0; i < bars.length; i++) {
    const clv = ((closes[i] - lows[i]) - (highs[i] - closes[i])) / (highs[i] - lows[i] || 1);
    ad += clv * volumes[i];
  }

  const adLine = ad / volumes.reduce((a, b) => a + b, 0) * 100;

  // 资金流入/流出指标
  const recentClose = closes[closes.length - 1];
  const recent20Close = closes[Math.max(0, closes.length - 20)];
  const institutionalBias = recentClose > recent20Close ? 'ACCUMULATION' : 'DISTRIBUTION';

  return {
    mfi: parseFloat(mfi.toFixed(2)),
    mfi_status: mfi > 70 ? 'STRONG_BUYING' : mfi < 30 ? 'STRONG_SELLING' : 'NEUTRAL',
    accumulation_distribution: parseFloat(adLine.toFixed(2)),
    money_flow: institutionalBias,
    positive_flow: parseFloat((positiveFlow / 1000000).toFixed(2)),
    negative_flow: parseFloat((negativeFlow / 1000000).toFixed(2)),
    flow_ratio: parseFloat((positiveFlow / (negativeFlow || 1)).toFixed(2))
  };
}

// ================== 多时间周期分析 ==================

async function analyzeTimeframe(symbol, timeframe) {
  console.log(`  ⏱️  ${timeframe}级别分析中...`);

  // 切换时间周期
  const tfResult = runCommand(`timeframe ${timeframe}`);
  if (!tfResult || !tfResult.success) {
    console.log(`    ⚠️  ${timeframe} 时间周期切换失败`);
    return null;
  }

  // 获取OHLCV数据
  await sleep(1500);
  const ohlcv = runCommand('ohlcv -n 100');

  if (!ohlcv || !ohlcv.success || !ohlcv.bars) {
    console.log(`    ⚠️  ${timeframe} 数据获取失败`);
    return null;
  }

  const bars = ohlcv.bars.slice(-50); // 使用最近50根

  // 执行所有分析
  const analysis = {
    timeframe,
    bar_count: bars.length,
    trend: analyzeTrendStructure(bars),
    momentum: analyzeMomentum(bars),
    volatility: analyzeVolatility(bars),
    volume: analyzeVolume(bars),
    structure: analyzeStructure(bars),
    money_flow: analyzeMoneyFlow(bars)
  };

  return analysis;
}

// ================== 综合交易信号 ==================

function generateTradingSignal(analyses) {
  const timeframes = { '1h': analyses['1h'], '4h': analyses['4h'], '1d': analyses['1d'], '1w': analyses['1w'] };

  // 统计每个时间周期的看涨/看空信号
  let bullishCount = 0, bearishCount = 0, neutralCount = 0;
  let overallMomentum = 0, overallTrend = 'NEUTRAL';

  // 日线为主要信号，4小时和1小时为确认
  const dailyAnalysis = timeframes['1d'];
  const fourHourAnalysis = timeframes['4h'];
  const hourAnalysis = timeframes['1h'];

  if (!dailyAnalysis || !fourHourAnalysis || !hourAnalysis) {
    return { error: '数据不足，无法生成信号' };
  }

  // 趋势判断 (以日线为主)
  if (dailyAnalysis.trend.trend === 'UPTREND') {
    overallTrend = 'UPTREND';
    bullishCount += 2;
  } else if (dailyAnalysis.trend.trend === 'DOWNTREND') {
    overallTrend = 'DOWNTREND';
    bearishCount += 2;
  }

  // 动能判断
  const dailyMomentumScore = dailyAnalysis.momentum.momentum_strength;
  const fourHourMomentumScore = fourHourAnalysis.momentum.momentum_strength;
  const hourMomentumScore = hourAnalysis.momentum.momentum_strength;

  overallMomentum = (dailyMomentumScore * 0.5 + fourHourMomentumScore * 0.3 + hourMomentumScore * 0.2);

  if (dailyAnalysis.momentum.momentum_trend.includes('UP')) bullishCount++;
  else if (dailyAnalysis.momentum.momentum_trend.includes('DOWN')) bearishCount++;

  if (fourHourAnalysis.momentum.momentum_trend.includes('UP')) bullishCount++;
  else if (fourHourAnalysis.momentum.momentum_trend.includes('DOWN')) bearishCount++;

  // 波动压缩释放
  if (dailyAnalysis.volatility.is_compressed && fourHourAnalysis.volatility.volatility_expansion_signal) {
    bullishCount += 1.5;
  }

  // 成交量分析
  if (dailyAnalysis.volume.volume_trend === 'BULLISH' && dailyAnalysis.volume.buy_pressure > 55) {
    bullishCount++;
  } else if (dailyAnalysis.volume.volume_trend === 'BEARISH' && dailyAnalysis.volume.buy_pressure < 45) {
    bearishCount++;
  }

  // 结构位分析
  const dailyStructure = dailyAnalysis.structure;
  const positionInRange = dailyStructure.position_in_range;

  if (positionInRange > 75) {
    bullishCount += 0.5;
  } else if (positionInRange < 25) {
    bearishCount += 0.5;
  }

  // 资金流入分析
  if (dailyAnalysis.money_flow.mfi_status === 'STRONG_BUYING') {
    bullishCount++;
  } else if (dailyAnalysis.money_flow.mfi_status === 'STRONG_SELLING') {
    bearishCount++;
  }

  // 4小时级别的短期动能确认
  if (fourHourAnalysis.momentum.losing_momentum && bullishCount > 2) {
    bullishCount -= 0.5; // 动能衰减警告
  }

  // 综合判断
  let conclusion = 'NEUTRAL';
  let confidence = 0;

  if (bullishCount > bearishCount + 1.5) {
    conclusion = 'BULLISH';
    confidence = Math.min(95, (bullishCount - bearishCount) * 15);
  } else if (bearishCount > bullishCount + 1.5) {
    conclusion = 'BEARISH';
    confidence = Math.min(95, (bearishCount - bullishCount) * 15);
  } else {
    confidence = 50;
  }

  // 确定交易类型
  let tradeType = 'NEUTRAL';
  let canChase = false;
  let risk = 'MEDIUM';

  if (conclusion === 'BULLISH') {
    // 判断是破位、低吸还是反转
    if (dailyAnalysis.trend.trend === 'UPTREND' && overallMomentum > 60) {
      tradeType = 'BREAKTHROUGH'; // 突破型
      canChase = overallMomentum > 70 && hourMomentumScore > 60;
      risk = 'MEDIUM';
    } else if (hourMomentumScore < 40 && dailyAnalysis.momentum.momentum_strength > 55) {
      tradeType = 'PULLBACK_BUY'; // 回调低吸
      canChase = false;
      risk = 'LOW';
    } else if (dailyAnalysis.trend.trend === 'DOWNTREND' && overallMomentum > 65) {
      tradeType = 'REVERSAL'; // 反转
      canChase = false;
      risk = 'HIGH';
    }
  } else if (conclusion === 'BEARISH') {
    if (dailyAnalysis.trend.trend === 'DOWNTREND' && overallMomentum < 40) {
      tradeType = 'BREAKDOWN';
      risk = 'MEDIUM';
    } else if (dailyAnalysis.trend.trend === 'UPTREND' && overallMomentum < 35) {
      tradeType = 'REVERSAL';
      risk = 'HIGH';
    }
  }

  // 关键风险评估
  const risks = [];

  if (dailyStructure.resistance_near) {
    risks.push({
      type: 'RESISTANCE_NEAR',
      severity: 'HIGH',
      description: `价格接近压力位 ${dailyStructure.resistance.toFixed(2)}`
    });
  }

  if (dailyAnalysis.momentum.losing_momentum) {
    risks.push({
      type: 'MOMENTUM_DECAY',
      severity: 'MEDIUM',
      description: '动能衰减信号'
    });
  }

  if (hourMomentumScore > 70 && fourHourMomentumScore > 70 && dailyMomentumScore > 70) {
    risks.push({
      type: 'OVERBOUGHT',
      severity: 'HIGH',
      description: '多时间周期超买，警惕回调'
    });
  }

  if (fourHourAnalysis.volatility.is_compressed && !dailyAnalysis.volatility.volatility_expansion_signal) {
    risks.push({
      type: 'FAKE_BREAKOUT',
      severity: 'MEDIUM',
      description: '波动压缩，可能出现假突破'
    });
  }

  // 检查诱多情况
  if (dailyStructure.is_above_resistance && fourHourAnalysis.volume.volume_ratio < 1.2) {
    risks.push({
      type: 'TRAP_SIGNAL',
      severity: 'HIGH',
      description: '突破阻力但成交量不足，可能是诱多'
    });
  }

  return {
    conclusion,
    confidence: Math.round(confidence),
    momentum_score: parseFloat(overallMomentum.toFixed(1)),
    trade_type: tradeType,
    can_chase: canChase,
    risk_level: risk,
    risks,
    signal_strength: {
      bullish_count: parseFloat(bullishCount.toFixed(1)),
      bearish_count: parseFloat(bearishCount.toFixed(1))
    }
  };
}

// ================== 主分析函数 ==================

async function analyzeStocks() {
  console.log('🔬 多时间周期深度技术分析开始\n');

  const symbols = ['BGC', 'AEIS'];
  const results = {
    analysis_time: new Date().toISOString(),
    stocks: []
  };

  for (const symbol of symbols) {
    console.log(`\n${'='.repeat(90)}`);
    console.log(`📊 ${symbol} - 多时间周期技术分析`);
    console.log('='.repeat(90));

    try {
      // 切换到该股票
      const switchResult = runCommand(`symbol NASDAQ:${symbol}`);
      if (!switchResult || !switchResult.success) {
        console.log(`❌ 切换到 ${symbol} 失败`);
        continue;
      }

      await sleep(2000);

      // 分析每个时间周期
      const analyses = {};
      const timeframes = ['1h', '4h', '1d', '1w'];

      for (const tf of timeframes) {
        analyses[tf] = await analyzeTimeframe(symbol, tf);
        if (analyses[tf]) {
          console.log(`  ✅ ${tf} 分析完成`);
        }
        await sleep(1000);
      }

      // 生成综合交易信号
      console.log(`\n  🎯 生成综合交易信号...`);
      const tradingSignal = generateTradingSignal(analyses);

      // 输出结果
      console.log(`\n${'█'.repeat(90)}`);
      console.log(`📈 ${symbol} - 分析结论`);
      console.log('█'.repeat(90));

      console.log(`\n结论: ${tradingSignal.conclusion}`);
      console.log(`置信度: ${tradingSignal.confidence}%`);
      console.log(`交易类型: ${tradingSignal.trade_type}`);
      console.log(`是否适合追涨: ${tradingSignal.can_chase ? 'YES' : 'NO'}`);
      console.log(`动能指数: ${tradingSignal.momentum_score}/100`);
      console.log(`风险等级: ${tradingSignal.risk_level}`);

      if (tradingSignal.risks.length > 0) {
        console.log(`\n⚠️  关键风险:`);
        tradingSignal.risks.forEach(risk => {
          console.log(`  • [${risk.severity}] ${risk.type}`);
          console.log(`    └─ ${risk.description}`);
        });
      }

      // 显示关键技术指标汇总
      console.log(`\n📋 关键技术指标汇总:`);
      const daily = analyses['1d'];
      const fourHour = analyses['4h'];
      const hour = analyses['1h'];

      if (daily) {
        console.log(`\n  日线 (1D):`);
        console.log(`    趋势: ${daily.trend.trend}`);
        console.log(`    RSI: ${daily.momentum.rsi} (${daily.momentum.rsi_status})`);
        console.log(`    支撑: ${daily.structure.support.toFixed(2)} | 阻力: ${daily.structure.resistance.toFixed(2)}`);
        console.log(`    波动: ${daily.volatility.is_compressed ? '压缩' : '释放'} (BB宽度: ${daily.volatility.bollinger_bands.width.toFixed(2)})`);
        console.log(`    成交量: ${daily.volume.is_high_volume ? '放量' : daily.volume.is_low_volume ? '缩量' : '正常'} (比率: ${daily.volume.volume_ratio}x)`);
      }

      if (fourHour) {
        console.log(`\n  4小时 (4H):`);
        console.log(`    趋势: ${fourHour.trend.trend}`);
        console.log(`    RSI: ${fourHour.momentum.rsi} (${fourHour.momentum.rsi_status})`);
        console.log(`    动能: ${fourHour.momentum.momentum_trend}`);
      }

      if (hour) {
        console.log(`\n  1小时 (1H):`);
        console.log(`    趋势: ${hour.trend.trend}`);
        console.log(`    RSI: ${hour.momentum.rsi} (${hour.momentum.rsi_status})`);
      }

      results.stocks.push({
        symbol,
        analysis: analyses,
        trading_signal: tradingSignal
      });

    } catch (error) {
      console.error(`❌ 分析 ${symbol} 时出错: ${error.message}`);
    }

    if (symbols.indexOf(symbol) < symbols.length - 1) {
      console.log('\n⏳ 准备分析下一个股票...');
      await sleep(2000);
    }
  }

  // 保存结果
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputFile = `technical_analysis_${timestamp}.json`;
  writeFileSync(outputFile, JSON.stringify(results, null, 2));

  // 生成对比报告
  console.log(`\n\n${'='.repeat(90)}`);
  console.log('📊 股票对比分析');
  console.log('='.repeat(90));

  results.stocks.forEach((stock, idx) => {
    const signal = stock.trading_signal;
    console.log(`\n${idx + 1}. ${stock.symbol}`);
    console.log(`   结论: ${signal.conclusion} (${signal.confidence}%)`);
    console.log(`   类型: ${signal.trade_type}`);
    console.log(`   追涨: ${signal.can_chase ? '✅ YES' : '❌ NO'}`);
    console.log(`   风险: ${signal.risk_level} (${signal.risks.length}个风险)`);
  });

  console.log(`\n\n✅ 完整技术分析已保存到: ${outputFile}\n`);

  return results;
}

// 运行分析
analyzeStocks().catch(console.error);
