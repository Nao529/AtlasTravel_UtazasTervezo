import { UtazasLista } from "./UtazasLista.js";
import Utazas from "./Utazas.js";
import Utazasok from "./Utazasok.js";

const KONTENER = document.querySelector("#utazasok");
const UTAZASOK = new Utazasok(KONTENER);

UtazasLista.forEach(adat => {
  const utazas = new Utazas(adat, KONTENER);
  UTAZASOK.hozzaad(utazas);
});

UTAZASOK.utazasokMegjelenit();