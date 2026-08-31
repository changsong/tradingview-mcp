import Link from "next/link";
import { Header } from "@/components/Header";
import { MarketTabs } from "@/components/MarketTabs";
import { requireSession } from "@/lib/auth";
import { fmtDateTime, fmtScore, scoreClass } from "@/lib/format";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{ date: string }>;
  searchParams: Promise<{ market?: string }>;
};

export default async function ReportPage({ params, searchParams }: Props) {
  await requireSession();
  const { date: dateText } = await params;
  const { market = "cn" } = await searchParams;
  const date = new Date(`${dateText}T00:00:00.000Z`);
  const [run, signals, review] = await Promise.all([
    prisma.reportRun.findUnique({ where: { market_date: { market, date } }, include: { artifacts: true } }),
    prisma.dailySignal.findMany({
      where: { market, date },
      orderBy: [{ combinedScore: "desc" }, { symbol: "asc" }],
      include: { newsItems: { take: 3 } }
    }),
    prisma.reviewResult.findUnique({ where: { market_date: { market, date } } })
  ]);

  const gainers = Array.isArray((review?.raw as Record<string, unknown> | undefined)?.gainers)
    ? ((review?.raw as Record<string, unknown>).gainers as Record<string, unknown>[])
    : [];
  const losers = Array.isArray((review?.raw as Record<string, unknown> | undefined)?.losers)
    ? ((review?.raw as Record<string, unknown>).losers as Record<string, unknown>[])
    : [];

  return (
    <>
      <Header />
      <main className="page">
        <div className="page-title">
          <div>
            <h1>Report {dateText}</h1>
            <p className="subtle">Daily stock pool, news, technical, combined and review outputs</p>
          </div>
          <MarketTabs market={market} basePath={`/reports/${dateText}`} />
        </div>

        <section className="grid cards">
          <div className="card metric">Status<strong>{run?.status ?? "missing"}</strong></div>
          <div className="card metric">Signals<strong>{signals.length}</strong></div>
          <div className="card metric">Artifacts<strong>{run?.artifacts.length ?? 0}</strong></div>
          <div className="card metric">Generated<strong>{fmtDateTime(run?.generatedAt)}</strong></div>
        </section>

        <section className="card" style={{ marginTop: 16 }}>
          <h2>Pipeline Stages</h2>
          <div>
            {Object.entries((run?.stages as Record<string, unknown> | undefined) ?? {}).map(([key, value]) => (
              <span key={key} className="pill">{key}: {String(value)}</span>
            ))}
          </div>
        </section>

        <section className="card" style={{ marginTop: 16 }}>
          <h2>Signals</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Combined</th>
                  <th>News</th>
                  <th>Technical</th>
                  <th>Grade</th>
                  <th>News Signal</th>
                  <th>Technical Type</th>
                  <th>Top News</th>
                </tr>
              </thead>
              <tbody>
                {signals.map(signal => (
                  <tr key={signal.id}>
                    <td><Link href={`/stocks/${encodeURIComponent(signal.symbol)}?market=${market}`}>{signal.symbol}</Link></td>
                    <td>{signal.name}</td>
                    <td className={`score ${scoreClass(signal.combinedScore)}`}>{fmtScore(signal.combinedScore)}</td>
                    <td>{fmtScore(signal.newsScore)}</td>
                    <td>{fmtScore(signal.techScore)}</td>
                    <td>{signal.grade}</td>
                    <td>{signal.newsSignal || "-"}</td>
                    <td>{signal.techType || signal.techVerdict || "-"}</td>
                    <td>
                      {signal.newsItems.length
                        ? signal.newsItems.map(item => <div key={item.id} className="subtle">{item.title}</div>)
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid two-col" style={{ marginTop: 16 }}>
          <div className="card">
            <h2>Review Gainers</h2>
            <table>
              <tbody>
                {gainers.slice(0, 10).map((row, index) => (
                  <tr key={index}>
                    <td>{String(row.sym ?? "-")}</td>
                    <td>{String(row.name ?? "-")}</td>
                    <td>{String(row.change_pct ?? "-")}%</td>
                    <td>tech {String(row.tech_score ?? "-")} / news {String(row.news_score ?? "-")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card">
            <h2>Review Losers</h2>
            <table>
              <tbody>
                {losers.slice(0, 10).map((row, index) => (
                  <tr key={index}>
                    <td>{String(row.sym ?? "-")}</td>
                    <td>{String(row.name ?? "-")}</td>
                    <td>{String(row.change_pct ?? "-")}%</td>
                    <td>tech {String(row.tech_score ?? "-")} / news {String(row.news_score ?? "-")}</td>
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
