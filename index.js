import { utazasLista } from "./utazasLista.js";
import Utazas from "./Utazas.js";
import Utazasok from "./Utazasok.js";
import UtazasReszlet from "./UtazasReszlet.js";
import { foglalasLista } from "./foglalasLista.js";
import { Foglalasok } from "./Foglalasok.js";
import Rendezes from "./Rendezes.js";

/* VÁLTOZÓK */
/* utazás elemek */
const UTAZASOK_ELEM = document.querySelector("#utazasok");
const UTAZASOK = new Utazasok(UTAZASOK_ELEM);
/* részletek (modal) kezelő – EGYSZER */
const UTAZAS_RESZLET = new UtazasReszlet();
/* foglalás elemek */
const FOGLALASOK_ELEM = document.querySelector("#foglalasok");
const FOGLALASOK = new Foglalasok(foglalasLista, FOGLALASOK_ELEM);
/* menüpontok, rendezés */
const MENUPONTOK = document.querySelectorAll(".main-nav a");
const RENDEZES = document.querySelector(".rendezes");
const ALAPERTELMEZETT = document.querySelector("#alap");
const ARNO = document.querySelector("#ar_no");
const ARCSOKK = document.querySelector("#ar_csokk");
const RENDEZO = new Rendezes();

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
  megjelenitUtazasok(Rendezes.alapertelmezett(EREDETI_UTAZASLISTA));
});
ARNO.addEventListener("click", () => {
  megjelenitUtazasok(Rendezes.arNovekvo(utazasLista));
});
ARCSOKK.addEventListener("click", () => {
  megjelenitUtazasok(Rendezes.arCsokkeno(utazasLista));
});

/* SEGÉDFÜGGVÉNY */
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
  FOGLALASOK.megjelenit();
});
