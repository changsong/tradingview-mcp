# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-12　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:NWBI** | NASDAQ:NWBI | **59.9** | ⚪C | 58.1 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 15.54 | 15.1 | 16.03 | 1.1:1 | near_resist/chop |
| 2 | **NYSE:LTC** | NYSE:LTC | **59.8** | ⚪C | 61.7 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 41.64 | 40.66 | 43.88 | 2.3:1 | near_resist/low_rr |
| 3 | **NYSE:TSM** | NYSE:TSM | **59.2** | 🟢A | 46.6 | 78 | GREEN Long (Strong) | Pullback Buy (Near Support) | 426.74 | 413.31 | 453.17 | 2:1 | near_resist/chop/low_rr |
| 4 | **NYSE:PACS** | NYSE:PACS | **58.5** | ⚪C | 55.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 44.89 | 41.94 | 48.68 | 1.3:1 | near_resist/low_rr |
| 5 | **NYSE:APH** | NYSE:APH | **56.7** | 🟢A | 32.8 | 80 | GREEN Long (Strong) | Trend Continuation | 83.92 | 80.27 | 89.27 | 1.5:1 | near_resist/chop/low_rr |
| 6 | **NYSE:BAP** | NYSE:BAP | **56.5** | ⚪C | 52.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 379.03 | 362.94 | 398.68 | 1.2:1 | near_resist/chop |
| 7 | **NYSE:HGTY** | NYSE:HGTY | **55.4** | ⚪C | 50.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.59 | 12.5 | 15.01 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 8 | **NYSE:WT** | NYSE:WT | **55.3** | ⚪C | 58.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 23.57 | 21.87 | 25.99 | 1.4:1 | mom_decay |
| 9 | **NYSE:C** | NYSE:C | **54.8** | 🟡C+ | 45 | 82 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 136.74 | 133.27 | 144.37 | 2.2:1 | near_resist/chop/low_rr |
| 10 | **NASDAQ:AMD** | NASDAQ:AMD | **54.2** | 🟢A | 40.4 | 75 | GREEN Long (Strong) | Reversal (Bullish RSI Divergence) | 516.13 | 487.48 | 554.32 | 1.3:1 | near_resist/chop/low_rr |
| 11 | **NASDAQ:HRMY** | NASDAQ:HRMY | **53.9** | ⚪C | 48.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 41.52 | 39.59 | 44.35 | 1.5:1 | low_rr |
| 12 | **NASDAQ:LITE** | NASDAQ:LITE | **53.7** | 🟢A | 33.2 | 72 | GREEN Long (Mid) | Breakout (Squeeze Release) | 929.81 | 818.57 | 1077.67 | 1.3:1 | near_resist/chop/low_rr |
| 13 | **NASDAQ:BGC** | NASDAQ:BGC | **53.6** | ⚪C | 42.4 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 12.17 | 11.66 | 12.92 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 14 | **NASDAQ:HOOD** | NASDAQ:HOOD | **53** | 🟢A | 42.3 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 110.88 | 99.29 | 125.85 | 1.3:1 | OK |
| 15 | **NASDAQ:OSBC** | NASDAQ:OSBC | **51.8** | ⚪C | 44.7 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 25.66 | 24.89 | 26.54 | 1.1:1 | mom_decay/near_resist/chop/low_rr |
| 16 | **NASDAQ:AAPL** | NASDAQ:AAPL | **51.5** | 🟢A | 43.2 | 64 | GREEN Long (Mid) | Pullback Buy (Near Support) | 327.29 | 316.32 | 348.22 | 1.9:1 | near_resist/chop/low_rr |
| 17 | **NYSE:JCI** | NYSE:JCI | **51.4** | ⚪C | 47.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 143.82 | 140.17 | 151.85 | 2.2:1 | near_resist/chop/low_rr |
| 18 | **NYSE:DELL** | NYSE:DELL | **51.4** | 🟢A | 40.4 | 68 | GREEN Long (Mid) | Overextended Chase (High Risk) | 567.29 | 517.94 | 633.1 | 1.3:1 | overheated/near_resist/chop |
| 19 | **NYSE:RRC** | NYSE:RRC | **49.9** | ⚪C | 46.5 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 40.53 | 39.09 | 43.21 | 1.9:1 | mom_decay |
| 20 | **NYSE:SPNT** | NYSE:SPNT | **49.6** | ⚪C | 49.3 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 23.84 | 23.14 | 25.26 | 2:1 | near_resist/chop/low_rr |
| 21 | **NYSE:MS** | NYSE:MS | **49.5** | ⚪C | 36.8 | 56 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 215.02 | 206.66 | 225.1 | 1.2:1 | near_resist/chop/low_rr |
| 22 | **NYSE:WPM** | NYSE:WPM | **49.2** | 🔵B | 25.6 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 154.12 | 145.1 | 167.34 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 23 | **NASDAQ:ORRF** | NASDAQ:ORRF | **47.6** | ⚪C | 37.7 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 42.47 | 40.89 | 44.35 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 24 | **NYSE:ASX** | NYSE:ASX | **47.6** | 🟢A | 36.6 | 64 | GREEN Long (Mid) | Pullback Buy (Near Support) | 38.88 | 36.79 | 42.15 | 1.6:1 | near_resist/chop/low_rr |
| 25 | **NASDAQ:MU** | NASDAQ:MU | **45** | 🔵B | 20.7 | 69 | GREEN Long (Mid) | Breakout (Squeeze Release) | 978.19 | 896.26 | 1084.98 | 1.3:1 | near_resist/chop/low_rr |
| 26 | **NASDAQ:NBIS** | NASDAQ:NBIS | **45** | 🔵B | 19.3 | 71 | GREEN Long (Mid) | Trend Continuation | 224.55 | 204 | 254.68 | 1.5:1 | near_resist/chop/low_rr |
| 27 | **NYSE:BE** | NYSE:BE | **44.5** | 🔵B | 22.8 | 77 | GREEN Long (Strong) | Pullback Buy (Near Support) | 271.61 | 242.11 | 309.39 | 1.3:1 | overheated/fake_break/near_resist/chop/low_rr |
| 28 | **NYSE:AR** | NYSE:AR | **44.1** | 🟢A | 32.9 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 37.85 | 36.35 | 40.51 | 1.8:1 | mom_decay/near_resist/low_rr |
| 29 | **AMEX:CET** | AMEX:CET | **43.8** | ⚪C | 39.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 55.16 | 54.54 | 57.46 | 3.7:1 | fake_break/near_resist/chop |
| 30 | **NYSE:HPE** | NYSE:HPE | **42.8** | 🔵B | 22.6 | 73 | GREEN Long (Mid) | Overextended Chase (High Risk) | 62.09 | 56.78 | 69.17 | 1.3:1 | overheated/near_resist/chop/low_rr |
| 31 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 32 | **NYSE:NEM** | NYSE:NEM | **41.7** | 🔵B | 19.8 | 62 | GREEN Long (Mid) | Trend Continuation | 126.81 | 120.34 | 136.3 | 1.5:1 | mom_decay/near_resist/low_rr |
| 33 | **NYSE:AGM** | NYSE:AGM | **41.5** | ⚪C | 35.9 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 222.13 | 215.14 | 235.88 | 2:1 | mom_decay/near_resist/low_rr |
| 34 | **NASDAQ:NBN** | NASDAQ:NBN | **40.6** | ⚪C | 34.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 130.65 | 126.01 | 139.27 | 1.9:1 | near_resist/chop/low_rr |
| 35 | **NASDAQ:FIVE** | NASDAQ:FIVE | **40.6** | 🔵B | 25.6 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 240.93 | 222.1 | 267.1 | 1.4:1 | mom_decay/near_resist/low_rr |
| 36 | **NYSE:ETN** | NYSE:ETN | **38.7** | ⚪C | 32.5 | 48 | NEUTRAL No Trade (Neutral) | Reversal (MACD Cross) | 425.37 | 406.23 | 450.89 | 1.3:1 | near_resist/chop/low_rr |
| 37 | **NYSE:RIO** | NYSE:RIO | **38.6** | 🔵B | 23.7 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 98.46 | 95.76 | 104.16 | 2.1:1 | mom_decay/near_resist/chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **59.2** |
| Tech Score | 46.6 (Pullback Buy (Near Support)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 433.24 |
| **Entry** | **426.74** |
| **Stop** | **413.31** (ATR × 2) |
| **Target** | **453.17** |
| R/R | 2:1 |
| RSI | 56.9 |
| ATR% | 2.3% |
| Dist EMA20 | 2.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 2. NYSE:APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **56.7** |
| Tech Score | 32.8 (Trend Continuation) |
| News Score | 80 → GREEN Long (Strong) |
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

### 3. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **54.2** |
| Tech Score | 40.4 (Reversal (Bullish RSI Divergence)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 516.13 |
| **Entry** | **516.13** |
| **Stop** | **487.48** (ATR × 1.5) |
| **Target** | **554.32** |
| R/R | 1.3:1 |
| RSI | 58 |
| ATR% | 3.7% |
| Dist EMA20 | 6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 4. NASDAQ:LITE (NASDAQ:LITE)

| Field | Value |
|-------|-------|
| Combined Score | **53.7** |
| Tech Score | 33.2 (Breakout (Squeeze Release)) |
| News Score | 72 → GREEN Long (Mid) |
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

### 5. NASDAQ:HOOD (NASDAQ:HOOD)

| Field | Value |
|-------|-------|
| Combined Score | **53** |
| Tech Score | 42.3 (Pullback Buy (Near Support)) |
| News Score | 69 → GREEN Long (Mid) |
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

### 6. NASDAQ:AAPL (NASDAQ:AAPL)

| Field | Value |
|-------|-------|
| Combined Score | **51.5** |
| Tech Score | 43.2 (Pullback Buy (Near Support)) |
| News Score | 64 → GREEN Long (Mid) |
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

### 7. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **51.4** |
| Tech Score | 40.4 (Overextended Chase (High Risk)) |
| News Score | 68 → GREEN Long (Mid) |
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

### 8. NYSE:ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **47.6** |
| Tech Score | 36.6 (Pullback Buy (Near Support)) |
| News Score | 64 → GREEN Long (Mid) |
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

### 9. NYSE:AR (NYSE:AR)

| Field | Value |
|-------|-------|
| Combined Score | **44.1** |
| Tech Score | 32.9 (Pullback Buy (Near Support)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 38.43 |
| **Entry** | **37.85** |
| **Stop** | **36.35** (ATR × 2) |
| **Target** | **40.51** |
| R/R | 1.8:1 |
| RSI | 54.5 |
| ATR% | 2.7% |
| Dist EMA20 | 0.2% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:C** | NYSE:C | 54.8 | 45 | 82(hot) | 138.82 | **130.49** | 133.27 | 144.37 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/12 21:00:05*