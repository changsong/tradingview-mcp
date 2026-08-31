# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-12　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:MTZ** | NYSE:MTZ | **70.7** | 🟡C+ | 52.8 | 85 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 421.37 | 396.72 | 457.52 | 1.5:1 | low_rr |
| 2 | **NASDAQ:AMAT** | NASDAQ:AMAT | **65.7** | 🟢A | 41.2 | 90 | GREEN Long (Strong) | Trend Continuation | 443.62 | 417 | 482.66 | 1.5:1 | near_resist/chop |
| 3 | **NASDAQ:ADEA** | NASDAQ:ADEA | **65** | 🟢A | 60 | 60 | GREEN Long (Mid) | Trend Continuation | 31.84 | 28.74 | 36.39 | 1.5:1 | mom_decay/low_rr |
| 4 | **NASDAQ:INCY** | NASDAQ:INCY | **62.4** | 🟢A | 51.6 | 66 | GREEN Long (Mid) | Breakout (Squeeze Release) | 100.62 | 94.54 | 108.35 | 1.3:1 | near_resist/chop |
| 5 | **NYSE:SPNT** | NYSE:SPNT | **61.3** | 🟢A | 35.1 | 88 | GREEN Long (Strong) | Breakout (Squeeze Release) | 23.08 | 21.73 | 24.79 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 6 | **NYSE:COHR** | NYSE:COHR | **60.5** | 🟡C+ | 45.8 | 95 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 379.69 | 340.39 | 432.09 | 1.3:1 | overheated/near_resist |
| 7 | **CBOE:CBOE** | CBOE:CBOE | **59** | 🟢A | 48.7 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 350.48 | 334.71 | 373.61 | 1.5:1 | bull_trap/near_resist |
| 8 | **NYSE:DELL** | NYSE:DELL | **58.6** | 🟢A | 57.6 | 60 | GREEN Long (Mid) | Overextended Chase (High Risk) | 247.04 | 228.88 | 271.25 | 1.3:1 | overheated |
| 9 | **NYSE:HPE** | NYSE:HPE | **54.4** | 🟢A | 35.6 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 30.87 | 29.39 | 33.04 | 1.5:1 | fake_break/near_resist |
| 10 | **NASDAQ:APLD** | NASDAQ:APLD | **54.2** | 🟢A | 50.4 | 60 | GREEN Long (Mid) | Overextended Chase (High Risk) | 44.59 | 39.31 | 51.64 | 1.3:1 | overheated |
| 11 | **NYSE:TRNO** | NYSE:TRNO | **53** | ⚪C | 40.6 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 65.91 | 63.58 | 68.67 | 1.2:1 | mom_decay/near_resist/low_rr |
| 12 | **NASDAQ:RKLB** | NASDAQ:RKLB | **51.5** | 🟡C+ | 42.8 | 77 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 117.35 | 104.32 | 134.72 | 1.3:1 | overheated |
| 13 | **NASDAQ:GEN** | NASDAQ:GEN | **51.5** | 🟢A | 37.1 | 73 | WARN Long (Cautious) | Pullback Buy (Near Support) | 22.06 | 20.7 | 24.1 | 1.5:1 | near_resist/chop |
| 14 | **NASDAQ:IREN** | NASDAQ:IREN | **50.4** | 🟢A | 33.7 | 63 | GREEN Long (Mid) | Trend Continuation | 55.15 | 47.29 | 66.68 | 1.5:1 | low_rr |
| 15 | **NASDAQ:ADI** | NASDAQ:ADI | **50.3** | ⚪C | 38.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 422.73 | 404.98 | 448.77 | 1.5:1 | fake_break/bull_trap/near_resist |
| 16 | **NYSE:SMP** | NYSE:SMP | **49.4** | ⚪C | 49 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 38.41 | 36.27 | 41.73 | 1.6:1 | near_resist |
| 17 | **NYSE:TT** | NYSE:TT | **48.9** | 🟢A | 38.2 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 469.35 | 449.82 | 503.18 | 1.7:1 | mom_decay/near_resist |
| 18 | **NASDAQ:ASML** | NASDAQ:ASML | **47.8** | ⚪C | 32 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 1565.81 | 1474.21 | 1700.16 | 1.5:1 | near_resist/chop |
| 19 | **NASDAQ:CPRX** | NASDAQ:CPRX | **46** | 🔵B | 27 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 31.15 | 29.14 | 34.1 | 1.5:1 | bear_div/low_rr |
| 20 | **NASDAQ:EQIX** | NASDAQ:EQIX | **45.6** | 🟢A | 36 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1069.93 | 1038.43 | 1134.01 | 2:1 | mom_decay/near_resist/low_rr |
| 21 | **NASDAQ:NVDA** | NASDAQ:NVDA | **45.5** | ⚪C | 38.2 | 44 | NEUTRAL No Trade (Neutral) | Trend Continuation | 219.44 | 207.92 | 236.34 | 1.5:1 | fake_break/near_resist |
| 22 | **NYSE:MS** | NYSE:MS | **45** | 🔵B | 29 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 188.23 | 183.07 | 199.13 | 2.1:1 | mom_decay/near_resist/bear_div/low_rr |
| 23 | **NASDAQ:PRDO** | NASDAQ:PRDO | **44.8** | ⚪C | 36.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 35.1 | 33.06 | 38.2 | 1.5:1 | near_resist/chop/low_rr |
| 24 | **NYSE:SM** | NYSE:SM | **43.6** | 🔵B | 15.6 | 73 | GREEN Long (Mid) | Trend Continuation | 30.67 | 28.65 | 33.64 | 1.5:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 25 | **NYSE:AIR** | NYSE:AIR | **43.5** | ⚪C | 27.5 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 117.57 | 110.87 | 127.4 | 1.5:1 | near_resist/chop/low_rr |
| 26 | **NYSE:MOD** | NYSE:MOD | **43.1** | ⚪C | 30.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 284.8 | 262.59 | 317.38 | 1.5:1 | fake_break/near_resist |
| 27 | **NYSE:CIEN** | NYSE:CIEN | **41.5** | ⚪C | 34.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 581.47 | 528.27 | 652.41 | 1.3:1 | overheated/fake_break/near_resist |
| 28 | **NYSE:VRT** | NYSE:VRT | **40.9** | 🔵B | 27.5 | 61 | GREEN Long (Mid) | Overextended Chase (High Risk) | 367.92 | 341.43 | 403.24 | 1.3:1 | overheated/bull_trap/near_resist |
| 29 | **NASDAQ:MU** | NASDAQ:MU | **36.9** | ⚪C | 24.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 795.33 | 726.14 | 887.59 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 30 | **NASDAQ:CRDO** | NASDAQ:CRDO | **35.3** | 🔵B | 18.1 | 61 | GREEN Long (Mid) | Overextended Chase (High Risk) | 210.22 | 188.15 | 239.65 | 1.3:1 | overheated/fake_break/near_resist/bear_div/low_rr |
| 31 | **NASDAQ:VSAT** | NASDAQ:VSAT | **34** | ⚪C | 22.7 | 51 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 73.07 | 67.92 | 79.94 | 1.3:1 | overheated/bull_trap/near_resist/bear_div |
| 32 | **NASDAQ:OSBC** | NASDAQ:OSBC | **33.5** | ⚪C | 22.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 20.57 | 19.54 | 22.22 | 1.6:1 | mom_decay/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **65.7** |
| Tech Score | 41.2 (Trend Continuation) |
| News Score | 90 → GREEN Long (Strong) |
| Current Price | 443.62 |
| **Entry** | **443.62** |
| **Stop** | **417** (ATR × 1.5) |
| **Target** | **482.66** |
| R/R | 1.5:1 |
| RSI | 66.5 |
| ATR% | 4% |
| Dist EMA20 | 10% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop |

### 2. NASDAQ:ADEA (NASDAQ:ADEA)

| Field | Value |
|-------|-------|
| Combined Score | **65** |
| Tech Score | 60 (Trend Continuation) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 31.84 |
| **Entry** | **31.84** |
| **Stop** | **28.74** (ATR × 1.5) |
| **Target** | **36.39** |
| R/R | 1.5:1 |
| RSI | 60.1 |
| ATR% | 6.5% |
| Dist EMA20 | 8.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

### 3. NASDAQ:INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **62.4** |
| Tech Score | 51.6 (Breakout (Squeeze Release)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 100.32 |
| **Entry** | **100.62** |
| **Stop** | **94.54** (ATR × 1.8) |
| **Target** | **108.35** |
| R/R | 1.3:1 |
| RSI | 59.2 |
| ATR% | 3.2% |
| Dist EMA20 | 3.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop |

### 4. NYSE:SPNT (NYSE:SPNT)

| Field | Value |
|-------|-------|
| Combined Score | **61.3** |
| Tech Score | 35.1 (Breakout (Squeeze Release)) |
| News Score | 88 → GREEN Long (Strong) |
| Current Price | 23.01 |
| **Entry** | **23.08** |
| **Stop** | **21.73** (ATR × 1.8) |
| **Target** | **24.79** |
| R/R | 1.3:1 |
| RSI | 51.2 |
| ATR% | 3.1% |
| Dist EMA20 | -0.4% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 5. CBOE:CBOE (CBOE:CBOE)

| Field | Value |
|-------|-------|
| Combined Score | **59** |
| Tech Score | 48.7 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 350.48 |
| **Entry** | **350.48** |
| **Stop** | **334.71** (ATR × 1.5) |
| **Target** | **373.61** |
| R/R | 1.5:1 |
| RSI | 73.2 |
| ATR% | 3% |
| Dist EMA20 | 9.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | bull_trap near_resist |

### 6. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **58.6** |
| Tech Score | 57.6 (Overextended Chase (High Risk)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 247.04 |
| **Entry** | **247.04** |
| **Stop** | **228.88** (ATR × 1.5) |
| **Target** | **271.25** |
| R/R | 1.3:1 |
| RSI | 68.7 |
| ATR% | 4.9% |
| Dist EMA20 | 14.7% |
| Chase OK | **YES** |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated |

### 7. NYSE:HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **54.4** |
| Tech Score | 35.6 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 30.87 |
| **Entry** | **30.87** |
| **Stop** | **29.39** (ATR × 1.5) |
| **Target** | **33.04** |
| R/R | 1.5:1 |
| RSI | 70 |
| ATR% | 3.2% |
| Dist EMA20 | 8.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist |

### 8. NASDAQ:APLD (NASDAQ:APLD)

| Field | Value |
|-------|-------|
| Combined Score | **54.2** |
| Tech Score | 50.4 (Overextended Chase (High Risk)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 44.59 |
| **Entry** | **44.59** |
| **Stop** | **39.31** (ATR × 1.5) |
| **Target** | **51.64** |
| R/R | 1.3:1 |
| RSI | 70.4 |
| ATR% | 7.9% |
| Dist EMA20 | 24% |
| Chase OK | **YES** |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated |

### 9. NASDAQ:GEN (NASDAQ:GEN)

| Field | Value |
|-------|-------|
| Combined Score | **51.5** |
| Tech Score | 37.1 (Pullback Buy (Near Support)) |
| News Score | 73 → WARN Long (Cautious) |
| Current Price | 22.4 |
| **Entry** | **22.06** |
| **Stop** | **20.7** (ATR × 2) |
| **Target** | **24.1** |
| R/R | 1.5:1 |
| RSI | 69.9 |
| ATR% | 3.8% |
| Dist EMA20 | 11.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop |

### 10. NASDAQ:IREN (NASDAQ:IREN)

| Field | Value |
|-------|-------|
| Combined Score | **50.4** |
| Tech Score | 33.7 (Trend Continuation) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 55.15 |
| **Entry** | **55.15** |
| **Stop** | **47.29** (ATR × 1.5) |
| **Target** | **66.68** |
| R/R | 1.5:1 |
| RSI | 58.1 |
| ATR% | 9.5% |
| Dist EMA20 | 9.8% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 11. NYSE:TT (NYSE:TT)

| Field | Value |
|-------|-------|
| Combined Score | **48.9** |
| Tech Score | 38.2 (Pullback Buy (Near Support)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 476.5 |
| **Entry** | **469.35** |
| **Stop** | **449.82** (ATR × 2) |
| **Target** | **503.18** |
| R/R | 1.7:1 |
| RSI | 54 |
| ATR% | 2.8% |
| Dist EMA20 | 0.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist |

### 12. NASDAQ:EQIX (NASDAQ:EQIX)

| Field | Value |
|-------|-------|
| Combined Score | **45.6** |
| Tech Score | 36 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 1086.22 |
| **Entry** | **1069.93** |
| **Stop** | **1038.43** (ATR × 2) |
| **Target** | **1134.01** |
| R/R | 2:1 |
| RSI | 59.6 |
| ATR% | 2.2% |
| Dist EMA20 | 1.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:MTZ** | NYSE:MTZ | 70.7 | 52.8 | 85(hot) | 421.37 | **396.09** | 388.5 | 454.24 |
| **NYSE:COHR** | NYSE:COHR | 60.5 | 45.8 | 95(hot) | 379.69 | **356.91** | 327.29 | 432.09 |
| **NASDAQ:RKLB** | NASDAQ:RKLB | 51.5 | 42.8 | 77(hot) | 117.35 | **110.31** | 99.98 | 134.72 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/12 20:51:51*