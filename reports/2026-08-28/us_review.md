# 回归检核报告 · US — 2026-08-28

**对照快照:** `reports/2026-08-27` (2026-08-27)
**池子:** 28 只 (成功 28 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **PATH** | NYSE:PATH | **+9.37%** | -3.1 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 2 | **GEN** | NASDAQ:GEN | **+2.90%** | 2.7 | 50 | Trend Continuation | fake_break/near_resist/chop/bear_div/low_rr |
| 3 | **WPM** | NYSE:WPM | **+1.26%** | 13.8 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist/low_rr |
| 4 | **SCCO** | NYSE:SCCO | **+1.18%** | 17 | 50 | Trend Follow (HH/HL Intact) | fake_break/near_resist/low_rr |
| 5 | **HOOD** | NASDAQ:HOOD | **+1.12%** | 29.5 | 50 | Pullback Buy (Near Support) | fake_break/near_resist/low_rr |
| 6 | **ADAM** | NASDAQ:ADAM | **+0.72%** | 21.1 | 50 | Trend Continuation | mom_decay/near_resist/low_rr |
| 7 | **CBOE** | CBOE:CBOE | **+0.56%** | 45.4 | 47 | Trend Continuation | chop |
| 8 | **HRMY** | NASDAQ:HRMY | **+0.53%** | 17.1 | 50 | Trend Continuation | mom_decay/near_resist/bear_div/low_rr |
| 9 | **NEM** | NYSE:NEM | **+0.52%** | 5.8 | 56 | Trend Continuation | fake_break/bull_trap/near_resist/low_rr |
| 10 | **LTC** | NYSE:LTC | **+0.39%** | 29.8 | 52 | Trend Continuation | fake_break/near_resist/chop/low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NEXA** | NYSE:NEXA | **-10.78%** | 30.3 | 52 | Pullback Buy (Near Support) | near_resist/chop |
| 2 | **P** | NYSE:P | **-8.87%** | 19.1 | 56 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 3 | **FIVE** | NASDAQ:FIVE | **-4.03%** | 40.6 | 50 | Trend Follow (HH/HL Intact) | low_rr |
| 4 | **MNST** | NASDAQ:MNST | **-2.32%** | 20.1 | 52 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 5 | **DASH** | NASDAQ:DASH | **-2.13%** | 25 | 53 | Overextended Chase (High Risk) | overheated/fake_break/near_resist/low_rr |
| 6 | **JOE** | NYSE:JOE | **-1.79%** | 34.5 | 50 | Pullback Buy (Near Support) | near_resist/bear_div/low_rr |
| 7 | **MRVL** | NASDAQ:MRVL | **-1.49%** | 38 | 50 | Pullback Buy (Near Support) | near_resist/chop |
| 8 | **FWONA** | NASDAQ:FWONA | **-1.33%** | 25.7 | 50 | Pullback Buy (Near Support) | mom_decay/near_resist/low_rr |
| 9 | **LLY** | NYSE:LLY | **-1.12%** | 34.2 | 50 | Pullback Buy (Near Support) | mom_decay/chop |
| 10 | **FCX** | NYSE:FCX | **-0.73%** | 24.5 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.4H.bull_ema` | 9/10 | 2/10 | +70pp |
| `tech.alignment.full` | 7/10 | 1/10 | +60pp |
| `tech.1D.bull_ema` | 9/10 | 3/10 | +60pp |
| `tech.1H.bull_ema` | 7/10 | 1/10 | +60pp |
| `tech.flag.fake_breakout` | 7/10 | 2/10 | +50pp |
| `tech.4H.rsi.healthy` | 9/10 | 4/10 | +50pp |
| `tech.1D.obv.up` | 9/10 | 5/10 | +40pp |
| `tech.1H.obv.up` | 7/10 | 3/10 | +40pp |
| `tech.1W.adx.trending` | 6/10 | 2/10 | +40pp |
| `tech.1H.rsi.healthy` | 6/10 | 2/10 | +40pp |
| `tech.flag.bad_rr` | 9/10 | 6/10 | +30pp |
| `tech.1W.bull_ema` | 9/10 | 6/10 | +30pp |
| `tech.1H.macd.bullish` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.obv.down` | 2/10 | 7/10 | -50pp |
| `tech.type.pullback` | 1/10 | 6/10 | -50pp |
| `tech.1D.near_support` | 1/10 | 6/10 | -50pp |
| `tech.1W.adx.strong` | 0/10 | 5/10 | -50pp |
| `tech.1H.rsi.oversold` | 0/10 | 5/10 | -50pp |
| `tech.1D.obv.down` | 1/10 | 5/10 | -40pp |
| `tech.1H.adx.strong` | 2/10 | 5/10 | -30pp |
| `tech.score.mid` | 5/10 | 8/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.bull_ema`** — EMA多头排列 (1D)
  - gainers 9/10 vs losers 3/10 (Δ=60pp)
  - 当前 12 → **建议 15** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↑ **`tech.flag.fake_breakout`** — 假突 (高位+低量)
  - gainers 7/10 vs losers 2/10 (Δ=50pp)
  - 当前 -10 → **建议 -12** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 9/10 vs losers 5/10 (Δ=40pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`
- ↑ **`tech.flag.bad_rr`** — R/R<1.5
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 -3 → **建议 -4** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)`
- ↑ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 9 → **建议 11** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:478`
- ↓ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 0/10 vs losers 5/10 (Δ=-50pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↓ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 5/10 vs losers 8/10 (Δ=-30pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.bull_ema` — gainers 9/10 vs losers 2/10 (Δ=70pp)
- ↑ `tech.alignment.full` — gainers 7/10 vs losers 1/10 (Δ=60pp)
- ↑ `tech.1H.bull_ema` — gainers 7/10 vs losers 1/10 (Δ=60pp)
- ↑ `tech.4H.rsi.healthy` — gainers 9/10 vs losers 4/10 (Δ=50pp)
- ↑ `tech.1H.obv.up` — gainers 7/10 vs losers 3/10 (Δ=40pp)
- ↑ `tech.1W.adx.trending` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.1H.rsi.healthy` — gainers 6/10 vs losers 2/10 (Δ=40pp)
- ↑ `tech.1H.macd.bullish` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.1H.obv.down` — gainers 2/10 vs losers 7/10 (Δ=-50pp)
- ↓ `tech.type.pullback` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1D.near_support` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1H.rsi.oversold` — gainers 0/10 vs losers 5/10 (Δ=-50pp)
- ↓ `tech.1D.obv.down` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.1H.adx.strong` — gainers 2/10 vs losers 5/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/8/28 09:51:31_
