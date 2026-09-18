# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-05　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:VRTX** | NASDAQ:VRTX | **66.9** | 🟡C+ | 53.2 | 75 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 557.96 | 538.71 | 586.19 | 1.5:1 | fake_break/near_resist/bear_div |
| 2 | **NASDAQ:RELY** | NASDAQ:RELY | **66.6** | 🟡C+ | 38.6 | 96 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 26.92 | 25.26 | 29.35 | 1.5:1 | near_resist/bear_div/low_rr |
| 3 | **NASDAQ:PRGS** | NASDAQ:PRGS | **62.9** | ⚪C | 59.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 44.74 | 41.72 | 48.62 | 1.3:1 | mom_decay/near_resist |
| 4 | **NASDAQ:HRMY** | NASDAQ:HRMY | **60.9** | ⚪C | 59.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 41.86 | 39.91 | 44.71 | 1.5:1 | near_resist |
| 5 | **NYSE:WT** | NYSE:WT | **59.5** | ⚪C | 57.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 24.87 | 23.45 | 26.95 | 1.5:1 | mom_decay/low_rr |
| 6 | **NYSE:HGTY** | NYSE:HGTY | **58.9** | ⚪C | 56.5 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 13.5 | 12.66 | 14.57 | 1.3:1 | mom_decay/near_resist/low_rr |
| 7 | **NYSE:AJG** | NYSE:AJG | **58.7** | 🟢A | 51.2 | 70 | GREEN Long (Mid) | Pullback Buy (Near Support) | 262.66 | 251.73 | 281.59 | 1.7:1 | mom_decay/near_resist/low_rr |
| 8 | **NYSE:DELL** | NYSE:DELL | **58.5** | 🟢A | 44.8 | 79 | GREEN Long (Strong) | Overextended Chase (High Risk) | 516.39 | 471.46 | 576.29 | 1.3:1 | overheated/near_resist/chop |
| 9 | **NYSE:HG** | NYSE:HG | **57.2** | ⚪C | 56.4 | 46 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 36.22 | 34.68 | 38.1 | 1.2:1 | near_resist/chop/low_rr |
| 10 | **NYSE:WPM** | NYSE:WPM | **56.7** | 🟢A | 38.1 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 156.63 | 146.06 | 172.14 | 1.5:1 | mom_decay/near_resist/low_rr |
| 11 | **NYSE:RRC** | NYSE:RRC | **56.4** | ⚪C | 60.6 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 41.73 | 40.25 | 44.49 | 1.9:1 | near_resist |
| 12 | **NYSE:FCX** | NYSE:FCX | **54.6** | 🟢A | 39.4 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 72.56 | 67.88 | 79.42 | 1.5:1 | mom_decay/low_rr |
| 13 | **NYSE:CF** | NYSE:CF | **53.1** | 🟢A | 36.9 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 137.81 | 129.54 | 149.94 | 1.5:1 | fake_break/near_resist/low_rr |
| 14 | **NASDAQ:BGC** | NASDAQ:BGC | **51.8** | ⚪C | 44.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 12.15 | 11.55 | 13.03 | 1.5:1 | chop/low_rr |
| 15 | **NYSE:AR** | NYSE:AR | **51.6** | 🟢A | 36.4 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 39.69 | 38.14 | 41.96 | 1.5:1 | fake_break/near_resist/low_rr |
| 16 | **NYSE:NEM** | NYSE:NEM | **51.3** | ⚪C | 39.8 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 130.43 | 123 | 141.33 | 1.5:1 | mom_decay/near_resist/low_rr |
| 17 | **NASDAQ:CRWD** | NASDAQ:CRWD | **51.1** | 🔵B | 28.2 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 214.97 | 194.01 | 245.71 | 1.5:1 | near_resist/bear_div/low_rr |
| 18 | **NYSE:RIO** | NYSE:RIO | **50.7** | 🟢A | 39.9 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 101.3 | 98.32 | 107.36 | 2:1 | mom_decay/near_resist/low_rr |
| 19 | **NYSE:LTC** | NYSE:LTC | **49.2** | ⚪C | 37 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 41.9 | 40.89 | 43.37 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 20 | **NASDAQ:KRYS** | NASDAQ:KRYS | **49.2** | ⚪C | 36.3 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 371.47 | 355.87 | 394.35 | 1.5:1 | fake_break/near_resist/low_rr |
| 21 | **NASDAQ:OSBC** | NASDAQ:OSBC | **47.8** | ⚪C | 46.3 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 25.29 | 24.86 | 26.5 | 2.8:1 | mom_decay/near_resist/chop/low_rr |
| 22 | **NASDAQ:GEN** | NASDAQ:GEN | **47.5** | ⚪C | 37.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.33 | 29.92 | 33.4 | 1.5:1 | fake_break/near_resist/chop |
| 23 | **NASDAQ:AAPL** | NASDAQ:AAPL | **46.6** | 🟢A | 35.6 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 323.29 | 314.43 | 341.99 | 2.1:1 | fake_break/near_resist/chop/low_rr |
| 24 | **NASDAQ:NWBI** | NASDAQ:NWBI | **43.4** | ⚪C | 39 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 15.28 | 15.08 | 15.94 | 3.3:1 | mom_decay/near_resist/chop/low_rr |
| 25 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 26 | **NASDAQ:ACGL** | NASDAQ:ACGL | **39.7** | ⚪C | 57.8 | 0 | No data | Breakout (Squeeze Release) | 100.13 | 96.6 | 104.32 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 27 | **NASDAQ:NVDA** | NASDAQ:NVDA | **38.8** | ⚪C | 23 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 228.45 | 217.48 | 244.53 | 1.5:1 | fake_break/near_resist/chop/bear_div/low_rr |
| 28 | **NYSE:FAF** | NYSE:FAF | **38** | ⚪C | 55 | 0 | No data | Trend Continuation | 76.51 | 74.21 | 79.88 | 1.5:1 | chop/low_rr |
| 29 | **NASDAQ:ADUS** | NASDAQ:ADUS | **37.8** | ⚪C | 23.6 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 116.91 | 112.76 | 124.62 | 1.9:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 30 | **NYSE:SQM** | NYSE:SQM | **23.5** | ⚪C | 39.1 | 0 | No data | Pullback Buy (Near Support) | 78.58 | 74.04 | 85.52 | 1.5:1 | near_resist |
| 31 | **NASDAQ:DASH** | NASDAQ:DASH | **22.7** | ⚪C | 37.8 | 0 | No data | Pullback Buy (Near Support) | 218.67 | 206.46 | 237.54 | 1.5:1 | mom_decay/near_resist/low_rr |
| 32 | **NYSE:J** | NYSE:J | **16.2** | ⚪C | 27 | 0 | No data | Pullback Buy (Near Support) | 145.33 | 141.34 | 153.74 | 2.1:1 | mom_decay/near_resist/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:AJG (NYSE:AJG)

| Field | Value |
|-------|-------|
| Combined Score | **58.7** |
| Tech Score | 51.2 (Pullback Buy (Near Support)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 266.66 |
| **Entry** | **262.66** |
| **Stop** | **251.73** (ATR × 2) |
| **Target** | **281.59** |
| R/R | 1.7:1 |
| RSI | 58.7 |
| ATR% | 2.8% |
| Dist EMA20 | 2.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist low_rr |

### 2. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **58.5** |
| Tech Score | 44.8 (Overextended Chase (High Risk)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 516.39 |
| **Entry** | **516.39** |
| **Stop** | **471.46** (ATR × 1.5) |
| **Target** | **576.29** |
| R/R | 1.3:1 |
| RSI | 62.5 |
| ATR% | 5.8% |
| Dist EMA20 | 12.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist chop |

### 3. NYSE:WPM (NYSE:WPM)

| Field | Value |
|-------|-------|
| Combined Score | **56.7** |
| Tech Score | 38.1 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 156.63 |
| **Entry** | **156.63** |
| **Stop** | **146.06** (ATR × 1.5) |
| **Target** | **172.14** |
| R/R | 1.5:1 |
| RSI | 64 |
| ATR% | 4.5% |
| Dist EMA20 | 7.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist low_rr |

### 4. NYSE:FCX (NYSE:FCX)

| Field | Value |
|-------|-------|
| Combined Score | **54.6** |
| Tech Score | 39.4 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 72.56 |
| **Entry** | **72.56** |
| **Stop** | **67.88** (ATR × 1.5) |
| **Target** | **79.42** |
| R/R | 1.5:1 |
| RSI | 52.9 |
| ATR% | 4.3% |
| Dist EMA20 | 0.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 5. NYSE:CF (NYSE:CF)

| Field | Value |
|-------|-------|
| Combined Score | **53.1** |
| Tech Score | 36.9 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
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

### 6. NYSE:AR (NYSE:AR)

| Field | Value |
|-------|-------|
| Combined Score | **51.6** |
| Tech Score | 36.4 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 39.69 |
| **Entry** | **39.69** |
| **Stop** | **38.14** (ATR × 1.5) |
| **Target** | **41.96** |
| R/R | 1.5:1 |
| RSI | 68.4 |
| ATR% | 2.6% |
| Dist EMA20 | 4.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | fake_break near_resist low_rr |

### 7. NYSE:RIO (NYSE:RIO)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 39.9 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 102.84 |
| **Entry** | **101.3** |
| **Stop** | **98.32** (ATR × 2) |
| **Target** | **107.36** |
| R/R | 2:1 |
| RSI | 56 |
| ATR% | 2.2% |
| Dist EMA20 | 1.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist low_rr |

### 8. NASDAQ:AAPL (NASDAQ:AAPL)

| Field | Value |
|-------|-------|
| Combined Score | **46.6** |
| Tech Score | 35.6 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 328.21 |
| **Entry** | **323.29** |
| **Stop** | **314.43** (ATR × 2) |
| **Target** | **341.99** |
| R/R | 2.1:1 |
| RSI | 63.4 |
| ATR% | 2.1% |
| Dist EMA20 | 3.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:VRTX** | NASDAQ:VRTX | 66.9 | 53.2 | 75(hot) | 557.96 | **524.48** | 532.29 | 583.63 |
| **NASDAQ:RELY** | NASDAQ:RELY | 66.6 | 38.6 | 96(hot) | 26.92 | **25.3** | 24.71 | 29.13 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/5 21:00:20*