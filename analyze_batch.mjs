import { connect } from './src/connection.js';

const CODES = ['002384','600360','002056','002156','603986','600160','600487','603203','300438','300054','600114','600549','300037','002916','600176','000657','300408','600667','002463','000988'];
const SYMS = CODES.map(c => (c.startsWith('6') ? 'SSE:' : 'SZSE:') + c);

async function main() {
  const { client, target } = await connect();
  try {
    await client.send('Runtime.enable', { targetId: target.id });

    for (const sym of SYMS) {
      try {
        // Switch symbol
        const setRes = await client.send('Runtime.evaluate', {
          targetId: target.id,
          expression: `window.TradingViewApi.chart().setSymbol("${sym}")`
        });
        await new Promise(r => setTimeout(r, 5000));

        // Get quote
        const qRes = await client.send('Runtime.evaluate', {
          targetId: target.id,
          expression: `JSON.stringify((()=>{
            try {
              const w = window.TradingViewApi.chart();
              return {last:w.lastPrice(),prevClose:w.prevClose ? w.prevClose() : null};
            } catch(e) { return {err:e.message}; }
          })())`
        });
        const quote = JSON.parse(qRes.result?.value || '{}');

        // Get daily bars last 5
        const bRes = await client.send('Runtime.evaluate', {
          targetId: target.id,
          expression: `JSON.stringify((()=>{
            try {
              const b = window.TradingViewApi.chart().getBars('D', 10);
              return b ? b.slice(-5).map(x=>({c:x.close,h:x.high,l:x.low,v:x.volume})) : [];
            } catch(e) { return []; }
          })())`
        });
        const bars = JSON.parse(bRes.result?.value || '[]');

        // Get studies
        const sRes = await client.send('Runtime.evaluate', {
          targetId: target.id,
          expression: `JSON.stringify((()=>{
            try {
              const s = window.TradingViewApi.chart().getStudies();
              if (!s) return [];
              return s.map(x=>{
                const v = x.values || {};
                return {
                  name: x.name,
                  ema20: v.EMA20, rsi: v.RSI, adx: v.ADX, atr: v.ATR,
                  sqzScore: v.Score, macd: v.MACD, bbUpper: v.Upper, bbLower: v.Lower, bbBasis: v.Basis
                };
              });
            } catch(e) { return []; }
          })())`
        });
        const studies = JSON.parse(sRes.result?.value || '[]');

        const closes = bars.map(b => b.c).filter(Boolean);
        const chg5d = closes.length >= 2 ? ((closes[closes.length-1] - closes[0]) / closes[0] * 100).toFixed(1) : '-';
        const lastClose = closes[closes.length-1] || '-';

        // Find useful indicator data
        let ema20 = '-', rsi = '-', adx = '-', sqz = '-';
        for (const s of studies) {
          if (s.ema20) ema20 = Number(s.ema20).toFixed(2);
          if (s.rsi) rsi = Number(s.rsi).toFixed(1);
          if (s.adx) adx = s.adx;
          if (s.sqzScore) sqz = s.sqzScore;
        }

        const code = sym.replace('SSE:','').replace('SZSE:','');
        console.log(`${code}\t${String(lastClose).padStart(10)}\t${String(chg5d+'%').padStart(8)}\tRSI=${String(rsi).padStart(5)}\tADX=${String(adx).padStart(5)}\tEMA20=${String(ema20).padStart(10)}\tSQZ=${String(sqz).padStart(4)}`);
      } catch(e) {
        console.log(`${sym}\tERROR: ${e.message}`);
      }
    }
  } finally {
    await client.close();
  }
}

main().catch(e => { console.error('FATAL:', e.message); process.exit(1); });
