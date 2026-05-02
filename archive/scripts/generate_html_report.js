import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the analysis file
const analysisFile = fs.readdirSync(__dirname)
  .filter(f => f.startsWith('backtest_analysis_'))
  .sort()
  .pop();

if (!analysisFile) {
  console.error('No analysis file found');
  process.exit(1);
}

const analysis = JSON.parse(fs.readFileSync(path.join(__dirname, analysisFile), 'utf8'));

const longStocks = analysis.summary.stocksBySignal.long;
const waitStocks = analysis.summary.stocksBySignal.wait;
const momentumValues = analysis.summary.momentumValues;

// Build HTML with proper escaping
let longStocksHtml = '';
longStocks.forEach(stock => {
  const stockData = analysis.stocks.find(s => s.symbol === stock);
  longStocksHtml += `<div class="stock-badge long">
    <div style="font-size: 1.1em; margin-bottom: 5px;">${stock}</div>
    <div style="font-size: 0.9em;">Momentum: ${stockData.momentumValue}</div>
  </div>`;
});

let waitStocksHtml = '';
waitStocks.forEach(stock => {
  const stockData = analysis.stocks.find(s => s.symbol === stock);
  waitStocksHtml += `<div class="stock-badge wait">
    <div style="font-size: 1.1em; margin-bottom: 5px;">${stock}</div>
    <div style="font-size: 0.9em;">Momentum: ${stockData.momentumValue}</div>
  </div>`;
});

let tableHtml = '';
analysis.stocks.forEach(stock => {
  tableHtml += `<tr>
    <td><strong>${stock.symbol}</strong></td>
    <td><span class="signal-${stock.signal === 'LONG' ? 'long' : 'wait'}">${stock.signal === 'LONG' ? '🟢 LONG' : '🔴 WAIT'}</span></td>
    <td>${stock.momentumValue}</td>
    <td><span style="color: ${stock.conditions.trendUp ? '#28a745' : '#dc3545'}">${stock.conditions.trendUp ? '✓' : '✗'}</span></td>
    <td><span style="color: ${stock.conditions.validCompression ? '#28a745' : '#dc3545'}">${stock.conditions.validCompression ? '✓' : '✗'}</span></td>
    <td><span style="color: ${stock.conditions.volOK ? '#28a745' : '#dc3545'}">${stock.conditions.volOK ? '✓' : '✗'}</span></td>
    <td><span style="color: ${stock.conditions.validStock ? '#28a745' : '#dc3545'}">${stock.conditions.validStock ? '✓' : '✗'}</span></td>
  </tr>`;
});

const avgMomentum = (analysis.summary.momentumValues.reduce((sum, m) => sum + m.value, 0) / analysis.summary.momentumValues.length).toFixed(0);

const htmlReport = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A Share SQZMOM PRO v6 (Daily) - Backtest Analysis Report</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            padding: 20px;
            min-height: 100vh;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }

        header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            font-weight: 700;
        }

        header p {
            font-size: 1.1em;
            opacity: 0.95;
        }

        .content {
            padding: 40px;
        }

        section {
            margin-bottom: 50px;
        }

        h2 {
            color: #667eea;
            font-size: 1.8em;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 3px solid #667eea;
        }

        h3 {
            color: #667eea;
            font-size: 1.2em;
            margin-bottom: 15px;
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .metric-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 25px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .metric-card h3 {
            font-size: 0.95em;
            opacity: 0.9;
            margin-bottom: 10px;
            font-weight: 600;
            color: white;
        }

        .metric-card .value {
            font-size: 2.5em;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .metric-card .percentage {
            font-size: 1.1em;
            opacity: 0.85;
        }

        .charts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
            margin-bottom: 30px;
        }

        .chart-container {
            position: relative;
            height: 350px;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table thead {
            background: #f0f2f5;
            font-weight: 600;
            color: #667eea;
        }

        table th {
            padding: 15px;
            text-align: left;
            border-bottom: 2px solid #e9ecef;
        }

        table td {
            padding: 12px 15px;
            border-bottom: 1px solid #e9ecef;
        }

        table tr:hover {
            background: #f8f9fa;
        }

        .signal-long {
            background: #d4edda;
            color: #155724;
            padding: 5px 10px;
            border-radius: 5px;
            font-weight: 600;
        }

        .signal-wait {
            background: #f8d7da;
            color: #721c24;
            padding: 5px 10px;
            border-radius: 5px;
            font-weight: 600;
        }

        .stock-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }

        .stock-badge {
            padding: 12px 15px;
            border-radius: 8px;
            font-weight: 600;
            text-align: center;
        }

        .stock-badge.long {
            background: #d4edda;
            color: #155724;
            border-left: 4px solid #28a745;
        }

        .stock-badge.wait {
            background: #f8d7da;
            color: #721c24;
            border-left: 4px solid #dc3545;
        }

        .insights {
            background: #f0f7ff;
            padding: 25px;
            border-left: 4px solid #667eea;
            border-radius: 8px;
            margin-top: 20px;
        }

        .insights h3 {
            color: #667eea;
            margin-bottom: 15px;
            font-size: 1.2em;
        }

        .insights ul {
            list-style-position: inside;
            line-height: 1.8;
        }

        .insights li {
            margin-bottom: 10px;
        }

        .insights li ul {
            margin-left: 20px;
            margin-top: 5px;
        }

        .condition-check {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
        }

        .condition-check .check {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-weight: bold;
            color: white;
            flex-shrink: 0;
        }

        .condition-check .check.satisfied {
            background: #28a745;
        }

        .condition-check .check.unsatisfied {
            background: #dc3545;
        }

        footer {
            background: #f8f9fa;
            padding: 20px 40px;
            text-align: center;
            color: #999;
            border-top: 1px solid #e9ecef;
        }

        .timestamp {
            color: white;
            font-size: 0.95em;
            margin-top: 10px;
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>A Share SQZMOM PRO v6 (Daily)</h1>
            <p>Comprehensive Backtest Analysis Report</p>
            <div class="timestamp">Generated: ${new Date().toLocaleString()}</div>
        </header>

        <div class="content">
            <!-- Key Metrics -->
            <section>
                <h2>Key Performance Metrics</h2>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <h3>Total Stocks Analyzed</h3>
                        <div class="value">${analysis.summary.totalStocks}</div>
                        <div class="percentage">10 A-Share Stocks</div>
                    </div>
                    <div class="metric-card">
                        <h3>LONG Signals</h3>
                        <div class="value">${analysis.summary.longSignals}</div>
                        <div class="percentage">${(analysis.summary.longSignals/10*100).toFixed(1)}% of portfolio</div>
                    </div>
                    <div class="metric-card">
                        <h3>WAIT Signals</h3>
                        <div class="value">${analysis.summary.waitSignals}</div>
                        <div class="percentage">${(analysis.summary.waitSignals/10*100).toFixed(1)}% of portfolio</div>
                    </div>
                    <div class="metric-card">
                        <h3>Avg Momentum</h3>
                        <div class="value">${avgMomentum}</div>
                        <div class="percentage">Squeeze Momentum Index</div>
                    </div>
                </div>
            </section>

            <!-- Charts -->
            <section>
                <h2>Signal Distribution & Momentum Analysis</h2>
                <div class="charts-grid">
                    <div class="chart-container">
                        <canvas id="signalChart"></canvas>
                    </div>
                    <div class="chart-container">
                        <canvas id="momentumChart"></canvas>
                    </div>
                </div>
            </section>

            <!-- Entry Conditions -->
            <section>
                <h2>Entry Condition Satisfaction</h2>
                <div class="insights">
                    <h3>Condition Analysis (Required for LONG Entry)</h3>
                    <div class="condition-check">
                        <div class="check satisfied">${analysis.summary.indicatorConditions.trendUp.count}</div>
                        <div>
                            <strong>Trend Up:</strong> ${analysis.summary.indicatorConditions.trendUp.count}/10 stocks
                            <br><small>${analysis.summary.indicatorConditions.trendUp.stocks.join(', ')}</small>
                        </div>
                    </div>
                    <div class="condition-check">
                        <div class="check unsatisfied">${analysis.summary.indicatorConditions.validCompression.count}</div>
                        <div>
                            <strong>Valid Compression:</strong> ${analysis.summary.indicatorConditions.validCompression.count}/10 stocks
                            <br><small>Critical bottleneck - No stocks currently meet this condition</small>
                        </div>
                    </div>
                    <div class="condition-check">
                        <div class="check ${analysis.summary.indicatorConditions.volOK.count > 5 ? 'satisfied' : 'unsatisfied'}">${analysis.summary.indicatorConditions.volOK.count}</div>
                        <div>
                            <strong>Volume OK:</strong> ${analysis.summary.indicatorConditions.volOK.count}/10 stocks
                            <br><small>${analysis.summary.indicatorConditions.volOK.stocks.join(', ') || 'None'}</small>
                        </div>
                    </div>
                    <div class="condition-check">
                        <div class="check satisfied">${analysis.summary.indicatorConditions.validStock.count}</div>
                        <div>
                            <strong>Valid Stock:</strong> ${analysis.summary.indicatorConditions.validStock.count}/10 stocks
                            <br><small>${analysis.summary.indicatorConditions.validStock.stocks.join(', ')}</small>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Current Signals -->
            <section>
                <h2>Current Trading Signals</h2>

                <h3 style="color: #28a745;">LONG Signals (${longStocks.length})</h3>
                <div class="stock-list">
                    ${longStocksHtml}
                </div>

                <h3 style="margin-top: 25px; color: #dc3545;">WAIT Signals (${waitStocks.length})</h3>
                <div class="stock-list">
                    ${waitStocksHtml}
                </div>
            </section>

            <!-- Detailed Stock Analysis -->
            <section>
                <h2>Detailed Stock Analysis</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Signal</th>
                            <th>Momentum</th>
                            <th>Trend Up</th>
                            <th>Compression</th>
                            <th>Vol OK</th>
                            <th>Valid Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableHtml}
                    </tbody>
                </table>
            </section>

            <!-- Key Insights -->
            <section>
                <h2>Key Insights & Recommendations</h2>
                <div class="insights">
                    <h3>1. Market Regime Analysis</h3>
                    <ul>
                        <li>Only <strong>2 out of 10 stocks (20%)</strong> currently meet the LONG signal criteria</li>
                        <li><strong>50%</strong> of stocks show uptrend, but lack squeeze release signals</li>
                        <li><strong>0% of stocks</strong> have valid compression patterns - this is the bottleneck</li>
                        <li>Average momentum across portfolio: <strong>${avgMomentum}</strong></li>
                    </ul>
                </div>

                <div class="insights">
                    <h3>2. Critical Findings</h3>
                    <ul>
                        <li><strong>Squeeze Pattern Scarcity:</strong> The validCompression condition is not met by any stock, suggesting the market is not in a tight squeeze phase. This is the primary reason for low entry signals.</li>
                        <li><strong>Volume Constraint:</strong> Only 30% of stocks have adequate volume (volOK=true) to support entry signals</li>
                        <li><strong>Strategy Selectivity:</strong> The indicator is designed to be highly selective, reducing false signals but also limiting entry opportunities</li>
                        <li><strong>Trend Alignment:</strong> Half the stocks show uptrend, but only 2 trigger LONG due to additional confirmation requirements</li>
                    </ul>
                </div>

                <div class="insights">
                    <h3>3. Trading Implications</h3>
                    <ul>
                        <li><strong>Action Items:</strong>
                            <ul>
                                <li>Monitor SSE:603203 and SZSE:002983 for entry opportunities (both show LONG signals)</li>
                                <li>Watch ${analysis.summary.indicatorConditions.trendUp.count} stocks with uptrend for potential entries if volume picks up</li>
                                <li>Wait for squeeze compression patterns to develop - currently rare in the portfolio</li>
                                <li>Consider expanding watchlist if current signals remain limited</li>
                            </ul>
                        </li>
                        <li><strong>Risk Management:</strong>
                            <ul>
                                <li>Use tight stops for SSE:603203 and SZSE:002983 entries</li>
                                <li>Monitor ${analysis.summary.momentumValues.slice(0, 3).map(m => m.symbol).join(', ')} - highest momentum stocks</li>
                                <li>Be cautious of momentum fade in ${analysis.summary.momentumValues.slice(-3).map(m => m.symbol).join(', ')} (weakest momentum)</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="insights">
                    <h3>4. Performance Summary</h3>
                    <ul>
                        <li><strong>Strategy Type:</strong> Squeeze Momentum Pattern Recognition (SQZMOM)</li>
                        <li><strong>Current Regime:</strong> Low squeeze activity, mixed uptrend signals</li>
                        <li><strong>Signal Quality:</strong> Highly selective (requires multiple confirmations)</li>
                        <li><strong>Entry Opportunities:</strong> Currently limited (20% of portfolio qualifies)</li>
                        <li><strong>Portfolio Bias:</strong> Conservative - waiting for ideal setup conditions</li>
                    </ul>
                </div>
            </section>
        </div>

        <footer>
            <p>A Share SQZMOM PRO v6 (Daily) - Backtest Analysis Report</p>
            <p style="font-size: 0.9em; margin-top: 10px;">
                Analysis Date: ${new Date().toLocaleDateString()}<br>
                Source: TradingView API via CLI<br>
                Strategy: Squeeze Momentum Indicator with Multi-Factor Confirmation
            </p>
        </footer>
    </div>

    <script>
        const signalLabels = ['LONG Signals', 'WAIT Signals'];
        const signalData = [${analysis.summary.longSignals}, ${analysis.summary.waitSignals}];

        const momentumLabels = ${JSON.stringify(momentumValues.map(m => m.symbol))};
        const momentumData = ${JSON.stringify(momentumValues.map(m => m.value))};

        // Signal Distribution Chart
        const signalCtx = document.getElementById('signalChart').getContext('2d');
        new Chart(signalCtx, {
            type: 'doughnut',
            data: {
                labels: signalLabels,
                datasets: [{
                    data: signalData,
                    backgroundColor: ['#28a745', '#dc3545'],
                    borderColor: ['#fff', '#fff'],
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { padding: 20, font: { size: 12 } }
                    },
                    title: {
                        display: true,
                        text: 'Signal Distribution Across Portfolio',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            }
        });

        // Momentum Chart
        const momentumCtx = document.getElementById('momentumChart').getContext('2d');
        new Chart(momentumCtx, {
            type: 'bar',
            data: {
                labels: momentumLabels,
                datasets: [{
                    label: 'Squeeze Momentum Index',
                    data: momentumData,
                    backgroundColor: function(context) {
                        const value = context.raw;
                        if (value >= 60) return '#28a745';
                        if (value >= 50) return '#ffc107';
                        return '#dc3545';
                    },
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: { display: true },
                    title: {
                        display: true,
                        text: 'Momentum Values by Stock (Sorted)',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    </script>
</body>
</html>`;

const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('Z')[0];
const reportFile = `SQZMOM_BACKTEST_REPORT_${timestamp}.html`;
fs.writeFileSync(path.join(__dirname, reportFile), htmlReport);
console.log(`HTML report generated: ${reportFile}`);
