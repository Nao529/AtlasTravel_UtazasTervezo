export default class Utazasok {
  constructor(szuloElem) {
    this.utazasLista = [];
    this.szuloElem = szuloElem;
  }

  hozzaad(utazas) {
    this.utazasLista.push(utazas);
  }
  utazasokMegjelenit() {
    this.szuloElem.innerHTML = "";
    this.utazasLista.forEach(utazas => {
      utazas.utazasMegjelenit();
    });
  }
}