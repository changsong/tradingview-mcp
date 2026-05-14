# 回归检核报告 · US — 2026-05-13

**对照快照:** `reports/2026-05-12` (2026-05-12)
**池子:** 52 只 (成功 52 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:COHR** | NYSE:COHR | **+7.94%** | 45.8 | 95 | Overextended Chase (High Risk) | overheated/near_resist |
| 2 | **NYSE:HPE** | NYSE:HPE | **+6.16%** | 35.6 | 70 | Trend Follow (HH/HL Intact) | fake_break/near_resist |
| 3 | **NASDAQ:GEN** | NASDAQ:GEN | **+5.67%** | 37.1 | 73 | Pullback Buy (Near Support) | near_resist/chop |
| 4 | **NASDAQ:RKLB** | NASDAQ:RKLB | **+5.61%** | 42.8 | 77 | Overextended Chase (High Risk) | overheated |
| 5 | **NYSE:JOBY** | NYSE:JOBY | **+5.43%** | 19 | 44 | Overextended Chase (High Risk) | overheated/near_resist/low_rr |
| 6 | **NASDAQ:MTSI** | NASDAQ:MTSI | **+5.18%** | 15 | 86 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist/bear_div |
| 7 | **NASDAQ:MU** | NASDAQ:MU | **+4.83%** | 24.8 | 55 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist |
| 8 | **NYSE:GLW** | NYSE:GLW | **+4.17%** | - | - | - | - |
| 9 | **NASDAQ:ASML** | NASDAQ:ASML | **+3.99%** | 32 | 59 | Trend Continuation | near_resist/chop |
| 10 | **NASDAQ:LITE** | NASDAQ:LITE | **+3.83%** | - | - | - | - |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:CRDO** | NASDAQ:CRDO | **-4.64%** | 18.1 | 61 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/bear_div/low_rr |
| 2 | **NYSE:CF** | NYSE:CF | **-3.75%** | - | - | - | - |
| 3 | **NYSE:AIR** | NYSE:AIR | **-3.62%** | 27.5 | 55 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 4 | **NASDAQ:IREN** | NASDAQ:IREN | **-2.46%** | 33.7 | 63 | Trend Continuation | low_rr |
| 5 | **NASDAQ:POWL** | NASDAQ:POWL | **-2.34%** | - | - | - | - |
| 6 | **NYSE:SPNT** | NYSE:SPNT | **-1.75%** | 35.1 | 88 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 7 | **NYSE:PFS** | NYSE:PFS | **-1.00%** | 30 | 51 | Breakout (Squeeze Release) | mom_decay/near_resist/chop |
| 8 | **NASDAQ:OSBC** | NASDAQ:OSBC | **-0.96%** | 22.5 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 9 | **NASDAQ:AMD** | NASDAQ:AMD | **-0.62%** | 12.6 | 69 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 10 | **NASDAQ:VSAT** | NASDAQ:VSAT | **-0.58%** | 22.7 | 51 | Overextended Chase (High Risk) | overheated/bull_trap/near_resist/bear_div |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.bull_ema` | 8/10 | 3/10 | +50pp |
| `tech.4H.obv.up` | 8/10 | 3/10 | +50pp |
| `tech.1H.rsi.healthy` | 5/10 | 1/10 | +40pp |
| `tech.1H.obv.up` | 7/10 | 3/10 | +40pp |
| `tech.rs.strong` | 7/10 | 4/10 | +30pp |
| `tech.1D.macd.bullish` | 8/10 | 5/10 | +30pp |
| `tech.1H.adx.strong` | 6/10 | 3/10 | +30pp |
| `tech.1H.bull_ema` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.rsi.healthy` | 1/10 | 6/10 | -50pp |
| `tech.4H.obv.down` | 0/10 | 5/10 | -50pp |
| `tech.4H.dist20.near` | 0/10 | 5/10 | -50pp |
| `tech.flag.bad_rr` | 1/10 | 5/10 | -40pp |
| `tech.1H.obv.down` | 1/10 | 5/10 | -40pp |
| `tech.1H.adx.trending` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 8/10 vs losers 5/10 (Δ=30pp)
  - 当前 8 → **建议 10** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 1/10 vs losers 5/10 (Δ=-40pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.bull_ema` — gainers 8/10 vs losers 3/10 (Δ=50pp)
- ↑ `tech.4H.obv.up` — gainers 8/10 vs losers 3/10 (Δ=50pp)
- ↑ `tech.1H.rsi.healthy` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1H.obv.up` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.rs.strong` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `tech.1H.adx.strong` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.1H.bull_ema` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.1W.rsi.healthy` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.4H.obv.down` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.4H.dist20.near` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.1H.obv.down` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.adx.trending` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/14 07:57:11_
