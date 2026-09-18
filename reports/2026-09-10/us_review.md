# 回归检核报告 · US — 2026-09-10

**对照快照:** `reports/2026-09-09` (2026-09-09)
**池子:** 75 只 (成功 74 / 失败 1)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:ASX** | NYSE:ASX | **+3.54%** | 43.7 | 62 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 2 | **NYSE:CF** | NYSE:CF | **+2.81%** | 41.5 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 3 | **NYSE:JCI** | NYSE:JCI | **+2.81%** | 31.3 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 4 | **NASDAQ:MU** | NASDAQ:MU | **+2.75%** | 53.3 | 74 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 5 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 6 | **NASDAQ:BGC** | NASDAQ:BGC | **+1.84%** | 31.2 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **NASDAQ:SNDK** | NASDAQ:SNDK | **+1.51%** | 34.1 | 76 | Trend Follow (HH/HL Intact) | chop/low_rr |
| 8 | **NYSE:LTC** | NYSE:LTC | **+1.29%** | 43.8 | 71 | Trend Follow (HH/HL Intact) | fake_break/near_resist/low_rr |
| 9 | **NYSE:BAP** | NYSE:BAP | **+1.29%** | 39.1 | 50 | Breakout (Squeeze Release) | near_resist/chop |
| 10 | **NYSE:NEM** | NYSE:NEM | **+1.27%** | 20.3 | 60 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:ELF** | NYSE:ELF | **-4.06%** | 38.9 | 66 | Pullback Buy (Near Support) | mom_decay/bear_div |
| 2 | **NYSE:MOD** | NYSE:MOD | **-3.32%** | 18.5 | 50 | Pullback Buy (Near Support) | near_resist |
| 3 | **NASDAQ:VSAT** | NASDAQ:VSAT | **-3.24%** | 33.6 | 54 | Trend Continuation | chop/low_rr |
| 4 | **NASDAQ:PRGS** | NASDAQ:PRGS | **-3.24%** | 41.2 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/low_rr |
| 5 | **NASDAQ:ADI** | NASDAQ:ADI | **-3.06%** | 38.7 | 70 | Pullback Buy (Near Support) | mom_decay |
| 6 | **NASDAQ:RELY** | NASDAQ:RELY | **-3.06%** | 17.3 | 71 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 7 | **NYSE:DTM** | NYSE:DTM | **-2.85%** | 21.8 | 50 | Pullback Buy (Near Support) | near_resist |
| 8 | **NYSE:AJG** | NYSE:AJG | **-2.85%** | 39.7 | 57 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 9 | **NASDAQ:FIVE** | NASDAQ:FIVE | **-2.74%** | 33.5 | 82 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 10 | **NASDAQ:LIN** | NASDAQ:LIN | **-2.29%** | 17.4 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.bull_ema` | 9/10 | 2/10 | +70pp |
| `tech.1D.rsi.healthy` | 8/10 | 3/10 | +50pp |
| `tech.1D.bull_ema` | 6/10 | 1/10 | +50pp |
| `tech.1D.macd.bullish` | 8/10 | 3/10 | +50pp |
| `tech.flag.chop` | 6/10 | 2/10 | +40pp |
| `tech.flag.bad_rr` | 8/10 | 4/10 | +40pp |
| `tech.1D.adx.chop` | 6/10 | 2/10 | +40pp |
| `tech.1D.obv.up` | 7/10 | 3/10 | +40pp |
| `tech.4H.bull_ema` | 5/10 | 1/10 | +40pp |
| `tech.rs.strong` | 5/10 | 1/10 | +40pp |
| `tech.verdict.long` | 9/10 | 6/10 | +30pp |
| `tech.1W.rsi.healthy` | 9/10 | 6/10 | +30pp |
| `tech.1D.above_ema200` | 10/10 | 7/10 | +30pp |
| `tech.4H.rsi.healthy` | 8/10 | 5/10 | +30pp |
| `tech.4H.adx.trending` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.momentum_decay` | 2/10 | 7/10 | -50pp |
| `tech.type.pullback` | 3/10 | 7/10 | -40pp |
| `tech.1D.obv.down` | 3/10 | 7/10 | -40pp |
| `tech.1D.near_support` | 5/10 | 8/10 | -30pp |
| `news.top_news_type.Industry` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 9/10 vs losers 2/10 (Δ=70pp)
  - 当前 9 → **建议 11** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 8/10 vs losers 3/10 (Δ=50pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`
- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 6/10 vs losers 1/10 (Δ=50pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 8/10 vs losers 3/10 (Δ=50pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 6/10 vs losers 2/10 (Δ=40pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 8/10 vs losers 4/10 (Δ=40pp)
  - 当前 -3 → **建议 -4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 7/10 vs losers 3/10 (Δ=40pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↑ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 10/10 vs losers 7/10 (Δ=30pp)
  - 当前 8 → **建议 10** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1D.adx.chop` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.4H.bull_ema` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.rs.strong` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.verdict.long` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↑ `tech.1W.rsi.healthy` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↑ `tech.4H.rsi.healthy` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.4H.adx.trending` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.flag.momentum_decay` — gainers 2/10 vs losers 7/10 (Δ=-50pp)
- ↓ `tech.type.pullback` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.1D.obv.down` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.1D.near_support` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `news.top_news_type.Industry` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/10 09:56:29_
