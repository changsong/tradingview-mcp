import { z } from 'zod';
import { jsonResult } from './_format.js';
import { searchNews } from '../core/webNews.js';

export function registerWebNewsTools(server) {
  server.tool(
    'news_fetch',
    `Fetch latest stock news, research reports, and forum discussions from Chinese financial websites.
Returns structured data for sentiment analysis and price impact prediction.

Data sources:
- Research reports (研报): Analyst ratings and reports from major brokerages
- Financial news (快讯): Real-time financial news from Eastmoney
- Forum posts (股吧): Retail investor discussions (A-shares only)

For best results with A-shares, the tool will automatically fetch the stock name.
Supports A-shares (SSE/SZSE), US stocks, and HK stocks.`,
    {
      symbol: z.string().describe('Stock symbol (e.g., "SZSE:002245", "SSE:605319", "AAPL", "0700.HK", or just "002245")'),
      name: z.string().optional().describe('Stock name in Chinese (optional, auto-fetched for A-shares)'),
      source: z.enum(['all', 'news', 'forum']).optional().default('all')
        .describe('Source type: "all" (default) for all sources, "news" for news/research only, "forum" for forum only'),
      count: z.number().optional().default(10).describe('Maximum number of results per source (default: 10)'),
    },
    async ({ symbol, name, source, count }) => {
      try {
        const result = await searchNews({ symbol, name, source, count });
        return jsonResult(result);
      } catch (err) {
        return jsonResult({ success: false, error: err.message }, true);
      }
    }
  );
}
