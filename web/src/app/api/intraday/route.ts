import { requireApiSession } from "@/lib/auth";
import { predictIntradayWeb } from "@/lib/intradayApi";

export async function GET(request: Request) {
  const denied = await requireApiSession();
  if (denied) return denied;

  const { searchParams } = new URL(request.url);
  const market = searchParams.get("market") || "cn";
  const symbolsStr = searchParams.get("symbols");

  if (!symbolsStr) {
    return Response.json(
      { success: false, error: "symbols query parameter required" },
      { status: 400 }
    );
  }

  const symbols = symbolsStr
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 5);

  if (symbols.length === 0) {
    return Response.json(
      { success: false, error: "No valid symbols provided" },
      { status: 400 }
    );
  }

  const result = await predictIntradayWeb(market, symbols);
  return Response.json(result);
}
