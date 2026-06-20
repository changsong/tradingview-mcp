import Link from "next/link";

export function Header() {
  return (
    <header className="app-header">
      <Link href="/dashboard" className="brand">
        TradingView Signals
      </Link>
      <nav>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/runs">Runs</Link>
        <Link href="/intraday">Intraday</Link>
      </nav>
    </header>
  );
}
