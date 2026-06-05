# 回归检核报告 · US — 2026-06-03

**对照快照:** `reports/2026-06-02` (2026-06-02)
**池子:** 74 只 (成功 74 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:MRVL** | NASDAQ:MRVL | **+32.52%** | 24 | 80 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |
| 2 | **NYSE:HPE** | NYSE:HPE | **+19.47%** | 31.5 | 91 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 3 | **NYSE:COHR** | NYSE:COHR | **+17.63%** | 18.4 | 59 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/low_rr |
| 4 | **NASDAQ:LITE** | NASDAQ:LITE | **+13.72%** | - | - | - | - |
| 5 | **NYSE:GLW** | NYSE:GLW | **+13.41%** | - | - | - | - |
| 6 | **NASDAQ:RMBS** | NASDAQ:RMBS | **+13.09%** | 35.4 | 50 | Trend Continuation | low_rr |
| 7 | **NYSE:FN** | NYSE:FN | **+12.65%** | - | - | - | - |
| 8 | **NASDAQ:VIAV** | NASDAQ:VIAV | **+11.35%** | - | - | - | - |
| 9 | **NYSE:CLS** | NYSE:CLS | **+10.75%** | 26.7 | 53 | Overextended Chase (High Risk) | overheated/near_resist/chop/low_rr |
| 10 | **NYSE:BE** | NYSE:BE | **+10.73%** | - | - | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:DELL** | NYSE:DELL | **-6.58%** | 15.4 | 50 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 2 | **NASDAQ:CRWV** | NASDAQ:CRWV | **-4.45%** | 30.2 | 68 | Pullback Buy (Near Support) | overheated/near_resist/chop/low_rr |
| 3 | **NYSE:P** | NYSE:P | **-1.74%** | 22 | 73 | Trend Continuation | mom_decay/bear_div/low_rr |
| 4 | **NYSE:DY** | NYSE:DY | **-1.60%** | - | - | - | - |
| 5 | **NASDAQ:NBIS** | NASDAQ:NBIS | **-1.49%** | 10.1 | 87 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist |
| 6 | **NASDAQ:CRML** | NASDAQ:CRML | **-1.31%** | 22.9 | 50 | Trend Continuation | mom_decay/low_rr |
| 7 | **NYSE:WT** | NYSE:WT | **-1.04%** | - | - | - | - |
| 8 | **NYSE:DKS** | NYSE:DKS | **-1.02%** | 30.7 | 88 | Breakout (Squeeze Release) | mom_decay/near_resist/chop |
| 9 | **NASDAQ:MNST** | NASDAQ:MNST | **-0.97%** | - | - | - | - |
| 10 | **NASDAQ:NVDA** | NASDAQ:NVDA | **-0.69%** | 38.8 | 85 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

> 无显著共同特征 — 当日涨幅由特异性事件驱动,无法归纳统一权重调整。

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.obv.up` | 3/10 | 6/10 | -30pp |
| `tech.1H.rsi.healthy` | 2/10 | 5/10 | -30pp |
| `tech.flag.momentum_decay` | 2/10 | 5/10 | -30pp |
| `tech.1W.rsi.healthy` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↓ `tech.1H.rsi.healthy` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.flag.momentum_decay` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1W.rsi.healthy` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/3 11:39:41_
