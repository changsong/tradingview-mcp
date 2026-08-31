import { register } from '../router.js';
import * as core from '../../core/intraday.js';

function parseSymbols(positionals) {
  if (positionals.length === 0) return [];
  if (positionals.length === 1 && positionals[0].includes(',')) {
    return positionals[0].split(',').map(s => s.trim()).filter(Boolean);
  }
  return positionals;
}

function requireSymbols(positionals) {
  const symbols = parseSymbols(positionals);
  if (symbols.length === 0) {
    throw new Error(
      'Usage: tv intraday <predict|stream> <symbols...>\n' +
        'Examples:\n' +
        '  tv intraday predict AAPL\n' +
        '  tv intraday predict AAPL MSFT GOOGL\n' +
        '  tv intraday predict AAPL,MSFT,GOOGL\n' +
        '  tv intraday stream AAPL -i 10000'
    );
  }
  return symbols;
}

register('intraday', {
  description:
    'Predict intraday high/low zones using Floor/Camarilla/Woodie Pivots, ATR, Bollinger Bands',
  subcommands: new Map([
    [
      'predict',
      {
        description:
          'One-shot prediction for up to 5 symbols. Outputs Floor/Camarilla/Woodie Pivots, ATR range, Bollinger Bands, PDH/PDL, and consensus zones.',
        handler: async (opts, positionals) => {
          return core.predictIntraday({ symbols: requireSymbols(positionals) });
        },
      },
    ],
    [
      'stream',
      {
        description:
          'Continuous intraday monitoring (JSONL). Polls current prices, emits alerts when price approaches predicted zones. Full model refresh every 30 min.',
        options: {
          interval: {
            type: 'string',
            short: 'i',
            description: 'Poll interval in ms (default 10000)',
          },
        },
        handler: async (opts, positionals) => {
          const symbols = requireSymbols(positionals);
          await core.streamIntraday({
            symbols,
            interval: opts.interval ? Number(opts.interval) : undefined,
          });
        },
      },
    ],
  ]),
});
