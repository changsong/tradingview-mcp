#!/usr/bin/env node
/**
 * 多周期技术分析脚本
 * 分析趋势、动能、波动、成交量等
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      cwd: process.cwd(),
    });
    return JSON.parse(result);
  } catch (error) {
    console.error(`Error: ${cmd}`, error.message);
    return null;
  }
}

/**
 * 分析技术指标
 */
function analyzeTechnical(symbol, timeframe, ohlcv, values) {
  const result = {
    symbol,
    timeframe,
    timestamp: new Date().toISOString(),
    bars: ohlcv?.bars?.length || 0,
    analysis: {},
  };

  if (!ohlcv || !ohlcv.bars || ohlcv.bars.length === 0) {
    return result;
  }

  const bars = ohlcv.bars;
  const close = bars[bars.length - 1].close;
  const open = bars[bars.length - 1].open;
  const high = bars[bars.length - 1].high;
  const low = bars[bars.length - 1].low;
  const volume = bars[bars.length - 1].volume;

  // 1. 趋势分析
  const ma5 = bars.slice(-5).reduce((sum, b) => sum + b.close, 0) / 5;
  const ma10 = bars.slice(-10).reduce((sum, b) => sum + b.close, 0) / Math.min(10, bars.length);
  const ma20 = bars.slice(-20).reduce((sum, b) => sum + b.close, 0) / Math.min(20, bars.length);

  let trend = 'NEUTRAL';
  if (close > ma5 && ma5 > ma10 && ma10 > ma20) {
    trend = 'STRONG_UP';
  } else if (close > ma5 && ma5 > ma10) {
    trend = 'UP';
  } else if (close < ma5 && ma5 < ma10 && ma10 < ma20) {
    trend = 'STRONG_DOWN';
  } else if (close < ma5 && ma5 < ma10) {
    trend = 'DOWN';
  }

  result.analysis.trend = {
    direction: trend,
    close,
    ma5: ma5.toFixed(2),
    ma10: ma10.toFixed(2),
    ma20: ma20.toFixed(2),
    distance_ma5: ((close - ma5) / ma5 * 100).toFixed(2) + '%',
  };

  // 2. 动能分析 (RSI, MACD)
  if (values && values.values) {
    const rsi = values.values.find(v => v.name.includes('RSI'));
    const macd = values.values.find(v => v.name.includes('MACD'));
    
    let momentum = 'NEUTRAL';
    let details = {};

    if (rsi) {
      const rsiVal = parseFloat(rsi.value);
      details.rsi = rsiVal.toFixed(2);
      if (rsiVal > 70) {
        momentum = 'OVERBOUGHT';
      } else if (rsiVal < 30) {
        momentum = 'OVERSOLD';
      } else if (rsiVal > 50) {
        momentum = 'BULLISH';
      } else {
        momentum = 'BEARISH';
      }
    }

    if (macd) {
      const macdVal = parseFloat(macd.value);
      details.macd = macdVal.toFixed(4);
      if (macdVal > 0 && momentum === 'NEUTRAL') momentum = 'BULLISH';
      if (macdVal < 0 && momentum === 'NEUTRAL') momentum = 'BEARISH';
    }

    result.analysis.momentum = {
      state: momentum,
      ...details,
    };
  }

  // 3. 波动分析
  const recent5 = bars.slice(-5);
  const avgRange = recent5.reduce((sum, b) => sum + (b.high - b.low), 0) / 5;
  const volatility = (avgRange / close * 100).toFixed(2);
  const atr = (avgRange * 1.5).toFixed(2); // 简化 ATR

  result.analysis.volatility = {
    atr: atr,
    volatility_percent: volatility + '%',
    status: volatility > 2.5 ? 'HIGH' : volatility > 1.5 ? 'MEDIUM' : 'LOW',
  };

  // 4. 成交量分析
  const avgVolume = bars.slice(-10).reduce((sum, b) => sum + b.volume, 0) / Math.min(10, bars.length);
  const volumeRatio = (volume / avgVolume).toFixed(2);

  result.analysis.volume = {
    current: volume,
    average_10d: Math.round(avgVolume),
    ratio: parseFloat(volumeRatio),
    status: volumeRatio > 1.5 ? 'HIGH' : volumeRatio > 1.0 ? 'NORMAL' : 'LOW',
  };

  // 5. 形态分析
  const bodySize = Math.abs(close - open);
  const upperWick = high - Math.max(close, open);
  const lowerWick = Math.min(close, open) - low;
  
  let pattern = 'NEUTRAL';
  if (close > open && bodySize > avgRange * 0.6 && lowerWick < avgRange * 0.2) {
    pattern = 'STRONG_BULL';
  } else if (close < open && bodySize > avgRange * 0.6 && upperWick < avgRange * 0.2) {
    pattern = 'STRONG_BEAR';
  } else if (close > open) {
    pattern = 'MILD_BULL';
  } else if (close < open) {
    pattern = 'MILD_BEAR';
  }

  result.analysis.pattern = {
    type: pattern,
    body_size: bodySize.toFixed(2),
    upper_wick: upperWick.toFixed(2),
    lower_wick: lowerWick.toFixed(2),
  };

  // 6. 支撑阻力
  const highest = Math.max(...recent5.map(b => b.high));
  const lowest = Math.min(...recent5.map(b => b.low));

  result.analysis.structure = {
    recent_high: highest.toFixed(2),
    recent_low: lowest.toFixed(2),
    current_price: close.toFixed(2),
    distance_high: ((highest - close) / close * 100).toFixed(2) + '%',
    distance_low: ((close - lowest) / close * 100).toFixed(2) + '%',
  };

  return result;
}

/**
 * 生成交易信号
 */
function generateSignal(analyses) {
  if (!analyses || analyses.length === 0) {
    return { conclusion: 'WATCH', type: 'UNKNOWN', reasons: [] };
  }

  // 不同时间周期权重
  const weights = { '1h': 0.2, '4h': 0.3, '1d': 0.4, '1w': 0.1 };
  
  let trendScore = 0;
  let momentumScore = 0;
  let volumeScore = 0;
  let reasons = [];

  analyses.forEach(a => {
    const weight = weights[a.timeframe] || 0.25;
    const { trend, momentum, volume } = a.analysis;

    // 趋势得分
    if (trend?.direction === 'STRONG_UP') trendScore += 2 * weight;
    else if (trend?.direction === 'UP') trendScore += 1 * weight;
    else if (trend?.direction === 'STRONG_DOWN') trendScore -= 2 * weight;
    else if (trend?.direction === 'DOWN') trendScore -= 1 * weight;

    // 动能得分
    if (momentum?.state === 'BULLISH') momentumScore += 1 * weight;
    else if (momentum?.state === 'BEARISH') momentumScore -= 1 * weight;
    else if (momentum?.state === 'OVERBOUGHT') momentumScore -= 0.5 * weight;
    else if (momentum?.state === 'OVERSOLD') momentumScore += 0.5 * weight;

    // 成交量得分
    if (volume?.status === 'HIGH') volumeScore += 1 * weight;
  });

  const totalScore = (trendScore * 0.5 + momentumScore * 0.3 + volumeScore * 0.2);

  let conclusion = 'WATCH';
  let signalType = 'UNKNOWN';
  let riskLevel = 'MEDIUM';
  let shouldChase = false;

  if (totalScore > 1.2) {
    conclusion = 'LONG';
    signalType = 'BREAKOUT';
    riskLevel = momentumScore > 1.5 ? 'HIGH' : 'MEDIUM';
    shouldChase = momentumScore < 1.5; // 动能未过度才能追涨
  } else if (totalScore > 0.5) {
    conclusion = 'LONG';
    signalType = 'PULLBACK_BUY';
    riskLevel = 'LOW';
    shouldChase = false;
  } else if (totalScore < -1.2) {
    conclusion = 'SHORT';
    signalType = 'BREAKDOWN';
    riskLevel = 'HIGH';
    shouldChase = false;
  } else if (totalScore < -0.5) {
    conclusion = 'SHORT';
    signalType = 'BOUNCE_SELL';
    riskLevel = 'MEDIUM';
    shouldChase = false;
  }

  return {
    conclusion,
    signalType,
    riskLevel,
    shouldChase: shouldChase ? 'YES' : 'NO',
    score: totalScore.toFixed(2),
    trendScore: trendScore.toFixed(2),
    momentumScore: momentumScore.toFixed(2),
    volumeScore: volumeScore.toFixed(2),
    reasons,
  };
}

/**
 * 主分析函数
 */
async function analyzeStocks() {
  let selectedStocks = [];
  try {
    const content = readFileSync('./watchlist/cn_selected.txt', 'utf8').trim();
    selectedStocks = content.split(',').map(s => s.trim());
  } catch (err) {
    console.error('无法读取股票列表:', err.message);
    return;
  }

  const timeframes = ['1', '4', 'D', 'W']; // 1h, 4h, 1d, 1w
  const timeframeNames = ['1h', '4h', '1d'
