#!/usr/bin/env node

/**
 * 美股新闻深度分析与可交易信号生成
 * 1. 抓取高影响力新闻（过滤噪音）
 * 2. 新闻标签化：类型、情绪、权重
 * 3. 情绪指数构建和关键模式识别
 * 4. 交易信号生成：Long/Short/No Trade
 * 5. 风险识别：提前炒作、情绪过热、假利好
 */

import { readFileSync, writeFileSync } from 'fs';

// ============== 配置 ==============
const STOCKS_TO_ANALYZE = [
  'NASDAQ:MPWR', 'NYSE:ENVA', 'NYSE:PIPR', 'NASDAQ:RMBS', 'NYSE:SON',
  'NYSE:PFS', 'NYSE:TRNO', 'NASDAQ:OSBC', 'NYSE:GRMN', 'NYSE:JOE',
  'NASDAQ:BHRB', 'NYSE:SPNT', 'NYSE:WTM', 'NASDAQ:ORRF', 'NASDAQ:BGC',
  'NASDAQ:USLM', 'NYSE:AIR', 'NYSE:CSW'
];

// 新闻类型关键词
const NEWS_TYPE_KEYWORDS = {
  policy: ['regulation', 'sec', 'fed', 'policy', 'law', 'rule', 'government', 'compliance'],
  earnings: ['earnings', 'revenue', 'profit', 'eps', 'quarterly', 'beat', 'guidance', 'outlook'],
  merger: ['merger', 'acquisition', 'deal', 'buyout', 'stake', 'offering', 'ipo'],
  industry: ['industry', 'sector', 'market', 'demand', 'product', 'launch', 'innovation'],
  blackswan: ['scandal', 'fraud', 'lawsuit', 'bankruptcy', 'investigation', 'crisis'],
  rumor: ['rumor', 'speculation', 'reportedly', 'allegedly', 'expected', 'may'],
};

// 情绪关键词（分级）
const SENTIMENT_KEYWORDS = {
  bullish: {
    strong: ['moon', 'rocket', 'surge', 'soar', 'breakout', 'rally', 'skyrocket', 'all-time high', 'explosive'],
    medium: ['bullish', 'buy', 'upgrade', 'outperform', 'gain', 'rise', 'positive', 'strong', 'beat'],
    weak: ['hold', 'accumulate', 'opportunity', 'potential', 'optimistic', 'favorable'],
  },
  bearish: {
    strong: ['crash', 'plunge', 'tank', 'collapse', 'dump', 'bloodbath', 'disaster'],
    medium: ['bearish', 'sell', 'downgrade', 'underperform', 'loss', 'fall', 'negative', 'weak'],
    weak: ['caution', 'risk', 'concern', 'warning', 'decline', 'pressure'],
  },
};

// 虚假利好标志词
const HYPE_INDICATORS = [
  'rumor has it', 'sources say', 'could potentially', 'may soon',
  'speculation', 'unconfirmed reports', 'might be', 'could be',
  'pre-hype', 'early stage', 'potential partnership',
];

// 过热标志
const OVERHEAT_INDICATORS = [
  'everyone talking about', 'viral', 'going crazy', 'parabolic',
  'unstoppable', 'guaranteed', 'certain to', 'can\'t lose',
];

// ============== 核心分析类 ==============
class NewsAnalyzer {
  // 分析单条新闻
  static analyzeNewsItem(item) {
    const text = (item.title + ' ' + (item.content || '')).toLowerCase();

    // 1. 识别新闻类型
    let newsType = 'other';
    let typeScore = 0;
    for (const [type, keywords] of Object.entries(NEWS_TYPE_KEYWORDS)) {
      const matches = keywords.filter(kw => text.includes(kw)).length;
      if (matches > typeScore) {
        typeScore = matches;
        newsType = type;
      }
    }

    // 2. 情绪评分（-3 ~ +3）
    let sentimentScore = 0;
    let sentimentReasons = [];

    // 看涨
    for (const kw of SENTIMENT_KEYWORDS.bullish.strong) {
      if (text.includes(kw)) {
        sentimentScore += 3;
        sentimentReasons.push(`+3: ${kw}`);
      }
    }
    for (const kw of SENTIMENT_KEYWORDS.bullish.medium) {
      if (text.includes(kw)) {
        sentimentScore += 2;
        sentimentReasons.push(`+2: ${kw}`);
      }
    }
    for (const kw of SENTIMENT_KEYWORDS.bullish.weak) {
      if (text.includes(kw)) {
        sentimentScore += 1;
        sentimentReasons.push(`+1: ${kw}`);
      }
    }

    // 看跌
    for (const kw of SENTIMENT_KEYWORDS.bearish.strong) {
      if (text.includes(kw)) {
        sentimentScore -= 3;
        sentimentReasons.push(`-3: ${kw}`);
      }
    }
    for (const kw of SENTIMENT_KEYWORDS.bearish.medium) {
      if (text.includes(kw)) {
        sentimentScore -= 2;
        sentimentReasons.push(`-2: ${kw}`);
      }
    }
    for (const kw of SENTIMENT_KEYWORDS.bearish.weak) {
      if (text.includes(kw)) {
        sentimentScore -= 1;
        sentimentReasons.push(`-1: ${kw}`);
      }
    }

    // 3. 影响权重（1~5）
    let weight = 2; // 默认权重
    if (newsType === 'earnings') weight = 5;
    else if (newsType === 'merger' || newsType === 'blackswan') weight = 4;
    else if (newsType === 'policy' || newsType === 'industry') weight = 3;
    else if (newsType === 'rumor') weight = 1;

    // 4. 虚假利好检测
    let isFakeNews = false;
    let fakeReasons = [];
    for (const indicator of HYPE_INDICATORS) {
      if (text.includes(indicator)) {
        isFakeNews = true;
        fakeReasons.push(indicator);
        sentimentScore *= 0.5; // 降低权重
      }
    }

    // 5. 过热检测
    let isOverheated = false;
    for (const indicator of OVERHEAT_INDICATORS) {
      if (text.includes(indicator)) {
        isOverheated = true;
        break;
      }
    }

    return {
      title: item.title,
      date: item.date || new Date().toISOString().split('T')[0],
      type: newsType,
      sentiment_score: sentimentScore,
      sentiment_label: sentimentScore > 0 ? '看涨' : (sentimentScore < 0 ? '看跌' : '中性'),
      weight: weight,
      weighted_score: sentimentScore * weight,
      reasons: sentimentReasons,
      is_fake_news: isFakeNews,
      fake_reasons: fakeReasons,
      is_overheated: isOverheated,
      source: item.source || 'unknown',
      engagement: (item.upvotes || 0) + (item.comments || 0),
    };
  }

  // 构建情绪指数和关键模式
  static buildSentimentIndex(newsItems) {
    if (!newsItems || newsItems.length === 0) {
      return null;
    }

    const analyzed = newsItems.map(item => this.analyzeNewsItem(item));

    // 计算聚合指标
    const totalScore = analyzed.reduce((sum, n) => sum + n.weighted_score, 0);
    const avgScore = totalScore / analyzed.length;

    const bullishNews = analyzed.filter(n => n.sentiment_score > 0).length;
    const bearishNews = analyzed.filter(n => n.sentiment_score < 0).length;
    const neutralNews = analyzed.filter(n => n.sentiment_score === 0).length;
    const fakeNews = analyzed.filter(n => n.is_fake_news).length;
    const overheatNews = analyzed.filter(n => n.is_overheated).length;

    // 识别关键模式
    const patterns = [];

    // 模式1：情绪持续增强（Trend）
    if (analyzed.length >= 3) {
      const recent3 = analyzed.slice(-3);
      const scores = recent3.map(n => n.sentiment_score);
      if (scores[0] < scores[1] && scores[1] < scores[2]) {
        patterns.push({
          type: 'sentiment_strengthening',
          description: '情绪持续增强中',
          confidence: 'high',
          implication: '看涨趋势可能继续',
        });
      } else if (scores[0] > scores[1] && scores[1] > scores[2]) {
        patterns.push({
          type: 'sentiment_weakening',
          description: '情绪持续减弱',
          confidence: 'high',
          implication: '看跌趋势可能继续',
        });
      }
    }

    // 模式2：情绪反转（Reversal）
    if (analyzed.length >= 2) {
      const prevSentiment = analyzed.slice(0, -1).reduce((sum, n) => sum + n.sentiment_score, 0) / (analyzed.length - 1);
      const lastSentiment = analyzed[analyzed.length - 1].sentiment_score;
      if (prevSentiment > 0 && lastSentiment < 0) {
        patterns.push({
          type: 'sentiment_reversal_bearish',
          description: '情绪反转为看跌',
          confidence: 'medium',
          implication: '反转风险',
        });
      } else if (prevSentiment < 0 && lastSentiment > 0) {
        patterns.push({
          type: 'sentiment_reversal_bullish',
          description: '情绪反转为看涨',
          confidence: 'medium',
          implication: '反转机会',
        });
      }
    }

    // 模式3：虚假利好（Fake News Ratio）
    if (fakeNews / analyzed.length > 0.3) {
      patterns.push({
        type: 'high_fake_ratio',
        description: `虚假利好占比 ${((fakeNews / analyzed.length) * 100).toFixed(1)}%`,
        confidence: 'high',
        implication: '谨慎追高，可能已提前炒作',
      });
    }

    // 模式4：过热指标（Overheat）
    if (overheatNews > 0) {
      patterns.push({
        type: 'sentiment_overheat',
        description: `情绪过热信号检测到 ${overheatNews} 条`,
        confidence: 'high',
        implication: '风险警示：易出现高位回调',
      });
    }

    // 市场情绪分布
    const total = analyzed.length;
    const sentiment_distribution = {
      bullish_ratio: (bullishNews / total * 100).toFixed(1) + '%',
      bearish_ratio: (bearishNews / total * 100).toFixed(1) + '%',
      neutral_ratio: (neutralNews / total * 100).toFixed(1) + '%',
    };

    return {
      total_news: analyzed.length,
      total_score: totalScore.toFixed(2),
      avg_score: avgScore.toFixed(2),
      sentiment_distribution,
      bullish_count: bullishNews,
      bearish_count: bearishNews,
      neutral_count: neutralNews,
      fake_news_count: fakeNews,
      overheat_news_count: overheatNews,
      patterns,
      analyzed_items: analyzed.sort((a, b) => b.engagement - a.engagement).slice(0, 5), // 按热度排序，取前5
    };
  }
}

// ============== 交易信号生成 ==============
class TradingSignalGenerator {
  static generateSignal(symbol, sentimentIndex) {
    if (!sentimentIndex) {
      return {
        symbol,
        signal: 'NO_TRADE',
        confidence: 0,
        reason: '数据不足',
      };
    }

    const avgScore = parseFloat(sentimentIndex.avg_score);
    const fakeRatio = sentimentIndex.fake_news_count / sentimentIndex.total_news;
    const bullishRatio = parseFloat(sentimentIndex.sentiment_distribution.bullish_ratio) / 100;
    const hasOverheat = sentimentIndex.patterns.some(p => p.type === 'sentiment_overheat');
    const hasReversal = sentimentIndex.patterns.some(p => p.type.includes('reversal'));

    let signal = 'NO_TRADE';
    let confidence = 50;
    let reason = [];
    let strategy = '观望';
    let riskLevel = '低';

    // 规则1：强看涨信号（avgScore > 1.5）
    if (avgScore > 1.5 && fakeRatio < 0.3 && !hasOverheat) {
      signal = 'LONG';
      confidence = Math.min(85, 60 + avgScore * 10);
      reason.push(`情绪指数 ${avgScore.toFixed(2)} 处于强看涨`);
      reason.push(`虚假利好占比仅 ${(fakeRatio * 100).toFixed(1)}%，可信度高`);
      strategy = bullishRatio > 0.7 ? '追涨' : '低吸';
      riskLevel = '低';
    }
    // 规则2：中等看涨信号（0.5 < avgScore <= 1.5）
    else if (avgScore > 0.5 && fakeRatio < 0.4) {
      signal = 'LONG';
      confidence = Math.min(70, 50 + avgScore * 15);
      reason.push(`情绪指数 ${avgScore.toFixed(2)} 处于温和看涨`);
      strategy = '低吸';
      riskLevel = '中';
    }
    // 规则3：虚假利好警告
    else if (signal === 'LONG' && fakeRatio > 0.4) {
      confidence = Math.max(30, confidence - 30);
      reason.push(`⚠️ 虚假利好占比 ${(fakeRatio * 100).toFixed(1)}%，存在提前炒作风险`);
      riskLevel = '高';
    }
    // 规则4：过热警告
    else if (hasOverheat && signal === 'LONG') {
      confidence = Math.max(30, confidence - 25);
      reason.push(`⚠️ 情绪过热信号，可能面临高位回调`);
      riskLevel = '高';
    }
    // 规则5：强看跌信号
    else if (avgScore < -1.5) {
      signal = 'SHORT';
      confidence = Math.min(80, 60 + Math.abs(avgScore) * 10);
      reason.push(`情绪指数 ${avgScore.toFixed(2)} 处于强看跌`);
      strategy = '逢高做空';
      riskLevel = '低';
    }
    // 规则6：中等看跌信号
    else if (avgScore < -0.5) {
      signal = 'SHORT';
      confidence = Math.min(65, 45 + Math.abs(avgScore) * 15);
      reason.push(`情绪指数 ${avgScore.toFixed(2)} 处于温和看跌`);
      strategy = '逢高做空';
      riskLevel = '中';
    }
    // 规则7：反转机会
    else if (hasReversal && Math.abs(avgScore) > 0.3) {
      signal = Math.abs(avgScore) > 0 ? (avgScore > 0 ? 'LONG' : 'SHORT') : 'NO_TRADE';
      confidence = Math.min(60, 40 + Math.abs(avgScore) * 10);
      strategy = '反转交易';
      riskLevel = '中';
      reason.push('识别到情绪反转机会');
    }

    // 信心度调整
    if (sentimentIndex.total_news < 3) {
      confidence = Math.max(0, confidence - 20);
      reason.push('新闻样本量较小，可信度降低');
    }

    return {
      symbol,
      signal,
      confidence: Math.round(confidence),
      strategy,
      risk_level: riskLevel,
      reasons: reason,
      sentiment_index: {
        score: parseFloat(sentimentIndex.avg_score),
        bullish_ratio: sentimentIndex.sentiment_distribution.bullish_ratio,
        bearish_ratio: sentimentIndex.sentiment_distribution.bearish_ratio,
        fake_news_ratio: (fakeRatio * 100).toFixed(1) + '%',
        overheat_detected: hasOverheat,
      },
    };
  }
}

// ============== 主程序 ==============
async function main() {
  console.log('\n' + '='.repeat(100));
  console.log('🔍 美股新闻深度分析 - 可交易信号生成');
  console.log('='.repeat(100) + '\n');

  const allResults = [];

  // 模拟新闻数据（实际应该从 usNews.js 获取）
  const mockNewsData = {
    'NASDAQ:MPWR': [
      {
        title: 'MPWR Q1 Earnings Beat Expectations, Raises FY Guidance',
        content: 'Monolithic Power Systems exceeded analyst estimates with strong revenue growth and expanded margins.',
        date: '2026-04-21',
        source: 'Reuters',
        upvotes: 150,
        comments: 45,
      },
      {
        title: 'MPWR Rockets Higher on AI Demand Surge',
        content: 'The semiconductor company benefits from accelerating AI infrastructure buildout.',
        date: '2026-04-20',
        source: 'TradingView',
        upvotes: 320,
        comments: 120,
      },
      {
        title: 'Analyst Upgrade: MPWR Price Target Raised to $85',
        content: 'Goldman Sachs upgrades MPWR to Buy, citing strong positioning in AI/datacenter segment.',
        date: '2026-04-19',
        source: 'StockTwits',
        upvotes: 280,
        comments: 95,
      },
      {
        title: 'MPWR Could Potentially Reach $100 - Market Rumors',
        content: 'Unconfirmed sources suggest major data center contracts in pipeline. Speculation only.',
        date: '2026-04-18',
        source: 'Reddit WSB',
        upvotes: 450,
        comments: 200,
      },
      {
        title: 'MPWR Supply Chain Risk: Shortage May Impact Production',
        content: 'Concerns about wafer availability could pressure margins in coming quarters.',
        date: '2026-04-17',
        source: 'Seeking Alpha',
        upvotes: 120,
        comments: 50,
      },
    ],
    'NYSE:ENVA': [
      {
        title: 'ENVA Reports Strong Revenue Growth in Energy Storage',
        content: 'Envirotech announces 35% YoY revenue increase driven by renewable energy demand.',
        date: '2026-04-21',
        source: 'Reuters',
        upvotes: 180,
        comments: 60,
      },
      {
        title: 'Bullish on ENVA: New Green Energy Policy Could Drive Demand',
        content: 'Government incentives for renewable energy adoption may boost ENVA sales.',
        date: '2026-04-20',
        source: 'TradingView',
        upvotes: 220,
        comments: 75,
      },
      {
        title: 'ENVA Trading at New Highs - To the Moon?',
        content: 'Retail investors go wild. Everyone talking about ENVA. Could hit $50 soon.',
        date: '2026-04-19',
        source: 'Reddit WSB',
        upvotes: 580,
        comments: 250,
      },
      {
        title: 'Speculation: ENVA May Merge with Bigger Energy Company',
        content: 'Rumors circulating about potential partnership. Sources say talks ongoing.',
        date: '2026-04-18',
        source: 'StockTwits',
        upvotes: 350,
        comments: 130,
      },
      {
        title: 'ENVA Competition Intensifying in Energy Storage Market',
        content: 'New entrants are pressuring margins as market becomes more competitive.',
        date: '2026-04-17',
        source: 'Seeking Alpha',
        upvotes: 95,
        comments: 35,
      },
    ],
  };

  // 为所有股票添加模拟数据
  for (const symbol of STOCKS_TO_ANALYZE) {
    if (!mockNewsData[symbol]) {
      mockNewsData[symbol] = [
        {
          title: `${symbol} News Aggregate - Market Update`,
          content: 'Limited news coverage. Monitor for catalyst events.',
          date: new Date().toISOString().split('T')[0],
          source: 'News Aggregator',
          upvotes: 50,
          comments: 15,
        },
      ];
    }
  }

  // 分析每支股票
  for (const symbol of STOCKS_TO_ANALYZE) {
    const news = mockNewsData[symbol] || [];
    const sentimentIndex = NewsAnalyzer.buildSentimentIndex(news);
    const signal = TradingSignalGenerator.generateSignal(symbol, sentimentIndex);

    allResults.push({
      symbol,
      sentiment_index: sentimentIndex,
      signal,
    });
  }

  // 按信号强度排序
  allResults.sort((a, b) => b.signal.confidence - a.signal.confidence);

  // 输出结果
  console.log('📊 交易信号排行榜 (按置信度排序)\n');
  console.log('信号类型: ✅ LONG (做多) | ❌ SHORT (做空) | ⏸️  NO_TRADE (观望)\n');

  allResults.forEach((result, idx) => {
    const { symbol, signal, sentiment_index } = result;
    const emoji = signal.signal === 'LONG' ? '✅' : (signal.signal === 'SHORT' ? '❌' : '⏸️ ');

    console.log(`${idx + 1}. ${emoji} ${symbol.padEnd(15)} | 信号: ${signal.signal.padEnd(10)} | 置信: ${signal.confidence}%`);
    console.log(`   策略: ${signal.strategy.padEnd(10)} | 风险: ${signal.risk_level}`);
    console.log(`   情绪指数: ${sentiment_index?.avg_score || 'N/A'} | 看涨/看跌: ${sentiment_index?.sentiment_distribution.bullish_ratio || 'N/A'} / ${sentiment_index?.sentiment_distribution.bearish_ratio || 'N/A'}`);

    if (signal.reasons.length > 0) {
      console.log(`   原因:`);
      signal.reasons.forEach(reason => {
        console.log(`     • ${reason}`);
      });
    }

    if (sentiment_index?.patterns && sentiment_index.patterns.length > 0) {
      console.log(`   关键模式:`);
      sentiment_index.patterns.forEach(pattern => {
        console.log(`     ⚡ ${pattern.description} (${pattern.implication})`);
      });
    }

    console.log('');
  });

  // 保存详细报告
  const report = {
    timestamp: new Date().toISOString(),
    total_stocks: STOCKS_TO_ANALYZE.length,
    analysis_results: allResults.map(r => ({
      symbol: r.symbol,
      signal: r.signal,
      sentiment_index: r.sentiment_index,
    })),
    summary: {
      long_signals: allResults.filter(r => r.signal.signal === 'LONG').length,
      short_signals: allResults.filter(r => r.signal.signal === 'SHORT').length,
      no_trade_signals: allResults.filter(r => r.signal.signal === 'NO_TRADE').length,
      avg_confidence: Math.round(allResults.reduce((sum, r) => sum + r.signal.confidence, 0) / allResults.length),
    },
  };

  const reportFile = `us_news_analysis_${new Date().toISOString().replace(/[:.]/g, '-').split('T')[0]}_${new Date().getHours()}-${new Date().getMinutes()}.json`;
  writeFileSync(reportFile, JSON.stringify(report, null, 2));

  console.log('='.repeat(100));
  console.log(`✅ 详细报告已保存: ${reportFile}`);
  console.log(`   • ${report.summary.long_signals} 个 LONG 信号`);
  console.log(`   • ${report.summary.short_signals} 个 SHORT 信号`);
  console.log(`   • ${report.summary.no_trade_signals} 个 NO_TRADE 信号`);
  console.log(`   • 平均置信度: ${report.summary.avg_confidence}%`);
  console.log('='.repeat(100) + '\n');
}

main().catch(console.error);
