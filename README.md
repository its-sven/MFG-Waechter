# MFG-Wächter

## Überwachen, was im Kasten passiert.

Ist man im Büro, kann man schlecht einfach mal in das nächste Bundesland fahren und <br>
mit einem Thermometer schauen, wie warm es in einem unserer MFG ist. <br>
Deshalb ist es wichtig, dass man solche Informationen aus der Ferne auslesen kann. <br>
Genau das ist die Aufgabe des MFG-Wächters.

Gesteuert von einem Raspberry Pi Modell 4, werden über eine Weboberfläche die wichtigsten Daten angezeigt.


# Programmierung
Das Frontend (das, was der Nutzer sieht) ist in Svelte, das Backend (das, was die Daten verarbeitet) in Python programmiert. <br>
Zusammen laufen beide Bestandteile auf einem lokalen Server auf dem Raspberry Pi.


## Installation:
Lade dir den Source Code herunter.
Öffne ein Terminal und begebe dich dort in den Ordner „Data“.
Installiere mit diesem Befehl die benötigten Python Bibliotheken:

pip install -r requirements.txt


Es kann sein, dass du den Raspberry danach nochmals neustarten musst.
Schließe die Sensoren nun folgendermaßen an die GPIO Pins des 
Pis an:

<img src="https://raw.githubusercontent.com/its-sven/ablage/main/pics/mfg_waechter_whiteBG.png?token=GHSAT0AAAAAAB43CET7ILIKWA3EJHVHV4ZAY6BDLVQ"/> 


## Starten:
Bewege dich erneut mit dem Terminal in den Ordner „Data“
Führe dort den folgenden Befehl aus:

python3 app.py

Danach kannst du einen Browser öffnen und dort über den Port „8000“ auf die Oberfläche zugreifen.
https://127.0.0.1:8000/
Hier werden dir nun die Werte von Luftfeuchtigkeit, Temperatur und der Status der Tür angezeigt.

Ein Beispiels Video findet ihr hier:
https://kuli.es/MFG-VOD
