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

// deepseek-reasoner: each item needs ~120 tokens for JSON output (5 fields).
// max_tokens for the call is 2500, so keep batch ≤ 20 items to avoid truncation.
// Using 10 as a safe margin: 10 × 120 = 1200 tokens, well within budget.
const BATCH_SIZE = 10;

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
  if (market === 'cn') {
    return `你是一位严谨的中国股市新闻分析师。对每条新闻给出 5 个字段的判断：

1. type: 必须从以下 8 个类型中**严格选 1 个**，不能创造新类型：
   - 黑天鹅: 诉讼/处罚/召回/造假/欺诈/被立案/被调查/重大违约/强制退市
   - 财报: 业绩/营收/利润/净利/财报/年报/季报/预告/扭亏/同比环比
   - 分析师动作: 评级上下调/目标价上下调/首次覆盖/调研报告/深度报告
   - 并购: 收购/合并/重组/战略合作/资产注入/定增/股权转让/要约收购
   - 政策: 监管/央行/证监会/发改委/补贴/批复/审批/资质/招标
   - 回购: 回购/高管增持/大股东增持/股权激励
   - 传闻: 据悉/消息称/知情人士/或将/拟/疑似/未经确认
   - 行业: 行业/板块/赛道/产业链/供应链/新能源/半导体/光伏 等
   优先级：黑天鹅 > 财报 > 分析师动作 > 并购 > 政策 > 回购 > 传闻 > 行业

2. sentiment: -2(严重利空) -1(利空) 0(中性) 1(利好) 2(严重利好)。
   - 标题/正文未明确提及目标股票本身 → sentiment=0；
   - 利好语句被否定（未/否/没有/未能/无法/不及）→ 反向；
   - "股价大涨/融资买入X亿" 是结果不是原因，常对应中性或低权重利好。

3. is_real_catalyst: true 仅当含可量化、可执行的硬催化（财报数据、官方公告、政策落地、并购批复、重大订单）；
   纯估值/行业观点/价格复述/融资数据/传闻 → false。

4. confidence: 0-1 浮点数，表示你对 sentiment 判断的把握。
   - 标题/正文与目标股票关联弱 → confidence 给低；
   - 文本短/含糊 → confidence ≤ 0.5。

5. reasoning: ≤30 字的中文短句，说明你的判断依据（用于人工审计）。

回复必须是合法 JSON 数组（不要 markdown 包裹），长度严格等于输入条数，按输入顺序：
[{"idx":0,"type":"财报","sentiment":1,"is_real_catalyst":true,"confidence":0.9,"reasoning":"Q3 净利同比+50%"},...]`;
  }

  return `You are a rigorous US equity news analyst. For each news item, return 5 fields:

1. type: pick **exactly one** from the following 8 categories (do NOT invent new types):
   - Black Swan: fraud/lawsuit/SEC probe/recall/fine/penalty/DOJ/bankruptcy/scandal/restatement/delisting
   - Earnings: earnings/revenue/EPS/guidance/beat/miss/quarterly/outlook/margin/results
   - Analyst Action: upgrade/downgrade/raise or lower target/initiate coverage/reiterate buy-sell-hold
   - M&A: acquisition/merger/buyout/takeover/divest/spin-off/JV/strategic alliance/tender offer
   - Policy: Fed/rate decision/tariff/regulation/legislation/FDA approval/FTC/antitrust/sanctions/subsidy
   - Buyback: buyback/repurchase program/insider buy/stock split/dividend hike
   - Rumor: reportedly/sources say/rumored/speculation/unconfirmed/people familiar
   - Industry: sector/industry/market share/competitor/supply chain/AI/semiconductor/biotech etc.
   Priority: Black Swan > Earnings > Analyst Action > M&A > Policy > Buyback > Rumor > Industry.

2. sentiment: -2 (very bearish) -1 (bearish) 0 (neutral) 1 (bullish) 2 (very bullish).
   - If headline/body never names the target ticker → sentiment=0;
   - Bullish words inside negation ("not outperforming", "fail to beat", "no deal") → flip sign;
   - "Stock surged X%" / "buying flows" describe outcomes, not catalysts.

3. is_real_catalyst: true only when the news has a hard, quantifiable trigger (earnings beat/miss with numbers, official guidance, FDA decision, M&A close, regulatory action, contract win).
   Generic commentary, analyst color, sector takes, price-action recaps, "DISREGARD RELEASE" sponsored wraps → false.

4. confidence: 0-1 float reflecting certainty in the sentiment label.
   - Weak link between headline and target ticker → low;
   - Short or vague text → confidence ≤ 0.5.

5. reasoning: ≤30 chars (English), one-sentence justification (for audit).

Return strict JSON only (no markdown). Length must exactly match input count, in input order:
[{"idx":0,"type":"Earnings","sentiment":1,"is_real_catalyst":true,"confidence":0.9,"reasoning":"Q3 EPS beat +12%"},...]`;
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
    ? `\n\n仅返回长度为 ${items.length} 的 JSON 数组，每条带 idx/type/sentiment/is_real_catalyst/confidence/reasoning。`
    : `\n\nReturn only a JSON array of length ${items.length} with idx/type/sentiment/is_real_catalyst/confidence/reasoning per item.`;

  return `${head}\n\n${list}${tail}`;
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

  const merged = [];
  for (const chunk of chunks) {
    let parsed = null;
    // Retry once on failure (handles transient timeouts / empty-content from reasoner model)
    for (let attempt = 0; attempt < 2; attempt++) {
      if (attempt > 0) await new Promise(r => setTimeout(r, 2000));
      let raw;
      try {
        raw = await callChat({
          system: buildSystemPrompt(market),
          user:   buildUserMessage(chunk, symbol, name, market),
          max_tokens: 2500,
        });
      } catch (err) {
        process.stderr.write(`  [LLM-classify] ${symbol} fail (attempt ${attempt + 1}): ${err.message}\n`);
        continue;
      }
      parsed = safeParseJsonArray(raw);
      if (parsed) break;
      process.stderr.write(`  [LLM-classify] ${symbol} bad JSON (attempt ${attempt + 1}), retry\n`);
    }
    if (!parsed) {
      process.stderr.write(`  [LLM-classify] ${symbol} failed after retries, skipping\n`);
      return null;
    }
    merged.push(...parsed);
  }

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
