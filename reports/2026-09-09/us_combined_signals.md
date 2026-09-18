# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-09　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:MU** | NASDAQ:MU | **66.6** | 🟢A | 53.3 | 74 | GREEN Long (Mid) | Breakout (Squeeze Release) | 1003.26 | 921.04 | 1110.29 | 1.3:1 | near_resist/chop/low_rr |
| 2 | **NYSE:FCX** | NYSE:FCX | **62.7** | 🟢A | 44.8 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 76.62 | 71.68 | 83.87 | 1.5:1 | mom_decay/low_rr |
| 3 | **NYSE:LTC** | NYSE:LTC | **59.7** | 🟢A | 43.8 | 71 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 42.01 | 40.94 | 43.58 | 1.5:1 | fake_break/near_resist/low_rr |
| 4 | **NASDAQ:SNDK** | NASDAQ:SNDK | **55.9** | 🟢A | 34.1 | 76 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1737.99 | 1584.18 | 1963.58 | 1.5:1 | chop/low_rr |
| 5 | **NYSE:TSM** | NYSE:TSM | **55.3** | ⚪C | 45.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 439 | 423.85 | 461.21 | 1.5:1 | near_resist/chop/low_rr |
| 6 | **NYSE:HGTY** | NYSE:HGTY | **54.1** | ⚪C | 48.5 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 13.41 | 12.53 | 14.54 | 1.3:1 | mom_decay/near_resist/low_rr |
| 7 | **NYSE:WT** | NYSE:WT | **54** | ⚪C | 54 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 24.05 | 22.42 | 26.42 | 1.5:1 | mom_decay |
| 8 | **NYSE:RRC** | NYSE:RRC | **53.4** | ⚪C | 49.7 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 41.26 | 39.88 | 43.9 | 1.9:1 | near_resist |
| 9 | **NYSE:RIO** | NYSE:RIO | **53.3** | ⚪C | 55.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 102.27 | 99.26 | 108.4 | 2:1 | mom_decay/near_resist |
| 10 | **NYSE:AR** | NYSE:AR | **52.1** | 🟢A | 33.2 | 68 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 39.08 | 37.61 | 41.23 | 1.5:1 | near_resist/low_rr |
| 11 | **NYSE:HG** | NYSE:HG | **51.9** | ⚪C | 39.5 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 34.97 | 33.43 | 36.88 | 1.2:1 | mom_decay/near_resist/chop |
| 12 | **NYSE:CRC** | NYSE:CRC | **51.7** | ⚪C | 41.2 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 55.74 | 52.97 | 59.18 | 1.2:1 | near_resist/chop/low_rr |
| 13 | **NASDAQ:AMD** | NASDAQ:AMD | **51.4** | ⚪C | 52.4 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 505.74 | 477.67 | 543.16 | 1.3:1 | near_resist/chop |
| 14 | **NASDAQ:ADI** | NASDAQ:ADI | **51.2** | 🟢A | 38.7 | 70 | GREEN Long (Mid) | Pullback Buy (Near Support) | 357.75 | 343.59 | 382.81 | 1.8:1 | mom_decay |
| 15 | **NYSE:ASX** | NYSE:ASX | **51** | 🟢A | 43.7 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 39.19 | 37 | 42.58 | 1.5:1 | near_resist/chop/low_rr |
| 16 | **NASDAQ:LITE** | NASDAQ:LITE | **51** | ⚪C | 43.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 981.47 | 864.05 | 1137.55 | 1.3:1 | near_resist/chop/low_rr |
| 17 | **NYSE:CF** | NYSE:CF | **49.9** | ⚪C | 41.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 134.33 | 125.87 | 146.74 | 1.5:1 | near_resist/low_rr |
| 18 | **NASDAQ:PRGS** | NASDAQ:PRGS | **49.7** | ⚪C | 41.2 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 42.3 | 39.06 | 46.5 | 1.3:1 | mom_decay/near_resist/low_rr |
| 19 | **NYSE:ELF** | NYSE:ELF | **49.7** | 🟢A | 38.9 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 102.75 | 94.92 | 113.7 | 1.4:1 | mom_decay/bear_div |
| 20 | **NYSE:MS** | NYSE:MS | **49.7** | ⚪C | 38.5 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 216.89 | 207.68 | 228.13 | 1.2:1 | near_resist/chop/low_rr |
| 21 | **NASDAQ:NWBI** | NASDAQ:NWBI | **49.5** | ⚪C | 49.1 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 15.5 | 15.17 | 15.93 | 1.3:1 | near_resist/chop |
| 22 | **NYSE:SPNT** | NYSE:SPNT | **49.5** | ⚪C | 49.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 23.79 | 23.14 | 25.16 | 2.1:1 | near_resist/chop |
| 23 | **NASDAQ:HOOD** | NASDAQ:HOOD | **49** | 🟢A | 41.6 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 115.58 | 102.09 | 132.59 | 1.3:1 | near_resist/low_rr |
| 24 | **NYSE:BAP** | NYSE:BAP | **48.5** | ⚪C | 39.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 378.37 | 360.94 | 399.87 | 1.2:1 | near_resist/chop |
| 25 | **NYSE:AGM** | NYSE:AGM | **47.9** | ⚪C | 38.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 226.09 | 217.61 | 238.52 | 1.5:1 | mom_decay |
| 26 | **NYSE:J** | NYSE:J | **47.7** | ⚪C | 40.9 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 142.11 | 137.92 | 150.62 | 2:1 | mom_decay/near_resist |
| 27 | **NASDAQ:CBRS** | NASDAQ:CBRS | **46.8** | ⚪C | 44.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 199.77 | 179.39 | 226.94 | 1.3:1 | chop |
| 28 | **NASDAQ:VSAT** | NASDAQ:VSAT | **46.8** | ⚪C | 33.6 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 77.75 | 72.39 | 85.62 | 1.5:1 | chop/low_rr |
| 29 | **NYSE:AJG** | NYSE:AJG | **46.6** | ⚪C | 39.7 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 247.68 | 236.36 | 266.54 | 1.7:1 | mom_decay/near_resist |
| 30 | **NASDAQ:OSBC** | NASDAQ:OSBC | **45.6** | ⚪C | 42.7 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 25.15 | 24.71 | 26.35 | 2.7:1 | mom_decay/near_resist/chop/low_rr |
| 31 | **OTC:SBGSY** | OTC:SBGSY | **45.4** | ⚪C | 42.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 68.03 | 66.45 | 71.69 | 2.3:1 | mom_decay/near_resist/chop |
| 32 | **NASDAQ:NBIS** | NASDAQ:NBIS | **45.2** | ⚪C | 33.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 243.88 | 220.83 | 277.68 | 1.5:1 | chop/low_rr |
| 33 | **NYSE:HPE** | NYSE:HPE | **44.9** | ⚪C | 33.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 56.03 | 51.41 | 62.81 | 1.5:1 | mom_decay/chop |
| 34 | **NYSE:WPM** | NYSE:WPM | **44.6** | ⚪C | 27.3 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 155.11 | 144.87 | 170.12 | 1.5:1 | mom_decay/near_resist/low_rr |
| 35 | **NASDAQ:NVDA** | NASDAQ:NVDA | **44** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No relevant news) | Trend Follow (HH/HL Intact) | 225.73 | 213.88 | 243.11 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 36 | **NYSE:SMP** | NYSE:SMP | **43.9** | ⚪C | 39.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.87 | 37.17 | 41.75 | 1.7:1 | near_resist/chop/low_rr |
| 37 | **NASDAQ:KRYS** | NASDAQ:KRYS | **43.6** | ⚪C | 37.4 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 345.99 | 327.37 | 375.15 | 1.6:1 | near_resist/chop/low_rr |
| 38 | **NASDAQ:ASML** | NASDAQ:ASML | **43.2** | ⚪C | 38.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 1738.38 | 1673.08 | 1856.62 | 1.8:1 | mom_decay/chop |
| 39 | **NYSE:LAR** | NYSE:LAR | **43** | ⚪C | 30 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 6.72 | 6 | 7.67 | 1.3:1 | chop/low_rr |
| 40 | **NYSE:SM** | NYSE:SM | **42.7** | ⚪C | 29.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 37.76 | 35.61 | 40.92 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 41 | **NYSE:PWR** | NYSE:PWR | **42.3** | 🔵B | 23.8 | 70 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 639.05 | 604.54 | 685.06 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 42 | **NASDAQ:PGY** | NASDAQ:PGY | **42.3** | 🔵B | 20.2 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 22.08 | 20.26 | 24.75 | 1.5:1 | mom_decay/near_resist/low_rr |
| 43 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 44 | **NYSE:NEM** | NYSE:NEM | **41.2** | 🔵B | 20.3 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 127.09 | 119.66 | 137.99 | 1.5:1 | mom_decay/near_resist/low_rr |
| 45 | **NASDAQ:STX** | NASDAQ:STX | **40.4** | ⚪C | 25.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 904.38 | 832.48 | 1009.83 | 1.5:1 | near_resist/chop/low_rr |
| 46 | **NYSE:SCCO** | NYSE:SCCO | **38.9** | ⚪C | 23.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 208.56 | 194.17 | 229.67 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 47 | **NYSE:JCI** | NYSE:JCI | **38.8** | ⚪C | 31.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 144.17 | 140.22 | 152.52 | 2.1:1 | mom_decay/near_resist/chop/low_rr |
| 48 | **NASDAQ:RELY** | NASDAQ:RELY | **38.8** | 🔵B | 17.3 | 71 | WARN Long (Cautious) | Pullback Buy (Near Support) | 24.46 | 22.55 | 27.11 | 1.4:1 | mom_decay/near_resist/bear_div/low_rr |
| 49 | **NASDAQ:BGC** | NASDAQ:BGC | **38.7** | ⚪C | 31.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 11.79 | 11.18 | 12.76 | 1.6:1 | near_resist/chop/low_rr |
| 50 | **NYSE:OKLO** | NYSE:OKLO | **38.7** | 🔵B | 21.1 | 65 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 43.31 | 39.15 | 48.85 | 1.3:1 | chop/low_rr |
| 51 | **NYSE:NEXA** | NYSE:NEXA | **38.5** | ⚪C | 30.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 13.91 | 12.4 | 15.84 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 52 | **NASDAQ:RKLB** | NASDAQ:RKLB | **37.2** | 🔵B | 17.3 | 67 | GREEN Long (Mid) | Range / No Edge | 65.87 | 61.32 | 71.93 | 1.3:1 | near_resist |
| 53 | **NASDAQ:AAPL** | NASDAQ:AAPL | **37** | ⚪C | 27.7 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 311.48 | 301.67 | 330.77 | 2:1 | near_resist/chop/low_rr |
| 54 | **NYSE:TT** | NYSE:TT | **36.1** | ⚪C | 26.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 439.31 | 428.16 | 463.84 | 2.2:1 | mom_decay/near_resist |
| 55 | **NYSE:DTM** | NYSE:DTM | **33.1** | ⚪C | 21.8 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 129.17 | 123.53 | 138.75 | 1.7:1 | near_resist |
| 56 | **NYSE:WLK** | NYSE:WLK | **32.3** | ⚪C | 20.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 73.63 | 70.27 | 79.23 | 1.7:1 | mom_decay/near_resist/chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **66.6** |
| Tech Score | 53.3 (Breakout (Squeeze Release)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 1000.26 |
| **Entry** | **1003.26** |
| **Stop** | **921.04** (ATR × 1.8) |
| **Target** | **1110.29** |
| R/R | 1.3:1 |
| RSI | 57.7 |
| ATR% | 4.4% |
| Dist EMA20 | 5.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 2. NYSE:FCX (NYSE:FCX)

| Field | Value |
|-------|-------|
| Combined Score | **62.7** |
| Tech Score | 44.8 (Trend Follow (HH/HL Intact)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 76.62 |
| **Entry** | **76.62** |
| **Stop** | **71.68** (ATR × 1.5) |
| **Target** | **83.87** |
| R/R | 1.5:1 |
| RSI | 60.5 |
| ATR% | 4.3% |
| Dist EMA20 | 5.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

### 3. NYSE:LTC (NYSE:LTC)

| Field | Value |
|-------|-------|
| Combined Score | **59.7** |
| Tech Score | 43.8 (Trend Follow (HH/HL Intact)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 42.01 |
| **Entry** | **42.01** |
| **Stop** | **40.94** (ATR × 1.5) |
| **Target** | **43.58** |
| R/R | 1.5:1 |
| RSI | 61.6 |
| ATR% | 1.7% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist low_rr |

### 4. NASDAQ:SNDK (NASDAQ:SNDK)

| Field | Value |
|-------|-------|
| Combined Score | **55.9** |
| Tech Score | 34.1 (Trend Follow (HH/HL Intact)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 1737.99 |
| **Entry** | **1737.99** |
| **Stop** | **1584.18** (ATR × 1.5) |
| **Target** | **1963.58** |
| R/R | 1.5:1 |
| RSI | 61.1 |
| ATR% | 5.9% |
| Dist EMA20 | 11.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop low_rr |

### 5. NYSE:AR (NYSE:AR)

| Field | Value |
|-------|-------|
| Combined Score | **52.1** |
| Tech Score | 33.2 (Trend Follow (HH/HL Intact)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 39.08 |
| **Entry** | **39.08** |
| **Stop** | **37.61** (ATR × 1.5) |
| **Target** | **41.23** |
| R/R | 1.5:1 |
| RSI | 61.9 |
| ATR% | 2.5% |
| Dist EMA20 | 2.5% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | near_resist low_rr |

### 6. NASDAQ:ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **51.2** |
| Tech Score | 38.7 (Pullback Buy (Near Support)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 363.2 |
| **Entry** | **357.75** |
| **Stop** | **343.59** (ATR × 2) |
| **Target** | **382.81** |
| R/R | 1.8:1 |
| RSI | 43.6 |
| ATR% | 2.7% |
| Dist EMA20 | -1.4% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay |

### 7. NYSE:ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **51** |
| Tech Score | 43.7 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 39.79 |
| **Entry** | **39.19** |
| **Stop** | **37** (ATR × 2) |
| **Target** | **42.58** |
| R/R | 1.5:1 |
| RSI | 58.4 |
| ATR% | 3.5% |
| Dist EMA20 | 5.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 8. NYSE:ELF (NYSE:ELF)

| Field | Value |
|-------|-------|
| Combined Score | **49.7** |
| Tech Score | 38.9 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 104.31 |
| **Entry** | **102.75** |
| **Stop** | **94.92** (ATR × 2) |
| **Target** | **113.7** |
| R/R | 1.4:1 |
| RSI | 58.9 |
| ATR% | 4.5% |
| Dist EMA20 | 2.8% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay bear_div |

### 9. NASDAQ:HOOD (NASDAQ:HOOD)

| Field | Value |
|-------|-------|
| Combined Score | **49** |
| Tech Score | 41.6 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 117.34 |
| **Entry** | **115.58** |
| **Stop** | **102.09** (ATR × 2) |
| **Target** | **132.59** |
| R/R | 1.3:1 |
| RSI | 60.8 |
| ATR% | 6.5% |
| Dist EMA20 | 9.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/9 21:00:05*