# 回归检核报告 · US — 2026-09-17

**对照快照:** `reports/2026-09-16` (2026-09-16)
**池子:** 41 只 (成功 41 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:BE** | NYSE:BE | **+4.11%** | 31 | 73 | Pullback Buy (Near Support) | chop |
| 2 | **NYSE:DELL** | NYSE:DELL | **+3.64%** | 42.6 | 61 | Trend Follow (HH/HL Intact) | chop |
| 3 | **NASDAQ:SMCI** | NASDAQ:SMCI | **+3.40%** | 27 | 56 | Breakout (Squeeze Release) | mom_decay/near_resist |
| 4 | **NASDAQ:PGY** | NASDAQ:PGY | **+2.85%** | 29.7 | 80 | Pullback Buy (Near Support) | mom_decay/chop |
| 5 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 6 | **NYSE:ASX** | NYSE:ASX | **+2.24%** | 43.9 | 42 | Pullback Buy (Near Support) | chop |
| 7 | **NASDAQ:AMD** | NASDAQ:AMD | **+1.65%** | 54 | 76 | Reversal (Bullish RSI Divergence) | near_resist/chop |
| 8 | **NYSE:JCI** | NYSE:JCI | **+1.58%** | 28.3 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 9 | **NYSE:PACS** | NYSE:PACS | **+1.50%** | 46.8 | 50 | Breakout (Squeeze Release) | near_resist |
| 10 | **NYSE:HPE** | NYSE:HPE | **+1.43%** | 30.7 | 82 | Trend Continuation | chop |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:AR** | NYSE:AR | **-8.11%** | 34.5 | 40 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 2 | **NYSE:SM** | NYSE:SM | **-7.58%** | 29.9 | 69 | Trend Follow (HH/HL Intact) | bull_trap/near_resist/bear_div |
| 3 | **NASDAQ:HOOD** | NASDAQ:HOOD | **-5.46%** | 40.2 | 54 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 4 | **NASDAQ:PRGS** | NASDAQ:PRGS | **-3.93%** | 49.4 | 41 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 5 | **NYSE:CF** | NYSE:CF | **-2.62%** | 37 | 53 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 6 | **NYSE:C** | NYSE:C | **-2.36%** | 32 | 67 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **NYSE:WPM** | NYSE:WPM | **-2.19%** | 19.3 | 66 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 8 | **NASDAQ:OSBC** | NASDAQ:OSBC | **-2.15%** | 46.7 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 9 | **NYSE:NEM** | NYSE:NEM | **-1.96%** | 31.7 | 67 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 10 | **NASDAQ:GEN** | NASDAQ:GEN | **-1.86%** | 1.8 | 50 | Trend Follow (HH/HL Intact) | fake_break/mom_decay/near_resist/chop/bear_div/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.macd.bullish` | 7/10 | 2/10 | +50pp |
| `tech.verdict.long` | 9/10 | 5/10 | +40pp |
| `tech.flag.chop` | 7/10 | 3/10 | +40pp |
| `tech.1D.adx.chop` | 7/10 | 3/10 | +40pp |
| `tech.1H.obv.down` | 6/10 | 2/10 | +40pp |
| `tech.1H.adx.trending` | 7/10 | 4/10 | +30pp |
| `tech.1W.adx.strong` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.bad_rr` | 1/10 | 8/10 | -70pp |
| `tech.1D.rsi.healthy` | 4/10 | 9/10 | -50pp |
| `tech.flag.momentum_decay` | 3/10 | 8/10 | -50pp |
| `tech.flag.resistance` | 5/10 | 10/10 | -50pp |
| `tech.4H.dist20.near` | 5/10 | 9/10 | -40pp |
| `tech.1W.macd.bullish` | 5/10 | 9/10 | -40pp |
| `tech.1D.dist20.near` | 3/10 | 7/10 | -40pp |
| `tech.verdict.strong_long` | 1/10 | 5/10 | -40pp |
| `tech.1W.adx.trending` | 3/10 | 6/10 | -30pp |
| `tech.1W.bull_ema` | 5/10 | 8/10 | -30pp |
| `tech.1D.adx.trending` | 3/10 | 6/10 | -30pp |
| `tech.1H.macd.bullish` | 4/10 | 7/10 | -30pp |
| `tech.1H.obv.up` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 7/10 vs losers 2/10 (Δ=50pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 7/10 vs losers 3/10 (Δ=40pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1H.adx.trending`** — ADX>25 趋势中 (1H)
  - gainers 7/10 vs losers 4/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 1/10 vs losers 8/10 (Δ=-70pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 4/10 vs losers 9/10 (Δ=-50pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 3/10 vs losers 7/10 (Δ=-40pp)
  - 当前 5 → **建议 4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 9 → **建议 7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.verdict.long` — gainers 9/10 vs losers 5/10 (Δ=40pp)
- ↑ `tech.1D.adx.chop` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1H.obv.down` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↓ `tech.flag.momentum_decay` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.flag.resistance` — gainers 5/10 vs losers 10/10 (Δ=-50pp)
- ↓ `tech.4H.dist20.near` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.verdict.strong_long` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1W.adx.trending` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1D.adx.trending` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.macd.bullish` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1H.obv.up` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/17 09:49:32_
