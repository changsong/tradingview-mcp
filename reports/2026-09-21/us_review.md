# 回归检核报告 · US — 2026-09-21

**对照快照:** `reports/2026-09-20` (2026-09-20)
**池子:** 39 只 (成功 39 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:SNDK** | NASDAQ:SNDK | **+10.99%** | - | 58 | - | - |
| 2 | **NASDAQ:HOOD** | NASDAQ:HOOD | **+9.12%** | - | 78 | - | - |
| 3 | **NASDAQ:VSAT** | NASDAQ:VSAT | **+4.60%** | - | 59 | - | - |
| 4 | **NASDAQ:LITE** | NASDAQ:LITE | **+4.17%** | 44.1 | 55 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/low_rr |
| 5 | **NYSE:ASX** | NYSE:ASX | **+4.10%** | - | 58 | - | - |
| 6 | **NASDAQ:MU** | NASDAQ:MU | **+3.92%** | 39.5 | 70 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **NASDAQ:AMD** | NASDAQ:AMD | **+2.70%** | 49.4 | 71 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 8 | **NASDAQ:NBIS** | NASDAQ:NBIS | **+2.55%** | - | 61 | - | - |
| 9 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 38.6 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 10 | **NASDAQ:BGC** | NASDAQ:BGC | **+1.92%** | 57.3 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/bear_div/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:QCOM** | NASDAQ:QCOM | **-5.82%** | - | 58 | - | - |
| 2 | **NYSE:BE** | NYSE:BE | **-5.39%** | 27.7 | 49 | Trend Follow (HH/HL Intact) | chop/low_rr |
| 3 | **NYSE:DELL** | NYSE:DELL | **-3.46%** | 52.4 | 67 | Trend Follow (HH/HL Intact) | - |
| 4 | **NASDAQ:CRWD** | NASDAQ:CRWD | **-3.28%** | 48.4 | 71 | Trend Follow (HH/HL Intact) | bear_div |
| 5 | **NASDAQ:TEM** | NASDAQ:TEM | **-3.14%** | 41.9 | 64 | Overextended Chase (High Risk) | overheated/near_resist/low_rr |
| 6 | **NASDAQ:SMCI** | NASDAQ:SMCI | **-3.12%** | - | 73 | - | - |
| 7 | **NASDAQ:PANW** | NASDAQ:PANW | **-3.06%** | 26.5 | 78 | Trend Continuation | near_resist/chop/low_rr |
| 8 | **NYSE:LTC** | NYSE:LTC | **-2.16%** | 42.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 9 | **NASDAQ:INCY** | NASDAQ:INCY | **-1.81%** | - | 69 | - | - |
| 10 | **NASDAQ:HRMY** | NASDAQ:HRMY | **-1.68%** | 57.8 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.obv.up` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.obv.down` | 0/10 | 5/10 | -50pp |
| `tech.1W.vol.expanding` | 1/10 | 5/10 | -40pp |
| `tech.1D.rsi.healthy` | 4/10 | 7/10 | -30pp |
| `tech.1H.dist20.near` | 2/10 | 5/10 | -30pp |
| `tech.1W.dist20.overheat` | 2/10 | 5/10 | -30pp |
| `tech.1D.macd.bullish` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↓ `tech.1D.obv.down` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.1W.vol.expanding` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.dist20.near` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1W.dist20.overheat` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/21 09:39:31_
