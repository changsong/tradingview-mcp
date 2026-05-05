/**
 * weight.mjs — 三段乘积权重 + 时间衰减
 *
 *   finalWeight = sourceAuthority(item.source, item.type)
 *               × typeMultiplier(newsType)
 *               × recencyDecay(item.date, today)
 *
 * 输出裁剪到 [0.5, 8]。
 */

import { SOURCE_AUTHORITY, DEFAULT_AUTHORITY, TYPE_MULTIPLIER, DEFAULT_TYPE_MULTIPLIER } from './dictionaries.mjs';

/**
 * @param {string} source 来源名（如 'Yahoo Finance'）
 * @param {string} type   item.type （'news'|'research'|'announcement'|'forum'|...）
 */
export function sourceAuthority(source, type) {
  // 优先用源名字典查表
  if (source && SOURCE_AUTHORITY[source] !== undefined) return SOURCE_AUTHORITY[source];

  // 回退：按 type 推断
  if (type === 'announcement')        return 4.5;
  if (type === 'research')            return 4.0;
  if (type === 'analysis')            return 2.5;
  if (type === 'news')                return 2.5;
  if (type === 'forum' || type === 'market_view') return 1.2;
  return DEFAULT_AUTHORITY;
}

export function typeMultiplier(newsType) {
  return TYPE_MULTIPLIER[newsType] ?? DEFAULT_TYPE_MULTIPLIER;
}

/**
 * 时间衰减：今天=1.0，每过一天衰减约 15%。7 天前为 0.30。
 * @param {string} dateStr 'YYYY-MM-DD' 或 ISO；空值视为最旧（0.3）
 * @param {Date}   today
 */
export function recencyDecay(dateStr, today = new Date()) {
  if (!dateStr) return 0.3;
  const d = new Date(String(dateStr).slice(0, 10));
  if (isNaN(d.getTime())) return 0.3;
  const daysAgo = Math.max(0, Math.round((today.getTime() - d.getTime()) / 86400_000));
  const table = [1.0, 0.85, 0.72, 0.6, 0.5, 0.42, 0.36, 0.3];
  return daysAgo >= table.length ? 0.3 : table[daysAgo];
}

/**
 * 计算单条新闻的最终权重
 * @returns {{ finalWeight: number, sourceAuthority: number, typeMul: number, recency: number }}
 */
export function calcWeight(item, newsType, today = new Date()) {
  const auth   = sourceAuthority(item.source, item.type);
  const tmul   = typeMultiplier(newsType);
  const rec    = recencyDecay(item.date, today);
  const raw    = auth * tmul * rec;
  const finalW = Math.max(0.5, Math.min(8, raw));
  return {
    finalWeight: +finalW.toFixed(2),
    sourceAuthority: auth,
    typeMul: tmul,
    recency: +rec.toFixed(2),
  };
}
