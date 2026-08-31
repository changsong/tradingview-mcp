import { prisma } from "@/lib/prisma";
import { requireApiSession } from "@/lib/auth";

export async function GET(request: Request) {
  const denied = await requireApiSession();
  if (denied) return denied;

  const { searchParams } = new URL(request.url);
  const market = searchParams.get("market") || "cn";
  const q = searchParams.get("q") || "";
  const stocks = await prisma.stock.findMany({
    where: q
      ? {
          market,
          OR: [
            { symbol: { contains: q, mode: "insensitive" } },
            { name: { contains: q, mode: "insensitive" } }
          ]
        }
      : { market },
    orderBy: { symbol: "asc" },
    take: 50
  });
  return Response.json(stocks);
}
