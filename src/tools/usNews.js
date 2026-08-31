import { z } from 'zod';
import { jsonResult } from './_format.js';
import { searchUSNews, getUSMarketSentiment } from '../core/usNews.js';

export function registerUSNewsTools(server) {
  server.tool(
    'us_news_search',
    `Search US stock news and community discussions from multiple sources.
Returns sentiment analysis, heat metrics, and community opinions.

Data sources:
- Reddit (r/wallstreetbets, r/stocks): Retail investor discussions and memes
- StockTwits: Real-time social sentiment with bullish/bearish tags
- Seeking Alpha: Professional analysis and news articles
- Bogleheads: Long-term investment discussions

Provides sentiment analysis using English keywords (moon, rocket, bullish, bearish, etc.)
and heat metrics based on upvotes/likes and comment counts.`,
    {
      symbol: z.string().describe('Stock symbol (e.g., "AAPL", "TSLA", "NASDAQ:MSFT", "NYSE:BA")'),
      name: z.string().optional().describe('Stock name (optional, for display purposes)'),
      source: z.enum(['all', 'news', 'social', 'forum']).optional().default('all')
        .describe('Source type: "all" (default), "news" (Seeking Alpha), "social" (StockTwits), "forum" (Reddit + Bogleheads)'),
      count: z.number().optional().default(10).describe('Maximum number of results per source (default: 10)'),
    },
    async ({ symbol, name, source, count }) => {
      try {
        const result = await searchUSNews({ symbol, name, source, count });
        return jsonResult(result);
      } catch (err) {
        return jsonResult({ success: false, error: err.message }, true);
      }
    }
  );

  server.tool(
    'us_market_sentiment',
    `Get overall US market sentiment from r/wallstreetbets hot posts.
Analyzes community mood and provides trading recommendations based on bullish/bearish ratio.

Returns:
- Top posts from r/wallstreetbets
- Sentiment analysis (bullish/bearish/neutral percentages)
- Trading recommendation (Consider Long / Cautious / Wait and Watch)

Useful for gauging retail investor sentiment before market open.`,
    {},
    async () => {
      try {
        const result = await getUSMarketSentiment();
        return jsonResult(result);
      } catch (err) {
        return jsonResult({ success: false, error: err.message }, true);
      }
    }
  );
}
