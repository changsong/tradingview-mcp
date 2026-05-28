# 回归检核报告 · US — 2026-05-28

**对照快照:** `reports/2026-05-27` (2026-05-27)
**池子:** 64 只 (成功 64 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:IREN** | NASDAQ:IREN | **+13.48%** | 33.2 | 86 | Overextended Chase (High Risk) | overheated/mom_decay |
| 2 | **NASDAQ:APLD** | NASDAQ:APLD | **+8.51%** | 29.4 | 84 | Trend Continuation | bear_div/low_rr |
| 3 | **NYSE:SMP** | NYSE:SMP | **+5.17%** | - | - | - | - |
| 4 | **NASDAQ:VSAT** | NASDAQ:VSAT | **+5.12%** | 45.3 | 50 | Overextended Chase (High Risk) | overheated/near_resist/bear_div |
| 5 | **NASDAQ:RKLB** | NASDAQ:RKLB | **+4.91%** | 27.8 | 92 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist |
| 6 | **NASDAQ:MU** | NASDAQ:MU | **+3.63%** | 30 | 67 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist |
| 7 | **NASDAQ:SEDG** | NASDAQ:SEDG | **+3.51%** | 48.1 | 55 | Overextended Chase (High Risk) | overheated |
| 8 | **NASDAQ:CORZ** | NASDAQ:CORZ | **+3.15%** | 23 | 52 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist/bear_div |
| 9 | **NYSE:TSM** | NYSE:TSM | **+2.52%** | 37.9 | 60 | Breakout (Squeeze Release) | mom_decay/near_resist/low_rr |
| 10 | **NYSE:BA** | NYSE:BA | **+2.47%** | - | - | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:DKS** | NYSE:DKS | **-5.97%** | 38.8 | 60 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 2 | **NASDAQ:RMBS** | NASDAQ:RMBS | **-5.45%** | 12 | 52 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/low_rr |
| 3 | **NYSE:MOD** | NYSE:MOD | **-5.39%** | 50.2 | 46 | Overextended Chase (High Risk) | overheated/mom_decay |
| 4 | **NASDAQ:ERIC** | NASDAQ:ERIC | **-4.96%** | 26.6 | 50 | Trend Continuation | bull_trap/near_resist |
| 5 | **NYSE:NOK** | NYSE:NOK | **-4.74%** | 28.4 | 50 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist/bear_div |
| 6 | **NASDAQ:MRVL** | NASDAQ:MRVL | **-4.59%** | 34.3 | 94 | Overextended Chase (High Risk) | overheated/mom_decay/bear_div |
| 7 | **NYSE:CIEN** | NYSE:CIEN | **-3.37%** | 27 | 90 | Trend Continuation | fake_break/mom_decay/near_resist |
| 8 | **NYSE:HG** | NYSE:HG | **-3.29%** | 20 | 53 | Trend Continuation | near_resist/chop/low_rr |
| 9 | **NASDAQ:TTMI** | NASDAQ:TTMI | **-3.19%** | 12.3 | 64 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist/bear_div |
| 10 | **NYSE:ENS** | NYSE:ENS | **-3.14%** | 42.7 | 87 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.rsi.healthy` | 7/10 | 4/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `news.top_news_type.Earnings` | 0/10 | 6/10 | -60pp |
| `tech.flag.momentum_decay` | 2/10 | 6/10 | -40pp |
| `tech.verdict.long` | 5/10 | 9/10 | -40pp |
| `tech.1W.rsi.overheat` | 3/10 | 7/10 | -40pp |
| `tech.1D.obv.up` | 7/10 | 10/10 | -30pp |
| `tech.flag.resistance` | 5/10 | 8/10 | -30pp |
| `tech.1D.vol.expanding` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1W.rsi.overheat`** — RSI>80超买 (1W)
  - gainers 3/10 vs losers 7/10 (Δ=-40pp)
  - 当前 -12 → **建议 -9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:498`
- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1D.vol.expanding`** — 量能持续扩张 (1D)
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 8 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:526`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.rsi.healthy` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↓ `news.top_news_type.Earnings` — gainers 0/10 vs losers 6/10 (Δ=-60pp)
- ↓ `tech.flag.momentum_decay` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.verdict.long` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.flag.resistance` — gainers 5/10 vs losers 8/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/28 11:44:18_
