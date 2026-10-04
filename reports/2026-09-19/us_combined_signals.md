# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-19　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:BAP** | NYSE:BAP | **64.9** | ⚪C | 61.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 382.98 | 366.02 | 403.79 | 1.2:1 | near_resist/chop |
| 2 | **NYSE:ASX** | NYSE:ASX | **64.6** | 🟢A | 58 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 41.63 | 39.26 | 45.11 | 1.5:1 | chop/low_rr |
| 3 | **NYSE:ANET** | NYSE:ANET | **64.5** | 🟡C+ | 41.2 | 87 | WARN No Trade (Overheated) | Breakout (Squeeze Release) | 199.99 | 185.39 | 218.83 | 1.3:1 | near_resist/chop/low_rr |
| 4 | **NASDAQ:CRWD** | NASDAQ:CRWD | **64.4** | 🟡C+ | 48.4 | 76 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 237.65 | 218.04 | 266.41 | 1.5:1 | bear_div |
| 5 | **NYSE:DELL** | NYSE:DELL | **62.8** | 🟢A | 52.4 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 568.06 | 512.67 | 649.29 | 1.5:1 | OK |
| 6 | **NYSE:P** | NYSE:P | **62.6** | 🟢A | 39.3 | 85 | GREEN Long (Strong) | Trend Continuation | 104.14 | 96.49 | 115.37 | 1.5:1 | mom_decay/chop/low_rr |
| 7 | **NYSE:DT** | NYSE:DT | **62.4** | 🟢A | 51.6 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 55.14 | 52.41 | 59.14 | 1.5:1 | near_resist/chop |
| 8 | **NYSE:SPNT** | NYSE:SPNT | **62.1** | ⚪C | 70.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (Volume Climax) | 24.75 | 23.93 | 25.84 | 1.3:1 | near_resist/chop/low_rr |
| 9 | **NASDAQ:AMD** | NASDAQ:AMD | **61.4** | 🟢A | 49.4 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 559.82 | 526.23 | 609.08 | 1.5:1 | near_resist/chop/low_rr |
| 10 | **NASDAQ:PLTR** | NASDAQ:PLTR | **60.5** | 🟢A | 56.2 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 174.98 | 163.43 | 191.85 | 1.5:1 | mom_decay/near_resist |
| 11 | **NASDAQ:BGC** | NASDAQ:BGC | **57.8** | ⚪C | 54.7 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 12.26 | 11.56 | 13.14 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 12 | **NYSE:TSM** | NYSE:TSM | **55.5** | 🟢A | 51.1 | 62 | GREEN Long (Mid) | Reversal (MACD Cross) | 434.67 | 420.33 | 453.8 | 1.3:1 | near_resist/chop/low_rr |
| 13 | **NASDAQ:LITE** | NASDAQ:LITE | **54.7** | ⚪C | 44.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 930.91 | 840.15 | 1064.03 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 14 | **NYSE:HG** | NYSE:HG | **53.9** | ⚪C | 48.1 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 35.06 | 33.51 | 36.97 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 15 | **NASDAQ:HRMY** | NASDAQ:HRMY | **52.3** | ⚪C | 53.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.39 | 39.5 | 44.54 | 1.7:1 | mom_decay/near_resist/low_rr |
| 16 | **NASDAQ:PANW** | NASDAQ:PANW | **51.3** | 🔵B | 25.2 | 78 | GREEN Long (Strong) | Trend Continuation | 363.58 | 334.68 | 405.97 | 1.5:1 | near_resist/chop/low_rr |
| 17 | **NASDAQ:NBN** | NASDAQ:NBN | **51** | ⚪C | 51.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 131.44 | 125.7 | 141.18 | 1.7:1 | near_resist/chop/low_rr |
| 18 | **NYSE:LTC** | NYSE:LTC | **50.7** | ⚪C | 42.8 | 50 | NEUTRAL No Trade (No relevant news) | Trend Follow (HH/HL Intact) | 42.56 | 41.16 | 44.62 | 1.5:1 | near_resist/low_rr |
| 19 | **NASDAQ:TEM** | NASDAQ:TEM | **49.2** | 🟢A | 40.6 | 62 | GREEN Long (Mid) | Overextended Chase (High Risk) | 77.84 | 70.72 | 87.34 | 1.3:1 | overheated/near_resist/low_rr |
| 20 | **NYSE:HGTY** | NYSE:HGTY | **49.1** | ⚪C | 40.1 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 13.98 | 13.01 | 15.23 | 1.3:1 | near_resist/low_rr |
| 21 | **NYSE:LYB** | NYSE:LYB | **48.1** | ⚪C | 34.5 | 56 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 62.12 | 57.92 | 67.5 | 1.3:1 | mom_decay/near_resist/chop |
| 22 | **NASDAQ:SMCI** | NASDAQ:SMCI | **47.4** | ⚪C | 37.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 39.21 | 34.87 | 44.95 | 1.3:1 | mom_decay/near_resist/low_rr |
| 23 | **NASDAQ:QCOM** | NASDAQ:QCOM | **46.6** | 🟢A | 35.7 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 175.05 | 159.95 | 195.49 | 1.4:1 | near_resist/low_rr |
| 24 | **NASDAQ:MU** | NASDAQ:MU | **44.9** | ⚪C | 39.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1000.56 | 930.47 | 1101.13 | 1.4:1 | near_resist/chop/low_rr |
| 25 | **NYSE:HPE** | NYSE:HPE | **44.3** | 🔵B | 20.9 | 67 | GREEN Long (Mid) | Trend Continuation | 60.76 | 54.56 | 69.85 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 26 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 27 | **OTC:SMTGY** | OTC:SMTGY | **40** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.72 | 6.35 | 7.27 | 1.5:1 | near_resist/chop/low_rr |
| 28 | **AMEX:CET** | AMEX:CET | **39.2** | ⚪C | 32 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 54.7 | 53.98 | 57.08 | 3.3:1 | near_resist/chop/low_rr |
| 29 | **NYSE:BE** | NYSE:BE | **39.2** | ⚪C | 27.7 | 44 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 265.63 | 238.93 | 304.78 | 1.5:1 | chop/low_rr |
| 30 | **OTC:HTHIY** | OTC:HTHIY | **38.1** | ⚪C | 30.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.98 | 33.66 | 37.36 | 1.8:1 | fake_break/near_resist/chop/low_rr |
| 31 | **NYSE:CF** | NYSE:CF | **35.3** | ⚪C | 20.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 127.7 | 118.89 | 139.45 | 1.3:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **64.6** |
| Tech Score | 58 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 41.63 |
| **Entry** | **41.63** |
| **Stop** | **39.26** (ATR × 1.5) |
| **Target** | **45.11** |
| R/R | 1.5:1 |
| RSI | 61.2 |
| ATR% | 3.8% |
| Dist EMA20 | 7.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

### 2. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **62.8** |
| Tech Score | 52.4 (Trend Follow (HH/HL Intact)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 568.06 |
| **Entry** | **568.06** |
| **Stop** | **512.67** (ATR × 1.5) |
| **Target** | **649.29** |
| R/R | 1.5:1 |
| RSI | 61.8 |
| ATR% | 6.5% |
| Dist EMA20 | 9.8% |
| Chase OK | **YES** |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | None |

### 3. NYSE:P (NYSE:P)

| Field | Value |
|-------|-------|
| Combined Score | **62.6** |
| Tech Score | 39.3 (Trend Continuation) |
| News Score | 85 → GREEN Long (Strong) |
| Current Price | 104.14 |
| **Entry** | **104.14** |
| **Stop** | **96.49** (ATR × 1.5) |
| **Target** | **115.37** |
| R/R | 1.5:1 |
| RSI | 57.6 |
| ATR% | 4.9% |
| Dist EMA20 | 5.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay chop low_rr |

### 4. NYSE:DT (NYSE:DT)

| Field | Value |
|-------|-------|
| Combined Score | **62.4** |
| Tech Score | 51.6 (Trend Follow (HH/HL Intact)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 55.14 |
| **Entry** | **55.14** |
| **Stop** | **52.41** (ATR × 1.5) |
| **Target** | **59.14** |
| R/R | 1.5:1 |
| RSI | 63.2 |
| ATR% | 3.3% |
| Dist EMA20 | 5.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop |

### 5. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **61.4** |
| Tech Score | 49.4 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 559.82 |
| **Entry** | **559.82** |
| **Stop** | **526.23** (ATR × 1.5) |
| **Target** | **609.08** |
| R/R | 1.5:1 |
| RSI | 65.4 |
| ATR% | 4% |
| Dist EMA20 | 11.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 6. NASDAQ:PLTR (NASDAQ:PLTR)

| Field | Value |
|-------|-------|
| Combined Score | **60.5** |
| Tech Score | 56.2 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 177.64 |
| **Entry** | **174.98** |
| **Stop** | **163.43** (ATR × 2) |
| **Target** | **191.85** |
| R/R | 1.5:1 |
| RSI | 57 |
| ATR% | 4% |
| Dist EMA20 | 2.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist |

### 7. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **55.5** |
| Tech Score | 51.1 (Reversal (MACD Cross)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 434.67 |
| **Entry** | **434.67** |
| **Stop** | **420.33** (ATR × 1.5) |
| **Target** | **453.8** |
| R/R | 1.3:1 |
| RSI | 56.9 |
| ATR% | 2.2% |
| Dist EMA20 | 2.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 8. NASDAQ:TEM (NASDAQ:TEM)

| Field | Value |
|-------|-------|
| Combined Score | **49.2** |
| Tech Score | 40.6 (Overextended Chase (High Risk)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 77.84 |
| **Entry** | **77.84** |
| **Stop** | **70.72** (ATR × 1.5) |
| **Target** | **87.34** |
| R/R | 1.3:1 |
| RSI | 67.8 |
| ATR% | 6.1% |
| Dist EMA20 | 18.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated near_resist low_rr |

### 9. NASDAQ:QCOM (NASDAQ:QCOM)

| Field | Value |
|-------|-------|
| Combined Score | **46.6** |
| Tech Score | 35.7 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 177.72 |
| **Entry** | **175.05** |
| **Stop** | **159.95** (ATR × 2) |
| **Target** | **195.49** |
| R/R | 1.4:1 |
| RSI | 54 |
| ATR% | 5% |
| Dist EMA20 | 1.5% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | near_resist low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:ANET** | NYSE:ANET | 64.5 | 41.2 | 87(hot) | 199.39 | **187.43** | 183.84 | 214.94 |
| **NASDAQ:CRWD** | NASDAQ:CRWD | 64.4 | 48.4 | 76(hot) | 237.65 | **223.39** | 211.51 | 263.79 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/19 21:00:04*