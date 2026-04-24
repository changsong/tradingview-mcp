# TradingView Strategy Query - Complete Results

**查询日期**: 2026-04-22  
**查询策略**: A Share SQZMOM PRO v6 (Daily)  
**查询结果**: ✅ 策略存在且完全可访问

---

## 快速答案

### 主要问题：TradingView 中是否存在策略 "A Share SQZMOM PRO v6 (Daily)"？

**答案**：✅ **是的，完全存在且可访问**

| 项目 | 状态 |
|------|------|
| 策略存在 | ✅ YES |
| 可以打开 | ✅ YES |
| 源代码可读 | ✅ YES (293行) |
| 策略版本 | 224.0 (最新) |
| 最后更新 | 2025-04-22 |
| 策略ID | USER;354b121a5e0145c1baa3b7f1eea0578a |

---

## 生成的文档索引

### 📋 核心文档（必读）

#### 1. **查询摘要** (本文件下方)
- 快速概览
- 5分钟了解策略概况

#### 2. **详细分析报告**（选择语言）
- **中文版**: `STRATEGY_QUERY_REPORT_CN.md` (11 KB)
  - 12个详细章节
  - 完整的参数和逻辑说明
  - 风险管理详解
  - 推荐首先阅读
  
- **英文版**: `STRATEGY_QUERY_REPORT_EN.md` (12 KB)
  - 完整英文翻译
  - 内容与中文版相同

### 📁 源代码文件

#### 3. **完整源代码**
- **文件**: `A_Share_SQZMOM_PRO_v6_Daily_source.pine`
- **大小**: 8.7 KB
- **行数**: 293行
- **格式**: Pine Script v6
- **用途**: 在TradingView中直接加载或研究

### 📊 对比和参考

#### 4. **相似策略对比**
- **文件**: `STRATEGY_COMPARISON.txt` (7.6 KB)
- **内容**:
  - 账户中所有15个策略列表
  - SQZMOM系列策略对比
  - 其他A股策略介绍
  - 版本演化分析

#### 5. **机器可读数据**
- **文件**: `strategy_query_result.json` (7.1 KB)
- **格式**: JSON结构化数据
- **用途**: API集成、自动化处理、数据分析

#### 6. **完整查询摘要**
- **文件**: `QUERY_SUMMARY.md`
- **内容**: 查询全过程总结和结论

---

## 策略一页概览

### 基本信息
| 项 | 值 |
|----|-----|
| 名称 | A Share SQZMOM PRO v6 (Daily) |
| ID | USER;354b121a5e0145c1baa3b7f1eea0578a |
| 版本 | 224.0 |
| 类型 | Strategy (策略) |
| 语言 | Pine Script v6 |
| 市场 | A股 |
| 周期 | 日线 (D) |

### 核心概念

**核心指标**: Squeeze Momentum (SQZMOM)
- 由布林带和KC通道组合
- 识别从盘整到突破的时刻

**趋势确认**: 多级EMA (20/60/200)
- EMA20 > EMA60 > EMA200 确认上升趋势

**风险管理**: ATR动态止损
- 止损距离 = ATR × 2.5
- 追踪最高价，随价格向上移动

**出场机制**: 4级分层
1. TP1 - 达到目标价时平仓50%
2. ATR Trail - 触及追踪止损时平仓
3. EMA20 - 跌破20日EMA时平仓
4. TP2 - 达到二级目标时平仓

### 入场条件（必须全部满足）

```
趋势 ✓ (EMA20 > EMA60 > EMA200)
AND SQZMOM ✓ (压缩3-10根K线 + 正动量)
AND 成交量 ✓ (volume > 20均 × 1.2)
AND 评分 ✓ (score >= 65)
AND 风控 ✓ (非涨停、非ST、无虚假突破)
= 入场信号
```

### 评分系统（100分制）

| 项 | 分值 | 条件 |
|----|------|------|
| SQZMOM压缩 | 30 | sqz = true AND val > 0 |
| 有效压缩柱 | 15 | validCompression = true |
| SQZMOM穿越0 | 20 | crossover(val, 0) |
| 成交量确认 | 15 | volume > 20MA × 1.2 |
| 趋势确认 | 10 | trendUp = true |
| 非虚假突破 | 10 | fakeBreak = false |
| **入场阈值** | **65** | score >= 65 |

### 仓位计算

```
风险金额 = 账户权益 × 风险% / 100
止损距离 = ATR × 2.5
仓位 = floor(风险金额 / 止损距离)

例: 账户10万，风险1%，ATR=50
风险金额 = 100,000 × 1% = 1,000
止损距离 = 50 × 2.5 = 125
仓位 = floor(1000/125) = 8手
```

### 风控过滤清单

- ✅ 涨停板识别 (9.5%涨幅检测)
- ✅ ST股过滤 (自动排除)
- ✅ 虚假突破过滤 (上影线占比判断)
- ✅ 连续涨停检查 (10K线内≤3次)
- ✅ 极端波动过滤 (30%涨幅检测)
- ✅ 一字涨停过滤
- ✅ 成交量异常检查

---

## 实际案例

### 假设信号

2025-04-22 日线收盘

```json
{
  "action": "ENTRY",
  "symbol": "600000",
  "qty": 8,
  "entry": 15.50,
  "tp1": 16.75,
  "tp2": 18.00,
  "stop": 14.25,
  "score": 75
}
```

**含义**：
- 建议以15.50元买入8手
- 一级目标16.75 (平仓50%)
- 二级目标18.00
- 止损14.25
- 综合评分75 (较高信心)

### 持仓管理

| 阶段 | 触发 | 操作 | 盈亏 |
|------|------|------|------|
| 入场 | - | 买入8手@15.50 | - |
| TP1 | @16.75 | 平仓4手 | +1.25×4 = +5.0 |
| 继续 | 保留4手 | 追踪止损 | 开放 |
| ATR Trail | @16.00 | 平仓4手 | +0.50×4 = +2.0 |
| **总计** | - | - | **+7.0点** |

---

## 适用场景

### ✅ 最优条件

- **市场**: A股
- **周期**: 日线
- **行情**: 上升趋势
- **股票**: 中盘股 (50亿-500亿)
- **流动性**: 日均100万+股
- **波动率**: 中等 (2%-8%每天)

### ❌ 不适合

- 小盘股 (频繁涨停)
- ST股 (风险过高)
- 成交量不足 (难以进出)
- 下跌趋势 (仅做多)
- IPO新股 (成交量不稳)

---

## 文档阅读建议

### 快速入门 (15分钟)

1. **本文件** - 5分钟了解基本概念
2. **QUERY_SUMMARY.md** 前半部分 - 10分钟了解详情

### 详细学习 (1小时)

1. **STRATEGY_QUERY_REPORT_CN.md** 或 **.../EN.md** - 45分钟深入学习
2. **查看源代码** - 15分钟浏览关键代码

### 完整研究 (2-3小时)

1. 阅读完整中文报告 (所有12章)
2. 仔细研究源代码 (293行)
3. 与相似策略对比 (STRATEGY_COMPARISON.txt)
4. 解析JSON数据结构 (strategy_query_result.json)

---

## 关键统计

### 代码统计
| 内容 | 数值 |
|------|------|
| 总行数 | 293 |
| 总字符数 | 8,557 |
| 参数数量 | 13 |
| 评分维度 | 6 |
| 出场级别 | 4 |
| 风险过滤 | 7 |

### 版本历史
| 指标 | 数值 |
|------|------|
| 当前版本 | 224.0 |
| 迭代次数 | 224次 |
| 首次创建 | 早期版本 |
| 最后更新 | 2025-04-22 |

### 账户统计
| 项 | 数值 |
|----|------|
| 账户总策略数 | 15 |
| SQZMOM系列 | 6个 |
| 其他A股策略 | 3个 |
| 加密货币策略 | 5个 |
| 本策略排名 | #3 |

---

## 相似策略速查

### 同市场变体
- **A Market Stock SQZMOM PRO v1.1** - 版本v1，Sharpe优化

### 加密货币变体
- **BTC SQZMOM PRO v2** - BTC 15分钟多时框
- **BTC SQZMOM PRO v3** - BTC 实时优化版

### 其他市场
- **HK Market SQZMOM PRO** - 香港股市
- **US Stock SQZMOM Daily PRO** - 美股日线

### 完整列表
参考 `STRATEGY_COMPARISON.txt`

---

## 访问方式

### 1. 命令行

```bash
# 列出所有策略
npm run tv -- pine list

# 打开此策略
npm run tv -- pine open "A Share SQZMOM PRO v6 (Daily)"

# 获取源代码
npm run tv -- pine get
```

### 2. 本地文件

所有信息都已保存为本地文件：
- 源代码: `A_Share_SQZMOM_PRO_v6_Daily_source.pine`
- 分析报告: `STRATEGY_QUERY_REPORT_*.md`
- 对比数据: `STRATEGY_COMPARISON.txt`
- 结构化数据: `strategy_query_result.json`

### 3. Web界面

访问 TradingView.com，登录账户，在"My Scripts"中查看

---

## 使用指南

### 第一次使用

1. 复制源代码到TradingView Pine编辑器
2. 在日线图表上添加策略
3. 调整参数以适应具体股票
4. 进行小仓位前向测试
5. 监控告警信号

### 参数调整

关键参数调优方向：
- `Min Score` - 提高从严，降低从宽
- `Risk %` - 调整单笔风险幅度
- `Cooldown Bars` - 调整交易频率
- `ATR Mult` - 调整止损紧度

### 集成机器人

1. 启用告警
2. 配置Webhook URL
3. 接收JSON格式信号
4. 机器人自动交易

---

## 常见问题

**Q: 这个策略能赚钱吗?**  
A: 策略本身是中性的工具，盈利取决于市场环境、参数优化和资金管理。强烈建议先进行回测和前向测试。

**Q: 能在短线上用吗?**  
A: 此策略专为日线设计。短线需要修改参数和逻辑。

**Q: 支持哪些股票?**  
A: 适合中盘股，日均成交量>100万股，非ST股。

**Q: 如何获取告警?**  
A: 在TradingView中启用告警，配置Webhook推送到机器人。

**Q: 可以修改源代码吗?**  
A: 完全可以，源代码已提供，自由修改。

---

## 联系和支持

### 获取帮助

- 详细分析: 查看 `STRATEGY_QUERY_REPORT_CN.md`
- 代码问题: 查看源文件注释或Pine文档
- 策略对比: 查看 `STRATEGY_COMPARISON.txt`

### 反馈渠道

- TradingView评论区
- Pine脚本官方文档: https://www.tradingview.com/pine-script-docs/

---

## 文件清单

```
D:/trade_workspace/tradingview-mcp/
├── A_Share_SQZMOM_PRO_v6_Daily_source.pine (8.7 KB) ← 源代码
├── STRATEGY_QUERY_REPORT_CN.md (11 KB) ← 中文详细分析
├── STRATEGY_QUERY_REPORT_EN.md (12 KB) ← 英文详细分析
├── STRATEGY_COMPARISON.txt (7.6 KB) ← 相似策略对比
├── QUERY_SUMMARY.md ← 查询完整摘要
├── strategy_query_result.json (7.1 KB) ← 结构化数据
└── README_QUERY_RESULTS.md ← 本文件
```

**总计**: ~47 KB完整文档包

---

## 版本信息

| 项 | 值 |
|----|-----|
| 查询日期 | 2026-04-22 |
| 查询工具 | tradingview-mcp v1.0.0 |
| 数据源 | TradingView Desktop |
| 连接方式 | CDP (localhost:9222) |
| 查询状态 | ✅ 完全成功 |

---

**祝您交易顺利!**

需要帮助? 查看详细分析报告: `STRATEGY_QUERY_REPORT_CN.md`
