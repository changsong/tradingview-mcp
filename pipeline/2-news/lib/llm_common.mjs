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

export const MODEL       = process.env.DEEPSEEK_MODEL || 'deepseek-chat';
export const ENDPOINT    = 'https://api.deepseek.com/v1/chat/completions';
export const CACHE_DIR   = resolve('./watchlist/.cache');
// deepseek-reasoner does chain-of-thought, needs more time than a simple chat model
export const REQ_TIMEOUT_MS = MODEL.includes('reasoner') ? 120_000 : 60_000;

let _envChecked = false;
let _hasKey     = false;
export function isLLMEnabled() {
  if (!_envChecked) {
    _hasKey = !!process.env.DEEPSEEK_API_KEY;
    _envChecked = true;
  }
  return _hasKey;
}

// ─── DeepSeek HTTP ───────────────────────────────────────────────────────────
/**
 * Low-level chat completion call.
 * @param {{system: string, user: string, max_tokens?: number, temperature?: number}} opts
 * @returns {Promise<string>} message content
 */
export async function callChat({ system, user, max_tokens = 1200, temperature = 0.1 }) {
  const ctrl  = new AbortController();
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
  const data = await resp.json();
  const msg  = data?.choices?.[0]?.message;
  // deepseek-reasoner returns reasoning_content (chain-of-thought) + content (final answer).
  // If content is empty (model only emitted reasoning), fall back to reasoning_content.
  const text = msg?.content || msg?.reasoning_content;
  if (!text) throw new Error('empty response content');
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
  const hash = createHash('md5').update(titleSig + contentSig).digest('hex').slice(0, 12);
  const safeSym = String(symbol).replace(/[^A-Za-z0-9_]/g, '_');
  return resolve(CACHE_DIR, `${prefix}_${safeSym}_${hash}.json`);
}

export function readCache(p) {
  if (!existsSync(p)) return null;
  try {
    const j = JSON.parse(readFileSync(p, 'utf8'));
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
