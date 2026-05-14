export default class Utazas {
  constructor(adatok, szuloElem) {
    this.nev = adatok.nev;
    this.orszag = adatok.orszag;
    this.kep = adatok.kep;
    this.leiras = adatok.leiras;
    this.ar = adatok.ar;
    this.idotartam = adatok.idotartam;
    this.letszam = adatok.letszam;
    this.szuloElem = szuloElem;
    this.kartyaElem = document.createElement("div");
  }

  utazasMegjelenit() {
    this.kartyaElem.classList.add("utazas-kartya");
    this.kartyaElem.innerHTML = `
      <img src='${this.kep}'>
      <div class="kartya-tartalom">
        <h3>${this.nev}, ${this.orszag}</h3>
        <p class="leiras">${this.leiras}</p>
        <div class="kartya-info">
          <span>🕒 ${this.idotartam}</span>
          <span>👥 ${this.letszam}</span>
        </div>
        <div class="kartya-ar">
          Már ${this.ar} Ft-tól
        </div>
        <button class="reszletek-gomb">Részletek</button>
      </div>`;
    this.szuloElem.appendChild(this.kartyaElem);
  }
}