# 回归检核报告 · US — 2026-08-25

**对照快照:** `reports/2026-08-24` (2026-08-24)
**池子:** 30 只 (成功 30 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **DASH** | NASDAQ:DASH | **+2.49%** | 53.3 | 57 | Pullback Buy (Near Support) | bear_div |
| 2 | **CET** | AMEX:CET | **+2.36%** | 37.9 | 50 | Reversal (Bullish RSI Divergence) | mom_decay/near_resist/low_rr |
| 3 | **MNST** | NASDAQ:MNST | **+2.36%** | - | 50 | - | - |
| 4 | **JOE** | NYSE:JOE | **+1.70%** | - | 50 | - | - |
| 5 | **WPM** | NYSE:WPM | **+1.53%** | - | 50 | - | - |
| 6 | **FCX** | NYSE:FCX | **+1.49%** | - | 50 | - | - |
| 7 | **WT** | NYSE:WT | **+1.40%** | 40.9 | 55 | Trend Follow (HH/HL Intact) | fake_break/near_resist/bear_div |
| 8 | **PATH** | NYSE:PATH | **+1.10%** | 25.5 | 50 | Pullback Buy (Near Support) | fake_break/near_resist/low_rr |
| 9 | **HRMY** | NASDAQ:HRMY | **+0.92%** | 21.8 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 10 | **RRC** | NYSE:RRC | **+0.46%** | - | 50 | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **P** | NYSE:P | **-7.47%** | 37.7 | 50 | Trend Follow (HH/HL Intact) | low_rr |
| 2 | **HOOD** | NASDAQ:HOOD | **-4.17%** | 42 | 52 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 3 | **NBIS** | NASDAQ:NBIS | **-3.75%** | 22.2 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 4 | **GRAL** | NASDAQ:GRAL | **-3.72%** | 41.3 | 50 | Trend Follow (HH/HL Intact) | chop/bear_div |
| 5 | **SON** | NYSE:SON | **-3.35%** | 22.3 | 54 | Trend Continuation | mom_decay/near_resist/chop/low_rr |
| 6 | **MRVL** | NASDAQ:MRVL | **-3.27%** | 44.6 | 50 | Trend Follow (HH/HL Intact) | chop |
| 7 | **OTC:ABBNY** | OTC:ABBNY | **-3.15%** | 25 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 8 | **LOAR** | NYSE:LOAR | **-3.04%** | 39.5 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 9 | **VKTX** | NASDAQ:VKTX | **-1.95%** | 34.4 | 50 | Pullback Buy (Near Support) | near_resist/chop |
| 10 | **GRMN** | NYSE:GRMN | **-1.22%** | - | 50 | - | - |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

> 无显著共同特征 — 当日涨幅由特异性事件驱动,无法归纳统一权重调整。

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.chop` | 0/10 | 7/10 | -70pp |
| `tech.1D.adx.chop` | 0/10 | 7/10 | -70pp |
| `tech.1W.rsi.healthy` | 4/10 | 9/10 | -50pp |
| `tech.1D.macd.bullish` | 3/10 | 8/10 | -50pp |
| `tech.1H.obv.up` | 3/10 | 8/10 | -50pp |
| `tech.4H.macd.bullish` | 0/10 | 5/10 | -50pp |
| `tech.1W.above_ema200` | 5/10 | 9/10 | -40pp |
| `tech.1W.obv.up` | 4/10 | 8/10 | -40pp |
| `tech.1D.above_ema200` | 5/10 | 9/10 | -40pp |
| `tech.4H.above_ema200` | 5/10 | 9/10 | -40pp |
| `tech.4H.obv.up` | 3/10 | 7/10 | -40pp |
| `tech.1H.above_ema200` | 5/10 | 9/10 | -40pp |
| `tech.verdict.long` | 4/10 | 7/10 | -30pp |
| `tech.4H.rsi.healthy` | 3/10 | 6/10 | -30pp |
| `tech.1H.near_support` | 4/10 | 7/10 | -30pp |
| `tech.flag.bad_rr` | 3/10 | 6/10 | -30pp |
| `tech.1W.adx.chop` | 2/10 | 5/10 | -30pp |
| `tech.4H.dist20.near` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.flag.chop`** — 震荡市
  - gainers 0/10 vs losers 7/10 (Δ=-70pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 3/10 vs losers 8/10 (Δ=-50pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1W.above_ema200`** — 站上EMA200 (1W)
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 4/10 vs losers 8/10 (Δ=-40pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↓ `tech.1D.adx.chop` — gainers 0/10 vs losers 7/10 (Δ=-70pp)
- ↓ `tech.1W.rsi.healthy` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.1H.obv.up` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.4H.macd.bullish` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.4H.above_ema200` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.4H.obv.up` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.1H.above_ema200` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.verdict.long` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.4H.rsi.healthy` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.near_support` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1W.adx.chop` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.4H.dist20.near` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/8/25 09:50:17_
