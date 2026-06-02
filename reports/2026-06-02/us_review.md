# 回归检核报告 · US — 2026-06-02

**对照快照:** `reports/2026-05-29` (2026-05-29)
**池子:** 61 只 (成功 61 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:NBIS** | NASDAQ:NBIS | **+14.46%** | 17.3 | 94 | Overextended Chase (High Risk) | overheated/near_resist/low_rr |
| 2 | **NASDAQ:CRWV** | NASDAQ:CRWV | **+13.96%** | - | - | - | - |
| 3 | **NYSE:DOCN** | NYSE:DOCN | **+11.22%** | - | - | - | - |
| 4 | **NYSE:DELL** | NYSE:DELL | **+10.70%** | 17.6 | 99 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 5 | **NYSE:CLS** | NYSE:CLS | **+10.68%** | - | - | - | - |
| 6 | **NYSE:NOK** | NYSE:NOK | **+9.50%** | 49.1 | 86 | Trend Follow (HH/HL Intact) | - |
| 7 | **NYSE:HPE** | NYSE:HPE | **+9.20%** | 32.5 | 69 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 8 | **NASDAQ:CRML** | NASDAQ:CRML | **+8.66%** | - | - | - | - |
| 9 | **NASDAQ:ADEA** | NASDAQ:ADEA | **+7.07%** | 22 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 10 | **NASDAQ:MRVL** | NASDAQ:MRVL | **+7.04%** | 54.6 | 94 | Overextended Chase (High Risk) | overheated |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:DKS** | NYSE:DKS | **-4.66%** | 45 | 58 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 2 | **NASDAQ:CRDO** | NASDAQ:CRDO | **-4.21%** | 44.3 | 86 | Overextended Chase (High Risk) | overheated |
| 3 | **NYSE:QBTS** | NYSE:QBTS | **-3.19%** | 43.8 | 75 | Overextended Chase (High Risk) | overheated/low_rr |
| 4 | **NYSE:GNRC** | NYSE:GNRC | **-3.11%** | 30.6 | 53 | Trend Continuation | fake_break/near_resist/bear_div |
| 5 | **NASDAQ:TLN** | NASDAQ:TLN | **-2.48%** | 33.4 | 48 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 6 | **NASDAQ:AAPL** | NASDAQ:AAPL | **-1.84%** | - | - | - | - |
| 7 | **NASDAQ:FLEX** | NASDAQ:FLEX | **-1.84%** | -6.1 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist/bear_div/low_rr |
| 8 | **NYSE:CIEN** | NYSE:CIEN | **-1.83%** | 15.1 | 50 | Breakout (Squeeze Release) | mom_decay/bear_div/low_rr |
| 9 | **NYSE:IRM** | NYSE:IRM | **-1.46%** | 33.1 | 54 | Pullback Buy (Near Support) | mom_decay/bear_div |
| 10 | **NASDAQ:NWBI** | NASDAQ:NWBI | **-1.27%** | 32.9 | 50 | Trend Continuation | near_resist/bear_div/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.adx.strong` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.rsi.healthy` | 3/10 | 9/10 | -60pp |
| `tech.4H.rsi.healthy` | 3/10 | 9/10 | -60pp |
| `news.signal.no_trade` | 1/10 | 7/10 | -60pp |
| `tech.flag.bad_rr` | 1/10 | 6/10 | -50pp |
| `tech.1W.rsi.healthy` | 1/10 | 6/10 | -50pp |
| `tech.flag.bear_div` | 0/10 | 5/10 | -50pp |
| `tech.1D.divergence.bear` | 0/10 | 5/10 | -50pp |
| `tech.1W.bull_ema` | 5/10 | 9/10 | -40pp |
| `tech.1H.near_support` | 3/10 | 7/10 | -40pp |
| `news.top_news_type.Industry` | 3/10 | 7/10 | -40pp |
| `tech.verdict.long` | 3/10 | 6/10 | -30pp |
| `tech.1W.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.1W.macd.bullish` | 6/10 | 9/10 | -30pp |
| `tech.1D.bull_ema` | 4/10 | 7/10 | -30pp |
| `tech.1D.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.1D.obv.up` | 4/10 | 7/10 | -30pp |
| `tech.4H.bull_ema` | 4/10 | 7/10 | -30pp |
| `tech.4H.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.1H.rsi.healthy` | 4/10 | 7/10 | -30pp |
| `tech.1H.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.1H.obv.down` | 5/10 | 8/10 | -30pp |
| `news.score.high` | 6/10 | 9/10 | -30pp |
| `tech.4H.obv.up` | 3/10 | 6/10 | -30pp |
| `tech.1H.dist20.near` | 5/10 | 8/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 3/10 vs losers 9/10 (Δ=-60pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 1/10 vs losers 6/10 (Δ=-50pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.flag.bear_div`** — 看空背离
  - gainers 0/10 vs losers 5/10 (Δ=-50pp)
  - 当前 -6 → **建议 -4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 9 → **建议 7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1W.above_ema200`** — 站上EMA200 (1W)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↓ `tech.4H.rsi.healthy` — gainers 3/10 vs losers 9/10 (Δ=-60pp)
- ↓ `news.signal.no_trade` — gainers 1/10 vs losers 7/10 (Δ=-60pp)
- ↓ `tech.1W.rsi.healthy` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1D.divergence.bear` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.1H.near_support` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `news.top_news_type.Industry` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.verdict.long` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.4H.bull_ema` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.4H.above_ema200` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1H.rsi.healthy` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1H.above_ema200` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1H.obv.down` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `news.score.high` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.4H.obv.up` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.dist20.near` — gainers 5/10 vs losers 8/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/2 11:55:37_
