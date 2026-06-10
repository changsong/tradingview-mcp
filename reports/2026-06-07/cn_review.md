# 回归检核报告 · CN — 2026-06-04

**对照快照:** `reports/2026-06-03` (2026-06-03)
**池子:** 51 只 (成功 51 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **600688** | SSE:600688 | **+10.10%** | 52.7 | 50 | 首板涨停 — 强买盘信号 | 压力/涨停 |
| 2 | **605162** | SSE:605162 | **+10.04%** | 44.9 | 29 | 首板涨停 — 强买盘信号 | 压力/震荡/RR差/涨停 |
| 3 | **603135** | SSE:603135 | **+10.01%** | 43.6 | 59 | 首板涨停 — 强买盘信号 | 动能衰/压力/RR差/涨停 |
| 4 | **SZSE:002463** | SZSE:002463 | **+8.49%** | - | - | - | - |
| 5 | **SSE:603986** | SSE:603986 | **+7.53%** | - | - | - | - |
| 6 | **SZSE:002056** | SZSE:002056 | **+6.98%** | - | - | - | - |
| 7 | **603120** | SSE:603120 | **+6.93%** | 52 | 50 | 首板涨停 — 强买盘信号 | 动能衰/RR差/涨停 |
| 8 | **SZSE:002384** | SZSE:002384 | **+6.17%** | - | - | - | - |
| 9 | **SZSE:002897** | SZSE:002897 | **+5.43%** | - | - | - | - |
| 10 | **600198** | SSE:600198 | **+4.40%** | 45.9 | 50 | 首板涨停 — 强买盘信号 | 动能衰/压力/震荡/涨停 |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **002875** | SZSE:002875 | **-10.00%** | 46.1 | 50 | 首板涨停 — 强买盘信号 | 动能衰/涨停 |
| 2 | **SZSE:301120** | SZSE:301120 | **-9.24%** | - | - | - | - |
| 3 | **SSE:600330** | SSE:600330 | **-5.49%** | - | - | - | - |
| 4 | **SZSE:300620** | SZSE:300620 | **-5.28%** | - | - | - | - |
| 5 | **SZSE:300750** | SZSE:300750 | **-4.27%** | - | - | - | - |
| 6 | **SZSE:300040** | SZSE:300040 | **-4.20%** | - | - | - | - |
| 7 | **SSE:603629** | SSE:603629 | **-3.59%** | - | - | - | - |
| 8 | **SZSE:300394** | SZSE:300394 | **-3.40%** | - | - | - | - |
| 9 | **SZSE:300679** | SZSE:300679 | **-3.32%** | - | - | - | - |
| 10 | **SZSE:300763** | SZSE:300763 | **-3.27%** | - | - | - | - |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.rsi.healthy` | 5/10 | 0/10 | +50pp |
| `tech.4H.rsi.healthy` | 5/10 | 0/10 | +50pp |
| `tech.4H.obv.up` | 5/10 | 0/10 | +50pp |
| `tech.type.up_limit` | 5/10 | 1/10 | +40pp |
| `tech.flag.up_limit` | 5/10 | 1/10 | +40pp |
| `tech.score.high` | 5/10 | 1/10 | +40pp |
| `tech.limit.up_streak` | 5/10 | 1/10 | +40pp |
| `tech.1W.rsi.healthy` | 5/10 | 1/10 | +40pp |
| `tech.1W.above_ema200` | 5/10 | 1/10 | +40pp |
| `tech.1D.above_ema200` | 5/10 | 1/10 | +40pp |
| `tech.4H.above_ema200` | 5/10 | 1/10 | +40pp |
| `tech.1H.above_ema200` | 5/10 | 1/10 | +40pp |
| `tech.1H.macd.bullish` | 5/10 | 1/10 | +40pp |
| `tech.1H.obv.up` | 5/10 | 1/10 | +40pp |
| `news.signal.no_trade` | 5/10 | 1/10 | +40pp |
| `news.score.high` | 5/10 | 1/10 | +40pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

> 无显著共同特征。

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 5/10 vs losers 0/10 (Δ=50pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:522`
- ↑ **`tech.flag.up_limit`** — 涨停板加分
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 15 → **建议 19** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:711`
- ↑ **`tech.1W.above_ema200`** — 站上EMA200 (1W)
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 8 → **建议 10** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:505`
- ↑ **`tech.1D.above_ema200`** — 站上EMA200 (1D)
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 8 → **建议 10** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:505`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.4H.rsi.healthy` — gainers 5/10 vs losers 0/10 (Δ=50pp)
- ↑ `tech.4H.obv.up` — gainers 5/10 vs losers 0/10 (Δ=50pp)
- ↑ `tech.type.up_limit` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.score.high` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.limit.up_streak` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1W.rsi.healthy` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.4H.above_ema200` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1H.above_ema200` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1H.macd.bullish` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1H.obv.up` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `news.signal.no_trade` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `news.score.high` — gainers 5/10 vs losers 1/10 (Δ=40pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/6/4 18:57:41_
