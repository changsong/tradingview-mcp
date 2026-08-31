# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-22　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:OSBC** | NASDAQ:OSBC | **66.3** | ⚪C | 68.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 21.14 | 20.13 | 22.4 | 1.2:1 | mom_decay/near_resist/low_rr |
| 2 | **NASDAQ:AMAT** | NASDAQ:AMAT | **66** | 🟡C+ | 38.4 | 95 | WARN No Trade (Overheated) | Trend Continuation | 427.36 | 396.59 | 472.49 | 1.5:1 | mom_decay/chop |
| 3 | **NYSE:TRNO** | NYSE:TRNO | **62.3** | ⚪C | 58.2 | 56 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 66.56 | 64.21 | 69.35 | 1.2:1 | mom_decay/near_resist/low_rr |
| 4 | **NASDAQ:NVDA** | NASDAQ:NVDA | **60.2** | 🟢A | 36 | 84 | GREEN Long (Strong) | Trend Continuation | 219.51 | 207 | 237.86 | 1.5:1 | mom_decay/low_rr |
| 5 | **NYSE:GLW** | NYSE:GLW | **59.7** | 🔵B | 29.8 | 92 | GREEN Long (Strong) | Trend Continuation | 191.89 | 169.44 | 224.82 | 1.5:1 | mom_decay/bear_div/low_rr |
| 6 | **NYSE:LTC** | NYSE:LTC | **58.8** | ⚪C | 56.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 38.76 | 37.39 | 40.38 | 1.2:1 | near_resist/chop/low_rr |
| 7 | **NYSE:TSM** | NYSE:TSM | **58.8** | 🟢A | 45.7 | 66 | GREEN Long (Mid) | Breakout (Squeeze Release) | 408.37 | 379.3 | 445.83 | 1.3:1 | mom_decay/near_resist/low_rr |
| 8 | **NYSE:IRM** | NYSE:IRM | **58.6** | 🟢A | 45.3 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 127.33 | 122.17 | 134.89 | 1.5:1 | mom_decay/low_rr |
| 9 | **CBOE:CBOE** | CBOE:CBOE | **58.3** | ⚪C | 52.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 351.94 | 335.57 | 375.94 | 1.5:1 | OK |
| 10 | **NASDAQ:APLD** | NASDAQ:APLD | **57.3** | 🟢A | 38.2 | 86 | GREEN Long (Strong) | Overextended Chase (High Risk) | 48.02 | 41.18 | 57.14 | 1.3:1 | overheated/mom_decay/near_resist/bear_div |
| 11 | **NASDAQ:MU** | NASDAQ:MU | **56.7** | 🟢A | 35.8 | 88 | WARN Long (Cautious) | Overextended Chase (High Risk) | 762.1 | 670.65 | 884.04 | 1.3:1 | overheated/mom_decay/low_rr |
| 12 | **NYSE:NOK** | NYSE:NOK | **54.7** | 🟢A | 36.2 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 14.18 | 12.82 | 16.18 | 1.5:1 | mom_decay/bear_div/low_rr |
| 13 | **NASDAQ:ERIC** | NASDAQ:ERIC | **53.4** | ⚪C | 47.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 13.24 | 12.7 | 14.03 | 1.5:1 | near_resist/chop |
| 14 | **NASDAQ:RMBS** | NASDAQ:RMBS | **52** | ⚪C | 41.7 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 141.82 | 128.21 | 161.79 | 1.5:1 | low_rr |
| 15 | **NYSE:COHR** | NYSE:COHR | **51.8** | 🟢A | 33.4 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 378 | 333.77 | 442.86 | 1.5:1 | mom_decay/low_rr |
| 16 | **NASDAQ:MTSI** | NASDAQ:MTSI | **51.4** | 🟢A | 41.6 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 380.45 | 346.78 | 425.34 | 1.3:1 | overheated/low_rr |
| 17 | **NYSE:SM** | NYSE:SM | **51.1** | 🟢A | 32.9 | 66 | GREEN Long (Mid) | Trend Continuation | 33.25 | 30.91 | 36.69 | 1.5:1 | chop/bear_div |
| 18 | **NASDAQ:AMD** | NASDAQ:AMD | **50.9** | 🟢A | 36.9 | 72 | WARN Long (Cautious) | Overextended Chase (High Risk) | 449.59 | 403.73 | 510.73 | 1.3:1 | overheated/mom_decay/low_rr |
| 19 | **NASDAQ:SANM** | NASDAQ:SANM | **49.6** | ⚪C | 48 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 230.84 | 206.71 | 262.01 | 1.3:1 | mom_decay |
| 20 | **NYSE:RIO** | NYSE:RIO | **49.4** | ⚪C | 40.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 104.76 | 99.89 | 111.9 | 1.5:1 | mom_decay/chop/low_rr |
| 21 | **NYSE:JHG** | NYSE:JHG | **49** | ⚪C | 48.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 50.92 | 51.49 | 51.91 | -1.7:1 | mom_decay/near_resist/low_rr |
| 22 | **NASDAQ:TLN** | NASDAQ:TLN | **48.5** | ⚪C | 44.9 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 355.07 | 320.83 | 400.13 | 1.3:1 | mom_decay/near_resist/chop |
| 23 | **NASDAQ:INCY** | NASDAQ:INCY | **48.5** | ⚪C | 33.1 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 97.7 | 92.85 | 103.74 | 1.2:1 | mom_decay/near_resist/chop/bear_div |
| 24 | **NYSE:SPNT** | NYSE:SPNT | **48.3** | ⚪C | 38.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 23.6 | 22.22 | 25.35 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 25 | **NYSE:PACS** | NYSE:PACS | **48** | 🟢A | 40 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 37.2 | 32.86 | 42.68 | 1.3:1 | chop |
| 26 | **NYSE:P** | NYSE:P | **47.5** | ⚪C | 34.9 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 79 | 71.77 | 89.6 | 1.5:1 | mom_decay/near_resist/low_rr |
| 27 | **NYSE:CIEN** | NYSE:CIEN | **47.2** | 🔵B | 22.3 | 72 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 587.23 | 532.62 | 667.33 | 1.5:1 | fake_break/mom_decay/near_resist/low_rr |
| 28 | **NASDAQ:INTC** | NASDAQ:INTC | **46.7** | 🟢A | 33.8 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 118.5 | 103.39 | 138.64 | 1.3:1 | overheated/mom_decay/low_rr |
| 29 | **NYSE:MS** | NYSE:MS | **46.5** | ⚪C | 33.8 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 200.51 | 193.89 | 210.21 | 1.5:1 | fake_break/mom_decay/near_resist/bear_div |
| 30 | **NASDAQ:VSAT** | NASDAQ:VSAT | **45.3** | ⚪C | 33.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 70.76 | 64.5 | 79.94 | 1.5:1 | mom_decay/bear_div/low_rr |
| 31 | **NASDAQ:NWBI** | NASDAQ:NWBI | **45.1** | ⚪C | 33.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 13.97 | 13.59 | 14.52 | 1.4:1 | mom_decay/near_resist/low_rr |
| 32 | **NASDAQ:FLEX** | NASDAQ:FLEX | **44.1** | ⚪C | 27.1 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 131.07 | 116.72 | 152.12 | 1.5:1 | mom_decay/bear_div/low_rr |
| 33 | **NYSE:HPE** | NYSE:HPE | **43.9** | 🔵B | 16.2 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 33.97 | 31.88 | 37.03 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 34 | **NASDAQ:MPWR** | NASDAQ:MPWR | **43.3** | ⚪C | 36.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1537.83 | 1408.25 | 1714.25 | 1.4:1 | mom_decay/near_resist/bear_div |
| 35 | **NYSE:WT** | NYSE:WT | **43** | ⚪C | 38.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 18.89 | 17.65 | 20.71 | 1.5:1 | mom_decay/near_resist/bear_div |
| 36 | **NASDAQ:BGC** | NASDAQ:BGC | **42.7** | ⚪C | 29.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 11.16 | 10.51 | 11.99 | 1.3:1 | mom_decay/near_resist/chop/bear_div |
| 37 | **OTC:SMERY** | OTC:SMERY | **42** | ⚪C | 36.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 201.58 | 188.69 | 220.61 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 38 | **OTC:ABBNY** | OTC:ABBNY | **41.6** | ⚪C | 27.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 105.41 | 100.82 | 112.14 | 1.5:1 | mom_decay/near_resist/low_rr |
| 39 | **NASDAQ:SEDG** | NASDAQ:SEDG | **41.2** | ⚪C | 37.3 | 47 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 63 | 54.12 | 74.84 | 1.3:1 | overheated/near_resist/low_rr |
| 40 | **NYSE:HG** | NYSE:HG | **40.8** | ⚪C | 22.4 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 31.86 | 30.38 | 34.03 | 1.5:1 | near_resist/chop/low_rr |
| 41 | **NYSE:FN** | NYSE:FN | **39.4** | 🔵B | 16.7 | 61 | GREEN Long (Mid) | Breakout (Squeeze Release) | 705.38 | 605.8 | 838.65 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 42 | **NASDAQ:WDC** | NASDAQ:WDC | **38.9** | ⚪C | 23.9 | 49 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 486.46 | 439.03 | 556.02 | 1.5:1 | mom_decay/bear_div/low_rr |
| 43 | **NYSE:DKS** | NYSE:DKS | **38.3** | 🔵B | 23.9 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 218.4 | 204.88 | 238.58 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 44 | **NASDAQ:RKLB** | NASDAQ:RKLB | **37.9** | ⚪C | 29.2 | 51 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 125.45 | 107.76 | 149.03 | 1.3:1 | overheated/low_rr |
| 45 | **NYSE:BE** | NYSE:BE | **36.9** | 🔵B | 20.2 | 62 | GREEN Long (Mid) | Overextended Chase (High Risk) | 307.88 | 267.7 | 361.45 | 1.3:1 | overheated/mom_decay/near_resist/bear_div/low_rr |
| 46 | **NASDAQ:PRDO** | NASDAQ:PRDO | **35.4** | ⚪C | 25.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 33.27 | 31.48 | 36.08 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 47 | **NYSE:PFS** | NYSE:PFS | **34.8** | ⚪C | 24.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 21.97 | 21.41 | 23.19 | 2.2:1 | mom_decay/near_resist/low_rr |
| 48 | **NASDAQ:CRDO** | NASDAQ:CRDO | **34.4** | ⚪C | 21.6 | 41 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 193.39 | 167.28 | 231.68 | 1.5:1 | fake_break/mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:NVDA (NASDAQ:NVDA)

| Field | Value |
|-------|-------|
| Combined Score | **60.2** |
| Tech Score | 36 (Trend Continuation) |
| News Score | 84 → GREEN Long (Strong) |
| Current Price | 219.51 |
| **Entry** | **219.51** |
| **Stop** | **207** (ATR × 1.5) |
| **Target** | **237.86** |
| R/R | 1.5:1 |
| RSI | 57.8 |
| ATR% | 3.8% |
| Dist EMA20 | 2.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 2. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **58.8** |
| Tech Score | 45.7 (Breakout (Squeeze Release)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 407.15 |
| **Entry** | **408.37** |
| **Stop** | **379.3** (ATR × 1.8) |
| **Target** | **445.83** |
| R/R | 1.3:1 |
| RSI | 56.9 |
| ATR% | 3.8% |
| Dist EMA20 | 2.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist low_rr |

### 3. NYSE:IRM (NYSE:IRM)

| Field | Value |
|-------|-------|
| Combined Score | **58.6** |
| Tech Score | 45.3 (Trend Follow (HH/HL Intact)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 127.33 |
| **Entry** | **127.33** |
| **Stop** | **122.17** (ATR × 1.5) |
| **Target** | **134.89** |
| R/R | 1.5:1 |
| RSI | 60.3 |
| ATR% | 2.7% |
| Dist EMA20 | 2.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

### 4. NASDAQ:APLD (NASDAQ:APLD)

| Field | Value |
|-------|-------|
| Combined Score | **57.3** |
| Tech Score | 38.2 (Overextended Chase (High Risk)) |
| News Score | 86 → GREEN Long (Strong) |
| Current Price | 48.02 |
| **Entry** | **48.02** |
| **Stop** | **41.18** (ATR × 1.5) |
| **Target** | **57.14** |
| R/R | 1.3:1 |
| RSI | 64.7 |
| ATR% | 9.5% |
| Dist EMA20 | 21.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay near_resist bear_div |

### 5. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **56.7** |
| Tech Score | 35.8 (Overextended Chase (High Risk)) |
| News Score | 88 → WARN Long (Cautious) |
| Current Price | 762.1 |
| **Entry** | **762.1** |
| **Stop** | **670.65** (ATR × 1.5) |
| **Target** | **884.04** |
| R/R | 1.3:1 |
| RSI | 66.9 |
| ATR% | 8% |
| Dist EMA20 | 14.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay low_rr |

### 6. NYSE:NOK (NYSE:NOK)

| Field | Value |
|-------|-------|
| Combined Score | **54.7** |
| Tech Score | 36.2 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 14.18 |
| **Entry** | **14.18** |
| **Stop** | **12.82** (ATR × 1.5) |
| **Target** | **16.18** |
| R/R | 1.5:1 |
| RSI | 65 |
| ATR% | 6.4% |
| Dist EMA20 | 9.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay bear_div low_rr |

### 7. NYSE:COHR (NYSE:COHR)

| Field | Value |
|-------|-------|
| Combined Score | **51.8** |
| Tech Score | 33.4 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 378 |
| **Entry** | **378** |
| **Stop** | **333.77** (ATR × 1.5) |
| **Target** | **442.86** |
| R/R | 1.5:1 |
| RSI | 59.8 |
| ATR% | 7.8% |
| Dist EMA20 | 7.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 8. NASDAQ:MTSI (NASDAQ:MTSI)

| Field | Value |
|-------|-------|
| Combined Score | **51.4** |
| Tech Score | 41.6 (Overextended Chase (High Risk)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 380.45 |
| **Entry** | **380.45** |
| **Stop** | **346.78** (ATR × 1.5) |
| **Target** | **425.34** |
| R/R | 1.3:1 |
| RSI | 72.6 |
| ATR% | 5.9% |
| Dist EMA20 | 12.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated low_rr |

### 9. NYSE:SM (NYSE:SM)

| Field | Value |
|-------|-------|
| Combined Score | **51.1** |
| Tech Score | 32.9 (Trend Continuation) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 33.25 |
| **Entry** | **33.25** |
| **Stop** | **30.91** (ATR × 1.5) |
| **Target** | **36.69** |
| R/R | 1.5:1 |
| RSI | 60.9 |
| ATR% | 4.7% |
| Dist EMA20 | 5.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | chop bear_div |

### 10. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **50.9** |
| Tech Score | 36.9 (Overextended Chase (High Risk)) |
| News Score | 72 → WARN Long (Cautious) |
| Current Price | 449.59 |
| **Entry** | **449.59** |
| **Stop** | **403.73** (ATR × 1.5) |
| **Target** | **510.73** |
| R/R | 1.3:1 |
| RSI | 69.9 |
| ATR% | 6.8% |
| Dist EMA20 | 13.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay low_rr |

### 11. NYSE:PACS (NYSE:PACS)

| Field | Value |
|-------|-------|
| Combined Score | **48** |
| Tech Score | 40 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 37.77 |
| **Entry** | **37.2** |
| **Stop** | **32.86** (ATR × 2) |
| **Target** | **42.68** |
| R/R | 1.3:1 |
| RSI | 56.9 |
| ATR% | 6.5% |
| Dist EMA20 | 4.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop |

### 12. NASDAQ:INTC (NASDAQ:INTC)

| Field | Value |
|-------|-------|
| Combined Score | **46.7** |
| Tech Score | 33.8 (Overextended Chase (High Risk)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 118.5 |
| **Entry** | **118.5** |
| **Stop** | **103.39** (ATR × 1.5) |
| **Target** | **138.64** |
| R/R | 1.3:1 |
| RSI | 67.4 |
| ATR% | 8.5% |
| Dist EMA20 | 12.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:AMAT** | NASDAQ:AMAT | 66 | 38.4 | 95(hot) | 427.36 | **401.72** | 386.33 | 468.39 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/22 13:03:50*