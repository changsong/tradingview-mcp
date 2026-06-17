type Point = {
  date: string;
  newsScore: number | null;
  techScore: number | null;
  combinedScore: number | null;
};

const WIDTH = 900;
const HEIGHT = 320;
const PAD = { left: 42, right: 18, top: 18, bottom: 34 };

function path(points: Point[], key: keyof Omit<Point, "date">) {
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

export function ScoreTrend({ points }: { points: Point[] }) {
  const ticks = [0, 25, 50, 75, 100];
  const labels = points.filter((_, index) => index === 0 || index === points.length - 1 || index % Math.ceil(points.length / 6) === 0);

  return (
    <div className="chart">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label="Score trend">
        {ticks.map(tick => {
          const y = PAD.top + (HEIGHT - PAD.top - PAD.bottom) - (tick / 100) * (HEIGHT - PAD.top - PAD.bottom);
          return (
            <g key={tick}>
              <line x1={PAD.left} x2={WIDTH - PAD.right} y1={y} y2={y} stroke="#e5e7eb" />
              <text x={10} y={y + 4} fontSize="12" fill="#687385">{tick}</text>
            </g>
          );
        })}
        <path d={path(points, "newsScore")} fill="none" stroke="#1f6feb" strokeWidth="2.5" />
        <path d={path(points, "techScore")} fill="none" stroke="#b7791f" strokeWidth="2.5" />
        <path d={path(points, "combinedScore")} fill="none" stroke="#16794c" strokeWidth="3" />
        {labels.map(point => {
          const index = points.indexOf(point);
          const x = PAD.left + (points.length <= 1 ? 0 : (index / (points.length - 1)) * (WIDTH - PAD.left - PAD.right));
          return <text key={`${point.date}-${index}`} x={x} y={HEIGHT - 10} textAnchor="middle" fontSize="11" fill="#687385">{point.date.slice(5)}</text>;
        })}
        <g transform="translate(54 16)">
          <circle cx="0" cy="0" r="4" fill="#1f6feb" /><text x="8" y="4" fontSize="12">News</text>
          <circle cx="68" cy="0" r="4" fill="#b7791f" /><text x="76" y="4" fontSize="12">Technical</text>
          <circle cx="166" cy="0" r="4" fill="#16794c" /><text x="174" y="4" fontSize="12">Combined</text>
        </g>
      </svg>
    </div>
  );
}
