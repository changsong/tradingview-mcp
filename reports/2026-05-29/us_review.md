# 回归检核报告 · US — 2026-05-29

**对照快照:** `reports/2026-05-28` (2026-05-28)
**池子:** 62 只 (成功 62 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:NBIS** | NASDAQ:NBIS | **+8.62%** | - | - | - | - |
| 2 | **NYSE:QBTS** | NYSE:QBTS | **+7.31%** | - | - | - | - |
| 3 | **NASDAQ:AMD** | NASDAQ:AMD | **+4.55%** | 19.1 | 55 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |
| 4 | **NYSE:DELL** | NYSE:DELL | **+3.84%** | 17.5 | 93 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 5 | **NYSE:DKS** | NYSE:DKS | **+3.24%** | 42.1 | 36 | Breakout (Squeeze Release) | near_resist/chop |
| 6 | **NASDAQ:MRVL** | NASDAQ:MRVL | **+3.09%** | 39.4 | 96 | Overextended Chase (High Risk) | overheated/bear_div |
| 7 | **NYSE:HPE** | NYSE:HPE | **+2.72%** | 18.3 | 79 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |
| 8 | **NASDAQ:CORZ** | NASDAQ:CORZ | **+2.06%** | 10.6 | 67 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist/bear_div |
| 9 | **NYSE:BA** | NYSE:BA | **+2.00%** | 34.7 | 84 | Pullback Buy (Near Support) | mom_decay/near_resist/chop |
| 10 | **NASDAQ:APLD** | NASDAQ:APLD | **+1.37%** | 23.3 | 84 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/bear_div |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:IREN** | NASDAQ:IREN | **-5.59%** | 32.6 | 94 | Overextended Chase (High Risk) | overheated/low_rr |
| 2 | **NYSE:AROC** | NYSE:AROC | **-4.87%** | 10.4 | 45 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/bear_div |
| 3 | **NYSE:GLW** | NYSE:GLW | **-4.15%** | 19.9 | 60 | Trend Follow (HH/HL Intact) | mom_decay/bear_div/low_rr |
| 4 | **NYSE:SPNT** | NYSE:SPNT | **-4.04%** | 21.9 | 52 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 5 | **NASDAQ:ADEA** | NASDAQ:ADEA | **-3.72%** | 30.5 | 50 | Trend Continuation | mom_decay |
| 6 | **NYSE:MOD** | NYSE:MOD | **-3.30%** | 34.6 | 83 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 7 | **NYSE:ENS** | NYSE:ENS | **-3.13%** | 21.4 | 83 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 8 | **NYSE:PACS** | NYSE:PACS | **-3.06%** | 31.6 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 9 | **NYSE:NOK** | NYSE:NOK | **-2.55%** | 42.9 | 86 | Overextended Chase (High Risk) | overheated/bear_div |
| 10 | **NASDAQ:MTSI** | NASDAQ:MTSI | **-2.39%** | 13.7 | 72 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.obv.up` | 7/10 | 3/10 | +40pp |
| `tech.flag.overheat` | 6/10 | 3/10 | +30pp |
| `tech.1D.macd.bullish` | 7/10 | 4/10 | +30pp |
| `tech.1D.dist20.overheat` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.bad_rr` | 0/10 | 7/10 | -70pp |
| `tech.1H.obv.down` | 1/10 | 7/10 | -60pp |
| `tech.1W.obv.up` | 6/10 | 10/10 | -40pp |
| `tech.flag.momentum_decay` | 2/10 | 6/10 | -40pp |
| `tech.1W.rsi.healthy` | 2/10 | 6/10 | -40pp |
| `tech.4H.adx.chop` | 1/10 | 5/10 | -40pp |
| `tech.1D.obv.down` | 1/10 | 5/10 | -40pp |
| `tech.1W.adx.strong` | 4/10 | 7/10 | -30pp |
| `tech.1H.dist20.near` | 6/10 | 9/10 | -30pp |
| `tech.4H.dist20.near` | 2/10 | 5/10 | -30pp |
| `tech.1D.rsi.healthy` | 3/10 | 6/10 | -30pp |
| `news.top_news_type.Analyst Action` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.flag.overheat`** — 过热惩罚组合
  - gainers 6/10 vs losers 3/10 (Δ=30pp)
  - 当前 -10 → **建议 -12** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal)`
- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 7/10 vs losers 4/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 0/10 vs losers 7/10 (Δ=-70pp)
  - 当前 -3 → **建议 -2** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 6/10 vs losers 10/10 (Δ=-40pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.obv.up` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1D.dist20.overheat` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.1H.obv.down` — gainers 1/10 vs losers 7/10 (Δ=-60pp)
- ↓ `tech.flag.momentum_decay` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.1W.rsi.healthy` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.4H.adx.chop` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1D.obv.down` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.dist20.near` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.4H.dist20.near` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `news.top_news_type.Analyst Action` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/29 13:50:37_
