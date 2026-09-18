# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-16　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:LTC** | NYSE:LTC | **71.2** | ⚪C | 77 | 50 | NEUTRAL No Trade (No relevant news) | Trend Follow (HH/HL Intact) | 43.46 | 42.22 | 45.28 | 1.5:1 | near_resist |
| 2 | **NASDAQ:NWBI** | NASDAQ:NWBI | **60.4** | ⚪C | 59 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 15.65 | 15.18 | 16.19 | 1.1:1 | near_resist/chop |
| 3 | **NASDAQ:AMD** | NASDAQ:AMD | **57.8** | 🟡C+ | 54 | 76 | WARN No Trade (Overheated) | Reversal (Bullish RSI Divergence) | 504.2 | 474.7 | 543.53 | 1.3:1 | near_resist/chop |
| 4 | **NASDAQ:PLTR** | NASDAQ:PLTR | **57.4** | 🟡C+ | 44.6 | 89 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 169.97 | 157.37 | 187.75 | 1.4:1 | mom_decay/near_resist/low_rr |
| 5 | **NYSE:HPE** | NYSE:HPE | **56.2** | 🟢A | 30.7 | 82 | GREEN Long (Strong) | Trend Continuation | 55.88 | 50.18 | 64.24 | 1.5:1 | chop |
| 6 | **NYSE:DELL** | NYSE:DELL | **55** | 🟢A | 42.6 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 543.51 | 491.33 | 620.04 | 1.5:1 | chop |
| 7 | **NYSE:SPNT** | NYSE:SPNT | **54.7** | ⚪C | 57.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 24.3 | 23.58 | 25.76 | 2:1 | near_resist/chop/low_rr |
| 8 | **NYSE:PACS** | NYSE:PACS | **53.1** | ⚪C | 46.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 42.22 | 39.21 | 46.09 | 1.3:1 | near_resist |
| 9 | **NASDAQ:OSBC** | NASDAQ:OSBC | **53** | ⚪C | 46.7 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 25.61 | 24.79 | 26.55 | 1.1:1 | mom_decay/near_resist/chop/low_rr |
| 10 | **NASDAQ:MSFT** | NASDAQ:MSFT | **51.7** | 🟢A | 42.2 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 489.66 | 476.24 | 518 | 2.1:1 | mom_decay/near_resist |
| 11 | **NYSE:SM** | NYSE:SM | **50.5** | 🔵B | 29.9 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 41.29 | 39.12 | 44.47 | 1.5:1 | bull_trap/near_resist/bear_div |
| 12 | **NASDAQ:HRMY** | NASDAQ:HRMY | **50.3** | ⚪C | 42.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 42.17 | 40.27 | 44.95 | 1.5:1 | mom_decay/near_resist/low_rr |
| 13 | **NASDAQ:CRWD** | NASDAQ:CRWD | **49.5** | 🟢A | 31.2 | 77 | GREEN Long (Strong) | Overextended Chase (High Risk) | 242.49 | 219.57 | 273.04 | 1.3:1 | overheated/near_resist/chop/bear_div |
| 14 | **NYSE:HGTY** | NYSE:HGTY | **48.6** | ⚪C | 39.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 14.06 | 12.99 | 15.46 | 1.3:1 | fake_break/near_resist/bear_div |
| 15 | **NASDAQ:ORRF** | NASDAQ:ORRF | **48.5** | ⚪C | 39.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 42.71 | 41.05 | 44.71 | 1.2:1 | near_resist/chop/bear_div/low_rr |
| 16 | **NYSE:CF** | NYSE:CF | **48.4** | ⚪C | 37 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 135.54 | 126.8 | 148.36 | 1.5:1 | mom_decay/near_resist/low_rr |
| 17 | **NYSE:BE** | NYSE:BE | **47.8** | 🟢A | 31 | 73 | GREEN Long (Mid) | Pullback Buy (Near Support) | 255.46 | 225.12 | 293.58 | 1.3:1 | chop |
| 18 | **NASDAQ:PANW** | NASDAQ:PANW | **47.6** | 🔵B | 22.4 | 73 | GREEN Long (Mid) | Trend Continuation | 375.09 | 342.46 | 422.95 | 1.5:1 | near_resist/chop/low_rr |
| 19 | **NASDAQ:PRGS** | NASDAQ:PRGS | **46** | ⚪C | 49.4 | 41 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 42.91 | 39.55 | 47.57 | 1.4:1 | mom_decay/near_resist/low_rr |
| 20 | **NYSE:C** | NYSE:C | **46** | 🟢A | 32 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 134.13 | 129.63 | 142.71 | 1.9:1 | near_resist/chop/low_rr |
| 21 | **NYSE:NEM** | NYSE:NEM | **45.8** | 🟢A | 31.7 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 122.33 | 115.99 | 132.39 | 1.6:1 | mom_decay/near_resist/low_rr |
| 22 | **NYSE:AGM** | NYSE:AGM | **45.6** | ⚪C | 34.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 225.15 | 215.59 | 236.83 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 23 | **NASDAQ:BGC** | NASDAQ:BGC | **45.4** | ⚪C | 39.6 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 11.96 | 11.41 | 12.87 | 1.7:1 | near_resist/chop/bear_div/low_rr |
| 24 | **NASDAQ:SMCI** | NASDAQ:SMCI | **43.6** | ⚪C | 27 | 56 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 35.75 | 31.73 | 41.08 | 1.3:1 | mom_decay/near_resist |
| 25 | **NYSE:ASX** | NYSE:ASX | **43.1** | ⚪C | 43.9 | 42 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 36.56 | 34.15 | 40.09 | 1.5:1 | chop |
| 26 | **NASDAQ:NBN** | NASDAQ:NBN | **42.6** | ⚪C | 37.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 131.59 | 126.91 | 140.27 | 1.9:1 | near_resist/chop/low_rr |
| 27 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 28 | **NYSE:AR** | NYSE:AR | **41.7** | ⚪C | 34.5 | 40 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 38.83 | 37.26 | 41.14 | 1.5:1 | mom_decay/near_resist/low_rr |
| 29 | **OTC:SMTGY** | OTC:SMTGY | **40** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.72 | 6.35 | 7.27 | 1.5:1 | near_resist/chop/low_rr |
| 30 | **NASDAQ:SBCF** | NASDAQ:SBCF | **39.2** | ⚪C | 32 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 33.78 | 32.92 | 35.66 | 2.2:1 | mom_decay/near_resist/chop/low_rr |
| 31 | **NYSE:WPM** | NYSE:WPM | **38** | 🔵B | 19.3 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 147.77 | 138.32 | 161.72 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 32 | **NYSE:JCI** | NYSE:JCI | **37** | ⚪C | 28.3 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 136.22 | 131.38 | 145.2 | 1.9:1 | mom_decay/near_resist/chop/low_rr |
| 33 | **NASDAQ:NBIS** | NASDAQ:NBIS | **36.4** | ⚪C | 24 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 204.26 | 180 | 234.74 | 1.3:1 | mom_decay/chop |
| 34 | **AMEX:CET** | AMEX:CET | **35.2** | ⚪C | 25.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 54.84 | 54.23 | 57.13 | 3.8:1 | near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **56.2** |
| Tech Score | 30.7 (Trend Continuation) |
| News Score | 82 → GREEN Long (Strong) |
| Current Price | 55.88 |
| **Entry** | **55.88** |
| **Stop** | **50.18** (ATR × 1.5) |
| **Target** | **64.24** |
| R/R | 1.5:1 |
| RSI | 52.7 |
| ATR% | 6.8% |
| Dist EMA20 | 1.9% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | chop |

### 2. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **55** |
| Tech Score | 42.6 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 543.51 |
| **Entry** | **543.51** |
| **Stop** | **491.33** (ATR × 1.5) |
| **Target** | **620.04** |
| R/R | 1.5:1 |
| RSI | 60.6 |
| ATR% | 6.4% |
| Dist EMA20 | 9.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop |

### 3. NASDAQ:MSFT (NASDAQ:MSFT)

| Field | Value |
|-------|-------|
| Combined Score | **51.7** |
| Tech Score | 42.2 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 497.12 |
| **Entry** | **489.66** |
| **Stop** | **476.24** (ATR × 2) |
| **Target** | **518** |
| R/R | 2.1:1 |
| RSI | 55.9 |
| ATR% | 2.1% |
| Dist EMA20 | 0.8% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist |

### 4. NASDAQ:CRWD (NASDAQ:CRWD)

| Field | Value |
|-------|-------|
| Combined Score | **49.5** |
| Tech Score | 31.2 (Overextended Chase (High Risk)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 242.49 |
| **Entry** | **242.49** |
| **Stop** | **219.57** (ATR × 1.5) |
| **Target** | **273.04** |
| R/R | 1.3:1 |
| RSI | 64.6 |
| ATR% | 6.3% |
| Dist EMA20 | 13.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist chop bear_div |

### 5. NYSE:BE (NYSE:BE)

| Field | Value |
|-------|-------|
| Combined Score | **47.8** |
| Tech Score | 31 (Pullback Buy (Near Support)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 259.35 |
| **Entry** | **255.46** |
| **Stop** | **225.12** (ATR × 2) |
| **Target** | **293.58** |
| R/R | 1.3:1 |
| RSI | 58 |
| ATR% | 6.6% |
| Dist EMA20 | 7.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | chop |

### 6. NYSE:C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **46** |
| Tech Score | 32 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 136.17 |
| **Entry** | **134.13** |
| **Stop** | **129.63** (ATR × 2) |
| **Target** | **142.71** |
| R/R | 1.9:1 |
| RSI | 51.8 |
| ATR% | 2.4% |
| Dist EMA20 | 0.3% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | near_resist chop low_rr |

### 7. NYSE:NEM (NYSE:NEM)

| Field | Value |
|-------|-------|
| Combined Score | **45.8** |
| Tech Score | 31.7 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 124.19 |
| **Entry** | **122.33** |
| **Stop** | **115.99** (ATR × 2) |
| **Target** | **132.39** |
| R/R | 1.6:1 |
| RSI | 53.3 |
| ATR% | 3.3% |
| Dist EMA20 | 0% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:AMD** | NASDAQ:AMD | 57.8 | 54 | 76(hot) | 504.2 | **473.95** | 464.87 | 543.53 |
| **NASDAQ:PLTR** | NASDAQ:PLTR | 57.4 | 44.6 | 89(hot) | 172.56 | **162.21** | 157.37 | 187.75 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/16 21:00:04*