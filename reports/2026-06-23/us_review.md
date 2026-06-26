# 回归检核报告 · US — 2026-06-23

**对照快照:** `reports/2026-06-19` (2026-06-19)
**池子:** 111 只 (成功 111 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:VIAV** | NASDAQ:VIAV | **+12.23%** | - | - | - | - |
| 2 | **CRDO** | NASDAQ:CRDO | **+11.29%** | 45.1 | 52 | Overextended Chase (High Risk) | overheated/fake_break/near_resist |
| 3 | **VICR** | NASDAQ:VICR | **+10.31%** | 30.6 | 50 | Trend Follow (HH/HL Intact) | chop/bear_div/low_rr |
| 4 | **COHR** | NYSE:COHR | **+9.22%** | 33.8 | 82 | Breakout (Squeeze Release) | mom_decay/chop/low_rr |
| 5 | **ON** | NASDAQ:ON | **+8.16%** | 37.7 | 74 | Trend Continuation | mom_decay/low_rr |
| 6 | **GLW** | NYSE:GLW | **+7.65%** | 27.8 | 53 | Trend Continuation | mom_decay/near_resist/chop/low_rr |
| 7 | **VRT** | NYSE:VRT | **+7.48%** | 29.9 | 80 | Trend Continuation | near_resist/chop/low_rr |
| 8 | **MTZ** | NYSE:MTZ | **+7.02%** | 39.2 | 50 | Pullback Buy (Near Support) | near_resist/low_rr |
| 9 | **GNRC** | NYSE:GNRC | **+5.87%** | 32.6 | 53 | Trend Continuation | mom_decay/chop/low_rr |
| 10 | **FLEX** | NASDAQ:FLEX | **+5.56%** | 41.3 | 70 | Trend Continuation | mom_decay/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **MU** | NASDAQ:MU | **-9.36%** | 11.4 | 57 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 2 | **ARM** | NASDAQ:ARM | **-7.22%** | 42.8 | 94 | Overextended Chase (High Risk) | overheated/near_resist/bear_div |
| 3 | **CRWV** | NASDAQ:CRWV | **-5.65%** | 26.8 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 4 | **APLD** | NASDAQ:APLD | **-2.98%** | 32.8 | 50 | Trend Continuation | mom_decay/near_resist/low_rr |
| 5 | **RELY** | NASDAQ:RELY | **-2.09%** | 46.2 | 50 | Trend Continuation | near_resist/low_rr |
| 6 | **AS** | NYSE:AS | **-1.95%** | 55.7 | 50 | Breakout (Squeeze Release) | near_resist/chop |
| 7 | **QCOM** | NASDAQ:QCOM | **-1.86%** | 34.4 | 88 | Trend Continuation | mom_decay/low_rr |
| 8 | **WDC** | NASDAQ:WDC | **-1.82%** | 30.6 | 58 | Overextended Chase (High Risk) | overheated/mom_decay/bear_div |
| 9 | **AEHR** | NASDAQ:AEHR | **-1.71%** | 36.2 | 78 | Breakout (Squeeze Release) | low_rr |
| 10 | **SN** | NYSE:SN | **-1.62%** | 33.6 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.macd.bullish` | 6/10 | 3/10 | +30pp |
| `tech.1W.adx.strong` | 7/10 | 4/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.resistance` | 4/10 | 7/10 | -30pp |
| `tech.alignment.full` | 4/10 | 7/10 | -30pp |
| `tech.rs.strong` | 4/10 | 7/10 | -30pp |
| `tech.1W.macd.bullish` | 7/10 | 10/10 | -30pp |
| `tech.1D.macd.bullish` | 4/10 | 7/10 | -30pp |
| `tech.1H.adx.strong` | 3/10 | 6/10 | -30pp |
| `tech.1D.adx.trending` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 7/10 vs losers 4/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.macd.bullish` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.flag.resistance` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.alignment.full` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.rs.strong` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1H.adx.strong` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1D.adx.trending` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/23 14:24:27_
