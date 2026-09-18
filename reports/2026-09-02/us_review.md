# 回归检核报告 · US — 2026-09-02

**对照快照:** `reports/2026-09-01` (2026-09-01)
**池子:** 28 只 (成功 28 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **HRMY** | NASDAQ:HRMY | **+4.75%** | 14 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 2 | **LTC** | NYSE:LTC | **+2.68%** | 18.8 | 50 | Pullback Buy (Near Support) | near_resist/chop/bear_div/low_rr |
| 3 | **RRC** | NYSE:RRC | **+2.61%** | 64.6 | 50 | Pullback Buy (Near Support) | near_resist |
| 4 | **CBOE** | CBOE:CBOE | **+2.47%** | 25.1 | 41 | Trend Continuation | near_resist/chop/low_rr |
| 5 | **P** | NYSE:P | **+0.89%** | 10.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 6 | **VRTX** | NASDAQ:VRTX | **+0.57%** | 32.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 7 | **LLY** | NYSE:LLY | **+0.28%** | 31.9 | 72 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 8 | **OSBC** | NASDAQ:OSBC | **+0.00%** | 40.9 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 9 | **CET** | AMEX:CET | **-0.59%** | 27.8 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 10 | **MRVL** | NASDAQ:MRVL | **-0.60%** | 28.5 | 60 | Pullback Buy (Near Support) | near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **FCX** | NYSE:FCX | **-4.32%** | 44.2 | 50 | Trend Follow (HH/HL Intact) | - |
| 2 | **WPM** | NYSE:WPM | **-3.91%** | 35.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 3 | **NEXA** | NYSE:NEXA | **-3.60%** | 19.2 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/low_rr |
| 4 | **SCCO** | NYSE:SCCO | **-3.48%** | 33.3 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 5 | **GEN** | NASDAQ:GEN | **-3.16%** | 11.8 | 66 | Trend Continuation | fake_break/bull_trap/near_resist/chop/bear_div |
| 6 | **SBGSY** | OTC:SBGSY | **-2.91%** | 44.9 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 7 | **PATH** | NYSE:PATH | **-2.84%** | 7.1 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 8 | **NEM** | NYSE:NEM | **-2.72%** | 40 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 9 | **DASH** | NASDAQ:DASH | **-2.62%** | 24 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist/low_rr |
| 10 | **FWONA** | NASDAQ:FWONA | **-2.57%** | 37.6 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.type.pullback` | 7/10 | 2/10 | +50pp |
| `tech.1D.dist20.near` | 7/10 | 2/10 | +50pp |
| `tech.1D.near_support` | 7/10 | 2/10 | +50pp |
| `tech.score.mid` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.overheat` | 1/10 | 6/10 | -50pp |
| `tech.1H.dist20.near` | 5/10 | 9/10 | -40pp |
| `tech.1H.above_ema200` | 7/10 | 10/10 | -30pp |
| `tech.1H.obv.down` | 5/10 | 8/10 | -30pp |
| `tech.score.high` | 2/10 | 5/10 | -30pp |
| `tech.1W.adx.trending` | 2/10 | 5/10 | -30pp |
| `tech.rs.strong` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 7/10 vs losers 2/10 (Δ=50pp)
  - 当前 5 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↑ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 6/10 vs losers 3/10 (Δ=30pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.type.pullback` — gainers 7/10 vs losers 2/10 (Δ=50pp)
- ↑ `tech.1D.near_support` — gainers 7/10 vs losers 2/10 (Δ=50pp)
- ↓ `tech.1W.dist20.overheat` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1H.dist20.near` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.1H.above_ema200` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.1H.obv.down` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.score.high` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1W.adx.trending` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.rs.strong` — gainers 3/10 vs losers 6/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/2 09:56:39_
