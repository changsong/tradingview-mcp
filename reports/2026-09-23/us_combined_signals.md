# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-23　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:SPNT** | NYSE:SPNT | **66.6** | 🟢A | 56.7 | 69 | GREEN Long (Mid) | Breakout (Squeeze Release) | 25.25 | 24.13 | 26.62 | 1.2:1 | near_resist/chop/low_rr |
| 2 | **NASDAQ:CRWD** | NASDAQ:CRWD | **61.4** | 🟢A | 44.6 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 249.35 | 229.15 | 278.97 | 1.5:1 | fake_break/near_resist |
| 3 | **NASDAQ:MU** | NASDAQ:MU | **60.7** | 🟢A | 42.8 | 75 | GREEN Long (Strong) | Trend Continuation | 1043.96 | 978.19 | 1140.42 | 1.5:1 | chop/low_rr |
| 4 | **NYSE:DT** | NYSE:DT | **60.3** | 🟢A | 50.2 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 56.4 | 53.69 | 60.37 | 1.5:1 | near_resist/bear_div |
| 5 | **NASDAQ:QCOM** | NASDAQ:QCOM | **57.8** | 🟢A | 51.6 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 191.32 | 174.81 | 213.65 | 1.4:1 | near_resist/low_rr |
| 6 | **NYSE:HGTY** | NYSE:HGTY | **56.1** | ⚪C | 45.9 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.63 | 12.68 | 14.85 | 1.3:1 | mom_decay/near_resist/low_rr |
| 7 | **AMEX:CET** | AMEX:CET | **55.4** | ⚪C | 59 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 55.89 | 55.15 | 58.33 | 3.3:1 | fake_break/near_resist |
| 8 | **NASDAQ:MSFT** | NASDAQ:MSFT | **55.3** | 🟢A | 42.8 | 74 | GREEN Long (Mid) | Pullback Buy (Near Support) | 494.09 | 481.55 | 521.67 | 2.2:1 | mom_decay/near_resist/low_rr |
| 9 | **NYSE:LLY** | NYSE:LLY | **55** | 🟢A | 44.3 | 71 | GREEN Long (Mid) | Reversal (MACD Cross) | 1164.89 | 1126.45 | 1216.15 | 1.3:1 | near_resist/chop |
| 10 | **NYSE:ANET** | NYSE:ANET | **54.7** | 🟢A | 37.5 | 68 | GREEN Long (Mid) | Breakout (Squeeze Release) | 206.04 | 191 | 225.45 | 1.3:1 | fake_break/near_resist/chop/low_rr |
| 11 | **NYSE:P** | NYSE:P | **53.7** | 🟢A | 40.2 | 74 | WARN Long (Cautious) | Overextended Chase (High Risk) | 113.66 | 105.48 | 124.57 | 1.3:1 | overheated/chop/low_rr |
| 12 | **NASDAQ:LITE** | NASDAQ:LITE | **53.4** | 🔵B | 26 | 82 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 954.49 | 861.43 | 1090.98 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 13 | **NYSE:LTC** | NYSE:LTC | **52.9** | ⚪C | 41.2 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 42.88 | 41.4 | 45.05 | 1.5:1 | near_resist/low_rr |
| 14 | **NASDAQ:NBIS** | NASDAQ:NBIS | **52.4** | ⚪C | 41 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 232.8 | 209.75 | 266.6 | 1.5:1 | near_resist/chop/low_rr |
| 15 | **NYSE:ASX** | NYSE:ASX | **50.4** | 🟢A | 34.3 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 43.73 | 41.17 | 47.48 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 16 | **NYSE:BAP** | NYSE:BAP | **49.9** | ⚪C | 41.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 391.14 | 373.83 | 412.39 | 1.2:1 | fake_break/near_resist/chop/low_rr |
| 17 | **NASDAQ:PLTR** | NASDAQ:PLTR | **48.5** | 🟢A | 36.2 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 180.34 | 168.44 | 197.74 | 1.5:1 | mom_decay/near_resist/low_rr |
| 18 | **NASDAQ:VSAT** | NASDAQ:VSAT | **48.1** | ⚪C | 36.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 76.38 | 70.31 | 85.29 | 1.5:1 | chop/low_rr |
| 19 | **NASDAQ:MRVL** | NASDAQ:MRVL | **47.9** | ⚪C | 39.5 | 48 | NEUTRAL No Trade (Neutral) | Trend Continuation | 257.38 | 238.08 | 285.69 | 1.5:1 | chop |
| 20 | **NASDAQ:INCY** | NASDAQ:INCY | **47** | ⚪C | 39 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 122.78 | 118.17 | 131.13 | 1.8:1 | mom_decay/chop |
| 21 | **NASDAQ:HOOD** | NASDAQ:HOOD | **45.9** | ⚪C | 39.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 121.45 | 108.5 | 138.1 | 1.3:1 | near_resist/chop/low_rr |
| 22 | **NASDAQ:AMD** | NASDAQ:AMD | **45.7** | 🔵B | 29.5 | 70 | WARN Long (Cautious) | Overextended Chase (High Risk) | 615.52 | 577.67 | 665.99 | 1.3:1 | overheated/bull_trap/near_resist/chop |
| 23 | **NASDAQ:HRMY** | NASDAQ:HRMY | **45** | ⚪C | 41.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.47 | 39.49 | 44.71 | 1.6:1 | mom_decay/near_resist/low_rr |
| 24 | **NYSE:ETN** | NYSE:ETN | **44.7** | ⚪C | 27.5 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 435.43 | 411.92 | 469.92 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 25 | **NASDAQ:STX** | NASDAQ:STX | **43.8** | ⚪C | 35.3 | 44 | NEUTRAL No Trade (Neutral) | Trend Continuation | 877.33 | 804.95 | 983.48 | 1.5:1 | chop/low_rr |
| 26 | **NASDAQ:AAPL** | NASDAQ:AAPL | **43.3** | 🔵B | 17.1 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 338.98 | 327.79 | 355.39 | 1.5:1 | fake_break/near_resist/chop/bear_div/low_rr |
| 27 | **NYSE:DELL** | NYSE:DELL | **42.9** | 🔵B | 19.1 | 66 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 575.31 | 519.22 | 657.58 | 1.5:1 | fake_break/near_resist/bear_div |
| 28 | **NASDAQ:TEM** | NASDAQ:TEM | **42.4** | 🔵B | 26.6 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 78.03 | 71.01 | 87.39 | 1.3:1 | overheated/fake_break/near_resist/low_rr |
| 29 | **NYSE:HPE** | NYSE:HPE | **42** | 🔵B | 21.6 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 61.75 | 55.36 | 71.12 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 30 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 31 | **NASDAQ:NBN** | NASDAQ:NBN | **41.4** | ⚪C | 35.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 130.51 | 124.81 | 140.19 | 1.7:1 | near_resist/chop/low_rr |
| 32 | **NASDAQ:PANW** | NASDAQ:PANW | **41.3** | ⚪C | 25.1 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 371.76 | 342.21 | 415.11 | 1.5:1 | chop/low_rr |
| 33 | **OTC:SMTGY** | OTC:SMTGY | **40** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.72 | 6.35 | 7.27 | 1.5:1 | near_resist/chop/low_rr |
| 34 | **NYSE:BE** | NYSE:BE | **39.9** | 🔵B | 18.5 | 72 | GREEN Long (Mid) | Pullback Buy (Near Support) | 268.8 | 235.78 | 310 | 1.2:1 | chop/bear_div |
| 35 | **NASDAQ:BGC** | NASDAQ:BGC | **38** | ⚪C | 21.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 12.49 | 11.8 | 13.35 | 1.2:1 | fake_break/mom_decay/near_resist/chop/bear_div/low_rr |
| 36 | **NASDAQ:INTC** | NASDAQ:INTC | **36.2** | 🔵B | 16.3 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 121.78 | 111.92 | 134.93 | 1.3:1 | overheated/bull_trap/near_resist/chop/low_rr |
| 37 | **OTC:HTHIY** | OTC:HTHIY | **34.5** | ⚪C | 24.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 35.38 | 34.05 | 37.79 | 1.8:1 | fake_break/near_resist/chop/low_rr |
| 38 | **NYSE:C** | NYSE:C | **18.2** | ⚪C | 30.3 | 0 | No data | Pullback Buy (Near Support) | 133.02 | 126.95 | 143.15 | 1.7:1 | mom_decay/near_resist/chop/low_rr |
| 39 | **NASDAQ:AMZN** | NASDAQ:AMZN | **16.5** | ⚪C | 27.5 | 0 | No data | Pullback Buy (Near Support) | 254.57 | 247.6 | 269.3 | 2.1:1 | mom_decay/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:SPNT (NYSE:SPNT)

| Field | Value |
|-------|-------|
| Combined Score | **66.6** |
| Tech Score | 56.7 (Breakout (Squeeze Release)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 25.17 |
| **Entry** | **25.25** |
| **Stop** | **24.13** (ATR × 1.8) |
| **Target** | **26.62** |
| R/R | 1.2:1 |
| RSI | 64.1 |
| ATR% | 2.3% |
| Dist EMA20 | 3.2% |
| Chase OK | NO |
| MTF Alignment | 3/3 (100%) |
| Risk Flags | near_resist chop low_rr |

### 2. NASDAQ:CRWD (NASDAQ:CRWD)

| Field | Value |
|-------|-------|
| Combined Score | **61.4** |
| Tech Score | 44.6 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 249.35 |
| **Entry** | **249.35** |
| **Stop** | **229.15** (ATR × 1.5) |
| **Target** | **278.97** |
| R/R | 1.5:1 |
| RSI | 64.6 |
| ATR% | 5.4% |
| Dist EMA20 | 11.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist |

### 3. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **60.7** |
| Tech Score | 42.8 (Trend Continuation) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 1043.96 |
| **Entry** | **1043.96** |
| **Stop** | **978.19** (ATR × 1.5) |
| **Target** | **1140.42** |
| R/R | 1.5:1 |
| RSI | 61.2 |
| ATR% | 4.2% |
| Dist EMA20 | 7.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

### 4. NYSE:DT (NYSE:DT)

| Field | Value |
|-------|-------|
| Combined Score | **60.3** |
| Tech Score | 50.2 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 56.4 |
| **Entry** | **56.4** |
| **Stop** | **53.69** (ATR × 1.5) |
| **Target** | **60.37** |
| R/R | 1.5:1 |
| RSI | 66.4 |
| ATR% | 3.2% |
| Dist EMA20 | 6.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist bear_div |

### 5. NASDAQ:QCOM (NASDAQ:QCOM)

| Field | Value |
|-------|-------|
| Combined Score | **57.8** |
| Tech Score | 51.6 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 194.23 |
| **Entry** | **191.32** |
| **Stop** | **174.81** (ATR × 2) |
| **Target** | **213.65** |
| R/R | 1.4:1 |
| RSI | 65.4 |
| ATR% | 5% |
| Dist EMA20 | 9.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist low_rr |

### 6. NASDAQ:MSFT (NASDAQ:MSFT)

| Field | Value |
|-------|-------|
| Combined Score | **55.3** |
| Tech Score | 42.8 (Pullback Buy (Near Support)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 501.61 |
| **Entry** | **494.09** |
| **Stop** | **481.55** (ATR × 2) |
| **Target** | **521.67** |
| R/R | 2.2:1 |
| RSI | 57.1 |
| ATR% | 2% |
| Dist EMA20 | 1.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 7. NYSE:LLY (NYSE:LLY)

| Field | Value |
|-------|-------|
| Combined Score | **55** |
| Tech Score | 44.3 (Reversal (MACD Cross)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 1164.89 |
| **Entry** | **1164.89** |
| **Stop** | **1126.45** (ATR × 1.5) |
| **Target** | **1216.15** |
| R/R | 1.3:1 |
| RSI | 50.9 |
| ATR% | 2.2% |
| Dist EMA20 | 0.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop |

### 8. NYSE:ANET (NYSE:ANET)

| Field | Value |
|-------|-------|
| Combined Score | **54.7** |
| Tech Score | 37.5 (Breakout (Squeeze Release)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 205.42 |
| **Entry** | **206.04** |
| **Stop** | **191** (ATR × 1.8) |
| **Target** | **225.45** |
| R/R | 1.3:1 |
| RSI | 59.8 |
| ATR% | 3.9% |
| Dist EMA20 | 5.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop low_rr |

### 9. NYSE:P (NYSE:P)

| Field | Value |
|-------|-------|
| Combined Score | **53.7** |
| Tech Score | 40.2 (Overextended Chase (High Risk)) |
| News Score | 74 → WARN Long (Cautious) |
| Current Price | 113.66 |
| **Entry** | **113.66** |
| **Stop** | **105.48** (ATR × 1.5) |
| **Target** | **124.57** |
| R/R | 1.3:1 |
| RSI | 65.4 |
| ATR% | 4.8% |
| Dist EMA20 | 13.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated chop low_rr |

### 10. NYSE:ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **50.4** |
| Tech Score | 34.3 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 43.73 |
| **Entry** | **43.73** |
| **Stop** | **41.17** (ATR × 1.5) |
| **Target** | **47.48** |
| R/R | 1.5:1 |
| RSI | 66.2 |
| ATR% | 3.9% |
| Dist EMA20 | 11.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop low_rr |

### 11. NASDAQ:PLTR (NASDAQ:PLTR)

| Field | Value |
|-------|-------|
| Combined Score | **48.5** |
| Tech Score | 36.2 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 183.09 |
| **Entry** | **180.34** |
| **Stop** | **168.44** (ATR × 2) |
| **Target** | **197.74** |
| R/R | 1.5:1 |
| RSI | 61.1 |
| ATR% | 4% |
| Dist EMA20 | 5.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/23 21:00:05*