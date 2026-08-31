#!/usr/bin/env node
/**
 * TradingView CDP preflight.
 *
 * TradingView Desktop sometimes restores its chart page in a state where
 * Runtime.evaluate hangs indefinitely over CDP. Reloading the chart target
 * once after launch makes the renderer responsive again.
 *
 * Usage:
 *   node scripts/preflight_tv_cdp.mjs
 */

import CDP from 'chrome-remote-interface';

const CDP_HOST = '127.0.0.1';
const CDP_PORT = 9222;

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function findChartTarget() {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 5000);
  try {
    const resp = await fetch(`http://${CDP_HOST}:${CDP_PORT}/json/list`, { signal: ctrl.signal });
    clearTimeout(t);
    const targets = await resp.json();
    return targets.find(t => t.type === 'page' && /tradingview\.com\/chart/i.test(t.url))
      || targets.find(t => t.type === 'page' && /^https?:\/\/.+tradingview/i.test(t.url))
      || targets.find(t => t.type === 'page' && /tradingview/i.test(t.url) && t.url.startsWith('http'))
      || null;
  } catch {
    clearTimeout(t);
    return null;
  }
}

async function testEvaluate(client, timeoutMs = 3000) {
  try {
    const result = await Promise.race([
      client.Runtime.evaluate({ expression: '1+1', returnByValue: true }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeoutMs)),
    ]);
    return result.result?.value === 2;
  } catch {
    return false;
  }
}

async function main() {
  const target = await findChartTarget();
  if (!target) {
    console.error('❌ No TradingView chart target found on CDP');
    process.exit(1);
  }
  console.log(`🔌 CDP target: ${target.url}`);

  const client = await CDP({ host: CDP_HOST, port: CDP_PORT, target: target.id });

  const alive = await testEvaluate(client, 3000);
  if (!alive) {
    console.log('⚠️  Chart page unresponsive; reloading...');
    try { await client.Page.enable(); } catch {}
    await client.Page.reload({ ignoreCache: true });

    // Wait for page to become responsive
    let ready = false;
    for (let i = 0; i < 30; i++) {
      await sleep(1000);
      ready = await testEvaluate(client, 2000);
      if (ready) break;
    }
    if (!ready) {
      console.error('❌ Chart page did not become responsive after reload');
      process.exit(1);
    }
    console.log('✅ Chart page reloaded and responsive');
  } else {
    console.log('✅ Chart page responsive');
  }

  await client.close();
}

main().catch(e => {
  console.error('❌ Preflight failed:', e.message);
  process.exit(1);
});
