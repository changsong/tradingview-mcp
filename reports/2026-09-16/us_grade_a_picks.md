---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_6e45ec9bb03c11f188ac525400dcc5b3
    ReservedCode1: WjXGcCVaJ/RTgztTknW+h+OlJk7B0xyXbWf3StlEGRB5YspZYWer1I2MmAa1iK3xgHlIJO9OLtr2OeXeTG1ui0xp3XClwLpeM12OfDeVyUrwf/sdCOQohaIuQrbxN/tbYgHRiDlusOV6/EGNWWN9HYJ1XRdUwQXY2BAucuoUWvLK0gkg5AdHsCuPr38=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_6e45ec9bb03c11f188ac525400dcc5b3
    ReservedCode2: WjXGcCVaJ/RTgztTknW+h+OlJk7B0xyXbWf3StlEGRB5YspZYWer1I2MmAa1iK3xgHlIJO9OLtr2OeXeTG1ui0xp3XClwLpeM12OfDeVyUrwf/sdCOQohaIuQrbxN/tbYgHRiDlusOV6/EGNWWN9HYJ1XRdUwQXY2BAucuoUWvLK0gkg5AdHsCuPr38=
---

# 🎯 US Grade A Picks (三条件严格筛选)

**Generated:** 2026-09-14
**数据源:** `npm run combined:us` → `watchlist/us_combined_signals.md` + `us_tech_signals.json` + `us_news_signals.json`

## 筛选条件（AND 交集）

1. **等级 = 🟢A**（Tech + News 双确认，无过热）
2. **多周期对齐 ≥ 3/4 (75%)**，即 3/4 或 4/4
3. **News Signal = GREEN Long (Strong)**（取自 `us_news_signals.json` 的 `signal` 字段）

---

## ✅ 命中名单（1 只）

| Code | Name | Grade | MTF Alignment | News Signal | Entry | Stop | Target | R/R | 策略 |
|------|------|-------|---------------|-------------|-------|------|--------|-----|------|
| NYSE:APH | Amphenol Corp | 🟢A | 4/4 (100%) — 1W↑ 1D↑ 4H↑ 1H↑ | GREEN Long (Strong) | 83.92 | 80.27 | 89.27 | 1.5:1 | Trend Continuation |

> News 评分 83（confidence: High, news_count: 10）— Multiple bullish catalysts converging。
> ⚠️ 风险提示：near_resist / chop (ADX 8.6) / low_rr，建议回踩支撑 78.11 附近再介入，勿追价。

---

## ❌ 未命中对照表（🟢A 池 8 只中其余 7 只）

| Code | Name | Grade | MTF Alignment | News Signal | 未命中原因 |
|------|------|-------|---------------|-------------|-----------|
| NASDAQ:SMCI | Super Micro | 🟢A | 3/4 (75%) | GREEN Long (Mid) | News 非 Strong |
| NYSE:C | Citigroup | 🟢A | 3/4 (75%) | WARN Long (Cautious) | News 非 Strong（WARN） |
| NASDAQ:HOOD | Robinhood | 🟢A | 1/4 (25%) | GREEN Long (Mid) | 对齐 < 75% + News 非 Strong |
| NYSE:DELL | Dell Tech | 🟢A | 4/4 (100%) | GREEN Long (Mid) | News 非 Strong |
| NASDAQ:LITE | Lumentum | 🟢A | 1/4 (25%) | GREEN Long (Mid) | 对齐 < 75% + News 非 Strong |
| NASDAQ:AMD | AMD | 🟢A | 4/4 (100%) | GREEN Long (Mid) | News 非 Strong |
| NYSE:ASX | ASE Tech | 🟢A | 2/3 (67%) | GREEN Long (Mid) | 对齐 < 75% + News 非 Strong |

---

## 说明

- 三条件 AND 严格交集仅 1 只（NYSE:APH），与历史规律一致——高置信度 A 级且 News 达 Strong 的标的向来稀少。
- 多周期对齐取 `us_tech_signals.json` 中 `alignment` 字段（比值 = up/total ≥ 75%）。
- News Signal 取自 `us_news_signals.json` 的 `signal` 字段，未使用 combined 表的 News Signal 列（两者口径不同，后者含 tech 侧合并）。
- 数据快照：`reports/2026-09-14/`
*（内容由AI生成，仅供参考）*
