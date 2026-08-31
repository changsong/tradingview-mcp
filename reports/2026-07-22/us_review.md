# 回归检核报告 · US — 2026-07-03

**对照快照:** `reports/2026-07-02` (2026-07-02)
**池子:** 24 只 (成功 23 / 失败 1)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **NASDAQ:AAPL** | NASDAQ:AAPL | **+4.84%** | - | - | - | - |
| 2 | **NASDAQ:NBIX** | NASDAQ:NBIX | **+3.87%** | - | - | - | - |
| 3 | **NASDAQ:HRMY** | NASDAQ:HRMY | **+3.50%** | - | - | - | - |
| 4 | **NYSE:DUK** | NYSE:DUK | **+3.05%** | - | - | - | - |
| 5 | **NYSE:FSS** | NYSE:FSS | **+2.74%** | - | - | - | - |
| 6 | **INCY** | NASDAQ:INCY | **+2.68%** | 31.2 | 69 | Trend Follow (HH/HL Intact) | near_resist/bear_div |
| 7 | **TRNO** | NYSE:TRNO | **+2.00%** | 61.6 | 52 | Breakout (Squeeze Release) | near_resist/chop/low_rr |
| 8 | **GE** | NYSE:GE | **+0.69%** | 10.3 | 84 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 9 | **CRWD** | NASDAQ:CRWD | **+0.41%** | 19.8 | 68 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist/low_rr |
| 10 | **PACS** | NYSE:PACS | **+0.36%** | 21.4 | 83 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/near_resist |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **AMAT** | NASDAQ:AMAT | **-7.35%** | 33.4 | 42 | Trend Follow (HH/HL Intact) | bear_div |
| 2 | **NYSE:SXI** | NYSE:SXI | **-5.91%** | - | - | - | - |
| 3 | **NASDAQ:ALAB** | NASDAQ:ALAB | **-5.67%** | - | - | - | - |
| 4 | **APH** | NYSE:APH | **-4.43%** | 0 | 79 | - | - |
| 5 | **ENVA** | NYSE:ENVA | **-2.89%** | 4 | 50 | Overextended Chase (High Risk) | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 6 | **ST** | NYSE:ST | **-2.60%** | 19.4 | 50 | Pullback Buy (Near Support) | mom_decay/chop |
| 7 | **NBN** | NASDAQ:NBN | **-2.20%** | 35.1 | 50 | Trend Follow (HH/HL Intact) | bull_trap/near_resist/low_rr |
| 8 | **NYSE:NPB** | NYSE:NPB | **-1.86%** | - | - | - | - |
| 9 | **AIR** | NYSE:AIR | **-1.86%** | 20.2 | 47 | Trend Continuation | fake_break/bull_trap/near_resist |
| 10 | **NWBI** | NASDAQ:NWBI | **-1.56%** | 41 | 50 | Trend Follow (HH/HL Intact) | fake_break/bull_trap/near_resist |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

> 无显著共同特征 — 当日涨幅由特异性事件驱动,无法归纳统一权重调整。

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `news.signal.no_trade` | 1/10 | 6/10 | -50pp |
| `tech.1H.obv.down` | 1/10 | 5/10 | -40pp |
| `tech.4H.obv.up` | 3/10 | 7/10 | -40pp |
| `tech.1W.macd.bullish` | 4/10 | 7/10 | -30pp |
| `tech.4H.adx.strong` | 3/10 | 6/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↓ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 4/10 vs losers 7/10 (Δ=-30pp)
  - 当前 10 → **建议 8** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:500`
- ↓ **`tech.4H.adx.strong`** — ADX>30 强趋势 (4H)
  - gainers 3/10 vs losers 6/10 (Δ=-30pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_us_mtf.mjs:489`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↓ `news.signal.no_trade` — gainers 1/10 vs losers 6/10 (Δ=-50pp)
- ↓ `tech.1H.obv.down` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.4H.obv.up` — gainers 3/10 vs losers 7/10 (Δ=-40pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/7/3 21:46:09_
