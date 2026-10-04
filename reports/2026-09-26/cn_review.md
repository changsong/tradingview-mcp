# 回归检核报告 · CN — 2026-09-26

**对照快照:** `reports/2026-09-25` (2026-09-25)
**池子:** 27 只 (成功 27 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **601208** | SSE:601208 | **+2.62%** | 58.6 | 65 | 反转(看多背离) | 假突/压力/RR差 |
| 2 | **SZSE:301529** | SZSE:301529 | **+1.73%** | - | - | - | - |
| 3 | **300285** | SZSE:300285 | **+1.45%** | 57.6 | 50 | 回调低吸(支撑) | 压力 |
| 4 | **600172** | SSE:600172 | **+0.90%** | 70.8 | 50 | 回调低吸(支撑) | 压力/RR差 |
| 5 | **601872** | SSE:601872 | **+0.72%** | 7.8 | 50 | 震荡 / 无优势 | 压力/RR差 |
| 6 | **SZSE:002975** | SZSE:002975 | **+0.30%** | - | - | - | - |
| 7 | **300857** | SZSE:300857 | **+0.21%** | 40.4 | 50 | 回调低吸(支撑) | 动能衰/压力/RR差 |
| 8 | **300684** | SZSE:300684 | **-0.74%** | 31.8 | 50 | 趋势延续 | RR差 |
| 9 | **603296** | SSE:603296 | **-0.98%** | 41.8 | 50 | 突破型(Squeeze释放) | 动能衰/压力/RR差 |
| 10 | **605168** | SSE:605168 | **-1.23%** | 17.6 | 50 | 回调低吸(支撑) | 动能衰/压力/RR差 |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **002636** | SZSE:002636 | **-7.19%** | 25.8 | 50 | 回调低吸(支撑) | 动能衰/压力 |
| 2 | **301217** | SZSE:301217 | **-5.81%** | 29.8 | 50 | 回调低吸(支撑) | 动能衰/压力 |
| 3 | **001389** | SZSE:001389 | **-5.77%** | 28.2 | 50 | 回调低吸(支撑) | 动能衰 |
| 4 | **300408** | SZSE:300408 | **-5.44%** | 17.8 | 50 | 回调低吸(支撑) | 动能衰/压力/RR差 |
| 5 | **002916** | SZSE:002916 | **-4.89%** | 38.6 | 50 | 回调低吸(支撑) | 动能衰/压力/RR差 |
| 6 | **600110** | SSE:600110 | **-4.57%** | 8.6 | 50 | 回调低吸(支撑) | 动能衰/压力/震荡 |
| 7 | **300903** | SZSE:300903 | **-4.56%** | 8.8 | 50 | 震荡 / 无优势 | RR差 |
| 8 | **601869** | SSE:601869 | **-4.34%** | 12.6 | 50 | 回调低吸(支撑) | 动能衰/压力/震荡/RR差 |
| 9 | **600186** | SSE:600186 | **-4.05%** | 28.6 | 50 | 回调低吸(支撑) | 动能衰/压力/RR差 |
| 10 | **603228** | SSE:603228 | **-3.63%** | 35.7 | 50 | 回调低吸(支撑) | 动能衰/压力 |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.rsi.healthy` | 5/10 | 1/10 | +40pp |
| `tech.1D.rsi.healthy` | 5/10 | 1/10 | +40pp |
| `tech.4H.rsi.healthy` | 5/10 | 1/10 | +40pp |
| `tech.1H.rsi.healthy` | 5/10 | 1/10 | +40pp |
| `tech.score.high` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.flag.momentum_decay` | 3/10 | 9/10 | -60pp |
| `tech.type.pullback` | 4/10 | 9/10 | -50pp |
| `tech.1W.obv.down` | 6/10 | 10/10 | -40pp |
| `tech.1D.obv.down` | 6/10 | 10/10 | -40pp |
| `tech.4H.obv.down` | 6/10 | 10/10 | -40pp |
| `tech.1H.obv.down` | 6/10 | 10/10 | -40pp |
| `tech.verdict.long` | 2/10 | 5/10 | -30pp |
| `tech.1D.near_support` | 6/10 | 9/10 | -30pp |
| `news.signal.no_trade` | 7/10 | 10/10 | -30pp |
| `tech.1W.near_support` | 4/10 | 7/10 | -30pp |
| `tech.score.mid` | 2/10 | 5/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 5/10 vs losers 1/10 (Δ=40pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:522`
- ↓ **`tech.type.pullback`** — 回调低吸 (支撑)
  - gainers 4/10 vs losers 9/10 (Δ=-50pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:695`
- ↓ **`tech.1D.near_support`** — 支撑位附近 (1D)
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:562`
- ↓ **`tech.score.mid`** — 技术分15-35中等区间
  - gainers 2/10 vs losers 5/10 (Δ=-30pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs (scoreTF 总分区间)`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.rsi.healthy` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.4H.rsi.healthy` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.1H.rsi.healthy` — gainers 5/10 vs losers 1/10 (Δ=40pp)
- ↑ `tech.score.high` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.flag.momentum_decay` — gainers 3/10 vs losers 9/10 (Δ=-60pp)
- ↓ `tech.1W.obv.down` — gainers 6/10 vs losers 10/10 (Δ=-40pp)
- ↓ `tech.1D.obv.down` — gainers 6/10 vs losers 10/10 (Δ=-40pp)
- ↓ `tech.4H.obv.down` — gainers 6/10 vs losers 10/10 (Δ=-40pp)
- ↓ `tech.1H.obv.down` — gainers 6/10 vs losers 10/10 (Δ=-40pp)
- ↓ `tech.verdict.long` — gainers 2/10 vs losers 5/10 (Δ=-30pp)
- ↓ `news.signal.no_trade` — gainers 7/10 vs losers 10/10 (Δ=-30pp)
- ↓ `tech.1W.near_support` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/9/26 15:13:32_
