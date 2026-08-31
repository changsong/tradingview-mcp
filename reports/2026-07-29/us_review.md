# 回归检核报告 · US — 2026-07-29

**对照快照:** `reports/2026-07-28` (2026-07-28)
**池子:** 58 只 (成功 49 / 失败 9)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **WWD** | NASDAQ:WWD | **+6.53%** | 28.5 | 53 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 2 | **JEWL** | NASDAQ:JEWL | **+6.05%** | 0 | 50 | - | - |
| 3 | **AMKR** | NASDAQ:AMKR | **+5.86%** | 28.7 | 86 | Pullback Buy (Near Support) | mom_decay |
| 4 | **CLS** | NYSE:CLS | **+5.76%** | 1.3 | 50 | Range / No Edge | near_resist/chop/low_rr |
| 5 | **JCI** | NYSE:JCI | **+5.65%** | 58.8 | 50 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 6 | **MSFT** | NASDAQ:MSFT | **+5.29%** | 19.7 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **NASDAQ:APLD** | NASDAQ:APLD | **+4.91%** | -6.5 | - | Range / No Edge | low_rr |
| 8 | **ASIX** | NYSE:ASIX | **+4.86%** | 35.4 | 50 | Pullback Buy (Near Support) | near_resist/chop |
| 9 | **DGXX** | NASDAQ:DGXX | **+4.79%** | -6.2 | 50 | Downtrend | near_resist/low_rr |
| 10 | **WDC** | NASDAQ:WDC | **+4.42%** | - | 47 | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NBIS** | NASDAQ:NBIS | **-12.10%** | 20.9 | 55 | Pullback Buy (Near Support) | mom_decay/chop |
| 2 | **ETN** | NYSE:ETN | **-11.34%** | 49.2 | 62 | Breakout (Squeeze Release) | near_resist/chop |
| 3 | **COHR** | NASDAQ:COHR | **-9.90%** | 38.8 | 57 | Breakout (Squeeze Release) | near_resist |
| 4 | **NVDA** | NASDAQ:NVDA | **-8.23%** | 9.3 | 67 | Range / No Edge | near_resist/chop/low_rr |
| 5 | **AMD** | NASDAQ:AMD | **-8.15%** | 14.6 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 6 | **CIEN** | NYSE:CIEN | **-7.09%** | 14.1 | 67 | Range / No Edge | - |
| 7 | **NWBI** | NASDAQ:NWBI | **-7.01%** | 33.4 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 8 | **POWI** | NASDAQ:POWI | **-6.64%** | 14.7 | 50 | Trend Follow (HH/HL Intact) | mom_decay/chop/low_rr |
| 9 | **IREN** | NASDAQ:IREN | **-6.08%** | 20.9 | 50 | Reversal (Bullish RSI Divergence) | - |
| 10 | **BHRB** | NASDAQ:BHRB | **-5.34%** | 32.7 | 50 | Pullback Buy (Near Support) | mom_decay/chop |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.adx.trending` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.obv.down` | 5/10 | 10/10 | -50pp |
| `tech.4H.adx.chop` | 3/10 | 8/10 | -50pp |
| `tech.1D.above_ema200` | 4/10 | 8/10 | -40pp |
| `tech.1H.near_support` | 5/10 | 9/10 | -40pp |
| `tech.1W.adx.strong` | 1/10 | 5/10 | -40pp |
| `tech.flag.momentum_decay` | 2/10 | 5/10 | -30pp |
| `tech.4H.obv.down` | 7/10 | 10/10 | -30pp |
| `tech.4H.near_support` | 5/10 | 8/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 4/10 vs losers 8/10 (Δ=-40pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 1/10 vs losers 5/10 (Δ=-40pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.adx.trending` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.1H.obv.down` — gainers 5/10 vs losers 10/10 (Δ=-50pp)
- ↓ `tech.4H.adx.chop` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.1H.near_support` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.flag.momentum_decay` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.4H.obv.down` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.4H.near_support` — gainers 5/10 vs losers 8/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/7/29 10:11:43_
