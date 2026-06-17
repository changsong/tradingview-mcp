# 回归检核报告 · US — 2026-06-16

**对照快照:** `reports/2026-06-15` (2026-06-15)
**池子:** 79 只 (成功 79 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **WDC** | NASDAQ:WDC | **+16.10%** | 21.2 | 61 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/bear_div |
| 2 | **NASDAQ:AAOI** | NASDAQ:AAOI | **+13.31%** | - | - | - | - |
| 3 | **NBIS** | NASDAQ:NBIS | **+11.93%** | 34.7 | 50 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 4 | **MU** | NASDAQ:MU | **+10.84%** | 8.3 | 73 | Overextended Chase (High Risk) | overheated/fake_break/mom_decay/near_resist/bear_div/low_rr |
| 5 | **MRVL** | NASDAQ:MRVL | **+10.43%** | 39.3 | 50 | Overextended Chase (High Risk) | overheated/low_rr |
| 6 | **APLD** | NASDAQ:APLD | **+8.83%** | 17 | 61 | Trend Continuation | mom_decay/near_resist/chop/low_rr |
| 7 | **ARM** | NASDAQ:ARM | **+8.33%** | 37.7 | 73 | Overextended Chase (High Risk) | overheated/mom_decay/low_rr |
| 8 | **NASDAQ:TLN** | NASDAQ:TLN | **+7.12%** | - | - | - | - |
| 9 | **AMD** | NASDAQ:AMD | **+6.98%** | 23.4 | 85 | Overextended Chase (High Risk) | overheated/fake_break/mom_decay/near_resist |
| 10 | **TTMI** | NASDAQ:TTMI | **+6.50%** | 24.3 | 50 | Overextended Chase (High Risk) | overheated/fake_break/near_resist |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **INCY** | NASDAQ:INCY | **-6.04%** | 32.7 | 56 | Pullback Buy (Near Support) | near_resist/chop |
| 2 | **NASDAQ:KALU** | NASDAQ:KALU | **-3.95%** | - | - | - | - |
| 3 | **IFS** | NYSE:IFS | **-3.89%** | 28.4 | 50 | Trend Continuation | fake_break/near_resist |
| 4 | **NBN** | NASDAQ:NBN | **-2.91%** | 25 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 5 | **NPB** | NYSE:NPB | **-2.41%** | 35.7 | 52 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 6 | **FOR** | NYSE:FOR | **-2.40%** | 26.5 | 50 | Trend Continuation | near_resist/low_rr |
| 7 | **NASDAQ:OSBC** | NASDAQ:OSBC | **-2.18%** | - | - | - | - |
| 8 | **ORRF** | NASDAQ:ORRF | **-2.13%** | 35.5 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 9 | **BAP** | NYSE:BAP | **-1.96%** | 25.7 | 50 | Trend Continuation | fake_break/near_resist/low_rr |
| 10 | **PFS** | NYSE:PFS | **-1.83%** | 20.1 | 50 | Trend Continuation | near_resist/chop/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.alignment.full` | 8/10 | 1/10 | +70pp |
| `tech.1W.rsi.overheat` | 7/10 | 0/10 | +70pp |
| `tech.1W.adx.strong` | 7/10 | 0/10 | +70pp |
| `tech.1H.bull_ema` | 8/10 | 1/10 | +70pp |
| `tech.flag.overheat` | 6/10 | 0/10 | +60pp |
| `tech.1W.dist20.overheat` | 8/10 | 2/10 | +60pp |
| `tech.1D.dist20.overheat` | 6/10 | 0/10 | +60pp |
| `tech.1H.macd.bullish` | 8/10 | 2/10 | +60pp |
| `tech.1H.obv.up` | 7/10 | 1/10 | +60pp |
| `tech.flag.momentum_decay` | 5/10 | 0/10 | +50pp |
| `tech.rs.strong` | 5/10 | 1/10 | +40pp |
| `tech.4H.obv.up` | 8/10 | 4/10 | +40pp |
| `news.top_news_type.Industry` | 5/10 | 1/10 | +40pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.rsi.healthy` | 1/10 | 8/10 | -70pp |
| `tech.1H.dist20.near` | 0/10 | 6/10 | -60pp |
| `tech.1D.macd.bullish` | 3/10 | 8/10 | -50pp |
| `news.signal.no_trade` | 3/10 | 8/10 | -50pp |
| `tech.flag.chop` | 1/10 | 5/10 | -40pp |
| `tech.1H.obv.down` | 1/10 | 5/10 | -40pp |
| `tech.verdict.long` | 5/10 | 8/10 | -30pp |
| `tech.flag.resistance` | 5/10 | 8/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.rsi.overheat`** — RSI>80超买 (1W)
  - gainers 7/10 vs losers 0/10 (Δ=70pp)
  - 当前 -12 → **建议 -15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:498`
- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 7/10 vs losers 0/10 (Δ=70pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↑ **`tech.flag.overheat`** — 过热惩罚组合
  - gainers 6/10 vs losers 0/10 (Δ=60pp)
  - 当前 -10 → **建议 -12** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal)`
- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 3/10 vs losers 8/10 (Δ=-50pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.flag.chop`** — 震荡市
  - gainers 1/10 vs losers 5/10 (Δ=-40pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.alignment.full` — gainers 8/10 vs losers 1/10 (Δ=70pp)
- ↑ `tech.1H.bull_ema` — gainers 8/10 vs losers 1/10 (Δ=70pp)
- ↑ `tech.1W.dist20.overheat` — gainers 8/10 vs losers 2/10 (Δ=60pp)
- ↑ `tech.1D.dist20.overheat` — gainers 6/10 vs losers 0/10 (Δ=60pp)
- ↑ `tech.1H.macd.bullish` — gainers 8/10 vs losers 2/10 (Δ=60pp)
- ↑ `tech.1H.obv.up` — gainers 7/10 vs losers 1/10 (Δ=60pp)
- ↑ `tech.flag.momentum_decay` — gainers 5/10 vs losers 0/10 (Δ=50pp)
- ↑ `tech.rs.strong` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.4H.obv.up` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `news.top_news_type.Industry` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↓ `tech.1W.rsi.healthy` — gainers 1/10 vs losers 8/10 (Δ=-70pp)
- ↓ `tech.1H.dist20.near` — gainers 0/10 vs losers 6/10 (Δ=-60pp)
- ↓ `news.signal.no_trade` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.1H.obv.down` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.verdict.long` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.flag.resistance` — gainers 5/10 vs losers 8/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/16 12:45:36_
