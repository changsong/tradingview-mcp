# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-29　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:NOK** | NYSE:NOK | **68.9** | 🟡C+ | 49.1 | 86 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 15.28 | 13.77 | 17.5 | 1.5:1 | OK |
| 2 | **NASDAQ:MRVL** | NASDAQ:MRVL | **65.4** | 🟡C+ | 54.6 | 94 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 204.83 | 183.32 | 233.51 | 1.3:1 | overheated |
| 3 | **NASDAQ:INCY** | NASDAQ:INCY | **64.6** | 🟢A | 49.3 | 75 | GREEN Long (Strong) | Breakout (Squeeze Release) | 97.79 | 93.11 | 103.59 | 1.2:1 | mom_decay/near_resist/chop |
| 4 | **NYSE:TSM** | NYSE:TSM | **63.8** | 🟢A | 51.4 | 70 | GREEN Long (Mid) | Breakout (Squeeze Release) | 426.13 | 398.09 | 462.04 | 1.3:1 | near_resist |
| 5 | **NASDAQ:ADI** | NASDAQ:ADI | **61.8** | 🟢A | 35.4 | 89 | GREEN Long (Strong) | Trend Continuation | 419.01 | 393.87 | 455.88 | 1.5:1 | mom_decay/near_resist/low_rr |
| 6 | **NYSE:MOD** | NYSE:MOD | **61.6** | 🟢A | 34.4 | 90 | GREEN Long (Strong) | Breakout (Squeeze Release) | 271.51 | 227.82 | 330.25 | 1.3:1 | mom_decay/bear_div/low_rr |
| 7 | **NYSE:TRNO** | NYSE:TRNO | **60.5** | ⚪C | 59.1 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 67.05 | 64.92 | 69.52 | 1.2:1 | near_resist/chop/low_rr |
| 8 | **NYSE:GLW** | NYSE:GLW | **60.5** | 🟢A | 39.9 | 79 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 182.97 | 162.66 | 212.76 | 1.5:1 | mom_decay |
| 9 | **NASDAQ:OSBC** | NASDAQ:OSBC | **59** | ⚪C | 56.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 21.36 | 20.49 | 22.42 | 1.2:1 | near_resist/chop/low_rr |
| 10 | **NASDAQ:LRCX** | NASDAQ:LRCX | **57** | 🟢A | 42.6 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 318 | 295.58 | 350.88 | 1.5:1 | OK |
| 11 | **NYSE:COHR** | NYSE:COHR | **56.8** | 🔵B | 29 | 86 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 376.95 | 334.54 | 439.15 | 1.5:1 | mom_decay/low_rr |
| 12 | **NYSE:QBTS** | NYSE:QBTS | **56.3** | 🟢A | 43.8 | 75 | GREEN Long (Strong) | Overextended Chase (High Risk) | 29.49 | 25.33 | 35.03 | 1.3:1 | overheated/low_rr |
| 13 | **NASDAQ:CRDO** | NASDAQ:CRDO | **56** | 🟡C+ | 44.3 | 86 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 222.35 | 194 | 260.15 | 1.3:1 | overheated |
| 14 | **NASDAQ:ERIC** | NASDAQ:ERIC | **55.5** | 🟢A | 40.2 | 66 | WARN Long (Cautious) | Trend Continuation | 12.74 | 12.17 | 13.58 | 1.5:1 | OK |
| 15 | **NYSE:DKS** | NYSE:DKS | **55.2** | ⚪C | 45 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 226.99 | 209.2 | 250.07 | 1.3:1 | near_resist/chop/low_rr |
| 16 | **NYSE:BA** | NYSE:BA | **54.1** | 🟡C+ | 39.8 | 88 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 225.35 | 214.14 | 243.42 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 17 | **NASDAQ:TTMI** | NASDAQ:TTMI | **53.8** | 🟢A | 40.7 | 61 | GREEN Long (Mid) | Trend Continuation | 187.79 | 168.35 | 216.3 | 1.5:1 | OK |
| 18 | **NYSE:SMP** | NYSE:SMP | **53.1** | ⚪C | 53.1 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 39.98 | 37.42 | 43.76 | 1.5:1 | near_resist/low_rr |
| 19 | **NASDAQ:WDC** | NASDAQ:WDC | **52.4** | 🟡C+ | 40.3 | 83 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 531.18 | 485.76 | 591.73 | 1.3:1 | overheated/bear_div |
| 20 | **NASDAQ:AVGO** | NASDAQ:AVGO | **52.2** | ⚪C | 45.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 427.86 | 397.4 | 467.11 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 21 | **NYSE:RIO** | NYSE:RIO | **51.6** | 🟢A | 35.6 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 106.47 | 102 | 113.03 | 1.5:1 | mom_decay/chop/low_rr |
| 22 | **NASDAQ:AMAT** | NASDAQ:AMAT | **51.5** | ⚪C | 44.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 449.68 | 420 | 493.21 | 1.5:1 | near_resist/chop |
| 23 | **NASDAQ:APLD** | NASDAQ:APLD | **50.4** | 🔵B | 25.4 | 88 | WARN Long (Cautious) | Overextended Chase (High Risk) | 49.65 | 42.8 | 58.79 | 1.3:1 | overheated/fake_break/near_resist/bear_div |
| 24 | **NYSE:ENS** | NYSE:ENS | **48.2** | 🔵B | 27.3 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 228.33 | 211.21 | 253.45 | 1.5:1 | mom_decay/bear_div/low_rr |
| 25 | **NASDAQ:RMBS** | NASDAQ:RMBS | **47.8** | ⚪C | 32.6 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 148.02 | 133.14 | 169.84 | 1.5:1 | low_rr |
| 26 | **NASDAQ:INTC** | NASDAQ:INTC | **47.4** | ⚪C | 43.3 | 41 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 120.89 | 106.02 | 142.7 | 1.5:1 | mom_decay/low_rr |
| 27 | **NYSE:NVT** | NYSE:NVT | **47.3** | ⚪C | 31.8 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 164.87 | 154.98 | 179.38 | 1.5:1 | mom_decay/low_rr |
| 28 | **NYSE:HPE** | NYSE:HPE | **47.1** | 🟢A | 32.5 | 69 | WARN Long (Cautious) | Overextended Chase (High Risk) | 38.21 | 35.69 | 41.57 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 29 | **NYSE:SXI** | NYSE:SXI | **46** | ⚪C | 43.3 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 275.48 | 261.02 | 294.76 | 1.3:1 | near_resist/low_rr |
| 30 | **NYSE:BE** | NYSE:BE | **45.7** | 🔵B | 15.1 | 79 | GREEN Long (Strong) | Breakout (Squeeze Release) | 290.88 | 243.03 | 355.26 | 1.3:1 | mom_decay/bear_div/low_rr |
| 31 | **NASDAQ:AMD** | NASDAQ:AMD | **45** | 🔵B | 21.6 | 80 | GREEN Long (Strong) | Overextended Chase (High Risk) | 518.09 | 473.79 | 577.15 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 32 | **NASDAQ:RKLB** | NASDAQ:RKLB | **45** | 🔵B | 19.6 | 83 | GREEN Long (Strong) | Overextended Chase (High Risk) | 148.03 | 128.05 | 174.68 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 33 | **NASDAQ:NWBI** | NASDAQ:NWBI | **44.7** | ⚪C | 32.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 14.07 | 13.71 | 14.6 | 1.5:1 | near_resist/bear_div/low_rr |
| 34 | **NYSE:GNRC** | NYSE:GNRC | **44.6** | ⚪C | 30.6 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 279.45 | 261.01 | 306.5 | 1.5:1 | fake_break/near_resist/bear_div |
| 35 | **NYSE:HG** | NYSE:HG | **44.5** | 🟢A | 31.5 | 64 | GREEN Long (Mid) | Pullback Buy (Near Support) | 29.55 | 28.14 | 31.86 | 1.6:1 | mom_decay/chop |
| 36 | **NASDAQ:KLAC** | NASDAQ:KLAC | **43.7** | 🔵B | 20.5 | 66 | GREEN Long (Mid) | Trend Continuation | 1927.63 | 1794.62 | 2122.71 | 1.5:1 | near_resist/chop/low_rr |
| 37 | **NASDAQ:ASML** | NASDAQ:ASML | **43.4** | 🔵B | 21.4 | 64 | GREEN Long (Mid) | Trend Continuation | 1605.77 | 1504.61 | 1754.14 | 1.5:1 | near_resist/chop/low_rr |
| 38 | **NYSE:PACS** | NYSE:PACS | **42.6** | ⚪C | 37.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 37.43 | 32.98 | 43.02 | 1.3:1 | chop |
| 39 | **NYSE:JHG** | NYSE:JHG | **41.7** | ⚪C | 36.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 50.99 | 51.56 | 51.98 | -1.7:1 | mom_decay/near_resist/low_rr |
| 40 | **NYSE:IRM** | NYSE:IRM | **41.5** | ⚪C | 33.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 124.93 | 120.74 | 132.92 | 1.9:1 | mom_decay/bear_div |
| 41 | **NYSE:MS** | NYSE:MS | **39.9** | ⚪C | 24.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 203.79 | 197.06 | 213.65 | 1.5:1 | fake_break/bull_trap/near_resist/bear_div |
| 42 | **NASDAQ:MPWR** | NASDAQ:MPWR | **39.8** | ⚪C | 22 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 1633.17 | 1513.13 | 1809.23 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 43 | **NASDAQ:TLN** | NASDAQ:TLN | **39.2** | ⚪C | 33.4 | 48 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 375.75 | 342.56 | 420.38 | 1.3:1 | near_resist/chop/low_rr |
| 44 | **NYSE:AROC** | NYSE:AROC | **38** | ⚪C | 30 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 34.08 | 32.11 | 37.09 | 1.5:1 | mom_decay/chop |
| 45 | **NASDAQ:SANM** | NASDAQ:SANM | **37.2** | 🔵B | 19.3 | 64 | GREEN Long (Mid) | Overextended Chase (High Risk) | 263.23 | 241.91 | 291.66 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 46 | **NYSE:FOR** | NYSE:FOR | **36.5** | ⚪C | 27.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 27.01 | 25.72 | 29.12 | 1.6:1 | near_resist/chop/low_rr |
| 47 | **NASDAQ:CPRX** | NASDAQ:CPRX | **35.2** | 🔵B | 18.7 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 30.82 | 31.16 | 31.42 | -1.8:1 | fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 48 | **NASDAQ:ADEA** | NASDAQ:ADEA | **33.2** | ⚪C | 22 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 26.79 | 23.66 | 30.74 | 1.3:1 | mom_decay/near_resist |
| 49 | **NASDAQ:IREN** | NASDAQ:IREN | **32.1** | ⚪C | 20.2 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 64.05 | 55.69 | 75.19 | 1.3:1 | overheated/fake_break/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **64.6** |
| Tech Score | 49.3 (Breakout (Squeeze Release)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 97.5 |
| **Entry** | **97.79** |
| **Stop** | **93.11** (ATR × 1.8) |
| **Target** | **103.59** |
| R/R | 1.2:1 |
| RSI | 52 |
| ATR% | 2.5% |
| Dist EMA20 | 0.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist chop |

### 2. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **63.8** |
| Tech Score | 51.4 (Breakout (Squeeze Release)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 424.86 |
| **Entry** | **426.13** |
| **Stop** | **398.09** (ATR × 1.8) |
| **Target** | **462.04** |
| R/R | 1.3:1 |
| RSI | 63.6 |
| ATR% | 3.5% |
| Dist EMA20 | 5.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist |

### 3. NASDAQ:ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **61.8** |
| Tech Score | 35.4 (Trend Continuation) |
| News Score | 89 → GREEN Long (Strong) |
| Current Price | 419.01 |
| **Entry** | **419.01** |
| **Stop** | **393.87** (ATR × 1.5) |
| **Target** | **455.88** |
| R/R | 1.5:1 |
| RSI | 58.9 |
| ATR% | 4% |
| Dist EMA20 | 3.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist low_rr |

### 4. NYSE:MOD (NYSE:MOD)

| Field | Value |
|-------|-------|
| Combined Score | **61.6** |
| Tech Score | 34.4 (Breakout (Squeeze Release)) |
| News Score | 90 → GREEN Long (Strong) |
| Current Price | 270.7 |
| **Entry** | **271.51** |
| **Stop** | **227.82** (ATR × 1.8) |
| **Target** | **330.25** |
| R/R | 1.3:1 |
| RSI | 53.2 |
| ATR% | 8.8% |
| Dist EMA20 | 2.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay bear_div low_rr |

### 5. NYSE:GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **60.5** |
| Tech Score | 39.9 (Trend Follow (HH/HL Intact)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 182.97 |
| **Entry** | **182.97** |
| **Stop** | **162.66** (ATR × 1.5) |
| **Target** | **212.76** |
| R/R | 1.5:1 |
| RSI | 51.4 |
| ATR% | 7.4% |
| Dist EMA20 | -0.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay |

### 6. NASDAQ:LRCX (NASDAQ:LRCX)

| Field | Value |
|-------|-------|
| Combined Score | **57** |
| Tech Score | 42.6 (Trend Follow (HH/HL Intact)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 318 |
| **Entry** | **318** |
| **Stop** | **295.58** (ATR × 1.5) |
| **Target** | **350.88** |
| R/R | 1.5:1 |
| RSI | 66 |
| ATR% | 4.7% |
| Dist EMA20 | 8.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | None |

### 7. NYSE:QBTS (NYSE:QBTS)

| Field | Value |
|-------|-------|
| Combined Score | **56.3** |
| Tech Score | 43.8 (Overextended Chase (High Risk)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 29.49 |
| **Entry** | **29.49** |
| **Stop** | **25.33** (ATR × 1.5) |
| **Target** | **35.03** |
| R/R | 1.3:1 |
| RSI | 67.3 |
| ATR% | 9.4% |
| Dist EMA20 | 26.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated low_rr |

### 8. NASDAQ:ERIC (NASDAQ:ERIC)

| Field | Value |
|-------|-------|
| Combined Score | **55.5** |
| Tech Score | 40.2 (Trend Continuation) |
| News Score | 66 → WARN Long (Cautious) |
| Current Price | 12.74 |
| **Entry** | **12.74** |
| **Stop** | **12.17** (ATR × 1.5) |
| **Target** | **13.58** |
| R/R | 1.5:1 |
| RSI | 54.5 |
| ATR% | 3% |
| Dist EMA20 | 1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 9. NASDAQ:TTMI (NASDAQ:TTMI)

| Field | Value |
|-------|-------|
| Combined Score | **53.8** |
| Tech Score | 40.7 (Trend Continuation) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 187.79 |
| **Entry** | **187.79** |
| **Stop** | **168.35** (ATR × 1.5) |
| **Target** | **216.3** |
| R/R | 1.5:1 |
| RSI | 68 |
| ATR% | 6.9% |
| Dist EMA20 | 11.8% |
| Chase OK | **YES** |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | None |

### 10. NYSE:RIO (NYSE:RIO)

| Field | Value |
|-------|-------|
| Combined Score | **51.6** |
| Tech Score | 35.6 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 106.47 |
| **Entry** | **106.47** |
| **Stop** | **102** (ATR × 1.5) |
| **Target** | **113.03** |
| R/R | 1.5:1 |
| RSI | 57.1 |
| ATR% | 2.8% |
| Dist EMA20 | 2.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay chop low_rr |

### 11. NYSE:HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **47.1** |
| Tech Score | 32.5 (Overextended Chase (High Risk)) |
| News Score | 69 → WARN Long (Cautious) |
| Current Price | 38.21 |
| **Entry** | **38.21** |
| **Stop** | **35.69** (ATR × 1.5) |
| **Target** | **41.57** |
| R/R | 1.3:1 |
| RSI | 76.2 |
| ATR% | 4.4% |
| Dist EMA20 | 15% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated bull_trap mom_decay near_resist |

### 12. NYSE:HG (NYSE:HG)

| Field | Value |
|-------|-------|
| Combined Score | **44.5** |
| Tech Score | 31.5 (Pullback Buy (Near Support)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 30 |
| **Entry** | **29.55** |
| **Stop** | **28.14** (ATR × 2) |
| **Target** | **31.86** |
| R/R | 1.6:1 |
| RSI | 39.8 |
| ATR% | 3.1% |
| Dist EMA20 | -4% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay chop |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:NOK** | NYSE:NOK | 68.9 | 49.1 | 86(hot) | 15.28 | **14.36** | 13.26 | 17.3 |
| **NASDAQ:MRVL** | NASDAQ:MRVL | 65.4 | 54.6 | 94(hot) | 204.83 | **192.54** | 176.15 | 233.51 |
| **NASDAQ:CRDO** | NASDAQ:CRDO | 56 | 44.3 | 86(hot) | 222.35 | **209.01** | 184.55 | 260.15 |
| **NYSE:BA** | NYSE:BA | 54.1 | 39.8 | 88(hot) | 228.78 | **215.05** | 214.14 | 243.42 |
| **NASDAQ:WDC** | NASDAQ:WDC | 52.4 | 40.3 | 83(hot) | 531.18 | **499.31** | 470.63 | 591.73 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/29 13:29:09*