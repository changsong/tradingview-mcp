# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-08-29　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **RRC** | NYSE:RRC | **62.7** | ⚪C | 69.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 40.84 | 39.55 | 43.37 | 2:1 | near_resist |
| 2 | **WT** | NYSE:WT | **57.5** | 🟢A | 44.1 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 24.43 | 23.33 | 26.04 | 1.5:1 | bear_div |
| 3 | **WTM** | NYSE:WTM | **56.7** | ⚪C | 52.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 2141.82 | 2062.38 | 2236.84 | 1.2:1 | near_resist/chop |
| 4 | **APD** | NYSE:APD | **54.6** | ⚪C | 57.6 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 308.09 | 299.31 | 319.8 | 1.3:1 | near_resist/chop/low_rr |
| 5 | **DT** | NYSE:DT | **53.8** | 🟢A | 30.6 | 76 | GREEN Long (Strong) | Trend Continuation | 53.67 | 50.77 | 57.92 | 1.5:1 | fake_break/bull_trap/near_resist |
| 6 | **NEM** | NYSE:NEM | **52.9** | ⚪C | 41.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 127.98 | 120.88 | 138.4 | 1.5:1 | near_resist/low_rr |
| 7 | **FIVE** | NASDAQ:FIVE | **50.7** | ⚪C | 46.5 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 238.26 | 223.51 | 260.27 | 1.5:1 | mom_decay/near_resist/low_rr |
| 8 | **FAF** | NYSE:FAF | **50.6** | ⚪C | 51 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 74.47 | 72.35 | 77.3 | 1.3:1 | chop |
| 9 | **WPM** | NYSE:WPM | **50** | ⚪C | 41.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 153.33 | 144.36 | 166.49 | 1.5:1 | near_resist/low_rr |
| 10 | **HOOD** | NASDAQ:HOOD | **49.2** | ⚪C | 48.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 102.7 | 92.17 | 116.35 | 1.3:1 | OK |
| 11 | **ASX** | NYSE:ASX | **48.7** | 🟢A | 39.1 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 37.21 | 34.53 | 41.03 | 1.4:1 | near_resist/chop/low_rr |
| 12 | **NVDA** | NASDAQ:NVDA | **48.5** | ⚪C | 47.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 214.29 | 203.63 | 231.47 | 1.6:1 | mom_decay/chop/bear_div |
| 13 | **OTC:SBGSY** | OTC:SBGSY | **47.8** | ⚪C | 46.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 68.79 | 67.47 | 72.21 | 2.6:1 | mom_decay/near_resist/chop/low_rr |
| 14 | **AAPL** | NASDAQ:AAPL | **47.5** | ⚪C | 45.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 314.9 | 307.55 | 331.85 | 2.3:1 | near_resist/chop |
| 15 | **PRGS** | NASDAQ:PRGS | **46.1** | ⚪C | 43.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 44.09 | 41.98 | 47.54 | 1.6:1 | mom_decay/near_resist |
| 16 | **SCCO** | NYSE:SCCO | **46** | ⚪C | 35 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 209.8 | 196.58 | 229.19 | 1.5:1 | near_resist/low_rr |
| 17 | **TOST** | NYSE:TOST | **46** | 🟢A | 32.7 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 34.62 | 32.83 | 37.47 | 1.6:1 | mom_decay/near_resist/bear_div |
| 18 | **SM** | NYSE:SM | **45.8** | ⚪C | 34.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 36.62 | 34.53 | 39.68 | 1.5:1 | low_rr |
| 19 | **OTC:HTHIY** | OTC:HTHIY | **44.9** | ⚪C | 33.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 34.49 | 33.25 | 36.31 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 20 | **VRTX** | NASDAQ:VRTX | **44.6** | ⚪C | 32.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 541.69 | 522.19 | 570.29 | 1.5:1 | near_resist/bear_div/low_rr |
| 21 | **VEEV** | NYSE:VEEV | **44.6** | 🟢A | 32.3 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 272.54 | 254 | 299.38 | 1.4:1 | overheated/bull_trap/near_resist |
| 22 | **PANW** | NASDAQ:PANW | **44.3** | ⚪C | 32.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 371.59 | 344.84 | 410.83 | 1.5:1 | mom_decay/low_rr |
| 23 | **ADAM** | NASDAQ:ADAM | **44.1** | ⚪C | 31.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 9.8 | 9.49 | 10.25 | 1.5:1 | mom_decay/low_rr |
| 24 | **CRWD** | NASDAQ:CRWD | **42.9** | ⚪C | 29.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 218.4 | 200.71 | 244.35 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 25 | **RELY** | NASDAQ:RELY | **40.4** | ⚪C | 24.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 26.55 | 24.96 | 28.89 | 1.5:1 | near_resist/bear_div/low_rr |
| 26 | **BLK** | NYSE:BLK | **39.1** | ⚪C | 28.5 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1147.01 | 1122.56 | 1206.4 | 2.4:1 | mom_decay/near_resist/low_rr |
| 27 | **AMZN** | NASDAQ:AMZN | **36.3** | ⚪C | 27.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 262.43 | 254.71 | 278.15 | 2:1 | mom_decay/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. WT (NYSE:WT)

| Field | Value |
|-------|-------|
| Combined Score | **57.5** |
| Tech Score | 44.1 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 24.43 |
| **Entry** | **24.43** |
| **Stop** | **23.33** (ATR × 1.5) |
| **Target** | **26.04** |
| R/R | 1.5:1 |
| RSI | 68.1 |
| ATR% | 3% |
| Dist EMA20 | 6.8% |
| Chase OK | NO |
| MTF Alignment | 2/3 (67%) |
| Risk Flags | bear_div |

### 2. DT (NYSE:DT)

| Field | Value |
|-------|-------|
| Combined Score | **53.8** |
| Tech Score | 30.6 (Trend Continuation) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 53.67 |
| **Entry** | **53.67** |
| **Stop** | **50.77** (ATR × 1.5) |
| **Target** | **57.92** |
| R/R | 1.5:1 |
| RSI | 70.1 |
| ATR% | 3.6% |
| Dist EMA20 | 8.6% |
| Chase OK | NO |
| MTF Alignment | 2/2 (100%) |
| Risk Flags | fake_break bull_trap near_resist |

### 3. ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **48.7** |
| Tech Score | 39.1 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 37.78 |
| **Entry** | **37.21** |
| **Stop** | **34.53** (ATR × 2) |
| **Target** | **41.03** |
| R/R | 1.4:1 |
| RSI | 50.4 |
| ATR% | 4.3% |
| Dist EMA20 | 0.5% |
| Chase OK | NO |
| MTF Alignment | 2/3 (67%) |
| Risk Flags | near_resist chop low_rr |

### 4. TOST (NYSE:TOST)

| Field | Value |
|-------|-------|
| Combined Score | **46** |
| Tech Score | 32.7 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 35.15 |
| **Entry** | **34.62** |
| **Stop** | **32.83** (ATR × 2) |
| **Target** | **37.47** |
| R/R | 1.6:1 |
| RSI | 56.8 |
| ATR% | 3.3% |
| Dist EMA20 | 1.1% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist bear_div |

### 5. VEEV (NYSE:VEEV)

| Field | Value |
|-------|-------|
| Combined Score | **44.6** |
| Tech Score | 32.3 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 276.69 |
| **Entry** | **272.54** |
| **Stop** | **254** (ATR × 2) |
| **Target** | **299.38** |
| R/R | 1.4:1 |
| RSI | 74.9 |
| ATR% | 4.1% |
| Dist EMA20 | 14.3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | overheated bull_trap near_resist |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/8/29 21:00:33*