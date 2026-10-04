# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-18　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:SPNT** | NYSE:SPNT | **67.4** | ⚪C | 70.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 24.5 | 23.46 | 25.77 | 1.2:1 | near_resist/chop |
| 2 | **NYSE:ANET** | NYSE:ANET | **64.6** | 🟡C+ | 41.4 | 87 | WARN No Trade (Overheated) | Breakout (Squeeze Release) | 200.13 | 185.52 | 218.98 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 3 | **NYSE:BAP** | NYSE:BAP | **60.3** | ⚪C | 53.5 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 385.11 | 367.37 | 407 | 1.2:1 | near_resist/chop/low_rr |
| 4 | **NYSE:DT** | NYSE:DT | **59.7** | 🟢A | 47.1 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 55.83 | 53.23 | 59.64 | 1.5:1 | near_resist/chop |
| 5 | **NASDAQ:AMD** | NASDAQ:AMD | **58.4** | 🟢A | 44.3 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 545.09 | 512.38 | 593.06 | 1.5:1 | near_resist/chop/low_rr |
| 6 | **NASDAQ:HRMY** | NASDAQ:HRMY | **57.5** | ⚪C | 54.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 42.74 | 40.94 | 45.37 | 1.5:1 | near_resist/low_rr |
| 7 | **NASDAQ:PLTR** | NASDAQ:PLTR | **57.2** | 🟢A | 50.7 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 173.6 | 162.14 | 190.34 | 1.5:1 | mom_decay/near_resist |
| 8 | **NYSE:LTC** | NYSE:LTC | **56.8** | ⚪C | 53 | 50 | NEUTRAL No Trade (No relevant news) | Trend Follow (HH/HL Intact) | 43.5 | 42.13 | 45.51 | 1.5:1 | fake_break/near_resist |
| 9 | **NYSE:ASX** | NYSE:ASX | **56.5** | 🟢A | 52.9 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 39.39 | 36.79 | 43.19 | 1.5:1 | near_resist/chop/low_rr |
| 10 | **NYSE:P** | NYSE:P | **55** | 🔵B | 26.7 | 85 | GREEN Long (Strong) | Trend Continuation | 103.99 | 96.35 | 115.2 | 1.5:1 | mom_decay/chop/low_rr |
| 11 | **NASDAQ:TEM** | NASDAQ:TEM | **54.6** | 🟢A | 49.7 | 62 | GREEN Long (Mid) | Overextended Chase (High Risk) | 80.36 | 73.13 | 90 | 1.3:1 | overheated |
| 12 | **OTC:HTHIY** | OTC:HTHIY | **51.4** | ⚪C | 52.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 35.01 | 33.69 | 37.39 | 1.8:1 | near_resist/chop/low_rr |
| 13 | **NASDAQ:SMCI** | NASDAQ:SMCI | **50.3** | ⚪C | 42.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 40.47 | 36.14 | 46.2 | 1.3:1 | mom_decay/near_resist/low_rr |
| 14 | **NYSE:HGTY** | NYSE:HGTY | **49.6** | ⚪C | 41 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 13.91 | 12.87 | 15.26 | 1.3:1 | near_resist/low_rr |
| 15 | **NYSE:CF** | NYSE:CF | **49.3** | ⚪C | 43.5 | 58 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 133.82 | 125.19 | 145.33 | 1.3:1 | mom_decay/near_resist/low_rr |
| 16 | **NASDAQ:QCOM** | NASDAQ:QCOM | **49.3** | 🟢A | 31.8 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 188.71 | 176.54 | 206.56 | 1.5:1 | fake_break/near_resist/low_rr |
| 17 | **NASDAQ:PANW** | NASDAQ:PANW | **49.3** | 🔵B | 21.9 | 78 | GREEN Long (Strong) | Trend Continuation | 375.06 | 345.24 | 418.79 | 1.5:1 | near_resist/chop/low_rr |
| 18 | **NYSE:HG** | NYSE:HG | **48.3** | ⚪C | 38.8 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 35.26 | 33.69 | 37.17 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 19 | **OTC:SMNEY** | OTC:SMNEY | **48.2** | ⚪C | 38.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 20 | **NYSE:HPE** | NYSE:HPE | **46.9** | 🔵B | 25.2 | 67 | GREEN Long (Mid) | Trend Continuation | 61.04 | 54.81 | 70.17 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 21 | **NYSE:TSM** | NYSE:TSM | **46.6** | 🟢A | 36.3 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 423.81 | 409.61 | 450.91 | 1.9:1 | mom_decay/near_resist/chop/low_rr |
| 22 | **NASDAQ:NBN** | NASDAQ:NBN | **46.4** | ⚪C | 44 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 129.97 | 124.82 | 139.08 | 1.8:1 | near_resist/chop |
| 23 | **NYSE:DELL** | NYSE:DELL | **45.7** | 🟢A | 32.2 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 588.4 | 532.8 | 662.54 | 1.3:1 | overheated/fake_break/near_resist/chop |
| 24 | **OTC:SMTGY** | OTC:SMTGY | **43** | ⚪C | 30 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.72 | 6.35 | 7.27 | 1.5:1 | near_resist/chop/low_rr |
| 25 | **NASDAQ:LITE** | NASDAQ:LITE | **42.7** | ⚪C | 24.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 893.61 | 802.46 | 1027.29 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 26 | **NYSE:LYB** | NYSE:LYB | **40.1** | ⚪C | 29.5 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 63.29 | 59.88 | 68.62 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 27 | **NASDAQ:MU** | NASDAQ:MU | **39.4** | ⚪C | 22 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 977.5 | 912.98 | 1072.12 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 28 | **AMEX:CET** | AMEX:CET | **37.5** | ⚪C | 29.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 54.87 | 54.15 | 57.27 | 3.3:1 | near_resist/chop/low_rr |
| 29 | **NASDAQ:BGC** | NASDAQ:BGC | **36.5** | ⚪C | 27.5 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 11.81 | 11.29 | 12.69 | 1.7:1 | mom_decay/near_resist/chop/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:DT (NYSE:DT)

| Field | Value |
|-------|-------|
| Combined Score | **59.7** |
| Tech Score | 47.1 (Trend Follow (HH/HL Intact)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 55.83 |
| **Entry** | **55.83** |
| **Stop** | **53.23** (ATR × 1.5) |
| **Target** | **59.64** |
| R/R | 1.5:1 |
| RSI | 66.4 |
| ATR% | 3.1% |
| Dist EMA20 | 7.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 2. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **58.4** |
| Tech Score | 44.3 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 545.09 |
| **Entry** | **545.09** |
| **Stop** | **512.38** (ATR × 1.5) |
| **Target** | **593.06** |
| R/R | 1.5:1 |
| RSI | 62.8 |
| ATR% | 4% |
| Dist EMA20 | 9.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 3. NASDAQ:PLTR (NASDAQ:PLTR)

| Field | Value |
|-------|-------|
| Combined Score | **57.2** |
| Tech Score | 50.7 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 176.24 |
| **Entry** | **173.6** |
| **Stop** | **162.14** (ATR × 2) |
| **Target** | **190.34** |
| R/R | 1.5:1 |
| RSI | 55.9 |
| ATR% | 4% |
| Dist EMA20 | 2.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist |

### 4. NYSE:ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **56.5** |
| Tech Score | 52.9 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 39.99 |
| **Entry** | **39.39** |
| **Stop** | **36.79** (ATR × 2) |
| **Target** | **43.19** |
| R/R | 1.5:1 |
| RSI | 56.6 |
| ATR% | 4% |
| Dist EMA20 | 4.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 5. NASDAQ:TEM (NASDAQ:TEM)

| Field | Value |
|-------|-------|
| Combined Score | **54.6** |
| Tech Score | 49.7 (Overextended Chase (High Risk)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 80.36 |
| **Entry** | **80.36** |
| **Stop** | **73.13** (ATR × 1.5) |
| **Target** | **90** |
| R/R | 1.3:1 |
| RSI | 72.1 |
| ATR% | 6% |
| Dist EMA20 | 24.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated |

### 6. NASDAQ:QCOM (NASDAQ:QCOM)

| Field | Value |
|-------|-------|
| Combined Score | **49.3** |
| Tech Score | 31.8 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 188.71 |
| **Entry** | **188.71** |
| **Stop** | **176.54** (ATR × 1.5) |
| **Target** | **206.56** |
| R/R | 1.5:1 |
| RSI | 67.9 |
| ATR% | 4.3% |
| Dist EMA20 | 7.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist low_rr |

### 7. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **46.6** |
| Tech Score | 36.3 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 430.26 |
| **Entry** | **423.81** |
| **Stop** | **409.61** (ATR × 2) |
| **Target** | **450.91** |
| R/R | 1.9:1 |
| RSI | 54.8 |
| ATR% | 2.4% |
| Dist EMA20 | 1.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 8. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **45.7** |
| Tech Score | 32.2 (Overextended Chase (High Risk)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 588.4 |
| **Entry** | **588.4** |
| **Stop** | **532.8** (ATR × 1.5) |
| **Target** | **662.54** |
| R/R | 1.3:1 |
| RSI | 66.4 |
| ATR% | 6.3% |
| Dist EMA20 | 14.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated fake_break near_resist chop |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:ANET** | NYSE:ANET | 64.6 | 41.4 | 87(hot) | 199.53 | **187.56** | 183.97 | 215.09 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/18 21:00:04*