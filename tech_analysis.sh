#!/bin/bash

symbols="SZSE:300661,SZSE:301345,SZSE:300037,SZSE:002475,SZSE:300750,SZSE:002245,SZSE:300408,SSE:605198"

echo "🔬 开始技术面分析..."
echo ""

# 保存分析结果的 JSON 数组
echo "[" > tech_results.json

first=true

for symbol in ${symbols//,/ }; do
  echo "📊 分析 $symbol..."
  
  if [ "$first" = false ]; then
    echo "," >> tech_results.json
  fi
  first=false
  
  # 切换股票
  node src/cli/index.js symbol $symbol > /dev/null 2>&1
  
  echo "{" >> tech_results.json
  echo "  \"symbol\": \"$symbol\"," >> tech_results.json
  echo "  \"timeframes\": {" >> tech_results.json
  
  first_tf=true
  for tf in "1" "4" "D" "W"; do
    if [ "$first_tf" = false ]; then
      echo "," >> tech_results.json
    fi
    first_tf=false
    
    # 切换时间周期
    node src/cli/index.js timeframe $tf > /dev/null 2>&1
    
    # 获取 OHLCV 数据
    data=$(node src/cli/index.js ohlcv -n 100 2>/dev/null)
    
    echo "    \"$tf\": $data" >> tech_results.json
  done
  
  echo "" >> tech_results.json
  echo "  }" >> tech_results.json
  echo "}" >> tech_results.json
  
  sleep 1
done

echo "" >> tech_results.json
echo "]" >> tech_results.json

echo ""
echo "✅ 数据收集完成！"

