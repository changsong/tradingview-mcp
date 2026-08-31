# 回归检核报告 · US — 2026-08-27

**对照快照:** `reports/2026-08-26` (2026-08-26)
**池子:** 28 只 (成功 28 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **P** | NYSE:P | **+5.92%** | 31.9 | 57 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 2 | **MRVL** | NASDAQ:MRVL | **+1.97%** | 45.4 | 50 | Trend Follow (HH/HL Intact) | chop |
| 3 | **HRMY** | NASDAQ:HRMY | **+1.82%** | 21.1 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 4 | **DASH** | NASDAQ:DASH | **+1.47%** | 0 | 54 | - | - |
| 5 | **RRC** | NYSE:RRC | **+1.37%** | 75.9 | 58 | Pullback Buy (Near Support) | - |
| 6 | **GEN** | NASDAQ:GEN | **+1.13%** | 25.7 | 61 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/bear_div |
| 7 | **CBOE** | CBOE:CBOE | **+1.09%** | 0 | 46 | - | - |
| 8 | **APD** | NYSE:APD | **+0.92%** | 29.2 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 9 | **OTC:SBGSY** | OTC:SBGSY | **+0.77%** | 51.9 | 50 | Pullback Buy (Near Support) | mom_decay/chop |
| 10 | **PATH** | NYSE:PATH | **+0.60%** | 0 | 50 | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **WPM** | NYSE:WPM | **-4.70%** | -8.2 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist/bear_div/low_rr |
| 2 | **LLY** | NYSE:LLY | **-3.59%** | 39.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 3 | **HOOD** | NASDAQ:HOOD | **-3.17%** | 25.2 | 50 | Pullback Buy (Near Support) | overheated/near_resist/chop/low_rr |
| 4 | **SCCO** | NYSE:SCCO | **-2.71%** | 19.9 | 50 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop/bear_div |
| 5 | **NEM** | NYSE:NEM | **-2.62%** | 0 | 50 | - | - |
| 6 | **MNST** | NASDAQ:MNST | **-1.89%** | 29.4 | 52 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 7 | **NEXA** | NYSE:NEXA | **-1.52%** | 41.9 | 52 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 8 | **FCX** | NYSE:FCX | **-1.14%** | 23.7 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |
| 9 | **VRTX** | NASDAQ:VRTX | **-1.01%** | 0 | 50 | - | - |
| 10 | **FWONA** | NASDAQ:FWONA | **-0.93%** | 35.2 | 50 | Pullback Buy (Near Support) | near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.dist20.near` | 7/10 | 3/10 | +40pp |
| `tech.flag.momentum_decay` | 5/10 | 2/10 | +30pp |
| `tech.1D.dist20.near` | 5/10 | 2/10 | +30pp |
| `tech.4H.dist20.near` | 6/10 | 3/10 | +30pp |
| `tech.1H.near_support` | 7/10 | 4/10 | +30pp |
| `tech.type.pullback` | 5/10 | 2/10 | +30pp |
| `tech.1D.near_support` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.adx.strong` | 1/10 | 6/10 | -50pp |
| `tech.1D.macd.bullish` | 2/10 | 7/10 | -50pp |
| `tech.flag.resistance` | 3/10 | 8/10 | -50pp |
| `tech.alignment.full` | 1/10 | 5/10 | -40pp |
| `tech.flag.bad_rr` | 3/10 | 6/10 | -30pp |
| `tech.rs.strong` | 3/10 | 6/10 | -30pp |
| `tech.1W.rsi.healthy` | 7/10 | 10/10 | -30pp |
| `tech.1W.obv.up` | 7/10 | 10/10 | -30pp |
| `tech.1H.obv.up` | 4/10 | 7/10 | -30pp |
| `tech.4H.macd.bullish` | 5/10 | 8/10 | -30pp |
| `tech.1H.bull_ema` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 5 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 2/10 vs losers 7/10 (Δ=-50pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.dist20.near` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.flag.momentum_decay` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.4H.dist20.near` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.1H.near_support` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `tech.type.pullback` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.1D.near_support` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.1H.adx.strong` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.flag.resistance` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.alignment.full` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.rs.strong` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1W.rsi.healthy` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.1H.obv.up` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.4H.macd.bullish` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.1H.bull_ema` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/8/27 09:58:23_
