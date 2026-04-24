import * as pine from './src/core/pine.js';

const SOURCE = `//@version=6
strategy(
     "A Share SQZMOM PRO v9 (Daily)",
     overlay=true,
     initial_capital=100000,
     pyramiding=0,
     default_qty_type=strategy.fixed,
     commission_type=strategy.commission.percent,
     commission_value=0.03,
     calc_on_every_tick=false,
     process_orders_on_close=false)

bbLen   = input.int(20,"BB Length")
bbMult  = input.float(2.0)
kcLen   = input.int(20,"KC Length")
kcMult  = input.float(1.5)
emaFast = input.int(60,"Trend EMA")
emaSlow = input.int(200,"Market EMA")
riskPct  = input.float(1.0,"Risk %")
minScore = input.int(60,"Min Score")
atrLen  = input.int(14,"ATR Length")
atrMult = input.float(2.0,"ATR Mult")
slipATRmult     = input.float(0.1,"ATR Slippage")
cooldownBars    = input.int(3, "Cooldown Bars After Exit")
minSqzBars      = input.int(3, "Min SQZ Bars")
maxSqzBars      = input.int(20,"Max SQZ Bars")
tp1Mult         = input.float(1.5,"TP1 ATR Mult")
tp2Mult         = input.float(3.0,"TP2 ATR Mult")
atrMultAfterTP1 = input.float(1.5,"ATR Mult After TP1")

f_sqz(src)=>
    basis   = ta.sma(src, bbLen)
    dev     = bbMult * ta.stdev(src, bbLen)
    upperBB = basis + dev
    lowerBB = basis - dev
    ma      = ta.sma(src, kcLen)
    kcATR   = ta.atr(kcLen)
    upperKC = ma + kcATR * kcMult
    lowerKC = ma - kcATR * kcMult
    bb_width = upperBB - lowerBB
    kc_width = upperKC - lowerKC
    sqzOff   = bb_width < (kc_width * 0.8)
    mid = (ta.highest(high, kcLen) + ta.lowest(low, kcLen)) / 2
    val = ta.linreg(src - mid, kcLen, 0)
    [sqzOff, val]

[sqz, val] = f_sqz(close)

var int sqzCount = 0
sqzCount := sqz ? sqzCount + 1 : 0
validCompression = sqzCount >= minSqzBars and sqzCount <= maxSqzBars

ema20  = ta.ema(close, 20)
ema60  = ta.ema(close, emaFast)
ema200 = ta.ema(close, emaSlow)
trendUp = ema20 > ema60 and ema60 > ema200 and close > ema20

volumeMA20    = ta.sma(volume, 20)
volOK_primary = volume > volumeMA20 * 1.0
vol20High       = ta.highest(volume, 20)
volOK_secondary = (volume > vol20High * 0.5) and sqz and trendUp
volOK = volOK_primary or volOK_secondary

limitUp        = (close - close[1]) / close[1] > 0.095
noTradeLimitUp = limitUp and close == high
isST           = str.contains(syminfo.ticker, "ST")
volume5        = ta.sma(volume, 5)
oneLine        = (high == low) and volume < volume5
limitUpCount10 = 0
for i = 0 to 10
    limitUpCount10 += (close[i] - close[i+1]) / close[i+1] > 0.095 ? 1 : 0
notTooHot = limitUpCount10 <= 3
bigMove = (close - close[5]) / close[5] > 0.30
notOverExtended = notTooHot and not bigMove
volMA20   = ta.sma(volume, 20)
hhv5      = ta.highest(high, 5)
fakeBreak = high > hhv5[1] and close < open and volume > volMA20 and (high - close) / (high - low) > 0.6
validStock = not noTradeLimitUp and not isST and not oneLine and notOverExtended

valRising = val > val[1]
score = 0
score += sqz and val > 0      ? 30 : 0
score += validCompression      ? 15 : 0
score += ta.crossover(val, 0) ? 20 : 0
score += volOK                 ? 15 : 0
score += trendUp               ? 10 : 0
score += not fakeBreak         ? 10 : 0
canTrade = score >= minScore

atr      = ta.atr(atrLen)
slippage = atr * slipATRmult
stopDist = atr * atrMult
risk = strategy.equity * riskPct / 100
qty  = math.max(1, math.floor(risk / stopDist))

var float  entryPrice        = na
var float  tp1Price          = na
var float  tp2Price          = na
var float  highestSinceEntry = na
var bool   tookTP1           = false
var string exitReason        = ""
var bool   inPosition        = false
var int    barsSinceExit     = 0

if strategy.position_size > 0
    highestSinceEntry := na(highestSinceEntry) ? high : math.max(highestSinceEntry, high)
else
    highestSinceEntry := na
    barsSinceExit += 1

float curMult = tookTP1 ? atrMultAfterTP1 : atrMult
atrTrailRaw   = highestSinceEntry - atr * curMult
safeStop      = na(atrTrailRaw) ? (na(entryPrice) ? close - stopDist : entryPrice - stopDist) : atrTrailRaw

longCond =
     trendUp          and
     canTrade         and
     validStock       and
     validCompression and
     not fakeBreak    and
     barstate.isconfirmed and
     barsSinceExit >= cooldownBars and
     strategy.position_size == 0

if longCond
    entryPrice        := close + slippage
    tp1Price          := entryPrice + stopDist * tp1Mult
    tp2Price          := entryPrice + stopDist * tp2Mult
    highestSinceEntry := high
    tookTP1           := false
    exitReason        := ""
    inPosition        := true
    barsSinceExit     := 0
    strategy.entry("LONG", strategy.long, qty)

if strategy.position_size > 0
    highestSinceEntry := math.max(highestSinceEntry, high)
    if not tookTP1 and high >= tp1Price
        tookTP1 := true
        strategy.close("LONG", "TP1", qty_percent = 50)
    if exitReason == ""
        float trailStop = highestSinceEntry - atr * (tookTP1 ? atrMultAfterTP1 : atrMult)
        if close <= trailStop
            exitReason := "ATR"
        else if close < ema20
            exitReason := "EMA20"
        else if high >= tp2Price
            exitReason := "TP2"
    if exitReason != ""
        strategy.close("LONG", exitReason)
        inPosition := false

plot(safeStop, "ATR Trail", color=color.yellow)
plot(ema20,    "EMA20",     color=color.red)
plot(ema60,    "EMA60",     color=color.blue, linewidth=1)
plot(ema200,   "EMA200",    color=color.gray, linewidth=1)
plotchar(score, "Score", "⭐", location.top)
string info = "trendUp:" + str.tostring(trendUp) + " sqz:" + str.tostring(sqz) + " " + (score < minScore ? str.tostring(score) + " WAIT" : str.tostring(score) + " LONG")
color statusColor = score < minScore ? color.red : color.green
var table panel = table.new(position.top_right, 1, 1)
table.cell(panel, 0, 0, info, bgcolor=statusColor, text_color=color.white)`;

async function main() {
  // Step 1: pine_set_source
  console.log('=== STEP 1: pine_set_source ===');
  try {
    const r1 = await pine.setSource({ source: SOURCE });
    console.log(JSON.stringify(r1, null, 2));
  } catch (e) {
    console.error('pine_set_source error:', e.message);
    process.exit(1);
  }

  // Step 2: pine_smart_compile
  console.log('\n=== STEP 2: pine_smart_compile ===');
  try {
    const r2 = await pine.smartCompile();
    console.log(JSON.stringify(r2, null, 2));
  } catch (e) {
    console.error('pine_smart_compile error:', e.message);
  }

  // Step 3: pine_get_errors
  console.log('\n=== STEP 3: pine_get_errors ===');
  try {
    const r3 = await pine.getErrors();
    console.log(JSON.stringify(r3, null, 2));
  } catch (e) {
    console.error('pine_get_errors error:', e.message);
  }

  process.exit(0);
}

main();
