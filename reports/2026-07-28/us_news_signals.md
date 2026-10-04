---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_d0624a7488ed11f1a68c525400826444
    ReservedCode1: lSRpmiFjrM8ineniAhRlkeSIJH/owg8zNqKQWKZsdtv4LjiBNxizNd6jKkgTTPcgmnxy8JIMO7/ijcAtqYXHVgbMv+VXUhDuc5w3H/Gl0n5Xmq4gv7T800sfRvcjZvlxXZTPDuaLHvnojPFdYX5EpZ1dY0anzUDUtf8fwPDJoeQwlrNtfwXF3rtcjyY=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_d0624a7488ed11f1a68c525400826444
    ReservedCode2: lSRpmiFjrM8ineniAhRlkeSIJH/owg8zNqKQWKZsdtv4LjiBNxizNd6jKkgTTPcgmnxy8JIMO7/ijcAtqYXHVgbMv+VXUhDuc5w3H/Gl0n5Xmq4gv7T800sfRvcjZvlxXZTPDuaLHvnojPFdYX5EpZ1dY0anzUDUtf8fwPDJoeQwlrNtfwXF3rtcjyY=
---

# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-07-26  |  **News Window:** 2026-07-19 ~ 2026-07-26
**Stock Pool:** us_selected.txt (60)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:VICR** | **92** | 10.11 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:AMKR** | **86** | 8.74 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:VRT** | **84** | 8.1 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/0 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:MMM** | **79** | 6.86 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:ENVA** | **77** | 6.49 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 6 | **NASDAQ:AVGO** | **77** | 6.55 | 🟢 Long (Strong) | Momentum / Hold | High | 7/0 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:NVDA** | **67** | 4.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/0 | - |
| 8 | **NYSE:CIEN** | **67** | 3.97 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 9 | **NASDAQ:TTMI** | **64** | 3.25 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/0 | - |
| 10 | **NASDAQ:LITE** | **62** | 2.86 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 11 | **NYSE:ETN** | **62** | 2.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/0 | - |
| 12 | **NYSE:LTC** | **59** | 2.06 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 13 | **NASDAQ:STX** | **58** | 1.89 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 14 | **NASDAQ:MRVL** | **57** | 1.68 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 15 | **NASDAQ:COHR** | **57** | 1.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 16 | **NASDAQ:MPWR** | **57** | 1.61 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 17 | **NYSE:SN** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 18 | **NASDAQ:SNDK** | **55** | 1.09 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 19 | **NASDAQ:NBIS** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 20 | **NASDAQ:BGC** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 21 | **NYSE:HUN** | **54** | 0.91 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 22 | **NASDAQ:WWD** | **53** | 0.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 23 | **NASDAQ:ON** | **53** | 0.81 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/0 | - |
| 24 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NYSE:CSW** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NYSE:DELL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NYSE:SO** | **50** | -0.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 29 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NYSE:VSH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NASDAQ:ELTK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NASDAQ:MSFT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NASDAQ:AMD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NASDAQ:CBRS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NYSE:CLS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NASDAQ:CRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NASDAQ:JEWL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NYSE:ASIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NYSE:WLK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:CE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:LYB** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 45 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:JCI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NASDAQ:POWI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NASDAQ:VNET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NASDAQ:EQIX** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 50 | **NASDAQ:DGXX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NASDAQ:CRWV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NASDAQ:IREN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NASDAQ:APLD
（内容由AI生成，仅供参考）** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 54 | **NYSE:GLW** | **49** | -0.25 | ⚪ No Trade (Neutral) | Watch | Low | 5/0 | - |
| 55 | **NASDAQ:MU** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 56 | **NASDAQ:SMCI** | **47** | -0.84 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 57 | **NASDAQ:WDC** | **47** | -0.64 | ⚪ No Trade (Neutral) | Watch | Low | 4/0 | - |
| 58 | **NASDAQ:ACGL** | **45** | -1.32 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 59 | **NYSE:SM** | **44** | -1.51 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 60 | **NYSE:FN** | **40** | -2.29 | ⚪ No Trade (Neutral) | Watch | Low | 5/0 | - |

---

## 🟢 Strong Long (4)

### NASDAQ:AMKR

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.74 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Amkor Technology (AMKR) Lands Nvidia Deal As Investors Ask If The Stoc
- 🟢 [M&A|w2.45] Nvidia Partnership Gets Amkor Technology (AMKR) Stock Trending: Here's
- 🟢 [M&A|w2.45] AMKR Stock Soars 12% After-Hours — NVIDIA And Amkor Partner In $1.5B D

**📉 Bearish Factors:**
- 🔴 [Industry|w0.7] Amkor Technology (AMKR) Declines More Than Market: Some Information fo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-25 | Industry | 🟢 +1 | 1.01 | Finnhub | Amkor Technology (AMKR) Stock Trades At A Discount Even Afte |
| 2026-07-25 | M&A | 🟢 +1 | 3.53 | Finnhub | Amkor Technology (AMKR) Lands Nvidia Deal As Investors Ask I |
| 2026-07-23 | M&A | 🟢 +1 | 2.45 | Finnhub | Nvidia Partnership Gets Amkor Technology (AMKR) Stock Trendi |
| 2026-07-23 | M&A | 🟢 +1 | 2.45 | Finnhub | AMKR Stock Soars 12% After-Hours — NVIDIA And Amkor Partner  |
| 2026-07-23 | Industry | 🔴 -1 | 0.7 | Finnhub | Amkor Technology (AMKR) Declines More Than Market: Some Info |

---

### NYSE:MMM

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.86 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] 3M (MMM) Teams Up With Microsoft To Bring Optical Tech Into Azure AI D
- 🟢 [Earnings|w1.91] 3M Raised Guidance and Pointed to AI Partnerships After Beating Estima
- 🟢 [Analyst Action|w1.21] Jim Cramer Called 3M Company (NYSE:MMM) “Easy Money” As Earnings Hit T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-26 | Industry | 🟢 +1 | 2.98 | Finnhub | 3M (MMM) Teams Up With Microsoft To Bring Optical Tech Into  |
| 2026-07-25 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Jim Cramer Called 3M Company (NYSE:MMM) “Easy Money” As Earn |
| 2026-07-22 | Earnings | 🟢 +1 | 1.91 | Finnhub | 3M Raised Guidance and Pointed to AI Partnerships After Beat |
| 2026-07-22 | Earnings | 🟢 +1 | 0.76 | Finnhub | MMM Q2 Earnings Call Shows It is Leaning Into Momentum |
| 2026-07-21 | Earnings | ⚪  0 | 0.5 | Seeking Al | 3M Company (MMM) Q2 2026 Earnings Call Transcript |

---

### NYSE:ENVA

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.49 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Enova International (NYSE:ENVA) Strong Earnings Beat Sparks After-Hour
- 🟢 [Earnings|w2.27] Enova International, Inc. (ENVA) Q2 2026 Earnings Call Transcript
- 🟢 [Earnings|w1.95] Enova International, Inc. (ENVA) Q2 2026 Earnings Call Transcript

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-24 | Earnings | 🟢 +1 | 1.95 | Seeking Al | Enova International, Inc. (ENVA) Q2 2026 Earnings Call Trans |
| 2026-07-23 | Earnings | 🟢 +1 | 2.27 | Finnhub | Enova International (NYSE:ENVA) Strong Earnings Beat Sparks  |
| 2026-07-23 | Earnings | 🟢 +1 | 2.27 | Finnhub | Enova International, Inc. (ENVA) Q2 2026 Earnings Call Trans |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Samsung Wins $200 Billion Order to Supply Chips to Broadcom
- 🟢 [Industry|w1.8] Samsung nabs $200B chip deal with Broadcom
- 🟢 [Analyst Action|w1.01] I Won’t Stop Buying Broadcom Until It Reaches This Point

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.6] Broadcom Might Be Flying Too Close To The Sun

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-25 | Industry | 🟢 +1 | 2.52 | Finnhub | Samsung Wins $200 Billion Order to Supply Chips to Broadcom |
| 2026-07-25 | Industry | 🟢 +1 | 1.8 | Seeking Al | Samsung nabs $200B chip deal with Broadcom |
| 2026-07-24 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | I Won’t Stop Buying Broadcom Until It Reaches This Point |
| 2026-07-24 | Analyst Action | 🟢 +1 | 0.72 | Seeking Al | Broadcom: Don't Let The Recent AI Meltdown Go To Waste |
| 2026-07-23 | Analyst Action | 🟢 +1 | 0.6 | Seeking Al | Broadcom: The Dip Won't Last Long, Great Opportunity To Own  |
| 2026-07-23 | Analyst Action | 🔴 -1 | 0.6 | Seeking Al | Broadcom Might Be Flying Too Close To The Sun |
| 2026-07-22 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Broadcom: Why We Keep Loading Up At ATHs |

---

## 🟢 Mid Long (5)

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.52] Nvidia to invest $1B in Naver to boost South Korea AI factory infrastr
- 🟢 [Industry|w1.19] SpaceX vs. Nvidia: Which Trillion-Dollar Artificial Intelligence (AI) 
- 🟢 [Analyst Action|w0.5] Nvidia: The Dividend Growth Stock Masquerading As A Growth Company

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] My 3 Favorite AI Stocks to Buy During the Chip Sell-Off, and Why Nvidi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-26 | Industry | 🔴 -1 | 1.19 | Finnhub | My 3 Favorite AI Stocks to Buy During the Chip Sell-Off, and |
| 2026-07-26 | Industry | 🟢 +1 | 1.19 | Finnhub | SpaceX vs. Nvidia: Which Trillion-Dollar Artificial Intellig |
| 2026-07-25 | M&A | 🟢 +1 | 2.52 | Seeking Al | Nvidia to invest $1B in Naver to boost South Korea AI factor |
| 2026-07-22 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Nvidia: The Dividend Growth Stock Masquerading As A Growth C |
| 2026-07-21 | Industry | ⚪  0 | 0.5 | Seeking Al | Nvidia: Jensen Huang's $0 Billion Strategy |
| 2026-07-21 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Nvidia: The Vera Edge And The Poison Pill Of Circular Financ |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Seeking Al | Nvidia's Second Act Is Physical AI |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 3.97 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] Ciena (CIEN) Earnings Outlook Improves, Is It Still 28% Undervalued?
- 🟢 [Analyst Action|w1.51] Are Computer and Technology Stocks Lagging  Ciena (CIEN) This Year?
- 🟢 [Analyst Action|w0.7] Ciena Corp. (NYSE:CIEN) Nears Perfect Score on Navellier’s Eight Pilla

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Ciena (CIEN) Earnings Outlook Improves, Is It Still 28% Unde |
| 2026-07-22 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Ciena Corp. (NYSE:CIEN) Nears Perfect Score on Navellier’s E |
| 2026-07-21 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Are Computer and Technology Stocks Lagging  Ciena (CIEN) Thi |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.25 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] TTM Technologies (TTMI) to Report Q2 Results: Wall Street Expects Earn
- 🟢 [Analyst Action|w0.84] TTM Technologies (TTMI) Stock May Be 21% Undervalued As AI Demand Buil
- 🟢 [Industry|w0.5] Why Is TTM Technologies (TTMI) Stock Soaring Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-23 | Industry | ⚪  0 | 0.5 | Finnhub | TTM Technologies (TTMI) Following Farnborough Buzz Is The AI |
| 2026-07-23 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | TTM Technologies (TTMI) Stock May Be 21% Undervalued As AI D |
| 2026-07-22 | Industry | ⚪  0 | 0.5 | Finnhub | How Investors May Respond To TTM Technologies (TTMI) Showcas |
| 2026-07-22 | Earnings | 🟢 +1 | 1.91 | Finnhub | TTM Technologies (TTMI) to Report Q2 Results: Wall Street Ex |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Finnhub | Why Is TTM Technologies (TTMI) Stock Soaring Today |
| 2026-07-20 | Industry | ⚪  0 | 0.5 | Finnhub | TTMI vs. UCTT: Which AI Hardware Supplier is a Smarter Inves |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.86 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] Is Lumentum Holdings (LITE) Expensive Following Barclays Upgrade And E
- 🟢 [Analyst Action|w0.6] Why Lumentum (LITE) is Poised to Beat Earnings Estimates Again
- 🟢 [Industry|w0.5] COHR, AAOI, LITE, POET: Photonic Stocks Join Google Capex-Fueled AI Ra

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-23 | Industry | 🟢 +1 | 0.5 | Finnhub | COHR, AAOI, LITE, POET: Photonic Stocks Join Google Capex-Fu |
| 2026-07-22 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Is Lumentum Holdings (LITE) Expensive Following Barclays Upg |
| 2026-07-21 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Why Lumentum (LITE) is Poised to Beat Earnings Estimates Aga |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.26] Eaton (ETN) Upgraded to Buy: What Does It Mean for the Stock?
- 🟢 [Industry|w0.7] Eaton (ETN) Rises As Market Takes a Dip: Key Facts
- 🟢 [Industry|w0.5] How Investors May Respond To Eaton (ETN) Expanding Its “Home as a Grid

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-24 | Earnings | ⚪  0 | 1.09 | Finnhub | Eaton (ETN) Reports Next Week: Wall Street Expects Earnings  |
| 2026-07-23 | Industry | 🟢 +1 | 0.7 | Finnhub | Eaton (ETN) Rises As Market Takes a Dip: Key Facts |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Finnhub | How Investors May Respond To Eaton (ETN) Expanding Its “Home |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Opens U.K. Aerospace Additive Manufacturing Cent |
| 2026-07-21 | Industry | ⚪  0 | 0.5 | Finnhub | Can Eaton (ETN) Justify Its Valuation On Data Center Orders  |
| 2026-07-21 | Industry | ⚪  0 | 0.5 | Finnhub | Eaton (ETN) Stock Looks Expensive On Cash Flow But Cheap On  |
| 2026-07-20 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Eaton (ETN) Upgraded to Buy: What Does It Mean for the Stock |
| 2026-07-20 | Industry | ⚪  0 | 0.5 | Finnhub | VWDRY vs. ETN: Which Stock Should Value Investors Buy Now? |

---

## ⚠️ Overheated (2)

### NASDAQ:VICR

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 10.11 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Vicor (VICR) Q2 2026 Earnings Call Transcript
- 🟢 [Earnings|w1.64] Vicor Corp (VICR) Q2 2026 Earnings Call Highlights: Strong Revenue Gro
- 🟢 [Earnings|w1.64] Vicor Corporation (VICR) Q2 2026 Earnings Call Transcript

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Earnings | 🟢 +1 | 1.91 | Finnhub | Vicor (VICR) Q2 2026 Earnings Call Transcript |
| 2026-07-21 | Earnings | 🟢 +1 | 1.64 | Finnhub | Vicor Corp (VICR) Q2 2026 Earnings Call Highlights: Strong R |
| 2026-07-21 | Earnings | 🟢 +1 | 1.64 | Finnhub | Vicor Corporation (VICR) Q2 2026 Earnings Call Transcript |
| 2026-07-21 | Earnings | 🟢 +1 | 1.64 | Finnhub | Vicor beats second-quarter expectations as backlog more than |
| 2026-07-21 | Earnings | 🟢 +1 | 1.64 | Finnhub | Vicor Corporation (NASDAQ:VICR) Earnings Beat Points to a Hi |
| 2026-07-21 | Earnings | 🟢 +1 | 1.64 | Finnhub | Vicor (VICR) Surpasses Q2 Earnings and Revenue Estimates |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 8.1 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Did Vertiv’s Expanded AI Cooling Builds And Higher EPS Guidance Just S
- 🟢 [Analyst Action|w2.1] Keybanc Initiates Coverage of Vertiv Holdings (VRT) with Overweight Re
- 🟢 [Industry|w1.01] Vertiv Holdings (NYSE:VRT): An Affordable Growth Stock with Strong Ear

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-25 | Earnings | 🟢 +1 | 3.28 | Finnhub | Did Vertiv’s Expanded AI Cooling Builds And Higher EPS Guida |
| 2026-07-25 | Industry | 🟢 +1 | 1.01 | Finnhub | Vertiv Holdings (NYSE:VRT): An Affordable Growth Stock with  |
| 2026-07-24 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Forget  AI Chips and the Mag 7: Buy AI Infrastructure Stocks |
| 2026-07-24 | Industry | ⚪  0 | 0.84 | Finnhub | Vertiv to Report Q2 Earnings: Buy, Sell, or Hold the VRT Sto |
| 2026-07-24 | Industry | ⚪  0 | 0.84 | Finnhub | Collect 22% On VRT Stock Now, And Still Keep 25% Of Upside |
| 2026-07-23 | Industry | 🟢 +1 | 0.7 | Finnhub | 3 Reasons Why Growth Investors Shouldn't Overlook Vertiv (VR |
| 2026-07-23 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Keybanc Initiates Coverage of Vertiv Holdings (VRT) with Ove |
| 2026-07-23 | Industry | ⚪  0 | 0.7 | Finnhub | Is Vertiv Holdings Co (VRT) Still Undervalued As Its Rally C |

---

## ⚪ Watch / Neutral (49)

### NYSE:LTC
- Score: 59/100 | raw: 2.06 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 58/100 | raw: 1.89 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MRVL
- Score: 57/100 | raw: 1.68 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:COHR
- Score: 57/100 | raw: 1.7 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 57/100 | raw: 1.61 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SN
- Score: 56/100 | raw: 1.36 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 55/100 | raw: 1.09 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIS
- Score: 55/100 | raw: 1.26 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 54/100 | raw: 0.84 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HUN
- Score: 54/100 | raw: 0.91 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:WWD
- Score: 53/100 | raw: 0.76 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ON
- Score: 53/100 | raw: 0.81 | News: 6 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CSW
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DELL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SO
- Score: 50/100 | raw: -0.1 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BHRB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:VSH
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ELTK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MSFT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:AMD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:CBRS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CLS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:JEWL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ASIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WLK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LYB
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:JCI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:VNET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:EQIX
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:DGXX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRWV
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:IREN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:APLD
（内容由AI生成，仅供参考）
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:GLW
- Score: 49/100 | raw: -0.25 | News: 5 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:MU
- Score: 48/100 | raw: -0.5 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:SMCI
- Score: 47/100 | raw: -0.84 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:WDC
- Score: 47/100 | raw: -0.64 | News: 4 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:ACGL
- Score: 45/100 | raw: -1.32 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:SM
- Score: 44/100 | raw: -1.51 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:FN
- Score: 40/100 | raw: -2.29 | News: 5 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-07-26T12:27:40.031Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-flash*
*（内容由AI生成，仅供参考）*
