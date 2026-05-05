/**
 * Tests for relevance.mjs
 * Run: node --test pipeline/2-news/lib/__tests__/relevance.test.mjs
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isRelevant, dedupBySimilarTitle, filterRelevant, normalizeKeys } from '../relevance.mjs';

describe('normalizeKeys', () => {
  it('strips exchange prefix and keeps clean code', () => {
    assert.deepEqual(normalizeKeys('SSE:600160', '巨化股份'), ['600160', '巨化股份']);
  });
  it('handles US ticker with NYSE prefix', () => {
    assert.deepEqual(normalizeKeys('NYSE:FN', null), ['FN']);
  });
  it('returns empty array for null inputs', () => {
    assert.deepEqual(normalizeKeys(null, null), []);
  });
});

describe('isRelevant — noise filter', () => {
  it('drops "DISREGARD RELEASE" (US noise)', () => {
    const r = isRelevant({ title: '/DISREGARD RELEASE: Soaak Technologies/' }, 'NYSE:FN', 'FN', { market: 'us' });
    assert.equal(r.ok, false);
    assert.match(r.reason, /^noise:/);
  });

  it('drops "4月29日快速上涨" (CN price-restate noise)', () => {
    const r = isRelevant({ title: '巨化股份4月29日快速上涨' }, 'SSE:600160', '巨化股份', { market: 'cn' });
    assert.equal(r.ok, false);
    assert.match(r.reason, /^noise:/);
  });

  it('drops "融资净买入" (CN margin-data noise)', () => {
    const r = isRelevant({ title: '巨化股份：融资净买入2993.13万元，融资余额35.42亿元' }, 'SSE:600160', '巨化股份', { market: 'cn' });
    assert.equal(r.ok, false);
    assert.match(r.reason, /^noise:/);
  });

  it('drops "重要公告集锦" (CN aggregator noise)', () => {
    const r = isRelevant({ title: '4月30日晚间重要公告集锦' }, 'SSE:600160', '巨化股份', { market: 'cn' });
    assert.equal(r.ok, false);
    assert.match(r.reason, /^noise:/);
  });

  it('drops "Press Release:" prefix (US noise)', () => {
    const r = isRelevant({ title: 'PRESS RELEASE: Apple Inc Quarterly Update' }, 'NASDAQ:AAPL', 'AAPL', { market: 'us' });
    assert.equal(r.ok, false);
  });

  it('keeps legitimate earnings news (with company name alias)', () => {
    const r = isRelevant(
      { title: 'Apple Q1 Earnings Beat Estimates on iPhone Strong Sales' },
      'NASDAQ:AAPL', ['Apple Inc', 'AAPL'], { market: 'us' }
    );
    assert.equal(r.ok, true);
  });

  it('drops news mentioning unrelated short-ticker substring', () => {
    // "from" contains "fn" but not as a word — must not falsely match ticker FN
    const r = isRelevant(
      { title: 'A Strong Quarter from Apple — buy from your broker today', type: 'news' },
      'NYSE:FN', 'FN', { market: 'us' }
    );
    assert.equal(r.ok, false);
  });
});

describe('isRelevant — subject check', () => {
  it('drops cross-stock pollution: META news under FN', () => {
    const r = isRelevant(
      { title: "META's Q1 Earnings Beat Estimates on Ad Growth and AI Momentum", type: 'news' },
      'NYSE:FN', 'FN', { market: 'us' }
    );
    assert.equal(r.ok, false);
    assert.equal(r.reason, 'no-subject-mention');
  });

  it('keeps news that mentions ticker in title', () => {
    const r = isRelevant(
      { title: 'FN Inc Reports Q1 Earnings In-Line With Estimates', type: 'news' },
      'NYSE:FN', 'FN', { market: 'us' }
    );
    assert.equal(r.ok, true);
  });

  it('keeps news that mentions ticker only in content/summary', () => {
    const r = isRelevant(
      { title: 'Component Maker Reports Strong Quarter', content: 'FN saw record revenues this quarter', type: 'news' },
      'NYSE:FN', 'FN', { market: 'us' }
    );
    assert.equal(r.ok, true);
  });

  it('skips subject check for type=research (CN research is symbol-keyed)', () => {
    const r = isRelevant(
      { title: '深度研报：化工行业景气度上行', type: 'research' },
      'SSE:600160', '巨化股份', { market: 'cn' }
    );
    assert.equal(r.ok, true);
  });

  it('skips subject check for type=announcement (already symbol-keyed)', () => {
    const r = isRelevant(
      { title: '2025年年度股东大会决议公告', type: 'announcement' },
      'SSE:600160', '巨化股份', { market: 'cn' }
    );
    assert.equal(r.ok, true);
  });

  it('keeps CN news mentioning company name', () => {
    const r = isRelevant(
      { title: '化工龙头巨化股份签下万吨级氟化液大单', type: 'news' },
      'SSE:600160', '巨化股份', { market: 'cn' }
    );
    assert.equal(r.ok, true);
  });
});

describe('dedupBySimilarTitle', () => {
  it('dedupes by first 30 chars of title + date', () => {
    const items = [
      { title: 'Apple Q1 Earnings Beat Expectations Strong iPhone Sales', date: '2026-05-01', source: 'Yahoo Finance', _sourceAuthority: 3.0 },
      { title: 'Apple Q1 Earnings Beat Expectations And iPad Surge',     date: '2026-05-01', source: 'Finnhub',       _sourceAuthority: 3.5 },
      { title: 'Apple Q1 Earnings Beat Expectations Strong iPhone Sales', date: '2026-05-01', source: 'MarketWatch',  _sourceAuthority: 3.0 },
    ];
    const out = dedupBySimilarTitle(items);
    assert.equal(out.length, 1, 'all 3 collapse to 1');
    assert.equal(out[0].source, 'Finnhub', 'highest authority survives');
  });

  it('keeps items with different titles separate', () => {
    const items = [
      { title: 'Apple announces buyback program', date: '2026-05-01' },
      { title: 'Apple unveils new iPhone model',  date: '2026-05-01' },
    ];
    assert.equal(dedupBySimilarTitle(items).length, 2);
  });
});

describe('filterRelevant — full pipeline', () => {
  it('aggregates dropped reasons', () => {
    const items = [
      { title: '/DISREGARD RELEASE: Foo/' },
      { title: "META's Q1 Earnings Beat", type: 'news' },
      { title: 'FN reports strong revenue', type: 'news' },
    ];
    const r = filterRelevant(items, 'NYSE:FN', 'FN', { market: 'us' });
    assert.equal(r.kept.length, 1);
    assert.ok(r.reasons['noise:^\\/?DISREGARD RELEASE'] >= 1 || Object.keys(r.reasons).some(k => k.startsWith('noise:')));
    assert.equal(r.reasons['no-subject-mention'], 1);
  });
});
