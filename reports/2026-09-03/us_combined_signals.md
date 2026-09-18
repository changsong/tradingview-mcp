# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-03　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:VRTX** | NASDAQ:VRTX | **76** | 🟡C+ | 62.4 | 84 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 556.75 | 537.54 | 584.92 | 1.5:1 | near_resist/bear_div |
| 2 | **NYSE:FAF** | NYSE:FAF | **68.8** | 🟢A | 51.7 | 82 | GREEN Long (Strong) | Breakout (Squeeze Release) | 74.27 | 71.52 | 77.57 | 1.2:1 | near_resist/chop/low_rr |
| 3 | **NYSE:APD** | NYSE:APD | **66.6** | ⚪C | 64.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 310.38 | 298.31 | 324.92 | 1.2:1 | near_resist/low_rr |
| 4 | **NYSE:WT** | NYSE:WT | **63.5** | ⚪C | 64.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 23.74 | 22.53 | 25.52 | 1.5:1 | mom_decay |
| 5 | **NASDAQ:PRGS** | NASDAQ:PRGS | **60.5** | ⚪C | 59.1 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 43.46 | 40.6 | 47.12 | 1.3:1 | mom_decay/near_resist/low_rr |
| 6 | **NYSE:AR** | NYSE:AR | **60.2** | 🟢A | 47.3 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 39.59 | 38.05 | 41.85 | 1.5:1 | near_resist/low_rr |
| 7 | **NYSE:PATH** | NYSE:PATH | **58.8** | 🟢A | 41.6 | 72 | GREEN Long (Mid) | Trend Continuation | 17.99 | 16.86 | 19.65 | 1.5:1 | low_rr |
| 8 | **NASDAQ:HOOD** | NASDAQ:HOOD | **57.2** | 🟢A | 44.7 | 76 | GREEN Long (Strong) | Pullback Buy (Near Support) | 105.39 | 94.58 | 119.4 | 1.3:1 | chop |
| 9 | **NYSE:NEM** | NYSE:NEM | **56.5** | 🟢A | 39.9 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 125.16 | 117.84 | 135.9 | 1.5:1 | mom_decay/near_resist/low_rr |
| 10 | **NASDAQ:HRMY** | NASDAQ:HRMY | **54** | ⚪C | 48.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 42.86 | 41.06 | 45.5 | 1.5:1 | bull_trap/near_resist |
| 11 | **NYSE:SQM** | NYSE:SQM | **53.5** | ⚪C | 55.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 79.92 | 75.3 | 86.98 | 1.5:1 | near_resist/low_rr |
| 12 | **NYSE:HGTY** | NYSE:HGTY | **48.8** | ⚪C | 39.6 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 13.27 | 12.52 | 14.22 | 1.3:1 | mom_decay/near_resist/low_rr |
| 13 | **NYSE:FCX** | NYSE:FCX | **48.7** | ⚪C | 42.1 | 46 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 73.93 | 69.49 | 80.44 | 1.5:1 | mom_decay/low_rr |
| 14 | **NASDAQ:RELY** | NASDAQ:RELY | **48.1** | ⚪C | 33.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 26.82 | 25.21 | 29.18 | 1.5:1 | near_resist/bear_div/low_rr |
| 15 | **NYSE:RRC** | NYSE:RRC | **47** | ⚪C | 36.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 42.48 | 38.98 | 47.62 | 1.5:1 | near_resist/chop/low_rr |
| 16 | **NYSE:WPM** | NYSE:WPM | **45.4** | 🔵B | 27.4 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 150.91 | 140.72 | 165.85 | 1.5:1 | mom_decay/near_resist/low_rr |
| 17 | **NYSE:AJG** | NYSE:AJG | **44.5** | ⚪C | 27.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 264.46 | 240.26 | 299.95 | 1.5:1 | fake_break/near_resist/low_rr |
| 18 | **NYSE:CF** | NYSE:CF | **44.5** | 🔵B | 15.8 | 75 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 139.27 | 131.33 | 150.91 | 1.5:1 | bull_trap/near_resist/chop/low_rr |
| 19 | **NYSE:RIO** | NYSE:RIO | **43.4** | ⚪C | 33.6 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 101.21 | 98.23 | 107.27 | 2:1 | mom_decay/near_resist/low_rr |
| 20 | **NYSE:LTC** | NYSE:LTC | **43.2** | ⚪C | 33.4 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 40.95 | 40.07 | 43.07 | 2.4:1 | fake_break/near_resist/chop/bear_div/low_rr |
| 21 | **NASDAQ:PANW** | NASDAQ:PANW | **41.5** | 🔵B | 27.1 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 323.55 | 286.43 | 370.53 | 1.3:1 | mom_decay |
| 22 | **NYSE:SCCO** | NYSE:SCCO | **40.8** | ⚪C | 26.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 204.26 | 191.09 | 223.58 | 1.5:1 | mom_decay/near_resist/low_rr |
| 23 | **NASDAQ:GEN** | NASDAQ:GEN | **40.7** | ⚪C | 28.2 | 47 | NEUTRAL No Trade (Neutral) | Trend Continuation | 30.65 | 29.22 | 32.74 | 1.5:1 | near_resist/chop/low_rr |
| 24 | **NYSE:J** | NYSE:J | **38.6** | ⚪C | 26.4 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 144.87 | 141.2 | 152.96 | 2.2:1 | mom_decay/near_resist/bear_div/low_rr |
| 25 | **CBOE:CBOE** | CBOE:CBOE | **37.6** | ⚪C | 29.3 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 289.71 | 272.36 | 315.88 | 1.5:1 | mom_decay/near_resist/chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:FAF (NYSE:FAF)

| Field | Value |
|-------|-------|
| Combined Score | **68.8** |
| Tech Score | 51.7 (Breakout (Squeeze Release)) |
| News Score | 82 → GREEN Long (Strong) |
| Current Price | 74.05 |
| **Entry** | **74.27** |
| **Stop** | **71.52** (ATR × 1.8) |
| **Target** | **77.57** |
| R/R | 1.2:1 |
| RSI | 54.2 |
| ATR% | 1.9% |
| Dist EMA20 | 0.8% |
| Chase OK | NO |
| MTF Alignment | 2/3 (67%) |
| Risk Flags | near_resist chop low_rr |

### 2. NYSE:AR (NYSE:AR)

| Field | Value |
|-------|-------|
| Combined Score | **60.2** |
| Tech Score | 47.3 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 39.59 |
| **Entry** | **39.59** |
| **Stop** | **38.05** (ATR × 1.5) |
| **Target** | **41.85** |
| R/R | 1.5:1 |
| RSI | 67.9 |
| ATR% | 2.6% |
| Dist EMA20 | 5% |
| Chase OK | NO |
| MTF Alignment | 2/3 (67%) |
| Risk Flags | near_resist low_rr |

### 3. NYSE:PATH (NYSE:PATH)

| Field | Value |
|-------|-------|
| Combined Score | **58.8** |
| Tech Score | 41.6 (Trend Continuation) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 17.99 |
| **Entry** | **17.99** |
| **Stop** | **16.86** (ATR × 1.5) |
| **Target** | **19.65** |
| R/R | 1.5:1 |
| RSI | 69.8 |
| ATR% | 4.2% |
| Dist EMA20 | 9.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | low_rr |

### 4. NASDAQ:HOOD (NASDAQ:HOOD)

| Field | Value |
|-------|-------|
| Combined Score | **57.2** |
| Tech Score | 44.7 (Pullback Buy (Near Support)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 106.99 |
| **Entry** | **105.39** |
| **Stop** | **94.58** (ATR × 2) |
| **Target** | **119.4** |
| R/R | 1.3:1 |
| RSI | 56.5 |
| ATR% | 5.8% |
| Dist EMA20 | 4.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop |

### 5. NYSE:NEM (NYSE:NEM)

| Field | Value |
|-------|-------|
| Combined Score | **56.5** |
| Tech Score | 39.9 (Trend Follow (HH/HL Intact)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 125.16 |
| **Entry** | **125.16** |
| **Stop** | **117.84** (ATR × 1.5) |
| **Target** | **135.9** |
| R/R | 1.5:1 |
| RSI | 59 |
| ATR% | 3.9% |
| Dist EMA20 | 3.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:VRTX** | NASDAQ:VRTX | 76 | 62.4 | 84(hot) | 556.75 | **523.34** | 531.14 | 582.36 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/3 21:00:09*