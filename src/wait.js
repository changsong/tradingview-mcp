import { evaluate, safeString } from './connection.js';

const DEFAULT_TIMEOUT = 10000;
const POLL_INTERVAL = 60;

export async function waitForChartReady(expectedSymbol = null, expectedTf = null, timeout = DEFAULT_TIMEOUT, pollInterval = POLL_INTERVAL, prevBarFingerprint = null) {
  const start = Date.now();
  let lastBarCount = -1;
  let stableCount = 0;

  while (Date.now() - start < timeout) {
    const fpCheck = prevBarFingerprint ? `var prevFp = ${JSON.stringify(prevBarFingerprint)};` : 'var prevFp = null;';
    const state = await evaluate(`
      (function() {
        ${fpCheck}
        var expectedSymbol = ${expectedSymbol ? safeString(expectedSymbol) : 'null'};

        // Fast functional check via chart API — no DOM dependency
        var chartApi = window.TradingViewApi._activeChartWidgetWV.value();
        if (chartApi) {
          try {
            var currentSym = chartApi.symbol();
            var bars = chartApi._chartWidget.model().mainSeries().bars();
            var barsSize = bars.size();
            if (barsSize > 0 && (expectedSymbol == null || currentSym.toUpperCase().indexOf(expectedSymbol.toUpperCase()) !== -1)) {
              // Bar fingerprint check: verify bars actually changed since symbol switch
              var barsChanged = true;
              if (prevFp) {
                try {
                  var last = bars.valueAt(bars.lastIndex());
                  if (last && last[0] === prevFp.time && last[4] === prevFp.close) {
                    barsChanged = false;
                  }
                } catch(e) {}
              }
              if (barsChanged) {
                return { ready: true, method: 'api', currentSymbol: currentSym, barCount: barsSize };
              }
            }
          } catch {}
        }

        // Fallback: DOM-based detection
        var spinner = document.querySelector('[class*="loader"]')
          || document.querySelector('[class*="loading"]')
          || document.querySelector('[data-name="loading"]');
        var isLoading = spinner && spinner.offsetParent !== null;

        var barCount = -1;
        try {
          if (chartApi) {
            var bars2 = chartApi._chartWidget.model().mainSeries().bars();
            barCount = bars2 ? bars2.size() : -1;
          }
        } catch {}

        var symbolEl = document.querySelector('[data-name="legend-source-title"]')
          || document.querySelector('[class*="title"] [class*="apply-common-tooltip"]');
        var currentSymbol = symbolEl ? symbolEl.textContent.trim() : '';

        return { isLoading: !!isLoading, barCount: barCount, currentSymbol: currentSymbol };
      })()
    `);

    if (!state) {
      await new Promise(r => setTimeout(r, pollInterval));
      continue;
    }

    // Functional check passed — chart is ready
    if (state.ready) {
      return true;
    }

    if (state.isLoading) {
      stableCount = 0;
      await new Promise(r => setTimeout(r, pollInterval));
      continue;
    }

    if (expectedSymbol && state.currentSymbol && !state.currentSymbol.toUpperCase().includes(expectedSymbol.toUpperCase())) {
      stableCount = 0;
      await new Promise(r => setTimeout(r, pollInterval));
      continue;
    }

    if (state.barCount === lastBarCount && state.barCount > 0) {
      stableCount++;
    } else {
      stableCount = 0;
    }
    lastBarCount = state.barCount;

    if (stableCount >= 1) {
      return true;
    }

    await new Promise(r => setTimeout(r, pollInterval));
  }

  return false;
}
