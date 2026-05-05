/**
 * relevance.mjs — 单条新闻相关性 + 噪音过滤
 *
 * 解决两个老问题：
 *  1. 串股：searchUSNews 把 "META Q1 Earnings Beat" 挂到 NYSE:FN 名下
 *  2. 噪音：DISREGARD RELEASE / 价格复述 / 融资数据 等无效内容被打分
 */

import { CN, US } from './dictionaries.mjs';

/**
 * 提取代码 + 名称别名集合（用于主体校验）
 * @param {string} symbol
 * @param {string|string[]|null} nameOrAliases
 * @example normalizeKeys('SSE:600160', '巨化股份')             → ['600160', '巨化股份']
 * @example normalizeKeys('NYSE:FN', null)                       → ['FN']
 * @example normalizeKeys('NASDAQ:AAPL', ['Apple Inc', 'AAPL'])  → ['AAPL', 'Apple Inc', 'Apple']
 */
export function normalizeKeys(symbol, nameOrAliases) {
  const keys = new Set();
  if (symbol) {
    const cleaned = symbol.replace(/^(SSE|SZSE|HKEX|NASDAQ|NYSE|BATS|CBOE|AMEX):/i, '').trim();
    if (cleaned) keys.add(cleaned);
  }
  const aliases = Array.isArray(nameOrAliases) ? nameOrAliases : [nameOrAliases];
  for (const a of aliases) {
    if (!a || typeof a !== 'string') continue;
    const trimmed = a.trim();
    if (!trimmed) continue;
    keys.add(trimmed);
    // 派生品牌名：去掉 Inc/Corp/Ltd/Co/Group 等公司后缀
    const brand = trimmed
      .replace(/\b(Inc|Corp|Corporation|Ltd|Co|Company|Group|Holdings|PLC|N\.?V\.?|S\.?A\.?|AG|SE)\.?$/i, '')
      .replace(/[,\.]+$/g, '')
      .trim();
    if (brand && brand !== trimmed && brand.length >= 2) keys.add(brand);
  }
  return [...keys];
}

/**
 * 检测 haystack 是否提到 key。
 * - 全大写英文短代码（≤5 字符 A-Z）使用单词边界，避免 "FN" 误匹配 "from" 等
 * - 其他（中文/全名/混合）使用 includes
 */
function mentions(haystackLower, key) {
  if (!key) return false;
  const k = key.trim();
  if (!k) return false;
  // 全大写英文 ≤ 6 字符 → 词边界
  if (/^[A-Z]{1,6}$/.test(k)) {
    const re = new RegExp(`\\b${k.toLowerCase()}\\b`);
    return re.test(haystackLower);
  }
  return haystackLower.includes(k.toLowerCase());
}

/**
 * 主体校验 + 噪音黑名单
 * @param {object} item   { title, content, snippet, digest, summary, description }
 * @param {string} symbol 形如 "SSE:600160" / "NYSE:FN"
 * @param {string} name   股票名（中文/英文）
 * @param {object} opts   { market: 'cn'|'us', skipMentionCheck?: boolean }
 * @returns {{ ok: boolean, reason?: string }}
 */
export function isRelevant(item, symbol, name, opts = {}) {
  const market = opts.market || 'cn';
  const noise  = market === 'cn' ? CN.NOISE : US.NOISE;

  const title = (item.title || '').trim();
  if (!title) return { ok: false, reason: 'empty-title' };

  // 1) 噪音黑名单（仅对 title 检查 — content 里偶尔出现 update: 字样）
  for (const re of noise) {
    if (re.test(title)) return { ok: false, reason: 'noise:' + re.source.slice(0, 30) };
  }

  // 2) 主体校验：title 或 content 含 symbol 或 name（任一别名）
  // 例外：研报和官方公告天然来自该股票数据库，是显式查询结果；不做主体校验
  if (!opts.skipMentionCheck && item.type !== 'research' && item.type !== 'announcement') {
    const haystack = [title, item.content, item.snippet, item.digest, item.summary, item.description]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    const keys = normalizeKeys(symbol, name);
    const hit = keys.some(k => mentions(haystack, k));
    if (!hit) return { ok: false, reason: 'no-subject-mention' };
  }

  return { ok: true };
}

/**
 * 跨源去重：按 title 前 30 字 + date 合并，留权重最大的源
 *   该函数是纯函数；调用方需先用 sourceAuthority 排序或在合并时比较
 * @param {object[]} items 已通过 isRelevant 的列表
 * @returns {object[]}     去重后列表，保持原排序（首次出现优先）
 */
export function dedupBySimilarTitle(items) {
  const seen = new Map();   // key → index
  const out  = [];
  for (const it of items) {
    const key = ((it.title || '').slice(0, 30) + '|' + (it.date || '').slice(0, 10)).toLowerCase();
    if (seen.has(key)) {
      // 合并：保留首次出现的，但如果当前 source authority 更高可覆盖
      const idx = seen.get(key);
      if ((it._sourceAuthority ?? 0) > (out[idx]._sourceAuthority ?? 0)) {
        out[idx] = it;
      }
      continue;
    }
    seen.set(key, out.length);
    out.push(it);
  }
  return out;
}

/**
 * 一站式过滤：相关性 + 噪音 + 去重
 * @returns {{ kept: object[], dropped: number, reasons: Record<string, number> }}
 */
export function filterRelevant(items, symbol, name, opts = {}) {
  const reasons = {};
  const kept = [];
  for (const it of items) {
    const r = isRelevant(it, symbol, name, opts);
    if (r.ok) kept.push(it);
    else reasons[r.reason] = (reasons[r.reason] || 0) + 1;
  }
  const dedup = dedupBySimilarTitle(kept);
  reasons['dedup'] = kept.length - dedup.length;
  return { kept: dedup, dropped: items.length - dedup.length, reasons };
}
