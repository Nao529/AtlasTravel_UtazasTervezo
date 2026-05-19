import { UtazasLista } from "./UtazasLista.js";
import Utazas from "./Utazas.js";
import Utazasok from "./Utazasok.js";
import { foglalasLista } from "./FoglalasLista.js";
import { Foglalasok } from "./Foglalasok.js";

const KONTENER = document.querySelector("#utazasok");
const UTAZASOK = new Utazasok(KONTENER);

UtazasLista.forEach(adat => {
  const utazas = new Utazas(adat, KONTENER);
  UTAZASOK.hozzaad(utazas);
});

UTAZASOK.utazasokMegjelenit();
const foglalasKontener = document.querySelector("#foglalasok");

new Foglalasok(
    foglalasLista,
    foglalasKontener
);

const menuPontok = document.querySelectorAll(".main-nav a");

const utazasokElem = document.querySelector("#utazasok");

const foglalasokElem = document.querySelector("#foglalasok");

foglalasokElem.style.display = "none";

menuPontok.forEach((gomb) => {

    gomb.addEventListener("click", (event) => {
        event.preventDefault();
        menuPontok.forEach((elem) => {
            elem.classList.remove("active");
        });
        event.target.classList.add("active");
        const szoveg = event.target.textContent;
        if (szoveg === "Foglalásaim") {
            utazasokElem.style.display = "none";
            foglalasokElem.style.display = "grid";
        }
        if (szoveg === "Utazások") {
            utazasokElem.style.display = "grid";
            foglalasokElem.style.display = "none";
        }

    });

});