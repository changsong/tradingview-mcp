/**
 * llm_rerate.mjs — DeepSeek 复评
 *
 * 触发：CLI `--llm` 或 env `NEWS_LLM=1` 且 `DEEPSEEK_API_KEY` 存在。
 *
 * 流程：
 *   1) 拿每股 top 5 高 finalWeight 的 tagged news（标题 + 短摘要）；
 *   2) 调 DeepSeek Chat API（OpenAI 兼容接口）；
 *   3) 模型返回 JSON `[{idx, sentiment: -2..+2, is_real_catalyst, confidence: 0-1}]`；
 *   4) 落地策略：
 *      - is_real_catalyst=false → finalWeight × 0.4
 *      - confidence < 0.5       → finalWeight × 0.5
 *      - confidence ≥ 0.7       → 用 LLM sentiment 覆盖原 regex 结果（映射 ±2/±1→±1，0→0）
 *      - 任一覆盖发生 → 设 _llmId 标识让主流程能定位到原 item
 *   5) 失败/超时降级到纯确定性结果，不阻塞主流程；
 *   6) 缓存 ./watchlist/.cache/news_llm_<symbol>_<hash>.json 命中复用。
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { createHash } from 'crypto';

// 加载 .env（从项目根目录）
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '..', '..', '..', '.env') });

const MODEL       = process.env.DEEPSEEK_MODEL || 'deepseek-chat';
const ENDPOINT    = 'https://api.deepseek.com/v1/chat/completions';
const CACHE_DIR   = resolve('./watchlist/.cache');
const REQ_TIMEOUT_MS = 45_000;

const SYSTEM_PROMPT_CN = `你是一位严谨的中国股市新闻分析师。你的任务是判断每条新闻对该股票的真实交易价值：
1. sentiment: -2(严重利空) -1(利空) 0(中性) +1(利好) +2(严重利好)；
2. is_real_catalyst: true 仅当新闻含可量化、可执行的硬催化（财报数据、官方公告、政策落地、并购批复、重大订单等）；纯估值评论、行业观点、价格复述、融资数据、传闻 → false；
3. confidence: 0-1 浮点数，对你的 sentiment 判断的把握程度。

务必区分：
- "公司股价大涨" / "融资买入X亿" 是结果不是原因 → is_real_catalyst=false；
- "签下大单 / 订单金额 X 亿" / "Q3 净利润同比 +50%" / "发改委批复并购" → is_real_catalyst=true；
- 利好预期但被 "未/否/没有/未能/无法" 否定 → sentiment 反向；
- 仅含目标价上下调而无实质业绩信息 → sentiment 按方向给，但 is_real_catalyst=false（属于分析师观点）；
- 标题/正文未明确提及目标股票主体 → sentiment=0 且 confidence 给低分。

回复必须是合法 JSON 数组（不要 markdown 包裹），格式：
[{"idx":0,"sentiment":1,"is_real_catalyst":true,"confidence":0.85},...]`;

const SYSTEM_PROMPT_US = `You are a rigorous US equity news analyst. For each news item, decide its real trading value:
1. sentiment: -2(very bearish) -1(bearish) 0(neutral) +1(bullish) +2(very bullish);
2. is_real_catalyst: true only if the news contains a hard, quantifiable trigger (earnings, official guidance, FDA decision, M&A close, contract win, regulatory action). Generic commentary, sector takes, price-action recaps, social-media buzz, or sponsored "DISREGARD RELEASE" wraps → false;
3. confidence: 0-1 float reflecting your certainty in the sentiment label.

Important rules:
- "Stock surged X%" / "buying flows" describe outcomes, not catalysts → is_real_catalyst=false;
- "Beat estimates by X" / "raised guidance" / "received FDA approval" → is_real_catalyst=true;
- Bullish phrasing inside a negation ("not outperforming", "fail to beat", "no deal") → flip sentiment;
- Analyst rating changes without underlying news → keep direction but is_real_catalyst=false;
- If the headline/body never names the requested ticker, use sentiment=0 and a LOW confidence.

Respond with strict JSON (no markdown). Format:
[{"idx":0,"sentiment":1,"is_real_catalyst":true,"confidence":0.85},...]`;

let _envChecked = false;
let _hasKey     = false;

export function isLLMEnabled() {
  if (!_envChecked) {
    _hasKey = !!process.env.DEEPSEEK_API_KEY;
    _envChecked = true;
  }
  return _hasKey;
}

/**
 * @param {object} args
 * @param {Array}  args.topItems  待复评的 tagged 新闻（最多 5 条）
 * @param {string} args.symbol
 * @param {string} args.name
 * @param {'cn'|'us'} args.market
 * @returns {Promise<Array|null>}
 */
export async function rerateTopNews({ topItems, symbol, name, market }) {
  if (!isLLMEnabled()) return null;
  if (!topItems || topItems.length === 0) return null;

  const items = topItems.slice(0, 5);

  // 给每条打稳定 _llmId（基于 title+date），方便回写
  items.forEach((it, i) => {
    const seed = `${(it.title || '').slice(0, 50)}|${it.date || ''}`;
    it._llmId = createHash('md5').update(seed).digest('hex').slice(0, 10);
  });

  const cachePath = cachePathFor(symbol, items);
  const cached = readCache(cachePath);
  if (cached) {
    return applyLLMResults(items, cached, market);
  }

  let llmRaw;
  try {
    llmRaw = await callDeepSeek(items, { symbol, name, market });
  } catch (err) {
    process.stderr.write(`  [LLM] ${symbol} fail: ${err.message}\n`);
    return null;
  }

  const parsed = safeParseJsonArray(llmRaw);
  if (!parsed || !Array.isArray(parsed)) {
    process.stderr.write(`  [LLM] ${symbol} bad JSON, skip\n`);
    return null;
  }

  writeCache(cachePath, parsed);
  return applyLLMResults(items, parsed, market);
}

// ─── HTTP 调用 (DeepSeek OpenAI-compatible API) ────────────────────────────────
async function callDeepSeek(items, { symbol, name, market }) {
  const sys = market === 'cn' ? SYSTEM_PROMPT_CN : SYSTEM_PROMPT_US;
  const userMsg = buildUserMessage(items, symbol, name, market);

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), REQ_TIMEOUT_MS);

  let resp;
  try {
    resp = await fetch(ENDPOINT, {
      method: 'POST',
      signal: ctrl.signal,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 800,
        temperature: 0.1,
        messages: [
          { role: 'system', content: sys },
          { role: 'user', content: userMsg },
        ],
      }),
    });
  } finally {
    clearTimeout(timer);
  }

  if (!resp.ok) {
    const body = await resp.text().catch(() => '');
    throw new Error(`HTTP ${resp.status}: ${body.slice(0, 200)}`);
  }
  const data = await resp.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error('empty response content');
  return text;
}

function buildUserMessage(items, symbol, name, market) {
  const isCn = market === 'cn';
  const head = isCn
    ? `请评估以下 ${items.length} 条关于 ${name}（${symbol}）的新闻：`
    : `Evaluate the following ${items.length} news items about ${name} (${symbol}):`;

  const list = items.map((it, idx) => {
    const body = pickBody(it);
    return `[${idx}] type=${it.type || '-'} | date=${(it.date || '-').slice(0, 10)} | source=${it.source || '-'}\nTITLE: ${(it.title || '').slice(0, 200)}\nBODY: ${body.slice(0, 2000)}`;
  }).join('\n\n');

  const tail = isCn
    ? `\n\n仅返回长度为 ${items.length} 的 JSON 数组，每条带 idx/sentiment/is_real_catalyst/confidence。`
    : `\n\nReturn only a JSON array of length ${items.length} with idx/sentiment/is_real_catalyst/confidence per item.`;

  return `${head}\n\n${list}${tail}`;
}

function pickBody(it) {
  return String(it.content || it.summary || it.snippet || it.digest || it.description || it.selftext || '').replace(/\s+/g, ' ').trim();
}

// ─── 解析与回写 ───────────────────────────────────────────────────────────────
function safeParseJsonArray(text) {
  const s = String(text).trim();
  // 优先直接解
  try { const v = JSON.parse(s); return Array.isArray(v) ? v : null; } catch {}
  // 退一步：截取首个 [...] 块
  const m = s.match(/\[[\s\S]*\]/);
  if (!m) return null;
  try { const v = JSON.parse(m[0]); return Array.isArray(v) ? v : null; } catch {}
  return null;
}

function applyLLMResults(items, llmResults, _market) {
  const updated = [];
  for (let i = 0; i < items.length; i++) {
    const it  = items[i];
    const ans = llmResults.find(r => Number(r.idx) === i) ?? llmResults[i];
    if (!ans) { updated.push(it); continue; }

    const conf = clamp01(Number(ans.confidence ?? 0));
    const llmSent = mapLLMSentiment(ans.sentiment);
    const isReal  = ans.is_real_catalyst === true;

    let newWeight = it.finalWeight;
    let newSent   = it.sentiment;

    if (!isReal)             newWeight *= 0.4;
    if (conf < 0.5)          newWeight *= 0.5;
    if (conf >= 0.7 && llmSent !== null) newSent = llmSent;

    newWeight = round2(Math.max(0.2, Math.min(8, newWeight)));

    updated.push({
      ...it,
      finalWeight: newWeight,
      weight: Math.round(newWeight),
      sentiment: newSent,
      llm_reviewed: true,
      llm_confidence: conf,
      llm_is_real_catalyst: isReal,
    });
  }
  return updated;
}

function mapLLMSentiment(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  if (n >= 1)  return 1;
  if (n <= -1) return -1;
  return 0;
}

function clamp01(v) { return Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0)); }
function round2(v)  { return Math.round(v * 100) / 100; }

// ─── 缓存 ────────────────────────────────────────────────────────────────────
function cachePathFor(symbol, items) {
  const titleSig   = items.map(it => `${(it.title || '').slice(0, 30)}|${it.date || ''}`).join('§');
  const contentSig = items.map(it => (it.content || '').slice(0, 80)).join('|');
  const hash = createHash('md5').update(titleSig + contentSig).digest('hex').slice(0, 12);
  const safeSym = String(symbol).replace(/[^A-Za-z0-9_]/g, '_');
  return resolve(CACHE_DIR, `news_llm_${safeSym}_${hash}.json`);
}

function readCache(p) {
  if (!existsSync(p)) return null;
  try {
    const j = JSON.parse(readFileSync(p, 'utf8'));
    if (Array.isArray(j?.results)) return j.results;
  } catch {}
  return null;
}

function writeCache(p, results) {
  try {
    if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(p, JSON.stringify({ ts: new Date().toISOString(), model: MODEL, results }, null, 2), 'utf8');
  } catch (err) {
    process.stderr.write(`  [LLM] cache write fail: ${err.message}\n`);
  }
}
