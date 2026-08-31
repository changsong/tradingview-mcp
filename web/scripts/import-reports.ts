import { Prisma, PrismaClient } from "@prisma/client";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

type Market = "cn" | "us" | "hk";

type NewsStock = {
  name?: string;
  score?: number;
  score_raw?: number;
  signal?: string;
  strategy?: string;
  confidence?: string;
  patterns?: unknown[];
  positive_factors?: unknown[];
  negative_factors?: unknown[];
  top_news?: unknown[];
  news_count?: number;
  news_dropped?: number;
};

type TechStock = {
  name?: string;
  tech_score?: number;
  composite?: number;
  adj_score?: number;
  news_score?: number;
  news_signal?: string;
  verdict?: string;
  type?: string;
  price?: number;
  atr_pct?: number;
  target?: number;
  rr?: number;
  flags?: unknown[];
  risks?: unknown[];
  tf?: Record<string, unknown>;
};

const prisma = new PrismaClient();
const MARKETS: Market[] = ["cn", "us", "hk"];
const REPORTS_DIR = resolve(process.cwd(), process.env.REPORTS_DIR || "../reports");

function parseArgs() {
  const args = new Map<string, string | boolean>();
  for (const arg of process.argv.slice(2)) {
    if (arg === "--all") args.set("all", true);
    else if (arg.startsWith("--date=")) args.set("date", arg.slice("--date=".length));
    else if (arg.startsWith("--market=")) args.set("market", arg.slice("--market=".length));
  }
  return args;
}

function day(value: string) {
  return new Date(`${value}T00:00:00.000Z`);
}

function asJson(value: unknown): Prisma.InputJsonValue {
  if (value == null) return Prisma.JsonNull as unknown as Prisma.InputJsonValue;
  return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue;
}

function readJson<T>(path: string): T | null {
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

function readText(path: string) {
  return existsSync(path) ? readFileSync(path, "utf8") : null;
}

function toNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function classifyNews(signal: unknown) {
  const s = String(signal ?? "");
  const overheated = /overheat|过热|杩囩儹/i.test(s);
  const noTrade = /No Trade|No Data|无数据|鏃犳暟鎹?/i.test(s);
  const long = /Long|看多|鐪嬪/i.test(s) && !overheated && !noTrade;
  const short = (/Short|规避|閬块櫓|看空|鐪嬬┖/i.test(s) && !long) || false;
  return { overheated, long, short };
}

function allTfMetric(tech: TechStock, metric: "adx" | "rsi", predicate: (v: number) => boolean) {
  const tf = tech.tf;
  const keys = ["1W", "1D", "4H", "1H"];
  if (!tf) return false;
  return keys.every(key => {
    const frame = tf[key] as Record<string, unknown> | undefined;
    const value = frame?.[metric];
    return typeof value === "number" && predicate(value);
  });
}

function combinedScore(tech?: TechStock, news?: NewsStock) {
  const techScore = toNumber(tech?.tech_score) ?? 0;
  const newsScore = toNumber(news?.score) ?? toNumber(tech?.news_score) ?? 50;
  const type = String(tech?.type ?? "");
  const isTrendy = /trend|breakout|突破|趋势|绐佺牬|瓒嬪娍/i.test(type);
  const cls = classifyNews(news?.signal ?? tech?.news_signal);
  const overheatedPenalty = cls.overheated ? (isTrendy ? 0 : allTfMetric(tech ?? {}, "adx", v => v > 30) ? 2 : 5) : 0;
  const trendyBonus = isTrendy ? 5 : 0;
  const adxBonus = allTfMetric(tech ?? {}, "adx", v => v > 30) ? 8 : 0;
  const rsiBonus = allTfMetric(tech ?? {}, "rsi", v => v >= 60 && v <= 75) ? 5 : 0;
  return Number((techScore * 0.6 + newsScore * 0.4 + trendyBonus + adxBonus + rsiBonus - overheatedPenalty).toFixed(1));
}

function grade(tech?: TechStock, news?: NewsStock) {
  const techScore = toNumber(tech?.tech_score) ?? 0;
  const cls = classifyNews(news?.signal ?? tech?.news_signal);
  if (cls.overheated && techScore >= 38) return "C+";
  if (cls.long && techScore >= 30) return "A";
  if (cls.long && techScore >= 15) return "B";
  if (!cls.overheated && !cls.short && techScore >= 20) return "C";
  return "D";
}

function artifactType(file: string) {
  const match = file.match(/^[a-z]+_(.+?)\.(json|md)$/);
  return match ? match[1] : file;
}

function topNewsItems(items: unknown[]) {
  return items.slice(0, 20).map(item => {
    if (typeof item === "string") {
      return { title: item, raw: item };
    }
    const obj = (item ?? {}) as Record<string, unknown>;
    return {
      title: String(obj.title ?? obj.headline ?? obj.name ?? obj.url ?? "Untitled news"),
      url: typeof obj.url === "string" ? obj.url : null,
      source: typeof obj.source === "string" ? obj.source : null,
      category: typeof obj.category === "string" ? obj.category : null,
      score: toNumber(obj.score ?? obj.weight),
      sentiment: typeof obj.sentiment === "string" ? obj.sentiment : null,
      publishedAt: typeof obj.date === "string" ? new Date(obj.date) : null,
      raw: obj
    };
  });
}

async function upsertArtifact(reportRunId: string, market: Market, date: Date, filePath: string, file: string) {
  const raw = file.endsWith(".json") ? readJson(filePath) : null;
  const content = file.endsWith(".md") ? readText(filePath) : null;
  await prisma.artifact.upsert({
    where: { market_date_type: { market, date, type: artifactType(file) } },
    create: {
      reportRunId,
      market,
      date,
      type: artifactType(file),
      path: filePath,
      content,
      raw: raw == null ? undefined : asJson(raw)
    },
    update: {
      reportRunId,
      path: filePath,
      content,
      raw: raw == null ? undefined : asJson(raw)
    }
  });
}

async function importMarketDate(market: Market, dateText: string) {
  const dateDir = join(REPORTS_DIR, dateText);
  if (!existsSync(dateDir)) return;

  const date = day(dateText);
  const news = readJson<{ generated_at?: string; stocks?: Record<string, NewsStock> }>(join(dateDir, `${market}_news_signals.json`));
  const tech = readJson<{ generated_at?: string; stocks?: Record<string, TechStock> }>(join(dateDir, `${market}_tech_signals.json`));
  const review = readJson<Record<string, unknown>>(join(dateDir, `${market}_review.json`));
  const combinedMd = readText(join(dateDir, `${market}_combined_signals.md`));
  const files = readdirSync(dateDir).filter(file => file.startsWith(`${market}_`) && /\.(json|md)$/.test(file));

  if (!news && !tech && !review && !combinedMd) return;

  const stages = {
    news: news ? "ok" : "missing",
    technical: tech ? "ok" : "missing",
    combined: combinedMd ? "ok" : "missing",
    review: review ? "ok" : "missing"
  };

  const generatedAt = tech?.generated_at ?? news?.generated_at ?? (typeof review?.generated_at === "string" ? review.generated_at : null);
  const run = await prisma.reportRun.upsert({
    where: { market_date: { market, date } },
    create: {
      market,
      date,
      generatedAt: generatedAt ? new Date(generatedAt) : null,
      stages: asJson(stages),
      sourceDir: dateDir,
      status: Object.values(stages).includes("ok") ? "imported" : "missing"
    },
    update: {
      generatedAt: generatedAt ? new Date(generatedAt) : null,
      stages: asJson(stages),
      sourceDir: dateDir,
      status: Object.values(stages).includes("missing") ? "partial" : "imported"
    }
  });

  for (const file of files) {
    await upsertArtifact(run.id, market, date, join(dateDir, file), file);
  }

  if (review) {
    await prisma.reviewResult.upsert({
      where: { market_date: { market, date } },
      create: { reportRunId: run.id, market, date, raw: asJson(review) },
      update: { reportRunId: run.id, raw: asJson(review) }
    });
  }

  const symbols = new Set<string>([
    ...Object.keys(news?.stocks ?? {}),
    ...Object.keys(tech?.stocks ?? {})
  ]);

  for (const symbol of symbols) {
    const newsStock = news?.stocks?.[symbol];
    const techStock = tech?.stocks?.[symbol];
    const name = newsStock?.name ?? techStock?.name ?? symbol;
    const stock = await prisma.stock.upsert({
      where: { market_symbol: { market, symbol } },
      create: { market, symbol, name },
      update: { name }
    });

    const signal = await prisma.dailySignal.upsert({
      where: { market_date_symbol: { market, date, symbol } },
      create: {
        stockId: stock.id,
        market,
        date,
        symbol,
        name,
        newsScore: toNumber(newsStock?.score),
        techScore: toNumber(techStock?.tech_score),
        combinedScore: combinedScore(techStock, newsStock),
        grade: grade(techStock, newsStock),
        newsSignal: newsStock?.signal ?? techStock?.news_signal ?? null,
        techVerdict: techStock?.verdict ?? null,
        techType: techStock?.type ?? null,
        combinedSignal: combinedMd ? "available" : null,
        price: toNumber(techStock?.price),
        target: toNumber(techStock?.target),
        rr: toNumber(techStock?.rr),
        riskFlags: asJson([...(techStock?.flags ?? []), ...(techStock?.risks ?? [])]),
        newsRaw: newsStock ? asJson(newsStock) : Prisma.JsonNull,
        techRaw: techStock ? asJson(techStock) : Prisma.JsonNull,
        combinedRaw: Prisma.JsonNull
      },
      update: {
        stockId: stock.id,
        name,
        newsScore: toNumber(newsStock?.score),
        techScore: toNumber(techStock?.tech_score),
        combinedScore: combinedScore(techStock, newsStock),
        grade: grade(techStock, newsStock),
        newsSignal: newsStock?.signal ?? techStock?.news_signal ?? null,
        techVerdict: techStock?.verdict ?? null,
        techType: techStock?.type ?? null,
        combinedSignal: combinedMd ? "available" : null,
        price: toNumber(techStock?.price),
        target: toNumber(techStock?.target),
        rr: toNumber(techStock?.rr),
        riskFlags: asJson([...(techStock?.flags ?? []), ...(techStock?.risks ?? [])]),
        newsRaw: newsStock ? asJson(newsStock) : Prisma.JsonNull,
        techRaw: techStock ? asJson(techStock) : Prisma.JsonNull
      }
    });

    await prisma.newsItem.deleteMany({ where: { dailySignalId: signal.id } });
    const items = topNewsItems(newsStock?.top_news ?? []);
    if (items.length) {
      await prisma.newsItem.createMany({
        data: items.map(item => ({
          dailySignalId: signal.id,
          market,
          date,
          symbol,
          title: item.title,
          url: item.url,
          source: item.source,
          category: item.category,
          publishedAt: item.publishedAt,
          score: item.score,
          sentiment: item.sentiment,
          raw: asJson(item.raw)
        }))
      });
    }
  }

  console.log(`${market} ${dateText}: imported ${symbols.size} signals, ${files.length} artifacts`);
}

async function main() {
  const args = parseArgs();
  const requestedMarket = args.get("market");
  const markets = requestedMarket ? [requestedMarket as Market] : MARKETS;
  const dates = args.get("all")
    ? readdirSync(REPORTS_DIR, { withFileTypes: true })
        .filter(entry => entry.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(entry.name))
        .map(entry => entry.name)
        .sort()
    : [String(args.get("date") || new Date().toISOString().slice(0, 10))];

  for (const dateText of dates) {
    for (const market of markets) {
      if (!MARKETS.includes(market)) continue;
      await importMarketDate(market, dateText);
    }
  }
}

main()
  .catch(error => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
