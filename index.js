import { UtazasLista } from "./UtazasLista.js";
import Utazas from "./Utazas.js";
import Utazasok from "./Utazasok.js";
import { FoglalasLista } from "./FoglalasLista.js";
import { Foglalasok } from "./Foglalasok.js";
import Rendezes from "./Rendezes.js";

/* VALTOZOK */
/* utazas elemek */
const UTAZASOK_ELEM = document.querySelector("#utazasok");
const UTAZASOK = new Utazasok(UTAZASOK_ELEM);

/* foglalas elemek */
const FOGLALASOK_ELEM = document.querySelector("#foglalasok");
const FOGLALASOK = new Foglalasok(FoglalasLista, FOGLALASOK_ELEM);

/* menupontok, rendezes */
const MENUPONTOK = document.querySelectorAll(".main-nav a");
const RENDEZES = document.querySelector(".rendezes");
const ALAPERTELMEZETT = document.querySelector("#alap");
const ARNO = document.querySelector("#ar_no");
const ARCSOKK = document.querySelector("#ar_csokk");
const RENDEZO = new Rendezes();

/* UTAZASOK MEGJELENITESE */
megjelenitUtazasok(UtazasLista);

/* eredeti lista sorrendje */
const EREDETI_UTAZASLISTA = [];
for (let i = 0; i < UtazasLista.length; i++) {
  EREDETI_UTAZASLISTA.push(UtazasLista[i]);
}

/* FOGLALASOK MEGJELENITESE */
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
    MENUPONTOK.forEach(elem => {
      elem.classList.remove("active");
    });
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

/* RENDEZES */
function listaBetolt(lista){

    UTAZASOK.utazasLista = [];

    lista.forEach(adat => {
        const UTAZAS = new Utazas(adat, UTAZASOK_ELEM);
        UTAZASOK.hozzaad(UTAZAS);
    });

    UTAZASOK.utazasokMegjelenit();
}

ALAPERTELMEZETT.addEventListener("click", () => {
    listaBetolt(EREDETI_UTAZASLISTA);
});

ARNO.addEventListener("click", () => {
    listaBetolt(RENDEZO.arNovekvo(UtazasLista));
});

ARCSOKK.addEventListener("click", () => {
    listaBetolt(RENDEZO.arCsokkeno(UtazasLista));
});