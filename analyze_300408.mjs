import { connect, disconnect } from './src/connection.js';
import * as chart from './src/core/chart.js';
import * as data from './src/core/data.js';

async function analyze() {
    await connect();
    console.log('Connected to TV\n');

    const symbol = 'SZSE:300408';
    const timeframes = ['1D', '4H', '1H', '30', '1'];

    // Switch to symbol
    console.log('Switching to', symbol, '...');
    await chart.setSymbol({ symbol });
    await new Promise(r => setTimeout(r, 2000));

    for (const tf of timeframes) {
        console.log(`\n${'='.repeat(60)}`);
        console.log(`TIMEFRAME: ${tf}`);
        console.log('='.repeat(60));

        await chart.setTimeframe({ timeframe: tf });
        await new Promise(r => setTimeout(r, 1500));

        try {
            // Get OHLCV
            const ohlcv = await data.getOHLCV({ count: tf === '1' ? 60 : tf === '30' ? 30 : 60, summary: true });
            console.log('OHLCV Summary:', JSON.stringify(ohlcv?.summary || ohlcv, null, 1));
        } catch(e) { console.log('OHLCV error:', e.message); }

        try {
            // Get quote
            const q = await data.getQuote();
            console.log('Quote:', JSON.stringify({ last: q?.last, open: q?.open, high: q?.high, low: q?.low, volume: q?.volume, change: q?.change }, null, 1));
        } catch(e) { console.log('Quote error:', e.message); }

        try {
            // Get study values
            const sv = await data.getStudyValues();
            if (sv?.studies) {
                const summary = {};
                for (const [name, vals] of Object.entries(sv.studies)) {
                    if (typeof vals === 'object' && vals !== null) {
                        summary[name] = Object.fromEntries(
                            Object.entries(vals).filter(([k]) => !['plot', 'histogram'].includes(k))
                        );
                    }
                }
                console.log('Indicators:', JSON.stringify(summary, null, 1));
            }
        } catch(e) { console.log('Study error:', e.message); }

        try {
            // Get pine lines
            const lines = await data.getPineLines({});
            if (lines?.studies) {
                for (const [name, s] of Object.entries(lines.studies)) {
                    if (s.lines?.length) {
                        console.log(`${name} lines:`, s.lines.slice(0, 10).map(l => ({ price: l.price, text: l.text })));
                    }
                }
            }
        } catch(e) { console.log('Lines error:', e.message); }

        try {
            // Get pine labels
            const labels = await data.getPineLabels({});
            if (labels?.studies) {
                for (const [name, s] of Object.entries(labels.studies)) {
                    if (s.labels?.length) {
                        console.log(`${name} labels:`, s.labels.slice(0, 15).map(l => ({ price: l.price, text: l.text })));
                    }
                }
            }
        } catch(e) { console.log('Labels error:', e.message); }
    }

    await disconnect();
    console.log('\nDone.');
}

analyze().catch(e => { console.error(e); process.exit(1); });
