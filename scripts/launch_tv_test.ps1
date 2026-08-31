# Set env var and launch TradingView via AppX activation
$env:ELECTRON_EXTRA_LAUNCH_ARGS = "--remote-debugging-port=9222"

# Try multiple launch methods
Write-Host "[1] Trying shell:AppsFolder..."
try {
    Start-Process "explorer.exe" -ArgumentList "shell:AppsFolder\TradingView.Desktop_n534cwy3pjxzj!TradingView.Desktop"
    Write-Host "    Launched via shell:AppsFolder"
} catch { Write-Host "    Failed: $_" }

Start-Sleep -Seconds 3

Write-Host "[2] Trying direct exe launch..."
try {
    Start-Process -FilePath "D:\Program Files\TradingView\TradingView.exe"
    Write-Host "    Launched directly"
} catch { Write-Host "    Failed: $_" }

Write-Host "Waiting for CDP..."
for ($i = 1; $i -le 10; $i++) {
    Start-Sleep -Seconds 5
    try {
        $r = Invoke-WebRequest -Uri "http://127.0.0.1:9222/json/version" -UseBasicParsing -TimeoutSec 3
        Write-Host "CDP READY at attempt $($i): $($r.Content)"
        exit 0
    } catch {}
    Write-Host "  Attempt $($i): not ready"
}
Write-Host "CDP FAILED after 10 attempts"
exit 1
