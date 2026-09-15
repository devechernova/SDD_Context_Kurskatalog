# API-Routen

Die Kurs-API ist dem Aufbau von **Edtelligent** nachempfunden, das auf
[Directus](https://directus.io) beruht. Wer diese API versteht, findet sich
in der echten zurecht.

Grundadresse in der Entwicklung: `http://localhost:4000`

---

## Inhalt

- [Das Antwortformat](#das-antwortformat)
- [Anmeldung und Token](#anmeldung-und-token)
- [Routenübersicht](#routenübersicht)
- [Kurse lesen](#kurse-lesen)
- [Abfrageparameter](#abfrageparameter)
- [Kurse schreiben](#kurse-schreiben)
- [Bilder](#bilder)
- [Auskunft](#auskunft)
- [Fehler](#fehler)
- [Das Kursobjekt](#das-kursobjekt)

---

## Das Antwortformat

Jede erfolgreiche Antwort steckt in einer Hülle:

```json
{ "data": { "id": 45001, "title": "..." } }
```

Bei Listen ist `data` ein Array. Fragt man mit `meta` nach, kommt ein zweiter
Schlüssel hinzu:

```json
{ "data": [ ... ], "meta": { "total_count": 10, "filter_count": 3 } }
```

Fehler sehen immer gleich aus, unabhängig davon, was schiefging:

```json
{
  "errors": [
    { "message": "Kein Kurs mit der Nummer 99999.", "extensions": { "code": "ROUTE_NOT_FOUND" } }
  ]
}
```

---

## Anmeldung und Token

Es gibt **zwei Arten von Token**. Beide werden gleich mitgeschickt:

```
Authorization: Bearer <token>
```

| Art | Herkunft | Darf lesen | Darf schreiben | Gültig |
| --- | --- | --- | --- | --- |
| Fester Lesetoken | `API_TOKEN` in der `.env` | ja | **nein** | unbegrenzt |
| Anmelde-Token | `POST /auth/login` | ja | ja | 120 Minuten |

Der feste Token entspricht dem, was Edtelligent an anbindende Anwendungen
ausgibt: Eine Webseite, die Kurse anzeigt, soll lesen dürfen und sonst nichts.

> Anmelde-Token liegen im Arbeitsspeicher des Servers. Nach einem Neustart
> sind sie ungültig und man meldet sich neu an.

### POST /auth/login

```bash
curl -X POST http://localhost:4000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"user":"admin","password":"1234"}'
```

```json
{
  "data": {
    "access_token": "36203b75f89011be...",
    "expires": 7200000,
    "expires_at": "2026-09-15T10:12:00.000Z"
  }
}
```

`expires` ist die Restlaufzeit in Millisekunden — so macht es Directus.
Statt `user` wird auch `email` angenommen, damit Beispiele aus der
Directus-Dokumentation nicht stillschweigend scheitern.

Bei falschen Zugangsdaten kommt **401** mit einer Meldung, die *nicht*
verrät, welcher der beiden Werte falsch war. Wer das unterscheiden kann,
kann Benutzernamen durchprobieren.

### POST /auth/logout

Macht den mitgeschickten Token sofort ungültig. Antwortet mit **204** und
ohne Inhalt.

---

## Routenübersicht

| Methode | Route | Token nötig | Zweck |
| --- | --- | --- | --- |
| `POST` | `/auth/login` | – | Anmelden, Token erhalten |
| `POST` | `/auth/logout` | beliebig | Token ungültig machen |
| `GET` | `/items/courses` | beliebig | Kursliste |
| `GET` | `/items/courses/:id` | beliebig | Ein Kurs |
| `POST` | `/items/courses` | **Anmeldung** | Kurs anlegen |
| `PATCH` | `/items/courses/:id` | **Anmeldung** | Kurs ändern |
| `DELETE` | `/items/courses/:id` | **Anmeldung** | Kurs löschen |
| `GET` | `/bilder` | beliebig | Verfügbare Kursbilder |
| `GET` | `/images/:datei` | – | Eine Bilddatei |
| `GET` | `/users/me` | beliebig | Wer bin ich mit diesem Token |
| `GET` | `/server/ping` | – | Lebenszeichen |
| `GET` | `/server/info` | – | Angaben zum Server |

---

## Kurse lesen

### GET /items/courses

```bash
curl -H "Authorization: Bearer unterricht-token-2026" \
  "http://localhost:4000/items/courses?fields=id,title&limit=3"
```

```json
{
  "data": [
    { "id": 45001, "title": "Projektmanagement-Fachmann (GPM) und Scrum Master" },
    { "id": 45002, "title": "Projekte planen und steuern mit MS Project" },
    { "id": 45003, "title": "Power BI - Datenanalyse und Visualisierung" }
  ]
}
```

### GET /items/courses/:id

```bash
curl -H "Authorization: Bearer unterricht-token-2026" \
  "http://localhost:4000/items/courses/45001?fields=id,title,costs.value"
```

```json
{
  "data": {
    "id": 45001,
    "title": "Projektmanagement-Fachmann (GPM) und Scrum Master",
    "costs": { "value": 4200 }
  }
}
```

Unbekannte Nummer → **404**.

---

## Abfrageparameter

Alle gelten für `GET /items/courses`; `fields` gilt auch für den Einzelabruf.

### fields

Wählt aus, welche Felder zurückkommen. Ohne Angabe kommt alles.

| Beispiel | Ergebnis |
| --- | --- |
| `fields=id,title` | nur diese beiden |
| `fields=costs.value` | verschachtelt, mit Punkt |
| `fields=degree.*` | alles unterhalb von `degree` |
| `fields=*` | alles (Voreinstellung) |

Das spart spürbar Übertragung: Die Kursliste mit allen Feldern ist ein
Vielfaches der Liste mit `fields=id,title`.

### search

Volltextsuche über **Titel und Beschreibung**, Groß- und Kleinschreibung
spielt keine Rolle.

```
/items/courses?search=sql
```

### filter

Zwei Schreibweisen, gleichwertig:

```
/items/courses?filter[type][name][_eq]=Seminar
/items/courses?filter={"type.name":{"_eq":"Seminar"}}
```

Mehrere Bedingungen gelten **zusammen** (und, nicht oder).

Unterstützte Operatoren:

| Operator | Bedeutung |
| --- | --- |
| `_eq` / `_neq` | gleich / ungleich |
| `_contains` | enthält (Groß- und Kleinschreibung zählt) |
| `_icontains` | enthält (egal wie geschrieben) |
| `_starts_with` / `_ends_with` | beginnt / endet mit |
| `_gt` `_gte` `_lt` `_lte` | größer / kleiner, als Zahl verglichen |
| `_in` | einer von mehreren, mit Komma getrennt |
| `_null` / `_nnull` | leer / nicht leer |

Ohne Operator gilt `_eq`: `filter[id]=45001`.

**Nicht nachgebaut:** `_and`, `_or`, `_between` und die Verknüpfung über
mehrere Sammlungen hinweg. Der echte Directus kann das, diese API nicht.

### sort

```
/items/courses?sort=title       aufsteigend
/items/courses?sort=-costs.value  absteigend
/items/courses?sort=type.name,title  mehrere, in dieser Reihenfolge
```

Zahlen werden als Zahlen verglichen, alles andere als Text nach deutscher
Sortierung (`ä` steht bei `a`).

### limit, page, offset

| Parameter | Voreinstellung | Bemerkung |
| --- | --- | --- |
| `limit` | `100` | höchstens `200`; `-1` liefert alles |
| `page` | `1` | erste Seite ist 1, nicht 0 |
| `offset` | – | Alternative zu `page`, zählt Einträge statt Seiten |

Wer mehr als 200 verlangt, bekommt 200. Eine Grenze, die der Aufrufer
aushebeln kann, ist keine.

### meta

```
/items/courses?search=sql&meta=*
```

```json
{ "data": [ ... ], "meta": { "total_count": 10, "filter_count": 1 } }
```

`total_count` ist der gesamte Bestand, `filter_count` das, was nach Filter
und Suche übrig blieb. Genau dieser Unterschied macht eine Seitenzahl
berechenbar: `Seiten = filter_count / limit`, aufgerundet.

Einzeln anfordern geht auch: `meta=filter_count`.

---

## Kurse schreiben

Alle drei Routen brauchen einen **Anmelde-Token**. Mit dem festen Lesetoken
antworten sie **403** — ein bewusster Unterschied zu 401: Der Server weiß, wer
da ist, erlaubt es aber trotzdem nicht.

### POST /items/courses

```bash
curl -X POST http://localhost:4000/items/courses \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Barrierefreie Webentwicklung",
    "description": "Einleitung\n\n!Kursinhalt\n*Kontraste\n*Tastaturbedienung",
    "image": "FrauenLernen.png",
    "type": { "name": "Seminar" },
    "costs": { "value": 499, "currency": { "short": "EUR" } }
  }'
```

Antwort **201** mit dem angelegten Kurs.

Regeln:

- `title` ist **Pflicht** und darf nicht leer sein.
- `id` wird vom Server vergeben. Eine mitgeschickte Nummer wird verworfen.
- `image` muss eine der Dateien aus `GET /bilder` sein. Andernfalls **400**
  mit der Liste des Möglichen.
- `costs.value` muss eine Zahl sein oder `null`. `null` heißt „kein Preis
  genannt", nicht „kostenlos".
- **Unbekannte Felder werden verworfen.** Sonst wandert jeder Tippfehler als
  neues Feld in den Bestand und bleibt dort.
- Fehlende Felder werden mit dem leeren Gerüst aufgefüllt: Die Antwort ist
  immer ein vollständig geformter Kurs.

### PATCH /items/courses/:id

Wie `POST`, aber nur die mitgeschickten Felder ändern sich. `id` und
`date_created` bleiben unangetastet, `date_updated` wird neu gesetzt.

### DELETE /items/courses/:id

Antwortet **204** ohne Inhalt. Unbekannte Nummer → **404**.

---

## Bilder

> **Abweichung von Edtelligent:** Die echte API speichert *keine* Bilder.
> Für dieses Unterrichtsprojekt gehören sie dazu, deshalb gibt es die
> Felder `image` und `image_url` sowie die Route `/bilder`.

### GET /bilder

```json
{
  "data": [
    { "name": "FrauBautERM.png", "url": "http://localhost:4000/images/FrauBautERM.png" }
  ]
}
```

### GET /images/:datei

Liefert die Bilddatei. **Ohne Token** — ein Bild, das erst nach Anmeldung
lädt, kann keine Webseite anzeigen.

Gespeichert wird am Kurs nur der **Dateiname** (`image`). Die vollständige
Adresse (`image_url`) entsteht erst beim Ausliefern, aus der Adresse, unter
der die Anfrage kam. So bleiben die Daten gültig, wenn der Server später
woanders läuft.

---

## Auskunft

### GET /users/me

```json
{ "data": { "benutzer": "admin", "art": "anmeldung", "darf_schreiben": true } }
```

Beim festen Lesetoken steht dort `"art": "fest"`, `"benutzer": null` und
`"darf_schreiben": false`.

### GET /server/ping

Antwortet mit dem Text `pong`. Ohne Token, weil man beim Prüfen, ob der
Server überhaupt läuft, oft noch keinen hat.

### GET /server/info

```json
{
  "data": {
    "project": { "project_name": "API Kurse - Unterrichtsprojekt", "default_language": "de-DE" },
    "vorbild": "Edtelligent (Directus)"
  }
}
```

---

## Fehler

| Status | Code | Wann |
| --- | --- | --- |
| `400` | `INVALID_PAYLOAD` | Titel fehlt, Bild unbekannt, JSON kaputt |
| `401` | `INVALID_CREDENTIALS` | Token fehlt, ist falsch oder abgelaufen |
| `403` | `FORBIDDEN` | Lesetoken versucht zu schreiben |
| `404` | `ROUTE_NOT_FOUND` | Kurs oder Route gibt es nicht |
| `500` | `INTERNAL_SERVER_ERROR` | Fehler im Server |

Nach außen geht bei 500 nur eine allgemeine Meldung. Die vollständige
Ursache steht in der Serverkonsole — ein Stapelverweis in der Antwort würde
Pfade und Dateinamen verraten.

---

## Das Kursobjekt

Die Feldnamen sind die von Edtelligent. Die deutschen Bezeichnungen sind
die aus der Kursmaske.

| Feld | Typ | Bezeichnung in der Kursmaske |
| --- | --- | --- |
| `id` | Zahl | Kursnummer |
| `title` | Text | Titel |
| `description` | Text | Beschreibung (eigene Auszeichnung, siehe unten) |
| `link` | Text | Angebotsadresse |
| `image` | Text | *(Zutat dieser API)* Dateiname des Bildes |
| `image_url` | Text | *(Zutat dieser API)* vollständige Bildadresse |
| `target_group` | Text | Zielgruppe |
| `requirements` | Text | Zugang |
| `costs.value` | Zahl | Kosten |
| `costs.currency.short` | Text | Währung |
| `costs_comment` | Text | Kosten Bemerkung |
| `subsidy` | Text | Enthaltene Leistungen |
| `funding_comment` | Text | Förderung |
| `type.name` | Text | Kursart |
| `institution_type.name` | Text | Schulart |
| `education_type.name` | Text | Bildungsart |
| `certifier.name` | Text | Zertifizierer |
| `degree.type` | Text | Abschlussart |
| `degree.title` | Text | Abschlussbezeichnung |
| `degree.credits` | Text | Anrechnung |
| `degree.entitlement` | Text | Berechtigung |
| `degree.additional_qualification` | Text | Zusatzqualifikationen |
| `degree.examiner` | Text | Prüfende Stelle |
| `systematics[].systematics_id.name` | Liste | Systematik |
| `keywords[].course_keywords_id.name` | Liste | Keywords |
| `labels[].course_labels_id.name` | Liste | Labels |
| `contacts[].contacts_id` | Liste | Weitere Ansprechpartner |
| `federal_fundings[]` / `region_fundings[]` | Listen | Förderarten |
| `date_created` / `date_updated` | Zeitpunkt | angelegt / geändert |

**Warum so umständlich verschachtelt?** Weil Directus Verknüpfungen so
ausliefert: `keywords` ist keine Liste von Wörtern, sondern eine Liste von
Verbindungen, und jede Verbindung zeigt auf einen Eintrag in einer anderen
Tabelle. Deshalb steht der Name eine Ebene tiefer, unter
`course_keywords_id`.

### Die Auszeichnung in der Beschreibung

Edtelligent liefert kein HTML, sondern eine eigene, zeilenweise Auszeichnung:

```
Einleitender Fließtext

!Kursinhalt
!1. Grundlagen
*Erster Aufzählungspunkt
*Zweiter Aufzählungspunkt
```

- `!` am Zeilenanfang → Überschrift
- `*` am Zeilenanfang → Aufzählungspunkt
- alles andere → Absatz

Die anzeigende Anwendung wandelt das um. Der Vorteil gegenüber HTML: Aus
diesen Daten kann kein Schadcode in eine fremde Seite gelangen.
