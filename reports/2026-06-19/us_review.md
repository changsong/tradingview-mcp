# 回归检核报告 · US — 2026-06-18

**对照快照:** `reports/2026-06-17` (2026-06-17)
**池子:** 76 只 (成功 76 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:AEHR** | NASDAQ:AEHR | **+7.43%** | - | - | - | - |
| 2 | **GEV** | NYSE:GEV | **+6.77%** | 50.7 | 58 | Reversal (MACD Cross) | near_resist/chop |
| 3 | **BAP** | NYSE:BAP | **+6.22%** | 29.8 | 35 | Trend Continuation | near_resist/chop/low_rr |
| 4 | **NYSE:VRT** | NYSE:VRT | **+6.00%** | - | - | - | - |
| 5 | **NBIS** | NASDAQ:NBIS | **+5.96%** | 34.6 | 50 | Overextended Chase (High Risk) | overheated/mom_decay/low_rr |
| 6 | **ARM** | NASDAQ:ARM | **+5.69%** | 41.9 | 86 | Overextended Chase (High Risk) | overheated/mom_decay/low_rr |
| 7 | **KRYS** | NASDAQ:KRYS | **+5.66%** | 52.4 | 50 | Trend Continuation | near_resist |
| 8 | **WDC** | NASDAQ:WDC | **+4.56%** | 36.8 | 53 | Overextended Chase (High Risk) | overheated/bear_div |
| 9 | **AMAT** | NASDAQ:AMAT | **+4.35%** | 47.4 | 82 | Overextended Chase (High Risk) | overheated |
| 10 | **CRDO** | NASDAQ:CRDO | **+4.24%** | 25 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **SXI** | NYSE:SXI | **-4.21%** | 47.8 | 50 | Trend Continuation | near_resist |
| 2 | **ADAM** | NASDAQ:ADAM | **-3.53%** | 61.6 | 50 | Trend Follow (HH/HL Intact) | near_resist |
| 3 | **NBN** | NASDAQ:NBN | **-2.54%** | 49.2 | 50 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 4 | **FOR** | NYSE:FOR | **-2.07%** | 17.3 | 50 | Trend Continuation | near_resist/bear_div/low_rr |
| 5 | **SN** | NYSE:SN | **-2.00%** | 21.1 | 56 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 6 | **BHRB** | NASDAQ:BHRB | **-1.97%** | 30.8 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 7 | **NWBI** | NASDAQ:NWBI | **-1.85%** | 54.8 | 50 | Trend Continuation | near_resist |
| 8 | **OSBC** | NASDAQ:OSBC | **-1.81%** | 27.6 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 9 | **ORRF** | NASDAQ:ORRF | **-1.76%** | 34.5 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 10 | **CRWV** | NASDAQ:CRWV | **-1.56%** | 21.5 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.adx.strong` | 6/10 | 0/10 | +60pp |
| `tech.1H.obv.down` | 6/10 | 3/10 | +30pp |
| `tech.1W.dist20.overheat` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.adx.chop` | 0/10 | 7/10 | -70pp |
| `tech.flag.resistance` | 4/10 | 10/10 | -60pp |
| `tech.1W.rsi.healthy` | 4/10 | 10/10 | -60pp |
| `tech.1H.obv.up` | 2/10 | 7/10 | -50pp |
| `tech.4H.dist20.near` | 2/10 | 7/10 | -50pp |
| `tech.1D.macd.bullish` | 6/10 | 10/10 | -40pp |
| `tech.1H.dist20.near` | 5/10 | 9/10 | -40pp |
| `tech.1H.near_support` | 5/10 | 9/10 | -40pp |
| `news.signal.no_trade` | 6/10 | 10/10 | -40pp |
| `tech.4H.bull_ema` | 4/10 | 8/10 | -40pp |
| `tech.verdict.long` | 4/10 | 7/10 | -30pp |
| `tech.flag.chop` | 2/10 | 5/10 | -30pp |
| `tech.1D.rsi.healthy` | 7/10 | 10/10 | -30pp |
| `tech.1D.adx.chop` | 2/10 | 5/10 | -30pp |
| `tech.score.mid` | 3/10 | 6/10 | -30pp |
| `tech.1W.macd.bullish` | 7/10 | 10/10 | -30pp |
| `tech.1D.bull_ema` | 6/10 | 9/10 | -30pp |
| `tech.4H.obv.down` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 6/10 vs losers 0/10 (Δ=60pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 6/10 vs losers 10/10 (Δ=-40pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.flag.chop`** — 震荡市
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`
- ↓ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.obv.down` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.1W.dist20.overheat` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.1W.adx.chop` — gainers 0/10 vs losers 7/10 (Δ=-70pp)
- ↓ `tech.flag.resistance` — gainers 4/10 vs losers 10/10 (Δ=-60pp)
- ↓ `tech.1W.rsi.healthy` — gainers 4/10 vs losers 10/10 (Δ=-60pp)
- ↓ `tech.1H.obv.up` — gainers 2/10 vs losers 7/10 (Δ=-50pp)
- ↓ `tech.4H.dist20.near` — gainers 2/10 vs losers 7/10 (Δ=-50pp)
- ↓ `tech.1H.dist20.near` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.1H.near_support` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `news.signal.no_trade` — gainers 6/10 vs losers 10/10 (Δ=-40pp)
- ↓ `tech.4H.bull_ema` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.verdict.long` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1D.adx.chop` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.4H.obv.down` — gainers 3/10 vs losers 6/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/18 10:00:54_
