# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-08-30　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **RRC** | NYSE:RRC | **64.8** | ⚪C | 73.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 40.84 | 39.55 | 43.37 | 2:1 | near_resist |
| 2 | **WT** | NYSE:WT | **62.5** | 🟢A | 53.9 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 24.43 | 23.33 | 26.04 | 1.5:1 | bear_div |
| 3 | **WTM** | NYSE:WTM | **62.2** | ⚪C | 62 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 2141.82 | 2062.38 | 2236.84 | 1.2:1 | near_resist/chop |
| 4 | **FIVE** | NASDAQ:FIVE | **58.7** | 🟢A | 53.8 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 238.26 | 223.51 | 260.27 | 1.5:1 | mom_decay/near_resist/low_rr |
| 5 | **FCX** | NYSE:FCX | **53.3** | ⚪C | 47.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 76.45 | 72.21 | 82.67 | 1.5:1 | OK |
| 6 | **SM** | NYSE:SM | **53.3** | ⚪C | 47.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 36.62 | 34.53 | 39.68 | 1.5:1 | low_rr |
| 7 | **PRGS** | NASDAQ:PRGS | **52.1** | ⚪C | 53.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 44.09 | 41.98 | 47.54 | 1.6:1 | mom_decay/near_resist |
| 8 | **NEM** | NYSE:NEM | **51.8** | ⚪C | 40 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 127.98 | 120.88 | 138.4 | 1.5:1 | near_resist/low_rr |
| 9 | **WPM** | NYSE:WPM | **51.2** | ⚪C | 43.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 153.33 | 144.36 | 166.49 | 1.5:1 | near_resist/low_rr |
| 10 | **FAF** | NYSE:FAF | **50.6** | ⚪C | 51 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 74.47 | 72.35 | 77.3 | 1.3:1 | chop |
| 11 | **CRWD** | NASDAQ:CRWD | **50.5** | ⚪C | 50.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 218.4 | 181.05 | 268.2 | 1.3:1 | overheated/bear_div |
| 12 | **DT** | NYSE:DT | **50.5** | 🔵B | 27.8 | 72 | GREEN Long (Mid) | Trend Continuation | 53.67 | 50.77 | 57.92 | 1.5:1 | fake_break/bull_trap/near_resist |
| 13 | **HOOD** | NASDAQ:HOOD | **50** | ⚪C | 50 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 102.7 | 92.17 | 116.35 | 1.3:1 | OK |
| 14 | **VEEV** | NYSE:VEEV | **49.8** | 🟢A | 42.3 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 272.54 | 254 | 299.38 | 1.4:1 | overheated/bull_trap/near_resist |
| 15 | **ASX** | NYSE:ASX | **49.6** | ⚪C | 49.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 37.21 | 34.53 | 41.03 | 1.4:1 | near_resist/chop/low_rr |
| 16 | **APD** | NYSE:APD | **49.6** | ⚪C | 49.3 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 308.09 | 299.31 | 319.8 | 1.3:1 | near_resist/chop/low_rr |
| 17 | **TOST** | NYSE:TOST | **46.1** | 🟢A | 34.9 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 34.62 | 32.83 | 37.47 | 1.6:1 | mom_decay/near_resist/bear_div |
| 18 | **SCCO** | NYSE:SCCO | **46** | ⚪C | 35 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 209.8 | 196.58 | 229.19 | 1.5:1 | near_resist/low_rr |
| 19 | **OTC:SBGSY** | OTC:SBGSY | **45.7** | ⚪C | 42.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 68.79 | 67.47 | 72.21 | 2.6:1 | mom_decay/near_resist/chop/low_rr |
| 20 | **RELY** | NASDAQ:RELY | **43.9** | ⚪C | 30.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 26.55 | 24.96 | 28.89 | 1.5:1 | near_resist/bear_div/low_rr |
| 21 | **ADAM** | NASDAQ:ADAM | **43.3** | ⚪C | 30.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 9.8 | 9.49 | 10.25 | 1.5:1 | mom_decay/low_rr |
| 22 | **VRTX** | NASDAQ:VRTX | **42.9** | ⚪C | 29.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 541.69 | 522.19 | 570.29 | 1.5:1 | near_resist/bear_div/low_rr |
| 23 | **OTC:HTHIY** | OTC:HTHIY | **42.6** | ⚪C | 29.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 34.49 | 33.25 | 36.31 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 24 | **AMZN** | NASDAQ:AMZN | **42.3** | ⚪C | 37.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 262.43 | 254.71 | 278.15 | 2:1 | mom_decay/near_resist/chop/low_rr |
| 25 | **BLK** | NYSE:BLK | **42.1** | ⚪C | 34.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1147.01 | 1122.56 | 1206.4 | 2.4:1 | mom_decay/near_resist/low_rr |
| 26 | **PANW** | NASDAQ:PANW | **40.5** | ⚪C | 25.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 371.59 | 344.84 | 410.83 | 1.5:1 | mom_decay/low_rr |
| 27 | **DASH** | NASDAQ:DASH | **39** | ⚪C | 22 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 236.74 | 225.38 | 253.41 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 28 | **AAPL** | NASDAQ:AAPL | **38** | ⚪C | 21.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 319.7 | 290.93 | 361.9 | 1.5:1 | mom_decay/chop/bear_div/low_rr |
| 29 | **CBOE** | CBOE:CBOE | **35.7** | ⚪C | 21.2 | 45 | NEUTRAL No Trade (Neutral) | Trend Continuation | 310.45 | 296.48 | 330.94 | 1.5:1 | near_resist/chop/low_rr |
| 30 | **MSFT** | NASDAQ:MSFT | **33.5** | ⚪C | 22.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 505.83 | 494.02 | 533.04 | 2.3:1 | fake_break/bull_trap/mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. WT (NYSE:WT)

| Field | Value |
|-------|-------|
| Combined Score | **62.5** |
| Tech Score | 53.9 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 24.43 |
| **Entry** | **24.43** |
| **Stop** | **23.33** (ATR × 1.5) |
| **Target** | **26.04** |
| R/R | 1.5:1 |
| RSI | 68.1 |
| ATR% | 3% |
| Dist EMA20 | 6.8% |
| Chase OK | NO |
| MTF Alignment | 2/2 (100%) |
| Risk Flags | bear_div |

### 2. FIVE (NASDAQ:FIVE)

| Field | Value |
|-------|-------|
| Combined Score | **58.7** |
| Tech Score | 53.8 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 241.89 |
| **Entry** | **238.26** |
| **Stop** | **223.51** (ATR × 2) |
| **Target** | **260.27** |
| R/R | 1.5:1 |
| RSI | 55.6 |
| ATR% | 3.8% |
| Dist EMA20 | 1.1% |
| Chase OK | NO |
| MTF Alignment | 0/2 (0%) |
| Risk Flags | mom_decay near_resist low_rr |

### 3. VEEV (NYSE:VEEV)

| Field | Value |
|-------|-------|
| Combined Score | **49.8** |
| Tech Score | 42.3 (Pullback Buy (Near Support)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 276.69 |
| **Entry** | **272.54** |
| **Stop** | **254** (ATR × 2) |
| **Target** | **299.38** |
| R/R | 1.4:1 |
| RSI | 74.9 |
| ATR% | 4.1% |
| Dist EMA20 | 14.3% |
| Chase OK | NO |
| MTF Alignment | 1/2 (50%) |
| Risk Flags | overheated bull_trap near_resist |

### 4. TOST (NYSE:TOST)

| Field | Value |
|-------|-------|
| Combined Score | **46.1** |
| Tech Score | 34.9 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 35.15 |
| **Entry** | **34.62** |
| **Stop** | **32.83** (ATR × 2) |
| **Target** | **37.47** |
| R/R | 1.6:1 |
| RSI | 56.8 |
| ATR% | 3.3% |
| Dist EMA20 | 1.1% |
| Chase OK | NO |
| MTF Alignment | 0/3 (0%) |
| Risk Flags | mom_decay near_resist bear_div |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/8/30 21:00:22*