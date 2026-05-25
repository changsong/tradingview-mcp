/**
 * HK Stock News Fetcher — dedicated to Hong Kong listed equities.
 *
 * Confirmed-working sources (no browser/JS rendering needed):
 *
 *   1. Eastmoney HK quote        — `push2.eastmoney.com` with `secid=116.<5-digit>`
 *                                  Returns Chinese name (e.g. 腾讯控股).
 *   2. Eastmoney HK stock news   — `np-listapi.eastmoney.com` with `mTypeAndCode=116.<5-digit>`
 *                                  100% stock-specific. Hundreds of articles even for mid-caps.
 *   3. Eastmoney keyword search  — `search-api-web.eastmoney.com` JSONP with company name
 *                                  Broader coverage. Returns articles already containing
 *                                  a `content` summary (saves a browser fetch downstream).
 *   4. Eastmoney HK guba forum   — `guba.eastmoney.com/list,zh_HK<code>.html`
 *                                  HTML parse for community posts. Static response yields
 *                                  only the top sticky post per request — kept for sentiment
 *                                  signal but capped at 1-3 items in practice.
 *
 * Sources tested and rejected:
 *   - Eastmoney HK announcements — endpoint returns generic non-HK items (codes:[])
 *   - Eastmoney HK research      — /report/jg ignores HK code, returns industry reports
 *   - HKEX official disclosure   — search API URL changed; needs full scraping
 *   - AAStocks / Futu / Sina HK / Yahoo HK / 智通财经 / 财华社 / 凤凰港股 / ifeng / hkej
 *     / cls.cn / wallstcn / Caixin / etnet / hexun / 10jqka HK / Cailianshe / 36kr
 *                                — all require browser-rendered JS or auth tokens
 *
 * Symbol format:
 *   - Input: `HKEX:700`, `HKEX:00700`, `HKEX:9988`, or bare `09698`
 *   - HK codes get zero-padded to 5 digits for Eastmoney endpoints
 *
 * Public API mirrors `src/core/webNews.js`:
 *   - `searchHKNews({ symbol, source, count })` → { news, research, forum, sources_status }
 *   - `extractHKCode(symbol)` → 5-digit padded code
 *
 * Browser-fetch enrichment via `browserScraper.fetchArticleContent` is reused
 * to backfill article bodies (same as CN/US pipelines).
 */

import { fetchArticleContent } from './browserScraper.js';

// ─── UA rotation + concurrency limiter (same shape as webNews.js) ────────────
const UA_POOL = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
];
let _uaCursor = 0;
function pickUA() { return UA_POOL[_uaCursor++ % UA_POOL.length]; }

const DEFAULT_TIMEOUT_MS = 10000;

async function fetchWithTimeout(url, options = {}, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const headers = { 'User-Agent': pickUA(), ...(options.headers || {}) };
    return await fetch(url, { ...options, headers, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function createLimiter(maxConcurrent) {
  let active = 0;
  const queue = [];
  const dequeue = () => {
    if (active >= maxConcurrent || queue.length === 0) return;
    const { fn, resolve, reject } = queue.shift();
    active++;
    Promise.resolve().then(fn).then(resolve, reject).finally(() => { active--; dequeue(); });
  };
  return (fn) => new Promise((resolve, reject) => {
    queue.push({ fn, resolve, reject });
    dequeue();
  });
}
const limit = createLimiter(6);
const articleLimit = createLimiter(3);

// LRU cache for stock name lookups
class LRUCache {
  constructor(max = 300) { this.max = max; this.map = new Map(); }
  get(k) { if (!this.map.has(k)) return undefined; const v = this.map.get(k); this.map.delete(k); this.map.set(k, v); return v; }
  set(k, v) { if (this.map.has(k)) this.map.delete(k); this.map.set(k, v); if (this.map.size > this.max) this.map.delete(this.map.keys().next().value); }
}
const _quoteCache = new LRUCache(500);

// ─── Symbol helpers ──────────────────────────────────────────────────────────

/**
 * Pad bare HK code to 5 digits. Returns the original string if not an HK code.
 *   '700'      -> '00700'
 *   '09988'    -> '09988'
 *   'HKEX:700' -> '00700'
 */
export function extractHKCode(symbol) {
  if (!symbol) return '';
  const stripped = String(symbol).replace(/^HKEX:/i, '');
  if (/^\d{1,5}$/.test(stripped)) return stripped.padStart(5, '0');
  return stripped;
}

/** Returns true if symbol is a HK exchange ticker (HKEX prefix or pure 4-5 digit). */
function isHKSymbol(symbol) {
  const s = String(symbol).toUpperCase();
  if (s.startsWith('HKEX:')) return true;
  if (/^\d{4,5}$/.test(s)) return true;
  return false;
}

// ─── Source 1: Eastmoney HK quote (name lookup) ──────────────────────────────

async function fetchHKQuote(code5) {
  const cacheKey = `116.${code5}`;
  const cached = _quoteCache.get(cacheKey);
  if (cached) return cached;

  const url = `https://push2.eastmoney.com/api/qt/stock/get?secid=${cacheKey}&fields=f57,f58`;
  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'Referer': 'https://quote.eastmoney.com/' },
    });
    const j = await res.json();
    const info = { code: j?.data?.f57 || code5, name: j?.data?.f58 || null };
    if (info.name) _quoteCache.set(cacheKey, info);
    return info;
  } catch (err) {
    return { error: err.message };
  }
}

// ─── Source 2: Eastmoney HK stock-specific news (secid-based) ────────────────

async function fetchHKEastmoneyNews(code5, count = 20) {
  const mtc = `116.${code5}`;
  const url = `https://np-listapi.eastmoney.com/comm/web/getListInfo?client=web&biz=web_news_zx&mTypeAndCode=${mtc}&type=1&pageSize=${count}&pageIndex=1`;

  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'Referer': 'https://quote.eastmoney.com/' },
    });
    const data = await res.json();
    const list = data?.data?.list;
    if (!Array.isArray(list)) return [];

    return list.slice(0, count).map(item => ({
      title: item.Art_Title,
      source: item.Np_dst === 'CMS' ? '东方财富港股' : (item.Np_dst || '东方财富港股'),
      date: (item.Art_ShowTime || '').split(' ')[0],
      url: item.Art_Url || item.Art_OriginUrl || `https://finance.eastmoney.com/a/${item.Art_Code}.html`,
      origin: item.Np_dst || '',
      type: 'news',
    }));
  } catch (err) {
    return [{ error: `东财港股资讯获取失败: ${err.message}` }];
  }
}

// ─── Source 3: Eastmoney keyword search (broader coverage) ───────────────────
// Searches by Chinese company name across all of Eastmoney's article corpus.
// Returns articles with `content` summary already populated — no second fetch needed.
async function fetchHKEastmoneyNewsByName(name, count = 20) {
  if (!name) return [];
  const param = encodeURIComponent(JSON.stringify({
    uid: '',
    keyword: name,
    type: ['cmsArticleWebOld'],
    client: 'web',
    clientVersion: 'curr',
    clientType: 'web',
    param: {
      cmsArticleWebOld: {
        searchScope: 'default',
        sort: 'time',
        pageIndex: 1,
        pageSize: count,
        preTag: '',
        postTag: '',
      },
    },
  }));
  const url = `https://search-api-web.eastmoney.com/search/jsonp?cb=&param=${param}&_=${Date.now()}`;

  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'Referer': 'https://so.eastmoney.com/' },
    });
    const text = await res.text();
    // Strip JSONP wrapper if present: `cb(<json>)` or `(<json>)` or raw JSON
    const stripped = text.replace(/^[^(]*\(/, '').replace(/\);?\s*$/, '');
    const j = JSON.parse(stripped || text);
    const list = j?.result?.cmsArticleWebOld || j?.cmsArticleWebOld || [];
    if (!Array.isArray(list)) return [];

    return list.slice(0, count).map(item => ({
      title: item.title,
      source: item.mediaName || '东方财富搜索',
      date: (item.date || '').split(' ')[0],
      url: item.url,
      content: item.content || '',  // already populated — skip browser refetch
      type: 'news',
    }));
  } catch (err) {
    return [{ error: `东财关键词搜索失败: ${err.message}` }];
  }
}

// ─── Source 4: Eastmoney HK guba forum (community sentiment) ─────────────────
// Static HTML parse. Limited to ~1-3 posts per request (rest are JS-loaded),
// but the top post is usually the freshest hot topic — still useful for sentiment.
async function fetchHKGubaPosts(code5, count = 10) {
  const url = `https://guba.eastmoney.com/list,zh_HK${code5}.html`;
  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'Referer': 'https://guba.eastmoney.com/' },
    });
    const html = await res.text();

    const posts = [];
    const postRe = /<tr class=['"]listitem['"]>([\s\S]*?)<\/tr>/g;
    let m;
    while ((m = postRe.exec(html)) !== null && posts.length < count) {
      const block = m[1];
      const titleMatch = block.match(/<div class=['"]title['"]><a [^>]*href=['"]([^'"]+)['"][^>]*>([^<]+)<\/a>/);
      if (!titleMatch) continue;
      const update = block.match(/<div class=['"]update['"]>([^<]+)<\/div>/)?.[1]?.trim() || '';
      const read   = parseInt(block.match(/<div class=['"]read['"]>([^<]+)<\/div>/)?.[1] || '0', 10);
      const reply  = parseInt(block.match(/<div class=['"]reply['"]>([^<]+)<\/div>/)?.[1] || '0', 10);

      // guba href is relative ('/news,zh,1234.html') — normalize to absolute
      const href = titleMatch[1].startsWith('http')
        ? titleMatch[1]
        : `https://guba.eastmoney.com${titleMatch[1]}`;

      // guba 'update' format is 'MM-DD HH:MM' — assume current year for downstream consistency
      const year = new Date().getFullYear();
      const date = /^\d{2}-\d{2}/.test(update) ? `${year}-${update.slice(0, 5)}` : '';

      posts.push({
        title: titleMatch[2].trim(),
        source: '东财港股股吧',
        date,
        url: href,
        read, reply,
        type: 'forum',
      });
    }
    return posts;
  } catch (err) {
    return [{ error: `东财港股股吧获取失败: ${err.message}` }];
  }
}

// ─── Article body enrichment (mirrors webNews.js) ────────────────────────────

async function enrichWithContent(items, locale = 'zh-CN') {
  await Promise.all(
    items
      .filter(item => item.url && (!item.content || item.content.length < 200))
      .map(item =>
        articleLimit(() =>
          fetchArticleContent(item.url, locale)
            .then(text => { if (text) item.content = text; })
            .catch(() => {})
        )
      )
  );
}

// ─── Public entry — mirrors webNews.searchNews() / usNews.searchUSNews() ─────

/**
 * @param {object} opts
 * @param {string} opts.symbol  e.g. 'HKEX:700' or '00700'
 * @param {string} [opts.name]
 * @param {'all'|'news'|'forum'} [opts.source='all']
 * @param {number} [opts.count=20]
 * @returns {Promise<{success: boolean, symbol: string, name: string|null, market: string,
 *   news: object[], research: object[], forum: object[], sources_status: object,
 *   total_count: number, source_stats: object, search_time: string}>}
 */
export async function searchHKNews({ symbol, name, source = 'all', count = 20 }) {
  const result = {
    success: true,
    symbol,
    name: name || null,
    market: '港股',
    news: [],
    research: [],
    forum: [],
    sources_status: {},
    search_time: new Date().toISOString(),
  };

  if (!isHKSymbol(symbol)) {
    result.sources_status.warn = {
      ok: false, count: 0,
      error: `symbol "${symbol}" not recognized as HK format; attempting fallback`,
    };
  }

  const code5 = extractHKCode(symbol);

  // Look up name if caller didn't pass one — used by keyword search source
  if (!result.name) {
    const info = await fetchHKQuote(code5);
    if (info.name) result.name = info.name;
  }

  const trackSource = (srcName, fn) =>
    fn().then(items => {
      const arr = Array.isArray(items) ? items : [];
      const errored = arr.find(it => it && it.error);
      result.sources_status[srcName] = {
        ok: !errored,
        count: arr.filter(it => !it.error).length,
        error: errored?.error || null,
      };
      return arr;
    }).catch(err => {
      result.sources_status[srcName] = { ok: false, count: 0, error: err.message };
      return [];
    });

  const promises = [];

  // ── News (parallel, merged + deduped by URL/title) ─────────────────────────
  if (source === 'all' || source === 'news') {
    promises.push(
      Promise.all([
        trackSource('东财港股资讯',  () => limit(() => fetchHKEastmoneyNews(code5, count))),
        trackSource('东财关键词搜索', () => result.name
          ? limit(() => fetchHKEastmoneyNewsByName(result.name, count))
          : Promise.resolve([])),
      ]).then(([secid, keyword]) => {
        const seen = new Set();
        const merged = [];
        for (const it of [...secid, ...keyword]) {
          if (it.error) continue;
          const key = (it.url || it.title || '').toLowerCase();
          if (!key || seen.has(key)) continue;
          seen.add(key);
          merged.push(it);
        }
        merged.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        result.news = merged.slice(0, count * 2);
      })
    );
  }

  // ── Forum (guba HK community posts) ────────────────────────────────────────
  if (source === 'all' || source === 'forum') {
    promises.push(
      trackSource('东财港股股吧', () => limit(() => fetchHKGubaPosts(code5, count)))
        .then(items => {
          for (const it of items) if (!it.error) result.forum.push(it);
        })
    );
  }

  await Promise.all(promises);

  result.news  = result.news.filter(item => !item.error);
  result.forum = result.forum.filter(item => !item.error);

  // Backfill article body only for items that don't already have content
  // (keyword-search items already include a `content` summary).
  await Promise.all([
    enrichWithContent(result.news, 'zh-CN'),
    enrichWithContent(result.forum, 'zh-CN'),
  ]);

  result.total_count = result.news.length + result.research.length + result.forum.length;

  const sourceStats = {};
  for (const item of [...result.news, ...result.research, ...result.forum]) {
    const src = item.source || '未知';
    sourceStats[src] = (sourceStats[src] || 0) + 1;
  }
  result.source_stats = sourceStats;

  return result;
}
