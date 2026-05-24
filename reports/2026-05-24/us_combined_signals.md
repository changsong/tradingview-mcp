# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-24　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:OSBC** | NASDAQ:OSBC | **71.7** | ⚪C | 75.9 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 21.14 | 20.21 | 22.29 | 1.2:1 | near_resist/low_rr |
| 2 | **NYSE:GLW** | NYSE:GLW | **61.1** | 🟢A | 34.9 | 88 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 194.05 | 171.35 | 227.35 | 1.5:1 | mom_decay/bear_div/low_rr |
| 3 | **NYSE:TRNO** | NYSE:TRNO | **60.6** | ⚪C | 59.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 66.25 | 63.91 | 69.02 | 1.2:1 | mom_decay/near_resist/low_rr |
| 4 | **NASDAQ:MU** | NASDAQ:MU | **59.3** | 🟢A | 37.8 | 79 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 751 | 660.88 | 883.18 | 1.5:1 | mom_decay/low_rr |
| 5 | **NYSE:SM** | NYSE:SM | **56.6** | 🟢A | 41.3 | 67 | GREEN Long (Mid) | Trend Continuation | 33.77 | 31.44 | 37.19 | 1.5:1 | chop |
| 6 | **NYSE:TSM** | NYSE:TSM | **56** | 🟢A | 43.6 | 62 | GREEN Long (Mid) | Breakout (Squeeze Release) | 405.73 | 376.85 | 442.95 | 1.3:1 | mom_decay/near_resist/low_rr |
| 7 | **NASDAQ:AMAT** | NASDAQ:AMAT | **55.7** | 🟢A | 35.1 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 432.16 | 402.34 | 475.89 | 1.5:1 | mom_decay/near_resist/chop |
| 8 | **NYSE:MS** | NYSE:MS | **55.5** | ⚪C | 48.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 201.03 | 194.4 | 210.76 | 1.5:1 | near_resist/bear_div |
| 9 | **NASDAQ:APLD** | NASDAQ:APLD | **55.2** | 🟢A | 33.4 | 88 | WARN Long (Cautious) | Overextended Chase (High Risk) | 45.87 | 39.13 | 54.86 | 1.3:1 | overheated/mom_decay/bear_div/low_rr |
| 10 | **NASDAQ:VSAT** | NASDAQ:VSAT | **54.8** | 🟢A | 35 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 74.56 | 67.85 | 84.4 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 11 | **NYSE:JHG** | NYSE:JHG | **54.4** | ⚪C | 57.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 51.03 | 51.6 | 52.02 | -1.7:1 | mom_decay/near_resist/low_rr |
| 12 | **NASDAQ:ERIC** | NASDAQ:ERIC | **54.1** | 🟢A | 33.2 | 73 | WARN Long (Cautious) | Trend Continuation | 13.5 | 12.95 | 14.3 | 1.5:1 | bull_trap/near_resist |
| 13 | **NYSE:COHR** | NYSE:COHR | **53.7** | 🟢A | 31.9 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 377.57 | 334.53 | 440.7 | 1.5:1 | mom_decay/low_rr |
| 14 | **NYSE:P** | NYSE:P | **53.1** | ⚪C | 53.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 85.89 | 76.56 | 97.84 | 1.3:1 | overheated/mom_decay/near_resist |
| 15 | **NASDAQ:GOOGL** | NASDAQ:GOOGL | **52.7** | 🟢A | 34.5 | 80 | GREEN Long (Strong) | Pullback Buy (Near Support) | 377.23 | 363.06 | 402.88 | 1.8:1 | mom_decay/bear_div |
| 16 | **NYSE:IRM** | NYSE:IRM | **52.6** | ⚪C | 51 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 124.56 | 119.38 | 133.54 | 1.7:1 | mom_decay |
| 17 | **NYSE:RIO** | NYSE:RIO | **51.2** | ⚪C | 42.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 104.23 | 99.38 | 111.34 | 1.5:1 | mom_decay/chop |
| 18 | **NYSE:LTC** | NYSE:LTC | **50.4** | ⚪C | 42.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 38.6 | 37.23 | 40.21 | 1.2:1 | near_resist/chop/low_rr |
| 19 | **NASDAQ:INCY** | NASDAQ:INCY | **50.3** | 🟢A | 30.9 | 67 | GREEN Long (Mid) | Breakout (Squeeze Release) | 97.45 | 92.44 | 103.72 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 20 | **NYSE:NVT** | NYSE:NVT | **50** | 🔵B | 27.7 | 71 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 164.66 | 154.04 | 180.24 | 1.5:1 | mom_decay/bear_div/low_rr |
| 21 | **NASDAQ:AVGO** | NASDAQ:AVGO | **49.5** | 🔵B | 26.2 | 72 | GREEN Long (Mid) | Breakout (Squeeze Release) | 415.38 | 384.32 | 455.55 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 22 | **NASDAQ:IREN** | NASDAQ:IREN | **48.8** | 🔵B | 26.4 | 70 | GREEN Long (Mid) | Trend Continuation | 56.83 | 48.05 | 69.71 | 1.5:1 | mom_decay/near_resist/low_rr |
| 23 | **NASDAQ:CRDO** | NASDAQ:CRDO | **48.7** | 🟢A | 33.9 | 71 | GREEN Long (Mid) | Overextended Chase (High Risk) | 218.41 | 190.56 | 255.54 | 1.3:1 | overheated/mom_decay/near_resist |
| 24 | **NASDAQ:INTC** | NASDAQ:INTC | **48.6** | 🟢A | 37.6 | 65 | GREEN Long (Mid) | Overextended Chase (High Risk) | 119.84 | 104.56 | 140.21 | 1.3:1 | overheated/mom_decay/low_rr |
| 25 | **NASDAQ:NVDA** | NASDAQ:NVDA | **48** | 🔵B | 22.3 | 74 | GREEN Long (Mid) | Trend Continuation | 215.33 | 203.06 | 233.33 | 1.5:1 | mom_decay/near_resist/low_rr |
| 26 | **CBOE:CBOE** | CBOE:CBOE | **47.7** | 🔵B | 29.9 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 357.35 | 341.27 | 380.94 | 1.5:1 | mom_decay/near_resist/low_rr |
| 27 | **NASDAQ:RMBS** | NASDAQ:RMBS | **47.2** | ⚪C | 34.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 142.98 | 129.47 | 162.8 | 1.5:1 | low_rr |
| 28 | **NYSE:PACS** | NYSE:PACS | **46.2** | ⚪C | 39 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 37.18 | 32.77 | 42.73 | 1.3:1 | chop |
| 29 | **NYSE:SPNT** | NYSE:SPNT | **46.2** | ⚪C | 35.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 23.39 | 22.02 | 25.13 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 30 | **NYSE:WT** | NYSE:WT | **45.4** | ⚪C | 40.3 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 18.79 | 17.63 | 20.53 | 1.5:1 | mom_decay/bear_div |
| 31 | **NASDAQ:TLN** | NASDAQ:TLN | **44.4** | ⚪C | 40.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 366.86 | 332.23 | 412.67 | 1.3:1 | mom_decay/near_resist/chop |
| 32 | **NASDAQ:MPWR** | NASDAQ:MPWR | **44.4** | 🔵B | 29.4 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1565.96 | 1440.37 | 1739.25 | 1.4:1 | mom_decay/near_resist/bear_div/low_rr |
| 33 | **NASDAQ:WDC** | NASDAQ:WDC | **44.3** | 🔵B | 25.5 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 484.28 | 438.52 | 551.4 | 1.5:1 | mom_decay/bear_div/low_rr |
| 34 | **OTC:ABBNY** | OTC:ABBNY | **43.9** | ⚪C | 31.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 106.39 | 101.76 | 113.18 | 1.5:1 | mom_decay/near_resist/low_rr |
| 35 | **NASDAQ:NWBI** | NASDAQ:NWBI | **42.5** | ⚪C | 29.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 13.97 | 13.61 | 14.49 | 1.4:1 | mom_decay/near_resist/low_rr |
| 36 | **NYSE:FN** | NYSE:FN | **41.5** | ⚪C | 25.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 705.97 | 607.57 | 837.59 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 37 | **NASDAQ:MTSI** | NASDAQ:MTSI | **40.9** | 🔵B | 16.1 | 78 | GREEN Long (Strong) | Overextended Chase (High Risk) | 385.98 | 351.82 | 431.53 | 1.3:1 | overheated/fake_break/bull_trap/near_resist/low_rr |
| 38 | **NASDAQ:BGC** | NASDAQ:BGC | **40.8** | ⚪C | 30.4 | 44 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 11.22 | 10.59 | 12.03 | 1.3:1 | mom_decay/near_resist/chop/bear_div |
| 39 | **NYSE:HPE** | NYSE:HPE | **40** | ⚪C | 33.3 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 37.58 | 35.16 | 40.81 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 40 | **OTC:SMERY** | OTC:SMERY | **39.9** | ⚪C | 33.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 198.72 | 186.42 | 217.08 | 1.5:1 | mom_decay/chop |
| 41 | **NYSE:DKS** | NYSE:DKS | **39.4** | 🔵B | 21 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 227.77 | 214.13 | 248.35 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 42 | **NASDAQ:MRVL** | NASDAQ:MRVL | **38.7** | 🔵B | 17.1 | 71 | GREEN Long (Mid) | Overextended Chase (High Risk) | 196.33 | 177.19 | 221.85 | 1.3:1 | overheated/fake_break/bull_trap/near_resist/bear_div |
| 43 | **NYSE:PFS** | NYSE:PFS | **37.2** | ⚪C | 28.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 21.72 | 21.17 | 22.93 | 2.2:1 | mom_decay/near_resist |
| 44 | **NYSE:NOK** | NYSE:NOK | **36.8** | ⚪C | 28 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 15.47 | 14.01 | 17.42 | 1.3:1 | overheated/fake_break/bull_trap/near_resist/bear_div |
| 45 | **NASDAQ:PRDO** | NASDAQ:PRDO | **36.3** | ⚪C | 25.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 33.47 | 31.74 | 36.22 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 46 | **NASDAQ:SEDG** | NASDAQ:SEDG | **36.2** | ⚪C | 23.7 | 55 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 61.95 | 52.94 | 73.97 | 1.3:1 | overheated/fake_break/near_resist/low_rr |
| 47 | **NYSE:HG** | NYSE:HG | **35.3** | ⚪C | 21.5 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 31.08 | 29.72 | 33.38 | 1.7:1 | near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **61.1** |
| Tech Score | 34.9 (Trend Follow (HH/HL Intact)) |
| News Score | 88 → GREEN Long (Strong) |
| Current Price | 194.05 |
| **Entry** | **194.05** |
| **Stop** | **171.35** (ATR × 1.5) |
| **Target** | **227.35** |
| R/R | 1.5:1 |
| RSI | 58.7 |
| ATR% | 7.8% |
| Dist EMA20 | 6.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay bear_div low_rr |

### 2. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **59.3** |
| Tech Score | 37.8 (Trend Follow (HH/HL Intact)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 751 |
| **Entry** | **751** |
| **Stop** | **660.88** (ATR × 1.5) |
| **Target** | **883.18** |
| R/R | 1.5:1 |
| RSI | 65.1 |
| ATR% | 8% |
| Dist EMA20 | 11.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay low_rr |

### 3. NYSE:SM (NYSE:SM)

| Field | Value |
|-------|-------|
| Combined Score | **56.6** |
| Tech Score | 41.3 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 33.77 |
| **Entry** | **33.77** |
| **Stop** | **31.44** (ATR × 1.5) |
| **Target** | **37.19** |
| R/R | 1.5:1 |
| RSI | 62.7 |
| ATR% | 4.6% |
| Dist EMA20 | 6.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop |

### 4. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **56** |
| Tech Score | 43.6 (Breakout (Squeeze Release)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 404.52 |
| **Entry** | **405.73** |
| **Stop** | **376.85** (ATR × 1.8) |
| **Target** | **442.95** |
| R/R | 1.3:1 |
| RSI | 55.5 |
| ATR% | 3.8% |
| Dist EMA20 | 1.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist low_rr |

### 5. NASDAQ:AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **55.7** |
| Tech Score | 35.1 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 432.16 |
| **Entry** | **432.16** |
| **Stop** | **402.34** (ATR × 1.5) |
| **Target** | **475.89** |
| R/R | 1.5:1 |
| RSI | 57.9 |
| ATR% | 4.6% |
| Dist EMA20 | 3.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist chop |

### 6. NASDAQ:APLD (NASDAQ:APLD)

| Field | Value |
|-------|-------|
| Combined Score | **55.2** |
| Tech Score | 33.4 (Overextended Chase (High Risk)) |
| News Score | 88 → WARN Long (Cautious) |
| Current Price | 45.87 |
| **Entry** | **45.87** |
| **Stop** | **39.13** (ATR × 1.5) |
| **Target** | **54.86** |
| R/R | 1.3:1 |
| RSI | 60.8 |
| ATR% | 9.8% |
| Dist EMA20 | 14.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated mom_decay bear_div low_rr |

### 7. NASDAQ:VSAT (NASDAQ:VSAT)

| Field | Value |
|-------|-------|
| Combined Score | **54.8** |
| Tech Score | 35 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 74.56 |
| **Entry** | **74.56** |
| **Stop** | **67.85** (ATR × 1.5) |
| **Target** | **84.4** |
| R/R | 1.5:1 |
| RSI | 62.2 |
| ATR% | 6% |
| Dist EMA20 | 8.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 8. NASDAQ:ERIC (NASDAQ:ERIC)

| Field | Value |
|-------|-------|
| Combined Score | **54.1** |
| Tech Score | 33.2 (Trend Continuation) |
| News Score | 73 → WARN Long (Cautious) |
| Current Price | 13.5 |
| **Entry** | **13.5** |
| **Stop** | **12.95** (ATR × 1.5) |
| **Target** | **14.3** |
| R/R | 1.5:1 |
| RSI | 72.3 |
| ATR% | 2.7% |
| Dist EMA20 | 8.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | bull_trap near_resist |

### 9. NYSE:COHR (NYSE:COHR)

| Field | Value |
|-------|-------|
| Combined Score | **53.7** |
| Tech Score | 31.9 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 377.57 |
| **Entry** | **377.57** |
| **Stop** | **334.53** (ATR × 1.5) |
| **Target** | **440.7** |
| R/R | 1.5:1 |
| RSI | 59.7 |
| ATR% | 7.6% |
| Dist EMA20 | 6.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 10. NASDAQ:GOOGL (NASDAQ:GOOGL)

| Field | Value |
|-------|-------|
| Combined Score | **52.7** |
| Tech Score | 34.5 (Pullback Buy (Near Support)) |
| News Score | 80 → GREEN Long (Strong) |
| Current Price | 382.97 |
| **Entry** | **377.23** |
| **Stop** | **363.06** (ATR × 2) |
| **Target** | **402.88** |
| R/R | 1.8:1 |
| RSI | 57.5 |
| ATR% | 2.6% |
| Dist EMA20 | 0.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay bear_div |

### 11. NASDAQ:INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **50.3** |
| Tech Score | 30.9 (Breakout (Squeeze Release)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 97.16 |
| **Entry** | **97.45** |
| **Stop** | **92.44** (ATR × 1.8) |
| **Target** | **103.72** |
| R/R | 1.3:1 |
| RSI | 50.7 |
| ATR% | 2.7% |
| Dist EMA20 | 0.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist chop bear_div low_rr |

### 12. NASDAQ:CRDO (NASDAQ:CRDO)

| Field | Value |
|-------|-------|
| Combined Score | **48.7** |
| Tech Score | 33.9 (Overextended Chase (High Risk)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 218.41 |
| **Entry** | **218.41** |
| **Stop** | **190.56** (ATR × 1.5) |
| **Target** | **255.54** |
| R/R | 1.3:1 |
| RSI | 64.6 |
| ATR% | 8.5% |
| Dist EMA20 | 20% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay near_resist |

### 13. NASDAQ:INTC (NASDAQ:INTC)

| Field | Value |
|-------|-------|
| Combined Score | **48.6** |
| Tech Score | 37.6 (Overextended Chase (High Risk)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 119.84 |
| **Entry** | **119.84** |
| **Stop** | **104.56** (ATR × 1.5) |
| **Target** | **140.21** |
| R/R | 1.3:1 |
| RSI | 68.2 |
| ATR% | 8.5% |
| Dist EMA20 | 12.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated mom_decay low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/24 23:11:33*