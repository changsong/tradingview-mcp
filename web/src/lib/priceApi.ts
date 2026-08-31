const TENCENT_API = "https://web.ifzq.gtimg.cn/appstock/app/fqkline/get";
const SINA_US_API = "https://stock.finance.sina.com.cn/usstock/api/json_v2.php/US_MinKService.getDailyK";

function tencentPrefix(market: string, code: string): string {
  if (market === "cn") return (code.startsWith("60") || code.startsWith("68")) ? `sh${code}` : `sz${code}`;
  if (market === "hk") return `hk${code.padStart(5, "0")}`;
  throw new Error(`Tencent API does not support market: ${market}`);
}

async function fetchTencentCN(symbol: string, count: number): Promise<Map<string, number>> {
  const pureSymbol = symbol.replace(/^(SSE|SZSE):/i, "").trim();
  const prefix = tencentPrefix("cn", pureSymbol);
  const url = `${TENCENT_API}?param=${prefix},day,,,${count},qfq`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Tencent CN fetch failed: ${res.status}`);
  const json = await res.json() as any;
  const days = json?.data?.[prefix]?.qfqday as Array<[string, string, string, string, string, string]> | undefined;
  if (!days || !Array.isArray(days)) return new Map();
  const map = new Map<string, number>();
  for (const bar of days) {
    const date = bar[0];
    const close = parseFloat(bar[2]);
    if (!isNaN(close) && date) map.set(date, close);
  }
  return map;
}

async function fetchTencentHK(symbol: string, count: number): Promise<Map<string, number>> {
  const pureSymbol = symbol.replace(/^HKEX:/i, "").trim();
  const key = tencentPrefix("hk", pureSymbol);
  const url = `${TENCENT_API}?param=${key},day,,,${count},qfq`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Tencent HK fetch failed: ${res.status}`);
  const json = await res.json() as any;
  const days = json?.data?.[key]?.day as Array<[string, string, string, string, string, string]> | undefined;
  if (!days || !Array.isArray(days)) return new Map();
  const map = new Map<string, number>();
  for (const bar of days) {
    const date = bar[0];
    const close = parseFloat(bar[2]);
    if (!isNaN(close) && date) map.set(date, close);
  }
  return map;
}

async function fetchSinaUS(symbol: string, count: number): Promise<Map<string, number>> {
  const pureSymbol = symbol.replace(/^(NASDAQ|NYSE|AMEX|OTC):/i, "").trim();
  const url = `${SINA_US_API}?symbol=${encodeURIComponent(pureSymbol)}&type=daily&num=${count}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sina US fetch failed: ${res.status}`);
  const json = await res.json() as Array<{ d: string; c: string }>;
  if (!Array.isArray(json)) return new Map();
  const map = new Map<string, number>();
  for (const bar of json) {
    if (!bar.d || !bar.c) continue;
    const close = parseFloat(bar.c);
    if (!isNaN(close)) map.set(bar.d, close);
  }
  return map;
}

export async function fetchClosingPrices(market: string, symbol: string, lookbackDays = 120): Promise<Map<string, number>> {
  try {
    if (market === "cn") return await fetchTencentCN(symbol, lookbackDays);
    if (market === "hk") return await fetchTencentHK(symbol, lookbackDays);
    if (market === "us") return await fetchSinaUS(symbol, lookbackDays);
    console.warn(`Unknown market: ${market}`);
    return new Map();
  } catch (err) {
    console.warn(`Price fetch failed for ${market}:${symbol}:`, (err as Error).message);
    return new Map();
  }
}
