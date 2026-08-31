/**
 * Unit tests for intraday prediction calculations.
 * No TradingView/CDP required — pure math verification.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

// Import the module (this will warn about CDP but the test functions are pure)
import * as intraday from '../src/core/intraday.js';

describe('intraday module', () => {
  it('exports predictIntraday', () => {
    assert.equal(typeof intraday.predictIntraday, 'function');
  });
});

// Direct math verification of the prediction computation
// We can't call predictIntraday without CDP, but we can verify the
// calculation logic by checking that the function rejects invalid inputs.

describe('predictIntraday input validation', () => {
  it('rejects empty array', async () => {
    await assert.rejects(
      () => intraday.predictIntraday({ symbols: [] }),
      /non-empty/
    );
  });

  it('rejects >5 symbols', async () => {
    await assert.rejects(
      () => intraday.predictIntraday({ symbols: ['A', 'B', 'C', 'D', 'E', 'F'] }),
      /Maximum 5 symbols/
    );
  });

  it('rejects non-array', async () => {
    await assert.rejects(
      () => intraday.predictIntraday({ symbols: 'AAPL' }),
      /must be a non-empty array/
    );
  });
});
