
<h3 align="center">Hyper⚡labs Eleventy Starter</h3>
<p align="center">Starter theme für den static site generator Eleventy zur Entwicklung ortsbasierter Websites.</p>
<p align="center"><a href="https://hyperlabs-eleventy-starter-demo.netlify.app/" target="_blank" rel="noreferrer noopener">Demo</a></p>

## Tools

### Eleventy
Eleventy is a simpler static site generator.
- [Website](https://www.11ty.io/)
- [Dokumentation](https://www.11ty.dev/docs/)

### Nunjucks
A rich and powerful templating language for JavaScript.
- [Website](https://mozilla.github.io/nunjucks/)
- [Dokumentation](https://mozilla.github.io/nunjucks/templating.html)

### SCSS
Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
- [Website](https://sass-lang.com/)
- [Dokumentation](https://sass-lang.com/guide/)

### Bootstrap
Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.
- [Website](https://getbootstrap.com/)
- [Dokumentation](https://getbootstrap.com/docs/4.4/getting-started/introduction/)

### Mapbox GL JS
Mapbox GL JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles.
- [Website](https://www.mapbox.com/)
- [Dokumentation](https://docs.mapbox.com/mapbox-gl-js/api/)

## Installieren
Falls node.js noch nicht installiert ist, muss das zuerst erledigt werden:

1. [Node.js herunterladen](https://nodejs.org/en/) und installieren 
2. [Starter theme herunterladen](https://github.com/w-stegmann/Hyperlabs-Eleventy-Starter/archive/master.zip)
3. `master.zip` entpacken und Ordner öffnen
4. Terminal öffnen – `CMD + Leertaste` öffnet Spotlight, dann `Terminal` eingeben und mit Enter bestätigen. Danach in den Theme-Ordner navigieren – `cd /pfad/zum/ordner/Hyperlabs-Eleventy-Starter-master` – gebt dazu einfach `cd` und ein Leerzeichen ins Terminal ein und [zieht den Theme-Ordner ins Terminal](https://www.youtube.com/watch?v=6-rk1OKIhB0). Der Pfad wird dann automatisch eingetragen. Mit Enter bestätigen.
5. Im Terminal `npm install` eingeben und mit Enter bestätigen. Jetzt werden alle benötigten Tools installiert. Das kann eine Weile dauern. Danach bist du bereit zum Entwickeln!

## Entwickeln
1. Terminal öffnen – `CMD + Leertaste` öffnet Spotlight, dann `Terminal` eingeben und mit Enter bestätigen. Danach in den Theme-Ordner navigieren – `cd /pfad/zum/ordner/Hyperlabs-Eleventy-Starter-master` – gebt dazu einfach `cd` und ein Leerzeichen ins Terminal ein und [zieht den Theme-Ordner ins Terminal](https://www.youtube.com/watch?v=6-rk1OKIhB0). Der Pfad wird dann automatisch eingetragen. Mit Enter bestätigen. 
2. Im Terminal `npm run dev` eingeben und mit Enter bestätigen. Der lokale Entwicklungsserver ist jetzt gestartet und öffnet ein Browserfenster. Code-Änderungen werden direkt im Browser angezeigt.

Lokale URL des Entwicklungsservers: [http://localhost:8080](http://localhost:8080)

Server-Einstellungen befinden sich in `.lightserverrc`.

### Ordner-Struktur
#### ```src```

Im Ordner `src` befinden sich alle Quell-Dateien, aus denen später die fertige Seite generiert wird. 

#### ```dist```

Die fertige Seite kann mit dem Befehl `npm run build` generiert werden. Sobald der Prozess abgeschlossen ist, wird der Ordner `dist` erstellt. Der Inhalt dieses Ordners kann per FTP-Programm auf den Webspace geladen werden. Änderungen müssen immer im `src`-Ordner vorgenommen werden, denn der `dist`-Ordner wird bei jedem Build-Prozess gelöscht und komplett neu generiert. Änderungen gingen somit verloren.

#### Neue Seite anlegen
Neue Seite können direkt im `src`-Ordner angelegt werden. Auch Unterordner sind möglich – siehe z.b. `src/orte` und das Ergebnis in `dist/orte`.

Um beispielsweise eine Team-Seite anzulegen, erstellt man eine neue Datei `team.njk` im Ordner `src`. Diese Datei muss folgenden Kopf enthalten:
```
---
title: Startseite
description: Page meta description in 150 characters
layout: main.njk
---
<p>Hallo Welt. Du befindest dich auf der {{ title }}.</p>
```

Dort werden zum einen der Titel der Seite und die Meta-Description definiert. Weitere Variablen können im Kopf beliebig [hinzugefügt](https://www.11ty.dev/docs/layouts/) werden. Unterhalb des Kopfes bginnt der eigentliche Seiten-Inhalt. `layout: main.njk` bestimmt die Layout-Datei, in die der Seiten-Inhalt eingebettet wird. Diese Layouts befinden sich im Ordner `_includes`. In diesem Beispiel wird `_includes/main.njk` referenziert. Da `_includes` als Standard-Ordner bestimmt wurde, wird dieser weggelassen werden.

#### ```src/_includes```

In diesem Ordner befinden sich alle wiederverwendbaren Layouts der Seite. Das Hauptlayout heißt ``main.njk``.

#### ```src/fonts```

Hier können Schriftdateien abgelegt werden, die in den Styles referenziert werden können.

#### ```src/images```

Bild-Dateien und Icons können hier abgelegt werden. Im HTML werden sie folgendermaßen eingebunden:

```
<img src="/images/icons/casino_am_kornmarkt.svg" alt="">
````

#### ```src/orte```

#### ```src/scripts```

Javascript kann in Module gesplittet und in die ``script.js`` importiert werden oder direkt dort eingefügt werden. Eine Unterteilung in Module dient der Übersichtlichkeit des Codes.

Code, der für die Anzeige der Karte verantwortlich ist, liegt unter `scripts/modules/mapbox-list.js`. 

#### ```src/styles```

Hier lagern die Stylesheets der Seite. Auch hier findet wieder eine Unterteilung in einzelne Dateien statt, um die Übersichtlichkeit zu wahren. Die Einstiegsdatei zum Import ist `styles/style.scss`. SCSS oder klassisches CSS kann aber auch direkt in die `styles/_main.scss` geschrieben werden. SCSS bietet Vorteile wie Verschachtelungen im Code, Variablen, oder Schleifen, kann aber am Anfang verwirrend sein. Deshalb ist auch reines CSS für den Anfang kein Problem.

## Finalisieren
1. Terminal öffnen – `CMD + Leertaste` öffnet Spotlight, dann `Terminal` eingeben und mit Enter bestätigen. Danach in den Theme-Ordner navigieren – `cd /pfad/zum/ordner/Hyperlabs-Eleventy-Starter-master` – gebt dazu einfach `cd` und ein Leerzeichen ins Terminal ein und [zieht den Theme-Ordner ins Terminal](https://www.youtube.com/watch?v=6-rk1OKIhB0). Der Pfad wird dann automatisch eingetragen. Mit Enter bestätigen.
2. Im Terminal `npm run build ` eingeben und mit Enter bestätigen. Der Build-Prozess wird jetzt gestartet – das kann ein wenig dauern.
3. Inhalt des Ordners `dist` per FTP auf den Webspace laden-
4. [Booyakasha!](https://www.youtube.com/watch?v=aKBYG4jb5uc)
