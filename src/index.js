/**
 * Az alkalmazás belépési pontja.
 * Kezeli az utazások és foglalások megjelenítését,
 * a navigációt, a rendezést és a keresést.
 */
import { utazasLista } from "./utazasLista.js";
import Utazas from "./Utazas.js";
import Utazasok from "./Utazasok.js";
import UtazasReszlet from "./UtazasReszlet.js";
import { foglalasLista } from "./foglalasLista.js";
import { Foglalasok } from "./Foglalasok.js";
import Rendezes from "./Rendezes.js";
import Kereso from "./Kereso.js";

/* VÁLTOZÓK */
/* utazás elemek */
const UTAZASOK_ELEM = document.querySelector("#utazasok");
/**
 * Az utazások gyűjteményét kezelő objektum.
 * @type {Utazasok}
 */
const UTAZASOK = new Utazasok(UTAZASOK_ELEM);
/* részletek (modal) kezelő – EGYSZER */
/**
 * A modális ablak kezeléséért felelős objektum.
 * @type {UtazasReszlet}
 */
const UTAZAS_RESZLET = new UtazasReszlet();
/* foglalás elemek */
const FOGLALASOK_ELEM = document.querySelector("#foglalasok");
/**
 * A foglalások kezeléséért felelős objektum.
 * @type {Foglalasok}
 */
const FOGLALASOK = new Foglalasok(foglalasLista, FOGLALASOK_ELEM);
/* menüpontok, rendezés */
const MENUPONTOK = document.querySelectorAll(".main-nav a");
const RENDEZES = document.querySelector(".rendezes");
const ALAPERTELMEZETT = document.querySelector("#alap");
const ARNO = document.querySelector("#ar_no");
const ARCSOKK = document.querySelector("#ar_csokk");
/**
 * Az utazások rendezését végző objektum.
 * @type {Rendezes}
 */
const RENDEZO = new Rendezes();
/**
 * Az utazások keresését végző objektum.
 * @type {Kereso}
 */
const KERESO = new Kereso();
const NEVKERESO = document.querySelector("#nevKereso");
const LETSZAMKERESO = document.querySelector("#letszamKereso");
const KERESESGOMB = document.querySelector("#keresesGomb");


/* UTAZÁSOK MEGJELENÍTÉSE */
utazasLista.forEach(adat => {
  const UTAZAS = new Utazas(adat, UTAZASOK_ELEM, UTAZAS_RESZLET);
  UTAZASOK.hozzaad(UTAZAS);
});
UTAZASOK.utazasokMegjelenit();
megjelenitUtazasok(utazasLista);
/* eredeti lista sorrendje */
const EREDETI_UTAZASLISTA = [];
for (let i = 0; i < utazasLista.length; i++) {
  EREDETI_UTAZASLISTA.push(utazasLista[i]);
}

/* FOGLALÁSOK / MENÜ KEZELÉS */
FOGLALASOK_ELEM.style.display = "none";
MENUPONTOK.forEach(elem => {
  if (elem.textContent === "Utazások") {
    elem.classList.add("active");
  } else {
    elem.classList.remove("active");
  }
});
MENUPONTOK.forEach(gomb => {
  gomb.addEventListener("click", event => {
    event.preventDefault();
    MENUPONTOK.forEach(elem => elem.classList.remove("active"));
    event.target.classList.add("active");
    const szoveg = event.target.textContent;
    if (szoveg === "Foglalásaim") {
      UTAZASOK_ELEM.style.display = "none";
      FOGLALASOK_ELEM.style.display = "grid";
      RENDEZES.style.display = "none";
    }
    if (szoveg === "Utazások") {
      UTAZASOK_ELEM.style.display = "grid";
      FOGLALASOK_ELEM.style.display = "none";
      RENDEZES.style.display = "flex";
    }
  });
});

/* RENDEZÉS */
ALAPERTELMEZETT.addEventListener("click", () => {
  megjelenitUtazasok(RENDEZO.alapertelmezett(EREDETI_UTAZASLISTA));
});
ARNO.addEventListener("click", () => {
  megjelenitUtazasok(RENDEZO.arNovekvo(utazasLista)
  );
});
ARCSOKK.addEventListener("click", () => {
  megjelenitUtazasok(RENDEZO.arCsokkeno(utazasLista)
  );
});

/* SEGÉDFÜGGVÉNY */
/**
 * Megjeleníti a paraméterként kapott utazáslistát.
 *
 * @param {Array<Object>} lista - A megjelenítendő utazások listája.
 */
function megjelenitUtazasok(lista) {
  UTAZASOK.utazasLista = [];
  lista.forEach(adat => {
    const UTAZAS = new Utazas(adat, UTAZASOK_ELEM, UTAZAS_RESZLET);
    UTAZASOK.hozzaad(UTAZAS);
  });
  UTAZASOK.utazasokMegjelenit();
}
window.addEventListener("foglalasLetrehozva", (e) => {
  FOGLALASOK.hozzaad(e.detail);
  FOGLALASOK.foglalasokMegjelenit();
});
KERESESGOMB.addEventListener("click",()=>{
    let lista = KERESO.nevSzerint(
        utazasLista,
        NEVKERESO.value
    );
    lista = KERESO.letszamSzerint(
          lista,
          LETSZAMKERESO.value
        );
    megjelenitUtazasok(lista);
});
