# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-27　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:ETN** | NYSE:ETN | **71.5** | 🟡C+ | 58.8 | 78 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 439.98 | 417.54 | 472.89 | 1.5:1 | chop/low_rr |
| 2 | **NASDAQ:ARM** | NASDAQ:ARM | **64.8** | 🟢A | 56.7 | 77 | GREEN Long (Strong) | Pullback Buy (Near Support) | 305.67 | 271.22 | 349.42 | 1.3:1 | OK |
| 3 | **NYSE:WT** | NYSE:WT | **60.5** | 🟢A | 54.1 | 70 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 24.33 | 22.83 | 26.33 | 1.3:1 | mom_decay |
| 4 | **NYSE:P** | NYSE:P | **58.8** | 🟡C+ | 50.3 | 84 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 126 | 115.42 | 140.11 | 1.3:1 | overheated |
| 5 | **NASDAQ:AAPL** | NASDAQ:AAPL | **57** | 🟢A | 44 | 64 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 341.07 | 330.84 | 356.08 | 1.5:1 | near_resist/low_rr |
| 6 | **NASDAQ:TEM** | NASDAQ:TEM | **56** | 🟢A | 48.6 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 83.73 | 75.49 | 94.53 | 1.3:1 | overheated |
| 7 | **NYSE:HGTY** | NYSE:HGTY | **55.9** | ⚪C | 48.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.63 | 12.76 | 14.75 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 8 | **NYSE:DT** | NYSE:DT | **55.7** | 🟢A | 43.8 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 57.95 | 55.34 | 61.77 | 1.5:1 | near_resist/bear_div |
| 9 | **NASDAQ:NBIS** | NASDAQ:NBIS | **55.7** | 🟢A | 33.1 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 237.33 | 213.48 | 272.31 | 1.5:1 | chop/low_rr |
| 10 | **NYSE:TSM** | NYSE:TSM | **55.2** | 🟢A | 45.4 | 70 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 450.61 | 435.06 | 471.34 | 1.3:1 | chop/low_rr |
| 11 | **NASDAQ:AEHR** | NASDAQ:AEHR | **54** | 🟢A | 35 | 70 | GREEN Long (Mid) | Trend Continuation | 104.39 | 92.18 | 122.3 | 1.5:1 | chop/low_rr |
| 12 | **NASDAQ:SMCI** | NASDAQ:SMCI | **53.1** | 🔵B | 29.5 | 76 | GREEN Long (Strong) | Trend Continuation | 43.26 | 39.76 | 48.4 | 1.5:1 | bear_div/low_rr |
| 13 | **NYSE:DELL** | NYSE:DELL | **52.9** | 🟢A | 30.5 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 562.89 | 514.76 | 633.48 | 1.5:1 | mom_decay/bear_div/low_rr |
| 14 | **NASDAQ:MRVL** | NASDAQ:MRVL | **52.7** | 🟢A | 38.8 | 61 | GREEN Long (Mid) | Trend Continuation | 261.94 | 243.08 | 289.6 | 1.5:1 | OK |
| 15 | **AMEX:CET** | AMEX:CET | **52** | ⚪C | 53.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 55.54 | 54.59 | 58.19 | 2.8:1 | near_resist/low_rr |
| 16 | **NYSE:SPNT** | NYSE:SPNT | **51.8** | ⚪C | 38.7 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 25.38 | 24.43 | 26.78 | 1.5:1 | near_resist/chop/low_rr |
| 17 | **NYSE:LTC** | NYSE:LTC | **51.1** | ⚪C | 44.9 | 48 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 42.94 | 41.46 | 45.11 | 1.5:1 | mom_decay/near_resist/low_rr |
| 18 | **NASDAQ:MU** | NASDAQ:MU | **49.9** | 🟢A | 34.9 | 60 | GREEN Long (Mid) | Trend Continuation | 1082.28 | 1015.72 | 1179.9 | 1.5:1 | near_resist/chop/low_rr |
| 19 | **NYSE:ASX** | NYSE:ASX | **49.4** | 🔵B | 28 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 44.31 | 41.58 | 48.31 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 20 | **NASDAQ:BGC** | NASDAQ:BGC | **46.8** | ⚪C | 36.4 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 11.88 | 11.18 | 12.76 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 21 | **NASDAQ:PLTR** | NASDAQ:PLTR | **46.5** | ⚪C | 33.8 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 189.67 | 180.85 | 202.61 | 1.5:1 | near_resist/low_rr |
| 22 | **NASDAQ:NVDA** | NASDAQ:NVDA | **44.8** | ⚪C | 41.3 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 221.69 | 214.72 | 235.42 | 2:1 | near_resist/chop/low_rr |
| 23 | **NASDAQ:QCOM** | NASDAQ:QCOM | **44** | ⚪C | 31.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 201.97 | 186.52 | 224.63 | 1.5:1 | near_resist/bear_div/low_rr |
| 24 | **NYSE:BAP** | NYSE:BAP | **43.2** | ⚪C | 38.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 380.37 | 367.62 | 404.7 | 1.9:1 | near_resist/chop/low_rr |
| 25 | **NASDAQ:SNDK** | NASDAQ:SNDK | **43** | 🔵B | 16.6 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1777.8 | 1628.46 | 1996.82 | 1.5:1 | near_resist/chop/low_rr |
| 26 | **OTC:HTHIY** | OTC:HTHIY | **42.6** | ⚪C | 37.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.97 | 33.3 | 37.7 | 1.6:1 | near_resist/chop/low_rr |
| 27 | **NASDAQ:STX** | NASDAQ:STX | **42.3** | ⚪C | 26.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 916.83 | 845.32 | 1021.72 | 1.5:1 | near_resist/chop/low_rr |
| 28 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 29 | **NASDAQ:MSFT** | NASDAQ:MSFT | **41.1** | ⚪C | 35.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 508.43 | 494.49 | 537.85 | 2.1:1 | mom_decay/near_resist/low_rr |
| 30 | **NASDAQ:AMD** | NASDAQ:AMD | **40.3** | 🔵B | 23.8 | 65 | GREEN Long (Mid) | Overextended Chase (High Risk) | 630.63 | 590.9 | 683.6 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:ARM (NASDAQ:ARM)

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

### 2. NYSE:WT (NYSE:WT)

| Field | Value |
|-------|-------|
| Combined Score | **60.5** |
| Tech Score | 54.1 (Reversal (Bullish RSI Divergence)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 24.33 |
| **Entry** | **24.33** |
| **Stop** | **22.83** (ATR × 1.5) |
| **Target** | **26.33** |
| R/R | 1.3:1 |
| RSI | 59.5 |
| ATR% | 4.1% |
| Dist EMA20 | 3.5% |
| Chase OK | NO |
| MTF Alignment | 3/3 (100%) |
| Risk Flags | mom_decay |

### 3. NASDAQ:AAPL (NASDAQ:AAPL)

| Field | Value |
|-------|-------|
| Combined Score | **57** |
| Tech Score | 44 (Trend Follow (HH/HL Intact)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 341.07 |
| **Entry** | **341.07** |
| **Stop** | **330.84** (ATR × 1.5) |
| **Target** | **356.08** |
| R/R | 1.5:1 |
| RSI | 65.7 |
| ATR% | 2% |
| Dist EMA20 | 3.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist low_rr |

### 4. NASDAQ:TEM (NASDAQ:TEM)

| Field | Value |
|-------|-------|
| Combined Score | **56** |
| Tech Score | 48.6 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 85.01 |
| **Entry** | **83.73** |
| **Stop** | **75.49** (ATR × 2) |
| **Target** | **94.53** |
| R/R | 1.3:1 |
| RSI | 72.5 |
| ATR% | 5.6% |
| Dist EMA20 | 19.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated |

### 5. NYSE:DT (NYSE:DT)

| Field | Value |
|-------|-------|
| Combined Score | **55.7** |
| Tech Score | 43.8 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
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

### 6. NASDAQ:NBIS (NASDAQ:NBIS)

| Field | Value |
|-------|-------|
| Combined Score | **55.7** |
| Tech Score | 33.1 (Trend Follow (HH/HL Intact)) |
| News Score | 77 → GREEN Long (Strong) |
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

### 7. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **55.2** |
| Tech Score | 45.4 (Reversal (Bullish RSI Divergence)) |
| News Score | 70 → GREEN Long (Mid) |
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

### 8. NASDAQ:AEHR (NASDAQ:AEHR)

| Field | Value |
|-------|-------|
| Combined Score | **54** |
| Tech Score | 35 (Trend Continuation) |
| News Score | 70 → GREEN Long (Mid) |
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

### 9. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **52.9** |
| Tech Score | 30.5 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 562.89 |
| **Entry** | **562.89** |
| **Stop** | **514.76** (ATR × 1.5) |
| **Target** | **633.48** |
| R/R | 1.5:1 |
| RSI | 58.7 |
| ATR% | 5.7% |
| Dist EMA20 | 5.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay bear_div low_rr |

### 10. NASDAQ:MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **52.7** |
| Tech Score | 38.8 (Trend Continuation) |
| News Score | 61 → GREEN Long (Mid) |
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

### 11. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **49.9** |
| Tech Score | 34.9 (Trend Continuation) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 1082.28 |
| **Entry** | **1082.28** |
| **Stop** | **1015.72** (ATR × 1.5) |
| **Target** | **1179.9** |
| R/R | 1.5:1 |
| RSI | 63.2 |
| ATR% | 4.1% |
| Dist EMA20 | 7.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:ETN** | NYSE:ETN | 71.5 | 58.8 | 78(hot) | 439.98 | **413.58** | 410.06 | 469.9 |
| **NYSE:P** | NYSE:P | 58.8 | 50.3 | 84(hot) | 126 | **118.44** | 111.89 | 140.11 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/27 21:00:04*