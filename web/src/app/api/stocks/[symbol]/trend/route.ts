import { prisma } from "@/lib/prisma";
import { requireApiSession } from "@/lib/auth";
import { fmtDate } from "@/lib/format";

export async function GET(request: Request, context: { params: Promise<{ symbol: string }> }) {
  const denied = await requireApiSession();
  if (denied) return denied;

  const { symbol } = await context.params;
  const { searchParams } = new URL(request.url);
  const market = searchParams.get("market") || "cn";
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const rows = await prisma.dailySignal.findMany({
    where: {
      market,
      symbol: decodeURIComponent(symbol),
      date: {
        gte: from ? new Date(`${from}T00:00:00.000Z`) : undefined,
        lte: to ? new Date(`${to}T00:00:00.000Z`) : undefined
      }
    },
    orderBy: { date: "asc" },
    include: { newsItems: { take: 10 } }
  });
  return Response.json(rows.map(row => ({ ...row, date: fmtDate(row.date) })));
}
