# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-20　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:DT** | NYSE:DT | **71.7** | 🟡C+ | 57.8 | 80 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 55.14 | 52.41 | 59.14 | 1.5:1 | near_resist/chop |
| 2 | **NYSE:BAP** | NYSE:BAP | **63.7** | ⚪C | 61.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 382.98 | 366.02 | 403.79 | 1.2:1 | near_resist/chop |
| 3 | **NYSE:DELL** | NYSE:DELL | **63.2** | 🟢A | 52.4 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 568.06 | 512.67 | 649.29 | 1.5:1 | OK |
| 4 | **NASDAQ:AMD** | NASDAQ:AMD | **63** | 🟢A | 49.4 | 71 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 559.82 | 526.23 | 609.08 | 1.5:1 | near_resist/chop/low_rr |
| 5 | **NYSE:ANET** | NYSE:ANET | **62.9** | 🟡C+ | 41.2 | 83 | WARN No Trade (Overheated) | Breakout (Squeeze Release) | 199.99 | 185.39 | 218.83 | 1.3:1 | near_resist/chop/low_rr |
| 6 | **NYSE:SPNT** | NYSE:SPNT | **62.5** | ⚪C | 70.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (Volume Climax) | 24.75 | 23.93 | 25.84 | 1.3:1 | near_resist/chop/low_rr |
| 7 | **NASDAQ:CRWD** | NASDAQ:CRWD | **62.4** | 🟢A | 48.4 | 71 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 237.65 | 218.04 | 266.41 | 1.5:1 | bear_div |
| 8 | **NASDAQ:BGC** | NASDAQ:BGC | **59.4** | ⚪C | 57.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 12.26 | 11.56 | 13.14 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 9 | **NASDAQ:HRMY** | NASDAQ:HRMY | **54.7** | ⚪C | 57.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.39 | 39.5 | 44.54 | 1.7:1 | mom_decay/near_resist/low_rr |
| 10 | **NASDAQ:LITE** | NASDAQ:LITE | **53.5** | ⚪C | 44.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 930.91 | 840.15 | 1064.03 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 11 | **NASDAQ:MU** | NASDAQ:MU | **51.7** | 🟢A | 39.5 | 70 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1000.56 | 930.47 | 1101.13 | 1.4:1 | near_resist/chop/low_rr |
| 12 | **NYSE:HGTY** | NYSE:HGTY | **51.3** | ⚪C | 43.8 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 13.98 | 13.01 | 15.23 | 1.3:1 | near_resist/low_rr |
| 13 | **NASDAQ:TEM** | NASDAQ:TEM | **50.7** | 🟢A | 41.9 | 64 | GREEN Long (Mid) | Overextended Chase (High Risk) | 77.84 | 70.72 | 87.34 | 1.3:1 | overheated/near_resist/low_rr |
| 14 | **NYSE:LTC** | NYSE:LTC | **50.6** | ⚪C | 42.7 | 50 | NEUTRAL No Trade (No relevant news) | Trend Follow (HH/HL Intact) | 42.56 | 41.16 | 44.62 | 1.5:1 | near_resist/low_rr |
| 15 | **NASDAQ:NBN** | NASDAQ:NBN | **49.3** | ⚪C | 48.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 131.44 | 125.7 | 141.18 | 1.7:1 | near_resist/chop/low_rr |
| 16 | **OTC:SMNEY** | OTC:SMNEY | **48.2** | ⚪C | 38.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 17 | **NASDAQ:AAPL** | NASDAQ:AAPL | **47** | 🔵B | 24.7 | 68 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 336.13 | 324.53 | 353.14 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 18 | **OTC:HTHIY** | OTC:HTHIY | **42** | ⚪C | 36.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.98 | 33.66 | 37.36 | 1.8:1 | fake_break/near_resist/chop/low_rr |
| 19 | **NYSE:BE** | NYSE:BE | **41.2** | ⚪C | 27.7 | 49 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 265.63 | 238.93 | 304.78 | 1.5:1 | chop/low_rr |
| 20 | **OTC:SMTGY** | OTC:SMTGY | **40.7** | ⚪C | 26.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.72 | 6.35 | 7.27 | 1.5:1 | near_resist/chop/low_rr |
| 21 | **AMEX:CET** | AMEX:CET | **39.8** | ⚪C | 33 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 54.7 | 53.98 | 57.08 | 3.3:1 | near_resist/chop/low_rr |
| 22 | **NYSE:HPE** | NYSE:HPE | **35.5** | ⚪C | 20.9 | 45 | NEUTRAL No Trade (Neutral) | Trend Continuation | 60.76 | 54.56 | 69.85 | 1.5:1 | fake_break/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **63.2** |
| Tech Score | 52.4 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
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

### 2. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **63** |
| Tech Score | 49.4 (Trend Follow (HH/HL Intact)) |
| News Score | 71 → GREEN Long (Mid) |
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

### 3. NASDAQ:CRWD (NASDAQ:CRWD)

| Field | Value |
|-------|-------|
| Combined Score | **62.4** |
| Tech Score | 48.4 (Trend Follow (HH/HL Intact)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 237.65 |
| **Entry** | **237.65** |
| **Stop** | **218.04** (ATR × 1.5) |
| **Target** | **266.41** |
| R/R | 1.5:1 |
| RSI | 60.4 |
| ATR% | 5.5% |
| Dist EMA20 | 7.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | bear_div |

### 4. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **51.7** |
| Tech Score | 39.5 (Pullback Buy (Near Support)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 1015.8 |
| **Entry** | **1000.56** |
| **Stop** | **930.47** (ATR × 2) |
| **Target** | **1101.13** |
| R/R | 1.4:1 |
| RSI | 58.3 |
| ATR% | 4.2% |
| Dist EMA20 | 5.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 5. NASDAQ:TEM (NASDAQ:TEM)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 41.9 (Overextended Chase (High Risk)) |
| News Score | 64 → GREEN Long (Mid) |
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

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:DT** | NYSE:DT | 71.7 | 57.8 | 80(hot) | 55.14 | **51.83** | 51.5 | 58.78 |
| **NYSE:ANET** | NYSE:ANET | 62.9 | 41.2 | 83(hot) | 199.39 | **187.43** | 183.84 | 214.94 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/20 21:00:05*