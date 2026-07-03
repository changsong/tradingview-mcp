# 回归检核报告 · US — 2026-06-26

**对照快照:** `reports/2026-06-25` (2026-06-25)
**池子:** 92 只 (成功 92 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **SNDK** | NASDAQ:SNDK | **+21.97%** | 18.9 | 50 | Trend Follow (HH/HL Intact) | mom_decay/bear_div |
| 2 | **AMAT** | NASDAQ:AMAT | **+13.42%** | 52.1 | 66 | Trend Follow (HH/HL Intact) | - |
| 3 | **GLW** | NYSE:GLW | **+10.78%** | 29.8 | 72 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 4 | **KLAC** | NASDAQ:KLAC | **+7.62%** | 29.2 | 74 | Trend Follow (HH/HL Intact) | bear_div/low_rr |
| 5 | **LRCX** | NASDAQ:LRCX | **+7.21%** | 29.5 | 57 | Trend Continuation | bear_div |
| 6 | **FLEX** | NASDAQ:FLEX | **+7.01%** | 37.9 | 68 | Trend Continuation | mom_decay/near_resist/low_rr |
| 7 | **AROC** | NYSE:AROC | **+6.73%** | 31.3 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 8 | **SXI** | NYSE:SXI | **+6.30%** | 36.5 | 50 | Trend Continuation | near_resist/bear_div |
| 9 | **POWL** | NASDAQ:POWL | **+5.00%** | 35.1 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 10 | **WDC** | NASDAQ:WDC | **+4.90%** | 25.8 | 50 | Trend Follow (HH/HL Intact) | bear_div/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **DELL** | NYSE:DELL | **-5.67%** | 34.2 | 93 | Overextended Chase (High Risk) | overheated/mom_decay/low_rr |
| 2 | **BE** | NYSE:BE | **-5.21%** | 45.4 | 50 | Overextended Chase (High Risk) | overheated |
| 3 | **BGC** | NASDAQ:BGC | **-4.27%** | 34.4 | 50 | Trend Continuation | bull_trap/mom_decay/near_resist |
| 4 | **HPE** | NYSE:HPE | **-4.16%** | 32 | 54 | Trend Continuation | mom_decay/near_resist/low_rr |
| 5 | **SPNT** | NYSE:SPNT | **-1.62%** | 32 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 6 | **TSM** | NYSE:TSM | **-1.32%** | 33 | 50 | Reversal (Bullish RSI Divergence) | near_resist/chop/low_rr |
| 7 | **HG** | NYSE:HG | **-1.20%** | 24.1 | 50 | Trend Continuation | fake_break/near_resist/chop/low_rr |
| 8 | **NBIS** | NASDAQ:NBIS | **-1.17%** | 23.8 | 55 | Trend Follow (HH/HL Intact) | bear_div/low_rr |
| 9 | **NBIX** | NASDAQ:NBIX | **-1.13%** | 35.3 | 58 | Trend Continuation | mom_decay/near_resist/low_rr |
| 10 | **INCY** | NASDAQ:INCY | **-0.86%** | 42 | 52 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.bear_div` | 5/10 | 1/10 | +40pp |
| `tech.1D.divergence.bear` | 5/10 | 1/10 | +40pp |
| `tech.4H.adx.strong` | 6/10 | 2/10 | +40pp |
| `tech.1W.adx.strong` | 9/10 | 6/10 | +30pp |
| `tech.1H.obv.up` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.adx.trending` | 1/10 | 6/10 | -50pp |
| `tech.1D.bull_ema` | 4/10 | 8/10 | -40pp |
| `tech.1H.macd.bullish` | 1/10 | 5/10 | -40pp |
| `tech.1H.obv.down` | 4/10 | 7/10 | -30pp |
| `news.signal.no_trade` | 6/10 | 9/10 | -30pp |
| `tech.4H.bull_ema` | 4/10 | 7/10 | -30pp |
| `tech.4H.macd.bullish` | 3/10 | 6/10 | -30pp |
| `tech.1H.rsi.healthy` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.flag.bear_div`** — 看空背离
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 -6 → **建议 -7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.4H.adx.strong`** — ADX>30 强趋势 (4H)
  - gainers 6/10 vs losers 2/10 (Δ=40pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 4/10 vs losers 8/10 (Δ=-40pp)
  - 当前 12 → **建议 9** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1D.divergence.bear` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1H.obv.up` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.4H.adx.trending` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1H.macd.bullish` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.obv.down` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `news.signal.no_trade` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.4H.bull_ema` — gainers 4/10 vs losers 7/10 (Δ=-30pp)
- ↓ `tech.4H.macd.bullish` — gainers 3/10 vs losers 6/10 (Δ=-30pp)
- ↓ `tech.1H.rsi.healthy` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/26 10:47:11_
