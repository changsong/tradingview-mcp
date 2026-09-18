# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-15　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:HOOD** | NASDAQ:HOOD | **59.5** | 🟢A | 50.5 | 73 | WARN Long (Cautious) | Pullback Buy (Near Support) | 112.62 | 101.3 | 127.36 | 1.3:1 | OK |
| 2 | **NYSE:PACS** | NYSE:PACS | **59** | ⚪C | 56.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 44.68 | 41.9 | 48.23 | 1.3:1 | near_resist |
| 3 | **NASDAQ:NWBI** | NASDAQ:NWBI | **58.9** | ⚪C | 56.5 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 15.6 | 15.16 | 16.09 | 1.1:1 | near_resist/chop |
| 4 | **NYSE:LTC** | NYSE:LTC | **58** | ⚪C | 52.4 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 42.64 | 41.42 | 44.42 | 1.5:1 | near_resist/low_rr |
| 5 | **NYSE:DELL** | NYSE:DELL | **55.5** | 🟢A | 38.8 | 68 | GREEN Long (Mid) | Trend Continuation | 534.28 | 483.79 | 608.33 | 1.5:1 | chop |
| 6 | **NASDAQ:MSFT** | NASDAQ:MSFT | **54.8** | 🟢A | 50 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 497.83 | 484.18 | 526.64 | 2.1:1 | mom_decay/near_resist |
| 7 | **NYSE:SPNT** | NYSE:SPNT | **53.4** | ⚪C | 55.7 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 24.25 | 23.59 | 25.65 | 2.1:1 | near_resist/chop/low_rr |
| 8 | **NYSE:AGM** | NYSE:AGM | **53.4** | ⚪C | 47.3 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 225.89 | 216.7 | 237.03 | 1.2:1 | mom_decay/near_resist/low_rr |
| 9 | **NASDAQ:HRMY** | NASDAQ:HRMY | **51.8** | ⚪C | 44.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 41.54 | 39.73 | 44.19 | 1.5:1 | mom_decay/low_rr |
| 10 | **NASDAQ:FIVE** | NASDAQ:FIVE | **49.9** | ⚪C | 36.9 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 249.59 | 233.87 | 272.65 | 1.5:1 | mom_decay/near_resist/low_rr |
| 11 | **NYSE:ASX** | NYSE:ASX | **49** | ⚪C | 49.7 | 48 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 36.52 | 34.11 | 40.05 | 1.5:1 | chop |
| 12 | **NASDAQ:CRWD** | NASDAQ:CRWD | **48.9** | ⚪C | 33.8 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 235.38 | 212.43 | 269.04 | 1.5:1 | near_resist/chop/bear_div |
| 13 | **NASDAQ:OSBC** | NASDAQ:OSBC | **48.4** | ⚪C | 39 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 25.59 | 24.78 | 26.53 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 14 | **NASDAQ:BGC** | NASDAQ:BGC | **48.3** | ⚪C | 44.5 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 11.98 | 11.48 | 12.84 | 1.7:1 | near_resist/chop/bear_div/low_rr |
| 15 | **NYSE:BE** | NYSE:BE | **47.8** | 🟢A | 36.4 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 253.19 | 222.61 | 291.49 | 1.3:1 | chop |
| 16 | **NASDAQ:AMD** | NASDAQ:AMD | **45.7** | ⚪C | 38.8 | 56 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 493.41 | 463.07 | 533.87 | 1.3:1 | chop/low_rr |
| 17 | **NYSE:NEM** | NYSE:NEM | **45.3** | 🟢A | 32.8 | 64 | GREEN Long (Mid) | Pullback Buy (Near Support) | 121.22 | 114.46 | 131.68 | 1.5:1 | mom_decay/near_resist |
| 18 | **NASDAQ:PLTR** | NASDAQ:PLTR | **45** | ⚪C | 35.6 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 170.71 | 158.06 | 188.56 | 1.4:1 | mom_decay/near_resist/low_rr |
| 19 | **NASDAQ:SMCI** | NASDAQ:SMCI | **44.7** | 🔵B | 24.9 | 62 | GREEN Long (Mid) | Breakout (Squeeze Release) | 36.85 | 32.64 | 42.43 | 1.3:1 | mom_decay/near_resist/low_rr |
| 20 | **NYSE:SM** | NYSE:SM | **44.6** | ⚪C | 32.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 39.03 | 37.04 | 41.95 | 1.5:1 | mom_decay/near_resist/bear_div |
| 21 | **NASDAQ:ORRF** | NASDAQ:ORRF | **44.1** | ⚪C | 31.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 42.6 | 40.94 | 44.59 | 1.2:1 | near_resist/chop/bear_div/low_rr |
| 22 | **NYSE:HGTY** | NYSE:HGTY | **43.8** | ⚪C | 31.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.97 | 12.9 | 15.36 | 1.3:1 | fake_break/near_resist/bear_div/low_rr |
| 23 | **NYSE:C** | NYSE:C | **43.4** | ⚪C | 33 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 134.14 | 129.92 | 142.44 | 2:1 | near_resist/chop/low_rr |
| 24 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 25 | **NASDAQ:NBN** | NASDAQ:NBN | **41.8** | ⚪C | 36.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 130.25 | 125.62 | 138.84 | 1.9:1 | near_resist/chop/low_rr |
| 26 | **NYSE:JCI** | NYSE:JCI | **41.8** | ⚪C | 33.7 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 135.69 | 130.6 | 144.92 | 1.8:1 | mom_decay/near_resist/chop |
| 27 | **OTC:SMTGY** | OTC:SMTGY | **40** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.72 | 6.35 | 7.27 | 1.5:1 | near_resist/chop/low_rr |
| 28 | **NYSE:CF** | NYSE:CF | **39.9** | ⚪C | 28.2 | 45 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 131.24 | 122.78 | 143.66 | 1.5:1 | mom_decay/near_resist/low_rr |
| 29 | **NYSE:AR** | NYSE:AR | **38.7** | ⚪C | 28.5 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 37.53 | 35.97 | 40.23 | 1.7:1 | mom_decay/near_resist/low_rr |
| 30 | **NASDAQ:PGY** | NASDAQ:PGY | **37.8** | 🔵B | 21.7 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 21.17 | 19 | 23.98 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 31 | **AMEX:CET** | AMEX:CET | **37.7** | ⚪C | 29.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 55.06 | 54.45 | 57.35 | 3.8:1 | near_resist/chop/low_rr |
| 32 | **NYSE:WPM** | NYSE:WPM | **34** | 🔵B | 16.7 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 147.42 | 137.1 | 162.24 | 1.4:1 | mom_decay/near_resist/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:HOOD (NASDAQ:HOOD)

| Field | Value |
|-------|-------|
| Combined Score | **59.5** |
| Tech Score | 50.5 (Pullback Buy (Near Support)) |
| News Score | 73 → WARN Long (Cautious) |
| Current Price | 114.33 |
| **Entry** | **112.62** |
| **Stop** | **101.3** (ATR × 2) |
| **Target** | **127.36** |
| R/R | 1.3:1 |
| RSI | 57.3 |
| ATR% | 5.7% |
| Dist EMA20 | 4.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | None |

### 2. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **55.5** |
| Tech Score | 38.8 (Trend Continuation) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 534.28 |
| **Entry** | **534.28** |
| **Stop** | **483.79** (ATR × 1.5) |
| **Target** | **608.33** |
| R/R | 1.5:1 |
| RSI | 59.3 |
| ATR% | 6.3% |
| Dist EMA20 | 8.3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | chop |

### 3. NASDAQ:MSFT (NASDAQ:MSFT)

| Field | Value |
|-------|-------|
| Combined Score | **54.8** |
| Tech Score | 50 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 505.41 |
| **Entry** | **497.83** |
| **Stop** | **484.18** (ATR × 2) |
| **Target** | **526.64** |
| R/R | 2.1:1 |
| RSI | 61.4 |
| ATR% | 2.1% |
| Dist EMA20 | 2.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist |

### 4. NYSE:BE (NYSE:BE)

| Field | Value |
|-------|-------|
| Combined Score | **47.8** |
| Tech Score | 36.4 (Pullback Buy (Near Support)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 257.05 |
| **Entry** | **253.19** |
| **Stop** | **222.61** (ATR × 2) |
| **Target** | **291.49** |
| R/R | 1.3:1 |
| RSI | 57.3 |
| ATR% | 6.7% |
| Dist EMA20 | 7.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | chop |

### 5. NYSE:NEM (NYSE:NEM)

| Field | Value |
|-------|-------|
| Combined Score | **45.3** |
| Tech Score | 32.8 (Pullback Buy (Near Support)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 123.07 |
| **Entry** | **121.22** |
| **Stop** | **114.46** (ATR × 2) |
| **Target** | **131.68** |
| R/R | 1.5:1 |
| RSI | 51.8 |
| ATR% | 3.5% |
| Dist EMA20 | -0.9% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/15 21:00:07*