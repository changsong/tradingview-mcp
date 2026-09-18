# 回归检核报告 · US — 2026-09-01

**对照快照:** `reports/2026-08-31` (2026-08-31)
**池子:** 28 只 (成功 28 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **PATH** | NYSE:PATH | **+2.87%** | 7.1 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 2 | **FIVE** | NASDAQ:FIVE | **+2.05%** | 48.8 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 3 | **NEXA** | NYSE:NEXA | **+1.95%** | 19.2 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/low_rr |
| 4 | **HOOD** | NASDAQ:HOOD | **+0.53%** | 48.7 | 50 | Pullback Buy (Near Support) | - |
| 5 | **VRTX** | NASDAQ:VRTX | **+0.52%** | 32.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 6 | **APD** | NYSE:APD | **+0.44%** | 57.6 | 50 | Reversal (MACD Cross) | near_resist/chop/low_rr |
| 7 | **HRMY** | NASDAQ:HRMY | **+0.43%** | 14 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 8 | **GEN** | NASDAQ:GEN | **-0.06%** | 11.8 | 50 | Trend Continuation | fake_break/bull_trap/near_resist/chop/bear_div |
| 9 | **RRC** | NYSE:RRC | **-0.34%** | 64.6 | 50 | Pullback Buy (Near Support) | near_resist |
| 10 | **SCCO** | NYSE:SCCO | **-0.44%** | 33.3 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **CBOE** | CBOE:CBOE | **-3.30%** | 25.1 | 46 | Trend Continuation | near_resist/chop/low_rr |
| 2 | **MRVL** | NASDAQ:MRVL | **-2.29%** | 28.5 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 3 | **DASH** | NASDAQ:DASH | **-2.11%** | 24 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist/low_rr |
| 4 | **OTC:SBGSY** | OTC:SBGSY | **-2.09%** | 44.9 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 5 | **MNST** | NASDAQ:MNST | **-2.01%** | 7 | 50 | Range / No Edge | near_resist/chop/low_rr |
| 6 | **J** | NYSE:J | **-1.93%** | 22.4 | 50 | Pullback Buy (Near Support) | fake_break/near_resist/bear_div/low_rr |
| 7 | **JOE** | NYSE:JOE | **-1.81%** | 48.5 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div |
| 8 | **WPM** | NYSE:WPM | **-1.63%** | 35.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 9 | **LLY** | NYSE:LLY | **-1.52%** | 31.9 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 10 | **NEM** | NYSE:NEM | **-1.50%** | 40 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.adx.trending` | 6/10 | 1/10 | +50pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.near_support` | 4/10 | 8/10 | -40pp |
| `tech.1D.adx.chop` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

> 当日无可映射的权重建议。

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1D.adx.trending` — gainers 6/10 vs losers 1/10 (Δ=50pp)
- ↓ `tech.1H.near_support` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1D.adx.chop` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/1 10:02:40_
