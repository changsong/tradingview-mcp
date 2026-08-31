/**
 * Unit tests for pipeline/lib/limup_scorecard.mjs
 *
 * No CDP/TradingView required. Pure logic tests.
 *
 * Run: node --test tests/limup_scorecard.test.js
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  scoreStock, extractFeatures,
  trainLogisticRegression, predictLogistic,
  computeVerdict, computeRisks, getIndustry,
} from '../pipeline/lib/limup_scorecard.mjs';

// ── Test fixtures ────────────────────────────────────────────────────

function makeStock(overrides = {}) {
  return {
    limit_info: {
      chg: 10.0,
      limitPct: 10.0,
      upLimit: true,
      downLimit: false,
      upStreak: 1,
      dnStreak: 0,
      market: '主板',
      ...overrides.limit_info,
    },
    tf: {
      '1D': {
        vol_ratio: 2.5,
        atr_pct: 3.5,
        ...overrides.tf1d,
      },
    },
    tech_score: 35,
    news_score: 15,
    _industry: '半导体',
    _totalLimitUps: 10,
    ...overrides,
  };
}

// ── Scorecard Tests ──────────────────────────────────────────────────

describe('scoreStock', () => {
  const industryStats = { '半导体': 5, '电池': 3, '酿酒行业': 1 };

  it('returns total 0-100', () => {
    const stock = makeStock();
    const result = scoreStock(stock, industryStats);
    assert.ok(result.total >= 0 && result.total <= 100);
  });

  it('first board gets max board position score (25)', () => {
    const stock = makeStock({ limit_info: { upStreak: 1, upLimit: true, limitPct: 10, chg: 10, market: '主板' } });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.board_position, 25);
  });

  it('second board gets 22', () => {
    const stock = makeStock({ limit_info: { upStreak: 2, upLimit: true, limitPct: 10, chg: 10, market: '主板' } });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.board_position, 22);
  });

  it('fifth board gets 10', () => {
    const stock = makeStock({ limit_info: { upStreak: 5, upLimit: true, limitPct: 10, chg: 10, market: '主板' } });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.board_position, 10);
  });

  it('6+ boards gets 6', () => {
    const stock = makeStock({ limit_info: { upStreak: 7, upLimit: true, limitPct: 10, chg: 10, market: '主板' } });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.board_position, 6);
  });

  it('optimal turnover (1.5-4.0) gets 20', () => {
    const stock = makeStock({ tf1d: { vol_ratio: 2.5, atr_pct: 3.5 } });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.turnover_health, 20);
  });

  it('extreme volume (>10x) gets 4', () => {
    const stock = makeStock({ tf1d: { vol_ratio: 12, atr_pct: 3.5 } });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.turnover_health, 4);
  });

  it('null vol_ratio gets default (10)', () => {
    const stock = makeStock({ tf1d: { vol_ratio: null, atr_pct: 3.5 } });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.turnover_health, 10);
  });

  it('strong sector cluster (5+) gets 5', () => {
    const stock = makeStock({ _industry: '半导体' });
    const result = scoreStock(stock, { '半导体': 5 });
    assert.equal(result.breakdown.sector_effect, 5);
  });

  it('isolated stock (1) gets 1', () => {
    const stock = makeStock({ _industry: '酿酒行业' });
    const result = scoreStock(stock, { '酿酒行业': 1, '半导体': 5 });
    assert.equal(result.breakdown.sector_effect, 1);
  });

  it('high tech_score gets max tech strength', () => {
    const stock = makeStock({ tech_score: 55 });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.tech_strength, 15);
  });

  it('negative news_score gets low sentiment', () => {
    const stock = makeStock({ news_score: -5 });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.sentiment, 2);
  });

  it('moderate ATR (2-5%) gets 10 volatility', () => {
    const stock = makeStock({ tf1d: { vol_ratio: 2.5, atr_pct: 4.0 } });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.volatility, 10);
  });

  it('extreme ATR (>8%) gets 3 volatility', () => {
    const stock = makeStock({ tf1d: { vol_ratio: 2.5, atr_pct: 9.0 } });
    const result = scoreStock(stock, industryStats);
    assert.equal(result.breakdown.volatility, 3);
  });

  it('total is sum of all breakdowns', () => {
    const stock = makeStock();
    const result = scoreStock(stock, industryStats);
    const sum = Object.values(result.breakdown).reduce((a, b) => a + b, 0);
    assert.equal(result.total, sum);
  });
});

// ── Feature Extraction Tests ─────────────────────────────────────────

describe('extractFeatures', () => {
  it('returns 7-element array', () => {
    const stock = makeStock();
    stock._totalLimitUps = 10;
    const feats = extractFeatures(stock, { '半导体': 5 }, 10);
    assert.equal(feats.length, 7);
  });

  it('all values are finite numbers', () => {
    const stock = makeStock();
    stock._totalLimitUps = 10;
    const feats = extractFeatures(stock, { '半导体': 5 }, 10);
    for (const f of feats) {
      assert.ok(Number.isFinite(f), `Expected finite number, got ${f}`);
    }
  });

  it('handles null vol_ratio gracefully', () => {
    const stock = makeStock({ tf1d: { vol_ratio: null, atr_pct: 3.5 } });
    stock._totalLimitUps = 10;
    const feats = extractFeatures(stock, { '半导体': 5 }, 10);
    assert.ok(feats.every(f => Number.isFinite(f)));
  });

  it('handles null atr_pct gracefully', () => {
    const stock = makeStock({ tf1d: { vol_ratio: 2.5, atr_pct: null } });
    stock._totalLimitUps = 10;
    const feats = extractFeatures(stock, { '半导体': 5 }, 10);
    assert.ok(feats.every(f => Number.isFinite(f)));
  });

  it('sector ratio is 0 when no industry', () => {
    const stock = makeStock({ _industry: null });
    stock._totalLimitUps = 10;
    const feats = extractFeatures(stock, { '半导体': 5 }, 10);
    assert.equal(feats[6], 0);
  });

  it('sector ratio is count/total when industry present', () => {
    const stock = makeStock();
    stock._totalLimitUps = 10;
    const feats = extractFeatures(stock, { '半导体': 5 }, 10);
    assert.equal(feats[6], 0.5);
  });
});

// ── Logistic Regression Tests ────────────────────────────────────────

describe('trainLogisticRegression', () => {
  it('converges on linearly separable data', () => {
    // Simple 2D data: high upStreak + high vol → next day limit-up
    const features = [
      [1, 1.0, 0.0, 10, 5, 3.0, 0.1],
      [1, 1.2, 0.18, 15, 8, 2.5, 0.15],
      [2, 2.0, 0.69, 20, 10, 4.0, 0.2],
      [5, 3.0, 1.10, 30, 15, 3.0, 0.1],  // strong → 1
      [5, 4.0, 1.39, 40, 20, 3.5, 0.3],
      [6, 5.0, 1.61, 50, 25, 4.0, 0.4],
      [3, 2.5, 0.92, 25, 12, 3.2, 0.25], // medium → 1
      [4, 3.5, 1.25, 35, 18, 3.8, 0.35],
    ];
    const labels = [0, 0, 0, 1, 1, 1, 1, 1];

    const trained = trainLogisticRegression(features, labels, {
      epochs: 5000,
      alpha: 0.05,
      lambda: 0.01,
      convergenceThreshold: 1e-7,
    });

    // Should converge
    assert.ok(trained.iterations > 0);
    assert.ok(Number.isFinite(trained.finalLoss));
    assert.equal(trained.weights.length, 8);
    assert.equal(trained.featureMeans.length, 7);
    assert.equal(trained.featureStds.length, 7);
    assert.equal(trained.sampleCount, 8);
  });

  it('predicts high probability for strong sample', () => {
    const features = [
      [1, 1.0, 0.0, 0, 0, 3.0, 0.1],
      [7, 5.0, 1.61, 60, 30, 5.0, 0.5],
    ];
    const labels = [0, 1];

    const trained = trainLogisticRegression(features, labels, {
      epochs: 3000,
      alpha: 0.1,
      lambda: 0.05,
    });

    const stock = makeStock({
      limit_info: { upStreak: 7, upLimit: true, limitPct: 10, chg: 10, market: '主板' },
      tf1d: { vol_ratio: 5.0, atr_pct: 5.0 },
      tech_score: 60,
      news_score: 30,
      _industry: '半导体',
      _totalLimitUps: 10,
    });

    const prob = predictLogistic(stock, trained, { '半导体': 5 });
    assert.ok(prob > 0.5, `Expected prob > 0.5 for strong sample, got ${prob}`);
    assert.ok(prob >= 0 && prob <= 1);
  });

  it('predicts low probability for weak sample', () => {
    const features = [
      [1, 1.0, 0.0, 0, 0, 3.0, 0.1],
      [7, 5.0, 1.61, 60, 30, 5.0, 0.5],
    ];
    const labels = [0, 1];

    const trained = trainLogisticRegression(features, labels, {
      epochs: 3000,
      alpha: 0.1,
      lambda: 0.05,
    });

    const stock = makeStock({
      limit_info: { upStreak: 1, upLimit: true, limitPct: 10, chg: 10, market: '主板' },
      tf1d: { vol_ratio: 1.0, atr_pct: 1.0 },
      tech_score: 0,
      news_score: 0,
      _industry: '酿酒行业',
      _totalLimitUps: 10,
    });

    const prob = predictLogistic(stock, trained, { '酿酒行业': 1 });
    assert.ok(prob < 0.5, `Expected prob < 0.5 for weak sample, got ${prob}`);
  });

  it('probability is always in [0, 1]', () => {
    // Edge case: extreme feature values
    const model = {
      weights: [0.5, 0.3, 0.2, 0.1, 0.15, 0.05, -0.1, 0.2],
      featureMeans: [3, 2.5, 0.8, 20, 10, 3.5, 0.2],
      featureStds: [1.5, 1.2, 0.5, 10, 5, 1.5, 0.1],
    };

    const extremeStocks = [
      makeStock({ limit_info: { upStreak: 10, upLimit: true, limitPct: 10, chg: 10, market: '主板' }, tf1d: { vol_ratio: 15, atr_pct: 12 }, tech_score: 80, news_score: 50, _industry: '半导体', _totalLimitUps: 5 }),
      makeStock({ limit_info: { upStreak: 1, upLimit: true, limitPct: 10, chg: 10, market: '主板' }, tf1d: { vol_ratio: 0.1, atr_pct: 0.5 }, tech_score: -20, news_score: -10, _industry: '酿酒行业', _totalLimitUps: 5 }),
    ];

    for (const stock of extremeStocks) {
      const prob = predictLogistic(stock, model, { '半导体': 3, '酿酒行业': 1 });
      assert.ok(prob >= 0 && prob <= 1, `Expected prob in [0,1], got ${prob}`);
    }
  });

  it('throws on empty data', () => {
    assert.throws(() => trainLogisticRegression([], []));
  });
});

// ── Verdict Tests ────────────────────────────────────────────────────

describe('computeVerdict', () => {
  it('strong_buy with high scorecard + logistic', () => {
    const v = computeVerdict(75, 0.7, true);
    assert.equal(v.verdict, 'strong_buy');
  });

  it('buy with moderate scores', () => {
    const v = computeVerdict(60, 0.55, true);
    assert.equal(v.verdict, 'buy');
  });

  it('watch with marginal scores', () => {
    const v = computeVerdict(42, 0.42, true);
    assert.equal(v.verdict, 'watch');
  });

  it('skip with low scores', () => {
    const v = computeVerdict(30, 0.3, true);
    assert.equal(v.verdict, 'skip');
  });

  it('scorecard-only: strong_buy at 70+', () => {
    const v = computeVerdict(72, null, false);
    assert.equal(v.verdict, 'strong_buy');
  });

  it('scorecard-only: skip at <40', () => {
    const v = computeVerdict(35, null, false);
    assert.equal(v.verdict, 'skip');
  });
});

// ── Risk Detection Tests ─────────────────────────────────────────────

describe('computeRisks', () => {
  it('flags high streak risk', () => {
    const stock = makeStock({ limit_info: { upStreak: 6, upLimit: true, limitPct: 10, chg: 10, market: '主板' } });
    const risks = computeRisks(stock);
    assert.ok(risks.some(r => r.includes('高位连板')));
  });

  it('flags extreme volume risk', () => {
    const stock = makeStock({ tf1d: { vol_ratio: 12, atr_pct: 3.5 } });
    const risks = computeRisks(stock);
    assert.ok(risks.some(r => r.includes('量能异常')));
  });

  it('flags low volume risk', () => {
    const stock = makeStock({ tf1d: { vol_ratio: 0.3, atr_pct: 3.5 } });
    const risks = computeRisks(stock);
    assert.ok(risks.some(r => r.includes('缩量涨停')));
  });

  it('flags high ATR risk', () => {
    const stock = makeStock({ tf1d: { vol_ratio: 2.5, atr_pct: 10 } });
    const risks = computeRisks(stock);
    assert.ok(risks.some(r => r.includes('高波动率')));
  });

  it('flags negative news risk', () => {
    const stock = makeStock({ news_score: -3 });
    const risks = computeRisks(stock);
    assert.ok(risks.some(r => r.includes('新闻面偏空')));
  });

  it('no risks for healthy stock', () => {
    const stock = makeStock({
      limit_info: { upStreak: 1, upLimit: true, limitPct: 10, chg: 9.5, market: '主板' },
      tf1d: { vol_ratio: 2.5, atr_pct: 3.5 },
      news_score: 15,
    });
    const risks = computeRisks(stock);
    assert.equal(risks.length, 0);
  });
});

// ── Edge Case Tests ──────────────────────────────────────────────────

describe('edge cases', () => {
  it('missing limit_info uses defaults', () => {
    const stock = makeStock();
    delete stock.limit_info;
    const result = scoreStock(stock, {});
    assert.ok(result.total >= 0 && result.total <= 100);
  });

  it('missing tf.1D uses defaults', () => {
    const stock = makeStock();
    delete stock.tf;
    const result = scoreStock(stock, {});
    assert.ok(result.total >= 0 && result.total <= 100);
  });

  it('total never exceeds 100 with over-the-top values', () => {
    const stock = makeStock({
      tech_score: 100,
      news_score: 100,
      tf1d: { vol_ratio: 3.0, atr_pct: 3.5 },
      _industry: '半导体',
      _totalLimitUps: 100,
    });
    const result = scoreStock(stock, { '半导体': 100 });
    assert.ok(result.total <= 100);
  });

  it('total never below 0 with worst values', () => {
    const stock = makeStock({
      limit_info: { upStreak: 0, upLimit: true, limitPct: 10, chg: 10, market: '主板' },
      tech_score: -50,
      news_score: -20,
      tf1d: { vol_ratio: 0.01, atr_pct: 15 },
      _industry: null,
      _totalLimitUps: 1,
    });
    const result = scoreStock(stock, {});
    assert.ok(result.total >= 0);
  });
});
