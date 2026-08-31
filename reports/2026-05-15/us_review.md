# 回归检核报告 · US — 2026-05-15

**对照快照:** `reports/2026-05-14` (2026-05-14)
**池子:** 64 只 (成功 64 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:SM** | NYSE:SM | **+2.77%** | 13.9 | 50 | Trend Continuation | fake_break/near_resist/chop/bear_div/low_rr |
| 2 | **NYSE:CF** | NYSE:CF | **+1.28%** | 27.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 3 | **CBOE:CBOE** | CBOE:CBOE | **+1.15%** | 38.1 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 4 | **NYSE:SPNT** | NYSE:SPNT | **+0.62%** | 74.4 | 50 | Trend Follow (HH/HL Intact) | bull_trap/near_resist |
| 5 | **NASDAQ:GEN** | NASDAQ:GEN | **+0.26%** | 4.8 | 50 | Range / No Edge | near_resist/chop/low_rr |
| 6 | **NYSE:JHG** | NYSE:JHG | **+0.00%** | 74.4 | 50 | Trend Follow (HH/HL Intact) | bull_trap/near_resist |
| 7 | **NASDAQ:CPRX** | NASDAQ:CPRX | **-0.06%** | 1.6 | 50 | Trend Continuation | bull_trap/near_resist/bear_div/low_rr |
| 8 | **NASDAQ:AMAT** | NASDAQ:AMAT | **-0.19%** | 46.2 | 50 | Trend Continuation | near_resist/chop |
| 9 | **NYSE:MS** | NYSE:MS | **-0.40%** | 74.4 | 50 | Trend Follow (HH/HL Intact) | bull_trap/near_resist |
| 10 | **NASDAQ:BGC** | NASDAQ:BGC | **-0.44%** | 32.4 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:IREN** | NASDAQ:IREN | **-7.83%** | 31.6 | 50 | Trend Continuation | low_rr |
| 2 | **NYSE:WPM** | NYSE:WPM | **-7.65%** | - | - | - | - |
| 3 | **NASDAQ:APLD** | NASDAQ:APLD | **-6.98%** | 38.8 | 50 | Overextended Chase (High Risk) | overheated/low_rr |
| 4 | **NASDAQ:INTC** | NASDAQ:INTC | **-6.23%** | 4.8 | 50 | Range / No Edge | near_resist/chop/low_rr |
| 5 | **NASDAQ:RKLB** | NASDAQ:RKLB | **-5.88%** | 4.8 | 50 | Range / No Edge | near_resist/chop/low_rr |
| 6 | **NYSE:RIO** | NYSE:RIO | **-5.65%** | - | - | - | - |
| 7 | **NYSE:MOD** | NYSE:MOD | **-5.32%** | 31 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 8 | **NYSE:GLW** | NYSE:GLW | **-5.30%** | 29.8 | 50 | Overextended Chase (High Risk) | overheated/fake_break/near_resist |
| 9 | **NASDAQ:MU** | NASDAQ:MU | **-4.94%** | 4.8 | 50 | Range / No Edge | near_resist/chop/low_rr |
| 10 | **NYSE:COHR** | NYSE:COHR | **-4.74%** | 33.4 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.verdict.long` | 8/10 | 2/10 | +60pp |
| `tech.1W.macd.bullish` | 9/10 | 4/10 | +50pp |
| `tech.flag.resistance` | 10/10 | 6/10 | +40pp |
| `tech.1D.macd.bullish` | 8/10 | 4/10 | +40pp |
| `tech.4H.macd.bullish` | 7/10 | 3/10 | +40pp |
| `tech.1H.near_support` | 5/10 | 1/10 | +40pp |
| `tech.1W.adx.strong` | 5/10 | 1/10 | +40pp |
| `tech.flag.bull_trap` | 5/10 | 1/10 | +40pp |
| `tech.score.high` | 5/10 | 1/10 | +40pp |
| `tech.1W.bull_ema` | 10/10 | 7/10 | +30pp |
| `tech.1D.bull_ema` | 9/10 | 6/10 | +30pp |
| `tech.1H.dist20.near` | 6/10 | 3/10 | +30pp |
| `tech.4H.adx.strong` | 5/10 | 2/10 | +30pp |
| `tech.1H.adx.strong` | 5/10 | 2/10 | +30pp |
| `tech.1H.macd.bullish` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

> 无显著共同特征。

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 9/10 vs losers 4/10 (Δ=50pp)
  - 当前 8 → **建议 10** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 8/10 vs losers 4/10 (Δ=40pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↑ **`tech.flag.bull_trap`** — 诱多 (高位+压力)
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 -12 → **建议 -15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 10/10 vs losers 7/10 (Δ=30pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.4H.adx.strong`** — ADX>30 强趋势 (4H)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.verdict.long` — gainers 8/10 vs losers 2/10 (Δ=60pp)
- ↑ `tech.flag.resistance` — gainers 10/10 vs losers 6/10 (Δ=40pp)
- ↑ `tech.4H.macd.bullish` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1H.near_support` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.score.high` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1H.dist20.near` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.1H.adx.strong` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.1H.macd.bullish` — gainers 6/10 vs losers 3/10 (Δ=30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/15 23:45:16_
