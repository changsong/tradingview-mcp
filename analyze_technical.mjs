#!/usr/bin/env node

import fs from 'fs';

const data = JSON.parse(fs.readFileSync('tech_results.json', 'utf8'));

// 技术分析函数
function calculateRSI(closes, period = 14) {
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

function calculateSMA(values, period) {
  if (values.length < period) return null;
  return values.slice(-period).reduce((a, b) => a + b) / period;
}

function analyzeTrendStructure(bars) {
  if (!bars || bars.length < 3) return null;

  const closes = bars.map(b => b.close);
  const sma20 = calculateSMA(closes, 20);
  const sma50 = calculateSMA(closes, 50);
  const current = closes[closes.length - 1];

  let trend = '平稳';
  if (current > (sma20 || 0) && (sma20 || 0) > (sma50 || 0)) {
    trend = '上升';
  } else if (current < (sma20 || 0) && (sma20 || 0) < (sma50 || 0)) {
    trend = '下降';
  }

  const highest20 = Math.max(...closes.slice(-20));
  const lowest20 = Math.min(...closes.slice(-20));

  return { trend, price: current, highest20, lowest20 };
}

function analyzeVolume(bars) {
  if (!bars || bars.length < 5) return null;

  const recent5 = bars.slice(-5).map(b => b.volume);
  const avg5 = recent5.reduce((a, b) => a + b) / 5;
  const last = recent5[recent5.length - 1];

  return {
    is_expanded: last > avg5 * 1.2,
    ratio: (last / avg5).toFixed(2)
  };
}

// 分析所有股票
const results = [];

data.forEach(stock => {
  const symbol = stock.symbol;
  const analysis = { symbol, timeframes: {} };

  ['D', '4', '1'].forEach(tf => {
    const tfData = stock.timeframes[tf];
    if (!tfData || !tfData.last_5_bars) return;

    const bars = tfData.last_5_bars;
    const closes = bars.map(b => b.close);

    const trend = analyzeTrendStructure(bars);
    const rsi = calculateRSI(closes);
    const volume = analyzeVolume(bars);

    // 生成信号
    let signal = '观望';
    let confidence = 50;

    if (rsi && rsi < 30) {
      signal = '超卖';
      confidence = 70;
    } else if (rsi && rsi > 70) {
      signal = '超买';
      confidence = 60;
    }

    if (trend && trend.trend === '上升' && rsi && rsi < 70) {
      signal = '看好';
      confidence = 80;
    } else if (trend && trend.trend === '下降') {
      signal = '看空';
      confidence = 65;
    }

    analysis.timeframes[tf] = {
      trend: trend?.trend || 'N/A',
      rsi: rsi ? rsi.toFixed(2) : 'N/A',
      volume_expanded: volume?.is_expanded,
      signal,
      confidence
    };
  });

  results.push(analysis);
});

// 输出摘要
console.log('\n' + '='.repeat(100));
console.log('📊 8支股票技术面分析摘要');
console.log('='.repeat(100) + '\n');

results.forEach(r => {
  const d1 = r.timeframes['D'];
  const h4 = r.timeframes['4'];
  const h1 = r.timeframes['1'];

  if (!d1) return;

  console.log(`${r.symbol.padEnd(15)}`);
  console.log(`├─ 日线:   ${d1.trend.padEnd(8)} | RSI: ${d1.rsi.padStart(6)} | ${d1.signal.padEnd(6)} (${d1.confidence}%)`);
  if (h4) console.log(`├─ 4小时: ${h4.trend.padEnd(8)} | RSI: ${h4.rsi.padStart(6)} | ${h4.signal.padEnd(6)} (${h4.confidence}%)`);
  if (h1) console.log(`└─ 1小时: ${h1.trend.padEnd(8)} | RSI: ${h1.rsi.padStart(6)} | ${h1.signal.padEnd(6)} (${h1.confidence}%)`);

  const avgConf = (d1.confidence + (h4?.confidence || 50) + (h1?.confidence || 50)) / 3;
  console.log(`   综合: ${Math.round(avgConf)}%\n`);
});

fs.writeFileSync('tech_analysis_report.json', JSON.stringify(results, null, 2));
console.log('✅ 详细报告已保存: tech_analysis_report.json');
