#!/usr/bin/env node

/**
 * 综合分析报告生成器
 * 整合新闻情绪、技术面、基本面分析
 * 生成排序、入场价、止损价、目标价
 */

import { writeFileSync } from 'fs';

// 综合评分数据结构
const comprehensiveAnalysis = {
  analysis_date: '2026-04-22',
  analysis_time: new Date().toISOString(),

  stocks: [
    {
      symbol: 'NASDAQ:AEIS',
      rank: 1,

      // 三维度评分 (每个100分)
      scores: {
        news_sentiment: {
          score: 65,
          reason: '情绪指数 +0.116 (中性偏看涨), 25.6%看涨, 但M&A传闻未确认，财报风险',
          risk_level: 'MEDIUM'
        },
        technical_analysis: {
          score: 85,
          reason: '四时间周期全部UPTREND，RSI 95+，MACD强正，成交量配合，但极度超买',
          risk_level: 'HIGH'
        },
        fundamental_strength: {
          score: 60,
          reason: '最近earnings miss，但M&A传闻和行业前景良好。防御航空航天板块',
          risk_level: 'MEDIUM-HIGH'
        }
      },

      // 综合评分
      composite_score: {
        weighted_score: 70,
        calculation: '(65 * 0.35 + 85 * 0.45 + 60 * 0.20) = 70',
        weight_explanation: {
          news: '35% (情绪基础)',
          technical: '45% (短期执行力最强)',
          fundamental: '20% (长期质量)'
        }
      },

      // 交易方案
      trading_plan: {
        // 方案1: 激进型 (追涨)
        aggressive_plan: {
          type: '追涨突破',
          entry_price: 397.50,
          entry_condition: '立即入场（如果今日收盘>397.44）',
          entry_reason: '突破ATH确认，四时间周期同步',

          position_size: '2-3% portfolio',
          position_reason: '极度超买风险，不能重仓',

          stop_loss: 385.00,
          stop_loss_pct: -2.95,
          stop_loss_reason: '4小时BB下轨支撑，破位则快速下行',

          target_1: 400.00,
          target_1_pct: 0.63,
          target_1_reason: '心理整数关键阻力',
          target_1_action: '获利1/3',

          target_2: 405.00,
          target_2_pct: 1.88,
          target_2_reason: '日线技术阻力',
          target_2_action: '获利1/3',

          target_3: 415.00,
          target_3_pct: 4.41,
          target_3_reason: '若突破400则继续上升',
          target_3_action: '获利1/3',

          time_horizon: '1-3 days (short-term)',
          risk_reward: '1 : 3 (2.95% risk : 4.41% reward)',

          risks: [
            'RSI 97+ 即将回调 (5-10%)',
            '成交量climax信号 (不可持续)',
            '5/4财报binary事件 (可能miss)',
            '动能衰减预警 (MACD divergence forming)'
          ],

          advantages: [
            '四时间周期完全确认',
            '创新高突破确认',
            '成交量有力配合',
            '短期动能强劲'
          ],

          exit_signals: [
            '收盘跌破395 → 立即止损',
            '成交量萎缩 + 收盘小阳线 → 获利离场',
            '4月28日前 → 提前平仓 (避免4/29-5/4财报风险)'
          ]
        },

        // 方案2: 保守型 (等待回调低吸)
        conservative_plan: {
          type: '回调低吸',
          entry_price: 390.00,
          entry_range_low: 385.00,
          entry_range_high: 395.00,
          entry_condition: '等待5-10%回调到390区域',
          entry_reason: '更好的风险/收益比，下跌买点',

          probability: '65%概率出现',
          timeframe: '1-3 days',

          position_size: '3-4% portfolio',
          position_reason: '风险更低，可以增加头寸',

          stop_loss: 375.00,
          stop_loss_pct: -3.85,
          stop_loss_reason: '日线下轨支撑',

          target_1: 400.00,
          target_1_pct: 2.56,
          target_1_action: '获利1/2',

          target_2: 415.00,
          target_2_pct: 6.41,
          target_2_action: '获利1/2',

          time_horizon: '2-4 weeks',
          risk_reward: '1 : 2 (3.85% risk : 6.41% reward)',

          advantages: [
            '更好的entry价格',
            '更大的上升空间',
            '风险/收益比更优',
            '避免顶峰追涨'
          ]
        }
      },

      // 价位总结
      prices: {
        current: 394.35,
        entry_aggressive: 397.50,
        entry_conservative: 390.00,
        entry_range: '385.00 - 397.50',
        stop_loss: 385.00,
        target_1: 400.00,
        target_2: 405.00,
        target_3: 415.00,
        all_time_high: 397.44
      },

      // 最终推荐
      recommendation: {
        overall: 'AGGRESSIVE_IF_CONFIRM_TODAY | CONSERVATIVE_IF_PULLBACK',
        primary: 'CONSERVATIVE (等待回调)',
        timeframe: '短期 (1-3周)',
        urgency: 'MEDIUM (不是急单，可以等待)',
        confidence: 68
      },

      daily_action: {
        today: '监控收盘。IF closes >397.44 → 可激进追涨; ELSE → 等待回调',
        tomorrow: 'IF pulled back to 390-395 → 低吸建仓; ELSE IF above 400 → 观望或小仓跟进',
        this_week: '4/28前必须决策（避免财报风险）'
      }
    },

    {
      symbol: 'NASDAQ:BGC',
      rank: 2,

      // 三维度评分
      scores: {
        news_sentiment: {
          score: 62,
          reason: '情绪指数 +0.029 (中性偏看涨), 早期反转信号, 20%看涨 + 低hype风险',
          risk_level: 'LOW'
        },
        technical_analysis: {
          score: 48,
          reason: '仍在下跌，反转未确认，支撑接近，但4小时显示温和恢复',
          risk_level: 'HIGH'
        },
        fundamental_strength: {
          score: 58,
          reason: '财报改善迹象（re-rating机会），但资金仍在出货',
          risk_level: 'MEDIUM'
        }
      },

      // 综合评分
      composite_score: {
        weighted_score: 56,
        calculation: '(62 * 0.35 + 48 * 0.45 + 58 * 0.20) = 56',
        weight_explanation: {
          news: '35% (情绪基础)',
          technical: '45% (短期执行力最弱)',
          fundamental: '20% (长期质量)'
        }
      },

      // 交易方案
      trading_plan: {
        // 方案1: 等待下周
        conservative_plan: {
          type: '观望等待',
          status: '暂不入场',
          entry_price: 11.00,
          entry_range_low: 10.50,
          entry_range_high: 11.00,
          entry_condition: '等待支撑$11.32确认（2-3天）后再入',
          entry_reason: '支撑接近，反转未确认，风险太高',

          waiting_period: '2-3 days',
          confirmation_signal: '价格在$11.32上方站稳2-3个交易日',

          position_size: '2-3% portfolio',
          position_reason: '反转机会，但需谨慎',

          stop_loss: 10.30,
          stop_loss_pct: -6.36,
          stop_loss_reason: '日线BB下轨，破位则快速下行',

          target_1: 11.90,
          target_1_pct: 8.18,
          target_1_action: '获利1/3',

          target_2: 12.50,
          target_2_pct: 13.64,
          target_2_action: '获利1/3',

          target_3: 13.50,
          target_3_pct: 22.73,
          target_3_action: '获利1/3',

          time_horizon: '2-4 weeks (medium-term reversal)',
          risk_reward: '1 : 2 (6.36% risk : 22.73% potential)',

          advantages: [
            '反转机会更纯正',
            '风险/收益比高 (1:2)',
            '避免当前支撑危险',
            '基本面改善(re-rating)',
            '低hype风险'
          ],

          risks: [
            '支撑破位风险 (15%快速下跌到$10-8.90)',
            '反转信号仍需确认',
            '资金仍在出货 (MFI 20)'
          ],

          exit_signals: [
            '支撑$11.32破位 → 立即止损',
            '收盘在$11.50以上2-3根K线 → 反转确认，建仓',
            '对标目标跌破 → 部分止损'
          ]
        },

        // 方案2: 完全避开（现在）
        aggressive_avoid: {
          type: '暂不参与',
          status: '风险太高，等待',
          current_price: 11.38,
          support_level: 11.32,
          distance_to_support: -0.48,
          danger_level: 'CRITICAL',

          why_avoid: [
            '支撑极度接近 (0.48%)',
            '破位风险高 (>90%概率)',
            '资金在出货 (MFI 20)',
            '反转未确认'
          ],

          better_opportunity: '2-3天后，如支撑止稳再考虑',
          recommendation: '完全跳过，看下周机会'
        }
      },

      // 价位总结
      prices: {
        current: 11.38,
        critical_support: 11.32,
        safe_entry: 11.00,
        entry_range: '10.50 - 11.00',
        stop_loss: 10.30,
        target_1: 11.90,
        target_2: 12.50,
        target_3: 13.50,
        major_support: 8.90
      },

      // 最终推荐
      recommendation: {
        overall: 'WAIT_1_WEEK',
        primary: 'DO_NOT_TRADE_NOW',
        timeframe: '中期 (2-4周)',
        urgency: 'LOW (不急，下周更好)',
        confidence: 50,
        risk_assessment: 'CURRENTLY_TOO_RISKY'
      },

      daily_action: {
        today: '完全观望，不要追低',
        tomorrow: '继续观望，监控支撑$11.32',
        this_week: '如果站稳$11.32 + RSI>60 → 考虑下周建仓',
        next_week: '更好的entry机会'
      }
    }
  ],

  // 综合排序和建议
  final_recommendations: {

    overall_ranking: [
      {
        rank: 1,
        symbol: 'NASDAQ:AEIS',
        composite_score: 70,
        recommendation: '值得介入 (有条件)',
        urgency: 'MEDIUM',
        action: '如果今日收盘>397.44，明天可以激进追涨或等待回调低吸',
        best_entry: '$390-395 (等待回调)',
        alternative_entry: '$397.50 (激进追涨)',
        stop_loss: '$385.00',
        targets: '$400 / $405 / $415',
        time_horizon: '1-4 weeks'
      },
      {
        rank: 2,
        symbol: 'NASDAQ:BGC',
        composite_score: 56,
        recommendation: '暂不介入 (等待确认)',
        urgency: 'LOW',
        action: '完全跳过本周，下周再评估',
        best_entry: '$11.00 or lower (等待支撑确认)',
        safe_entry: '$10.50 (支撑测试后)',
        stop_loss: '$10.30',
        targets: '$11.90 / $12.50 / $13.50',
        time_horizon: '2-4 weeks'
      }
    ],

    portfolio_allocation: {
      total_capital: '10,000美元（示例）',

      AEIS: {
        allocation: '4,000美元 (40%)',
        entry_plan: {
          tranche_1: '2,000美元 (25%) → 397.50 (如果突破)',
          tranche_2: '2,000美元 (25%) → 390-395 (等待回调)'
        },
        position_size: '$4,000',
        risk_per_trade: '100美元 (1%)',
        reward_potential: '300+ 美元 (3%+)',
        risk_reward_ratio: '1:3 to 1:5'
      },

      BGC: {
        allocation: '0美元 (0%)',
        status: '观望',
        future_allocation: '3,000美元 (30%) - 如果支撑确认',

        entry_plan: {
          tranche_1: '1,500美元 (15%) → 11.00 (支撑确认)',
          tranche_2: '1,500美元 (15%) → 10.50 (二次测试)'
        },

        position_size: '待入',
        timing: '下周或5月初'
      },

      cash_reserve: {
        amount: '6,000美元 (60%)',
        purpose: 'AEIS回调时增加头寸 / BGC建仓准备 / 风险缓冲'
      }
    },

    trading_strategy_by_stock: {
      AEIS: {
        primary_strategy: 'TREND_FOLLOWING_WITH_PULLBACK',
        approach: '追涨结合低吸',
        execution: [
          {
            step: 1,
            condition: '今日收盘 > 397.44',
            action: '明天激进追涨 $397.50',
            position: '25% of intended size',
            stop: '$385.00'
          },
          {
            step: 2,
            condition: '价格跌至 390-395',
            action: '增加头寸到目标额度',
            position: '加到50-100% intended size',
            stop: '$385.00'
          },
          {
            step: 3,
            condition: '达到 $400-405',
            action: '获利1/3，保留2/3继续持有',
            position: '滚动止损到近期低点'
          },
          {
            step: 4,
            condition: '4月28日 / 出现sell信号',
            action: '全部清仓（避免4/29-5/4财报风险）',
            position: '完全退出'
          }
        ],

        key_milestones: {
          breakeven: 397.50,
          first_profit: 400.00,
          target_1: 405.00,
          target_2: 415.00,
          danger_zone: 'below 385'
        }
      },

      BGC: {
        primary_strategy: 'REVERSAL_CONFIRMATION_TRADING',
        approach: '等待反转确认后低位建仓',
        execution: [
          {
            step: 1,
            condition: '本周 / 价格站稳 $11.32 for 2-3 days',
            action: '反转初步确认',
            indicator: 'RSI cross 60, MACD cross 0.5'
          },
          {
            step: 2,
            condition: '下周一 / 反转完全确认',
            action: '低吸建仓 $11.00 or lower',
            position: '目标头寸50%',
            stop: '$10.30'
          },
          {
            step: 3,
            condition: '反弹到 $11.50',
            action: '增加头寸到100%',
            target: '$12.50+'
          },
          {
            step: 4,
            condition: 'RSI > 70 or 价格 > $12.50',
            action: '获利1/3，持有2/3'
          },
          {
            step: 5,
            condition: '价格 > $13.00',
            action: '部分止盈，滚动止损'
          }
        ],

        key_milestones: {
          entry_confirmation: 11.32,
          breakeven: 11.00,
          first_target: 11.90,
          target_2: 12.50,
          target_3: 13.50,
          danger_zone: 'below 10.30'
        }
      }
    },

    risk_management: {
      position_sizing: {
        AEIS: '2-3% of portfolio (high risk, overbought)',
        BGC: 'Wait - 2-3% when confirmed (medium risk)'
      },

      stop_loss_rules: {
        AEIS: {
          hard_stop: 385.00,
          action: 'MUST EXIT immediately',
          percentage: 2.95,
          no_exceptions: true
        },
        BGC: {
          hard_stop: 10.30,
          action: 'MUST EXIT immediately',
          percentage: 6.36,
          no_exceptions: true
        }
      },

      profit_taking: {
        AEIS: {
          take_1_3: 'at $400.00',
          take_2_3: 'at $405.00',
          take_remaining: 'at target or exit signal'
        },
        BGC: {
          take_1_3: 'at $11.90',
          take_1_2: 'at $12.50',
          take_remaining: 'at target or sell signal'
        }
      },

      exit_conditions: {
        AEIS: [
          'Hard stop $385.00 (non-negotiable)',
          'April 28 exit (avoid earnings risk 4/29-5/4)',
          'MACD turn negative (momentum failure)',
          'Volume dry-up on up days (exhaustion)'
        ],
        BGC: [
          'Hard stop $10.30 (non-negotiable)',
          'Support break below $11.32 (reversal failed)',
          'Downtrend continuation below $11.00'
        ]
      }
    },

    timing_recommendation: {
      today: {
        AEIS: '监控收盘。IF >397.44 → 明天追涨或等回调',
        BGC: '完全观望'
      },

      tomorrow: {
        AEIS: 'YES - 激进追涨 $397.50 OR 等待回调 $390-395',
        BGC: 'NO - 观望，不入场'
      },

      this_week: {
        AEIS: '建仓完毕 / 目标$400-405',
        BGC: '继续观望，监控支撑'
      },

      next_week: {
        AEIS: '目标达成或已出场（4/28），评估是否再次介入',
        BGC: 'IF 支撑确认 → 低吸建仓；ELSE → 继续避免'
      }
    }
  }
};

// 输出到文件
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const outputFile = `comprehensive_trading_analysis_${timestamp}.json`;

writeFileSync(outputFile, JSON.stringify(comprehensiveAnalysis, null, 2));

// 输出摘要
console.log(`\n${'='.repeat(100)}`);
console.log('📊 综合分析报告 - 最终排序与交易方案');
console.log('='.repeat(100));

console.log(`\n📈 股票综合排序:\n`);

comprehensiveAnalysis.final_recommendations.overall_ranking.forEach((item, idx) => {
  console.log(`${idx + 1}. ${item.symbol}`);
  console.log(`   综合评分: ${item.composite_score}/100`);
  console.log(`   推荐: ${item.recommendation}`);
  console.log(`   入场价: ${item.best_entry}`);
  console.log(`   止损价: ${item.stop_loss}`);
  console.log(`   目标价: ${item.targets}`);
  console.log();
});

console.log(`\n💰 建议资金配置:\n`);
console.log('AEIS: $4,000 (40%) - 立即参与');
console.log('BGC: $0 (0%) - 观望，下周再考虑');
console.log('现金储备: $6,000 (60%) - 追加/风险缓冲\n');

console.log(`✅ 详细交易方案已保存到: ${outputFile}\n`);

export default comprehensiveAnalysis;
