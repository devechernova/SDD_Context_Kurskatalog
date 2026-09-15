# SDD-Taskliste: Kurskatalog

## 1. Aufgabenprinzip

Die Aufgabenliste dient als operative Umsetzung der Spezifikation. Jede Aufgabe beschreibt ein klar abgegrenztes Arbeitspaket mit Ziel, Eingaben, erwarteten Ergebnissen, Testanforderungen und Validierungsmerkmalen.

## 2. Aufgabenübersicht

### TASK-01: Projektstruktur und Dokumentationsbasis aufsetzen
**Ziel:**
Die Grundstruktur des Projekts und die SDD-Dokumentation werden angelegt.

**Eingaben:**
- Constitution
- Projektstruktur
- Vorgaben der API-Dokumentation

**Erwartete Ergebnisse:**
- Ordnerstruktur nach SDD-Konvention vorhanden
- Spezifikation, Plan und Task-Datei angelegt
- Onboarding-Dokument vorhanden

**Validierung:**
- Dokumente sind vollständig und konsistent
- Qualitätsanforderungen aus der Constitution sind erfüllt

---

### TASK-02: API-Datenmodell verstehen und absichern
**Ziel:**
Die für den Kurskatalog notwendigen API-Antworten und Parameter werden dokumentiert und für die Umsetzung vorbereitet.

**Eingaben:**
- `Kurskatalog/data/API.md`
- Datenmodell der Kursobjekte

**Erwartete Ergebnisse:**
- Feldliste für Kurskarten definiert
- Pflichtfelder und optionale Felder festgelegt
- API-Fehlerbehandlung in der Umsetzung berücksichtigt

**Validierung:**
- Jede verwendete Kursinformation ist mit einem API-Feld belegt
- Such- und Filterparameter sind nachvollziehbar dokumentiert

---

### TASK-03: Mockup- und Layout-Requirements analysieren
**Ziel:**
Die visuelle Struktur des Katalogs wird aus dem Mockup abgeleitet und in Anforderungen übersetzt.

**Eingaben:**
- `Kurskatalog/mockup/index.html`
- visuelle Vorgaben im Mockup

**Erwartete Ergebnisse:**
- Hero-Bereich definiert
- Kartenlayout definiert
- Filterbar definiert
- CTA-Elemente und Meta-Informationen festgelegt

**Validierung:**
- Die Sichtstruktur entspricht dem Mockup
- Alle Angaben der Spezifikation sind im Layout abbildbar

---

### TASK-04: Kursliste rendern
**Ziel:**
Die Kursliste wird als übersichtliche Kartenansicht aufgebaut.

**Eingaben:**
- Kursdaten aus API
- Layout-Definitionen

**Erwartete Ergebnisse:**
- Alle Kurse werden als Cards angezeigt
- Bild, Titel, Beschreibung, Kategorie und Meta-Informationen sind sichtbar
- CTA-Link vorhanden

**Validierung:**
- Jede Karte enthält die definierten Pflichtbestandteile
- Darstellung bleibt konsistent über die Liste hinweg

---

### TASK-05: Kategoriefilter implementieren
**Ziel:**
Nutzerinnen und Nutzer können die Kurse nach Kategorie filtern.

**Eingaben:**
- Kategorieliste aus der Spezifikation
- Kursdaten mit `type.name` oder entsprechender Kategorieangabe

**Erwartete Ergebnisse:**
- Filterchips für alle Kategorien vorhanden
- Aktive Auswahl wird visuell hervorgehoben
- Nur passende Kurse werden angezeigt

**Validierung:**
- Filterauswahl erzeugt das erwartete Ergebnis
- „Alle Kurse“ setzt den Zustand zurück

---

### TASK-06: Volltextsuche realisieren
**Ziel:**
Eine passende Suchfunktion findet Kurse anhand von Titel und Beschreibung.

**Eingaben:**
- Suchfeld-Definition
- API-Parameter `search`

**Erwartete Ergebnisse:**
- Suchfeld ist im Layout eingebunden
- Suche filtert die Kursliste entsprechend
- Ergebnisliste passt zur Suchanfrage

**Validierung:**
- Suchbegriff wie „Power BI“ oder „Scrum“ liefert passende Treffer
- Kein Absturz bei leerem Treffergebnis

---

### TASK-07: Leerzustand und Fehlerbehandlung definieren
**Ziel:**
Die Oberfläche behandelt keine Treffer und API-Fehler sauber.

**Eingaben:**
- API-Fehlercodes
- Produktanforderungen

**Erwartete Ergebnisse:**
- Leerzustand für keine Treffer
- Fehlerzustand für API- oder Ladeprobleme
- verständliche Nutzeranweisungen

**Validierung:**
- Keine unklaren oder technischen Endlosschleifen
- Zustände sind benutzerfreundlich gestaltet

---

### TASK-08: Responsive und barrierefreie Oberfläche absichern
**Ziel:**
Die Anwendung bleibt auf allen relevanten Bildschirmgrößen und mit Tastatur nutzbar.

**Eingaben:**
- UX- und Accessibility-Requirements
- Mockup

**Erwartete Ergebnisse:**
- Responsive Layout
- sichtbare Fokuszustände
- semantisch saubere Markups
- lesbare Abstände und Kontraste

**Validierung:**
- Tastaturnavigation funktioniert
- Inhalte bleiben auf kleinen Bildschirmen lesbar

---

### TASK-09: API-Anbindung implementieren
**Ziel:**
Die Kursdaten werden mit der Projekt-API verknüpft.

**Eingaben:**
- API-Dokumentation
- Token- und Auth-Strategie

**Erwartete Ergebnisse:**
- Lesezugriffe an API-Endpunkten funktionieren
- Daten werden korrekt transformiert
- Fehlerfälle werden sauber verarbeitet

**Validierung:**
- Erfolgsfälle werden korrekt angezeigt
- 401/403/404/500 werden behandelt

---

### TASK-10: Qualitätsprüfung und Abschlussdokumentation
**Ziel:**
Die Umsetzung wird geprüft und dokumentiert.

**Eingaben:**
- Akzeptanzkriterien
- Teststrategie
- Onboarding-Vorgaben

**Erwartete Ergebnisse:**
- Testordner vorhanden
- `result`-Dateien mit Zeitstempel angelegt
- Onboarding aktualisiert
- Abschlussstatus dokumentiert

**Validierung:**
- Alle Anforderungen aus Spezifikation und Plan erfüllt
- Historie und Entscheidungen sind nachvollziehbar dokumentiert

## 3. Task-Validierungsvorlage

Jeder Task sollte nach folgendem Muster validiert werden:

- Ziel erfüllt?
- Eingangsdaten vollständig?
- Ausgabe nachvollziehbar?
- Testfall vorhanden?
- Dokumentation aktuell?
- Qualitätskriterien eingehalten?

## 4. Definition of Done

Ein Task gilt als abgeschlossen, wenn:
- der gewünschte Effekt in der Spezifikation implementierbar ist
- die Aufgabe dokumentiert wurde
- der passende Test oder Nachweis vorhanden ist
- die Ergebnisse in den Projektunterlagen nachvollziehbar sind
- die Standards der Constitution und der SDD-Dokumentation eingehalten wurden
