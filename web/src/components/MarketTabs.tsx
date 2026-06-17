import Link from "next/link";

export function MarketTabs({ market, basePath, extra = "" }: { market: string; basePath: string; extra?: string }) {
  return (
    <div className="segmented">
      {["cn", "us", "hk"].map(item => (
        <Link key={item} className={item === market ? "active" : ""} href={`${basePath}?market=${item}${extra}`}>
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
