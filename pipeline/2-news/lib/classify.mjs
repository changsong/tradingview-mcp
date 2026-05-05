/**
 * classify.mjs — 新闻类型识别
 *
 * 现版相比旧逻辑：
 *  1. 同时考察 title + content/snippet/digest（更高命中率）
 *  2. 显式区分「分析师动作」「回购」类型，便于权重精细化
 */

import { CN, US } from './dictionaries.mjs';

/**
 * 取出新闻条目里所有可读文本作为分类输入
 */
export function extractText(item) {
  const fields = [item.title, item.content, item.snippet, item.digest, item.summary, item.description];
  return fields.filter(Boolean).join(' ').slice(0, 800);
}

/**
 * 分类一条新闻
 * @param {object} item   原始新闻条目
 * @param {'cn'|'us'} market
 * @returns {string} 类型名
 */
export function classifyType(item, market = 'cn') {
  const dict = market === 'us' ? US : CN;
  const text = extractText(item);
  if (!text) return market === 'us' ? 'Industry' : '行业';
  for (const rule of dict.TYPES) {
    if (rule.re.test(text)) return rule.type;
  }
  return market === 'us' ? 'Industry' : '行业';
}
