/**
 * Shared Crawlee + Playwright scraper utility.
 * Wraps PlaywrightCrawler for single-URL fetches with:
 *  - fingerprint injection (anti-bot, built into Crawlee v3)
 *  - in-memory storage only (no crawlee_storage/ dirs on disk)
 *  - configurable locale, waitUntil, and timeout
 *  - graceful [] return on any error or timeout
 */

import { PlaywrightCrawler, Configuration } from '@crawlee/playwright';
import { MemoryStorage } from '@crawlee/memory-storage';

/**
 * Scrape a single URL using Crawlee + Playwright.
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

  let result = [];

  // In-memory storage: no crawlee_storage/ or storage/ dirs created on disk
  const config = new Configuration({
    storageClient: new MemoryStorage({ persistStorage: false }),
  });

  const crawler = new PlaywrightCrawler(
    {
      // Fingerprint injection is on by default in Crawlee v3
      browserPoolOptions: {
        // Retire the browser after one page — mimics xueqiu.js browser.close() pattern
        retireBrowserAfterPageCount: 1,
      },
      launchContext: {
        launchOptions: {
          headless: true,
          locale,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
      },
      preNavigationHooks: [
        async (_ctx, gotoOptions) => {
          gotoOptions.waitUntil = waitUntil;
        },
      ],
      navigationTimeoutSecs:     timeoutSecs,
      requestHandlerTimeoutSecs: timeoutSecs,
      maxRequestRetries: 0,   // no retries; caller already handles [] via trackSource
      maxConcurrency: 1,

      async requestHandler({ page }) {
        result = await handler(page);
      },

      async failedRequestHandler() {
        // silent — result stays []
      },
    },
    config,
  );

  try {
    await crawler.run([url]);
  } catch (_) {
    // swallow any Crawlee-level errors
  }

  return result;
}
