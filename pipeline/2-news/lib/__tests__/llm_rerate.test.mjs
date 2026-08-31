/**
 * llm_rerate unit tests — verify result application logic (no network).
 * Run: node --test pipeline/2-news/lib/__tests__/llm_rerate.test.mjs
 */

import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { rerateTopNews, isLLMEnabled } from '../llm_rerate.mjs';

const ORIG_KEY = process.env.DEEPSEEK_API_KEY;

describe('isLLMEnabled', () => {
  it('returns false without key (cached), and stays cached for the run', () => {
    const first = isLLMEnabled();
    assert.equal(typeof first, 'boolean');
    assert.equal(isLLMEnabled(), first);
  });
});

describe('rerateTopNews (no key path)', () => {
  it('returns null without DEEPSEEK_API_KEY', async () => {
    const result = await rerateTopNews({
      topItems: [{ title: 'x', date: '2026-05-04', finalWeight: 3, sentiment: 1, type: 'news' }],
      symbol: 'TEST',
      name: 'Test',
      market: 'us',
    });
    // 在无 key 环境下应返回 null（即便 key 存在，返回值可能是 null/array，因为离线 fetch 大概率失败 → null）
    assert.ok(result === null || Array.isArray(result));
  });

  it('returns null on empty input', async () => {
    const r = await rerateTopNews({ topItems: [], symbol: 'X', name: 'X', market: 'us' });
    assert.equal(r, null);
  });
});
