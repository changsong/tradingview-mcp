# 回归检核报告 · US — 2026-09-29

**对照快照:** `reports/2026-09-28` (2026-09-28)
**池子:** 48 只 (成功 48 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:PANW** | NASDAQ:PANW | **+4.63%** | 18.5 | 58 | Trend Continuation | near_resist/chop/low_rr |
| 2 | **NASDAQ:GRAL** | NASDAQ:GRAL | **+4.52%** | 4.3 | 72 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 3 | **NASDAQ:CRWD** | NASDAQ:CRWD | **+2.82%** | 45.3 | 51 | Trend Follow (HH/HL Intact) | - |
| 4 | **NYSE:P** | NYSE:P | **+2.70%** | 50.3 | 76 | Overextended Chase (High Risk) | overheated |
| 5 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 6 | **NASDAQ:NVDA** | NASDAQ:NVDA | **+1.68%** | 41.3 | 37 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **NYSE:APH** | NYSE:APH | **+0.63%** | 25 | 72 | Trend Continuation | near_resist/chop/low_rr |
| 8 | **NASDAQ:STX** | NASDAQ:STX | **+0.51%** | 26.2 | 54 | Trend Continuation | near_resist/chop/low_rr |
| 9 | **NYSE:TSM** | NYSE:TSM | **+0.50%** | 45.4 | 78 | Reversal (Bullish RSI Divergence) | chop/low_rr |
| 10 | **NYSE:LTC** | NYSE:LTC | **+0.35%** | 45.8 | 48 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:BE** | NYSE:BE | **-8.95%** | 35.3 | 39 | Trend Follow (HH/HL Intact) | chop/low_rr |
| 2 | **NASDAQ:ARM** | NASDAQ:ARM | **-8.70%** | 56.7 | 77 | Pullback Buy (Near Support) | - |
| 3 | **NASDAQ:QCOM** | NASDAQ:QCOM | **-7.17%** | 31.6 | 58 | Trend Follow (HH/HL Intact) | near_resist/bear_div/low_rr |
| 4 | **NASDAQ:VKTX** | NASDAQ:VKTX | **-7.11%** | 27.1 | 47 | Pullback Buy (Near Support) | near_resist/low_rr |
| 5 | **NASDAQ:INTC** | NASDAQ:INTC | **-5.67%** | 19.7 | 63 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/low_rr |
| 6 | **NASDAQ:AEHR** | NASDAQ:AEHR | **-5.65%** | 35 | 64 | Trend Continuation | chop/low_rr |
| 7 | **NASDAQ:META** | NASDAQ:META | **-4.79%** | 17.2 | 62 | Trend Continuation | fake_break/bull_trap/near_resist/low_rr |
| 8 | **NASDAQ:MRVL** | NASDAQ:MRVL | **-3.83%** | 37.6 | 60 | Trend Continuation | - |
| 9 | **NASDAQ:SNDK** | NASDAQ:SNDK | **-3.65%** | 16.6 | 62 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 10 | **NASDAQ:AMD** | NASDAQ:AMD | **-3.61%** | 23.8 | 63 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.divergence.bear` | 5/10 | 1/10 | +40pp |
| `tech.alignment.full` | 7/10 | 3/10 | +40pp |
| `tech.1H.bull_ema` | 7/10 | 3/10 | +40pp |
| `tech.4H.dist20.near` | 5/10 | 2/10 | +30pp |
| `tech.1W.macd.bullish` | 6/10 | 3/10 | +30pp |
| `tech.4H.bull_ema` | 8/10 | 5/10 | +30pp |
| `tech.4H.obv.up` | 8/10 | 5/10 | +30pp |
| `tech.1H.obv.up` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.rs.strong` | 4/10 | 8/10 | -40pp |
| `tech.1W.dist20.overheat` | 6/10 | 9/10 | -30pp |
| `tech.4H.obv.down` | 2/10 | 5/10 | -30pp |
| `tech.1H.adx.trending` | 4/10 | 7/10 | -30pp |
| `tech.1H.obv.down` | 4/10 | 7/10 | -30pp |
| `news.top_news_type.Industry` | 7/10 | 10/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 6/10 vs losers 3/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1H.adx.trending`** — ADX>25 趋势中 (1H)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.divergence.bear` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.alignment.full` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1H.bull_ema` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.4H.dist20.near` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.4H.bull_ema` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.4H.obv.up` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.1H.obv.up` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.rs.strong` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1W.dist20.overheat` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.4H.obv.down` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1H.obv.down` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `news.top_news_type.Industry` — gainers 7/10 vs losers 10/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/29 09:50:49_
