#!/usr/bin/env node
/**
 * US Stock News Sentiment Quantitative Analysis → Tradeable Signals
 * Pipeline:
 *  1. Load us_selected.txt
 *  2. Fetch news in parallel (Yahoo Finance, Finnhub, MarketWatch, Seeking Alpha)
 *  3. Tag: type | sentiment (+1/0/-1) | weight (1~5)
 *  4. Sentiment Score = Σ(sentiment × weight)
 *  5. Detect patterns: trend/reversal/overheated/pre-priced/false positive
 *  6. Output: Long / Short / No Trade + reason + strategy type
 */

import { readFileSync, writeFileSync } from 'fs';
import { searchUSNews } from './src/core/usNews.js';

const SYMBOLS_FILE = './watchlist/us_selected.txt';
const OUTPUT_MD    = './watchlist/us_news_signals.md';
const DAYS_BACK    = 7;
const NEWS_COUNT   = 20;
const BATCH_SIZE   = 4;

const today  = new Date('2026-04-30');
const cutoff = new Date(today);
cutoff.setDate(today.getDate() - DAYS_BACK);
const cutoffStr = cutoff.toISOString().split('T')[0];
const todayStr  = today.toISOString().split('T')[0];

// ─── News Type Classification ─────────────────────────────────────────────────
const TYPE_RULES = [
  { type: 'Black Swan', re: /fraud|lawsuit|probe|recall|fine|penalty|SEC|DOJ|subpoena|bankruptcy|default|scandal|restatement|investigation|violation|delisting/i },
  { type: 'Earnings',   re: /earnings|revenue|profit|EPS|guidance|beat|miss|quarterly|annual report|outlook|forecast|margin|income|loss|results/i },
  { type: 'M&A',        re: /acqui|merger|buyout|takeover|deal|divest|spin.?off|joint venture|partnership|stake|strategic alliance/i },
  { type: 'Policy',     re: /Fed|Federal Reserve|rate|tariff|regulation|legislation|congress|government|FDA|approval|FTC|antitrust|sanctions|subsidy|trade/i },
  { type: 'Rumor',      re: /reportedly|sources say|could be|may be|might|expected to|rumored|speculation|unconfirmed|people familiar/i },
  { type: 'Industry',   re: /sector|industry|market share|competitor|supply chain|AI|semiconductor|chip|cloud|EV|biotech|healthcare|energy|fintech/i },
];

function classifyType(title) {
  title = title || '';
  for (const rule of TYPE_RULES) {
    if (rule.re.test(title)) return rule.type;
  }
  return 'Industry';
}

const BULLISH_RE = /beat|outperform|upgrade|strong|surge|rally|buy|bullish|positive|record|growth|profit|win|approval|authorized|raise guidance|above.?expect|exceed|expand|breakout|award|milestone|boost|record high/i;
const BEARISH_RE = /miss|underperform|downgrade|weak|drop|plunge|fall|sell|bearish|negative|loss|decline|cut guidance|below.?expect|disappoint|probe|lawsuit|fraud|fine|penalty|layoff|restructure|warning|risk|concern|headwind/i;

function scoreSentiment(title, type) {
  title = title || '';
  if (type === 'Black Swan') return -1;
  if (BULLISH_RE.test(title)) return  1;
  if (BEARISH_RE.test(title)) return -1;
  return 0;
}

function calcWeight(item, newsType) {
  let w = 2;
  if (item.source === 'Seeking Alpha' || item.type === 'analysis') w += 1;
  if (item.source === 'Finnhub') w += 1;
  if (newsType === 'Earnings')    w += 1;
  if (newsType === 'Policy')      w += 1;
  if (newsType === 'M&A')         w += 2;
  if (newsType === 'Black Swan')  w += 2;
  if (newsType === 'Rumor')       w -= 1;
  return Math.max(1, Math.min(5, w));
}

function isRecent(dateStr) {
  dateStr = dateStr || '';
  if (!dateStr) return false;
  try {
    const d = new Date(dateStr.slice(0, 10));
    return d >= cutoff && d <= today;
  } catch { return false; }
}

function detectPatterns(tagged) {
  if (tagged.length === 0) return [];
  const sorted = [...tagged].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const half = Math.max(1, Math.floor(sorted.length / 2));
  const recent = sorted.slice(0, half);
  const older  = sorted.slice(half);
  const scoreOf = arr => arr.reduce((s, i) => s + i.sentiment * i.weight, 0);
  const recentScore = scoreOf(recent);
  const olderScore  = older.length ? scoreOf(older) : 0;
  const patterns = [];

  if (recentScore > 2 && olderScore >= 0)  patterns.push('Sentiment Strengthening UP (trend)');
  if (recentScore < -2 && olderScore <= 0) patterns.push('Sentiment Weakening DOWN (trend)');
  if (recentScore > 2 && olderScore < -1)  patterns.push('Bearish-to-Bullish Reversal (reversal)');
  if (recentScore < -2 && olderScore > 1)  patterns.push('Bullish-to-Bearish Reversal (reversal)');

  const posCount = tagged.filter(i => i.sentiment > 0).length;
  const negCount = tagged.filter(i => i.sentiment < 0).length;
  if (posCount >= 5 && negCount === 0) patterns.push('WARNING: Overheated Sentiment (one-sided bullish)');

  const rumorCount = tagged.filter(i => i.type === 'Rumor').length;
  if (tagged.length > 0 && rumorCount / tagged.length > 0.5 && recentScore > 0)
    patterns.push('WARNING: Rumor-Driven (false positive risk)');

  const hasFundamental = tagged.some(i => ['Earnings', 'Policy', 'M&A'].includes(i.type) && i.sentiment > 0);
  if (!hasFundamental && recentScore > 4)
    patterns.push('WARNING: Likely Pre-Priced (no hard catalyst)');

  const hasBlackSwan = tagged.some(i => i.type === 'Black Swan');
  if (hasBlackSwan && posCount > negCount)
    patterns.push('WARNING: Sentiment Divergence (black swan masked by noise)');

  return patterns;
}

function generateSignal(score, patterns, tagged) {
  const hasRisk      = patterns.some(p => p.startsWith('WARNING'));
  const hasBlackSwan = tagged.some(i => i.type === 'Black Swan' && i.sentiment < 0);

  if (hasBlackSwan) return {
    signal: 'RED No Trade / Short',
    strategy: 'Black swan risk — avoid until event clarity',
    suitableFor: 'Reversal (wait for bottom confirmation)',
    confidence: 'High',
  };

  if (score >= 8) {
    if (hasRisk) return {
      signal: 'WARN No Trade (Overheated)',
      strategy: 'Score very high but overheated/pre-priced — wait for pullback to buy dip',
      suitableFor: 'Buy Dip (wait for pullback)',
      confidence: 'Low (risk present)',
    };
    return {
      signal: 'GREEN Long (Strong)',
      strategy: 'Multiple bullish catalysts converging — strong fundamental + sentiment support',
      suitableFor: 'Momentum / Hold',
      confidence: 'High',
    };
  }

  if (score >= 4) {
    if (hasRisk) return {
      signal: 'WARN Long (Cautious)',
      strategy: 'Bullish lean but risk flags present — small position, tight stop',
      suitableFor: 'Buy Dip (small size)',
      confidence: 'Medium (risk present)',
    };
    return {
      signal: 'GREEN Long (Mid)',
      strategy: 'Positive sentiment flow — suitable for dip-buy or light momentum entry',
      suitableFor: 'Buy Dip / Light Momentum',
      confidence: 'Medium',
    };
  }

  if (score >= 1) return {
    signal: 'NEUTRAL No Trade (Weak Bullish)',
    strategy: 'Mildly positive, insufficient signal — watch for stronger catalyst',
    suitableFor: 'Watch',
    confidence: 'Low',
  };

  if (score >= -2) return {
    signal: 'NEUTRAL No Trade (Neutral)',
    strategy: 'No clear directional bias — stay flat',
    suitableFor: 'Watch',
    confidence: 'Low',
  };

  if (score >= -5) return {
    signal: 'RED No Trade / Avoid',
    strategy: 'Bearish lean — reduce exposure, wait for stabilization',
    suitableFor: 'Reversal (wait for stabilization)',
    confidence: 'Medium',
  };

  return {
    signal: 'RED Short / Avoid',
    strategy: 'Sustained bearish flow, multiple headwinds — exit or consider short',
    suitableFor: 'Reversal (wait for bottom)',
    confidence: 'High',
  };
}

async function analyzeStock(symbol) {
  const cleanSym = symbol.replace(/^(NASDAQ:|NYSE:|BATS:|CBOE:)/, '');
  process.stdout.write(`  [${symbol}] fetching...`);
  try {
    const result = await searchUSNews({ symbol: cleanSym, source: 'news', count: NEWS_COUNT });
    const allNews = result.news || [];
    const recent  = allNews.filter(n => isRecent(n.date));
    process.stdout.write(` -> ${recent.length} recent\n`);

    if (recent.length === 0) return {
      symbol, name: cleanSym, score: 0,
      signal: 'NEUTRAL No Trade (No Data)',
      strategy: 'No news in last 7 days', suitableFor: 'Watch', confidence: '-',
      patterns: [], tagged: [], positive_factors: [], negative_factors: [], news_count: 0,
    };

    const tagged = recent.map(item => {
      const type      = classifyType(item.title || '');
      const sentiment = scoreSentiment(item.title || '', type);
      const weight    = calcWeight(item, type);
      return { ...item, type, sentiment, weight };
    });

    const score    = tagged.reduce((s, i) => s + i.sentiment * i.weight, 0);
    const patterns = detectPatterns(tagged);
    const { signal, strategy, suitableFor, confidence } = generateSignal(score, patterns, tagged);

    const positive_factors = tagged
      .filter(i => i.sentiment > 0).sort((a, b) => b.weight - a.weight).slice(0, 3)
      .map(i => `[${i.type}|W:${i.weight}] ${(i.title || '').slice(0, 70)}`);

    const negative_factors = tagged
      .filter(i => i.sentiment < 0).sort((a, b) => b.weight - a.weight).slice(0, 3)
      .map(i => `[${i.type}|W:${i.weight}] ${(i.title || '').slice(0, 70)}`);

    return {
      symbol, name: cleanSym,
      score: Math.round(score * 10) / 10,
      signal, strategy, suitableFor, confidence, patterns,
      positive_factors, negative_factors,
      tagged: tagged.slice(0, 8),
      news_count: recent.length,
    };
  } catch (err) {
    process.stdout.write(` ERR ${err.message}\n`);
    return {
      symbol, name: cleanSym, score: 0,
      signal: 'NEUTRAL No Trade (Fetch Failed)', strategy: err.message,
      suitableFor: '-', confidence: '-', patterns: [], tagged: [],
      positive_factors: [], negative_factors: [], news_count: 0,
    };
  }
}

function formatDetail(r) {
  const lines = [];
  const h = s => lines.push(s);
  const sc = r.score >= 0 ? `+${r.score}` : String(r.score);
  const sigIcon = r.signal.startsWith('GREEN') ? '🟢' : r.signal.startsWith('RED') ? '🔴' : r.signal.startsWith('WARN') ? '⚠️' : '⚪';
  const sigText = r.signal.replace(/^(GREEN|RED|WARN|NEUTRAL)\s+/, '');

  h(`### ${r.symbol}`);
  h('');
  h('| Metric | Detail |');
  h('|--------|--------|');
  h(`| Sentiment Score | **${sc}** |`);
  h(`| Trading Signal | **${sigIcon} ${sigText}** |`);
  h(`| Strategy | ${r.strategy} |`);
  h(`| Suitable For | ${r.suitableFor} |`);
  h(`| Confidence | ${r.confidence} |`);
  h(`| News Analyzed | ${r.news_count} items |`);
  if ((r.patterns ?? []).length) {
    h(`| Patterns | ${r.patterns.join(' / ')} |`);
  }
  h('');
  if (r.positive_factors && r.positive_factors.length) {
    h('**📈 Bullish Factors:**');
    r.positive_factors.forEach(f => h(`- 🟢 ${f}`));
    h('');
  }
  if (r.negative_factors && r.negative_factors.length) {
    h('**📉 Bearish Factors:**');
    r.negative_factors.forEach(f => h(`- 🔴 ${f}`));
    h('');
  }
  if (r.tagged && r.tagged.length) {
    h('**📰 Key News Items (tagged):**');
    h('');
    h('| Date | Type | Sent | Wt | Headline |');
    h('|------|------|------|----|----------|');
    r.tagged.forEach(item => {
      const emo   = item.sentiment > 0 ? '🟢 +1' : item.sentiment < 0 ? '🔴 -1' : '⚪  0';
      const title = (item.title || '').slice(0, 65).replace(/\|/g, ' ');
      h(`| ${item.date || '-'} | ${item.type} | ${emo} | ${item.weight} | ${title} |`);
    });
    h('');
  }
  h('---');
  h('');
  return lines.join('\n');
}

function buildReport(results) {
  const lines = [];
  const h = s => lines.push(s);

  h('# US Stock News Sentiment Analysis - Tradeable Signals');
  h(`**Analysis Date:** ${todayStr}  |  **News Window:** ${cutoffStr} ~ ${todayStr}`);
  h(`**Stock Pool:** us_selected.txt (${results.length} stocks)`);
  h('');
  h('## Summary Overview (sorted by Sentiment Score)');
  h('');
  h('| # | Ticker | Score | Signal | Suitable For | Confidence | Key Pattern |');
  h('|---|--------|-------|--------|--------------|------------|-------------|');
  results.forEach((r, idx) => {
    const sc  = r.score >= 0 ? `+${r.score}` : String(r.score);
    const sigIcon = r.signal.startsWith('GREEN') ? '🟢' : r.signal.startsWith('RED') ? '🔴' : r.signal.startsWith('WARN') ? '⚠️' : '⚪';
    const sigShort = r.signal.replace(/^(GREEN|RED|WARN|NEUTRAL)\s+/, '');
    const pat = (r.patterns ?? []).map(p => p.replace(/^WARNING:\s*/, '')).slice(0, 1).join('') || '-';
    h(`| ${idx+1} | **${r.symbol}** | **${sc}** | ${sigIcon} ${sigShort} | ${r.suitableFor || '-'} | ${r.confidence || '-'} | ${pat} |`);
  });
  h('');
  h('---');
  h('');

  const longStrong   = results.filter(r => r.signal.includes('Long (Strong)'));
  const longMid      = results.filter(r => r.signal.includes('Long (Mid)'));
  const longCautious = results.filter(r => r.signal.includes('Long (Cautious)'));
  const overheated   = results.filter(r => r.signal.includes('Overheated'));
  const risks        = results.filter(r =>
    (r.patterns ?? []).some(p => p.startsWith('WARNING')) && !r.signal.includes('Overheated')
  );
  const shorts  = results.filter(r => r.signal.includes('Short') || r.signal.includes('Avoid'));
  const neutral = results.filter(r => r.signal.startsWith('NEUTRAL'));

  if (longStrong.length) {
    h(`## 🟢 Strong Long Signals (${longStrong.length}) — Priority Watch`);
    h('');
    longStrong.forEach(r => h(formatDetail(r)));
  }
  if (longMid.length) {
    h(`## 🟢 Mid Long Signals (${longMid.length}) — Light Position Entry`);
    h('');
    longMid.forEach(r => h(formatDetail(r)));
  }
  if (longCautious.length) {
    h(`## 🟡 Cautious Long Signals (${longCautious.length}) — Small Size + Tight Stop`);
    h('');
    longCautious.forEach(r => h(formatDetail(r)));
  }
  if (overheated.length) {
    h(`## ⚠️ Overheated Warning (${overheated.length}) — Do Not Chase`);
    h('');
    overheated.forEach(r => h(formatDetail(r)));
  }
  if (risks.length) {
    h(`## ⚠️ Risk Pattern Detected (${risks.length}) — Verify Signal Authenticity`);
    h('');
    risks.forEach(r => h(formatDetail(r)));
  }
  if (shorts.length) {
    h(`## 🔴 Avoid / Short Signals (${shorts.length})`);
    h('');
    shorts.forEach(r => h(formatDetail(r)));
  }
  if (neutral.length) {
    h(`## ⚪ Watch / Neutral (${neutral.length})`);
    h('');
    neutral.forEach(r => {
      const sigText = r.signal.replace(/^NEUTRAL\s+/, '');
      h(`### ${r.symbol}`);
      h(`- Score: ${r.score} | News: ${r.news_count} items | ${r.strategy}`);
      if ((r.patterns ?? []).length) h(`- Patterns: ${r.patterns.join(' | ')}`);
      h('');
    });
  }

  h('---');
  h('');
  h('## False Signal Detection Checklist');
  h('');
  h('| Risk Type | Detection Criteria | Response |');
  h('|-----------|-------------------|----------|');
  h('| Pre-Priced | No hard catalyst (earnings/policy/M&A), score inflated by fluff | Wait for real announcement before entry |');
  h('| Overheated | All news bullish, zero bearish items | Wait for pullback to confirm support |');
  h('| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release or filing |');
  h('| Divergence | Black swan present but market still bullish | Avoid first, wait for event clarity |');
  h('');
  h('---');
  h(`*Generated: ${new Date().toISOString()} | Sources: Yahoo Finance / Finnhub / MarketWatch / Seeking Alpha*`);

  return lines.join('\n');
}

async function main() {
  console.log('');
  console.log('================================================================');
  console.log('  US Stock News Sentiment Analysis -> Tradeable Signals');
  console.log(`  Window: ${cutoffStr} ~ ${todayStr}`);
  console.log('================================================================');
  console.log('');

  const content = readFileSync(SYMBOLS_FILE, 'utf8').trim();
  const symbols = content.split(',').map(s => s.trim()).filter(Boolean);
  console.log(`Loaded ${symbols.length} stocks from us_selected.txt\n`);

  const results = [];
  const batches = Math.ceil(symbols.length / BATCH_SIZE);

  for (let i = 0; i < symbols.length; i += BATCH_SIZE) {
    const batch = symbols.slice(i, i + BATCH_SIZE);
    console.log(`\nBatch ${Math.floor(i / BATCH_SIZE) + 1}/${batches}: [${batch.join(', ')}]`);
    const settled = await Promise.allSettled(batch.map(s => analyzeStock(s)));
    settled.forEach(r => {
      if (r.status === 'fulfilled') results.push(r.value);
      else console.warn('  Error:', r.reason && r.reason.message);
    });
    if (i + BATCH_SIZE < symbols.length) await new Promise(r => setTimeout(r, 1000));
  }

  results.sort((a, b) => b.score - a.score);

  console.log('\n');
  console.log('='.repeat(72));
  console.log('Trading Signal Summary');
  console.log('='.repeat(72));
  results.forEach((r, i) => {
    const sc  = String(r.score >= 0 ? `+${r.score}` : r.score).padStart(5);
    const sym = r.symbol.padEnd(18);
    const sigIcon = r.signal.startsWith('GREEN') ? '[LONG]' : r.signal.startsWith('RED') ? '[AVOID]' : r.signal.startsWith('WARN') ? '[WARN]' : '[WATCH]';
    const pat = (r.patterns ?? []).filter(p => p.startsWith('WARNING')).map(p => p.slice(9, 30)).join('|');
    console.log(`${String(i+1).padStart(2)}. ${sym} Score:${sc}  ${sigIcon}  ${pat}`);
  });

  const longs  = results.filter(r => r.signal.startsWith('GREEN'));
  const alerts = results.filter(r => (r.patterns ?? []).some(p => p.startsWith('WARNING')));
  const shorts = results.filter(r => r.signal.includes('Short') || r.signal.includes('Avoid'));

  console.log('\n');
  console.log('Long Candidates : ' + (longs.map(r => r.symbol).join(', ') || 'None'));
  console.log('Risk Alerts     : ' + (alerts.map(r => r.symbol).join(', ') || 'None'));
  console.log('Avoid / Short   : ' + (shorts.map(r => r.symbol).join(', ') || 'None'));

  const report = buildReport(results);
  writeFileSync(OUTPUT_MD, report, 'utf8');
  console.log(`\nReport saved: ${OUTPUT_MD}\n`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
