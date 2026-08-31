/**
 * Tests for normalize.mjs + signal.mjs + patterns.mjs
 * Run: node --test pipeline/2-news/lib/__tests__/aggregate.test.mjs
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeScore, calcScores } from '../normalize.mjs';
import { detectPatterns } from '../patterns.mjs';
import { generateSignal } from '../signal.mjs';

// ─── normalize ──────────────────────────────────────────────────────────────
describe('normalizeScore', () => {
  it('empty list → 50 (neutral)', () => {
    assert.equal(normalizeScore(0, []), 50);
  });

  it('all positive → 100', () => {
    const tagged = [
      { sentiment: 1, finalWeight: 4 },
      { sentiment: 1, finalWeight: 5 },
      { sentiment: 1, finalWeight: 3 },
    ];
    const raw = 4 + 5 + 3;     // 12
    assert.equal(normalizeScore(raw, tagged), 100);
  });

  it('all negative → 0', () => {
    const tagged = [
      { sentiment: -1, finalWeight: 4 },
      { sentiment: -1, finalWeight: 5 },
      { sentiment: -1, finalWeight: 3 },
    ];
    const raw = -(4 + 5 + 3);
    assert.equal(normalizeScore(raw, tagged), 0);
  });

  it('balanced → 50', () => {
    const tagged = [
      { sentiment:  1, finalWeight: 3 },
      { sentiment: -1, finalWeight: 3 },
    ];
    assert.equal(normalizeScore(0, tagged), 50);
  });

  it('1 strong positive item: damped by floor denom', () => {
    // 1 item w=8 sentiment=1, raw=8, max=8 → norm=8/max(8,6)*50+50=100
    // But 1 item w=3, raw=3 → 3/max(3,6)*50+50 = 25+50 = 75 (capped by floor 6)
    const tagged = [{ sentiment: 1, finalWeight: 3 }];
    assert.equal(normalizeScore(3, tagged), 75);
  });

  it('monotonic: more positive raw → higher norm', () => {
    const t = [{ sentiment: 1, finalWeight: 4 }, { sentiment: 0, finalWeight: 4 }];
    const lo = normalizeScore(2, t);
    const hi = normalizeScore(6, t);
    assert.ok(hi > lo);
  });
});

describe('calcScores', () => {
  it('returns raw + normalized + weight sums', () => {
    const tagged = [
      { sentiment:  1, finalWeight: 4 },
      { sentiment: -1, finalWeight: 2 },
      { sentiment:  0, finalWeight: 3 },
    ];
    const r = calcScores(tagged);
    assert.equal(r.raw, 4 - 2);
    assert.equal(r.positive_weight_sum, 4);
    assert.equal(r.negative_weight_sum, 2);
    assert.ok(r.normalized > 50 && r.normalized <= 100);
  });
});

// ─── patterns ───────────────────────────────────────────────────────────────
describe('detectPatterns', () => {
  it('flags 情绪过热 when 5+ positive 0 negative', () => {
    const tagged = [
      { sentiment: 1, finalWeight: 3, type: '行业', date: '2026-05-04' },
      { sentiment: 1, finalWeight: 3, type: '行业', date: '2026-05-03' },
      { sentiment: 1, finalWeight: 3, type: '行业', date: '2026-05-02' },
      { sentiment: 1, finalWeight: 3, type: '行业', date: '2026-05-01' },
      { sentiment: 1, finalWeight: 3, type: '行业', date: '2026-04-30' },
    ];
    const p = detectPatterns(tagged, 'cn');
    assert.ok(p.some(x => x.includes('情绪过热')));
  });

  it('flags 黑天鹅背离 when black swan exists but mostly positive', () => {
    const tagged = [
      { sentiment: -1, finalWeight: 5, type: '黑天鹅', date: '2026-05-04' },
      { sentiment:  1, finalWeight: 3, type: '财报',   date: '2026-05-03' },
      { sentiment:  1, finalWeight: 3, type: '行业',   date: '2026-05-02' },
      { sentiment:  1, finalWeight: 3, type: '并购',   date: '2026-05-01' },
    ];
    const p = detectPatterns(tagged, 'cn');
    assert.ok(p.some(x => x.includes('情绪背离')));
  });

  it('flags catalyst burst when 3+ strong items same day', () => {
    const tagged = [
      { sentiment: 1, finalWeight: 5,   type: '财报', date: '2026-05-04' },
      { sentiment: 1, finalWeight: 4.5, type: '并购', date: '2026-05-04' },
      { sentiment: 1, finalWeight: 4.2, type: '政策', date: '2026-05-04' },
    ];
    const p = detectPatterns(tagged, 'cn');
    assert.ok(p.some(x => x.includes('catalyst burst')));
  });

  it('flags rumor-driven false positive', () => {
    const tagged = [
      { sentiment: 1, finalWeight: 1.5, type: '传闻', date: '2026-05-04' },
      { sentiment: 1, finalWeight: 1.5, type: '传闻', date: '2026-05-03' },
      { sentiment: 1, finalWeight: 1.5, type: '传闻', date: '2026-05-02' },
    ];
    const p = detectPatterns(tagged, 'cn');
    assert.ok(p.some(x => x.includes('传闻主导')));
  });

  it('returns empty for empty input', () => {
    assert.deepEqual(detectPatterns([], 'cn'), []);
  });
});

// ─── signal ────────────────────────────────────────────────────────────────
describe('generateSignal', () => {
  it('CN: ≥75 + no risk → 强多', () => {
    const r = generateSignal(82, [], [], 'cn');
    assert.ok(r.signal.includes('Long (强)'));
  });

  it('CN: ≥75 + overheated → 过热警告', () => {
    const r = generateSignal(85, ['⚠️情绪过热(单边乐观)'], [], 'cn');
    assert.ok(r.signal.includes('情绪过热'));
  });

  it('CN: 60-74 → 中多', () => {
    const r = generateSignal(65, [], [], 'cn');
    assert.ok(r.signal.includes('Long (中)'));
  });

  it('CN: 50-59 → 微多 No Trade', () => {
    const r = generateSignal(55, [], [], 'cn');
    assert.ok(r.signal.includes('微多'));
  });

  it('CN: 40-49 → 中性', () => {
    const r = generateSignal(45, [], [], 'cn');
    assert.ok(r.signal.includes('中性'));
  });

  it('CN: 25-39 → 规避', () => {
    const r = generateSignal(30, [], [], 'cn');
    assert.ok(r.signal.includes('规避') || r.signal.includes('No Trade'));
  });

  it('CN: <25 → Short', () => {
    const r = generateSignal(15, [], [], 'cn');
    assert.ok(r.signal.includes('Short'));
  });

  it('Black swan overrides any score', () => {
    const r = generateSignal(90, [], [{ type: 'Black Swan', sentiment: -1 }], 'us');
    assert.ok(r.signal.includes('No Trade') || r.signal.includes('Short'));
  });

  it('US: ≥75 → Long Strong', () => {
    const r = generateSignal(80, [], [], 'us');
    assert.ok(r.signal.includes('Long (Strong)'));
  });

  it('US: <25 → Short / Avoid', () => {
    const r = generateSignal(10, [], [], 'us');
    assert.ok(r.signal.includes('Short') || r.signal.includes('Avoid'));
  });
});
