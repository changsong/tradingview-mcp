# 回归检核报告 · US — 2026-08-30

**对照快照:** `reports/2026-08-29` (2026-08-29)
**池子:** 37 只 (成功 37 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **AMZN** | NASDAQ:AMZN | **+3.97%** | 27.1 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 2 | **RELY** | NASDAQ:RELY | **+2.17%** | 24.3 | 52 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 3 | **DASH** | NASDAQ:DASH | **+2.09%** | 18.6 | 52 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist/low_rr |
| 4 | **GEN** | NASDAQ:GEN | **+1.70%** | -0.9 | 48 | Trend Continuation | fake_break/bull_trap/near_resist/chop/bear_div |
| 5 | **MSFT** | NASDAQ:MSFT | **+1.68%** | 12.5 | 50 | Pullback Buy (Near Support) | fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 6 | **AAPL** | NASDAQ:AAPL | **+1.63%** | 45.9 | 50 | Pullback Buy (Near Support) | near_resist/chop |
| 7 | **J** | NYSE:J | **+0.90%** | 18.3 | 50 | Pullback Buy (Near Support) | fake_break/near_resist/bear_div/low_rr |
| 8 | **APD** | NYSE:APD | **+0.86%** | 57.6 | 50 | Reversal (MACD Cross) | near_resist/chop/low_rr |
| 9 | **OTC:SBGSY** | OTC:SBGSY | **+0.76%** | 46.4 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 10 | **OTC:HTHIY** | OTC:HTHIY | **+0.76%** | 33.2 | 50 | Trend Continuation | mom_decay/near_resist/bear_div/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **HOOD** | NASDAQ:HOOD | **-5.01%** | 48.7 | 50 | Pullback Buy (Near Support) | - |
| 2 | **NVDA** | NASDAQ:NVDA | **-4.57%** | 47.5 | 50 | Pullback Buy (Near Support) | mom_decay/chop/bear_div |
| 3 | **CRWD** | NASDAQ:CRWD | **-4.19%** | 29.9 | 50 | Trend Continuation | mom_decay/near_resist/bear_div/low_rr |
| 4 | **NEM** | NYSE:NEM | **-3.26%** | 41.1 | 58 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 5 | **SCCO** | NYSE:SCCO | **-3.00%** | 35 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 6 | **WPM** | NYSE:WPM | **-2.95%** | 41.6 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 7 | **PANW** | NASDAQ:PANW | **-2.94%** | 32.2 | 50 | Trend Continuation | mom_decay/low_rr |
| 8 | **ASX** | NYSE:ASX | **-2.88%** | 39.1 | 63 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 9 | **FCX** | NYSE:FCX | **-2.51%** | 0 | 50 | - | - |
| 10 | **WT** | NYSE:WT | **-2.44%** | 44.1 | 65 | Trend Follow (HH/HL Intact) | bear_div |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.verdict.long` | 10/10 | 4/10 | +60pp |
| `tech.1D.bull_ema` | 10/10 | 4/10 | +60pp |
| `tech.1H.macd.bullish` | 6/10 | 0/10 | +60pp |
| `tech.flag.resistance` | 10/10 | 5/10 | +50pp |
| `tech.1H.bull_ema` | 7/10 | 2/10 | +50pp |
| `tech.4H.bull_ema` | 6/10 | 2/10 | +40pp |
| `tech.1H.rsi.healthy` | 7/10 | 3/10 | +40pp |
| `tech.flag.chop` | 5/10 | 2/10 | +30pp |
| `tech.score.mid` | 5/10 | 2/10 | +30pp |
| `tech.1D.dist20.near` | 5/10 | 2/10 | +30pp |
| `tech.1D.near_support` | 6/10 | 3/10 | +30pp |
| `tech.4H.macd.bullish` | 6/10 | 3/10 | +30pp |
| `tech.4H.obv.up` | 6/10 | 3/10 | +30pp |
| `tech.1H.obv.up` | 5/10 | 2/10 | +30pp |
| `tech.1D.obv.up` | 9/10 | 6/10 | +30pp |
| `tech.1W.adx.trending` | 7/10 | 4/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.verdict.strong_long` | 0/10 | 5/10 | -50pp |
| `tech.rs.strong` | 2/10 | 6/10 | -40pp |
| `tech.score.high` | 3/10 | 7/10 | -40pp |
| `tech.4H.rsi.healthy` | 4/10 | 7/10 | -30pp |
| `tech.1H.obv.down` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 10/10 vs losers 4/10 (Δ=60pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`
- ↑ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 5 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.verdict.long` — gainers 10/10 vs losers 4/10 (Δ=60pp)
- ↑ `tech.1H.macd.bullish` — gainers 6/10 vs losers 0/10 (Δ=60pp)
- ↑ `tech.flag.resistance` — gainers 10/10 vs losers 5/10 (Δ=50pp)
- ↑ `tech.1H.bull_ema` — gainers 7/10 vs losers 2/10 (Δ=50pp)
- ↑ `tech.4H.bull_ema` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.1H.rsi.healthy` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1D.near_support` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.4H.macd.bullish` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.4H.obv.up` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.1H.obv.up` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.1W.adx.trending` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↓ `tech.verdict.strong_long` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.rs.strong` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.score.high` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.4H.rsi.healthy` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1H.obv.down` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/8/30 09:50:24_
