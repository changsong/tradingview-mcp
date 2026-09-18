# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-14　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:PACS** | NYSE:PACS | **70.6** | ⚪C | 76 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 44.89 | 41.94 | 48.68 | 1.3:1 | near_resist/low_rr |
| 2 | **NASDAQ:NWBI** | NASDAQ:NWBI | **67.4** | ⚪C | 70.6 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 15.54 | 15.1 | 16.03 | 1.1:1 | near_resist/chop |
| 3 | **NYSE:WT** | NYSE:WT | **64.9** | ⚪C | 68.8 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 23.57 | 21.87 | 25.99 | 1.4:1 | mom_decay |
| 4 | **NASDAQ:SMCI** | NASDAQ:SMCI | **60.2** | 🟢A | 43.4 | 73 | GREEN Long (Mid) | Breakout (Squeeze Release) | 40.22 | 36.13 | 45.61 | 1.3:1 | mom_decay/near_resist/low_rr |
| 5 | **NASDAQ:HRMY** | NASDAQ:HRMY | **60** | ⚪C | 58.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 41.52 | 39.59 | 44.35 | 1.5:1 | low_rr |
| 6 | **NYSE:APH** | NYSE:APH | **57.9** | 🟢A | 32.8 | 83 | GREEN Long (Strong) | Trend Continuation | 83.92 | 80.27 | 89.27 | 1.5:1 | near_resist/chop/low_rr |
| 7 | **NYSE:HGTY** | NYSE:HGTY | **56.7** | ⚪C | 52.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.59 | 12.5 | 15.01 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 8 | **NYSE:TSM** | NYSE:TSM | **56.2** | 🟡C+ | 46.6 | 83 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 426.74 | 413.31 | 453.17 | 2:1 | near_resist/chop/low_rr |
| 9 | **NYSE:C** | NYSE:C | **56.2** | 🟢A | 45 | 73 | WARN Long (Cautious) | Pullback Buy (Near Support) | 136.74 | 133.27 | 144.37 | 2.2:1 | near_resist/chop/low_rr |
| 10 | **NYSE:LTC** | NYSE:LTC | **56.1** | ⚪C | 56.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 41.64 | 40.66 | 43.88 | 2.3:1 | near_resist/low_rr |
| 11 | **NASDAQ:HOOD** | NASDAQ:HOOD | **53.8** | 🟢A | 42.3 | 71 | GREEN Long (Mid) | Pullback Buy (Near Support) | 110.88 | 99.29 | 125.85 | 1.3:1 | OK |
| 12 | **NYSE:SPNT** | NYSE:SPNT | **51.4** | ⚪C | 52.4 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 23.84 | 23.14 | 25.26 | 2:1 | near_resist/chop/low_rr |
| 13 | **NYSE:DELL** | NYSE:DELL | **51.4** | 🟢A | 40.4 | 68 | GREEN Long (Mid) | Overextended Chase (High Risk) | 567.29 | 517.94 | 633.1 | 1.3:1 | overheated/near_resist/chop |
| 14 | **NASDAQ:LITE** | NASDAQ:LITE | **51.3** | 🟢A | 33.2 | 66 | GREEN Long (Mid) | Breakout (Squeeze Release) | 929.81 | 818.57 | 1077.67 | 1.3:1 | near_resist/chop/low_rr |
| 15 | **NASDAQ:BGC** | NASDAQ:BGC | **50.8** | ⚪C | 39.6 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 12.17 | 11.66 | 12.92 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 16 | **NASDAQ:OSBC** | NASDAQ:OSBC | **48.6** | ⚪C | 39.4 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 25.66 | 24.89 | 26.54 | 1.1:1 | mom_decay/near_resist/chop/low_rr |
| 17 | **NASDAQ:AMD** | NASDAQ:AMD | **48.2** | 🟢A | 40.4 | 60 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 516.13 | 487.48 | 554.32 | 1.3:1 | near_resist/chop/low_rr |
| 18 | **NASDAQ:AEHR** | NASDAQ:AEHR | **47.6** | ⚪C | 42.6 | 55 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 94.69 | 83.04 | 110.22 | 1.3:1 | chop/low_rr |
| 19 | **NYSE:JCI** | NYSE:JCI | **46.5** | ⚪C | 40.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 143.82 | 140.17 | 151.85 | 2.2:1 | near_resist/chop/low_rr |
| 20 | **NYSE:HPE** | NYSE:HPE | **46.4** | 🔵B | 22.6 | 82 | GREEN Long (Strong) | Overextended Chase (High Risk) | 62.09 | 56.78 | 69.17 | 1.3:1 | overheated/near_resist/chop/low_rr |
| 21 | **NASDAQ:AAPL** | NASDAQ:AAPL | **46.3** | ⚪C | 43.2 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 327.29 | 316.32 | 348.22 | 1.9:1 | near_resist/chop/low_rr |
| 22 | **NASDAQ:ORRF** | NASDAQ:ORRF | **45.9** | ⚪C | 34.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 42.47 | 40.89 | 44.35 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 23 | **AMEX:CET** | AMEX:CET | **45.8** | ⚪C | 43 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 55.16 | 54.54 | 57.46 | 3.7:1 | fake_break/near_resist/chop |
| 24 | **NYSE:CF** | NYSE:CF | **45.8** | ⚪C | 38.6 | 44 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 133.07 | 124.89 | 145.07 | 1.5:1 | near_resist/low_rr |
| 25 | **NYSE:WPM** | NYSE:WPM | **45.7** | 🔵B | 24.5 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 154.12 | 145.1 | 167.34 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 26 | **OTC:SMNEY** | OTC:SMNEY | **45.4** | ⚪C | 34 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 27 | **NYSE:ASX** | NYSE:ASX | **45.1** | 🟢A | 35.1 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 38.88 | 36.79 | 42.15 | 1.6:1 | near_resist/chop/low_rr |
| 28 | **NASDAQ:NBIS** | NASDAQ:NBIS | **45** | 🔵B | 19.3 | 71 | GREEN Long (Mid) | Trend Continuation | 224.55 | 204 | 254.68 | 1.5:1 | near_resist/chop/low_rr |
| 29 | **NASDAQ:NBN** | NASDAQ:NBN | **44.2** | ⚪C | 40.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 130.65 | 126.01 | 139.27 | 1.9:1 | near_resist/chop/low_rr |
| 30 | **NYSE:AR** | NYSE:AR | **43.7** | ⚪C | 36.2 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 37.85 | 36.35 | 40.51 | 1.8:1 | mom_decay/near_resist/low_rr |
| 31 | **NYSE:AGM** | NYSE:AGM | **40.5** | ⚪C | 34.2 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 222.13 | 215.14 | 235.88 | 2:1 | mom_decay/near_resist/low_rr |
| 32 | **NYSE:BE** | NYSE:BE | **40.5** | 🔵B | 22.8 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 271.61 | 242.11 | 309.39 | 1.3:1 | overheated/fake_break/near_resist/chop/low_rr |
| 33 | **NASDAQ:MU** | NASDAQ:MU | **39.3** | ⚪C | 21.9 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 978.19 | 896.26 | 1084.98 | 1.3:1 | near_resist/chop/low_rr |
| 34 | **NYSE:ETN** | NYSE:ETN | **39.1** | ⚪C | 32.5 | 49 | NEUTRAL No Trade (Neutral) | Reversal (MACD Cross) | 425.37 | 406.23 | 450.89 | 1.3:1 | near_resist/chop/low_rr |
| 35 | **OTC:SMTGY** | OTC:SMTGY | **37.7** | ⚪C | 21.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.7 | 6.32 | 7.24 | 1.4:1 | near_resist/chop/low_rr |
| 36 | **NASDAQ:FIVE** | NASDAQ:FIVE | **36.2** | 🔵B | 19 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 240.93 | 222.1 | 267.1 | 1.4:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:SMCI (NASDAQ:SMCI)

| Field | Value |
|-------|-------|
| Combined Score | **60.2** |
| Tech Score | 43.4 (Breakout (Squeeze Release)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 40.1 |
| **Entry** | **40.22** |
| **Stop** | **36.13** (ATR × 1.8) |
| **Target** | **45.61** |
| R/R | 1.3:1 |
| RSI | 60.5 |
| ATR% | 5.5% |
| Dist EMA20 | 7.7% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 2. NYSE:APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **57.9** |
| Tech Score | 32.8 (Trend Continuation) |
| News Score | 83 → GREEN Long (Strong) |
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

### 3. NYSE:C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **56.2** |
| Tech Score | 45 (Pullback Buy (Near Support)) |
| News Score | 73 → WARN Long (Cautious) |
| Current Price | 138.82 |
| **Entry** | **136.74** |
| **Stop** | **133.27** (ATR × 2) |
| **Target** | **144.37** |
| R/R | 2.2:1 |
| RSI | 59.7 |
| ATR% | 2% |
| Dist EMA20 | 2.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 4. NASDAQ:HOOD (NASDAQ:HOOD)

| Field | Value |
|-------|-------|
| Combined Score | **53.8** |
| Tech Score | 42.3 (Pullback Buy (Near Support)) |
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

### 5. NYSE:DELL (NYSE:DELL)

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

### 6. NASDAQ:LITE (NASDAQ:LITE)

| Field | Value |
|-------|-------|
| Combined Score | **51.3** |
| Tech Score | 33.2 (Breakout (Squeeze Release)) |
| News Score | 66 → GREEN Long (Mid) |
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

### 7. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **48.2** |
| Tech Score | 40.4 (Reversal (Bullish RSI Divergence)) |
| News Score | 60 → GREEN Long (Mid) |
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

### 8. NYSE:ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **45.1** |
| Tech Score | 35.1 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 39.47 |
| **Entry** | **38.88** |
| **Stop** | **36.79** (ATR × 2) |
| **Target** | **42.15** |
| R/R | 1.6:1 |
| RSI | 55.1 |
| ATR% | 3.4% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 2/3 (67%) |
| Risk Flags | near_resist chop low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:TSM** | NYSE:TSM | 56.2 | 46.6 | 83(hot) | 433.24 | **407.25** | 413.31 | 453.17 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/14 21:00:15*