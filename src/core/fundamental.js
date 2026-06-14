/**
 * Fundamental data fetcher — PE, PB, market cap from Eastmoney API.
 *
 * Symbol mapping:
 *   SSE:600519  →  1.600519  (Shanghai A shares)
 *   SZSE:300750 →  0.300750  (Shenzhen A shares)
 *   SSE:688xxx  →  1.688xxx  (Shanghai STAR)
 *   SZSE:002xxx →  0.002xxx  (Shenzhen SME)
 */

const EM_API = 'https://push2.eastmoney.com/api/qt/ulist.np/get';

// fields: f2=price, f9=PE(TTM), f12=code, f14=name, f20=marketCap(元), f115=PE(static)
const FIELDS = 'f2,f9,f12,f14,f20,f23,f115';

const UA_POOL = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
];
let _uaCursor = 0;
function pickUA() {
  return UA_POOL[_uaCursor++ % UA_POOL.length];
}

/**
 * Convert TradingView symbol format to Eastmoney secid format.
 *   SSE:600519 → 1.600519
 *   SZSE:300750 → 0.300750
 *   SSE:688001 → 1.688001
 */
function toEmSecid(symbol) {
  const m = symbol.match(/^(SSE|SZSE):(\d+)$/i);
  if (!m) return null;
  const market = m[1].toUpperCase() === 'SSE' ? '1' : '0';
  return `${market}.${m[2]}`;
}

/**
 * Convert Eastmoney secid back to TradingView symbol format.
 */
function fromEmSecid(secid) {
  const [market, code] = secid.split('.');
  return market === '1' ? `SSE:${code}` : `SZSE:${code}`;
}

/**
 * Batch-fetch fundamental data for multiple symbols.
 * Returns Map<symbol, { pe, pe_static, price, name, market_cap }>.
 *
 * Eastmoney ulist.np accepts up to ~50-100 secids per request.
 * We batch in chunks of 80.
 */
export async function fetchFundamentals(symbols) {
  const secids = [];
  const lookup = new Map();
  for (const sym of symbols) {
    const secid = toEmSecid(sym);
    if (secid) {
      secids.push(secid);
      lookup.set(secid, sym);
    }
  }

  if (secids.length === 0) return new Map();

  const result = new Map();

  // Batch in chunks of 80
  const CHUNK = 80;
  for (let i = 0; i < secids.length; i += CHUNK) {
    const chunk = secids.slice(i, i + CHUNK);
    const url = `${EM_API}?fltt=2&fields=${FIELDS}&secids=${chunk.join(',')}`;
    try {
      const resp = await fetch(url, {
        headers: { 'User-Agent': pickUA(), 'Referer': 'https://quote.eastmoney.com/' },
        signal: AbortSignal.timeout(10000),
      });
      if (!resp.ok) continue;
      const json = await resp.json();
      if (!json?.data?.diff) continue;
      for (const item of json.data.diff) {
        const sym = fromEmSecid(`1.${item.f12}`) === `SSE:${item.f12}`
          ? lookup.get(`1.${item.f12}`) || lookup.get(`0.${item.f12}`)
          : fromEmSecid(`0.${item.f12}`);
        // Determine the correct secid for lookup
        const actualSecid = lookup.has(`1.${item.f12}`) ? `1.${item.f12}` : `0.${item.f12}`;
        const tvSymbol = lookup.get(actualSecid);
        if (tvSymbol) {
          result.set(tvSymbol, {
            pe: typeof item.f9 === 'number' ? item.f9 : parseFloat(item.f9) || null,
            pe_static: typeof item.f115 === 'number' ? item.f115 : parseFloat(item.f115) || null,
            price: item.f2 || null,
            name: item.f14 || null,
            market_cap: item.f20 || null,
            pb: item.f23 ? (typeof item.f23 === 'number' ? item.f23 : parseFloat(item.f23)) : null,
          });
        }
      }
    } catch (e) {
      // Single chunk failure shouldn't fail the whole fetch
      continue;
    }
  }

  return result;
}

/**
 * Convenience: filter symbols by PE < maxPE.
 * Returns { passed: string[], excluded: string[], missing: string[], fundamentals: Map }
 */
export async function filterByPE(symbols, maxPE = 100) {
  const fundMap = await fetchFundamentals(symbols);
  const passed = [];
  const excluded = [];
  const missing = [];

  for (const sym of symbols) {
    const f = fundMap.get(sym);
    if (!f || f.pe == null) {
      missing.push(sym);
      continue;
    }
    if (f.pe < maxPE) {
      passed.push(sym);
    } else {
      excluded.push(sym);
    }
  }

  return { passed, excluded, missing, fundamentals: fundMap };
}
