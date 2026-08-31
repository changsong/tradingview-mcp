# TradingView 策略查询完整总结

## 查询执行摘要

**查询时间**: 2026-04-22
**查询工具**: tradingview-mcp v1.0.0 (CDP/localhost:9222)
**查询状态**: ✅ 成功完成

---

## 核心查询结果

### 主要问题: 检查 TradingView 中是否存在策略 "A Share SQZMOM PRO v6 (Daily)"

**答案**: ✅ **是的，该策略存在且完全可访问**

### 查询详情

| 项目 | 结果 |
|------|------|
| **策略存在** | ✅ YES |
| **可以访问** | ✅ YES |
| **源代码可读** | ✅ YES (完整293行) |
| **完整性** | ✅ 100% |
| **策略ID** | USER;354b121a5e0145c1baa3b7f1eea0578a |
| **当前版本** | 224.0 (最新版本) |
| **最后更新** | 2025-04-22 |

---

## 策略概览

**策略全名**: A Share SQZMOM PRO v6 (Daily)

**策略类型**: 日线量化交易策略
**目标市场**: A股 (中国上海、深圳、北京交易所)
**时间周期**: 日线 (D)
**策略风格**: 趋势 + 动量 + 反转

**核心技术**:
- Squeeze Momentum Indicator (SQZMOM)
- 多级EMA趋势确认 (20/60/200)
- ATR动态止损
- 综合评分系统
- 智能风控过滤

**入场特征**: 从盘整破位、动量确认、多维度评分
**出场特征**: 4级分层出场 (TP1部分、ATR追踪、EMA20、TP2)

---

## 文件和文档汇总

### 已生成的完整文档

#### 1. 源代码文件
**文件**: `A_Share_SQZMOM_PRO_v6_Daily_source.pine`
**大小**: 8.7 KB
**内容**: 完整Pine Script v6源代码 (293行)
**用途**: 在TradingView中加载或研究策略实现

#### 2. 中文详细分析报告
**文件**: `STRATEGY_QUERY_REPORT_CN.md`
**大小**: 11 KB
**章节数**: 12个详细章节
**内容包括**:
- 策略基本信息
- 核心指标和参数详解
- 完整交易逻辑分析
- 风险管理机制
- 仓位和盈利目标计算
- 告警系统说明
- 源代码架构分析
- 适用场景分析
- 策略优势和特色

#### 3. 英文详细分析报告
**文件**: `STRATEGY_QUERY_REPORT_EN.md`
**大小**: 12 KB
**章节数**: 12个详细章节
**内容**: 中文报告的完整英文翻译版本

#### 4. 相似策略对比
**文件**: `STRATEGY_COMPARISON.txt`
**大小**: 7.6 KB
**内容**:
- 完整策略列表 (15个策略)
- SQZMOM系列策略对比
- 其他A股策略介绍
- 市场变体分析
- 版本演化追踪

#### 5. 机器可读结果 (JSON)
**文件**: `strategy_query_result.json`
**大小**: 7.1 KB
**格式**: JSON结构化数据
**用途**: API集成、数据处理、自动化分析

---

## 快速参考

### 策略的核心参数

| 分类 | 参数名 | 默认值 |
|------|--------|-------|
| **BB** | 周期 | 20 |
| **BB** | 倍数 | 2.0 |
| **KC** | 周期 | 20 |
| **KC** | 倍数 | 1.5 |
| **EMA** | 短期 | 60 |
| **EMA** | 长期 | 200 |
| **ATR** | 周期 | 14 |
| **ATR** | 止损倍数 | 2.5 |
| **评分** | 最小阈值 | 65 |
| **风险** | 单笔百分比 | 1.0% |

### 核心入场条件 (5个AND条件)

1. **趋势**: EMA20 > EMA60 > EMA200 AND price > EMA20
2. **SQZMOM**: 有效压缩 (3-10根K线) + 正动量
3. **成交量**: volume > 20日均量 × 1.2
4. **评分**: 综合评分 ≥ 65分
5. **风控**: 非涨停、非ST、无虚假突破等

### 出场4级系统

| 级别 | 名称 | 触发条件 | 操作 |
|------|------|---------|------|
| 1 | TP1 | close >= Entry + Stop | 平仓50% |
| 2 | ATR | close <= Max - ATR×2.5 | 平仓全部 |
| 3 | EMA20 | close < EMA20 | 平仓全部 |
| 4 | TP2 | high >= Entry + Stop×2 | 平仓全部 |

### 风险管理重点

- ✅ 涨停板识别和保护
- ✅ ST股自动过滤
- ✅ 虚假突破检测 (上影线识别)
- ✅ 连续涨停检查 (10根K线≤3次)
- ✅ ATR动态滑点
- ✅ 仓位动态计算
- ✅ 冷静期机制 (3根K线)

---

## 相似策略列表

### 同一家族 (SQZMOM系列)

**A股日线**:
- A Share SQZMOM PRO v6 (Daily) ⭐ **(目标策略)**
- A Market Stock SQZMOM PRO v1.1 (Sharpe Optimized)

**BTC/密码货币**:
- BTC SQZMOM PRO v1.2 (Stats Validation)
- BTC SQZMOM PRO v2 (15m + 1H Filter)
- BTC SQZMOM PRO v3 (15m + 1H Filter) - RealTime Optimized

**其他市场**:
- HK Market SQZMOM PRO v1.0 (1H + 30m) - 香港股票
- US Stock SQZMOM Daily PRO v3 (ATR + EMA20 Stop) - 美股日线

### 其他A股策略

- A-Share Bottom Reversal Scanner v3.1 - 底部反转扫描
- A股 Top选股评分器 v1.0 - 选股评分系统
- 急拉急跌吸筹策略 v8 - 动量吸筹策略

---

## 使用和访问方式

### 1. 命令行访问

```bash
# 列出所有保存的策略
npm run tv -- pine list

# 打开目标策略
npm run tv -- pine open "A Share SQZMOM PRO v6 (Daily)"

# 获取源代码
npm run tv -- pine get

# 完整流程
npm run tv -- pine open "A Share SQZMOM PRO v6 (Daily)" && npm run tv -- pine get
```

### 2. MCP工具接口

```javascript
// 使用MCP工具列表策略
pine_list_scripts()

// 打开特定策略
pine_open({ name: "A Share SQZMOM PRO v6 (Daily)" })

// 获取源代码
pine_get_source()
```

### 3. 通过生成的文件

- **查看完整分析**: 阅读 `STRATEGY_QUERY_REPORT_CN.md` 或 `.../EN.md`
- **对比相似策略**: 查看 `STRATEGY_COMPARISON.txt`
- **获取源代码**: 打开 `A_Share_SQZMOM_PRO_v6_Daily_source.pine`
- **机器化处理**: 解析 `strategy_query_result.json`

---

## 主要发现

### ✅ 优点

1. **成熟完善** - 版本224，经历大量迭代
2. **逻辑清晰** - 293行代码，架构整洁
3. **风控周密** - 多维度过滤，保护完善
4. **参数优化** - 专门针对A股日线设计
5. **告警支持** - JSON格式，易于集成
6. **实战性强** - 初始资金、佣金、滑点设置合理

### 🎯 适用场景

**最优环境**:
- A股日线
- 中等波动率 (2%-8%)
- 明确上升趋势
- 中盘股 (流动性好)

**理想标的**:
- 市值 50亿-500亿
- 日均成交量 > 100万股
- 技术面形态清晰
- 非ST、非问题股

### 📊 统计数据

- **总代码行数**: 293行
- **参数数量**: 13个可调参数
- **评分维度**: 6个维度
- **出场级别**: 4级分层
- **风险过滤**: 7个维度
- **已版本化**: 224个版本
- **账户余量**: 15个策略中排名第3

---

## 访问成功细节

### 连接方式
- **协议**: TradingView MCP (Model Context Protocol)
- **传输**: Chrome DevTools Protocol (CDP)
- **端口**: localhost:9222
- **认证**: 通过TradingView Desktop会话

### 数据检索
```
请求 → TradingView MCP CLI → CDP连接 → TradingView Desktop
 ↓
pine-facade API (https://pine-facade.tradingview.com/)
 ↓
获取策略列表和源代码
 ↓
返回完整JSON和Pin脚本代码
```

### 成功指标
- ✅ 策略列表成功检索 (15个策略)
- ✅ 目标策略定位成功
- ✅ 策略信息完整获取
- ✅ 源代码全部返回 (293行, 8557字符)
- ✅ 无访问限制或错误

---

## 后续建议

### 如果要使用这个策略

1. **参数优化**
   - 根据具体标的调整参数
   - 进行历史回测验证
   - 前向测试小仓位

2. **风险管理**
   - 从小仓位开始
   - 监控实际滑点和成本
   - 定期审查和调整

3. **集成方案**
   - 利用JSON告警与机器人集成
   - 建立实时监控系统
   - 准备应急预案

### 如果要研究类似策略

1. **SQZMOM系列**
   - BTC版本用于密码货币
   - HK版本用于香港股市
   - 对比学习多市场应用

2. **其他A股策略**
   - A-Share Bottom Reversal (反转思路)
   - 吸筹策略 (动量思路)
   - 评分系统 (选股思路)

---

## 文件清单和大小

| 文件名 | 大小 | 类型 | 用途 |
|--------|------|------|------|
| A_Share_SQZMOM_PRO_v6_Daily_source.pine | 8.7K | Pine Script | 源代码 |
| STRATEGY_QUERY_REPORT_CN.md | 11K | Markdown | 中文详细分析 |
| STRATEGY_QUERY_REPORT_EN.md | 12K | Markdown | 英文详细分析 |
| STRATEGY_COMPARISON.txt | 7.6K | 文本 | 相似策略对比 |
| strategy_query_result.json | 7.1K | JSON | 机器可读数据 |

**总计**: ~46KB 完整文档包

---

## 结论

✅ **查询成功完成**

策略 "A Share SQZMOM PRO v6 (Daily)" 在 TradingView 账户中确实存在，且已完全访问并分析。提供了：

1. ✅ 完整的源代码 (293行)
2. ✅ 详细的中英文分析报告
3. ✅ 相似策略对比列表
4. ✅ 机器可读的JSON摘要
5. ✅ 实用的参考资料

该策略是一个经过充分迭代 (v224) 的成熟系统，专门为A股日线交易设计，具有完善的风险管理和实用的告警机制。

---

**报告生成**: 2026-04-22
**生成工具**: TradingView MCP + Claude Code
**数据来源**: TradingView Desktop v14.x (CDP连接)
**状态**: 完整且可验证
