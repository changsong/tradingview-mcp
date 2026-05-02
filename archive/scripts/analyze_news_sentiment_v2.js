#!/usr/bin/env node
/**
 * 简化版新闻情感分析脚本 - 快速测试版本
 */

import { searchNews } from './src/core/webNews.js';
import { writeFileSync, readFileSync } from 'fs';

async function analyzeNewsForStocks() {
  let selectedStocks = [];
  try {
    const content = readFileSync('./watchlist/cn_selected.txt', 'utf8').trim();
    selectedStocks = content.split(',').map(s => s.trim());
  } catch (err) {
    console.error('❌ 无法读取推荐股票列表:', err.message);
    return;
  }

  console.log();

  const results = [];

  for (let i = 0; i < selectedStocks.length; i++) {
    const symbol = selectedStocks[i];
    console.log();

    try {
      const newsResult = await searchNews({ symbol, count: 10 });
      if (!newsResult.success) {
        console.log();
        continue;
      }

      const allNews = [
        ...(newsResult.research || []),
        ...(newsResult.news || []),
        ...(newsResult.forum || []),
      ].slice(0, 15);

      if (allNews.length === 0) {
        console.log();
        continue;
      }

      results.push({
        symbol,
        name: newsResult.name || symbol,
        total_news: allNews.length,
        research: newsResult.research?.length || 0,
        news: newsResult.news?.length || 0,
        forum: newsResult.forum?.length || 0,
        sentiment_analysis: newsResult.sentiment_analysis,
        heat_metrics: newsResult.heat_metrics,
        all_news: allNews.slice(0, 5),
      });

      console.log();

    } catch (err) {
      console.error(, err.message);
    }

    await new Promise(r => setTimeout(r, 2000));
  }

  const file = ;
  writeFileSync(file, JSON.stringify(results, null, 2));
  console.log();

  return results;
}

analyzeNewsForStocks().catch(console.error);
