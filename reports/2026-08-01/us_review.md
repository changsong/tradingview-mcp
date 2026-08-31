# 回归检核报告 · US — 2026-08-01

**对照快照:** `reports/2026-07-31` (2026-07-31)
**池子:** 81 只 (成功 77 / 失败 4)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:MPWR** | NASDAQ:MPWR | **+8.35%** | 38.3 | - | Breakout (Squeeze Release) | chop |
| 2 | **NYSE:ETN** | NYSE:ETN | **+7.32%** | 49.2 | - | Breakout (Squeeze Release) | near_resist/chop |
| 3 | **NYSE:CSW** | NYSE:CSW | **+4.67%** | 49.8 | - | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 4 | **NYSE:HPE** | NYSE:HPE | **+4.05%** | - | - | - | - |
| 5 | **NASDAQ:AMKR** | NASDAQ:AMKR | **+3.34%** | 28.7 | - | Pullback Buy (Near Support) | mom_decay |
| 6 | **NYSE:AGM** | NYSE:AGM | **+3.31%** | - | - | - | - |
| 7 | **NYSE:AS** | NYSE:AS | **+3.15%** | - | - | - | - |
| 8 | **NYSE:MOD** | NYSE:MOD | **+3.05%** | 18.1 | - | Reversal (Bullish RSI Divergence) | near_resist/low_rr |
| 9 | **NYSE:VRT** | NYSE:VRT | **+3.03%** | 31.8 | - | Breakout (Squeeze Release) | mom_decay/chop |
| 10 | **NASDAQ:MSFT** | NASDAQ:MSFT | **+3.02%** | 19.7 | - | Pullback Buy (Near Support) | near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:APH** | NYSE:APH | **-17.59%** | - | - | - | - |
| 2 | **NASDAQ:NBIX** | NASDAQ:NBIX | **-10.08%** | - | - | - | - |
| 3 | **NASDAQ:AAPL** | NASDAQ:AAPL | **-7.35%** | - | - | - | - |
| 4 | **NASDAQ:MU** | NASDAQ:MU | **-5.90%** | 19.3 | - | Pullback Buy (Near Support) | mom_decay/chop |
| 5 | **NASDAQ:SNDK** | NASDAQ:SNDK | **-5.09%** | 11.9 | - | Range / No Edge | chop |
| 6 | **NASDAQ:IREN** | NASDAQ:IREN | **-3.82%** | 20.9 | - | Reversal (Bullish RSI Divergence) | - |
| 7 | **NASDAQ:GRAL** | NASDAQ:GRAL | **-3.63%** | - | - | - | - |
| 8 | **NASDAQ:DGXX** | NASDAQ:DGXX | **-3.16%** | -6.2 | - | Downtrend | near_resist/low_rr |
| 9 | **NYSE:IFS** | NYSE:IFS | **-2.93%** | - | - | - | - |
| 10 | **NASDAQ:CRWV** | NASDAQ:CRWV | **-2.88%** | 3.3 | - | Downtrend | - |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.dist20.near` | 6/10 | 0/10 | +60pp |
| `tech.1H.dist20.near` | 7/10 | 1/10 | +60pp |
| `tech.verdict.long` | 7/10 | 2/10 | +50pp |
| `tech.1D.dist20.near` | 5/10 | 0/10 | +50pp |
| `tech.4H.dist20.near` | 6/10 | 1/10 | +50pp |
| `tech.1H.near_support` | 7/10 | 2/10 | +50pp |
| `tech.1W.rsi.healthy` | 6/10 | 2/10 | +40pp |
| `tech.1W.obv.down` | 5/10 | 1/10 | +40pp |
| `tech.1D.above_ema200` | 6/10 | 2/10 | +40pp |
| `tech.1D.near_support` | 7/10 | 3/10 | +40pp |
| `tech.4H.adx.chop` | 5/10 | 1/10 | +40pp |
| `tech.flag.chop` | 5/10 | 2/10 | +30pp |
| `tech.1D.adx.chop` | 5/10 | 2/10 | +30pp |
| `tech.1D.macd.bullish` | 5/10 | 2/10 | +30pp |
| `tech.4H.near_support` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

> 无显著共同特征。

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 5/10 vs losers 0/10 (Δ=50pp)
  - 当前 5 → **建议 6** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`
- ↑ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 6/10 vs losers 2/10 (Δ=40pp)
  - 当前 8 → **建议 10** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:479`
- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.dist20.near` — gainers 6/10 vs losers 0/10 (Δ=60pp)
- ↑ `tech.1H.dist20.near` — gainers 7/10 vs losers 1/10 (Δ=60pp)
- ↑ `tech.verdict.long` — gainers 7/10 vs losers 2/10 (Δ=50pp)
- ↑ `tech.4H.dist20.near` — gainers 6/10 vs losers 1/10 (Δ=50pp)
- ↑ `tech.1H.near_support` — gainers 7/10 vs losers 2/10 (Δ=50pp)
- ↑ `tech.1W.rsi.healthy` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.1W.obv.down` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1D.near_support` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.4H.adx.chop` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1D.adx.chop` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.4H.near_support` — gainers 5/10 vs losers 2/10 (Δ=30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/8/1 10:18:51_
