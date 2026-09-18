# 回归检核报告 · US — 2026-09-12

**对照快照:** `reports/2026-09-11` (2026-09-11)
**池子:** 51 只 (成功 51 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **HPE** | NYSE:HPE | **+12.44%** | 20.7 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 2 | **DELL** | NYSE:DELL | **+11.98%** | 21.9 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 3 | **BE** | NYSE:BE | **+6.68%** | 24.6 | 50 | Pullback Buy (Near Support) | chop |
| 4 | **APH** | NYSE:APH | **+4.57%** | 10.9 | 55 | Range / No Edge | near_resist/chop/low_rr |
| 5 | **ETN** | NYSE:ETN | **+3.96%** | 18.2 | 42 | Pullback Buy (Near Support) | mom_decay/near_resist/chop/low_rr |
| 6 | **OTC:SMNEY** | OTC:SMNEY | **+2.50%** | 38.6 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |
| 7 | **AMD** | NASDAQ:AMD | **+2.49%** | 49.8 | 50 | Reversal (Bullish RSI Divergence) | near_resist/chop |
| 8 | **JCI** | NYSE:JCI | **+2.24%** | 19.3 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 9 | **WPM** | NYSE:WPM | **+2.08%** | 25 | 66 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 10 | **AAPL** | NASDAQ:AAPL | **+1.75%** | 50.3 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **STX** | NASDAQ:STX | **-3.73%** | 17.4 | 54 | Trend Continuation | near_resist/chop/low_rr |
| 2 | **SNDK** | NASDAQ:SNDK | **-3.50%** | 17.3 | 50 | Trend Follow (HH/HL Intact) | near_resist/chop/low_rr |
| 3 | **OTC:SMTGY** | OTC:SMTGY | **-2.69%** | 21.2 | 50 | Trend Continuation | near_resist/chop/low_rr |
| 4 | **AR** | NYSE:AR | **-1.89%** | 30.7 | 54 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 5 | **RRC** | NYSE:RRC | **-1.74%** | 65 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 6 | **GRAL** | NASDAQ:GRAL | **-1.71%** | 29.5 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 7 | **PGY** | NASDAQ:PGY | **-1.63%** | 35.8 | 55 | Pullback Buy (Near Support) | mom_decay |
| 8 | **NBIS** | NASDAQ:NBIS | **-1.56%** | 16.1 | 65 | Trend Continuation | near_resist/chop/low_rr |
| 9 | **CF** | NYSE:CF | **-1.51%** | 29.2 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 10 | **WT** | NYSE:WT | **-1.36%** | 55.2 | 51 | Pullback Buy (Near Support) | mom_decay |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.above_ema200` | 8/10 | 3/10 | +50pp |
| `tech.1H.adx.strong` | 6/10 | 1/10 | +50pp |
| `tech.4H.near_support` | 6/10 | 1/10 | +50pp |
| `tech.verdict.long` | 9/10 | 5/10 | +40pp |
| `tech.flag.chop` | 8/10 | 4/10 | +40pp |
| `tech.1D.adx.chop` | 8/10 | 4/10 | +40pp |
| `tech.4H.adx.chop` | 6/10 | 2/10 | +40pp |
| `tech.4H.obv.up` | 5/10 | 1/10 | +40pp |
| `tech.4H.dist20.near` | 6/10 | 2/10 | +40pp |
| `tech.1D.macd.bullish` | 8/10 | 5/10 | +30pp |
| `tech.4H.macd.bullish` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.verdict.strong_long` | 0/10 | 5/10 | -50pp |
| `tech.1D.adx.trending` | 1/10 | 5/10 | -40pp |
| `tech.1D.rsi.healthy` | 6/10 | 9/10 | -30pp |
| `tech.flag.momentum_decay` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 8/10 vs losers 4/10 (Δ=40pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 8/10 vs losers 5/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:496`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.above_ema200` — gainers 8/10 vs losers 3/10 (Δ=50pp)
- ↑ `tech.1H.adx.strong` — gainers 6/10 vs losers 1/10 (Δ=50pp)
- ↑ `tech.4H.near_support` — gainers 6/10 vs losers 1/10 (Δ=50pp)
- ↑ `tech.verdict.long` — gainers 9/10 vs losers 5/10 (Δ=40pp)
- ↑ `tech.1D.adx.chop` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.4H.adx.chop` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.4H.obv.up` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.4H.dist20.near` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.4H.macd.bullish` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.verdict.strong_long` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.1D.adx.trending` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.flag.momentum_decay` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/12 09:51:00_
