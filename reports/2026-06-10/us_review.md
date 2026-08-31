# 回归检核报告 · US — 2026-06-10

**对照快照:** `reports/2026-06-09` (2026-06-09)
**池子:** 53 只 (成功 53 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:IFS** | NYSE:IFS | **+11.43%** | - | - | - | - |
| 2 | **NYSE:BAP** | NYSE:BAP | **+9.29%** | - | - | - | - |
| 3 | **NYSE:SN** | NYSE:SN | **+8.62%** | - | - | - | - |
| 4 | **NYSE:APH** | NYSE:APH | **+7.29%** | - | - | - | - |
| 5 | **NYSE:CARR** | NYSE:CARR | **+5.78%** | 37.7 | 71 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 6 | **NASDAQ:CRDO** | NASDAQ:CRDO | **+5.42%** | 34.3 | 75 | Trend Continuation | mom_decay/low_rr |
| 7 | **NYSE:TRNO** | NYSE:TRNO | **+4.89%** | - | - | - | - |
| 8 | **NYSE:AIR** | NYSE:AIR | **+4.72%** | 36.6 | 53 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 9 | **NYSE:ENVA** | NYSE:ENVA | **+4.59%** | 26.3 | 60 | Trend Continuation | near_resist/chop/low_rr |
| 10 | **NASDAQ:SNEX** | NASDAQ:SNEX | **+3.74%** | - | - | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:MRVL** | NASDAQ:MRVL | **-7.61%** | 40.7 | 83 | Overextended Chase (High Risk) | overheated/low_rr |
| 2 | **NASDAQ:ARM** | NASDAQ:ARM | **-6.22%** | - | - | - | - |
| 3 | **NYSE:DELL** | NYSE:DELL | **-4.74%** | 28.3 | 67 | Overextended Chase (High Risk) | overheated/low_rr |
| 4 | **NASDAQ:RMBS** | NASDAQ:RMBS | **-3.41%** | 39.3 | 54 | Trend Follow (HH/HL Intact) | low_rr |
| 5 | **NASDAQ:ADEA** | NASDAQ:ADEA | **-3.23%** | 52.7 | 50 | Trend Continuation | low_rr |
| 6 | **NYSE:HPE** | NYSE:HPE | **-3.21%** | 31.4 | 89 | Overextended Chase (High Risk) | overheated/low_rr |
| 7 | **NASDAQ:AMD** | NASDAQ:AMD | **-3.02%** | 30.3 | 60 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 8 | **NASDAQ:TTMI** | NASDAQ:TTMI | **-2.53%** | 28.2 | 94 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 9 | **NASDAQ:FLEX** | NASDAQ:FLEX | **-2.40%** | 20 | 50 | Reversal (Bullish RSI Divergence) | mom_decay/bear_div/low_rr |
| 10 | **NASDAQ:PANW** | NASDAQ:PANW | **-2.18%** | 34.6 | 61 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

> 无显著共同特征 — 当日涨幅由特异性事件驱动,无法归纳统一权重调整。

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.overheat` | 1/10 | 9/10 | -80pp |
| `tech.1W.adx.strong` | 0/10 | 8/10 | -80pp |
| `tech.verdict.strong_long` | 1/10 | 8/10 | -70pp |
| `tech.1W.macd.bullish` | 3/10 | 9/10 | -60pp |
| `tech.1H.adx.trending` | 0/10 | 6/10 | -60pp |
| `tech.flag.bad_rr` | 4/10 | 9/10 | -50pp |
| `tech.1W.bull_ema` | 4/10 | 9/10 | -50pp |
| `tech.1W.above_ema200` | 4/10 | 9/10 | -50pp |
| `tech.1W.obv.up` | 4/10 | 9/10 | -50pp |
| `tech.1D.rsi.healthy` | 4/10 | 9/10 | -50pp |
| `tech.1D.above_ema200` | 4/10 | 9/10 | -50pp |
| `tech.4H.rsi.healthy` | 4/10 | 9/10 | -50pp |
| `tech.4H.above_ema200` | 4/10 | 9/10 | -50pp |
| `tech.1H.above_ema200` | 4/10 | 9/10 | -50pp |
| `tech.1H.dist20.near` | 4/10 | 9/10 | -50pp |
| `news.score.high` | 4/10 | 9/10 | -50pp |
| `tech.rs.strong` | 1/10 | 6/10 | -50pp |
| `tech.1D.adx.strong` | 1/10 | 6/10 | -50pp |
| `tech.score.mid` | 2/10 | 6/10 | -40pp |
| `tech.4H.obv.up` | 2/10 | 5/10 | -30pp |
| `tech.1H.obv.down` | 2/10 | 5/10 | -30pp |
| `tech.1H.near_support` | 4/10 | 7/10 | -30pp |
| `news.top_news_type.Industry` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 0/10 vs losers 8/10 (Δ=-80pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 3/10 vs losers 9/10 (Δ=-60pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1H.adx.trending`** — ADX>25 趋势中 (1H)
  - gainers 0/10 vs losers 6/10 (Δ=-60pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 4/10 vs losers 9/10 (Δ=-50pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 4/10 vs losers 9/10 (Δ=-50pp)
  - 当前 9 → **建议 7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1W.above_ema200`** — 站上EMA200 (1W)
  - gainers 4/10 vs losers 9/10 (Δ=-50pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 4/10 vs losers 9/10 (Δ=-50pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 4/10 vs losers 9/10 (Δ=-50pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`
- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 4/10 vs losers 9/10 (Δ=-50pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.adx.strong`** — ADX>30 强趋势 (1D)
  - gainers 1/10 vs losers 6/10 (Δ=-50pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 2/10 vs losers 6/10 (Δ=-40pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↓ `tech.1W.dist20.overheat` — gainers 1/10 vs losers 9/10 (Δ=-80pp)
- ↓ `tech.verdict.strong_long` — gainers 1/10 vs losers 8/10 (Δ=-70pp)
- ↓ `tech.4H.rsi.healthy` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.4H.above_ema200` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.1H.above_ema200` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.1H.dist20.near` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `news.score.high` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.rs.strong` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.4H.obv.up` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1H.obv.down` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1H.near_support` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `news.top_news_type.Industry` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/10 14:10:16_
