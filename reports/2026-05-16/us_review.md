# 回归检核报告 · US — 2026-05-16

**对照快照:** `reports/2026-05-15` (2026-05-15)
**池子:** 69 只 (成功 69 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:SM** | NYSE:SM | **+3.89%** | 28.9 | 63 | Trend Continuation | chop/bear_div/low_rr |
| 2 | **NYSE:HG** | NYSE:HG | **+3.24%** | - | - | - | - |
| 3 | **NYSE:CF** | NYSE:CF | **+1.85%** | 37.8 | 68 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 4 | **NYSE:SPNT** | NYSE:SPNT | **+1.28%** | 32.4 | 57 | Pullback Buy (Near Support) | mom_decay/near_resist/chop |
| 5 | **CBOE:CBOE** | CBOE:CBOE | **+1.21%** | 31.5 | 67 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 6 | **NASDAQ:GEN** | NASDAQ:GEN | **+1.16%** | 34.4 | 53 | Trend Follow (HH/HL Intact) | bear_div |
| 7 | **NYSE:AROC** | NYSE:AROC | **+0.56%** | - | - | - | - |
| 8 | **NASDAQ:CPRX** | NASDAQ:CPRX | **+0.06%** | 0 | 77 | - | - |
| 9 | **NYSE:JHG** | NYSE:JHG | **+0.04%** | 58.6 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 10 | **NASDAQ:AMAT** | NASDAQ:AMAT | **-0.89%** | 44.1 | 92 | Trend Continuation | near_resist/chop |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:IREN** | NASDAQ:IREN | **-9.35%** | 38.4 | 59 | Trend Follow (HH/HL Intact) | low_rr |
| 2 | **APLD** | NASDAQ:APLD | **-8.88%** | - | 65 | - | - |
| 3 | **NYSE:GLW** | NYSE:GLW | **-7.91%** | 39.9 | 70 | Trend Continuation | - |
| 4 | **NYSE:MOD** | NYSE:MOD | **-7.15%** | 25 | 51 | Trend Continuation | near_resist/low_rr |
| 5 | **NASDAQ:CRDO** | NASDAQ:CRDO | **-6.70%** | 16.1 | 55 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 6 | **NASDAQ:MU** | NASDAQ:MU | **-6.62%** | 32 | 66 | Overextended Chase (High Risk) | overheated/low_rr |
| 7 | **NASDAQ:VSAT** | NASDAQ:VSAT | **-6.46%** | 46.8 | 50 | Trend Follow (HH/HL Intact) | - |
| 8 | **NYSE:WPM** | NYSE:WPM | **-6.36%** | 18.6 | 84 | Reversal (Bullish RSI Divergence) | chop |
| 9 | **NYSE:CIEN** | NYSE:CIEN | **-6.27%** | 28.2 | 54 | Trend Follow (HH/HL Intact) | bear_div |
| 10 | **NASDAQ:INTC** | NASDAQ:INTC | **-6.18%** | 37.4 | 66 | Trend Continuation | low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.rsi.healthy` | 6/10 | 1/10 | +50pp |
| `tech.1H.dist20.near` | 8/10 | 4/10 | +40pp |
| `tech.1W.rsi.healthy` | 6/10 | 3/10 | +30pp |
| `tech.4H.macd.bullish` | 5/10 | 2/10 | +30pp |
| `tech.flag.resistance` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.overheat` | 3/10 | 8/10 | -50pp |
| `tech.1W.rsi.overheat` | 1/10 | 5/10 | -40pp |
| `tech.1D.adx.strong` | 1/10 | 5/10 | -40pp |
| `tech.verdict.strong_long` | 1/10 | 5/10 | -40pp |
| `tech.4H.adx.trending` | 1/10 | 5/10 | -40pp |
| `tech.1W.bull_ema` | 5/10 | 8/10 | -30pp |
| `tech.1D.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.1D.macd.bullish` | 5/10 | 8/10 | -30pp |
| `tech.1H.adx.trending` | 3/10 | 6/10 | -30pp |
| `tech.1H.obv.down` | 5/10 | 8/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1D.adx.strong`** — ADX>30 强趋势 (1D)
  - gainers 1/10 vs losers 5/10 (Δ=-40pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.rsi.healthy` — gainers 6/10 vs losers 1/10 (Δ=50pp)
- ↑ `tech.1H.dist20.near` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.1W.rsi.healthy` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.4H.macd.bullish` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.flag.resistance` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.1W.dist20.overheat` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.1W.rsi.overheat` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.verdict.strong_long` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.4H.adx.trending` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.adx.trending` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.obv.down` — gainers 5/10 vs losers 8/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/16 17:14:56_
