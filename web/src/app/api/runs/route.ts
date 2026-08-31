import { prisma } from "@/lib/prisma";
import { requireApiSession } from "@/lib/auth";
import { fmtDate } from "@/lib/format";

export async function GET(request: Request) {
  const denied = await requireApiSession();
  if (denied) return denied;

  const { searchParams } = new URL(request.url);
  const market = searchParams.get("market") || undefined;
  const runs = await prisma.reportRun.findMany({
    where: market ? { market } : undefined,
    orderBy: [{ date: "desc" }, { market: "asc" }],
    include: { artifacts: true, _count: { select: { reviews: true } } },
    take: 120
  });
  return Response.json(
    runs.map(run => ({
      ...run,
      date: fmtDate(run.date),
      generatedAt: run.generatedAt?.toISOString() ?? null
    }))
  );
}
