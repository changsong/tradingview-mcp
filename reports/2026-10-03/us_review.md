# 回归检核报告 · US — 2026-10-03

**对照快照:** `reports/2026-10-02` (2026-10-02)
**池子:** 54 只 (成功 54 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **OTC:IFNNY** | OTC:IFNNY | **+8.36%** | 48 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 2 | **GRAL** | NASDAQ:GRAL | **+8.07%** | 38.7 | 54 | Overextended Chase (High Risk) | overheated/mom_decay |
| 3 | **ON** | NASDAQ:ON | **+6.01%** | 49.6 | 98 | Pullback Buy (Near Support) | - |
| 4 | **AEHR** | NASDAQ:AEHR | **+5.52%** | 34.3 | 55 | Trend Continuation | near_resist/chop/low_rr |
| 5 | **ARM** | NASDAQ:ARM | **+5.18%** | 26 | 57 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 6 | **ENTG** | NASDAQ:ENTG | **+5.04%** | 22.5 | 53 | Trend Continuation | fake_break/near_resist/chop/low_rr |
| 7 | **P** | NYSE:P | **+4.48%** | 21.2 | 86 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 8 | **BE** | NYSE:BE | **+4.17%** | 29 | 52 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 9 | **CLS** | NYSE:CLS | **+3.81%** | 40.8 | 65 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 10 | **LITE** | NASDAQ:LITE | **+3.79%** | 34.1 | 50 | Trend Continuation | near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **WDC** | NASDAQ:WDC | **-10.22%** | 31.7 | 56 | Trend Continuation | near_resist/chop/low_rr |
| 2 | **STX** | NASDAQ:STX | **-10.21%** | 10.8 | 50 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop/bear_div/low_rr |
| 3 | **SNDK** | NASDAQ:SNDK | **-3.79%** | 27.9 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 4 | **VEEV** | NYSE:VEEV | **-3.05%** | 50.9 | 50 | Pullback Buy (Near Support) | - |
| 5 | **MU** | NASDAQ:MU | **-2.05%** | 36.3 | 62 | Trend Continuation | near_resist/chop/low_rr |
| 6 | **LAR** | NYSE:LAR | **-0.90%** | 2.6 | 50 | Reversal (Bullish RSI Divergence) | near_resist/low_rr |
| 7 | **PLTR** | NASDAQ:PLTR | **-0.68%** | 33.8 | 65 | Trend Continuation | near_resist/bear_div/low_rr |
| 8 | **LLY** | NYSE:LLY | **-0.61%** | 45.3 | 55 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 9 | **SARO** | NYSE:SARO | **-0.57%** | 21.6 | 50 | Reversal (Bullish RSI Divergence) | mom_decay |
| 10 | **INTC** | NASDAQ:INTC | **-0.56%** | 34.5 | 75 | Trend Follow (HH/HL Intact) | low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.adx.strong` | 6/10 | 1/10 | +50pp |
| `tech.1D.obv.up` | 10/10 | 6/10 | +40pp |
| `tech.rs.strong` | 9/10 | 5/10 | +40pp |
| `tech.1W.adx.trending` | 5/10 | 2/10 | +30pp |
| `tech.1W.macd.bullish` | 5/10 | 2/10 | +30pp |
| `tech.4H.macd.bullish` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.near_support` | 1/10 | 5/10 | -40pp |
| `tech.1W.adx.strong` | 2/10 | 6/10 | -40pp |
| `tech.1H.dist20.near` | 5/10 | 9/10 | -40pp |
| `tech.1H.near_support` | 4/10 | 8/10 | -40pp |
| `tech.4H.dist20.near` | 2/10 | 6/10 | -40pp |
| `tech.1H.adx.chop` | 1/10 | 5/10 | -40pp |
| `tech.1H.macd.bullish` | 5/10 | 8/10 | -30pp |
| `tech.1H.rsi.healthy` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 10/10 vs losers 6/10 (Δ=40pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↑ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 2/10 vs losers 6/10 (Δ=-40pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.adx.strong` — gainers 6/10 vs losers 1/10 (Δ=50pp)
- ↑ `tech.rs.strong` — gainers 9/10 vs losers 5/10 (Δ=40pp)
- ↑ `tech.1W.adx.trending` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.4H.macd.bullish` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.4H.near_support` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.dist20.near` — gainers 5/10 vs losers 9/10 (Δ=-40pp)
- ↓ `tech.1H.near_support` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.4H.dist20.near` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.1H.adx.chop` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.macd.bullish` — gainers 5/10 vs losers 8/10 (Δ=-30pp)
- ↓ `tech.1H.rsi.healthy` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/10/3 09:41:52_
