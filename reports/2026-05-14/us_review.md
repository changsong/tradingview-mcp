# 回归检核报告 · US — 2026-05-14

**对照快照:** `reports/2026-05-13` (2026-05-13)
**池子:** 54 只 (成功 54 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:HPE** | NYSE:HPE | **+7.23%** | 50.6 | 86 | Trend Follow (HH/HL Intact) | - |
| 2 | **NASDAQ:IREN** | NASDAQ:IREN | **+5.44%** | 30.1 | 64 | Trend Continuation | near_resist/low_rr |
| 3 | **NYSE:TSM** | NYSE:TSM | **+4.64%** | 18.8 | 60 | Trend Follow (HH/HL Intact) | mom_decay/bear_div/low_rr |
| 4 | **NASDAQ:NVDA** | NASDAQ:NVDA | **+3.89%** | 17.7 | 64 | Trend Continuation | fake_break/bull_trap/near_resist |
| 5 | **NASDAQ:RKLB** | NASDAQ:RKLB | **+3.30%** | 37.1 | 83 | Overextended Chase (High Risk) | overheated |
| 6 | **NASDAQ:VSAT** | NASDAQ:VSAT | **+3.26%** | 36.4 | 51 | Trend Follow (HH/HL Intact) | fake_break/near_resist |
| 7 | **NASDAQ:APLD** | NASDAQ:APLD | **+2.70%** | 31.5 | 59 | Overextended Chase (High Risk) | overheated/bear_div |
| 8 | **NYSE:MOD** | NYSE:MOD | **+2.21%** | 30.8 | 48 | Trend Continuation | low_rr |
| 9 | **NASDAQ:PRDO** | NASDAQ:PRDO | **+2.06%** | 31.9 | 72 | Pullback Buy (Near Support) | near_resist/chop |
| 10 | **NYSE:SMP** | NYSE:SMP | **+2.06%** | 32.1 | 50 | Breakout (Squeeze Release) | near_resist/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:CRDO** | NASDAQ:CRDO | **-3.66%** | 23.8 | 55 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 2 | **NASDAQ:LITE** | NASDAQ:LITE | **-3.45%** | 26 | 77 | Trend Follow (HH/HL Intact) | fake_break/near_resist/low_rr |
| 3 | **NYSE:JOBY** | NYSE:JOBY | **-3.35%** | 14 | 43 | Trend Follow (HH/HL Intact) | fake_break/near_resist/low_rr |
| 4 | **NASDAQ:INTC** | NASDAQ:INTC | **-2.65%** | 36.3 | 63 | Overextended Chase (High Risk) | overheated/mom_decay |
| 5 | **NASDAQ:RMBS** | NASDAQ:RMBS | **-2.60%** | 30.7 | 50 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 6 | **NYSE:CF** | NYSE:CF | **-2.46%** | 40.4 | 63 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **NASDAQ:MPWR** | NASDAQ:MPWR | **-1.57%** | 12.3 | 65 | Trend Continuation | mom_decay/near_resist/bear_div/low_rr |
| 8 | **NASDAQ:POWL** | NASDAQ:POWL | **-1.33%** | 30.5 | 65 | Trend Follow (HH/HL Intact) | bear_div |
| 9 | **NASDAQ:MU** | NASDAQ:MU | **-1.26%** | 53.3 | 62 | Overextended Chase (High Risk) | overheated/mom_decay |
| 10 | **NASDAQ:ADI** | NASDAQ:ADI | **-1.14%** | 29.1 | 67 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.rsi.healthy` | 7/10 | 3/10 | +40pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.momentum_decay` | 1/10 | 5/10 | -40pp |
| `tech.1W.adx.strong` | 3/10 | 7/10 | -40pp |
| `tech.1W.rsi.overheat` | 2/10 | 6/10 | -40pp |
| `tech.4H.rsi.healthy` | 7/10 | 10/10 | -30pp |
| `tech.4H.bull_ema` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 3/10 vs losers 7/10 (Δ=-40pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.rsi.healthy` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↓ `tech.flag.momentum_decay` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1W.rsi.overheat` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.4H.rsi.healthy` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.4H.bull_ema` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/14 23:24:19_
