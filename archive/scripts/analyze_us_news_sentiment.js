#!/usr/bin/env node
/**
 * 美股新闻情绪分析与交易信号生成
 * 获取推荐美股的新闻、社交媒体、论坛讨论，进行深度情绪分析
 */

import { searchUSNews } from './src/core/usNews.js';
import { readFileSync, writeFileSync } from 'fs';

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

// 新闻类型分类关键词（英文）
const NEWS_TYPE_KEYWORDS = {
  policy: ['regulation', 'sec', 'fed', 'federal', 'government', 'policy', 'law', 'rule', 'compliance', 'tax', 'tariff'],
  earnings: ['earnings', 'revenue', 'profit', 'loss', 'eps', 'quarterly', 'annual', 'report', 'guidance', 'beat', 'miss', 'outlook'],
  merger: ['merger', 'acquisition', 'buyout', 'takeover', 'deal', 'stake', 'share', 'buyback', 'offering', 'ipo', 'spac'],
  industry: ['industry', 'sector', 'market', 'demand', 'supply', 'competition', 'technology', 'innovation', 'product', 'launch'],
  blackswan: ['scandal', 'fraud', 'lawsuit', 'investigation', 'bankruptcy', 'default', 'delisting', 'warning', 'recall', 'crisis'],
  rumor: ['rumor', 'speculation', 'reportedly', 'allegedly', 'sources say', 'unconfirmed', 'may', 'could', 'might', 'expected'],
};

// 情绪关键词（英文，扩展版）
const SENTIMENT_KEYWORDS = {
  bullish: {
    strong: ['moon', 'rocket', 'surge', 'soar', 'breakout', 'rally', 'explode', 'skyrocket', 'all-time high'],
    medium: ['bullish', 'buy', 'long', 'upgrade', 'outperform', 'gain', 'rise', 'up', 'positive', 'strong'],
    weak: ['hold', 'accumulate', 'opportunity', 'potential', 'optimistic', 'favorable'],
  },
  bearish: {
    strong: ['crash', 'plunge', 'tank', 'collapse', 'dump', 'bloodbath', 'disaster', 'catastrophe'],
    medium: ['bearish', 'sell', 'short', 'downgrade', 'underperform', 'loss', 'fall', 'down', 'negative', 'weak'],
    weak: ['caution', 'risk', 'concern', 'warning', 'decline', 'pressure'],
  },
};

// 分析单条新闻/帖子
function analyzeNewsItem(item) {
  const text = (item.title + ' ' + (item.content || '')).toLowerCase();

  // 1. 识别新闻类型
  let newsType = 'other';
  let typeConfidence = 0;
  for (const [type, keywords] of Object.entries(NEWS_TYPE_KEYWORDS)) {
    const matchCount = keywords.filter(kw => text.includes(kw.toLowerCase())).length;
    if (matchCount > typeConfidence) {
      typeConfidence = matchCount;
      newsType = type;
    }
  }

  // 2. 情绪评分
  let sentimentScore = 0;
  let sentimentReasons = [];

  // 看涨情绪
  for (const kw of SENTIMENT_KEYWORDS.bullish.strong) {
    if (text.includes(kw.toLowerCase())) {
      sentimentScore += 3;
      sentimentReasons.push(`+3: ${kw}`);
    }
  }
  for (const kw of SENTIMENT_KEYWORDS.bullish.medium) {
    if (text.includes(kw.toLowerCase())) {
      sentimentScore += 2;
      sentimentReasons.push(`+2: ${kw}`);
    }
  }
  for (const kw of SENTIMENT_KEYWORDS.bullish.weak) {
    if (text.includes(kw.toLowerCase())) {
      sentimentScore += 1;
      sentimentReasons.push(`+1: ${kw}`);
    }
  }

  // 看跌情绪
  for (const kw of SENTIMENT_KEYWORDS.bearish.strong) {
    if (text.includes(kw.toLowerCase())) {
      sentimentScore -= 3;
      sentimentReasons.push(`-3: ${kw}`);
    }
  }
  for (const kw of SENTIMENT_KEYWORDS.bearish.medium) {
    if (text.includes(kw.toLowerCase())) {
      sentimentScore -= 2;
      sentimentReasons.push(`-2: ${kw}`);
    }
  }
  for (const kw of SENTIMENT_KEYWORDS.bearish.weak) {
    if (text.includes(kw.toLowerCase())) {
      sentimentScore -= 1;
      sentimentReasons.push(`-1: ${kw}`);
    }
  }

  // 3. 影响权重 (1-5)
  let impactWeight = 1;
  if (newsType === 'policy') impactWeight = 5;
  else if (newsType === 'earnings') impactWeight = 4;
  else if (newsType === 'blackswan') impactWeight = 5;
  else if (newsType === 'merger') impactWeight = 4;
  else if (newsType === 'industry') impactWeight = 3;
  else if (newsType === 'rumor') impactWeight = 2;

  // 根据来源调整权重
  if (item.source === 'Seeking Alpha') impactWeight = Math.min(5, impactWeight + 1);
  if (item.type === 'news') impactWeight = Math.min(5, impactWeight + 1);

  // 根据互动数据调整权重
  const engagement = (item.upvotes || item.likes || 0) + (item.comments || item.replies || 0) * 2;
  if (engagement > 1000) impactWeight = Math.min(5, impactWeight + 1);
  else if (engagement > 500) impactWeight = Math.min(5, impactWeight + 0.5);

  // 4. 情绪标签
  let sentiment = 0;
  if (sentimentScore > 2) sentiment = 1;
  else if (sentimentScore < -2) sentiment = -1;

  // 5. 时效性评分（最近5天）
  let recency = 1;
  if (item.date) {
    const newsDate = new Date(item.date);
    const now = new Date();
    const daysDiff = Math.floor((now - newsDate) / (1000 * 60 * 60 * 24));

    if (daysDiff <= 1) recency = 1.5;
    else if (daysDiff <= 3) recency = 1.2;
    else if (daysDiff <= 5) recency = 1.0;
    else recency = 0.5;
  }

  return {
    title: item.title,
    date: item.date,
    source: item.source,
    type: newsType,
    type_cn: {
      policy: '政策',
      earnings: '财报',
      merger: '并购',
      industry: '行业',
      blackswan: '黑天鹅',
      rumor: '传闻',
      other: '其他',
    }[newsType],
    sentiment,
    sentiment_label: sentiment > 0 ? '看涨' : sentiment < 0 ? '看跌' : '中性',
    impact_weight: impactWeight,
    recency_factor: recency,
    weighted_score: sentiment * impactWeight * recency,
    sentiment_reasons: sentimentReasons.slice(0, 5),
    url: item.url,
    engagement: {
      upvotes: item.upvotes || item.likes || 0,
      comments: item.comments || item.replies || 0,
    },
  };
}

// 生成交易信号
function generateTradingSignal(stockData) {
  const { symbol, analyzedNews, sentimentScore, newsCount } = stockData;

  // 按时间排序（最新的在前）
  const sortedNews = [...analyzedNews].sort((a, b) => {
    const dateA = new Date(a.date || 0);
    const dateB = new Date(b.date || 0);
    return dateB - dateA;
  });

  // 计算情绪趋势（最近5条 vs 之前5条）
  const recentNews = sortedNews.slice(0, 5);
  const olderNews = sortedNews.slice(5, 10);

  const recentScore = recentNews.reduce((sum, n) => sum + n.weighted_score, 0);
  const olderScore = olderNews.reduce((sum, n) => sum + n.weighted_score, 0);

  // 情绪模式识别
  let pattern = 'stable';
  let patternDesc = '情绪稳定';

  if (recentScore > olderScore + 5) {
    pattern = 'trend_up';
    patternDesc = '情绪持续增强 (Trend Up)';
  } else if (recentScore < olderScore - 5) {
    pattern = 'trend_down';
    patternDesc = '情绪持续减弱 (Trend Down)';
  } else if (Math.abs(recentScore - olderScore) > 8) {
    pattern = 'reversal';
    patternDesc = '情绪反转 (Reversal)';
  }

  // 风险识别
  const risks = [];
  const opportunities = [];

  // 检查是否已提前炒作
  const bullishCount = analyzedNews.filter(n => n.sentiment > 0).length;
  const totalCount = analyzedNews.length;
  const bullishRatio = bullishCount / totalCount;

  if (bullishRatio > 0.75 && sentimentScore > 15) {
    risks.push('情绪过热，可能已提前炒作 (Overheated)');
  }

  // 检查假利好
  const rumorCount = analyzedNews.filter(n => n.type === 'rumor').length;
  if (rumorCount > totalCount * 0.3) {
    risks.push('传闻类新闻占比高，需警惕假利好 (High Rumor Ratio)');
  }

  // 检查黑天鹅
  const blackswanNews = analyzedNews.filter(n => n.type === 'blackswan');
  if (blackswanNews.length > 0) {
    risks.push(`存在${blackswanNews.length}条负面风险新闻 (Black Swan Events)`);
  }

  // 检查情绪背离（高情绪但低互动）
  const avgEngagement = analyzedNews.reduce((sum, n) =>
    sum + n.engagement.upvotes + n.engagement.comments, 0) / totalCount;

  if (sentimentScore > 10 && avgEngagement < 50) {
    risks.push('情绪与互动度背离，可能缺乏实质支撑 (Sentiment-Engagement Divergence)');
  }

  // 机会识别
  const policyNews = analyzedNews.filter(n => n.type === 'policy' && n.sentiment > 0);
  if (policyNews.length > 0) {
    opportunities.push('有政策利好支撑 (Policy Support)');
  }

  const earningsNews = analyzedNews.filter(n => n.type === 'earnings' && n.sentiment > 0);
  if (earningsNews.length > 0) {
    opportunities.push('业绩预期向好 (Positive Earnings)');
  }

  const mergerNews = analyzedNews.filter(n => n.type === 'merger' && n.sentiment > 0);
  if (mergerNews.length > 0) {
    opportunities.push('并购重组机会 (M&A Activity)');
  }

  // 高互动度的看涨新闻
  const highEngagementBullish = analyzedNews.filter(n =>
    n.sentiment > 0 && (n.engagement.upvotes + n.engagement.comments) > 100
  );
  if (highEngagementBullish.length > 0) {
    opportunities.push('高互动度看涨讨论 (High Engagement Bullish)');
  }

  // 生成交易信号
  let signal = 'No Trade';
  let signalReason = '';
  let tradeStyle = '';
  let confidence = 'Low';

  if (sentimentScore > 12 && risks.length === 0 && pattern === 'trend_up') {
    signal = 'Long';
    signalReason = '情绪积极且持续增强，无明显风险';
    tradeStyle = '追涨 (Momentum)';
    confidence = 'High';
  } else if (sentimentScore > 8 && risks.length <= 1 && pattern !== 'trend_down') {
    signal = 'Long';
    signalReason = '情绪偏积极，风险可控';
    tradeStyle = '低吸 (Dip Buying)';
    confidence = 'Medium';
  } else if (sentimentScore < -10) {
    signal = 'Short';
    signalReason = '情绪消极，存在下行风险';
    tradeStyle = '观望或减仓 (Wait or Reduce)';
    confidence = 'Medium';
  } else if (pattern === 'reversal' && recentScore > 5 && olderScore < 0) {
    signal = 'Long';
    signalReason = '情绪反转向好，可能是底部信号';
    tradeStyle = '反转 (Reversal)';
    confidence = 'Medium';
  } else if (risks.length > 2) {
    signal = 'No Trade';
    signalReason = `风险因素过多: ${risks.slice(0, 2).join('; ')}`;
    tradeStyle = '观望 (Wait)';
    confidence = 'Low';
  } else {
    signal = 'No Trade';
    signalReason = '信号不明确，建议观望';
    tradeStyle = '观望 (Wait)';
    confidence = 'Low';
  }

  return {
    symbol,
    signal,
    signal_reason: signalReason,
    trade_style: tradeStyle,
    confidence,
    sentiment_score: sentimentScore,
    sentiment_pattern: pattern,
    sentiment_pattern_desc: patternDesc,
    recent_trend: {
      recent_score: recentScore.toFixed(2),
      older_score: olderScore.toFixed(2),
      trend_direction: recentScore > olderScore ? 'Up' : 'Down',
    },
    risks,
    opportunities,
    news_count: newsCount,
    sentiment_distribution: {
      bullish_count: bullishCount,
      bearish_count: analyzedNews.filter(n => n.sentiment < 0).length,
      neutral_count: analyzedNews.filter(n => n.sentiment === 0).length,
      bullish_ratio: (bullishRatio * 100).toFixed(1) + '%',
    },
    is_overheated: bullishRatio > 0.75 && sentimentScore > 15,
    is_fake_positive: rumorCount > totalCount * 0.3,
    has_blackswan: blackswanNews.length > 0,
    has_divergence: sentimentScore > 10 && avgEngagement < 50,
  };
}

// 主函数
async function main() {
  console.log('================================================================================');
  console.log('📰 美股新闻情绪分析与交易信号生成');
  console.log('================================================================================\n');

  const symbols = loadSelectedStocks();
  if (symbols.length === 0) {
    console.error('❌ 未找到推荐股票，请先运行 scan_stocks.js');
    return;
  }

  console.log(`✅ 加载了 ${symbols.length} 个推荐股票\n`);

  const results = [];

  for (const symbol of symbols) {
    console.log(`\n[${symbols.indexOf(symbol) + 1}/${symbols.length}] 正在分析 ${symbol}...`);

    try {
      // 获取新闻数据
      const newsData = await searchUSNews({
        symbol: symbol,
        source: 'all',
        count: 20,
      });

      // 合并所有新闻
      const allNews = [
        ...newsData.news.map(n => ({ ...n, category: 'news' })),
        ...newsData.social.map(n => ({ ...n, category: 'social' })),
        ...newsData.forum.map(n => ({ ...n, category: 'forum' })),
      ];

      console.log(`  获取到 ${allNews.length} 条新闻/社交/论坛数据`);
      console.log(`  - 新闻: ${newsData.news.length}`);
      console.log(`  - 社交媒体: ${newsData.social.length}`);
      console.log(`  - 论坛讨论: ${newsData.forum.length}`);

      if (allNews.length === 0) {
        console.log(`  ⚠️  无新闻数据，跳过`);
        continue;
      }

      // 分析每条新闻
      const analyzedNews = allNews.map(analyzeNewsItem);

      // 计算总体情绪分数
      const sentimentScore = analyzedNews.reduce((sum, n) => sum + n.weighted_score, 0);

      // 统计情绪分布
      const bullishCount = analyzedNews.filter(n => n.sentiment > 0).length;
      const bearishCount = analyzedNews.filter(n => n.sentiment < 0).length;
      const neutralCount = analyzedNews.filter(n => n.sentiment === 0).length;

      // 生成交易信号
      const tradingSignal = generateTradingSignal({
        symbol: symbol,
        analyzedNews,
        sentimentScore,
        newsCount: allNews.length,
      });

      // 筛选最重要的5条新闻（按加权分数）
      const topNews = analyzedNews
        .sort((a, b) => Math.abs(b.weighted_score) - Math.abs(a.weighted_score))
        .slice(0, 5);

      const stockResult = {
        symbol: symbol,
        analysis_time: new Date().toISOString(),
        news_summary: {
          total_count: allNews.length,
          news_count: newsData.news.length,
          social_count: newsData.social.length,
          forum_count: newsData.forum.length,
        },
        sentiment_distribution: {
          bullish: bullishCount,
          bearish: bearishCount,
          neutral: neutralCount,
          bullish_ratio: ((bullishCount / allNews.length) * 100).toFixed(1) + '%',
          bearish_ratio: ((bearishCount / allNews.length) * 100).toFixed(1) + '%',
          neutral_ratio: ((neutralCount / allNews.length) * 100).toFixed(1) + '%',
        },
        sentiment_score: parseFloat(sentimentScore.toFixed(2)),
        trading_signal: tradingSignal,
        top_news: topNews,
        all_analyzed_news: analyzedNews,
      };

      results.push(stockResult);

      // 打印摘要
      console.log(`  情绪分数: ${sentimentScore.toFixed(2)}`);
      console.log(`  情绪分布: 看涨${bullishCount} / 看跌${bearishCount} / 中性${neutralCount}`);
      console.log(`  交易信号: ${tradingSignal.signal} (${tradingSignal.confidence}) - ${tradingSignal.trade_style}`);
      console.log(`  信号原因: ${tradingSignal.signal_reason}`);
      if (tradingSignal.risks.length > 0) {
        console.log(`  ⚠️  风险: ${tradingSignal.risks.join('; ')}`);
      }
      if (tradingSignal.opportunities.length > 0) {
        console.log(`  ✅ 机会: ${tradingSignal.opportunities.join('; ')}`);
      }

    } catch (err) {
      console.error(`  ❌ 分析失败: ${err.message}`);
      results.push({
        symbol: symbol,
        error: err.message,
      });
    }

    // 避免请求过快
    await new Promise(r => setTimeout(r, 3000));
  }

  // 生成汇总报告
  console.log('\n================================================================================');
  console.log('📊 交易信号汇总');
  console.log('================================================================================\n');

  const longSignals = results.filter(r => r.trading_signal?.signal === 'Long');
  const shortSignals = results.filter(r => r.trading_signal?.signal === 'Short');
  const noTradeSignals = results.filter(r => r.trading_signal?.signal === 'No Trade');

  console.log(`🟢 做多信号 (${longSignals.length}):`);
  longSignals
    .sort((a, b) => b.sentiment_score - a.sentiment_score)
    .forEach(r => {
      console.log(`   ${r.symbol.padEnd(15)} | ${r.trading_signal.trade_style.padEnd(20)} | 情绪: ${r.sentiment_score.toFixed(2).padStart(6)} | 信心: ${r.trading_signal.confidence}`);
    });

  console.log(`\n🔴 做空/减仓信号 (${shortSignals.length}):`);
  shortSignals.forEach(r => {
    console.log(`   ${r.symbol.padEnd(15)} | 情绪: ${r.sentiment_score.toFixed(2).padStart(6)} | ${r.trading_signal.signal_reason}`);
  });

  console.log(`\n⚪ 观望信号 (${noTradeSignals.length}):`);
  noTradeSignals.forEach(r => {
    console.log(`   ${r.symbol.padEnd(15)} | ${r.trading_signal?.signal_reason || '无数据'}`);
  });

  // 保存JSON结果
  const outputFile = `us_news_sentiment_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  const jsonOutput = {
    analysis_time: new Date().toISOString(),
    summary: {
      total_stocks: results.length,
      long_signals: longSignals.length,
      short_signals: shortSignals.length,
      no_trade_signals: noTradeSignals.length,
    },
    signals: results.map(r => ({
      symbol: r.symbol,
      signal: r.trading_signal?.signal || 'Error',
      signal_reason: r.trading_signal?.signal_reason || r.error,
      trade_style: r.trading_signal?.trade_style || '',
      confidence: r.trading_signal?.confidence || 'Low',
      sentiment_score: r.sentiment_score || 0,
      sentiment_pattern: r.trading_signal?.sentiment_pattern || '',
      sentiment_pattern_desc: r.trading_signal?.sentiment_pattern_desc || '',
      recent_trend: r.trading_signal?.recent_trend || {},
      risks: r.trading_signal?.risks || [],
      opportunities: r.trading_signal?.opportunities || [],
      is_overheated: r.trading_signal?.is_overheated || false,
      is_fake_positive: r.trading_signal?.is_fake_positive || false,
      has_blackswan: r.trading_signal?.has_blackswan || false,
      has_divergence: r.trading_signal?.has_divergence || false,
      sentiment_distribution: r.sentiment_distribution || {},
      top_news: r.top_news || [],
    })),
    detailed_results: results,
  };

  writeFileSync(outputFile, JSON.stringify(jsonOutput, null, 2), 'utf-8');
  console.log(`\n✅ 详细结果已保存到: ${outputFile}`);
  console.log('\n================================================================================');
}

main().catch(console.error);
