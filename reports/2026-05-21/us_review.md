# 回归检核报告 · US — 2026-05-21

**对照快照:** `reports/2026-05-20` (2026-05-20)
**池子:** 56 只 (成功 56 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:IREN** | NASDAQ:IREN | **+10.41%** | 7.1 | 60 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 2 | **NASDAQ:RMBS** | NASDAQ:RMBS | **+9.45%** | 18.2 | 48 | Pullback Buy (Near Support) | mom_decay |
| 3 | **NASDAQ:CRDO** | NASDAQ:CRDO | **+8.28%** | 18.9 | 47 | Pullback Buy (Near Support) | mom_decay |
| 4 | **NASDAQ:AMD** | NASDAQ:AMD | **+8.10%** | 28.6 | 64 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 5 | **NASDAQ:APLD** | NASDAQ:APLD | **+7.92%** | 3.8 | 63 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 6 | **NASDAQ:INTC** | NASDAQ:INTC | **+7.36%** | 35.7 | 64 | Trend Continuation | mom_decay/low_rr |
| 7 | **NASDAQ:LRCX** | NASDAQ:LRCX | **+6.84%** | 3.6 | 65 | Range / No Edge | near_resist/chop/bear_div/low_rr |
| 8 | **NASDAQ:ASML** | NASDAQ:ASML | **+6.21%** | 17.7 | 94 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 9 | **NASDAQ:VSAT** | NASDAQ:VSAT | **+6.09%** | 33.5 | 50 | Trend Follow (HH/HL Intact) | mom_decay/bear_div/low_rr |
| 10 | **NASDAQ:MRVL** | NASDAQ:MRVL | **+5.97%** | 24.6 | 90 | Trend Follow (HH/HL Intact) | mom_decay/bear_div/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:FN** | NYSE:FN | **-2.29%** | 13.6 | 52 | Breakout (Squeeze Release) | mom_decay/chop/bear_div/low_rr |
| 2 | **NYSE:AROC** | NYSE:AROC | **-1.97%** | 43.5 | 50 | Trend Continuation | mom_decay/chop/low_rr |
| 3 | **NASDAQ:BGC** | NASDAQ:BGC | **-0.71%** | 34.3 | 64 | Breakout (Squeeze Release) | mom_decay/near_resist/bear_div/low_rr |
| 4 | **NASDAQ:RKLB** | NASDAQ:RKLB | **-0.57%** | 47.6 | 48 | Overextended Chase (High Risk) | overheated |
| 5 | **CBOE:CBOE** | CBOE:CBOE | **-0.56%** | 36.6 | 75 | Trend Follow (HH/HL Intact) | bull_trap/near_resist |
| 6 | **NYSE:NOK** | NYSE:NOK | **-0.37%** | 21 | 59 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 7 | **NASDAQ:PRDO** | NASDAQ:PRDO | **-0.24%** | 31.3 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop |
| 8 | **NASDAQ:ADEA** | NASDAQ:ADEA | **-0.04%** | 11.9 | 50 | Range / No Edge | low_rr |
| 9 | **NYSE:SPNT** | NYSE:SPNT | **-0.04%** | 43 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 10 | **NYSE:JHG** | NYSE:JHG | **+0.00%** | 60.1 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.macd.bullish` | 8/10 | 2/10 | +60pp |
| `tech.4H.adx.trending` | 6/10 | 2/10 | +40pp |
| `tech.1H.divergence.bull` | 5/10 | 1/10 | +40pp |
| `news.top_news_type.Analyst Action` | 7/10 | 3/10 | +40pp |
| `tech.1W.adx.trending` | 5/10 | 2/10 | +30pp |
| `tech.1D.obv.down` | 9/10 | 6/10 | +30pp |
| `tech.1H.obv.down` | 8/10 | 5/10 | +30pp |
| `tech.score.mid` | 6/10 | 3/10 | +30pp |
| `tech.1W.dist20.overheat` | 7/10 | 4/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.macd.bullish` | 0/10 | 6/10 | -60pp |
| `news.signal.no_trade` | 3/10 | 8/10 | -50pp |
| `tech.1D.bull_ema` | 1/10 | 6/10 | -50pp |
| `tech.4H.dist20.near` | 4/10 | 8/10 | -40pp |
| `tech.score.high` | 1/10 | 5/10 | -40pp |
| `tech.1D.dist20.near` | 3/10 | 6/10 | -30pp |
| `tech.1H.obv.up` | 2/10 | 5/10 | -30pp |
| `tech.1W.bull_ema` | 5/10 | 8/10 | -30pp |
| `tech.1W.obv.up` | 6/10 | 9/10 | -30pp |
| `tech.4H.rsi.healthy` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 6/10 vs losers 3/10 (Δ=30pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 1/10 vs losers 6/10 (Δ=-50pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 5 → **建议 4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↓ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.macd.bullish` — gainers 8/10 vs losers 2/10 (Δ=60pp)
- ↑ `tech.4H.adx.trending` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.1H.divergence.bull` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `news.top_news_type.Analyst Action` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1W.adx.trending` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.1D.obv.down` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↑ `tech.1H.obv.down` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.1W.dist20.overheat` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↓ `tech.4H.macd.bullish` — gainers 0/10 vs losers 6/10 (Δ=-60pp)
- ↓ `news.signal.no_trade` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.4H.dist20.near` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.score.high` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.obv.up` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1W.obv.up` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.4H.rsi.healthy` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/21 11:50:22_
