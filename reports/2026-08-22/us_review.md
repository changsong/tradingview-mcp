# 回归检核报告 · US — 2026-08-21

**对照快照:** `reports/2026-08-20` (2026-08-20)
**池子:** 31 只 (成功 31 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **MRVL** | NASDAQ:MRVL | **+5.79%** | 51.4 | 61 | Trend Continuation | chop |
| 2 | **GRAL** | NASDAQ:GRAL | **+5.42%** | 20.1 | 50 | Trend Continuation | fake_break/near_resist/chop/low_rr |
| 3 | **FCX** | NYSE:FCX | **+3.08%** | 42.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 4 | **SCCO** | NYSE:SCCO | **+2.08%** | 23 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/bear_div/low_rr |
| 5 | **NEM** | NYSE:NEM | **+2.05%** | 9.5 | 52 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist/bear_div/low_rr |
| 6 | **WPM** | NYSE:WPM | **+1.91%** | 14.6 | 50 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist/bear_div/low_rr |
| 7 | **RIO** | NYSE:RIO | **+1.72%** | 40.8 | 50 | Pullback Buy (Near Support) | near_resist/chop/bear_div/low_rr |
| 8 | **LTC** | NYSE:LTC | **+1.09%** | 51.9 | 59 | Reversal (Bullish RSI Divergence) | near_resist/low_rr |
| 9 | **DASH** | NASDAQ:DASH | **+0.97%** | 33.8 | 50 | Pullback Buy (Near Support) | fake_break/near_resist/bear_div/low_rr |
| 10 | **PATH** | NYSE:PATH | **+0.89%** | 60.9 | 50 | Pullback Buy (Near Support) | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **HRMY** | NASDAQ:HRMY | **-4.66%** | 41.5 | 50 | Trend Follow (HH/HL Intact) | fake_break/near_resist/low_rr |
| 2 | **VKTX** | NASDAQ:VKTX | **-4.50%** | 37.7 | 50 | Pullback Buy (Near Support) | near_resist/low_rr |
| 3 | **HEI** | NYSE:HEI | **-3.53%** | 33.7 | 52 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 4 | **LLY** | NYSE:LLY | **-2.81%** | 35.2 | 50 | Trend Continuation | near_resist/chop/bear_div |
| 5 | **LOAR** | NYSE:LOAR | **-2.77%** | 71.6 | 52 | Pullback Buy (Near Support) | - |
| 6 | **AGM** | NYSE:AGM | **-2.68%** | 37.3 | 50 | Reversal (Bullish RSI Divergence) | mom_decay/low_rr |
| 7 | **ADAM** | NASDAQ:ADAM | **-2.46%** | 24.8 | 50 | Trend Continuation | fake_break/bull_trap/near_resist/low_rr |
| 8 | **VRTX** | NASDAQ:VRTX | **-2.14%** | 42.4 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 9 | **P** | NYSE:P | **-1.80%** | 25.8 | 50 | Overextended Chase (High Risk) | overheated |
| 10 | **NBIS** | NASDAQ:NBIS | **-1.69%** | 16.7 | 50 | Trend Continuation | near_resist/chop/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.bull_ema` | 10/10 | 5/10 | +50pp |
| `tech.4H.bull_ema` | 10/10 | 5/10 | +50pp |
| `tech.1H.rsi.healthy` | 8/10 | 4/10 | +40pp |
| `tech.1H.macd.bullish` | 8/10 | 4/10 | +40pp |
| `tech.flag.bear_div` | 5/10 | 1/10 | +40pp |
| `tech.1D.divergence.bear` | 5/10 | 1/10 | +40pp |
| `tech.flag.chop` | 5/10 | 2/10 | +30pp |
| `tech.alignment.full` | 7/10 | 4/10 | +30pp |
| `tech.1D.adx.chop` | 5/10 | 2/10 | +30pp |
| `tech.1D.obv.up` | 10/10 | 7/10 | +30pp |
| `tech.4H.adx.chop` | 5/10 | 2/10 | +30pp |
| `tech.4H.macd.bullish` | 9/10 | 6/10 | +30pp |
| `tech.4H.obv.up` | 9/10 | 6/10 | +30pp |
| `tech.flag.bad_rr` | 8/10 | 5/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.vol.expanding` | 3/10 | 8/10 | -50pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 10/10 vs losers 5/10 (Δ=50pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.flag.bear_div`** — 看空背离
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 -6 → **建议 -7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 10/10 vs losers 7/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↑ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 8/10 vs losers 5/10 (Δ=30pp)
  - 当前 -3 → **建议 -4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.bull_ema` — gainers 10/10 vs losers 5/10 (Δ=50pp)
- ↑ `tech.1H.rsi.healthy` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.1H.macd.bullish` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.1D.divergence.bear` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.alignment.full` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `tech.1D.adx.chop` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.4H.adx.chop` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.4H.macd.bullish` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↑ `tech.4H.obv.up` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↓ `tech.1H.vol.expanding` — gainers 3/10 vs losers 8/10 (Δ=-50pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/8/21 09:58:35_
