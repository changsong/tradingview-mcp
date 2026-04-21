#!/usr/bin/env node

/**
 * 美股多时间周期技术面深度分析
 *
 * 分析维度：
 * 1. 趋势结构 (Trend Structure)
 * 2. 动能系统 (Momentum: RSI, MACD, ROC)
 * 3. 波动压缩与释放 (Volatility: ATR, Bollinger Bands)
 * 4. 成交量行为 (Volume Profile)
 * 5. 量价关系 (Price-Volume Correlation)
 * 6. 关键结构位 (Support/Resistance)
 * 7. 资金行为 (Money Flow, Smart Money)
 *
 * 时间周期：1H, 4H, 1D, 1W
 */

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

// 18支股票清单
const STOCKS_TO_ANALYZE = [
  'NASDAQ:MPWR',
  'NYSE:ENVA',
  'NYSE:PIPR',
  'NASDAQ:RMBS',
  'NYSE:SON',
  'NYSE:PFS',
  'NYSE:TRNO',
  'NASDAQ:OSBC',
  'NYSE:GRMN',
  'NYSE:JOE',
  'NASDAQ:BHRB',
  'NYSE:SPNT',
  'NYSE:WTM',
  'NASDAQ:ORRF',
  'NASDAQ:BGC',
  'NASDAQ:USLM',
  'NYSE:AIR',
  'NYSE:CSW',
];

// ============== 技术分析核心类 ==============
class TechnicalAnalyzer {
  // RSI 计算
  static calculateRSI(closes, period = 14) {
    if (closes.length < period + 1) return null;

    let gains = 0, losses = 0;
    for (let i = closes.length - period; i < closes.length; i++) {
      const diff = closes[i] - closes[i - 1];
      if (diff > 0) gains += diff;
      else losses += Math.abs(diff);
    }

    const avgGain = gains / period;
    const avgLoss = losses / period;
    const rs = avgGain / (avgLoss || 1);
    return 100 - (100 / (1 + rs));
  }

  // SMA 计算
  static calculateSMA(values, period) {
    if (values.length < period) return null;
    return values.slice(-period).reduce((a, b) => a + b) / period;
  }

  // EMA 计算
  static calculateEMA(values, period) {
    if (values.length < period) return null;
    let ema = values.slice(0, period).reduce((a, b) => a + b) / period;
    const multiplier = 2 / (period + 1);

    for (let i = period; i < values.length; i++) {
      ema = (values[i] - ema) * multiplier + ema;
    }
    return ema;
  }

  // MACD 计算
  static calculateMACD(closes) {
    if (closes.length < 26) return null;

    const ema12 = this.calculateEMA(closes, 12);
    const ema26 = this.calculateEMA(closes, 26);
    if (!ema12 || !ema26) return null;

    const macdLine = ema12 - ema26;
    const signalLine = this.calculateEMA([macdLine], 9) || macdLine;
    const histogram = macdLine - signalLine;

    return { macdLine, signalLine, histogram };
  }

  // ATR 计算（波动率）
  static calculateATR(bars, period = 14) {
    if (bars.length < period) return null;

    const trs = [];
    for (let i = 1; i < bars.length; i++) {
      const tr = Math.max(
        bars[i].high - bars[i].low,
        Math.abs(bars[i].high - bars[i - 1].close),
        Math.abs(bars[i].low - bars[i - 1].close)
      );
      trs.push(tr);
    }

    const atr = trs.slice(-period).reduce((a, b) => a + b) / period;
    return atr;
  }

  // 布林带计算
  static calculateBollingerBands(closes, period = 20, stdDevs = 2) {
    if (closes.length < period) return null;

    const sma = this.calculateSMA(closes, period);
    const recent = closes.slice(-period);
    const variance = recent.reduce((sum, val) => sum + Math.pow(val - sma, 2), 0) / period;
    const stdDev = Math.sqrt(variance);

    return {
      middle: sma,
      upper: sma + (stdDev * stdDevs),
      lower: sma - (stdDev * stdDevs),
      width: (stdDev * stdDevs * 2) / sma,
    };
  }

  // 趋势分析
  static analyzeTrend(bars) {
    if (bars.length < 50) return null;

    const closes = bars.map(b => b.close);
    const sma20 = this.calculateSMA(closes, 20);
    const sma50 = this.calculateSMA(closes, 50);
    const ema12 = this.calculateEMA(closes, 12);
    const ema26 = this.calculateEMA(closes, 26);

    const current = closes[closes.length - 1];
    let trend = 'CONSOLIDATION';
    let strength = 0;
    let direction = 'NEUTRAL';

    if (current > sma20 && sma20 > sma50 && ema12 > ema26) {
      trend = 'STRONG_UPTREND';
      strength = 3;
      direction = 'UP';
    } else if (current > sma20 && sma20 > sma50) {
      trend = 'UPTREND';
      strength = 2;
      direction = 'UP';
    } else if (current < sma20 && sma20 < sma50 && ema12 < ema26) {
      trend = 'STRONG_DOWNTREND';
      strength = -3;
      direction = 'DOWN';
    } else if (current < sma20 && sma20 < sma50) {
      trend = 'DOWNTREND';
      strength = -2;
      direction = 'DOWN';
    } else {
      trend = 'CONSOLIDATION';
      strength = 0;
    }

    return {
      trend,
      strength,
      direction,
      sma20: sma20?.toFixed(2),
      sma50: sma50?.toFixed(2),
      ema12: ema12?.toFixed(2),
      ema26: ema26?.toFixed(2),
      current_price: current.toFixed(2),
    };
  }

  // 动能分析
  static analyzeMomentum(bars) {
    if (bars.length < 20) return null;

    const closes = bars.map(b => b.close);
    const rsi = this.calculateRSI(closes);
    const macd = this.calculateMACD(closes);

    // ROC (Rate of Change)
    const roc = ((closes[closes.length - 1] - closes[closes.length - 11]) / closes[closes.length - 11]) * 100;

    let momentum = 'NEUTRAL';
    if (rsi > 70) momentum = 'OVERBOUGHT';
    else if (rsi > 60) momentum = 'STRONG_BUY';
    else if (rsi > 50) momentum = 'BUY';
    else if (rsi < 30) momentum = 'OVERSOLD';
    else if (rsi < 40) momentum = 'STRONG_SELL';
    else if (rsi < 50) momentum = 'SELL';

    return {
      rsi: rsi?.toFixed(2),
      momentum,
      macd: macd ? {
        line: macd.macdLine.toFixed(4),
        signal: macd.signalLine.toFixed(4),
        histogram: macd.histogram.toFixed(4),
        direction: macd.histogram > 0 ? 'BULLISH' : 'BEARISH',
      } : null,
      roc: roc.toFixed(2),
      momentum_trend: roc > 0 ? 'POSITIVE' : 'NEGATIVE',
    };
  }

  // 波动性分析
  static analyzeVolatility(bars) {
    if (bars.length < 20) return null;

    const closes = bars.map(b => b.close);
    const atr = this.calculateATR(bars);
    const bb = this.calculateBollingerBands(closes);

    // 计算最近波动率
    const recent = closes.slice(-20);
    const returns = [];
    for (let i = 1; i < recent.length; i++) {
      returns.push((recent[i] - recent[i - 1]) / recent[i - 1]);
    }
    const variance = returns.reduce((sum, r) => sum + Math.pow(r, 2), 0) / returns.length;
    const volatility = Math.sqrt(variance) * 100;

    let volatilityLevel = 'NORMAL';
    if (volatility > 5) volatilityLevel = 'HIGH';
    else if (volatility < 1) volatilityLevel = 'LOW';

    return {
      atr: atr?.toFixed(2),
      volatility_percent: volatility.toFixed(2),
      volatility_level: volatilityLevel,
      bollinger_bands: bb ? {
        upper: bb.upper.toFixed(2),
        middle: bb.middle.toFixed(2),
        lower: bb.lower.toFixed(2),
        width: (bb.width * 100).toFixed(2) + '%',
        squeeze: bb.width < 0.15 ? 'YES_COMPRESSION' : 'NORMAL',
      } : null,
    };
  }

  // 成交量分析
  static analyzeVolume(bars) {
    if (bars.length < 20) return null;

    const volumes = bars.map(b => b.volume);
    const lastVol = volumes[volumes.length - 1];
    const avg5 = volumes.slice(-5).reduce((a, b) => a + b) / 5;
    const avg20 = volumes.slice(-20).reduce((a, b) => a + b) / 20;

    let volumeStrength = 'WEAK';
    if (lastVol > avg5 * 1.5) volumeStrength = 'VERY_STRONG';
    else if (lastVol > avg5 * 1.3) volumeStrength = 'STRONG';
    else if (lastVol > avg5 * 1.1) volumeStrength = 'MODERATE';

    return {
      last_volume: lastVol,
      avg_5days: Math.round(avg5),
      avg_20days: Math.round(avg20),
      volume_ratio: (lastVol / avg20).toFixed(2) + 'x',
      volume_strength: volumeStrength,
      volume_trend: lastVol > avg5 ? 'EXPANDING' : 'CONTRACTING',
    };
  }

  // 结构位分析
  static analyzeStructure(bars) {
    if (bars.length < 20) return null;

    const closes = bars.map(b => b.close);
    const highs = bars.map(b => b.high);
    const lows = bars.map(b => b.low);

    const h20 = Math.max(...closes.slice(-20));
    const l20 = Math.min(...closes.slice(-20));
    const current = closes[closes.length - 1];

    const position = ((current - l20) / (h20 - l20) * 100).toFixed(0);

    return {
      highest_20d: h20.toFixed(2),
      lowest_20d: l20.toFixed(2),
      current_price: current.toFixed(2),
      position_in_range: position + '%',
      location: parseInt(position) < 33 ? 'BOTTOM' : (parseInt(position) > 67 ? 'TOP' : 'MIDDLE'),
      distance_to_high: ((h20 - current) / h20 * 100).toFixed(2) + '%',
      distance_to_low: ((current - l20) / l20 * 100).toFixed(2) + '%',
    };
  }

  // 资金行为分析（基于成交量和价格）
  static analyzeMoneyFlow(bars) {
    if (bars.length < 10) return null;

    // OBV (On-Balance Volume)
    let obv = 0;
    const obvValues = [];
    for (const bar of bars) {
      if (bar.close > (bars[bars.indexOf(bar) - 1]?.close || bar.close)) {
        obv += bar.volume;
      } else if (bar.close < (bars[bars.indexOf(bar) - 1]?.close || bar.close)) {
        obv -= bar.volume;
      }
      obvValues.push(obv);
    }

    // 最近10天OBV趋势
    const obvTrend = obvValues[obvValues.length - 1] > obvValues[obvValues.length - 10];

    // Money Flow Index (简化版)
    const closes = bars.map(b => b.close);
    const volumes = bars.map(b => b.volume);
    const lastClose = closes[closes.length - 1];
    const prevClose = closes[closes.length - 2];

    const smartMoneyBuy = lastClose > prevClose && volumes[volumes.length - 1] > volumes.slice(-20).reduce((a, b) => a + b) / 20;
    const smartMoneySell = lastClose < prevClose && volumes[volumes.length - 1] > volumes.slice(-20).reduce((a, b) => a + b) / 20;

    return {
      obv_trend: obvTrend ? 'ACCUMULATION' : 'DISTRIBUTION',
      smart_money_action: smartMoneyBuy ? 'BUYING' : (smartMoneySell ? 'SELLING' : 'NEUTRAL'),
      volume_agreement: smartMoneyBuy || smartMoneySell ? 'STRONG' : 'WEAK',
    };
  }

  // 综合信号生成
  static generateSignal(symbol, analysisResults) {
    const d1 = analysisResults.d1 || {};
    const h4 = analysisResults.h4 || {};
    const h1 = analysisResults.h1 || {};

    let signal = 'HOLD';
    let type = 'NEUTRAL';
    let confidence = 50;
    let reasons = [];
    let risks = [];
    let suitableForChasing = 'NO';

    // 规则1：日线强上升 + 4H保持 + 1H确认
    if (d1.trend?.strength >= 2 && h4.trend?.strength >= 1 && h1.momentum?.momentum?.includes('BUY')) {
      signal = 'BUY';
      type = 'BREAKOUT';
      confidence = 75;
      reasons.push('日线强上升趋势，4H确认，1H动能积极');
      suitableForChasing = 'YES';
    }
    // 规则2：日线上升 + 4H回调（接近支撑）+ 高成交量
    else if (d1.trend?.strength >= 1 && h4.trend?.strength <= 0 && h4.volume?.volume_strength === 'STRONG') {
      signal = 'BUY';
      type = 'PULLBACK_BUY';
      confidence = 70;
      reasons.push('日线上升，4H回调低吸机会，成交量支撑');
      suitableForChasing = 'NO';
    }
    // 规则3：日线震荡 + 动能衰减
    else if (d1.trend?.trend === 'CONSOLIDATION' && Math.abs(d1.momentum?.rsi - 50) < 10) {
      signal = 'HOLD';
      type = 'CONSOLIDATION';
      confidence = 40;
      reasons.push('日线震荡盘整，等待方向确认');
    }
    // 规则4：日线下降
    else if (d1.trend?.strength <= -1) {
      signal = 'SELL';
      type = 'DOWNTREND';
      confidence = 60;
      reasons.push('日线下降趋势，回避');
      risks.push('下降趋势明显');
    }

    // 风险识别
    if (d1.momentum?.rsi > 70) {
      risks.push('RSI超买区域（>70），回调风险');
      confidence = Math.max(30, confidence - 15);
    }
    if (d1.structure?.location === 'TOP') {
      risks.push('接近 20 日高点，压力位明显');
      if (signal === 'BUY') suitableForChasing = 'NO';
    }
    if (h4.volume?.volume_trend === 'CONTRACTING') {
      risks.push('4H 成交量萎缩，缺乏动能');
    }
    if (h1.momentum?.momentum?.includes('OVERBOUGHT')) {
      risks.push('1H 动能衰减（超买），短期回调概率高');
    }

    return {
      symbol,
      signal,
      type,
      confidence: Math.round(confidence),
      suitable_for_chasing: suitableForChasing,
      reasons,
      risks,
    };
  }
}

// ============== CLI 命令执行 ==============
function runCliCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      maxBuffer: 10 * 1024 * 1024,
    });
    return JSON.parse(result);
  } catch (error) {
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ============== 主程序 ==============
async function main() {
  console.log('\n' + '='.repeat(120));
  console.log('📊 美股多时间周期技术面深度分析');
  console.log('分析周期：1H, 4H, 1D, 1W | 样本：18 支股票');
  console.log('='.repeat(120) + '\n');

  const allResults = [];

  for (let i = 0; i < STOCKS_TO_ANALYZE.length; i++) {
    const symbol = STOCKS_TO_ANALYZE[i];
    console.log(`[${i + 1}/${STOCKS_TO_ANALYZE.length}] 正在分析 ${symbol}...`);

    // 切换股票
    runCliCommand(`symbol ${symbol}`);
    await sleep(1500);

    // 获取四个时间周期的数据
    const timeframes = {};
    for (const tf of ['1', '4', 'D', 'W']) {
      // 切换时间周期
      runCliCommand(`timeframe ${tf}`);
      await sleep(800);

      // 获取 OHLCV 数据
      const ohlcv = runCliCommand('ohlcv -n 100 -s');
      const quote = runCliCommand(`quote ${symbol}`);

      if (ohlcv && ohlcv.success && ohlcv.bars) {
        const bars = ohlcv.bars;

        try {
          const trendAnalysis = TechnicalAnalyzer.analyzeTrend(bars);
          const momentumAnalysis = TechnicalAnalyzer.analyzeMomentum(bars);
          const volatilityAnalysis = TechnicalAnalyzer.analyzeVolatility(bars);
          const volumeAnalysis = TechnicalAnalyzer.analyzeVolume(bars);
          const structureAnalysis = TechnicalAnalyzer.analyzeStructure(bars);
          const moneyFlowAnalysis = TechnicalAnalyzer.analyzeMoneyFlow(bars);

          timeframes[tf] = {
            trend: trendAnalysis,
            momentum: momentumAnalysis,
            volatility: volatilityAnalysis,
            volume: volumeAnalysis,
            structure: structureAnalysis,
            money_flow: moneyFlowAnalysis,
          };
        } catch (err) {
          timeframes[tf] = { error: err.message };
        }
      } else {
        timeframes[tf] = { error: '无法获取数据' };
      }
    }

    // 生成交易信号
    const signal = TechnicalAnalyzer.generateSignal(symbol, {
      h1: timeframes['1'],
      h4: timeframes['4'],
      d1: timeframes['D'],
      w1: timeframes['W'],
    });

    allResults.push({
      symbol,
      timeframes,
      signal,
    });

    await sleep(500);
  }

  // 按置信度排序
  allResults.sort((a, b) => b.signal.confidence - a.signal.confidence);

  // 输出摘要
  console.log('\n' + '='.repeat(120));
  console.log('🎯 技术面交易信号总览（按置信度排序）');
  console.log('='.repeat(120) + '\n');

  allResults.forEach((result, idx) => {
    const { symbol, signal } = result;
    const emoji = signal.signal === 'BUY' ? '✅' : (signal.signal === 'SELL' ? '❌' : '⏸️ ');

    console.log(`${idx + 1}. ${emoji} ${symbol.padEnd(15)} | 信号: ${signal.signal.padEnd(8)} | 类型: ${signal.type.padEnd(15)} | 置信: ${signal.confidence}%`);
    console.log(`   追涨: ${signal.suitable_for_chasing.padEnd(5)} | 理由: ${signal.reasons[0] || 'N/A'}`);

    if (signal.risks.length > 0) {
      console.log(`   风险: ${signal.risks.join(' | ')}`);
    }
    console.log('');
  });

  // 保存详细报告
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total_stocks: STOCKS_TO_ANALYZE.length,
      buy_signals: allResults.filter(r => r.signal.signal === 'BUY').length,
      sell_signals: allResults.filter(r => r.signal.signal === 'SELL').length,
      hold_signals: allResults.filter(r => r.signal.signal === 'HOLD').length,
      avg_confidence: Math.round(allResults.reduce((sum, r) => sum + r.signal.confidence, 0) / allResults.length),
    },
    analysis_results: allResults.map(r => ({
      symbol: r.symbol,
      signal: r.signal,
      technical_indicators: {
        h1: r.timeframes['1'],
        h4: r.timeframes['4'],
        d1: r.timeframes['D'],
        w1: r.timeframes['W'],
      },
    })),
  };

  const reportFile = `us_technical_analysis_${new Date().toISOString().replace(/[:.]/g, '-').split('T')[0]}.json`;
  writeFileSync(reportFile, JSON.stringify(report, null, 2));

  console.log('='.repeat(120));
  console.log(`✅ 详细技术分析报告已保存: ${reportFile}`);
  console.log(`   • ${report.summary.buy_signals} 个 BUY 信号`);
  console.log(`   • ${report.summary.sell_signals} 个 SELL 信号`);
  console.log(`   • ${report.summary.hold_signals} 个 HOLD 信号`);
  console.log(`   • 平均置信度: ${report.summary.avg_confidence}%`);
  console.log('='.repeat(120) + '\n');

  // 推荐列表
  console.log('📌 明天入手最有潜力的股票（综合新闻 + 技术面）\n');

  const topCandidates = allResults
    .filter(r => r.signal.signal === 'BUY')
    .filter(r => r.signal.confidence >= 70)
    .sort((a, b) => b.signal.confidence - a.signal.confidence);

  if (topCandidates.length === 0) {
    console.log('⚠️  当前无高置信度 BUY 信号，建议继续观望或等待回调机会\n');
  } else {
    topCandidates.forEach((candidate, idx) => {
      console.log(`${idx + 1}. 🚀 ${candidate.symbol}`);
      console.log(`   置信度: ${candidate.signal.confidence}%`);
      console.log(`   交易类型: ${candidate.signal.type}`);
      console.log(`   追涨适合: ${candidate.signal.suitable_for_chasing}`);
      console.log(`   原因: ${candidate.signal.reasons.join(' | ')}`);
      if (candidate.signal.risks.length > 0) {
        console.log(`   风险: ${candidate.signal.risks.join(' | ')}`);
      }
      console.log('');
    });
  }
}

main().catch(console.error);
