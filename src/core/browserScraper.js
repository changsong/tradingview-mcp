/**
 * Shared Playwright-based scraper utility.
 * Provides scrapeOne() for single-URL browser fetches with:
 *  - Anti-bot browser context (UA, viewport, locale, headers)
 *  - System Chrome preferred (avoids downloading extra binaries)
 *  - Graceful [] return on any error or timeout
 *
 * Uses raw Playwright (chromium.launch) instead of Crawlee's
 * launchPersistentContext, which is slow on Windows with system Chrome.
 */

import { chromium } from 'playwright';
import { existsSync } from 'fs';
import { PDFParse } from 'pdf-parse';

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

  return typeof text === 'string' ? text : '';
}

/**
 * Fetch a PDF URL and extract its full text via pdf-parse (pdfjs under the hood).
 * No truncation — caller is responsible for length-aware downstream handling.
 * Returns empty string on fetch error, parse error, or non-PDF response.
 *
 * @param {string} url
 * @param {object} [opts]
 * @param {number} [opts.timeoutMs=60000]  Total fetch + parse budget
 * @returns {Promise<string>}
 */
export async function fetchPdfText(url, { timeoutMs = 60000 } = {}) {
  if (!url) return '';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let parser = null;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/pdf,*/*',
      },
      signal: controller.signal,
    });
    if (!res.ok) return '';
    const buf = new Uint8Array(await res.arrayBuffer());
    // Magic-bytes sanity check: real PDFs start with "%PDF-"
    if (buf.length < 5 || buf[0] !== 0x25 || buf[1] !== 0x50 || buf[2] !== 0x44 || buf[3] !== 0x46) {
      return '';
    }
    parser = new PDFParse({ data: buf });
    const result = await parser.getText();
    return (result?.text || '').trim();
  } catch (_) {
    return '';
  } finally {
    clearTimeout(timer);
    if (parser?.destroy) {
      await parser.destroy().catch(() => {});
    }
  }
}

/**
 * Scrape a single URL using Playwright with anti-bot browser settings.
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
  let browser = null;

  try {
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

    browser = await chromium.launch(launchOptions);

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
    if (browser) await browser.close().catch(() => {});
  }
}
