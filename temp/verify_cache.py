import os, json, glob, datetime
cache_dir = r'watchlist\.cache'
syms = ['SSE_600388','SSE_601665','SSE_601872','SSE_601899','SSE_603129','SSE_603162','SSE_603228','SSE_603259','SSE_603317','SSE_603629','SZSE_000333','SZSE_002245','SZSE_300017','SZSE_300903','SZSE_301345']
def load(sym, tf):
    p = os.path.join(cache_dir, f'ohlcv_{sym}_{tf}.json')
    if not os.path.exists(p): return None
    with open(p, 'r', encoding='utf-8') as f:
        return json.load(f)
def btime(t):
    return datetime.datetime.fromtimestamp(t, datetime.timezone(datetime.timedelta(hours=8))).strftime('%m-%d %H:%M')
print('=== 15只股票缓存状态验证 ===')
for sym in syms:
    d = load(sym, 'D')
    m = load(sym, '240')
    if not d: 
        print(f'{sym}: D cache missing'); continue
    db = d['bars']; dl = db[-1]; dp = db[-2]
    dchg = (dl['close']-dp['close'])/dp['close']*100
    # 60日高低点
    d60 = db[-60:]
    hi60 = max(x['high'] for x in d60); lo60 = min(x['low'] for x in d60)
    pos = (dl['close']-lo60)/(hi60-lo60)*100 if hi60!=lo60 else 50
    mline = ''
    if m:
        mb = m['bars']
        if mb and btime(mb[-1]['time']).startswith('08-21'):
            ml = mb[-1]
            mchg = (ml['close']-db[-1]['close'])/db[-1]['close']*100 if db else 0
            mline = f' 今日({btime(ml[\"time\"])[-5:]}) close={ml[\"close\"]} vs昨日={mchg:+.2f}%'
    print(f'{sym}: D最新={btime(dl[\"time\"])} close={dl[\"close\"]} chg={dchg:+.2f}% 60日区间位置={pos:.0f}%{mline}')
