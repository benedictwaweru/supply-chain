param (
  [ValidateRange(1, 65535)]
  [int]$port
)

$processId = (netstat -aon | findstr ":$port" | Select-String "LISTENING").ToString().Split()[-1]

if ($processId) {
  Write-Host "Killing process on port $port (PID: $processId)"
  Stop-Process -Id $processId -Force
} else {
  Write-Host "Port $port is free"
}
