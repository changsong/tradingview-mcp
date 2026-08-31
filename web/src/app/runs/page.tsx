import Link from "next/link";
import { Header } from "@/components/Header";
import { MarketTabs } from "@/components/MarketTabs";
import { requireSession } from "@/lib/auth";
import { fmtDate, fmtDateTime, marketLabel } from "@/lib/format";
import { prisma } from "@/lib/prisma";

type Props = {
  searchParams: Promise<{ market?: string }>;
};

export default async function RunsPage({ searchParams }: Props) {
  await requireSession();
  const { market = "cn" } = await searchParams;
  const runs = await prisma.reportRun.findMany({
    where: { market },
    orderBy: { date: "desc" },
    include: { artifacts: true },
    take: 120
  });

  return (
    <>
      <Header />
      <main className="page">
        <div className="page-title">
          <div>
            <h1>Runs</h1>
            <p className="subtle">Imported pipeline execution snapshots</p>
          </div>
          <MarketTabs market={market} basePath="/runs" />
        </div>

        <section className="card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Market</th>
                  <th>Status</th>
                  <th>Stages</th>
                  <th>Generated</th>
                  <th>Artifacts</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {runs.map(run => (
                  <tr key={run.id}>
                    <td><Link href={`/reports/${fmtDate(run.date)}?market=${market}`}>{fmtDate(run.date)}</Link></td>
                    <td>{marketLabel(run.market)}</td>
                    <td>{run.status}</td>
                    <td>
                      {Object.entries((run.stages as Record<string, unknown>) ?? {}).map(([key, value]) => (
                        <span key={key} className="pill">{key}: {String(value)}</span>
                      ))}
                    </td>
                    <td>{fmtDateTime(run.generatedAt)}</td>
                    <td>{run.artifacts.length}</td>
                    <td className="subtle">{run.sourceDir}</td>
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
