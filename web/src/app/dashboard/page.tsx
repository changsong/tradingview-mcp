import Link from "next/link";
import { Header } from "@/components/Header";
import { MarketTabs } from "@/components/MarketTabs";
import { fmtDate, fmtDateTime, fmtScore, scoreClass } from "@/lib/format";
import { requireSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type Props = {
  searchParams: Promise<{ market?: string }>;
};

export default async function DashboardPage({ searchParams }: Props) {
  await requireSession();
  const params = await searchParams;
  const market = params.market || "cn";
  const latestRun = await prisma.reportRun.findFirst({
    where: { market },
    orderBy: { date: "desc" },
    include: { artifacts: true }
  });
  const date = latestRun?.date;
  const [signalsCount, topSignals, recentRuns] = await Promise.all([
    date ? prisma.dailySignal.count({ where: { market, date } }) : 0,
    date
      ? prisma.dailySignal.findMany({
          where: { market, date },
          orderBy: [{ combinedScore: "desc" }, { symbol: "asc" }],
          take: 12
        })
      : [],
    prisma.reportRun.findMany({ where: { market }, orderBy: { date: "desc" }, take: 8 })
  ]);

  const best = topSignals[0];

  return (
    <>
      <Header />
      <main className="page">
        <div className="page-title">
          <div>
            <h1>Dashboard</h1>
            <p className="subtle">Latest imported daily signal snapshot</p>
          </div>
          <MarketTabs market={market} basePath="/dashboard" />
        </div>

        <section className="grid cards">
          <div className="card metric">Latest date<strong>{latestRun ? fmtDate(latestRun.date) : "-"}</strong></div>
          <div className="card metric">Stock pool<strong>{signalsCount}</strong></div>
          <div className="card metric">Top combined<strong>{fmtScore(best?.combinedScore)}</strong></div>
          <div className="card metric">Artifacts<strong>{latestRun?.artifacts.length ?? 0}</strong></div>
        </section>

        <section className="grid two-col" style={{ marginTop: 16 }}>
          <div className="card">
            <h2>Top Signals</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Combined</th>
                    <th>News</th>
                    <th>Tech</th>
                    <th>Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {topSignals.map(signal => (
                    <tr key={signal.id}>
                      <td><Link href={`/stocks/${encodeURIComponent(signal.symbol)}?market=${market}`}>{signal.symbol}</Link></td>
                      <td>{signal.name}</td>
                      <td className={`score ${scoreClass(signal.combinedScore)}`}>{fmtScore(signal.combinedScore)}</td>
                      <td>{fmtScore(signal.newsScore)}</td>
                      <td>{fmtScore(signal.techScore)}</td>
                      <td>{signal.newsSignal || signal.techVerdict || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <h2>Recent Runs</h2>
            <table>
              <tbody>
                {recentRuns.map(run => (
                  <tr key={run.id}>
                    <td><Link href={`/reports/${fmtDate(run.date)}?market=${market}`}>{fmtDate(run.date)}</Link></td>
                    <td>{run.status}</td>
                    <td className="subtle">{fmtDateTime(run.generatedAt)}</td>
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
