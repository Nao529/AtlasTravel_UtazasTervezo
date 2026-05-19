import { UtazasLista } from "./UtazasLista.js";
import Utazas from "./Utazas.js";
import Utazasok from "./Utazasok.js";
import { FoglalasLista } from "./FoglalasLista.js";
import { Foglalasok } from "./Foglalasok.js";

/* utazas elemek */
const UTAZASOK_ELEM = document.querySelector("#utazasok");
const UTAZASOK = new Utazasok(UTAZASOK_ELEM);

/* foglalas elemek */
const FOGLALASOK_ELEM = document.querySelector("#foglalasok");
const FOGLALASOK = new Foglalasok(FoglalasLista, FOGLALASOK_ELEM);

const MENUPONTOK = document.querySelectorAll(".main-nav a");

UtazasLista.forEach(adat => {
  const UTAZAS = new Utazas(adat, UTAZASOK_ELEM);
  UTAZASOK.hozzaad(UTAZAS);
});
UTAZASOK.utazasokMegjelenit();

FOGLALASOK_ELEM.style.display = "none";
MENUPONTOK.forEach((gomb) => {
    gomb.addEventListener("click", (event) => {
        event.preventDefault();
        MENUPONTOK.forEach((elem) => {
            elem.classList.remove("active");
        });
        event.target.classList.add("active");
        const szoveg = event.target.textContent;
        if (szoveg === "Foglalásaim") {
            UTAZASOK_ELEM.style.display = "none";
            FOGLALASOK_ELEM.style.display = "grid";
        }
        if (szoveg === "Utazások") {
            UTAZASOK_ELEM.style.display = "grid";
            FOGLALASOK_ELEM.style.display = "none";
        }
    });
});