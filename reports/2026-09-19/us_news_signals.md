---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_fbddbc0cb35c11f185dc525400de85a5
    ReservedCode1: 07dtehLbCFbyHpvRHrjxL2gjWmam5Dnn7V9fJa2YzozRI/e+kN8oxojKAqKJvjavcKkQuXW1Hzi+YGGZaRP6f1TlC3MA2H9iLApyzCEOfjBxPcdVNwukRNskTNjZo43HRelITJgYHX06sqzGZDDuTCJyiQVOY86uPiwRu++6l63sKSDHK6MxRJGIJIY=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_fbddbc0cb35c11f185dc525400de85a5
    ReservedCode2: 07dtehLbCFbyHpvRHrjxL2gjWmam5Dnn7V9fJa2YzozRI/e+kN8oxojKAqKJvjavcKkQuXW1Hzi+YGGZaRP6f1TlC3MA2H9iLApyzCEOfjBxPcdVNwukRNskTNjZo43HRelITJgYHX06sqzGZDDuTCJyiQVOY86uPiwRu++6l63sKSDHK6MxRJGIJIY=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-18  |  **News Window:** 2026-09-11 ~ 2026-09-18（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (33)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:ANET** | **87** | 14.14 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/18 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:P** | **85** | 8.46 | 🟢 Long (Strong) | Momentum / Hold | High | 5/2 | - |
| 3 | **NASDAQ:PANW** | **78** | 7.09 | 🟢 Long (Strong) | Momentum / Hold | High | 7/23 | - |
| 4 | **NASDAQ:CRWD** | **76** | 14.96 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 17/13 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:AMD** | **67** | 10.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/15 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:HPE** | **67** | 4.38 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/22 | - |
| 7 | **NASDAQ:PLTR** | **67** | 4.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 8 | **NYSE:DELL** | **66** | 8.43 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/16 | Sentiment Strengthening UP (trend) |
| 9 | **NYSE:DT** | **66** | 3.75 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/10 | - |
| 10 | **NASDAQ:QCOM** | **63** | 3.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 11 | **NASDAQ:TEM** | **62** | 2.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/13 | - |
| 12 | **NYSE:TSM** | **62** | 2.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/26 | - |
| 13 | **NYSE:ASX** | **62** | 2.93 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/5 | - |
| 14 | **NYSE:CF** | **58** | 2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/4 | - |
| 15 | **NASDAQ:LITE** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/27 | - |
| 16 | **NYSE:BAP** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/2 | - |
| 17 | **NYSE:LYB** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/6 | - |
| 18 | **NASDAQ:AAPL** | **55** | 3.66 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 17/13 | Bearish-to-Bullish Reversal (reversal) |
| 19 | **NASDAQ:MU** | **53** | 1.17 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/22 | - |
| 20 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 22 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 23 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 24 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 25 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 27 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 31 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:SMCI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 33 | **NYSE:BE** | **44** | -1.75 | ⚪ No Trade (Neutral) | Watch | Low | 10/20 | - |

---

## 🟢 Strong Long (2)

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.46 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Everpure Stock Gains 34% in 6 Months: Here's What You Should Know
- 🟢 [Analyst Action|w2.16] Why Everpure (P) Stock Is Up Today
- 🟢 [Analyst Action|w2.16] Needham Reiterates Buy on Everpure, Maintains $140 Price Target

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | Everpure to Host 2026 Financial Analyst Meeting |
| 2026-09-17 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Why Everpure (P) Stock Is Up Today |
| 2026-09-17 | Earnings | ⚪  0 | 2.34 | Yahoo | 3 Reasons P Has Explosive Upside Potential |
| 2026-09-17 | Earnings | 🟢 +1 | 2.34 | Yahoo | Everpure Stock Gains 34% in 6 Months: Here's What You Should |
| 2026-09-17 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Needham Reiterates Buy on Everpure, Maintains $140 Price Tar |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 7.09 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Bernstein Downgrades Palo Alto Networks to Market Perform, Raises Pric
- 🟢 [Industry|w1.8] Can Palo Alto Networks' SASE Push Help It Challenge FTNT and ZS?
- 🟢 [Earnings|w1.63] Palo Alto Networks (PANW) Is Up 12.2% After New AI Guidance And Capita

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Jim Cramer Prefers Palo Alto (PANW) Over SentinelOne (S) |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | Can Palo Alto Networks' SASE Push Help It Challenge FTNT and |
| 2026-09-17 | Analyst Action | ⚪  0 | 2.16 | Benzinga | This Copart Analyst Is No Longer Bullish; Here Are Top 5 Dow |
| 2026-09-17 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Bernstein Downgrades Palo Alto Networks to Market Perform, R |
| 2026-09-16 | Industry | ⚪  0 | 1.5 | Yahoo | Tenzai Integrates with Palo Alto Networks to Help Enterprise |
| 2026-09-16 | Industry | 🟢 +1 | 1.5 | Yahoo | CRWD, PANW Stocks Extend AI-Fueled Rally As Cybersecurity Be |
| 2026-09-15 | Earnings | 🟢 +1 | 1.63 | Yahoo | Palo Alto Networks (PANW) Is Up 12.2% After New AI Guidance  |

---

## 🟢 Mid Long (9)

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 10.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 15 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Policy|w2.55] Dow Jones Futures: After S&P 500, Nasdaq Rebound, What's Next? Moderna
- 🟢 [Policy|w2.55] Dow Jones Futures: S&P 500, Nasdaq Rebound Above Key Level; Moderna, A
- 🟢 [Policy|w2.16] Vishay Intertechnology, Allegro MicroSystems, Himax, Bandwidth, and AM

**Bearish Factors:**
- 🔴 [Policy|w2.55] Dow Jones Futures Fall After S&P 500, Nasdaq Rebound Above Key Level; 
- 🔴 [Industry|w2.13] Why Are Nasdaq, S&P 500 And Dow Futures Rising Premarket? NVDA, CRWV, 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Policy | 🟢 +1 | 2.55 | Yahoo | Dow Jones Futures: After S&P 500, Nasdaq Rebound, What's Nex |
| 2026-09-18 | Industry | 🟢 +1 | 2.13 | Yahoo | GMKtec Unveils EVO-X5 Pro at IFA 2026 with AMD Ryzen(TM) AI  |
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | AMD Stock Rises Premarket: Report Flags Chip Price Hike Link |
| 2026-09-18 | Industry | 🔴 -1 | 2.13 | Yahoo | Why Are Nasdaq, S&P 500 And Dow Futures Rising Premarket? NV |
| 2026-09-18 | Policy | 🟢 +1 | 2.55 | Yahoo | Dow Jones Futures: S&P 500, Nasdaq Rebound Above Key Level;  |
| 2026-09-18 | Industry | 🟢 +1 | 2.13 | Yahoo | INTC, AMD, MU, NVDA: Chip Stocks Rally As Investors Look Pas |
| 2026-09-18 | Policy | 🔴 -1 | 2.55 | Yahoo | Dow Jones Futures Fall After S&P 500, Nasdaq Rebound Above K |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | Why AMD Stock Jumped Today |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.38 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 22 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Hewlett Packard Enterprise (NYSE:HPE) Passes Minervini Trend Template 
- 🟢 [Industry|w1.5] How Agentic AI Could Drive HPE Stock Much Higher
- 🟢 [Industry|w1.5] Hewlett Packard Enterprise: Buy The AI Infrastructure Breakout, But Re

**Bearish Factors:**
- 🔴 [Analyst Action|w1.5] Hewlett Packard Enterprise Rises 4% a Day After Evercore ISI Downgrade

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | Jim Cramer Says Hewlett Packard Enterprise (HPE) Has the “Ho |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Are Computer and Technology Stocks Lagging  Hewlett Packard  |
| 2026-09-16 | Industry | ⚪  0 | 1.5 | Yahoo | What Does Hewlett Packard Enterprise (HPE) Gain From These N |
| 2026-09-16 | Industry | 🟢 +1 | 1.5 | Yahoo | How Agentic AI Could Drive HPE Stock Much Higher |
| 2026-09-16 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Hewlett Packard Enterprise: Buy The AI Infrastructure Breako |
| 2026-09-15 | Industry | 🟢 +1 | 1.25 | Yahoo | AI Slowdown Fears Rise: Buy NVIDIA, HPE That Connect AI and  |
| 2026-09-15 | Analyst Action | 🔴 -1 | 1.5 | Yahoo | Hewlett Packard Enterprise Rises 4% a Day After Evercore ISI |
| 2026-09-15 | Earnings | 🟢 +1 | 1.63 | ChartMill | Hewlett Packard Enterprise (NYSE:HPE) Passes Minervini Trend |

---

### NASDAQ:PLTR

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Palantir Stock Is Flat - But Recent News Suggests Not For Long
- 🟢 [Industry|w1.8] Palantir's Real Moat Just Got Stronger

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | Palantir Technologies (PLTR) AI Deal Rush Meets A Fair Value |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | PLTR CEO Alex Karp Calls For AI Accountability — ‘First Line |
| 2026-09-17 | Earnings | ⚪  0 | 2.34 | SeekingAlp | Palantir Stock: The AI Token Boom Is Hiding A Bigger Opportu |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Palantir's Real Moat Just Got Stronger |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Surf Air Mobility Signs First OperatorOS Contract with Sprin |
| 2026-09-17 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Palantir Stock Is Flat - But Recent News Suggests Not For Lo |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 8.43 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Is Cisco Stock Priced For Orders That Are Not Yet Revenue?
- 🟢 [Earnings|w2.34] Dell’s AI Backlog Surge Positions Stock for $600+ as Server Revenue Do
- 🟢 [Earnings|w1.95] Goldman's AI Server Forecast Sends Dell Stock Jumping

**Bearish Factors:**
- 🔴 [Policy|w1.8] Dell Rises 5% Despite Fresh Silver Lake Share Sale Filings; Super Micr

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | Jim Cramer Says Hewlett Packard Enterprise (HPE) Has the “Ho |
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | Dell InnovateFest 2026 Champions Inclusive and Independent L |
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | Michael Dell's $6.25 Billion Bet on Compounding Wins Over Wa |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Dell Gains Nearly 4% Today as 45-Watt Inference Expands Its  |
| 2026-09-17 | Earnings | 🟢 +1 | 2.34 | Yahoo | Is Cisco Stock Priced For Orders That Are Not Yet Revenue? |
| 2026-09-17 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell’s AI Backlog Surge Positions Stock for $600+ as Server  |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | AI Server Stocks Rally as the Hardware Bid Broadens: Hewlett |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | Jim Cramer on Advanced Micro Devices (AMD): “Buy It” |

---

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.75 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 10 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.5] BMO Capital Maintains Outperform on Dynatrace, Raises Price Target to 
- 🟢 [Analyst Action|w1.5] BTIG Reiterates Buy on Dynatrace, Maintains $62 Price Target
- 🟢 [Industry|w0.75] AI Agents Create Their Own Monitoring Problem. Datadog and Dynatrace A

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Dynatrace (DT) Exceeds Market Returns: Some Facts to Conside |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | FJTSY or DT: Which Is the Better Value Stock Right Now? |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Dynatrace (DT) Targets Large European Enterprises With New O |
| 2026-09-15 | Industry | ⚪  0 | 1.25 | Yahoo | Why Dynatrace (DT) Stock Is Trading Up Today |
| 2026-09-15 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | BMO Capital Maintains Outperform on Dynatrace, Raises Price  |
| 2026-09-15 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | BTIG Reiterates Buy on Dynatrace, Maintains $62 Price Target |
| 2026-09-12 | Industry | 🟢 +1 | 0.75 | Yahoo | AI Agents Create Their Own Monitoring Problem. Datadog and D |

---

### NASDAQ:QCOM

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Why QUALCOMM INC (NASDAQ:QCOM) Fits a Growth at a Reasonable Price Str
- 🟢 [Industry|w1.8] Qualcomm (QCOM) Stock Looks Fairly Priced On Its 80% Run
- 🟢 [Industry|w1.5] Should You Buy Qualcomm Stock For The Cash As Apple Leaves?

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Qualcomm Faces Margin Pressure From Rising Costs: Can it Recover?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-17 | Rumor | ⚪  0 | 1.08 | Yahoo | Trump-Xi Dinner Next Week Brings AI Titans To The Table — Op |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Qualcomm (QCOM) Outpaces Stock Market Gains: What You Should |
| 2026-09-17 | Earnings | 🔴 -1 | 2.34 | Yahoo | Qualcomm Faces Margin Pressure From Rising Costs: Can it Rec |
| 2026-09-17 | Earnings | 🟢 +1 | 2.34 | ChartMill | Why QUALCOMM INC (NASDAQ:QCOM) Fits a Growth at a Reasonable |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | Qualcomm (QCOM) Stock Looks Fairly Priced On Its 80% Run |
| 2026-09-16 | Industry | 🟢 +1 | 1.5 | Yahoo | Should You Buy Qualcomm Stock For The Cash As Apple Leaves? |
| 2026-09-16 | Industry | ⚪  0 | 1.5 | Yahoo | QCOM Stock Climbs To 2-Month High As AI Data Center Push Gai |

---

### NASDAQ:TEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 13 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Strength Seen in Tempus (TEM): Can Its 14.9% Jump Turn into More Stren

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Earnings | 🟢 +1 | 2.76 | Yahoo | Strength Seen in Tempus (TEM): Can Its 14.9% Jump Turn into  |
| 2026-09-15 | Industry | ⚪  0 | 1.25 | SeekingAlp | Tempus AI, Inc. (TEM) Presents at Morgan Stanley 24th Annual |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 26 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Taiwan Semiconductor Executive Calls AI Toddler With Superpowers
- 🟢 [Rumor|w1.27] Taiwan Semiconductor Manufacturing (TSM) Could Be 14% Overvalued As 2n

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Rumor | 🟢 +1 | 1.27 | Yahoo | Taiwan Semiconductor Manufacturing (TSM) Could Be 14% Overva |
| 2026-09-16 | Industry | 🟢 +1 | 1.5 | Benzinga | Taiwan Semiconductor Executive Calls AI Toddler With Superpo |
| 2026-09-15 | Industry | ⚪  0 | 1.25 | Yahoo | TSMC’s 2nm Era Is Accelerating With MediaTek. Nvidia and Alp |
| 2026-09-15 | Earnings | ⚪  0 | 1.63 | Yahoo | Taiwan Semi Revenue Keeps Surging. How to Play TSM Stock in  |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.93 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 5 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] ASX Up 230.9% in the Past Year: Should You Capitalize on the Euphoria?
- 🟢 [Earnings|w1.95] ASX vs. TER: Which AI Semiconductor Stock Should You Buy Right Now?

**Bearish Factors:**
- 🔴 [Earnings|w1.36] ASE Technology Can Miss August's Run Rate And Still Beat Q3 Guidance

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-17 | Earnings | 🟢 +1 | 2.34 | Yahoo | ASX Up 230.9% in the Past Year: Should You Capitalize on the |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Are Computer and Technology Stocks Lagging  Hewlett Packard  |
| 2026-09-17 | Earnings | ⚪  0 | 2.34 | Benzinga | ASE Technology Holding Co Reports Q2 2026 Results: Full Earn |
| 2026-09-16 | Earnings | 🟢 +1 | 1.95 | Yahoo | ASX vs. TER: Which AI Semiconductor Stock Should You Buy Rig |
| 2026-09-14 | Earnings | 🔴 -1 | 1.36 | SeekingAlp | ASE Technology Can Miss August's Run Rate And Still Beat Q3  |

---

## ⚠️ Overheated (2)

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 14.14 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 18 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Arista Networks (ANET) Raises Full Year Outlook As AI Data Center Dema
- 🟢 [Industry|w2.13] Arista Networks (NYSE:ANET): High Growth Momentum Meets a Breakout Set
- 🟢 [Earnings|w1.95] Bull of the Day: Arista Networks, Inc. (ANET)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Earnings | 🟢 +1 | 2.76 | Yahoo | Arista Networks (ANET) Raises Full Year Outlook As AI Data C |
| 2026-09-18 | Industry | 🟢 +1 | 2.13 | ChartMill | Arista Networks (NYSE:ANET): High Growth Momentum Meets a Br |
| 2026-09-16 | Earnings | 🟢 +1 | 1.95 | Yahoo | Bull of the Day: Arista Networks, Inc. (ANET) |
| 2026-09-15 | Earnings | ⚪  0 | 1.63 | Yahoo | Can Arista's Third Guidance Raise Still Make You Money? |
| 2026-09-15 | Industry | ⚪  0 | 1.25 | Yahoo | Why the Market Dipped But Arista Networks (ANET) Gained Toda |
| 2026-09-15 | Earnings | 🟢 +1 | 1.63 | Yahoo | Was Arista Networks Stock's Surge Visible Before It Happened |
| 2026-09-15 | Industry | ⚪  0 | 1.25 | Yahoo | Jim Cramer on Arista (ANET) CEO: “She Is Money and the Compa |
| 2026-09-15 | Earnings | 🟢 +1 | 1.63 | ChartMill | Arista Networks (NYSE:ANET): High-Growth Leadership and Mome |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 14.96 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Why Did CRWD, OKTA, IOVA Shares Climb To 52-Week Highs Today?
- 🟢 [Earnings|w2.34] Salesforce To Rally Around 20%? Here Are 10 Top Analyst Forecasts For 
- 🟢 [Analyst Action|w2.16] Bernstein Maintains Market Perform on CrowdStrike Holdings, Raises Pri

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Earnings | 🟢 +1 | 2.76 | Yahoo | Why Did CRWD, OKTA, IOVA Shares Climb To 52-Week Highs Today |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Jim Cramer Prefers Palo Alto (PANW) Over SentinelOne (S) |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Jim Cramer Highlights CrowdStrike (CRWD) as AI Security Conc |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike Named a Leader in Threat Intelligence by Indepen |
| 2026-09-17 | Earnings | 🟢 +1 | 2.34 | Benzinga | Salesforce To Rally Around 20%? Here Are 10 Top Analyst Fore |
| 2026-09-17 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Bernstein Maintains Market Perform on CrowdStrike Holdings,  |
| 2026-09-16 | Industry | ⚪  0 | 1.5 | Yahoo | Is CrowdStrike Holdings (CRWD) Priced For Perfection On Sale |
| 2026-09-16 | Industry | 🟢 +1 | 1.5 | Yahoo | CSCO's Splunk AI Push Gains Momentum: Can It Outpace DDOG &  |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **55** / 100 |
| Raw Weighted Score | 3.66 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 17 / 13 |
| Patterns | Bearish-to-Bullish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Biohacking Market Outlook 2026-2035 - Featuring Profiles of Apple, Fit
- 🟢 [Earnings|w2.34] Apple's iPhone 18 lineup keeps Bank of America bullish
- 🟢 [Industry|w1.8] Warren Buffett Has More Than 50% of His Portfolio in These 3 Stocks. W

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Apple (AAPL) Faces a $2.7 Billion UK Lawsuit over its App Tracking Rul
- 🔴 [Earnings|w2.34] Apple's Quality Is Tempting, But I'm Put Off By The Valuation

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | Apple Just Announced a Groundbreaking iPhone, but It Has Ali |
| 2026-09-18 | Earnings | 🟢 +1 | 2.76 | Yahoo | Biohacking Market Outlook 2026-2035 - Featuring Profiles of  |
| 2026-09-18 | Earnings | ⚪  0 | 2.76 | Yahoo | Apple’s Chip Strategy Keeps Paying Dividends |
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | Berkshire Hathaway (BRK.A) Moved Today, What Is Drawing Fres |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | Warren Buffett Has More Than 50% of His Portfolio in These 3 |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Apple (AAPL) Challenges Secret UK Order For An iPhone Backdo |
| 2026-09-17 | Analyst Action | ⚪  0 | 2.16 | Yahoo | Apple (AAPL) Outperforms Broader Market: What You Need to Kn |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | Apple iPhone 18 Pro Sales Helped By Carrier Promotions |

---

## 🔴 Avoid / Short (1)

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **55** / 100 |
| Raw Weighted Score | 3.66 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 17 / 13 |
| Patterns | Bearish-to-Bullish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Biohacking Market Outlook 2026-2035 - Featuring Profiles of Apple, Fit
- 🟢 [Earnings|w2.34] Apple's iPhone 18 lineup keeps Bank of America bullish
- 🟢 [Industry|w1.8] Warren Buffett Has More Than 50% of His Portfolio in These 3 Stocks. W

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Apple (AAPL) Faces a $2.7 Billion UK Lawsuit over its App Tracking Rul
- 🔴 [Earnings|w2.34] Apple's Quality Is Tempting, But I'm Put Off By The Valuation

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | Apple Just Announced a Groundbreaking iPhone, but It Has Ali |
| 2026-09-18 | Earnings | 🟢 +1 | 2.76 | Yahoo | Biohacking Market Outlook 2026-2035 - Featuring Profiles of  |
| 2026-09-18 | Earnings | ⚪  0 | 2.76 | Yahoo | Apple’s Chip Strategy Keeps Paying Dividends |
| 2026-09-18 | Industry | ⚪  0 | 2.13 | Yahoo | Berkshire Hathaway (BRK.A) Moved Today, What Is Drawing Fres |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | Warren Buffett Has More Than 50% of His Portfolio in These 3 |
| 2026-09-17 | Industry | ⚪  0 | 1.8 | Yahoo | Apple (AAPL) Challenges Secret UK Order For An iPhone Backdo |
| 2026-09-17 | Analyst Action | ⚪  0 | 2.16 | Yahoo | Apple (AAPL) Outperforms Broader Market: What You Need to Kn |
| 2026-09-17 | Industry | 🟢 +1 | 1.8 | Yahoo | Apple iPhone 18 Pro Sales Helped By Carrier Promotions |

---

## ⚪ Watch / Neutral (19)

### NYSE:CF
- Score: 58/100 | raw: 2 | News: 2 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LITE
- Score: 58/100 | raw: 1.8 | News: 3 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BAP
- Score: 58/100 | raw: 1.8 | News: 2 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LYB
- Score: 56/100 | raw: 1.5 | News: 2 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 53/100 | raw: 1.17 | News: 8 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:SMCI
- Score: 50/100 | raw: 0 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BE
- Score: 44/100 | raw: -1.75 | News: 10 kept / 20 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-18T12:31:09.294Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
