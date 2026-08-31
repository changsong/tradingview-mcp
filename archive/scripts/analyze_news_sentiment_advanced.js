#!/usr/bin/env node

/**
 * 深度新闻情绪分析与可交易信号识别
 *
 * 任务：
 * 1. 获取高影响力新闻（去噪）
 * 2. 为每条新闻打标签（类型、情绪、权重）
 * 3. 构建情绪指数
 * 4. 识别关键模式（趋势、反转、背离）
 * 5. 输出交易信号（Long/Short/No Trade）
 */

import { searchNews } from './src/core/webNews.js';
import { writeFileSync } from 'fs';

// ================== 新闻分类和权重定义 ==================

const NEWS_CATEGORIES = {
  policy: { name: '政策', weight_factor: 1.3 },
  earnings: { name: '财报', weight_factor: 1.4 },
  merger: { name: '并购', weight_factor: 1.5 },
  industry: { name: '行业', weight_factor: 1.1 },
  blackswan: { name: '黑天鹅', weight_factor: 1.6 },
  rumor: { name: '传闻', weight_factor: 0.8 },
  tech: { name: '技术', weight_factor: 1.0 },
  guidance: { name: '指引', weight_factor: 1.2 },
};

// ================== 新闻分类和情绪识别 ==================

function categorizeNews(item) {
  const text = (item.title + ' ' + (item.snippet || item.content || '')).toLowerCase();

  // 识别新闻类型
  let category = 'tech';

  if (text.includes('财报') || text.includes('earnings') || text.includes('revenue') || text.includes('利润')) {
    category = 'earnings';
  } else if (text.includes('收购') || text.includes('并购') || text.includes('merger') || text.includes('acquisition')) {
    category = 'merger';
  } else if (text.includes('政策') || text.includes('监管') || text.includes('regulation') || text.includes('policy')) {
    category = 'policy';
  } else if (text.includes('行业') || text.includes('市场') || text.includes('industry') || text.includes('market')) {
    category = 'industry';
  } else if (text.includes('传闻') || text.includes('据悉') || text.includes('rumor') || text.includes('allegedly')) {
    category = 'rumor';
  } else if (text.includes('指引') || text.includes('guidance') || text.includes('outlook') || text.includes('forecast')) {
    category = 'guidance';
  } else if (text.includes('突然') || text.includes('意外') || text.includes('黑天鹅') || text.includes('突发')) {
    category = 'blackswan';
  }

  return category;
}

function analyzeSentimentScore(item) {
  const text = (item.title + ' ' + (item.snippet || item.content || '')).toLowerCase();

  // 看涨关键词
  const bullishWords = [
    '涨', '上升', '上升', '买入', '看好', '利好', '积极', '乐观', '突破', '新高',
    'up', 'buy', 'bullish', 'positive', 'strong', 'beat', 'exceed', 'growth', 'gain',
    '上涨', '大涨', '飙升', '暴涨', '做多', '看涨', '抄底', '建仓', '回升', '反弹'
  ];

  // 看跌关键词
  const bearishWords = [
    '跌', '下跌', '卖出', '看空', '利空', '消极', '悲观', '破位', '新低',
    'down', 'sell', 'bearish', 'negative', 'weak', 'miss', 'decline', 'loss', 'fall',
    '下降', '大跌', '暴跌', '砸盘', '做空', '看跌', '套牢', '减仓', '警告', '风险'
  ];

  let bullishCount = 0;
  let bearishCount = 0;

  bullishWords.forEach(word => {
    if (text.includes(word)) bullishCount++;
  });

  bearishWords.forEach(word => {
    if (text.includes(word)) bearishCount++;
  });

  let sentiment = 0;
  if (bullishCount > bearishCount) {
    sentiment = 1; // 看涨
  } else if (bearishCount > bullishCount) {
    sentiment = -1; // 看跌
  } else {
    sentiment = 0; // 中性
  }

  return { sentiment, bullishCount, bearishCount };
}

// ================== 新闻去噪和质量评分 ==================

function scoreNewsQuality(item, category) {
  let score = 50; // 基础分

  // 1. 信息来源权重
  const source = (item.source || '').toLowerCase();
  if (source.includes('东方财富') || source.includes('新华网') || source.includes('证券')) {
    score += 15;
  } else if (source.includes('同花顺') || source.includes('新浪')) {
    score += 10;
  } else if (source.includes('股吧') || source.includes('论坛')) {
    score += 5;
  }

  // 2. 新闻长度（太短或太长都不好）
  const text = item.title + (item.snippet || item.content || '');
  if (text.length >= 20 && text.length <= 200) {
    score += 10;
  }

  // 3. 交互热度（论坛贴子）
  if (item.replies && item.replies > 10) {
    score += 10;
  }
  if (item.views && item.views > 100) {
    score += 10;
  }

  // 4. 关键词完整性
  const { bullishCount, bearishCount } = analyzeSentimentScore(item);
  if (bullishCount + bearishCount >= 2) {
    score += 5;
  }

  // 5. 类型权重
  const catInfo = NEWS_CATEGORIES[category];
  if (catInfo && catInfo.weight_factor > 1.2) {
    score += (catInfo.weight_factor - 1) * 10;
  }

  return Math.min(100, score);
}

// ================== 构建情绪指数 ==================

function buildSentimentIndex(allNews) {
  const taggedNews = allNews.map(item => {
    const category = categorizeNews(item);
    const { sentiment, bullishCount, bearishCount } = analyzeSentimentScore(item);
    const qualityScore = scoreNewsQuality(item, category);

    // 跳过低质量新闻
    if (qualityScore < 30) {
      return null;
    }

    const catInfo = NEWS_CATEGORIES[category];
    const weightFactor = catInfo.weight_factor;

    // 影响权重：基于质量分数和类型权重
    const impactWeight = Math.round((qualityScore / 50) * weightFactor * 5);

    return {
      title: item.title,
      source: item.source,
      date: item.date,
      category,
      sentiment, // -1: 看跌, 0: 中性, 1: 看涨
      sentiment_strength: Math.max(bullishCount, bearishCount),
      impact_weight: Math.min(5, Math.max(1, impactWeight)),
      quality_score: qualityScore,
      type: item.type,
      url: item.url,
    };
  }).filter(item => item !== null);

  // 计算情绪指数
  let sentimentScore = 0;
  let totalWeight = 0;

  taggedNews.forEach(item => {
    const weighted = item.sentiment * item.impact_weight;
    sentimentScore += weighted;
    totalWeight += item.impact_weight;
  });

  const normalizedScore = totalWeight > 0 ? (sentimentScore / totalWeight) : 0;

  // 统计情绪分布
  const bullishNews = taggedNews.filter(n => n.sentiment === 1);
  const bearishNews = taggedNews.filter(n => n.sentiment === -1);
  const neutralNews = taggedNews.filter(n => n.sentiment === 0);

  return {
    tagged_news: taggedNews,
    sentiment_index: {
      score: parseFloat(normalizedScore.toFixed(3)), // -1 ~ 1
      bullish_count: bullishNews.length,
      bearish_count: bearishNews.length,
      neutral_count: neutralNews.length,
      bullish_ratio: ((bullishNews.length / taggedNews.length) * 100).toFixed(1) + '%',
      bearish_ratio: ((bearishNews.length / taggedNews.length) * 100).toFixed(1) + '%',
      neutral_ratio: ((neutralNews.length / taggedNews.length) * 100).toFixed(1) + '%',
    },
    total_weight: totalWeight,
    effective_news_count: taggedNews.length,
  };
}

// ================== 识别关键模式 ==================

function identifyPatterns(sentimentIndex, historyData = null) {
  const { sentiment_index: si, tagged_news: news } = sentimentIndex;
  const patterns = [];
  const signals = [];

  // 1. 情绪趋势分析
  if (si.bullish_count > si.bearish_count * 1.5) {
    patterns.push({
      name: '情绪持续增强',
      type: 'trend',
      description: '看涨观点明显多于看跌观点，市场情绪向好',
      strength: 'strong',
      bullish_bias: true
    });
    signals.push('bullish_bias');
  } else if (si.bearish_count > si.bullish_count * 1.5) {
    patterns.push({
      name: '情绪持续减弱',
      type: 'trend',
      description: '看跌观点明显多于看涨观点，市场情绪向差',
      strength: 'strong',
      bearish_bias: true
    });
    signals.push('bearish_bias');
  }

  // 2. 高权重新闻检查
  const highWeightNews = news.filter(n => n.impact_weight >= 4);
  if (highWeightNews.length > 0) {
    const highWeightSentiment = highWeightNews.reduce((sum, n) => sum + n.sentiment, 0);
    if (highWeightSentiment > 0) {
      patterns.push({
        name: '关键利好消息',
        type: 'catalyst',
        description: `发现 ${highWeightNews.length} 条高权重看涨新闻，可能成为股价上行催化剂`,
        strength: 'strong',
        catalyst_type: 'bullish'
      });
      signals.push('positive_catalyst');
    } else if (highWeightSentiment < 0) {
      patterns.push({
        name: '关键利空消息',
        type: 'catalyst',
        description: `发现 ${highWeightNews.length} 条高权重看跌新闻，可能成为股价下行压力`,
        strength: 'strong',
        catalyst_type: 'bearish'
      });
      signals.push('negative_catalyst');
    }
  }

  // 3. 新闻类型分析
  const policyNews = news.filter(n => n.category === 'policy');
  const earningsNews = news.filter(n => n.category === 'earnings');
  const mergerNews = news.filter(n => n.category === 'merger');
  const industryNews = news.filter(n => n.category === 'industry');

  if (earningsNews.length > 0) {
    const earningsSentiment = earningsNews.reduce((sum, n) => sum + n.sentiment, 0);
    if (earningsSentiment > 0) {
      patterns.push({
        name: '财报利好',
        type: 'earnings',
        description: `最近财报为正面信号，盈利能力得到确认`,
        strength: 'very_strong'
      });
      signals.push('earnings_positive');
    }
  }

  if (mergerNews.length > 0) {
    patterns.push({
      name: '并购重组',
      type: 'event',
      description: `出现并购相关新闻，可能带来重大变化`,
      strength: 'very_strong'
    });
    signals.push('merger_event');
  }

  // 4. 情绪反转检查
  const recentNews = news.slice(0, Math.ceil(news.length / 3)); // 最近 1/3 的新闻
  if (recentNews.length >= 2) {
    const recentSentiment = recentNews.reduce((sum, n) => sum + n.sentiment, 0) / recentNews.length;
    const olderNews = news.slice(Math.ceil(news.length / 3)); // 较早的新闻
    const olderSentiment = olderNews.length > 0 ?
      (olderNews.reduce((sum, n) => sum + n.sentiment, 0) / olderNews.length) : 0;

    if (recentSentiment > olderSentiment && Math.abs(recentSentiment - olderSentiment) > 0.3) {
      patterns.push({
        name: '情绪反转（正向）',
        type: 'reversal',
        description: '最近新闻情绪相比之前明显向好，可能预示股价反弹',
        strength: 'strong'
      });
      signals.push('sentiment_reversal_up');
    } else if (recentSentiment < olderSentiment && Math.abs(recentSentiment - olderSentiment) > 0.3) {
      patterns.push({
        name: '情绪反转（负向）',
        type: 'reversal',
        description: '最近新闻情绪相比之前明显向差，可能预示股价调整',
        strength: 'strong'
      });
      signals.push('sentiment_reversal_down');
    }
  }

  // 5. 情绪过热检查（重点风险）
  if (si.bullish_count === news.length && si.bullish_count > 5) {
    patterns.push({
      name: '情绪过热（所有看涨）',
      type: 'risk',
      description: '所有新闻都是看涨信号，存在情绪过热风险，可能是提前炒作',
      strength: 'strong',
      risk_level: 'high'
    });
    signals.push('overheated_bullish');
  }

  if (si.bearish_count === news.length && si.bearish_count > 5) {
    patterns.push({
      name: '情绪过冷（所有看跌）',
      type: 'risk',
      description: '所有新闻都是看跌信号，存在情绪极度悲观风险',
      strength: 'strong',
      risk_level: 'high'
    });
    signals.push('overheated_bearish');
  }

  // 6. 传闻和实质新闻比例
  const rumorNews = news.filter(n => n.category === 'rumor');
  const solidNews = news.filter(n => n.category !== 'rumor');
  if (rumorNews.length > 0 && solidNews.length === 0) {
    patterns.push({
      name: '缺乏实质支撑',
      type: 'risk',
      description: '新闻主要基于传闻，缺乏实质性好消息支撑，可能是假利好',
      strength: 'strong',
      risk_level: 'medium'
    });
    signals.push('lack_of_substance');
  }

  return {
    patterns,
    signals,
    signal_count: signals.length,
  };
}

// ================== 生成交易信号 ==================

function generateTradingSignal(sentimentIndex, patterns, symbol) {
  const { sentiment_index: si } = sentimentIndex;
  const score = si.score;
  const { signals, patterns: patternList } = patterns;

  let signal = 'NO_TRADE';
  let confidence = 0;
  let reason = '';
  let tradingStyle = '';
  let risks = [];
  let opportunities = [];

  // 基础信号：基于情绪指数
  if (score > 0.4) {
    // 看涨信号
    signal = 'LONG';
    confidence = Math.min(95, 50 + Math.abs(score) * 50);
    reason = `情绪指数 ${score.toFixed(3)} > 0.4，市场看涨情绪明显`;

    // 检查是否适合追涨
    if (signals.includes('positive_catalyst') || signals.includes('earnings_positive')) {
      tradingStyle = '追涨';
      reason += '，存在正面催化剂';
    } else if (signals.includes('sentiment_reversal_up')) {
      tradingStyle = '反转做多';
      reason += '，情绪出现反转向好';
    } else {
      tradingStyle = '低吸或持有';
      reason += '，逐步建仓';
    }

    // 检查风险
    if (signals.includes('overheated_bullish')) {
      risks.push('情绪过热风险：所有看涨新闻可能预示已提前炒作');
      confidence -= 15;
      tradingStyle = '谨慎参与或轻仓追涨';
    }

    if (signals.includes('lack_of_substance')) {
      risks.push('利好支撑不足：主要基于传闻，缺乏实质新闻');
      confidence -= 10;
    }

  } else if (score < -0.4) {
    // 看跌信号
    signal = 'SHORT';
    confidence = Math.min(95, 50 + Math.abs(score) * 50);
    reason = `情绪指数 ${score.toFixed(3)} < -0.4，市场看跌情绪明显`;

    // 检查是否适合反向操作
    if (signals.includes('sentiment_reversal_down')) {
      tradingStyle = '反转做空';
      reason += '，情绪出现反转向差';
    } else if (signals.includes('negative_catalyst')) {
      tradingStyle = '追跌';
      reason += '，存在负面催化剂压力';
    } else {
      tradingStyle = '高卖或减仓';
      reason += '，逐步减持';
    }

    // 检查风险
    if (signals.includes('overheated_bearish')) {
      risks.push('情绪过冷风险：极度悲观可能预示底部信号');
      confidence -= 15;
      tradingStyle = '谨慎做空或反向思考低吸机会';
    }

  } else {
    // 中性信号
    signal = 'NO_TRADE';
    confidence = 40;
    reason = `情绪指数 ${score.toFixed(3)} 在 [-0.4, 0.4] 中性区间，多空力量均衡`;
    tradingStyle = '观望或小额试探';
  }

  // 机会点识别
  if (signals.includes('merger_event')) {
    opportunities.push('并购重组事件可能带来重大上行或整合机会');
  }

  if (si.bullish_count > 0 && si.bearish_count > 0) {
    opportunities.push('存在多空分歧，可能是低位建仓机会');
  }

  if (signals.includes('sentiment_reversal_up')) {
    opportunities.push('从悲观到乐观的情绪反转，可能预示趋势扭转');
  }

  // 最近5天重要新闻
  const recentImportant = sentimentIndex.tagged_news
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 5)
    .map(news => ({
      title: news.title,
      date: news.date,
      category: news.category,
      sentiment: news.sentiment === 1 ? '看涨' : news.sentiment === -1 ? '看跌' : '中性',
      weight: news.impact_weight,
      source: news.source,
    }));

  return {
    symbol,
    signal,
    confidence: Math.round(confidence),
    reason,
    trading_style: tradingStyle,
    risks,
    opportunities,
    recent_important_news: recentImportant,
    sentiment_score: score,
    sentiment_distribution: {
      bullish_ratio: si.bullish_ratio,
      bearish_ratio: si.bearish_ratio,
      neutral_ratio: si.neutral_ratio,
      total_effective_news: sentimentIndex.effective_news_count,
    },
  };
}

// ================== 主分析函数 ==================

async function analyzeStocks() {
  console.log('📊 开始深度新闻情绪分析和交易信号识别...\n');

  const symbols = ['NASDAQ:BGC', 'NASDAQ:AEIS'];
  const results = {
    analysis_time: new Date().toISOString(),
    stocks: []
  };

  for (const symbol of symbols) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`📰 分析 ${symbol} 新闻情绪和交易信号`);
    console.log('='.repeat(80));

    try {
      // 1. 获取新闻
      console.log(`\n1️⃣  获取 ${symbol} 的新闻信息...`);
      const newsResult = await searchNews({
        symbol,
        count: 20, // 获取 20 条新闻
        source: 'all'
      });

      if (!newsResult.success || !newsResult.news && !newsResult.forum && !newsResult.research) {
        console.log(`⚠️  ${symbol} 新闻获取失败或数据不足`);
        continue;
      }

      // 合并所有新闻
      const allNews = [...newsResult.news, ...newsResult.research, ...newsResult.forum];
      console.log(`✅ 成功获取 ${allNews.length} 条新闻`);

      // 2. 新闻去噪和分类
      console.log(`\n2️⃣  新闻分类和去噪...`);
      const sentimentIndex = buildSentimentIndex(allNews);
      console.log(`✅ 经过去噪后保留 ${sentimentIndex.effective_news_count} 条高质量新闻`);

      // 3. 识别关键模式
      console.log(`\n3️⃣  识别市场情绪模式...`);
      const patterns = identifyPatterns(sentimentIndex);
      console.log(`✅ 识别到 ${patterns.patterns.length} 个关键模式`);

      // 4. 生成交易信号
      console.log(`\n4️⃣  生成交易信号...`);
      const tradingSignal = generateTradingSignal(sentimentIndex, patterns, symbol);

      // 输出分析结果
      console.log(`\n${'█'.repeat(80)}`);
      console.log(`📊 ${symbol} 分析结果`);
      console.log('█'.repeat(80));

      console.log(`\n📈 情绪指数: ${sentimentIndex.sentiment_index.score.toFixed(3)}`);
      console.log(`   看涨占比: ${sentimentIndex.sentiment_index.bullish_ratio}`);
      console.log(`   看跌占比: ${sentimentIndex.sentiment_index.bearish_ratio}`);
      console.log(`   中性占比: ${sentimentIndex.sentiment_index.neutral_ratio}`);

      console.log(`\n🎯 交易信号: ${tradingSignal.signal}`);
      console.log(`   置信度: ${tradingSignal.confidence}%`);
      console.log(`   交易风格: ${tradingSignal.trading_style}`);
      console.log(`   触发原因: ${tradingSignal.reason}`);

      if (tradingSignal.opportunities.length > 0) {
        console.log(`\n✨ 机会点:`);
        tradingSignal.opportunities.forEach((opp, idx) => {
          console.log(`   ${idx + 1}. ${opp}`);
        });
      }

      if (tradingSignal.risks.length > 0) {
        console.log(`\n⚠️  风险点:`);
        tradingSignal.risks.forEach((risk, idx) => {
          console.log(`   ${idx + 1}. ${risk}`);
        });
      }

      console.log(`\n📋 最近 5 天重要新闻:`);
      tradingSignal.recent_important_news.forEach((news, idx) => {
        const sentimentEmoji = news.sentiment === '看涨' ? '📈' : news.sentiment === '看跌' ? '📉' : '➡️';
        const weightBar = '█'.repeat(news.weight) + '░'.repeat(5 - news.weight);
        console.log(`   ${idx + 1}. [${news.category}] ${sentimentEmoji} ${news.title}`);
        console.log(`      日期: ${news.date} | 权重: ${weightBar} (${news.weight}/5) | 来源: ${news.source}`);
      });

      if (patterns.patterns.length > 0) {
        console.log(`\n🔍 关键模式:`);
        patterns.patterns.forEach((pattern, idx) => {
          const strengthEmoji = {
            very_strong: '🔴',
            strong: '🟠',
            medium: '🟡',
            weak: '🟢'
          }[pattern.strength] || '◆';
          console.log(`   ${idx + 1}. ${strengthEmoji} ${pattern.name}`);
          console.log(`      ${pattern.description}`);
        });
      }

      results.stocks.push({
        symbol,
        sentiment_analysis: sentimentIndex,
        patterns,
        trading_signal: tradingSignal,
      });

    } catch (error) {
      console.error(`❌ 分析 ${symbol} 时出错: ${error.message}`);
    }

    // 避免请求过于频繁
    if (symbols.indexOf(symbol) < symbols.length - 1) {
      console.log('\n⏳ 等待 2 秒后分析下一个股票...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // 保存完整结果
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputFile = `stock_news_sentiment_analysis_${timestamp}.json`;
  writeFileSync(outputFile, JSON.stringify(results, null, 2));

  // 生成摘要报告
  console.log(`\n\n${'='.repeat(80)}`);
  console.log('📊 分析汇总报告');
  console.log('='.repeat(80));

  results.stocks.forEach(stock => {
    const ts = stock.trading_signal;
    console.log(`\n${stock.symbol}`);
    console.log(`  信号: ${ts.signal} (置信度 ${ts.confidence}%)`);
    console.log(`  情绪指数: ${ts.sentiment_score.toFixed(3)}`);
    console.log(`  推荐操作: ${ts.trading_style}`);
  });

  console.log(`\n\n✅ 完整分析结果已保存到: ${outputFile}\n`);

  return results;
}

// 运行分析
analyzeStocks().catch(console.error);
