import { prisma } from "@/lib/prisma";
import { requireApiSession } from "@/lib/auth";
import { fmtDate } from "@/lib/format";

export async function GET(request: Request) {
  const denied = await requireApiSession();
  if (denied) return denied;

  const { searchParams } = new URL(request.url);
  const market = searchParams.get("market") || "cn";
  const runs = await prisma.reportRun.findMany({
    where: { market },
    orderBy: { date: "desc" },
    select: { date: true, status: true, stages: true }
  });
  return Response.json(runs.map(run => ({ ...run, date: fmtDate(run.date) })));
}
