# 回归检核报告 · US — 2026-06-25

**对照快照:** `reports/2026-06-24` (2026-06-24)
**池子:** 84 只 (成功 84 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **GLW** | NYSE:GLW | **+6.06%** | 35.7 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 2 | **FOR** | NYSE:FOR | **+5.28%** | 25.6 | 50 | Trend Continuation | near_resist/bear_div/low_rr |
| 3 | **RELY** | NASDAQ:RELY | **+5.15%** | 37.1 | 50 | Trend Continuation | near_resist/low_rr |
| 4 | **CARR** | NYSE:CARR | **+4.68%** | 33.1 | 50 | Trend Follow (HH/HL Intact) | bear_div/low_rr |
| 5 | **DY** | NYSE:DY | **+4.05%** | 24.4 | 52 | Trend Continuation | mom_decay/near_resist/chop/low_rr |
| 6 | **PACS** | NYSE:PACS | **+3.96%** | 40.3 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **SN** | NYSE:SN | **+3.92%** | 26.2 | 50 | Trend Follow (HH/HL Intact) | bear_div |
| 8 | **INCY** | NASDAQ:INCY | **+3.89%** | 54.5 | 53 | Pullback Buy (Near Support) | near_resist/chop |
| 9 | **GNRC** | NYSE:GNRC | **+3.50%** | 34.5 | 65 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 10 | **NASDAQ:NBIX** | NASDAQ:NBIX | **+2.86%** | - | - | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NBIS** | NASDAQ:NBIS | **-5.66%** | 9 | 50 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/bear_div/low_rr |
| 2 | **CORZ** | NASDAQ:CORZ | **-4.70%** | 33.3 | 50 | Breakout (Squeeze Release) | mom_decay/bear_div/low_rr |
| 3 | **AMKR** | NASDAQ:AMKR | **-4.57%** | 36.3 | 79 | Trend Continuation | low_rr |
| 4 | **STX** | NASDAQ:STX | **-4.37%** | 48.1 | 45 | Trend Follow (HH/HL Intact) | - |
| 5 | **VICR** | NASDAQ:VICR | **-4.12%** | 36.5 | 53 | Trend Follow (HH/HL Intact) | chop/low_rr |
| 6 | **WDC** | NASDAQ:WDC | **-4.01%** | 37.4 | 50 | Trend Follow (HH/HL Intact) | bear_div |
| 7 | **FAF** | NYSE:FAF | **-3.15%** | 31.6 | 52 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 8 | **MS** | NYSE:MS | **-2.73%** | 42.6 | 67 | Reversal (Bullish RSI Divergence) | near_resist/bear_div |
| 9 | **SNDK** | NASDAQ:SNDK | **-2.50%** | 33.1 | 53 | Trend Follow (HH/HL Intact) | bear_div |
| 10 | **PANW** | NASDAQ:PANW | **-1.94%** | 48.1 | 53 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.rsi.healthy` | 9/10 | 3/10 | +60pp |
| `tech.1D.dist20.near` | 5/10 | 0/10 | +50pp |
| `tech.flag.resistance` | 7/10 | 3/10 | +40pp |
| `tech.4H.adx.chop` | 5/10 | 1/10 | +40pp |
| `tech.4H.dist20.near` | 9/10 | 5/10 | +40pp |
| `tech.flag.chop` | 5/10 | 2/10 | +30pp |
| `tech.1D.adx.chop` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.adx.strong` | 3/10 | 9/10 | -60pp |
| `tech.1W.dist20.overheat` | 3/10 | 9/10 | -60pp |
| `tech.1W.rsi.overheat` | 0/10 | 6/10 | -60pp |
| `tech.1D.obv.up` | 5/10 | 10/10 | -50pp |
| `tech.rs.strong` | 4/10 | 9/10 | -50pp |
| `tech.1D.adx.strong` | 0/10 | 5/10 | -50pp |
| `tech.4H.macd.bullish` | 5/10 | 9/10 | -40pp |
| `tech.1H.obv.up` | 2/10 | 5/10 | -30pp |
| `news.top_news_type.Industry` | 2/10 | 5/10 | -30pp |
| `tech.4H.adx.trending` | 2/10 | 5/10 | -30pp |
| `tech.1H.adx.strong` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 5/10 vs losers 0/10 (Δ=50pp)
  - 当前 5 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 3/10 vs losers 9/10 (Δ=-60pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1W.rsi.overheat`** — RSI>80超买 (1W)
  - gainers 0/10 vs losers 6/10 (Δ=-60pp)
  - 当前 -12 → **建议 -9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:498`
- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 5/10 vs losers 10/10 (Δ=-50pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1D.adx.strong`** — ADX>30 强趋势 (1D)
  - gainers 0/10 vs losers 5/10 (Δ=-50pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.rsi.healthy` — gainers 9/10 vs losers 3/10 (Δ=60pp)
- ↑ `tech.flag.resistance` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.4H.adx.chop` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.4H.dist20.near` — gainers 9/10 vs losers 5/10 (Δ=40pp)
- ↑ `tech.1D.adx.chop` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.1W.dist20.overheat` — gainers 3/10 vs losers 9/10 (Δ=-60pp)
- ↓ `tech.rs.strong` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.4H.macd.bullish` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.1H.obv.up` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `news.top_news_type.Industry` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.4H.adx.trending` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1H.adx.strong` — gainers 3/10 vs losers 6/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/25 12:26:13_
