# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-25　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:ETN** | NYSE:ETN | **67.1** | 🟢A | 54.2 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 438.76 | 416.38 | 471.58 | 1.5:1 | chop/low_rr |
| 2 | **NYSE:SPNT** | NYSE:SPNT | **60.1** | 🟢A | 49.9 | 63 | GREEN Long (Mid) | Trend Continuation | 25.42 | 24.5 | 26.76 | 1.5:1 | chop/low_rr |
| 3 | **NASDAQ:MSFT** | NASDAQ:MSFT | **58.7** | ⚪C | 60.5 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 493.08 | 478.56 | 522.62 | 2:1 | mom_decay/near_resist/low_rr |
| 4 | **NYSE:ANET** | NYSE:ANET | **58.5** | 🟢A | 33.8 | 83 | GREEN Long (Strong) | Trend Continuation | 203.47 | 191.87 | 220.48 | 1.5:1 | near_resist/chop/low_rr |
| 5 | **NYSE:GRMN** | NYSE:GRMN | **58.3** | 🟢A | 46.2 | 64 | GREEN Long (Mid) | Trend Continuation | 287.58 | 278.09 | 301.5 | 1.5:1 | chop |
| 6 | **NASDAQ:PLTR** | NASDAQ:PLTR | **58.2** | 🟢A | 45.3 | 65 | GREEN Long (Mid) | Trend Continuation | 191.79 | 181.43 | 206.98 | 1.5:1 | near_resist/low_rr |
| 7 | **NYSE:APH** | NYSE:APH | **58.1** | 🟢A | 37.2 | 77 | GREEN Long (Strong) | Breakout (Squeeze Release) | 82.44 | 77.31 | 88.97 | 1.3:1 | near_resist/chop/low_rr |
| 8 | **NYSE:TSM** | NYSE:TSM | **57.5** | 🟢A | 40.8 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 446.57 | 430.49 | 470.15 | 1.5:1 | near_resist/chop/low_rr |
| 9 | **NASDAQ:MU** | NASDAQ:MU | **54.3** | 🔵B | 26.2 | 84 | GREEN Long (Strong) | Trend Continuation | 1071.88 | 1002.74 | 1173.28 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 10 | **AMEX:CET** | AMEX:CET | **53.9** | ⚪C | 56.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 55.59 | 54.75 | 58.13 | 3:1 | near_resist |
| 11 | **NYSE:DT** | NYSE:DT | **53.2** | ⚪C | 41.6 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 58.51 | 55.79 | 62.5 | 1.5:1 | bull_trap/near_resist/bear_div |
| 12 | **NASDAQ:QCOM** | NASDAQ:QCOM | **51.9** | ⚪C | 54.5 | 48 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 194.28 | 177.91 | 216.57 | 1.4:1 | low_rr |
| 13 | **NYSE:HGTY** | NYSE:HGTY | **51.5** | ⚪C | 40.2 | 56 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.74 | 12.79 | 14.97 | 1.3:1 | mom_decay/near_resist/low_rr |
| 14 | **NASDAQ:AEHR** | NASDAQ:AEHR | **51.5** | 🔵B | 27.5 | 75 | GREEN Long (Strong) | Trend Continuation | 97.38 | 85.26 | 115.16 | 1.5:1 | near_resist/chop/low_rr |
| 15 | **NASDAQ:TEM** | NASDAQ:TEM | **51.1** | 🟢A | 32.1 | 67 | GREEN Long (Mid) | Trend Continuation | 76.59 | 70.16 | 86.03 | 1.5:1 | fake_break/near_resist/low_rr |
| 16 | **NYSE:ASX** | NYSE:ASX | **50.8** | 🟢A | 31.7 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 43.93 | 41.23 | 47.89 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 17 | **NASDAQ:BGC** | NASDAQ:BGC | **50.7** | ⚪C | 42.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 12.14 | 11.51 | 12.92 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 18 | **NASDAQ:MRVL** | NASDAQ:MRVL | **50.4** | ⚪C | 36.3 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 260.9 | 241.33 | 289.6 | 1.5:1 | chop |
| 19 | **NYSE:DELL** | NYSE:DELL | **50.4** | 🔵B | 28.4 | 71 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 549.83 | 499.52 | 623.62 | 1.5:1 | bear_div/low_rr |
| 20 | **NYSE:WT** | NYSE:WT | **50.1** | ⚪C | 46.1 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 23.36 | 21.59 | 25.85 | 1.4:1 | mom_decay |
| 21 | **NASDAQ:CRWD** | NASDAQ:CRWD | **49.6** | 🟡C+ | 38.4 | 79 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 262.49 | 243.59 | 287.69 | 1.3:1 | overheated/fake_break/near_resist |
| 22 | **NASDAQ:SMCI** | NASDAQ:SMCI | **49.2** | 🔵B | 27.6 | 69 | GREEN Long (Mid) | Trend Continuation | 41.44 | 37.83 | 46.73 | 1.5:1 | near_resist/low_rr |
| 23 | **NASDAQ:AMD** | NASDAQ:AMD | **47.3** | 🟢A | 30.2 | 73 | GREEN Long (Mid) | Overextended Chase (High Risk) | 614.61 | 575.89 | 666.24 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 24 | **NYSE:JOE** | NYSE:JOE | **46.6** | ⚪C | 39 | 58 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 65.85 | 63.38 | 69.14 | 1.3:1 | near_resist/chop/low_rr |
| 25 | **NASDAQ:NBIS** | NASDAQ:NBIS | **45.7** | ⚪C | 29.8 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 226.61 | 203.16 | 261.01 | 1.5:1 | near_resist/chop/low_rr |
| 26 | **NYSE:LTC** | NYSE:LTC | **45.2** | ⚪C | 35.6 | 47 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 42.54 | 41.14 | 44.6 | 1.5:1 | mom_decay/near_resist/low_rr |
| 27 | **NASDAQ:IREN** | NASDAQ:IREN | **44.9** | 🟢A | 30.8 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 46.34 | 41.5 | 52.6 | 1.3:1 | near_resist/chop/low_rr |
| 28 | **NASDAQ:NVDA** | NASDAQ:NVDA | **42.8** | ⚪C | 29.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 225.51 | 217.39 | 237.42 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 29 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 30 | **NYSE:BAP** | NYSE:BAP | **41.8** | ⚪C | 36.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 379.6 | 367.65 | 403.11 | 2:1 | near_resist/chop/low_rr |
| 31 | **OTC:HTHIY** | OTC:HTHIY | **41.8** | ⚪C | 36.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 35.13 | 33.6 | 37.74 | 1.7:1 | near_resist/low_rr |
| 32 | **NASDAQ:ARM** | NASDAQ:ARM | **41.3** | 🔵B | 20.2 | 73 | GREEN Long (Mid) | Overextended Chase (High Risk) | 332.56 | 305.12 | 369.14 | 1.3:1 | overheated/bull_trap/near_resist/low_rr |
| 33 | **NASDAQ:INTC** | NASDAQ:INTC | **38** | 🔵B | 17.3 | 69 | GREEN Long (Mid) | Overextended Chase (High Risk) | 122.6 | 112.49 | 136.09 | 1.3:1 | overheated/fake_break/bull_trap/near_resist/low_rr |
| 34 | **NASDAQ:HOOD** | NASDAQ:HOOD | **35.7** | 🔵B | 18.8 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 120.86 | 108.22 | 137.18 | 1.3:1 | fake_break/near_resist/chop/low_rr |
| 35 | **NYSE:DOCN** | NYSE:DOCN | **35.5** | ⚪C | 24.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 139.09 | 120.59 | 161.83 | 1.2:1 | fake_break/near_resist/chop |
| 36 | **NYSE:BE** | NYSE:BE | **33.2** | ⚪C | 21.4 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 271.06 | 238.31 | 312.07 | 1.3:1 | near_resist/chop/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:ETN (NYSE:ETN)

| Field | Value |
|-------|-------|
| Combined Score | **67.1** |
| Tech Score | 54.2 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 438.76 |
| **Entry** | **438.76** |
| **Stop** | **416.38** (ATR × 1.5) |
| **Target** | **471.58** |
| R/R | 1.5:1 |
| RSI | 58.7 |
| ATR% | 3.4% |
| Dist EMA20 | 4.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

### 2. NYSE:SPNT (NYSE:SPNT)

| Field | Value |
|-------|-------|
| Combined Score | **60.1** |
| Tech Score | 49.9 (Trend Continuation) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 25.42 |
| **Entry** | **25.42** |
| **Stop** | **24.5** (ATR × 1.5) |
| **Target** | **26.76** |
| R/R | 1.5:1 |
| RSI | 66.1 |
| ATR% | 2.4% |
| Dist EMA20 | 3.4% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | chop low_rr |

### 3. NYSE:ANET (NYSE:ANET)

| Field | Value |
|-------|-------|
| Combined Score | **58.5** |
| Tech Score | 33.8 (Trend Continuation) |
| News Score | 83 → GREEN Long (Strong) |
| Current Price | 203.47 |
| **Entry** | **203.47** |
| **Stop** | **191.87** (ATR × 1.5) |
| **Target** | **220.48** |
| R/R | 1.5:1 |
| RSI | 57.9 |
| ATR% | 3.8% |
| Dist EMA20 | 3.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 4. NYSE:GRMN (NYSE:GRMN)

| Field | Value |
|-------|-------|
| Combined Score | **58.3** |
| Tech Score | 46.2 (Trend Continuation) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 287.58 |
| **Entry** | **287.58** |
| **Stop** | **278.09** (ATR × 1.5) |
| **Target** | **301.5** |
| R/R | 1.5:1 |
| RSI | 57.5 |
| ATR% | 2.2% |
| Dist EMA20 | 2.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop |

### 5. NASDAQ:PLTR (NASDAQ:PLTR)

| Field | Value |
|-------|-------|
| Combined Score | **58.2** |
| Tech Score | 45.3 (Trend Continuation) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 191.79 |
| **Entry** | **191.79** |
| **Stop** | **181.43** (ATR × 1.5) |
| **Target** | **206.98** |
| R/R | 1.5:1 |
| RSI | 66.9 |
| ATR% | 3.6% |
| Dist EMA20 | 8.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist low_rr |

### 6. NYSE:APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **58.1** |
| Tech Score | 37.2 (Breakout (Squeeze Release)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 82.19 |
| **Entry** | **82.44** |
| **Stop** | **77.31** (ATR × 1.8) |
| **Target** | **88.97** |
| R/R | 1.3:1 |
| RSI | 54.3 |
| ATR% | 3.3% |
| Dist EMA20 | 2.3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

### 7. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **57.5** |
| Tech Score | 40.8 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 446.57 |
| **Entry** | **446.57** |
| **Stop** | **430.49** (ATR × 1.5) |
| **Target** | **470.15** |
| R/R | 1.5:1 |
| RSI | 60.6 |
| ATR% | 2.4% |
| Dist EMA20 | 3.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 8. NASDAQ:TEM (NASDAQ:TEM)

| Field | Value |
|-------|-------|
| Combined Score | **51.1** |
| Tech Score | 32.1 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 76.59 |
| **Entry** | **76.59** |
| **Stop** | **70.16** (ATR × 1.5) |
| **Target** | **86.03** |
| R/R | 1.5:1 |
| RSI | 65.3 |
| ATR% | 5.6% |
| Dist EMA20 | 11.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | fake_break near_resist low_rr |

### 9. NYSE:ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **50.8** |
| Tech Score | 31.7 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 43.93 |
| **Entry** | **43.93** |
| **Stop** | **41.23** (ATR × 1.5) |
| **Target** | **47.89** |
| R/R | 1.5:1 |
| RSI | 63.9 |
| ATR% | 4.1% |
| Dist EMA20 | 9.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop low_rr |

### 10. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **47.3** |
| Tech Score | 30.2 (Overextended Chase (High Risk)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 614.61 |
| **Entry** | **614.61** |
| **Stop** | **575.89** (ATR × 1.5) |
| **Target** | **666.24** |
| R/R | 1.3:1 |
| RSI | 71 |
| ATR% | 4.2% |
| Dist EMA20 | 15.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated fake_break bull_trap near_resist |

### 11. NASDAQ:IREN (NASDAQ:IREN)

| Field | Value |
|-------|-------|
| Combined Score | **44.9** |
| Tech Score | 30.8 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 47.05 |
| **Entry** | **46.34** |
| **Stop** | **41.5** (ATR × 2) |
| **Target** | **52.6** |
| R/R | 1.3:1 |
| RSI | 58.4 |
| ATR% | 5.9% |
| Dist EMA20 | 7.1% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:CRWD** | NASDAQ:CRWD | 49.6 | 38.4 | 79(hot) | 262.49 | **246.74** | 237.29 | 287.69 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/25 21:00:04*