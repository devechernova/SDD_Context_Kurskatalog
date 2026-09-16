# SDD-Taskliste: Kurskatalog

## 1. Aufgabenprinzip

Die Aufgabenliste dient als operative Umsetzung der Spezifikation. Jede Aufgabe beschreibt ein klar abgegrenztes Arbeitspaket mit Ziel, Eingaben, erwarteten Ergebnissen, Testanforderungen und Validierungsmerkmalen. Der aktuelle Stand zeigt, dass das Projekt bereits einen funktionalen Frontend-Prototyp erreicht hat, aber die Qualitätsphase noch nicht abgeschlossen ist.

## 2. Aufgabenübersicht

### TASK-01: Projektstruktur und Dokumentationsbasis aufsetzen
**Status: Erledigt**

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
- Qualitätsanforderungen aus der Constitution sind bewusst berücksichtigt

---

### TASK-02: API-Datenmodell verstehen und absichern
**Status: Teilweise erledigt**

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

**Aktueller Stand:**
- Die Anwendung nutzt die API-Basis bereits, aber die vollständige Robustheit und die Randfallbehandlung müssen noch gesichert werden.

---

### TASK-03: Mockup- und Layout-Requirements analysieren
**Status: Erledigt**

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

**Aktueller Stand:**
- Im Frontend umgesetzt und visuell nutzbar.

---

### TASK-04: Kursliste rendern
**Status: Erledigt**

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

**Aktueller Stand:**
- Im Prototyp umgesetzt.

---

### TASK-05: Kategoriefilter implementieren
**Status: Erledigt**

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

**Aktueller Stand:**
- Funktional im Prototyp umgesetzt.

---

### TASK-06: Volltextsuche realisieren
**Status: Erledigt**

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

**Aktueller Stand:**
- Funktional im Prototyp umgesetzt.

---

### TASK-07: Leerzustand und Fehlerbehandlung definieren
**Status: Teilweise erledigt**

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

**Aktueller Stand:**
- Leerzustand vorhanden; Fehlerpfad muss weiter verbessert und in der UI deutlich sichtbar dokumentiert werden.

---

### TASK-08: Responsive und barrierefreie Oberfläche absichern
**Status: Teilweise erledigt**

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

**Aktueller Stand:**
- Responsive Grundlayout erfüllt; formale Accessibility-Prüfung und vollständige Tastaturverifikation stehen noch aus.

---

### TASK-09: API-Anbindung implementieren
**Status: Teilweise erledigt**

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

**Aktueller Stand:**
- Grundfunktion vorhanden, aber vollständige Fehlerbehandlung und Datenvalidierung sind noch offen.

---

### TASK-10: Qualitätsprüfung und Abschlussdokumentation
**Status: Offen**

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

**Aktueller Stand:**
- Noch nicht abgeschlossen. Dies ist die nächste Priorität nach dem Frontend-Prototyp.

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

## 5. Priorisierter nächster Schritt

Die nächste Priorität ist die Qualitätsphase:
1. Testordner und Nachweis erstellen
2. API-Fehlerzustände sauber dokumentieren und im UI umsetzen
3. Onboarding, Spezifikation und Plan final validieren
4. Abschlussreview gegen die Akzeptanzkriterien durchführen
