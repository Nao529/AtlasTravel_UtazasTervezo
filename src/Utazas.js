import UtazasReszlet from "./UtazasReszlet.js";

/**
 * @class Utazas
 * @classdesc Egy utazás adatainak tárolásáért és az utazás kártyájának megjelenítéséért felelős osztály.
 */
export default class Utazas {

  /**
   * Létrehoz egy új Utazas példányt.
   *
   * @param {Object} adatok - Az utazás adatait tartalmazó objektum.
   * @param {string} adatok.nev - Az utazás neve.
   * @param {string} adatok.orszag - Az utazás helyszínének országa.
   * @param {string} adatok.kep - Az utazás képének elérési útja.
   * @param {string} adatok.leiras - Rövid leírás.
   * @param {string} adatok.hosszuLeiras - Részletes leírás.
   * @param {number} adatok.ar - Az utazás ára.
   * @param {string} adatok.idotartam - Az utazás időtartama.
   * @param {string} adatok.letszam - Az ajánlott létszám.
   * @param {HTMLElement} szuloElem - A szülő DOM elem, ahová a kártya kerül.
   * @param {Object} reszletKezelo - Az utazás részleteinek megjelenítését kezelő objektum.
   */
  constructor(adatok, szuloElem, reszletKezelo) {
    this.nev = adatok.nev;
    this.orszag = adatok.orszag;
    this.kep = adatok.kep;
    this.leiras = adatok.leiras;
    this.hosszuLeiras = adatok.hosszuLeiras;
    this.ar = adatok.ar;
    this.idotartam = adatok.idotartam;
    this.letszam = adatok.letszam;
    this.szuloElem = szuloElem;
    this.kartyaElem = document.createElement("div");
    this.reszletKezelo = reszletKezelo;
  }

  /* UTAZÁS KÁRTYA */

  /**
   * Megjeleníti az utazás adatait egy kártyán,
   * valamint kezeli a részletek gomb eseményét.
   */
  utazasMegjelenit() {
    this.kartyaElem.classList.add("utazas-kartya");
    this.kartyaElem.innerHTML = `
      <img src="${this.kep}" alt="${this.nev}">
      <div class="kartya-tartalom">
        <h3>${this.nev}, ${this.orszag}</h3>
        <p class="leiras">${this.leiras}</p>
        <div class="kartya-info">
          <span>🕒 ${this.idotartam}</span>
          <span>👥 ${this.letszam}</span>
        </div>
        <div class="kartya-ar">Már ${this.ar} Ft-tól</div>
        <button class="reszletek-gomb">Részletek</button>
      </div>`;
    this.kartyaElem
      .querySelector(".reszletek-gomb")
      .addEventListener("click", () => {
        this.reszletKezelo.megjelenit(this);
      });
    this.szuloElem.appendChild(this.kartyaElem);
  }
}