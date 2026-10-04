# 回归检核报告 · US — 2026-10-01

**对照快照:** `reports/2026-09-30` (2026-09-30)
**池子:** 56 只 (成功 55 / 失败 1)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **INTC** | NASDAQ:INTC | **+3.71%** | 22.1 | 58 | Trend Follow (HH/HL Intact) | low_rr |
| 2 | **GRAL** | NASDAQ:GRAL | **+2.60%** | 1.3 | 55 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 3 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 34 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 4 | **VEEV** | NYSE:VEEV | **+2.47%** | 34.4 | 62 | Trend Continuation | mom_decay/low_rr |
| 5 | **PANW** | NASDAQ:PANW | **+2.29%** | 19.9 | 58 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 6 | **ON** | NASDAQ:ON | **+1.21%** | 14.9 | 54 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **STX** | NASDAQ:STX | **+0.97%** | 25.9 | 54 | Trend Continuation | near_resist/chop/low_rr |
| 8 | **KEYS** | NYSE:KEYS | **+0.94%** | 25.7 | 48 | Trend Continuation | near_resist/chop/low_rr |
| 9 | **CRWD** | NASDAQ:CRWD | **+0.77%** | 32.2 | 76 | Trend Follow (HH/HL Intact) | fake_break/near_resist |
| 10 | **MSFT** | NASDAQ:MSFT | **+0.77%** | 43.8 | 59 | Breakout (Squeeze Release) | mom_decay/near_resist/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **DY** | NYSE:DY | **-6.00%** | 14.3 | 53 | Reversal (Bullish RSI Divergence) | - |
| 2 | **BE** | NYSE:BE | **-4.90%** | 43.8 | 69 | Trend Follow (HH/HL Intact) | chop/low_rr |
| 3 | **SANM** | NASDAQ:SANM | **-3.51%** | 30.4 | 57 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 4 | **HOOD** | NASDAQ:HOOD | **-3.20%** | 22.8 | 62 | Pullback Buy (Near Support) | mom_decay/near_resist/chop |
| 5 | **SPNT** | NYSE:SPNT | **-2.38%** | 39.6 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 6 | **LLY** | NYSE:LLY | **-2.33%** | 39.1 | 54 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **OTC:SMERY** | OTC:SMERY | **-2.11%** | 28.1 | 50 | Pullback Buy (Near Support) | near_resist/chop |
| 8 | **OTC:HTHIY** | OTC:HTHIY | **-2.08%** | 27 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 9 | **SARO** | NYSE:SARO | **-1.84%** | 24.5 | 50 | Reversal (Bullish RSI Divergence) | - |
| 10 | **META** | NASDAQ:META | **-1.84%** | 47.8 | 61 | Trend Follow (HH/HL Intact) | near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.rsi.healthy` | 8/10 | 4/10 | +40pp |
| `tech.1D.bull_ema` | 8/10 | 4/10 | +40pp |
| `tech.1W.bull_ema` | 8/10 | 5/10 | +30pp |
| `tech.4H.obv.up` | 7/10 | 4/10 | +30pp |
| `news.top_news_type.Industry` | 8/10 | 5/10 | +30pp |
| `tech.1H.rsi.healthy` | 8/10 | 5/10 | +30pp |
| `tech.1H.bull_ema` | 6/10 | 3/10 | +30pp |
| `tech.4H.macd.bullish` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.type.pullback` | 1/10 | 5/10 | -40pp |
| `tech.flag.chop` | 4/10 | 7/10 | -30pp |
| `tech.1D.adx.chop` | 4/10 | 7/10 | -30pp |
| `tech.1D.dist20.near` | 2/10 | 5/10 | -30pp |
| `tech.1D.near_support` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 8/10 vs losers 4/10 (Δ=40pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 8/10 vs losers 5/10 (Δ=30pp)
  - 当前 9 → **建议 11** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.flag.chop`** — 震荡市
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↓ **`tech.1D.dist20.near`** — EMA20附近低吸 (1D)
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 5 → **建议 4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:484`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.rsi.healthy` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.4H.obv.up` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `news.top_news_type.Industry` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.1H.rsi.healthy` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `tech.1H.bull_ema` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.4H.macd.bullish` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.type.pullback` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1D.adx.chop` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.1D.near_support` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/10/1 09:52:44_
