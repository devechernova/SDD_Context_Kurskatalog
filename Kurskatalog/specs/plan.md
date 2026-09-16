# SDD-Plan: Kurskatalog

## 1. Ziel des Plans

Der Plan beschreibt den aktuellen technischen und organisatorischen Stand des Kurskatalog-Projekts sowie den nächsten notwendigen Reifegrad. Die SDD-Dokumentation bildet die Grundlage für die Umsetzung und dokumentiert die Differenz zwischen dem bereits realisierten Frontend-Prototyp und den noch offenen Qualitätsanforderungen.

## 2. Aktueller Umsetzungsstand

### Bereits umgesetzt
- HTML-Struktur der Startseite nach Mockup
- CSS-Layout mit responsivem Grid/Flexbox-Ansatz
- Kurskarten-Komponente und Filterchips
- Suchfunktion im Frontend
- API-Ladeversuch mit Fallback-Daten

### Noch offen
- vollständige Fehlerlogik für API- und Datenfehler
- Tests und Nachweise nach Dateisystemvorgaben
- Abschlussdokumentation und Review-Prozesse

## 3. Projektprinzipien

### 3.1 Technologie- und Architekturprinzipien
Gemäß der Constitution gilt:
- JavaScript mit NodeJS
- HTML und CSS
- Express als Server-/Integrationsschicht
- CSS-Variablen, Flexbox und Grid
- Tailwind CSS optional erlaubt
- Keine React-, Vue-, Angular-, NextJS-, Vite- oder Bootstrap-Implementierung

### 3.2 Qualitätsprinzipien
- Jede Funktion erhält eine eigene Test- und Doku-Referenz
- Testdateien erfolgen nach konsistentem Namensschema
- Änderungen werden im Onboarding protokolliert
- Die Dokumentation bleibt die zentrale Quelle der Wahrheit

## 4. Systemarchitektur

### 4.1 Überblick
Die Anwendung besteht aktuell aus drei Schichten:
1. Präsentationsschicht: HTML/CSS/Frontend-Logik zum Rendern des Kurskatalogs
2. Datenzugriffsschicht: API-Aufrufe gegen die Kurs-API mit Fallback-Strategie
3. Dokumentations- und Qualitätslayer: Spezifikationen, Projektplan, Aufgaben und Historie

### 4.2 Struktur

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
│   └── frontend/
└── package.json (falls später ergänzt)
```

## 5. Umsetzungspfad

### Phase 1: Projekt- und Datenverständnis
- Constitution lesen und interpretieren
- API-Dokumentation analysieren
- Mockup- und Layout-Ziel definieren
- Scope und Abgrenzung festlegen

Status: abgeschlossen.

### Phase 2: Datenmodell und API-Integration
- Kursdaten aus `GET /items/courses` lesen
- Felder für Darstellung festlegen
- Search-, Filter- und Meta-Parameter definieren
- Fehlerbehandlung auf API-Fehler vorbereiten

Status: teilweise umgesetzt; die Integration funktioniert grundlegend, aber nicht vollständig qualitätsgesichert.

### Phase 3: Frontend-Umsetzung
- Startseite mit Hero-Bereich bauen
- Kurskarten kompositorisch strukturieren
- Filterchips und Suchfeld ergänzen
- leeren Zustand und Fallback-Zustand einbauen

Status: abgeschlossen als Prototyp.

### Phase 4: Qualitäts- und Testphase
- Testordner nach Feature aufbauen
- Ergebnisse dokumentieren
- Zugriffsfunktionen und Interaktion prüfen
- Review nach Projektkriterien durchführen

Status: noch offen.

### Phase 5: Abschlussdokumentation
- Änderungen in Onboarding festhalten
- Spezifikation und Aufgaben validieren
- Abschlussbewertung nach Akzeptanzkriterien

Status: in Bearbeitung.

## 6. API-Integrationsstrategie

### 6.1 Routen und Nutzung
Die Anwendung nutzt primär:
- `GET /items/courses` für die Liste
- `GET /items/courses/:id` für Einzelnutzung
- `search`, `filter`, `sort`, `limit`, `page`, `meta` für den Katalog

### 6.2 Datenmapping
Die Karte liest derzeit die wichtigsten Werte aus:
- `id`
- `title`
- `description`
- `image_url`
- `type.name`
- `education_type.name`
- `keywords`

### 6.3 Fehlerstrategie
- Bei 400: ungültige Anfrage oder fehlende Pflichtfelder
- Bei 401: fehlender bzw. ungültiger Token
- Bei 403: Schreibversuch mit Lesetoken
- Bei 404: Kurs oder Route unbekannt
- Bei 500: allgemeine Serverfehlerbehandlung

Status: Basisstrategie definiert; UI- und Logikabschluss noch offen.

## 7. UX- und Frontend-Entscheidungen

### 7.1 Layout
Die Seite eignet sich für eine single-page Kursübersicht mit klarer Header-/Katalogstruktur. Die Komposition folgt dem vorhandenen Mockup und stellt eine starke visuelle Hierarchie sicher.

### 7.2 Interaktive Elemente
- Filterchips als klar erkennbare Auswahl
- Suchfeld als primärer Zugriff auf filterbare Inhalte
- CTA-Links auf Kursdetails oder weitere Zielseiten

### 7.3 Accessibility
- Fokuszustände sichtbar
- semantische Struktur und klare Beschriftungen
- Bilder adäquat behandeln
- Tastaturzugriff für alle relevanten Funktionen

Status: Basis vorhanden, aber nicht abschließend verifiziert.

## 8. Qualitäts- und Review-Prozess

### 8.1 Review-Kriterien
Bei der Qualitätsprüfung werden geprüft:
- Funktionalität
- Vollständigkeit der Dokumentation
- API-Fehlerbehandlung
- Designkonsistenz mit dem Mockup
- Lesbarkeit und Wartbarkeit des Codes
- Einhaltung der Constitution

### 8.2 Testlauf
Ein Feature gilt als erfüllt, wenn:
- die Funktionalität gemäß Spezifikation umgesetzt ist
- der passende Testordner vorhanden ist
- die Dokumentation den Funktionseintrag enthält
- der Testlauf oder ein reproduzierbarer Nachweis vorliegt

Status: noch nicht vollständig umgesetzt.

## 9. Dokumentationspflichten

Die folgenden Dokumente sind maßgeblich:
- `Kurskatalog/specs/spec.md` – Was gebaut werden soll und was derzeit umgesetzt ist
- `Kurskatalog/specs/plan.md` – Wie gebaut wird und wo der aktuelle Reifegrad liegt
- `Kurskatalog/specs/task.md` – Welche Aufgaben ausgeführt bzw. offen sind
- `Kurskatalog/docs/Onboarding.md` – Historie, Vorgehensweisen und Projektstatus

## 10. Risiken und Annahmen

### Risiken
- API-Daten können von Mockup oder Erwartung abweichen
- Filterlogik kann je nach Datenmodell unvollständig sein
- Bildressourcen oder Dateinamen können von der API-Abfrage abweichen
- Dokumentations- und Qualitätslücken können in der nächsten Phase noch auffallen

### Annahmen
- Das Projekt bleibt auf einen Kurskatalog fokussiert
- Die API liefert die Daten in der dokumentierten Form
- Der Fokus liegt auf Lesebetrieb und Präsentation, nicht auf Kursverwaltung

## 11. Abschluss

Der aktuelle Plan spiegelt den realen Projektstand wider: Das Frontend ist als funktionaler Prototyp umgesetzt, die nächsten Schritte liegen in der Qualitätsphase und in der vollständigen Dokumentations- und Testabsicherung. Die SDD-Dokumentation wurde deshalb auf den tatsächlichen Entwicklungsstand angepasst, statt noch einen rein idealisierten Zielzustand zu beschreiben.
