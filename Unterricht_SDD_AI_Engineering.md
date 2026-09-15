# KI-gestützte Softwareentwicklung und Agenten-Engineering

## Vibe Coding:
Vibe Coding ist ein Ansatz, bei dem KI-gestützte Tools genutzt werden, um den Entwicklungsprozess zu beschleunigen und die Qualität des Codes zu verbessern.
Viebe Coding wurde 2025 von Andrey Karpathy als begriff geprägt. Es Beschreibt den Vorgang einem AI-Agenten zu sagen welches Produkt man haben möchte und was es tun soll (ggf. auch wie es ausehen soll), ohne auf die konkrete Implementierung eingehen zu müssen. Der Code bleibt weitesgehend ungeprüft, Diffs werden kaum geprüft, Iterationen erfolgen nach gefühl (daher Vibe).

Hinweis: "Vibe" bezieht sich auf das intuitive Vorgehen und die schnelle Iteration, die den Entwicklungsprozess charakterisieren.

### Vorteile von Vibe Coding
- Rapid Prototyping: Durch den Einsatz von KI-Agenten können Entwickler schnell Prototypen erstellen, testen und iterieren, ohne sich um die Details der Implementierung kümmern zu müssen.
- Niedrige Einstiegshürde: Da Entwickler nicht alle Details der Implementierung kennen müssen, können auch weniger erfahrene Entwickler schnell produktiv werden. 
- Exploration Phase: Wie könnte das fertige Produkt aussehen und welche Funktionen könnte es haben.

### Nachteile von Vibe Coding
- Geringe Kontrolle: Entwickler haben weniger Kontrolle über den generierten Code, was zu unerwartetem Verhalten führen kann.
- Abhängigkeit von KI-Agenten: Der Entwicklungsprozess ist stark von der Leistungsfähigkeit und Zuverlässigkeit der eingesetzten KI-Agenten abhängig.
- Qualitätssicherung: Da der Code oft ungeprüft bleibt, kann die Qualität und Wartbarkeit des Codes leiden.
- Fehlende Dokumentation: Da der Fokus auf schneller Iteration liegt, kann die Dokumentation des Codes vernachlässigt werden, was die spätere Wartung erschwert.
- 2026 von 10 000 Startups mit KI-gebauten Produktions-App benötigten über 80% teilweise Neubauten mit Kosten zwischen 50 000 und 500 000 USD pro Projekt.

## Angentic-Engineering

Angentic-Engineering ist ein Ansatz, bei dem Software-Agenten genutzt werden, um bestimmte Aufgaben oder Prozesse autonom zu steuern und zu optimieren. Dabei können die Agenten auf Basis von KI-Algorithmen Entscheidungen treffen und Aktionen ausführen, ohne dass der Entwickler jeden Schritt manuell implementieren muss.

- **Agentic**: Orchestrierung und Steuerung von Software-Agenten, um bestimmte Aufgaben autonom auszuführen. Jeder Agent hat seine Aufgabe zb. Code schreiben, Test erstellen, oder einen anderen Agen zu kontrolieren. Der Mensch validiert und überwacht die Aktionen der Agenten, greift bei Bedarf ein und stellt sicher, dass die Gesamtziele erreicht werden.

- **Engineering**: Es braucht Expertise um agentische Worklflows für Code Produktion einzusetzen.

### Vorteile von Agentic-Engineering gegenüber Vibe Coding
- Aufsicht, Architektur und Qualitätssicherung: Durch den Einsatz von Agenten können Entwickler die Kontrolle über den Entwicklungsprozess behalten, die Architektur überwachen und die Qualität des Codes sicherstellen.

- Der Mensch ist in deieser Rolle ein Projekt Manager (Reviewer und Architekt), der die Arbeit der Agenten überwacht, bewertet und bei Bedarf eingreift, um sicherzustellen, dass die Gesamtziele erreicht werden.

- Professionelle Akzeptanz ist gegeben, da der Einsatz von Agenten den Entwicklungsprozess transparenter und kontrollierbarer macht und somit den Anforderungen von Unternehmen und Organisationen besser entspricht.

- Wir haben wartbaren Produktionscode.

### Die 4 Prinzipien des Agentic-Engineering
1. PRINZIP 1 : Der Mensch definiert das Ziel und die Rahmenbedingungen für die Agenten.
2. PRINZIP 2 : Die Agenten handeln autonom innerhalb der vom Menschen definierten Rahmenbedingungen.
3. PRINZIP 3 : Der Mensch überwacht die Arbeit der Agenten, bewertet deren Ergebnisse und greift bei Bedarf ein, um sicherzustellen, dass die Gesamtziele erreicht werden.
4. PRINZIP 4 : Der Mensch Justiert die Richtung. Auch ein Code der alle Tests besteht kann nicht automatisch als optimal oder fehlerfrei betrachtet werden. 

## Spec Driven Development (SDD)

Spec Driven Development (SDD) ist ein Ansatz, bei dem die Entwicklung von Software stark durch formale Spezifikationen geleitet wird. Diese Spezifikationen definieren die Anforderungen und das gewünschte Verhalten des Systems, bevor der eigentliche Code geschrieben wird. SDD ist eine unterkategorie des Agentic-Engineering, existiert aber bereits seit dem 70er. Die Grundidee die Specification ist die einzige Wahrheit, an der sich die Entwicklung orientiert.
Eine Änderung am Projekt läuft immer über die Spezifikationen. Das bedeutet, dass jede Anpassung oder Erweiterung der Software zunächst in den Spezifikationen reflektiert werden muss, bevor der Code entsprechend angepasst wird.

### Formate für SDD Projekte

Grundsätzlich werden grob zwei Formate für SDD Projekte genutzt:
- Markdown: Spezifikationen werden in einem leicht lesbaren Textformat geschrieben, das sowohl für Menschen als auch für Maschinen verständlich ist.
- JSON: Spezifikationen werden in einem strukturierten Datenformat geschrieben, das von vielen Programmiersprachen leicht verarbeitet werden kann. Bzw. Immer dann wenn wir Strukturen abbildenwollen.

### Struktur



```json
"Projektordner/"{
    ".specify/": {
        "memory/": {
            "constitution.md": {} //Spec-Kit Konvention: Definiert die nicht verhandelbaren Projektprinzipien
        },
        "template/": {} //Vom Spec-Tool Angelehgt (Optional)
    },
    "specs/": {
        "frontend": {
            "spec.md": {}, //Was wirdgebaut
            "plan.md": {}, //Wie wird es gebaut
            "tasks.md": {}, //Welche Aufgaben müssen erledigt werden
            "datamodel.json": {}, //Datenmodell der Anwendung
            "contract/": {
                "Format_des_Moduls.json": {} //Vertragliche Vereinbarungen für das Modul bzw. Aufbau
            }
        }
    },
    "src/": {}, //Quellcode des Projekts
    "tests/": {}, //Testfälle des Projekts
    "docs/": {
        "frontend_doku/": {}, //Dokumentieren der Funktionen des Frontend-Moduls
        "Onboarding.md": {} //Historisches Dokumentieren von Entwicklungsschritten (damit AI-Agenten nicht wiederholt die gleichen Fehlerhaften Lösungen produzieren)
    }, //Dokumentation des Projekts
}



```
**Constitution:** Ein Projekt das mit SDD aufgebaut wird unterliegt 4 nicht verhandelbare Projektprinzipien. Diese Prinzipien werden in einer Constituion Datei definiert. Definiert wird der Technologie Stack, die Architektur, die Qualität und Das Review-Verfahren sowie die Teststrategien.

**Spec:** Jede Spezifikation in einem SDD-Projekt beschreibt ein bestimmtes Modul oder eine Funktionalität des Systems. Sie definiert, was gebaut werden soll, wie es gebaut werden soll und welche Aufgaben erledigt werden müssen. Spezifikationen dienen als zentrale Quelle der Wahrheit und leiten die gesamte Entwicklung.

**Plan:** Nach Freigabe der Specification erfolgt die Erstellung eines detaillierten Plans, der beschreibt, wie die Umsetzung der Spezifikation erfolgen soll. Der Plan enthält Aufgaben, Zeitpläne, Ressourcen und Verantwortlichkeiten und dient als Leitfaden für die Entwicklung:
- Zuständigkeiten der Agenten (Welcher Agent hat welche Aufgaben). Moderne Multi Agenten Platformen verteilen diese Aufgaben automatisch.
- Tech stack entscheidungen (Ziel Framework, Bibliotheken, Tools)
- Angabe von Schnittstellen (definieren von Routen und API-Endpunkten)
- Definieren des Test workflows (Welche Tests müssen durchgeführt werden, Teststrategien und Testumgebungen)
- Wie läuft das Reviewen ab (Wer überprüft den Code, welche Kriterien werden angewendet, wie werden Feedback und Änderungen gehandhabt, wann erfolgt das Review)
- Komunikation bei Fehlerbehandlung (Wie werden Fehler gemeldet, dokumentiert und behoben)

**Tasks:** Die Aufgabenliste enthält alle spezifischen Aufgaben, die zur Umsetzung der Spezifikation erforderlich sind. Diese Teilaufgaben erfüllen in Ihrer Summe den Wahrheitswert der Spezifikation. Wir geben eine Grudnstruktur vor nach der ein einzelner Task aufgebaut werden sollte. Diese Vorlage wird dann wiederum genutzt um von einem oder mehreren Agenten alle benötigten Tasks zu erstellen. **Der Entwickler muss die einzelnen Tasks validieren**


#### Vorgehensweise der Task Definition

1. Abgrenzung: Der Task sollte nicht zu Präzise sein (nicht zb. einen if-else scope fordern) und auch nicht zu allgemein und featurartig (nicht nach der implementierung einer kompletten Login Maske fragen). Tasks sollten Funktionsspezifisch sein mit ein und ausgaben definiert.

2. Aufbau einer Task Vorlage: die Task Vorlage sorgt dafür das jeder Task gleich aufgebaut wird und die gleichen Review und Testing Rutinen durchläuft. Es ist sehr Sinnvoll da der AI Agent beim kontinuirlichen erstellen von Tasks vergessen kann wann er etwas dokumentieren soll und wann er einen Test durchführen muss.

3. Weitergabe und Autonomie: Die Tasks werden nach vorgabe von einem AI Agenten aufgebaut.

4. Validierung der Task-Realität: Jeder Task sollte vor umsetzung von einem Menschen geprüft werden.

5. Ausführung der Tasks durch Agenten: Nach der Validierung werden die Tasks von den zuständigen Agenten ausgeführt. Dabei ist sicherzustellen, dass die definierten Eingaben und Ausgaben korrekt umgesetzt werden und die Tests erfolgreich bestehen.

6. Dokumentation und Feedback: Nach der Ausführung der Tasks sollten die Ergebnisse dokumentiert und Feedback gesammelt werden in der Onboarding datei sowie Anpassungen von Fehlerhaftzen Tests oder korrektur von schlecht umgesetzten Tasks . Dies hilft, den Entwicklungsprozess kontinuierlich zu verbessern und zukünftige Tasks effizienter zu gestalten.

7. Feature Testing: Nach der Umsetzung der Tasks sollte überprüft werden dass das gebaute Feature der Realität der Specification entspricht und alle definierten Anforderungen erfüllt.