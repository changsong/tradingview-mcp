/**
 * 逐股新闻情绪分析 — 可复用单元。
 *
 * 从 analyze_cn_news.mjs 抽出（行为等价），供 2-news 主流程与 4.5-gap 的
 * 新闻展示步骤共用。不做任何文件写入（pruneWatchlist 只属于 2-news 阶段）。
 */

import { searchNews, extractCode } from '../../../src/core/webNews.js';
import { analyzeStockData } from './analyze.mjs';
import { filterRelevantCandidates } from './relevance.mjs';
import { createLimiter } from '../../../src/core/concurrency.js';

export function makeWindow(daysBack = 7) {
  const today = new Date();
  const cutoff = new Date(today);
  cutoff.setDate(today.getDate() - daysBack);
  return { today, cutoff, cutoffStr: cutoff.toISOString().split('T')[0], todayStr: today.toISOString().split('T')[0] };
}

export function isInWindow(dateStr, { cutoff, today }) {
  if (!dateStr) return false;
  const d = new Date(String(dateStr).slice(0, 10));
  return !Number.isNaN(d.getTime()) && d >= cutoff && d <= today;
}

export function makeCandidateFilter(window, market) {
  return function filterCandidatesForEnrichment(items, ctx) {
    const recent = (items || []).filter(item => isInWindow(item.date, window));
    const outOfWindow = (items || []).length - recent.length;
    const filtered = filterRelevantCandidates(recent, ctx.symbol, ctx.name, { market });
    return {
      ...filtered,
      dropped: filtered.dropped + outOfWindow,
      reasons: {
        ...filtered.reasons,
        ...(outOfWindow ? { out_of_window: outOfWindow } : {}),
      },
    };
  };
}

/**
 * @param {string[]} symbols
 * @param {object} opts
 * @returns {Promise<Array<object>>}
 */
export async function analyzeSymbols(symbols, {
  market = 'cn',
  daysBack = 7,
  newsCount = 20,
  enrichTopN = newsCount,
  researchEnrichTopN = Math.ceil(newsCount / 2),
  concurrency = 8,
  llm = true,
  log = true,
} = {}) {
  const window = makeWindow(daysBack);
  const candidateFilterFn = makeCandidateFilter(window, market);
  const write = log ? (s) => process.stdout.write(s) : () => {};

  async function analyzeStock(symbol) {
    const code = extractCode(symbol);
    write(`  [${symbol}] 抓取中...`);

    try {
      const result = await searchNews({
        symbol,
        source: 'news',
        count: newsCount,
        enrich: 'candidate',
        candidateFilterFn,
        enrichTopN,
        researchEnrichTopN,
      });

      const allNews = [
        ...result.news.map(n     => ({ ...n, category: 'news'     })),
        ...result.research.map(n => ({ ...n, category: 'research' })),
      ];

      const r = await analyzeStockData(allNews, {
        symbol,
        name:   result.name || code,
        today: window.today,
        cutoff: window.cutoff,
        market,
        classifierFn: llm ? undefined : async () => null,
      });

      write(` → ${r.news_count}条有效 / ${r.news_dropped}过滤, score=${r.score}\n`);

      return {
        symbol,
        name: result.name || code,
        ...r,
        sources_status: result.sources_status,
        performance: {
          ...(result.performance || {}),
          ...(r.performance || {}),
        },
      };
    } catch (err) {
      write(` ❌ 错误: ${err.message}\n`);
      return {
        symbol, name: code,
        score: 50, score_raw: 0,
        signal: '⚪ No Trade (抓取失败)', strategy: err.message,
        suitableFor: '-', confidence: '-',
        patterns: [], tagged: [],
        positive_factors: [], negative_factors: [],
        news_count: 0, news_dropped: 0,
        score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
      };
    }
  }

  const results = [];
  const limiter = createLimiter(concurrency);
  let completed = 0;

  const settled = await Promise.allSettled(
    symbols.map((s) =>
      limiter(async () => {
        const r = await analyzeStock(s);
        completed++;
        if (log) process.stdout.write(`  [${completed}/${symbols.length}] ${s} 完成\n`);
        return r;
      })
    )
  );
  settled.forEach(r => {
    if (r.status === 'fulfilled') results.push(r.value);
    else console.warn('  ⚠ 异常:', r.reason?.message);
  });

  return results;
}
