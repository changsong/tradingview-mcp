# 回归检核报告 · US — 2026-06-05

**对照快照:** `reports/2026-06-04` (2026-06-04)
**池子:** 79 只 (成功 67 / 失败 12)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:ENVA** | NYSE:ENVA | **+5.64%** | - | - | - | - |
| 2 | **NYSE:LLY** | NYSE:LLY | **+4.31%** | - | - | - | - |
| 3 | **NYSE:DOCN** | NYSE:DOCN | **+3.93%** | 22.4 | 62 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 4 | **OTC:SBGSY** | OTC:SBGSY | **+3.93%** | 26.8 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 5 | **NYSE:AIR** | NYSE:AIR | **+3.74%** | 37.1 | 56 | Trend Continuation | near_resist/chop/low_rr |
| 6 | **NASDAQ:ONDS** | NASDAQ:ONDS | **+3.74%** | 35 | 61 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 7 | **NASDAQ:AEHR** | NASDAQ:AEHR | **+3.74%** | 36.8 | 54 | Overextended Chase (High Risk) | overheated/bear_div |
| 8 | **NYSE:PFS** | NYSE:PFS | **+3.71%** | - | - | - | - |
| 9 | **OTC:HTHIY** | OTC:HTHIY | **+3.71%** | - | - | - | - |
| 10 | **NASDAQ:ORRF** | NASDAQ:ORRF | **+3.65%** | - | - | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:IREN** | NASDAQ:IREN | **-5.53%** | 26.9 | 95 | Trend Continuation | fake_break/near_resist/low_rr |
| 2 | **NASDAQ:CRWD** | NASDAQ:CRWD | **-3.81%** | - | - | - | - |
| 3 | **NYSE:IONQ** | NYSE:IONQ | **-3.77%** | - | - | - | - |
| 4 | **NASDAQ:AMD** | NASDAQ:AMD | **-3.56%** | 11.2 | 71 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist/bear_div |
| 5 | **NYSE:HPE** | NYSE:HPE | **-2.65%** | 39.8 | 93 | Overextended Chase (High Risk) | overheated/mom_decay |
| 6 | **NASDAQ:NVMI** | NASDAQ:NVMI | **-2.21%** | 36 | 50 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 7 | **NASDAQ:MPWR** | NASDAQ:MPWR | **-2.21%** | 9.6 | 52 | Trend Continuation | fake_break/mom_decay/near_resist/bear_div/low_rr |
| 8 | **NASDAQ:LRCX** | NASDAQ:LRCX | **-2.12%** | 23.2 | 69 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |
| 9 | **NASDAQ:ADI** | NASDAQ:ADI | **-2.04%** | 43.4 | 61 | Trend Continuation | mom_decay/near_resist |
| 10 | **NYSE:FCX** | NYSE:FCX | **-1.95%** | 27.3 | 65 | Trend Continuation | fake_break/near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

> 无显著共同特征 — 当日涨幅由特异性事件驱动,无法归纳统一权重调整。

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.overheat` | 3/10 | 8/10 | -50pp |
| `tech.1D.bull_ema` | 3/10 | 8/10 | -50pp |
| `tech.alignment.full` | 0/10 | 5/10 | -50pp |
| `tech.1H.bull_ema` | 0/10 | 5/10 | -50pp |
| `tech.flag.fake_breakout` | 1/10 | 5/10 | -40pp |
| `tech.4H.bull_ema` | 3/10 | 7/10 | -40pp |
| `tech.4H.macd.bullish` | 4/10 | 8/10 | -40pp |
| `news.top_news_type.Industry` | 4/10 | 8/10 | -40pp |
| `tech.1H.obv.up` | 2/10 | 6/10 | -40pp |
| `tech.flag.resistance` | 4/10 | 7/10 | -30pp |
| `tech.1W.adx.strong` | 3/10 | 6/10 | -30pp |
| `tech.1W.bull_ema` | 5/10 | 8/10 | -30pp |
| `tech.1W.above_ema200` | 5/10 | 8/10 | -30pp |
| `tech.1W.macd.bullish` | 4/10 | 7/10 | -30pp |
| `tech.1D.above_ema200` | 5/10 | 8/10 | -30pp |
| `tech.1D.obv.up` | 5/10 | 8/10 | -30pp |
| `tech.4H.above_ema200` | 5/10 | 8/10 | -30pp |
| `tech.4H.obv.up` | 4/10 | 7/10 | -30pp |
| `tech.1H.rsi.healthy` | 4/10 | 7/10 | -30pp |
| `tech.1H.above_ema200` | 5/10 | 8/10 | -30pp |
| `news.score.high` | 5/10 | 8/10 | -30pp |
| `tech.1H.macd.bullish` | 2/10 | 5/10 | -30pp |
| `tech.rs.strong` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 3/10 vs losers 8/10 (Δ=-50pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.flag.fake_breakout`** — 假突 (高位+低量)
  - gainers 1/10 vs losers 5/10 (Δ=-40pp)
  - 当前 -10 → **建议 -7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 9 → **建议 7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1W.above_ema200`** — 站上EMA200 (1W)
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↓ `tech.1W.dist20.overheat` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.alignment.full` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.1H.bull_ema` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.4H.bull_ema` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.4H.macd.bullish` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `news.top_news_type.Industry` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1H.obv.up` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.flag.resistance` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.4H.above_ema200` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.4H.obv.up` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1H.rsi.healthy` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1H.above_ema200` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `news.score.high` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.1H.macd.bullish` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.rs.strong` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/5 13:30:13_
