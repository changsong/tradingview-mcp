# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-28　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:ETN** | NYSE:ETN | **70.3** | 🟢A | 58.8 | 75 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 439.98 | 417.54 | 472.89 | 1.5:1 | chop/low_rr |
| 2 | **NASDAQ:ARM** | NASDAQ:ARM | **64.8** | 🟢A | 56.7 | 77 | GREEN Long (Strong) | Pullback Buy (Near Support) | 305.67 | 271.22 | 349.42 | 1.3:1 | OK |
| 3 | **NYSE:P** | NYSE:P | **60.6** | 🟢A | 50.3 | 76 | GREEN Long (Strong) | Overextended Chase (High Risk) | 126 | 115.42 | 140.11 | 1.3:1 | overheated |
| 4 | **NYSE:TSM** | NYSE:TSM | **58.4** | 🟢A | 45.4 | 78 | GREEN Long (Strong) | Reversal (Bullish RSI Divergence) | 450.61 | 435.06 | 471.34 | 1.3:1 | chop/low_rr |
| 5 | **NYSE:WT** | NYSE:WT | **56.5** | 🟢A | 52.1 | 63 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 24.33 | 22.83 | 26.33 | 1.3:1 | mom_decay |
| 6 | **NASDAQ:SANM** | NASDAQ:SANM | **55.6** | 🟢A | 37 | 71 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 224.77 | 208.25 | 249 | 1.5:1 | near_resist/chop/low_rr |
| 7 | **NYSE:DT** | NYSE:DT | **55.3** | 🟢A | 43.8 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 57.95 | 55.34 | 61.77 | 1.5:1 | near_resist/bear_div |
| 8 | **NASDAQ:NBIS** | NASDAQ:NBIS | **54.1** | 🟢A | 33.1 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 237.33 | 213.48 | 272.31 | 1.5:1 | chop/low_rr |
| 9 | **NASDAQ:TEM** | NASDAQ:TEM | **52.4** | ⚪C | 48.6 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 83.73 | 75.49 | 94.53 | 1.3:1 | overheated |
| 10 | **NYSE:LTC** | NYSE:LTC | **51.7** | ⚪C | 45.8 | 48 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 42.94 | 41.46 | 45.11 | 1.5:1 | mom_decay/near_resist/low_rr |
| 11 | **NASDAQ:MRVL** | NASDAQ:MRVL | **51.6** | 🟢A | 37.6 | 60 | GREEN Long (Mid) | Trend Continuation | 261.94 | 243.08 | 289.6 | 1.5:1 | OK |
| 12 | **NASDAQ:AEHR** | NASDAQ:AEHR | **51.6** | 🟢A | 35 | 64 | GREEN Long (Mid) | Trend Continuation | 104.39 | 92.18 | 122.3 | 1.5:1 | chop/low_rr |
| 13 | **NASDAQ:SMCI** | NASDAQ:SMCI | **51.1** | 🔵B | 29.5 | 71 | GREEN Long (Mid) | Trend Continuation | 43.26 | 39.76 | 48.4 | 1.5:1 | bear_div/low_rr |
| 14 | **NYSE:SPNT** | NYSE:SPNT | **50.8** | ⚪C | 37.7 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 25.38 | 24.43 | 26.78 | 1.5:1 | near_resist/chop/low_rr |
| 15 | **NYSE:IFS** | NYSE:IFS | **50.5** | ⚪C | 42.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 56.42 | 54.12 | 59.2 | 1.2:1 | near_resist/chop/low_rr |
| 16 | **NASDAQ:MU** | NASDAQ:MU | **49.5** | ⚪C | 34.9 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 1082.28 | 1015.72 | 1179.9 | 1.5:1 | near_resist/chop/low_rr |
| 17 | **NYSE:HGTY** | NYSE:HGTY | **49.3** | ⚪C | 37.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.63 | 12.76 | 14.75 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 18 | **NYSE:VEEV** | NYSE:VEEV | **49.2** | ⚪C | 54 | 42 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 276.47 | 266.08 | 295.28 | 1.8:1 | mom_decay |
| 19 | **NYSE:APH** | NYSE:APH | **48.8** | 🔵B | 25 | 72 | WARN Long (Cautious) | Trend Continuation | 84.09 | 79.93 | 90.19 | 1.5:1 | near_resist/chop/low_rr |
| 20 | **AMEX:CET** | AMEX:CET | **48.4** | ⚪C | 47.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 55.54 | 54.59 | 58.19 | 2.8:1 | near_resist/low_rr |
| 21 | **NYSE:ASX** | NYSE:ASX | **48.2** | 🔵B | 28 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 44.31 | 41.58 | 48.31 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 22 | **NASDAQ:QCOM** | NASDAQ:QCOM | **47.2** | ⚪C | 31.6 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 201.97 | 186.52 | 224.63 | 1.5:1 | near_resist/bear_div/low_rr |
| 23 | **NYSE:GRMN** | NYSE:GRMN | **47.1** | ⚪C | 34.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 294.14 | 283.99 | 309.02 | 1.5:1 | chop/low_rr |
| 24 | **NASDAQ:PLTR** | NASDAQ:PLTR | **46.9** | ⚪C | 33.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 189.67 | 180.85 | 202.61 | 1.5:1 | near_resist/low_rr |
| 25 | **NYSE:BAP** | NYSE:BAP | **43.2** | ⚪C | 38.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 380.37 | 367.62 | 404.7 | 1.9:1 | near_resist/chop/low_rr |
| 26 | **NASDAQ:MSFT** | NASDAQ:MSFT | **43.1** | ⚪C | 35.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 508.43 | 494.49 | 537.85 | 2.1:1 | mom_decay/near_resist/low_rr |
| 27 | **OTC:HTHIY** | OTC:HTHIY | **42.6** | ⚪C | 37.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.97 | 33.3 | 37.7 | 1.6:1 | near_resist/chop/low_rr |
| 28 | **NASDAQ:STX** | NASDAQ:STX | **42.3** | ⚪C | 26.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 916.83 | 845.32 | 1021.72 | 1.5:1 | near_resist/chop/low_rr |
| 29 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 30 | **NASDAQ:SNDK** | NASDAQ:SNDK | **39.8** | 🔵B | 16.6 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1777.8 | 1628.46 | 1996.82 | 1.5:1 | near_resist/chop/low_rr |
| 31 | **NASDAQ:AMD** | NASDAQ:AMD | **39.5** | 🔵B | 23.8 | 63 | GREEN Long (Mid) | Overextended Chase (High Risk) | 630.63 | 590.9 | 683.6 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 32 | **NYSE:DOCN** | NYSE:DOCN | **38.8** | ⚪C | 30.6 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 137.65 | 118.79 | 160.71 | 1.2:1 | near_resist/chop |
| 33 | **NASDAQ:INTC** | NASDAQ:INTC | **37** | 🔵B | 19.7 | 63 | GREEN Long (Mid) | Overextended Chase (High Risk) | 123 | 112.67 | 136.78 | 1.3:1 | overheated/fake_break/near_resist/low_rr |
| 34 | **NASDAQ:VKTX** | NASDAQ:VKTX | **35.1** | ⚪C | 27.1 | 47 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 35.03 | 29.44 | 41.68 | 1.2:1 | near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:ETN (NYSE:ETN)

| Field | Value |
|-------|-------|
| Combined Score | **70.3** |
| Tech Score | 58.8 (Trend Follow (HH/HL Intact)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 439.98 |
| **Entry** | **439.98** |
| **Stop** | **417.54** (ATR × 1.5) |
| **Target** | **472.89** |
| R/R | 1.5:1 |
| RSI | 59.2 |
| ATR% | 3.4% |
| Dist EMA20 | 4.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

### 2. NASDAQ:ARM (NASDAQ:ARM)

| Field | Value |
|-------|-------|
| Combined Score | **64.8** |
| Tech Score | 56.7 (Pullback Buy (Near Support)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 310.32 |
| **Entry** | **305.67** |
| **Stop** | **271.22** (ATR × 2) |
| **Target** | **349.42** |
| R/R | 1.3:1 |
| RSI | 61.2 |
| ATR% | 6.3% |
| Dist EMA20 | 10.6% |
| Chase OK | **YES** |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | None |

### 3. NYSE:P (NYSE:P)

| Field | Value |
|-------|-------|
| Combined Score | **60.6** |
| Tech Score | 50.3 (Overextended Chase (High Risk)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 126 |
| **Entry** | **126** |
| **Stop** | **115.42** (ATR × 1.5) |
| **Target** | **140.11** |
| R/R | 1.3:1 |
| RSI | 71.1 |
| ATR% | 5.6% |
| Dist EMA20 | 18.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated |

### 4. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **58.4** |
| Tech Score | 45.4 (Reversal (Bullish RSI Divergence)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 450.61 |
| **Entry** | **450.61** |
| **Stop** | **435.06** (ATR × 1.5) |
| **Target** | **471.34** |
| R/R | 1.3:1 |
| RSI | 62.2 |
| ATR% | 2.3% |
| Dist EMA20 | 3.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop low_rr |

### 5. NYSE:WT (NYSE:WT)

| Field | Value |
|-------|-------|
| Combined Score | **56.5** |
| Tech Score | 52.1 (Reversal (Bullish RSI Divergence)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 24.33 |
| **Entry** | **24.33** |
| **Stop** | **22.83** (ATR × 1.5) |
| **Target** | **26.33** |
| R/R | 1.3:1 |
| RSI | 59.5 |
| ATR% | 4.1% |
| Dist EMA20 | 3.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay |

### 6. NASDAQ:SANM (NASDAQ:SANM)

| Field | Value |
|-------|-------|
| Combined Score | **55.6** |
| Tech Score | 37 (Trend Follow (HH/HL Intact)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 224.77 |
| **Entry** | **224.77** |
| **Stop** | **208.25** (ATR × 1.5) |
| **Target** | **249** |
| R/R | 1.5:1 |
| RSI | 63.1 |
| ATR% | 4.9% |
| Dist EMA20 | 8.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 7. NYSE:DT (NYSE:DT)

| Field | Value |
|-------|-------|
| Combined Score | **55.3** |
| Tech Score | 43.8 (Trend Follow (HH/HL Intact)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 57.95 |
| **Entry** | **57.95** |
| **Stop** | **55.34** (ATR × 1.5) |
| **Target** | **61.77** |
| R/R | 1.5:1 |
| RSI | 67.6 |
| ATR% | 3% |
| Dist EMA20 | 6.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist bear_div |

### 8. NASDAQ:NBIS (NASDAQ:NBIS)

| Field | Value |
|-------|-------|
| Combined Score | **54.1** |
| Tech Score | 33.1 (Trend Follow (HH/HL Intact)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 237.33 |
| **Entry** | **237.33** |
| **Stop** | **213.48** (ATR × 1.5) |
| **Target** | **272.31** |
| R/R | 1.5:1 |
| RSI | 55.5 |
| ATR% | 6.7% |
| Dist EMA20 | 5.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | chop low_rr |

### 9. NASDAQ:MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **51.6** |
| Tech Score | 37.6 (Trend Continuation) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 261.935 |
| **Entry** | **261.94** |
| **Stop** | **243.08** (ATR × 1.5) |
| **Target** | **289.6** |
| R/R | 1.5:1 |
| RSI | 63.1 |
| ATR% | 4.8% |
| Dist EMA20 | 8.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | None |

### 10. NASDAQ:AEHR (NASDAQ:AEHR)

| Field | Value |
|-------|-------|
| Combined Score | **51.6** |
| Tech Score | 35 (Trend Continuation) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 104.39 |
| **Entry** | **104.39** |
| **Stop** | **92.18** (ATR × 1.5) |
| **Target** | **122.3** |
| R/R | 1.5:1 |
| RSI | 58.3 |
| ATR% | 7.8% |
| Dist EMA20 | 10.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/28 21:00:06*