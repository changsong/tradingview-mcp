#!/usr/bin/env node

/**
 * 深度新闻情绪分析与可交易信号识别 - 美股版本
 * 使用 usNews.js 获取美股新闻（Reddit, StockTwits, Seeking Alpha, Bogleheads）
 *
 * 任务：
 * 1. 获取高影响力新闻（去噪）
 * 2. 为每条新闻打标签（类型、情绪、权重）
 * 3. 构建情绪指数
 * 4. 识别关键模式（趋势、反转、背离）
 * 5. 输出交易信号（Long/Short/No Trade）
 * 6. 识别提前炒作、情绪过热、假利好
 */

import { searchUSNews } from './src/core/usNews.js';
import { writeFileSync } from 'fs';

// ================== 新闻分类和权重定义 ==================

const NEWS_CATEGORIES = {
  policy: { name: 'Policy', weight_factor: 1.3 },
  earnings: { name: 'Earnings', weight_factor: 1.4 },
  merger: { name: 'M&A', weight_factor: 1.5 },
  industry: { name: 'Industry', weight_factor: 1.1 },
  blackswan: { name: 'Black Swan', weight_factor: 1.6 },
  rumor: { name: 'Rumor', weight_factor: 0.7 },
  tech: { name: 'Technology', weight_factor: 1.0 },
  guidance: { name: 'Guidance', weight_factor: 1.2 },
  product: { name: 'Product', weight_factor: 1.1 },
};

// ================== 新闻分类函数 ==================

function categorizeNews(item) {
  const text = (item.title + ' ' + (item.content || '')).toLowerCase();

  // 识别新闻类型
  let category = 'tech';

  if (text.includes('earnings') || text.includes('q1') || text.includes('q2') ||
      text.includes('q3') || text.includes('q4') || text.includes('revenue') ||
      text.includes('profit') || text.includes('eps')) {
    category = 'earnings';
  } else if (text.includes('acquisition') || text.includes('merger') ||
             text.includes('acquire') || text.includes('merged')) {
    category = 'merger';
  } else if (text.includes('sec') || text.includes('regulation') ||
             text.includes('policy') || text.includes('lawsuit')) {
    category = 'policy';
  } else if (text.includes('industry') || text.includes('market') ||
             text.includes('sector') || text.includes('competitor')) {
    category = 'industry';
  } else if (text.includes('rumor') || text.includes('allegedly') ||
             text.includes('reportedly') || text.includes('sources say')) {
    category = 'rumor';
  } else if (text.includes('guidance') || text.includes('outlook') ||
             text.includes('forecast') || text.includes('expect')) {
    category = 'guidance';
  } else if (text.includes('crash') || text.includes('sudden') ||
             text.includes('unexpected') || text.includes('shocked')) {
    category = 'blackswan';
  } else if (text.includes('product') || text.includes('launch') ||
             text.includes('release') || text.includes('update')) {
    category = 'product';
  }

  return category;
}

function analyzeSentimentScore(item) {
  const text = (item.title + ' ' + (item.content || '')).toLowerCase();

  // 看涨关键词
  const bullishWords = [
    'moon', 'rocket', 'bullish', 'buy', 'long', 'calls', 'bull', 'pump', 'rally',
    'breakout', 'surge', 'soar', 'gain', 'profit', 'uptrend', 'strong', 'beat',
    'upgrade', 'outperform', 'accumulate', 'diamond hands', 'to the moon',
    'up', 'rise', 'growth', 'boost', 'positive', 'excellent', 'beat earnings',
    'surprise', 'excellent guidance', 'new high', 'strong demand'
  ];

  // 看跌关键词
  const bearishWords = [
    'crash', 'dump', 'bearish', 'sell', 'short', 'puts', 'bear', 'tank', 'plunge',
    'drop', 'fall', 'loss', 'downtrend', 'weak', 'miss', 'downgrade', 'underperform',
    'reduce', 'exit', 'paper hands', 'rug pull', 'bag holder', 'rekt',
    'down', 'decline', 'fall', 'negative', 'terrible', 'miss earnings',
    'warning', 'concern', 'risk', 'lawsuit', 'investigation'
  ];

  let bullishCount = 0;
  let bearishCount = 0;

  bullishWords.forEach(word => {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    const matches = text.match(regex);
    if (matches) bullishCount += matches.length;
  });

  bearishWords.forEach(word => {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    const matches = text.match(regex);
    if (matches) bearishCount += matches.length;
  });

  let sentiment = 0;
  if (bullishCount > bearishCount) {
    sentiment = 1; // Bullish
  } else if (bearishCount > bullishCount) {
    sentiment = -1; // Bearish
  } else {
    sentiment = 0; // Neutral
  }

  return { sentiment, bullishCount, bearishCount };
}

// ================== 新闻质量评分 ==================

function scoreNewsQuality(item, category) {
  let score = 50; // 基础分

  // 1. 信息来源权重
  const source = (item.source || '').toLowerCase();
  if (source.includes('seeking alpha')) {
    score += 20; // Professional news
  } else if (source.includes('stocktwits')) {
    score += 10; // Social media platform
  } else if (source.includes('reddit') || source.includes('bogleheads')) {
    score += 8; // Community forum
  }

  // 2. 新闻长度和质量
  const text = item.title + (item.content || '');
  if (text.length >= 30 && text.length <= 500) {
    score += 10;
  }

  // 3. 交互热度（社交媒体）
  if (item.likes || item.upvotes) {
    const engagement = (item.likes || item.upvotes) || 0;
    if (engagement > 50) score += 15;
    else if (engagement > 20) score += 10;
    else if (engagement > 5) score += 5;
  }

  if (item.comments || item.replies) {
    const comments = (item.comments || item.replies) || 0;
    if (comments > 20) score += 15;
    else if (comments > 10) score += 10;
    else if (comments > 5) score += 5;
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

    // 跳过极低质量新闻
    if (qualityScore < 25) {
      return null;
    }

    const catInfo = NEWS_CATEGORIES[category];
    const weightFactor = catInfo.weight_factor;

    // 影响权重：基于质量分数和类型权重
    const impactWeight = Math.round((qualityScore / 50) * weightFactor * 5);

    return {
      title: item.title?.substring(0, 100) || 'No title',
      source: item.source || 'Unknown',
      date: item.date || new Date().toISOString().split('T')[0],
      category,
      sentiment, // -1: 看跌, 0: 中性, 1: 看涨
      sentiment_strength: Math.max(bullishCount, bearishCount),
      impact_weight: Math.min(5, Math.max(1, impactWeight)),
      quality_score: qualityScore,
      type: item.type || 'unknown',
      engagement: (item.upvotes || item.likes || 0) + (item.comments || item.replies || 0),
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
      bullish_ratio: taggedNews.length > 0 ? ((bullishNews.length / taggedNews.length) * 100).toFixed(1) + '%' : '0%',
      bearish_ratio: taggedNews.length > 0 ? ((bearishNews.length / taggedNews.length) * 100).toFixed(1) + '%' : '0%',
      neutral_ratio: taggedNews.length > 0 ? ((neutralNews.length / taggedNews.length) * 100).toFixed(1) + '%' : '0%',
    },
    total_weight: totalWeight,
    effective_news_count: taggedNews.length,
  };
}

// ================== 识别关键模式 ==================

function identifyPatterns(sentimentIndex) {
  const { sentiment_index: si, tagged_news: news } = sentimentIndex;
  const patterns = [];
  const signals = [];
  const risks = [];

  // 1. 情绪趋势分析
  if (si.bullish_count > si.bearish_count * 1.5 && si.bullish_count >= 2) {
    patterns.push({
      name: 'Sentiment Momentum (Up)',
      type: 'trend',
      description: `Bullish posts outnumber bearish by ${(si.bullish_count / (si.bearish_count || 1)).toFixed(1)}x`,
      strength: 'strong',
    });
    signals.push('bullish_momentum');
  } else if (si.bearish_count > si.bullish_count * 1.5 && si.bearish_count >= 2) {
    patterns.push({
      name: 'Sentiment Momentum (Down)',
      type: 'trend',
      description: `Bearish posts outnumber bullish by ${(si.bearish_count / (si.bullish_count || 1)).toFixed(1)}x`,
      strength: 'strong',
    });
    signals.push('bearish_momentum');
  }

  // 2. 高权重新闻（关键催化剂）
  const highWeightNews = news.filter(n => n.impact_weight >= 4);
  if (highWeightNews.length > 0) {
    const highWeightSentiment = highWeightNews.reduce((sum, n) => sum + n.sentiment, 0);
    if (highWeightSentiment > 0) {
      patterns.push({
        name: 'Key Bullish Catalyst',
        type: 'catalyst',
        description: `${highWeightNews.length} high-impact positive news items detected`,
        strength: 'very_strong',
      });
      signals.push('bullish_catalyst');
    } else if (highWeightSentiment < 0) {
      patterns.push({
        name: 'Key Bearish Catalyst',
        type: 'catalyst',
        description: `${highWeightNews.length} high-impact negative news items detected`,
        strength: 'very_strong',
      });
      signals.push('bearish_catalyst');
    }
  }

  // 3. 新闻类型分析
  const earningsNews = news.filter(n => n.category === 'earnings');
  const mergerNews = news.filter(n => n.category === 'merger');
  const policyNews = news.filter(n => n.category === 'policy');

  if (earningsNews.length > 0) {
    const earningsSentiment = earningsNews.reduce((sum, n) => sum + n.sentiment, 0);
    if (earningsSentiment > 0) {
      patterns.push({
        name: 'Positive Earnings',
        type: 'event',
        description: 'Recent earnings beat or positive guidance',
        strength: 'very_strong',
      });
      signals.push('earnings_beat');
    } else if (earningsSentiment < 0) {
      patterns.push({
        name: 'Negative Earnings',
        type: 'event',
        description: 'Recent earnings miss or negative guidance',
        strength: 'very_strong',
      });
      signals.push('earnings_miss');
    }
  }

  if (mergerNews.length > 0) {
    patterns.push({
      name: 'M&A Activity',
      type: 'event',
      description: 'Acquisition or merger related news detected',
      strength: 'very_strong',
    });
    signals.push('merger_event');
  }

  if (policyNews.length > 0) {
    const policySentiment = policyNews.reduce((sum, n) => sum + n.sentiment, 0);
    if (policySentiment < 0) {
      patterns.push({
        name: 'Regulatory Headwind',
        type: 'event',
        description: 'Negative regulatory or legal news',
        strength: 'strong',
      });
      signals.push('regulatory_risk');
    }
  }

  // 4. 情绪反转检查
  const recentNews = news.slice(0, Math.ceil(news.length / 3)); // 最近 1/3 的新闻
  if (recentNews.length >= 2 && news.length >= 4) {
    const recentSentiment = recentNews.reduce((sum, n) => sum + n.sentiment, 0) / recentNews.length;
    const olderNews = news.slice(Math.ceil(news.length / 3));
    const olderSentiment = olderNews.length > 0 ?
      (olderNews.reduce((sum, n) => sum + n.sentiment, 0) / olderNews.length) : 0;

    if (recentSentiment > olderSentiment + 0.3) {
      patterns.push({
        name: 'Bullish Reversal',
        type: 'reversal',
        description: 'Recent sentiment improving from previous period',
        strength: 'strong',
      });
      signals.push('sentiment_reversal_up');
    } else if (recentSentiment < olderSentiment - 0.3) {
      patterns.push({
        name: 'Bearish Reversal',
        type: 'reversal',
        description: 'Recent sentiment declining from previous period',
        strength: 'strong',
      });
      signals.push('sentiment_reversal_down');
    }
  }

  // ========== 重点：识别风险 ==========

  // 5. 情绪过热检查 - CRITICAL
  if (si.bullish_count > 0 && si.bullish_count === news.length && si.bullish_count >= 4) {
    patterns.push({
      name: '⚠️ OVERHEATED BULLISH SENTIMENT',
      type: 'risk',
      description: 'ALL news is bullish - high risk of overheating and pullback. Early hype likely.',
      strength: 'critical',
      risk_level: 'CRITICAL',
    });
    signals.push('overheated_bullish');
    risks.push('Sentiment consensus too strong - risk of reversal or profit-taking');
  }

  if (si.bearish_count > 0 && si.bearish_count === news.length && si.bearish_count >= 4) {
    patterns.push({
      name: '⚠️ OVERHEATED BEARISH SENTIMENT',
      type: 'risk',
      description: 'ALL news is bearish - extreme pessimism may signal bottom or oversold bounce.',
      strength: 'critical',
      risk_level: 'CRITICAL',
    });
    signals.push('overheated_bearish');
    risks.push('Extreme pessimism - potential washout and bounce opportunity');
  }

  // 6. 传闻与实质新闻比例 - 假利好检查
  const rumorNews = news.filter(n => n.category === 'rumor');
  const solidNews = news.filter(n => n.category !== 'rumor');

  if (rumorNews.length > 0 && solidNews.length === 0) {
    patterns.push({
      name: '❌ LACK OF SUBSTANCE',
      type: 'risk',
      description: 'All positive sentiment based on rumors - likely FAKE BULLISH signal',
      strength: 'critical',
      risk_level: 'HIGH',
    });
    signals.push('fake_bullish');
    risks.push('Rumors without official confirmation - high risk of FALSE SIGNAL');
  }

  if (rumorNews.length > 0 && (rumorNews.length / news.length) > 0.5 && si.score > 0.3) {
    patterns.push({
      name: '⚠️ RUMOR-DRIVEN RALLY',
      type: 'risk',
      description: 'More than 50% of bullish sentiment from rumors, not confirmed news',
      strength: 'strong',
      risk_level: 'MEDIUM-HIGH',
    });
    signals.push('rumor_driven');
    risks.push('Bull case depends heavily on unconfirmed rumors - validate with official news');
  }

  // 7. 潮涌退去时的基本面 - 检查是否有实质利好支撑
  const fundamentalNews = news.filter(n =>
    ['earnings', 'guidance', 'product'].includes(n.category)
  );

  if (fundamentalNews.length === 0 && si.score > 0.3) {
    patterns.push({
      name: '⚠️ NO FUNDAMENTAL SUPPORT',
      type: 'risk',
      description: 'Bullish sentiment but no earnings, guidance, or product news - risky',
      strength: 'strong',
      risk_level: 'MEDIUM',
    });
    signals.push('no_fundamentals');
    risks.push('Bullish sentiment lacks fundamental backing - vulnerable to reversal');
  }

  // 8. 高参与度但低质量内容
  const lowQualityHighEngagement = news.filter(n =>
    n.quality_score < 50 && n.engagement > 50
  );

  if (lowQualityHighEngagement.length > news.length / 2) {
    patterns.push({
      name: '⚠️ RETAIL HYPE SIGNAL',
      type: 'risk',
      description: 'High engagement on low-quality posts - retail FOMO or pump-and-dump risk',
      strength: 'strong',
      risk_level: 'MEDIUM',
    });
    signals.push('retail_hype');
    risks.push('High engagement on low-quality posts suggests retail FOMO - dangerous');
  }

  return {
    patterns,
    signals,
    risks,
    signal_count: signals.length,
  };
}

// ================== 生成交易信号 ==================

function generateTradingSignal(sentimentIndex, patterns, symbol) {
  const { sentiment_index: si } = sentimentIndex;
  const score = si.score;
  const { signals, patterns: patternList, risks: riskList } = patterns;

  let signal = 'NO_TRADE';
  let confidence = 0;
  let reason = '';
  let tradingStyle = '';
  let risks = [...riskList];
  let opportunities = [];
  let hypeScore = 0; // 0-100，衡量是否为提前炒作

  // 计算提前炒作风险分数
  if (signals.includes('overheated_bullish')) hypeScore += 40;
  if (signals.includes('fake_bullish')) hypeScore += 35;
  if (signals.includes('rumor_driven')) hypeScore += 25;
  if (signals.includes('no_fundamentals')) hypeScore += 20;
  if (signals.includes('retail_hype')) hypeScore += 25;
  if (si.bullish_count === sentimentIndex.tagged_news.length && si.bullish_count > 5) hypeScore += 15;

  // 基础信号：基于情绪指数
  if (score > 0.4) {
    // 看涨信号
    signal = 'LONG';
    confidence = Math.min(95, 50 + Math.abs(score) * 50);
    reason = `Sentiment index ${score.toFixed(3)} > 0.4, bullish consensus`;

    // 检查是否适合追涨
    if (signals.includes('bullish_catalyst') || signals.includes('earnings_beat')) {
      tradingStyle = 'Chase Strength';
      reason += ', positive catalyst detected';
    } else if (signals.includes('sentiment_reversal_up')) {
      tradingStyle = 'Reversal Buy';
      reason += ', sentiment showing positive reversal';
    } else {
      tradingStyle = 'Buy Dips / Accumulate';
      reason += ', steady bullish build-up';
    }

    // 检查风险
    if (signals.includes('overheated_bullish')) {
      risks.push('CRITICAL: Sentiment consensus 100% - high reversal risk');
      confidence -= 25;
      tradingStyle = 'AVOID or light position on strength';
    }

    if (signals.includes('fake_bullish')) {
      risks.push('CRITICAL: Bullish case entirely based on rumors');
      confidence -= 30;
      tradingStyle = 'WAIT for official confirmation';
    }

    if (signals.includes('rumor_driven')) {
      risks.push('Risk: >50% sentiment from rumors, not confirmed');
      confidence -= 15;
      tradingStyle = 'Wait for confirmation or light position';
    }

    if (signals.includes('no_fundamentals')) {
      risks.push('Warning: No fundamental news support');
      confidence -= 10;
    }

    if (hypeScore > 50) {
      reason += ` [HYPE SCORE: ${hypeScore}% - HIGH EARLY HYPE RISK]`;
      tradingStyle = 'CAUTION: Wait for pullback to enter';
    }

  } else if (score < -0.4) {
    // 看跌信号
    signal = 'SHORT';
    confidence = Math.min(95, 50 + Math.abs(score) * 50);
    reason = `Sentiment index ${score.toFixed(3)} < -0.4, bearish consensus`;

    // 检查是否适合反向操作
    if (signals.includes('sentiment_reversal_down')) {
      tradingStyle = 'Reversal Short';
      reason += ', sentiment turning negative';
    } else if (signals.includes('bearish_catalyst')) {
      tradingStyle = 'Chase Weakness';
      reason += ', negative catalyst pressure';
    } else {
      tradingStyle = 'Short or Exit Long';
      reason += ', steady bearish build-up';
    }

    // 检查风险
    if (signals.includes('overheated_bearish')) {
      risks.push('Extreme pessimism - potential bottom signal or bounce risk');
      confidence -= 15;
      tradingStyle = 'Caution: Watch for reversal';
    }

  } else {
    // 中性信号
    signal = 'NO_TRADE';
    confidence = 40;
    reason = `Sentiment index ${score.toFixed(3)} neutral [-0.4 to 0.4], balanced forces`;
    tradingStyle = 'WATCH or Small Position';

    // 检查是否有机会建立立场
    if (signals.includes('sentiment_reversal_up') && si.bullish_count > si.bearish_count) {
      signal = 'LONG';
      confidence = 55;
      tradingStyle = 'Early Reversal Entry';
      reason += ' - early bullish reversal forming';
    } else if (signals.includes('sentiment_reversal_down') && si.bearish_count > si.bullish_count) {
      signal = 'SHORT';
      confidence = 55;
      tradingStyle = 'Early Reversal Entry';
      reason += ' - early bearish reversal forming';
    }
  }

  // 机会点识别
  if (signals.includes('merger_event')) {
    opportunities.push('M&A event could drive significant move in either direction');
  }

  if (signals.includes('earnings_beat')) {
    opportunities.push('Earnings beat confirms quality - upside momentum potential');
  }

  if (si.bullish_count > 0 && si.bearish_count > 0 && si.neutral_count > 0) {
    opportunities.push('Balanced sentiment offers room for resolution in either direction');
  }

  if (signals.includes('sentiment_reversal_up')) {
    opportunities.push('Sentiment turning from negative to positive - early reversal trade');
  }

  if (signals.includes('overheated_bearish')) {
    opportunities.push('Extreme pessimism - potential bottom formation after washout');
  }

  // 最近5天重要新闻
  const sortedNews = sentimentIndex.tagged_news.sort((a, b) => {
    const dateA = new Date(a.date || 0);
    const dateB = new Date(b.date || 0);
    return dateB - dateA;
  });

  const recentImportant = sortedNews.slice(0, 5).map(news => ({
    title: news.title,
    date: news.date,
    category: news.category,
    sentiment: news.sentiment === 1 ? '📈 Bullish' : news.sentiment === -1 ? '📉 Bearish' : '➡️ Neutral',
    weight: news.impact_weight,
    source: news.source,
    engagement: news.engagement,
  }));

  return {
    symbol,
    signal,
    confidence: Math.round(confidence),
    reason,
    trading_style: tradingStyle,
    risks,
    opportunities,
    hype_score: hypeScore,
    early_hype_risk: hypeScore > 50 ? 'HIGH' : hypeScore > 30 ? 'MEDIUM' : 'LOW',
    recent_important_news: recentImportant,
    sentiment_score: score,
    sentiment_distribution: {
      bullish: `${si.bullish_count} (${si.bullish_ratio})`,
      bearish: `${si.bearish_count} (${si.bearish_ratio})`,
      neutral: `${si.neutral_count} (${si.neutral_ratio})`,
      total_effective_news: sentimentIndex.effective_news_count,
    },
  };
}

// ================== 主分析函数 ==================

async function analyzeStocks() {
  console.log('📊 Deep News Sentiment Analysis & Trading Signal Generation\n');

  const symbols = ['BGC', 'AEIS']; // Already clean symbols
  const results = {
    analysis_time: new Date().toISOString(),
    stocks: []
  };

  for (const symbol of symbols) {
    console.log(`\n${'='.repeat(90)}`);
    console.log(`📰 Analyzing ${symbol} - News Sentiment & Trading Signals`);
    console.log('='.repeat(90));

    try {
      // 1. 获取新闻
      console.log(`\n1️⃣  Fetching news data for ${symbol}...`);
      const newsResult = await searchUSNews({
        symbol,
        count: 25, // 获取 25 条新闻
        source: 'all'
      });

      if (!newsResult.success) {
        console.log(`⚠️  ${symbol} news fetch failed`);
        continue;
      }

      // 合并所有新闻
      const allNews = [...newsResult.news, ...(newsResult.social || []), ...(newsResult.forum || [])];

      if (allNews.length === 0) {
        console.log(`⚠️  No news data available for ${symbol}`);
        continue;
      }

      console.log(`✅ Retrieved ${allNews.length} news items`);

      // 2. 新闻去噪和分类
      console.log(`\n2️⃣  Classifying and filtering news...`);
      const sentimentIndex = buildSentimentIndex(allNews);
      console.log(`✅ ${sentimentIndex.effective_news_count} high-quality items after filtering`);

      // 3. 识别关键模式
      console.log(`\n3️⃣  Identifying market sentiment patterns...`);
      const patterns = identifyPatterns(sentimentIndex);
      console.log(`✅ Detected ${patterns.patterns.length} key patterns`);

      // 4. 生成交易信号
      console.log(`\n4️⃣  Generating trading signals...`);
      const tradingSignal = generateTradingSignal(sentimentIndex, patterns, symbol);

      // 输出分析结果
      console.log(`\n${'█'.repeat(90)}`);
      console.log(`📊 ${symbol} ANALYSIS RESULTS`);
      console.log('█'.repeat(90));

      console.log(`\n📈 Sentiment Index: ${sentimentIndex.sentiment_index.score.toFixed(3)} [-1.0 to +1.0]`);
      console.log(`   Bullish:  ${sentimentIndex.sentiment_index.bullish_ratio.padEnd(6)} (${sentimentIndex.sentiment_index.bullish_count} posts)`);
      console.log(`   Bearish:  ${sentimentIndex.sentiment_index.bearish_ratio.padEnd(6)} (${sentimentIndex.sentiment_index.bearish_count} posts)`);
      console.log(`   Neutral:  ${sentimentIndex.sentiment_index.neutral_ratio.padEnd(6)} (${sentimentIndex.sentiment_index.neutral_count} posts)`);

      console.log(`\n🎯 TRADING SIGNAL: ${tradingSignal.signal}`);
      console.log(`   Confidence: ${tradingSignal.confidence}%`);
      console.log(`   Action: ${tradingSignal.trading_style}`);
      console.log(`   Reason: ${tradingSignal.reason}`);

      console.log(`\n⚡ Hype Risk Analysis:`);
      console.log(`   Hype Score: ${tradingSignal.hype_score}/100`);
      console.log(`   Early Hype Risk: ${tradingSignal.early_hype_risk}`);

      if (tradingSignal.opportunities.length > 0) {
        console.log(`\n✨ Opportunities:`);
        tradingSignal.opportunities.forEach((opp, idx) => {
          console.log(`   ${idx + 1}. ${opp}`);
        });
      }

      if (tradingSignal.risks.length > 0) {
        console.log(`\n⚠️  RISKS & WARNINGS:`);
        tradingSignal.risks.forEach((risk, idx) => {
          const prefix = risk.includes('CRITICAL') ? '🔴' : '🟠';
          console.log(`   ${prefix} ${risk}`);
        });
      }

      console.log(`\n📋 Top 5 Most Recent Important News:`);
      tradingSignal.recent_important_news.forEach((news, idx) => {
        const weightBar = '█'.repeat(news.weight) + '░'.repeat(5 - news.weight);
        console.log(`   ${idx + 1}. ${news.sentiment} ${news.title.substring(0, 70)}`);
        console.log(`      📅 ${news.date} | Category: ${news.category} | Weight: ${weightBar} | Source: ${news.source}`);
      });

      if (patterns.patterns.length > 0) {
        console.log(`\n🔍 Key Sentiment Patterns:`);
        patterns.patterns.forEach((pattern, idx) => {
          const strengthEmoji = {
            critical: '🔴',
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
      console.error(`❌ Error analyzing ${symbol}: ${error.message}`);
    }

    // 避免请求过于频繁
    if (symbols.indexOf(symbol) < symbols.length - 1) {
      console.log('\n⏳ Waiting before next analysis...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // 保存完整结果
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputFile = `us_stock_news_sentiment_${timestamp}.json`;
  writeFileSync(outputFile, JSON.stringify(results, null, 2));

  // 生成摘要报告
  console.log(`\n\n${'='.repeat(90)}`);
  console.log('📊 ANALYSIS SUMMARY - TRADING RECOMMENDATIONS');
  console.log('='.repeat(90));

  results.stocks.forEach((stock, idx) => {
    const ts = stock.trading_signal;
    const signalEmoji = ts.signal === 'LONG' ? '📈' : ts.signal === 'SHORT' ? '📉' : '➡️';
    const hypeEmoji = ts.early_hype_risk === 'HIGH' ? '🔴' : ts.early_hype_risk === 'MEDIUM' ? '🟠' : '🟢';

    console.log(`\n${idx + 1}. ${stock.symbol}`);
    console.log(`   Signal: ${signalEmoji} ${ts.signal} (${ts.confidence}% confidence)`);
    console.log(`   Sentiment: ${ts.sentiment_score.toFixed(3)}`);
    console.log(`   Action: ${ts.trading_style}`);
    console.log(`   Hype Risk: ${hypeEmoji} ${ts.early_hype_risk}`);

    if (ts.risks.length > 0) {
      const criticalRisks = ts.risks.filter(r => r.includes('CRITICAL'));
      if (criticalRisks.length > 0) {
        console.log(`   🔴 CRITICAL: ${criticalRisks[0]}`);
      }
    }
  });

  console.log(`\n\n✅ Full analysis saved to: ${outputFile}\n`);

  return results;
}

// 运行分析
analyzeStocks().catch(console.error);
