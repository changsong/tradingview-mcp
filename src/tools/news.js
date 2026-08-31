import { z } from 'zod';
import { jsonResult } from './_format.js';
import * as core from '../core/news.js';

export function registerNewsTools(server) {
  server.tool('news_get', 'Get latest news headlines for the current symbol from the details panel. Opens the right sidebar if needed.', {
    symbol: z.string().optional().describe('Symbol to get news for (e.g., "NASDAQ:AAPL", "SZSE:002956"). Omit to use current chart symbol.'),
  }, async ({ symbol }) => {
    try { return jsonResult(await core.getNews({ symbol })); }
    catch (err) { return jsonResult({ success: false, error: err.message }, true); }
  });

  server.tool('news_config', 'Get TradingView news service URLs configuration (for debugging/reference).', {}, async () => {
    try { return jsonResult(await core.getNewsConfig()); }
    catch (err) { return jsonResult({ success: false, error: err.message }, true); }
  });
}
