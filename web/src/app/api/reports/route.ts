import { prisma } from "@/lib/prisma";
import { requireApiSession } from "@/lib/auth";
import { fmtDate } from "@/lib/format";

export async function GET(request: Request) {
  const denied = await requireApiSession();
  if (denied) return denied;

  const { searchParams } = new URL(request.url);
  const market = searchParams.get("market") || "cn";
  const dateText = searchParams.get("date");
  if (!dateText) return Response.json({ error: "date is required" }, { status: 400 });

  const date = new Date(`${dateText}T00:00:00.000Z`);
  const [run, signals, review] = await Promise.all([
    prisma.reportRun.findUnique({ where: { market_date: { market, date } }, include: { artifacts: true } }),
    prisma.dailySignal.findMany({
      where: { market, date },
      orderBy: [{ combinedScore: "desc" }, { symbol: "asc" }],
      include: { newsItems: { take: 5 } }
    }),
    prisma.reviewResult.findUnique({ where: { market_date: { market, date } } })
  ]);

  return Response.json({
    run: run ? { ...run, date: fmtDate(run.date), generatedAt: run.generatedAt?.toISOString() ?? null } : null,
    signals: signals.map(signal => ({ ...signal, date: fmtDate(signal.date) })),
    review
  });
}
