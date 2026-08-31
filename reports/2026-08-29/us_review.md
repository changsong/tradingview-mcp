# 回归检核报告 · US — 2026-08-29

**对照快照:** `reports/2026-08-28` (2026-08-28)
**池子:** 33 只 (成功 33 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **DASH** | NASDAQ:DASH | **+2.09%** | 24.1 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 2 | **GEN** | NASDAQ:GEN | **+1.70%** | 14.7 | 50 | Trend Continuation | fake_break/near_resist/chop/bear_div |
| 3 | **J** | NYSE:J | **+0.90%** | 0 | 50 | - | - |
| 4 | **APD** | NYSE:APD | **+0.86%** | 53.6 | 50 | Breakout (Squeeze Release) | near_resist/low_rr |
| 5 | **OTC:SBGSY** | OTC:SBGSY | **+0.76%** | 35.1 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop |
| 6 | **OTC:HTHIY** | OTC:HTHIY | **+0.76%** | 13.4 | 50 | Trend Continuation | mom_decay/near_resist/bear_div/low_rr |
| 7 | **DT** | NYSE:DT | **+0.45%** | 43 | 50 | Trend Continuation | near_resist/chop |
| 8 | **CET** | AMEX:CET | **+0.38%** | 13.6 | 50 | Trend Continuation | mom_decay/near_resist/bear_div/low_rr |
| 9 | **TOST** | NYSE:TOST | **-0.06%** | 41.4 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 10 | **FAF** | NYSE:FAF | **-0.11%** | 30.7 | 50 | Trend Continuation | mom_decay/chop |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **MRVL** | NASDAQ:MRVL | **-10.28%** | 30.3 | 64 | Trend Follow (HH/HL Intact) | chop/low_rr |
| 2 | **HOOD** | NASDAQ:HOOD | **-5.01%** | 32.5 | 50 | Overextended Chase (High Risk) | overheated/chop/low_rr |
| 3 | **NVDA** | NASDAQ:NVDA | **-4.57%** | 33.4 | 50 | Trend Continuation | mom_decay/near_resist/chop/bear_div/low_rr |
| 4 | **TPC** | NYSE:TPC | **-3.38%** | 47.9 | 50 | Trend Follow (HH/HL Intact) | low_rr |
| 5 | **NEM** | NYSE:NEM | **-3.26%** | 6.4 | 50 | Trend Continuation | fake_break/bull_trap/near_resist/low_rr |
| 6 | **SCCO** | NYSE:SCCO | **-3.00%** | 44.5 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 7 | **WPM** | NYSE:WPM | **-2.95%** | 16.9 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist/low_rr |
| 8 | **PANW** | NASDAQ:PANW | **-2.94%** | 24.2 | 50 | Trend Continuation | mom_decay/low_rr |
| 9 | **MMM** | NYSE:MMM | **-2.51%** | 18 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div |
| 10 | **FCX** | NYSE:FCX | **-2.51%** | 40.1 | 50 | Overextended Chase (High Risk) | overheated/fake_break/near_resist |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.dist20.near` | 8/10 | 2/10 | +60pp |
| `tech.1D.dist20.near` | 6/10 | 1/10 | +50pp |
| `tech.flag.momentum_decay` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.rs.strong` | 1/10 | 7/10 | -60pp |
| `tech.4H.macd.bullish` | 1/10 | 7/10 | -60pp |
| `tech.1H.rsi.healthy` | 3/10 | 8/10 | -50pp |
| `tech.flag.bad_rr` | 4/10 | 8/10 | -40pp |
| `tech.score.mid` | 2/10 | 6/10 | -40pp |
| `tech.1D.macd.bullish` | 3/10 | 7/10 | -40pp |
| `tech.1H.obv.up` | 4/10 | 8/10 | -40pp |
| `tech.4H.bull_ema` | 5/10 | 9/10 | -40pp |
| `tech.1H.above_ema200` | 7/10 | 10/10 | -30pp |
| `tech.1H.near_support` | 4/10 | 7/10 | -30pp |
| `tech.1W.dist20.overheat` | 3/10 | 6/10 | -30pp |
| `tech.1H.macd.bullish` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 6/10 vs losers 1/10 (Δ=50pp)
  - 当前 5 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 4/10 vs losers 8/10 (Δ=-40pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 2/10 vs losers 6/10 (Δ=-40pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 3/10 vs losers 7/10 (Δ=-40pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.dist20.near` — gainers 8/10 vs losers 2/10 (Δ=60pp)
- ↑ `tech.flag.momentum_decay` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.rs.strong` — gainers 1/10 vs losers 7/10 (Δ=-60pp)
- ↓ `tech.4H.macd.bullish` — gainers 1/10 vs losers 7/10 (Δ=-60pp)
- ↓ `tech.1H.rsi.healthy` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.1H.obv.up` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.4H.bull_ema` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.1H.above_ema200` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.1H.near_support` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1W.dist20.overheat` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.macd.bullish` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/8/29 09:47:38_
