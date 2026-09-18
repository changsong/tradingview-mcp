# 回归检核报告 · US — 2026-09-08

**对照快照:** `reports/2026-09-07` (2026-09-07)
**池子:** 40 只 (成功 40 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **SNDK** | NASDAQ:SNDK | **+11.90%** | 34.6 | 63 | Overextended Chase (High Risk) | overheated/chop/low_rr |
| 2 | **MU** | NASDAQ:MU | **+6.10%** | 39.8 | 52 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 3 | **FIVE** | NASDAQ:FIVE | **+5.10%** | 52.1 | 50 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 4 | **TSM** | NYSE:TSM | **+2.85%** | 58.4 | 59 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 5 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 20.5 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 6 | **ELF** | NYSE:ELF | **+2.10%** | 31.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/mom_decay/near_resist/bear_div/low_rr |
| 7 | **DELL** | NYSE:DELL | **+1.50%** | 37.8 | 50 | Overextended Chase (High Risk) | overheated/near_resist/chop |
| 8 | **HRMY** | NASDAQ:HRMY | **+0.93%** | 55.9 | 53 | Trend Continuation | near_resist |
| 9 | **APH** | NYSE:APH | **+0.87%** | 22.3 | 65 | Trend Continuation | near_resist/chop/low_rr |
| 10 | **NVDA** | NASDAQ:NVDA | **+0.84%** | 35.4 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/bear_div/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **KRYS** | NASDAQ:KRYS | **-3.56%** | 42 | 52 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 2 | **CF** | NYSE:CF | **-3.24%** | 40.9 | 55 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 3 | **RELY** | NASDAQ:RELY | **-2.79%** | 33.2 | 61 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |
| 4 | **AAPL** | NASDAQ:AAPL | **-2.51%** | 35.7 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 5 | **GEN** | NASDAQ:GEN | **-2.17%** | 21.9 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 6 | **VRTX** | NASDAQ:VRTX | **-2.12%** | 30.2 | 55 | Trend Follow (HH/HL Intact) | fake_break/near_resist/bear_div |
| 7 | **HOOD** | NASDAQ:HOOD | **-2.09%** | 42 | 61 | Pullback Buy (Near Support) | overheated/fake_break/near_resist/low_rr |
| 8 | **NEM** | NYSE:NEM | **-1.79%** | 38.7 | 51 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 9 | **LTC** | NYSE:LTC | **-1.65%** | 52.3 | 100 | Pullback Buy (Near Support) | bear_div |
| 10 | **AJG** | NYSE:AJG | **-1.49%** | 35.3 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.bull_ema` | 10/10 | 3/10 | +70pp |
| `tech.1H.bull_ema` | 7/10 | 1/10 | +60pp |
| `tech.1H.macd.bullish` | 7/10 | 1/10 | +60pp |
| `tech.1H.obv.up` | 8/10 | 2/10 | +60pp |
| `tech.4H.bull_ema` | 7/10 | 3/10 | +40pp |
| `tech.1H.rsi.healthy` | 7/10 | 3/10 | +40pp |
| `tech.flag.chop` | 6/10 | 3/10 | +30pp |
| `tech.1D.adx.chop` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.obv.down` | 1/10 | 7/10 | -60pp |
| `tech.type.pullback` | 1/10 | 6/10 | -50pp |
| `tech.1D.adx.trending` | 1/10 | 6/10 | -50pp |
| `tech.1D.near_support` | 2/10 | 6/10 | -40pp |
| `tech.4H.dist20.near` | 2/10 | 6/10 | -40pp |
| `news.top_news_type.Analyst Action` | 1/10 | 5/10 | -40pp |
| `tech.1W.rsi.healthy` | 7/10 | 10/10 | -30pp |
| `tech.4H.adx.trending` | 4/10 | 7/10 | -30pp |
| `tech.1W.obv.up` | 7/10 | 10/10 | -30pp |
| `tech.1D.dist20.near` | 2/10 | 5/10 | -30pp |
| `tech.1H.vol.expanding` | 2/10 | 5/10 | -30pp |
| `news.top_news_type.Earnings` | 2/10 | 5/10 | -30pp |
| `tech.1W.macd.bullish` | 5/10 | 8/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 10/10 vs losers 3/10 (Δ=70pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 6/10 vs losers 3/10 (Δ=30pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 7/10 vs losers 10/10 (Δ=-30pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 5 → **建议 4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.bull_ema` — gainers 7/10 vs losers 1/10 (Δ=60pp)
- ↑ `tech.1H.macd.bullish` — gainers 7/10 vs losers 1/10 (Δ=60pp)
- ↑ `tech.1H.obv.up` — gainers 8/10 vs losers 2/10 (Δ=60pp)
- ↑ `tech.4H.bull_ema` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1H.rsi.healthy` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1D.adx.chop` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.1H.obv.down` — gainers 1/10 vs losers 7/10 (Δ=-60pp)
- ↓ `tech.type.pullback` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1D.adx.trending` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1D.near_support` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.4H.dist20.near` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `news.top_news_type.Analyst Action` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1W.rsi.healthy` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.4H.adx.trending` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1H.vol.expanding` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `news.top_news_type.Earnings` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/8 09:49:12_
