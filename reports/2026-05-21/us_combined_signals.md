# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-21　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:LTC** | NYSE:LTC | **67.1** | ⚪C | 70.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 39.12 | 37.81 | 40.66 | 1.2:1 | near_resist/chop |
| 2 | **NYSE:MS** | NYSE:MS | **66.7** | 🟢A | 52.9 | 75 | GREEN Long (Strong) | Breakout (Squeeze Release) | 198.36 | 189.58 | 209.14 | 1.2:1 | bull_trap/mom_decay/near_resist/bear_div |
| 3 | **NASDAQ:AMAT** | NASDAQ:AMAT | **66.4** | 🟡C+ | 38.4 | 96 | WARN No Trade (Overheated) | Trend Continuation | 426.85 | 396.12 | 471.93 | 1.5:1 | mom_decay/chop |
| 4 | **NASDAQ:NVDA** | NASDAQ:NVDA | **65.2** | 🟢A | 47.7 | 79 | GREEN Long (Strong) | Trend Continuation | 223.47 | 211.4 | 241.17 | 1.5:1 | low_rr |
| 5 | **NYSE:IRM** | NYSE:IRM | **62.3** | 🟢A | 43.5 | 78 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 125.81 | 120.53 | 133.56 | 1.5:1 | mom_decay/low_rr |
| 6 | **CBOE:CBOE** | CBOE:CBOE | **62.2** | 🟢A | 47.4 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 360.92 | 342.51 | 387.92 | 1.5:1 | near_resist |
| 7 | **NASDAQ:OSBC** | NASDAQ:OSBC | **60.8** | ⚪C | 59.6 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 21.03 | 19.99 | 22.33 | 1.2:1 | mom_decay/near_resist/low_rr |
| 8 | **NYSE:TRNO** | NYSE:TRNO | **58.2** | ⚪C | 50.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 66.37 | 64.03 | 69.15 | 1.2:1 | mom_decay/near_resist/low_rr |
| 9 | **NYSE:HPE** | NYSE:HPE | **58.2** | 🟢A | 31.3 | 86 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 33.8 | 31.72 | 36.85 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 10 | **NASDAQ:VSAT** | NASDAQ:VSAT | **57.6** | ⚪C | 54.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 75.27 | 69.62 | 83.55 | 1.5:1 | near_resist/bear_div |
| 11 | **NYSE:JHG** | NYSE:JHG | **57.2** | ⚪C | 62 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 51.02 | 51.59 | 52.01 | -1.7:1 | mom_decay/near_resist/low_rr |
| 12 | **NASDAQ:ERIC** | NASDAQ:ERIC | **56.8** | ⚪C | 53 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 12.99 | 12.5 | 13.7 | 1.4:1 | near_resist/chop |
| 13 | **NASDAQ:GOOGL** | NASDAQ:GOOGL | **56.5** | 🟢A | 39.5 | 82 | GREEN Long (Strong) | Pullback Buy (Near Support) | 383.08 | 369.46 | 408.36 | 1.9:1 | mom_decay/bear_div |
| 14 | **NYSE:TSM** | NYSE:TSM | **55.2** | ⚪C | 44.3 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 402.82 | 373.43 | 440.78 | 1.3:1 | mom_decay/near_resist/low_rr |
| 15 | **NASDAQ:MTSI** | NASDAQ:MTSI | **53.5** | ⚪C | 51.1 | 57 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 375.71 | 342.46 | 420.04 | 1.3:1 | overheated/low_rr |
| 16 | **NASDAQ:KLAC** | NASDAQ:KLAC | **53.2** | 🔵B | 27 | 80 | WARN Long (Cautious) | Trend Continuation | 1829.47 | 1708.72 | 2006.56 | 1.5:1 | mom_decay/chop/low_rr |
| 17 | **NYSE:NOK** | NYSE:NOK | **50.3** | 🔵B | 26.2 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 13.62 | 12.23 | 15.66 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 18 | **NYSE:RIO** | NYSE:RIO | **48.4** | ⚪C | 39 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 103.31 | 98.51 | 110.36 | 1.5:1 | mom_decay/chop |
| 19 | **NASDAQ:MU** | NASDAQ:MU | **48** | ⚪C | 38.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 731.99 | 639.76 | 867.26 | 1.5:1 | mom_decay/low_rr |
| 20 | **NYSE:WT** | NYSE:WT | **46.5** | ⚪C | 44.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 18.93 | 17.61 | 20.83 | 1.4:1 | near_resist/bear_div |
| 21 | **NASDAQ:FLEX** | NASDAQ:FLEX | **46.2** | 🔵B | 16 | 79 | GREEN Long (Strong) | Trend Continuation | 131.52 | 117.32 | 152.35 | 1.5:1 | mom_decay/bear_div/low_rr |
| 22 | **NYSE:SPNT** | NYSE:SPNT | **46** | ⚪C | 35 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 23.75 | 22.36 | 25.52 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 23 | **NASDAQ:MRVL** | NASDAQ:MRVL | **45.8** | 🔵B | 17 | 89 | GREEN Long (Strong) | Overextended Chase (High Risk) | 186.8 | 168.03 | 211.83 | 1.3:1 | overheated/mom_decay/near_resist/bear_div/low_rr |
| 24 | **NASDAQ:NWBI** | NASDAQ:NWBI | **45.7** | ⚪C | 34.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 13.89 | 13.49 | 14.47 | 1.4:1 | mom_decay/near_resist/low_rr |
| 25 | **NASDAQ:SANM** | NASDAQ:SANM | **45.4** | ⚪C | 41 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 227.71 | 203.44 | 258.92 | 1.3:1 | mom_decay |
| 26 | **NASDAQ:AMD** | NASDAQ:AMD | **45.4** | 🟢A | 30.4 | 68 | WARN Long (Cautious) | Overextended Chase (High Risk) | 447.58 | 402.6 | 507.56 | 1.3:1 | overheated/mom_decay/low_rr |
| 27 | **NYSE:HG** | NYSE:HG | **45** | ⚪C | 33.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 32.39 | 30.79 | 34.74 | 1.5:1 | chop/low_rr |
| 28 | **NYSE:NVT** | NYSE:NVT | **45** | 🔵B | 16.6 | 75 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 161.86 | 148.99 | 180.73 | 1.5:1 | mom_decay/bear_div/low_rr |
| 29 | **NASDAQ:MPWR** | NASDAQ:MPWR | **44.9** | ⚪C | 37.5 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1529.97 | 1394.84 | 1711.7 | 1.3:1 | mom_decay/bear_div |
| 30 | **NYSE:FN** | NYSE:FN | **44.9** | 🔵B | 23.8 | 64 | GREEN Long (Mid) | Breakout (Squeeze Release) | 664.2 | 564.47 | 797.96 | 1.3:1 | mom_decay/chop/bear_div |
| 31 | **NYSE:COHR** | NYSE:COHR | **44.4** | 🔵B | 15.7 | 75 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 358.5 | 314.4 | 423.17 | 1.5:1 | bull_trap/mom_decay/near_resist/low_rr |
| 32 | **NYSE:P** | NYSE:P | **42.7** | ⚪C | 35.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 76.76 | 68.27 | 87.59 | 1.3:1 | mom_decay/near_resist/low_rr |
| 33 | **NASDAQ:BGC** | NASDAQ:BGC | **41.9** | ⚪C | 24.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 11.26 | 10.62 | 12.07 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 34 | **NASDAQ:INTC** | NASDAQ:INTC | **41.7** | ⚪C | 31.5 | 57 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 118.96 | 103.61 | 139.42 | 1.3:1 | overheated/mom_decay/low_rr |
| 35 | **NASDAQ:PRDO** | NASDAQ:PRDO | **40.6** | ⚪C | 34.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 33.3 | 31.51 | 36.11 | 1.6:1 | mom_decay/near_resist/chop |
| 36 | **NYSE:DKS** | NYSE:DKS | **40.4** | ⚪C | 33.4 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 215.84 | 202.91 | 235.35 | 1.5:1 | mom_decay/near_resist/chop |
| 37 | **NASDAQ:INCY** | NASDAQ:INCY | **40.3** | ⚪C | 22.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 97.37 | 92.54 | 103.39 | 1.2:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 38 | **NASDAQ:IREN** | NASDAQ:IREN | **40.2** | ⚪C | 33.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 51.92 | 41.11 | 64.31 | 1.1:1 | mom_decay/near_resist |
| 39 | **NYSE:PACS** | NYSE:PACS | **39.8** | ⚪C | 30.4 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 36.45 | 32.19 | 41.81 | 1.3:1 | near_resist/chop |
| 40 | **NASDAQ:WDC** | NASDAQ:WDC | **39.8** | 🔵B | 16 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 459.62 | 410.67 | 531.41 | 1.5:1 | mom_decay/bear_div/low_rr |
| 41 | **NASDAQ:CRDO** | NASDAQ:CRDO | **39.3** | ⚪C | 38.9 | 40 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 180.24 | 148.21 | 217.75 | 1.2:1 | mom_decay |
| 42 | **NASDAQ:CPRX** | NASDAQ:CPRX | **39** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.78 | 30.38 | 32.13 | 3.4:1 | mom_decay/near_resist/bear_div/low_rr |
| 43 | **NASDAQ:RKLB** | NASDAQ:RKLB | **38.5** | ⚪C | 30.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 134.28 | 117.16 | 157.11 | 1.3:1 | overheated/fake_break/near_resist |
| 44 | **NASDAQ:APLD** | NASDAQ:APLD | **37.9** | 🔵B | 20.5 | 64 | GREEN Long (Mid) | Pullback Buy (Near Support) | 38.93 | 31.38 | 47.66 | 1.2:1 | mom_decay/near_resist/bear_div/low_rr |
| 45 | **NYSE:AROC** | NYSE:AROC | **35.5** | ⚪C | 25.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 36.73 | 34.23 | 40.35 | 1.4:1 | mom_decay/near_resist/chop/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **66.7** |
| Tech Score | 52.9 (Breakout (Squeeze Release)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 197.77 |
| **Entry** | **198.36** |
| **Stop** | **189.58** (ATR × 1.8) |
| **Target** | **209.14** |
| R/R | 1.2:1 |
| RSI | 70.9 |
| ATR% | 2.3% |
| Dist EMA20 | 3.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | bull_trap mom_decay near_resist bear_div |

### 2. NASDAQ:NVDA (NASDAQ:NVDA)

| Field | Value |
|-------|-------|
| Combined Score | **65.2** |
| Tech Score | 47.7 (Trend Continuation) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 223.47 |
| **Entry** | **223.47** |
| **Stop** | **211.4** (ATR × 1.5) |
| **Target** | **241.17** |
| R/R | 1.5:1 |
| RSI | 71.4 |
| ATR% | 3.6% |
| Dist EMA20 | 4.4% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | low_rr |

### 3. NYSE:IRM (NYSE:IRM)

| Field | Value |
|-------|-------|
| Combined Score | **62.3** |
| Tech Score | 43.5 (Trend Follow (HH/HL Intact)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 125.81 |
| **Entry** | **125.81** |
| **Stop** | **120.53** (ATR × 1.5) |
| **Target** | **133.56** |
| R/R | 1.5:1 |
| RSI | 58 |
| ATR% | 2.8% |
| Dist EMA20 | 1.9% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay low_rr |

### 4. CBOE:CBOE (CBOE:CBOE)

| Field | Value |
|-------|-------|
| Combined Score | **62.2** |
| Tech Score | 47.4 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 360.92 |
| **Entry** | **360.92** |
| **Stop** | **342.51** (ATR × 1.5) |
| **Target** | **387.92** |
| R/R | 1.5:1 |
| RSI | 68.6 |
| ATR% | 3.4% |
| Dist EMA20 | 5.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist |

### 5. NYSE:HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **58.2** |
| Tech Score | 31.3 (Trend Follow (HH/HL Intact)) |
| News Score | 86 → GREEN Long (Strong) |
| Current Price | 33.8 |
| **Entry** | **33.8** |
| **Stop** | **31.72** (ATR × 1.5) |
| **Target** | **36.85** |
| R/R | 1.5:1 |
| RSI | 70.2 |
| ATR% | 4.1% |
| Dist EMA20 | 10.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break bull_trap near_resist low_rr |

### 6. NASDAQ:GOOGL (NASDAQ:GOOGL)

| Field | Value |
|-------|-------|
| Combined Score | **56.5** |
| Tech Score | 39.5 (Pullback Buy (Near Support)) |
| News Score | 82 → GREEN Long (Strong) |
| Current Price | 388.91 |
| **Entry** | **383.08** |
| **Stop** | **369.46** (ATR × 2) |
| **Target** | **408.36** |
| R/R | 1.9:1 |
| RSI | 62.7 |
| ATR% | 2.5% |
| Dist EMA20 | 2.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay bear_div |

### 7. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **45.4** |
| Tech Score | 30.4 (Overextended Chase (High Risk)) |
| News Score | 68 → WARN Long (Cautious) |
| Current Price | 447.58 |
| **Entry** | **447.58** |
| **Stop** | **402.6** (ATR × 1.5) |
| **Target** | **507.56** |
| R/R | 1.3:1 |
| RSI | 80.2 |
| ATR% | 6.7% |
| Dist EMA20 | 14.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:AMAT** | NASDAQ:AMAT | 66.4 | 38.4 | 96(hot) | 426.85 | **401.24** | 385.87 | 467.83 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/21 11:34:24*