#!/usr/bin/env node

import { searchNews, getMarketSentiment } from './src/core/webNews.js';
import { writeFileSync, readFileSync } from 'fs';

// 情感分析类
class NewsAnalyzer {
  constructor() {
    this.bullishWords = ['涨', '买入', '看好', '利好', '上涨', '增长', '突破', '强势', '优秀', '超预期'];
    this.bearishWords = ['跌', '卖出', '看空', '利空', '下跌', '衰退', '破位', '弱势', '不足', '差强'];
  }

  analyzeSentiment(text) {
    if (!text) return 0;
    const lower = text.toLowerCase();
    let bullish = this.bullishWords.filter(w => lower.includes(w)).length;
    let bearish = this.bearishWords.filter(w => lower.includes(w)).length;
    if (bullish > bearish) return 1;
    if (bearish > bullish) return -1;
    return 0;
  }

  classifyNews(title) {
    if (title.includes('财报') || title.includes('业绩')) return 'earnings';
    if (title.includes('政策') || title.includes('监管')) return 'policy';
    if (title.includes('并购') || title.includes('重组')) return 'merger';
    if (title.includes('行业')) return 'industry';
    if (title.includes('风险') || title.includes('诉讼')) return 'risk';
    return 'other';
  }

  assessWeight(title) {
    if (title.includes('战略') || title.includes('核心')) return 5;
    if (title.includes('新产品') || title.includes('新市场')) return 3;
    return 2;
  }
}

async function main() {
  console.log('📰 开始分析推荐股票的新闻情感...\n');

  let symbols = [];
  try {
    const content = readFileSync('./watchlist/cn_selected.txt', 'utf8').trim();
    symbols = content.split(',').map(s => s.trim()).filter(s => s);
    console.log(`✅ 加载 ${symbols.length} 支股票\n`);
  } catch (e) {
    console.error(`❌ 错误: ${e.message}`);
    return;
  }

  const analyzer = new NewsAnalyzer();
  const allResults = [];
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  // 分析每支股票
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    console.log(`[${i + 1}/${symbols.length}] ${symbol}...`);

    try {
      const newsData = await searchNews({ symbol, count: 15, source: 'all' });

      if (!newsData.success) {
        console.log(`  ⚠️ 无新闻数据`);
        continue;
      }

      const allNews = [...newsData.research, ...newsData.news, ...newsData.forum];
      
      if (allNews.length === 0) {
        console.log(`  ⚠️ 无新闻`);
        continue;
      }

      // 分析每条新闻
      const enriched = allNews.map(item => {
        const title = item.title || '';
        const text = title + ' ' + (item.snippet || item.content || '');
        const sentiment = analyzer.analyzeSentiment(text);
        const type = analyzer.classifyNews(title);
        const weight = analyzer.assessWeight(title);

        return {
          title,
          date: item.date,
          sentiment,
          type,
          weight,
          impact: sentiment * weight,
        };
      }).sort((a, b) => new Date(b.date) - new Date(a.date));

      // 计算情绪指数
      const bullish = enriched.filter(n => n.sentiment === 1).length;
      const bearish = enriched.filter(n => n.sentiment === -1).length;
      const neutral = enriched.filter(n => n.sentiment === 0).length;
      const total = enriched.length;
      
      const score = ((bullish - bearish) / total * 100).toFixed(1);
      const sentiment = score > 10 ? '看涨' : score < -10 ? '看跌' : '中性';
      const impact = enriched.reduce((s, n) => s + n.impact, 0);

      // 识别模式
      const recent = enriched.slice(0, Math.max(1, Math.ceil(total / 3)));
      const older = enriched.slice(-Math.max(1, Math.ceil(total / 3)));
      const recentAvg = recent.reduce((s, n) => s + n.sentiment, 0) / recent.length;
      const olderAvg = older.reduce((s, n) => s + n.sentiment, 0) / older.length;
      
      let trend = '平稳';
      if (recentAvg > olderAvg + 0.3) trend = '向好';
      else if (recentAvg < olderAvg - 0.3) trend = '恶化';

      // 生成交易信号
      let signal = '观望';
      let confidence = 50;
      
      if (score > 20 && bullish > bearish * 1.5) {
        signal = '看好(Long)';
        confidence = Math.min(85, 50 + Math.abs(score) * 0.5);
      } else if (score < -20 && bearish > bullish * 1.5) {
        signal = '看空(Short)';
        confidence = Math.min(85, 50 + Math.abs(score) * 0.5);
      }

      const result = {
        symbol,
        total_news: total,
        sentiment_score: score,
        overall_sentiment: sentiment,
        bullish: bullish,
        bearish: bearish,
        neutral: neutral,
        trend,
        impact_score: Math.round(impact),
        trading_signal: signal,
        confidence: confidence,
        top_news: enriched.slice(0, 3),
      };

      allResults.push(result);

      console.log(`  📊 情绪: ${sentiment} (得分: ${score}) | 看涨: ${bullish} 看跌: ${bearish}`);
      console.log(`  🎯 信号: ${signal} (置信度: ${confidence}%)`);

      await new Promise(resolve => setTimeout(resolve, 800));

    } catch (err) {
      console.log(`  ❌ 失败: ${err.message}`);
    }
  }

  // 保存结果
  const outputFile = `news_sentiment_${timestamp}.json`;
  writeFileSync(outputFile, JSON.stringify(allResults, null, 2));

  // 输出摘要
  console.log('\n' + '='.repeat(80));
  console.log('📊 交易信号综合报告');
  console.log('='.repeat(80) + '\n');

  const longs = allResults.filter(r => r.trading_signal.includes('看好'));
  const shorts = allResults.filter(r => r.trading_signal.includes('看空'));
  const waits = allResults.filter(r => r.trading_signal === '观望');

  if (longs.length > 0) {
    console.log('🟢 看好信号 (Long):');
    longs.forEach(r => {
      console.log(`  ${r.symbol.padEnd(15)} | 情绪: ${r.overall_sentiment.padEnd(4)} | 信号: ${r.trading_signal} | 置信: ${r.confidence}%`);
      console.log(`    看涨/看跌/中性: ${r.bullish}/${r.bearish}/${r.neutral}`);
    });
    console.log();
  }

  if (shorts.length > 0) {
    console.log('🔴 看空信号 (Short):');
    shorts.forEach(r => {
      console.log(`  ${r.symbol.padEnd(15)} | 情绪: ${r.overall_sentiment.padEnd(4)} | 信号: ${r.trading_signal} | 置信: ${r.confidence}%`);
    });
    console.log();
  }

  if (waits.length > 0) {
    console.log('⚪ 观望信号:');
    waits.forEach(r => {
      console.log(`  ${r.symbol.padEnd(15)} | 情绪: ${r.overall_sentiment} (得分: ${r.sentiment_score})`);
    });
    console.log();
  }

  console.log('='.repeat(80));
  console.log(`✅ 分析完成！`);
  console.log(`📁 详细结果: ${outputFile}`);
  console.log(`\n汇总: ${longs.length} 个看好 | ${shorts.length} 个看空 | ${waits.length} 个观望`);
}

main().catch(console.error);
