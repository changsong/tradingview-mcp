@echo off
echo ================================================================================
echo Chrome 调试模式启动脚本
echo ================================================================================
echo.
echo 配置信息:
echo   端口: 9222
echo   配置目录: C:\chrome-debug-profile
echo.
echo 使用说明:
echo   1. Chrome将在调试模式下启动
echo   2. 请访问 https://xueqiu.com 并登录
echo   3. 完成滑动验证
echo   4. 保持浏览器打开
echo   5. 在另一个终端运行: node test_xueqiu_cdp.js
echo.
echo ================================================================================
echo.

"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\chrome-debug-profile"

if errorlevel 1 (
    echo.
    echo ❌ Chrome启动失败
    echo.
    echo 可能的原因:
    echo   1. Chrome未安装在默认位置
    echo   2. 端口9222已被占用
    echo.
    echo 解决方案:
    echo   1. 检查Chrome安装路径
    echo   2. 运行: netstat -ano ^| findstr 9222
    pause
)
