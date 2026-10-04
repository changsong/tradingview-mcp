# 回归检核报告 · US — 2026-09-22

**对照快照:** `reports/2026-09-21` (2026-09-21)
**池子:** 39 只 (成功 39 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **GRAL** | NASDAQ:GRAL | **+33.68%** | 43.4 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/low_rr |
| 2 | **INTC** | NASDAQ:INTC | **+12.14%** | 43.6 | 50 | Trend Follow (HH/HL Intact) | chop |
| 3 | **AMD** | NASDAQ:AMD | **+9.95%** | 49.4 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 4 | **QCOM** | NASDAQ:QCOM | **+9.29%** | 35.7 | 49 | Pullback Buy (Near Support) | near_resist/low_rr |
| 5 | **P** | NYSE:P | **+9.14%** | 39.3 | 47 | Trend Continuation | mom_decay/chop/low_rr |
| 6 | **SMCI** | NASDAQ:SMCI | **+5.40%** | 37.4 | 64 | Breakout (Squeeze Release) | mom_decay/near_resist/low_rr |
| 7 | **MRVL** | NASDAQ:MRVL | **+5.38%** | 35.9 | 50 | Pullback Buy (Near Support) | near_resist/chop |
| 8 | **ASX** | NYSE:ASX | **+5.04%** | 58 | 55 | Trend Follow (HH/HL Intact) | chop/low_rr |
| 9 | **CRWD** | NASDAQ:CRWD | **+4.92%** | 48.4 | 59 | Trend Follow (HH/HL Intact) | bear_div |
| 10 | **NBIS** | NASDAQ:NBIS | **+4.14%** | 22.4 | 59 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **HGTY** | NYSE:HGTY | **-2.51%** | 40.1 | 50 | Breakout (Squeeze Release) | near_resist/low_rr |
| 2 | **SNDK** | NASDAQ:SNDK | **-1.41%** | 24.1 | 47 | Trend Continuation | near_resist/chop/low_rr |
| 3 | **NBN** | NASDAQ:NBN | **-0.70%** | 51.7 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 4 | **INCY** | NASDAQ:INCY | **-0.53%** | 35.1 | 67 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 5 | **VSAT** | NASDAQ:VSAT | **+0.00%** | 42.9 | 48 | Trend Continuation | chop/low_rr |
| 6 | **HRMY** | NASDAQ:HRMY | **+0.19%** | 53.9 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 7 | **TEM** | NASDAQ:TEM | **+0.24%** | 40.6 | 78 | Overextended Chase (High Risk) | overheated/near_resist/low_rr |
| 8 | **OTC:SMTGY** | OTC:SMTGY | **+0.37%** | 30 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 9 | **OTC:HTHIY** | OTC:HTHIY | **+0.51%** | 38 | 50 | Pullback Buy (Near Support) | fake_break/near_resist/chop/low_rr |
| 10 | **LTC** | NYSE:LTC | **+0.75%** | 42.8 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.overheat` | 8/10 | 4/10 | +40pp |
| `tech.4H.adx.chop` | 7/10 | 3/10 | +40pp |
| `tech.1H.adx.trending` | 5/10 | 1/10 | +40pp |
| `tech.1H.macd.bullish` | 6/10 | 2/10 | +40pp |
| `tech.4H.bull_ema` | 7/10 | 4/10 | +30pp |
| `tech.4H.above_ema200` | 10/10 | 7/10 | +30pp |
| `tech.4H.macd.bullish` | 8/10 | 5/10 | +30pp |
| `tech.1H.rsi.healthy` | 7/10 | 4/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.resistance` | 6/10 | 9/10 | -30pp |
| `tech.flag.bad_rr` | 7/10 | 10/10 | -30pp |
| `tech.1D.dist20.near` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1H.adx.trending`** — ADX>25 趋势中 (1H)
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 5 → **建议 4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.dist20.overheat` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.4H.adx.chop` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1H.macd.bullish` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.4H.bull_ema` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `tech.4H.above_ema200` — gainers 10/10 vs losers 7/10 (Δ=30pp)
- ↑ `tech.4H.macd.bullish` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.1H.rsi.healthy` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↓ `tech.flag.resistance` — gainers 6/10 vs losers 9/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/22 09:48:32_
