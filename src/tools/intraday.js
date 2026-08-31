import { z } from 'zod';
import { jsonResult } from './_format.js';
import * as core from '../core/intraday.js';

export function registerIntradayTools(server) {
  server.tool(
    'intraday_predict',
    'Predict intraday high/low zones using Floor/Camarilla/Woodie Pivots, ATR range, PDH/PDL, and Bollinger Bands. Reads daily OHLCV from chart, outputs consensus high/low zones with price alerts.',
    {
      symbols: z
        .array(z.string())
        .describe('Array of symbols to predict (max 5), e.g. ["AAPL","MSFT","GOOGL"]'),
    },
    async ({ symbols }) => {
      try {
        return jsonResult(await core.predictIntraday({ symbols }));
      } catch (err) {
        return jsonResult({ success: false, error: err.message }, true);
      }
    }
  );
}
