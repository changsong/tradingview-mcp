# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-04　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **PRGS** | NASDAQ:PRGS | **68.1** | ⚪C | 71.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 44.74 | 41.72 | 48.62 | 1.3:1 | mom_decay/near_resist |
| 2 | **HGTY** | NYSE:HGTY | **62.4** | ⚪C | 62.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 13.5 | 12.66 | 14.57 | 1.3:1 | mom_decay/near_resist/low_rr |
| 3 | **LTC** | NYSE:LTC | **61.6** | 🟢A | 37 | 86 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 41.9 | 40.89 | 43.37 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 4 | **VRTX** | NASDAQ:VRTX | **60.9** | 🟢A | 53.2 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 557.96 | 538.71 | 586.19 | 1.5:1 | fake_break/near_resist/bear_div |
| 5 | **HRMY** | NASDAQ:HRMY | **60.4** | ⚪C | 59 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 41.86 | 39.91 | 44.71 | 1.5:1 | near_resist |
| 6 | **HG** | NYSE:HG | **59.2** | ⚪C | 57 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 36.22 | 34.68 | 38.1 | 1.2:1 | near_resist/chop/low_rr |
| 7 | **WT** | NYSE:WT | **58.8** | ⚪C | 56.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 24.87 | 23.45 | 26.95 | 1.5:1 | mom_decay/low_rr |
| 8 | **FAF** | NYSE:FAF | **58** | ⚪C | 55 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 76.51 | 74.21 | 79.88 | 1.5:1 | chop/low_rr |
| 9 | **RRC** | NYSE:RRC | **56.4** | ⚪C | 60.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.73 | 40.25 | 44.49 | 1.9:1 | near_resist |
| 10 | **ACGL** | NASDAQ:ACGL | **55.7** | ⚪C | 47.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 100.13 | 96.6 | 104.32 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 11 | **CF** | NYSE:CF | **52.3** | 🟢A | 36.9 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 137.81 | 129.54 | 149.94 | 1.5:1 | fake_break/near_resist/low_rr |
| 12 | **GEN** | NASDAQ:GEN | **51.8** | ⚪C | 44.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.33 | 29.92 | 33.4 | 1.5:1 | fake_break/near_resist/chop |
| 13 | **AJG** | NYSE:AJG | **50.7** | ⚪C | 51.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 262.66 | 251.73 | 281.59 | 1.7:1 | mom_decay/near_resist/low_rr |
| 14 | **HOOD** | NASDAQ:HOOD | **50** | ⚪C | 50 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 122.85 | 110.25 | 139.19 | 1.3:1 | overheated/chop |
| 15 | **WPM** | NYSE:WPM | **49.9** | ⚪C | 38.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 156.63 | 146.06 | 172.14 | 1.5:1 | mom_decay/near_resist/low_rr |
| 16 | **RELY** | NASDAQ:RELY | **49.8** | ⚪C | 38.6 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 26.92 | 25.26 | 29.35 | 1.5:1 | near_resist/bear_div/low_rr |
| 17 | **NEM** | NYSE:NEM | **48.9** | ⚪C | 39.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 130.43 | 123 | 141.33 | 1.5:1 | mom_decay/near_resist/low_rr |
| 18 | **AR** | NYSE:AR | **46.8** | ⚪C | 36.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 39.69 | 38.14 | 41.96 | 1.5:1 | fake_break/near_resist/low_rr |
| 19 | **CRWD** | NASDAQ:CRWD | **46.3** | 🔵B | 28.2 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 214.97 | 194.01 | 245.71 | 1.5:1 | near_resist/bear_div/low_rr |
| 20 | **FCX** | NYSE:FCX | **46.2** | ⚪C | 39.4 | 44 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 72.56 | 67.88 | 79.42 | 1.5:1 | mom_decay/low_rr |
| 21 | **BGC** | NASDAQ:BGC | **45.8** | ⚪C | 34.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 12.15 | 11.55 | 13.03 | 1.5:1 | chop/low_rr |
| 22 | **RIO** | NYSE:RIO | **43.9** | ⚪C | 39.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 101.3 | 98.32 | 107.36 | 2:1 | mom_decay/near_resist/low_rr |
| 23 | **SQM** | NYSE:SQM | **43.5** | ⚪C | 39.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 78.58 | 74.04 | 85.52 | 1.5:1 | near_resist |
| 24 | **DASH** | NASDAQ:DASH | **42.7** | ⚪C | 37.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 218.67 | 206.46 | 237.54 | 1.5:1 | mom_decay/near_resist/low_rr |
| 25 | **OTC:SMNEY** | OTC:SMNEY | **42.2** | ⚪C | 28.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 26 | **AAPL** | NASDAQ:AAPL | **41.4** | ⚪C | 35.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 323.29 | 314.43 | 341.99 | 2.1:1 | fake_break/near_resist/chop/low_rr |
| 27 | **C** | NYSE:C | **41.2** | ⚪C | 35.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 136.07 | 132.61 | 143.67 | 2.2:1 | near_resist/chop/low_rr |
| 28 | **APH** | NYSE:APH | **41** | ⚪C | 31 | 56 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 82.07 | 77.76 | 87.81 | 1.3:1 | near_resist/chop/low_rr |
| 29 | **DELL** | NYSE:DELL | **39.7** | ⚪C | 32.8 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 516.39 | 471.46 | 576.29 | 1.3:1 | overheated/near_resist/chop |
| 30 | **OSBC** | NASDAQ:OSBC | **39.2** | ⚪C | 32 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 25.29 | 24.86 | 26.5 | 2.8:1 | mom_decay/near_resist/chop/low_rr |
| 31 | **J** | NYSE:J | **38.6** | ⚪C | 27 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 145.33 | 141.34 | 153.74 | 2.1:1 | mom_decay/near_resist/bear_div/low_rr |
| 32 | **NWBI** | NASDAQ:NWBI | **34.4** | ⚪C | 24 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 15.28 | 15.08 | 15.94 | 3.3:1 | mom_decay/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. LTC (NYSE:LTC)

| Field | Value |
|-------|-------|
| Combined Score | **61.6** |
| Tech Score | 37 (Trend Follow (HH/HL Intact)) |
| News Score | 86 → GREEN Long (Strong) |
| Current Price | 41.9 |
| **Entry** | **41.9** |
| **Stop** | **40.89** (ATR × 1.5) |
| **Target** | **43.37** |
| R/R | 1.5:1 |
| RSI | 63.3 |
| ATR% | 1.6% |
| Dist EMA20 | 3.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist bear_div low_rr |

### 2. VRTX (NASDAQ:VRTX)

| Field | Value |
|-------|-------|
| Combined Score | **60.9** |
| Tech Score | 53.2 (Trend Follow (HH/HL Intact)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 557.96 |
| **Entry** | **557.96** |
| **Stop** | **538.71** (ATR × 1.5) |
| **Target** | **586.19** |
| R/R | 1.5:1 |
| RSI | 67.5 |
| ATR% | 2.3% |
| Dist EMA20 | 4.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist bear_div |

### 3. CF (NYSE:CF)

| Field | Value |
|-------|-------|
| Combined Score | **52.3** |
| Tech Score | 36.9 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 137.81 |
| **Entry** | **137.81** |
| **Stop** | **129.54** (ATR × 1.5) |
| **Target** | **149.94** |
| R/R | 1.5:1 |
| RSI | 69 |
| ATR% | 4% |
| Dist EMA20 | 8.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/4 21:00:19*