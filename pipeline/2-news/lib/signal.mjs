/**
 * signal.mjs — 基于 0-100 归一化分 + patterns 生成交易信号
 *
 * 阈值（normalized）：
 *   ≥ 75   →  Long (强) / Overheated 视 risk
 *   60-74  →  Long (中) / Long (谨慎)
 *   40-59  →  Neutral (微多 / 中性)
 *   25-39  →  No Trade / Avoid
 *   < 25   →  Short / Avoid
 *
 * 黑天鹅 sentiment<0 → 强制 No Trade / Short (优先级最高)
 */

const cn = m => m === 'cn';

/**
 * @param {number} score      0..100 归一化分
 * @param {string[]} patterns
 * @param {Array} tagged
 * @param {'cn'|'us'} market
 */
export function generateSignal(score, patterns, tagged, market = 'cn') {
  const isCn        = cn(market);
  const hasRisk     = patterns.some(p => p.startsWith('⚠️') || p.startsWith('WARNING'));
  const overheated  = patterns.some(p => p.includes('情绪过热') || p.includes('Overheated'));
  const blackSwanType = isCn ? '黑天鹅' : 'Black Swan';
  const hasBlackSwan = tagged.some(i => i.type === blackSwanType && (i.sentiment ?? 0) < 0);

  // ── 黑天鹅强制覆盖 ──
  if (hasBlackSwan) {
    return isCn ? {
      signal: '🔴 No Trade / Short',
      strategy: '黑天鹅事件规避，等待事件明朗化再评估',
      suitableFor: '反转(等底部确认)',
      confidence: '高',
    } : {
      signal: 'RED No Trade / Short',
      strategy: 'Black swan risk — avoid until event clarity',
      suitableFor: 'Reversal (wait for bottom confirmation)',
      confidence: 'High',
    };
  }

  // ── ≥ 75 强多 ──
  if (score >= 75) {
    if (overheated) {
      return isCn ? {
        signal: '⚠️ No Trade (情绪过热)',
        strategy: '情绪分过高但出现过热信号，等待回调低吸，不追高',
        suitableFor: '低吸(等回调)',
        confidence: '低(风险压制)',
      } : {
        signal: 'WARN No Trade (Overheated)',
        strategy: 'Score very high but overheated — wait for pullback to buy dip',
        suitableFor: 'Buy Dip (wait for pullback)',
        confidence: 'Low (risk present)',
      };
    }
    if (hasRisk) {
      return isCn ? {
        signal: '⚠️ Long (谨慎)',
        strategy: '情绪强但存在风险信号，建议小仓位低吸',
        suitableFor: '低吸(控仓)',
        confidence: '中(有风险)',
      } : {
        signal: 'WARN Long (Cautious)',
        strategy: 'Bullish but risk flags present — small position, tight stop',
        suitableFor: 'Buy Dip (small size)',
        confidence: 'Medium (risk present)',
      };
    }
    return isCn ? {
      signal: '🟢 Long (强)',
      strategy: '多重利好共振，基本面+情绪双支撑，适合追涨或持有',
      suitableFor: '追涨 / 持有',
      confidence: '高',
    } : {
      signal: 'GREEN Long (Strong)',
      strategy: 'Multiple bullish catalysts converging — strong sentiment + fundamental support',
      suitableFor: 'Momentum / Hold',
      confidence: 'High',
    };
  }

  // ── 60-74 中多 ──
  if (score >= 60) {
    if (hasRisk) {
      return isCn ? {
        signal: '⚠️ Long (谨慎)',
        strategy: '情绪偏多但有风险信号，建议小仓位低吸',
        suitableFor: '低吸(控仓)',
        confidence: '中(有风险)',
      } : {
        signal: 'WARN Long (Cautious)',
        strategy: 'Bullish lean but risk flags present — small position, tight stop',
        suitableFor: 'Buy Dip (small size)',
        confidence: 'Medium (risk present)',
      };
    }
    return isCn ? {
      signal: '🟢 Long (中)',
      strategy: '情绪偏多，适合低吸或轻仓参与',
      suitableFor: '低吸 / 轻仓追',
      confidence: '中',
    } : {
      signal: 'GREEN Long (Mid)',
      strategy: 'Positive sentiment flow — suitable for dip-buy or light momentum entry',
      suitableFor: 'Buy Dip / Light Momentum',
      confidence: 'Medium',
    };
  }

  // ── 50-59 微多 ──
  if (score >= 50) {
    return isCn ? {
      signal: '⚪ No Trade (微多)',
      strategy: '情绪轻微偏多，信号不足，以观望为主',
      suitableFor: '观望',
      confidence: '低',
    } : {
      signal: 'NEUTRAL No Trade (Weak Bullish)',
      strategy: 'Mildly positive, insufficient signal — watch for stronger catalyst',
      suitableFor: 'Watch',
      confidence: 'Low',
    };
  }

  // ── 40-49 中性 ──
  if (score >= 40) {
    return isCn ? {
      signal: '⚪ No Trade (中性)',
      strategy: '情绪中性，无明显方向，观望',
      suitableFor: '观望',
      confidence: '低',
    } : {
      signal: 'NEUTRAL No Trade (Neutral)',
      strategy: 'No clear directional bias — stay flat',
      suitableFor: 'Watch',
      confidence: 'Low',
    };
  }

  // ── 25-39 规避 ──
  if (score >= 25) {
    return isCn ? {
      signal: '🔴 No Trade / 规避',
      strategy: '情绪偏空，建议规避或减仓，等待企稳',
      suitableFor: '反转(等企稳)',
      confidence: '中',
    } : {
      signal: 'RED No Trade / Avoid',
      strategy: 'Bearish lean — reduce exposure, wait for stabilization',
      suitableFor: 'Reversal (wait for stabilization)',
      confidence: 'Medium',
    };
  }

  // ── < 25 ──
  return isCn ? {
    signal: '🔴 Short / 规避',
    strategy: '情绪持续走弱，多重利空，建议离场或反向关注',
    suitableFor: '反转(等底部)',
    confidence: '高',
  } : {
    signal: 'RED Short / Avoid',
    strategy: 'Sustained bearish flow, multiple headwinds — exit or consider short',
    suitableFor: 'Reversal (wait for bottom)',
    confidence: 'High',
  };
}
