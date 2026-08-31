# 回归检核报告 · US — 2026-08-26

**对照快照:** `reports/2026-08-25` (2026-08-25)
**池子:** 28 只 (成功 28 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **HOOD** | NASDAQ:HOOD | **+8.17%** | 42 | 52 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 2 | **MRVL** | NASDAQ:MRVL | **+4.84%** | 44.6 | 50 | Trend Follow (HH/HL Intact) | chop |
| 3 | **NYSE:NEXA** | NYSE:NEXA | **+3.94%** | - | - | - | - |
| 4 | **FCX** | NYSE:FCX | **+2.71%** | - | 50 | - | - |
| 5 | **SCCO** | NYSE:SCCO | **+2.54%** | - | 50 | - | - |
| 6 | **NEM** | NYSE:NEM | **+2.50%** | - | 50 | - | - |
| 7 | **P** | NYSE:P | **+2.36%** | 37.7 | 50 | Trend Follow (HH/HL Intact) | low_rr |
| 8 | **WPM** | NYSE:WPM | **+2.20%** | - | 50 | - | - |
| 9 | **DASH** | NASDAQ:DASH | **+1.94%** | 53.3 | 57 | Pullback Buy (Near Support) | bear_div |
| 10 | **OTC:SBGSY** | OTC:SBGSY | **+1.66%** | - | - | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:FWONA** | NASDAQ:FWONA | **-1.96%** | - | - | - | - |
| 2 | **NASDAQ:BHRB** | NASDAQ:BHRB | **-1.29%** | - | - | - | - |
| 3 | **NASDAQ:FIVE** | NASDAQ:FIVE | **-1.26%** | - | - | - | - |
| 4 | **LLY** | NYSE:LLY | **-1.06%** | 56 | 70 | Trend Follow (HH/HL Intact) | near_resist |
| 5 | **NASDAQ:OSBC** | NASDAQ:OSBC | **-1.02%** | - | - | - | - |
| 6 | **JOE** | NYSE:JOE | **-0.79%** | - | 50 | - | - |
| 7 | **NYSE:APD** | NYSE:APD | **-0.78%** | - | - | - | - |
| 8 | **RRC** | NYSE:RRC | **-0.63%** | - | 50 | - | - |
| 9 | **NYSE:J** | NYSE:J | **-0.49%** | - | - | - | - |
| 10 | **MNST** | NASDAQ:MNST | **-0.39%** | - | 50 | - | - |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `news.signal.no_trade` | 8/10 | 3/10 | +50pp |
| `news.score.high` | 8/10 | 4/10 | +40pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

> 无显著共同特征。

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

> 当日无可映射的权重建议。

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `news.signal.no_trade` — gainers 8/10 vs losers 3/10 (Δ=50pp)
- ↑ `news.score.high` — gainers 8/10 vs losers 4/10 (Δ=40pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/8/26 09:57:38_
