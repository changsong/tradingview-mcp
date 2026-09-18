# 回归检核报告 · US — 2026-09-16

**对照快照:** `reports/2026-09-15` (2026-09-15)
**池子:** 41 只 (成功 41 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:SM** | NYSE:SM | **+5.79%** | 32.7 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/bear_div |
| 2 | **NYSE:CF** | NYSE:CF | **+3.28%** | 28.2 | 45 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 3 | **NASDAQ:CRWD** | NASDAQ:CRWD | **+3.02%** | 33.8 | 59 | Trend Follow (HH/HL Intact) | near_resist/chop/bear_div |
| 4 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 28.1 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 5 | **NASDAQ:AMD** | NASDAQ:AMD | **+2.19%** | 38.8 | 56 | Reversal (Bullish RSI Divergence) | chop/low_rr |
| 6 | **NYSE:LTC** | NYSE:LTC | **+1.92%** | 52.4 | 54 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 7 | **NYSE:AR** | NYSE:AR | **+1.92%** | 28.5 | 54 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 8 | **NYSE:DELL** | NYSE:DELL | **+1.73%** | 38.8 | 68 | Trend Continuation | chop |
| 9 | **NASDAQ:HRMY** | NASDAQ:HRMY | **+1.52%** | 44.7 | 50 | Trend Continuation | mom_decay/low_rr |
| 10 | **NASDAQ:NBN** | NASDAQ:NBN | **+1.03%** | 36.4 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:PACS** | NYSE:PACS | **-5.52%** | 56.6 | 50 | Breakout (Squeeze Release) | near_resist |
| 2 | **NASDAQ:FIVE** | NASDAQ:FIVE | **-5.42%** | 36.9 | 57 | Trend Continuation | mom_decay/near_resist/low_rr |
| 3 | **NASDAQ:HOOD** | NASDAQ:HOOD | **-3.39%** | 50.5 | 73 | Pullback Buy (Near Support) | - |
| 4 | **NASDAQ:SMCI** | NASDAQ:SMCI | **-2.99%** | 24.9 | 62 | Breakout (Squeeze Release) | mom_decay/near_resist/low_rr |
| 5 | **NASDAQ:NBIS** | NASDAQ:NBIS | **-2.27%** | 18 | 55 | Trend Continuation | chop/low_rr |
| 6 | **NASDAQ:PGY** | NASDAQ:PGY | **-2.09%** | 21.7 | 62 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 7 | **NASDAQ:MSFT** | NASDAQ:MSFT | **-1.64%** | 50 | 62 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 8 | **NASDAQ:SNDK** | NASDAQ:SNDK | **-1.36%** | 9.2 | 43 | Range / No Edge | near_resist/chop/low_rr |
| 9 | **NASDAQ:GEN** | NASDAQ:GEN | **-0.57%** | 13.1 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/chop/bear_div/low_rr |
| 10 | **NASDAQ:AAPL** | NASDAQ:AAPL | **-0.52%** | 21.7 | 57 | Trend Follow (HH/HL Intact) | fake_break/near_resist/chop/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.bull_ema` | 10/10 | 6/10 | +40pp |
| `tech.rs.strong` | 6/10 | 3/10 | +30pp |
| `tech.1W.obv.up` | 9/10 | 6/10 | +30pp |
| `tech.1D.obv.up` | 7/10 | 4/10 | +30pp |
| `tech.4H.macd.bullish` | 7/10 | 4/10 | +30pp |
| `news.signal.no_trade` | 9/10 | 6/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.near_support` | 4/10 | 9/10 | -50pp |
| `tech.1D.near_support` | 2/10 | 6/10 | -40pp |
| `tech.1D.obv.down` | 3/10 | 6/10 | -30pp |
| `tech.1H.adx.strong` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 10/10 vs losers 6/10 (Δ=40pp)
  - 当前 9 → **建议 11** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 7/10 vs losers 4/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.rs.strong` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.4H.macd.bullish` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `news.signal.no_trade` — gainers 9/10 vs losers 6/10 (Δ=30pp)
- ↓ `tech.4H.near_support` — gainers 4/10 vs losers 9/10 (Δ=-50pp)
- ↓ `tech.1D.near_support` — gainers 2/10 vs losers 6/10 (Δ=-40pp)
- ↓ `tech.1D.obv.down` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.adx.strong` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/16 09:49:24_
