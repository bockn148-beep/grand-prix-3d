# Grand Prix 3D als APK

## Weg A: APK in der Cloud bauen (ohne Android Studio)
1. Auf github.com ein kostenloses Konto anlegen und ein neues Repository erstellen.
2. Den kompletten Inhalt dieses Ordners hochladen, auch den versteckten Ordner .github (am PC per Drag and Drop im Browser).
3. Oben im Repository auf "Actions" gehen. Der Lauf "APK bauen" startet automatisch und dauert etwa 5 Minuten.
4. Auf den fertigen Lauf tippen, unten unter "Artifacts" grand-prix-3d-apk laden und entpacken.
5. Die Datei app-debug.apk aufs Handy kopieren und öffnen. Android fragt einmal, ob Installation aus dieser Quelle erlaubt ist.

## Weg B: Lokal mit Android Studio
Voraussetzung: Node 20, Java 17, Android Studio.
    npm install
    npx cap add android
    npx cap sync android
    cd android && ./gradlew assembleDebug
Die APK liegt danach in android/app/build/outputs/apk/debug/app-debug.apk

## Hinweise
- three.js wird beim Build lokal eingebunden, das Spiel läuft danach offline.
- Das ist eine Debug-APK für den privaten Gebrauch. Für den Play Store braucht es eine signierte Release-Version.
- Ein Bluetooth-Controller wird von der Android-WebView über die Gamepad-API erkannt.
