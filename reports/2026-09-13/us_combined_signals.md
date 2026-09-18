# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-13　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:NWBI** | NASDAQ:NWBI | **59.9** | ⚪C | 58.1 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 15.54 | 15.1 | 16.03 | 1.1:1 | near_resist/chop |
| 2 | **NYSE:LTC** | NYSE:LTC | **59.8** | ⚪C | 62.4 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 41.64 | 40.66 | 43.88 | 2.3:1 | near_resist/low_rr |
| 3 | **NYSE:TSM** | NYSE:TSM | **58.6** | 🟡C+ | 46.6 | 89 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 426.74 | 413.31 | 453.17 | 2:1 | near_resist/chop/low_rr |
| 4 | **NYSE:PACS** | NYSE:PACS | **58.5** | ⚪C | 55.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 44.89 | 41.94 | 48.68 | 1.3:1 | near_resist/low_rr |
| 5 | **NYSE:BAP** | NYSE:BAP | **56.5** | ⚪C | 52.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 379.03 | 362.94 | 398.68 | 1.2:1 | near_resist/chop |
| 6 | **NYSE:APH** | NYSE:APH | **56.3** | 🟢A | 32.8 | 79 | GREEN Long (Strong) | Trend Continuation | 83.92 | 80.27 | 89.27 | 1.5:1 | near_resist/chop/low_rr |
| 7 | **NYSE:HGTY** | NYSE:HGTY | **55.4** | ⚪C | 50.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.59 | 12.5 | 15.01 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 8 | **NYSE:WT** | NYSE:WT | **55.3** | ⚪C | 58.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 23.57 | 21.87 | 25.99 | 1.4:1 | mom_decay |
| 9 | **NASDAQ:HRMY** | NASDAQ:HRMY | **53.9** | ⚪C | 48.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 41.52 | 39.59 | 44.35 | 1.5:1 | low_rr |
| 10 | **NASDAQ:AAPL** | NASDAQ:AAPL | **53.9** | 🟢A | 43.2 | 70 | WARN Long (Cautious) | Pullback Buy (Near Support) | 327.29 | 316.32 | 348.22 | 1.9:1 | near_resist/chop/low_rr |
| 11 | **NYSE:C** | NYSE:C | **53.6** | 🟡C+ | 45 | 79 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 136.74 | 133.27 | 144.37 | 2.2:1 | near_resist/chop/low_rr |
| 12 | **NASDAQ:HOOD** | NASDAQ:HOOD | **53.2** | 🟢A | 41.3 | 71 | GREEN Long (Mid) | Pullback Buy (Near Support) | 110.88 | 99.29 | 125.85 | 1.3:1 | OK |
| 13 | **NASDAQ:BGC** | NASDAQ:BGC | **52.8** | ⚪C | 42.4 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 12.17 | 11.66 | 12.92 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 14 | **NASDAQ:LITE** | NASDAQ:LITE | **52.5** | 🟢A | 33.2 | 69 | GREEN Long (Mid) | Breakout (Squeeze Release) | 929.81 | 818.57 | 1077.67 | 1.3:1 | near_resist/chop/low_rr |
| 15 | **NASDAQ:OSBC** | NASDAQ:OSBC | **51.8** | ⚪C | 44.7 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 25.66 | 24.89 | 26.54 | 1.1:1 | mom_decay/near_resist/chop/low_rr |
| 16 | **NYSE:JCI** | NYSE:JCI | **51** | ⚪C | 47.6 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 143.82 | 140.17 | 151.85 | 2.2:1 | near_resist/chop/low_rr |
| 17 | **NYSE:RRC** | NYSE:RRC | **49.9** | ⚪C | 46.5 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 40.53 | 39.09 | 43.21 | 1.9:1 | mom_decay |
| 18 | **NASDAQ:AMD** | NASDAQ:AMD | **49.2** | 🟡C+ | 40.4 | 75 | WARN No Trade (Overheated) | Reversal (Bullish RSI Divergence) | 516.13 | 487.48 | 554.32 | 1.3:1 | near_resist/chop/low_rr |
| 19 | **NYSE:MS** | NYSE:MS | **49.1** | ⚪C | 36.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 215.02 | 206.66 | 225.1 | 1.2:1 | near_resist/chop/low_rr |
| 20 | **NYSE:DELL** | NYSE:DELL | **48.6** | 🟢A | 40.4 | 61 | GREEN Long (Mid) | Overextended Chase (High Risk) | 567.29 | 517.94 | 633.1 | 1.3:1 | overheated/near_resist/chop |
| 21 | **NYSE:WPM** | NYSE:WPM | **47.6** | 🔵B | 25.6 | 68 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 154.12 | 145.1 | 167.34 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 22 | **NYSE:SPNT** | NYSE:SPNT | **47.4** | ⚪C | 45.7 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 23.84 | 23.14 | 25.26 | 2:1 | near_resist/chop/low_rr |
| 23 | **NASDAQ:NBIS** | NASDAQ:NBIS | **46.6** | 🔵B | 19.3 | 75 | GREEN Long (Strong) | Trend Continuation | 224.55 | 204 | 254.68 | 1.5:1 | near_resist/chop/low_rr |
| 24 | **NYSE:ASX** | NYSE:ASX | **46.4** | 🟢A | 36.6 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 38.88 | 36.79 | 42.15 | 1.6:1 | near_resist/chop/low_rr |
| 25 | **NYSE:CF** | NYSE:CF | **46.3** | ⚪C | 40.2 | 43 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 133.07 | 124.89 | 145.07 | 1.5:1 | near_resist/low_rr |
| 26 | **NASDAQ:ORRF** | NASDAQ:ORRF | **45.9** | ⚪C | 34.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 42.47 | 40.89 | 44.35 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 27 | **NASDAQ:MU** | NASDAQ:MU | **44.5** | 🔵B | 21.9 | 66 | GREEN Long (Mid) | Breakout (Squeeze Release) | 978.19 | 896.26 | 1084.98 | 1.3:1 | near_resist/chop/low_rr |
| 28 | **AMEX:CET** | AMEX:CET | **43.8** | ⚪C | 39.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 55.16 | 54.54 | 57.46 | 3.7:1 | fake_break/near_resist/chop |
| 29 | **NYSE:HPE** | NYSE:HPE | **43.8** | 🔵B | 23.6 | 74 | GREEN Long (Mid) | Overextended Chase (High Risk) | 62.09 | 56.78 | 69.17 | 1.3:1 | overheated/near_resist/chop/low_rr |
| 30 | **NYSE:AR** | NYSE:AR | **42.1** | ⚪C | 32.9 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 37.85 | 36.35 | 40.51 | 1.8:1 | mom_decay/near_resist/low_rr |
| 31 | **NASDAQ:NBN** | NASDAQ:NBN | **42** | ⚪C | 36.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 130.65 | 126.01 | 139.27 | 1.9:1 | near_resist/chop/low_rr |
| 32 | **NASDAQ:AEHR** | NASDAQ:AEHR | **42** | ⚪C | 32.6 | 56 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 94.69 | 83.04 | 110.22 | 1.3:1 | chop/low_rr |
| 33 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 34 | **NYSE:BE** | NYSE:BE | **41.7** | 🔵B | 22.8 | 70 | GREEN Long (Mid) | Pullback Buy (Near Support) | 271.61 | 242.11 | 309.39 | 1.3:1 | overheated/fake_break/near_resist/chop/low_rr |
| 35 | **NYSE:AGM** | NYSE:AGM | **41.5** | ⚪C | 35.9 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 222.13 | 215.14 | 235.88 | 2:1 | mom_decay/near_resist/low_rr |
| 36 | **NYSE:NEM** | NYSE:NEM | **40.9** | 🔵B | 19.8 | 60 | GREEN Long (Mid) | Trend Continuation | 126.81 | 120.34 | 136.3 | 1.5:1 | mom_decay/near_resist/low_rr |
| 37 | **NASDAQ:FIVE** | NASDAQ:FIVE | **40.6** | 🔵B | 25.6 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 240.93 | 222.1 | 267.1 | 1.4:1 | mom_decay/near_resist/low_rr |
| 38 | **NYSE:ETN** | NYSE:ETN | **38.7** | ⚪C | 32.5 | 48 | NEUTRAL No Trade (Neutral) | Reversal (MACD Cross) | 425.37 | 406.23 | 450.89 | 1.3:1 | near_resist/chop/low_rr |
| 39 | **NYSE:RIO** | NYSE:RIO | **38.2** | 🔵B | 23.7 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 98.46 | 95.76 | 104.16 | 2.1:1 | mom_decay/near_resist/chop |
| 40 | **NASDAQ:NVDA** | NASDAQ:NVDA | **37.9** | ⚪C | 29.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 215.02 | 203.01 | 233.57 | 1.5:1 | mom_decay/chop/bear_div |
| 41 | **NYSE:SMP** | NYSE:SMP | **35** | ⚪C | 25 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 37.48 | 35.61 | 40.49 | 1.6:1 | near_resist/chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **56.3** |
| Tech Score | 32.8 (Trend Continuation) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 83.92 |
| **Entry** | **83.92** |
| **Stop** | **80.27** (ATR × 1.5) |
| **Target** | **89.27** |
| R/R | 1.5:1 |
| RSI | 57.4 |
| ATR% | 2.9% |
| Dist EMA20 | 3.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 2. NASDAQ:AAPL (NASDAQ:AAPL)

| Field | Value |
|-------|-------|
| Combined Score | **53.9** |
| Tech Score | 43.2 (Pullback Buy (Near Support)) |
| News Score | 70 → WARN Long (Cautious) |
| Current Price | 332.27 |
| **Entry** | **327.29** |
| **Stop** | **316.32** (ATR × 2) |
| **Target** | **348.22** |
| R/R | 1.9:1 |
| RSI | 62.8 |
| ATR% | 2.4% |
| Dist EMA20 | 4.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 3. NASDAQ:HOOD (NASDAQ:HOOD)

| Field | Value |
|-------|-------|
| Combined Score | **53.2** |
| Tech Score | 41.3 (Pullback Buy (Near Support)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 112.57 |
| **Entry** | **110.88** |
| **Stop** | **99.29** (ATR × 2) |
| **Target** | **125.85** |
| R/R | 1.3:1 |
| RSI | 55.8 |
| ATR% | 5.9% |
| Dist EMA20 | 3.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 4. NASDAQ:LITE (NASDAQ:LITE)

| Field | Value |
|-------|-------|
| Combined Score | **52.5** |
| Tech Score | 33.2 (Breakout (Squeeze Release)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 927.03 |
| **Entry** | **929.81** |
| **Stop** | **818.57** (ATR × 1.8) |
| **Target** | **1077.67** |
| R/R | 1.3:1 |
| RSI | 53.9 |
| ATR% | 6.5% |
| Dist EMA20 | 3.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

### 5. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **48.6** |
| Tech Score | 40.4 (Overextended Chase (High Risk)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 567.29 |
| **Entry** | **567.29** |
| **Stop** | **517.94** (ATR × 1.5) |
| **Target** | **633.1** |
| R/R | 1.3:1 |
| RSI | 66.6 |
| ATR% | 5.8% |
| Dist EMA20 | 16% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist chop |

### 6. NYSE:ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **46.4** |
| Tech Score | 36.6 (Pullback Buy (Near Support)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 39.47 |
| **Entry** | **38.88** |
| **Stop** | **36.79** (ATR × 2) |
| **Target** | **42.15** |
| R/R | 1.6:1 |
| RSI | 55.1 |
| ATR% | 3.4% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:TSM** | NYSE:TSM | 58.6 | 46.6 | 89(hot) | 433.24 | **407.25** | 413.31 | 453.17 |
| **NYSE:C** | NYSE:C | 53.6 | 45 | 79(hot) | 138.82 | **130.49** | 133.27 | 144.37 |
| **NASDAQ:AMD** | NASDAQ:AMD | 49.2 | 40.4 | 75(hot) | 516.13 | **485.16** | 477.94 | 554.32 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/13 21:00:38*