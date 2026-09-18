# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-06　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:FIVE** | NASDAQ:FIVE | **69.1** | 🟡C+ | 47.5 | 89 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 252.2 | 235.55 | 276.61 | 1.5:1 | mom_decay/low_rr |
| 2 | **NASDAQ:HRMY** | NASDAQ:HRMY | **59.9** | ⚪C | 58.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 42.25 | 40.22 | 45.22 | 1.5:1 | near_resist |
| 3 | **NYSE:SPNT** | NYSE:SPNT | **57.3** | ⚪C | 62.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 24.11 | 23.45 | 25.51 | 2.1:1 | near_resist/chop |
| 4 | **NYSE:RIO** | NYSE:RIO | **57** | 🟢A | 50.4 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 101.72 | 98.93 | 107.61 | 2.1:1 | mom_decay/near_resist |
| 5 | **NYSE:HGTY** | NYSE:HGTY | **56.3** | ⚪C | 52.2 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 13.59 | 12.75 | 14.67 | 1.3:1 | mom_decay/near_resist/low_rr |
| 6 | **NYSE:HG** | NYSE:HG | **56.2** | ⚪C | 54.6 | 46 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 35.71 | 34.19 | 37.56 | 1.2:1 | near_resist/chop/low_rr |
| 7 | **NYSE:CF** | NYSE:CF | **55.5** | 🟢A | 40.9 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 133.35 | 124.75 | 145.96 | 1.5:1 | near_resist/low_rr |
| 8 | **NASDAQ:PRGS** | NASDAQ:PRGS | **55.4** | ⚪C | 47.3 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 44.18 | 41.12 | 48.12 | 1.3:1 | mom_decay/near_resist/low_rr |
| 9 | **NYSE:AR** | NYSE:AR | **55.1** | 🟢A | 42.1 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 39.41 | 37.93 | 41.58 | 1.5:1 | near_resist/low_rr |
| 10 | **NYSE:RRC** | NYSE:RRC | **54.4** | ⚪C | 57.3 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 41.37 | 39.98 | 44.02 | 1.9:1 | near_resist/low_rr |
| 11 | **NYSE:DELL** | NYSE:DELL | **54.3** | 🟢A | 37.8 | 79 | GREEN Long (Strong) | Overextended Chase (High Risk) | 524.14 | 479.33 | 583.89 | 1.3:1 | overheated/near_resist/chop |
| 12 | **NYSE:LTC** | NYSE:LTC | **53.4** | ⚪C | 52.3 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 40.59 | 39.81 | 42.61 | 2.6:1 | bear_div |
| 13 | **NYSE:WT** | NYSE:WT | **53.1** | ⚪C | 46.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 24.89 | 23.47 | 26.97 | 1.5:1 | mom_decay/low_rr |
| 14 | **NYSE:WPM** | NYSE:WPM | **52** | 🟢A | 30.4 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 154.98 | 144.52 | 170.32 | 1.5:1 | mom_decay/near_resist/low_rr |
| 15 | **NASDAQ:MU** | NASDAQ:MU | **50.7** | 🟢A | 39.8 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1001.34 | 923.06 | 1110.12 | 1.4:1 | near_resist/chop/low_rr |
| 16 | **NYSE:FCX** | NYSE:FCX | **50.7** | 🟢A | 32.9 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 72.73 | 68.15 | 79.45 | 1.5:1 | mom_decay/chop/low_rr |
| 17 | **NYSE:NEM** | NYSE:NEM | **50.6** | ⚪C | 38.7 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 128.09 | 120.6 | 139.08 | 1.5:1 | mom_decay/near_resist/low_rr |
| 18 | **NASDAQ:OSBC** | NASDAQ:OSBC | **49.2** | ⚪C | 48.6 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 25.33 | 24.9 | 26.54 | 2.8:1 | mom_decay/near_resist/chop/low_rr |
| 19 | **NYSE:AJG** | NYSE:AJG | **49.2** | 🟢A | 35.3 | 70 | GREEN Long (Mid) | Pullback Buy (Near Support) | 258.75 | 247.98 | 277.4 | 1.7:1 | mom_decay/near_resist/low_rr |
| 20 | **NASDAQ:KRYS** | NASDAQ:KRYS | **48.7** | ⚪C | 43.8 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 352.87 | 335.31 | 381.17 | 1.6:1 | near_resist/chop/low_rr |
| 21 | **NASDAQ:AAPL** | NASDAQ:AAPL | **46.6** | 🟢A | 35.7 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 315.17 | 305.25 | 334.69 | 2:1 | near_resist/chop/low_rr |
| 22 | **NASDAQ:CRWD** | NASDAQ:CRWD | **46.6** | 🔵B | 20.7 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 213.1 | 192 | 244.04 | 1.5:1 | near_resist/bear_div/low_rr |
| 23 | **NYSE:ASX** | NYSE:ASX | **46.4** | ⚪C | 44 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 36.95 | 34.58 | 40.44 | 1.5:1 | near_resist/chop |
| 24 | **NASDAQ:NVDA** | NASDAQ:NVDA | **46.2** | ⚪C | 35.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 230.36 | 218.96 | 247.08 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 25 | **OTC:SMNEY** | OTC:SMNEY | **45.4** | ⚪C | 34 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 26 | **NASDAQ:NWBI** | NASDAQ:NWBI | **44.4** | ⚪C | 40.7 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 15.39 | 15.15 | 16.09 | 2.9:1 | mom_decay/near_resist/chop/low_rr |
| 27 | **NASDAQ:PGY** | NASDAQ:PGY | **44.4** | ⚪C | 40.7 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 22.64 | 20.59 | 25.37 | 1.3:1 | mom_decay/near_resist/low_rr |
| 28 | **NASDAQ:BGC** | NASDAQ:BGC | **44.1** | ⚪C | 31.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 12.17 | 11.57 | 13.05 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 29 | **NASDAQ:SNDK** | NASDAQ:SNDK | **40** | ⚪C | 34.6 | 48 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 1740 | 1575.57 | 1959.24 | 1.3:1 | overheated/chop/low_rr |
| 30 | **NASDAQ:ADUS** | NASDAQ:ADUS | **38.8** | ⚪C | 25.3 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 116.98 | 112.82 | 124.7 | 1.9:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 31 | **NASDAQ:GEN** | NASDAQ:GEN | **37.7** | ⚪C | 21.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 30.65 | 29.27 | 32.67 | 1.5:1 | near_resist/chop/low_rr |
| 32 | **NYSE:TSM** | NYSE:TSM | **34** | ⚪C | 48.4 | 0 | No data | Breakout (Squeeze Release) | 430.2 | 409.61 | 455.72 | 1.2:1 | near_resist/chop/low_rr |
| 33 | **NYSE:MS** | NYSE:MS | **26.9** | ⚪C | 36.5 | 0 | No data | Breakout (Squeeze Release) | 218.37 | 209.1 | 229.69 | 1.2:1 | near_resist/chop/low_rr |
| 34 | **NYSE:AGM** | NYSE:AGM | **26.4** | ⚪C | 35.6 | 0 | No data | Trend Continuation | 227.78 | 219.58 | 239.81 | 1.5:1 | mom_decay/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:RIO (NYSE:RIO)

| Field | Value |
|-------|-------|
| Combined Score | **57** |
| Tech Score | 50.4 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 103.27 |
| **Entry** | **101.72** |
| **Stop** | **98.93** (ATR × 2) |
| **Target** | **107.61** |
| R/R | 2.1:1 |
| RSI | 57 |
| ATR% | 2.1% |
| Dist EMA20 | 1.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist |

### 2. NYSE:CF (NYSE:CF)

| Field | Value |
|-------|-------|
| Combined Score | **55.5** |
| Tech Score | 40.9 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 133.35 |
| **Entry** | **133.35** |
| **Stop** | **124.75** (ATR × 1.5) |
| **Target** | **145.96** |
| R/R | 1.5:1 |
| RSI | 60.6 |
| ATR% | 4.3% |
| Dist EMA20 | 4.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist low_rr |

### 3. NYSE:AR (NYSE:AR)

| Field | Value |
|-------|-------|
| Combined Score | **55.1** |
| Tech Score | 42.1 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 39.41 |
| **Entry** | **39.41** |
| **Stop** | **37.93** (ATR × 1.5) |
| **Target** | **41.58** |
| R/R | 1.5:1 |
| RSI | 65.4 |
| ATR% | 2.5% |
| Dist EMA20 | 3.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist low_rr |

### 4. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **54.3** |
| Tech Score | 37.8 (Overextended Chase (High Risk)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 524.14 |
| **Entry** | **524.14** |
| **Stop** | **479.33** (ATR × 1.5) |
| **Target** | **583.89** |
| R/R | 1.3:1 |
| RSI | 63.7 |
| ATR% | 5.7% |
| Dist EMA20 | 12.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist chop |

### 5. NYSE:WPM (NYSE:WPM)

| Field | Value |
|-------|-------|
| Combined Score | **52** |
| Tech Score | 30.4 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 154.98 |
| **Entry** | **154.98** |
| **Stop** | **144.52** (ATR × 1.5) |
| **Target** | **170.32** |
| R/R | 1.5:1 |
| RSI | 62.2 |
| ATR% | 4.5% |
| Dist EMA20 | 6.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 6. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 39.8 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 1016.59 |
| **Entry** | **1001.34** |
| **Stop** | **923.06** (ATR × 2) |
| **Target** | **1110.12** |
| R/R | 1.4:1 |
| RSI | 60.1 |
| ATR% | 4.6% |
| Dist EMA20 | 7.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 7. NYSE:FCX (NYSE:FCX)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 32.9 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 72.73 |
| **Entry** | **72.73** |
| **Stop** | **68.15** (ATR × 1.5) |
| **Target** | **79.45** |
| R/R | 1.5:1 |
| RSI | 53.2 |
| ATR% | 4.2% |
| Dist EMA20 | 0.4% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay chop low_rr |

### 8. NYSE:AJG (NYSE:AJG)

| Field | Value |
|-------|-------|
| Combined Score | **49.2** |
| Tech Score | 35.3 (Pullback Buy (Near Support)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 262.69 |
| **Entry** | **258.75** |
| **Stop** | **247.98** (ATR × 2) |
| **Target** | **277.4** |
| R/R | 1.7:1 |
| RSI | 54.4 |
| ATR% | 2.8% |
| Dist EMA20 | 0.9% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist low_rr |

### 9. NASDAQ:AAPL (NASDAQ:AAPL)

| Field | Value |
|-------|-------|
| Combined Score | **46.6** |
| Tech Score | 35.7 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 319.97 |
| **Entry** | **315.17** |
| **Stop** | **305.25** (ATR × 2) |
| **Target** | **334.69** |
| R/R | 2:1 |
| RSI | 53.9 |
| ATR% | 2.3% |
| Dist EMA20 | 1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:FIVE** | NASDAQ:FIVE | 69.1 | 47.5 | 89(hot) | 252.2 | **237.07** | 230.01 | 274.39 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/6 21:00:02*