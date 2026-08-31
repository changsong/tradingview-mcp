/**
 * Tests for classify.mjs + sentiment.mjs + weight.mjs
 * Run: node --test pipeline/2-news/lib/__tests__/scoring.test.mjs
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { classifyType } from '../classify.mjs';
import { scoreSentiment } from '../sentiment.mjs';
import { calcWeight, sourceAuthority, recencyDecay, typeMultiplier } from '../weight.mjs';

// ─── classify ────────────────────────────────────────────────────────────────
describe('classifyType', () => {
  it('CN: 黑天鹅 wins over 行业', () => {
    assert.equal(classifyType({ title: '某公司被立案调查涉嫌内幕交易' }, 'cn'), '黑天鹅');
  });
  it('CN: 财报 (use content if title is generic)', () => {
    assert.equal(
      classifyType({ title: '公司公告', content: '一季度营收同比增长 23%，净利润同比增长 45%' }, 'cn'),
      '财报'
    );
  });
  it('CN: 分析师动作 — 上调评级', () => {
    assert.equal(classifyType({ title: '中信证券上调贵州茅台评级至买入' }, 'cn'), '分析师动作');
  });
  it('CN: defaults to 行业 when nothing matches', () => {
    assert.equal(classifyType({ title: '股价波动小幅整理' }, 'cn'), '行业');
  });
  it('US: Earnings via title', () => {
    assert.equal(classifyType({ title: 'Apple Q1 Earnings Beat Estimates' }, 'us'), 'Earnings');
  });
  it('US: Analyst Action — upgrade', () => {
    assert.equal(classifyType({ title: 'Morgan Stanley upgrades NVDA to Overweight' }, 'us'), 'Analyst Action');
  });
  it('US: Black Swan over Industry', () => {
    assert.equal(classifyType({ title: 'SEC charges company with fraud in restatement probe' }, 'us'), 'Black Swan');
  });
  it('US: defaults to Industry', () => {
    assert.equal(classifyType({ title: 'Generic press conference held today' }, 'us'), 'Industry');
  });
});

// ─── sentiment ───────────────────────────────────────────────────────────────
describe('scoreSentiment', () => {
  it('CN: bullish keyword in title', () => {
    assert.equal(scoreSentiment({ title: '公司业绩超预期，营收同比增长 30%' }, '财报', 'cn'), 1);
  });

  it('CN: bearish keyword in title', () => {
    assert.equal(scoreSentiment({ title: '公司业绩不及预期，净利润大幅下降' }, '财报', 'cn'), -1);
  });

  it('CN: 黑天鹅 type forces -1', () => {
    assert.equal(scoreSentiment({ title: '公司被立案调查' }, '黑天鹅', 'cn'), -1);
  });

  it('CN: negation neutralizes bullish', () => {
    // "未达增长" — 否定窗口内
    assert.equal(scoreSentiment({ title: '公司业绩未达预期增长目标' }, '行业', 'cn'), 0);
  });

  it('CN: research rating overrides title', () => {
    assert.equal(scoreSentiment({ title: '研报', type: 'research', rating: '买入' }, '行业', 'cn'), 1);
    assert.equal(scoreSentiment({ title: '研报', type: 'research', rating: '减持' }, '行业', 'cn'), -1);
  });

  it('CN: uses content when title is generic', () => {
    assert.equal(
      scoreSentiment({ title: '公告', content: '公司预增，营收同比增长 50%' }, '财报', 'cn'),
      1
    );
  });

  it('US: earnings beat is bullish', () => {
    assert.equal(scoreSentiment({ title: 'Apple beat estimates by 10%' }, 'Earnings', 'us'), 1);
  });

  it('US: analyst downgrade is bearish', () => {
    assert.equal(scoreSentiment({ title: 'Morgan Stanley downgrades stock to underperform' }, 'Analyst Action', 'us'), -1);
  });

  it('US: negation reverses bullish', () => {
    assert.equal(scoreSentiment({ title: 'Stock did not beat estimates this quarter' }, 'Earnings', 'us'), 0);
  });

  it('US: Black Swan forces -1', () => {
    assert.equal(scoreSentiment({ title: 'SEC charges fraud' }, 'Black Swan', 'us'), -1);
  });

  it('US: cut guidance is bearish', () => {
    assert.equal(scoreSentiment({ title: 'Company lowered guidance for full year' }, 'Earnings', 'us'), -1);
  });

  it('returns 0 when no signal words match', () => {
    assert.equal(scoreSentiment({ title: '公司发布研究报告' }, '行业', 'cn'), 0);
  });
});

// ─── weight ──────────────────────────────────────────────────────────────────
describe('sourceAuthority', () => {
  it('巨潮资讯 = 5.0 (highest)', () => {
    assert.equal(sourceAuthority('巨潮资讯', 'announcement'), 5.0);
  });
  it('Finnhub > Yahoo Finance', () => {
    assert.ok(sourceAuthority('Finnhub', 'news') > sourceAuthority('Yahoo Finance', 'news'));
  });
  it('research rating fallback', () => {
    assert.equal(sourceAuthority('unknown source', 'research'), 4.0);
  });
  it('forum default low', () => {
    assert.equal(sourceAuthority('某股吧', 'forum'), 1.2);
  });
});

describe('recencyDecay', () => {
  it('today = 1.0', () => {
    const today = new Date('2026-05-04');
    assert.equal(recencyDecay('2026-05-04', today), 1.0);
  });
  it('1 day ago = 0.85', () => {
    const today = new Date('2026-05-04');
    assert.equal(recencyDecay('2026-05-03', today), 0.85);
  });
  it('7+ days ago = 0.3', () => {
    const today = new Date('2026-05-04');
    assert.equal(recencyDecay('2026-04-20', today), 0.3);
  });
  it('empty date = 0.3 (worst)', () => {
    assert.equal(recencyDecay(''), 0.3);
  });
  it('handles ISO timestamp with time component', () => {
    const today = new Date('2026-05-04');
    assert.equal(recencyDecay('2026-05-04T10:30:00', today), 1.0);
  });
});

describe('typeMultiplier', () => {
  it('黑天鹅 = 1.5', () => assert.equal(typeMultiplier('黑天鹅'), 1.5));
  it('Earnings = 1.3', () => assert.equal(typeMultiplier('Earnings'), 1.3));
  it('M&A = 1.4', () => assert.equal(typeMultiplier('M&A'), 1.4));
  it('Rumor = 0.6', () => assert.equal(typeMultiplier('Rumor'), 0.6));
  it('unknown = 1.0', () => assert.equal(typeMultiplier('Unknown'), 1.0));
});

describe('calcWeight integration', () => {
  it('巨潮 announcement today: high finalWeight', () => {
    const today = new Date('2026-05-04');
    const w = calcWeight(
      { source: '巨潮资讯', type: 'announcement', date: '2026-05-04' },
      '财报', today
    );
    // 5.0 × 1.3 × 1.0 = 6.5, clamped at 8 → 6.5
    assert.equal(w.finalWeight, 6.5);
  });
  it('Reddit forum 5 days ago: low finalWeight', () => {
    const today = new Date('2026-05-04');
    const w = calcWeight(
      { source: 'r/wallstreetbets', type: 'forum', date: '2026-04-29' },
      'Industry', today
    );
    // 1.0 × 1.0 × 0.42 = 0.42, clamped at 0.5
    assert.equal(w.finalWeight, 0.5);
  });
  it('Rumor type halves multiplier', () => {
    const today = new Date('2026-05-04');
    const a = calcWeight({ source: '新浪财经', type: 'news', date: '2026-05-04' }, '财报', today);
    const b = calcWeight({ source: '新浪财经', type: 'news', date: '2026-05-04' }, '传闻', today);
    assert.ok(a.finalWeight > b.finalWeight);
  });
});
