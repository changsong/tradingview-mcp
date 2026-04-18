#!/usr/bin/env node
/**
 * 股票新闻情绪分析与交易信号生成
 * 获取推荐股票的新闻、研报、快讯，进行深度情绪分析
 */

import { searchNews } from './src/core/webNews.js';
import { writeFileSync } from 'fs';

// 推荐股票列表
const STOCKS = [
  { symbol: 'SZSE:002956', name: '西麦食品' },
  { symbol: 'SZSE:300750', name: '宁德时代' },
  { symbol: 'SZSE:002245', name: '蔚蓝锂芯' },
  { symbol: 'SZSE:300408', name: '三环集团' },
  { symbol: 'SSE:605319', name: '无锡振华' },
  { symbol: 'SZSE:300037', name: '新宙邦' },
  { symbol: 'SZSE:300661', name: '圣邦股份' },
  { symbol: 'SZSE:301345', name: '涛涛车业' },
  { symbol: 'SZSE:002475', name: '立讯精密' },
];

// 新闻类型分类关键词
const NEWS_TYPE_KEYWORDS = {
  policy: ['政策', '监管', '央行', '国务院', '发改委', '证监会', '工信部', '财政部', '税收', '补贴', '法规'],
  earnings: ['财报', '业绩', '净利润', '营收', '季报', '年报', '预告', '快报', '盈利', '亏损', '增长', '下滑'],
  merger: ['并购', '收购', '重组', '合并', '股权', '增发', '定增', '配股', '回购', '减持', '增持'],
  industry: ['行业', '产业', '市场', '需求', '供给', '产能', '出货', '订单', '客户', '竞争', '技术'],
  blackswan: ['暴雷', '爆雷', '违规', '处罚', '诉讼', '调查', '退市', 'ST', '风险', '危机', '事故'],
  rumor: ['传闻', '据悉', '消息称', '或将', '有望', '预计', '可能', '疑似', '未经证实'],
};

// 情绪关键词（扩展版）
const SENTIMENT_KEYWORDS = {
  bullish: {
    strong: ['涨停', '暴涨', '飙升', '大涨', '突破新高', '强势涨停', '连板', '翻倍'],
    medium: ['上涨', '拉升', '突破', '利好', '看涨', '买入', '加仓', '做多', '反弹'],
    weak: ['看好', '稳', '持有', '建仓', '机会', '乐观'],
  },
  bearish: {
    strong: ['跌停', '暴跌', '崩盘', '腰斩', '大跌', '闪崩', '连续跌停'],
    medium: ['下跌', '破位', '利空', '看跌', '卖出', '减仓', '做空', '回调'],
    weak: ['谨慎', '风险', '观望', '套牢', '被套', '止损'],
  },
};

// 分析单条新闻
function analyzeNewsItem(item) {
  const text = (item.title + ' ' + (item.content || item.snippet || '')).toLowerCase();

  // 1. 识别新闻类型
  let newsType = 'other';
  let typeConfidence = 0;
  for (const [type, keywords] of Object.entries(NEWS_TYPE_KEYWORDS)) {
    const matchCount = keywords.filter(kw => text.includes(kw)).length;
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
    if (text.includes(kw)) { sentimentScore += 3; sentimentReasons.push(`+3: ${kw}`); }
  }
  for (const kw of SENTIMENT_KEYWORDS.bullish.medium) {
    if (text.includes(kw)) { sentimentScore += 2; sentimentReasons.push(`+2: ${kw}`); }
  }
  for (const kw of SENTIMENT_KEYWORDS.bullish.weak) {
    if (text.includes(kw)) { sentimentScore += 1; sentimentReasons.push(`+1: ${kw}`); }
  }

  // 看跌情绪
  for (const kw of SENTIMENT_KEYWORDS.bearish.strong) {
    if (text.includes(kw)) { sentimentScore -= 3; sentimentReasons.push(`-3: ${kw}`); }
  }
  for (const kw of SENTIMENT_KEYWORDS.bearish.medium) {
    if (text.includes(kw)) { sentimentScore -= 2; sentimentReasons.push(`-2: ${kw}`); }
  }
  for (const kw of SENTIMENT_KEYWORDS.bearish.weak) {
    if (text.includes(kw)) { sentimentScore -= 1; sentimentReasons.push(`-1: ${kw}`); }
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
  if (item.source === '研报') impactWeight = Math.min(5, impactWeight + 1);
  if (item.type === 'research') impactWeight = Math.min(5, impactWeight + 1);

  // 4. 情绪标签
  let sentiment = 0;
  if (sentimentScore > 2) sentiment = 1;
  else if (sentimentScore < -2) sentiment = -1;

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
    weighted_score: sentiment * impactWeight,
    sentiment_reasons: sentimentReasons.slice(0, 5),
    url: item.url,
  };
}

// 生成交易信号
function generateTradingSignal(stockData) {
  const { symbol, name, analyzedNews, sentimentScore, newsCount } = stockData;

  // 计算情绪趋势
  const recentNews = analyzedNews.slice(0, 10);
  const olderNews = analyzedNews.slice(10, 20);

  const recentScore = recentNews.reduce((sum, n) => sum + n.weighted_score, 0);
  const olderScore = olderNews.reduce((sum, n) => sum + n.weighted_score, 0);

  // 情绪模式识别
  let pattern = 'stable';
  let patternDesc = '情绪稳定';

  if (recentScore > olderScore + 5) {
    pattern = 'trend_up';
    patternDesc = '情绪持续增强';
  } else if (recentScore < olderScore - 5) {
    pattern = 'trend_down';
    patternDesc = '情绪持续减弱';
  } else if (Math.abs(recentScore - olderScore) > 10) {
    pattern = 'reversal';
    patternDesc = '情绪反转';
  }

  // 风险识别
  const risks = [];
  const opportunities = [];

  // 检查是否已提前炒作
  const bullishCount = analyzedNews.filter(n => n.sentiment > 0).length;
  const totalCount = analyzedNews.length;
  if (bullishCount / totalCount > 0.7 && sentimentScore > 10) {
    risks.push('情绪过热，可能已提前炒作');
  }

  // 检查假利好
  const rumorCount = analyzedNews.filter(n => n.type === 'rumor').length;
  if (rumorCount > totalCount * 0.3) {
    risks.push('传闻类新闻占比高，需警惕假利好');
  }

  // 检查黑天鹅
  const blackswanNews = analyzedNews.filter(n => n.type === 'blackswan');
  if (blackswanNews.length > 0) {
    risks.push(`存在${blackswanNews.length}条负面风险新闻`);
  }

  // 机会识别
  const policyNews = analyzedNews.filter(n => n.type === 'policy' && n.sentiment > 0);
  if (policyNews.length > 0) {
    opportunities.push('有政策利好支撑');
  }

  const earningsNews = analyzedNews.filter(n => n.type === 'earnings' && n.sentiment > 0);
  if (earningsNews.length > 0) {
    opportunities.push('业绩预期向好');
  }

  // 生成交易信号
  let signal = 'No Trade';
  let signalReason = '';
  let tradeStyle = '';

  if (sentimentScore > 8 && risks.length === 0) {
    signal = 'Long';
    signalReason = '情绪积极，无明显风险';
    tradeStyle = pattern === 'trend_up' ? '追涨' : '低吸';
  } else if (sentimentScore < -8) {
    signal = 'Short';
    signalReason = '情绪消极，存在下行风险';
    tradeStyle = '观望或减仓';
  } else if (pattern === 'reversal' && recentScore > olderScore) {
    signal = 'Long';
    signalReason = '情绪反转向好';
    tradeStyle = '反转';
  } else if (risks.length > 1) {
    signal = 'No Trade';
    signalReason = `风险因素过多: ${risks.join('; ')}`;
    tradeStyle = '观望';
  } else {
    signal = 'No Trade';
    signalReason = '信号不明确，建议观望';
    tradeStyle = '观望';
  }

  return {
    symbol,
    name,
    signal,
    signal_reason: signalReason,
    trade_style: tradeStyle,
    sentiment_score: sentimentScore,
    sentiment_pattern: pattern,
    sentiment_pattern_desc: patternDesc,
    risks,
    opportunities,
    news_count: newsCount,
    is_overheated: bullishCount / totalCount > 0.7 && sentimentScore > 10,
    is_fake_positive: rumorCount > totalCount * 0.3,
    has_blackswan: blackswanNews.length > 0,
  };
}

// 主函数
async function main() {
  console.log('================================================================================');
  console.log('📰 股票新闻情绪分析与交易信号生成');
  console.log('================================================================================\n');

  const results = [];

  for (const stock of STOCKS) {
    console.log(`\n[${STOCKS.indexOf(stock) + 1}/${STOCKS.length}] 正在分析 ${stock.symbol} (${stock.name})...`);

    try {
      // 获取新闻数据
      const newsData = await searchNews({
        symbol: stock.symbol,
        name: stock.name,
        source: 'all',
        count: 20,
      });

      // 合并所有新闻
      const allNews = [
        ...newsData.research.map(n => ({ ...n, category: 'research' })),
        ...newsData.news.map(n => ({ ...n, category: 'news' })),
        ...newsData.forum.map(n => ({ ...n, category: 'forum' })),
      ];

      console.log(`  获取到 ${allNews.length} 条新闻/研报/讨论`);

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
        symbol: stock.symbol,
        name: stock.name,
        analyzedNews,
        sentimentScore,
        newsCount: allNews.length,
      });

      // 筛选最重要的5条新闻
      const topNews = analyzedNews
        .sort((a, b) => Math.abs(b.weighted_score) - Math.abs(a.weighted_score))
        .slice(0, 5);

      const stockResult = {
        symbol: stock.symbol,
        name: stock.name,
        analysis_time: new Date().toISOString(),
        news_summary: {
          total_count: allNews.length,
          research_count: newsData.research.length,
          news_count: newsData.news.length,
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
        sentiment_score: sentimentScore,
        trading_signal: tradingSignal,
        top_news: topNews,
        all_analyzed_news: analyzedNews,
      };

      results.push(stockResult);

      // 打印摘要
      console.log(`  情绪分数: ${sentimentScore}`);
      console.log(`  情绪分布: 看涨${bullishCount} / 看跌${bearishCount} / 中性${neutralCount}`);
      console.log(`  交易信号: ${tradingSignal.signal} (${tradingSignal.signal_reason})`);
      if (tradingSignal.risks.length > 0) {
        console.log(`  ⚠️  风险: ${tradingSignal.risks.join('; ')}`);
      }

    } catch (err) {
      console.error(`  ❌ 分析失败: ${err.message}`);
      results.push({
        symbol: stock.symbol,
        name: stock.name,
        error: err.message,
      });
    }

    // 避免请求过快
    await new Promise(r => setTimeout(r, 2000));
  }

  // 生成汇总报告
  console.log('\n================================================================================');
  console.log('📊 交易信号汇总');
  console.log('================================================================================\n');

  const longSignals = results.filter(r => r.trading_signal?.signal === 'Long');
  const shortSignals = results.filter(r => r.trading_signal?.signal === 'Short');
  const noTradeSignals = results.filter(r => r.trading_signal?.signal === 'No Trade');

  console.log(`🟢 做多信号 (${longSignals.length}):`);
  longSignals.forEach(r => {
    console.log(`   ${r.symbol} ${r.name} - ${r.trading_signal.trade_style} | 情绪分数: ${r.sentiment_score}`);
  });

  console.log(`\n🔴 做空/减仓信号 (${shortSignals.length}):`);
  shortSignals.forEach(r => {
    console.log(`   ${r.symbol} ${r.name} | 情绪分数: ${r.sentiment_score}`);
  });

  console.log(`\n⚪ 观望信号 (${noTradeSignals.length}):`);
  noTradeSignals.forEach(r => {
    console.log(`   ${r.symbol} ${r.name} - ${r.trading_signal?.signal_reason || '无数据'}`);
  });

  // 保存JSON结果
  const outputFile = `news_sentiment_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
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
      name: r.name,
      signal: r.trading_signal?.signal || 'Error',
      signal_reason: r.trading_signal?.signal_reason || r.error,
      trade_style: r.trading_signal?.trade_style || '',
      sentiment_score: r.sentiment_score || 0,
      sentiment_pattern: r.trading_signal?.sentiment_pattern || '',
      risks: r.trading_signal?.risks || [],
      opportunities: r.trading_signal?.opportunities || [],
      is_overheated: r.trading_signal?.is_overheated || false,
      is_fake_positive: r.trading_signal?.is_fake_positive || false,
      has_blackswan: r.trading_signal?.has_blackswan || false,
      sentiment_distribution: r.sentiment_distribution || {},
      top_news: r.top_news || [],
    })),
    detailed_results: results,
  };

  writeFileSync(outputFile, JSON.stringify(jsonOutput, null, 2), 'utf-8');
  console.log(`\n✅ 详细结果已保存到: ${outputFile}`);
}

main().catch(console.error);
