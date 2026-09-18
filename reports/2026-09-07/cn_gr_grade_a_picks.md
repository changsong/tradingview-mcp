---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_741477b7a80811f1ad2c525400e6dd8f
    ReservedCode1: dDNsGc4a5TmMIArf8qqIkNulWj7Oet0cuWu6QYjpJ58HhPbC8TMWmZGaWRtII6SnMgzhMJEqNbjXPNh+hWWnqsAnHWo6zPM4OL4ckm3Hf+4AQ3H9LviifE/HVncgG8x3AXLmWXwF1SFiYKGCJNy7vA9s4L3MUGq4Fe9L2H9ZGhaq/Fo5vNzADofBgxo=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_741477b7a80811f1ad2c525400e6dd8f
    ReservedCode2: dDNsGc4a5TmMIArf8qqIkNulWj7Oet0cuWu6QYjpJ58HhPbC8TMWmZGaWRtII6SnMgzhMJEqNbjXPNh+hWWnqsAnHWo6zPM4OL4ckm3Hf+4AQ3H9LviifE/HVncgG8x3AXLmWXwF1SFiYKGCJNy7vA9s4L3MUGq4Fe9L2H9ZGhaq/Fo5vNzADofBgxo=
---

# CN · 综合筛选：🟢A + 多周期对齐(3/4 或 4/4) + 🟢 Long (强)

**生成日期:** 2026-09-04
**数据源:** `watchlist/cn_tech_signals.json`(2026-09-03 06:31Z) + `watchlist/cn_news_signals.json`(2026-09-03 14:38Z)
**筛选条件:**
1. 等级 = 🟢A
2. 多周期对齐 = 3/4 (75%) 或 4/4 (100%)
3. 类型 = 🟢 Long (强)

---

## 筛选结果：无完全命中（空）

本次股票池 **没有任何一只股票同时满足上述三个条件**，三大条件交集为空。

### 各条件命中情况

| 代码 | 名称 | 综合分 | 等级 | 多周期对齐 | 新闻信号 | 技术类型 |
|------|------|--------|------|-----------|---------|---------|
| SZSE:000977 | 浪潮信息 | 62 | 🟢A | 2/4 (50%) ✗ | 🟢 Long (中) | 回调低吸(支撑) |
| SZSE:300866 | 安克创新 | 52.7 | 🟢A | 2/4 (50%) ✗ | ⚠️ Long (谨慎) | 回调低吸(支撑) |
| SZSE:000333 | 美的集团 | 50.4 | 🟢A | 0/4 (0%) ✗ | 🟢 Long (中) | 回调低吸(支撑) |
| SSE:603186 | 华正新材 | 48.1 | ⚪C | 4/4 (100%) ✅ | ⚪ No Trade (微多) ✗ | 回调低吸(支撑) |
| SSE:600186 | 莲花健康 | 45.4 | ⚪C | 4/4 (100%) ✅ | ⚪ No Trade (微多) ✗ | 回调低吸(支撑) |
| SSE:601168 | 西部矿业 | 39.8 | ⚪C | 4/4 (100%) ✅ | ⚪ No Trade (微多) ✗ | 回调低吸(支撑) |

**逐条筛选说明:**
- **条件①(🟢A)：** 仅 3 只 → `000977` / `300866` / `000333`
- **条件②(对齐≥3/4)：** 这些 A 级股票对齐全部 ≤2/4（000977=2/4、300866=2/4、000333=0/4），无一达标
- **条件③🟢 Long (强)：** 全池新闻信号枚举为 `No Trade (微多)×16 / Long (中)×3 / Long (谨慎)×1`，**不存在 "🟢 Long (强)"** 类型信号

---

## 放宽建议(如需操作)

**A 级候选（对齐最接近 75% 的 2 只，信号为 Long 中/谨慎，非强）：**

| 代码 | 名称 | 综合分 | 对齐 | 信号 | 入场 | 止损 | 目标 | 盈亏比 |
|------|------|--------|------|------|------|------|------|--------|
| SZSE:000977 | 浪潮信息 | 62 | 2/4 | 🟢 Long (中) | 84.40 | 82.26 | 89.12 | 2.2:1 |
| SZSE:300866 | 安克创新 | 52.7 | 2/4 | ⚠️ Long (谨慎) | 127.06 | 123.32 | 134.68 | 2.0:1 |

> 注：上述股票均未命中"多周期对齐≥75%"与"Long (强)"双重条件，仅作参考，不构成完整匹配结果。

---
*筛选脚本依据 `npm run combined:cn` 产物 `watchlist/cn_combined_signals.md` 及上游 JSON 契约整理。*
*（内容由AI生成，仅供参考）*
