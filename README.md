
<h3 align="center">Hyper⚡labs Eleventy Starter</h3>
<p align="center">Starter theme für den static site generator Eleventy zur Entwicklung ortsbasierter Websites.</p>
<p align="center"><a href="https://hyperlabs-eleventy-starter-demo.netlify.app/">Demo</a></p>

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
Falls node.js noch nicht installiert ist, muss dies zuerst erledigt werden:

1. [Node.js herunterladen](https://nodejs.org/en/) und installieren 
2. [Starter theme herunterladen](https://github.com/w-stegmann/Hyperlabs-Eleventy-Starter/archive/master.zip)
3. `master.zip` entpacken und Ordner öffnen
4. Terminal öffnen – `CMD + Leertaste` öffnet Spotlight, dann `Terminal`eingeben und mit Enter bestätigen. Danach in den Theme-Ordner navigieren – `cd /pfad/zum/ordner/Hyperlabs-Eleventy-Starter-master` – gebt dazu einfach `cd` und ein Leerzeichen ins Terminal ein und [zieht den Theme-Ordner ins Terminal](https://www.youtube.com/watch?v=6-rk1OKIhB0). Der Pfad wird dann automatisch eingetragen. Mit Enter bestätigen.
5. Im Terminal `npm install` eingeben und mit Enter bestätigen. Jetzt werden alle benötigten Tools installiert. Das kann eine Weile dauern. Danach bist du bereit zum Entwickeln!

## Entwickeln
1. ``` $ npm run dev ``` startet den Entwicklungsserver und öffnet ein Browserfenster. Code-Änderungen werden direkt im Browser angezeigt.
2. Lokale URL des Entwicklungsservers: [http://localhost:8080](http://localhost:8080)
3. Server-Einstellungen befinden sich in `.lightserverrc`.

## Finalisieren
1. ` $ npm run build ` im Terminal ausführen
2. Inhalt des Ordner `dist` per FTP auf den Webspace laden
