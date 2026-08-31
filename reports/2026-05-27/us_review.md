# 回归检核报告 · US — 2026-05-27

**对照快照:** `reports/2026-05-26` (2026-05-26)
**池子:** 69 只 (成功 69 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:MU** | NASDAQ:MU | **+19.29%** | 37.8 | 91 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 2 | **NASDAQ:SEDG** | NASDAQ:SEDG | **+14.21%** | 23.7 | 48 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/low_rr |
| 3 | **NYSE:MOD** | NYSE:MOD | **+13.57%** | 24.5 | 49 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 4 | **NASDAQ:RMBS** | NASDAQ:RMBS | **+9.97%** | 34.3 | 52 | Trend Continuation | low_rr |
| 5 | **NASDAQ:VSAT** | NASDAQ:VSAT | **+9.17%** | 35 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 6 | **NASDAQ:VIAV** | NASDAQ:VIAV | **+8.64%** | - | - | - | - |
| 7 | **NASDAQ:WDC** | NASDAQ:WDC | **+8.34%** | 25.5 | 74 | Trend Follow (HH/HL Intact) | mom_decay/bear_div/low_rr |
| 8 | **NASDAQ:FLEX** | NASDAQ:FLEX | **+8.13%** | 29.2 | 80 | Trend Follow (HH/HL Intact) | mom_decay/bear_div/low_rr |
| 9 | **NASDAQ:AMD** | NASDAQ:AMD | **+7.78%** | 5.5 | 71 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 10 | **NASDAQ:KLAC** | NASDAQ:KLAC | **+6.51%** | 23.7 | 100 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:SM** | NYSE:SM | **-5.86%** | 41.3 | 74 | Trend Continuation | chop |
| 2 | **NYSE:FN** | NYSE:FN | **-3.28%** | 25.5 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/bear_div/low_rr |
| 3 | **NASDAQ:APLD** | NASDAQ:APLD | **-1.59%** | 32.1 | 94 | Overextended Chase (High Risk) | overheated/mom_decay/bear_div/low_rr |
| 4 | **NYSE:SPNT** | NYSE:SPNT | **-0.86%** | 35.3 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 5 | **CBOE:CBOE** | CBOE:CBOE | **-0.80%** | 29.9 | 76 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 6 | **NASDAQ:PRDO** | NASDAQ:PRDO | **-0.26%** | 25.8 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 7 | **NASDAQ:NVDA** | NASDAQ:NVDA | **-0.22%** | 22.3 | 85 | Trend Continuation | mom_decay/near_resist/low_rr |
| 8 | **NASDAQ:EQIX** | NASDAQ:EQIX | **-0.20%** | - | - | - | - |
| 9 | **NYSE:FAF** | NYSE:FAF | **-0.07%** | 29.4 | 59 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 10 | **NASDAQ:INCY** | NASDAQ:INCY | **-0.06%** | 30.9 | 66 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/bear_div/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.overheat` | 9/10 | 4/10 | +50pp |
| `tech.1W.rsi.overheat` | 5/10 | 1/10 | +40pp |
| `tech.1W.adx.strong` | 6/10 | 2/10 | +40pp |
| `tech.1D.bull_ema` | 8/10 | 4/10 | +40pp |
| `tech.rs.strong` | 6/10 | 3/10 | +30pp |
| `tech.1D.adx.strong` | 5/10 | 2/10 | +30pp |
| `tech.1D.obv.up` | 6/10 | 3/10 | +30pp |
| `tech.4H.obv.up` | 6/10 | 3/10 | +30pp |
| `tech.1H.rsi.healthy` | 9/10 | 6/10 | +30pp |
| `tech.1H.adx.strong` | 5/10 | 2/10 | +30pp |
| `tech.1H.macd.bullish` | 8/10 | 5/10 | +30pp |
| `tech.4H.bull_ema` | 7/10 | 4/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.near_support` | 3/10 | 9/10 | -60pp |
| `tech.flag.chop` | 1/10 | 6/10 | -50pp |
| `tech.1D.adx.chop` | 1/10 | 6/10 | -50pp |
| `tech.1W.rsi.healthy` | 4/10 | 8/10 | -40pp |
| `tech.1D.dist20.near` | 1/10 | 5/10 | -40pp |
| `tech.4H.dist20.near` | 3/10 | 7/10 | -40pp |
| `tech.4H.near_support` | 1/10 | 5/10 | -40pp |
| `tech.flag.resistance` | 4/10 | 7/10 | -30pp |
| `tech.1D.obv.down` | 3/10 | 6/10 | -30pp |
| `tech.4H.obv.down` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.rsi.overheat`** — RSI>80超买 (1W)
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 -12 → **建议 -15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:498`
- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 6/10 vs losers 2/10 (Δ=40pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 8/10 vs losers 4/10 (Δ=40pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.1D.adx.strong`** — ADX>30 强趋势 (1D)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 6/10 vs losers 3/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.flag.chop`** — 震荡市
  - gainers 1/10 vs losers 6/10 (Δ=-50pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 1/10 vs losers 5/10 (Δ=-40pp)
  - 当前 5 → **建议 4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.dist20.overheat` — gainers 9/10 vs losers 4/10 (Δ=50pp)
- ↑ `tech.rs.strong` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.4H.obv.up` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.1H.rsi.healthy` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↑ `tech.1H.adx.strong` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.1H.macd.bullish` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.4H.bull_ema` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↓ `tech.1H.near_support` — gainers 3/10 vs losers 9/10 (Δ=-60pp)
- ↓ `tech.1D.adx.chop` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1W.rsi.healthy` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.4H.dist20.near` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.4H.near_support` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.flag.resistance` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1D.obv.down` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.4H.obv.down` — gainers 3/10 vs losers 6/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/27 12:12:41_
