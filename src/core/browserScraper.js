/**
 * Shared Playwright-based scraper utility.
 * Provides scrapeOne() for single-URL browser fetches with:
 *  - Anti-bot browser context (UA, viewport, locale, headers)
 *  - System Chrome preferred (avoids downloading extra binaries)
 *  - Persistent shared browser (reused across calls, isolated contexts)
 *  - Graceful [] return on any error or timeout
 */

import { chromium } from 'playwright';
import { existsSync } from 'fs';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { PDFParse } from 'pdf-parse';
import { createLimiter } from './concurrency.js';

// PDF disk cache lives at <repo-root>/pdf/. Derived from this module's path so it
// works regardless of CWD.
const PDF_CACHE_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../../pdf');
const ARTICLE_CACHE_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../../article_cache');
const ARTICLE_CACHE_ENABLED = process.env.NEWS_ARTICLE_CACHE !== '0';
const ARTICLE_CACHE_TTL_HOURS = Number.parseFloat(process.env.NEWS_ARTICLE_CACHE_TTL_HOURS || '72');

// System Chrome candidates — same search order as xueqiu.js
const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
];

function findChrome() {
  for (const p of CHROME_PATHS) {
    if (p && existsSync(p)) return p;
  }
  return null;
}

const CHROME_EXECUTABLE = findChrome();

// Persistent browser singleton — avoids per-call launch/close overhead (3-8s on Windows).
// Each call creates an isolated context (browser.newContext) and closes only the context.
let _sharedBrowser = null;
let _browserInitPromise = null;

// Max concurrent browser contexts to prevent memory exhaustion.
const MAX_CONTEXTS = parseInt(process.env.BROWSER_MAX_CONTEXTS) || 8;
const contextLimiter = createLimiter(MAX_CONTEXTS);

async function getSharedBrowser() {
  if (_sharedBrowser?.isConnected()) return _sharedBrowser;
  if (_browserInitPromise) return _browserInitPromise;

  _browserInitPromise = (async () => {
    const launchOptions = {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-blink-features=AutomationControlled',
        '--disable-infobars',
      ],
    };
    if (CHROME_EXECUTABLE) {
      launchOptions.executablePath = CHROME_EXECUTABLE;
    }
    _sharedBrowser = await chromium.launch(launchOptions);
    return _sharedBrowser;
  })();

  try {
    return await _browserInitPromise;
  } finally {
    _browserInitPromise = null;
  }
}

// Clean up on exit
process.on('exit', () => {
  if (_sharedBrowser) {
    _sharedBrowser.close().catch(() => {});
  }
});

// Prioritized selectors for article body extraction (English + Chinese sites)
const ARTICLE_SELECTORS = [
  'article',
  '[itemprop="articleBody"]',
  '[class*="article-body"]',
  '[class*="article__body"]',
  '[class*="articleBody"]',
  '[class*="story-body"]',
  '[class*="story__body"]',
  '[class*="post-content"]',
  '[class*="entry-content"]',
  '[class*="post-body"]',
  '[class*="caas-body"]',
  '[class*="article__content"]',
  '[class*="newsContent"]',
  '[class*="news-content"]',
  '[class*="article-content"]',
  '[id="ContentBody"]',
  '[id="newsContent"]',
  '[id="article"]',
  '[id="content"]',
  'main',
];

function articleCachePaths(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch (_) {
    return null;
  }
  if (!/^https?:$/.test(parsed.protocol)) return null;
  parsed.hash = '';
  const normalized = parsed.toString();
  const hash = createHash('sha256').update(normalized).digest('hex');
  const host = parsed.hostname.replace(/[^A-Za-z0-9.-]/g, '_') || 'unknown';
  return {
    text: resolve(ARTICLE_CACHE_DIR, host, `${hash}.txt`),
    meta: resolve(ARTICLE_CACHE_DIR, host, `${hash}.json`),
    normalized,
  };
}

async function readArticleCache(url) {
  if (!ARTICLE_CACHE_ENABLED || ARTICLE_CACHE_TTL_HOURS <= 0) return '';
  const paths = articleCachePaths(url);
  if (!paths) return '';
  try {
    const s = await stat(paths.text);
    const ageMs = Date.now() - s.mtimeMs;
    if (ageMs > ARTICLE_CACHE_TTL_HOURS * 60 * 60 * 1000) return '';
    const text = await readFile(paths.text, 'utf8');
    return text.trim();
  } catch (_) {
    return '';
  }
}

async function writeArticleCache(url, text) {
  if (!ARTICLE_CACHE_ENABLED || !text || text.length < 150) return;
  const paths = articleCachePaths(url);
  if (!paths) return;
  try {
    await mkdir(dirname(paths.text), { recursive: true });
    await writeFile(paths.text, text, 'utf8');
    await writeFile(paths.meta, JSON.stringify({
      url: paths.normalized,
      cached_at: new Date().toISOString(),
      chars: text.length,
    }, null, 2), 'utf8');
  } catch (_) {
    // Cache failures should never affect scraping.
  }
}

/**
 * Fetch the full article body text from a news URL via headless browser.
 * Tries ARTICLE_SELECTORS in priority order, falls back to aggregating <p> tags.
 * PDF URLs are routed to fetchPdfText() instead.
 * Returns empty string on failure or timeout.
 *
 * @param {string} url
 * @param {string} [locale='en-US']
 * @returns {Promise<string>}
 */
export async function fetchArticleContent(url, locale = 'en-US') {
  if (!url) return '';
  const lower = url.toLowerCase();
  if (lower.endsWith('.pdf') || lower.includes('.pdf?')) {
    return fetchPdfText(url);
  }

  const cached = await readArticleCache(url);
  if (cached) return cached;

  const text = await scrapeOne(url, (page) =>
    page.evaluate((sels) => {
      for (const sel of sels) {
        try {
          const el = document.querySelector(sel);
          if (!el) continue;
          const t = el.innerText?.replace(/[\t ]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
          if (t && t.length > 150) return t;
        } catch (_) {}
      }
      // Fallback: gather meaningful paragraphs across the whole page
      const joined = Array.from(document.querySelectorAll('p'))
        .map(p => p.innerText?.trim())
        .filter(t => t && t.length > 30)
        .join('\n');
      return joined.length > 150 ? joined : '';
    }, ARTICLE_SELECTORS),
    { locale, timeoutSecs: 20 }
  );

  const body = typeof text === 'string' ? text.trim() : '';
  if (body) await writeArticleCache(url, body);
  return body;
}

/**
 * Map a PDF URL to its on-disk cache path: <PDF_CACHE_DIR>/<host>/<path>.
 * Path-mirror layout keeps the URL→file relationship human-readable.
 * Returns null if the URL can't be parsed or contains unsafe segments.
 */
function pdfCachePath(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch (_) {
    return null;
  }
  const segments = parsed.pathname.split('/').filter(Boolean);
  // Defense in depth: reject traversal and forbid Windows-reserved chars in any segment.
  for (const seg of segments) {
    if (seg === '..' || /[<>:"|?*\x00-\x1f]/.test(seg)) return null;
  }
  if (!segments.length) return null;
  return resolve(PDF_CACHE_DIR, parsed.hostname, ...segments);
}

/**
 * Fetch a PDF URL and extract its full text via pdf-parse (pdfjs under the hood).
 * Disk-caches PDF bytes under <repo-root>/pdf/<host>/<path>; subsequent calls
 * with the same URL skip the network fetch and read the cached bytes directly.
 * No truncation — caller is responsible for length-aware downstream handling.
 * Returns empty string on fetch error, parse error, or non-PDF response.
 *
 * @param {string} url
 * @param {object} [opts]
 * @param {number} [opts.timeoutMs=60000]  Network fetch budget (cache reads bypass this)
 * @returns {Promise<string>}
 */
export async function fetchPdfText(url, { timeoutMs = 60000 } = {}) {
  if (!url) return '';
  const cachePath = pdfCachePath(url);
  let buf = null;

  // Try cache first
  if (cachePath) {
    try {
      const s = await stat(cachePath);
      if (s.isFile() && s.size > 0) {
        buf = new Uint8Array(await readFile(cachePath));
      }
    } catch (_) { /* cache miss */ }
  }

  // Network fetch on cache miss
  if (!buf) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/pdf,*/*',
        },
        signal: controller.signal,
      });
      if (!res.ok) return '';
      buf = new Uint8Array(await res.arrayBuffer());
    } catch (_) {
      return '';
    } finally {
      clearTimeout(timer);
    }

    // Magic-bytes sanity check: real PDFs start with "%PDF-"
    if (buf.length < 5 || buf[0] !== 0x25 || buf[1] !== 0x50 || buf[2] !== 0x44 || buf[3] !== 0x46) {
      return '';
    }

    // Best-effort cache write — never block parsing on cache errors
    if (cachePath) {
      try {
        await mkdir(dirname(cachePath), { recursive: true });
        await writeFile(cachePath, buf);
      } catch (_) { /* ignore */ }
    }
  }

  let parser = null;
  try {
    parser = new PDFParse({ data: buf });
    const result = await parser.getText();
    return (result?.text || '').trim();
  } catch (_) {
    return '';
  } finally {
    if (parser?.destroy) {
      await parser.destroy().catch(() => {});
    }
  }
}

/**
 * Scrape a single URL using Playwright with anti-bot browser settings.
 * Uses a persistent shared browser — each call creates an isolated context
 * and closes only the context, not the browser.
 *
 * @param {string} url
 * @param {(page: import('playwright').Page) => Promise<any>} handler
 *   Receives the fully-navigated page. Must return the scraped data.
 * @param {object} [options]
 * @param {string} [options.locale='en-US']            Browser locale ('zh-CN' for CN sites)
 * @param {number} [options.timeoutSecs=25]            Navigation + handler timeout
 * @param {string} [options.waitUntil='domcontentloaded']  Playwright goto waitUntil
 * @returns {Promise<any>}  Whatever handler() returned, or [] on error/timeout
 */
export async function scrapeOne(url, handler, options = {}) {
  const {
    locale      = 'en-US',
    timeoutSecs = 25,
    waitUntil   = 'domcontentloaded',
  } = options;

  const isZhCN = locale === 'zh-CN';

  return contextLimiter(async () => {
    const browser = await getSharedBrowser();
    const context = await browser.newContext({
      locale,
      userAgent: isZhCN
        ? 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
      viewport: { width: 1920, height: 1080 },
      extraHTTPHeaders: {
        'Accept-Language': isZhCN ? 'zh-CN,zh;q=0.9,en;q=0.8' : 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      },
    });

    try {
      // Mask automation indicators
      await context.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
      });

      const page = await context.newPage();
      await page.goto(url, { waitUntil, timeout: timeoutSecs * 1000 });

      const result = await handler(page);
      return result ?? [];
    } catch (_) {
      return [];
    } finally {
      await context.close().catch(() => {});
    }
  });
}
