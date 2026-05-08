# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-08　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:PWR** | NYSE:PWR | **78.1** | 🟡C+ | 58.5 | 95 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 750.73 | 710.19 | 810.19 | 1.5:1 | OK |
| 2 | **NYSE:MTZ** | NYSE:MTZ | **76.1** | 🟡C+ | 51.8 | 100 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 412.27 | 388.15 | 447.64 | 1.5:1 | OK |
| 3 | **NYSE:GLW** | NYSE:GLW | **70.5** | 🟢A | 52.5 | 85 | GREEN Long (Strong) | Trend Continuation | 182.4 | 165.71 | 206.88 | 1.5:1 | OK |
| 4 | **NASDAQ:ARM** | NASDAQ:ARM | **65.4** | 🟢A | 51.4 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 213.31 | 185.79 | 253.67 | 1.5:1 | low_rr |
| 5 | **NYSE:TRNO** | NYSE:TRNO | **63.7** | 🟢A | 45.8 | 78 | GREEN Long (Strong) | Breakout (Squeeze Release) | 66.86 | 64.5 | 69.66 | 1.2:1 | mom_decay/near_resist/low_rr |
| 6 | **CBOE:CBOE** | CBOE:CBOE | **59.4** | ⚪C | 56 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 338.65 | 323.92 | 360.26 | 1.5:1 | near_resist |
| 7 | **NYSE:NVT** | NYSE:NVT | **59** | 🟡C+ | 45.4 | 92 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 166.73 | 156.23 | 180.74 | 1.3:1 | overheated |
| 8 | **NYSE:SMP** | NYSE:SMP | **58.6** | ⚪C | 56 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 39.57 | 37.18 | 42.61 | 1.3:1 | near_resist/low_rr |
| 9 | **NYSE:JHG** | NYSE:JHG | **58** | ⚪C | 58.7 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 50.9 | 51.58 | 51.78 | -1.3:1 | mom_decay/near_resist/low_rr |
| 10 | **NASDAQ:CPRX** | NASDAQ:CPRX | **58** | 🟢A | 46.3 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 31.16 | 29.06 | 34.25 | 1.5:1 | bear_div/low_rr |
| 11 | **NYSE:DTM** | NYSE:DTM | **55.4** | 🟢A | 34.6 | 74 | GREEN Long (Mid) | Trend Continuation | 144.13 | 138.08 | 153.01 | 1.5:1 | low_rr |
| 12 | **NASDAQ:ADI** | NASDAQ:ADI | **53.2** | 🟢A | 32.3 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 418 | 400.44 | 443.75 | 1.5:1 | fake_break/bull_trap/near_resist |
| 13 | **NYSE:SPNT** | NYSE:SPNT | **52.7** | 🔵B | 18.8 | 91 | GREEN Long (Strong) | Breakout (Squeeze Release) | 22.69 | 21.48 | 24.2 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 14 | **NASDAQ:NBN** | NASDAQ:NBN | **51.5** | ⚪C | 44.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 126.01 | 116.81 | 137.88 | 1.3:1 | mom_decay/near_resist/low_rr |
| 15 | **NYSE:AROC** | NYSE:AROC | **51.4** | 🟢A | 37.3 | 60 | GREEN Long (Mid) | Trend Continuation | 38.1 | 35.99 | 41.2 | 1.5:1 | OK |
| 16 | **NYSE:HG** | NYSE:HG | **51** | 🟢A | 37.7 | 71 | GREEN Long (Mid) | Pullback Buy (Near Support) | 30.22 | 28.78 | 32.58 | 1.6:1 | mom_decay/near_resist |
| 17 | **NASDAQ:RMBS** | NASDAQ:RMBS | **50.9** | ⚪C | 43.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 126.6 | 109.89 | 151.11 | 1.5:1 | mom_decay/near_resist/low_rr |
| 18 | **NYSE:FAF** | NYSE:FAF | **49.7** | 🟢A | 31.9 | 64 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 69.82 | 66.99 | 73.97 | 1.5:1 | near_resist/bear_div/low_rr |
| 19 | **NYSE:CRC** | NYSE:CRC | **49.4** | 🟢A | 36.4 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 60.2 | 56.6 | 65.64 | 1.5:1 | mom_decay |
| 20 | **NASDAQ:KALU** | NASDAQ:KALU | **49.2** | 🔵B | 22.3 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 176.16 | 163.21 | 195.15 | 1.5:1 | fake_break/near_resist/low_rr |
| 21 | **NASDAQ:BGC** | NASDAQ:BGC | **48.1** | ⚪C | 40.8 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 11.12 | 10.66 | 11.92 | 1.7:1 | mom_decay/near_resist/low_rr |
| 22 | **NYSE:WT** | NYSE:WT | **47.9** | 🟢A | 30.2 | 62 | GREEN Long (Mid) | Trend Continuation | 18.72 | 17.4 | 20.66 | 1.5:1 | fake_break/near_resist/low_rr |
| 23 | **NYSE:ENVA** | NYSE:ENVA | **45.9** | ⚪C | 29.5 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 172.5 | 163.19 | 186.16 | 1.5:1 | mom_decay/near_resist/low_rr |
| 24 | **NYSE:DY** | NYSE:DY | **45.3** | 🔵B | 23.1 | 66 | GREEN Long (Mid) | Trend Continuation | 426.36 | 396.3 | 470.45 | 1.5:1 | near_resist/bear_div/low_rr |
| 25 | **NASDAQ:ADEA** | NASDAQ:ADEA | **43** | 🔵B | 19.3 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 27.42 | 24.91 | 31.1 | 1.5:1 | mom_decay/near_resist/low_rr |
| 26 | **NYSE:FSS** | NYSE:FSS | **42.1** | ⚪C | 36.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 118.65 | 111.06 | 129.86 | 1.5:1 | near_resist/chop/low_rr |
| 27 | **NASDAQ:SANM** | NASDAQ:SANM | **42.1** | ⚪C | 32.9 | 56 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 237.09 | 216.46 | 264.59 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 28 | **NYSE:RRC** | NYSE:RRC | **41.9** | 🔵B | 16.1 | 68 | GREEN Long (Mid) | Breakout (Squeeze Release) | 40.98 | 38.51 | 44.13 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 29 | **NASDAQ:MTSI** | NASDAQ:MTSI | **40.3** | 🔵B | 21.1 | 69 | GREEN Long (Mid) | Overextended Chase (High Risk) | 344.47 | 321.22 | 375.47 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist/bear_div |
| 30 | **NYSE:PACS** | NYSE:PACS | **37.9** | ⚪C | 29.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 33.13 | 30.54 | 36.72 | 1.4:1 | mom_decay/chop |
| 31 | **NYSE:PRIM** | NYSE:PRIM | **37.2** | ⚪C | 28.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 106.36 | 77.1 | 138.86 | 1.1:1 | mom_decay |
| 32 | **NYSE:TPC** | NYSE:TPC | **36.8** | ⚪C | 28 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 83.18 | 75.16 | 93.74 | 1.3:1 | mom_decay/near_resist |
| 33 | **NYSE:FN** | NYSE:FN | **35.7** | 🔵B | 16.9 | 64 | GREEN Long (Mid) | Pullback Buy (Near Support) | 616.73 | 534.71 | 717.53 | 1.2:1 | mom_decay/near_resist/chop |
| 34 | **NYSE:FOR** | NYSE:FOR | **35.4** | ⚪C | 29 | 45 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 26.85 | 25.24 | 29.28 | 1.5:1 | mom_decay/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **70.5** |
| Tech Score | 52.5 (Trend Continuation) |
| News Score | 85 → GREEN Long (Strong) |
| Current Price | 182.4 |
| **Entry** | **182.4** |
| **Stop** | **165.71** (ATR × 1.5) |
| **Target** | **206.88** |
| R/R | 1.5:1 |
| RSI | 64.6 |
| ATR% | 6.1% |
| Dist EMA20 | 11.1% |
| Chase OK | **YES** |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | None |

### 2. NASDAQ:ARM (NASDAQ:ARM)

| Field | Value |
|-------|-------|
| Combined Score | **65.4** |
| Tech Score | 51.4 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 213.31 |
| **Entry** | **213.31** |
| **Stop** | **185.79** (ATR × 1.5) |
| **Target** | **253.67** |
| R/R | 1.5:1 |
| RSI | 59.9 |
| ATR% | 8.6% |
| Dist EMA20 | 9.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 3. NYSE:TRNO (NYSE:TRNO)

| Field | Value |
|-------|-------|
| Combined Score | **63.7** |
| Tech Score | 45.8 (Breakout (Squeeze Release)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 66.66 |
| **Entry** | **66.86** |
| **Stop** | **64.5** (ATR × 1.8) |
| **Target** | **69.66** |
| R/R | 1.2:1 |
| RSI | 61 |
| ATR% | 1.8% |
| Dist EMA20 | 1.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist low_rr |

### 4. NASDAQ:CPRX (NASDAQ:CPRX)

| Field | Value |
|-------|-------|
| Combined Score | **58** |
| Tech Score | 46.3 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 31.165 |
| **Entry** | **31.16** |
| **Stop** | **29.06** (ATR × 1.5) |
| **Target** | **34.25** |
| R/R | 1.5:1 |
| RSI | 73.4 |
| ATR% | 4.5% |
| Dist EMA20 | 11.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | bear_div low_rr |

### 5. NYSE:DTM (NYSE:DTM)

| Field | Value |
|-------|-------|
| Combined Score | **55.4** |
| Tech Score | 34.6 (Trend Continuation) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 144.13 |
| **Entry** | **144.13** |
| **Stop** | **138.08** (ATR × 1.5) |
| **Target** | **153.01** |
| R/R | 1.5:1 |
| RSI | 63.2 |
| ATR% | 2.8% |
| Dist EMA20 | 3.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 6. NASDAQ:ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **53.2** |
| Tech Score | 32.3 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 418 |
| **Entry** | **418** |
| **Stop** | **400.44** (ATR × 1.5) |
| **Target** | **443.75** |
| R/R | 1.5:1 |
| RSI | 70.9 |
| ATR% | 2.8% |
| Dist EMA20 | 8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break bull_trap near_resist |

### 7. NYSE:AROC (NYSE:AROC)

| Field | Value |
|-------|-------|
| Combined Score | **51.4** |
| Tech Score | 37.3 (Trend Continuation) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 38.1 |
| **Entry** | **38.1** |
| **Stop** | **35.99** (ATR × 1.5) |
| **Target** | **41.2** |
| R/R | 1.5:1 |
| RSI | 57.4 |
| ATR% | 3.7% |
| Dist EMA20 | 1.5% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 8. NYSE:HG (NYSE:HG)

| Field | Value |
|-------|-------|
| Combined Score | **51** |
| Tech Score | 37.7 (Pullback Buy (Near Support)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 30.68 |
| **Entry** | **30.22** |
| **Stop** | **28.78** (ATR × 2) |
| **Target** | **32.58** |
| R/R | 1.6:1 |
| RSI | 46.3 |
| ATR% | 3.1% |
| Dist EMA20 | -1.8% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist |

### 9. NYSE:FAF (NYSE:FAF)

| Field | Value |
|-------|-------|
| Combined Score | **49.7** |
| Tech Score | 31.9 (Trend Follow (HH/HL Intact)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 69.82 |
| **Entry** | **69.82** |
| **Stop** | **66.99** (ATR × 1.5) |
| **Target** | **73.97** |
| R/R | 1.5:1 |
| RSI | 61.7 |
| ATR% | 2.7% |
| Dist EMA20 | 3.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist bear_div low_rr |

### 10. NYSE:CRC (NYSE:CRC)

| Field | Value |
|-------|-------|
| Combined Score | **49.4** |
| Tech Score | 36.4 (Pullback Buy (Near Support)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 61.12 |
| **Entry** | **60.2** |
| **Stop** | **56.6** (ATR × 2) |
| **Target** | **65.64** |
| R/R | 1.5:1 |
| RSI | 38.9 |
| ATR% | 3.7% |
| Dist EMA20 | -6.9% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay |

### 11. NYSE:WT (NYSE:WT)

| Field | Value |
|-------|-------|
| Combined Score | **47.9** |
| Tech Score | 30.2 (Trend Continuation) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 18.72 |
| **Entry** | **18.72** |
| **Stop** | **17.4** (ATR × 1.5) |
| **Target** | **20.66** |
| R/R | 1.5:1 |
| RSI | 64.1 |
| ATR% | 4.7% |
| Dist EMA20 | 9.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:PWR** | NYSE:PWR | 78.1 | 58.5 | 95(hot) | 750.73 | **705.69** | 696.68 | 804.78 |
| **NYSE:MTZ** | NYSE:MTZ | 76.1 | 51.8 | 100(hot) | 412.27 | **387.53** | 380.11 | 444.43 |
| **NYSE:NVT** | NYSE:NVT | 59 | 45.4 | 92(hot) | 166.73 | **156.73** | 152.72 | 180.74 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/8 21:35:26*