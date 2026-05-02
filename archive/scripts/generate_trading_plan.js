#!/usr/bin/env node
/**
 * 综合评分与交易计划生成
 * 结合技术面、新闻情绪、风险评估进行综合排序
 */

import { readFileSync, writeFileSync } from 'fs';

// 读取技术分析结果
const technicalFile = 'us_technical_analysis_2026-04-18T02-51-26-622Z.json';
const sentimentFile = 'us_news_sentiment_2026-04-18T02-26-03-416Z.json';

let technicalData, sentimentData;

try {
  technicalData = JSON.parse(readFileSync(technicalFile, 'utf8'));
  sentimentData = JSON.parse(readFileSync(sentimentFile, 'utf8'));
} catch (err) {
  console.error('无法读取分析文件:', err.message);
  process.exit(1);
}

// 综合评分函数
function calculateComprehensiveScore(symbol) {
  // 获取技术面数据
  const techResult = technicalData.results.find(r => r.symbol === symbol);
  const sentResult = sentimentData.signals.find(s => s.symbol === symbol);

  if (!techResult || !sentResult) {
    return null;
  }

  const techSignal = techResult.trading_signal;
  const tf1d = techResult.multi_timeframe_analysis['1d'];

  // 1. 技术面评分 (40%)
  let techScore = parseFloat(techSignal.score);

  // 2. 新闻情绪评分 (25%)
  let sentScore = sentResult.sentiment_score * 2; // 归一化到100分制
  sentScore = Math.max(-50, Math.min(50, sentScore)); // 限制在-50到50

  // 3. 风险评分 (20%) - 风险越低分数越高
  let riskScore = 50;

  // 扣分项
  if (techSignal.risks.length > 0) riskScore -= techSignal.risks.length * 10;
  if (sentResult.is_overheated) riskScore -= 20;
  if (sentResult.is_fake_positive) riskScore -= 15;
  if (sentResult.has_blackswan) riskScore -= 30;
  if (sentResult.has_divergence) riskScore -= 10;

  // 加分项
  if (sentResult.opportunities.length > 2) riskScore += 10;
  if (techSignal.confidence === 'High') riskScore += 15;

  riskScore = Math.max(0, Math.min(100, riskScore));

  // 4. 机会评分 (15%) - 基于上涨空间和催化剂
  let opportunityScore = 50;

  // 上涨空间
  if (tf1d && tf1d.structure && tf1d.structure.position_in_range) {
    const posInRange = parseFloat(tf1d.structure.position_in_range);
    if (posInRange < 50) {
      opportunityScore += 20; // 低位，上涨空间大
    } else if (posInRange > 80) {
      opportunityScore -= 20; // 高位，上涨空间小
    }
  }

  // 催化剂
  if (sentResult.opportunities.length > 0) {
    opportunityScore += sentResult.opportunities.length * 5;
  }

  opportunityScore = Math.max(0, Math.min(100, opportunityScore));

  // 综合评分
  const comprehensiveScore = (
    techScore * 0.40 +
    sentScore * 0.25 +
    riskScore * 0.20 +
    opportunityScore * 0.15
  );

  return {
    symbol,
    comprehensive_score: comprehensiveScore.toFixed(2),
    tech_score: techScore.toFixed(2),
    sentiment_score: sentScore.toFixed(2),
    risk_score: riskScore.toFixed(2),
    opportunity_score: opportunityScore.toFixed(2),
    tech_signal: techSignal,
    sentiment_data: sentResult,
    technical_data: techResult
  };
}

// 计算入场、止损、止盈价位
function calculateTradingLevels(symbol, techData) {
  const tf1d = techData.multi_timeframe_analysis['1d'];
  const tf1h = techData.multi_timeframe_analysis['1h'];

  if (!tf1d || !tf1d.structure) {
    return null;
  }

  const currentPrice = parseFloat(tf1d.structure.current_price);
  const resistance = parseFloat(tf1d.structure.resistance_20d);
  const support = parseFloat(tf1d.structure.support_20d);

  // 入场价位策略
  let entryLevels = [];

  // 1. 激进入场（当前价附近）
  const aggressiveEntry = {
    type: '激进入场',
    price_range: `$${(currentPrice * 0.995).toFixed(2)} - $${(currentPrice * 1.005).toFixed(2)}`,
    price_low: (currentPrice * 0.995).toFixed(2),
    price_high: (currentPrice * 1.005).toFixed(2),
    description: '当前价附近直接入场',
    suitable_for: '看好短期突破，愿意承担一定回调风险'
  };

  // 2. 稳健入场（回调至支撑位附近）
  const conservativeEntry = {
    type: '稳健入场',
    price_range: `$${(support * 1.01).toFixed(2)} - $${(support * 1.03).toFixed(2)}`,
    price_low: (support * 1.01).toFixed(2),
    price_high: (support * 1.03).toFixed(2),
    description: '等待回调至支撑位附近',
    suitable_for: '追求更好的风险收益比，有耐心等待'
  };

  // 3. 突破入场（突破压力位后追涨）
  const breakoutEntry = {
    type: '突破入场',
    price_range: `$${(resistance * 1.01).toFixed(2)} - $${(resistance * 1.03).toFixed(2)}`,
    price_low: (resistance * 1.01).toFixed(2),
    price_high: (resistance * 1.03).toFixed(2),
    description: '突破压力位确认后追涨',
    suitable_for: '确认突破有效，追求趋势延续'
  };

  entryLevels.push(aggressiveEntry, conservativeEntry, breakoutEntry);

  // 止损价位
  const stopLoss = {
    price: (support * 0.99).toFixed(2),
    percentage: (((support * 0.99 - currentPrice) / currentPrice) * 100).toFixed(2) + '%',
    reason: '跌破日线支撑位，趋势可能反转'
  };

  // 止盈价位（多目标）
  const takeProfits = [];

  // T1: 短期压力位
  const tp1 = {
    level: 'T1',
    price: resistance.toFixed(2),
    percentage: (((resistance - currentPrice) / currentPrice) * 100).toFixed(2) + '%',
    action: '减仓30%',
    reason: '到达短期压力位，部分止盈'
  };

  // T2: 技术延伸目标（压力位 + 1个ATR）
  const atr = tf1d.volatility && tf1d.volatility.atr ? parseFloat(tf1d.volatility.atr) : (resistance - support) * 0.2;
  const tp2Price = resistance + atr * 1.5;
  const tp2 = {
    level: 'T2',
    price: tp2Price.toFixed(2),
    percentage: (((tp2Price - currentPrice) / currentPrice) * 100).toFixed(2) + '%',
    action: '减仓40%',
    reason: '技术延伸目标，继续止盈'
  };

  // T3: 激进目标（压力位 + 2个ATR）
  const tp3Price = resistance + atr * 3;
  const tp3 = {
    level: 'T3',
    price: tp3Price.toFixed(2),
    percentage: (((tp3Price - currentPrice) / currentPrice) * 100).toFixed(2) + '%',
    action: '清仓30%',
    reason: '激进目标，全部止盈'
  };

  takeProfits.push(tp1, tp2, tp3);

  // 风险收益比
  const riskRewardRatio = (
    (parseFloat(tp1.price) - currentPrice) /
    (currentPrice - parseFloat(stopLoss.price))
  ).toFixed(2);

  return {
    current_price: currentPrice.toFixed(2),
    entry_levels: entryLevels,
    stop_loss: stopLoss,
    take_profits: takeProfits,
    risk_reward_ratio: riskRewardRatio,
    key_levels: {
      resistance: resistance.toFixed(2),
      support: support.toFixed(2)
    }
  };
}

// 主函数
function main() {
  console.log('================================================================================');
  console.log('📊 综合评分与交易计划');
  console.log('================================================================================\n');

  const symbols = [
    'NYSE:AROC', 'NYSE:SPNT', 'NYSE:MTZ', 'NYSE:BWXT',
    'NYSE:PRIM', 'NYSE:TRNO', 'NYSE:GRMN', 'NASDAQ:BHRB'
  ];

  const results = [];

  for (const symbol of symbols) {
    const score = calculateComprehensiveScore(symbol);
    if (score) {
      const tradingLevels = calculateTradingLevels(symbol, score.technical_data);
      score.trading_plan = tradingLevels;
      results.push(score);
    }
  }

  // 按综合评分排序
  results.sort((a, b) => parseFloat(b.comprehensive_score) - parseFloat(a.comprehensive_score));

  // 输出排序结果
  console.log('📈 综合评分排序（从高到低）\n');
  console.log('排名 | 股票代码      | 综合评分 | 技术 | 情绪 | 风险 | 机会 | 推荐度');
  console.log('-----|---------------|----------|------|------|------|------|--------');

  results.forEach((r, idx) => {
    const stars = parseFloat(r.comprehensive_score) > 60 ? '⭐⭐⭐⭐⭐' :
                  parseFloat(r.comprehensive_score) > 50 ? '⭐⭐⭐⭐' :
                  parseFloat(r.comprehensive_score) > 40 ? '⭐⭐⭐' :
                  parseFloat(r.comprehensive_score) > 30 ? '⭐⭐' : '⭐';

    console.log(
      `${(idx + 1).toString().padStart(4)} | ${r.symbol.padEnd(13)} | ` +
      `${r.comprehensive_score.padStart(8)} | ${r.tech_score.padStart(4)} | ` +
      `${r.sentiment_score.padStart(4)} | ${r.risk_score.padStart(4)} | ` +
      `${r.opportunity_score.padStart(4)} | ${stars}`
    );
  });

  // 详细交易计划
  console.log('\n\n================================================================================');
  console.log('💰 详细交易计划（按推荐优先级）');
  console.log('================================================================================\n');

  results.forEach((r, idx) => {
    const plan = r.trading_plan;
    if (!plan) return;

    console.log(`\n${idx + 1}. ${r.symbol} - 综合评分: ${r.comprehensive_score}/100`);
    console.log('─'.repeat(80));

    console.log(`\n📍 当前价格: $${plan.current_price}`);
    console.log(`📊 关键位置: 支撑 $${plan.key_levels.support} | 压力 $${plan.key_levels.resistance}`);
    console.log(`⚖️  风险收益比: 1:${plan.risk_reward_ratio}`);

    console.log(`\n🎯 入场策略（三选一）:\n`);
    plan.entry_levels.forEach(entry => {
      console.log(`   ${entry.type}: ${entry.price_range}`);
      console.log(`   └─ ${entry.description}`);
      console.log(`   └─ 适合: ${entry.suitable_for}\n`);
    });

    console.log(`🛑 止损价位: $${plan.stop_loss.price} (${plan.stop_loss.percentage})`);
    console.log(`   └─ 理由: ${plan.stop_loss.reason}\n`);

    console.log(`💎 止盈目标:\n`);
    plan.take_profits.forEach(tp => {
      console.log(`   ${tp.level}: $${tp.price} (+${tp.percentage}) - ${tp.action}`);
      console.log(`   └─ ${tp.reason}\n`);
    });

    console.log(`📝 交易建议:`);
    console.log(`   类型: ${r.tech_signal.type}`);
    console.log(`   信心度: ${r.tech_signal.confidence}`);
    console.log(`   追涨: ${r.tech_signal.chase_rally}`);

    if (r.tech_signal.reasons.length > 0) {
      console.log(`\n✅ 看多理由:`);
      r.tech_signal.reasons.forEach(reason => console.log(`   • ${reason}`));
    }

    if (r.tech_signal.risks.length > 0) {
      console.log(`\n⚠️  风险提示:`);
      r.tech_signal.risks.forEach(risk => console.log(`   • ${risk}`));
    }

    if (r.sentiment_data.opportunities.length > 0) {
      console.log(`\n🌟 新闻机会:`);
      r.sentiment_data.opportunities.forEach(opp => console.log(`   • ${opp}`));
    }

    console.log('\n');
  });

  // 生成推荐清单
  console.log('\n================================================================================');
  console.log('🎯 最终推荐清单');
  console.log('================================================================================\n');

  const topPicks = results.filter(r => parseFloat(r.comprehensive_score) > 50);
  const watchList = results.filter(r => parseFloat(r.comprehensive_score) >= 40 && parseFloat(r.comprehensive_score) <= 50);
  const avoidList = results.filter(r => parseFloat(r.comprehensive_score) < 40);

  console.log(`🟢 强烈推荐 (${topPicks.length}只) - 综合评分 > 50\n`);
  topPicks.forEach((r, idx) => {
    const plan = r.trading_plan;
    console.log(`${idx + 1}. ${r.symbol} (${r.comprehensive_score}分)`);
    console.log(`   入场: ${plan.entry_levels[0].price_range} (激进) 或 ${plan.entry_levels[1].price_range} (稳健)`);
    console.log(`   止损: $${plan.stop_loss.price}`);
    console.log(`   目标: $${plan.take_profits[0].price} / $${plan.take_profits[1].price} / $${plan.take_profits[2].price}`);
    console.log(`   风险收益比: 1:${plan.risk_reward_ratio}\n`);
  });

  if (watchList.length > 0) {
    console.log(`🟡 观察名单 (${watchList.length}只) - 综合评分 40-50\n`);
    watchList.forEach((r, idx) => {
      console.log(`${idx + 1}. ${r.symbol} (${r.comprehensive_score}分) - 等待更好入场时机`);
    });
    console.log('');
  }

  if (avoidList.length > 0) {
    console.log(`🔴 暂不推荐 (${avoidList.length}只) - 综合评分 < 40\n`);
    avoidList.forEach((r, idx) => {
      console.log(`${idx + 1}. ${r.symbol} (${r.comprehensive_score}分) - 风险较高或机会不足`);
    });
    console.log('');
  }

  // 保存JSON结果
  const outputFile = `comprehensive_trading_plan_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  writeFileSync(outputFile, JSON.stringify({
    analysis_time: new Date().toISOString(),
    summary: {
      total_stocks: results.length,
      strong_buy: topPicks.length,
      watch: watchList.length,
      avoid: avoidList.length
    },
    rankings: results.map(r => ({
      rank: results.indexOf(r) + 1,
      symbol: r.symbol,
      comprehensive_score: r.comprehensive_score,
      scores: {
        technical: r.tech_score,
        sentiment: r.sentiment_score,
        risk: r.risk_score,
        opportunity: r.opportunity_score
      },
      trading_plan: r.trading_plan,
      recommendation: parseFloat(r.comprehensive_score) > 50 ? 'Strong Buy' :
                     parseFloat(r.comprehensive_score) >= 40 ? 'Watch' : 'Avoid'
    }))
  }, null, 2), 'utf-8');

  console.log(`✅ 详细交易计划已保存到: ${outputFile}\n`);
  console.log('================================================================================');
}

main();
