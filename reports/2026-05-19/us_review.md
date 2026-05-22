# 回归检核报告 · US — 2026-05-19

**对照快照:** `reports/2026-05-16` (2026-05-16)
**池子:** 73 只 (成功 73 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:RKLB** | NASDAQ:RKLB | **+5.12%** | 41.4 | 95 | Overextended Chase (High Risk) | overheated |
| 2 | **NYSE:SPNT** | NYSE:SPNT | **+3.92%** | 48.3 | 56 | Breakout (Squeeze Release) | mom_decay/near_resist/chop |
| 3 | **NASDAQ:GEN** | NASDAQ:GEN | **+3.80%** | 45.9 | 50 | Trend Follow (HH/HL Intact) | low_rr |
| 4 | **NYSE:AROC** | NYSE:AROC | **+3.18%** | 40.7 | 54 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 5 | **NASDAQ:VSAT** | NASDAQ:VSAT | **+2.91%** | 54.5 | 50 | Trend Follow (HH/HL Intact) | - |
| 6 | **NASDAQ:ERIC** | NASDAQ:ERIC | **+2.72%** | - | - | - | - |
| 7 | **NASDAQ:PRDO** | NASDAQ:PRDO | **+1.94%** | 23.4 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 8 | **NASDAQ:OSBC** | NASDAQ:OSBC | **+1.91%** | 34.2 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 9 | **NASDAQ:BGC** | NASDAQ:BGC | **+1.79%** | 41 | 81 | Breakout (Squeeze Release) | mom_decay/near_resist/bear_div |
| 10 | **NYSE:SM** | NYSE:SM | **+1.78%** | 14.7 | 61 | Trend Continuation | fake_break/near_resist/chop/bear_div/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:CRDO** | NASDAQ:CRDO | **-9.24%** | 14.3 | 60 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 2 | **NYSE:MOD** | NYSE:MOD | **-8.90%** | 31.1 | 48 | Trend Continuation | low_rr |
| 3 | **NASDAQ:POWL** | NASDAQ:POWL | **-8.83%** | 27.5 | 70 | Trend Follow (HH/HL Intact) | mom_decay/bear_div/low_rr |
| 4 | **NASDAQ:LITE** | NASDAQ:LITE | **-8.83%** | 32 | 73 | Trend Follow (HH/HL Intact) | low_rr |
| 5 | **NYSE:VRT** | NYSE:VRT | **-8.41%** | 32.9 | 82 | Trend Continuation | fake_break/near_resist |
| 6 | **NASDAQ:ADEA** | NASDAQ:ADEA | **-8.30%** | 30.4 | 66 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 7 | **NASDAQ:APLD** | NASDAQ:APLD | **-8.04%** | 40.6 | 65 | Trend Follow (HH/HL Intact) | - |
| 8 | **NYSE:MTZ** | NYSE:MTZ | **-7.07%** | 50.9 | 74 | Pullback Buy (Near Support) | mom_decay |
| 9 | **NYSE:GLW** | NYSE:GLW | **-6.91%** | 36.2 | 60 | Trend Continuation | - |
| 10 | **NYSE:PWR** | NYSE:PWR | **-6.10%** | 30.4 | 78 | Trend Follow (HH/HL Intact) | fake_break/near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `news.signal.no_trade` | 6/10 | 1/10 | +50pp |
| `tech.1W.rsi.healthy` | 7/10 | 3/10 | +40pp |
| `tech.4H.adx.chop` | 5/10 | 1/10 | +40pp |
| `tech.score.high` | 6/10 | 3/10 | +30pp |
| `tech.1H.rsi.healthy` | 5/10 | 2/10 | +30pp |
| `tech.1D.near_support` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.overheat` | 3/10 | 10/10 | -70pp |
| `tech.1W.bull_ema` | 5/10 | 10/10 | -50pp |
| `tech.1D.adx.strong` | 2/10 | 7/10 | -50pp |
| `tech.4H.rsi.healthy` | 4/10 | 8/10 | -40pp |
| `news.top_news_type.Earnings` | 4/10 | 8/10 | -40pp |
| `tech.score.mid` | 2/10 | 6/10 | -40pp |
| `tech.1W.rsi.overheat` | 2/10 | 5/10 | -30pp |
| `tech.1W.adx.strong` | 4/10 | 7/10 | -30pp |
| `tech.1W.macd.bullish` | 7/10 | 10/10 | -30pp |
| `tech.1D.rsi.healthy` | 7/10 | 10/10 | -30pp |
| `news.top_news_type.Industry` | 6/10 | 9/10 | -30pp |
| `tech.1H.adx.trending` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 5/10 vs losers 10/10 (Δ=-50pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1D.adx.strong`** — ADX>30 强趋势 (1D)
  - gainers 2/10 vs losers 7/10 (Δ=-50pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 2/10 vs losers 6/10 (Δ=-40pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `news.signal.no_trade` — gainers 6/10 vs losers 1/10 (Δ=50pp)
- ↑ `tech.1W.rsi.healthy` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.4H.adx.chop` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.score.high` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.1H.rsi.healthy` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.1D.near_support` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.1W.dist20.overheat` — gainers 3/10 vs losers 10/10 (Δ=-70pp)
- ↓ `tech.4H.rsi.healthy` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `news.top_news_type.Earnings` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1W.rsi.overheat` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `news.top_news_type.Industry` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1H.adx.trending` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/19 21:25:11_
