# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-21　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **SPNT** | NYSE:SPNT | **62.1** | ⚪C | 70.1 | 50 | NEUTRAL No Trade (No Data) | Reversal (Volume Climax) | 24.75 | 23.93 | 25.84 | 1.3:1 | near_resist/chop/low_rr |
| 2 | **ASX** | NYSE:ASX | **61.8** | ⚪C | 58 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 41.63 | 39.26 | 45.11 | 1.5:1 | chop/low_rr |
| 3 | **BAP** | NYSE:BAP | **61.7** | ⚪C | 61.1 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 382.98 | 366.02 | 403.79 | 1.2:1 | near_resist/chop |
| 4 | **BGC** | NASDAQ:BGC | **59.4** | ⚪C | 54.7 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 12.26 | 11.56 | 13.14 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 5 | **DT** | NYSE:DT | **59.2** | ⚪C | 51.6 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 55.14 | 52.41 | 59.14 | 1.5:1 | near_resist/chop |
| 6 | **CRWD** | NASDAQ:CRWD | **57.6** | ⚪C | 48.4 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 237.65 | 218.04 | 266.41 | 1.5:1 | bear_div |
| 7 | **DELL** | NYSE:DELL | **56.4** | ⚪C | 52.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 568.06 | 512.67 | 649.29 | 1.5:1 | OK |
| 8 | **TEM** | NASDAQ:TEM | **55.6** | 🟢A | 40.6 | 78 | GREEN Long (Strong) | Overextended Chase (High Risk) | 77.84 | 70.72 | 87.34 | 1.3:1 | overheated/near_resist/low_rr |
| 9 | **ANET** | NYSE:ANET | **55.3** | 🟢A | 41.2 | 64 | GREEN Long (Mid) | Breakout (Squeeze Release) | 199.99 | 185.39 | 218.83 | 1.3:1 | near_resist/chop/low_rr |
| 10 | **PLTR** | NASDAQ:PLTR | **54.9** | ⚪C | 56.2 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 174.98 | 163.43 | 191.85 | 1.5:1 | mom_decay/near_resist |
| 11 | **TSM** | NYSE:TSM | **54.7** | 🟢A | 51.1 | 60 | GREEN Long (Mid) | Reversal (MACD Cross) | 434.67 | 420.33 | 453.8 | 1.3:1 | near_resist/chop/low_rr |
| 12 | **AMD** | NASDAQ:AMD | **54.6** | ⚪C | 49.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 559.82 | 526.23 | 609.08 | 1.5:1 | near_resist/chop/low_rr |
| 13 | **LITE** | NASDAQ:LITE | **53.5** | ⚪C | 44.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 930.91 | 840.15 | 1064.03 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 14 | **SMCI** | NASDAQ:SMCI | **53** | 🟢A | 37.4 | 64 | GREEN Long (Mid) | Breakout (Squeeze Release) | 39.21 | 34.87 | 44.95 | 1.3:1 | mom_decay/near_resist/low_rr |
| 15 | **HRMY** | NASDAQ:HRMY | **52.3** | ⚪C | 53.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.39 | 39.5 | 44.54 | 1.7:1 | mom_decay/near_resist/low_rr |
| 16 | **INTC** | NASDAQ:INTC | **51.2** | ⚪C | 43.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 108.6 | 100.13 | 121.02 | 1.5:1 | chop |
| 17 | **NBN** | NASDAQ:NBN | **51** | ⚪C | 51.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 131.44 | 125.7 | 141.18 | 1.7:1 | near_resist/chop/low_rr |
| 18 | **GRAL** | NASDAQ:GRAL | **51** | ⚪C | 43.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 81.01 | 73.94 | 90.26 | 1.3:1 | mom_decay/near_resist/low_rr |
| 19 | **LTC** | NYSE:LTC | **50.7** | ⚪C | 42.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 42.56 | 41.16 | 44.62 | 1.5:1 | near_resist/low_rr |
| 20 | **VSAT** | NASDAQ:VSAT | **49.9** | ⚪C | 42.9 | 48 | NEUTRAL No Trade (Neutral) | Trend Continuation | 76.38 | 70.42 | 85.12 | 1.5:1 | chop/low_rr |
| 21 | **HGTY** | NYSE:HGTY | **49.1** | ⚪C | 40.1 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 13.98 | 13.01 | 15.23 | 1.3:1 | near_resist/low_rr |
| 22 | **OTC:SMNEY** | OTC:SMNEY | **48.2** | ⚪C | 38.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 23 | **INCY** | NASDAQ:INCY | **47.9** | 🟢A | 35.1 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 123.43 | 118.79 | 131.83 | 1.8:1 | mom_decay/near_resist/chop/low_rr |
| 24 | **MSFT** | NASDAQ:MSFT | **47.4** | ⚪C | 45.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 486.37 | 474.03 | 513.53 | 2.2:1 | mom_decay/near_resist |
| 25 | **P** | NYSE:P | **47.4** | ⚪C | 39.3 | 47 | NEUTRAL No Trade (Neutral) | Trend Continuation | 104.14 | 96.49 | 115.37 | 1.5:1 | mom_decay/chop/low_rr |
| 26 | **MU** | NASDAQ:MU | **47.3** | ⚪C | 39.5 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1000.56 | 930.47 | 1101.13 | 1.4:1 | near_resist/chop/low_rr |
| 27 | **PANW** | NASDAQ:PANW | **45.3** | 🔵B | 25.2 | 63 | GREEN Long (Mid) | Trend Continuation | 363.58 | 334.68 | 405.97 | 1.5:1 | near_resist/chop/low_rr |
| 28 | **OTC:SMTGY** | OTC:SMTGY | **43** | ⚪C | 30 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.72 | 6.35 | 7.27 | 1.5:1 | near_resist/chop/low_rr |
| 29 | **HOOD** | NASDAQ:HOOD | **43** | ⚪C | 30 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 119.82 | 109.04 | 135.64 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 30 | **OTC:HTHIY** | OTC:HTHIY | **42.8** | ⚪C | 38 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.98 | 33.66 | 37.36 | 1.8:1 | fake_break/near_resist/chop/low_rr |
| 31 | **NBIS** | NASDAQ:NBIS | **42** | ⚪C | 22.4 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 223.54 | 201.41 | 256 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 32 | **BE** | NYSE:BE | **41.6** | ⚪C | 27.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 265.63 | 238.93 | 304.78 | 1.5:1 | chop/low_rr |
| 33 | **MRVL** | NASDAQ:MRVL | **41.5** | ⚪C | 35.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 240.59 | 219.34 | 269.16 | 1.3:1 | near_resist/chop |
| 34 | **QCOM** | NASDAQ:QCOM | **41** | ⚪C | 35.7 | 49 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 175.05 | 159.95 | 195.49 | 1.4:1 | near_resist/low_rr |
| 35 | **NVDA** | NASDAQ:NVDA | **40.3** | ⚪C | 33.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 218.94 | 210.27 | 234.27 | 1.8:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 36 | **HPE** | NYSE:HPE | **39.9** | ⚪C | 20.9 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 60.76 | 54.56 | 69.85 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 37 | **AAPL** | NASDAQ:AAPL | **39.8** | ⚪C | 24.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 336.13 | 324.53 | 353.14 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 38 | **CET** | AMEX:CET | **39.2** | ⚪C | 32 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 54.7 | 53.98 | 57.08 | 3.3:1 | near_resist/chop/low_rr |
| 39 | **SNDK** | NASDAQ:SNDK | **38.3** | ⚪C | 24.1 | 47 | NEUTRAL No Trade (Neutral) | Trend Continuation | 1791.82 | 1638.62 | 2016.51 | 1.5:1 | near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. TEM (NASDAQ:TEM)

| Field | Value |
|-------|-------|
| Combined Score | **55.6** |
| Tech Score | 40.6 (Overextended Chase (High Risk)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 77.84 |
| **Entry** | **77.84** |
| **Stop** | **70.72** (ATR × 1.5) |
| **Target** | **87.34** |
| R/R | 1.3:1 |
| RSI | 67.8 |
| ATR% | 6.1% |
| Dist EMA20 | 18.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated near_resist low_rr |

### 2. ANET (NYSE:ANET)

| Field | Value |
|-------|-------|
| Combined Score | **55.3** |
| Tech Score | 41.2 (Breakout (Squeeze Release)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 199.39 |
| **Entry** | **199.99** |
| **Stop** | **185.39** (ATR × 1.8) |
| **Target** | **218.83** |
| R/R | 1.3:1 |
| RSI | 55.8 |
| ATR% | 3.9% |
| Dist EMA20 | 2.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 3. TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **54.7** |
| Tech Score | 51.1 (Reversal (MACD Cross)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 434.67 |
| **Entry** | **434.67** |
| **Stop** | **420.33** (ATR × 1.5) |
| **Target** | **453.8** |
| R/R | 1.3:1 |
| RSI | 56.9 |
| ATR% | 2.2% |
| Dist EMA20 | 2.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 4. SMCI (NASDAQ:SMCI)

| Field | Value |
|-------|-------|
| Combined Score | **53** |
| Tech Score | 37.4 (Breakout (Squeeze Release)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 39.09 |
| **Entry** | **39.21** |
| **Stop** | **34.87** (ATR × 1.8) |
| **Target** | **44.95** |
| R/R | 1.3:1 |
| RSI | 55.4 |
| ATR% | 6% |
| Dist EMA20 | 4.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 5. INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **47.9** |
| Tech Score | 35.1 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 125.31 |
| **Entry** | **123.43** |
| **Stop** | **118.79** (ATR × 2) |
| **Target** | **131.83** |
| R/R | 1.8:1 |
| RSI | 52.5 |
| ATR% | 2.6% |
| Dist EMA20 | 0.6% |
| Chase OK | NO |
| MTF Alignment | 2/3 (67%) |
| Risk Flags | mom_decay near_resist chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/21 21:00:04*