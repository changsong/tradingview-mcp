# 回归检核报告 · US — 2026-06-24

**对照快照:** `reports/2026-06-23` (2026-06-23)
**池子:** 90 只 (成功 90 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **BGC** | NASDAQ:BGC | **+3.97%** | 42.7 | 55 | Trend Continuation | bull_trap/near_resist |
| 2 | **SPNT** | NYSE:SPNT | **+3.73%** | 27.9 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 3 | **NYSE:AGM** | NYSE:AGM | **+3.45%** | - | - | - | - |
| 4 | **ENVA** | NYSE:ENVA | **+3.05%** | 15.1 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 5 | **AROC** | NYSE:AROC | **+2.57%** | 20.1 | 50 | Trend Continuation | fake_break/near_resist/chop/low_rr |
| 6 | **NYSE:QBTS** | NYSE:QBTS | **+2.29%** | - | - | - | - |
| 7 | **HG** | NYSE:HG | **+2.27%** | 24.1 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 8 | **OSBC** | NASDAQ:OSBC | **+2.22%** | 39.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 9 | **BHRB** | NASDAQ:BHRB | **+2.21%** | 41.5 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 10 | **DELL** | NYSE:DELL | **+2.17%** | 39.6 | 100 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **SNDK** | NASDAQ:SNDK | **-13.64%** | 8.8 | 53 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist/bear_div |
| 2 | **MU** | NASDAQ:MU | **-13.18%** | 29.2 | 86 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/bear_div |
| 3 | **ARM** | NASDAQ:ARM | **-10.14%** | 24.9 | 78 | Overextended Chase (High Risk) | overheated/bear_div/low_rr |
| 4 | **CRDO** | NASDAQ:CRDO | **-10.09%** | 23.4 | 52 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |
| 5 | **ALAB** | NASDAQ:ALAB | **-9.70%** | 13.5 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist/bear_div |
| 6 | **MRVL** | NASDAQ:MRVL | **-9.36%** | 30.5 | 99 | Overextended Chase (High Risk) | overheated/low_rr |
| 7 | **LRCX** | NASDAQ:LRCX | **-9.33%** | 20.5 | 80 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist/bear_div |
| 8 | **KLAC** | NASDAQ:KLAC | **-9.17%** | 24.8 | 96 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |
| 9 | **AMAT** | NASDAQ:AMAT | **-8.48%** | 22.2 | 92 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 10 | **WDC** | NASDAQ:WDC | **-8.45%** | 42.5 | 81 | Overextended Chase (High Risk) | overheated |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.rsi.healthy` | 6/10 | 0/10 | +60pp |
| `tech.flag.chop` | 5/10 | 0/10 | +50pp |
| `tech.1D.adx.chop` | 5/10 | 0/10 | +50pp |
| `news.signal.no_trade` | 7/10 | 3/10 | +40pp |
| `tech.flag.bad_rr` | 6/10 | 2/10 | +40pp |
| `tech.1D.rsi.healthy` | 7/10 | 4/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.overheat` | 1/10 | 10/10 | -90pp |
| `tech.1D.dist20.overheat` | 1/10 | 10/10 | -90pp |
| `tech.rs.strong` | 2/10 | 10/10 | -80pp |
| `tech.1W.dist20.overheat` | 2/10 | 10/10 | -80pp |
| `tech.1W.rsi.overheat` | 1/10 | 9/10 | -80pp |
| `tech.4H.adx.strong` | 1/10 | 8/10 | -70pp |
| `tech.4H.macd.bullish` | 2/10 | 9/10 | -70pp |
| `news.top_news_type.Analyst Action` | 0/10 | 7/10 | -70pp |
| `news.top_news_type.Industry` | 2/10 | 8/10 | -60pp |
| `tech.1W.adx.strong` | 3/10 | 9/10 | -60pp |
| `tech.1D.adx.strong` | 2/10 | 8/10 | -60pp |
| `tech.4H.above_ema200` | 4/10 | 10/10 | -60pp |
| `tech.4H.dist20.overheat` | 0/10 | 6/10 | -60pp |
| `tech.1W.macd.bullish` | 5/10 | 10/10 | -50pp |
| `tech.1H.rsi.healthy` | 4/10 | 9/10 | -50pp |
| `tech.1H.above_ema200` | 5/10 | 10/10 | -50pp |
| `tech.alignment.full` | 2/10 | 7/10 | -50pp |
| `tech.4H.bull_ema` | 4/10 | 9/10 | -50pp |
| `tech.4H.obv.up` | 4/10 | 9/10 | -50pp |
| `tech.1H.bull_ema` | 2/10 | 7/10 | -50pp |
| `tech.flag.bear_div` | 0/10 | 5/10 | -50pp |
| `tech.1D.divergence.bear` | 0/10 | 5/10 | -50pp |
| `tech.flag.bull_trap` | 2/10 | 6/10 | -40pp |
| `tech.1H.adx.strong` | 2/10 | 6/10 | -40pp |
| `tech.flag.fake_breakout` | 2/10 | 6/10 | -40pp |
| `tech.1H.macd.bullish` | 2/10 | 6/10 | -40pp |
| `tech.1D.bull_ema` | 6/10 | 9/10 | -30pp |
| `tech.1D.macd.bullish` | 7/10 | 10/10 | -30pp |
| `tech.1D.obv.up` | 7/10 | 10/10 | -30pp |
| `tech.score.mid` | 4/10 | 7/10 | -30pp |
| `tech.4H.rsi.healthy` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 5/10 vs losers 0/10 (Δ=50pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 6/10 vs losers 2/10 (Δ=40pp)
  - 当前 -3 → **建议 -4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 7/10 vs losers 4/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`
- ↓ **`tech.flag.overheat`** — 过热惩罚组合
  - gainers 1/10 vs losers 10/10 (Δ=-90pp)
  - 当前 -10 → **建议 -7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal)`
- ↓ **`tech.1W.rsi.overheat`** — RSI>80超买 (1W)
  - gainers 1/10 vs losers 9/10 (Δ=-80pp)
  - 当前 -12 → **建议 -9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:498`
- ↓ **`tech.4H.adx.strong`** — ADX>30 强趋势 (4H)
  - gainers 1/10 vs losers 8/10 (Δ=-70pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 3/10 vs losers 9/10 (Δ=-60pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1D.adx.strong`** — ADX>30 强趋势 (1D)
  - gainers 2/10 vs losers 8/10 (Δ=-60pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 5/10 vs losers 10/10 (Δ=-50pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.flag.bear_div`** — 看空背离
  - gainers 0/10 vs losers 5/10 (Δ=-50pp)
  - 当前 -6 → **建议 -4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.flag.bull_trap`** — 诱多 (高位+压力)
  - gainers 2/10 vs losers 6/10 (Δ=-40pp)
  - 当前 -12 → **建议 -9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.flag.fake_breakout`** — 假突 (高位+低量)
  - gainers 2/10 vs losers 6/10 (Δ=-40pp)
  - 当前 -10 → **建议 -7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.rsi.healthy` — gainers 6/10 vs losers 0/10 (Δ=60pp)
- ↑ `tech.1D.adx.chop` — gainers 5/10 vs losers 0/10 (Δ=50pp)
- ↑ `news.signal.no_trade` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↓ `tech.1D.dist20.overheat` — gainers 1/10 vs losers 10/10 (Δ=-90pp)
- ↓ `tech.rs.strong` — gainers 2/10 vs losers 10/10 (Δ=-80pp)
- ↓ `tech.1W.dist20.overheat` — gainers 2/10 vs losers 10/10 (Δ=-80pp)
- ↓ `tech.4H.macd.bullish` — gainers 2/10 vs losers 9/10 (Δ=-70pp)
- ↓ `news.top_news_type.Analyst Action` — gainers 0/10 vs losers 7/10 (Δ=-70pp)
- ↓ `news.top_news_type.Industry` — gainers 2/10 vs losers 8/10 (Δ=-60pp)
- ↓ `tech.4H.above_ema200` — gainers 4/10 vs losers 10/10 (Δ=-60pp)
- ↓ `tech.4H.dist20.overheat` — gainers 0/10 vs losers 6/10 (Δ=-60pp)
- ↓ `tech.1H.rsi.healthy` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.1H.above_ema200` — gainers 5/10 vs losers 10/10 (Δ=-50pp)
- ↓ `tech.alignment.full` — gainers 2/10 vs losers 7/10 (Δ=-50pp)
- ↓ `tech.4H.bull_ema` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.4H.obv.up` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.1H.bull_ema` — gainers 2/10 vs losers 7/10 (Δ=-50pp)
- ↓ `tech.1D.divergence.bear` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.1H.adx.strong` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.1H.macd.bullish` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.4H.rsi.healthy` — gainers 3/10 vs losers 6/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/24 11:43:14_
