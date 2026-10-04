# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-24　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:SPNT** | NYSE:SPNT | **61.3** | 🟢A | 49.9 | 66 | GREEN Long (Mid) | Trend Continuation | 25.42 | 24.5 | 26.76 | 1.5:1 | chop/low_rr |
| 2 | **NASDAQ:MSFT** | NASDAQ:MSFT | **60.3** | 🟢A | 60.5 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 493.08 | 478.56 | 522.62 | 2:1 | mom_decay/near_resist/low_rr |
| 3 | **NYSE:ETN** | NYSE:ETN | **60.3** | ⚪C | 54.2 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 438.76 | 416.38 | 471.58 | 1.5:1 | chop/low_rr |
| 4 | **NYSE:GRMN** | NYSE:GRMN | **59.5** | 🟢A | 46.2 | 67 | GREEN Long (Mid) | Trend Continuation | 287.58 | 278.09 | 301.5 | 1.5:1 | chop |
| 5 | **NASDAQ:QCOM** | NASDAQ:QCOM | **58.7** | 🟢A | 54.5 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 194.28 | 177.91 | 216.57 | 1.4:1 | low_rr |
| 6 | **NYSE:P** | NYSE:P | **58.1** | 🟢A | 37.2 | 77 | GREEN Long (Strong) | Trend Continuation | 109.65 | 101.1 | 122.19 | 1.5:1 | near_resist/chop/low_rr |
| 7 | **NASDAQ:PLTR** | NASDAQ:PLTR | **57.4** | 🟢A | 45.3 | 63 | GREEN Long (Mid) | Trend Continuation | 191.79 | 181.43 | 206.98 | 1.5:1 | near_resist/low_rr |
| 8 | **NYSE:DT** | NYSE:DT | **54.4** | 🟢A | 41.6 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 58.51 | 55.79 | 62.5 | 1.5:1 | bull_trap/near_resist/bear_div |
| 9 | **AMEX:CET** | AMEX:CET | **53.9** | ⚪C | 56.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 55.59 | 54.75 | 58.13 | 3:1 | near_resist |
| 10 | **NYSE:HGTY** | NYSE:HGTY | **52.3** | ⚪C | 40.2 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.74 | 12.79 | 14.97 | 1.3:1 | mom_decay/near_resist/low_rr |
| 11 | **NASDAQ:CRWD** | NASDAQ:CRWD | **51.8** | 🟢A | 38.4 | 72 | GREEN Long (Mid) | Overextended Chase (High Risk) | 262.49 | 243.59 | 287.69 | 1.3:1 | overheated/fake_break/near_resist |
| 12 | **NYSE:TSM** | NYSE:TSM | **51.5** | ⚪C | 40.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 446.57 | 430.49 | 470.15 | 1.5:1 | near_resist/chop/low_rr |
| 13 | **NYSE:ANET** | NYSE:ANET | **51.3** | 🟢A | 33.8 | 65 | GREEN Long (Mid) | Trend Continuation | 203.47 | 191.87 | 220.48 | 1.5:1 | near_resist/chop/low_rr |
| 14 | **NASDAQ:MRVL** | NASDAQ:MRVL | **50.8** | 🟢A | 36.3 | 60 | GREEN Long (Mid) | Trend Continuation | 260.9 | 241.33 | 289.6 | 1.5:1 | chop |
| 15 | **NASDAQ:BGC** | NASDAQ:BGC | **50.7** | ⚪C | 42.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 12.14 | 11.51 | 12.92 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 16 | **NASDAQ:TEM** | NASDAQ:TEM | **50.7** | 🟢A | 32.1 | 66 | GREEN Long (Mid) | Trend Continuation | 76.59 | 70.16 | 86.03 | 1.5:1 | fake_break/near_resist/low_rr |
| 17 | **NYSE:WT** | NYSE:WT | **50.5** | ⚪C | 46.1 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 23.36 | 21.59 | 25.85 | 1.4:1 | mom_decay |
| 18 | **NYSE:DELL** | NYSE:DELL | **50** | 🔵B | 28.4 | 70 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 549.83 | 499.52 | 623.62 | 1.5:1 | bear_div/low_rr |
| 19 | **NASDAQ:IREN** | NASDAQ:IREN | **47.3** | 🟢A | 30.8 | 72 | GREEN Long (Mid) | Pullback Buy (Near Support) | 46.34 | 41.5 | 52.6 | 1.3:1 | near_resist/chop/low_rr |
| 20 | **NYSE:ASX** | NYSE:ASX | **46.4** | ⚪C | 31.7 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 43.93 | 41.23 | 47.89 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 21 | **NYSE:LTC** | NYSE:LTC | **45.2** | ⚪C | 35.6 | 47 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 42.54 | 41.14 | 44.6 | 1.5:1 | mom_decay/near_resist/low_rr |
| 22 | **NASDAQ:AEHR** | NASDAQ:AEHR | **45.1** | ⚪C | 27.5 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 97.38 | 85.26 | 115.16 | 1.5:1 | near_resist/chop/low_rr |
| 23 | **NASDAQ:MU** | NASDAQ:MU | **45.1** | 🔵B | 26.2 | 61 | GREEN Long (Mid) | Trend Continuation | 1071.88 | 1002.74 | 1173.28 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 24 | **NYSE:HPE** | NYSE:HPE | **44.9** | 🔵B | 21.9 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 62.33 | 56.07 | 71.52 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 25 | **NYSE:JOE** | NYSE:JOE | **43.4** | ⚪C | 39 | 50 | NEUTRAL No Trade (No relevant news) | Reversal (Bullish RSI Divergence) | 65.85 | 63.38 | 69.14 | 1.3:1 | near_resist/chop/low_rr |
| 26 | **NASDAQ:NVDA** | NASDAQ:NVDA | **42.8** | ⚪C | 29.7 | 50 | NEUTRAL No Trade (No relevant news) | Trend Continuation | 225.51 | 217.39 | 237.42 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 27 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 28 | **NYSE:BAP** | NYSE:BAP | **41.8** | ⚪C | 36.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 379.6 | 367.65 | 403.11 | 2:1 | near_resist/chop/low_rr |
| 29 | **OTC:HTHIY** | OTC:HTHIY | **41.8** | ⚪C | 36.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 35.13 | 33.6 | 37.74 | 1.7:1 | near_resist/low_rr |
| 30 | **NASDAQ:ARM** | NASDAQ:ARM | **40.9** | 🔵B | 20.2 | 72 | GREEN Long (Mid) | Overextended Chase (High Risk) | 332.56 | 305.12 | 369.14 | 1.3:1 | overheated/bull_trap/near_resist/low_rr |
| 31 | **NASDAQ:NBIS** | NASDAQ:NBIS | **39.3** | ⚪C | 29.8 | 41 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 226.61 | 203.16 | 261.01 | 1.5:1 | near_resist/chop/low_rr |
| 32 | **NASDAQ:INTC** | NASDAQ:INTC | **36.8** | 🔵B | 17.3 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 122.6 | 112.49 | 136.09 | 1.3:1 | overheated/fake_break/bull_trap/near_resist/low_rr |
| 33 | **NYSE:DOCN** | NYSE:DOCN | **35.5** | ⚪C | 24.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 139.09 | 120.59 | 161.83 | 1.2:1 | fake_break/near_resist/chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:SPNT (NYSE:SPNT)

| Field | Value |
|-------|-------|
| Combined Score | **61.3** |
| Tech Score | 49.9 (Trend Continuation) |
| News Score | 66 → GREEN Long (Mid) |
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

### 2. NASDAQ:MSFT (NASDAQ:MSFT)

| Field | Value |
|-------|-------|
| Combined Score | **60.3** |
| Tech Score | 60.5 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 500.59 |
| **Entry** | **493.08** |
| **Stop** | **478.56** (ATR × 2) |
| **Target** | **522.62** |
| R/R | 2:1 |
| RSI | 56.2 |
| ATR% | 2.2% |
| Dist EMA20 | 1.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist low_rr |

### 3. NYSE:GRMN (NYSE:GRMN)

| Field | Value |
|-------|-------|
| Combined Score | **59.5** |
| Tech Score | 46.2 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
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

### 4. NASDAQ:QCOM (NASDAQ:QCOM)

| Field | Value |
|-------|-------|
| Combined Score | **58.7** |
| Tech Score | 54.5 (Pullback Buy (Near Support)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 197.24 |
| **Entry** | **194.28** |
| **Stop** | **177.91** (ATR × 2) |
| **Target** | **216.57** |
| R/R | 1.4:1 |
| RSI | 66.4 |
| ATR% | 4.9% |
| Dist EMA20 | 9.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | low_rr |

### 5. NYSE:P (NYSE:P)

| Field | Value |
|-------|-------|
| Combined Score | **58.1** |
| Tech Score | 37.2 (Trend Continuation) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 109.65 |
| **Entry** | **109.65** |
| **Stop** | **101.1** (ATR × 1.5) |
| **Target** | **122.19** |
| R/R | 1.5:1 |
| RSI | 60.3 |
| ATR% | 5.2% |
| Dist EMA20 | 7.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 6. NASDAQ:PLTR (NASDAQ:PLTR)

| Field | Value |
|-------|-------|
| Combined Score | **57.4** |
| Tech Score | 45.3 (Trend Continuation) |
| News Score | 63 → GREEN Long (Mid) |
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

### 7. NYSE:DT (NYSE:DT)

| Field | Value |
|-------|-------|
| Combined Score | **54.4** |
| Tech Score | 41.6 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 58.51 |
| **Entry** | **58.51** |
| **Stop** | **55.79** (ATR × 1.5) |
| **Target** | **62.5** |
| R/R | 1.5:1 |
| RSI | 71.1 |
| ATR% | 3.1% |
| Dist EMA20 | 8.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | bull_trap near_resist bear_div |

### 8. NASDAQ:CRWD (NASDAQ:CRWD)

| Field | Value |
|-------|-------|
| Combined Score | **51.8** |
| Tech Score | 38.4 (Overextended Chase (High Risk)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 262.49 |
| **Entry** | **262.49** |
| **Stop** | **243.59** (ATR × 1.5) |
| **Target** | **287.69** |
| R/R | 1.3:1 |
| RSI | 68.9 |
| ATR% | 4.8% |
| Dist EMA20 | 14.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated fake_break near_resist |

### 9. NYSE:ANET (NYSE:ANET)

| Field | Value |
|-------|-------|
| Combined Score | **51.3** |
| Tech Score | 33.8 (Trend Continuation) |
| News Score | 65 → GREEN Long (Mid) |
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

### 10. NASDAQ:MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **50.8** |
| Tech Score | 36.3 (Trend Continuation) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 260.9 |
| **Entry** | **260.9** |
| **Stop** | **241.33** (ATR × 1.5) |
| **Target** | **289.6** |
| R/R | 1.5:1 |
| RSI | 63.1 |
| ATR% | 5% |
| Dist EMA20 | 10.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop |

### 11. NASDAQ:TEM (NASDAQ:TEM)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 32.1 (Trend Continuation) |
| News Score | 66 → GREEN Long (Mid) |
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

### 12. NASDAQ:IREN (NASDAQ:IREN)

| Field | Value |
|-------|-------|
| Combined Score | **47.3** |
| Tech Score | 30.8 (Pullback Buy (Near Support)) |
| News Score | 72 → GREEN Long (Mid) |
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

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/24 21:00:05*