#!/usr/bin/env node

import fs from 'fs';

const rawData = JSON.parse(fs.readFileSync('tech_results.json', 'utf8'));

// 深度技术分析类
class TechnicalAnalyzer {
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

  static calculateSMA(values, period) {
    if (values.length < period) return null;
    return values.slice(-period).reduce((a, b) => a + b) / period;
  }

  static calculateEMA(values, period) {
    if (values.length < period) return null;
    let ema = values.slice(0, period).reduce((a, b) => a + b) / period;
    const multiplier = 2 / (period + 1);

    for (let i = period; i < values.length; i++) {
      ema = (values[i] - ema) * multiplier + ema;
    }
    return ema;
  }

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

  static analyzeMomentum(closes) {
    if (closes.length < 3) return null;

    const roc = ((closes[closes.length - 1] - closes[closes.length - 11]) / closes[closes.length - 11] * 100);
    return {
      roc: roc.toFixed(2),
      momentum: roc > 0 ? '强' : '弱'
    };
  }

  static analyzeVolatility(closes, period = 20) {
    if (closes.length < period) return null;

    const recent = closes.slice(-period);
    const returns = [];
    for (let i = 1; i < recent.length; i++) {
      returns.push((recent[i] - recent[i - 1]) / recent[i - 1]);
    }

    const variance = returns.reduce((sum, r) => sum + Math.pow(r, 2), 0) / returns.length;
    const volatility = Math.sqrt(variance);
    return (volatility * 100).toFixed(2);
  }

  static analyzeStructure(bars) {
    if (bars.length < 20) return null;

    const closes = bars.map(b => b.close);
    const highs = bars.map(b => b.high);
    const lows = bars.map(b => b.low);

    const highest = Math.max(...closes.slice(-20));
    const lowest = Math.min(...closes.slice(-20));
    const current = closes[closes.length - 1];

    const position = ((current - lowest) / (highest - lowest) * 100).toFixed(0);

    return {
      highest: highest.toFixed(2),
      lowest: lowest.toFixed(2),
      current: current.toFixed(2),
      position: position + '% (0%=底 100%=顶)'
    };
  }

  static analyzeVolume(bars) {
    if (bars.length < 5) return null;

    const volumes = bars.map(b => b.volume);
    const avg5 = volumes.slice(-5).reduce((a, b) => a + b) / 5;
    const avg20 = volumes.slice(-20).reduce((a, b) => a + b) / 20;
    const lastVol = volumes[volumes.length - 1];

    return {
      last: lastVol,
      avg5: Math.round(avg5),
      avg20: Math.round(avg20),
      expansion: lastVol > avg5 * 1.3 ? '强' : lastVol > avg5 * 1.1 ? '一般' : '弱',
      ratio: (lastVol / avg20).toFixed(2) + 'x'
    };
  }

  static analyzeTrend(bars) {
    if (bars.length < 50) return null;

    const closes = bars.map(b => b.close);
    const sma20 = this.calculateSMA(closes, 20);
    const sma50 = this.calculateSMA(closes, 50);
    const ema12 = this.calculateEMA(closes, 12);
    const ema26 = this.calculateEMA(closes, 26);

    const current = closes[closes.length - 1];

    let trendStatus = '平稳';
    let strength = 0;

    if (current > sma20 && sma20 > sma50 && ema12 > ema26) {
      trendStatus = '强上升';
      strength = 3;
    } else if (current > sma20 && sma20 > sma50) {
      trendStatus = '上升';
      strength = 2;
    } else if (current < sma20 && sma20 < sma50 && ema12 < ema26) {
      trendStatus = '强下降';
      strength = -3;
    } else if (current < sma20 && sma20 < sma50) {
      trendStatus = '下降';
      strength = -2;
    }

    return {
      status: trendStatus,
      strength,
      sma20: sma20 ? sma20.toFixed(2) : 'N/A',
      sma50: sma50 ? sma50.toFixed(2) : 'N/A'
    };
  }

  static generateSignal(rsi, trend, momentum, volume) {
    let signal = '观望';
    let type = '中立';
    let confidence = 50;
    let risks = [];

    // 趋势为主
    if (trend.strength === 3 && rsi && rsi < 70) {
      signal = '看多';
      type = '突破型';
      confidence = 85;
    } else if (trend.strength === 2 && rsi && rsi < 60) {
      signal = '看多';
      type = '回调低吸';
      confidence = 75;
    } else if (trend.strength === -3) {
      signal = '看空';
      type = '反转';
      confidence = 80;
      risks.push('强下降趋势,避免追高');
    } else if (trend.strength === -2) {
      signal = '看空';
      confidence = 70;
      risks.push('下降趋势');
    }

    // RSI 超卖/超买
    if (rsi && rsi < 25 && signal !== '看空') {
      signal = '看多';
      type = '回调低吸';
      confidence = Math.min(95, confidence + 15);
    } else if (rsi && rsi > 75 && signal === '看多') {
      risks.push('RSI超买,需要回调');
      confidence = Math.max(50, confidence - 20);
    }

    // 成交量
    if (volume.expansion === '强' && signal === '看多') {
      confidence += 10;
    } else if (volume.expansion === '弱') {
      confidence -= 10;
    }

    return { signal, type, confidence: Math.min(100, Math.max(0, confidence)), risks };
  }
}

// 分析数据
const results = [];

rawData.forEach(stock => {
  const symbol = stock.symbol;
  const analysis = { symbol, timeframes: {} };

  // 分析每个时间周期
  ['D', '4', '1'].forEach(tf => {
    const tfData = stock.timeframes[tf];
    if (!tfData || !tfData.bars) return;

    const bars = tfData.bars;
    if (bars.length < 20) return;

    const closes = bars.map(b => b.close);

    const trend = TechnicalAnalyzer.analyzeTrend(bars);
    const rsi = TechnicalAnalyzer.calculateRSI(closes);
    const momentum = TechnicalAnalyzer.analyzeMomentum(closes);
    const volatility = TechnicalAnalyzer.analyzeVolatility(closes);
    const structure = TechnicalAnalyzer.analyzeStructure(bars);
    const volume = TechnicalAnalyzer.analyzeVolume(bars);
    const atr = TechnicalAnalyzer.calculateATR(bars);

    const signal = TechnicalAnalyzer.generateSignal(rsi, trend, momentum, volume);

    analysis.timeframes[tf] = {
      trend: trend.status,
      rsi: rsi ? rsi.toFixed(2) : 'N/A',
      momentum: momentum,
      volatility: volatility + '%',
      atr: atr ? atr.toFixed(2) : 'N/A',
      structure,
      volume,
      signal: signal.signal,
      type: signal.type,
      confidence: signal.confidence,
      risks: signal.risks
    };
  });

  results.push(analysis);
});

// 输出详细报告
console.log('\n' + '='.repeat(120));
console.log('🔬 8支股票多周期技术面深度分析');
console.log('='.repeat(120) + '\n');

results.forEach(r => {
  console.log(`\n【${r.symbol}】`);
  console.log('─'.repeat(120));

  ['D', '4', '1'].forEach(tf => {
    const tfName = { 'D': '📅 日线', '4': '⏰ 4小时', '1': '⏱️  1小时' };
    const data = r.timeframes[tf];

    if (!data) return;

    console.log(`\n${tfName[tf]}`);
    console.log(`├─ 趋势: ${data.trend.padEnd(10)} | RSI: ${data.rsi.padStart(6)} | 动能: ${data.momentum.momentum}`);
    console.log(`├─ 结构位: 当前 ${data.structure.current.padStart(8)} | 高 ${data.structure.highest.padStart(8)} | 低 ${data.structure.lowest.padStart(8)} | 位置 ${data.structure.position}`);
    console.log(`├─ 成交量: 最后 ${data.volume.last} | 平均5日 ${data.volume.avg5} | 扩张 ${data.volume.expansion}`);
    console.log(`├─ 波动率: ${data.volatility.padStart(6)} | ATR: ${data.atr}`);
    console.log(`└─ 📊 信号: ${data.signal.padEnd(6)} (${data.type.padEnd(8)}) 置信: ${data.confidence}%`);

    if (data.risks.length > 0) {
      console.log(`   ⚠️  风险: ${data.risks.join(', ')}`);
    }
  });
});

// 综合排名
console.log('\n' + '='.repeat(120));
console.log('📈 明天最可能上涨的股票排名');
console.log('='.repeat(120) + '\n');

const scored = results.map(r => {
  const d1 = r.timeframes['D'];
  if (!d1) return null;

  let score = 0;
  if (d1.signal === '看多') score += 30;
  if (d1.trend.includes('上升')) score += 20;
  if (d1.rsi < 60) score += 15;
  if (d1.volume.expansion === '强') score += 15;
  if (d1.risks.length === 0) score += 20;

  return { symbol: r.symbol, score, data: d1 };
}).filter(x => x).sort((a, b) => b.score - a.score);

scored.forEach((item, idx) => {
  const emoji = ['🥇', '🥈', '🥉', '4️⃣ ', '5️⃣ ', '6️⃣ ', '7️⃣ ', '8️⃣ '][idx];
  console.log(`${emoji} ${item.symbol.padEnd(15)} | 得分: ${item.score.toString().padStart(3)} | 信号: ${item.data.signal.padEnd(6)} | 趋势: ${item.data.trend}`);
  console.log(`   ├─ 推荐: ${item.data.type === '突破型' ? '可追涨 (注意止损)' : item.data.type === '回调低吸' ? '低吸机会' : '继续观望'}`);
  console.log(`   └─ 风险: ${item.data.risks.length === 0 ? '风险可控' : item.data.risks.join(', ')}`);
  console.log('');
});

fs.writeFileSync('tech_analysis_full_report.json', JSON.stringify(results, null, 2));
console.log('✅ 详细报告已保存: tech_analysis_full_report.json\n');
