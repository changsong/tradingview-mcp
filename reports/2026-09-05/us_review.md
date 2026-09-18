# 回归检核报告 · US — 2026-09-05

**对照快照:** `reports/2026-09-04` (2026-09-04)
**池子:** 36 只 (成功 36 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.6 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 2 | **DELL** | NYSE:DELL | **+1.50%** | 32.8 | 50 | Overextended Chase (High Risk) | overheated/near_resist/chop |
| 3 | **HRMY** | NASDAQ:HRMY | **+0.93%** | 59 | 50 | Trend Continuation | near_resist |
| 4 | **APH** | NYSE:APH | **+0.87%** | 31 | 56 | Reversal (MACD Cross) | near_resist/chop/low_rr |
| 5 | **NVDA** | NASDAQ:NVDA | **+0.84%** | 13 | 50 | Trend Continuation | fake_break/near_resist/chop/bear_div/low_rr |
| 6 | **NWBI** | NASDAQ:NWBI | **+0.71%** | 24 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 7 | **HGTY** | NYSE:HGTY | **+0.67%** | 62.3 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/low_rr |
| 8 | **RIO** | NYSE:RIO | **+0.42%** | 39.9 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 9 | **FCX** | NYSE:FCX | **+0.23%** | 39.4 | 44 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 10 | **OSBC** | NASDAQ:OSBC | **+0.16%** | 32 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **PATH** | NYSE:PATH | **-16.63%** | 18.9 | 48 | Trend Continuation | fake_break/bull_trap/near_resist/low_rr |
| 2 | **FAF** | NYSE:FAF | **-4.91%** | 55 | 50 | Trend Continuation | chop/low_rr |
| 3 | **DASH** | NASDAQ:DASH | **-4.63%** | 37.8 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 4 | **SQM** | NYSE:SQM | **-4.20%** | 39.1 | 50 | Pullback Buy (Near Support) | near_resist |
| 5 | **KRYS** | NASDAQ:KRYS | **-3.56%** | 19.3 | 53 | Trend Follow (HH/HL Intact) | fake_break/near_resist/low_rr |
| 6 | **CF** | NYSE:CF | **-3.24%** | 36.9 | 63 | Trend Follow (HH/HL Intact) | fake_break/near_resist/low_rr |
| 7 | **RELY** | NASDAQ:RELY | **-2.79%** | 38.6 | 54 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 8 | **AAPL** | NASDAQ:AAPL | **-2.51%** | 35.6 | 50 | Pullback Buy (Near Support) | fake_break/near_resist/chop/low_rr |
| 9 | **GEN** | NASDAQ:GEN | **-2.17%** | 44.6 | 50 | Trend Continuation | fake_break/near_resist/chop |
| 10 | **VRTX** | NASDAQ:VRTX | **-2.12%** | 53.2 | 60 | Trend Follow (HH/HL Intact) | fake_break/near_resist/bear_div |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.dist20.near` | 5/10 | 1/10 | +40pp |
| `tech.flag.momentum_decay` | 5/10 | 1/10 | +40pp |
| `tech.score.mid` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.bull_ema` | 2/10 | 7/10 | -50pp |
| `tech.flag.fake_breakout` | 2/10 | 6/10 | -40pp |
| `tech.1D.macd.bullish` | 5/10 | 9/10 | -40pp |
| `tech.1W.obv.up` | 5/10 | 9/10 | -40pp |
| `tech.1W.dist20.overheat` | 2/10 | 6/10 | -40pp |
| `tech.4H.rsi.healthy` | 4/10 | 8/10 | -40pp |
| `tech.4H.above_ema200` | 5/10 | 9/10 | -40pp |
| `tech.score.high` | 4/10 | 8/10 | -40pp |
| `tech.1H.obv.down` | 1/10 | 5/10 | -40pp |
| `tech.rs.strong` | 2/10 | 5/10 | -30pp |
| `tech.1H.rsi.healthy` | 5/10 | 8/10 | -30pp |
| `tech.1H.dist20.near` | 7/10 | 10/10 | -30pp |
| `tech.1H.near_support` | 6/10 | 9/10 | -30pp |
| `tech.1W.adx.trending` | 4/10 | 7/10 | -30pp |
| `tech.4H.adx.trending` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 5 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↑ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`
- ↓ **`tech.flag.fake_breakout`** — 假突 (高位+低量)
  - gainers 2/10 vs losers 6/10 (Δ=-40pp)
  - 当前 -10 → **建议 -7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.flag.momentum_decay` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↓ `tech.4H.bull_ema` — gainers 2/10 vs losers 7/10 (Δ=-50pp)
- ↓ `tech.1W.dist20.overheat` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.4H.rsi.healthy` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.4H.above_ema200` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.score.high` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1H.obv.down` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.rs.strong` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1H.rsi.healthy` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.1H.dist20.near` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.1H.near_support` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1W.adx.trending` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.4H.adx.trending` — gainers 3/10 vs losers 6/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/5 09:38:36_
