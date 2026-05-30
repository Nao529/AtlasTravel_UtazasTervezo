/**
 * @class Foglalas
 * @classdesc Egy foglalás adatainak tárolásáért, megjelenítéséért és lemondásának kezeléséért felelős osztály.
 */
export class Foglalas {

    /**
     * @private
     * @type {string}
     */
    #nev;

    /**
     * @private
     * @type {string}
     */
    #email;

    /**
     * @private
     * @type {string}
     */
    #telefon;

    /**
     * @private
     * @type {string}
     */
    #datum;

    /**
     * @private
     * @type {number}
     */
    #letszam;

    /**
     * @private
     * @type {string}
     */
    #utazas;

    /**
     * @private
     * @type {number}
     */
    #osszeg;

    /**
     * Létrehoz egy új Foglalas példányt és megjeleníti azt.
     *
     * @param {Object} foglalas - A foglalás adatait tartalmazó objektum.
     * @param {HTMLElement} szuloElem - A szülő DOM elem, ahová a foglalás kerül.
     */
    constructor(foglalas, szuloElem) {
        this.#nev = foglalas.nev;
        this.#email = foglalas.email;
        this.#telefon = foglalas.telefon;
        this.#datum = foglalas.datum;
        this.#letszam = Number(foglalas.letszam);
        this.#utazas = foglalas.utazas;
        this.#osszeg = foglalas.osszeg;
        this.szuloElem = szuloElem;
        this.foglalasMegjelenit();
        this.foglalasElem = this.szuloElem.lastElementChild;
        this.foglalasElem
            .querySelector(".lemond")
            .addEventListener("click", () => {
                this.ment();
            });
    }

    /**
     * Egyedi "lemond" eseményt küld az aktuális foglalással.
     */
    ment() {
        const esemeny = new CustomEvent("lemond", {
            detail: this
        });
        window.dispatchEvent(esemeny);
    }

    /**
     * Megjeleníti a foglalás adatait egy kártyán.
     */
    foglalasMegjelenit() {
        let txt = `
            <div class="foglalasKartya">
                <h2>${this.#nev}</h2>
                <p><strong>Email:</strong> ${this.#email}</p>
                <p><strong>Telefon:</strong> ${this.#telefon}</p>
                <p><strong>Dátum:</strong> ${this.#datum}</p>
                <p><strong>Létszám:</strong> ${this.#letszam} fő</p>
                <p><strong>Utazás:</strong> ${this.#utazas}</p>
                <p><strong>Összeg:</strong> ${this.osszegSzamol()} Ft</p>
                <button class="lemond">Lemondás</button>
            </div>`;
        this.szuloElem.insertAdjacentHTML("beforeend", txt);
    }

    /**
     * Kiszámolja a foglalás teljes összegét.
     *
     * @returns {number} A teljes fizetendő összeg.
     */
    osszegSzamol() {
        return this.#letszam * this.#osszeg;
    }

    /**
     * @returns {string} A foglaló neve.
     */
    get nev() {
        return this.#nev;
    }

    /**
     * @returns {string} A foglaló email címe.
     */
    get email() {
        return this.#email;
    }

    /**
     * @returns {string} A foglaló telefonszáma.
     */
    get telefon() {
        return this.#telefon;
    }

    /**
     * @returns {string} A foglalás dátuma.
     */
    get datum() {
        return this.#datum;
    }

    /**
     * @returns {number} A foglalás létszáma.
     */
    get letszam() {
        return this.#letszam;
    }

    /**
     * @returns {string} A lefoglalt utazás neve.
     */
    get utazas() {
        return this.#utazas;
    }

    /**
     * @returns {number} Az utazás egy főre vonatkozó ára.
     */
    get osszeg() {
        return this.#osszeg;
    }
}