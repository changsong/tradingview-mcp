# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-07　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **LTC** | NYSE:LTC | **66.4** | 🟡C+ | 52.3 | 100 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 40.59 | 39.81 | 42.61 | 2.6:1 | bear_div |
| 2 | **TSM** | NYSE:TSM | **63.6** | ⚪C | 58.4 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 430.2 | 409.61 | 455.72 | 1.2:1 | near_resist/chop/low_rr |
| 3 | **HRMY** | NASDAQ:HRMY | **59.7** | ⚪C | 55.9 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 42.25 | 40.22 | 45.22 | 1.5:1 | near_resist |
| 4 | **HG** | NYSE:HG | **58.3** | ⚪C | 55.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 35.71 | 34.19 | 37.56 | 1.2:1 | near_resist/chop/low_rr |
| 5 | **HGTY** | NYSE:HGTY | **57.6** | ⚪C | 54.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 13.59 | 12.75 | 14.67 | 1.3:1 | mom_decay/near_resist/low_rr |
| 6 | **SPNT** | NYSE:SPNT | **57.3** | ⚪C | 62.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 24.11 | 23.45 | 25.51 | 2.1:1 | near_resist/chop |
| 7 | **FIVE** | NASDAQ:FIVE | **56.3** | ⚪C | 52.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 252.2 | 235.55 | 276.61 | 1.5:1 | mom_decay/low_rr |
| 8 | **WT** | NYSE:WT | **56.2** | ⚪C | 52 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 24.89 | 23.47 | 26.97 | 1.5:1 | mom_decay/low_rr |
| 9 | **MS** | NYSE:MS | **52.9** | ⚪C | 46.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 218.37 | 209.1 | 229.69 | 1.2:1 | near_resist/chop/low_rr |
| 10 | **RRC** | NYSE:RRC | **52.4** | ⚪C | 54 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.37 | 39.98 | 44.02 | 1.9:1 | near_resist/low_rr |
| 11 | **AGM** | NYSE:AGM | **52.4** | ⚪C | 45.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 227.78 | 219.58 | 239.81 | 1.5:1 | mom_decay/low_rr |
| 12 | **PRGS** | NASDAQ:PRGS | **51.9** | ⚪C | 42.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 44.18 | 41.12 | 48.12 | 1.3:1 | mom_decay/near_resist/low_rr |
| 13 | **CF** | NYSE:CF | **51.5** | ⚪C | 40.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 133.35 | 124.75 | 145.96 | 1.5:1 | near_resist/low_rr |
| 14 | **C** | NYSE:C | **51.3** | ⚪C | 52.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 135.65 | 132.21 | 143.23 | 2.2:1 | near_resist/chop |
| 15 | **AR** | NYSE:AR | **51.1** | ⚪C | 42.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 39.41 | 37.93 | 41.58 | 1.5:1 | near_resist/low_rr |
| 16 | **HOOD** | NASDAQ:HOOD | **49.6** | 🟢A | 42 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 120.28 | 107.46 | 136.76 | 1.3:1 | overheated/fake_break/near_resist/low_rr |
| 17 | **RIO** | NYSE:RIO | **49.4** | ⚪C | 50.4 | 48 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 101.72 | 98.93 | 107.61 | 2.1:1 | mom_decay/near_resist |
| 18 | **NEM** | NYSE:NEM | **48.6** | ⚪C | 38.7 | 51 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 128.09 | 120.6 | 139.08 | 1.5:1 | mom_decay/near_resist/low_rr |
| 19 | **OSBC** | NASDAQ:OSBC | **46.8** | ⚪C | 44.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 25.33 | 24.9 | 26.54 | 2.8:1 | mom_decay/near_resist/chop/low_rr |
| 20 | **NVDA** | NASDAQ:NVDA | **46.2** | ⚪C | 35.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 230.36 | 218.96 | 247.08 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 21 | **KRYS** | NASDAQ:KRYS | **46** | ⚪C | 42 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 352.87 | 335.31 | 381.17 | 1.6:1 | near_resist/chop/low_rr |
| 22 | **SNDK** | NASDAQ:SNDK | **46** | 🟢A | 34.6 | 63 | GREEN Long (Mid) | Overextended Chase (High Risk) | 1740 | 1575.57 | 1959.24 | 1.3:1 | overheated/chop/low_rr |
| 23 | **VRTX** | NASDAQ:VRTX | **45.1** | ⚪C | 30.2 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 546.12 | 495.33 | 620.61 | 1.5:1 | fake_break/near_resist/bear_div |
| 24 | **MU** | NASDAQ:MU | **44.7** | ⚪C | 39.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1001.34 | 923.06 | 1110.12 | 1.4:1 | near_resist/chop/low_rr |
| 25 | **NWBI** | NASDAQ:NWBI | **44.5** | ⚪C | 40.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 15.39 | 15.15 | 16.09 | 2.9:1 | mom_decay/near_resist/chop/low_rr |
| 26 | **PGY** | NASDAQ:PGY | **44.4** | ⚪C | 40.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.64 | 20.59 | 25.37 | 1.3:1 | mom_decay/near_resist/low_rr |
| 27 | **ASX** | NYSE:ASX | **44.4** | ⚪C | 40.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 36.95 | 34.58 | 40.44 | 1.5:1 | near_resist/chop |
| 28 | **APH** | NYSE:APH | **44.4** | 🔵B | 22.3 | 65 | GREEN Long (Mid) | Trend Continuation | 82.78 | 78.56 | 88.97 | 1.5:1 | near_resist/chop/low_rr |
| 29 | **RELY** | NASDAQ:RELY | **44.3** | 🟢A | 33.2 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 25.78 | 23.92 | 28.42 | 1.4:1 | mom_decay/near_resist/bear_div/low_rr |
| 30 | **ELF** | NYSE:ELF | **43.7** | ⚪C | 31.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 109.67 | 103.25 | 119.08 | 1.5:1 | fake_break/mom_decay/near_resist/bear_div/low_rr |
| 31 | **FCX** | NYSE:FCX | **43.5** | ⚪C | 32.9 | 47 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 72.73 | 68.15 | 79.45 | 1.5:1 | mom_decay/chop/low_rr |
| 32 | **WPM** | NYSE:WPM | **43.2** | ⚪C | 30.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 154.98 | 144.52 | 170.32 | 1.5:1 | mom_decay/near_resist/low_rr |
| 33 | **BGC** | NASDAQ:BGC | **42.8** | ⚪C | 29.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 12.17 | 11.57 | 13.05 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 34 | **DELL** | NYSE:DELL | **42.7** | ⚪C | 37.8 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 524.14 | 479.33 | 583.89 | 1.3:1 | overheated/near_resist/chop |
| 35 | **AAPL** | NASDAQ:AAPL | **41.4** | ⚪C | 35.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 315.17 | 305.25 | 334.69 | 2:1 | near_resist/chop/low_rr |
| 36 | **AJG** | NYSE:AJG | **41.2** | ⚪C | 35.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 258.75 | 247.98 | 277.4 | 1.7:1 | mom_decay/near_resist/low_rr |
| 37 | **CRWD** | NASDAQ:CRWD | **39.3** | ⚪C | 23.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 213.1 | 192 | 244.04 | 1.5:1 | near_resist/bear_div/low_rr |
| 38 | **GEN** | NASDAQ:GEN | **38.1** | ⚪C | 21.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 30.65 | 29.27 | 32.67 | 1.5:1 | near_resist/chop/low_rr |
| 39 | **OTC:SMNEY** | OTC:SMNEY | **37.3** | ⚪C | 20.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 40 | **ADUS** | NASDAQ:ADUS | **34.2** | ⚪C | 22.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 116.98 | 112.82 | 124.7 | 1.9:1 | mom_decay/near_resist/chop/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. HOOD (NASDAQ:HOOD)

| Field | Value |
|-------|-------|
| Combined Score | **49.6** |
| Tech Score | 42 (Pullback Buy (Near Support)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 122.11 |
| **Entry** | **120.28** |
| **Stop** | **107.46** (ATR × 2) |
| **Target** | **136.76** |
| R/R | 1.3:1 |
| RSI | 65.9 |
| ATR% | 6% |
| Dist EMA20 | 15.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated fake_break near_resist low_rr |

### 2. SNDK (NASDAQ:SNDK)

| Field | Value |
|-------|-------|
| Combined Score | **46** |
| Tech Score | 34.6 (Overextended Chase (High Risk)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 1740 |
| **Entry** | **1740** |
| **Stop** | **1575.57** (ATR × 1.5) |
| **Target** | **1959.24** |
| R/R | 1.3:1 |
| RSI | 61.2 |
| ATR% | 6.3% |
| Dist EMA20 | 13.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated chop low_rr |

### 3. RELY (NASDAQ:RELY)

| Field | Value |
|-------|-------|
| Combined Score | **44.3** |
| Tech Score | 33.2 (Pullback Buy (Near Support)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 26.17 |
| **Entry** | **25.78** |
| **Stop** | **23.92** (ATR × 2) |
| **Target** | **28.42** |
| R/R | 1.4:1 |
| RSI | 54.5 |
| ATR% | 4.3% |
| Dist EMA20 | 1.6% |
| Chase OK | NO |
| MTF Alignment | 1/2 (50%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **LTC** | NYSE:LTC | 66.4 | 52.3 | 100(hot) | 41.21 | **38.74** | 39.81 | 42.61 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/7 21:00:17*