# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-10　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:KLAC** | NASDAQ:KLAC | **72** | 🟢A | 62.3 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 2139.37 | 1959.66 | 2402.94 | 1.5:1 | OK |
| 2 | **NASDAQ:ASML** | NASDAQ:ASML | **70.2** | 🟢A | 58.6 | 75 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1777.77 | 1657.77 | 1953.77 | 1.5:1 | near_resist |
| 3 | **NYSE:JHG** | NYSE:JHG | **68.9** | 🟢A | 53.1 | 80 | GREEN Long (Strong) | Breakout (Squeeze Release) | 52.03 | 51.68 | 52.13 | 0.3:1 | fake_break/mom_decay/near_resist/low_rr |
| 4 | **NYSE:CARR** | NYSE:CARR | **67.5** | 🟢A | 63.2 | 74 | WARN Long (Cautious) | Pullback Buy (Near Support) | 70.17 | 66.25 | 76.23 | 1.5:1 | chop |
| 5 | **NASDAQ:MNST** | NASDAQ:MNST | **65.2** | 🟢A | 60.6 | 72 | GREEN Long (Mid) | Pullback Buy (Near Support) | 88.8 | 86.54 | 93.76 | 2.2:1 | mom_decay/near_resist |
| 6 | **NASDAQ:AMAT** | NASDAQ:AMAT | **64.2** | 🟢A | 51.3 | 71 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 499.21 | 458.03 | 559.61 | 1.5:1 | chop |
| 7 | **NYSE:MS** | NYSE:MS | **62.5** | 🟢A | 43.8 | 78 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 210.25 | 201.42 | 223.2 | 1.5:1 | low_rr |
| 8 | **NYSE:TRNO** | NYSE:TRNO | **62.4** | 🟡C+ | 45.6 | 100 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 65.93 | 63.99 | 69.87 | 2:1 | mom_decay/near_resist/low_rr |
| 9 | **NYSE:ENVA** | NYSE:ENVA | **59.3** | 🟢A | 43.2 | 71 | WARN Long (Cautious) | Trend Continuation | 179.41 | 171.34 | 191.25 | 1.5:1 | near_resist/chop |
| 10 | **NYSE:APH** | NYSE:APH | **57.6** | 🟢A | 43.7 | 66 | GREEN Long (Mid) | Trend Continuation | 154.07 | 143.67 | 169.32 | 1.5:1 | near_resist/low_rr |
| 11 | **NYSE:JCI** | NYSE:JCI | **57.6** | 🟢A | 35.6 | 78 | WARN Long (Cautious) | Trend Continuation | 147.75 | 141.1 | 157.5 | 1.5:1 | near_resist/chop/low_rr |
| 12 | **NASDAQ:CRDO** | NASDAQ:CRDO | **56.4** | 🟢A | 40.3 | 68 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 234.32 | 197.77 | 287.93 | 1.5:1 | mom_decay/low_rr |
| 13 | **NYSE:IFS** | NYSE:IFS | **56** | ⚪C | 51.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 52.55 | 49.24 | 57.41 | 1.5:1 | near_resist/low_rr |
| 14 | **NASDAQ:LRCX** | NASDAQ:LRCX | **55.7** | 🟢A | 36.5 | 72 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 327.16 | 298.7 | 368.91 | 1.5:1 | mom_decay/near_resist/low_rr |
| 15 | **NASDAQ:SNEX** | NASDAQ:SNEX | **55.2** | ⚪C | 45.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 122.46 | 113.3 | 134.3 | 1.3:1 | near_resist/low_rr |
| 16 | **NASDAQ:NVMI** | NASDAQ:NVMI | **54.4** | ⚪C | 46.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 516.03 | 455.22 | 596.81 | 1.3:1 | mom_decay/chop/low_rr |
| 17 | **NYSE:TT** | NYSE:TT | **53.6** | 🟢A | 40 | 74 | WARN Long (Cautious) | Pullback Buy (Near Support) | 463.7 | 449.11 | 492.41 | 2:1 | near_resist/chop/low_rr |
| 18 | **NYSE:SMP** | NYSE:SMP | **52.8** | ⚪C | 54.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.72 | 36.56 | 42.06 | 1.5:1 | near_resist/low_rr |
| 19 | **NYSE:DELL** | NYSE:DELL | **51.9** | 🟢A | 34.9 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 381.78 | 329.67 | 458.21 | 1.5:1 | low_rr |
| 20 | **NYSE:SXI** | NYSE:SXI | **50.4** | ⚪C | 42.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 294.87 | 279.39 | 317.57 | 1.5:1 | near_resist/chop |
| 21 | **NYSE:DOCN** | NYSE:DOCN | **50.3** | ⚪C | 36.8 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 168.33 | 148.13 | 197.96 | 1.5:1 | mom_decay/low_rr |
| 22 | **NASDAQ:ORRF** | NASDAQ:ORRF | **49.2** | ⚪C | 48.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 37.85 | 36.2 | 40.66 | 1.7:1 | near_resist/chop/low_rr |
| 23 | **NASDAQ:NBIS** | NASDAQ:NBIS | **49** | 🔵B | 22 | 77 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 220.12 | 182.81 | 274.84 | 1.5:1 | mom_decay/near_resist/low_rr |
| 24 | **NASDAQ:INCY** | NASDAQ:INCY | **48.6** | ⚪C | 43 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 101.68 | 96.83 | 109.63 | 1.6:1 | near_resist/chop/low_rr |
| 25 | **NYSE:LLY** | NYSE:LLY | **48.3** | ⚪C | 38.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 1144.68 | 1086.3 | 1230.3 | 1.5:1 | near_resist/low_rr |
| 26 | **NASDAQ:NBIX** | NASDAQ:NBIX | **47.3** | 🔵B | 25.1 | 68 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 165.24 | 158.3 | 175.42 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 27 | **NASDAQ:RMBS** | NASDAQ:RMBS | **46.1** | ⚪C | 43.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 144.64 | 118.35 | 175.33 | 1.2:1 | mom_decay |
| 28 | **NYSE:C** | NYSE:C | **45.3** | ⚪C | 30.5 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 134.73 | 129.48 | 142.44 | 1.5:1 | fake_break/near_resist/low_rr |
| 29 | **NYSE:FOR** | NYSE:FOR | **44.7** | ⚪C | 32.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 29.03 | 27.81 | 30.82 | 1.5:1 | fake_break/near_resist/low_rr |
| 30 | **NYSE:AIR** | NYSE:AIR | **44.2** | ⚪C | 30.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 120.13 | 113.64 | 129.64 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 31 | **NYSE:TSM** | NYSE:TSM | **44.1** | ⚪C | 31.2 | 51 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 427.92 | 400.96 | 467.46 | 1.5:1 | mom_decay/low_rr |
| 32 | **NASDAQ:ADEA** | NASDAQ:ADEA | **43.6** | ⚪C | 39.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 30.07 | 25.83 | 35.23 | 1.2:1 | near_resist/low_rr |
| 33 | **NYSE:SN** | NYSE:SN | **43.2** | 🟢A | 30 | 63 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 128.48 | 120.39 | 139.27 | 1.3:1 | near_resist/chop/bear_div/low_rr |
| 34 | **NASDAQ:BELFA** | NASDAQ:BELFA | **42.9** | ⚪C | 29.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 246.23 | 220.3 | 280.47 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 35 | **NASDAQ:PLXS** | NASDAQ:PLXS | **42.2** | ⚪C | 33.4 | 43 | NEUTRAL No Trade (Neutral) | Trend Continuation | 281.48 | 264.17 | 306.87 | 1.5:1 | near_resist/low_rr |
| 36 | **NASDAQ:ARM** | NASDAQ:ARM | **42.2** | ⚪C | 24.7 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 324.86 | 264.44 | 413.48 | 1.5:1 | mom_decay/low_rr |
| 37 | **NYSE:DKS** | NYSE:DKS | **41.5** | ⚪C | 32.1 | 43 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 220.24 | 201 | 245.38 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 38 | **NASDAQ:KRYS** | NASDAQ:KRYS | **41.4** | ⚪C | 24 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 309.75 | 294.42 | 332.24 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 39 | **NASDAQ:CORZ** | NASDAQ:CORZ | **40.9** | ⚪C | 21.8 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 27.01 | 24.38 | 30.87 | 1.5:1 | mom_decay/bear_div/low_rr |
| 40 | **NASDAQ:PANW** | NASDAQ:PANW | **40.4** | ⚪C | 25.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 260.52 | 238.64 | 292.62 | 1.5:1 | mom_decay/near_resist/low_rr |
| 41 | **NASDAQ:CPRX** | NASDAQ:CPRX | **38.4** | ⚪C | 30.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.87 | 31.21 | 31.47 | -1.8:1 | fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 42 | **NYSE:JBL** | NYSE:JBL | **38.2** | 🔵B | 21.7 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 356.94 | 329.77 | 394.99 | 1.4:1 | mom_decay/near_resist/chop/low_rr |
| 43 | **NASDAQ:MRVL** | NASDAQ:MRVL | **36.9** | ⚪C | 32.8 | 43 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 266.88 | 220.44 | 328.8 | 1.3:1 | overheated/low_rr |
| 44 | **NYSE:PFS** | NYSE:PFS | **36.2** | ⚪C | 28.3 | 48 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 22.62 | 21.9 | 24.02 | 1.9:1 | near_resist/chop/low_rr |
| 45 | **NASDAQ:NBN** | NASDAQ:NBN | **35.1** | ⚪C | 23.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 122.46 | 115.87 | 132.77 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 46 | **NASDAQ:ALAB** | NASDAQ:ALAB | **29.7** | ⚪C | 20.8 | 43 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 341.7 | 293.01 | 406.62 | 1.3:1 | overheated/mom_decay/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:KLAC (NASDAQ:KLAC)

| Field | Value |
|-------|-------|
| Combined Score | **72** |
| Tech Score | 62.3 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 2139.37 |
| **Entry** | **2139.37** |
| **Stop** | **1959.66** (ATR × 1.5) |
| **Target** | **2402.94** |
| R/R | 1.5:1 |
| RSI | 62.9 |
| ATR% | 5.6% |
| Dist EMA20 | 9.1% |
| Chase OK | **YES** |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | None |

### 2. NASDAQ:ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **70.2** |
| Tech Score | 58.6 (Trend Follow (HH/HL Intact)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 1777.77 |
| **Entry** | **1777.77** |
| **Stop** | **1657.77** (ATR × 1.5) |
| **Target** | **1953.77** |
| R/R | 1.5:1 |
| RSI | 65 |
| ATR% | 4.5% |
| Dist EMA20 | 8.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist |

### 3. NYSE:JHG (NYSE:JHG)

| Field | Value |
|-------|-------|
| Combined Score | **68.9** |
| Tech Score | 53.1 (Breakout (Squeeze Release)) |
| News Score | 80 → GREEN Long (Strong) |
| Current Price | 51.87 |
| **Entry** | **52.03** |
| **Stop** | **51.68** (ATR × 1.8) |
| **Target** | **52.13** |
| R/R | 0.3:1 |
| RSI | 63.4 |
| ATR% | 0.2% |
| Dist EMA20 | 0.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break mom_decay near_resist low_rr |

### 4. NYSE:CARR (NYSE:CARR)

| Field | Value |
|-------|-------|
| Combined Score | **67.5** |
| Tech Score | 63.2 (Pullback Buy (Near Support)) |
| News Score | 74 → WARN Long (Cautious) |
| Current Price | 71.24 |
| **Entry** | **70.17** |
| **Stop** | **66.25** (ATR × 2) |
| **Target** | **76.23** |
| R/R | 1.5:1 |
| RSI | 67.2 |
| ATR% | 3.5% |
| Dist EMA20 | 8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop |

### 5. NASDAQ:MNST (NASDAQ:MNST)

| Field | Value |
|-------|-------|
| Combined Score | **65.2** |
| Tech Score | 60.6 (Pullback Buy (Near Support)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 90.15 |
| **Entry** | **88.8** |
| **Stop** | **86.54** (ATR × 2) |
| **Target** | **93.76** |
| R/R | 2.2:1 |
| RSI | 65.7 |
| ATR% | 2% |
| Dist EMA20 | 3.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist |

### 6. NASDAQ:AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **64.2** |
| Tech Score | 51.3 (Trend Follow (HH/HL Intact)) |
| News Score | 71 → WARN Long (Cautious) |
| Current Price | 499.21 |
| **Entry** | **499.21** |
| **Stop** | **458.03** (ATR × 1.5) |
| **Target** | **559.61** |
| R/R | 1.5:1 |
| RSI | 64 |
| ATR% | 5.5% |
| Dist EMA20 | 9.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop |

### 7. NYSE:MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **62.5** |
| Tech Score | 43.8 (Trend Follow (HH/HL Intact)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 210.25 |
| **Entry** | **210.25** |
| **Stop** | **201.42** (ATR × 1.5) |
| **Target** | **223.2** |
| R/R | 1.5:1 |
| RSI | 61.6 |
| ATR% | 2.8% |
| Dist EMA20 | 2.8% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 8. NYSE:ENVA (NYSE:ENVA)

| Field | Value |
|-------|-------|
| Combined Score | **59.3** |
| Tech Score | 43.2 (Trend Continuation) |
| News Score | 71 → WARN Long (Cautious) |
| Current Price | 179.41 |
| **Entry** | **179.41** |
| **Stop** | **171.34** (ATR × 1.5) |
| **Target** | **191.25** |
| R/R | 1.5:1 |
| RSI | 66.3 |
| ATR% | 3% |
| Dist EMA20 | 8.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 9. NYSE:APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **57.6** |
| Tech Score | 43.7 (Trend Continuation) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 154.07 |
| **Entry** | **154.07** |
| **Stop** | **143.67** (ATR × 1.5) |
| **Target** | **169.32** |
| R/R | 1.5:1 |
| RSI | 63.2 |
| ATR% | 4.5% |
| Dist EMA20 | 9.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist low_rr |

### 10. NYSE:JCI (NYSE:JCI)

| Field | Value |
|-------|-------|
| Combined Score | **57.6** |
| Tech Score | 35.6 (Trend Continuation) |
| News Score | 78 → WARN Long (Cautious) |
| Current Price | 147.75 |
| **Entry** | **147.75** |
| **Stop** | **141.1** (ATR × 1.5) |
| **Target** | **157.5** |
| R/R | 1.5:1 |
| RSI | 60.4 |
| ATR% | 3% |
| Dist EMA20 | 4.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 11. NASDAQ:CRDO (NASDAQ:CRDO)

| Field | Value |
|-------|-------|
| Combined Score | **56.4** |
| Tech Score | 40.3 (Trend Follow (HH/HL Intact)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 234.32 |
| **Entry** | **234.32** |
| **Stop** | **197.77** (ATR × 1.5) |
| **Target** | **287.93** |
| R/R | 1.5:1 |
| RSI | 62.7 |
| ATR% | 10.4% |
| Dist EMA20 | 12% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 12. NASDAQ:LRCX (NASDAQ:LRCX)

| Field | Value |
|-------|-------|
| Combined Score | **55.7** |
| Tech Score | 36.5 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → WARN Long (Cautious) |
| Current Price | 327.16 |
| **Entry** | **327.16** |
| **Stop** | **298.7** (ATR × 1.5) |
| **Target** | **368.91** |
| R/R | 1.5:1 |
| RSI | 59.4 |
| ATR% | 5.8% |
| Dist EMA20 | 5.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 13. NYSE:TT (NYSE:TT)

| Field | Value |
|-------|-------|
| Combined Score | **53.6** |
| Tech Score | 40 (Pullback Buy (Near Support)) |
| News Score | 74 → WARN Long (Cautious) |
| Current Price | 470.76 |
| **Entry** | **463.7** |
| **Stop** | **449.11** (ATR × 2) |
| **Target** | **492.41** |
| R/R | 2:1 |
| RSI | 55.5 |
| ATR% | 2.3% |
| Dist EMA20 | 2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 14. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **51.9** |
| Tech Score | 34.9 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 381.78 |
| **Entry** | **381.78** |
| **Stop** | **329.67** (ATR × 1.5) |
| **Target** | **458.21** |
| R/R | 1.5:1 |
| RSI | 63.5 |
| ATR% | 9.1% |
| Dist EMA20 | 11.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 15. NYSE:SN (NYSE:SN)

| Field | Value |
|-------|-------|
| Combined Score | **43.2** |
| Tech Score | 30 (Reversal (Bullish RSI Divergence)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 128.48 |
| **Entry** | **128.48** |
| **Stop** | **120.39** (ATR × 1.5) |
| **Target** | **139.27** |
| R/R | 1.3:1 |
| RSI | 66.2 |
| ATR% | 4.2% |
| Dist EMA20 | 9.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop bear_div low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:TRNO** | NYSE:TRNO | 62.4 | 45.6 | 100(hot) | 66.93 | **62.91** | 63.99 | 69.87 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/10 13:56:34*