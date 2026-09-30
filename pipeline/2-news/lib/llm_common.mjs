/**
 * llm_common.mjs — DeepSeek API + cache + parsing helpers shared by
 *   - llm_classify.mjs  (primary classifier)
 *   - llm_rerate.mjs    (deprecated, kept for back-compat)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '..', '..', '..', '.env') });

export const MODEL       = process.env.DEEPSEEK_MODEL || 'deepseek-flash';
export const ENDPOINT    = 'https://api.deepseek.com/v1/chat/completions';
export const CACHE_DIR   = resolve('./watchlist/.cache');

// The DeepSeek v4 family (deepseek-flash / deepseek-v4-pro) and deepseek-reasoner all
// emit chain-of-thought before the answer, so they need more wall-clock time than a
// plain chat model. Name matching is the only signal available up front.
export const IS_REASONING_MODEL = /reasoner|deepseek-v4|flash/i.test(MODEL);
export const REQ_TIMEOUT_MS = IS_REASONING_MODEL ? 120_000 : 60_000;

// Reasoning tokens are billed against max_tokens, so a budget sized for the JSON answer
// alone truncates the response. Measured on a 10-item classify batch: ~1.5-2k reasoning
// + ~2k answer, so 16000 leaves headroom without costing anything extra (billing is on
// tokens generated, not on the cap).
export const DEFAULT_MAX_TOKENS = 16_000;

/** Thrown when the model hit the token cap before finishing its answer. */
export class TruncatedResponseError extends Error {
  constructor(maxTokens) {
    super(`truncated at max_tokens=${maxTokens} (finish_reason=length)`);
    this.name = 'TruncatedResponseError';
    this.maxTokens = maxTokens;
  }
}

// DEEPSEEK_API_KEY may hold several keys, separated by comma / semicolon / whitespace.
// They are consumed round-robin so concurrent work spreads across them.
const API_KEYS = (process.env.DEEPSEEK_API_KEY || '')
  .split(/[\s,;]+/)
  .map(k => k.trim())
  .filter(Boolean);

let _keyCursor = 0;

export function hasApiKeys() { return API_KEYS.length > 0; }
export function isLLMEnabled() { return hasApiKeys(); }

/** Round-robin position of the next key, advancing the shared cursor. */
function nextKeyIndex() {
  const i = _keyCursor % API_KEYS.length;
  _keyCursor = (i + 1) % API_KEYS.length;
  return i;
}

// ─── DeepSeek HTTP ───────────────────────────────────────────────────────────
/**
 * Chat completion call with key failover.
 *
 * At most two attempts. The second uses the next key in the round-robin, so a bad or
 * rate-limited key fails over rather than retrying itself; with a single key configured it
 * reuses that key as a plain retry. Nothing beyond that — callers must treat a throw as
 * final, otherwise attempts stack up across layers.
 *
 * @param {{system: string, user: string, max_tokens?: number, temperature?: number}} opts
 * @returns {Promise<string>} message content
 */
export async function callChat({ system, user, max_tokens = DEFAULT_MAX_TOKENS, temperature = 0.1 }) {
  if (!hasApiKeys()) throw new Error('DEEPSEEK_API_KEY is not set');

  const first = nextKeyIndex();
  const keys  = API_KEYS.length > 1
    ? [API_KEYS[first], API_KEYS[(first + 1) % API_KEYS.length]]
    : [API_KEYS[first], API_KEYS[first]];

  let lastErr;
  for (let i = 0; i < keys.length; i++) {
    try {
      return await callChatOnce({ system, user, max_tokens, temperature, apiKey: keys[i] });
    } catch (err) {
      lastErr = err;
      // Truncation is a token-budget problem, not a key problem — another key can't help.
      if (err instanceof TruncatedResponseError) throw err;
      if (i + 1 < keys.length) {
        const same = keys[i + 1] === keys[i];
        process.stderr.write(`  [LLM] request failed (${err.message}); retrying with ${same ? 'the same key' : 'next key'}\n`);
      }
    }
  }
  throw lastErr;
}

async function callChatOnce({ system, user, max_tokens, temperature, apiKey }) {
  const ctrl  = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), REQ_TIMEOUT_MS);
  let resp;
  try {
    resp = await fetch(ENDPOINT, {
      method: 'POST',
      signal: ctrl.signal,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens,
        temperature,
        messages: [
          { role: 'system', content: system },
          { role: 'user',   content: user },
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
  const data   = await resp.json();
  const choice = data?.choices?.[0];
  // A reasoning model that exhausts max_tokens mid-thought returns empty or partial
  // `content`, with the chain-of-thought in `reasoning_content`. That CoT is never a valid
  // answer, so surface truncation explicitly and let the caller shrink its request.
  if (choice?.finish_reason === 'length') {
    throw new TruncatedResponseError(max_tokens);
  }
  const text = choice?.message?.content;
  if (!text) throw new Error(`empty response content (finish_reason=${choice?.finish_reason ?? 'unknown'})`);
  return text;
}

// ─── JSON parsing (tolerant) ─────────────────────────────────────────────────
export function safeParseJsonArray(text) {
  let s = String(text).trim();
  // Strip markdown code fences (```json ... ``` or ``` ... ```)
  const fenced = s.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) s = fenced[1].trim();

  // Try direct parse first
  try { const v = JSON.parse(s); return Array.isArray(v) ? v : null; } catch {}

  // Find the first '[' and last ']' to extract the outermost JSON array.
  const start = s.indexOf('[');
  const end   = s.lastIndexOf(']');
  if (start === -1 || end === -1 || end <= start) return null;
  let candidate = s.slice(start, end + 1);

  // Try parse after extraction
  try { const v = JSON.parse(candidate); return Array.isArray(v) ? v : null; } catch {}

  // Repair strategies (deepseek-chat sometimes produces fixable JSON)
  const repaired = repairJson(candidate);
  if (repaired) {
    try { const v = JSON.parse(repaired); return Array.isArray(v) ? v : null; } catch {}
  }

  return null;
}

/**
 * Attempt to repair common LLM JSON issues:
 * - trailing commas before ] or }
 * - single-quoted keys/values in strings
 * - missing commas between objects in array
 * - unescaped newlines in string values
 */
function repairJson(s) {
  let r = s;

  // Remove trailing commas before ] or }
  r = r.replace(/,(\s*[}\]])/g, '$1');

  // Fix cases where LLM puts a comma after the last array element but before ]
  // e.g., {"idx":0}, ] → {"idx":0} ]
  r = r.replace(/},\s*]/g, '}]');

  // Fix missing commas between consecutive objects: }{
  r = r.replace(/\}\s*\{/g, '},{');

  // Fix objects separated by newline without comma: }\n{
  // (already mostly handled above, but explicit)
  r = r.replace(/\}\s*\n\s*\{/g, '},\n{');

  // Escape unescaped control characters inside string values (between quotes)
  // This is tricky to do safely — only attempt if we see the pattern
  // Keep it conservative: fix known patterns

  if (r === s) return null; // no repairs made
  return r;
}

// ─── Cache (per-symbol file) ─────────────────────────────────────────────────
/**
 * @param {string} prefix  e.g. 'news_classify' or 'news_llm'
 * @param {string} symbol
 * @param {Array<{title?: string, date?: string, content?: string}>} items
 */
export function cachePathFor(prefix, symbol, items) {
  const titleSig   = items.map(it => `${(it.title || '').slice(0, 30)}|${it.date || ''}`).join('§');
  const contentSig = items.map(it => (it.content || '').slice(0, 80)).join('|');
  // MODEL is part of the key: a cache entry written by one model must not be served as
  // another model's classification (results are model-dependent, unlike the raw input).
  const hash = createHash('md5').update(`${MODEL}§${titleSig}${contentSig}`).digest('hex').slice(0, 12);
  const safeSym = String(symbol).replace(/[^A-Za-z0-9_]/g, '_');
  return resolve(CACHE_DIR, `${prefix}_${safeSym}_${hash}.json`);
}

export function readCache(p) {
  if (!existsSync(p)) return null;
  try {
    const j = JSON.parse(readFileSync(p, 'utf8'));
    if (j?.model && j.model !== MODEL) return null;
    if (Array.isArray(j?.results)) return j.results;
  } catch {}
  return null;
}

export function writeCache(p, results) {
  try {
    if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(p, JSON.stringify({ ts: new Date().toISOString(), model: MODEL, results }, null, 2), 'utf8');
  } catch (err) {
    process.stderr.write(`  [LLM] cache write fail: ${err.message}\n`);
  }
}

// ─── Sentiment / number helpers ──────────────────────────────────────────────
/** Map LLM sentiment in {-2,-1,0,1,2} → {-1,0,+1} */
export function mapLLMSentiment(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  if (n >= 1)  return 1;
  if (n <= -1) return -1;
  return 0;
}

export function clamp01(v) { return Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0)); }
export function round2(v)  { return Math.round(v * 100) / 100; }
