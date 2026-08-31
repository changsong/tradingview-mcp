#!/usr/bin/env node
/**
 * Direct CDP scan — uses a single persistent CDP connection instead of
 * execSync-per-symbol.  Much faster and more reliable for batch scanning.
 *
 * Usage: node pipeline/1-scan/scan_stocks_direct.mjs
 *        [--symbols=filepath=./watchlist/cn.txt]
 *        [--output=./watchlist/cn_selected.txt]
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..', '..');

// ── CDP connection (reuse the same module) ──
import { evaluate, evaluateAsync, getClient, connect, safeString } from '../../src/connection.js';
import { filterByPE } from '../../src/core/fundamental.js';

// ── Helpers ──
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}


// ── Parse SQZMOM table raw data ──
function parseRawData(rawData) {
  const result = {
    trendUp: false,
    validCompression: false,
    atrPct: null,
    volOK: false,
    rsiOK: false,
    notHighVol: false,
    volMom: false,
    validStock: false,
    fakeBreak: false,
    score: null,
    signal: 'UNKNOWN',
  };

  const boolRe = /(trendUp|validComp(?:ression)?|volOK|rsiOK|notHighVol|volMom|validStock|fakeBreak):(true|false)/g;
  let m;
  while ((m = boolRe.exec(rawData)) !== null) {
    const v = m[2] === 'true';
    switch (m[1]) {
      case 'trendUp':          result.trendUp = v;          break;
      case 'validComp':
      case 'validCompression': result.validCompression = v; break;
      case 'volOK':            result.volOK = v;            break;
      case 'rsiOK':            result.rsiOK = v;            break;
      case 'notHighVol':       result.notHighVol = v;       break;
      case 'volMom':           result.volMom = v;           break;
      case 'validStock':       result.validStock = v;       break;
      case 'fakeBreak':        result.fakeBreak = v;        break;
    }
  }

  const atrM = rawData.match(/atrPct:([\d.]+)%/);
  if (atrM) result.atrPct = parseFloat(atrM[1]);

  const sigM = rawData.match(/(\d+\.?\d*)\s*(?:🟢|🔴)\s*(LONG|WAIT)/u);
  if (sigM) {
    result.score  = parseFloat(sigM[1]);
    result.signal = sigM[2];
  }

  return result;
}

// ── Read SQZMOM table from chart using the working buildGraphicsJS pattern ──
// NOTE: This mirrors src/core/data.js buildGraphicsJS which has been validated
// to work across all TradingView versions (tested 4/6 success with 4s wait).
async function readSqzTable() {
  const results = await evaluate(`
    (function() {
      var chart = window.TradingViewApi._activeChartWidgetWV.value()._chartWidget;
      var sources = chart.model().model().dataSources();
      var results = [];
      var filter = 'SQZMOM';
      for (var si = 0; si < sources.length; si++) {
        var s = sources[si];
        if (!s.metaInfo) continue;
        try {
          var meta = s.metaInfo();
          var name = meta.description || meta.shortDescription || '';
          if (!name) continue;
          if (filter && name.indexOf(filter) === -1) continue;
          var g = s._graphics;
          if (!g || !g._primitivesCollection) continue;
          var pc = g._primitivesCollection;
          var items = [];
          try {
            var outer = pc.dwgtablecells;
            if (outer) {
              var inner = outer.get('tableCells');
              if (inner) {
                var coll = inner.get(false);
                if (coll && coll._primitivesDataById && coll._primitivesDataById.size > 0) {
                  coll._primitivesDataById.forEach(function(v, id) { items.push(v.t || ''); });
                }
              }
            }
          } catch(e) {}
          if (items.length === 0) {
            try {
              var tcOuter = pc.dwgtablecells;
              if (tcOuter) {
                var tcColl = tcOuter.get('tableCells');
                if (tcColl && tcColl._primitivesDataById && tcColl._primitivesDataById.size > 0) {
                  tcColl._primitivesDataById.forEach(function(v, id) { items.push(v.t || ''); });
                }
              }
            } catch(e) {}
          }
          if (items.length === 0) {
            try {
              var tblOuter = pc.dwgtables;
              if (tblOuter) {
                var tblInner = tblOuter.get('tables');
                if (tblInner) {
                  var tblColl = tblInner.get(false);
                  if (tblColl && tblColl._primitivesDataById && tblColl._primitivesDataById.size > 0) {
                    tblColl._primitivesDataById.forEach(function(v, id) { items.push(v.t || ''); });
                  }
                }
              }
            } catch(e) {}
          }
          if (items.length > 0) results.push({name: name, count: items.length, items: items});
        } catch(e) {}
      }
      return results;
    })()
  `);
  // Flatten results into single text string
  if (results && results.length > 0 && results[0].items && results[0].items.length > 0) {
    return results[0].items.join(' | ');
  }
  return null;
}

// ── Switch symbol (simple, reliable) ──
async function setSymbol(symbol) {
  await evaluateAsync(`
    (function() {
      var chart = window.TradingViewApi._activeChartWidgetWV.value();
      return new Promise(function(resolve) {
        chart.setSymbol(${safeString(symbol)}, {});
        setTimeout(resolve, 1000);
      });
    })()
  `);
}

// ── Main ──
async function main() {
  console.log('Starting direct CDP scan...\n');

  // Connect to CDP
  console.log('Connecting to TradingView CDP...');
  await connect();
  console.log('Connected to CDP.\n');

  // Load symbols
  const customSymbolsArg = process.argv.find(arg => arg.startsWith('--symbols='));
  let symbols = [];

  if (customSymbolsArg) {
    const rawValue = customSymbolsArg.slice('--symbols='.length);
    const filePath = rawValue.startsWith('filepath=') ? rawValue.slice('filepath='.length) : rawValue;
    const content = readFileSync(filePath, 'utf8').trim();
    if (filePath.endsWith('.txt')) {
      symbols = content.split(',').map(s => ({ symbol: s.trim() })).filter(s => s.symbol);
    } else {
      const data = JSON.parse(content);
      const rawSymbols = Array.isArray(data) ? data : data.symbols || [];
      symbols = rawSymbols.map(s => typeof s === 'string' ? { symbol: s } : s);
    }
    console.log(`Loaded ${symbols.length} symbols from: ${filePath}\n`);
  } else {
    console.error('No symbols file specified. Use --symbols=filepath=...');
    process.exit(1);
  }

  // ── Stage 0: Fundamental pre-filter (PE < 100) ──
  console.log(`\nFetching PE data for ${symbols.length} symbols...`);
  const peFilter = await filterByPE(symbols.map(s => s.symbol), 100);
  console.log(`  PE < 100 (pass):  ${peFilter.passed.length}`);
  console.log(`  PE >= 100 (skip): ${peFilter.excluded.length}`);
  console.log(`  PE missing:        ${peFilter.missing.length} (will still scan)`);

  // PE-missing symbols still get scanned (could be ETFs, non-standard codes)
  const scanSymbols = [...peFilter.passed, ...peFilter.missing];
  const skipSet = new Set(peFilter.excluded);

  if (peFilter.excluded.length > 0) {
    console.log(`\n  Excluded (PE >= 100):`);
    for (const sym of peFilter.excluded) {
      const f = peFilter.fundamentals.get(sym);
      console.log(`    - ${sym}  PE: ${f?.pe ?? 'N/A'}`);
    }
  }
  console.log(`\n  Scanning ${scanSymbols.length}/${symbols.length} symbols after PE filter.\n`);

  const results = [];
  let okCount = 0;
  let failCount = 0;

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i].symbol;

    // Skip symbols excluded by PE filter
    if (skipSet.has(symbol)) continue;
    process.stdout.write(`[${i + 1}/${symbols.length}] ${symbol} ... `);

    try {
      await setSymbol(symbol);

      // Poll for table data (2s intervals, max 8s)
      let rawText = null;
      const maxPolls = 4;  // poll at 2, 4, 6, 8 seconds
      for (let poll = 0; poll < maxPolls; poll++) {
        await sleep(2000);
        rawText = await readSqzTable();
        if (rawText) break;
      }

      if (!rawText) {
        console.log('NO_DATA');
        failCount++;
        continue;
      }

      const parsed = parseRawData(rawText);
      results.push({ symbol, ...parsed });
      const atrStr = parsed.atrPct != null ? ` atrPct:${parsed.atrPct.toFixed(1)}%` : '';
      const scoreStr = parsed.score != null ? ` score:${parsed.score}` : '';
      console.log(`✓${atrStr}${scoreStr} → ${parsed.signal}`);
      okCount++;
    } catch (e) {
      console.log(`ERROR: ${e.message}`);
      failCount++;
    }
  }

  // ── Filter qualified stocks ──
  const qualified = results.filter(r => {
    if (r.trendUp && r.validCompression && r.volOK && r.rsiOK && r.notHighVol && r.signal === 'LONG') return true;
    if (r.trendUp && !r.validCompression && r.volOK && r.rsiOK && r.notHighVol) return true;
    return false;
  });

  const trendDown = new Set(
    results.filter(r => r.trendUp === false).map(r => r.symbol)
  );

  console.log(`\n=== Scan Complete ===`);
  console.log(`Total symbols: ${symbols.length}, PE excluded: ${peFilter.excluded.length}, Scanned: ${okCount + failCount}`);
  console.log(`Data OK: ${okCount}, No Data: ${failCount}`);
  console.log(`Qualified (LONG + trend extension): ${qualified.length}`);
  if (trendDown.size > 0) console.log(`TrendDown (removed): ${trendDown.size}`);

  if (qualified.length > 0) {
    console.log(`\nQualified stocks:`);
    qualified.forEach((s, i) => console.log(`  ${i + 1}. ${s.symbol} → ${s.signal}`));
  }

  // ── Save to output file ──
  const outputArg = process.argv.find(arg => arg.startsWith('--output='));
  if (outputArg) {
    const outputPath = outputArg.split('=')[1];

    let existingSymbols = [];
    try {
      const existing = readFileSync(outputPath, 'utf8').trim();
      if (existing) existingSymbols = existing.split(',').map(s => s.trim()).filter(Boolean);
    } catch (e) { /* file doesn't exist yet */ }

    const removedCount = existingSymbols.length;
    existingSymbols = existingSymbols.filter(s => !trendDown.has(s));
    const nRemoved = removedCount - existingSymbols.length;

    const newSymbols = qualified.map(s => s.symbol);
    const mergedSymbols = [...new Set([...existingSymbols, ...newSymbols])];

    writeFileSync(outputPath, mergedSymbols.join(','), 'utf8');

    console.log(`\nSaved to: ${outputPath}`);
    if (nRemoved > 0) console.log(`  Removed trend-down: ${nRemoved}`);
    console.log(`  New: ${newSymbols.length}, Existing: ${existingSymbols.length}, Total (deduped): ${mergedSymbols.length}`);
  }
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
