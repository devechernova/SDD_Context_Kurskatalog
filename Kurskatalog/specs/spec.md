# SDD-Spezifikation: Kurskatalog

## 1. Zielsetzung

Das Projekt ist ein Kurskatalog für Weiterbildungsangebote im Bereich IT, Daten, Projektmanagement, Agile Methoden, Business Analyse, IT-Security und Karriere & Coaching. Die Anwendung zeigt kuratierte Lernangebote in einer übersichtlichen, gut nutzbaren Oberfläche an und ermöglicht eine schnelle Suche und Filterung nach relevanten Themen.

Das Produkt orientiert sich am bereitgestellten Mockup und bezieht die Daten aus der definierten API. Die Kernanforderung ist ein funktionaler, gut dokumentierter Katalog, der Nutzerinnen und Nutzern schnell Orientierung bietet.

## 2. Aktueller Projektstatus

Der aktuelle Stand entspricht einem funktionierenden Frontend-Prototyp und nicht noch einer vollständig abgeschlossenen produktionsreifen Lösung.

### Bereits umgesetzt
- Startseite mit Hero-Bereich, Suchfeld und Überschrift
- Kurskarten mit Bild, Kategorie, Titel, Kurzbeschreibung, Format und Dauer
- Filter nach Kategorien
- Suchfunktion im Frontend
- API-Anbindung mit Fallback-Daten
- Responsive Grundlayout nach Mockup

### Noch offen oder nur teilweise umgesetzt
- durchgängige Fehlerbehandlung mit klaren Nutzer-Feedbacks
- vollständige Qualitätsprüfung mit Testordnern und Ergebnisdateien
- strukturelle Sicherung nach den Qualitätsregeln der Constitution
- Abschlussdokumentation und Review-Nachweise

## 3. Projektkontext

### 3.1 Produktidee

Der Kurskatalog stellt eine zentrale Übersicht über verfügbare Weiterbildungskurse dar. Jede Kurskarte enthält die wichtigsten Informationen auf einen Blick: Kategorie, Titel, Kurzbeschreibung, Format und Dauer. Nutzerinnen und Nutzer können gezielt nach Themen suchen und die Liste nach Kategorien filtern.

### 3.2 Nutzungsszenario

Ein Nutzer besucht die Startseite, sucht nach einem Thema wie „Power BI“ oder „Scrum“ und filtert nach einem Bereich wie „Daten & BI“ oder „Agile Methoden“. Anschließend erkennt er schnell, welche Kurse geeignet sind und welche Formate bzw. Laufzeiten relevant sind.

## 4. Anforderungen

### 4.1 Funktionale Anforderungen

#### FR-01: Startseite mit Kursübersicht
Die Anwendung zeigt beim Aufruf der Startseite eine Hero-Section mit Überschrift, Beschreibung und Suchfeld sowie eine Kursübersicht an.

Status: umgesetzt im Prototyp.

Akzeptanzkriterium:
- Die Startseite rendert ohne zusätzliche Benutzereingaben.
- Der Katalogbereich ist im sichtbaren Bereich der Hauptseite sichtbar.

#### FR-02: Kurskarten
Für jeden Kurs wird eine Kartenansicht mit Bild, Kategorie-Badge, Titel, Kurzbeschreibung, Format, Dauer und CTA-Link dargestellt.

Status: umgesetzt im Prototyp.

#### FR-03: Kategoriefilter
Der Nutzer kann zwischen den angebotenen Kategorien wechseln.

Status: umgesetzt im Prototyp.

#### FR-04: Volltextsuche
Die Anwendung bietet ein Suchfeld, das nach relevanten Begriffen in Kursbezeichnungen und Beschreibungen sucht.

Status: umgesetzt im Prototyp.

#### FR-05: Datenabfrage aus API
Die Kursdaten werden aus der definierten API bezogen. Die Anwendung verarbeitet die Antwortstruktur mit `data` als Array oder Objekt.

Status: teilweise umgesetzt. Die Anbindung funktioniert grundsätzlich; die vollständige Robustheit und Mehrfachfallbehandlung sind noch zu abschließen.

#### FR-06: Erfolgs- und Leerzustände
Wenn keine Treffer vorhanden sind oder ein Fehler auftritt, zeigt die Oberfläche einen geeigneten Zustandskontext an.

Status: teilweise umgesetzt. Leerzustand ist vorhanden; Fehlerbehandlung und nutzerfreundliche Meldung müssen weiterverfeinert werden.

#### FR-07: Barrierefreiheit
Die Oberfläche muss relevante Interaktionen über Tastatur und passende visuelle Zustände unterstützen.

Status: teilweise umgesetzt. Grundstruktur vorhanden, aber keine vollständige Accessiblity-Prüfung und Dokumentation.

#### FR-08: Responsive Darstellung
Die Oberfläche muss auf verschiedenen Bildschirmgrößen nutzbar sein.

Status: umgesetzt im Prototyp.

## 5. Nichtfunktionale Anforderungen

### 5.1 Technische Vorgaben
Gemäß der Constitution gilt für dieses Projekt:
- JavaScript mit NodeJS
- HTML und CSS
- CSS-Variablen, Flexbox und Grid
- Express
- Tailwind CSS ist erlaubt
- Keine anderen Frameworks wie React, Vue, Angular, NextJS, Vite oder Bootstrap

Status: grundsätzlich eingehalten.

### 5.2 Qualitätsanforderungen
- Jeder Feature-Test bekommt einen eigenen Ordner unter `./tests/frontend`
- Jeder Testordner enthält einen `result`-Ordner
- Testdateien werden nach dem Muster `JJJJ-MM-TT_HH-MM-SS` benannt
- Jede Funktion hat einen eigenen Dokumentations-Eintrag
- Jede Funktion hat mindestens einen entsprechenden Nachweis via XUnit-/Batch-/PowerShell-Test
- Jede Änderung und Entwicklungshistorie wird in `Kurskatalog/docs/Onboarding.md` dokumentiert

Status: noch offen.

### 5.3 Performance
- Die Startseite soll schnell rendern und mit überschaubaren Datenmengen performant bleiben.
- Die API-Abfragen müssen gezielt erfolgen.
- Die Filterung soll auf der Client-Seite möglichst effizient erfolgen.

Status: für den Prototyp ausreichend; später verifizieren.

### 5.4 Wartbarkeit
- Die Struktur muss klar und erweiterbar bleiben.
- API- und Datenlogik sollen von der Präsentationslogik getrennt werden.
- Benennung und Organisation müssen konsistent sein.

Status: teilweise erfüllt; weitere Refactoring-Schritte sind noch notwendig.

## 6. API-Anforderungen

### 6.1 Basisadresse
Die Entwicklung orientiert sich an:
- `http://localhost:4000`

Zusätzlich wird in der Constitution ein API-Token mit folgendem Wert genannt:
- `12345`

### 6.2 Authentifizierung
Für Lesezugriffe kann ein fester Token verwendet werden. Schreibzugriffe erfordern ein Anmelde-Token.

Wichtige Regeln:
- `GET /items/courses` liefert die Kursliste
- `GET /items/courses/:id` liefert einen Eintrag
- `POST`, `PATCH` und `DELETE` benötigen eine Authentifizierung
- Fehlercodes müssen entsprechend gemäß API-Spezifikation behandelt werden

Status: Grundsatz umgesetzt; Fehlerfälle und Randfälle werden noch verfeinert.

### 6.3 Abfrageparameter
Die Anwendung muss mit folgenden API-Funktionen umgehen:
- `fields`
- `search`
- `filter`
- `sort`
- `limit`
- `page`
- `meta`

Status: Teilweise im Prototyp abgedeckt, aber noch nicht vollständig in der Produktqualität validiert.

## 7. Datenmodell

Die Kursdaten folgen dem Directus-ähnlichen Datenmodell der API. Das grundlegende Kursobjekt umfasst unter anderem:

```json
{
  "id": 45001,
  "title": "Business Intelligence mit Power BI",
  "description": "Kennzahlen aufbereiten, Berichte gestalten ...",
  "image": "power-bi-kurs.jpg",
  "image_url": "http://localhost:4000/images/power-bi-kurs.jpg",
  "type": { "name": "Seminar" },
  "costs": { "value": 2990, "currency": { "short": "EUR" } },
  "degree": { "title": "Zertifikat" },
  "keywords": [{ "course_keywords_id": { "name": "Power BI" } }],
  "date_created": "2026-09-15T00:00:00.000Z"
}
```

Die Anwendung verwendet aus dem Objekt die für die Kartenansicht nötigen Informationen. Die vollständige Datenstruktur ist in der API-Dokumentation beschrieben.

## 8. Design und UX-Requirements

### 8.1 Stil
Der Kurskatalog ist modern, sachlich und hochwertig. Die Oberfläche ist nicht überladen und fokussiert auf die zentrale Aufgabe: Kurse schnell finden und vergleichen.

Status: im Prototyp erfüllt.

### 8.2 Informationshierarchie
Die Reihenfolge der Wichtigkeit ist:
1. Kategorie
2. Titel
3. Kurzbeschreibung
4. Format
5. Dauer
6. CTA-Link

Status: erfüllt im aktuellen UI.

### 8.3 Interaktion
- Hover- und Fokuszustände sollen klar sichtbar sein
- Cards sollten mit Raum, Schatten und Abständen sauber abgesetzt werden
- Filterchips sollen visuell als Auswahlmechanismus erkennbar sein

Status: grundsätzlich erfüllt.

## 9. Abgrenzung / Scope

### Im Scope
- Darstellung des Kursangebots auf einer Landingpage
- Kategoriefilter
- Textsuche
- Kartenansicht
- Responsive Layout
- API-Integration für Lesezugriffe
- Fehler- und Leerzustände
- Dokumentation der Architektur und Teststrategien

### Nicht im Scope
- Adminbereich für Kursverwaltung
- Login-System mit Benutzerauthentifizierung für Endnutzer
- Zahlung und Buchung
- komplette Detailseiten mit vollständigen Kursinhalten
- Kommentar-, Bewertungs- oder Empfehlungsfunktionen
- technische Migration oder Backend-Entwicklung außerhalb des Kurskatalogs

## 10. Akzeptanzkriterien

AC-01: Beim Aufruf der Startseite erscheint die Kopfzeile mit Überschrift und Suchfeld. - Status: erfüllt im Prototyp.
AC-02: Der Kurskatalog zeigt eine Liste aller verfügbaren Kurse als Karten an. - Status: erfüllt im Prototyp.
AC-03: Die Filterung nach Kategorie funktioniert korrekt und setzt sich visuell hervor. - Status: erfüllt im Prototyp.
AC-04: Die Volltextsuche filtert Treffer basierend auf Titel und Beschreibung. - Status: erfüllt im Prototyp.
AC-05: Wenn keine Kurse passen, erscheint ein klarer Leerzustand. - Status: teilweise erfüllt.
AC-06: Die Seite bleibt auf kleinen und großen Bildschirmen nutzbar. - Status: erfüllt im Prototyp.
AC-07: Interaktive Elemente sind per Tastatur nutzbar. - Status: teilweise geprüft, noch nicht abschließend verifiziert.
AC-08: Die API-Daten werden konsistent und fehlerfrei in die Oberfläche übernommen. - Status: teilweise erfüllt.
AC-09: Die dokumentierten Qualitätsanforderungen werden in der Entwicklung eingehalten. - Status: noch offen.

## 11. Teststrategie

Die Tests werden in einem separaten Testbereich organisiert. Für jede funktionale Einheit wird ein eigener Ordner unter `tests/frontend` angelegt. Für jeden Test wird zudem ein `result`-Ordner mit Zeitstempel-Datensätzen erstellt.

Wichtige Prüfungen:
- Auswahl eines Filters zeigt nur passende Kurse an
- Suchanfrage liefert erwartete Treffer oder leeren Zustand
- API-Fehler werden sauber behandelt
- Layout bleibt auf verschiedenen Bildschirmgrößen lesbar
- Fokus- und Tastaturnavigation funktionieren

Status: geplant, aber noch nicht umgesetzt.

## 12. Abschluss

Die vorliegende Spezifikation beschreibt den aktuellen Projektstand realistisch: Der Kurskatalog liegt als funktionaler Frontend-Prototyp vor, die wichtigsten Features sind umgesetzt, und die verbleibenden Qualitätsanforderungen werden in der nächsten Entwicklungsphase abgeschlossen. Die Dokumentation folgt damit dem tatsächlichen Stand und benennt die noch offenen Aufgaben ausdrücklich.
