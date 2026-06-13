/**
 * analyze.mjs — 共享的「单股新闻打分」编排
 *
 * 输入：原始新闻列表（已合并 news+research+forum）+ symbol/name + 市场
 * 输出：打好标签 + 算好分 + 模式 + 信号 的结构，供主脚本写 JSON
 *
 * 分类/情绪：调 LLM（lib/llm_classify.mjs）；权重：仍由 lib/weight.mjs 计算
 * （source × typeMul × recency），LLM 给的 is_real_catalyst / confidence 仅作
 *  finalWeight 的折减系数。
 *
 * 不负责 IO，便于单测 + 复用 CN/US。
 */

import { filterRelevant }   from './relevance.mjs';
import { calcWeight }       from './weight.mjs';
import { calcScores }       from './normalize.mjs';
import { detectPatterns }   from './patterns.mjs';
import { generateSignal }   from './signal.mjs';
import { classifyByLLM }    from './llm_classify.mjs';
import { mapLLMSentiment }  from './llm_common.mjs';
import { performance } from 'node:perf_hooks';

/**
 * @param {object[]} rawItems   合并后的新闻列表（每条至少含 title/date/source/type）
 * @param {object} ctx
 * @param {string} ctx.symbol
 * @param {string|string[]} ctx.name  公司名 + 别名（用于 relevance）
 * @param {Date}   ctx.today
 * @param {Date}   ctx.cutoff
 * @param {'cn'|'us'} ctx.market
 * @param {Function} [ctx.classifierFn]  可选：注入分类器（测试用）。签名同 classifyByLLM。
 * @returns {Promise<object>}
 */
export async function analyzeStockData(rawItems, ctx) {
  const { symbol, name, today, cutoff, market, classifierFn } = ctx;
  const initialCount = rawItems?.length || 0;
  const isCn = market === 'cn';
  const performanceMetrics = { date_filter_ms: 0, relevance_ms: 0, llm_ms: 0, scoring_ms: 0 };
  const msSince = start => Math.round(performance.now() - start);

  // ── 1) 日期窗口过滤 ──
  const dateFilterStart = performance.now();
  const recent = (rawItems || []).filter(n => isInWindow(n.date, cutoff, today));
  performanceMetrics.date_filter_ms = msSince(dateFilterStart);

  // ── 2) 相关性 + 噪音 + 去重 ──
  const relevanceStart = performance.now();
  const { kept, dropped, reasons } = filterRelevant(recent, symbol, name, { market });
  performanceMetrics.relevance_ms = msSince(relevanceStart);

  if (kept.length === 0) {
    return noDataResult({
      reason: isCn ? '近期无相关有效新闻' : 'No relevant news in window',
      news_dropped: dropped + (initialCount - recent.length),
      drop_reasons: reasons,
      market,
      performance: performanceMetrics,
    });
  }

  // ── 3) LLM 分类 + 情绪 + 催化标记 ──
  const classifier = classifierFn || classifyByLLM;
  const llmStart = performance.now();
  const llmResults = await classifier(kept, { symbol, name, market });
  performanceMetrics.llm_ms = msSince(llmStart);

  if (!llmResults) {
    // LLM 失败 / 未启用：按设计走 No Data，不退回关键字
    return noDataResult({
      reason: isCn ? 'LLM 不可用或调用失败（不走关键字降级）' : 'LLM unavailable or call failed (no keyword fallback)',
      news_dropped: dropped + (initialCount - recent.length),
      drop_reasons: reasons,
      market,
      performance: performanceMetrics,
    });
  }

  // ── 4) 组装 tagged：LLM 出 type/sentiment，weight 仍走确定性公式 ──
  const scoringStart = performance.now();
  const tagged = kept.map((item, i) => {
    const r = llmResults[i] || {};
    const type = r.type;                                  // 已在 alignResults 里 normalize
    const sentiment = mapLLMSentiment(r.sentiment) ?? 0;  // -2..+2 → -1/0/+1
    const w = calcWeight(item, type, today);

    let finalWeight = w.finalWeight;
    if (r.is_real_catalyst === false)        finalWeight *= 0.4;
    if ((r.confidence ?? 0) < 0.5)           finalWeight *= 0.5;
    finalWeight = +Math.max(0.5, Math.min(8, finalWeight)).toFixed(2);

    return {
      ...item,
      type,
      sentiment,
      weight: Math.round(finalWeight),
      finalWeight,
      sourceAuthority: w.sourceAuthority,
      typeMul: w.typeMul,
      recencyFactor: w.recency,
      // 审计字段（向后兼容、可选消费）
      llm_reviewed: true,
      llm_confidence: r.confidence,
      llm_is_real_catalyst: r.is_real_catalyst,
      llm_reasoning: r.reasoning || '',
    };
  });

  // ── 5) 评分 ──
  const scores = calcScores(tagged);

  // ── 6) 模式 ──
  const patterns = detectPatterns(tagged, market);

  // ── 7) 信号 ──
  const sig = generateSignal(scores.normalized, patterns, tagged, market);

  // ── 8) 利好 / 利空摘要（按 finalWeight 排序）──
  const fmt = i => `[${i.type}|w${i.finalWeight}] ${(i.title || '').slice(0, 70)}`;
  const positive_factors = tagged
    .filter(i => i.sentiment > 0)
    .sort((a, b) => b.finalWeight - a.finalWeight)
    .slice(0, 3)
    .map(fmt);
  const negative_factors = tagged
    .filter(i => i.sentiment < 0)
    .sort((a, b) => b.finalWeight - a.finalWeight)
    .slice(0, 3)
    .map(fmt);
  performanceMetrics.scoring_ms = msSince(scoringStart);

  return {
    tagged,
    score: scores.normalized,
    score_raw: scores.raw,
    score_components: {
      positive_weight_sum: scores.positive_weight_sum,
      negative_weight_sum: scores.negative_weight_sum,
      news_effective_count: tagged.length,
      news_dropped_count: dropped + (initialCount - recent.length),
    },
    news_count: tagged.length,
    news_dropped: dropped + (initialCount - recent.length),
    drop_reasons: reasons,
    patterns,
    signal: sig.signal,
    strategy: sig.strategy,
    suitableFor: sig.suitableFor,
    confidence: sig.confidence,
    positive_factors,
    negative_factors,
    performance: performanceMetrics,
  };
}

function noDataResult({ reason, news_dropped, drop_reasons, market, performance }) {
  const isCn = market === 'cn';
  return {
    tagged: [],
    score: 50, score_raw: 0,
    score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
    news_count: 0, news_dropped,
    drop_reasons,
    patterns: [],
    signal: isCn ? '⚪ No Trade (无数据)' : 'NEUTRAL No Trade (No Data)',
    strategy: reason,
    suitableFor: isCn ? '观望' : 'Watch',
    confidence: '-',
    positive_factors: [],
    negative_factors: [],
    performance,
  };
}

function isInWindow(dateStr, cutoff, today) {
  if (!dateStr) return false;
  try {
    const d = new Date(String(dateStr).slice(0, 10));
    if (isNaN(d.getTime())) return false;
    return d >= cutoff && d <= today;
  } catch { return false; }
}
