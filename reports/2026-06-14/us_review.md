# 回归检核报告 · US — 2026-06-12

**对照快照:** `reports/2026-06-10` (2026-06-10)
**池子:** 53 只 (成功 28 / 失败 25)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:ARM** | NASDAQ:ARM | **+11.27%** | 24.7 | 56 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 2 | **NASDAQ:KLAC** | NASDAQ:KLAC | **+5.55%** | 62.3 | 74 | Trend Follow (HH/HL Intact) | - |
| 3 | **NASDAQ:NBIS** | NASDAQ:NBIS | **+4.55%** | 22 | 77 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |
| 4 | **NASDAQ:NVMI** | NASDAQ:NVMI | **+4.19%** | 46.3 | 54 | Breakout (Squeeze Release) | mom_decay/chop/low_rr |
| 5 | **NYSE:HPE** | NYSE:HPE | **+2.93%** | 32.7 | 85 | Overextended Chase (High Risk) | overheated/low_rr |
| 6 | **NYSE:IFS** | NYSE:IFS | **+2.90%** | 51.6 | 50 | Trend Continuation | near_resist/low_rr |
| 7 | **NASDAQ:AMAT** | NASDAQ:AMAT | **+2.64%** | 51.3 | 71 | Trend Follow (HH/HL Intact) | chop |
| 8 | **NASDAQ:ORRF** | NASDAQ:ORRF | **+2.04%** | 48.7 | 50 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 9 | **NYSE:AIR** | NYSE:AIR | **+1.40%** | 30.7 | 52 | Trend Continuation | fake_break/near_resist/chop/low_rr |
| 10 | **NYSE:DELL** | NYSE:DELL | **+1.05%** | 34.9 | 65 | Trend Follow (HH/HL Intact) | low_rr |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NYSE:PFS** | NYSE:PFS | **-3.91%** | 28.3 | 48 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 2 | **NASDAQ:AMD** | NASDAQ:AMD | **-3.91%** | 19.9 | 32 | Trend Follow (HH/HL Intact) | mom_decay/low_rr |
| 3 | **NYSE:LLY** | NYSE:LLY | **-2.41%** | 38.8 | 50 | Trend Follow (HH/HL Intact) | near_resist/low_rr |
| 4 | **NYSE:SN** | NYSE:SN | **-1.32%** | 30 | 63 | Reversal (Bullish RSI Divergence) | near_resist/chop/bear_div/low_rr |
| 5 | **NASDAQ:KRYS** | NASDAQ:KRYS | **-1.11%** | 24 | 55 | Trend Continuation | mom_decay/near_resist/chop/low_rr |
| 6 | **NYSE:TT** | NYSE:TT | **-0.41%** | 40 | 74 | Pullback Buy (Near Support) | near_resist/chop/low_rr |
| 7 | **NYSE:ENVA** | NYSE:ENVA | **-0.14%** | 43.2 | 71 | Trend Continuation | near_resist/chop |
| 8 | **NASDAQ:ALAB** | NASDAQ:ALAB | **-0.09%** | 20.8 | 43 | Overextended Chase (High Risk) | overheated/mom_decay/bear_div/low_rr |
| 9 | **NASDAQ:BELFA** | NASDAQ:BELFA | **-0.05%** | 29.9 | 50 | Breakout (Squeeze Release) | mom_decay/near_resist/chop/low_rr |
| 10 | **NASDAQ:PANW** | NASDAQ:PANW | **+0.03%** | 25.7 | 50 | Trend Follow (HH/HL Intact) | mom_decay/near_resist/low_rr |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.rs.strong` | 7/10 | 4/10 | +30pp |
| `tech.1W.adx.strong` | 7/10 | 4/10 | +30pp |
| `tech.1D.obv.up` | 9/10 | 6/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.resistance` | 4/10 | 8/10 | -40pp |
| `tech.1H.near_support` | 4/10 | 8/10 | -40pp |
| `tech.1W.rsi.healthy` | 4/10 | 8/10 | -40pp |
| `tech.verdict.long` | 6/10 | 9/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 7/10 vs losers 4/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`
- ↑ **`tech.1D.obv.up`** — OBV上行 资金流入 (1D)
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:529`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.rs.strong` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↓ `tech.flag.resistance` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1H.near_support` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.1W.rsi.healthy` — gainers 4/10 vs losers 8/10 (Δ=-40pp)
- ↓ `tech.verdict.long` — gainers 6/10 vs losers 9/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/13 06:59:02_
