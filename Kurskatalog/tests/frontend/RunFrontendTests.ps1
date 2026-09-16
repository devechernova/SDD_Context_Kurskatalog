$ErrorActionPreference = 'Stop'

$projectRoot = Resolve-Path (Join-Path $PSScriptRoot '..\..')
$htmlFile = Join-Path $projectRoot 'src\index.html'
$cssFile = Join-Path $projectRoot 'src\css\style.css'
$jsFile = Join-Path $projectRoot 'src\js\app.js'

function Add-TestResult {
    param(
        [string]$Name,
        [bool]$Passed,
        [string]$Details
    )

    return [pscustomobject]@{
        Name = $Name
        Passed = $Passed
        Details = $Details
    }
}

function Assert-Content {
    param(
        [string]$File,
        [string[]]$ExpectedParts,
        [string]$Name
    )

    if (-not (Test-Path $File)) {
        return Add-TestResult -Name $Name -Passed $false -Details "Datei fehlt: $File"
    }

    $content = Get-Content -Path $File -Raw
    $missing = @()

    foreach ($part in $ExpectedParts) {
        if (-not ($content.Contains($part))) {
            $missing += $part
        }
    }

    if ($missing.Count -gt 0) {
        return Add-TestResult -Name $Name -Passed $false -Details "Fehlende Inhalte: $($missing -join ', ')"
    }

    return Add-TestResult -Name $Name -Passed $true -Details 'Alle erwarteten Inhalte vorhanden.'
}

function Assert-Regex {
    param(
        [string]$File,
        [string]$Pattern,
        [string]$Name,
        [string]$Description
    )

    if (-not (Test-Path $File)) {
        return Add-TestResult -Name $Name -Passed $false -Details "Datei fehlt: $File"
    }

    $content = Get-Content -Path $File -Raw
    $match = [regex]::IsMatch($content, $Pattern)

    if (-not $match) {
        return Add-TestResult -Name $Name -Passed $false -Details "Regex nicht gefunden: $Pattern"
    }

    return Add-TestResult -Name $Name -Passed $true -Details $Description
}

$results = @()

$results += Assert-Content -File $htmlFile -ExpectedParts @(
    '<header class="site-header">',
    'id="course-list"',
    'aria-label="Kurse durchsuchen"',
    'data-filter="all"'
) -Name 'FR-01: Startseite und Kursübersicht'

$results += Assert-Content -File $jsFile -ExpectedParts @(
    'getFilteredCourses',
    'renderCourses',
    'searchInput.addEventListener',
    'filterButtons.forEach'
) -Name 'FR-02: Such- und Filterlogik vorhanden'

$results += Assert-Content -File $jsFile -ExpectedParts @(
    'fallbackCourses',
    'fetch',
    'Live-API konnte nicht geladen werden',
    "Authorization: 'Bearer 12345'"
) -Name 'FR-05: API-Anbindung und Fallback vorhanden'

$results += Assert-Content -File $jsFile -ExpectedParts @(
    'Keine Kurse zu diesem Filter gefunden.',
    'if (!visibleCourses.length)'
) -Name 'FR-06: Empty-State im Frontend definiert'

$results += Assert-Content -File $cssFile -ExpectedParts @(
    '@media (max-width: 640px)',
    '.course-grid',
    '.chip',
    '.card-link'
) -Name 'FR-08: Responsive Layout und Styling vorhanden'

$results += Assert-Regex -File $htmlFile -Pattern 'aria-live="polite"|aria-label="Kurse durchsuchen"' -Name 'FR-07: Barrierefreiheit-Attribute vorhanden' -Description 'Accessible-Attribute gefunden.'
$results += Assert-Regex -File $cssFile -Pattern 'focus|:focus|outline' -Name 'FR-07: Fokuszustand im Styling definiert' -Description 'Fokusstil im CSS gefunden.'

$timestamp = Get-Date -Format 'yyyy-MM-dd_HH-mm-ss'
$resultDir = Join-Path $PSScriptRoot "result\$timestamp"
New-Item -ItemType Directory -Force -Path $resultDir | Out-Null

$summaryPath = Join-Path $resultDir 'summary.md'
$passCount = ($results | Where-Object { $_.Passed -eq $true }).Count
$failCount = ($results | Where-Object { $_.Passed -eq $false }).Count

$lines = @(
    '# Frontend-Testresultat',
    '',
    "- Zeitstempel: $timestamp",
    "- Erfolgreich: $passCount",
    "- Fehlgeschlagen: $failCount",
    '',
    '## Einzelprüfungen'
)

foreach ($result in $results) {
    $marker = if ($result.Passed) { 'PASS' } else { 'FAIL' }
    $lines += "- [$marker] $($result.Name) - $($result.Details)"
}

$lines | Set-Content -Path $summaryPath

Write-Host 'Frontend-Qualitätstests' -ForegroundColor Cyan
Write-Host '====================' -ForegroundColor Cyan

foreach ($result in $results) {
    $marker = if ($result.Passed) { '[PASS]' } else { '[FAIL]' }
    Write-Host "$marker $($result.Name) - $($result.Details)"
}

Write-Host "`nErgebnis: $passCount erfolgreich, $failCount fehlgeschlagen" -ForegroundColor Cyan
Write-Host "Detailed report: $summaryPath" -ForegroundColor Cyan

if ($failCount -gt 0) {
    exit 1
}

exit 0
