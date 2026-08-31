export function fmtScore(value: number | null | undefined) {
  return value == null ? "-" : value.toFixed(1).replace(/\.0$/, "");
}

export function fmtDate(value: Date | string | null | undefined) {
  if (!value) return "-";
  const d = typeof value === "string" ? new Date(value) : value;
  return d.toISOString().slice(0, 10);
}

export function fmtDateTime(value: Date | string | null | undefined) {
  if (!value) return "-";
  const d = typeof value === "string" ? new Date(value) : value;
  return d.toISOString().replace("T", " ").slice(0, 19);
}

export function scoreClass(value: number | null | undefined) {
  if (value == null) return "muted";
  if (value >= 70) return "good";
  if (value >= 50) return "watch";
  return "risk";
}

export function marketLabel(value: string) {
  return value.toUpperCase();
}
