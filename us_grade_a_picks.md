---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_c14b6246a21711f1bc17525400826444
    ReservedCode1: +hOq66O1do6wQRjfALr6wy1SN05cL10L1S04+NI0C03WRn59f1wTcyUYfdrLEgLm2ePzQlufEfvihnmW3zTLu4NQZKAZQfJsYoX03Y4b0FtZFacm92hGo6FU6i9Iw9qhkk7fSHATR33iRU+nNcrVZ/mwiOQ7sYEBUzpxF6A5igAyliRQ6gnxyTaP5ow=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_c14b6246a21711f1bc17525400826444
    ReservedCode2: +hOq66O1do6wQRjfALr6wy1SN05cL10L1S04+NI0C03WRn59f1wTcyUYfdrLEgLm2ePzQlufEfvihnmW3zTLu4NQZKAZQfJsYoX03Y4b0FtZFacm92hGo6FU6i9Iw9qhkk7fSHATR33iRU+nNcrVZ/mwiOQ7sYEBUzpxF6A5igAyliRQ6gnxyTaP5ow=
---

# US Grade A Picks — 三条件精选名单

**生成时间:** 2026-08-27 13:03:27 UTC（当日 combined:us 同一批次）
**数据源:** ./watchlist/us_tech_signals.json (28 stocks, 2026-08-26T12:50:57.323Z) + ./watchlist/us_news_signals.json (28 stocks, 2026-08-26T12:25:43.558Z)
**筛选方法:** 复现 pipeline/4-combined 的 gradeOf + classifyNews 逻辑，对全部 28 只股票做三条件交集判定。

---

## 筛选条件

| # | 条件 | 要求 |
|---|------|------|
| 1 | 等级 Grade | 🟢A（long && !overheated && tech >= 30）|
| 2 | 多周期对齐 MTF Alignment | 3/4 (75%) 或 4/4 (100%)，四周期框架(1W/1D/4H/1H) |
| 3 | News Signal | GREEN Long (Strong) |

---

## 筛选结果：0 只命中

当前批次 **无股票同时满足以上三个条件**，名单为空。

### 分条件命中统计

| 条件 | 命中数 / 总数 | 命中标的 |
|------|--------------|----------|
| ① 等级 🟢A | 0 / 28 | — |
| ② MTF 对齐 3/4 或 4/4 | 7 / 28 | NYSE:RRC, NYSE:NEXA, NASDAQ:MNST, NASDAQ:GEN, NASDAQ:HOOD, NYSE:SCCO, NYSE:WPM |
| ③ News = GREEN Long (Strong) | 0 / 28 | — |

### 近失候选（满足 2/3 条件）

当前唯一绿色 News 信号标的如下，但因 News 强度为 (Mid) 而非 (Strong) 或 Grade 未达 A 而落选：

| Symbol | Grade | Tech | Alignment | News Signal | 落选原因 |
|--------|-------|------|------------|-------------|----------|
| NASDAQ:GEN | 🔵B | 25.7 | 4/4 (100%) | GREEN Long (Mid) | Grade=B（非A）; News强度=Mid |

### 原因分析

1. **News 信号整体偏弱**：本次 28 只股票中 27 只为 NEUTRAL No Trade（No Data/Weak Bullish/Neutral），仅 1 只（NASDAQ:GEN）为 GREEN Long (Mid)，**没有任何标的是 GREEN Long (Strong)**，条件③直接导致交集为空。
2. **Grade 🟢A 缺失**：Grade A 要求 News 为 long 信号且 Tech≥30。当前无股票满足 long 判定，故 0 只达到 A（GEN 为 GREEN 但 Tech 25.7，仅够 🔵B）。
3. **MTF 对齐是本批最宽松的条件**：共 7 只达到 3/4 或 4/4（RRC/NEXA/MNST/GEN/HOOD/SCCO/WPM），但叠加 Grade A 与 News (Strong) 后仍无交集。

### 附录：全部 28 只股票三条件矩阵（按 Tech 降序）

| # | Symbol | Grade | Tech | MTF Alignment | 条件②命中 | News Signal |
|---|--------|-------|------|---------------|-----------|-------------|
| 1 | NYSE:RRC | ⚪C | 75.9 | 3/4 (75%) | ✅ | NEUTRAL No Trade (Weak Bullish) |
| 2 | NYSE:JOE | ⚪C | 59.5 | 2/2 (100%) | — | NEUTRAL No Trade (No Data) |
| 3 | AMEX:CET | ⚪C | 56.6 | 3/3 (100%) | — | NEUTRAL No Trade (No Data) |
| 4 | OTC:SBGSY | ⚪C | 51.9 | 3/3 (100%) | — | NEUTRAL No Trade (No Data) |
| 5 | NASDAQ:MRVL | ⚪C | 45.4 | 3/3 (100%) | — | NEUTRAL No Trade (No Data) |
| 6 | NYSE:NEXA | ⚪C | 41.9 | 4/4 (100%) | ✅ | NEUTRAL No Trade (Weak Bullish) |
| 7 | NYSE:LLY | ⚪C | 39.7 | 1/4 (25%) | — | NEUTRAL No Trade (No Data) |
| 8 | NASDAQ:OSBC | ⚪C | 36.5 | 1/3 (33%) | — | NEUTRAL No Trade (No Data) |
| 9 | NASDAQ:FWONA | ⚪C | 35.2 | 1/4 (25%) | — | NEUTRAL No Trade (No Data) |
| 10 | NYSE:P | ⚪C | 31.9 | 1/4 (25%) | — | NEUTRAL No Trade (Weak Bullish) |
| 11 | NASDAQ:MNST | ⚪C | 29.4 | 4/4 (100%) | ✅ | NEUTRAL No Trade (Weak Bullish) |
| 12 | NYSE:APD | ⚪C | 29.2 | 1/4 (25%) | — | NEUTRAL No Trade (Weak Bullish) |
| 13 | NYSE:LTC | ⚪C | 26.1 | 2/2 (100%) | — | NEUTRAL No Trade (Weak Bullish) |
| 14 | NASDAQ:BHRB | ⚪C | 25.8 | 0/3 (0%) | — | NEUTRAL No Trade (No Data) |
| 15 | NASDAQ:GEN | 🔵B | 25.7 | 4/4 (100%) | ✅ | GREEN Long (Mid) |
| 16 | NASDAQ:HOOD | ⚪C | 25.2 | 4/4 (100%) | ✅ | NEUTRAL No Trade (No Data) |
| 17 | NASDAQ:ADAM | ⚪C | 23.8 | 1/3 (33%) | — | NEUTRAL No Trade (No Data) |
| 18 | NYSE:FCX | ⚪C | 23.7 | 3/3 (100%) | — | NEUTRAL No Trade (No Data) |
| 19 | NASDAQ:HRMY | ⚪C | 21.1 | 2/2 (100%) | — | NEUTRAL No Trade (No Data) |
| 20 | NYSE:SCCO | ⚫D | 19.9 | 4/4 (100%) | ✅ | NEUTRAL No Trade (No Data) |
| 21 | NYSE:PATH | ⚫D | 0 | 2/2 (100%) | — | NEUTRAL No Trade (No Data) |
| 22 | NASDAQ:DASH | ⚫D | 0 | 3/3 (100%) | — | NEUTRAL No Trade (Weak Bullish) |
| 23 | NASDAQ:VRTX | ⚫D | 0 | 2/2 (100%) | — | NEUTRAL No Trade (No Data) |
| 24 | NYSE:NEM | ⚫D | 0 | 3/3 (100%) | — | NEUTRAL No Trade (No Data) |
| 25 | NASDAQ:FIVE | ⚫D | 0 | 3/3 (100%) | — | NEUTRAL No Trade (No Data) |
| 26 | NYSE:J | ⚫D | 0 | 2/3 (67%) | — | NEUTRAL No Trade (Weak Bullish) |
| 27 | CBOE:CBOE | ⚫D | 0 | 2/2 (100%) | — | NEUTRAL No Trade (Neutral) |
| 28 | NYSE:WPM | ⚫D | -8.2 | 4/4 (100%) | ✅ | NEUTRAL No Trade (No Data) |

> 注：条件②严格限定在四周期框架(1W/1D/4H/1H)下的 3/4 或 4/4。形如 2/2、3/3 的标的表示仅部分周期有数据（缺口周期未评测），虽按可用周期为 100% 看多，但不属于用户指定的 3/4 / 4/4 四周期对齐，故不计入条件②命中。
*（内容由AI生成，仅供参考）*
