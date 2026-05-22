# 回归检核报告 · US — 2026-05-22

**对照快照:** `reports/2026-05-21` (2026-05-21)
**池子:** 62 只 (成功 62 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:APLD** | NASDAQ:APLD | **+21.51%** | 20.5 | 64 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 2 | **NASDAQ:SEDG** | NASDAQ:SEDG | **+12.06%** | - | - | - | - |
| 3 | **NYSE:ENS** | NYSE:ENS | **+11.35%** | - | - | - | - |
| 4 | **NASDAQ:IREN** | NASDAQ:IREN | **+10.15%** | 33.6 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 5 | **NYSE:BE** | NYSE:BE | **+9.06%** | - | - | - | - |
| 6 | **NASDAQ:CORZ** | NASDAQ:CORZ | **+7.08%** | 9 | 53 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/bear_div/low_rr |
| 7 | **NYSE:GLW** | NYSE:GLW | **+6.20%** | 26.1 | 94 | Trend Continuation | mom_decay/bear_div/low_rr |
| 8 | **NYSE:FN** | NYSE:FN | **+6.20%** | 23.8 | 64 | Breakout (Squeeze Release) | mom_decay/chop/bear_div |
| 9 | **NASDAQ:RMBS** | NASDAQ:RMBS | **+6.18%** | 13.9 | 55 | Range / No Edge | near_resist/low_rr |
| 10 | **NYSE:CIEN** | NYSE:CIEN | **+5.85%** | 33.5 | 95 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:RKLB** | NASDAQ:RKLB | **-6.58%** | 30.8 | 50 | Overextended Chase (High Risk) | overheated/fake_break/near_resist |
| 2 | **NASDAQ:VSAT** | NASDAQ:VSAT | **-5.99%** | 54.4 | 50 | Trend Follow (HH/HL Intact) | near_resist/bear_div |
| 3 | **NYSE:SM** | NYSE:SM | **-4.48%** | 36.7 | 78 | Trend Continuation | near_resist/chop/bear_div |
| 4 | **CBOE:CBOE** | CBOE:CBOE | **-2.49%** | 47.4 | 72 | Trend Follow (HH/HL Intact) | near_resist |
| 5 | **NASDAQ:NVDA** | NASDAQ:NVDA | **-1.77%** | 47.7 | 79 | Trend Continuation | low_rr |
| 6 | **NYSE:HG** | NYSE:HG | **-1.64%** | 33.3 | 50 | Trend Continuation | chop/low_rr |
| 7 | **NYSE:AROC** | NYSE:AROC | **-1.05%** | 25.9 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/bear_div/low_rr |
| 8 | **NYSE:LTC** | NYSE:LTC | **-0.92%** | 70.1 | 50 | Breakout (Squeeze Release) | near_resist/chop |
| 9 | **NASDAQ:BGC** | NASDAQ:BGC | **-0.89%** | 24.9 | 55 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/bear_div/low_rr |
| 10 | **NASDAQ:AVGO** | NASDAQ:AVGO | **-0.76%** | 26.1 | 98 | Breakout (Squeeze Release) | mom_decay/near_resist/bear_div/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.adx.trending` | 5/10 | 1/10 | +40pp |
| `tech.flag.momentum_decay` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.macd.bullish` | 0/10 | 7/10 | -70pp |
| `tech.score.high` | 0/10 | 5/10 | -50pp |
| `tech.4H.macd.bullish` | 0/10 | 5/10 | -50pp |
| `tech.verdict.long` | 4/10 | 8/10 | -40pp |
| `tech.flag.resistance` | 4/10 | 8/10 | -40pp |
| `tech.1W.bull_ema` | 6/10 | 10/10 | -40pp |
| `tech.1H.rsi.healthy` | 2/10 | 6/10 | -40pp |
| `tech.1D.adx.chop` | 1/10 | 5/10 | -40pp |
| `tech.4H.bull_ema` | 1/10 | 5/10 | -40pp |
| `tech.1H.vol.expanding` | 1/10 | 5/10 | -40pp |
| `tech.1W.rsi.healthy` | 6/10 | 9/10 | -30pp |
| `tech.1W.above_ema200` | 7/10 | 10/10 | -30pp |
| `tech.1W.obv.up` | 6/10 | 9/10 | -30pp |
| `tech.1D.rsi.healthy` | 6/10 | 9/10 | -30pp |
| `tech.1D.above_ema200` | 7/10 | 10/10 | -30pp |
| `tech.1D.obv.up` | 4/10 | 7/10 | -30pp |
| `tech.4H.above_ema200` | 7/10 | 10/10 | -30pp |
| `tech.4H.near_support` | 3/10 | 6/10 | -30pp |
| `tech.1H.above_ema200` | 7/10 | 10/10 | -30pp |
| `tech.1H.dist20.near` | 5/10 | 8/10 | -30pp |
| `news.score.high` | 7/10 | 10/10 | -30pp |
| `tech.1D.bull_ema` | 3/10 | 6/10 | -30pp |
| `news.signal.no_trade` | 3/10 | 6/10 | -30pp |
| `tech.flag.chop` | 2/10 | 5/10 | -30pp |
| `tech.1H.obv.down` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 0/10 vs losers 7/10 (Δ=-70pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 6/10 vs losers 10/10 (Δ=-40pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1W.above_ema200`** — 站上EMA200 (1W)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`
- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.flag.chop`** — 震荡市
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1D.adx.trending` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.flag.momentum_decay` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.score.high` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.4H.macd.bullish` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.verdict.long` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.flag.resistance` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1H.rsi.healthy` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.1D.adx.chop` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.4H.bull_ema` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.vol.expanding` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1W.rsi.healthy` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1W.obv.up` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.4H.above_ema200` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.4H.near_support` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.above_ema200` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.1H.dist20.near` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `news.score.high` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `news.signal.no_trade` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.obv.down` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/22 13:28:50_
