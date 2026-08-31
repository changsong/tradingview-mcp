@echo off
REM Simple TradingView launch script
D:
cd "D:\Program Files\TradingView"
start "" "D:\Program Files\TradingView\TradingView.exe" --remote-debugging-port=9222
exit /b 0
