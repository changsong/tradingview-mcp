#!/usr/bin/env node
/**
 * Stage 3.5 — 明日涨停概率预测 (Next-Day Limit-Up Probability Prediction)
 *
 * Reads stage 3 output (cn_tech_signals.json), identifies today's limit-up stocks,
 * and computes next-day continuation probability using:
 *   1. Scorecard model (deterministic 7-factor scoring, 0-100)
 *   2. Logistic regression (self-training from reports/ snapshots, 0-1 probability)
 *
 * Input:  ./watchlist/cn_tech_signals.json   (stage 3 output)
 * Output: ./watchlist/cn_limup_signals.json  (JSON contract)
 *         ./watchlist/cn_limup_signals.md    (human-readable report)
 * Snapshots to: ./reports/<YYYY-MM-DD>/cn_limup_signals.{json,md}
 *
 * Usage: node pipeline/3.5-limup/predict_cn_limup.mjs
 *        npm run limup:cn
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { snapshotMarket } from '../lib/snapshot.mjs';
import {
  loadIndustryMap, getIndustry,
  scoreStock, extractFeatures, collectTrainingData,
  trainLogisticRegression, predictLogistic,
  computeVerdict, computeRisks,
} from '../lib/limup_scorecard.mjs';

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

const TECH_JSON   = './watchlist/cn_tech_signals.json';
const OUT_JSON    = './watchlist/cn_limup_signals.json';
const OUT_MD      = './watchlist/cn_limup_signals.md';
const MODEL_PATH  = './pipeline/3.5-limup/model_weights.json';

// ── Helpers ──────────────────────────────────────────────────────────

function loadTechSignals() {
  if (!existsSync(TECH_JSON)) {
    console.error(`✗ 缺少技术面数据: ${TECH_JSON}\n  请先运行 npm run tech:cn`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(TECH_JSON, 'utf8'));
}

function getLimitUpStocks(techData) {
  const industryMap = loadIndustryMap();
  const stocks = [];
  const industryStats = {};
  const marketStats = {};

  for (const [sym, s] of Object.entries(techData.stocks ?? {})) {
    const lim = s.limit_info;
    if (!lim?.upLimit) continue;

    const industry = getIndustry(sym, lim);
    stocks.push({ sym, ...s, _industry: industry });

    industryStats[industry] = (industryStats[industry] || 0) + 1;
    marketStats[lim.market] = (marketStats[lim.market] || 0) + 1;
  }

  return { stocks, industryStats, marketStats };
}

function loadOrTrainModel() {
  const trainingData = collectTrainingData();
  let model = null;
  let modelMeta = { sample_count: 0, last_trained: null, method: 'scorecard_only' };

  if (trainingData.features.length >= 10) {
    console.log(`  训练数据: ${trainingData.features.length} 条样本`);
    try {
      const posLabel = trainingData.labels.filter(l => l === 1).length;
      console.log(`  正样本(次日连板): ${posLabel}  |  负样本: ${trainingData.labels.length - posLabel}`);

      const trained = trainLogisticRegression(trainingData.features, trainingData.labels, {
        verbose: true,
      });

      model = {
        weights: trained.weights,
        featureMeans: trained.featureMeans,
        featureStds: trained.featureStds,
        trained_at: new Date().toISOString(),
        sample_count: trained.sampleCount,
        iterations: trained.iterations,
        final_loss: trained.finalLoss,
      };

      mkdirSync(dirname(MODEL_PATH), { recursive: true });
      writeFileSync(MODEL_PATH, JSON.stringify(model, null, 2), 'utf8');
      console.log(`  模型已保存: ${MODEL_PATH}`);

      modelMeta = {
        sample_count: trained.sampleCount,
        last_trained: model.trained_at,
        method: 'logistic_regression',
        iterations: trained.iterations,
        final_loss: trained.finalLoss,
      };
    } catch (e) {
      console.error(`  训练失败: ${e.message}`);
    }
  } else if (existsSync(MODEL_PATH)) {
    console.log(`  训练数据不足(${trainingData.features.length}条),使用已保存的模型`);
    try {
      model = JSON.parse(readFileSync(MODEL_PATH, 'utf8'));
      if (!model.weights?.length) model = null;
      else {
        modelMeta = {
          sample_count: model.sample_count ?? 0,
          last_trained: model.trained_at ?? null,
          method: 'logistic_regression (cached)',
        };
      }
    } catch {
      model = null;
    }
  } else {
    console.log(`  训练数据不足(${trainingData.features.length}条),仅使用评分卡模型`);
  }

  return { model, modelMeta };
}

function scoreAll(limitUpStocks, industryStats, model) {
  const totalLimitUps = limitUpStocks.length;
  const results = [];

  for (const s of limitUpStocks) {
    // Attach metadata for feature extraction
    s._totalLimitUps = totalLimitUps;

    const sc = scoreStock(s, industryStats);

    let logisticProb = null;
    if (model?.weights?.length) {
      logisticProb = predictLogistic(s, model, industryStats);
    }

    const { verdict, label } = computeVerdict(sc.total, logisticProb, !!model?.weights?.length);
    const risks = computeRisks(s);

    const tf1d = s.tf?.['1D'] || {};

    results.push({
      symbol: s.sym,
      name: s.name,
      industry: s._industry || s.limit_info?.market || '未知',
      up_streak: s.limit_info?.upStreak || 0,
      market: s.limit_info?.market || '未知',
      daily_chg_pct: s.limit_info?.chg ?? null,
      price: s.price ?? null,
      vol_ratio: tf1d.vol_ratio ?? null,
      atr_pct: tf1d.atr_pct ?? null,
      tech_score: s.tech_score ?? null,
      news_score: s.news_score ?? null,
      scorecard_score: sc.total,
      scorecard_breakdown: sc.breakdown,
      logistic_probability: logisticProb,
      verdict,
      verdict_label: label,
      risks,
    });
  }

  // Sort: scorecard desc, logistic desc as tiebreaker
  results.sort((a, b) => {
    if (b.scorecard_score !== a.scorecard_score) return b.scorecard_score - a.scorecard_score;
    return (b.logistic_probability ?? -1) - (a.logistic_probability ?? -1);
  });

  return results;
}

// ── Markdown Report ──────────────────────────────────────────────────

function buildMdReport(results, modelMeta, totalLimitUps, industryStats, marketStats, date) {
  const L = [];
  const p = (s = '') => L.push(s);

  p('# 明日涨停概率预测报告 (CN)');
  p('');
  p(`**日期:** ${date}`);
  p(`**方法:** 评分卡模型 (7因子100分制)${modelMeta.method !== 'scorecard_only' ? ' + 逻辑回归模型' : ''}`);
  if (modelMeta.sample_count > 0) {
    p(`**训练样本:** ${modelMeta.sample_count} 条  |  最后训练: ${modelMeta.last_trained?.slice(0, 10) ?? 'N/A'}`);
    if (modelMeta.final_loss != null) p(`**训练损失:** ${modelMeta.final_loss}`);
  }
  p(`**今日涨停:** ${totalLimitUps} 只`);
  p('');
  p('---');
  p('');

  // Industry cluster analysis
  p('## 行业板块分析');
  p('');
  p('| 行业 | 涨停数量 | 占比 | 板块强度 |');
  p('|------|---------|------|---------|');
  const sortedInd = Object.entries(industryStats).sort((a, b) => b[1] - a[1]);
  for (const [ind, count] of sortedInd) {
    const pct = (count / totalLimitUps * 100).toFixed(0);
    const strength = count >= 5 ? '🔥 强共振' : count >= 3 ? '✅ 板块效应' : count >= 2 ? '👀 联动' : '⚡ 孤立';
    p(`| ${ind} | ${count} | ${pct}% | ${strength} |`);
  }
  p('');
  p('---');
  p('');

  // Market type summary
  p('## 市场分布');
  p('');
  p('| 市场 | 涨停数量 |');
  p('|------|---------|');
  for (const [mkt, count] of Object.entries(marketStats).sort((a, b) => b[1] - a[1])) {
    p(`| ${mkt} | ${count} |`);
  }
  p('');
  p('---');
  p('');

  // Main ranking table
  p('## 🎯 涨停概率预测排名');
  p('');
  p('| 排名 | 名称 | 代码 | 连板 | 行业 | 评分卡 | 逻辑回归 | 判定 | 量比 | 技术分 | 新闻分 | 风险 |');
  p('|------|------|------|------|------|--------|---------|------|------|--------|--------|------|');
  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const sc = String(r.scorecard_score);
    const lp = r.logistic_probability != null ? (r.logistic_probability * 100).toFixed(0) + '%' : 'N/A';
    const risks = r.risks.length ? r.risks.join(',') : '✓';
    p(`| ${i + 1} | **${r.name}** | ${r.symbol} | ${r.up_streak}板 | ${r.industry} | **${sc}** | ${lp} | ${r.verdict_label} | ${r.vol_ratio?.toFixed(1) ?? '-'}x | ${r.tech_score ?? '-'} | ${r.news_score ?? '-'} | ${risks} |`);
  }
  p('');
  p('---');
  p('');

  // Detailed breakdown for top 15
  const topN = Math.min(results.length, 15);
  p(`## 📊 Top ${topN} 因子分解`);
  p('');

  for (let i = 0; i < topN; i++) {
    const r = results[i];
    p(`### ${i + 1}. ${r.name} (${r.symbol})  —  ${r.verdict_label}`);
    p('');
    p(`> 第${r.up_streak}板  |  ${r.industry}  |  价格 ${r.price}  |  涨跌 ${r.daily_chg_pct}%`);
    p('');
    p('| 因子 | 得分 | 满分 | 数据 |');
    p('|------|------|------|------|');
    const b = r.scorecard_breakdown;
    p(`| 连板位置 | ${b.board_position} | 25 | 第${r.up_streak}板 |`);
    p(`| 换手健康度 | ${b.turnover_health} | 20 | 量比 ${r.vol_ratio?.toFixed(1) ?? 'N/A'}x |`);
    p(`| 量能质量 | ${b.volume_quality} | 15 | — |`);
    p(`| 技术强度 | ${b.tech_strength} | 15 | tech_score=${r.tech_score ?? '-'} |`);
    p(`| 情绪支撑 | ${b.sentiment} | 10 | news_score=${r.news_score ?? '-'} |`);
    p(`| 波动率适配 | ${b.volatility} | 10 | ATR=${r.atr_pct?.toFixed(1) ?? 'N/A'}% |`);
    p(`| 板块效应 | ${b.sector_effect} | 5 | ${r.industry}(${industryStats[r.industry] || 0}只涨停) |`);
    p(`| **合计** | **${r.scorecard_score}** | **100** | |`);
    if (r.logistic_probability != null) {
      p(`| **逻辑回归概率** | **${(r.logistic_probability * 100).toFixed(1)}%** | — | 历史样本训练 |`);
    }
    if (r.risks.length) {
      p('');
      p(`⚠️ **风险提示:** ${r.risks.join('；')}`);
    }
    p('');
    p('---');
    p('');
  }

  // Footer
  p('');
  p(`*报告生成: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}  CST*`);
  p(`*评分卡版本: v1.0 (7因子100分制)*`);
  p(`*逻辑回归: ${modelMeta.method}*`);

  return L.join('\n');
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
  console.log('\n═══════════════════════════════════════════');
  console.log('  Stage 3.5 · 明日涨停概率预测 (CN)');
  console.log('═══════════════════════════════════════════\n');

  // 1. Load stage 3 output
  const techData = loadTechSignals();
  console.log(`  技术面数据: ${Object.keys(techData.stocks ?? {}).length} 只`);

  // 2. Identify limit-up stocks + build industry stats
  const { stocks: limitUpStocks, industryStats, marketStats } = getLimitUpStocks(techData);
  console.log(`  今日涨停: ${limitUpStocks.length} 只`);
  console.log(`  行业分布: ${Object.keys(industryStats).length} 个行业`);

  if (limitUpStocks.length === 0) {
    console.log('\n  今日无涨停股票，跳过预测。');
    const empty = {
      generated_at: new Date().toISOString(),
      market: 'cn',
      method: 'none',
      limit_up_count: 0,
      industry_stats: {},
      market_stats: {},
      stocks: {},
    };
    writeFileSync(OUT_JSON, JSON.stringify(empty, null, 2), 'utf8');
    writeFileSync(OUT_MD, '# 明日涨停概率预测报告 (CN)\n\n**今日无涨停股票**\n', 'utf8');
    process.exit(0);
  }

  // 3. Train/load logistic regression model
  const { model, modelMeta } = loadOrTrainModel();

  // 4. Score all limit-up stocks
  const results = scoreAll(limitUpStocks, industryStats, model);

  // 5. Console summary
  console.log('\n🏆 涨停概率预测排名 (Top 15):');
  console.log('排名  名称          连板  行业      评分卡  逻辑回归  判定');
  const show = results.slice(0, 15);
  for (let i = 0; i < show.length; i++) {
    const r = show[i];
    const nm = (r.name || '').slice(0, 10).padEnd(10);
    const ind = (r.industry || '').slice(0, 8).padEnd(8);
    const sc = String(r.scorecard_score).padStart(3);
    const lp = r.logistic_probability != null ? ((r.logistic_probability * 100).toFixed(0) + '%').padStart(4) : ' N/A ';
    console.log(`${String(i + 1).padStart(2)}.  ${nm} ${r.up_streak}板  ${ind} ${sc}    ${lp}   ${r.verdict_label}`);
  }
  if (results.length > 15) console.log(`  ... 共 ${results.length} 只`);

  // 6. Write JSON
  const jsonOut = {
    generated_at: new Date().toISOString(),
    market: 'cn',
    method: modelMeta.method,
    model_info: modelMeta,
    limit_up_count: limitUpStocks.length,
    industry_stats: industryStats,
    market_stats: marketStats,
    stocks: Object.fromEntries(results.map(r => [r.symbol, {
      name: r.name,
      industry: r.industry,
      up_streak: r.up_streak,
      market: r.market,
      daily_chg_pct: r.daily_chg_pct,
      price: r.price,
      vol_ratio: r.vol_ratio,
      atr_pct: r.atr_pct,
      tech_score: r.tech_score,
      news_score: r.news_score,
      scorecard_score: r.scorecard_score,
      scorecard_breakdown: r.scorecard_breakdown,
      logistic_probability: r.logistic_probability,
      verdict: r.verdict,
      verdict_label: r.verdict_label,
      risks: r.risks,
    }])),
  };
  writeFileSync(OUT_JSON, JSON.stringify(jsonOut, null, 2), 'utf8');
  console.log(`\n✅ JSON: ${OUT_JSON}`);

  // 7. Write MD
  const dateStr = new Date().toISOString().slice(0, 10);
  const mdReport = buildMdReport(results, modelMeta, limitUpStocks.length, industryStats, marketStats, dateStr);
  writeFileSync(OUT_MD, mdReport, 'utf8');
  console.log(`✅ MD:   ${OUT_MD}`);

  // 8. Snapshot to reports/
  try {
    const snap = snapshotMarket('cn');
    console.log(`📸 快照: ${snap.dir}`);
  } catch (e) {
    console.log(`⚠ 快照失败: ${e.message}`);
  }

  console.log('');
}

main().catch(e => { console.error(e); process.exit(1); });
