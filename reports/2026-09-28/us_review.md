# 回归检核报告 · US — 2026-09-28

**对照快照:** `reports/2026-09-27` (2026-09-27)
**池子:** 46 只 (成功 46 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:BE** | NYSE:BE | **+8.27%** | 35.3 | 37 | Trend Follow (HH/HL Intact) | chop/low_rr |
| 2 | **NASDAQ:AEHR** | NASDAQ:AEHR | **+7.15%** | 35 | 70 | Trend Continuation | chop/low_rr |
| 3 | **NYSE:DELL** | NYSE:DELL | **+5.01%** | 30.5 | 74 | Trend Follow (HH/HL Intact) | mom_decay/bear_div/low_rr |
| 4 | **NASDAQ:SMCI** | NASDAQ:SMCI | **+4.22%** | 29.5 | 76 | Trend Continuation | bear_div/low_rr |
| 5 | **NASDAQ:QCOM** | NASDAQ:QCOM | **+3.97%** | 31.6 | 50 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 6 | **NASDAQ:MSFT** | NASDAQ:MSFT | **+3.66%** | 35.1 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 7 | **NYSE:P** | NYSE:P | **+3.38%** | 50.3 | 84 | Overextended Chase (High Risk) | overheated |
| 8 | **NASDAQ:TEM** | NASDAQ:TEM | **+3.37%** | 48.6 | 67 | Pullback Buy (Near Support) | overheated |
| 9 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 10 | **NYSE:ASX** | NYSE:ASX | **+1.86%** | 28 | 69 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:IREN** | NASDAQ:IREN | **-4.39%** | 0 | 62 | - | - |
| 2 | **NASDAQ:PANW** | NASDAQ:PANW | **-3.89%** | 18.5 | 57 | Trend Continuation | near_resist/chop/low_rr |
| 3 | **NASDAQ:INTC** | NASDAQ:INTC | **-3.45%** | 19.7 | 56 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/low_rr |
| 4 | **NASDAQ:CRWD** | NASDAQ:CRWD | **-2.90%** | 45.3 | 46 | Trend Follow (HH/HL Intact) | - |
| 5 | **NASDAQ:BGC** | NASDAQ:BGC | **-2.71%** | 36.4 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 6 | **NASDAQ:NBIS** | NASDAQ:NBIS | **-2.53%** | 33.1 | 77 | Trend Follow (HH/HL Intact) | chop/low_rr |
| 7 | **NYSE:SPNT** | NYSE:SPNT | **-1.63%** | 38.7 | 59 | Trend Continuation | near_resist/chop/low_rr |
| 8 | **NASDAQ:PLTR** | NASDAQ:PLTR | **-1.52%** | 33.8 | 53 | Trend Continuation | near_resist/low_rr |
| 9 | **NYSE:DOCN** | NYSE:DOCN | **-1.29%** | - | 51 | - | - |
| 10 | **NYSE:DT** | NYSE:DT | **-1.24%** | 43.8 | 61 | Trend Follow (HH/HL Intact) | near_resist/bear_div |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.bull_ema` | 10/10 | 0/10 | +100pp |
| `tech.1H.macd.bullish` | 8/10 | 0/10 | +80pp |
| `tech.rs.strong` | 9/10 | 2/10 | +70pp |
| `tech.1H.bull_ema` | 7/10 | 0/10 | +70pp |
| `tech.1H.obv.up` | 9/10 | 2/10 | +70pp |
| `tech.alignment.full` | 6/10 | 0/10 | +60pp |
| `tech.1D.bull_ema` | 10/10 | 5/10 | +50pp |
| `tech.1H.rsi.healthy` | 9/10 | 4/10 | +50pp |
| `tech.4H.obv.up` | 8/10 | 3/10 | +50pp |
| `tech.1W.dist20.overheat` | 10/10 | 6/10 | +40pp |
| `tech.1W.macd.bullish` | 8/10 | 5/10 | +30pp |
| `tech.1H.above_ema200` | 10/10 | 7/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.dist20.near` | 1/10 | 5/10 | -40pp |
| `tech.1H.obv.down` | 1/10 | 5/10 | -40pp |
| `tech.4H.obv.down` | 2/10 | 5/10 | -30pp |
| `news.signal.no_trade` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 10/10 vs losers 5/10 (Δ=50pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 8/10 vs losers 5/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.bull_ema` — gainers 10/10 vs losers 0/10 (Δ=100pp)
- ↑ `tech.1H.macd.bullish` — gainers 8/10 vs losers 0/10 (Δ=80pp)
- ↑ `tech.rs.strong` — gainers 9/10 vs losers 2/10 (Δ=70pp)
- ↑ `tech.1H.bull_ema` — gainers 7/10 vs losers 0/10 (Δ=70pp)
- ↑ `tech.1H.obv.up` — gainers 9/10 vs losers 2/10 (Δ=70pp)
- ↑ `tech.alignment.full` — gainers 6/10 vs losers 0/10 (Δ=60pp)
- ↑ `tech.1H.rsi.healthy` — gainers 9/10 vs losers 4/10 (Δ=50pp)
- ↑ `tech.4H.obv.up` — gainers 8/10 vs losers 3/10 (Δ=50pp)
- ↑ `tech.1W.dist20.overheat` — gainers 10/10 vs losers 6/10 (Δ=40pp)
- ↑ `tech.1H.above_ema200` — gainers 10/10 vs losers 7/10 (Δ=30pp)
- ↓ `tech.4H.dist20.near` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.obv.down` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.4H.obv.down` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `news.signal.no_trade` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/28 09:50:48_
