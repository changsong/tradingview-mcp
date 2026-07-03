# 回归检核报告 · US — 2026-06-30

**对照快照:** `reports/2026-06-29` (2026-06-29)
**池子:** 80 只 (成功 80 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **ALAB** | NASDAQ:ALAB | **+16.39%** | 26.9 | 69 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 2 | **GLW** | NYSE:GLW | **+15.67%** | 16.2 | 63 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/chop |
| 3 | **VICR** | NASDAQ:VICR | **+12.19%** | 8.9 | 65 | Trend Follow (HH/HL Intact) | mom_decay/chop/bear_div/low_rr |
| 4 | **KLAC** | NASDAQ:KLAC | **+11.97%** | 29.7 | 61 | Trend Follow (HH/HL Intact) | bear_div/low_rr |
| 5 | **NASDAQ:WDC** | NASDAQ:WDC | **+11.16%** | - | - | - | - |
| 6 | **AMAT** | NASDAQ:AMAT | **+10.82%** | 51.6 | 68 | Overextended Chase (High Risk) | overheated |
| 7 | **PANW** | NASDAQ:PANW | **+9.14%** | 26.8 | 52 | Trend Continuation | fake_break/bull_trap/mom_decay/near_resist |
| 8 | **LRCX** | NASDAQ:LRCX | **+8.39%** | 27.3 | 75 | Trend Continuation | bear_div/low_rr |
| 9 | **MTZ** | NYSE:MTZ | **+8.29%** | 30.3 | 54 | Trend Continuation | low_rr |
| 10 | **NASDAQ:STX** | NASDAQ:STX | **+7.63%** | - | - | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **PACS** | NYSE:PACS | **-4.66%** | 21.1 | 50 | Trend Continuation | fake_break/near_resist/chop/low_rr |
| 2 | **AROC** | NYSE:AROC | **-3.58%** | 18.3 | 50 | Trend Continuation | fake_break/bull_trap/near_resist |
| 3 | **DKS** | NYSE:DKS | **-2.86%** | 56.1 | 50 | Trend Continuation | near_resist/low_rr |
| 4 | **SNDK** | NASDAQ:SNDK | **-1.93%** | 22.1 | 54 | Trend Follow (HH/HL Intact) | mom_decay/bear_div |
| 5 | **WWD** | NASDAQ:WWD | **-1.92%** | 38.8 | 50 | Pullback Buy (Near Support) | bear_div |
| 6 | **DTM** | NYSE:DTM | **-1.90%** | 26 | 50 | Trend Continuation | fake_break/near_resist/low_rr |
| 7 | **IRM** | NYSE:IRM | **-1.86%** | 36 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 8 | **DLR** | NYSE:DLR | **-1.25%** | 45.4 | 50 | Reversal (Bullish RSI Divergence) | near_resist/chop |
| 9 | **ORRF** | NASDAQ:ORRF | **-1.21%** | 47.9 | 50 | Trend Follow (HH/HL Intact) | bull_trap/near_resist/chop |
| 10 | **TLN** | NASDAQ:TLN | **-1.18%** | 27.1 | 20 | Pullback Buy (Near Support) | near_resist/chop/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `news.top_news_type.Industry` | 8/10 | 1/10 | +70pp |
| `tech.1W.dist20.overheat` | 8/10 | 4/10 | +40pp |
| `news.top_news_type.Analyst Action` | 6/10 | 2/10 | +40pp |
| `tech.4H.obv.down` | 5/10 | 2/10 | +30pp |
| `tech.1H.vol.expanding` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.rsi.healthy` | 2/10 | 9/10 | -70pp |
| `news.signal.no_trade` | 2/10 | 9/10 | -70pp |
| `tech.flag.resistance` | 2/10 | 8/10 | -60pp |
| `tech.4H.obv.up` | 3/10 | 8/10 | -50pp |
| `tech.1D.macd.bullish` | 5/10 | 9/10 | -40pp |
| `tech.4H.macd.bullish` | 3/10 | 7/10 | -40pp |
| `tech.score.high` | 1/10 | 5/10 | -40pp |
| `tech.1D.obv.up` | 3/10 | 7/10 | -40pp |
| `tech.verdict.long` | 6/10 | 9/10 | -30pp |
| `tech.flag.chop` | 2/10 | 5/10 | -30pp |
| `tech.1D.adx.chop` | 2/10 | 5/10 | -30pp |
| `tech.1H.obv.up` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 5/10 vs losers 9/10 (Δ=-40pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 3/10 vs losers 7/10 (Δ=-40pp)
  - 当前 4 → **建议 3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.flag.chop`** — 震荡市
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `news.top_news_type.Industry` — gainers 8/10 vs losers 1/10 (Δ=70pp)
- ↑ `tech.1W.dist20.overheat` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `news.top_news_type.Analyst Action` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.4H.obv.down` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.1H.vol.expanding` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.1W.rsi.healthy` — gainers 2/10 vs losers 9/10 (Δ=-70pp)
- ↓ `news.signal.no_trade` — gainers 2/10 vs losers 9/10 (Δ=-70pp)
- ↓ `tech.flag.resistance` — gainers 2/10 vs losers 8/10 (Δ=-60pp)
- ↓ `tech.4H.obv.up` — gainers 3/10 vs losers 8/10 (Δ=-50pp)
- ↓ `tech.4H.macd.bullish` — gainers 3/10 vs losers 7/10 (Δ=-40pp)
- ↓ `tech.score.high` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.verdict.long` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1D.adx.chop` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `tech.1H.obv.up` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/30 14:39:55_
