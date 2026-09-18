---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_0c5c8c16ade111f1ac01525400e6dd8f
    ReservedCode1: vZ4rv5zamQ2zgzEtKfiqV+hmMH6Qx96ByAUwM3dEeDgrBkIUbjUTI+MmlUDT9ahnhITN0lFcNavwaTFRcj/cuLKI7yRNEnl/G7Lp7hwwP0OZgI+pQg9k/HPfmtM+ycimJXpeRhLVHny7dgT5GT3rgm0zCoQZb1pk44mAl2lXQ5tehT3uIOO22Q0tMwM=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_0c5c8c16ade111f1ac01525400e6dd8f
    ReservedCode2: vZ4rv5zamQ2zgzEtKfiqV+hmMH6Qx96ByAUwM3dEeDgrBkIUbjUTI+MmlUDT9ahnhITN0lFcNavwaTFRcj/cuLKI7yRNEnl/G7Lp7hwwP0OZgI+pQg9k/HPfmtM+ycimJXpeRhLVHny7dgT5GT3rgm0zCoQZb1pk44mAl2lXQ5tehT3uIOO22Q0tMwM=
---

# US Grade A Picks · 三条件精选列表

**生成日期:** 2026-09-11　　**数据来源:** `npm run combined:us` 本次运行产物 `watchlist/us_combined_signals.md`，并回源 `watchlist/us_tech_signals.json`（2026-09-11T12:59:31Z，52 只）/ `watchlist/us_news_signals.json`（2026-09-11T12:54:02Z，52 只）逐只交叉过滤。

## 筛选条件
| 条件 | 要求 |
|------|------|
| 1. 等级 | 🟢A |
| 2. 多周期对齐 | 3/4 (75%) 或 4/4 (100%) |
| 3. News Signal | GREEN Long (Strong) |

三个条件之间为 **AND** 关系（必须同时满足）。多周期对齐按 `alignment` 字段的 `up/total` 比例 ≥ 0.75 判定（兼容 1/1、3/3 等非 4 周期分母的兜底，避免漏掉周期数据缺失的强对齐股）。

## 结果摘要
- 全池 🟢A 候选：**2 只**（LTC / LITE）
- News GREEN 池（全为 Mid 级）：5 只（LTC / MU / LITE / WPM / NBIS），**今日无任何 GREEN Long (Strong) 信号**
- 通过全部三条件：**0 只（严格交集为空）**

> 说明：News Signal 级别 `GREEN Long (Strong)` 当日无 1 只标的命中；`🟢A ∩ 对齐≥75%` 仅剩 LTC 一只，但其 News 信号为 `GREEN Long (Mid)`。因此严格三条件交集为空，属**上游 News 信号池无 Strong 级标的**所致，并非脚本异常。

---

## ✅ 命中名单（严格三条件）
**0 只** —— 无同时满足「🟢A + 多周期对齐 ≥ 3/4 + News = GREEN Long (Strong)」的股票。

---

## 🟢A 池内对照（2 只，均为☆候选，差在 News 等级/对齐）

### 1. LTC（NYSE:LTC）—— ★最接近命中
| 字段 | 值 |
|------|-----|
| 等级 | 🟢A |
| 对齐判定 | 1/1 (100%)，**达标**（up/total=100% ≥75%） |
| 对齐明细 | 1W:N/A 1D↑ 4H:N/A 1H:N/A（仅 1D 有数据，分母为 1） |
| News Signal | GREEN Long (Mid)（News Score 72）—— 未达 Strong ★ |
| Tech Score | 58（Trend Follow (HH/HL Intact)） |
| Combined Score | **68.6**（全池第 1） |
| 当前价 / Entry | 42.5 / 42.5 |
| Stop / Target | 41.35（ATR×1.5）/ 44.18 |
| R/R | 1.5:1 |
| RSI | 64.2　ATR% 1.8%　Dist EMA20 3.4% |
| Chase OK | NO |
| 风险标记 | near_resist low_rr |
| 新闻要点 | 完成 $200M 养老社区收购 + 分析师上调至 Buy（月度股息机会），利多 3 条、利空 0 条 |

> 落选原因：News 为 `GREEN Long (Mid)` 而非 Strong。若后续新闻升级为 Strong，即满足全部三条件。注意其对周期覆盖不完整（仅 1D↑，1W/4H/1H 抓取 N/A），多周期确认度有限。

### 2. LITE（NASDAQ:LITE）
| 字段 | 值 |
|------|-----|
| 等级 | 🟢A |
| 对齐判定 | 1/4 (25%)，**未达标**（<75%） |
| 对齐明细 | 1W↑ 1D→ 4H→ 1H→ |
| News Signal | GREEN Long (Mid)（News Score 67） |
| Tech Score | 32.1（Breakout (Squeeze Release)） |
| Combined Score | **51.1**（全池第 8） |
| 当前价 / Entry | 935.7 / 938.51 |
| Stop / Target | 826.22（ATR×1.8）/ 1087.75 |
| R/R | 1.3:1 |
| RSI | 54.7　ATR% 6.5%　Dist EMA20 4.5% |
| Chase OK | NO |
| 风险标记 | near_resist chop low_rr |

> 落选原因：对齐仅 1/4 (25%) + News 为 Mid。

---

## 📋 对齐达标（≥75%）但 News 非 GREEN 的观察池
> 供后续 `news:us` 刷新后复查：若这些标的 News 转 Strong，需再复核其技术等级是否仍为 🟢A。

| 股票 | 对齐 | News Signal | Tech |
|------|------|-------------|------|
| SPNT | 1/1 (100%) | NEUTRAL No Trade (No Data) | 65 |
| PACS | 3/3 (100%) | NEUTRAL No Trade (No Data) | 51.9 |
| AAPL | 4/4 (100%) | NEUTRAL No Trade (No Data) | 50.3 |
| HGTY | 3/4 (75%) | NEUTRAL No Trade (No Data) | 49.9 |
| CET | 1/1 (100%) | NEUTRAL No Trade (No Data) | 41 |
| OTC:SMNEY | 2/2 (100%) | NEUTRAL No Trade (No Data) | 38.6 |
| BGC | 3/3 (100%) | NEUTRAL No Trade (Weak Bullish) | 36.3 |
| NBN | 2/2 (100%) | NEUTRAL No Trade (No Data) | 28.6 |
| SM | 3/3 (100%) | NEUTRAL No Trade (No Data) | 26.4 |
| C | 3/3 (100%) | NEUTRAL No Trade (Weak Bullish) | 25.1 |

## ⚠️ 风险注记
1. 严格交集为空系当日 News 池无 `GREEN Long (Strong)` 所致，判定脚本与数据链路正常，勿误判为"市场无机会"或脚本故障。
2. LTC / LITE 当日 ET 快照价格与 md 明细存在微小出入（LTC 42.5、LITE 935.7），以 `us_combined_signals.md` Grade A 明细为准，实盘入场前请核对实时价格。
3. LTC 重心集中于单一周期 1D↑，1W/4H/1H 为 N/A（数据缺失），多周期确认度有限，建议人工复核日线趋势后决定是否参与，注意 near_resist/low_rr 风险。
4. 本列表仅作研究参考，不构成投资建议。

---

*Generated: 2026-09-11，基于 `npm run combined:us`（2026-09-11 21:00:11）产物自动生成（回源 tech/news JSON 交叉过滤）*
*（内容由AI生成，仅供参考）*
*（内容由AI生成，仅供参考）*
