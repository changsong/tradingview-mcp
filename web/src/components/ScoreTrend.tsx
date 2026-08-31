type Point = {
  date: string;
  newsScore: number | null;
  techScore: number | null;
  combinedScore: number | null;
  price: number | null;
};

const WIDTH = 900;
const HEIGHT = 360;
const PAD = { left: 42, right: 54, top: 18, bottom: 34 };

function path(points: Point[], key: "newsScore" | "techScore" | "combinedScore") {
  const values = points
    .map((point, index) => ({ index, value: point[key] }))
    .filter((point): point is { index: number; value: number } => typeof point.value === "number");
  if (!values.length) return "";
  const innerW = WIDTH - PAD.left - PAD.right;
  const innerH = HEIGHT - PAD.top - PAD.bottom;
  return values
    .map(point => {
      const x = PAD.left + (points.length <= 1 ? 0 : (point.index / (points.length - 1)) * innerW);
      const y = PAD.top + innerH - (Math.max(0, Math.min(100, point.value)) / 100) * innerH;
      return `${point.index === values[0].index ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function priceScale(points: Point[]) {
  const prices = points.map(p => p.price).filter((p): p is number => p != null);
  if (prices.length < 2) return null;
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;
  const pad = range * 0.15;
  return { min: min - pad, max: max + pad };
}

function pricePath(points: Point[], scale: { min: number; max: number }) {
  const valid = points
    .map((point, index) => ({ index, value: point.price }))
    .filter((p): p is { index: number; value: number } => p.value != null);
  if (valid.length < 2) return "";
  const innerW = WIDTH - PAD.left - PAD.right;
  const innerH = HEIGHT - PAD.top - PAD.bottom;
  const range = scale.max - scale.min;
  return valid
    .map(point => {
      const x = PAD.left + (points.length <= 1 ? 0 : (point.index / (points.length - 1)) * innerW);
      const y = PAD.top + innerH - ((point.value - scale.min) / range) * innerH;
      return `${point.index === valid[0].index ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function fmtPrice(v: number) {
  if (v >= 1000) return String(Math.round(v));
  if (v >= 1) return v.toFixed(1);
  return v.toFixed(3);
}

export function ScoreTrend({ points }: { points: Point[] }) {
  const ticks = [0, 25, 50, 75, 100];
  const labelStep = Math.max(1, Math.ceil(points.length / 15));
  const labels = points.filter((_, index) => index === 0 || index === points.length - 1 || index % labelStep === 0);

  const pScale = priceScale(points);
  const priceTicks = pScale ? (() => {
    const range = pScale.max - pScale.min;
    const step = range / 4;
    return [pScale.min + step, pScale.min + step * 2, pScale.min + step * 3];
  })() : [];

  return (
    <div className="chart">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label="Score trend">
        {/* Score Y-axis gridlines and ticks */}
        {ticks.map(tick => {
          const innerH = HEIGHT - PAD.top - PAD.bottom;
          const y = PAD.top + innerH - (tick / 100) * innerH;
          return (
            <g key={tick}>
              <line x1={PAD.left} x2={WIDTH - PAD.right} y1={y} y2={y} stroke="#e5e7eb" />
              <text x={10} y={y + 4} fontSize="12" fill="#687385">{tick}</text>
            </g>
          );
        })}

        {/* Price Y-axis ticks (right side) */}
        {pScale && priceTicks.map(tick => {
          const innerH = HEIGHT - PAD.top - PAD.bottom;
          const range = pScale.max - pScale.min;
          const y = PAD.top + innerH - ((tick - pScale.min) / range) * innerH;
          return (
            <g key={`p${tick}`}>
              <line x1={PAD.left} x2={WIDTH - PAD.right} y1={y} y2={y} stroke="#f0f0f0" strokeDasharray="3 3" />
              <text x={WIDTH - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#b7791f">{fmtPrice(tick)}</text>
            </g>
          );
        })}

        {/* Score lines */}
        <path d={path(points, "newsScore")} fill="none" stroke="#1f6feb" strokeWidth="2.5" />
        <path d={path(points, "techScore")} fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
        <path d={path(points, "combinedScore")} fill="none" stroke="#16794c" strokeWidth="3" />

        {/* Price line */}
        {pScale && (
          <path d={pricePath(points, pScale)} fill="none" stroke="#b7791f" strokeWidth="2" strokeDasharray="6 3" />
        )}

        {/* X-axis date labels */}
        {labels.map(point => {
          const index = points.indexOf(point);
          const innerW = WIDTH - PAD.left - PAD.right;
          const x = PAD.left + (points.length <= 1 ? 0 : (index / (points.length - 1)) * innerW);
          return <text key={`${point.date}-${index}`} x={x} y={HEIGHT - 10} textAnchor="middle" fontSize="11" fill="#687385">{point.date.slice(5)}</text>;
        })}

        {/* Legend */}
        <g transform="translate(54 16)">
          <circle cx="0" cy="0" r="4" fill="#1f6feb" /><text x="8" y="4" fontSize="12">News</text>
          <circle cx="68" cy="0" r="4" fill="#8b5cf6" /><text x="76" y="4" fontSize="12">Tech</text>
          <circle cx="130" cy="0" r="4" fill="#16794c" /><text x="138" y="4" fontSize="12">Combined</text>
          <line x1="208" x2="236" y1="0" y2="0" stroke="#b7791f" strokeWidth="2" strokeDasharray="6 3" />
          <text x="242" y="4" fontSize="12">Price</text>
        </g>
      </svg>
    </div>
  );
}
