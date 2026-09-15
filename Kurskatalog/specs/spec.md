# SDD-Spezifikation: Kurskatalog

## 1. Zielsetzung

Das Projekt ist ein Kurskatalog für Weiterbildungsangebote im Bereich IT, Daten, Projektmanagement, Agile Methoden, Business Analyse, IT-Security und Karriere & Coaching. Die Anwendung zeigt kuratierte Lernangebote in einer übersichtlichen, gut nutzbaren Oberfläche an und ermöglicht eine schnelle Suche und Filterung nach relevanten Themen.

Das Produkt soll sich an das bereitgestellte Mockup orientieren und dabei die Daten aus der definierten API beziehen. Die Kernanforderung ist ein funktionaler, stabiler und gut dokumentierter Katalog, der den Nutzerinnen und Nutzern eine schnelle Orientierung und Entscheidungshilfe bietet.

## 2. Projektkontext

### 2.1 Produktidee

Der Kurskatalog stellt eine zentrale Übersicht über verfügbare Weiterbildungskurse dar. Jede Kurskarte enthält die wichtigsten Informationen auf einen Blick: Kategorie, Titel, Kurzbeschreibung, Format und Dauer. Nutzerinnen und Nutzer können gezielt nach Themen suchen, die Liste nach Kategorien filtern und die passendsten Angebote leichter identifizieren.

### 2.2 Nutzungsszenario

Ein Nutzer besucht die Startseite, sucht nach einem Thema wie „Power BI“ oder „Scrum“ und filtert nach einem Bereich wie „Daten & BI“ oder „Agile Methoden“. Anschließend erkennt er schnell, welche Kurse geeignet sind und welche Formate bzw. Laufzeiten relevant sind.

## 3. Anforderungen

### 3.1 Funktionale Anforderungen

#### FR-01: Startseite mit Kursübersicht
Die Anwendung zeigt beim Aufruf der Startseite eine Hero-Section mit Überschrift, Beschreibung und Suchfeld sowie eine Kursübersicht an.

Akzeptanzkriterium:
- Die Startseite rendert ohne zusätzliche Benutzereingaben.
- Die Überschrift entspricht der Anzahl der Kursangebote.
- Der Katalogbereich ist im sichtbaren Bereich der Hauptseite sichtbar.

#### FR-02: Kurskarten
Für jeden Kurs wird eine Kartenansicht mit folgenden Informationen dargestellt:
- Bild
- Kategorie-Badge
- Titel
- Kurzbeschreibung
- Format
- Dauer
- CTA-Link („Zum Kurs“)

Akzeptanzkriterium:
- Jede Karte zeigt die Pflichtinformationen in konsistenter Reihenfolge.
- Die Darstellung ist auf Desktop- und Mobilgeräten lesbar.

#### FR-03: Kategoriefilter
Der Nutzer kann zwischen den angebotenen Kategorien wechseln:
- Alle Kurse
- Programmierung
- Daten & BI
- Projektmanagement
- Agile Methoden
- Business Analyse
- IT-Security
- Karriere & Coaching

Akzeptanzkriterium:
- Ein Klick auf eine Kategorie zeigt nur passende Kurse.
- Die Auswahl wird visuell hervorgehoben.
- „Alle Kurse“ setzt den Filter zurück.

#### FR-04: Volltextsuche
Die Anwendung bietet ein Suchfeld, das nach relevanten Begriffen in Kursbezeichnungen und Beschreibungen sucht.

Akzeptanzkriterium:
- Ein treffender Suchbegriff reduziert die Kursliste entsprechend.
- Suche und Filter kombinieren sich sinnvoll.
- Ein leerer Suchergebniszustand wird sauber dargestellt.

#### FR-05: Datenabfrage aus API
Die Kursdaten werden aus der definierten API bezogen. Die Anwendung verarbeitet die Antwortstruktur mit `data` als Array oder Objekt.

Akzeptanzkriterium:
- API-Fehler werden abgebildet und ohne Absturz behandelt.
- Die Daten werden in die Kurskarten übernommen.
- Die Datenbasis entspricht dem API-Schema.

#### FR-06: Erfolgs- und Leerzustände
Wenn keine Treffer vorhanden sind oder ein Fehler auftritt, zeigt die Oberfläche einen geeigneten Zustandskontext an.

Akzeptanzkriterium:
- Ein leerer Zustand ist deutlich erkennbar.
- Fehlermeldungen sind verständlich und ohne technische Details.

#### FR-07: Barrierefreiheit
Die Oberfläche muss relevante Interaktionen über Tastatur und passende visuelle Zustände unterstützen.

Akzeptanzkriterium:
- Fokusindikatoren sind sichtbar.
- Links und Steuerungselemente sind semantisch korrekt.
- Bilder besitzen sinnvolle Alt-Attribute oder dekorative Behandlung.

#### FR-08: Responsive Darstellung
Die Oberfläche muss auf verschiedenen Bildschirmgrößen nutzbar sein.

Akzeptanzkriterium:
- Die Karten werden responsiv angepasst.
- Die Navigation und Filter bleiben auch auf kleineren Bildschirmen nutzbar.

## 4. Nichtfunktionale Anforderungen

### 4.1 Technische Vorgaben
Gemäß der Constitution gilt für dieses Projekt:
- JavaScript mit NodeJS
- HTML und CSS
- CSS-Variablen, Flexbox und Grid
- Express
- Tailwind CSS ist erlaubt
- Keine anderen Frameworks wie React, Vue, Angular, NextJS, Vite oder Bootstrap

### 4.2 Qualitätsanforderungen
- Jede funktionale Einheit bekommt einen eigenen Testordner unter `./tests/frontend`
- Jeder Testordner enthält einen `result`-Ordner
- Testdateien werden nach dem Muster `JJJJ-MM-TT_HH-MM-SS` benannt
- Jede Funktion hat eine eigene Doku-Referenz
- Jede Funktion hat mindestens einen entsprechenden XUnit-Test (nur Batch- und PowerShell-Tests)
- Jede Änderung und Entwicklungshistorie wird in `Kurskatalog/docs/Onboarding.md` dokumentiert

### 4.3 Performance
- Die Startseite soll schnell rendern und mit überschaubaren Datenmengen performant bleiben.
- Die API-Abfragen müssen gezielt und ohne unnötige Datenmengen erfolgen.
- Die Filterung soll auf der Client-Seite mit wenig Reaktionszeit erfolgen.

### 4.4 Wartbarkeit
- Die Struktur muss klar und erweiterbar bleiben.
- API- und Datenlogik sollen von der Präsentationslogik getrennt werden.
- Benennung und Organisation müssen konsistent sein.

## 5. API-Anforderungen

### 5.1 Basisadresse
Die Entwicklung orientiert sich an:
- `http://localhost:4000`

Zusätzlich wird in der Constitution ein API-Token mit folgendem Wert genannt:
- `12345`

### 5.2 Authentifizierung
Für Lesezugriffe kann ein fester Token verwendet werden. Schreibzugriffe erfordern ein Anmelde-Token.

Wichtige Regeln:
- `GET /items/courses` liefert die Kursliste
- `GET /items/courses/:id` liefert einen Eintrag
- `POST`, `PATCH` und `DELETE` benötigen eine Authentifizierung
- Fehlercodes müssen entsprechend gemäß API-Spezifikation behandelt werden

### 5.3 Abfrageparameter
Die Anwendung muss mit folgenden API-Funktionen umgehen:
- `fields`
- `search`
- `filter`
- `sort`
- `limit`
- `page`
- `meta`

Wichtige Vorgaben:
- `search` durchsucht Titel und Beschreibung
- Filter können über `filter[...]` oder JSON-Notation erfolgen
- `meta` liefert zusätzliche Berechnungsdaten zur Pagination

## 6. Datenmodell

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

Die Anwendung verwendet aus dem Objekt die Informationen, die zur Darstellung der Kurskarten erforderlich sind. Die vollständige Datenstruktur ist in der API-Dokumentation beschrieben.

## 7. Design und UX-Requirements

### 7.1 Stil
Der Kurskatalog ist modern, sachlich und hochwertig. Die Oberfläche ist nicht überladen und fokussiert auf die zentrale Aufgabe: Kurse schnell finden und vergleichen.

### 7.2 Informationshierarchie
Die Reihenfolge der Wichtigkeit ist:
1. Kategorie
2. Titel
3. Kurzbeschreibung
4. Format
5. Dauer
6. CTA-Link

### 7.3 Interaktion
- Hover- und Fokuszustände sollen klar sichtbar sein
- Cards sollten mit Raum, Schatten und Abständen sauber abgesetzt werden
- Filterchips sollen visuell als Auswahlmechanismus erkennbar sein

## 8. Abgrenzung / Scope

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

## 9. Akzeptanzkriterien

AC-01: Beim Aufruf der Startseite erscheint die Kopfzeile mit Überschrift und Suchfeld.
AC-02: Der Kurskatalog zeigt eine Liste aller verfügbaren Kurse als Karten an.
AC-03: Die Filterung nach Kategorie funktioniert korrekt und setzt sich visuell hervor.
AC-04: Die Volltextsuche filtert Treffer basierend auf Titel und Beschreibung.
AC-05: Wenn keine Kurse passen, erscheint ein klarer Leerzustand.
AC-06: Die Seite bleibt auf kleinen und großen Bildschirmen nutzbar.
AC-07: Interaktive Elemente sind per Tastatur nutzbar.
AC-08: Die API-Daten werden konsistent und fehlerfrei in die Oberfläche übernommen.
AC-09: Die dokumentierten Qualitätsanforderungen werden in der Entwicklung eingehalten.

## 10. Teststrategie

Die Tests werden in einem separaten Testbereich organisiert. Für jede funktionale Einheit wird ein eigener Ordner unter `tests/frontend` angelegt. Für jeden Test wird zudem ein `result`-Ordner mit Zeitstempel-Datensätzen erstellt.

Wichtige Prüfungen:
- Auswahl eines Filters zeigt nur passende Kurse an
- Suchanfrage liefert erwartete Treffer oder leeren Zustand
- API-Fehler werden sauber behandelt
- Layout bleibt auf verschiedenen Bildschirmgrößen lesbar
- Fokus- und Tastaturnavigation funktionieren

## 11. Abschluss

Die vorliegende Spezifikation bildet die Grundlage für die Entwicklung des Kurskatalogs. Sie verbindet das gestellte Mockup, die technische Rahmenvorgabe der Constitution und die Datenspezifikation der API. Die Umsetzung soll den Qualitäts- und Dokumentationsanforderungen entsprechen und ein sauber erweiterbares Frontend schaffen.
