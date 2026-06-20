import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const TENCENT_API = "https://web.ifzq.gtimg.cn/appstock/app/fqkline/get";
const SINA_US_API = "https://stock.finance.sina.com.cn/usstock/api/json_v2.php/US_MinKService.getDailyK";

async function fetchClosingPrices(market: string, symbol: string, count = 120): Promise<Map<string, number>> {
  try {
    if (market === "cn") return await fetchTencentCN(symbol, count);
    if (market === "hk") return await fetchTencentHK(symbol, count);
    if (market === "us") return await fetchSinaUS(symbol, count);
    console.warn(`Unknown market: ${market}`);
    return new Map();
  } catch (err) {
    console.warn(`Price fetch failed for ${market}:${symbol}:`, (err as Error).message);
    return new Map();
  }
}

async function fetchTencentCN(symbol: string, count: number): Promise<Map<string, number>> {
  const pure = symbol.replace(/^(SSE|SZSE):/i, "").trim();
  const isShanghai = pure.startsWith("60") || pure.startsWith("68");
  const prefix = isShanghai ? `sh${pure}` : `sz${pure}`;
  const url = `${TENCENT_API}?param=${prefix},day,,,${count},qfq`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json() as any;
  const days = json?.data?.[prefix]?.qfqday as Array<[string, string, string, string, string, string]> | undefined;
  if (!days) return new Map();
  const map = new Map<string, number>();
  for (const bar of days) {
    const close = parseFloat(bar[2]);
    if (!isNaN(close) && bar[0]) map.set(bar[0], close);
  }
  return map;
}

async function fetchTencentHK(symbol: string, count: number): Promise<Map<string, number>> {
  const pure = symbol.replace(/^HKEX:/i, "").trim();
  const key = `hk${pure.padStart(5, "0")}`;
  const url = `${TENCENT_API}?param=${key},day,,,${count},qfq`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json() as any;
  const days = json?.data?.[key]?.day as Array<[string, string, string, string, string, string]> | undefined;
  if (!days) return new Map();
  const map = new Map<string, number>();
  for (const bar of days) {
    const close = parseFloat(bar[2]);
    if (!isNaN(close) && bar[0]) map.set(bar[0], close);
  }
  return map;
}

async function fetchSinaUS(symbol: string, count: number): Promise<Map<string, number>> {
  const pure = symbol.replace(/^(NASDAQ|NYSE|AMEX|OTC):/i, "").trim();
  const url = `${SINA_US_API}?symbol=${encodeURIComponent(pure)}&type=daily&num=${count}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json() as Array<{ d: string; c: string }>;
  if (!Array.isArray(json)) return new Map();
  const map = new Map<string, number>();
  for (const bar of json) {
    const close = parseFloat(bar.c);
    if (!isNaN(close) && bar.d) map.set(bar.d, close);
  }
  return map;
}

function fmtDate(d: Date): string {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

async function main() {
  const symbols = await prisma.dailySignal.findMany({
    where: { price: null },
    select: { market: true, symbol: true },
    distinct: ["market", "symbol"],
  });

  console.log(`${symbols.length} symbols with missing prices\n`);

  let totalUpdated = 0;
  let totalFailed = 0;

  for (let i = 0; i < symbols.length; i++) {
    const { market, symbol } = symbols[i];
    process.stdout.write(`[${i + 1}/${symbols.length}] ${market}:${symbol} ... `);

    const priceMap = await fetchClosingPrices(market, symbol, 120);
    if (priceMap.size === 0) {
      console.log("no prices fetched");
      totalFailed++;
      continue;
    }

    const rows = await prisma.dailySignal.findMany({
      where: { market, symbol, price: null },
      select: { id: true, date: true },
    });

    if (rows.length === 0) {
      console.log("no null rows");
      continue;
    }

    let updated = 0;
    for (const row of rows) {
      const dateStr = fmtDate(new Date(row.date));
      const price = priceMap.get(dateStr);
      if (price != null) {
        await prisma.dailySignal.update({ where: { id: row.id }, data: { price } });
        updated++;
      }
    }

    console.log(`filled ${updated}/${rows.length}`);
    totalUpdated += updated;

    if (i < symbols.length - 1) {
      await new Promise(r => setTimeout(r, 300));
    }
  }

  console.log(`\nDone. Updated ${totalUpdated} rows. Failed: ${totalFailed}`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("Backfill failed:", err);
  prisma.$disconnect();
  process.exit(1);
});
