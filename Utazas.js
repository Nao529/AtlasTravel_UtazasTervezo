import UtazasReszlet from "./UtazasReszlet.js";

export default class Utazas {
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
      </div>
    `;

    this.kartyaElem
      .querySelector(".reszletek-gomb")
      .addEventListener("click", () => {
        this.reszletKezelo.megjelenit(this);
      });

    this.szuloElem.appendChild(this.kartyaElem);
  }
}