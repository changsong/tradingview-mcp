/**
 * Limit-Up Probability Prediction — Core Engine
 *
 * Two complementary methods:
 *   1. Scorecard model  — deterministic 7-factor scoring (0-100)
 *   2. Logistic regression — self-training binary classifier (0-1 probability)
 *
 * All factors derived from existing OHLCV + cn_tech_signals.json data.
 * No Level-2/Tick data required.
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, join } from 'path';

// ── Helpers ────────────────────────────────────────────────────────

const r1 = v => Math.round(v * 10) / 10;
const r2 = v => Math.round(v * 100) / 100;

function sigmoid(z) {
  if (z > 20) return 1.0;
  if (z < -20) return 0.0;
  return 1.0 / (1.0 + Math.exp(-z));
}

function safeLog(x) {
  if (x < 1e-15) return Math.log(1e-15);
  if (x > 1 - 1e-15) return Math.log(1 - 1e-15);
  return Math.log(x);
}

function clip(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

/**
 * Fisher-Yates shuffle (in-place).
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ── Industry Map ────────────────────────────────────────────────────

const INDUSTRY_JSON = './watchlist/cn_industry.json';

let _industryCache = null;

/**
 * Load industry map from cn_industry.json.
 * Returns a Map: symbol → industry string.
 * Falls back to market type (主板/创业/科创/北交) if industry data unavailable.
 */
export function loadIndustryMap() {
  if (_industryCache) return _industryCache;
  const map = new Map();
  if (existsSync(INDUSTRY_JSON)) {
    try {
      const data = JSON.parse(readFileSync(INDUSTRY_JSON, 'utf8'));
      for (const [sym, info] of Object.entries(data.stocks || {})) {
        if (info.industry) map.set(sym, info.industry);
      }
    } catch { /* keep empty map */ }
  }
  _industryCache = map;
  return map;
}

/** Get industry for a symbol (with fallback to market type). */
export function getIndustry(sym, limitInfo) {
  const map = loadIndustryMap();
  if (map.has(sym)) return map.get(sym);
  // Fallback: use market type as pseudo-industry
  return limitInfo?.market || '未知';
}

// ── Factor Scoring ─────────────────────────────────────────────────

function scoreBoardPosition(upStreak) {
  if (upStreak === 1) return 25;
  if (upStreak === 2) return 22;
  if (upStreak === 3) return 18;
  if (upStreak === 4) return 12;
  if (upStreak === 5) return 10;
  return 6;
}

function scoreTurnoverHealth(volRatio) {
  if (volRatio == null) return 10;
  if (volRatio >= 1.5 && volRatio <= 4.0) return 20;
  if (volRatio >= 1.0 && volRatio < 1.5) return 16;
  if (volRatio > 4.0 && volRatio <= 6.0) return 14;
  if (volRatio >= 0.6 && volRatio < 1.0) return 12;
  if (volRatio > 6.0 && volRatio <= 10.0) return 8;
  if (volRatio < 0.6) return 6;
  return 4;
}

function scoreVolumeQuality(volRatio) {
  if (volRatio == null) return 7;
  if (volRatio >= 2.0 && volRatio <= 5.0) return 15;
  if (volRatio >= 1.2 && volRatio < 2.0) return 12;
  if (volRatio > 5.0 && volRatio <= 8.0) return 9;
  if (volRatio >= 0.8 && volRatio < 1.2) return 7;
  if (volRatio > 8.0) return 4;
  return 3;
}

function scoreTechStrength(techScore) {
  if (techScore == null) return 7;
  if (techScore >= 40) return 15;
  if (techScore >= 25) return 12;
  if (techScore >= 10) return 8;
  if (techScore >= 0) return 5;
  return 2;
}

function scoreSentiment(newsScore) {
  if (newsScore == null) return 5;
  if (newsScore >= 20) return 10;
  if (newsScore >= 8) return 7;
  if (newsScore >= 0) return 5;
  return 2;
}

function scoreVolatility(atrPct) {
  if (atrPct == null) return 5;
  if (atrPct >= 2.0 && atrPct <= 5.0) return 10;
  if (atrPct >= 1.5 && atrPct < 2.0) return 8;
  if (atrPct > 5.0 && atrPct <= 8.0) return 7;
  if (atrPct < 1.5) return 5;
  return 3;
}

function scoreSectorEffect(industry, industryStats, totalLimitUps) {
  if (!industry || totalLimitUps === 0) return 2;
  const count = industryStats[industry] || 0;
  if (count >= 5) return 5;
  if (count >= 3) return 4;
  if (count >= 2) return 3;
  return 1;
}

// ── Public: Scorecard ───────────────────────────────────────────────

/**
 * Compute 0-100 scorecard score for one limit-up stock.
 *
 * @param {object} stock - with { limit_info, tf, tech_score, news_score }
 * @param {object} industryStats - { [industry]: count } for today's limit-ups
 * @returns {{ total: number, breakdown: object }}
 */
export function scoreStock(stock, industryStats) {
  const lim = stock.limit_info || {};
  const tf1d = stock.tf?.['1D'] || {};
  const volRatio = tf1d.vol_ratio ?? null;
  const atrPct = tf1d.atr_pct ?? null;

  const bp = scoreBoardPosition(lim.upStreak || 1);
  const th = scoreTurnoverHealth(volRatio);
  const vq = scoreVolumeQuality(volRatio);
  const ts = scoreTechStrength(stock.tech_score);
  const se = scoreSentiment(stock.news_score);
  const vo = scoreVolatility(atrPct);
  const sx = scoreSectorEffect(stock._industry, industryStats, stock._totalLimitUps || 1);

  const total = bp + th + vq + ts + se + vo + sx;

  return {
    total: clip(total, 0, 100),
    breakdown: {
      board_position: bp,
      turnover_health: th,
      volume_quality: vq,
      tech_strength: ts,
      sentiment: se,
      volatility: vo,
      sector_effect: sx,
    },
  };
}

// ── Public: Feature Extraction ──────────────────────────────────────

const FEATURE_NAMES = ['upStreak', 'volRatio', 'logVolRatio', 'techScore', 'newsScore', 'atrPct', 'sectorRatio'];

/**
 * Extract 7-element feature vector for logistic regression.
 *
 * Features (all continuous):
 *   x0 = upStreak
 *   x1 = vol_ratio
 *   x2 = log(vol_ratio)
 *   x3 = tech_score
 *   x4 = news_score (0 if null)
 *   x5 = atr_pct (3 if null)
 *   x6 = industry concentration ratio (0-1)
 *
 * @returns {number[]} 7-element Float64Array-compatible array
 */
export function extractFeatures(stock, industryStats, totalLimitUps = 1) {
  const lim = stock.limit_info || {};
  const tf1d = stock.tf?.['1D'] || {};

  const upStreak = lim.upStreak || 1;
  const volRatio = tf1d.vol_ratio ?? 1.0;
  const logVolRatio = Math.log(Math.max(volRatio, 0.01));
  const techScore = stock.tech_score ?? 0;
  const newsScore = stock.news_score ?? 0;
  const atrPct = tf1d.atr_pct ?? 3.0;

  let sectorRatio = 0;
  if (totalLimitUps > 0 && stock._industry) {
    sectorRatio = (industryStats[stock._industry] || 0) / totalLimitUps;
  }

  return [
    upStreak,
    r2(volRatio),
    r2(logVolRatio),
    r2(techScore),
    r2(newsScore),
    r2(atrPct),
    r2(sectorRatio),
  ];
}

// ── Public: Training Data Collection ────────────────────────────────

/**
 * Scan reports/<date>/cn_tech_signals.json to build labeled training set.
 *
 * For each date where a stock hit limit-up, checks if the same stock
 * hit limit-up on the NEXT available report date → label = 1, else 0.
 *
 * @returns {{ features: number[][], labels: number[], dates: string[], symbols: string[] }}
 */
export function collectTrainingData() {
  const reportsDir = resolve('./reports');
  if (!existsSync(reportsDir)) {
    return { features: [], labels: [], dates: [], symbols: [] };
  }

  // Find all YYYY-MM-DD directories, sorted
  const dateDirs = readdirSync(reportsDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(d.name))
    .map(d => d.name)
    .sort();

  if (dateDirs.length < 2) {
    return { features: [], labels: [], dates: [], symbols: [] };
  }

  const industryMap = loadIndustryMap();
  const samples = [];

  for (let i = 0; i < dateDirs.length - 1; i++) {
    const dateCurr = dateDirs[i];
    const dateNext = dateDirs[i + 1];

    const techCurrPath = join(reportsDir, dateCurr, 'cn_tech_signals.json');
    const techNextPath = join(reportsDir, dateNext, 'cn_tech_signals.json');

    if (!existsSync(techCurrPath) || !existsSync(techNextPath)) continue;

    let techCurr, techNext;
    try {
      techCurr = JSON.parse(readFileSync(techCurrPath, 'utf8'));
      techNext = JSON.parse(readFileSync(techNextPath, 'utf8'));
    } catch {
      continue;
    }

    const currStocks = techCurr.stocks || {};
    const nextStocks = techNext.stocks || {};

    // Find limit-up stocks on current date
    const limitUpEntries = [];
    for (const [sym, s] of Object.entries(currStocks)) {
      if (s.limit_info?.upLimit) {
        limitUpEntries.push({ sym, stock: s });
      }
    }
    if (limitUpEntries.length === 0) continue;

    // Compute industry stats for current date (for sector_effect feature)
    const industryStats = {};
    const totalUp = limitUpEntries.length;
    for (const { sym, stock } of limitUpEntries) {
      const ind = industryMap.get(sym) || stock.limit_info?.market || '未知';
      industryStats[ind] = (industryStats[ind] || 0) + 1;
    }

    // Build labeled samples
    for (const { sym, stock } of limitUpEntries) {
      const nextStock = nextStocks[sym];
      const label = nextStock?.limit_info?.upLimit ? 1 : 0;

      // Attach industry for feature extraction
      stock._industry = industryMap.get(sym) || stock.limit_info?.market || '未知';
      stock._totalLimitUps = totalUp;

      try {
        const features = extractFeatures(stock, industryStats, totalUp);
        samples.push({ features, label, date: dateCurr, symbol: sym });
      } catch {
        // skip malformed entries
      }
    }
  }

  // Shuffle for training
  shuffle(samples);

  return {
    features: samples.map(s => s.features),
    labels: samples.map(s => s.label),
    dates: samples.map(s => s.date),
    symbols: samples.map(s => s.symbol),
  };
}

// ── Public: Logistic Regression Training ────────────────────────────

/**
 * Train a logistic regression classifier with L2 regularization.
 *
 * Algorithm: batch gradient descent
 * Loss: binary cross-entropy + L2 penalty
 *
 * @param {number[][]} features - m x n feature matrix
 * @param {number[]} labels - m binary labels (0 or 1)
 * @param {object} options
 * @param {number} options.alpha - learning rate (default 0.01)
 * @param {number} options.lambda - L2 regularization strength (default 0.1)
 * @param {number} options.epochs - max iterations (default 5000)
 * @param {number} options.convergenceThreshold - stop if |loss diff| < this (default 1e-6)
 * @param {boolean} options.verbose - print progress
 * @returns {{ weights: number[], featureMeans: number[], featureStds: number[], iterations: number, finalLoss: number, sampleCount: number }}
 */
export function trainLogisticRegression(features, labels, options = {}) {
  const {
    alpha = 0.01,
    lambda = 0.1,
    epochs = 5000,
    convergenceThreshold = 1e-6,
    verbose = false,
  } = options;

  const m = features.length;
  const n = features[0]?.length || 0;

  if (m === 0 || n === 0) {
    throw new Error('Empty training data');
  }

  // ── Z-score normalization ──
  const featureMeans = new Array(n).fill(0);
  const featureStds = new Array(n).fill(0);

  for (let j = 0; j < n; j++) {
    let sum = 0;
    for (let i = 0; i < m; i++) sum += features[i][j];
    featureMeans[j] = sum / m;
  }

  for (let j = 0; j < n; j++) {
    let sumSq = 0;
    for (let i = 0; i < m; i++) {
      const diff = features[i][j] - featureMeans[j];
      sumSq += diff * diff;
    }
    featureStds[j] = Math.sqrt(sumSq / m) || 1.0; // guard against zero std
  }

  // Normalize features
  const X = new Array(m);
  for (let i = 0; i < m; i++) {
    X[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      X[i][j] = (features[i][j] - featureMeans[j]) / featureStds[j];
    }
  }

  // ── Initialize weights ──
  // w[0] = bias, w[1..n] = feature weights
  const w = new Array(n + 1).fill(0);

  // ── Gradient descent ──
  let prevLoss = Infinity;
  let iterations = 0;
  let finalLoss = 0;

  for (let epoch = 0; epoch < epochs; epoch++) {
    // Forward pass + loss computation
    let loss = 0;
    const dw = new Array(n + 1).fill(0);

    for (let i = 0; i < m; i++) {
      // Compute z = w0 + sum(wj * xij)
      let z = w[0];
      for (let j = 0; j < n; j++) {
        z += w[j + 1] * X[i][j];
      }
      const p = sigmoid(z);
      const y = labels[i];

      // Binary cross-entropy
      loss += -y * safeLog(p) - (1 - y) * safeLog(1 - p);

      // Gradients
      const err = p - y;
      dw[0] += err;
      for (let j = 0; j < n; j++) {
        dw[j + 1] += err * X[i][j];
      }
    }

    loss /= m;

    // L2 regularization (excluding bias)
    let l2Penalty = 0;
    for (let j = 1; j <= n; j++) {
      l2Penalty += w[j] * w[j];
      dw[j] = dw[j] / m + (lambda / m) * w[j];
    }
    l2Penalty = (lambda / (2 * m)) * l2Penalty;
    loss += l2Penalty;

    // Bias gradient (no regularization)
    dw[0] /= m;

    // Update weights
    for (let j = 0; j <= n; j++) {
      w[j] -= alpha * dw[j];
    }

    iterations = epoch + 1;
    finalLoss = loss;

    // Convergence check
    if (Math.abs(prevLoss - loss) < convergenceThreshold) {
      break;
    }
    prevLoss = loss;

    if (verbose && epoch % 500 === 0) {
      console.log(`  epoch ${epoch}: loss=${loss.toFixed(6)}`);
    }
  }

  if (verbose) {
    console.log(`  收敛于 epoch ${iterations}, loss=${finalLoss.toFixed(6)}`);
    console.log(`  权重: bias=${r2(w[0])} ${FEATURE_NAMES.map((nm, j) => nm + '=' + r2(w[j+1])).join(' ')}`);
  }

  // Round weights for storage
  const weights = w.map(v => r2(v));
  const means = featureMeans.map(v => r2(v));
  const stds = featureStds.map(v => r2(v));

  return {
    weights,
    featureMeans: means,
    featureStds: stds,
    iterations,
    finalLoss: r2(finalLoss),
    sampleCount: m,
  };
}

// ── Public: Logistic Regression Prediction ──────────────────────────

/**
 * Compute next-day limit-up probability using trained logistic regression weights.
 *
 * @param {object} stock - stock data (same shape as scoreStock expects)
 * @param {object} model - { weights, featureMeans, featureStds }
 * @param {object} industryStats - industry concentration data
 * @returns {number} probability 0-1
 */
export function predictLogistic(stock, model, industryStats) {
  const totalUp = stock._totalLimitUps || 1;
  const raw = extractFeatures(stock, industryStats, totalUp);
  const { weights, featureMeans, featureStds } = model;

  const n = Math.min(raw.length, weights.length - 1);

  // Z-score normalize
  let z = weights[0]; // bias
  for (let j = 0; j < n; j++) {
    const xNorm = (raw[j] - (featureMeans[j] || 0)) / (featureStds[j] || 1);
    z += weights[j + 1] * xNorm;
  }

  return r2(sigmoid(z));
}

// ── Public: Verdict ─────────────────────────────────────────────────

/**
 * Produce human-readable trading verdict from both model outputs.
 */
export function computeVerdict(scorecardTotal, logisticProb, hasModel) {
  const sc = scorecardTotal;
  const lp = logisticProb;

  // Use logistic as tiebreaker when available
  if (hasModel && lp != null) {
    if (sc >= 70 && lp >= 0.6) return { verdict: 'strong_buy', label: '🔥 强买入' };
    if (sc >= 55 && lp >= 0.5) return { verdict: 'buy', label: '✅ 买入' };
    if (sc >= 40 && lp >= 0.4) return { verdict: 'watch', label: '👀 关注' };
    return { verdict: 'skip', label: '⏸ 观望' };
  }

  // Scorecard-only thresholds (more aggressive since model is absent)
  if (sc >= 70) return { verdict: 'strong_buy', label: '🔥 强买入' };
  if (sc >= 55) return { verdict: 'buy', label: '✅ 买入' };
  if (sc >= 40) return { verdict: 'watch', label: '👀 关注' };
  return { verdict: 'skip', label: '⏸ 观望' };
}

// ── Public: Risk Detection ──────────────────────────────────────────

/**
 * Identify risk factors specific to limit-up continuation.
 *
 * @param {object} stock - with { limit_info, tf, news_score }
 * @returns {string[]}
 */
export function computeRisks(stock) {
  const risks = [];
  const lim = stock.limit_info || {};
  const tf1d = stock.tf?.['1D'] || {};
  const volRatio = tf1d.vol_ratio;
  const atrPct = tf1d.atr_pct;
  const upStreak = lim.upStreak || 0;
  const chg = lim.chg || 0;
  const limitPct = lim.limitPct || 10;

  if (upStreak >= 5) {
    risks.push(`高位连板风险(${upStreak}板+),注意分歧`);
  }
  if (volRatio != null && volRatio > 8.0) {
    risks.push('量能异常放大,可能出货');
  }
  if (volRatio != null && volRatio < 0.5) {
    risks.push('缩量涨停,次日需放量确认');
  }
  if (atrPct != null && atrPct > 8.0) {
    risks.push('高波动率,止损难度大');
  }
  if (stock.news_score != null && stock.news_score < 0) {
    risks.push('新闻面偏空,情绪风险');
  }
  // Sealed board (close at limit, no room)
  if (typeof chg === 'number' && chg > limitPct - 0.3) {
    risks.push('一字封板,买不到风险');
  }
  // Weak board (far from limit)
  if (typeof chg === 'number' && chg < limitPct - 1.5 && upStreak > 0) {
    risks.push('封板不牢,尾盘开板风险');
  }

  return risks;
}
