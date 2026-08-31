# 回归检核报告 · CN — 2026-07-02

**对照快照:** `reports/2026-07-01` (2026-07-01)
**池子:** 30 只 (成功 30 / 失败 0)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **肯特催化** | SSE:603120 | **+10.01%** | -1.7 | 50 | 震荡 / 无优势 | 压力/震荡/RR差 |
| 2 | **000776** | SZSE:000776 | **+6.24%** | 48.8 | 50 | 趋势追涨(结构完好) | 假突/压力/RR差 |
| 3 | **600160** | SSE:600160 | **+5.36%** | 16.8 | 65 | 趋势延续 | 压力/看空背离/RR差 |
| 4 | **002600** | SZSE:002600 | **+2.65%** | 30.2 | 84 | 趋势延续 | 假突/压力 |
| 5 | **安奈儿** | SZSE:002875 | **+2.09%** | 24.9 | 73 | 回调低吸(支撑) | 压力/RR差 |
| 6 | **上海石化** | SSE:600688 | **+1.71%** | 44 | 50 | 趋势追涨(结构完好) | 压力/看空背离 |
| 7 | **新中港** | SSE:605162 | **+1.30%** | 17.1 | 48 | 趋势延续 | 诱多/动能衰/压力/RR差 |
| 8 | **000725** | SZSE:000725 | **+1.04%** | 0 | 88 | 趋势延续 | 诱多/压力/看空背离 |
| 9 | **002056** | SZSE:002056 | **+0.92%** | 31.8 | 50 | 趋势延续 | 压力/RR差 |
| 10 | **300037** | SZSE:300037 | **+0.75%** | 31.8 | 50 | 趋势延续 | 压力/RR差 |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **603203** | SSE:603203 | **-10.00%** | 34.3 | 36 | 反转(超卖+确认信号) | 动能衰/反转 |
| 2 | **欧克科技** | SZSE:001223 | **-9.96%** | 34.1 | 67 | 回调低吸(支撑) | 压力/震荡/RR差 |
| 3 | **600522** | SSE:600522 | **-8.67%** | 2.4 | 50 | 震荡 / 无优势 | 压力/震荡/RR差 |
| 4 | **600186** | SSE:600186 | **-7.36%** | 25.4 | 70 | 回调低吸(支撑) | 震荡 |
| 5 | **300054** | SZSE:300054 | **-5.35%** | 23.6 | 50 | 过热追涨(高风险) | 过热/诱多/动能衰/压力 |
| 6 | **001309** | SZSE:001309 | **-5.27%** | 25.8 | 48 | 趋势延续 | 动能衰/压力/RR差 |
| 7 | **301308** | SZSE:301308 | **-5.11%** | 37 | 38 | 趋势追涨(结构完好) | 诱多/动能衰/压力 |
| 8 | **300990** | SZSE:300990 | **-4.79%** | 47.8 | 100 | 回调低吸(支撑) | 压力/RR差 |
| 9 | **600176** | SSE:600176 | **-3.58%** | 53.8 | 72 | 趋势追涨(结构完好) | 动能衰/RR差 |
| 10 | **长高电气** | SZSE:002452 | **-3.21%** | 41.8 | 89 | 趋势追涨(结构完好) | 压力/RR差 |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1H.adx.strong` | 9/10 | 4/10 | +50pp |
| `tech.type.trend_continue` | 6/10 | 1/10 | +50pp |
| `tech.1D.macd.bullish` | 9/10 | 5/10 | +40pp |
| `tech.flag.resistance` | 10/10 | 7/10 | +30pp |
| `tech.1W.macd.bullish` | 8/10 | 5/10 | +30pp |
| `tech.1H.macd.bullish` | 8/10 | 5/10 | +30pp |
| `news.top_news_type.行业` | 6/10 | 3/10 | +30pp |
| `tech.1D.rsi.healthy` | 8/10 | 5/10 | +30pp |
| `tech.4H.adx.strong` | 8/10 | 5/10 | +30pp |
| `tech.1H.obv.down` | 5/10 | 2/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1D.near_support` | 1/10 | 5/10 | -40pp |
| `tech.flag.momentum_decay` | 1/10 | 5/10 | -40pp |
| `tech.rs.weak` | 6/10 | 9/10 | -30pp |
| `tech.4H.obv.up` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.type.trend_continue`** — 趋势延续
  - gainers 6/10 vs losers 1/10 (Δ=50pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:699`
- ↑ **`tech.1D.macd.bullish`** — MACD柱正在零上 (1D)
  - gainers 9/10 vs losers 5/10 (Δ=40pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:526`
- ↑ **`tech.1W.macd.bullish`** — MACD柱正在零上 (1W)
  - gainers 8/10 vs losers 5/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:526`
- ↑ **`tech.1D.rsi.healthy`** — RSI 50-72健康 (1D)
  - gainers 8/10 vs losers 5/10 (Δ=30pp)
  - 当前 10 → **建议 13** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:522`
- ↑ **`tech.4H.adx.strong`** — ADX>30 强趋势 (4H)
  - gainers 8/10 vs losers 5/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:515`
- ↓ **`tech.1D.near_support`** — 支撑位附近 (1D)
  - gainers 1/10 vs losers 5/10 (Δ=-40pp)
  - 当前 6 → **建议 5** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:562`
- ↓ **`tech.rs.weak`** — RS 跑输大盘
  - gainers 6/10 vs losers 9/10 (Δ=-30pp)
  - 当前 -4 → **建议 -3** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:583`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1H.adx.strong` — gainers 9/10 vs losers 4/10 (Δ=50pp)
- ↑ `tech.flag.resistance` — gainers 10/10 vs losers 7/10 (Δ=30pp)
- ↑ `tech.1H.macd.bullish` — gainers 8/10 vs losers 5/10 (Δ=30pp)
- ↑ `news.top_news_type.行业` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↑ `tech.1H.obv.down` — gainers 5/10 vs losers 2/10 (Δ=30pp)
- ↓ `tech.flag.momentum_decay` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.4H.obv.up` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/7/2 08:25:49_
