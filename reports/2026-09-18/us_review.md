# 回归检核报告 · US — 2026-09-18

**对照快照:** `reports/2026-09-17` (2026-09-17)
**池子:** 27 只 (成功 27 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **HPE** | NYSE:HPE | **+7.69%** | 34.3 | 67 | Trend Continuation | chop/low_rr |
| 2 | **AMD** | NASDAQ:AMD | **+6.36%** | 44.9 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 3 | **DELL** | NYSE:DELL | **+4.46%** | 45.2 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop |
| 4 | **BE** | NYSE:BE | **+3.98%** | 33.3 | 75 | Pullback Buy (Near Support) | chop |
| 5 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 6 | **CRWD** | NASDAQ:CRWD | **+1.80%** | 23.9 | 56 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop/bear_div |
| 7 | **CF** | NYSE:CF | **+1.39%** | 29.4 | 43 | Reversal (Bullish RSI Divergence) | mom_decay/near_resist/low_rr |
| 8 | **AAPL** | NASDAQ:AAPL | **+1.38%** | 19.4 | 50 | Pullback Buy (Near Support) | near_resist/chop/bear_div/low_rr |
| 9 | **HRMY** | NASDAQ:HRMY | **+1.26%** | 53.8 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 10 | **DT** | NYSE:DT | **+1.16%** | 41.4 | 54 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **PGY** | NASDAQ:PGY | **-4.99%** | 27.8 | 62 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 2 | **SM** | NYSE:SM | **-3.12%** | 39.4 | 50 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 3 | **LITE** | NASDAQ:LITE | **-2.81%** | 26.9 | 52 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/low_rr |
| 4 | **BGC** | NASDAQ:BGC | **-1.56%** | 47.2 | 52 | Pullback Buy (Near Support) | near_resist/chop/bear_div/low_rr |
| 5 | **GEN** | NASDAQ:GEN | **-1.44%** | 11.7 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/bear_div/low_rr |
| 6 | **LYB** | NYSE:LYB | **-1.00%** | 41.3 | 46 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 7 | **NBN** | NASDAQ:NBN | **-0.45%** | 38 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 8 | **HGTY** | NYSE:HGTY | **-0.22%** | 44.4 | 50 | Breakout (Squeeze Release) | near_resist/bear_div/low_rr |
| 9 | **PANW** | NASDAQ:PANW | **-0.16%** | 21.2 | 66 | Trend Continuation | near_resist/chop/low_rr |
| 10 | **SPNT** | NYSE:SPNT | **-0.16%** | 67.6 | 50 | Breakout (Squeeze Release) | near_resist/chop |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.overheat` | 7/10 | 3/10 | +40pp |
| `tech.4H.bull_ema` | 8/10 | 4/10 | +40pp |
| `tech.rs.strong` | 7/10 | 3/10 | +40pp |
| `tech.score.mid` | 6/10 | 3/10 | +30pp |
| `tech.1D.bull_ema` | 9/10 | 6/10 | +30pp |
| `tech.1D.obv.up` | 9/10 | 6/10 | +30pp |
| `tech.4H.obv.up` | 8/10 | 5/10 | +30pp |
| `tech.4H.adx.trending` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.dist20.near` | 1/10 | 7/10 | -60pp |
| `tech.flag.bad_rr` | 5/10 | 9/10 | -40pp |
| `tech.4H.adx.chop` | 3/10 | 7/10 | -40pp |
| `tech.4H.dist20.near` | 5/10 | 8/10 | -30pp |
| `tech.1H.obv.up` | 6/10 | 9/10 | -30pp |
| `tech.1H.vol.expanding` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 6/10 vs losers 3/10 (Δ=30pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`
- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 1/10 vs losers 7/10 (Δ=-60pp)
  - 当前 5 → **建议 4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.dist20.overheat` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.4H.bull_ema` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.rs.strong` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.4H.obv.up` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.4H.adx.trending` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.4H.adx.chop` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.4H.dist20.near` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.1H.obv.up` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1H.vol.expanding` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/18 09:46:05_
