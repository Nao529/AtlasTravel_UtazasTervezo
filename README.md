### AtlasTravel

# Utazástervező Webalkalmazás – Részletes Specifikáció
# Projekt célja

Egy modern, JavaScript alapú utazástervező webalkalmazás készítése, ahol a felhasználó:
* utazások között böngészhet
* szűrhet és kereshet
* részleteket tekinthet meg
* foglalást készíthet
* megtekintheti saját foglalásait

Az alkalmazás Single Page Application (SPA) jelleggel működik, ahol az oldalak dinamikusan jelennek meg JavaScript segítségével.

---
### UML ábra:

---
# Technológiák
## Frontend
* HTML5
* CSS3
* JavaScript (ES6)

## Adattárolás
* JSON
* localStorage (opcionális)

---

# Oldalszerkezet
## Header
Tartalmazza:
* logó
* navigációs menü

### Menüelemek
* Kezdőlap
* Utazások
* Foglalásaim
* Kapcsolat
---

# Főoldal
## Kereső és szűrő rész
A felhasználó kereshet:
* úticél szerint
* dátum szerint
* létszám szerint

A keresést egy gomb indítja.

---

## Rendezési lehetőségek
A találatok rendezhetők:
* ABC sorrend
* ár szerint növekvő
* ár szerint csökkenő
* időtartam szerint

---

# Utazás kártyák
Az utazások kártyák formájában jelennek meg.
## Egy kártya tartalma
* kép
* úticél neve
* ország
* rövid leírás
* időtartam
* ár
* maximális létszám
* részletek gomb

---

# Részletek megjelenítése
A „Részletek” gombra kattintva:
* felugró ablak/modal jelenik meg
* részletes leírással
* nagyobb képpel
* foglalás lehetőséggel

---

# Foglalás
A felhasználó:
* nevet ad meg
* email címet ad meg
* telefonszámot ad meg
* kiválasztja a létszámot
Foglalás után:
* a foglalás bekerül a „Foglalásaim” részbe
---

# Foglalásaim oldal/rész
Megjeleníti:
* lefoglalt utazásokat
* foglalási adatokat
* összegzést
Lehetőség van:
* foglalás törlésére

---

# UML Osztályok Specifikációja
# 1. index.js
## Feladata
A program fő vezérlője.
Kapcsolatot tart:
* az utazásokkal
* a foglalásokkal
* az aktuális kiválasztott utazással

## Adattagok
utazasok : Utazasok
foglalasok : Foglalasok
aktualisUtazas : Utazas

## Metódusok
### init()
Az alkalmazás indítása.
Feladata:
* osztályok példányosítása
* adatok betöltése
* eseménykezelők indítása

---

### oldalValtas(oldal)
Oldalak közötti navigáció kezelése.

---

### foglalasInditasa()
Foglalási folyamat elindítása.

---

### esemenyKezeles()
Globális eseménykezelések.
Például:
* navbar kattintások
* keresés
* rendezés

---

# 2. Utazasok
## Feladata
Az összes utazás kezelése.
Tárolja:
* az utazás objektumokat
* megjeleníti a kártyákat

## Adattagok
utazasLista : array
szuloElem : HTMLElement

## Metódusok
### utazasokMegjelenit()
Összes utazás renderelése.
Működés:
* végigiterál a listán
* minden elemhez létrehoz egy Utazas objektumot

---

# 3. Utazas
## Feladata
Egyetlen utazás kezelése.

## Adattagok
nev : String
orszag : String
kep : String
leiras : String
ar : int
idotartam : String
letszam : String
szuloElem : HTMLElement
kartyaElem : HTMLElement

## Metódusok
### utazasMegjelenit()
Kártya létrehozása és megjelenítése.

---

### reszletekMegnyitasa()
Részletes popup/modal megnyitása.

---

### esemenyek()
Kártyához tartozó eseménykezelések.
Például:
* részletek gomb
* kedvencek ikon

---

# 4. Foglalasok
## Feladata
Az összes foglalás kezelése.

## Adattagok
foglalasLista : array
szuloElem : HTMLElement

## Metódusok
### foglalasokMegjelenit()
Foglalások renderelése.

### foglal()
Új foglalás létrehozása.

### lemond()
Foglalás törlése.

### foglalasHozzaad(foglalas)
Új foglalás hozzáadása a listához.

---
# 5. Foglalas
## Feladata
Egyetlen foglalás adatainak kezelése.

## Adattagok
nev : String
email : String
telefon : String
datum : String
letszam : int
utazas : Utazas
szuloElem : HTMLElement
foglalasElem : HTMLElement

## Metódusok
### ment()
Foglalás mentése.

### foglalasMegjelenit()
Foglalási adatok megjelenítése.

### osszegSzamol()
Végösszeg kiszámítása.
Számítás:
* utazás ára × létszám

# Eseménykezelések
## Keresés gomb
* szűrés indítása

## Rendezés select
* lista újrarendezése

## Részletek gomb
* modal megnyitása

## Foglalás gomb
* foglalás létrehozása

## Lemondás gomb
* foglalás törlése

# Adatfolyamat
JSON adatok
     ↓
Utazasok
     ↓
Utazas objektumok
     ↓
Megjelenítés
     ↓
Foglalás
     ↓
Foglalas objektum
     ↓
Foglalasok lista
