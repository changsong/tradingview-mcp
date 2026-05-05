/**
 * analyze.mjs — 共享的「单股新闻打分」编排
 *
 * 输入：原始新闻列表（已合并 news+research+forum）+ symbol/name + 市场
 * 输出：打好标签 + 算好分 + 模式 + 信号 的结构，供主脚本写 JSON
 *
 * 不负责 IO，便于单测 + 复用 CN/US。
 */

import { filterRelevant } from './relevance.mjs';
import { classifyType }    from './classify.mjs';
import { scoreSentiment }  from './sentiment.mjs';
import { calcWeight }      from './weight.mjs';
import { calcScores }      from './normalize.mjs';
import { detectPatterns }  from './patterns.mjs';
import { generateSignal }  from './signal.mjs';

/**
 * @param {object[]} rawItems   合并后的新闻列表（每条至少含 title/date/source/type）
 * @param {object} ctx
 * @param {string} ctx.symbol
 * @param {string|string[]} ctx.name  公司名 + 别名（用于 relevance）
 * @param {Date}   ctx.today
 * @param {Date}   ctx.cutoff
 * @param {'cn'|'us'} ctx.market
 * @returns {object}
 */
export function analyzeStockData(rawItems, ctx) {
  const { symbol, name, today, cutoff, market } = ctx;
  const initialCount = rawItems?.length || 0;

  // ── 1) 日期窗口过滤 ──
  const recent = (rawItems || []).filter(n => isInWindow(n.date, cutoff, today));

  // ── 2) 相关性 + 噪音 + 去重 ──
  const { kept, dropped, reasons } = filterRelevant(recent, symbol, name, { market });

  if (kept.length === 0) {
    const isCn = market === 'cn';
    return {
      tagged: [],
      score: 50, score_raw: 0,
      score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
      news_count: 0, news_dropped: dropped + (initialCount - recent.length),
      drop_reasons: reasons,
      patterns: [],
      signal: isCn ? '⚪ No Trade (无数据)' : 'NEUTRAL No Trade (No Data)',
      strategy: isCn ? '近期无相关有效新闻' : 'No relevant news in window',
      suitableFor: isCn ? '观望' : 'Watch',
      confidence: '-',
      positive_factors: [],
      negative_factors: [],
    };
  }

  // ── 3) 打标签：type / sentiment / weight ──
  const tagged = kept.map(item => {
    const type      = classifyType(item, market);
    const sentiment = scoreSentiment(item, type, market);
    const w         = calcWeight(item, type, today);
    return {
      ...item,
      type,
      sentiment,
      weight: Math.round(w.finalWeight),  // 兼容旧字段（int 1-5 区间）
      finalWeight: w.finalWeight,
      sourceAuthority: w.sourceAuthority,
      typeMul: w.typeMul,
      recencyFactor: w.recency,
    };
  });

  // ── 4) 评分 ──
  const scores = calcScores(tagged);

  // ── 5) 模式 ──
  const patterns = detectPatterns(tagged, market);

  // ── 6) 信号 ──
  const sig = generateSignal(scores.normalized, patterns, tagged, market);

  // ── 7) 利好 / 利空摘要（按 finalWeight 排序）──
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
