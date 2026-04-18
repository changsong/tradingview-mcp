#!/usr/bin/env node
/**
 * 美股技术面深度分析
 * 多周期分析：1h, 4h, 1d, 1w
 * 分析维度：趋势、动能、波动、成交量、结构位、资金行为
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return JSON.parse(result);
  } catch (error) {
    console.error(`Error running command: ${cmd}`, error.message);
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 从 us_selected.txt 读取推荐股票
function loadSelectedStocks() {
  try {
    const content = readFileSync('./watchlist/us_selected.txt', 'utf8').trim();
    return content.split(',').map(s => s.trim()).filter(s => s);
  } catch (err) {
    console.error('无法读取 us_selected.txt:', err.message);
    return [];
  }
}

// 分析趋势结构
function analyzeTrend(ohlcv) {
  if (!ohlcv || !ohlcv.success || !ohlcv.bars || ohlcv.bars.length < 20) {
    return { trend: 'unknown', strength: 0, reason: '数据不足' };
  }

  const bars = ohlcv.bars;
  const closes = bars.map(b => b.close);
  const highs = bars.map(b => b.high);
  const lows = bars.map(b => b.low);

  // 计算移动平均
  const ma20 = closes.slice(-20).reduce((a, b) => a + b, 0) / 20;
  const ma50 = closes.length >= 50 ? closes.slice(-50).reduce((a, b) => a + b, 0) / 50 : ma20;
  const currentPrice = closes[closes.length - 1];

  // 趋势判断
  let trend = 'neutral';
  let strength = 0;
  let reasons = [];

  // 价格与均线关系
  if (currentPrice > ma20 && currentPrice > ma50) {
    trend = 'uptrend';
    strength += 30;
    reasons.push('价格在MA20和MA50上方');
  } else if (currentPrice < ma20 && currentPrice < ma50) {
    trend = 'downtrend';
    strength -= 30;
    reasons.push('价格在MA20和MA50下方');
  }

  // 均线排列
  if (ma20 > ma50) {
    strength += 20;
    reasons.push('MA20 > MA50 多头排列');
  } else if (ma20 < ma50) {
    strength -= 20;
    reasons.push('MA20 < MA50 空头排列');
  }

  // 高低点分析（最近10根K线）
  const recent10 = bars.slice(-10);
  const higherHighs = recent10.filter((b, i) => i > 0 && b.high > recent10[i - 1].high).length;
  const higherLows = recent10.filter((b, i) => i > 0 && b.low > recent10[i - 1].low).length;

  if (higherHighs >= 6 && higherLows >= 6) {
    strength += 20;
    reasons.push('持续创新高新低');
  } else if (higherHighs <= 3 && higherLows <= 3) {
    strength -= 20;
    reasons.push('持续创新低');
  }

  // 趋势强度归一化
  strength = Math.max(-100, Math.min(100, strength));

  return {
    trend,
    strength,
    ma20: ma20.toFixed(2),
    ma50: ma50.toFixed(2),
    current_price: currentPrice.toFixed(2),
    price_vs_ma20: ((currentPrice - ma20) / ma20 * 100).toFixed(2) + '%',
    reasons
  };
}

// 分析动能系统
function analyzeMomentum(values, ohlcv) {
  if (!values || !values.success || !values.values) {
    return { momentum: 'unknown', score: 0, reason: '无指标数据' };
  }

  let score = 0;
  let reasons = [];
  let momentum = 'neutral';

  // RSI分析
  const rsi = values.values.find(v => v.name === 'Relative Strength Index');
  if (rsi && rsi.value !== undefined) {
    const rsiVal = parseFloat(rsi.value);
    if (rsiVal > 70) {
      score -= 20;
      reasons.push(`RSI超买 (${rsiVal.toFixed(2)})`);
      momentum = 'overbought';
    } else if (rsiVal < 30) {
      score += 20;
      reasons.push(`RSI超卖 (${rsiVal.toFixed(2)})`);
      momentum = 'oversold';
    } else if (rsiVal > 50 && rsiVal < 70) {
      score += 15;
      reasons.push(`RSI健康多头区 (${rsiVal.toFixed(2)})`);
      momentum = 'bullish';
    } else if (rsiVal < 50 && rsiVal > 30) {
      score -= 10;
      reasons.push(`RSI弱势区 (${rsiVal.toFixed(2)})`);
      momentum = 'bearish';
    }
  }

  // MACD分析
  const macd = values.values.find(v => v.name.includes('MACD'));
  const macdSignal = values.values.find(v => v.name.includes('Signal'));
  if (macd && macd.value !== undefined) {
    const macdVal = parseFloat(macd.value);
    if (macdVal > 0) {
      score += 15;
      reasons.push(`MACD多头 (${macdVal.toFixed(4)})`);
    } else {
      score -= 10;
      reasons.push(`MACD空头 (${macdVal.toFixed(4)})`);
    }
  }

  // 价格动能（最近5根K线涨跌幅）
  if (ohlcv && ohlcv.bars && ohlcv.bars.length >= 5) {
    const recent5 = ohlcv.bars.slice(-5);
    const priceChange = (recent5[4].close - recent5[0].close) / recent5[0].close * 100;
    if (priceChange > 5) {
      score += 20;
      reasons.push(`近5日强势上涨 (+${priceChange.toFixed(2)}%)`);
    } else if (priceChange < -5) {
      score -= 20;
      reasons.push(`近5日大幅下跌 (${priceChange.toFixed(2)}%)`);
    }
  }

  return {
    momentum,
    score: Math.max(-100, Math.min(100, score)),
    reasons
  };
}

// 分析波动压缩与释放
function analyzeVolatility(ohlcv) {
  if (!ohlcv || !ohlcv.success || !ohlcv.bars || ohlcv.bars.length < 20) {
    return { volatility: 'unknown', status: 'unknown', reason: '数据不足' };
  }

  const bars = ohlcv.bars;

  // 计算ATR（平均真实波幅）
  const atrPeriod = 14;
  const recentBars = bars.slice(-atrPeriod);
  const atr = recentBars.reduce((sum, b) => {
    const tr = Math.max(b.high - b.low, Math.abs(b.high - b.close), Math.abs(b.low - b.close));
    return sum + tr;
  }, 0) / atrPeriod;

  // 计算布林带宽度
  const closes = bars.slice(-20).map(b => b.close);
  const ma20 = closes.reduce((a, b) => a + b, 0) / 20;
  const std = Math.sqrt(closes.reduce((sum, c) => sum + Math.pow(c - ma20, 2), 0) / 20);
  const bbWidth = (std * 4 / ma20) * 100; // 布林带宽度百分比

  const currentPrice = closes[closes.length - 1];
  const upperBand = ma20 + 2 * std;
  const lowerBand = ma20 - 2 * std;

  let status = 'normal';
  let reasons = [];

  // 波动压缩判断
  if (bbWidth < 5) {
    status = 'compressed';
    reasons.push('布林带极度收窄，波动压缩');
  } else if (bbWidth < 10) {
    status = 'compressing';
    reasons.push('布林带收窄中');
  } else if (bbWidth > 20) {
    status = 'expanding';
    reasons.push('布林带扩张，波动释放');
  }

  // 价格位置
  if (currentPrice > upperBand) {
    reasons.push('价格突破上轨');
  } else if (currentPrice < lowerBand) {
    reasons.push('价格跌破下轨');
  }

  return {
    volatility: status,
    atr: atr.toFixed(2),
    bb_width: bbWidth.toFixed(2) + '%',
    upper_band: upperBand.toFixed(2),
    lower_band: lowerBand.toFixed(2),
    current_price: currentPrice.toFixed(2),
    reasons
  };
}

// 分析成交量行为
function analyzeVolume(ohlcv) {
  if (!ohlcv || !ohlcv.success || !ohlcv.bars || ohlcv.bars.length < 20) {
    return { volume_trend: 'unknown', score: 0, reason: '数据不足' };
  }

  const bars = ohlcv.bars;
  const volumes = bars.map(b => b.volume);

  // 平均成交量
  const avgVol20 = volumes.slice(-20).reduce((a, b) => a + b, 0) / 20;
  const currentVol = volumes[volumes.length - 1];
  const volRatio = currentVol / avgVol20;

  let score = 0;
  let reasons = [];
  let volumeTrend = 'normal';

  // 成交量放大
  if (volRatio > 2) {
    score += 25;
    reasons.push(`成交量爆量 (${volRatio.toFixed(2)}x)`);
    volumeTrend = 'surge';
  } else if (volRatio > 1.5) {
    score += 15;
    reasons.push(`成交量放大 (${volRatio.toFixed(2)}x)`);
    volumeTrend = 'increasing';
  } else if (volRatio < 0.5) {
    score -= 10;
    reasons.push(`成交量萎缩 (${volRatio.toFixed(2)}x)`);
    volumeTrend = 'decreasing';
  }

  // 量价配合分析
  const priceChange = (bars[bars.length - 1].close - bars[bars.length - 2].close) / bars[bars.length - 2].close;
  if (priceChange > 0 && volRatio > 1.2) {
    score += 20;
    reasons.push('量价齐升，多头强势');
  } else if (priceChange > 0 && volRatio < 0.8) {
    score -= 15;
    reasons.push('价涨量缩，上涨乏力');
  } else if (priceChange < 0 && volRatio > 1.2) {
    score -= 20;
    reasons.push('价跌量增，抛压沉重');
  }

  return {
    volume_trend: volumeTrend,
    score: Math.max(-100, Math.min(100, score)),
    current_volume: currentVol.toFixed(0),
    avg_volume: avgVol20.toFixed(0),
    volume_ratio: volRatio.toFixed(2) + 'x',
    reasons
  };
}

// 分析关键结构位
function analyzeStructure(ohlcv) {
  if (!ohlcv || !ohlcv.success || !ohlcv.bars || ohlcv.bars.length < 50) {
    return { support: 'unknown', resistance: 'unknown', reason: '数据不足' };
  }

  const bars = ohlcv.bars;
  const currentPrice = bars[bars.length - 1].close;

  // 找最近50根K线的高低点
  const recent50 = bars.slice(-50);
  const high50 = Math.max(...recent50.map(b => b.high));
  const low50 = Math.min(...recent50.map(b => b.low));

  // 找最近20根K线的高低点
  const recent20 = bars.slice(-20);
  const high20 = Math.max(...recent20.map(b => b.high));
  const low20 = Math.min(...recent20.map(b => b.low));

  // 计算距离关键位的距离
  const distToHigh50 = ((high50 - currentPrice) / currentPrice * 100);
  const distToLow50 = ((currentPrice - low50) / currentPrice * 100);
  const distToHigh20 = ((high20 - currentPrice) / currentPrice * 100);
  const distToLow20 = ((currentPrice - low20) / currentPrice * 100);

  let reasons = [];
  let nearResistance = false;
  let nearSupport = false;

  // 判断是否接近压力位
  if (distToHigh50 < 2) {
    reasons.push(`接近50日高点 (${distToHigh50.toFixed(2)}%)`);
    nearResistance = true;
  } else if (distToHigh20 < 2) {
    reasons.push(`接近20日高点 (${distToHigh20.toFixed(2)}%)`);
    nearResistance = true;
  }

  // 判断是否接近支撑位
  if (distToLow50 < 2) {
    reasons.push(`接近50日低点 (${distToLow50.toFixed(2)}%)`);
    nearSupport = true;
  } else if (distToLow20 < 2) {
    reasons.push(`接近20日低点 (${distToLow20.toFixed(2)}%)`);
    nearSupport = true;
  }

  // 计算价格在区间的位置
  const positionInRange = ((currentPrice - low50) / (high50 - low50) * 100);

  return {
    resistance_50d: high50.toFixed(2),
    support_50d: low50.toFixed(2),
    resistance_20d: high20.toFixed(2),
    support_20d: low20.toFixed(2),
    current_price: currentPrice.toFixed(2),
    position_in_range: positionInRange.toFixed(2) + '%',
    near_resistance: nearResistance,
    near_support: nearSupport,
    dist_to_resistance: distToHigh50.toFixed(2) + '%',
    dist_to_support: distToLow50.toFixed(2) + '%',
    reasons
  };
}

// 多周期综合分析
async function analyzeMultiTimeframe(symbol) {
  const timeframes = ['60', '240', 'D', 'W']; // 1h, 4h, 1d, 1w
  const tfNames = { '60': '1h', '240': '4h', 'D': '1d', 'W': '1w' };
  const results = {};

  for (const tf of timeframes) {
    console.log(`    分析 ${tfNames[tf]} 周期...`);

    // 切换时间周期
    runCommand(`timeframe ${tf}`);
    await sleep(3000);

    // 获取数据（不使用 -s 参数以获取完整数据）
    const ohlcv = runCommand('ohlcv -n 100');
    await sleep(500);
    const values = runCommand('values');

    // 执行各项分析
    const trend = analyzeTrend(ohlcv);
    const momentum = analyzeMomentum(values, ohlcv);
    const volatility = analyzeVolatility(ohlcv);
    const volume = analyzeVolume(ohlcv);
    const structure = analyzeStructure(ohlcv);

    results[tfNames[tf]] = {
      trend,
      momentum,
      volatility,
      volume,
      structure,
      overall_score: (trend.strength + momentum.score + volume.score) / 3
    };

    await sleep(500);
  }

  return results;
}

// 生成交易信号
function generateTradingSignal(symbol, multiTfAnalysis) {
  const tf1d = multiTfAnalysis['1d'];
  const tf1h = multiTfAnalysis['1h'];
  const tf4h = multiTfAnalysis['4h'];
  const tf1w = multiTfAnalysis['1w'];

  if (!tf1d || !tf1h) {
    return {
      conclusion: '观望',
      type: '数据不足',
      chase_rally: 'NO',
      reason: '无法获取完整技术数据',
      risks: ['数据不完整']
    };
  }

  let score = 0;
  let reasons = [];
  let risks = [];
  let type = '观望';
  let chaseRally = 'NO';

  // 1. 趋势一致性检查
  const trendAlignment = [tf1h, tf4h, tf1d, tf1w].filter(tf => tf && tf.trend.trend === 'uptrend').length;
  if (trendAlignment >= 3) {
    score += 30;
    reasons.push(`多周期趋势一致 (${trendAlignment}/4)`);
  } else if (trendAlignment <= 1) {
    score -= 20;
    reasons.push(`多周期趋势不一致`);
  }

  // 2. 日线级别分析
  if (tf1d.trend.strength > 40) {
    score += 25;
    reasons.push('日线趋势强劲');
  } else if (tf1d.trend.strength < -20) {
    score -= 25;
    reasons.push('日线趋势疲弱');
  }

  // 3. 动能分析
  if (tf1d.momentum.score > 30) {
    score += 20;
    reasons.push('动能强劲');
  } else if (tf1d.momentum.score < -20) {
    score -= 20;
    reasons.push('动能衰减');
    risks.push('动能衰减');
  }

  // 4. 波动压缩（突破前兆）
  if (tf1d.volatility.volatility === 'compressed' || tf1d.volatility.volatility === 'compressing') {
    score += 15;
    reasons.push('波动压缩，蓄势待发');
    type = '突破型';
  }

  // 5. 成交量配合
  if (tf1d.volume.score > 20) {
    score += 20;
    reasons.push('成交量配合良好');
  } else if (tf1d.volume.score < -10) {
    score -= 15;
    reasons.push('成交量不配合');
    risks.push('量能不足');
  }

  // 6. 结构位风险
  if (tf1d.structure.near_resistance) {
    score -= 20;
    reasons.push('接近压力位');
    risks.push('接近压力位，突破难度大');
  }

  if (tf1d.structure.near_support) {
    score += 15;
    reasons.push('接近支撑位，风险有限');
    type = '回调低吸';
  }

  // 7. 短周期确认
  if (tf1h.trend.trend === 'uptrend' && tf1h.momentum.score > 20) {
    score += 15;
    reasons.push('短周期确认上涨');
    chaseRally = 'YES';
  }

  // 8. 假突破检测
  const priceInRange = parseFloat(tf1d.structure.position_in_range);
  if (priceInRange > 95 && tf1d.volume.score < 10) {
    risks.push('可能存在假突破（高位缩量）');
    score -= 15;
  }

  // 9. 诱多检测
  if (tf1d.momentum.momentum === 'overbought' && tf1d.structure.near_resistance) {
    risks.push('可能存在诱多（超买+压力位）');
    score -= 20;
  }

  // 10. 反转信号
  if (tf1d.momentum.momentum === 'oversold' && tf1d.structure.near_support && tf1h.trend.trend === 'uptrend') {
    type = '反转';
    score += 25;
    reasons.push('超卖反弹信号');
  }

  // 综合判断
  let conclusion = '观望';
  if (score > 50) {
    conclusion = '看多';
    if (type === '观望') type = '突破型';
  } else if (score < -30) {
    conclusion = '看空';
  } else if (score > 20 && type === '回调低吸') {
    conclusion = '看多';
  }

  // 追涨判断
  if (conclusion === '看多' && tf1h.momentum.score > 30 && !tf1d.structure.near_resistance) {
    chaseRally = 'YES';
  }

  return {
    conclusion,
    type,
    chase_rally: chaseRally,
    score: score.toFixed(2),
    confidence: score > 60 ? 'High' : score > 30 ? 'Medium' : 'Low',
    reasons: reasons.slice(0, 5),
    risks,
    key_levels: {
      resistance: tf1d.structure.resistance_20d,
      support: tf1d.structure.support_20d,
      current: tf1d.structure.current_price
    }
  };
}

// 主函数
async function main() {
  console.log('================================================================================');
  console.log('📈 美股技术面深度分析');
  console.log('================================================================================\n');

  const symbols = loadSelectedStocks();
  if (symbols.length === 0) {
    console.error('❌ 未找到推荐股票');
    return;
  }

  console.log(`✅ 加载了 ${symbols.length} 个推荐股票\n`);

  const results = [];

  for (const symbol of symbols) {
    console.log(`\n[${symbols.indexOf(symbol) + 1}/${symbols.length}] 正在分析 ${symbol}...`);

    try {
      // 切换到该股票
      runCommand(`symbol ${symbol}`);
      await sleep(2000);

      // 多周期分析
      const multiTfAnalysis = await analyzeMultiTimeframe(symbol);

      // 生成交易信号
      const tradingSignal = generateTradingSignal(symbol, multiTfAnalysis);

      const result = {
        symbol,
        analysis_time: new Date().toISOString(),
        multi_timeframe_analysis: multiTfAnalysis,
        trading_signal: tradingSignal
      };

      results.push(result);

      // 打印摘要
      console.log(`\n  ✅ 分析完成`);
      console.log(`  结论: ${tradingSignal.conclusion} | 类型: ${tradingSignal.type} | 追涨: ${tradingSignal.chase_rally}`);
      console.log(`  综合评分: ${tradingSignal.score} | 信心度: ${tradingSignal.confidence}`);
      console.log(`  理由: ${tradingSignal.reasons.join('; ')}`);
      if (tradingSignal.risks.length > 0) {
        console.log(`  ⚠️  风险: ${tradingSignal.risks.join('; ')}`);
      }

    } catch (err) {
      console.error(`  ❌ 分析失败: ${err.message}`);
      results.push({
        symbol,
        error: err.message
      });
    }

    await sleep(1000);
  }

  // 生成汇总报告
  console.log('\n================================================================================');
  console.log('📊 技术面分析汇总 - 明日入场推荐');
  console.log('================================================================================\n');

  const bullishSignals = results.filter(r => r.trading_signal?.conclusion === '看多');
  const bearishSignals = results.filter(r => r.trading_signal?.conclusion === '看空');
  const neutralSignals = results.filter(r => r.trading_signal?.conclusion === '观望');

  // 按评分排序
  bullishSignals.sort((a, b) => parseFloat(b.trading_signal.score) - parseFloat(a.trading_signal.score));

  console.log(`🟢 看多信号 (${bullishSignals.length}):`);
  bullishSignals.forEach((r, idx) => {
    console.log(`\n${idx + 1}. ${r.symbol} - 评分: ${r.trading_signal.score} (${r.trading_signal.confidence})`);
    console.log(`   类型: ${r.trading_signal.type} | 追涨: ${r.trading_signal.chase_rally}`);
    console.log(`   理由: ${r.trading_signal.reasons.join('; ')}`);
    if (r.trading_signal.risks.length > 0) {
      console.log(`   风险: ${r.trading_signal.risks.join('; ')}`);
    }
  });

  console.log(`\n🔴 看空信号 (${bearishSignals.length}):`);
  bearishSignals.forEach(r => {
    console.log(`   ${r.symbol} - ${r.trading_signal.reasons[0]}`);
  });

  console.log(`\n⚪ 观望信号 (${neutralSignals.length}):`);
  neutralSignals.forEach(r => {
    console.log(`   ${r.symbol} - ${r.trading_signal?.reasons[0] || '数据不足'}`);
  });

  // 明日最佳入场推荐
  if (bullishSignals.length > 0) {
    const topPick = bullishSignals[0];
    console.log('\n================================================================================');
    console.log('🎯 明日最佳入场推荐');
    console.log('================================================================================\n');
    console.log(`股票: ${topPick.symbol}`);
    console.log(`评分: ${topPick.trading_signal.score} (${topPick.trading_signal.confidence})`);
    console.log(`类型: ${topPick.trading_signal.type}`);
    console.log(`是否追涨: ${topPick.trading_signal.chase_rally}`);
    console.log(`\n理由:`);
    topPick.trading_signal.reasons.forEach(r => console.log(`  - ${r}`));
    console.log(`\n关键位:`);
    console.log(`  压力位: ${topPick.trading_signal.key_levels.resistance}`);
    console.log(`  当前价: ${topPick.trading_signal.key_levels.current}`);
    console.log(`  支撑位: ${topPick.trading_signal.key_levels.support}`);
    if (topPick.trading_signal.risks.length > 0) {
      console.log(`\n风险提示:`);
      topPick.trading_signal.risks.forEach(r => console.log(`  ⚠️  ${r}`));
    }
  }

  // 保存JSON结果
  const outputFile = `us_technical_analysis_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  writeFileSync(outputFile, JSON.stringify({
    analysis_time: new Date().toISOString(),
    summary: {
      total_stocks: results.length,
      bullish_signals: bullishSignals.length,
      bearish_signals: bearishSignals.length,
      neutral_signals: neutralSignals.length,
      top_pick: bullishSignals.length > 0 ? bullishSignals[0].symbol : null
    },
    results
  }, null, 2), 'utf-8');

  console.log(`\n✅ 详细结果已保存到: ${outputFile}`);
  console.log('\n================================================================================');
}

main().catch(console.error);
