# PDF Tools - Windows Desktop Application

Eine professionelle Windows-Desktop-Anwendung zum Aufteilen und Zusammenfügen von PDF-Dateien.

## Features

- **PDF Splitten**: PDF-Dateien in einzelne Seiten aufteilen
- **PDF Zusammenfügen**: Mehrere PDF-Dateien zu einer Datei zusammenfügen
- **PDF Signieren**: PDF-Dateien mit digitaler Unterschrift versehen
- **Moderne Benutzeroberfläche**: Intuitive und benutzerfreundliche Bedienung
- **Drag & Drop**: Einfaches Ziehen und Ablegen von Dateien
- **Vorschau**: PDF-Vorschau vor der Verarbeitung
- **Dark Mode**: Unterstützung für dunkles Design

## Installation

### Voraussetzungen

- Windows 10 oder höher
- Node.js (für Entwicklung)
- npm (für Entwicklung)

### Für Endbenutzer

1. Laden Sie die neueste Version aus dem `dist`-Ordner herunter
2. Führen Sie die `.exe`-Datei aus
3. Folgen Sie den Installationsanweisungen

### Für Entwickler

1. **Repository klonen**
   ```bash
   git clone <repository-url>
   cd pdf-tools-enhanced
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

3. **Anwendung starten (Entwicklungsmodus)**
   ```bash
   npm start
   ```

4. **Windows-Executable erstellen**
   ```bash
   # Windows
   build-windows.bat
   
   # Oder manuell
   npm run build-win
   ```

## Build-Prozess

### Automatischer Build (Windows)

```batch
build-windows.bat
```

### Manueller Build

```bash
# Alle Plattformen
npm run build

# Nur Windows
npm run build-win

# Nur macOS
npm run build-mac

# Nur Linux
npm run build-linux
```

## Projektstruktur

```
pdf-tools-enhanced/
├── main.js                 # Electron-Hauptdatei
├── index.html             # Web-App HTML
├── style.css              # Styling
├── script.js              # JavaScript-Funktionalität
├── manifest.json          # PWA-Manifest
├── sw.js                  # Service Worker
├── assets/                # Icons und Assets
│   ├── icon.svg           # SVG-Icon
│   ├── icon.png           # PNG-Icon
│   └── icon.ico           # Windows ICO-Icon
├── package.json         # NPM-Konfiguration
├── build-windows.bat      # Windows Build-Skript
├── build.sh              # Unix/Linux Build-Skript
└── dist/                 # Build-Ausgabe
```

## Technische Details

- **Framework**: Electron
- **Web-Technologien**: HTML5, CSS3, JavaScript
- **PDF-Verarbeitung**: PDF-lib, PDF.js
- **Build-Tool**: electron-builder
- **Plattformen**: Windows, macOS, Linux

## Entwicklung

### Lokale Entwicklung

```bash
npm start
```

### Debug-Modus

```bash
npm run dev
```

### Build-Konfiguration

Die Build-Konfiguration befindet sich in der `package.json` unter dem `build`-Abschnitt:

```json
{
  "build": {
    "appId": "com.pdftools.enhanced",
    "productName": "PDF Tools",
    "win": {
      "target": "nsis",
      "icon": "assets/icon.png"
    }
  }
}
```

## Fehlerbehebung

### Häufige Probleme

1. **Node.js nicht gefunden**
   - Installieren Sie Node.js von https://nodejs.org/
   - Stellen Sie sicher, dass Node.js im PATH verfügbar ist

2. **Build-Fehler**
   - Löschen Sie den `node_modules`-Ordner
   - Führen Sie `npm install` erneut aus
   - Überprüfen Sie die Internetverbindung

3. **Icon-Probleme**
   - Stellen Sie sicher, dass die Icons im `assets`-Ordner vorhanden sind
   - Überprüfen Sie die Icon-Pfade in der `package.json`

## Lizenz

MIT License - siehe LICENSE-Datei für Details.

## Autor

Erstellt von T.Tubacki

## Support

Bei Problemen oder Fragen erstellen Sie bitte ein Issue im GitHub-Repository.
