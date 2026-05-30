/**
 * @class Utazasok
 * @classdesc Az utazások gyűjteményének kezeléséért és megjelenítéséért felelős osztály.
 */
export default class Utazasok {

  /**
   * Létrehoz egy új Utazasok példányt.
   *
   * @param {HTMLElement} szuloElem - A szülő DOM elem, amelyben az utazások megjelennek.
   */
  constructor(szuloElem) {
    this.utazasLista = [];
    this.szuloElem = szuloElem;
  }

  /**
   * Hozzáad egy új utazást a listához.
   *
   * @param {Utazas} utazas - A hozzáadandó utazás objektum.
   */
  hozzaad(utazas) {
    this.utazasLista.push(utazas);
  }

  /**
   * Megjeleníti az összes eltárolt utazást a szülő elemben.
   */
  utazasokMegjelenit() {
    this.szuloElem.innerHTML = "";
    this.utazasLista.forEach(utazas => {
      utazas.utazasMegjelenit();
    });
  }
}