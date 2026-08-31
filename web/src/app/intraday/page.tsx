"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { MarketTabs } from "@/components/MarketTabs";

interface Prediction {
  symbol: string;
  current_price: number;
  prev_day: {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
  };
  pdh_pdl: { pdh: number; pdl: number };
  floor_pivots: Record<string, number>;
  camarilla_pivots: Record<string, number>;
  woodie_pivots: Record<string, number>;
  bollinger_bands: { upper: number; mid: number; lower: number; bw: number };
  atr_range: {
    atr_14: number;
    atr_pct: number;
    projected_high_1x: number;
    projected_low_1x: number;
    projected_high_1p5x: number;
    projected_low_1p5x: number;
  };
  consensus: {
    predicted_high_zone: [number, number];
    predicted_low_zone: [number, number];
    central_pivot: number;
    bias: string;
  };
  touch_status: string;
  error?: string;
}

const STATUS_COLORS: Record<string, string> = {
  safe: "#10b981",
  watch: "#f59e0b",
  near: "#f97316",
  touched: "#ef4444",
};
const STATUS_LABELS: Record<string, string> = {
  safe: "Safe",
  watch: "Watch",
  near: "Near zone",
  touched: "In zone",
};
const BIAS_LABELS: Record<string, string> = {
  bullish: "Bullish",
  bearish: "Bearish",
  neutral: "Neutral",
};
const BIAS_COLORS: Record<string, string> = {
  bullish: "#10b981",
  bearish: "#ef4444",
  neutral: "#6b7280",
};

function formatPrice(v: number | undefined | null): string {
  if (v == null) return "-";
  return v.toFixed(2);
}

function formatPct(v: number | undefined | null): string {
  if (v == null) return "-";
  return v.toFixed(2) + "%";
}

function PredictionCard({ p }: { p: Prediction }) {
  if (p.error) {
    return (
      <div className="card" style={{ borderLeft: "3px solid #ef4444" }}>
        <h3>{p.symbol}</h3>
        <p className="subtle" style={{ color: "#ef4444" }}>
          {p.error}
        </p>
      </div>
    );
  }

  const statusColor = STATUS_COLORS[p.touch_status] || "#6b7280";
  const statusLabel = STATUS_LABELS[p.touch_status] || p.touch_status;
  const biasColor = BIAS_COLORS[p.consensus.bias] || "#6b7280";
  const biasLabel = BIAS_LABELS[p.consensus.bias] || p.consensus.bias;

  return (
    <div className="card" style={{ borderLeft: `3px solid ${statusColor}` }}>
      {/* header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h3 style={{ margin: 0 }}>{p.symbol}</h3>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span
            style={{
              padding: "2px 8px",
              borderRadius: 4,
              fontSize: 12,
              fontWeight: 600,
              background: biasColor,
              color: "#fff",
            }}
          >
            {biasLabel}
          </span>
          <span
            style={{
              padding: "2px 8px",
              borderRadius: 4,
              fontSize: 12,
              fontWeight: 600,
              background: statusColor,
              color: "#fff",
            }}
          >
            {statusLabel}
          </span>
        </div>
      </div>

      {/* price row */}
      <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
        {formatPrice(p.current_price)}
      </div>

      {/* zones visualization */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>
          Predicted High Zone: {formatPrice(p.consensus.predicted_high_zone[0])}{" "}
          – {formatPrice(p.consensus.predicted_high_zone[1])}
        </div>
        <div
          style={{
            height: 24,
            borderRadius: 4,
            background: "#1f2937",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* full range: low_zone[0] to high_zone[1] */}
          {(() => {
            const fullLow = p.consensus.predicted_low_zone[0];
            const fullHigh = p.consensus.predicted_high_zone[1];
            const range = fullHigh - fullLow || 1;
            const pricePct =
              ((p.current_price - fullLow) / range) * 100;
            const clampedPct = Math.max(2, Math.min(98, pricePct));

            const lowStart =
              ((p.consensus.predicted_low_zone[1] - fullLow) / range) *
              100;
            const lowEnd =
              ((p.consensus.predicted_low_zone[0] - fullLow) / range) *
              100;
            const highStart =
              ((p.consensus.predicted_high_zone[0] - fullLow) / range) *
              100;
            const highEnd =
              ((p.consensus.predicted_high_zone[1] - fullLow) / range) *
              100;

            return (
              <>
                <div
                  style={{
                    position: "absolute",
                    left: `${lowStart}%`,
                    width: `${lowEnd - lowStart}%`,
                    top: 0,
                    bottom: 0,
                    background: "rgba(239,68,68,0.3)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: `${highStart}%`,
                    width: `${highEnd - highStart}%`,
                    top: 0,
                    bottom: 0,
                    background: "rgba(239,68,68,0.3)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: `${clampedPct}%`,
                    top: 0,
                    bottom: 0,
                    width: 2,
                    background: "#fff",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: `${((p.consensus.central_pivot - fullLow) / range) * 100}%`,
                    top: 0,
                    bottom: 0,
                    width: 1,
                    background: "#6b7280",
                    borderLeft: "1px dashed #6b7280",
                  }}
                />
              </>
            );
          })()}
        </div>
        <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
          Predicted Low Zone: {formatPrice(p.consensus.predicted_low_zone[0])}{" "}
          – {formatPrice(p.consensus.predicted_low_zone[1])}
        </div>
      </div>

      {/* key levels grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8,
          fontSize: 13,
        }}
      >
        <LevelBox
          label="Floor PP"
          value={p.floor_pivots.pp}
        />
        <LevelBox
          label="Woodie PP"
          value={p.woodie_pivots.pp}
        />
        <LevelBox
          label="Central Pivot"
          value={p.consensus.central_pivot}
        />
        <LevelBox
          label="R1 (Floor)"
          value={p.floor_pivots.r1}
        />
        <LevelBox
          label="R1 (Camarilla)"
          value={p.camarilla_pivots.r1}
        />
        <LevelBox label="ATR High 1x" value={p.atr_range.projected_high_1x} />
        <LevelBox
          label="S1 (Floor)"
          value={p.floor_pivots.s1}
        />
        <LevelBox
          label="S1 (Camarilla)"
          value={p.camarilla_pivots.s1}
        />
        <LevelBox label="ATR Low 1x" value={p.atr_range.projected_low_1x} />
        <LevelBox label="BB Upper" value={p.bollinger_bands.upper} />
        <LevelBox label="BB Mid" value={p.bollinger_bands.mid} />
        <LevelBox label="BB Lower" value={p.bollinger_bands.lower} />
        <LevelBox label="PDH" value={p.pdh_pdl.pdh} />
        <LevelBox label="ATR(14)" value={p.atr_range.atr_14} />
        <LevelBox label="PDL" value={p.pdh_pdl.pdl} />
      </div>

      <div style={{ fontSize: 11, color: "#4b5563", marginTop: 12 }}>
        ATR: {formatPct(p.atr_range.atr_pct)} | BB BW:{" "}
        {formatPct(p.bollinger_bands.bw * 100)}
      </div>
    </div>
  );
}

function LevelBox({
  label,
  value,
}: {
  label: string;
  value: number | undefined;
}) {
  return (
    <div
      style={{
        background: "#111827",
        padding: "4px 8px",
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span style={{ color: "#9ca3af" }}>{label}</span>
      <span style={{ fontWeight: 600 }}>{formatPrice(value)}</span>
    </div>
  );
}

export default function IntradayPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialMarket = searchParams.get("market") || "cn";
  const initialSymbols = searchParams.get("symbols") || "";

  const [market, setMarket] = useState(initialMarket);
  const [input, setInput] = useState(initialSymbols);
  const [predictions, setPredictions] = useState<Prediction[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchPredictions = useCallback(
    async (mkt: string, syms: string) => {
      if (!syms.trim()) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/intraday?market=${mkt}&symbols=${encodeURIComponent(syms)}`
        );
        const data = await res.json();
        if (data.success) {
          setPredictions(data.predictions);
        } else {
          setError(data.error || "Fetch failed");
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const startAutoRefresh = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCountdown(60);
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // refresh
          const syms = input.trim();
          if (syms) {
            fetch(`/api/intraday?market=${market}&symbols=${encodeURIComponent(syms)}`)
              .then((r) => r.json())
              .then((data) => {
                if (data.success) setPredictions(data.predictions);
              })
              .catch(() => {});
          }
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
  }, [input, market]);

  const stopAutoRefresh = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCountdown(0);
  }, []);

  const handlePredict = () => {
    const syms = input
      .split(/[, ]+/)
      .map((s) => s.trim().toUpperCase())
      .filter(Boolean)
      .slice(0, 5)
      .join(",");
    if (!syms) return;
    setInput(syms);
    router.push(`/intraday?market=${market}&symbols=${syms}`);
    fetchPredictions(market, syms);
    startAutoRefresh();
  };

  // Initial load from URL
  useEffect(() => {
    if (initialSymbols) {
      fetchPredictions(initialMarket, initialSymbols);
      startAutoRefresh();
    }
    return () => stopAutoRefresh();
  }, []);

  return (
    <>
      <Header />
      <main className="page">
        <div className="page-title">
          <div>
            <h1>Intraday Prediction</h1>
            <p className="subtle">
              Predict potential high/low zones using Floor, Camarilla, Woodie
              Pivots + ATR + Bollinger Bands
            </p>
          </div>
          <MarketTabs market={market} basePath="/intraday" />
        </div>

        {/* input area */}
        <section className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePredict()}
              placeholder="AAPL, MSFT, GOOGL (max 5)"
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: 6,
                border: "1px solid #374151",
                background: "#111827",
                color: "#f9fafb",
                fontSize: 14,
              }}
            />
            <button
              onClick={handlePredict}
              disabled={loading}
              style={{
                padding: "8px 16px",
                borderRadius: 6,
                border: "none",
                background: loading ? "#374151" : "#3b82f6",
                color: "#fff",
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Loading..." : "Predict"}
            </button>
            {countdown > 0 && (
              <span style={{ fontSize: 12, color: "#6b7280", minWidth: 60 }}>
                Refresh in {countdown}s
              </span>
            )}
            {countdown > 0 && (
              <button
                onClick={stopAutoRefresh}
                style={{
                  padding: "4px 8px",
                  borderRadius: 4,
                  border: "1px solid #374151",
                  background: "transparent",
                  color: "#9ca3af",
                  fontSize: 11,
                  cursor: "pointer",
                }}
              >
                Stop
              </button>
            )}
          </div>
        </section>

        {/* error */}
        {error && (
          <section className="card" style={{ marginBottom: 16, borderLeft: "3px solid #ef4444" }}>
            <p style={{ color: "#ef4444", margin: 0 }}>{error}</p>
          </section>
        )}

        {/* results */}
        {predictions && predictions.length > 0 && (
          <section
            className="grid cards"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))" }}
          >
            {predictions.map((p) => (
              <PredictionCard key={p.symbol} p={p} />
            ))}
          </section>
        )}

        {/* empty state */}
        {!predictions && !loading && !error && (
          <section className="card" style={{ textAlign: "center", padding: 48 }}>
            <p className="subtle">
              Enter symbols above and click Predict to see intraday
              high/low projection zones.
            </p>
          </section>
        )}
      </main>
    </>
  );
}
