---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_927e2bb3a4e011f1abe1525400e6dd8f
    ReservedCode1: 7mc5/yhgcLXeRogHnEfh1Om8Z8FudninH9dpJHD88J+LnbZJ4kII08G65vP1hsblc7YSdxqbf4lb0ljpg2NRf4glt6C5sPp25r+n8bReazf6YBgEepjF3Ux2cGNWFFZUZypMuxNRBOzhNKMKo8/lUwHSOvptmx4VPvJNQo6rov+Xt6dgtZodsKyJOsg=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_927e2bb3a4e011f1abe1525400e6dd8f
    ReservedCode2: 7mc5/yhgcLXeRogHnEfh1Om8Z8FudninH9dpJHD88J+LnbZJ4kII08G65vP1hsblc7YSdxqbf4lb0ljpg2NRf4glt6C5sPp25r+n8bReazf6YBgEepjF3Ux2cGNWFFZUZypMuxNRBOzhNKMKo8/lUwHSOvptmx4VPvJNQo6rov+Xt6dgtZodsKyJOsg=
---

# CN 精选名单 · Grade A（三条件交集）

**生成时间:** 2026-08-31 10:05
**数据源:** ./watchlist/cn_tech_signals.json (2026-08-27T14:30:07.222Z) + ./watchlist/cn_news_signals.json (2026-08-27T13:58:34.937Z)
**依据报告:** ./watchlist/cn_combined_signals.md（combined:cn 产出，快照 ./reports/2026-08-31/）

---

## 筛选条件

1. 等级：🟢A
2. 多周期对齐：3/4 (75%) 或 4/4 (100%)
3. 类型：🟢 Long (强)

---

## 筛选结果

**无符合全部条件的股票（三条件交集为空）。**

### 原因说明

- 技术面 cn_tech_signals.json（20 只）与新闻面 cn_news_signals.json（20 只）交叉后，combined 脚本输出 19 只入排名；其中 0 只为 🟢A 级。
- 新闻面本次 20 只的新闻信号**全部为 `⚪ No Trade (无数据)`**，无一为 `🟢 Long (强)`，直接导致条件 3 命中数为 0。
- 评级依赖 `classifyNews(nd.signal)`：无 `Long` 信号时 `gradeOf` 最高只能到 C 级（`tech_score ≥ 20` 且非过热/非 Short），因此 🟢A 级命中数也为 0，条件 1 同样落空。
- 多周期对齐方面有 12 只满足 ≥3/4（其中 11 只 4/4 (100%)、1 只 3/4 (75%)），但因新闻面无 Long 强信号，均无法晋级 A 级。

### 交叉验证矩阵

| 条件 | 满足的股票 | 数量 |
|------|-----------|------|
| ① 🟢A 等级 | （空） | 0 |
| ② 对齐 ≥3/4 | SSE:605198, SSE:600388, SZSE:000333, SZSE:300843, SZSE:300684, SZSE:300866, SSE:600330, SSE:603186, SSE:600172, SZSE:300602, SSE:603228, SZSE:002536 | 12 |
| ③ 🟢 Long (强) | （空） | 0 |
| ①∩② | （空） | 0 |
| ①∩③ | （空） | 0 |
| ②∩③ | （空） | 0 |
| **三条件交集** | **（空）** | **0** |

### 参考：🟢A 级候选（满足条件①，部分满足③）

| 代码 | 名称 | 综合分 | 技术 | 新闻 | 新闻信号 | 类型 | 多周期对齐 | 当前价 | 止损价 | 目标价 | 盈亏比 | 备注 |
|------|------|--------|------|------|---------|------|-----------|--------|--------|--------|--------|------|

> 注：等级、综合分按 combined 脚本同款公式（classifyNews + gradeOf）从原始 JSON 复现，不依赖 md 表格。快照见 ./reports/2026-08-31/。

*生成时间: 2026/8/31 10:05:39*
*（内容由AI生成，仅供参考）*
