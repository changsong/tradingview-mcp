# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-02　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:AVGO** | NASDAQ:AVGO | **75.2** | 🟡C+ | 59.7 | 86 | WARN No Trade (Overheated) | Breakout (Squeeze Release) | 461.35 | 428.51 | 503.67 | 1.3:1 | near_resist/bear_div |
| 2 | **NYSE:MOD** | NYSE:MOD | **67.6** | 🟡C+ | 42.4 | 93 | WARN No Trade (Overheated) | Breakout (Squeeze Release) | 289.39 | 243.86 | 350.55 | 1.3:1 | near_resist/bear_div/low_rr |
| 3 | **NYSE:TSM** | NYSE:TSM | **65.9** | ⚪C | 62.2 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 436.94 | 407.4 | 474.84 | 1.3:1 | near_resist |
| 4 | **NYSE:C** | NYSE:C | **62.6** | ⚪C | 59.4 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 129.48 | 123.75 | 136.51 | 1.2:1 | near_resist/chop/low_rr |
| 5 | **NASDAQ:NVDA** | NASDAQ:NVDA | **62.3** | 🟢A | 38.8 | 85 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 224.36 | 212.24 | 242.13 | 1.5:1 | mom_decay/low_rr |
| 6 | **NASDAQ:SNEX** | NASDAQ:SNEX | **60.1** | ⚪C | 66.8 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 115.55 | 109.31 | 123.87 | 1.3:1 | mom_decay/low_rr |
| 7 | **NYSE:DKS** | NYSE:DKS | **58.6** | 🟢A | 30.7 | 88 | GREEN Long (Strong) | Breakout (Squeeze Release) | 217.61 | 198.21 | 243 | 1.3:1 | mom_decay/near_resist/chop |
| 8 | **NASDAQ:LRCX** | NASDAQ:LRCX | **56.3** | 🟢A | 36.2 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 317.12 | 294.76 | 349.91 | 1.5:1 | low_rr |
| 9 | **NASDAQ:AAPL** | NASDAQ:AAPL | **56.2** | ⚪C | 48 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 306.31 | 298.5 | 317.77 | 1.5:1 | near_resist |
| 10 | **NASDAQ:ERIC** | NASDAQ:ERIC | **55.6** | 🟢A | 40.3 | 66 | GREEN Long (Mid) | Trend Continuation | 13.32 | 12.76 | 14.14 | 1.5:1 | near_resist/low_rr |
| 11 | **NASDAQ:OSBC** | NASDAQ:OSBC | **54.8** | ⚪C | 49.7 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 21.13 | 20.24 | 22.23 | 1.2:1 | near_resist/chop/low_rr |
| 12 | **NASDAQ:KLAC** | NASDAQ:KLAC | **52.4** | 🟢A | 35.6 | 65 | GREEN Long (Mid) | Trend Continuation | 1940.04 | 1814.91 | 2123.57 | 1.5:1 | chop/low_rr |
| 13 | **NASDAQ:IREN** | NASDAQ:IREN | **52.3** | 🔵B | 26.5 | 91 | WARN Long (Cautious) | Overextended Chase (High Risk) | 65.33 | 57.78 | 75.39 | 1.3:1 | overheated/fake_break/near_resist/low_rr |
| 14 | **NASDAQ:FIVE** | NASDAQ:FIVE | **52.2** | 🟢A | 43.7 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 222.83 | 210.38 | 242.06 | 1.5:1 | near_resist/chop/low_rr |
| 15 | **NASDAQ:HON** | NASDAQ:HON | **51.7** | 🟡C+ | 39.1 | 83 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 232.99 | 226.13 | 246.95 | 2:1 | near_resist/low_rr |
| 16 | **NASDAQ:APLD** | NASDAQ:APLD | **50.3** | 🟢A | 34.8 | 61 | GREEN Long (Mid) | Trend Continuation | 47.94 | 41.25 | 57.75 | 1.5:1 | bear_div |
| 17 | **NASDAQ:ADEA** | NASDAQ:ADEA | **48.6** | ⚪C | 39.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 28.61 | 26.12 | 32.26 | 1.5:1 | mom_decay/low_rr |
| 18 | **NYSE:NOK** | NYSE:NOK | **48** | ⚪C | 46.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 16.25 | 14.69 | 18.33 | 1.3:1 | overheated/near_resist/low_rr |
| 19 | **NYSE:P** | NYSE:P | **47.4** | 🔵B | 22 | 73 | GREEN Long (Mid) | Trend Continuation | 84.45 | 75.58 | 97.46 | 1.5:1 | mom_decay/bear_div/low_rr |
| 20 | **NASDAQ:TLN** | NASDAQ:TLN | **47.3** | 🟢A | 34.1 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 371.54 | 337.22 | 417.18 | 1.3:1 | near_resist/chop |
| 21 | **NASDAQ:MRVL** | NASDAQ:MRVL | **46.4** | 🔵B | 24 | 80 | GREEN Long (Strong) | Overextended Chase (High Risk) | 219.43 | 196.06 | 250.59 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 22 | **NASDAQ:RMBS** | NASDAQ:RMBS | **46.2** | ⚪C | 35.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 147.48 | 132.66 | 169.22 | 1.5:1 | low_rr |
| 23 | **NASDAQ:CRDO** | NASDAQ:CRDO | **45.4** | ⚪C | 47 | 43 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 226.1 | 197.61 | 264.08 | 1.3:1 | overheated |
| 24 | **NASDAQ:CRWV** | NASDAQ:CRWV | **45.3** | 🟢A | 30.2 | 68 | GREEN Long (Mid) | Pullback Buy (Near Support) | 122.95 | 108.59 | 141.05 | 1.3:1 | overheated/near_resist/chop/low_rr |
| 25 | **NYSE:CIEN** | NYSE:CIEN | **44.3** | 🔵B | 16.2 | 74 | GREEN Long (Mid) | Breakout (Squeeze Release) | 571.32 | 506.04 | 657.9 | 1.3:1 | mom_decay/chop/bear_div/low_rr |
| 26 | **NYSE:NVT** | NYSE:NVT | **43.5** | 🔵B | 24.1 | 60 | GREEN Long (Mid) | Trend Continuation | 171.55 | 161 | 187.02 | 1.5:1 | mom_decay/near_resist/low_rr |
| 27 | **NASDAQ:ASML** | NASDAQ:ASML | **43.2** | 🔵B | 19.7 | 66 | GREEN Long (Mid) | Trend Continuation | 1628.57 | 1533.3 | 1768.3 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 28 | **NYSE:JHG** | NYSE:JHG | **43** | ⚪C | 37 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 50.95 | 51.52 | 51.94 | -1.7:1 | mom_decay/near_resist/low_rr |
| 29 | **NYSE:CARR** | NYSE:CARR | **42.9** | ⚪C | 40.2 | 47 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 64.13 | 60.94 | 69.28 | 1.6:1 | mom_decay/near_resist/chop |
| 30 | **NYSE:MS** | NYSE:MS | **41.7** | ⚪C | 27.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 211.01 | 204.05 | 221.22 | 1.5:1 | fake_break/bull_trap/mom_decay/near_resist/bear_div |
| 31 | **NASDAQ:SEDG** | NASDAQ:SEDG | **41.5** | ⚪C | 35.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 75.8 | 64.43 | 90.96 | 1.3:1 | overheated |
| 32 | **NYSE:SMP** | NYSE:SMP | **41** | ⚪C | 35 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.13 | 35.54 | 41.88 | 1.4:1 | near_resist/low_rr |
| 33 | **NYSE:SXI** | NYSE:SXI | **40.6** | ⚪C | 34.4 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 282.39 | 267.99 | 301.59 | 1.3:1 | near_resist/chop/low_rr |
| 34 | **OTC:SBGSY** | OTC:SBGSY | **39.3** | ⚪C | 32.2 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 64.48 | 61.58 | 68.35 | 1.3:1 | near_resist/chop/low_rr |
| 35 | **NASDAQ:CRML** | NASDAQ:CRML | **38.7** | ⚪C | 22.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 12.17 | 10.64 | 14.42 | 1.5:1 | mom_decay/low_rr |
| 36 | **NYSE:DOCN** | NYSE:DOCN | **38.4** | ⚪C | 27.3 | 55 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 173.45 | 156.54 | 196 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist/bear_div |
| 37 | **NASDAQ:NWBI** | NASDAQ:NWBI | **38.1** | ⚪C | 21.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 13.97 | 13.61 | 14.49 | 1.4:1 | near_resist/bear_div/low_rr |
| 38 | **NASDAQ:MU** | NASDAQ:MU | **38** | 🔵B | 15.4 | 72 | GREEN Long (Mid) | Overextended Chase (High Risk) | 1035.5 | 937.65 | 1165.97 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 39 | **NASDAQ:FLEX** | NASDAQ:FLEX | **37.7** | ⚪C | 24.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 148.01 | 136.24 | 163.7 | 1.3:1 | overheated/mom_decay/bear_div |
| 40 | **NYSE:ENS** | NYSE:ENS | **37.7** | ⚪C | 21.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 227.89 | 211.14 | 252.46 | 1.5:1 | mom_decay/bear_div/low_rr |
| 41 | **NYSE:QBTS** | NYSE:QBTS | **37.6** | ⚪C | 31.4 | 47 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 29.18 | 24.8 | 35.02 | 1.3:1 | overheated/low_rr |
| 42 | **OTC:ABBNY** | OTC:ABBNY | **37.5** | ⚪C | 20.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 107.15 | 103.13 | 113.04 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 43 | **NYSE:CLS** | NYSE:CLS | **37.2** | ⚪C | 26.7 | 53 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 426.55 | 391.36 | 473.47 | 1.3:1 | overheated/near_resist/chop/low_rr |
| 44 | **NASDAQ:CORZ** | NASDAQ:CORZ | **34.3** | ⚪C | 21.8 | 53 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 28.55 | 26.24 | 31.63 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 45 | **NYSE:ENVA** | NYSE:ENVA | **34** | ⚪C | 23.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 161.87 | 154.47 | 174.19 | 1.7:1 | mom_decay/near_resist/chop/bear_div |
| 46 | **NYSE:IRM** | NYSE:IRM | **33.6** | ⚪C | 21.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 124.48 | 120.06 | 132.7 | 1.9:1 | mom_decay/near_resist/chop/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:NVDA (NASDAQ:NVDA)

| Field | Value |
|-------|-------|
| Combined Score | **62.3** |
| Tech Score | 38.8 (Trend Follow (HH/HL Intact)) |
| News Score | 85 → GREEN Long (Strong) |
| Current Price | 224.36 |
| **Entry** | **224.36** |
| **Stop** | **212.24** (ATR × 1.5) |
| **Target** | **242.13** |
| R/R | 1.5:1 |
| RSI | 60.4 |
| ATR% | 3.6% |
| Dist EMA20 | 4.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 2. NYSE:DKS (NYSE:DKS)

| Field | Value |
|-------|-------|
| Combined Score | **58.6** |
| Tech Score | 30.7 (Breakout (Squeeze Release)) |
| News Score | 88 → GREEN Long (Strong) |
| Current Price | 216.96 |
| **Entry** | **217.61** |
| **Stop** | **198.21** (ATR × 1.8) |
| **Target** | **243** |
| R/R | 1.3:1 |
| RSI | 47.6 |
| ATR% | 4.8% |
| Dist EMA20 | -2% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist chop |

### 3. NASDAQ:LRCX (NASDAQ:LRCX)

| Field | Value |
|-------|-------|
| Combined Score | **56.3** |
| Tech Score | 36.2 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 317.12 |
| **Entry** | **317.12** |
| **Stop** | **294.76** (ATR × 1.5) |
| **Target** | **349.91** |
| R/R | 1.5:1 |
| RSI | 65.3 |
| ATR% | 4.7% |
| Dist EMA20 | 6.9% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | low_rr |

### 4. NASDAQ:ERIC (NASDAQ:ERIC)

| Field | Value |
|-------|-------|
| Combined Score | **55.6** |
| Tech Score | 40.3 (Trend Continuation) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 13.32 |
| **Entry** | **13.32** |
| **Stop** | **12.76** (ATR × 1.5) |
| **Target** | **14.14** |
| R/R | 1.5:1 |
| RSI | 61.6 |
| ATR% | 2.8% |
| Dist EMA20 | 4.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist low_rr |

### 5. NASDAQ:KLAC (NASDAQ:KLAC)

| Field | Value |
|-------|-------|
| Combined Score | **52.4** |
| Tech Score | 35.6 (Trend Continuation) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 1940.04 |
| **Entry** | **1940.04** |
| **Stop** | **1814.91** (ATR × 1.5) |
| **Target** | **2123.57** |
| R/R | 1.5:1 |
| RSI | 59.2 |
| ATR% | 4.3% |
| Dist EMA20 | 4.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

### 6. NASDAQ:FIVE (NASDAQ:FIVE)

| Field | Value |
|-------|-------|
| Combined Score | **52.2** |
| Tech Score | 43.7 (Pullback Buy (Near Support)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 226.22 |
| **Entry** | **222.83** |
| **Stop** | **210.38** (ATR × 2) |
| **Target** | **242.06** |
| R/R | 1.5:1 |
| RSI | 53.7 |
| ATR% | 3.5% |
| Dist EMA20 | 1.9% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

### 7. NASDAQ:APLD (NASDAQ:APLD)

| Field | Value |
|-------|-------|
| Combined Score | **50.3** |
| Tech Score | 34.8 (Trend Continuation) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 47.94 |
| **Entry** | **47.94** |
| **Stop** | **41.25** (ATR × 1.5) |
| **Target** | **57.75** |
| R/R | 1.5:1 |
| RSI | 60.9 |
| ATR% | 9.3% |
| Dist EMA20 | 10.9% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | bear_div |

### 8. NASDAQ:TLN (NASDAQ:TLN)

| Field | Value |
|-------|-------|
| Combined Score | **47.3** |
| Tech Score | 34.1 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 377.2 |
| **Entry** | **371.54** |
| **Stop** | **337.22** (ATR × 2) |
| **Target** | **417.18** |
| R/R | 1.3:1 |
| RSI | 54.7 |
| ATR% | 5.3% |
| Dist EMA20 | 2.9% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop |

### 9. NASDAQ:CRWV (NASDAQ:CRWV)

| Field | Value |
|-------|-------|
| Combined Score | **45.3** |
| Tech Score | 30.2 (Pullback Buy (Near Support)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 124.82 |
| **Entry** | **122.95** |
| **Stop** | **108.59** (ATR × 2) |
| **Target** | **141.05** |
| R/R | 1.3:1 |
| RSI | 62 |
| ATR% | 6.5% |
| Dist EMA20 | 13.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist chop low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:AVGO** | NASDAQ:AVGO | 75.2 | 59.7 | 86(hot) | 459.97 | **432.37** | 425.01 | 494.93 |
| **NYSE:MOD** | NYSE:MOD | 67.6 | 42.4 | 93(hot) | 288.52 | **271.21** | 238.89 | 338.15 |
| **NASDAQ:HON** | NASDAQ:HON | 51.7 | 39.1 | 83(hot) | 236.54 | **222.35** | 226.13 | 246.95 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/2 21:27:41*