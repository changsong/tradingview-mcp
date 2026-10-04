# 回归检核报告 · US — 2026-09-23

**对照快照:** `reports/2026-09-22` (2026-09-22)
**池子:** 44 只 (成功 44 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:SNDK** | NASDAQ:SNDK | **+6.82%** | 8 | 58 | Trend Continuation | fake_break/near_resist/chop/low_rr |
| 2 | **NASDAQ:MU** | NASDAQ:MU | **+5.00%** | 42.8 | 71 | Trend Continuation | chop/low_rr |
| 3 | **NASDAQ:STX** | NASDAQ:STX | **+4.85%** | 35.3 | 40 | Trend Continuation | chop/low_rr |
| 4 | **NYSE:ASX** | NYSE:ASX | **+3.36%** | 34.3 | 59 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop/low_rr |
| 5 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 6 | **NASDAQ:QCOM** | NASDAQ:QCOM | **+2.08%** | 51.6 | 52 | Pullback Buy (Near Support) | near_resist/low_rr |
| 7 | **NASDAQ:MRVL** | NASDAQ:MRVL | **+1.93%** | 39.5 | 56 | Trend Continuation | chop |
| 8 | **NASDAQ:INCY** | NASDAQ:INCY | **+1.83%** | 39 | 61 | Pullback Buy (Near Support) | mom_decay/chop |
| 9 | **NASDAQ:INTC** | NASDAQ:INTC | **+1.71%** | 16.3 | 50 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist/chop/low_rr |
| 10 | **NYSE:ETN** | NYSE:ETN | **+1.62%** | 27.5 | 64 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:DELL** | NYSE:DELL | **-4.59%** | 19.1 | 62 | Trend Follow (HH/HL Intact) | fake_break/near_resist/bear_div |
| 2 | **NYSE:P** | NYSE:P | **-2.44%** | 40.2 | 78 | Overextended Chase (High Risk) | overheated/chop/low_rr |
| 3 | **NYSE:C** | NYSE:C | **-1.91%** | 30.3 | 49 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 4 | **NASDAQ:VSAT** | NASDAQ:VSAT | **-1.82%** | 36.5 | 54 | Trend Continuation | chop/low_rr |
| 5 | **NASDAQ:BGC** | NASDAQ:BGC | **-1.45%** | 21.6 | 50 | Breakout (Squeeze Release) | fake_break/mom_decay/near_resist/chop/bear_div/low_rr |
| 6 | **NASDAQ:HRMY** | NASDAQ:HRMY | **-1.35%** | 41.7 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 7 | **NASDAQ:AMZN** | NASDAQ:AMZN | **-1.34%** | 27.5 | 59 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 8 | **NYSE:HPE** | NYSE:HPE | **-1.17%** | 21.6 | 53 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop/low_rr |
| 9 | **NASDAQ:TEM** | NASDAQ:TEM | **-1.08%** | 26.6 | 63 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/low_rr |
| 10 | **NYSE:LTC** | NYSE:LTC | **-1.07%** | 41.2 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.bull_ema` | 9/10 | 3/10 | +60pp |
| `tech.alignment.full` | 7/10 | 2/10 | +50pp |
| `tech.1W.adx.strong` | 8/10 | 3/10 | +50pp |
| `tech.1H.macd.bullish` | 9/10 | 4/10 | +50pp |
| `tech.4H.macd.bullish` | 10/10 | 6/10 | +40pp |
| `tech.1D.macd.bullish` | 9/10 | 6/10 | +30pp |
| `tech.1H.adx.strong` | 8/10 | 5/10 | +30pp |
| `tech.1H.obv.up` | 9/10 | 6/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.macd.bullish` | 2/10 | 7/10 | -50pp |
| `tech.1H.dist20.near` | 3/10 | 7/10 | -40pp |
| `tech.1W.adx.chop` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 8/10 vs losers 3/10 (Δ=50pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 2/10 vs losers 7/10 (Δ=-50pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.bull_ema` — gainers 9/10 vs losers 3/10 (Δ=60pp)
- ↑ `tech.alignment.full` — gainers 7/10 vs losers 2/10 (Δ=50pp)
- ↑ `tech.1H.macd.bullish` — gainers 9/10 vs losers 4/10 (Δ=50pp)
- ↑ `tech.4H.macd.bullish` — gainers 10/10 vs losers 6/10 (Δ=40pp)
- ↑ `tech.1H.adx.strong` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.1H.obv.up` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↓ `tech.1H.dist20.near` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.1W.adx.chop` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/23 09:40:31_
