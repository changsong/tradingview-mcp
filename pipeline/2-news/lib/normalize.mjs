/**
 * normalize.mjs — 把 raw Σ(sentiment × finalWeight) 映射到 0-100 区间
 *
 * 设计：
 *  - 中性（rawScore=0）→ 50
 *  - 全部正面（rawScore=Σ|w|） → 100
 *  - 全部负面（rawScore=-Σ|w|）→ 0
 *  - 数据少时用 max(Σ|w|, BASELINE) 作分母，避免 2-4 条同向新闻直接顶到极值
 *    BASELINE=12 ≈ 6 条均权重 ~2 的"平衡"新闻流；少于这个量级会被往中性 50 拉
 */

const BASELINE_WEIGHT = 12;

/**
 * @param {number} rawScore   Σ(sentiment_i × finalWeight_i)
 * @param {Array}  tagged     已计权重的新闻列表（用于求 maxPossible）
 * @returns {number}          0..100 整数
 */
export function normalizeScore(rawScore, tagged) {
  if (!tagged || tagged.length === 0) return 50;
  const maxPossible = tagged.reduce((s, t) => s + Math.abs(t.finalWeight ?? 0), 0);
  const denom = Math.max(maxPossible, BASELINE_WEIGHT);
  const norm  = (rawScore / denom) * 50 + 50;
  return Math.max(0, Math.min(100, Math.round(norm)));
}

/**
 * 计算 raw 与 normalized 同时返回，便于上游记录两者
 */
export function calcScores(tagged) {
  const raw = tagged.reduce((s, t) => s + (t.sentiment ?? 0) * (t.finalWeight ?? 0), 0);
  const norm = normalizeScore(raw, tagged);
  const positive_weight_sum = tagged.filter(t => t.sentiment > 0).reduce((s, t) => s + (t.finalWeight ?? 0), 0);
  const negative_weight_sum = tagged.filter(t => t.sentiment < 0).reduce((s, t) => s + (t.finalWeight ?? 0), 0);
  return {
    raw: +raw.toFixed(2),
    normalized: norm,
    positive_weight_sum: +positive_weight_sum.toFixed(2),
    negative_weight_sum: +negative_weight_sum.toFixed(2),
  };
}
