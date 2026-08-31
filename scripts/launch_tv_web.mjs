#!/usr/bin/env node
/**
 * Launch Chromium with TradingView web chart for CDP access.
 */
import puppeteer from 'puppeteer';

const BROWSER_URL = 'https://www.tradingview.com/chart/';

async function main() {
  console.log('Launching Chromium with remote debugging on port 9222...');
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--remote-debugging-port=9222',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=1920,1080',
    ],
    dumpio: false,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log(`Navigating to ${BROWSER_URL}...`);
  await page.goto(BROWSER_URL, { waitUntil: 'networkidle2', timeout: 60000 });

  console.log('Waiting for TradingView to load...');
  await page.waitForFunction(() => {
    return window.TradingViewApi !== undefined || document.querySelector('.chart-gui-wrapper') !== null;
  }, { timeout: 60000 });

  console.log('TradingView chart loaded. CDP available at http://localhost:9222');
  console.log('Keep this script running. Press Ctrl+C to stop.');

  // Keep alive
  setInterval(() => {}, 60000);
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
