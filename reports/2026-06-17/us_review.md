# 回归检核报告 · US — 2026-06-17

**对照快照:** `reports/2026-06-16` (2026-06-16)
**池子:** 79 只 (成功 79 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:CRWV** | NASDAQ:CRWV | **+9.67%** | - | - | - | - |
| 2 | **TLN** | NASDAQ:TLN | **+5.26%** | 28.7 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 3 | **WWD** | NASDAQ:WWD | **+4.73%** | 44.6 | 50 | Trend Continuation | near_resist/low_rr |
| 4 | **WDC** | NASDAQ:WDC | **+4.22%** | 11.4 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 5 | **NASDAQ:RELY** | NASDAQ:RELY | **+3.72%** | - | - | - | - |
| 6 | **NYSE:DLR** | NYSE:DLR | **+3.00%** | - | - | - | - |
| 7 | **EQIX** | NASDAQ:EQIX | **+2.85%** | 56 | 63 | Breakout (Squeeze Release) | mom_decay/near_resist/chop |
| 8 | **GE** | NYSE:GE | **+2.77%** | 0 | 73 | - | - |
| 9 | **OTC:SBGSY** | OTC:SBGSY | **+2.69%** | - | - | - | - |
| 10 | **DKS** | NYSE:DKS | **+2.66%** | 40.8 | 54 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **MRVL** | NASDAQ:MRVL | **-9.78%** | 36.2 | 50 | Overextended Chase (High Risk) | overheated/low_rr |
| 2 | **NVMI** | NASDAQ:NVMI | **-9.07%** | 36.6 | 50 | Reversal (Bullish RSI Divergence) | overheated/near_resist/chop |
| 3 | **INTC** | NASDAQ:INTC | **-8.45%** | 10.5 | 83 | Overextended Chase (High Risk) | overheated/fake_break/mom_decay/near_resist/low_rr |
| 4 | **CRDO** | NASDAQ:CRDO | **-7.80%** | 50.3 | 50 | Overextended Chase (High Risk) | overheated |
| 5 | **KLAC** | NASDAQ:KLAC | **-7.44%** | 50.7 | 48 | Overextended Chase (High Risk) | overheated/mom_decay |
| 6 | **AMD** | NASDAQ:AMD | **-7.30%** | 23.5 | 86 | Overextended Chase (High Risk) | overheated/fake_break/mom_decay/near_resist |
| 7 | **ALAB** | NASDAQ:ALAB | **-7.06%** | 25.6 | 52 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/bear_div |
| 8 | **MU** | NASDAQ:MU | **-6.18%** | 10.2 | 56 | Reversal (Bullish RSI Divergence) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 9 | **LRCX** | NASDAQ:LRCX | **-5.03%** | 25.7 | 73 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist |
| 10 | **ASML** | NASDAQ:ASML | **-4.69%** | 49 | 70 | Trend Follow (HH/HL Intact) | near_resist/bear_div |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.vol.expanding` | 5/10 | 1/10 | +40pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.overheat` | 1/10 | 10/10 | -90pp |
| `tech.flag.overheat` | 1/10 | 9/10 | -80pp |
| `tech.1D.dist20.overheat` | 1/10 | 9/10 | -80pp |
| `tech.rs.strong` | 3/10 | 10/10 | -70pp |
| `tech.1W.bull_ema` | 4/10 | 10/10 | -60pp |
| `tech.1W.macd.bullish` | 4/10 | 10/10 | -60pp |
| `tech.1D.bull_ema` | 4/10 | 10/10 | -60pp |
| `tech.1D.obv.up` | 4/10 | 10/10 | -60pp |
| `tech.4H.bull_ema` | 4/10 | 10/10 | -60pp |
| `tech.1W.adx.strong` | 3/10 | 9/10 | -60pp |
| `tech.1W.obv.up` | 3/10 | 9/10 | -60pp |
| `tech.1D.macd.bullish` | 2/10 | 8/10 | -60pp |
| `tech.1W.rsi.overheat` | 1/10 | 7/10 | -60pp |
| `tech.alignment.full` | 3/10 | 8/10 | -50pp |
| `tech.1D.above_ema200` | 5/10 | 10/10 | -50pp |
| `tech.4H.obv.up` | 5/10 | 10/10 | -50pp |
| `tech.1D.adx.strong` | 1/10 | 6/10 | -50pp |
| `tech.1W.above_ema200` | 6/10 | 10/10 | -40pp |
| `tech.4H.rsi.healthy` | 5/10 | 9/10 | -40pp |
| `tech.4H.adx.trending` | 2/10 | 6/10 | -40pp |
| `tech.4H.above_ema200` | 6/10 | 10/10 | -40pp |
| `tech.1H.adx.strong` | 3/10 | 7/10 | -40pp |
| `tech.1H.bull_ema` | 4/10 | 8/10 | -40pp |
| `tech.1H.obv.up` | 4/10 | 8/10 | -40pp |
| `news.score.high` | 6/10 | 10/10 | -40pp |
| `tech.4H.dist20.overheat` | 1/10 | 5/10 | -40pp |
| `news.top_news_type.Industry` | 3/10 | 7/10 | -40pp |
| `tech.verdict.long` | 4/10 | 7/10 | -30pp |
| `tech.1D.rsi.healthy` | 4/10 | 7/10 | -30pp |
| `tech.1H.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.1H.rsi.healthy` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.flag.overheat`** — 过热惩罚组合
  - gainers 1/10 vs losers 9/10 (Δ=-80pp)
  - 当前 -10 → **建议 -7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal)`
- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 4/10 vs losers 10/10 (Δ=-60pp)
  - 当前 9 → **建议 7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 4/10 vs losers 10/10 (Δ=-60pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 4/10 vs losers 10/10 (Δ=-60pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 4/10 vs losers 10/10 (Δ=-60pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 3/10 vs losers 9/10 (Δ=-60pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 3/10 vs losers 9/10 (Δ=-60pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 2/10 vs losers 8/10 (Δ=-60pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1W.rsi.overheat`** — RSI>80超买 (1W)
  - gainers 1/10 vs losers 7/10 (Δ=-60pp)
  - 当前 -12 → **建议 -9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:498`
- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 5/10 vs losers 10/10 (Δ=-50pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.adx.strong`** — ADX>30 强趋势 (1D)
  - gainers 1/10 vs losers 6/10 (Δ=-50pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.above_ema200`** — 站上EMA200 (1W)
  - gainers 6/10 vs losers 10/10 (Δ=-40pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.vol.expanding` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↓ `tech.1W.dist20.overheat` — gainers 1/10 vs losers 10/10 (Δ=-90pp)
- ↓ `tech.1D.dist20.overheat` — gainers 1/10 vs losers 9/10 (Δ=-80pp)
- ↓ `tech.rs.strong` — gainers 3/10 vs losers 10/10 (Δ=-70pp)
- ↓ `tech.4H.bull_ema` — gainers 4/10 vs losers 10/10 (Δ=-60pp)
- ↓ `tech.alignment.full` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.4H.obv.up` — gainers 5/10 vs losers 10/10 (Δ=-50pp)
- ↓ `tech.4H.rsi.healthy` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.4H.adx.trending` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.4H.above_ema200` — gainers 6/10 vs losers 10/10 (Δ=-40pp)
- ↓ `tech.1H.adx.strong` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.1H.bull_ema` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1H.obv.up` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `news.score.high` — gainers 6/10 vs losers 10/10 (Δ=-40pp)
- ↓ `tech.4H.dist20.overheat` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `news.top_news_type.Industry` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.verdict.long` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1H.above_ema200` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1H.rsi.healthy` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/17 11:58:40_
