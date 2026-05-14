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


}