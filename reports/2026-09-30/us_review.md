# 回归检核报告 · US — 2026-09-30

**对照快照:** `reports/2026-09-29` (2026-09-29)
**池子:** 53 只 (成功 53 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:BE** | NYSE:BE | **+10.80%** | 33.6 | 72 | Trend Follow (HH/HL Intact) | mom_decay/chop |
| 2 | **NASDAQ:LITE** | NASDAQ:LITE | **+5.66%** | 16.9 | 69 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 3 | **NASDAQ:MRVL** | NASDAQ:MRVL | **+4.51%** | 15.1 | 43 | Pullback Buy (Near Support) | near_resist/low_rr |
| 4 | **NASDAQ:ARM** | NASDAQ:ARM | **+3.65%** | 29.1 | 66 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 5 | **NASDAQ:ASML** | NASDAQ:ASML | **+3.56%** | 21.5 | 78 | Pullback Buy (Near Support) | fake_break/near_resist/chop/low_rr |
| 6 | **NYSE:ASX** | NYSE:ASX | **+3.47%** | 36.9 | 80 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 7 | **NASDAQ:META** | NASDAQ:META | **+3.24%** | 36.5 | 68 | Pullback Buy (Near Support) | near_resist/low_rr |
| 8 | **NASDAQ:GRAL** | NASDAQ:GRAL | **+2.97%** | 1 | 84 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 9 | **NASDAQ:ENTG** | NASDAQ:ENTG | **+2.75%** | 25.4 | 54 | Trend Continuation | near_resist/chop/low_rr |
| 10 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:TEM** | NASDAQ:TEM | **-2.94%** | 42.7 | 54 | Pullback Buy (Near Support) | overheated |
| 2 | **OTC:SMTGY** | OTC:SMTGY | **-2.84%** | 13.8 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 3 | **NASDAQ:AAPL** | NASDAQ:AAPL | **-2.66%** | 40.4 | 72 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 4 | **NASDAQ:SMCI** | NASDAQ:SMCI | **-1.82%** | 13.4 | 69 | Trend Continuation | near_resist/bear_div/low_rr |
| 5 | **NYSE:HPE** | NYSE:HPE | **-1.82%** | 16.8 | 74 | Trend Follow (HH/HL Intact) | near_resist/chop/bear_div/low_rr |
| 6 | **NASDAQ:QCOM** | NASDAQ:QCOM | **-1.80%** | 25.2 | 54 | Trend Follow (HH/HL Intact) | bear_div/low_rr |
| 7 | **NYSE:IFS** | NYSE:IFS | **-1.73%** | 39.6 | 50 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 8 | **NYSE:GRMN** | NYSE:GRMN | **-1.30%** | 36.2 | 62 | Trend Continuation | chop/low_rr |
| 9 | **NYSE:ANET** | NYSE:ANET | **-1.01%** | 31.2 | 69 | Trend Continuation | near_resist/chop/low_rr |
| 10 | **NYSE:DOCN** | NYSE:DOCN | **-0.94%** | 13.5 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.sqz.active` | 5/10 | 0/10 | +50pp |
| `tech.score.mid` | 7/10 | 3/10 | +40pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.dist20.near` | 4/10 | 9/10 | -50pp |
| `tech.1W.macd.bullish` | 4/10 | 7/10 | -30pp |
| `news.signal.no_trade` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.sqz.active`** — Squeeze压缩 爆发前 (1W)
  - gainers 5/10 vs losers 0/10 (Δ=50pp)
  - 当前 18 → **建议 23** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:515`
- ↑ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 7/10 vs losers 3/10 (Δ=40pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↓ `tech.4H.dist20.near` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `news.signal.no_trade` — gainers 3/10 vs losers 6/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/30 09:51:51_
