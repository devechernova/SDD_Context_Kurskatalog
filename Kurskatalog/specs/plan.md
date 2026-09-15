# SDD-Plan: Kurskatalog

## 1. Ziel des Plans

Der Plan beschreibt die technische und organisatorische Umsetzung des Kurskatalogs auf Basis der Spezifikation und der API-Dokumentation. Er legt die Aufbauprinzipien, die Projektschritte, Qualitätsanforderungen und Review-Regeln fest, ohne bereits HTML-, CSS- oder JavaScript-Implementierung zu schreiben.

## 2. Projektprinzipien

### 2.1 Technologie- und Architekturprinzipien
Gemäß der Constitution gilt:
- JavaScript mit NodeJS
- HTML und CSS
- Express als Server- und API-Integrationselement
- CSS-Variablen, Flexbox und Grid
- Tailwind CSS optional erlaubt
- Keine React-, Vue-, Angular-, NextJS-, Vite- oder Bootstrap-Implementierung

### 2.2 Qualitätsprinzipien
- Jede Funktion erhält eine eigene Test- und Doku-Referenz
- Testdateien erfolgen nach konsistentem Namensschema
- Änderungen werden im Onboarding protokolliert
- Die Dokumentation bleibt die zentrale Quelle der Wahrheit

## 3. Systemarchitektur

### 3.1 Überblick
Die Anwendung besteht aus drei Schichten:
1. Präsentationsschicht: HTML/CSS/Frontend-Logik zum Rendern des Kurskatalogs
2. Datenzugriffsschicht: API-Aufrufe gegen die Kurs-API
3. Dokumentations- und Qualitätslayer: Spezifikationen, Tests und Entwicklungsnotizen

### 3.2 Struktur

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
└── src/
```

## 4. Umsetzungspfad

### Phase 1: Projekt- und Datenverständnis
- Constitution lesen und interpretieren
- API-Dokumentation analysieren
- Mockup- und Layout-Ziel definieren
- Scope und Abgrenzung festlegen

### Phase 2: Datenmodell und API-Integration
- Kursdaten aus `GET /items/courses` lesen
- Felder für Darstellung festlegen
- Search-, Filter- und Meta-Parameter definieren
- Fehlerbehandlung auf API-Fehler vorbereiten

### Phase 3: Frontend-Umsetzung
- Startseite mit Hero-Bereich bauen
- Kurskarten kompositorisch strukturieren
- Filterchips und Suchfeld ergänzen
- ggf. leeren Zustand und Fehlschlagzustand festlegen

### Phase 4: Qualitäts- und Testphase
- Testordner nach Feature aufbauen
- Ergebnisse dokumentieren
- Zugriffsfunktionen und Interaktion prüfen
- Review nach Projektkriterien durchführen

### Phase 5: Abschlussdokumentation
- Änderungen in Onboarding festhalten
- Spezifikation und Aufgaben validieren
- Abschlussbewertung nach Akzeptanzkriterien

## 5. API-Integrationsstrategie

### 5.1 Routen und Nutzung
Die Anwendung nutzt primär:
- `GET /items/courses` für die Liste
- `GET /items/courses/:id` für Einzelnutzung
- `search`, `filter`, `sort`, `limit`, `page`, `meta` für den Katalog

### 5.2 Datenmapping
Die Karte muss mindestens folgende Werte auslesen:
- `id`
- `title`
- `description`
- `image` bzw. `image_url`
- `type.name`
- `date_created` (optional für Sortierung)
- `costs.value` (optional)

### 5.3 Fehlerstrategie
- Bei 400: ungültige Anfrage oder fehlende Pflichtfelder
- Bei 401: fehlender bzw. ungültiger Token
- Bei 403: Schreibversuch mit Lesetoken
- Bei 404: Kurs oder Route unbekannt
- Bei 500: allgemeine Serverfehlerbehandlung

## 6. UX- und Frontend-Entscheidungen

### 6.1 Layout
Die Seite eignet sich für eine single-page Kursübersicht mit klarer Header-/Katalogstruktur. Die Komposition folgt dem vorhandenen Mockup und stellt eine starke visuelle Hierarchie sicher.

### 6.2 Interaktive Elemente
- Filterchips als klar erkennbare Auswahl
- Suchfeld als primärer Zugriff auf filterbare Inhalte
- CTA-Links auf Kursdetails oder weitere Zielseiten

### 6.3 Accessibility
- Fokuszustände sichtbar
- semantische Struktur und klare Beschriftungen
- Bilder adäquat behandeln
- Tastaturzugriff für alle relevanten Funktionen

## 7. Qualitäts- und Review-Prozess

### 7.1 Review-Kriterien
Bei der Qualitätsprüfung werden geprüft:
- Funktionalität
- Vollständigkeit der Dokumentation
- API-Fehlerbehandlung
- Designkonsistenz mit dem Mockup
- Lesbarkeit und Wartbarkeit des Codes
- Einhaltung der Constitution

### 7.2 Testlauf
Ein Feature gilt als erfüllt, wenn:
- die Funktionalität gemäß Spezifikation umgesetzt ist
- der passende Testordner vorhanden ist
- die Dokumentation den Funktionseintrag enthält
- der Testlauf oder ein reproduzierbarer Nachweis vorliegt

## 8. Dokumentationspflichten

Die folgenden Dokumente sind maßgeblich:
- `Kurskatalog/specs/spec.md` – Was gebaut werden soll
- `Kurskatalog/specs/plan.md` – Wie gebaut wird
- `Kurskatalog/specs/task.md` – Welche Aufgaben ausgeführt werden
- `Kurskatalog/docs/Onboarding.md` – Historie, Vorgehensweisen und Projektstand

## 9. Risiken und Annahmen

### Risiken
- API-Daten können von Mockup oder Erwartung abweichen
- Filterlogik kann je nach Datenmodell unvollständig sein
- Bildressourcen oder Dateinamen können von der API-Abfrage abweichen

### Annahmen
- Das Projekt bleibt auf einen Kurskatalog fokussiert
- Die API liefert die Daten in der dokumentierten Form
- Der Fokus liegt auf Lesebetrieb und Präsentation, nicht auf Kursverwaltung

## 10. Abschluss

Der Plan schafft die Grundlage für eine saubere und nachvollziehbare Umsetzung des Kurskatalogs. Er verbindet technische Vorgaben, Filterungslogik, API-Anbindung und Qualitätsanforderungen in einem konsistenten SDD-Prozess und legt die Prüfungsbasis für spätere Implementierung und Review fest.
