---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_6ff265bca60711f1b3f6525400826444
    ReservedCode1: NheTefpQLa/ZB6+lrpUCWf51WNWpebHqHt0ROkdra38UKgZ0OOSIqJVjFqZq7KhvBpNc5QUNNkUbTOB5AkfkF+nmvXNPiY/J3gzkRWRtfuCgM1h/RYM77CEw+GwZ3KOnhDhANUf8somvsqIvoLRbICeAoh0U4fCUJw7o+cb5Z/Tf4r72eYG2XWt82Lc=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_6ff265bca60711f1b3f6525400826444
    ReservedCode2: NheTefpQLa/ZB6+lrpUCWf51WNWpebHqHt0ROkdra38UKgZ0OOSIqJVjFqZq7KhvBpNc5QUNNkUbTOB5AkfkF+nmvXNPiY/J3gzkRWRtfuCgM1h/RYM77CEw+GwZ3KOnhDhANUf8somvsqIvoLRbICeAoh0U4fCUJw7o+cb5Z/Tf4r72eYG2XWt82Lc=
---

# US Stock News Sentiment Analysis - Tradeable Signals
**Analysis Date:** 2026-09-01  |  **News Window:** 2026-08-25 ~ 2026-09-01
**Stock Pool:** us_selected.txt (28)
**Score Scale:** 0-100 normalized (neutral=50, strong long >=75, avoid <=39)
**Mode:** LOCAL KEYWORD CLASSIFICATION (Eastmoney source)
**Note:** DeepSeek API balance exhausted (HTTP 402) & overseas news sources unreachable — LLM deep-classification disabled; sentiment/type via built-in Chinese dictionaries.

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:LLY** | **72** | 15.53 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 16/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:GEN** | **66** | 7.81 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/0 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:MRVL** | **60** | 7.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/0 | - |
| 4 | **NYSE:JOE** | **53** | 0.75 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/26 | - |
| 5 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/14 | - |
| 6 | **NYSE:PATH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 7 | **NASDAQ:DASH** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/7 | - |
| 8 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 9 | **NASDAQ:VRTX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/14 | - |
| 10 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/10 | - |
| 11 | **NYSE:P** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/17 | - |
| 12 | **NYSE:RRC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/1 | - |
| 13 | **NYSE:NEM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/15 | - |
| 14 | **NYSE:FCX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 15 | **NYSE:SCCO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 16 | **NYSE:WPM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 17 | **NASDAQ:MNST** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/7 | - |
| 18 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 19 | **NASDAQ:FWONA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 20 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **NYSE:APD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/21 | - |
| 23 | **NASDAQ:FIVE** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/15 | - |
| 24 | **NYSE:J** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 25 | **NYSE:NEXA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/2 | - |
| 26 | **NASDAQ:HOOD** | **47** | -0.75 | ⚪ No Trade (Neutral) | Watch | Low | 1/20 | - |
| 27 | **NASDAQ:ADAM** | **41** | -2.13 | ⚪ No Trade (Neutral) | Watch | Low | 5/11 | - |
| 28 | **CBOE:CBOE** | **41** | -2.1 | ⚪ No Trade (Neutral) | Watch | Low | 2/14 | - |

---

## 🟢 Mid Long (2)

### NASDAQ:GEN (GEN)

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 7.81 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] “机器鸭”爆单，主控芯片厂商瑞芯微涨停
- 🟢 [Industry|w2.13] 香港GenAI沙盒开放实测，AI+金融产业迎发展红利，金融科技ETF博时(516860)跟踪指数涨超1%
- 🟢 [Industry|w2.13] 香港GenAI沙盒开放实测，AI+金融产业迎发展红利，金融科技ETF博时(516860)跟踪指数涨超1%

**Bearish Factors:**
- 🔴 [Industry|w1.05] 德勤华永青岛分所正式成立

**Key News (tagged, local keyword):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 每日经济新闻 | 明星追捧的智能戒指Oura上市前夕被诉“虚假宣传”：年销550万枚，估值160亿美元，睡眠监测准确率被指“如同抛硬币” |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 21世纪经济报道 | 国内多家手机厂商今日统一调价，9月端侧消费电子有望迎密集新品催化丨盘中雷达 |
| 2026-09-01 | Industry | 🟢 +1 | 2.13 | 界面新闻 | 香港GenAI沙盒开放实测，AI+金融产业迎发展红利，金融科技ETF博时(516860)跟踪指数涨超1% |
| 2026-09-01 | Industry | 🟢 +1 | 2.13 | 东方财富证券 | 香港GenAI沙盒开放实测，AI+金融产业迎发展红利，金融科技ETF博时(516860)跟踪指数涨超1% |
| 2026-08-31 | Earnings | 🟢 +1 | 2.34 | 第一财经 | “机器鸭”爆单，主控芯片厂商瑞芯微涨停 |
| 2026-08-30 | Industry | ⚪  0 | 1.5 | 时代周报 | 手机史上最卷9月？小米、华为、苹果折叠屏同台，旗舰迈入2nm时代 |
| 2026-08-30 | Industry | ⚪  0 | 1.5 | 上海证券报·中国证券网 | 海康存储斩获AI算力性能标杆大奖 |
| 2026-08-30 | Industry | ⚪  0 | 1.5 | 中国经营报 | 专访｜重返“健身中心”：法雷奥中国再定义 |

---

### NASDAQ:MRVL (迈威尔科技)

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 7.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 0 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] 美股成交额前20：闪迪大涨5.5%强势登顶 特斯拉推平价Model 3涨超5%
- 🟢 [Industry|w2.13] 利好突袭！英伟达出手，股价涨停
- 🟢 [Industry|w2.13] 国际油价飙涨近3%，布油突破90美元，美股三大指数集体下跌

**Key News (tagged, local keyword):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-01 | Policy | ⚪  0 | 2.55 | 中国证券报 | 全球股市巨震，黄金、白银跳水，发生了什么？ |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 哈富证券 | 美股盘前：三大股指期货齐跌 科技股盘前普跌 美债收益率走高 |
| 2026-09-01 | Industry | 🟢 +1 | 2.13 | 中国基金报 | 利好突袭！英伟达出手，股价涨停 |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 国际金融报 | 美股小幅收跌，原油、芯片股大涨，金银下挫 |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 中新经纬 | A股盘前速览：美股集体收跌，存储芯片多数上涨；日韩股市双双低开；国产GPU企业燧原科技明日打新；加大大模型智能体Toke |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 上海证券报 | 美伊再度交火，国际油价大涨 |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 中国基金报 | 原油、芯片股，大涨！ |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 经纬科创 | 美股收盘：三大指数集体下跌，道指跌0.7%；半导体、存储板块多数上涨，闪迪涨超5%，SK海力士涨超2% |

---

## 🟡 Cautious Long (1)

### NYSE:LLY (礼来)

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 15.53 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [M&A|w2.98] 英矽智能联席CEO任峰谈盈利可持续性：合作项目的积累是前提
- 🟢 [M&A|w2.98] 康希诺、百济神州跌超1%，科创创新药续跌超1%！最高28.75亿美元，礼来再出手收购！MNC加速补管线，中国创新药为何成重要选择？
- 🟢 [Earnings|w2.76] 2026年医药中报观察：谁能扛起行业下一轮增长？

**Key News (tagged, local keyword):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-01 | Earnings | 🟢 +1 | 2.76 | 21世纪经济报道 | 2026年医药中报观察：谁能扛起行业下一轮增长？ |
| 2026-09-01 | M&A | 🟢 +1 | 2.98 | 经济参考网 | 英矽智能联席CEO任峰谈盈利可持续性：合作项目的积累是前提 |
| 2026-09-01 | M&A | 🟢 +1 | 2.98 | 界面新闻 | 康希诺、百济神州跌超1%，科创创新药续跌超1%！最高28.75亿美元，礼来再出手收购！MNC加速补管线，中国创新药为何成 |
| 2026-09-01 | Industry | 🟢 +1 | 2.13 | 财联社 | 港股早报｜特斯拉平价版Model3正式登场 8月超二百款游戏版号获批 |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 上观新闻 | “减肥针”神仙打架：药物如何选？哪些人群宜忌？专家划重点了 |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 财联社 | 美股收盘：中东战火冲击美国股债汇齐跌 特斯拉逆势涨超5% |
| 2026-08-31 | Industry | ⚪  0 | 1.8 | 每日经济新闻 | 获5000倍认购成港股“认购王”，GLP-1药物开卖后市值却缩水90%？对话银诺医药董事长王庆华：不会为股价下降而感到烦 |
| 2026-08-31 | Industry | ⚪  0 | 1.8 | 每日经济新闻 | 减重用司美格鲁肽片上市申请获受理 口服减重药战火燃至中国市场 |

---

## ⚠️ Risk Pattern (1)

### NYSE:LLY (礼来)

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 15.53 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [M&A|w2.98] 英矽智能联席CEO任峰谈盈利可持续性：合作项目的积累是前提
- 🟢 [M&A|w2.98] 康希诺、百济神州跌超1%，科创创新药续跌超1%！最高28.75亿美元，礼来再出手收购！MNC加速补管线，中国创新药为何成重要选择？
- 🟢 [Earnings|w2.76] 2026年医药中报观察：谁能扛起行业下一轮增长？

**Key News (tagged, local keyword):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-01 | Earnings | 🟢 +1 | 2.76 | 21世纪经济报道 | 2026年医药中报观察：谁能扛起行业下一轮增长？ |
| 2026-09-01 | M&A | 🟢 +1 | 2.98 | 经济参考网 | 英矽智能联席CEO任峰谈盈利可持续性：合作项目的积累是前提 |
| 2026-09-01 | M&A | 🟢 +1 | 2.98 | 界面新闻 | 康希诺、百济神州跌超1%，科创创新药续跌超1%！最高28.75亿美元，礼来再出手收购！MNC加速补管线，中国创新药为何成 |
| 2026-09-01 | Industry | 🟢 +1 | 2.13 | 财联社 | 港股早报｜特斯拉平价版Model3正式登场 8月超二百款游戏版号获批 |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 上观新闻 | “减肥针”神仙打架：药物如何选？哪些人群宜忌？专家划重点了 |
| 2026-09-01 | Industry | ⚪  0 | 2.13 | 财联社 | 美股收盘：中东战火冲击美国股债汇齐跌 特斯拉逆势涨超5% |
| 2026-08-31 | Industry | ⚪  0 | 1.8 | 每日经济新闻 | 获5000倍认购成港股“认购王”，GLP-1药物开卖后市值却缩水90%？对话银诺医药董事长王庆华：不会为股价下降而感到烦 |
| 2026-08-31 | Industry | ⚪  0 | 1.8 | 每日经济新闻 | 减重用司美格鲁肽片上市申请获受理 口服减重药战火燃至中国市场 |

---

## ⚪ Watch / Neutral (25)

### NYSE:JOE (圣乔)
- Score: 53/100 | raw: 0.75 | News: 2 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### AMEX:CET (Central Securities Corporation)
- Score: 50/100 | raw: 0 | News: 2 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PATH (UiPath Inc-A)
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NASDAQ:DASH (DoorDash Inc-A)
- Score: 50/100 | raw: 0 | News: 1 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY (Harmony Biosciences Holdings In)
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NASDAQ:VRTX (福泰制药)
- Score: 50/100 | raw: 0 | News: 0 kept / 14 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NYSE:LTC (LTC Properties Inc)
- Score: 50/100 | raw: 0 | News: 1 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:P (Everpure Inc-A)
- Score: 50/100 | raw: 0 | News: 0 kept / 17 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NYSE:RRC (山脉资源)
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NYSE:NEM (纽蒙特)
- Score: 50/100 | raw: 0 | News: 1 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FCX (自由港麦克莫兰)
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NYSE:SCCO (南方铜业)
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NYSE:WPM (惠顿贵金属)
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NASDAQ:MNST (怪物饮料)
- Score: 50/100 | raw: 0 | News: 0 kept / 7 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NASDAQ:OSBC (Old Second Bancorp Inc)
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NASDAQ:FWONA (Liberty Media Corp Liberty Form)
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NASDAQ:BHRB (Burke & Herbert Financial Servi)
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### OTC:SBGSY (SBGSY)
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NYSE:APD (空气化工)
- Score: 50/100 | raw: 0 | News: 0 kept / 21 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NASDAQ:FIVE (Five Below Inc)
- Score: 50/100 | raw: 0 | News: 1 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:J (Jacobs Solutions Inc)
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NYSE:NEXA (Nexa Resources SA)
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window (Eastmoney fallback, LLM unavailable)

### NASDAQ:HOOD (Robinhood Markets Inc-A)
- Score: 47/100 | raw: -0.75 | News: 1 kept / 20 dropped | No clear directional bias — stay flat

### NASDAQ:ADAM (Adamas Trust Inc)
- Score: 41/100 | raw: -2.13 | News: 5 kept / 11 dropped | No clear directional bias — stay flat

### CBOE:CBOE (芝加哥期权交易所)
- Score: 41/100 | raw: -2.1 | News: 2 kept / 14 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score >=60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-01T13:13:04.413Z | Source: Eastmoney (local keyword mode — DeepSeek balance exhausted & overseas sources unreachable)*
*（内容由AI生成，仅供参考）*
