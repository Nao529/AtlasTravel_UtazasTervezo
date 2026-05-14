import { UtazasLista } from "./UtazasLista.js";
import Utazas from "./Utazas.js";
import Utazasok from "./Utazasok.js";
import { foglalasLista } from "./FoglalasLista.js";
import { Foglalasok } from "./Foglalasok.js";

const kontener = document.querySelector("#utazasok");
const utazasok = new Utazasok(kontener);

const foglalasKontener = document.querySelector("#foglalasok");

new Foglalasok(
    foglalasLista,
    foglalasKontener
);