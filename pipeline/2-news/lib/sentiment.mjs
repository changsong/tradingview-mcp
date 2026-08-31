/**
 * sentiment.mjs — 情绪打分（含否定窗口）
 *
 * 关键改进：
 *  1. 输入 = title + content/snippet/digest，而非仅 title
 *  2. 命中点前 8 字（CN）/ 8 词（US）回看是否含否定词，是则反转为中性
 *  3. 分析师动作 / 财报具体动词 优先于通用 bullish/bearish 词典
 *  4. 黑天鹅类型强制 -1（保留旧行为）
 *  5. 研报评级仍优先（仅 type=research 时启用）
 */

import { CN, US } from './dictionaries.mjs';
import { extractText } from './classify.mjs';

const NEG_WINDOW_CN = 8;     // 中文回看 8 字
const NEG_WINDOW_US = 80;    // 英文回看约 80 字（约 8 词）

/**
 * 检查命中点前 N 字内是否含否定词
 * @returns {boolean} true = 已被否定（应中性化）
 */
function isNegated(text, hitIndex, market) {
  const dict   = market === 'us' ? US : CN;
  const window = market === 'us' ? NEG_WINDOW_US : NEG_WINDOW_CN;
  const start  = Math.max(0, hitIndex - window);
  const before = text.slice(start, hitIndex);
  return dict.NEGATIONS.test(before);
}

/**
 * 在 text 上跑 regex，返回首次命中的 index（或 -1）
 */
function firstHit(text, re) {
  const m = re.exec(text);
  return m ? m.index : -1;
}

/**
 * 评估一条新闻的情绪
 * @returns {-1|0|1}
 */
export function scoreSentiment(item, type, market = 'cn') {
  const dict = market === 'us' ? US : CN;
  const text = extractText(item);
  if (!text) return 0;

  // 1) 研报评级优先（CN 研报特有）
  if (item.type === 'research' && item.rating) {
    if (CN.RATING_BULL.test(item.rating))      return  1;
    if (CN.RATING_BULL_MILD.test(item.rating)) return  1;
    if (CN.RATING_NEUTRAL.test(item.rating))   return  0;
    if (CN.RATING_BEAR.test(item.rating))      return -1;
  }

  // 2) 黑天鹅类型 → 强制 -1
  if (type === '黑天鹅' || type === 'Black Swan') return -1;

  // 3) 强信号词典（分析师 + 财报）— 优先级高于通用情绪词
  const strongHits = [
    { re: dict.EARNINGS_BEAT, sentiment:  1 },
    { re: dict.EARNINGS_MISS, sentiment: -1 },
    { re: dict.ANALYST_BULL,  sentiment:  1 },
    { re: dict.ANALYST_BEAR,  sentiment: -1 },
    { re: dict.BLACK_SWAN,    sentiment: -1 },
  ];
  for (const { re, sentiment } of strongHits) {
    const idx = firstHit(text, re);
    if (idx >= 0) {
      if (isNegated(text, idx, market)) continue;   // 否定 → 跳过该信号
      return sentiment;
    }
  }

  // 4) 通用情绪词典
  const bullIdx = firstHit(text, dict.BULLISH);
  const bearIdx = firstHit(text, dict.BEARISH);

  // 同时命中 → 取距离 title 起点更近的（标题里的情绪词权重更高）
  if (bullIdx >= 0 && bearIdx >= 0) {
    if (bullIdx < bearIdx) {
      if (!isNegated(text, bullIdx, market)) return 1;
      return isNegated(text, bearIdx, market) ? 0 : -1;
    } else {
      if (!isNegated(text, bearIdx, market)) return -1;
      return isNegated(text, bullIdx, market) ? 0 : 1;
    }
  }
  if (bullIdx >= 0 && !isNegated(text, bullIdx, market)) return 1;
  if (bearIdx >= 0 && !isNegated(text, bearIdx, market)) return -1;

  return 0;
}
