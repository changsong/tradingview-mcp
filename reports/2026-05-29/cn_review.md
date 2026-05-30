# 回归检核报告 · CN — 2026-05-29

**对照快照:** `reports/2026-05-28` (2026-05-28)
**池子:** 69 只 (成功 63 / 失败 6)
**阈值:** top-N=10, 出现率≥50%, Δ≥30pp

---

## 🚀 涨幅前 10

| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **江海股份** | SZSE:002484 | **+5.10%** | 7.7 | 71 | 过热追涨(高风险) | 过热/假突/诱多/动能衰/压力 |
| 2 | **申菱环境** | SZSE:301018 | **+4.46%** | 35.3 | 53 | 趋势追涨(结构完好) | RR差 |
| 3 | **深南电路** | SZSE:002916 | **+3.30%** | 58.3 | 91 | 过热追涨(高风险) | 过热 |
| 4 | **剑桥科技** | SSE:603083 | **+2.30%** | 11.8 | 91 | 趋势追涨(结构完好) | 假突/动能衰/压力/看空背离/RR差 |
| 5 | **桂冠电力** | SSE:600236 | **+1.57%** | 49.4 | 50 | 趋势追涨(结构完好) | 动能衰/RR差 |
| 6 | **新特电气** | SZSE:301120 | **+0.59%** | 49.1 | 60 | 过热追涨(高风险) | 过热 |
| 7 | **吉宏股份** | SZSE:002803 | **-0.64%** | 51.2 | 50 | 回调低吸(支撑) | 动能衰 |
| 8 | **沪电股份** | SZSE:002463 | **-0.77%** | 32.2 | 37 | 过热追涨(高风险) | 过热/诱多/压力 |
| 9 | **鹏鼎控股** | SZSE:002938 | **-0.93%** | 49.8 | 50 | 过热追涨(高风险) | 过热 |
| 10 | **中钨高新** | SZSE:000657 | **-1.41%** | 33 | 55 | 过热追涨(高风险) | 过热/压力/RR差 |

## 📉 跌幅前 10

| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |
|---|------|------|------|--------|--------|---------|-----------|
| 1 | **中石科技** | SZSE:300684 | **-12.04%** | 45.8 | 68 | 趋势追涨(结构完好) | 动能衰/压力/RR差 |
| 2 | **伊戈尔** | SZSE:002922 | **-10.01%** | 31.1 | 90 | 趋势延续 | 假突/压力/RR差 |
| 3 | **芯瑞达** | SZSE:002983 | **-10.00%** | 38.9 | 50 | 趋势延续 | 压力/RR差 |
| 4 | **快克智能** | SSE:603203 | **-10.00%** | 44 | 69 | 过热追涨(高风险) | 过热/诱多/动能衰/压力 |
| 5 | **华天科技** | SZSE:002185 | **-10.00%** | 32.9 | 63 | 过热追涨(高风险) | 过热/诱多/动能衰/压力 |
| 6 | **科远智慧** | SZSE:002380 | **-9.99%** | 45 | 18 | 趋势追涨(结构完好) | RR差 |
| 7 | **SZSE:002600** | SZSE:002600 | **-8.78%** | - | - | - | - |
| 8 | **紫光国微** | SZSE:002049 | **-8.11%** | 33.1 | 69 | 趋势延续 | 压力/RR差 |
| 9 | **全志科技** | SZSE:300458 | **-8.02%** | 36.4 | 48 | 突破型(Squeeze释放) | 动能衰/压力/看空背离/RR差 |
| 10 | **SSE:600206** | SSE:600206 | **-7.89%** | - | - | - | - |

---

## ✅ 涨幅共同特征 (出现率 ≥50% 且 Δ ≥30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.adx.strong` | 9/10 | 4/10 | +50pp |
| `tech.type.overheat_chase` | 6/10 | 2/10 | +40pp |
| `tech.flag.overheat` | 6/10 | 2/10 | +40pp |
| `tech.1D.dist20.overheat` | 6/10 | 2/10 | +40pp |
| `tech.rs.strong` | 9/10 | 6/10 | +30pp |
| `tech.1W.rsi.overheat` | 5/10 | 2/10 | +30pp |
| `tech.1W.bull_ema` | 10/10 | 7/10 | +30pp |
| `tech.1W.obv.up` | 10/10 | 7/10 | +30pp |
| `tech.1W.dist20.overheat` | 10/10 | 7/10 | +30pp |
| `tech.4H.adx.strong` | 6/10 | 3/10 | +30pp |
| `news.score.high` | 10/10 | 7/10 | +30pp |
| `tech.verdict.strong_long` | 7/10 | 4/10 | +30pp |
| `news.signal.no_trade` | 6/10 | 3/10 | +30pp |

## ❌ 跌幅共同特征 (出现率 ≥50% 且 Δ ≤-30pp)

| 特征 | 涨幅出现 | 跌幅出现 | Δ |
|------|---------|---------|---|
| `tech.1W.vol.expanding` | 1/10 | 5/10 | -40pp |
| `tech.flag.resistance` | 4/10 | 7/10 | -30pp |

---

## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)

- ↑ **`tech.1W.adx.strong`** — ADX>30 强趋势 (1W)
  - gainers 9/10 vs losers 4/10 (Δ=50pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:515`
- ↑ **`tech.type.overheat_chase`** — 过热追涨 (高风险)
  - gainers 6/10 vs losers 2/10 (Δ=40pp)
  - 当前 (非数值) → **建议 (人工评估)** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:697`
- ↑ **`tech.flag.overheat`** — 过热惩罚组合
  - gainers 6/10 vs losers 2/10 (Δ=40pp)
  - 当前 -10 → **建议 -12** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:511`
- ↑ **`tech.1D.dist20.overheat`** — EMA20偏离>12% 过热惩罚 (1D)
  - gainers 6/10 vs losers 2/10 (Δ=40pp)
  - 当前 -10 → **建议 -12** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:511`
- ↑ **`tech.rs.strong`** — RS 跑赢大盘
  - gainers 9/10 vs losers 6/10 (Δ=30pp)
  - 当前 5 → **建议 6** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:579`
- ↑ **`tech.1W.rsi.overheat`** — RSI>80超买 (1W)
  - gainers 5/10 vs losers 2/10 (Δ=30pp)
  - 当前 -12 → **建议 -15** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:524`
- ↑ **`tech.1W.bull_ema`** — EMA多头排列 (1W)
  - gainers 10/10 vs losers 7/10 (Δ=30pp)
  - 当前 9 → **建议 11** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:504`
- ↑ **`tech.1W.obv.up`** — OBV上行 资金流入 (1W)
  - gainers 10/10 vs losers 7/10 (Δ=30pp)
  - 当前 4 → **建议 5** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:555`
- ↑ **`tech.4H.adx.strong`** — ADX>30 强趋势 (4H)
  - gainers 6/10 vs losers 3/10 (Δ=30pp)
  - 当前 6 → **建议 8** — `pipeline/3-technical/analyze_tech_cn_mtf.mjs:515`

### 未分类特征 (待补 WEIGHT_SOURCES 映射 → `pipeline/lib/featureExtract.mjs`)

- ↑ `tech.1W.dist20.overheat` — gainers 10/10 vs losers 7/10 (Δ=30pp)
- ↑ `news.score.high` — gainers 10/10 vs losers 7/10 (Δ=30pp)
- ↑ `tech.verdict.strong_long` — gainers 7/10 vs losers 4/10 (Δ=30pp)
- ↑ `news.signal.no_trade` — gainers 6/10 vs losers 3/10 (Δ=30pp)
- ↓ `tech.1W.vol.expanding` — gainers 1/10 vs losers 5/10 (Δ=-40pp)
- ↓ `tech.flag.resistance` — gainers 4/10 vs losers 7/10 (Δ=-30pp)

---

> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 `file:line`。

_报告生成: 2026/5/29 23:18:27_
