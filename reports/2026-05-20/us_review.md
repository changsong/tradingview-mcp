# 回归检核报告 · US — 2026-05-20

**对照快照:** `reports/2026-05-19` (2026-05-19)
**池子:** 75 只 (成功 75 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:CRDO** | NASDAQ:CRDO | **+8.14%** | 6.9 | 56 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 2 | **NASDAQ:MRVL** | NASDAQ:MRVL | **+4.34%** | 11.1 | 63 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 3 | **NYSE:SM** | NYSE:SM | **+3.47%** | 20.3 | 72 | Trend Continuation | near_resist/chop/bear_div/low_rr |
| 4 | **NYSE:CIEN** | NYSE:CIEN | **+3.32%** | 24.9 | 64 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 5 | **NASDAQ:MU** | NASDAQ:MU | **+2.52%** | 32 | 54 | Trend Follow (HH/HL Intact) | low_rr |
| 6 | **NASDAQ:INTC** | NASDAQ:INTC | **+2.43%** | 30.4 | 49 | Trend Continuation | mom_decay/low_rr |
| 7 | **NYSE:CF** | NYSE:CF | **+2.11%** | 62.4 | 87 | Breakout (Squeeze Release) | near_resist/chop |
| 8 | **NASDAQ:MTSI** | NASDAQ:MTSI | **+0.77%** | 45.9 | 50 | Reversal (Bullish RSI Divergence) | - |
| 9 | **NASDAQ:LITE** | NASDAQ:LITE | **+0.58%** | 16.9 | 50 | Pullback Buy (Near Support) | mom_decay/low_rr |
| 10 | **NYSE:DKS** | NYSE:DKS | **+0.52%** | 11 | 56 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:APLD** | NASDAQ:APLD | **-6.44%** | 22.8 | 64 | Pullback Buy (Near Support) | near_resist/bear_div/low_rr |
| 2 | **NASDAQ:IREN** | NASDAQ:IREN | **-5.39%** | 12.3 | 67 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 3 | **NYSE:VRT** | NYSE:VRT | **-5.03%** | 24.6 | 66 | Trend Continuation | mom_decay/bear_div |
| 4 | **NYSE:LAR** | NYSE:LAR | **-4.47%** | 6 | 64 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 5 | **NYSE:WPM** | NYSE:WPM | **-4.13%** | 23 | 89 | Reversal (Bullish RSI Divergence) | mom_decay/chop |
| 6 | **NYSE:GNRC** | NYSE:GNRC | **-3.59%** | 23.4 | 62 | Trend Continuation | mom_decay/bear_div |
| 7 | **NASDAQ:ADEA** | NASDAQ:ADEA | **-3.58%** | 10.2 | 50 | Range / No Edge | near_resist/low_rr |
| 8 | **NYSE:JOBY** | NYSE:JOBY | **-3.38%** | 6.9 | 71 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 9 | **NYSE:FN** | NYSE:FN | **-3.21%** | 14.5 | 60 | Breakout (Squeeze Release) | near_resist/chop/bear_div/low_rr |
| 10 | **NYSE:ENS** | NYSE:ENS | **-3.12%** | 29.1 | 52 | Trend Continuation | bear_div |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `news.signal.no_trade` | 6/10 | 2/10 | +40pp |
| `tech.4H.rsi.healthy` | 6/10 | 2/10 | +40pp |
| `news.top_news_type.Analyst Action` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.bear_div` | 2/10 | 6/10 | -40pp |
| `tech.1D.divergence.bear` | 2/10 | 6/10 | -40pp |
| `tech.1W.rsi.healthy` | 4/10 | 7/10 | -30pp |
| `tech.1D.obv.down` | 7/10 | 10/10 | -30pp |
| `tech.4H.near_support` | 5/10 | 8/10 | -30pp |
| `tech.1H.adx.trending` | 4/10 | 7/10 | -30pp |
| `tech.1D.dist20.near` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.flag.bear_div`** — 看空背离
  - gainers 2/10 vs losers 6/10 (Δ=-40pp)
  - 当前 -6 → **建议 -4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 5 → **建议 4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `news.signal.no_trade` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.4H.rsi.healthy` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `news.top_news_type.Analyst Action` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.1D.divergence.bear` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.1W.rsi.healthy` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1D.obv.down` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.4H.near_support` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.1H.adx.trending` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/20 15:27:59_
