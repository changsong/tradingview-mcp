# 回归检核报告 · US — 2026-05-26

**对照快照:** `reports/2026-05-24` (2026-05-24)
**池子:** 63 只 (成功 63 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:DELL** | NYSE:DELL | **+16.77%** | 20.2 | 84 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 2 | **NASDAQ:CRDO** | NASDAQ:CRDO | **+12.94%** | 33.9 | 71 | Overextended Chase (High Risk) | overheated/mom_decay/near_resist |
| 3 | **NYSE:HPE** | NYSE:HPE | **+10.63%** | 33.3 | 50 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 4 | **NYSE:P** | NYSE:P | **+10.38%** | 53.8 | 52 | Pullback Buy (Near Support) | overheated/mom_decay/near_resist |
| 5 | **NYSE:NOK** | NYSE:NOK | **+9.10%** | 28 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist/bear_div |
| 6 | **NYSE:GNRC** | NYSE:GNRC | **+9.02%** | - | - | - | - |
| 7 | **NASDAQ:TTMI** | NASDAQ:TTMI | **+8.81%** | - | - | - | - |
| 8 | **NASDAQ:RKLB** | NASDAQ:RKLB | **+8.22%** | 32.6 | 56 | Overextended Chase (High Risk) | overheated/near_resist/low_rr |
| 9 | **NASDAQ:VSAT** | NASDAQ:VSAT | **+5.37%** | 35 | 72 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 10 | **NASDAQ:SANM** | NASDAQ:SANM | **+5.15%** | 16.6 | 55 | Trend Continuation | fake_break/mom_decay/near_resist/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:APLD** | NASDAQ:APLD | **-4.48%** | 33.4 | 88 | Overextended Chase (High Risk) | overheated/mom_decay/bear_div/low_rr |
| 2 | **NYSE:ENS** | NYSE:ENS | **-2.79%** | 33.8 | 100 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 3 | **NASDAQ:IREN** | NASDAQ:IREN | **-2.12%** | 26.4 | 70 | Trend Continuation | mom_decay/near_resist/low_rr |
| 4 | **NASDAQ:NVDA** | NASDAQ:NVDA | **-1.90%** | 22.3 | 74 | Trend Continuation | mom_decay/near_resist/low_rr |
| 5 | **NYSE:BE** | NYSE:BE | **-1.75%** | 8.3 | 83 | Trend Continuation | fake_break/mom_decay/near_resist/bear_div/low_rr |
| 6 | **NASDAQ:SEDG** | NASDAQ:SEDG | **-1.67%** | 23.7 | 55 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/low_rr |
| 7 | **NASDAQ:MU** | NASDAQ:MU | **-1.46%** | 37.8 | 79 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 8 | **NASDAQ:GOOGL** | NASDAQ:GOOGL | **-1.21%** | 34.5 | 80 | Pullback Buy (Near Support) | mom_decay/bear_div |
| 9 | **NYSE:HG** | NYSE:HG | **-0.97%** | 21.5 | 56 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 10 | **NYSE:SPNT** | NYSE:SPNT | **-0.89%** | 35.3 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.alignment.full` | 8/10 | 0/10 | +80pp |
| `tech.1H.bull_ema` | 8/10 | 0/10 | +80pp |
| `tech.1H.obv.up` | 8/10 | 1/10 | +70pp |
| `tech.1H.macd.bullish` | 8/10 | 3/10 | +50pp |
| `tech.flag.overheat` | 6/10 | 2/10 | +40pp |
| `tech.1D.obv.up` | 8/10 | 4/10 | +40pp |
| `tech.1D.dist20.overheat` | 6/10 | 2/10 | +40pp |
| `tech.4H.obv.up` | 8/10 | 4/10 | +40pp |
| `tech.rs.strong` | 7/10 | 4/10 | +30pp |
| `tech.4H.bull_ema` | 8/10 | 5/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.obv.down` | 0/10 | 9/10 | -90pp |
| `tech.1H.dist20.near` | 2/10 | 10/10 | -80pp |
| `tech.flag.bad_rr` | 3/10 | 9/10 | -60pp |
| `tech.1H.near_support` | 1/10 | 7/10 | -60pp |
| `tech.1D.obv.down` | 0/10 | 6/10 | -60pp |
| `tech.4H.obv.down` | 0/10 | 6/10 | -60pp |
| `tech.1W.rsi.healthy` | 2/10 | 7/10 | -50pp |
| `tech.4H.dist20.near` | 0/10 | 5/10 | -50pp |
| `tech.verdict.long` | 5/10 | 9/10 | -40pp |
| `tech.1W.adx.trending` | 2/10 | 6/10 | -40pp |
| `tech.1D.rsi.healthy` | 6/10 | 10/10 | -40pp |
| `news.top_news_type.Industry` | 6/10 | 9/10 | -30pp |
| `tech.1H.rsi.healthy` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.flag.overheat`** — 过热惩罚组合
  - gainers 6/10 vs losers 2/10 (Δ=40pp)
  - 当前 -10 → **建议 -12** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal)`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 8/10 vs losers 4/10 (Δ=40pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 3/10 vs losers 9/10 (Δ=-60pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 6/10 vs losers 10/10 (Δ=-40pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.alignment.full` — gainers 8/10 vs losers 0/10 (Δ=80pp)
- ↑ `tech.1H.bull_ema` — gainers 8/10 vs losers 0/10 (Δ=80pp)
- ↑ `tech.1H.obv.up` — gainers 8/10 vs losers 1/10 (Δ=70pp)
- ↑ `tech.1H.macd.bullish` — gainers 8/10 vs losers 3/10 (Δ=50pp)
- ↑ `tech.1D.dist20.overheat` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.4H.obv.up` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.rs.strong` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `tech.4H.bull_ema` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↓ `tech.1H.obv.down` — gainers 0/10 vs losers 9/10 (Δ=-90pp)
- ↓ `tech.1H.dist20.near` — gainers 2/10 vs losers 10/10 (Δ=-80pp)
- ↓ `tech.1H.near_support` — gainers 1/10 vs losers 7/10 (Δ=-60pp)
- ↓ `tech.1D.obv.down` — gainers 0/10 vs losers 6/10 (Δ=-60pp)
- ↓ `tech.4H.obv.down` — gainers 0/10 vs losers 6/10 (Δ=-60pp)
- ↓ `tech.1W.rsi.healthy` — gainers 2/10 vs losers 7/10 (Δ=-50pp)
- ↓ `tech.4H.dist20.near` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.verdict.long` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.1W.adx.trending` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `news.top_news_type.Industry` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1H.rsi.healthy` — gainers 3/10 vs losers 6/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/26 16:54:17_
