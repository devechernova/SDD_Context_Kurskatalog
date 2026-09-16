# Onboarding und Projektgeschichte

## 1. Zweck

Dieses Dokument beschreibt den aktuellen Stand des Kurskatalog-Projekts und dokumentiert die Entscheidungen, den erreichten Fortschritt sowie die noch offenen Qualitäts- und Implementierungsaufgaben. Es dient als zentrale Projektgeschichte und als Referenz für Mitarbeitende und Agenten.

## 2. Projektkontext

Das Projekt ist ein Kurskatalog für Weiterbildungsangebote mit Fokus auf IT, Daten, Projektmanagement, Agile Methoden, Business Analyse, IT-Security und Karriere & Coaching. Die Anwendung orientiert sich an einem vorhandenen Mockup und an der definierten Kurs-API.

## 3. Aktueller technischer Stand

### 3.1 Technologien
Die Umsetzung folgt dem in der Constitution festgelegten Rahmen:
- JavaScript mit NodeJS
- HTML und CSS
- CSS-Variablen, Flexbox und Grid
- Express ist als Server-/Integrationsschicht vorgesehen
- Tailwind CSS ist erlaubt
- Frameworks wie React, Vue, Angular, NextJS, Vite und Bootstrap sind nicht Teil der Umsetzung

### 3.2 Aktuell vorhandene Struktur

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
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── tests/
│   └── (noch nicht angelegt)
└── package.json (falls später ergänzt)
```

## 4. Bereits umgesetzter Projektstand

### 4.1 Frontend-Basis
Die grundlegende Frontend-Ansicht wurde bereits realisiert:
- Header mit Logo und Navigation
- Hero-Bereich mit Überschrift, Beschreibung und Suchfeld
- Filterleiste mit Kategorien
- Kurskarten mit Bild, Badge, Titel, Kurzbeschreibung, Metadaten und Call-to-Action
- Responsive Layout mit CSS Grid/Flexbox
- Ausgabe der Kursliste im sichtbaren Bereich der Startseite

### 4.2 Interaktion
Die aktuelle JavaScript-Umsetzung enthält bereits:
- Suche im Client
- Filterung nach Kategorien
- Empty-State bei keinen Treffern
- Darstellung von Kurskarten
- API-Ladeversuch mit Fallback-Daten

### 4.3 API-Anbindung
Die App versucht, Daten aus der API zu laden und verwendet dabei:
- `GET /items/courses`
- Token-Header mit `12345`
- Fallback auf lokale Beispielwerte, falls die API nicht erreichbar ist

## 5. Offene Punkte und Qualitätslücken

Die aktuelle Umsetzung stellt einen funktionierenden Prototyp dar, aber noch keine vollständige, qualitätsgesicherte Produktreife. Offene Punkte sind:

- fehlende Testordner unter `tests/frontend`
- keine `result`-Ordner mit Zeitstempel-Dateien
- keine systematische Verifikation für Suche, Filter, API-Fehler und Accessibility
- Onboarding und SDD-Dokumentation müssen den realen Status widerspiegeln
- Fehler- und Leerzustände sind noch nicht vollständig als nutzerfreundliche Produktlösung abgesichert

## 6. Qualitätsprozess und Verifikation

Die in der Constitution geforderten Qualitätsregeln bleiben gültig, auch wenn sie im aktuellen Projektstand noch nicht vollständig umgesetzt sind. Folgende Regeln gelten weiterhin:

- Jeder Feature-Test erhält einen eigenen Ordner unter `./tests/frontend`
- Jeder Testordner enthält einen `result`-Ordner
- Testdateien werden nach dem Muster `JJJJ-MM-TT_HH-MM-SS` benannt
- Jede Funktion hat einen eigenen Dokumentations-Eintrag
- Jede Funktion hat mindestens einen Nachweis via XUnit-/Batch-/PowerShell-Test
- Änderungen werden in diesem Onboarding-Dokument protokolliert

## 7. Projektstatus

### Status: Frontend-Prototyp umgesetzt, Qualitätsphase offen

Der aktuelle Stand entspricht einem funktionierenden UI-Prototyp, der die wichtigsten Kurskatalog-Interaktionen bereits abbildet. Die Dokumentation und die Qualitätsanforderungen sind jedoch noch nicht vollständig auf den Implementierungsstand zurückgeführt.

Umgesetzt:
- Startseitenlayout
- Such- und Filterlogik
- Kurskartenliste
- API-Anbindung mit Fallback

Noch offen:
- vollständige Zustandsprüfung und Fehlerbehandlung
- Teststruktur und Nachweis
- Abschlussdokumentation und Projektreview

## 8. Historie

### 2026-09-15
- Constitution und API-Dokumentation analysiert
- Spezifikation, Plan und Aufgabenliste dokumentiert
- Initiales SDD-Setup angelegt

### 2026-09-16
- Frontend-Prototyp implementiert
- Kursliste, Suche und Filter umgesetzt
- API-Anbindung mit Fallback ergänzt
- Dokumentation auf aktuellen Stand korrigiert

## 9. Checkliste für zukünftige Änderungen

Vor jeder Änderung prüfen:
- [x] Spezifikation und Plan entsprechend dem aktuellen Stand validiert?
- [x] Taskliste mit aktivem Projektstatus abgestimmt?
- [ ] API-Änderung berücksichtigt?
- [ ] Testordner vorgesehen?
- [ ] Onboarding ergänzt?
- [ ] Qualitätsanforderungen eingehalten?

## 10. Fazit

Das Projekt befindet sich in einer aktiven Umsetzungsphase: Die Kernfunktionalität des Kurskatalogs ist im Frontend bereits sichtbar und nutzbar, aber die Qualitätssicherung, der vollständige Dokumentationsnachweis und die Abschlussprüfung sind noch offen. Die Dokumentation wurde daher auf den aktuellen Stand angepasst, ohne die zukünftigen Qualitätsanforderungen aus der Constitution zu vernachlässigen.
