/**
 * llm_classify.mjs — DeepSeek 主分类器（替代关键字 classify/sentiment）
 *
 * 输入：经过 relevance 过滤的 kept[] 新闻数组（含 title/content/date/source/type）
 * 输出：长度对齐的 LLM 结果数组：
 *   [{ type, sentiment: -2..+2, is_real_catalyst, confidence: 0..1, reasoning }, ...]
 *
 * 失败语义：LLM 不可用 / 调用失败 / 解析失败 → 返回 null（上层走 "No Data"）。
 *
 * 缓存：./watchlist/.cache/news_classify_<symbol>_<hash>.json
 */

import { CN, US } from './dictionaries.mjs';
import {
  isLLMEnabled,
  callChat,
  safeParseJsonArray,
  cachePathFor,
  readCache,
  writeCache,
} from './llm_common.mjs';
import { createLimiter } from '../../../src/core/concurrency.js';

// deepseek-reasoner: each item needs ~120 tokens for JSON output (5 fields).
// max_tokens for the call is 2500, so keep batch ≤ 20 items to avoid truncation.
// Using 10 as a safe margin: 10 × 120 = 1200 tokens, well within budget.
const BATCH_SIZE = 10;

// Limit concurrent LLM API calls to avoid overwhelming the DeepSeek API
const LLM_CONCURRENCY = parseInt(process.env.LLM_CONCURRENCY) || 6;
const llmLimiter = createLimiter(LLM_CONCURRENCY);

// ─── 类型 taxonomy（与 lib/dictionaries.mjs 中规则严格一致） ────────────────
const CN_TYPES = ['黑天鹅', '财报', '分析师动作', '并购', '政策', '回购', '传闻', '行业'];
const US_TYPES = ['Black Swan', 'Earnings', 'Analyst Action', 'M&A', 'Policy', 'Buyback', 'Rumor', 'Industry'];

const CN_DEFAULT_TYPE = '行业';
const US_DEFAULT_TYPE = 'Industry';

/** 把 LLM 输出的 type 字段落到既定 taxonomy（容错大小写、同义词） */
export function normalizeType(rawType, market = 'cn') {
  const list = market === 'us' ? US_TYPES : CN_TYPES;
  const fallback = market === 'us' ? US_DEFAULT_TYPE : CN_DEFAULT_TYPE;
  if (!rawType) return fallback;
  const s = String(rawType).trim();
  // 精确匹配
  if (list.includes(s)) return s;
  // 大小写不敏感（US）
  const ci = list.find(t => t.toLowerCase() === s.toLowerCase());
  if (ci) return ci;
  // 常见同义词容错
  const synonyms = market === 'us' ? {
    'black-swan': 'Black Swan', 'blackswan': 'Black Swan', 'lawsuit': 'Black Swan', 'fraud': 'Black Swan',
    'earning': 'Earnings', 'eps': 'Earnings', 'revenue': 'Earnings', 'guidance': 'Earnings',
    'analyst': 'Analyst Action', 'rating': 'Analyst Action', 'upgrade': 'Analyst Action', 'downgrade': 'Analyst Action', 'target': 'Analyst Action',
    'm&a': 'M&A', 'ma': 'M&A', 'acquisition': 'M&A', 'merger': 'M&A',
    'policy': 'Policy', 'fed': 'Policy', 'regulation': 'Policy', 'fda': 'Policy',
    'buyback': 'Buyback', 'repurchase': 'Buyback', 'dividend': 'Buyback',
    'rumor': 'Rumor', 'speculation': 'Rumor',
    'industry': 'Industry', 'sector': 'Industry',
  } : {
    '黑天鹅事件': '黑天鹅', '诉讼': '黑天鹅', '处罚': '黑天鹅', '欺诈': '黑天鹅',
    '业绩': '财报', '财务报告': '财报', '业绩预告': '财报', '年报': '财报', '季报': '财报',
    '分析师': '分析师动作', '研报': '分析师动作', '评级': '分析师动作', '上调评级': '分析师动作', '下调评级': '分析师动作',
    '收购': '并购', '重组': '并购', '战略合作': '并购',
    '监管': '政策', '政策利好': '政策', '政府': '政策', '补贴': '政策',
    '股票回购': '回购', '增持': '回购', '股权激励': '回购',
    '消息': '传闻', '据悉': '传闻',
    '行业新闻': '行业', '板块': '行业',
  };
  const key = s.toLowerCase();
  if (synonyms[s]) return synonyms[s];
  if (synonyms[key]) return synonyms[key];
  return fallback;
}

// ─── System prompts ─────────────────────────────────────────────────────────
function buildSystemPrompt(market) {
  const jsonOnly = market === 'cn'
    ? `【关键规则】你的回复必须是纯 JSON 数组，不得包含任何其他内容——没有前缀、后缀、解释、markdown 标记。违反此规则将导致解析失败。`
    : `【CRITICAL】Your response MUST be a raw JSON array and nothing else — no preamble, no explanation, no markdown fences. Any extra text will cause a parse failure.`;

  if (market === 'cn') {
    return `${jsonOnly}

你是一位严谨的中国股市新闻分析师。对每条新闻给出 5 个字段：

1. type: 必须从以下 8 个类型中**严格选 1 个**：
   - 黑天鹅: 诉讼/处罚/召回/造假/欺诈/被立案/被调查/重大违约/强制退市
   - 财报: 业绩/营收/利润/净利/财报/年报/季报/预告/扭亏/同比环比
   - 分析师动作: 评级上下调/目标价上下调/首次覆盖/调研报告/深度报告
   - 并购: 收购/合并/重组/战略合作/资产注入/定增/股权转让/要约收购
   - 政策: 监管/央行/证监会/发改委/补贴/批复/审批/资质/招标
   - 回购: 回购/高管增持/大股东增持/股权激励
   - 传闻: 据悉/消息称/知情人士/或将/拟/疑似/未经确认
   - 行业: 行业/板块/赛道/产业链/供应链/新能源/半导体/光伏 等
   优先级：黑天鹅 > 财报 > 分析师动作 > 并购 > 政策 > 回购 > 传闻 > 行业

2. sentiment: -2 -1 0 1 2。标题/正文未提及目标股票→0；否定句式→反向。

3. is_real_catalyst: 含可量化硬催化(财报数据/官方公告/政策落地/并购批复/重大订单)→true；观点/价格复述/传闻→false。

4. confidence: 0-1 浮点数。关联弱→低；文本含糊→≤0.5。

5. reasoning: ≤30字中文短句。

输出示例（严格按此格式）：
[{"idx":0,"type":"财报","sentiment":1,"is_real_catalyst":true,"confidence":0.9,"reasoning":"Q3净利同比+50%"}]`;
  }

  return `${jsonOnly}

You are a rigorous US equity news analyst. For each news item, return 5 fields:

1. type: pick one from (priority: Black Swan > Earnings > Analyst Action > M&A > Policy > Buyback > Rumor > Industry):
   Black Swan | Earnings | Analyst Action | M&A | Policy | Buyback | Rumor | Industry

2. sentiment: -2 -1 0 1 2. No ticker mention→0; negation→flip sign; price moves describe outcomes.

3. is_real_catalyst: true only with hard quantifiable trigger. Commentary/color/sector-takes→false.

4. confidence: 0-1 float. Weak ticker link→low; vague→≤0.5.

5. reasoning: ≤30 char English.

Output format (strict):
[{"idx":0,"type":"Earnings","sentiment":1,"is_real_catalyst":true,"confidence":0.9,"reasoning":"Q3 EPS beat +12%"}]`;
}

function pickBody(it) {
  return String(it.content || it.summary || it.snippet || it.digest || it.description || it.selftext || '').replace(/\s+/g, ' ').trim();
}

function buildUserMessage(items, symbol, name, market) {
  const isCn = market === 'cn';
  const displayName = Array.isArray(name) ? name[0] : (name || symbol);
  const head = isCn
    ? `请评估以下 ${items.length} 条关于 ${displayName}（${symbol}）的新闻：`
    : `Evaluate the following ${items.length} news items about ${displayName} (${symbol}):`;

  const list = items.map((it, idx) => {
    const body = pickBody(it);
    return `[${idx}] type=${it.type || '-'} | date=${(it.date || '-').slice(0, 10)} | source=${it.source || '-'}\nTITLE: ${(it.title || '').slice(0, 200)}\nBODY: ${body.slice(0, 1500)}`;
  }).join('\n\n');

  const tail = isCn
    ? `\n\n直接输出 JSON 数组（不要任何前缀/后缀/markdown），长度=${items.length}，按 [0]~[${items.length - 1}] 顺序。`
    : `\n\nOutput raw JSON array only (no prefix/suffix/markdown), length=${items.length}, in [0]~[${items.length - 1}] order.`;

  return `${head}\n\n${list}${tail}`;
}

// ─── Per-chunk retry helper ───────────────────────────────────────────────────
async function classifyChunkWithRetry(chunk, { symbol, name, market, chunkIdx }) {
  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt > 0) await new Promise(r => setTimeout(r, 2000));
    let raw;
    try {
      raw = await callChat({
        system: buildSystemPrompt(market),
        user:   buildUserMessage(chunk, symbol, name, market),
        max_tokens: 2500,
        temperature: 0,
      });
    } catch (err) {
      process.stderr.write(`  [LLM-classify] ${symbol} chunk${chunkIdx} fail (attempt ${attempt + 1}): ${err.message}\n`);
      continue;
    }
    const parsed = safeParseJsonArray(raw);
    if (parsed) return parsed;
    process.stderr.write(`  [LLM-classify] ${symbol} chunk${chunkIdx} bad JSON (attempt ${attempt + 1}), retry\n`);
  }
  return null;
}

// ─── 主入口 ──────────────────────────────────────────────────────────────────
/**
 * Classify a list of news items via LLM.
 * @param {Array} items
 * @param {{symbol: string, name: string|string[], market: 'cn'|'us'}} ctx
 * @returns {Promise<Array|null>} aligned results array, or null on failure
 */
export async function classifyByLLM(items, { symbol, name, market }) {
  if (!isLLMEnabled())     return null;
  if (!items?.length)      return null;

  // 缓存命中（基于 items 内容签名）
  const cachePath = cachePathFor('news_classify', symbol, items);
  const cached = readCache(cachePath);
  if (cached) return alignResults(items, cached, market);

  // 大批量分块（每片 BATCH_SIZE 条）
  const chunks = [];
  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    chunks.push(items.slice(i, i + BATCH_SIZE));
  }

  // Process all chunks in parallel (with LLM API concurrency limit)
  const chunkResults = await Promise.all(
    chunks.map((chunk, chunkIdx) =>
      llmLimiter(() => classifyChunkWithRetry(chunk, { symbol, name, market, chunkIdx }))
    )
  );

  // If any chunk failed, the whole stock fails
  if (chunkResults.some(r => r === null)) {
    process.stderr.write(`  [LLM-classify] ${symbol} one or more chunks failed, skipping\n`);
    return null;
  }

  const merged = chunkResults.flat();

  writeCache(cachePath, merged);
  return alignResults(items, merged, market);
}

/** 把 LLM 返回数组对齐到 items 的索引（按 idx 字段优先，缺失则按位置） */
function alignResults(items, llmResults, market) {
  return items.map((it, i) => {
    const ans = llmResults.find(r => Number(r?.idx) === i) ?? llmResults[i] ?? {};
    return {
      type: normalizeType(ans.type, market),
      sentiment: clampSent(ans.sentiment),
      is_real_catalyst: ans.is_real_catalyst === true,
      confidence: clamp01(ans.confidence),
      reasoning: typeof ans.reasoning === 'string' ? ans.reasoning.slice(0, 60) : '',
    };
  });
}

function clampSent(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return 0;
  return Math.max(-2, Math.min(2, Math.round(n)));
}

function clamp01(v) {
  const n = Number(v);
  return Math.max(0, Math.min(1, Number.isFinite(n) ? n : 0));
}
