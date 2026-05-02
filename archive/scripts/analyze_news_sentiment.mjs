#!/usr/bin/env node
import { searchNews } from './src/core/webNews.js';
import { writeFileSync, readFileSync } from 'fs';

const SENTIMENT_KEYWORDS = {
  strongly_bullish: ['涨停', '大涨', '暴涨', '起飞', '核准', '获批', '重大利好', '突破', '新高', '翻倍', '爆发'],
  bullish: ['上涨', '看涨', '抄底', '加仓', '利好', '机会', '反弹', '复苏', '改善', '增长', '做多'],
  neutral: ['观望', '回调', '震荡', '整理', '盘整', '横盘', '分歧', '不确定'],
  bearish: ['下跌', '大跌', '暴跌', '利空', '看跌', '减仓', '卖出', '破位', '业绩下滑', '风险', '减持'],
  strongly_bearish: ['跌停', '割肉', '清仓', '逃顶', '崩盘', '腰斩', '新低', '破产', '暴雷', '风险'],
};

function analyzeSentiment(text) {
  const lower = text.toLowerCase();
  let score = 0;
  let detected = [];

  for (const kw of SENTIMENT_KEYWORDS.strongly_bullish) {
    if (lower.includes(kw)) { score += 2; detected.push(kw); }
  }
  for (const kw of SENTIMENT_KEYWORDS.bullish) {
    if (lower.includes(kw)) { score += 1; detected.push(kw); }
  }
  for (const kw of SENTIMENT_KEYWORDS.bearish) {
    if (lower.includes(kw)) { score -= 1; detected.push(kw); }
  }
  for (const kw of SENTIMENT_KEYWORDS.strongly_bearish) {
    if (lower.includes(kw)) { score -= 2; detected.push(kw); }
  }

  let label = '中性';
  if (score > 2) label = '强看涨';
  else if (score > 0) label = '看涨';
  else if (score < -2) label = '强看跌';
  else if (score < 0) label = '看跌';

  return { score, label, keywords: [...new Set(detected)].slice(0, 3) };
}

function calculateDaysDiff(dateStr) {
  if (!dateStr) return 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(dateStr);
  date.setHours(0, 0, 0, 0);
  const diffMs = today - date;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

async function analyzeNewsForStocks() {
  let selectedStocks = [];
  try {
    const content = readFileSync('./watchlist/cn_selected.txt', 'utf8').trim();
    selectedStocks = content.split(',').map(s => s.trim());
  } catch (err) {
    console.error('无法读取股票列表:', err.message);
    return;
  }

  console.log(`\n开始获取 ${selectedStocks.length} 只推荐股票的新闻...\n`);

  const results = [];

  for (let i = 0; i < selectedStocks.length; i++) {
    const symbol = selectedStocks[i];
    console.log(`[${i + 1}/${selectedStocks.length}] 分析 ${symbol}...`);

    try {
      const newsResult = await searchNews({ symbol, count: 12 });
      if (!newsResult.success) {
        console.log(`  无法获取 ${symbol} 的新闻`);
        continue;
      }

      const allNews = [
        ...(newsResult.research || []),
        ...(newsResult.news || []),
        ...(newsResult.forum || []),
      ].slice(0, 20);

      if (allNews.length === 0) {
        console.log(`  没有找到 ${symbol} 的新闻`);
        continue;
      }

      let bullishCount = 0;
      let bearishCount = 0;
      let neutralCount = 0;
      let totalScore = 0;
      const topNews = [];

      for (let j = 0; j < Math.min(5, allNews.length); j++) {
        const item = allNews[j];
        const fullText = (item.title || '') + ' ' + (item.content || item.snippet || '');
        const sentiment = analyzeSentiment(fullText);
        totalScore += sentiment.score;

        if (sentiment.score > 0) bullishCount++;
        else if (sentiment.score < 0) bearishCount++;
        else neutralCount++;

        topNews.push({
          title: item.title,
          type: item.type || '其他',
          source: item.source || '未知',
          date: item.date || '未知',
          sentiment: sentiment.label,
          score: sentiment.score,
          keywords: sentiment.keywords,
          days_ago: calculateDaysDiff(item.date),
        });
      }

      const total = bullishCount + bearishCount + neutralCount;
      const avgScore = (totalScore / total).toFixed(2);

      results.push({
        symbol,
        name: newsResult.name || symbol,
        total_news_found: allNews.length,
        analysis: {
          total_analyzed: total,
          bullish: bullishCount,
          bearish: bearishCount,
          neutral: neutralCount,
          bullish_ratio: ((bullishCount / total) * 100).toFixed(1) + '%',
          bearish_ratio: ((bearishCount / total) * 100).toFixed(1) + '%',
          neutral_ratio: ((neutralCount / total) * 100).toFixed(1) + '%',
          average_sentiment_score: avgScore,
        },
        top_news: topNews,
        research_count: newsResult.research?.length || 0,
        news_count: newsResult.news?.length || 0,
        forum_count: newsResult.forum?.length || 0,
      });

      console.log(`  OK: 情感指数=${avgScore} | 看涨=${bullishCount} | 看跌=${bearishCount} | 中性=${neutralCount}`);

    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
    }

    await new Promise(r => setTimeout(r, 2000));
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const file = `news_sentiment_analysis_${timestamp}.json`;
  writeFileSync(file, JSON.stringify(results, null, 2));
  console.log(`\n已保存: ${file}`);

  // 生成摘要
  console.log('\n' + '='.repeat(80));
  console.log('新闻情感分析总结');
  console.log('='.repeat(80));

  results.forEach(r => {
    console.log(`\n${r.symbol} (${r.name})`);
    console.log(`  新闻总数: ${r.total_news_found} (研报:${r.research_count} | 快讯:${r.news_count} | 论坛:${r.forum_count})`);
    console.log(`  情感指数: ${r.analysis.average_sentiment_score}`);
    console.log(`  看涨:${r.analysis.bullish} (${r.analysis.bullish_ratio}) | 看跌:${r.analysis.bearish} (${r.analysis.bearish_ratio}) | 中性:${r.analysis.neutral}`);
    
    if (r.top_news.length > 0) {
      console.log(`  最新新闻:`);
      r.top_news.slice(0, 3).forEach(n => {
        console.log(`    - [${n.sentiment}] ${n.title.substring(0, 60)}... (${n.days_ago}天前)`);
      });
    }
  });

  return results;
}

analyzeNewsForStocks().catch(console.error);
