@echo off
cd /d D:\trade_workspace\tradingview-mcp
node pipeline/1-scan/scan_stocks.js --symbols=filepath=./watchlist/cn.txt --output=./watchlist/cn_selected.txt > temp\scan_cn_output.log 2>&1
