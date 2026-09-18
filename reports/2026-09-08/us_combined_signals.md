# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-08　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:TSM** | NYSE:TSM | **71.6** | 🟢A | 58.4 | 79 | GREEN Long (Strong) | Breakout (Squeeze Release) | 430.2 | 409.61 | 455.72 | 1.2:1 | near_resist/chop/low_rr |
| 2 | **NASDAQ:FIVE** | NASDAQ:FIVE | **66.4** | 🟡C+ | 45.6 | 85 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 252.2 | 235.55 | 276.61 | 1.5:1 | mom_decay/low_rr |
| 3 | **NYSE:RIO** | NYSE:RIO | **59.5** | 🟢A | 59.2 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 101.72 | 98.93 | 107.61 | 2.1:1 | mom_decay/near_resist |
| 4 | **NYSE:HGTY** | NYSE:HGTY | **59** | ⚪C | 56.7 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 13.59 | 12.75 | 14.67 | 1.3:1 | mom_decay/near_resist/low_rr |
| 5 | **NYSE:HG** | NYSE:HG | **58.7** | ⚪C | 56.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 35.71 | 34.19 | 37.56 | 1.2:1 | near_resist/chop/low_rr |
| 6 | **NYSE:LTC** | NYSE:LTC | **55.8** | 🟢A | 52.3 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 40.59 | 39.81 | 42.61 | 2.6:1 | bear_div |
| 7 | **NYSE:SPNT** | NYSE:SPNT | **55.1** | ⚪C | 58.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 24.11 | 23.45 | 25.51 | 2.1:1 | near_resist/chop |
| 8 | **NYSE:WT** | NYSE:WT | **55.1** | ⚪C | 46.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 24.89 | 23.47 | 26.97 | 1.5:1 | mom_decay/low_rr |
| 9 | **NYSE:AR** | NYSE:AR | **55.1** | 🟢A | 42.1 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 39.41 | 37.93 | 41.58 | 1.5:1 | near_resist/low_rr |
| 10 | **NYSE:FCX** | NYSE:FCX | **54.7** | 🟢A | 32.9 | 75 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 72.73 | 68.15 | 79.45 | 1.5:1 | mom_decay/chop/low_rr |
| 11 | **NYSE:ELF** | NYSE:ELF | **54.6** | 🟢A | 36.6 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 109.67 | 103.25 | 119.08 | 1.5:1 | fake_break/mom_decay/near_resist/bear_div/low_rr |
| 12 | **NYSE:MS** | NYSE:MS | **54.5** | ⚪C | 46.5 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 218.37 | 209.1 | 229.69 | 1.2:1 | near_resist/chop/low_rr |
| 13 | **NYSE:RRC** | NYSE:RRC | **52.4** | ⚪C | 54 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 41.37 | 39.98 | 44.02 | 1.9:1 | near_resist/low_rr |
| 14 | **NASDAQ:PGY** | NASDAQ:PGY | **51.9** | 🟢A | 42.5 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 22.64 | 20.59 | 25.37 | 1.3:1 | mom_decay/near_resist/low_rr |
| 15 | **NASDAQ:PRGS** | NASDAQ:PRGS | **51.8** | ⚪C | 42.6 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 44.18 | 41.12 | 48.12 | 1.3:1 | mom_decay/near_resist/low_rr |
| 16 | **NASDAQ:HOOD** | NASDAQ:HOOD | **51.6** | 🟢A | 42 | 66 | WARN Long (Cautious) | Pullback Buy (Near Support) | 120.28 | 107.46 | 136.76 | 1.3:1 | overheated/fake_break/near_resist/low_rr |
| 17 | **NASDAQ:SNDK** | NASDAQ:SNDK | **51.1** | 🟢A | 37.1 | 72 | GREEN Long (Mid) | Overextended Chase (High Risk) | 1740 | 1575.57 | 1959.24 | 1.3:1 | overheated/chop/low_rr |
| 18 | **NASDAQ:NVDA** | NASDAQ:NVDA | **51** | 🟢A | 35.4 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 230.36 | 218.96 | 247.08 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 19 | **NYSE:NEM** | NYSE:NEM | **50.6** | ⚪C | 38.7 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 128.09 | 120.6 | 139.08 | 1.5:1 | mom_decay/near_resist/low_rr |
| 20 | **NYSE:AGM** | NYSE:AGM | **50.5** | ⚪C | 42.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 227.78 | 219.58 | 239.81 | 1.5:1 | mom_decay/low_rr |
| 21 | **NYSE:BAP** | NYSE:BAP | **49.8** | ⚪C | 39.3 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 383.68 | 364.63 | 407.39 | 1.2:1 | near_resist/chop |
| 22 | **NASDAQ:OSBC** | NASDAQ:OSBC | **49.5** | ⚪C | 49.2 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 25.33 | 24.9 | 26.54 | 2.8:1 | mom_decay/near_resist/chop/low_rr |
| 23 | **NYSE:WPM** | NYSE:WPM | **48.4** | 🟢A | 30.4 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 154.98 | 144.52 | 170.32 | 1.5:1 | mom_decay/near_resist/low_rr |
| 24 | **NYSE:CF** | NYSE:CF | **48.1** | ⚪C | 35.9 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 133.35 | 124.75 | 145.96 | 1.5:1 | near_resist/low_rr |
| 25 | **NASDAQ:KRYS** | NASDAQ:KRYS | **47.9** | ⚪C | 43.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 352.87 | 335.31 | 381.17 | 1.6:1 | near_resist/chop/low_rr |
| 26 | **NASDAQ:CRWD** | NASDAQ:CRWD | **45.4** | 🔵B | 20.7 | 70 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 213.1 | 192 | 244.04 | 1.5:1 | near_resist/bear_div/low_rr |
| 27 | **NYSE:ASX** | NYSE:ASX | **44.4** | ⚪C | 40.7 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 36.95 | 34.58 | 40.44 | 1.5:1 | near_resist/chop |
| 28 | **NASDAQ:AAPL** | NASDAQ:AAPL | **44.2** | ⚪C | 35.7 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 315.17 | 305.25 | 334.69 | 2:1 | near_resist/chop/low_rr |
| 29 | **NYSE:J** | NYSE:J | **43.3** | 🟢A | 32.2 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 144.04 | 140.09 | 152.37 | 2.1:1 | mom_decay/near_resist/bear_div |
| 30 | **NASDAQ:BGC** | NASDAQ:BGC | **43.2** | ⚪C | 30.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 12.17 | 11.57 | 13.05 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 31 | **NYSE:AJG** | NYSE:AJG | **42.8** | 🔵B | 21.7 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 262.69 | 238.26 | 298.52 | 1.5:1 | fake_break/near_resist/low_rr |
| 32 | **NASDAQ:NWBI** | NASDAQ:NWBI | **42.7** | ⚪C | 37.9 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 15.39 | 15.15 | 16.09 | 2.9:1 | mom_decay/near_resist/chop/low_rr |
| 33 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 34 | **NASDAQ:VRTX** | NASDAQ:VRTX | **41.4** | ⚪C | 30.3 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 537.93 | 521 | 571.24 | 2:1 | mom_decay/near_resist/bear_div/low_rr |
| 35 | **NASDAQ:MU** | NASDAQ:MU | **40.3** | 🔵B | 26.5 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1001.34 | 923.06 | 1110.12 | 1.4:1 | near_resist/chop/low_rr |
| 36 | **NYSE:CRC** | NYSE:CRC | **40.2** | ⚪C | 21.4 | 56 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 54.38 | 51.68 | 57.74 | 1.2:1 | near_resist/chop |
| 37 | **NASDAQ:ADI** | NASDAQ:ADI | **39.8** | 🔵B | 17 | 74 | GREEN Long (Mid) | Pullback Buy (Near Support) | 356.82 | 340.51 | 383.99 | 1.7:1 | mom_decay/near_resist/low_rr |
| 38 | **NASDAQ:GEN** | NASDAQ:GEN | **38** | ⚪C | 21.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 30.65 | 29.27 | 32.67 | 1.5:1 | near_resist/chop/low_rr |
| 39 | **NASDAQ:ADUS** | NASDAQ:ADUS | **37.2** | ⚪C | 25.3 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 116.98 | 112.82 | 124.7 | 1.9:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 40 | **NYSE:SXI** | NYSE:SXI | **36.8** | ⚪C | 28 | 50 | NEUTRAL No Trade (No Data) | Reversal (Oversold + Confirmation) | 275.78 | 262.13 | 293.98 | 1.3:1 | mom_decay/near_resist/low_rr/reversal |
| 41 | **NASDAQ:CBRS** | NASDAQ:CBRS | **32.5** | ⚪C | 20.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 206.9 | 180.64 | 239.46 | 1.2:1 | mom_decay/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **71.6** |
| Tech Score | 58.4 (Breakout (Squeeze Release)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 428.91 |
| **Entry** | **430.2** |
| **Stop** | **409.61** (ATR × 1.8) |
| **Target** | **455.72** |
| R/R | 1.2:1 |
| RSI | 56.8 |
| ATR% | 2.5% |
| Dist EMA20 | 2.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 2. NYSE:RIO (NYSE:RIO)

| Field | Value |
|-------|-------|
| Combined Score | **59.5** |
| Tech Score | 59.2 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 103.27 |
| **Entry** | **101.72** |
| **Stop** | **98.93** (ATR × 2) |
| **Target** | **107.61** |
| R/R | 2.1:1 |
| RSI | 57 |
| ATR% | 2.1% |
| Dist EMA20 | 1.5% |
| Chase OK | NO |
| MTF Alignment | 1/2 (50%) |
| Risk Flags | mom_decay near_resist |

### 3. NYSE:LTC (NYSE:LTC)

| Field | Value |
|-------|-------|
| Combined Score | **55.8** |
| Tech Score | 52.3 (Pullback Buy (Near Support)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 41.21 |
| **Entry** | **40.59** |
| **Stop** | **39.81** (ATR × 2) |
| **Target** | **42.61** |
| R/R | 2.6:1 |
| RSI | 56.3 |
| ATR% | 1.7% |
| Dist EMA20 | 1.4% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | bear_div |

### 4. NYSE:AR (NYSE:AR)

| Field | Value |
|-------|-------|
| Combined Score | **55.1** |
| Tech Score | 42.1 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 39.41 |
| **Entry** | **39.41** |
| **Stop** | **37.93** (ATR × 1.5) |
| **Target** | **41.58** |
| R/R | 1.5:1 |
| RSI | 65.4 |
| ATR% | 2.5% |
| Dist EMA20 | 3.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist low_rr |

### 5. NYSE:FCX (NYSE:FCX)

| Field | Value |
|-------|-------|
| Combined Score | **54.7** |
| Tech Score | 32.9 (Trend Follow (HH/HL Intact)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 72.73 |
| **Entry** | **72.73** |
| **Stop** | **68.15** (ATR × 1.5) |
| **Target** | **79.45** |
| R/R | 1.5:1 |
| RSI | 53.2 |
| ATR% | 4.2% |
| Dist EMA20 | 0.4% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay chop low_rr |

### 6. NYSE:ELF (NYSE:ELF)

| Field | Value |
|-------|-------|
| Combined Score | **54.6** |
| Tech Score | 36.6 (Trend Follow (HH/HL Intact)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 109.67 |
| **Entry** | **109.67** |
| **Stop** | **103.25** (ATR × 1.5) |
| **Target** | **119.08** |
| R/R | 1.5:1 |
| RSI | 69.6 |
| ATR% | 3.9% |
| Dist EMA20 | 8.4% |
| Chase OK | NO |
| MTF Alignment | 2/2 (100%) |
| Risk Flags | fake_break mom_decay near_resist bear_div low_rr |

### 7. NASDAQ:PGY (NASDAQ:PGY)

| Field | Value |
|-------|-------|
| Combined Score | **51.9** |
| Tech Score | 42.5 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 22.98 |
| **Entry** | **22.64** |
| **Stop** | **20.59** (ATR × 2) |
| **Target** | **25.37** |
| R/R | 1.3:1 |
| RSI | 61.8 |
| ATR% | 5.2% |
| Dist EMA20 | 6.9% |
| Chase OK | NO |
| MTF Alignment | 1/2 (50%) |
| Risk Flags | mom_decay near_resist low_rr |

### 8. NASDAQ:HOOD (NASDAQ:HOOD)

| Field | Value |
|-------|-------|
| Combined Score | **51.6** |
| Tech Score | 42 (Pullback Buy (Near Support)) |
| News Score | 66 → WARN Long (Cautious) |
| Current Price | 122.11 |
| **Entry** | **120.28** |
| **Stop** | **107.46** (ATR × 2) |
| **Target** | **136.76** |
| R/R | 1.3:1 |
| RSI | 65.9 |
| ATR% | 6% |
| Dist EMA20 | 15.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated fake_break near_resist low_rr |

### 9. NASDAQ:SNDK (NASDAQ:SNDK)

| Field | Value |
|-------|-------|
| Combined Score | **51.1** |
| Tech Score | 37.1 (Overextended Chase (High Risk)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 1740 |
| **Entry** | **1740** |
| **Stop** | **1575.57** (ATR × 1.5) |
| **Target** | **1959.24** |
| R/R | 1.3:1 |
| RSI | 61.2 |
| ATR% | 6.3% |
| Dist EMA20 | 13.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated chop low_rr |

### 10. NASDAQ:NVDA (NASDAQ:NVDA)

| Field | Value |
|-------|-------|
| Combined Score | **51** |
| Tech Score | 35.4 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 230.36 |
| **Entry** | **230.36** |
| **Stop** | **218.96** (ATR × 1.5) |
| **Target** | **247.08** |
| R/R | 1.5:1 |
| RSI | 60.4 |
| ATR% | 3.3% |
| Dist EMA20 | 5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop bear_div low_rr |

### 11. NYSE:WPM (NYSE:WPM)

| Field | Value |
|-------|-------|
| Combined Score | **48.4** |
| Tech Score | 30.4 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 154.98 |
| **Entry** | **154.98** |
| **Stop** | **144.52** (ATR × 1.5) |
| **Target** | **170.32** |
| R/R | 1.5:1 |
| RSI | 62.2 |
| ATR% | 4.5% |
| Dist EMA20 | 6.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 12. NYSE:J (NYSE:J)

| Field | Value |
|-------|-------|
| Combined Score | **43.3** |
| Tech Score | 32.2 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 146.23 |
| **Entry** | **144.04** |
| **Stop** | **140.09** (ATR × 2) |
| **Target** | **152.37** |
| R/R | 2.1:1 |
| RSI | 53.2 |
| ATR% | 2.1% |
| Dist EMA20 | -0.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist bear_div |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:FIVE** | NASDAQ:FIVE | 66.4 | 45.6 | 85(hot) | 252.2 | **237.07** | 230.01 | 274.39 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/8 21:00:07*