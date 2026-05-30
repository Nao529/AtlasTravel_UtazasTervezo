/**
 * @class UtazasReszlet
 * @classdesc Az utazások részletes adatainak és a foglalási űrlapnak a modális ablakban történő megjelenítéséért felelős osztály.
 */
export default class UtazasReszlet {

    /**
     * Létrehoz egy új UtazasReszlet példányt,
     * beállítja a szükséges DOM elemeket és az eseménykezelőket.
     */
    constructor() {
        this.overlay = document.querySelector("#overlay");
        this.modal = document.querySelector("#modal");
        this.cim = document.querySelector("#modal-cim");
        this.tartalom = document.querySelector("#modal-leiras");
        this.bezarGomb = document.querySelector("#modal-close");
        this.bezarGomb.addEventListener("click", () => this.elrejt());
        this.overlay.addEventListener("click", () => this.elrejt());
    }

    /**
     * Megjeleníti a kiválasztott utazás részletes adatait
     * a modális ablakban.
     *
     * @param {Utazas} utazas - A megjelenítendő utazás objektum.
     */
    megjelenit(utazas) {
        this.cim.textContent = `${utazas.nev} - ${utazas.orszag}`;
        this.tartalom.innerHTML = `
      <div class="modal-kartya">
        <div class="modal-felso">
          <img src="${utazas.kep}" alt="${utazas.nev}" class="modal-kep">
          <div class="modal-szoveg">
            <p class="modal-rovid">${utazas.leiras}</p>
            <p class="modal-hosszu">${utazas.hosszuLeiras}</p>
          </div>
        </div>
        <div class="modal-also">
          <div class="modal-adatok">
            <div><strong>Időtartam:</strong> ${utazas.idotartam}</div>
            <div><strong>Létszám:</strong> ${utazas.letszam}</div>
            <div><strong>Ár:</strong> ${utazas.ar} Ft</div>
          </div>
          <button class="modal-foglalas">Foglalás</button>
        </div>
      </div>`;
        this.overlay.style.display = "block";
        this.modal.style.display = "block";
        this.tartalom
            .querySelector(".modal-foglalas")
            .addEventListener("click", () => {
                this.megjelenitForm(utazas)
                console.log("Foglalás indítása:", utazas.nev);
            });
    }

    /**
     * Elrejti a modális ablakot és a háttérfedő réteget.
     */
    elrejt() {
        this.overlay.style.display = "none";
        this.modal.style.display = "none";
    }

    /**
     * Megjeleníti a foglalási űrlapot a kiválasztott utazáshoz.
     *
     * @param {Utazas} utazas - A lefoglalni kívánt utazás objektum.
     */
    megjelenitForm(utazas) {
        this.tartalom.innerHTML = `
        <form id="foglalasForm" class="foglalas-form">
        <h3>Foglalás adatai</h3>
        <label>
            Név<input type="text" name="nev" required></label>
        <label>
            Email<input type="email" name="email" required>
        </label>
        <label>
            Telefon<input type="tel" name="telefon" required>
        </label>
        <label>
            Dátum<input type="date" name="datum" required>
        </label>
        <label>
            Létszám<input type="number" name="letszam" min="1" required>
        </label>
        <p><strong>Utazás:</strong> ${utazas.nev}</p>
        <p><strong>Összeg:</strong> ${utazas.ar} Ft</p>
        <label class="adatvedelem">
            <input type="checkbox" name="adatvedelem">
            Elfogadom az adatvédelmi tájékoztatót
        </label>
        <p class="hiba-uzenet"></p>
        <button type="submit">Foglalás megerősítése</button>
        </form>`;
        this.formEsemeny(utazas);
    }

    /**
     * Kezeli a foglalási űrlap eseményeit,
     * elvégzi az adatok ellenőrzését és létrehozza a foglalást.
     *
     * @param {Utazas} utazas - A lefoglalandó utazás objektum.
     */
    formEsemeny(utazas) {
        const form = document.querySelector("#foglalasForm");
        const hibaUzenet = form.querySelector(".hiba-uzenet");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nev = form.querySelector("input[name='nev']").value.trim();
            const email = form.querySelector("input[name='email']").value.trim();
            const telefon = form.querySelector("input[name='telefon']").value.trim();
            const datum = form.querySelector("input[name='datum']").value;
            const letszam = form.querySelector("input[name='letszam']").value;
            const adatvedelem = form.querySelector("input[name='adatvedelem']").checked;

            if (
                nev === "" ||
                email === "" ||
                telefon === "" ||
                datum === "" ||
                letszam === ""
            ) {
                hibaUzenet.textContent = "Minden mező kitöltése kötelező!";
                return;
            }

            if (!adatvedelem) {
                hibaUzenet.textContent =
                    "Az adatvédelmi tájékoztató elfogadása kötelező!";
                return;
            }

            hibaUzenet.textContent = "";

            const foglalasAdat = {
                nev: nev,
                email: email,
                telefon: telefon,
                datum: datum,
                letszam: letszam,
                utazas: utazas.nev,
                osszeg: utazas.ar
            };

            window.dispatchEvent(
                new CustomEvent("foglalasLetrehozva", {
                    detail: foglalasAdat
                })
            );

            this.elrejt();
        });
    }
}