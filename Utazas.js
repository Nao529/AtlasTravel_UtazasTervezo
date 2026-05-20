export default class Utazas {
  constructor(adatok, szuloElem) {
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
  }

  /* UTAZÁS KÁRTYA (LISTA) */
  utazasMegjelenit() {
    this.kartyaElem.classList.add("utazas-kartya");
    this.kartyaElem.innerHTML = `
      <img src="${this.kep}">
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
      .addEventListener("click", () => this.reszletekMegjelenit());
    this.szuloElem.appendChild(this.kartyaElem);
  }

  /* RÉSZLETEK – NAGY KÁRTYA */
  reszletekMegjelenit() {
    const overlay = document.querySelector("#overlay");
    const modal = document.querySelector("#modal");
    const cim = document.querySelector("#modal-cim");
    const leiras = document.querySelector("#modal-leiras");
    cim.textContent = `${this.nev} - ${this.orszag}`;
    leiras.innerHTML = `
      <div class="modal-kartya">
        <img src="${this.kep}" class="modal-kep">
        <div class="modal-info">
          <p class="modal-rovid">${this.leiras}</p>
          <p class="modal-hosszu">${this.hosszuLeiras}</p>
          <div class="modal-adatok">
            <div><strong>Időtartam:</strong> ${this.idotartam}</div>
            <div><strong>Létszám:</strong> ${this.letszam}</div>
            <div><strong>Ár:</strong> ${this.ar} Ft</div>
          </div>
          <button class="modal-foglalas">Foglalás</button>
        </div>
      </div>`;
    overlay.style.display = "block";
    modal.style.display = "block";
    document.querySelector("#modal-close").onclick = () => this.reszletekElrejt();
    overlay.onclick = () => this.reszletekElrejt();
    leiras.querySelector(".modal-foglalas").onclick = () => {
      console.log("Foglalás indítása:", this.nev);
    };
  }
  reszletekElrejt() {
    document.querySelector("#overlay").style.display = "none";
    document.querySelector("#modal").style.display = "none";
  }
}