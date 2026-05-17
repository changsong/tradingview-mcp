/**
 * llm_classify.mjs unit tests — offline only (no network).
 * Run: node --test pipeline/2-news/lib/__tests__/llm_classify.test.mjs
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { classifyByLLM, normalizeType } from '../llm_classify.mjs';

describe('normalizeType', () => {
  it('exact CN taxonomy returns as-is', () => {
    assert.equal(normalizeType('财报', 'cn'), '财报');
    assert.equal(normalizeType('黑天鹅', 'cn'), '黑天鹅');
    assert.equal(normalizeType('分析师动作', 'cn'), '分析师动作');
  });

  it('exact US taxonomy returns as-is', () => {
    assert.equal(normalizeType('Earnings', 'us'), 'Earnings');
    assert.equal(normalizeType('M&A', 'us'), 'M&A');
  });

  it('case-insensitive US fallback', () => {
    assert.equal(normalizeType('earnings', 'us'), 'Earnings');
    assert.equal(normalizeType('BLACK SWAN', 'us'), 'Black Swan');
  });

  it('CN synonyms fold into taxonomy', () => {
    assert.equal(normalizeType('业绩', 'cn'), '财报');
    assert.equal(normalizeType('监管', 'cn'), '政策');
    assert.equal(normalizeType('诉讼', 'cn'), '黑天鹅');
  });

  it('US synonyms fold into taxonomy', () => {
    assert.equal(normalizeType('upgrade', 'us'), 'Analyst Action');
    assert.equal(normalizeType('acquisition', 'us'), 'M&A');
    assert.equal(normalizeType('FDA', 'us'), 'Policy');
  });

  it('unknown type falls to default (Industry / 行业)', () => {
    assert.equal(normalizeType('something-weird', 'cn'), '行业');
    assert.equal(normalizeType('unknown', 'us'), 'Industry');
    assert.equal(normalizeType(null, 'cn'), '行业');
    assert.equal(normalizeType(undefined, 'us'), 'Industry');
  });
});

describe('classifyByLLM (no-key path)', () => {
  // 关掉 DEEPSEEK_API_KEY，期望返回 null
  // 注意：isLLMEnabled 在 llm_common.mjs 里缓存，这里只能验证「无 key 时返回 null」
  // 如果实际环境有 key，这条测试可能命中网络，但 fetch 网关失败也会返回 null。
  const HAS_KEY = !!process.env.DEEPSEEK_API_KEY;

  it('returns null on empty input', async () => {
    const r = await classifyByLLM([], { symbol: 'X', name: 'X', market: 'us' });
    assert.equal(r, null);
  });

  it('returns null without DEEPSEEK_API_KEY (or non-null array if env has key + cache hit)', async () => {
    if (HAS_KEY) {
      // 有 key 的环境：这条只能验证「不抛异常 + 返回 null 或数组」
      // 不让单测真的打 API，所以不深入
      return;
    }
    const r = await classifyByLLM(
      [{ title: 'test', date: '2026-05-04', source: 'Y', type: 'news', content: 'x' }],
      { symbol: 'TEST', name: 'Test', market: 'us' }
    );
    assert.equal(r, null);
  });
});
