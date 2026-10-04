---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_300f0cb4b7b611f191c0525400cd780f
    ReservedCode1: JD7BTMhzMqnKr7Ijlr6GdjOnDVqS52xQJtL8ZbXVB0R2zqBJPvFXnmUXu+RjTrhiwvGfuvf4jRGHi5OxdD4JKUIAur2MjvnG64sU5Orn/nhHMAZFmvz5V/TKGXK1W1gU5if7KijjjrMLzFI+SmubI0wGAJT5GkgDc+lDzMYsnqpkBuyKSIYbnTPMsBk=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_300f0cb4b7b611f191c0525400cd780f
    ReservedCode2: JD7BTMhzMqnKr7Ijlr6GdjOnDVqS52xQJtL8ZbXVB0R2zqBJPvFXnmUXu+RjTrhiwvGfuvf4jRGHi5OxdD4JKUIAur2MjvnG64sU5Orn/nhHMAZFmvz5V/TKGXK1W1gU5if7KijjjrMLzFI+SmubI0wGAJT5GkgDc+lDzMYsnqpkBuyKSIYbnTPMsBk=
---

# CN A股精选名单 — 🟢A 多周期对齐 Long(强)

- 生成时间: 2026-09-24
- 数据源: `watchlist/cn_tech_signals.json` + `watchlist/cn_news_signals.json`（`npm run combined:cn` 产物）
- 筛选条件（三重 AND）:
  1. 等级: 🟢A
  2. 多周期对齐: 3/4 (75%) 或 4/4 (100%)
  3. 类型: 🟢 Long (强)

---

## 命中结果

**空集**：今日无股票同时满足「🟢A + 对齐≥3/4 + signal 精确为 🟢 Long (强)」。

原因：当前 25 只标的中仅 `601208` 达到 🟢A 且对齐 4/4，但其新闻信号为 **🟢 Long (中)**，非「强」。

---

## 最接近候选（放宽 signal 至 Long 中/强）

| 代码 | 名称 | 等级 | 技术分 | 对齐 | 新闻信号 | 类型 | 入场 | 止损 | 目标 |
|------|------|------|--------|------|----------|------|------|------|------|
| 601208 | 601208 | 🟢A | 50.4 | 4/4 (100%) | 🟢 Long (中) | 回调低吸(支撑) | 53.36 | 51.20 | 55.52 |

> 601208 综合排名 TOP20 第 11 位，综合分 62.4，盈亏比 2.2:1。

## 筛选统计

- 全量标的: 25 只
- 🟢A 等级: 1 只（601208）
- 🟢A + 对齐≥3/4: 1 只（601208）
- 完全命中（signal=🟢 Long (强)）: 0 只

## 放宽建议

- 若可接受 signal 为「🟢 Long (中)」→ 命中 601208
- 若进一步放宽等级（接受 ⚪C）→ 可参考 `watchlist/cn_combined_signals.md` 完整 TOP20 排名
*（内容由AI生成，仅供参考）*
