# 回归检核报告 · US — 2026-09-04

**对照快照:** `reports/2026-09-03` (2026-09-03)
**池子:** 30 只 (成功 30 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:HOOD** | NASDAQ:HOOD | **+16.57%** | 44.7 | 76 | Pullback Buy (Near Support) | chop |
| 2 | **NASDAQ:CRWD** | NASDAQ:CRWD | **+5.68%** | 10.4 | 71 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 3 | **NYSE:WT** | NYSE:WT | **+4.76%** | 64.2 | 50 | Trend Follow (HH/HL Intact) | mom_decay |
| 4 | **NYSE:NEM** | NYSE:NEM | **+4.21%** | 39.9 | 69 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 5 | **NYSE:WPM** | NYSE:WPM | **+3.79%** | 27.4 | 60 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 6 | **NYSE:FAF** | NYSE:FAF | **+3.32%** | 51.7 | 82 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 7 | **NASDAQ:PRGS** | NASDAQ:PRGS | **+2.95%** | 59.1 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/low_rr |
| 8 | **NYSE:APH** | NYSE:APH | **+2.54%** | 10.9 | 61 | Range / No Edge | near_resist/chop/low_rr |
| 9 | **NASDAQ:GEN** | NASDAQ:GEN | **+2.22%** | 28.2 | 47 | Trend Continuation | near_resist/chop/low_rr |
| 10 | **NYSE:HGTY** | NYSE:HGTY | **+1.74%** | 39.6 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:HRMY** | NASDAQ:HRMY | **-2.33%** | 48.3 | 50 | Trend Continuation | bull_trap/near_resist |
| 2 | **NYSE:SCCO** | NYSE:SCCO | **-2.32%** | 26.4 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 3 | **NASDAQ:DASH** | NASDAQ:DASH | **-1.87%** | 37.2 | 82 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 4 | **NYSE:FCX** | NYSE:FCX | **-1.85%** | 42.1 | 46 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 5 | **NYSE:APD** | NYSE:APD | **-1.69%** | 64.6 | 57 | Breakout (Squeeze Release) | near_resist/low_rr |
| 6 | **NYSE:SQM** | NYSE:SQM | **-1.68%** | 55.8 | 50 | Pullback Buy (Near Support) | near_resist/low_rr |
| 7 | **NASDAQ:FIVE** | NASDAQ:FIVE | **-1.28%** | 35.1 | 76 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 8 | **NYSE:CF** | NYSE:CF | **-1.05%** | 15.8 | 75 | Trend Follow (HH/HL Intact) | bull_trap/near_resist/chop/low_rr |
| 9 | **NYSE:RRC** | NYSE:RRC | **-0.26%** | 36.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 10 | **NYSE:RIO** | NYSE:RIO | **+0.09%** | 33.6 | 58 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.near_support` | 7/10 | 3/10 | +40pp |
| `tech.4H.rsi.healthy` | 6/10 | 3/10 | +30pp |
| `tech.4H.dist20.near` | 8/10 | 5/10 | +30pp |
| `news.top_news_type.Industry` | 7/10 | 4/10 | +30pp |
| `tech.1D.obv.down` | 7/10 | 4/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.obv.up` | 3/10 | 6/10 | -30pp |
| `tech.1H.macd.bullish` | 3/10 | 6/10 | -30pp |
| `tech.1D.adx.trending` | 2/10 | 5/10 | -30pp |
| `tech.1H.adx.strong` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.near_support` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.4H.rsi.healthy` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.4H.dist20.near` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `news.top_news_type.Industry` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `tech.1D.obv.down` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↓ `tech.1H.macd.bullish` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1D.adx.trending` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1H.adx.strong` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/4 09:52:25_
