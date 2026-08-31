# 回归检核报告 · US — 2026-08-24

**对照快照:** `reports/2026-08-23` (2026-08-23)
**池子:** 30 只 (成功 30 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **HOOD** | NASDAQ:HOOD | **+13.70%** | 38.9 | 52 | Overextended Chase (High Risk) | overheated/chop |
| 2 | **SCCO** | NYSE:SCCO | **+8.69%** | 22 | 50 | Overextended Chase (High Risk) | overheated/near_resist/chop/bear_div/low_rr |
| 3 | **FCX** | NYSE:FCX | **+7.64%** | 53.2 | 50 | Overextended Chase (High Risk) | overheated/near_resist/chop |
| 4 | **WPM** | NYSE:WPM | **+5.01%** | 24.9 | 50 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist/bear_div/low_rr |
| 5 | **WT** | NYSE:WT | **+3.80%** | 42.5 | 50 | Trend Follow (HH/HL Intact) | fake_break/near_resist/bear_div |
| 6 | **NEM** | NYSE:NEM | **+3.09%** | 1.1 | 50 | Overextended Chase (High Risk) | overheated/bull_trap/mom_decay/near_resist/bear_div/low_rr |
| 7 | **RIO** | NYSE:RIO | **+3.06%** | 0 | 50 | - | - |
| 8 | **PATH** | NYSE:PATH | **+2.95%** | 35.5 | 50 | Pullback Buy (Near Support) | fake_break/near_resist/low_rr |
| 9 | **GRAL** | NASDAQ:GRAL | **+2.01%** | 39.1 | 50 | Trend Follow (HH/HL Intact) | chop/bear_div |
| 10 | **SON** | NYSE:SON | **+1.97%** | 5.5 | 54 | Range / No Edge | near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **MRVL** | NASDAQ:MRVL | **-5.57%** | 56.8 | 61 | Trend Follow (HH/HL Intact) | chop |
| 2 | **VKTX** | NASDAQ:VKTX | **-1.37%** | 0 | 50 | - | - |
| 3 | **P** | NYSE:P | **-1.30%** | 0 | 50 | - | - |
| 4 | **LTC** | NYSE:LTC | **-1.18%** | 56.8 | 54 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 5 | **NBIS** | NASDAQ:NBIS | **-0.45%** | 33 | 50 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 6 | **SBCF** | NASDAQ:SBCF | **-0.35%** | 52.3 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist |
| 7 | **AGM** | NYSE:AGM | **+0.00%** | 0 | 50 | - | - |
| 8 | **ADAM** | NASDAQ:ADAM | **+0.10%** | 47.1 | 50 | Trend Continuation | low_rr |
| 9 | **JOE** | NYSE:JOE | **+0.12%** | 57.6 | 50 | Pullback Buy (Near Support) | near_resist/low_rr |
| 10 | **HRMY** | NASDAQ:HRMY | **+0.21%** | 30.7 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/bear_div/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.bull_ema` | 9/10 | 1/10 | +80pp |
| `tech.1W.bull_ema` | 8/10 | 2/10 | +60pp |
| `tech.1D.bull_ema` | 9/10 | 3/10 | +60pp |
| `tech.flag.overheat` | 5/10 | 0/10 | +50pp |
| `tech.1W.dist20.overheat` | 5/10 | 0/10 | +50pp |
| `tech.1D.dist20.overheat` | 5/10 | 0/10 | +50pp |
| `tech.1H.obv.up` | 8/10 | 3/10 | +50pp |
| `tech.verdict.long` | 7/10 | 3/10 | +40pp |
| `tech.rs.strong` | 8/10 | 4/10 | +40pp |
| `tech.1D.macd.bullish` | 8/10 | 4/10 | +40pp |
| `tech.1H.macd.bullish` | 8/10 | 4/10 | +40pp |
| `tech.flag.bear_div` | 5/10 | 1/10 | +40pp |
| `tech.1D.divergence.bear` | 5/10 | 1/10 | +40pp |
| `tech.1H.vol.expanding` | 5/10 | 1/10 | +40pp |
| `tech.flag.chop` | 5/10 | 2/10 | +30pp |
| `tech.1W.obv.up` | 7/10 | 4/10 | +30pp |
| `tech.1D.adx.chop` | 5/10 | 2/10 | +30pp |
| `tech.1D.obv.up` | 8/10 | 5/10 | +30pp |
| `tech.flag.resistance` | 7/10 | 4/10 | +30pp |
| `tech.4H.bull_ema` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.dist20.near` | 0/10 | 8/10 | -80pp |
| `tech.1W.dist20.near` | 0/10 | 7/10 | -70pp |
| `tech.1H.dist20.near` | 3/10 | 9/10 | -60pp |
| `tech.1H.obv.down` | 1/10 | 6/10 | -50pp |
| `tech.4H.obv.down` | 0/10 | 5/10 | -50pp |
| `tech.1W.obv.down` | 1/10 | 5/10 | -40pp |
| `tech.4H.above_ema200` | 6/10 | 9/10 | -30pp |
| `tech.1H.adx.chop` | 2/10 | 5/10 | -30pp |
| `tech.1W.adx.strong` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 8/10 vs losers 2/10 (Δ=60pp)
  - 当前 9 → **建议 11** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 9/10 vs losers 3/10 (Δ=60pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.flag.overheat`** — 过热惩罚组合
  - gainers 5/10 vs losers 0/10 (Δ=50pp)
  - 当前 -10 → **建议 -12** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal)`
- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 8/10 vs losers 4/10 (Δ=40pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↑ **`tech.flag.bear_div`** — 看空背离
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 -6 → **建议 -7** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.flag.chop`** — 震荡市
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 -4 → **建议 -5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 7/10 vs losers 4/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 8/10 vs losers 5/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.bull_ema` — gainers 9/10 vs losers 1/10 (Δ=80pp)
- ↑ `tech.1W.dist20.overheat` — gainers 5/10 vs losers 0/10 (Δ=50pp)
- ↑ `tech.1D.dist20.overheat` — gainers 5/10 vs losers 0/10 (Δ=50pp)
- ↑ `tech.1H.obv.up` — gainers 8/10 vs losers 3/10 (Δ=50pp)
- ↑ `tech.verdict.long` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.rs.strong` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.1H.macd.bullish` — gainers 8/10 vs losers 4/10 (Δ=40pp)
- ↑ `tech.1D.divergence.bear` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1H.vol.expanding` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1D.adx.chop` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↑ `tech.flag.resistance` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `tech.4H.bull_ema` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.4H.dist20.near` — gainers 0/10 vs losers 8/10 (Δ=-80pp)
- ↓ `tech.1W.dist20.near` — gainers 0/10 vs losers 7/10 (Δ=-70pp)
- ↓ `tech.1H.dist20.near` — gainers 3/10 vs losers 9/10 (Δ=-60pp)
- ↓ `tech.1H.obv.down` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.4H.obv.down` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.1W.obv.down` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.4H.above_ema200` — gainers 6/10 vs losers 9/10 (Δ=-30pp)
- ↓ `tech.1H.adx.chop` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/8/24 10:01:50_
