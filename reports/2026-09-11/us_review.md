# 回归检核报告 · US — 2026-09-11

**对照快照:** `reports/2026-09-10` (2026-09-10)
**池子:** 44 只 (成功 44 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 2 | **HGTY** | NYSE:HGTY | **+1.73%** | 35.5 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/bear_div/low_rr |
| 3 | **WT** | NYSE:WT | **+1.51%** | 49.1 | 51 | Pullback Buy (Near Support) | mom_decay |
| 4 | **GEN** | NASDAQ:GEN | **+0.69%** | 8.7 | 59 | Trend Continuation | mom_decay/near_resist/chop/bear_div/low_rr |
| 5 | **NYSE:PACS** | NYSE:PACS | **+0.56%** | 37.9 | - | Breakout (Squeeze Release) | mom_decay/near_resist |
| 6 | **SM** | NYSE:SM | **+0.53%** | 27 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div/low_rr |
| 7 | **C** | NYSE:C | **+0.51%** | 29.6 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 8 | **SPNT** | NYSE:SPNT | **+0.41%** | 43.6 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 9 | **RRC** | NYSE:RRC | **+0.34%** | 47.8 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 10 | **BGC** | NASDAQ:BGC | **+0.25%** | 18.4 | 50 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop/bear_div/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NEXA** | NYSE:NEXA | **-7.79%** | 27.5 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 2 | **SCCO** | NYSE:SCCO | **-7.23%** | 31.9 | 52 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/low_rr |
| 3 | **FCX** | NYSE:FCX | **-6.59%** | 33.4 | 56 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 4 | **HPE** | NYSE:HPE | **-6.25%** | 36.9 | 50 | Trend Continuation | chop/low_rr |
| 5 | **PGY** | NASDAQ:PGY | **-6.02%** | 18.8 | 55 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 6 | **LITE** | NASDAQ:LITE | **-5.39%** | 29.5 | 66 | Breakout (Squeeze Release) | fake_break/near_resist/chop/low_rr |
| 7 | **DELL** | NYSE:DELL | **-5.35%** | 39.2 | 50 | Trend Continuation | chop |
| 8 | **NBIS** | NASDAQ:NBIS | **-5.09%** | 38.5 | 50 | Trend Continuation | chop/low_rr |
| 9 | **MU** | NASDAQ:MU | **-4.90%** | 36.3 | 50 | Breakout (Squeeze Release) | fake_break/near_resist/chop/low_rr |
| 10 | **RIO** | NYSE:RIO | **-4.19%** | 59.7 | 76 | Pullback Buy (Near Support) | mom_decay/near_resist |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.vol.expanding` | 8/10 | 2/10 | +60pp |
| `tech.1D.obv.down` | 5/10 | 1/10 | +40pp |
| `tech.1D.dist20.near` | 7/10 | 3/10 | +40pp |
| `tech.4H.obv.down` | 6/10 | 2/10 | +40pp |
| `tech.4H.dist20.near` | 9/10 | 5/10 | +40pp |
| `tech.flag.resistance` | 9/10 | 6/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.bull_ema` | 4/10 | 9/10 | -50pp |
| `tech.1H.adx.strong` | 1/10 | 6/10 | -50pp |
| `tech.1W.dist20.overheat` | 3/10 | 7/10 | -40pp |
| `tech.1D.bull_ema` | 4/10 | 8/10 | -40pp |
| `tech.1D.obv.up` | 5/10 | 9/10 | -40pp |
| `tech.4H.obv.up` | 4/10 | 8/10 | -40pp |
| `news.top_news_type.Industry` | 2/10 | 6/10 | -40pp |
| `tech.1W.adx.strong` | 3/10 | 6/10 | -30pp |
| `tech.4H.macd.bullish` | 3/10 | 6/10 | -30pp |
| `tech.1H.rsi.healthy` | 5/10 | 8/10 | -30pp |
| `tech.flag.chop` | 4/10 | 7/10 | -30pp |
| `tech.1D.adx.chop` | 4/10 | 7/10 | -30pp |
| `tech.4H.rsi.healthy` | 6/10 | 9/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 7/10 vs losers 3/10 (Δ=40pp)
  - 当前 5 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 4/10 vs losers 8/10 (Δ=-40pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.flag.chop`** — 震荡市
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.vol.expanding` — gainers 8/10 vs losers 2/10 (Δ=60pp)
- ↑ `tech.1D.obv.down` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.4H.obv.down` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.4H.dist20.near` — gainers 9/10 vs losers 5/10 (Δ=40pp)
- ↑ `tech.flag.resistance` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↓ `tech.4H.bull_ema` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.1H.adx.strong` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1W.dist20.overheat` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.4H.obv.up` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `news.top_news_type.Industry` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.4H.macd.bullish` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.rsi.healthy` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.1D.adx.chop` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.4H.rsi.healthy` — gainers 6/10 vs losers 9/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/11 09:40:23_
