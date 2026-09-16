# Frontend-Qualitätstests

Dieses Verzeichnis enthält die Qualitätsnachweise für den Kurskatalog gemäß den Anforderungen der Constitution.

## Inhalt

- `RunFrontendTests.ps1`: zentrale Testausführung
- `result/`: Ausgabe der Testresultate mit Zeitstempel

## Testbereiche

- Seitenstruktur und Rendering
- Suchfunktion und Filterlogik
- API-Lade- und Fallback-Logik
- Empty-State und Fehlerbehandlung
- Responsive Layout und Accessibility-Elemente

## Ausführung

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File ".\Kurskatalog\tests\frontend\RunFrontendTests.ps1"
```

## Qualitätskriterium

Ein Testlauf gilt als erfolgreich, wenn alle Prüfungen im Ergebnisbereich mit `PASS` abgeschlossen werden und der Exit-Code 0 ist.
