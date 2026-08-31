$env:ELECTRON_EXTRA_LAUNCH_ARGS = "--remote-debugging-port=9222"
Write-Host "Env set, launching..."
$proc = Start-Process -FilePath "D:\Program Files\TradingView\TradingView.exe" -PassThru
Write-Host "PID: $($proc.Id)"
Start-Sleep -Seconds 20
try {
    $r = Invoke-WebRequest -Uri "http://127.0.0.1:9222/json/version" -UseBasicParsing -TimeoutSec 5
    Write-Host "CDP: $($r.Content)"
} catch {
    Write-Host "CDP not available"
}
