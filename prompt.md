# 工作流
1. 打开clash， vpn软件，可以访问外网
2. 打开 cursor, 找到prompt.md, 在Termial 输入：，开始依次输入一下内容claude -dangerously-skip-permissions
3. A股跑完之后，Ctrl +c 连续2次退出，重新输入：claude --dangerously-skip-permissions，开始进行美股操作

> ⚠️ **重要：流水线已固化**。每个段落对应**唯一固定的脚本路径**，请直接执行下面给出的命令，**不要重新生成脚本文件**。
> - 4 阶段脚本：`pipeline/1-scan/`、`pipeline/2-news/`、`pipeline/3-technical/`、`pipeline/4-combined/`
> - 阶段间通过 JSON 契约连接（`watchlist/<market>_news_signals.json` → `watchlist/<market>_tech_signals.json` → 合并阶段消费）
> - 历史脚本/报告/Pine 已迁移至 `archive/`，仅供回看


## 上升趋势股票过滤
### A股 40分钟左右
使用 `./scripts/launch_tv_debug.bat` 启动TradingView，请使用策略名为：A_Share_SQZMOM_PRO_v27_Daily 的策略, 设置图表周期为天。然后执行：
```bash
npm run scan:cn
# 等价：node pipeline/1-scan/scan_stocks.js --symbols=filepath=./watchlist/cn.txt --output=./watchlist/cn_selected.txt
```
将筛选出的股票需要合并 `./watchlist/cn_selected.txt`,并排重。

### 研报及新闻分析 5-10分钟
利用 `./src/core/webNews.js` 获取这些推筛选出的股票的新闻（研报/快讯/新闻），分析市场情绪倾向、对股价的潜在影响、关键风险和机会点，将新闻转化为"可交易信号"，最好覆盖最近 5 个交易日最重要的新闻。直接执行：

```bash
npm run news:cn
# 产物：watchlist/cn_news_signals.md（人看） + watchlist/cn_news_signals.json（下游契约）2
```
1. 抓取并筛选高影响力新闻（去噪）
2. 对每条新闻打标签：类型（政策/财报/并购/行业/黑天鹅/传闻）+ 情绪（+1/0/-1）+ 权重（1~5）

脚本内置规则：重（1~5）
3. 构建情绪指数：Sentiment Score = Σ(情绪 × 权重)
4. 识别关键模式：情绪持续增强(trend) / 情绪反转(reversal) / 情绪背离(price vs news)
5. 输出交易信号：Long / Short / No Trade + 触发原因 + 是否适合追涨/低吸/反转
6. 必须识别：是否已经提前炒作 / 是否存在情绪过热 / 是否是假利好

### 技术面分析 10分钟
使用 `./scripts/launch_tv_debug.bat` 启动TradingView。直接执行：

```bash
npm run tech:cn
# 产物：watchlist/cn_tech_signals.md（人看） + watchlist/cn_tech_signals.json（下游契约）
```

脚本内置：1H/4H/1D/1W 多周期合成（权重 0.10/0.25/0.40/0.25）+ EMA/RSI/MACD/ADX/Squeeze/OBV/StochRSI/背离 + 量能高潮 + Squeeze 持续天数 + 收益加速度 + 支撑测试次数 + R/R + ATR 止损 + Pivot 目标价 + 相对沪深 300 强度 + A 股涨跌停 / 连板检测。

【交易信号】每只股票输出：结论（看多/看空/观望）+ 类型（突破型/回调低吸/反转/趋势追涨/过热追涨）+ 是否追涨（YES/NO）+ 关键风险标签（压力/假突/诱多/动能衰/震荡/看空背离/RR 差/涨跌停）。

### 合并分析 2分钟
直接执行（**不要重新生成脚本，脚本读取上面两个 JSON 契约**）：

```bash
npm run combined:cn
# 产物：watchlist/cn_combined_signals.md + 自动快照到 reports/<YYYY-MM-DD>/
```
请单独出一份股票列表,名单需要满足如下三个条件：
1. 等级为：🟢A
2. 多周期对齐：3/4 (75%) 或 4/4 (100%)
3. 类型是：🟢 Long (强)
输出到: cn_gr_grade_a_picks.md

### 评估模型结果 10分钟
使用 ./scripts/launch_tv_debug.bat, 启动TradigView 运行如下命令:     
    npm review:cn


### 美股 30分钟左右
使用 `./scripts/launch_tv_debug.bat` 启动TradingView，请使用策略名为：US Stock SQZMOM Daily PRO v7 (Max Loss Cap), 设置图表周期为天。然后执行：

```bash
npm run scan:us
# 等价：node pipeline/1-scan/scan_stocks.js --symbols=filepath=./watchlist/us.txt --output=./watchlist/us_selected.txt
```
将筛选出的股票需要合并 `./watchlist/us_selected.txt`,并排重。

## 研报及新闻分析 5-10分钟
利用 `./src/core/usNews.js` 获取这些推荐股票的新闻（研报/快讯/新闻）。 获取这些推筛选出的股票的新闻（研报/快讯/新闻），分析市场情绪倾向、对股价的潜在影响、关键风险和机会点，将新闻转化为"可交易信号"，最好覆盖最近 5 个交易日最重要的新闻。直接执行：

```bash
npm run news:us
# 产物：watchlist/us_news_signals.md + watchlist/us_news_signals.json
```

脚本内置规则：
1. 抓取并筛选高影响力新闻（去噪）
2. 对每条新闻打标签：类型（政策/财报/并购/行业/黑天鹅/传闻）+ 情绪（+1/0/-1）+ 权重（1~5）
3. 构建情绪指数：Sentiment Score = Σ(情绪 × 权重)
4. 识别关键模式：情绪持续增强(trend) / 情绪反转(reversal) / 情绪背离(price vs news)
5. 输出交易信号：Long / Short / No Trade + 触发原因 + 是否适合追涨/低吸/反转
6. 必须识别：是否已经提前炒作 / 是否存在情绪过热 / 是否是假利好

## 技术面分析
使用 `./scripts/launch_tv_debug.bat` 启动TradingView。直接执行：

```bash
npm run tech:us
# 产物：watchlist/us_tech_signals.md + watchlist/us_tech_signals.json
```
【交易信号】结论（Long/Short/Wait）+ 类型（Breakout/Pullback/Reversal/Trend/Overheat）+ 是否追涨 + 关键风险（压力位/动能衰/诱多/假突）。

## 合并分析

直接执行：
```bash
npm run combined:us
# 产物：watchlist/us_combined_signals.md + 自动快照到 reports/<YYYY-MM-DD>/
```
请单独出一份股票列表,名单需要满足如下三个条件：
1. 等级为：🟢A 
2. 2. 多周期对齐：3/4 (75%) 或 4/4 (100%) 
3. News Signal是：GREEN Long (Strong)
输出到: us_grade_a_picks.md

### 评估模型结果 10分钟
使用 ./scripts/launch_tv_debug.bat, 启动TradigView 运行如下命令:     
    npm review:us




## 港股
### 港股 30分钟左右
使用 `./scripts/launch_tv_debug.bat` 启动TradingView，请使用策略名为：HK SQZMOM Institutional FINAL , 设置图表周期为天。然后执行：

```bash
npm run scan:hk
# 等价：node pipeline/1-scan/scan_stocks.js --symbols=filepath=./watchlist/hk.txt --output=./watchlist/hk_selected.txt
```
将筛选出的股票需要合并 `./watchlist/hk_selected.txt`,并排重。

## 研报及新闻分析 5-10分钟
利用 `./src/core/hkNews.js` 获取这些推荐股票的新闻（研报/快讯/新闻）。 获取这些推筛选出的股票的新闻（研报/快讯/新闻），分析市场情绪倾向、对股价的潜在影响、关键风险和机会点，将新闻转化为"可交易信号"，最好覆盖最近 5 个交易日最重要的新闻。直接执行：

```bash
npm run news:hk
# 产物：watchlist/hk_news_signals.md + watchlist/hk_news_signals.json
```

脚本内置规则：
1. 抓取并筛选高影响力新闻（去噪）
2. 对每条新闻打标签：类型（政策/财报/并购/行业/黑天鹅/传闻）+ 情绪（+1/0/-1）+ 权重（1~5）
3. 构建情绪指数：Sentiment Score = Σ(情绪 × 权重)
4. 识别关键模式：情绪持续增强(trend) / 情绪反转(reversal) / 情绪背离(price vs news)
5. 输出交易信号：Long / Short / No Trade + 触发原因 + 是否适合追涨/低吸/反转
6. 必须识别：是否已经提前炒作 / 是否存在情绪过热 / 是否是假利好

## 技术面分析
使用 `./scripts/launch_tv_debug.bat` 启动TradingView。直接执行：
```bash
npm run tech:hk
# 产物：watchlist/hk_tech_signals.md + watchlist/hk_tech_signals.json
```
【交易信号】结论（Long/Short/Wait）+ 类型（Breakout/Pullback/Reversal/Trend/Overheat）+ 是否追涨 + 关键风险（压力位/动能衰/诱多/假突）。

## 合并分析
直接执行：
```bash
npm run combined:hk
# 产物：watchlist/hk_combined_signals.md + 自动快照到 reports/<YYYY-MM-DD>/
```
请单独出一份股票列表,名单需要满足如下三个条件：
1. 等级为：🟢A 
2. 2. 多周期对齐：3/4 (75%) 或 4/4 (100%) 
3. News Signal是：GREEN Long (Strong)

### 评估模型结果 10分钟
使用 ./scripts/launch_tv_debug.bat, 启动TradigView 运行如下命令:     
    npm review:hk




> 💡 一键全跑：`npm run full:cn`（=news:cn + tech:cn + combined:cn）

> 💡 一键全跑：`npm run full:us`
 ## 单只股票涨跌分析                                          
使用 `./scripts/launch_tv_debug.bat` 启动TradingView， 只分析A股票： 002747，分析这一只股票历史K线情况: 1D, 4H，1H，30m，1m情况，根据最近一周新闻及技术形态，分析主力意图，预测明日及之后一周内的涨跌预期，目前持仓成本为： 40.264，200股，并请详细说明后续的操作方法，对于入场，止盈、止损价格，设置警报

请分析一下这几只股票 AMD，VICR,WDC，TTMI,CRWV,MSFT, AVGO 哪支股票是目前入手的好时机

## 评估体系优化
需要需要分析一个原因：今天是5月6日，昨日的股票分析结果在 ./reports/2026-05-05 
下。今天5月6日，市场的结果：603162,002245,301165,600176 大涨，能否分析出这些大涨的股票在5月5日分析中有没有公共特征，如果有看需要增加这些特征的权重

## 设置报警
设置RKLB 股票，到达 $111 的报警
设置TTMI股票，到达 $150 的报警
设置VSH 股票，到达 $42 的报警

---------------------------------------------------------------------------------------------------------------------------------------------------------
# 策略优化
## 编写策略
### 使用 ./scripts/launch_tv_debug.bat 启动TradigView，请使用策略名为：US-急涨急跌吸筹策略， 在分钟线上进行回测并对结果进行改进，目前改进的方向是：比如CSW在最近一年交易清单，
1.分析避免前10日内有大涨，如果有则不进入。2.股价应该在26周内处于低位 3.最近5日股价波动上下不要超过10%， 加入这三个条件，尽量保证多的交易信号，同时提高胜率，比如出现大涨就在后几日，却被提前止损立场
优化策略后，请使用 ../watchlist/us.txt 做回测，根据回测结果继续优化，直到不能继续优化为止


 ### 使用 ./scripts/launch_tv_debug.bat 启动TradigView，请使用策略名为：US-急涨急跌吸筹策略， 在分钟线上进行回测并对结果进行改进，
 目前改进的方向是：比如CSW在最近一年交易清单，去掉避免 前10日内有大涨，如果有则不进入 这个条件，同时调整参数尽量保证多的交易信号，同时提高胜率，重点解决如何避免出现大涨前却被提前止损离场的情况，优化策略后，请使用 ../watchlist/us.txt 做回测，根据回测结果继续优化，直到不能继续优化为止 


### 使用 ./scripts/launch_tv_debug.bat 启动TradigView，请使用策略：US Stock SQZMOM Daily PRO v4 (ATR + EMA20 Stop)，请分析这个策略，有没有可以提高的地方, 先列出可能优化的点，并制定优化计划，在日线上进行回测并分析交易清单，对策略进行改进，提高交易信号同时，也需要提高胜率，提高收益, 优化策略后，请使用 ../watchlist/us.txt 中的股票列表做回测，根据回测结果特别是交易清单，研究亏损的订单，总结规律，不断优化策略，并回测，做对比，对策略进行改进，提高交易信号同时，也需要提高胜率提高胜率，提高收益，持续优化，直到不能持续优化为止

## 添加Wathlist
使用 ./scripts/launch_tv_debug.bat 启动TradigView，将 002371.SZ,300567.SZ,300666.SZ,300054.SZ,603986.SH,56
  1980.SH,512480.SH,300308.SZ,300502.SZ,300394.SZ,0009
  77.SZ,603019.SH,601138.SH,002463.SZ,300476.SZ,002837
  .SZ,159819.SZ,300750.SZ,300014.SZ,300274.SZ,600406.S
  H,002028.SZ,000400.SZ,002335.SZ,002518.SZ,300001.SZ,
  302132.SZ,600760.SH,000768.SZ,600893.SH,002389.SZ,60
  3712.SH,002049.SZ,000733.SZ,600764.SH,600562.SH,5126
  60.SH,002085.SZ,600038.SH,002023.SZ,000099.SZ,600990
  .SH,300699.SZ,300777.SZ,001696.SZ,600276.SH,002653.S
  Z,002422.SZ,603259.SH,300347.SZ,600118.SH,600879.SH,
  300762.SZ,001270.SZ,601882.SH,300161.SZ,000837.SZ,30
  0083.SZ,301603.SZ,000333.SZ,600690.SH,000651.SZ,0025
  08.SZ,002594.SZ,000723.SZ,000338.SZ,600481.SH,601689
  .SH,002050.SH,603728.SH,603667.SH,002074.SZ,300450.S
  Z,603000.SH,000032.SZ,300226.SZ,002401.SZ,600438.SH,
  601012.SH,002241.SZ,603501.SH 这些股票加入 A股可交易 这个watchlist

使用 ./scripts/launch_tv_debug.bat 启动TradigView，将  LLY,AVGO,MU,VRT,ISRG,CRCL,GEV,BE,NBIS,RKLB 这些股票加入 美股可交易 这个watchlist

使用 ./scripts/launch_tv_debug.bat 启动TradigView，将   1801.HK,9926.HK,6990.HK,1530.HK 这些股票加入 港股可交易 这个watchlist

## 分析ReView
分析 ./reports/YYYY-MM-dd 下所有 cn_review.json, cn_review.md 统计涨幅共同特征，跌幅共同特征，权重调整建议 ，未分类特征。分析出最值得的权重调整建议，最值得增加未分类特征 

## 总结成cli，mcp
请将上面的功能，改写成cli，mcp，参考 ./src/server.js
claude --dangerously-skip-permissions


## 市场热门股票 
用 wudao-a-shares 这个mcp server 找到A股今日所有在10:00之前涨停，并今日后续时间都没有破板，并且是首板的股票,将股票代码以逗号分割提供出来
将上面涉及的股票跑一下全流程：`npm run full:cn`

