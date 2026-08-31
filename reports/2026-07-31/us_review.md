# 回归检核报告 · US — 2026-07-31

**对照快照:** `reports/2026-07-30` (2026-07-30)
**池子:** 61 只 (成功 48 / 失败 13)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:IREN** | NASDAQ:IREN | **+30.54%** | 20.9 | - | Reversal (Bullish RSI Divergence) | - |
| 2 | **NASDAQ:NBIS** | NASDAQ:NBIS | **+27.13%** | 20.9 | - | Pullback Buy (Near Support) | mom_decay/chop |
| 3 | **NASDAQ:SNDK** | NASDAQ:SNDK | **+25.99%** | 11.9 | - | Range / No Edge | chop |
| 4 | **NASDAQ:CRWV** | NASDAQ:CRWV | **+21.51%** | 3.3 | - | Downtrend | - |
| 5 | **NASDAQ:APLD** | NASDAQ:APLD | **+20.46%** | -6.5 | - | Range / No Edge | low_rr |
| 6 | **NASDAQ:CBRS** | NASDAQ:CBRS | **+19.88%** | 39.9 | - | Reversal (Bullish RSI Divergence) | chop |
| 7 | **NASDAQ:MU** | NASDAQ:MU | **+18.36%** | 19.3 | - | Pullback Buy (Near Support) | mom_decay/chop |
| 8 | **NASDAQ:VNET** | NASDAQ:VNET | **+16.38%** | 20.3 | - | Pullback Buy (Near Support) | chop |
| 9 | **NASDAQ:MSFT** | NASDAQ:MSFT | **+15.51%** | 19.7 | - | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 10 | **NASDAQ:WDC** | NASDAQ:WDC | **+15.37%** | - | - | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:WWD** | NASDAQ:WWD | **-7.56%** | 28.5 | - | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 2 | **NASDAQ:ELTK** | NASDAQ:ELTK | **-4.45%** | 31.7 | - | Breakout (Squeeze Release) | near_resist |
| 3 | **NYSE:LTC** | NYSE:LTC | **-3.31%** | 50.9 | - | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 4 | **NASDAQ:ACGL** | NASDAQ:ACGL | **-3.26%** | 33.3 | - | Trend Continuation | mom_decay/near_resist/low_rr |
| 5 | **NASDAQ:NWBI** | NASDAQ:NWBI | **-1.26%** | 33.4 | - | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 6 | **NYSE:MMM** | NYSE:MMM | **-1.06%** | 34.2 | - | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 7 | **NASDAQ:BHRB** | NASDAQ:BHRB | **-0.83%** | 32.7 | - | Pullback Buy (Near Support) | mom_decay/chop |
| 8 | **NASDAQ:BGC** | NASDAQ:BGC | **-0.76%** | 18.7 | - | Trend Continuation | near_resist/chop/low_rr |
| 9 | **NYSE:LYB** | NYSE:LYB | **-0.08%** | 19.2 | - | Trend Continuation | near_resist/low_rr |
| 10 | **NYSE:HUN** | NYSE:HUN | **+0.92%** | 31.3 | - | Trend Follow (HH/HL Intact) | near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.rs.weak` | 7/10 | 1/10 | +60pp |
| `tech.1H.rsi.oversold` | 6/10 | 0/10 | +60pp |
| `tech.1D.near_support` | 7/10 | 3/10 | +40pp |
| `tech.1H.adx.trending` | 8/10 | 4/10 | +40pp |
| `tech.4H.obv.down` | 9/10 | 6/10 | +30pp |
| `tech.flag.chop` | 6/10 | 3/10 | +30pp |
| `tech.1D.adx.chop` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.resistance` | 1/10 | 9/10 | -80pp |
| `tech.1D.rsi.healthy` | 0/10 | 8/10 | -80pp |
| `tech.1H.dist20.near` | 3/10 | 10/10 | -70pp |
| `tech.4H.rsi.healthy` | 0/10 | 7/10 | -70pp |
| `tech.1W.rsi.healthy` | 3/10 | 9/10 | -60pp |
| `tech.flag.bad_rr` | 2/10 | 8/10 | -60pp |
| `tech.1W.bull_ema` | 0/10 | 6/10 | -60pp |
| `tech.1H.rsi.healthy` | 0/10 | 6/10 | -60pp |
| `tech.1W.macd.bullish` | 2/10 | 7/10 | -50pp |
| `tech.1D.bull_ema` | 0/10 | 5/10 | -50pp |
| `tech.4H.bull_ema` | 0/10 | 5/10 | -50pp |
| `tech.score.mid` | 5/10 | 9/10 | -40pp |
| `tech.1H.near_support` | 6/10 | 10/10 | -40pp |
| `tech.1D.above_ema200` | 4/10 | 8/10 | -40pp |
| `tech.1H.vol.expanding` | 4/10 | 8/10 | -40pp |
| `tech.1D.dist20.near` | 2/10 | 6/10 | -40pp |
| `tech.1D.adx.trending` | 2/10 | 5/10 | -30pp |
| `tech.flag.momentum_decay` | 2/10 | 5/10 | -30pp |
| `tech.1W.adx.chop` | 2/10 | 5/10 | -30pp |
| `tech.4H.dist20.near` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1H.adx.trending`** — ADX>25 趋势中 (1H)
  - gainers 8/10 vs losers 4/10 (Δ=40pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 6/10 vs losers 3/10 (Δ=30pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 0/10 vs losers 8/10 (Δ=-80pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 2/10 vs losers 8/10 (Δ=-60pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 0/10 vs losers 6/10 (Δ=-60pp)
  - 当前 9 → **建议 7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 2/10 vs losers 7/10 (Δ=-50pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 0/10 vs losers 5/10 (Δ=-50pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`
- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 4/10 vs losers 8/10 (Δ=-40pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 2/10 vs losers 6/10 (Δ=-40pp)
  - 当前 5 → **建议 4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.rs.weak` — gainers 7/10 vs losers 1/10 (Δ=60pp)
- ↑ `tech.1H.rsi.oversold` — gainers 6/10 vs losers 0/10 (Δ=60pp)
- ↑ `tech.1D.near_support` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.4H.obv.down` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↑ `tech.1D.adx.chop` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.flag.resistance` — gainers 1/10 vs losers 9/10 (Δ=-80pp)
- ↓ `tech.1H.dist20.near` — gainers 3/10 vs losers 10/10 (Δ=-70pp)
- ↓ `tech.4H.rsi.healthy` — gainers 0/10 vs losers 7/10 (Δ=-70pp)
- ↓ `tech.1W.rsi.healthy` — gainers 3/10 vs losers 9/10 (Δ=-60pp)
- ↓ `tech.1H.rsi.healthy` — gainers 0/10 vs losers 6/10 (Δ=-60pp)
- ↓ `tech.4H.bull_ema` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.1H.near_support` — gainers 6/10 vs losers 10/10 (Δ=-40pp)
- ↓ `tech.1H.vol.expanding` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1D.adx.trending` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.flag.momentum_decay` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1W.adx.chop` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.4H.dist20.near` — gainers 3/10 vs losers 6/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/7/31 10:01:37_
