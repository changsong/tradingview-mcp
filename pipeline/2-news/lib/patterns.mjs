/**
 * patterns.mjs — 模式识别
 *
 * 在原 6 类基础上增加：
 *  - 催化剂集中：同一日 ≥ 3 条强权重 (finalWeight≥4) → catalyst burst
 *  - 连续空头压制：最近 3 天每天合计 sentiment<0
 *
 * 输出的 pattern 字符串与旧版接近，部分微调以便信号阈值适配新归一化分数。
 */

/**
 * @param {Array} tagged  已带 sentiment / finalWeight / type / date 的新闻
 * @param {'cn'|'us'} market
 * @returns {string[]}
 */
export function detectPatterns(tagged, market = 'cn') {
  if (!tagged || tagged.length === 0) return [];

  const sorted = [...tagged].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const half   = Math.max(1, Math.floor(sorted.length / 2));
  const recent = sorted.slice(0, half);
  const older  = sorted.slice(half);

  const scoreOf = arr => arr.reduce((s, i) => s + (i.sentiment ?? 0) * (i.finalWeight ?? 0), 0);
  const recentScore = scoreOf(recent);
  const olderScore  = older.length ? scoreOf(older) : 0;

  const patterns = [];
  const cn = market === 'cn';

  // ── 趋势（同方向持续）──
  if (recentScore > 4 && olderScore >= 0) {
    patterns.push(cn ? '情绪持续增强↑(trend)' : 'Sentiment Strengthening UP (trend)');
  }
  if (recentScore < -4 && olderScore <= 0) {
    patterns.push(cn ? '情绪持续走弱↓(trend)' : 'Sentiment Weakening DOWN (trend)');
  }

  // ── 反转 ──
  if (recentScore > 4 && olderScore < -2) {
    patterns.push(cn ? '情绪由空转多↑(reversal)' : 'Bearish-to-Bullish Reversal (reversal)');
  }
  if (recentScore < -4 && olderScore > 2) {
    patterns.push(cn ? '情绪由多转空↓(reversal)' : 'Bullish-to-Bearish Reversal (reversal)');
  }

  // ── 情绪过热（全部正面，无负面）──
  const posCount = tagged.filter(i => i.sentiment > 0).length;
  const negCount = tagged.filter(i => i.sentiment < 0).length;
  if (posCount >= 5 && negCount === 0) {
    patterns.push(cn ? '⚠️情绪过热(单边乐观,注意回调)' : 'WARNING: Overheated Sentiment (one-sided bullish)');
  }

  // ── 传闻主导 → 假利好 ──
  const rumorType = cn ? '传闻' : 'Rumor';
  const rumorCount = tagged.filter(i => i.type === rumorType).length;
  if (tagged.length > 0 && rumorCount / tagged.length > 0.5 && recentScore > 0) {
    patterns.push(cn ? '⚠️传闻主导(假利好风险)' : 'WARNING: Rumor-Driven (false positive risk)');
  }

  // ── 疑似提前炒作（无硬催化但分高）──
  const hardTypes = cn ? ['财报', '政策', '并购'] : ['Earnings', 'Policy', 'M&A'];
  const hasFundamental = tagged.some(i => hardTypes.includes(i.type) && i.sentiment > 0);
  if (!hasFundamental && recentScore > 6) {
    patterns.push(cn ? '⚠️疑似提前炒作(无硬催化)' : 'WARNING: Likely Pre-Priced (no hard catalyst)');
  }

  // ── 情绪背离：黑天鹅被掩盖 ──
  const bsType = cn ? '黑天鹅' : 'Black Swan';
  const hasBlackSwan = tagged.some(i => i.type === bsType);
  if (hasBlackSwan && posCount > negCount) {
    patterns.push(cn ? '⚠️情绪背离(黑天鹅被掩盖)' : 'WARNING: Sentiment Divergence (black swan masked by noise)');
  }

  // ── NEW: 催化剂集中（同日 ≥ 3 条强权重）──
  const byDate = new Map();
  for (const t of tagged) {
    const d = (t.date || '').slice(0, 10);
    if (!d) continue;
    if (!byDate.has(d)) byDate.set(d, []);
    byDate.get(d).push(t);
  }
  for (const [, group] of byDate) {
    const strong = group.filter(t => (t.finalWeight ?? 0) >= 4);
    if (strong.length >= 3) {
      patterns.push(cn ? '催化剂集中(catalyst burst)' : 'Catalyst Burst (multiple strong items same day)');
      break;
    }
  }

  // ── NEW: 连续空头压制 (最近 3 天每天合计 sentiment×weight<0) ──
  const last3Dates = [...byDate.keys()].sort().reverse().slice(0, 3);
  if (last3Dates.length >= 3) {
    const allNeg = last3Dates.every(d => {
      const items = byDate.get(d);
      const s = items.reduce((acc, i) => acc + (i.sentiment ?? 0) * (i.finalWeight ?? 0), 0);
      return s < 0;
    });
    if (allNeg) patterns.push(cn ? '⚠️连续空头压制(3日)' : 'WARNING: Sustained Bearish Flow (3-day)');
  }

  return patterns;
}
