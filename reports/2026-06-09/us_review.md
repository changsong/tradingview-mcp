# 回归检核报告 · US — 2026-06-09

**对照快照:** `reports/2026-06-05` (2026-06-05)
**池子:** 54 只 (成功 54 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:INTC** | NASDAQ:INTC | **+11.19%** | - | - | - | - |
| 2 | **NASDAQ:AAOI** | NASDAQ:AAOI | **+11.10%** | - | - | - | - |
| 3 | **NYSE:IONQ** | NYSE:IONQ | **+10.60%** | 44.5 | 54 | Trend Follow (HH/HL Intact) | - |
| 4 | **NASDAQ:MU** | NASDAQ:MU | **+9.87%** | 38.2 | 50 | Overextended Chase (High Risk) | overheated |
| 5 | **NASDAQ:MRVL** | NASDAQ:MRVL | **+9.63%** | 25.6 | 50 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 6 | **NASDAQ:KLAC** | NASDAQ:KLAC | **+9.27%** | 0 | 50 | - | - |
| 7 | **NASDAQ:IREN** | NASDAQ:IREN | **+8.91%** | 25.4 | 58 | Trend Continuation | near_resist/low_rr |
| 8 | **NASDAQ:ADEA** | NASDAQ:ADEA | **+8.87%** | 50.9 | 50 | Trend Continuation | low_rr |
| 9 | **NASDAQ:AMAT** | NASDAQ:AMAT | **+8.64%** | 37.5 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 10 | **NYSE:QBTS** | NYSE:QBTS | **+8.30%** | 0 | 50 | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:PANW** | NASDAQ:PANW | **-2.10%** | 50.7 | 74 | Trend Follow (HH/HL Intact) | low_rr |
| 2 | **NASDAQ:CRWD** | NASDAQ:CRWD | **-1.82%** | 42.2 | 93 | Trend Follow (HH/HL Intact) | bear_div/low_rr |
| 3 | **NASDAQ:INCY** | NASDAQ:INCY | **-1.70%** | 52.3 | 50 | Breakout (Squeeze Release) | near_resist/chop |
| 4 | **NYSE:AIR** | NYSE:AIR | **-1.65%** | 36.2 | 79 | Trend Continuation | mom_decay/low_rr |
| 5 | **NASDAQ:MNST** | NASDAQ:MNST | **-1.21%** | 47.5 | 59 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 6 | **NASDAQ:FLEX** | NASDAQ:FLEX | **-0.72%** | 67.8 | 50 | Reversal (Bullish RSI Divergence) | overheated |
| 7 | **NYSE:DKS** | NYSE:DKS | **-0.67%** | 28.5 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 8 | **NASDAQ:NBIX** | NASDAQ:NBIX | **-0.46%** | 53.5 | 50 | Pullback Buy (Near Support) | near_resist |
| 9 | **NYSE:DOCN** | NYSE:DOCN | **-0.32%** | 14.9 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 10 | **NASDAQ:SANM** | NASDAQ:SANM | **-0.05%** | 0 | 50 | - | - |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

> 无显著共同特征 — 当日涨幅由特异性事件驱动,无法归纳统一权重调整。

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.rsi.healthy` | 4/10 | 8/10 | -40pp |
| `tech.1H.rsi.healthy` | 4/10 | 8/10 | -40pp |
| `tech.1H.dist20.near` | 2/10 | 6/10 | -40pp |
| `tech.1H.vol.expanding` | 1/10 | 5/10 | -40pp |
| `tech.score.high` | 4/10 | 7/10 | -30pp |
| `tech.1W.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.1D.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.4H.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.4H.macd.bullish` | 4/10 | 7/10 | -30pp |
| `tech.1D.bull_ema` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1W.above_ema200`** — 站上EMA200 (1W)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↓ `tech.4H.rsi.healthy` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1H.rsi.healthy` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1H.dist20.near` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.1H.vol.expanding` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.score.high` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.4H.above_ema200` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.4H.macd.bullish` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/9 12:50:50_
