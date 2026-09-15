# Spezifikation: Kurskatalog

## 1. Überblick

Der Kurskatalog ist eine zentrale Landingpage für ein Weiterbildungsangebot im Bereich IT, Daten, Projektarbeit und Karriereentwicklung. Das Produkt zeigt Lernangebote in kompakter, gut scanbarer Form an und ermöglicht Besuchern, schnell passende Kurse zu finden.

Ziel des Projekts ist es, einen modernen Katalog mit klarer Informationarchitektur, starker visueller Hierarchie und Filtermöglichkeiten bereitzustellen. Die Anwendung soll die Kursvielfalt darstellen und Nutzerinnen und Nutzer gezielt zu relevanten Weiterbildungsmöglichkeiten führen.

## 2. Produktziel

- Einordnung der Kurse in nachvollziehbare Themenbereiche
- Schneller Überblick über 14 Bildungsangebote
- Filterung nach Kategorie und Stichwort
- Darstellung der wichtigsten Kursinformationen auf einen Blick
- Grundlage für spätere Detailseiten oder weitere Lernangebote

## 3. Zielgruppe

- Personen mit Interesse an beruflicher Weiterbildung
- Quereinsteigerinnen und Quereinsteiger in IT-Berufe
- Fachkräfte, die sich in Daten, Management oder Security weiterbilden möchten
- Lernende, die sich schnell über Angebot, Dauer und Format informieren wollen

## 4. Kernfunktionalität

### 4.1 Startseite mit Hero-Bereich
Die Startseite zeigt oberhalb des Katalogs einen klaren Hero-Header mit:

- Logo und Navigation
- Überschrift mit Anzahl der verfügbaren Kurse
- dekorative visuelle Elemente in verschiedenen Farben
- beschreibender Text zur Angebotsstruktur
- Suchfeld für Titel, Themen oder Stichwörter

### 4.2 Kurskatalog
Der Kurskatalog zeigt Kurse als Karten an. Jede Karte enthält:

- Bild
- Kategorie-Badge
- Kursname
- Kurzbeschreibung
- Metadaten wie Format und Laufzeit
- Call-to-Action „Zum Kurs“

Die Darstellung erfolgt in einer responsiven Struktur, die auf Desktop- und Mobilgeräten gut lesbar bleibt.

### 4.3 Filterung
Nutzerinnen und Nutzer können Kurse nach Kategorie filtern. Verfügbare Kategorien:

- Programmierung
- Daten & BI
- Projektmanagement
- Agile Methoden
- Business Analyse
- IT-Security
- Karriere & Coaching

Zusätzlich gibt es die Auswahl „Alle Kurse“, um den Filter zurückzusetzen.

### 4.4 Suche
Das Suchfeld filtert die Kursliste nach relevanten Begriffen. Die Suche berücksichtigt dabei:

- Kursbezeichnungen
- Themenbereiche
- Stichwörter aus Beschreibungen
- relevante Inhaltsbegriffe in deutscher Sprache

Die Suche ist eine Live-Filterung, ohne Seitenneuladen.

### 4.5 Informationshierarchie
Die wichtigsten Informationen müssen sofort erkennbar sein:

1. Kategorie
2. Titel
3. kurze Beschreibung
4. Format
5. Dauer
6. Link zur Detailansicht bzw. Kursseite

## 5. UX- und Designanforderungen

### 5.1 Visueller Stil
- moderne, saubere und digitale Stilrichtung
- klare Kontraste mit weißen, grauen und farbigen Akzenten
- hochwertige Bildmotive mit ruhiger, professioneller Präsentation
- gut lesbare Schriften und ausreichend Platz zwischen Elementen

### 5.2 Interaktion
- Hover- und Fokuszustände auf Filterchips und Kurslinks
- klare visuelle Rückmeldung beim Setzen von Filtern
- saubere, reduzierte Gestaltung ohne unnötige Ablenkung

### 5.3 Barrierefreiheit
- semantisch korrektes HTML
- Buttons und Links müssen klar beschriftet sein
- Bild-Alt-Texte müssen sinnvoll gesetzt werden
- Tastaturbedienbarkeit muss gewährleistet sein
- Fokusindikatoren müssen sichtbar sein

## 6. Technische Anforderungen

### 6.1 Frontend-Architektur
Die Oberfläche soll als leichtgewichtige Frontend-Anwendung realisiert werden, die Kursdaten aus einer strukturierten Datenquelle lädt oder in einer mockfähigen Struktur bereitstellt.

Die Datenbasis orientiert sich am Projekt-API-Konzept, das Kursdaten über eine REST-ähnliche Struktur bereitstellt.

### 6.2 Datenmodell
Ein Kurs soll mindestens folgende Felder enthalten:

```json
{
  "id": 45001,
  "title": "Business Intelligence mit Power BI",
  "category": "Daten & BI",
  "description": "Kennzahlen aufbereiten, Berichte gestalten ...",
  "format": "Online",
  "duration_weeks": 6,
  "image_url": "/images/power-bi-kurs.jpg",
  "slug": "power-bi-business-intelligence"
}
```

### 6.3 API-Anbindung
Die Anwendung nutzt die Kursdaten aus einer API mit ähnlichem Aufbau wie im Projekt definiert:

- `GET /items/courses` für die Kursliste
- `GET /items/courses/:id` für einen einzelnen Kurs
- Filter- und Suchparameter nach Kategorie und Suchbegriff

Die Frontend-Logik muss mit Such- und Filterparametern umgehen, die von der API unterstützt werden.

## 7. Geschäftsregeln

1. Alle Kurse werden auf der Startseite standardmäßig angezeigt.
2. Ein aktiver Filter zeigt nur passende Kurse an.
3. Wenn keine Kurse zu einem Filter passen, erscheint ein leerer Zustand.
4. Die Anzahl der angezeigten Kurse entspricht der visuellen Produktdarstellung und ist konsistent mit den Daten.
5. Jeder Kurs gehört genau einer Hauptkategorie an.
6. Die Darstellung muss in deutscher Sprache erfolgen.
7. „Zum Kurs“ ist ein CTA-Element, das später mit einer Detailseite verknüpft werden kann.

## 8. Akzeptanzkriterien

### AC-01: Startseite
Bei Aufruf der Startseite werden die Hero-Section und der Kurskatalog angezeigt.

### AC-02: Kursanzeige
Es werden alle verfügbaren Kurse als Karten dargestellt, inklusive Bild, Kategorie, Titel, Beschreibung, Format und Laufzeit.

### AC-03: Filter
Durch Auswahl einer Kategorie werden nur noch die Kurse dieser Kategorie angezeigt. Der Rücksetzpunkt ist „Alle Kurse“.

### AC-04: Suche
Eine Suchanfrage nach einem bekannten Begriff wie „Power BI“ oder „Scrum“ zeigt nur die passenden Kurse an.

### AC-05: Responsive Verhalten
Die Seite bleibt auf unterschiedlichen Bildschirmgrößen nutzbar und die Karten werden entsprechend angepasst.

### AC-06: Barrierefreiheit
Alle interaktiven Elemente sind per Tastatur nutzbar und haben sichtbare Fokuszustände.

### AC-07: Konsistenz
Die in der Oberfläche dargestellten Kategorien und Bezeichnungen stimmen mit der API-/Datenbasis überein.

## 9. Nicht im Scope

Die aktuelle Spezifikation umfasst nicht:

- Admin-Bereich zur Kursverwaltung
- Login- oder Benutzerkonto-Systeme
- Bezahlfunktion
- Detailseiten mit vollständigen Kursinhalten
- Bewertungs- oder Kommentar-Funktionen
- Personalisierte Empfehlungen basierend auf Nutzerprofilen

## 10. Offene Punkte / Nachverfolgung

- Definition der finalen Detailseiten-Logik und CTA-Ziele
- Verfügbarkeit einer realen Datenquelle oder eines produktiven APIs-Backends
- finaler Inhalt für alle Kursbeschreibungen und Kategorien
- Entscheidung über Event-Tracking oder Analyse-Integration

## 11. Abschluss

Die aktuelle Spezifikation beschreibt den Kern des Kurskatalog-Projekts: eine klare, nutzerorientierte Kursübersicht mit Such- und Filterfunktionen, die durch eine strukturierte Datenbasis und eine gut verständliche UI ergänzt wird. Die Umsetzung dient als Grundlage für die nachfolgende technische Planung und die Aufgabenzerlegung.
