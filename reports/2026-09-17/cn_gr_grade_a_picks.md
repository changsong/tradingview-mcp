---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_4a2ff94ab23611f18721525400cd780f
    ReservedCode1: XXZ/auYBkmscCL7skMlEIb93scdscM/q941eqnwzVD1el0HcLbWSJil4P/QUh+WM/TTB/5baUUN+BomhjXeBPA3ACZWayJc1kdRNSYuiXso+s+UVAQW26BKpF9u8f2zFvfppLPhPjwoUrM3gZcVZkFHow5IxbYWZDtnflyQoDRmzunZRUqNpDT84+H0=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_4a2ff94ab23611f18721525400cd780f
    ReservedCode2: XXZ/auYBkmscCL7skMlEIb93scdscM/q941eqnwzVD1el0HcLbWSJil4P/QUh+WM/TTB/5baUUN+BomhjXeBPA3ACZWayJc1kdRNSYuiXso+s+UVAQW26BKpF9u8f2zFvfppLPhPjwoUrM3gZcVZkFHow5IxbYWZDtnflyQoDRmzunZRUqNpDT84+H0=
---

# CN Grade A Picks · 🟢A + 多周期对齐 3/4~4/4 + 🟢 Long (强)

**生成时间:** 2026/09/17 09:22:14
**数据源:** cn_tech_signals.json (tech=2026-09-17T01:20:50.335Z, 28只) + cn_news_signals.json (news=2026-09-17T01:20:02.465Z, 28只)

**筛选条件（AND）:**
1. 等级 = 🟢A（news signal 含 Long 且非过热且非 No Trade，且 tech_score ≥ 30）
2. 多周期对齐 = 3/4 (75%) 或 4/4 (100%)
3. 类型 = 🟢 Long (强)

---

## 结果：共 0 只

**当前无任何股票同时满足以上三个条件。**

### 逐项统计
- 满足条件1（🟢A）: 0 只
- 满足条件2（3/4 或 4/4）: 15 只
- 满足条件3（🟢 Long (强)）: 0 只

### 原因说明
- cn_news_signals.json 中 28 只股票的 signal 全部为 `⚪ No Trade (...)`（无数据 23 / 微多 4 / 中性 1），**没有任何含 Long 的信号**，因此等级全部判定为 ⚪C，类型也不可能为 🟢 Long (强)。
- 其中 23 只 strategy 为「LLM 不可用或调用失败（不走关键字降级）」，即新闻情绪数据实际未刷新成功，属数据源问题而非市场无机会。
- 建议先重跑 `npm run news:cn` 刷新新闻信号，再重新执行本筛选。

### 参考：当前对齐 4/4 (100%) 但未过其他条件的股票
| 代码 | 名称 | 等级 | 对齐 | 类型 | 新闻信号 |
|------|------|------|------|------|----------|
| SZSE:002463 | 沪电股份 | ⚪C | 4/4 (100%) | 突破型(Squeeze释放) | ⚪ No Trade (无数据) |
| SZSE:300408 | 三环集团 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (微多) |
| SZSE:002636 | 金安国纪 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (无数据) |
| SZSE:300394 | 天孚通信 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (无数据) |
| SSE:600186 | 莲花控股 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (无数据) |
| SZSE:000636 | 风华高科 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (无数据) |
| SSE:600172 | 黄河旋风 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (无数据) |
| SSE:603083 | 剑桥科技 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (无数据) |
| SSE:605198 | 安德利 | ⚪C | 4/4 (100%) | 趋势追涨(结构完好) | ⚪ No Trade (无数据) |
| SSE:600183 | 生益科技 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (微多) |
| SZSE:300499 | 高澜股份 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (无数据) |
| SSE:603002 | 宏昌电子 | ⚪C | 4/4 (100%) | 回调低吸(支撑) | ⚪ No Trade (无数据) |
| SZSE:300903 | 科翔股份 | ⚪C | 4/4 (100%) | 反转(看多背离) | ⚪ No Trade (无数据) |
| SSE:603186 | 华正新材 | ⚪C | 4/4 (100%) | 趋势追涨(结构完好) | ⚪ No Trade (无数据) |
| SSE:600330 | 天通股份 | ⚪C | 4/4 (100%) | 趋势延续 | ⚪ No Trade (无数据) |

*本名单由 cn_tech_signals.json + cn_news_signals.json 严格筛选生成*
*（内容由AI生成，仅供参考）*
