# 回归检核报告 · US — 2026-06-04

**对照快照:** `reports/2026-06-03` (2026-06-03)
**池子:** 75 只 (成功 75 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:NBIX** | NASDAQ:NBIX | **+6.63%** | - | - | - | - |
| 2 | **NASDAQ:TTMI** | NASDAQ:TTMI | **+5.56%** | 33.5 | 70 | Trend Continuation | mom_decay/near_resist/low_rr |
| 3 | **NASDAQ:WDC** | NASDAQ:WDC | **+5.51%** | 14.2 | 82 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist/bear_div |
| 4 | **NASDAQ:ADEA** | NASDAQ:ADEA | **+4.53%** | 35.1 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 5 | **NYSE:DKS** | NYSE:DKS | **+4.39%** | 23.5 | 70 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 6 | **NASDAQ:AMD** | NASDAQ:AMD | **+4.02%** | -5.7 | 36 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist/bear_div/low_rr |
| 7 | **NASDAQ:MPWR** | NASDAQ:MPWR | **+3.99%** | 19.2 | 55 | Trend Continuation | mom_decay/near_resist/bear_div/low_rr |
| 8 | **NASDAQ:KLAC** | NASDAQ:KLAC | **+3.91%** | 22.6 | 50 | Trend Continuation | fake_break/near_resist/chop/low_rr |
| 9 | **NASDAQ:MRVL** | NASDAQ:MRVL | **+3.73%** | 25.6 | 85 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 10 | **NYSE:JCI** | NYSE:JCI | **+3.50%** | 25.8 | 67 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:ONDS** | NASDAQ:ONDS | **-14.51%** | - | - | - | - |
| 2 | **NASDAQ:LITE** | NASDAQ:LITE | **-8.86%** | 21.8 | 80 | Trend Continuation | mom_decay/chop/low_rr |
| 3 | **NYSE:QBTS** | NYSE:QBTS | **-7.89%** | 26.9 | 86 | Overextended Chase (High Risk) | overheated/bear_div/low_rr |
| 4 | **NASDAQ:APLD** | NASDAQ:APLD | **-6.58%** | 25.1 | 50 | Trend Continuation | bear_div/low_rr |
| 5 | **NASDAQ:CRDO** | NASDAQ:CRDO | **-6.29%** | 45.8 | 84 | Overextended Chase (High Risk) | overheated |
| 6 | **NASDAQ:SEDG** | NASDAQ:SEDG | **-5.72%** | 12 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 7 | **NASDAQ:PANW** | NASDAQ:PANW | **-5.64%** | - | - | - | - |
| 8 | **NYSE:BE** | NYSE:BE | **-5.13%** | 18.6 | 64 | Breakout (Squeeze Release) | mom_decay/near_resist/bear_div/low_rr |
| 9 | **NASDAQ:ERIC** | NASDAQ:ERIC | **-4.22%** | 52.8 | 50 | Trend Follow (HH/HL Intact) | fake_break/near_resist |
| 10 | **NASDAQ:NBIS** | NASDAQ:NBIS | **-3.42%** | 26.3 | 72 | Overextended Chase (High Risk) | overheated |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.resistance` | 9/10 | 3/10 | +60pp |
| `tech.flag.momentum_decay` | 8/10 | 3/10 | +50pp |
| `tech.flag.bad_rr` | 7/10 | 4/10 | +30pp |
| `tech.1H.macd.bullish` | 7/10 | 4/10 | +30pp |
| `tech.1H.near_support` | 7/10 | 4/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

> 无显著共同特征。

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 7/10 vs losers 4/10 (Δ=30pp)
  - 当前 -3 → **建议 -4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.flag.resistance` — gainers 9/10 vs losers 3/10 (Δ=60pp)
- ↑ `tech.flag.momentum_decay` — gainers 8/10 vs losers 3/10 (Δ=50pp)
- ↑ `tech.1H.macd.bullish` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `tech.1H.near_support` — gainers 7/10 vs losers 4/10 (Δ=30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/4 12:36:59_
