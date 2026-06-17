import { Header } from "@/components/Header";
import { MarketTabs } from "@/components/MarketTabs";
import { ScoreTrend } from "@/components/ScoreTrend";
import { requireSession } from "@/lib/auth";
import { fmtDate, fmtScore, scoreClass } from "@/lib/format";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{ symbol: string }>;
  searchParams: Promise<{ market?: string }>;
};

export default async function StockPage({ params, searchParams }: Props) {
  await requireSession();
  const { symbol: encodedSymbol } = await params;
  const { market = "cn" } = await searchParams;
  const symbol = decodeURIComponent(encodedSymbol);
  const [stock, rows] = await Promise.all([
    prisma.stock.findUnique({ where: { market_symbol: { market, symbol } } }),
    prisma.dailySignal.findMany({
      where: { market, symbol },
      orderBy: { date: "asc" },
      include: { newsItems: { take: 5 } }
    })
  ]);

  const latest = rows.at(-1);
  const points = rows.map(row => ({
    date: fmtDate(row.date),
    newsScore: row.newsScore,
    techScore: row.techScore,
    combinedScore: row.combinedScore
  }));

  return (
    <>
      <Header />
      <main className="page">
        <div className="page-title">
          <div>
            <h1>{stock?.name || symbol}</h1>
            <p className="subtle">{symbol}</p>
          </div>
          <MarketTabs market={market} basePath={`/stocks/${encodeURIComponent(symbol)}`} />
        </div>

        <section className="grid cards">
          <div className="card metric">Latest combined<strong>{fmtScore(latest?.combinedScore)}</strong></div>
          <div className="card metric">Latest news<strong>{fmtScore(latest?.newsScore)}</strong></div>
          <div className="card metric">Latest technical<strong>{fmtScore(latest?.techScore)}</strong></div>
          <div className="card metric">History days<strong>{rows.length}</strong></div>
        </section>

        <section className="card" style={{ marginTop: 16 }}>
          <h2>Score Trend</h2>
          <ScoreTrend points={points} />
        </section>

        <section className="card" style={{ marginTop: 16 }}>
          <h2>Daily Detail</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Combined</th>
                  <th>News</th>
                  <th>Technical</th>
                  <th>Grade</th>
                  <th>Price</th>
                  <th>Signal</th>
                  <th>News</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.id}>
                    <td>{fmtDate(row.date)}</td>
                    <td className={`score ${scoreClass(row.combinedScore)}`}>{fmtScore(row.combinedScore)}</td>
                    <td>{fmtScore(row.newsScore)}</td>
                    <td>{fmtScore(row.techScore)}</td>
                    <td>{row.grade || "-"}</td>
                    <td>{fmtScore(row.price)}</td>
                    <td>{row.newsSignal || row.techVerdict || "-"}</td>
                    <td>
                      {row.newsItems.length
                        ? row.newsItems.map(item => <div key={item.id} className="subtle">{item.title}</div>)
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
