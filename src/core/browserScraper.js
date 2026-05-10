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
