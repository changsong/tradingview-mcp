/**
 * Direct CDP script for v8 strategy batch test.
 * Bypasses MCP SDK timeout by calling TradingView/CDP directly.
 */
import CDP from 'chrome-remote-interface';
import { readFileSync, writeFileSync } from 'fs';

const CDP_HOST = 'localhost';
const CDP_PORT = 9222;

const SYMBOLS = [
  'SZSE:300750',
  'SZSE:002245',
  'SZSE:300408',
  'SZSE:000657',
  'SSE:605198',
  'SZSE:300037',
  'SZSE:300661',
  'SZSE:002475',
  'SSE:601126',
];

const FIND_MONACO = `
  (function findMonacoEditor() {
    var container = document.querySelector('.monaco-editor.pine-editor-monaco');
    if (!container) return null;
    var el = container;
    var fiberKey;
    for (var i = 0; i < 20; i++) {
      if (!el) break;
      fiberKey = Object.keys(el).find(function(k) { return k.startsWith('__reactFiber$'); });
      if (fiberKey) break;
      el = el.parentElement;
    }
    if (!fiberKey) return null;
    var current = el[fiberKey];
    for (var d = 0; d < 15; d++) {
      if (!current) break;
      if (current.memoizedProps && current.memoizedProps.value && current.memoizedProps.value.monacoEnv) {
        var env = current.memoizedProps.value.monacoEnv;
        if (env.editor && typeof env.editor.getEditors === 'function') {
          var editors = env.editor.getEditors();
          if (editors.length > 0) return true;
        }
      }
      current = current.return;
    }
    return false;
  })()
`;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function ev(client, expression, awaitPromise = false) {
  const result = await client.Runtime.evaluate({
    expression,
    returnByValue: true,
    awaitPromise,
  });
  if (result.exceptionDetails) {
    const msg = result.exceptionDetails.exception?.description || result.exceptionDetails.text || 'Unknown error';
    throw new Error(`JS eval error: ${msg}`);
  }
  return result.result?.value;
}

async function main() {
  // Connect to CDP
  const resp = await fetch(`http://${CDP_HOST}:${CDP_PORT}/json/list`);
  const targets = await resp.json();
  const target = targets.find(t => t.type === 'page' && /tradingview\.com\/chart/i.test(t.url))
    || targets.find(t => t.type === 'page' && /tradingview/i.test(t.url));

  if (!target) throw new Error('No TradingView chart target found');
  console.log('Connected to target:', target.url.slice(0, 80));

  const client = await CDP({ host: CDP_HOST, port: CDP_PORT, target: target.id });
  await client.Runtime.enable();
  await client.Page.enable();

  // ── Step 2: Open Pine Editor and inject source ──────────────────────────────
  console.log('\n=== STEP 2: Ensure Pine Editor open ===');

  // Try to open Pine Editor
  await ev(client, `
    (function() {
      var bwb = window.TradingView && window.TradingView.bottomWidgetBar;
      if (bwb) {
        if (typeof bwb.activateScriptEditorTab === 'function') bwb.activateScriptEditorTab();
        else if (typeof bwb.showWidget === 'function') bwb.showWidget('pine-editor');
      }
      var btn = document.querySelector('[aria-label="Pine"]') || document.querySelector('[data-name="pine-dialog-button"]');
      if (btn) btn.click();
    })()
  `);

  // Wait for Monaco to appear
  let monacoReady = false;
  for (let i = 0; i < 30; i++) {
    await sleep(500);
    monacoReady = await ev(client, FIND_MONACO);
    if (monacoReady) break;
  }
  console.log('Monaco ready:', monacoReady);

  if (!monacoReady) {
    console.log('WARNING: Monaco not found - will attempt inject anyway');
  }

  // Inject Pine Script source
  const code = readFileSync('D:/trade_workspace/tradingview-mcp/A_Share_SQZMOM_PRO_v8_Daily.pine', 'utf8');
  const escaped = JSON.stringify(code);
  console.log(`Injecting ${code.length} chars...`);

  const setResult = await ev(client, `
    (function() {
      var container = document.querySelector('.monaco-editor.pine-editor-monaco');
      if (!container) return {ok: false, reason: 'no-container'};
      var el = container;
      var fiberKey;
      for (var i = 0; i < 20; i++) {
        if (!el) break;
        fiberKey = Object.keys(el).find(function(k) { return k.startsWith('__reactFiber$'); });
        if (fiberKey) break;
        el = el.parentElement;
      }
      if (!fiberKey) return {ok: false, reason: 'no-fiber'};
      var current = el[fiberKey];
      for (var d = 0; d < 15; d++) {
        if (!current) break;
        if (current.memoizedProps && current.memoizedProps.value && current.memoizedProps.value.monacoEnv) {
          var env = current.memoizedProps.value.monacoEnv;
          if (env.editor && typeof env.editor.getEditors === 'function') {
            var editors = env.editor.getEditors();
            if (editors.length > 0) {
              editors[0].setValue(${escaped});
              return {ok: true, chars: ${code.length}};
            }
          }
        }
        current = current.return;
      }
      return {ok: false, reason: 'no-editor'};
    })()
  `);
  console.log('pine_set_source result:', JSON.stringify(setResult));

  // ── Step 3: Compile ──────────────────────────────────────────────────────────
  console.log('\n=== STEP 3: pine_smart_compile ===');
  await sleep(1000);

  const clicked = await ev(client, `
    (function() {
      var btns = document.querySelectorAll('button');
      for (var i = 0; i < btns.length; i++) {
        var text = btns[i].textContent.trim();
        if (/save and add to chart/i.test(text)) { btns[i].click(); return 'Save and add to chart'; }
        if (/^add to chart$/i.test(text)) { btns[i].click(); return 'Add to chart'; }
        if (/^update on chart$/i.test(text)) { btns[i].click(); return 'Update on chart'; }
      }
      return null;
    })()
  `);
  console.log('Compile button clicked:', clicked);

  await sleep(5000);  // Wait for compilation

  // ── Step 4: Check errors ────────────────────────────────────────────────────
  console.log('\n=== STEP 4: pine_get_errors ===');

  const errors = await ev(client, `
    (function() {
      var container = document.querySelector('.monaco-editor.pine-editor-monaco');
      if (!container) return [];
      var el = container;
      var fiberKey;
      for (var i = 0; i < 20; i++) {
        if (!el) break;
        fiberKey = Object.keys(el).find(function(k) { return k.startsWith('__reactFiber$'); });
        if (fiberKey) break;
        el = el.parentElement;
      }
      if (!fiberKey) return [];
      var current = el[fiberKey];
      for (var d = 0; d < 15; d++) {
        if (!current) break;
        if (current.memoizedProps && current.memoizedProps.value && current.memoizedProps.value.monacoEnv) {
          var env = current.memoizedProps.value.monacoEnv;
          if (env.editor && typeof env.editor.getEditors === 'function') {
            var editors = env.editor.getEditors();
            if (editors.length > 0) {
              var model = editors[0].getModel();
              if (!model) return [];
              var markers = env.editor.getModelMarkers({ resource: model.uri });
              return markers.map(function(mk) {
                return { line: mk.startLineNumber, col: mk.startColumn, msg: mk.message, sev: mk.severity };
              });
            }
          }
        }
        current = current.return;
      }
      return [];
    })()
  `);

  console.log('Errors:', JSON.stringify(errors));
  const compileOK = !errors || errors.length === 0;
  console.log('COMPILATION:', compileOK ? 'SUCCESS - No errors' : `FAILED - ${errors.length} error(s)`);

  // ── Step 5: Open strategy tester panel ──────────────────────────────────────
  console.log('\n=== Opening Strategy Tester panel ===');
  await ev(client, `
    (function() {
      // Try clicking the Strategy Tester tab
      var tabs = document.querySelectorAll('[data-name]');
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].getAttribute('data-name') === 'strategy-tester') {
          tabs[i].click();
          return 'clicked strategy-tester tab';
        }
      }
      // Try bottom bar buttons
      var btns = document.querySelectorAll('button');
      for (var j = 0; j < btns.length; j++) {
        var txt = btns[j].textContent.trim();
        if (/strategy tester/i.test(txt)) { btns[j].click(); return 'clicked strategy tester button'; }
      }
    })()
  `);
  await sleep(2000);

  // ── Step 5: Per-symbol testing ───────────────────────────────────────────────
  const results = [];

  for (const symbol of SYMBOLS) {
    console.log(`\n=== Testing ${symbol} ===`);

    // Switch symbol using TradingView API
    const switchResult = await ev(client, `
      (function() {
        try {
          var chart = window.TradingViewApi._activeChartWidgetWV.value();
          if (chart && typeof chart.setSymbol === 'function') {
            chart.setSymbol(${JSON.stringify(symbol)});
            return {ok: true, method: 'chart.setSymbol'};
          }
          if (chart && typeof chart.setSymbol === 'undefined') {
            // Try alternative methods
            var keys = Object.keys(chart).filter(k => /symbol/i.test(k));
            return {ok: false, keys: keys.slice(0, 10)};
          }
        } catch(e) {
          return {ok: false, error: e.message};
        }
        return {ok: false, reason: 'no-chart'};
      })()
    `);
    console.log('  setSymbol:', JSON.stringify(switchResult));

    if (!switchResult?.ok) {
      // Try alternative: find symbol search box and type
      await ev(client, `
        (function() {
          // Click the symbol input at top of chart
          var input = document.querySelector('[data-name="symbol-search-items-dialog-search-input"]')
            || document.querySelector('.tv-symbol-info__name')
            || document.querySelector('[class*="symbolInput"]');
          if (input) { input.click(); }
        })()
      `);
    }

    // Wait for chart to load with new symbol (5 seconds as requested)
    await sleep(5000);

    // Take screenshot of strategy tester region
    // We'll capture the full page screenshot and save to screenshots dir
    const { data: screenshotBase64 } = await client.Page.captureScreenshot({ format: 'png' });
    const ssPath = `D:/trade_workspace/tradingview-mcp/screenshots/v8_${symbol.replace(':', '_')}_strategy_tester_${Date.now()}.png`;
    const buf = Buffer.from(screenshotBase64, 'base64');

    // Ensure screenshots dir exists
    const { mkdirSync } = await import('fs');
    try { mkdirSync('D:/trade_workspace/tradingview-mcp/screenshots', { recursive: true }); } catch {}

    writeFileSync(ssPath, buf);
    console.log(`  Screenshot saved: ${ssPath} (${buf.length} bytes)`);

    results.push({
      symbol,
      switch_result: switchResult,
      screenshot_path: ssPath,
      screenshot_size: buf.length,
    });

    await sleep(2000);
  }

  await client.close();

  // Write summary
  const summary = {
    compile_ok: compileOK,
    errors: errors,
    compile_button: clicked,
    results,
  };
  writeFileSync('D:/trade_workspace/tradingview-mcp/v8_backtest_summary.json', JSON.stringify(summary, null, 2));
  console.log('\n=== DONE ===');
  console.log('Compilation:', compileOK ? 'SUCCESS' : 'FAILED');
  console.log('Screenshots saved:', results.length);
  console.log('Summary written to: v8_backtest_summary.json');
  results.forEach(r => console.log(`  ${r.symbol} -> ${r.screenshot_path}`));
}

main().catch(err => { console.error('FATAL:', err); process.exit(1); });
