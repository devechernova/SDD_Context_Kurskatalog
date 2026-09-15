# Onboarding und Projektgeschichte

## 1. Zweck

Dieses Dokument dokumentiert den Entwicklungsfortschritt, die Projektentscheidungen, die Ausrichtung auf die Spezifikationen und die Qualitätsanforderungen des Kurskatalog-Projekts. Es dient als zentrale Historie für Mitarbeitende und Agenten, damit Wiederholungen, Fehlentscheidungen und unklare Implementierungen vermieden werden.

## 2. Projektkontext

Das Projekt ist ein Kurskatalog für Weiterbildungsangebote. Die Anwendung soll den Nutzerinnen und Nutzern in kurzer Zeit eine übersichtliche Auswahl passender Kurse ermöglichen. Die Umsetzung orientiert sich an einem vorhandenen Mockup und an einer definierten API-Dokumentation.

## 3. Technischer Rahmen

### 3.1 Technologie
Nach der Constitution gilt für das Projekt:
- JavaScript mit NodeJS
- HTML und CSS
- Express
- CSS-Variablen, Flexbox und Grid
- Tailwind CSS ist erlaubt
- Frameworks wie React, Vue, Angular, NextJS, Vite und Bootstrap sind nicht erlaubt

### 3.2 Projektstruktur

```text
Kurskatalog/
├── .specify/
│   └── memory/
│       └── constitution.md
├── data/
│   └── API.md
├── docs/
│   └── Onboarding.md
├── mockup/
│   ├── index.html
│   ├── styles.css
│   └── images/
├── specs/
│   ├── spec.md
│   ├── plan.md
│   ├── task.md
│   └── frontend/
├── tests/
│   └── frontend/
├── src/
└── package.json (falls später ergänzt)
```

## 4. API- und Datenbasis

Die API-Dokumentation ist die zentrale Grundlage für die Kursdaten. Wichtige Eckpunkte:
- Basisadresse: `http://localhost:4000`
- Token gemäß Constitution: `12345`
- Lesezugriff über `GET /items/courses`
- Einzeldaten über `GET /items/courses/:id`
- Filter-, Such- und Sortierparameter als Bestandteil der API-Spezifikation
- Fehlercodes gemäß API-Contract

Die Anwendung soll sich an diese Regeln halten und die Daten nur in der Form verarbeiten, die für die Anzeige im Kurskatalog erforderlich ist.

## 5. Qualitätsprozess

Die Constitution definiert zwingende Qualitätsregeln:

- Jeder Feature-Test erhält einen eigenen Ordner unter `./tests/frontend`
- Jeder Testordner enthält einen `result`-Ordner
- Testdateien werden mit dem Format `JJJJ-MM-TT_HH-MM-SS` benannt
- Jede Funktion hat einen eigenen Dokumentations-Eintrag
- Jede Funktion hat mindestens einen XUnit-Test (nur Batch- und PowerShell-Tests)
- Änderungen und Entwicklung werden in diesem Onboarding-Dokument festgehalten

## 6. Entwicklungsvorgehen

### 6.1 SDD-Prozess
1. Spezifikation dokumentieren
2. Plan erstellen
3. Aufgaben definieren
4. Umsetzung mit Review und Tests
5. Ergebnis dokumentieren und im Onboarding festhalten

### 6.2 Review-Anforderungen
- Die Spezifikation bleibt die maßgebliche Quelle der Wahrheit
- Jede Änderung muss dokumentarisch nachvollziehbar sein
- Die Umsetzung muss die Constitution und API-Spezifikation respektieren

## 7. Projektstatus

### Status: Dokumentation initialisiert

Die Dokumentationsbasis wurde gemäß den Projektvorgaben aufgestellt:
- Spezifikation dokumentiert
- Plan dokumentiert
- Aufgabenliste dokumentiert
- Onboarding erstellt

Noch keine HTML-, CSS- oder JavaScript-Implementierung wurde erstellt. Der Fokus liegt aktuell auf der sauberen Dokumentation und Aufbereitung der Anforderungen.

## 8. Historie

### 2026-09-15
- Einleitung des Kurskatalog-Projekts in der SDD-Struktur
- Constitution und API-Dokumentation analysiert
- Spezifikation, Plan und Tasks für das Projekt dokumentiert
- Onboarding-Dokument ergänzt

## 9. Checklist für zukünftige Änderungen

Vor jeder Änderung prüfen:
- [ ] Spezifikation angepasst?
- [ ] Plan aktualisiert?
- [ ] Taskliste überprüft?
- [ ] API-Änderung berücksichtigt?
- [ ] Testordner vorgesehen?
- [ ] Onboarding ergänzt?
- [ ] Qualitätsanforderungen eingehalten?

## 10. Fazit

Das Projekt ist klar auf eine dokumentierte, qualitätsorientierte und API-basierte Umsetzung ausgerichtet. Das Dokumentationsmodell ist damit vorbereitet, damit die eigentliche Implementierung strukturiert, überprüfbar und nachvollziehbar erfolgen kann.
