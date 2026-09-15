# Constituition - Kurkatalog


## Ziel
Eine Webapp die Kurse anzeigt entsprechend dem Mockup siehe ./mockup/ und seine Informationen aus dem API entpunkt herbezieht 
https://api-kurse.onrender.com/ und orientiert am Kurskatalog\data\API.md
API Token = 12345


## Technologie

- JavaScript mit NodeJS
- HTML und CSS
- CSS-Variablen und Flexbox/Grid Layouts
- Express
- Erlaubt ist Tailwind CSS

## Nicht Ziele

- Keine anderen Frameworks
- Kein NextJS
- Kein Vue.js
- Kein React
- Kein Angular
- Kein Vite
- Kein Bootstrap

## Qualität

- Jedes Spec feature bekommt einen eigenen Test Ordner (./tests/frontend)
- Jeder Feature Test hat einen ordner "result" mit datein die den jeweiligen Testergebnisse beihalten (jede Testdatei trägt als namen das datum+uhrzeit des tests im format JJJJ-MM-TT_HH-MM-SS)
- Jede Funktion hat ein zugehörigen eintag in der Feature Dokumentation
- Jede Funktion hat mindestens einen zugehörigen XUnit Test (nur batch und powershell tests)
- Jeder Prozess jede Änderung und die Entwicklungshitorie wird in der .\Kurskatalog\docs\Onboarding.md festgehalten
