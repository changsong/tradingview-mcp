---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_0020b95bb81411f1a523525400cd780f
    ReservedCode1: 1A4ROv73PObDrCb6KNgOnQMPPyEntTciIdoeQHWKbsQltP902W+1mnvxRmZkzfNOmHf7wJjggJoneNVrtVMisSqSZkW5+wYDgViZcNQOJq4zZrRC4JDi32p8WCqtoonG8tl5bKXA3KZg81QRErk8Pmhm5qFlu2/qz8Hukv54atlJ39peVQexiWwlxF0=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_0020b95bb81411f1a523525400cd780f
    ReservedCode2: 1A4ROv73PObDrCb6KNgOnQMPPyEntTciIdoeQHWKbsQltP902W+1mnvxRmZkzfNOmHf7wJjggJoneNVrtVMisSqSZkW5+wYDgViZcNQOJq4zZrRC4JDi32p8WCqtoonG8tl5bKXA3KZg81QRErk8Pmhm5qFlu2/qz8Hukv54atlJ39peVQexiWwlxF0=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-24  |  **News Window:** 2026-09-17 ~ 2026-09-24（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (46)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:APH** | **86** | 10.03 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/6 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:PANW** | **79** | 12.04 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/20 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:LITE** | **78** | 8.73 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/21 | Overheated Sentiment (one-sided bullish) |
| 4 | **NYSE:BE** | **77** | 10.22 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/19 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:P** | **77** | 6.9 | 🟢 Long (Strong) | Momentum / Hold | High | 7/9 | - |
| 6 | **NASDAQ:AMD** | **75** | 14.76 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 14/16 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:SMCI** | **75** | 11.16 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 13/17 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:CRWD** | **72** | 10.29 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/16 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:ARM** | **72** | 15.58 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 20/10 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:IREN** | **72** | 11.59 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 21/9 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:DELL** | **70** | 8.59 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 13/17 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:HPE** | **67** | 5.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/20 | - |
| 13 | **NYSE:GRMN** | **67** | 4.1 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/2 | - |
| 14 | **NYSE:SPNT** | **66** | 3.75 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/2 | - |
| 15 | **NASDAQ:TEM** | **66** | 5.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/8 | - |
| 16 | **NASDAQ:INTC** | **66** | 3.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 17 | **NYSE:ANET** | **65** | 3.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/21 | - |
| 18 | **NASDAQ:QCOM** | **65** | 3.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 19 | **NASDAQ:PLTR** | **63** | 3.09 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/26 | - |
| 20 | **NASDAQ:GRAL** | **63** | 3.05 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/9 | - |
| 21 | **NASDAQ:SNDK** | **62** | 3.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 22 | **NYSE:DT** | **61** | 2.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/11 | - |
| 23 | **NASDAQ:MU** | **61** | 4.26 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | - |
| 24 | **NASDAQ:MSFT** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/29 | - |
| 25 | **NASDAQ:MRVL** | **60** | 2.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 26 | **NASDAQ:AEHR** | **59** | 2.15 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/1 | - |
| 27 | **NYSE:HGTY** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/2 | - |
| 28 | **NASDAQ:STX** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/27 | - |
| 29 | **NYSE:ETN** | **57** | 1.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/24 | - |
| 30 | **NYSE:WT** | **57** | 1.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/4 | - |
| 31 | **NYSE:ASX** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/7 | - |
| 32 | **NYSE:TSM** | **55** | 1.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 33 | **NASDAQ:HOOD** | **55** | 2.59 | ⚪ No Trade (Weak Bullish) | Watch | Low | 14/16 | - |
| 34 | **NASDAQ:AAPL** | **52** | 1.23 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 16/14 | Sentiment Divergence (black swan masked by noise) |
| 35 | **NYSE:DOCN** | **52** | 0.45 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/6 | - |
| 36 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/3 | - |
| 37 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 41 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/30 | - |
| 43 | **NYSE:JOE** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/3 | - |
| 44 | **NYSE:KEYS** | **49** | -0.18 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 2/9 | - |
| 45 | **NYSE:LTC** | **47** | -0.84 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 46 | **NASDAQ:NBIS** | **41** | -2.1 | ⚪ No Trade (Neutral) | Watch | Low | 7/23 | Bullish-to-Bearish Reversal (reversal) |

---

## 🟢 Strong Long (1)

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.9 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 9 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Everpure Maps AI, Hyperscale Push as It Targets $7B in Fiscal 2028 Rev
- 🟢 [Earnings|w2.34] Everpure's Expanding Business Model Fuels New Long-Term Outlook
- 🟢 [Industry|w1.05] Everpure (P) Dropped From Key Small Cap Indices As Fund Exposure Shift

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Industry | ⚪  0 | 2.13 | SeekingAlp | Everpure, Inc. (P) Shareholder/Analyst Call Transcript |
| 2026-09-24 | Industry | ⚪  0 | 2.13 | Yahoo | Everpure Unveils Data-First AI Strategy, Targets $21B Intell |
| 2026-09-24 | Earnings | 🟢 +1 | 2.76 | Yahoo | Everpure Maps AI, Hyperscale Push as It Targets $7B in Fisca |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | Everpure's Expanding Business Model Fuels New Long-Term Outl |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Everpure Recognized as A Leader in the 2026 Gartner® Magic Q |
| 2026-09-20 | Industry | 🟢 +1 | 1.05 | Yahoo | Everpure (P) Dropped From Key Small Cap Indices As Fund Expo |
| 2026-09-18 | Industry | 🟢 +1 | 0.75 | SeekingAlp | Investing In Everpure: Growth Potential You Can't Ignore |

---

## 🟢 Mid Long (17)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 10.29 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Cybersecurity Stocks Rally While Large-Cap Tech Slides: CrowdStrike, P
- 🟢 [Earnings|w1.95] Is CrowdStrike Stock A Buy Today As AI Threats Lift Demand?
- 🟢 [Earnings|w1.95] CrowdStrike vs. Palantir Technologies: Which Technology Stock Is a Bet

**Bearish Factors:**
- 🔴 [Earnings|w1.63] Cybersecurity Stocks Extend Gains on AI Safety Warnings: CrowdStrike a
- 🔴 [Industry|w1.5] Strategy, CrowdStrike, MongoDB, ServiceNow, and Okta Shares Are Soarin

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | Why CrowdStrike (CRWD) Stock Is Up Today |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | Cybersecurity Stocks Rally While Large-Cap Tech Slides: Crow |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Not Palantir. Not Micron. The $325 Billion Nvidia Partner Th |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | Is CrowdStrike (CRWD) a Buy as Wall Street Analysts Look Opt |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | CrowdStrike Stock Rallies as AI Security Fears Create a Majo |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | CrowdStrike Slips as Palo Alto Automates Vulnerability Hunti |
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | Is CrowdStrike Stock A Buy Today As AI Threats Lift Demand? |
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | CrowdStrike vs. Palantir Technologies: Which Technology Stoc |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 15.58 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 20 / 10 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] ARM Vs. AMD: Who Is Going to Win the Agentic AI CPU Revival War?
- 🟢 [Earnings|w2.34] Arm Holdings: AI-Driven Melt-Up Overly Done - Growth Prospects Mostly 
- 🟢 [Earnings|w1.95] Arm Just Got a Major Vote of Confidence From Its CEO

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Arm Stock: Too Good to Sell, Too Expensive to Buy
- 🔴 [Earnings|w1.95] ARM Stock Jumped 17% Yesterday After Its CEO Said Demand Is Off the Ch

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | Arm vs. Taiwan Semiconductor Manufacturing: Which Chip Stock |
| 2026-09-23 | M&A | ⚪  0 | 2.52 | Yahoo | SoftBank Is Raising $11 Billion for OpenAI. Its Arm Stake Ba |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | Arm Falls as Agentic AI Multiplies Server-Core Demand |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | ARM Vs. AMD: Who Is Going to Win the Agentic AI CPU Revival  |
| 2026-09-23 | Earnings | ⚪  0 | 2.34 | Yahoo | Arm Just Jumped 36% Now Its Valuation Is Raising Eyebrows |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Virtus SGA U.S. Large Cap Growth Q2 2026 Contributors And De |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Benzinga | What's Going On With Arm Stock Wednesday? |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Arm Holdings: AI-Driven Melt-Up Overly Done - Growth Prospec |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 11.59 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 21 / 9 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Iren (IREN) Stock Looks Stretched With AI Hopes Already Priced In
- 🟢 [Earnings|w1.95] IREN’s Energy Pipeline Optionality is Very Appealing So Should You Buy
- 🟢 [Earnings|w1.95] What's Going On With IREN Stock Tuesday?

**Bearish Factors:**
- 🔴 [Earnings|w1.95] IREN Broadens Its AI Customer Base: Can Diversification Pay Off?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | Iren (IREN) Stock Looks Stretched With AI Hopes Already Pric |
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | IREN’s Energy Pipeline Optionality is Very Appealing So Shou |
| 2026-09-22 | Earnings | 🔴 -1 | 1.95 | Yahoo | IREN Broadens Its AI Customer Base: Can Diversification Pay  |
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Benzinga | What's Going On With IREN Stock Tuesday? |
| 2026-09-22 | Earnings | ⚪  0 | 1.95 | Benzinga | Transcript: IREN Q4 2026 Earnings Conference Call |
| 2026-09-21 | Industry | 🟢 +1 | 1.25 | Yahoo | Iris Energy Is Sitting on $7.6 Billion in Cash and Building  |
| 2026-09-21 | Earnings | ⚪  0 | 1.63 | Yahoo | CRWV vs. IREN: Which Neocloud Stock Offers the Stronger Upsi |
| 2026-09-21 | Industry | ⚪  0 | 1.25 | Yahoo | IREN Expands Its 5GW+ Pipeline: Can Execution Match Ambition |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 5.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 20 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] 4 Stocks to Buy From a Prospering Technology Solutions Industry
- 🟢 [Industry|w1.8] D&H Distributing Expands Relationship with HPE; Chosen as a North Amer
- 🟢 [Earnings|w1.63] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio

**Bearish Factors:**
- 🔴 [Earnings|w1.17] Hewlett Packard Enterprise (HPE) Wins Top Zacks Rank, Is It Still Unde

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Industry | ⚪  0 | 2.13 | Yahoo | Hewlett Packard Enterprise (HPE) Brings Quantum Computing In |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | HPE or AMD: Which Is the Better Value Stock Right Now? |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | 4 Stocks to Buy From a Prospering Technology Solutions Indus |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Why Hewlett Packard Enterprise Company (HPE) Was a Top Contr |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | D&H Distributing Expands Relationship with HPE; Chosen as a  |
| 2026-09-22 | Industry | 🟢 +1 | 1.5 | Yahoo | HPE's Networking Orders Signal Continued Growth: What's Ahea |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | QuEra Computing Collaborates with HPE to Bring Fault-Toleran |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.5 | Benzinga | Here's How Much $100 Invested In Hewlett Packard 5 Years Ago |

---

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.1 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Garmin (GRMN) Shares Moved, What Is Drawing Fresh Attention?
- 🟢 [Industry|w1.25] Best Health & Fitness Stocks to Buy as Wellness Demand Grows
- 🟢 [Industry|w0.9] Garmin’s (GRMN) New Autopilot Signals Where Growth Is Headed

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Earnings | ⚪  0 | 2.34 | Yahoo | Garmin Ltd. schedules third quarter 2026 earnings call |
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | Garmin (GRMN) Shares Moved, What Is Drawing Fresh Attention? |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Garmin rolls out new feature updates for select smartwatches |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Bring digital flagging to the race vehicle with Garmin Catal |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.5 | Yahoo | Garmin (GRMN) Outperforms Broader Market: What You Need to K |
| 2026-09-21 | Industry | 🟢 +1 | 1.25 | Yahoo | Best Health & Fitness Stocks to Buy as Wellness Demand Grows |
| 2026-09-19 | Industry | 🟢 +1 | 0.9 | Yahoo | Garmin’s (GRMN) New Autopilot Signals Where Growth Is Headed |

---

### NYSE:SPNT

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.75 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] SiriusPoint to Deliver Further Book Value Growth, Buybacks, RBC Capita
- 🟢 [Analyst Action|w1.8] RBC Capital Initiates Coverage On SiriusPoint with Outperform Rating, 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | SiriusPoint to Deliver Further Book Value Growth, Buybacks,  |
| 2026-09-22 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | RBC Capital Initiates Coverage On SiriusPoint with Outperfor |

---

### NASDAQ:TEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 5.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 8 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Tempus AI (TEM) Is Building a Heart Failure Agent That Never Sleeps
- 🟢 [Industry|w1.5] Tempus AI (TEM) Has a $75 Goldman Sachs Target, But Its Data Business 
- 🟢 [Industry|w1.5] Tempus AI Sees Pricing, Data Growth Fueling Long-Term Expansion

**Bearish Factors:**
- 🔴 [Industry|w1.5] Tempus AI: High Risk, But With A Great Cause
- 🔴 [Industry|w1.05] Tempus AI (TEM), What Is Behind The Latest Buzz?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | 🟢 +1 | 1.5 | Yahoo | Tempus AI (TEM) Has a $75 Goldman Sachs Target, But Its Data |
| 2026-09-22 | Industry | 🔴 -1 | 1.5 | SeekingAlp | Tempus AI: High Risk, But With A Great Cause |
| 2026-09-22 | Industry | 🟢 +1 | 1.5 | Yahoo | Tempus AI Sees Pricing, Data Growth Fueling Long-Term Expans |
| 2026-09-21 | Industry | ⚪  0 | 1.25 | Yahoo | Tempus and Recursion Extend Existing Data License Agreement  |
| 2026-09-21 | Industry | ⚪  0 | 1.25 | Benzinga | Tempus AI Extends Recursion Data Deal Through 2029, Replacin |
| 2026-09-21 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | This Digital Realty Trust Analyst Begins Coverage On A Bulli |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.5 | Benzinga | Goldman Sachs Initiates Coverage On Tempus AI with Neutral R |
| 2026-09-21 | Earnings | 🟢 +1 | 1.63 | Yahoo | Tempus AI (TEM) Is Building a Heart Failure Agent That Never |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Intel Is Storming Back Into The AI Conversation - Reiterate Buy
- 🟢 [Industry|w1.8] Intel: Beware The Muse AI-Driven FOMO Rally

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Earnings | ⚪  0 | 2.76 | Yahoo | Intel (INTC) Stock Looks Fully Priced After Its 293% Run |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Here is Why Intel (INTC) is a Bad Investment at Today’s Pric |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Intel (INTC) Can Fill Only Half its CPU Orders. Is That a Pr |
| 2026-09-23 | Analyst Action | 🟢 +1 | 2.16 | SeekingAlp | Intel Is Storming Back Into The AI Conversation - Reiterate  |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Intel: Beware The Muse AI-Driven FOMO Rally |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | SeekingAlp | Intel: The Future Has Arguably Never Looked This Bright |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 21 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Has Arista Networks Stock Quietly Become A Different Bet?
- 🟢 [Earnings|w0.97] Arista Networks (ANET) Raises Full Year Outlook As AI Data Center Dema
- 🟢 [Industry|w0.75] Arista Networks (NYSE:ANET): High Growth Momentum Meets a Breakout Set

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Madison Mid Cap Fund: Realizing Gains in High-Speed Switch L |
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | Has Arista Networks Stock Quietly Become A Different Bet? |
| 2026-09-22 | Analyst Action | ⚪  0 | 1.8 | Benzinga | $1000 Invested In Arista Networks 10 Years Ago Would Be Wort |
| 2026-09-21 | Industry | ⚪  0 | 1.25 | Yahoo | Arista Networks (ANET) Surpasses Market Returns: Some Facts  |
| 2026-09-18 | Industry | ⚪  0 | 0.75 | Yahoo | How Much Does Arista Networks Stock Move When The Market Mov |
| 2026-09-18 | Earnings | 🟢 +1 | 0.97 | Yahoo | Arista Networks (ANET) Raises Full Year Outlook As AI Data C |
| 2026-09-18 | Industry | 🟢 +1 | 0.75 | ChartMill | Arista Networks (NYSE:ANET): High Growth Momentum Meets a Br |

---

### NASDAQ:QCOM

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] QUALCOMM (QCOM) Draws Fresh AI Focus As Valuation Looks Close To Fair 
- 🟢 [Industry|w1.8] QCOM Launches Next-Gen Snapdragon SoCs: Will Agentic AI Drive Growth?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | How Qualcomm is transforming the car into a 'digital compute |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | How Qualcomm is targeting agentic AI with its 2 new smartpho |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | QUALCOMM (QCOM) Draws Fresh AI Focus As Valuation Looks Clos |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | QCOM Launches Next-Gen Snapdragon SoCs: Will Agentic AI Driv |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | QCOM Stock On Track For Best Month Since May: Analysts See A |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Qualcomm Launches Two New Smartphone Chips As AI Push Intens |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Qualcomm CFO on agentic AI and the race to the edge |

---

### NASDAQ:PLTR

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.09 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 26 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Palantir Technologies (NASDAQ:PLTR) Shows Explosive Growth and Strengt
- 🟢 [Industry|w2.13] Palantir: Expect Another Leg Higher

**Bearish Factors:**
- 🔴 [Industry|w1.8] Michael Burry expands short bets on Micron, Palantir and semiconductor

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Earnings | 🟢 +1 | 2.76 | ChartMill | Palantir Technologies (NASDAQ:PLTR) Shows Explosive Growth a |
| 2026-09-24 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Palantir: Expect Another Leg Higher |
| 2026-09-23 | Policy | ⚪  0 | 2.16 | Yahoo | Palantir Stock Rises 3% Despite Losing $875 Million FAA AI D |
| 2026-09-23 | Industry | 🔴 -1 | 1.8 | Yahoo | Michael Burry expands short bets on Micron, Palantir and sem |

---

### NASDAQ:GRAL

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.05 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 9 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.8] Baird Maintains Outperform on GRAIL, Raises Price Target to $118
- 🟢 [Industry|w1.25] GRAL Stock Clocks Best Day In Over 1.5 Years — FDA Papers Lift Galleri

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Baird Maintains Outperform on GRAIL, Raises Price Target to  |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | GRAIL Stock Jumped 34% Yesterday. The FDA Just Told Its Inve |
| 2026-09-21 | Industry | 🟢 +1 | 1.25 | Yahoo | GRAL Stock Clocks Best Day In Over 1.5 Years — FDA Papers Li |
| 2026-09-21 | Industry | ⚪  0 | 1.25 | Benzinga | 12 Health Care Stocks Moving In Monday's Intraday Session |
| 2026-09-21 | Industry | ⚪  0 | 1.25 | Yahoo | FDA Decision Watch: MRK, MIRM, INCY, GRAL Face Key Regulator |
| 2026-09-18 | Earnings | ⚪  0 | 0.97 | Benzinga | GRAIL Q2 2026 Earnings Call: Complete Transcript |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 3.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] MU, SNDK Extend Slide For A Second Day As Memory Rally Fizzles: Micron
- 🟢 [Earnings|w2.34] Sandisk's $15.5 Billion Buyback Could Retire Up To 5.6% Of Current Sha
- 🟢 [Industry|w1.8] This AI Memory Stock Is Up More Than 650% in 2026. Micron Investors Sh

**Bearish Factors:**
- 🔴 [Industry|w1.8] Is SanDisk Stock Amplifying A Risk You Already Own?
- 🔴 [Industry|w1.8] Sandisk: Supply Is Getting Worse And Worse

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Earnings | 🟢 +1 | 2.76 | Yahoo | MU, SNDK Extend Slide For A Second Day As Memory Rally Fizzl |
| 2026-09-23 | Industry | 🔴 -1 | 1.8 | Yahoo | Is SanDisk Stock Amplifying A Risk You Already Own? |
| 2026-09-23 | Industry | 🔴 -1 | 1.8 | SeekingAlp | Sandisk: Supply Is Getting Worse And Worse |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Sandisk's $15.5 Billion Buyback Could Retire Up To 5.6% Of C |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | This AI Memory Stock Is Up More Than 650% in 2026. Micron In |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Sandisk Stock Is Down More Than 20% Over the Past 3 Months.  |
| 2026-09-22 | Earnings | ⚪  0 | 1.95 | Yahoo | Sandisk (SNDK) Has Signed Away Two Thirds of Next Year’s Out |

---

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 11 |

**Bullish Factors:**
- 🟢 [Analyst Action|w0.9] This Etsy Analyst Turns Bullish; Here Are Top 5 Upgrades For Friday
- 🟢 [Analyst Action|w0.9] Needham Upgrades Dynatrace to Buy, Announces $68 Price Target
- 🟢 [Industry|w0.75] Dynatrace (NYSE:DT): A Quality Stock Built for Long-Term Compounding

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | 🟢 +1 | 0.75 | ChartMill | Dynatrace (NYSE:DT): A Quality Stock Built for Long-Term Com |
| 2026-09-18 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | This Etsy Analyst Turns Bullish; Here Are Top 5 Upgrades For |
| 2026-09-18 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Needham Upgrades Dynatrace to Buy, Announces $68 Price Targe |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 4.26 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Zacks Investment Ideas feature highlights: GLD, QQQ, USO, MU and TWLO
- 🟢 [Earnings|w2.76] MU, SNDK Extend Slide For A Second Day As Memory Rally Fizzles: Micron
- 🟢 [Earnings|w2.34] Micron (MU) vs Western Digital (WDC): Which is a Better Stock to Buy

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Martin Shkreli Shorts Micron 2 Months After Saying ‘I Like Micron’: ‘I
- 🔴 [Industry|w1.8] Own ON Semiconductor For AI Power, Or Own Micron's Contracts?
- 🔴 [Industry|w1.8] Micron Technology (MU) Draws Michael Burry Short As Memory Price Warni

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Earnings | 🟢 +1 | 2.76 | Yahoo | Zacks Investment Ideas feature highlights: GLD, QQQ, USO, MU |
| 2026-09-24 | Earnings | 🟢 +1 | 2.76 | Yahoo | MU, SNDK Extend Slide For A Second Day As Memory Rally Fizzl |
| 2026-09-23 | Industry | 🔴 -1 | 1.8 | Yahoo | Own ON Semiconductor For AI Power, Or Own Micron's Contracts |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | Micron (MU) vs Western Digital (WDC): Which is a Better Stoc |
| 2026-09-23 | Earnings | 🔴 -1 | 2.34 | Yahoo | Martin Shkreli Shorts Micron 2 Months After Saying ‘I Like M |
| 2026-09-23 | Earnings | ⚪  0 | 2.34 | Yahoo | Jim Cramer Explains Why He Has a “Giant Position” in Micron  |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | Micron keeps analysts bullish as memory demand strengthens |
| 2026-09-23 | Industry | 🔴 -1 | 1.8 | Yahoo | Micron Technology (MU) Draws Michael Burry Short As Memory P |

---

### NASDAQ:MSFT

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 29 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Microsoft: Buy This Early Recovery

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Microsoft: Buy This Early Recovery |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] This HCA Healthcare Analyst Begins Coverage On A Bullish Note; Here Ar
- 🟢 [Analyst Action|w2.16] Seaport Global Initiates Coverage On Marvell Technology with Buy Ratin

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Should You Sell Your Marvell Stock Now That Higher Forecasts Are Not E

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Marvell Stock Ran, But Did It Tell You When? |
| 2026-09-23 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | This HCA Healthcare Analyst Begins Coverage On A Bullish Not |
| 2026-09-23 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Seaport Global Initiates Coverage On Marvell Technology with |
| 2026-09-22 | Earnings | 🔴 -1 | 1.95 | Yahoo | Should You Sell Your Marvell Stock Now That Higher Forecasts |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Marvell Technology (MRVL) Debuts Industry First 2nm Optical  |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Marvell Technology (MRVL) Shares Skyrocket, What You Need To |

---

## 🟡 Cautious Long (1)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 8.59 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] UBS Sees PC Sales Shrinking Again in 2027. Dell and HP Investors Aren’
- 🟢 [Earnings|w1.95] Can Dell's Margins Catch Up With Its Stock?
- 🟢 [Industry|w1.8] Is Dell Technologies (DELL) Reasonable on Cash Flow After Its Rally?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | UBS Sees PC Sales Shrinking Again in 2027. Dell and HP Inves |
| 2026-09-23 | Earnings | ⚪  0 | 2.34 | Yahoo | Dell Gains 1.4% as $999 Googlebook Tests Consumer AI Margins |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | Is Dell Technologies (DELL) Reasonable on Cash Flow After It |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Are You Looking for a Top Momentum Pick? Why Dell Technologi |
| 2026-09-22 | Earnings | ⚪  0 | 1.95 | Yahoo | Dell Falls 2.5% as $1,199 Googlebook Tests PC Margin |
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | Can Dell's Margins Catch Up With Its Stock? |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Are Computer and Technology Stocks Lagging  BE Semiconductor |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Is Dell (DELL) Using the XPS Googlebook to Deepen Its AI Eco |

---

## ⚠️ Overheated (5)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 10.03 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 6 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] Bernstein Initiates Coverage of Amphenol at Outperform
- 🟢 [Analyst Action|w2.16] Bernstein Initiates Coverage On Amphenol with Outperform Rating, Annou
- 🟢 [Industry|w1.8] 2 Stocks That Skirt High Copper Prices for AI Data Centers

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Analyst Action | 🟢 +1 | 2.55 | Fintel | Bernstein Initiates Coverage of Amphenol at Outperform |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | 2 Stocks That Skirt High Copper Prices for AI Data Centers |
| 2026-09-23 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Bernstein Initiates Coverage On Amphenol with Outperform Rat |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | 3 Stocks Put Traders Are Targeting Today: EXE, APH, WMB |
| 2026-09-22 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | BNP Paribas Maintains Outperform on Amphenol, Raises Price T |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.5 | Benzinga | If You Invested $1000 In Amphenol Stock 20 Years Ago, You Wo |
| 2026-09-18 | Industry | ⚪  0 | 0.75 | Yahoo | APH's AI Datacom Strength Grows: Can It Challenge TEL & MRVL |
| 2026-09-18 | Industry | 🟢 +1 | 0.75 | Yahoo | Best Momentum Stocks to Buy for September 18th |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 12.04 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [M&A|w2.98] Has Palo Alto Networks (PANW) Become Fully Priced After AI Security Ga
- 🟢 [Earnings|w2.76] 7 Cybersecurity Stocks Riding the AI Security Boom
- 🟢 [Earnings|w2.34] Nomios Expands Presence in Southern Europe with Leading Portuguese Cyb

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Earnings | 🟢 +1 | 2.76 | Yahoo | 7 Cybersecurity Stocks Riding the AI Security Boom |
| 2026-09-24 | M&A | 🟢 +1 | 2.98 | Yahoo | Has Palo Alto Networks (PANW) Become Fully Priced After AI S |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Why Palo Alto Networks (PANW) Stock Is Trading Up Today |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | Can Prisma AIRS' $100M ARR Milestone Drive PANW's AI Securit |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | Nomios Expands Presence in Southern Europe with Leading Port |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Semtech and Palo Alto Networks Secure Industrial IoT with Ze |
| 2026-09-23 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Why Bernstein Still Sees 46% Upside in Zscaler (ZS) but Down |
| 2026-09-22 | Earnings | ⚪  0 | 1.95 | Yahoo | Palo Alto Networks Launches AI-Powered Continuous Security T |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 8.73 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 21 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] FN Rides on Surging Data Center Demand: Can It Outpace AAOI & LITE?
- 🟢 [Earnings|w1.63] Lumentum Shares Rise 12% in a Month: Is There More Upside Ahead?
- 🟢 [Earnings|w1.63] Lumentum Holdings (NASDAQ:LITE) Combines High Growth Momentum With a B

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Lumentum Shares Are Up After an AI Optical Tech Partnership  |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | FN Rides on Surging Data Center Demand: Can It Outpace AAOI  |
| 2026-09-23 | Analyst Action | ⚪  0 | 2.16 | Benzinga | Here’s How Much You Would Have Made Owning Lumentum Holdings |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Lumentum Jumped Nearly 10% While Corning Barely Moved. Is th |
| 2026-09-22 | Industry | 🟢 +1 | 1.5 | Yahoo | Lumentum to Demonstrate DWDM ELSFP at ECOC 2026: What's Ahea |
| 2026-09-21 | Earnings | 🟢 +1 | 1.63 | Yahoo | Lumentum Shares Rise 12% in a Month: Is There More Upside Ah |
| 2026-09-21 | Earnings | 🟢 +1 | 1.63 | ChartMill | Lumentum Holdings (NASDAQ:LITE) Combines High Growth Momentu |
| 2026-09-21 | Industry | ⚪  0 | 1.25 | Yahoo | Is Lumentum (LITE) Quietly Rewiring Its AI Data Center Role  |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 10.22 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 19 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] FLNC or BE: Which Alternative Energy Stock Is Worth Buying Now?
- 🟢 [Earnings|w1.95] BE vs. BLDP: Which Clean Energy Stock Has Stronger Growth Potential?
- 🟢 [Industry|w1.8] Bloom Energy Stock Is Up 218% in 2026 and Just Joined the S&P 500. Is 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Earnings | ⚪  0 | 2.34 | Yahoo | Plug Power vs. Bloom Energy: Which Clean Energy Stock Has Mo |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | FLNC or BE: Which Alternative Energy Stock Is Worth Buying N |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | Bloom Energy Stock Is Up 218% in 2026 and Just Joined the S& |
| 2026-09-23 | Earnings | ⚪  0 | 2.34 | Yahoo | Top 3 Grid Stocks To Watch In September 2026 |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Bloom Energy (BE) Back In Focus Following Index Reshuffle As |
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | BE vs. BLDP: Which Clean Energy Stock Has Stronger Growth Po |
| 2026-09-21 | Industry | ⚪  0 | 1.25 | Yahoo | Why Bloom Energy (BE) Outpaced the Stock Market Today |
| 2026-09-21 | Earnings | 🟢 +1 | 1.63 | Yahoo | Why Did Bloom Energy Stock More Than Triple In A Year? |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 14.76 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Buyback|w2.55] Is an AMD Stock Split Coming Now That the Shares Have Topped $600?
- 🟢 [Earnings|w2.34] AMD Is Up 187% This Year: Take Profits, or Buy More?
- 🟢 [Earnings|w2.34] ARM Vs. AMD: Who Is Going to Win the Agentic AI CPU Revival War?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Industry | 🟢 +1 | 2.13 | Yahoo | AMD Just Joined the Trillion-Dollar Club. Is the Stock Still |
| 2026-09-24 | Analyst Action | ⚪  0 | 2.55 | Yahoo | AMD vs. Intel: Which Artificial Intelligence (AI) Chip Stock |
| 2026-09-24 | Industry | ⚪  0 | 2.13 | SeekingAlp | AMD: AI Agents Give Its Memory Advantage A Much Bigger Marke |
| 2026-09-24 | Buyback | 🟢 +1 | 2.55 | Yahoo | Is an AMD Stock Split Coming Now That the Shares Have Topped |
| 2026-09-24 | Earnings | ⚪  0 | 2.76 | Yahoo | AMD Is Up 187% This Year and Nvidia Is Up 22%. Prediction: N |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | AMD Is Up 187% This Year: Take Profits, or Buy More? |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | AMD Becomes the 14th Company to Cross $1 Trillion In Market  |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | AMD Just Hit $1 Trillion. Can Oracle’s 50,000-GPU Deployment |

---

## ⚠️ Risk Pattern (3)

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 11.16 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 13 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership With Moment
- 🟢 [Earnings|w2.34] SMCI vs. AVT: Which AI Infrastructure Stock is a Better Buy?
- 🟢 [Industry|w1.8] What's Going On With Super Micro Computer Stock Wednesday?

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth With a High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Earnings | 🟢 +1 | 2.76 | ChartMill | Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership W |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | SMCI vs. AVT: Which AI Infrastructure Stock is a Better Buy? |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Supermicro Now Shipping NVIDIA Vera Rubin NVL72 Racks |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Benzinga | What's Going On With Super Micro Computer Stock Wednesday? |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Super Micro Computer (SMCI) Stock Moves 1.07%: What You Shou |
| 2026-09-21 | Earnings | 🟢 +1 | 1.63 | Yahoo | Super Micro Computer (SMCI) Is Up 12.1% After Record AI Back |
| 2026-09-21 | Earnings | 🟢 +1 | 1.63 | Yahoo | Can SMCI's Record Backlog Sustain Revenue Momentum in FY27? |
| 2026-09-21 | Industry | 🟢 +1 | 1.25 | Yahoo | DELL Rides on Growing AI Clientele: Can the Stock Outpace SM |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 8.59 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] UBS Sees PC Sales Shrinking Again in 2027. Dell and HP Investors Aren’
- 🟢 [Earnings|w1.95] Can Dell's Margins Catch Up With Its Stock?
- 🟢 [Industry|w1.8] Is Dell Technologies (DELL) Reasonable on Cash Flow After Its Rally?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | UBS Sees PC Sales Shrinking Again in 2027. Dell and HP Inves |
| 2026-09-23 | Earnings | ⚪  0 | 2.34 | Yahoo | Dell Gains 1.4% as $999 Googlebook Tests Consumer AI Margins |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Yahoo | Is Dell Technologies (DELL) Reasonable on Cash Flow After It |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Are You Looking for a Top Momentum Pick? Why Dell Technologi |
| 2026-09-22 | Earnings | ⚪  0 | 1.95 | Yahoo | Dell Falls 2.5% as $1,199 Googlebook Tests PC Margin |
| 2026-09-22 | Earnings | 🟢 +1 | 1.95 | Yahoo | Can Dell's Margins Catch Up With Its Stock? |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Are Computer and Technology Stocks Lagging  BE Semiconductor |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Is Dell (DELL) Using the XPS Googlebook to Deepen Its AI Eco |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 1.23 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 16 / 14 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w2.13] 1 Unstoppable Stock to Buy Before It Joins Nvidia, Alphabet, Apple, an
- 🟢 [Industry|w1.8] Why Apple's stock chart is probably putting a smile on the face of new
- 🟢 [Industry|w1.8] Meta’s Muse is a game changer—but can it win consumers' trust?

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Apple Settlement Over Siri Intelligence Features Means Eligible iPhone
- 🔴 [Industry|w1.8] BofA Sends Stark Message to Apple Stock Investors on iPhone 18

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Industry | ⚪  0 | 2.13 | Yahoo | Qualcomm Announces Renewal of Global Patent License Agreemen |
| 2026-09-24 | Industry | 🟢 +1 | 2.13 | Yahoo | 1 Unstoppable Stock to Buy Before It Joins Nvidia, Alphabet, |
| 2026-09-24 | Rumor | ⚪  0 | 1.27 | Yahoo | Apple (AAPL) Stock Could Be 32% Overpriced After Fresh AI Co |
| 2026-09-24 | Industry | ⚪  0 | 2.13 | Yahoo | Meta Puts Apple Firmly in Its Sights With New VR Glasses |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Billionaire Tim Draper takes aim at Apple, Meta's Bitcoin-fr |
| 2026-09-23 | Policy | ⚪  0 | 2.16 | Yahoo | The 42-State AG Coalition: How State Attorneys General Are B |
| 2026-09-23 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Apple Settlement Over Siri Intelligence Features Means Eligi |
| 2026-09-23 | Earnings | ⚪  0 | 2.34 | Yahoo | Meta’s “10 Million Paid Users” Problem Has a Simple Solution |

---

## 🔴 Avoid / Short (3)

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 11.16 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 13 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership With Moment
- 🟢 [Earnings|w2.34] SMCI vs. AVT: Which AI Infrastructure Stock is a Better Buy?
- 🟢 [Industry|w1.8] What's Going On With Super Micro Computer Stock Wednesday?

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth With a High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Earnings | 🟢 +1 | 2.76 | ChartMill | Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership W |
| 2026-09-23 | Earnings | 🟢 +1 | 2.34 | Yahoo | SMCI vs. AVT: Which AI Infrastructure Stock is a Better Buy? |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Supermicro Now Shipping NVIDIA Vera Rubin NVL72 Racks |
| 2026-09-23 | Industry | 🟢 +1 | 1.8 | Benzinga | What's Going On With Super Micro Computer Stock Wednesday? |
| 2026-09-22 | Industry | ⚪  0 | 1.5 | Yahoo | Super Micro Computer (SMCI) Stock Moves 1.07%: What You Shou |
| 2026-09-21 | Earnings | 🟢 +1 | 1.63 | Yahoo | Super Micro Computer (SMCI) Is Up 12.1% After Record AI Back |
| 2026-09-21 | Earnings | 🟢 +1 | 1.63 | Yahoo | Can SMCI's Record Backlog Sustain Revenue Momentum in FY27? |
| 2026-09-21 | Industry | 🟢 +1 | 1.25 | Yahoo | DELL Rides on Growing AI Clientele: Can the Stock Outpace SM |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 1.23 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 16 / 14 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w2.13] 1 Unstoppable Stock to Buy Before It Joins Nvidia, Alphabet, Apple, an
- 🟢 [Industry|w1.8] Why Apple's stock chart is probably putting a smile on the face of new
- 🟢 [Industry|w1.8] Meta’s Muse is a game changer—but can it win consumers' trust?

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Apple Settlement Over Siri Intelligence Features Means Eligible iPhone
- 🔴 [Industry|w1.8] BofA Sends Stark Message to Apple Stock Investors on iPhone 18

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Industry | ⚪  0 | 2.13 | Yahoo | Qualcomm Announces Renewal of Global Patent License Agreemen |
| 2026-09-24 | Industry | 🟢 +1 | 2.13 | Yahoo | 1 Unstoppable Stock to Buy Before It Joins Nvidia, Alphabet, |
| 2026-09-24 | Rumor | ⚪  0 | 1.27 | Yahoo | Apple (AAPL) Stock Could Be 32% Overpriced After Fresh AI Co |
| 2026-09-24 | Industry | ⚪  0 | 2.13 | Yahoo | Meta Puts Apple Firmly in Its Sights With New VR Glasses |
| 2026-09-23 | Industry | ⚪  0 | 1.8 | Yahoo | Billionaire Tim Draper takes aim at Apple, Meta's Bitcoin-fr |
| 2026-09-23 | Policy | ⚪  0 | 2.16 | Yahoo | The 42-State AG Coalition: How State Attorneys General Are B |
| 2026-09-23 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Apple Settlement Over Siri Intelligence Features Means Eligi |
| 2026-09-23 | Earnings | ⚪  0 | 2.34 | Yahoo | Meta’s “10 Million Paid Users” Problem Has a Simple Solution |

---

### NYSE:KEYS

| Metric | Detail |
|--------|--------|
| Normalized Score | **49** / 100 |
| Raw Weighted Score | -0.18 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 2 / 9 |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] Keysight Technologies (NYSE:KEYS) Meets Minervini Trend Template with 

**Bearish Factors:**
- 🔴 [Black Swan|w1.35] Keysight Technologies Sees AI Data-Center Boom, Targets 6G and Defense

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Black Swan | 🔴 -1 | 1.35 | Yahoo | Keysight Technologies Sees AI Data-Center Boom, Targets 6G a |
| 2026-09-19 | Earnings | 🟢 +1 | 1.17 | ChartMill | Keysight Technologies (NYSE:KEYS) Meets Minervini Trend Temp |

---

## ⚪ Watch / Neutral (19)

### NASDAQ:AEHR
- Score: 59/100 | raw: 2.15 | News: 3 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 58/100 | raw: 1.8 | News: 2 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 58/100 | raw: 1.8 | News: 3 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ETN
- Score: 57/100 | raw: 1.63 | News: 5 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 57/100 | raw: 1.63 | News: 2 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ASX
- Score: 56/100 | raw: 1.5 | News: 1 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 55/100 | raw: 1.25 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HOOD
- Score: 55/100 | raw: 2.59 | News: 14 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DOCN
- Score: 52/100 | raw: 0.45 | News: 5 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 1 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 30 dropped | No relevant news in window

### NYSE:JOE
- Score: 50/100 | raw: 0 | News: 0 kept / 3 dropped | No relevant news in window

### NYSE:LTC
- Score: 47/100 | raw: -0.84 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:NBIS
- Score: 41/100 | raw: -2.1 | News: 7 kept / 23 dropped | No clear directional bias — stay flat
- Patterns: Bullish-to-Bearish Reversal (reversal)

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-24T12:30:29.326Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
