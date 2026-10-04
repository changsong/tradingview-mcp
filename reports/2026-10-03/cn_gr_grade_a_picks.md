---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_604540b2bd3611f1a526525400cd780f
    ReservedCode1: vhmzEvfJkW7N2mLdVIUpgY7/s0bSoINgkl9kXLAFfwYYrNibt2gj5OGl0/Rw2S1cskazfcDdntBwR6KeCyS7Rwj2DJ9BNaLux2Id2PbfWUKFC4RKiesnE+zLVQz4xWNUeIdSWqREmL0naLBA1G1s0hlgA1cMJv9Jmxgj6eEa10zE0MQuOX1OYraWPhQ=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_604540b2bd3611f1a526525400cd780f
    ReservedCode2: vhmzEvfJkW7N2mLdVIUpgY7/s0bSoINgkl9kXLAFfwYYrNibt2gj5OGl0/Rw2S1cskazfcDdntBwR6KeCyS7Rwj2DJ9BNaLux2Id2PbfWUKFC4RKiesnE+zLVQz4xWNUeIdSWqREmL0naLBA1G1s0hlgA1cMJv9Jmxgj6eEa10zE0MQuOX1OYraWPhQ=
---

# CN 综合筛选名单 · Grade A 条件核对
**生成日期:** 2026-10-01　　**数据源:** watchlist/cn_combined_signals.md + cn_tech_signals.json + cn_news_signals.json（combined:cn 原始产物）

---

## 筛选条件（用户要求，三重 AND）

| # | 条件 | 要求 |
|---|------|------|
| 1 | 等级 | 🟢A |
| 2 | 多周期对齐 | 3/4 (75%) 或 4/4 (100%) |
| 3 | 类型 / 新闻信号 | 🟢 Long (强) |

---

## 结果：严格交集为空（0 只）

本轮 CN 数据中**没有任何股票同时满足三个条件**，原因如下：

1. **等级 🟢A 不存在**：combined 报告「最终综合排名」TOP 5 全部为 ⚪C（87.9 / 69.2 / 50.6 / 18.6 / 15），且底层 cn_tech_signals.json 无 grade 字段，全池无 🟢A 标的。
2. **多周期对齐**：仅 2 只达到 4/4（见下方候选池），其余全部为 0/4。
3. **类型 🟢 Long (强) 不存在**：cn_news_signals.json 全部股票 news_signal 均为「⚪ No Trade (中性/微多/无数据)」，无 GREEN/🟢 强多信号；tech 端 type 字段为「突破型(Squeeze释放)」「反转(看多背离)」「回调低吸(支撑)」等，无「🟢 Long (强)」类型。

> 注：🟢A / 🟢 Long (强) 为美股（combined:us）管线的字段口径，CN 管线当前版本未产出该等级体系。

---

## 候选池（满足「多周期对齐 4/4」的 2 只，缺 条件1 和 条件3）

### 1. SZSE:301529（301529）
| 项 | 值 |
|----|----|
| 综合分 / 等级 | 87.9 / ⚪C |
| 多周期对齐 | ✅ 4/4 (100%) — 1W↑ 1D↑ 4H↑ 1H↑ |
| 技术类型 | 突破型(Squeeze释放) |
| 新闻信号 | ⚪ No Trade (无数据) |
| 现价 | 140.73 |
| 最安全入场价（支撑参考） | 132.68 |
| 止损价（ATR） | 134.85 |
| 止盈价（目标） | 141.59 |
| 盈亏比 | 0.1:1（不足，报告标注「压力/RR差」，**不建议追入**） |

### 2. SSE:603259（603259）
| 项 | 值 |
|----|----|
| 综合分 / 等级 | 69.2 / ⚪C |
| 多周期对齐 | ✅ 4/4 (100%) — 1W↑ 1D↑ 4H↑ 1H↑ |
| 技术类型 | 反转(看多背离) |
| 新闻信号 | ⚪ No Trade (微多) |
| 现价 | 167.9 |
| 最安全入场价（支撑参考） | 163.52 |
| 止损价（ATR） | 163.74 |
| 止盈价（目标） | 168.6 |
| 盈亏比 | 0.2:1（不足，报告标注「压力/RR差/周线LH下降」，**不建议追入**） |

---

## 备注

- 以上价格直接取自 cn_tech_signals.json 原字段（price / support / atr_stop / target），未做任何估算或虚构。
- 候选池两股虽多周期对齐，但盈亏比均 < 1.5:1，且非 🟢A、非强多信号，仅供参考观察，不构成买入推荐。
- 若需 🟢A / 🟢 Long (强) 口径名单，建议检查 combined:cn 管线是否配置美股同款等级/信号逻辑后再重跑。

*数据快照：reports\2026-10-01*
*（内容由AI生成，仅供参考）*
