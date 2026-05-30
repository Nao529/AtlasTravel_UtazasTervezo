import { Foglalas } from "./Foglalas.js";

/**
 * @class Foglalasok
 * @classdesc A foglalások listájának kezeléséért, megjelenítéséért és törléséért felelős osztály.
 */
export class Foglalasok {

    /**
     * @private
     * @type {Array<Object>}
     */
    #foglalasLista;

    /**
     * Létrehoz egy új Foglalasok példányt.
     *
     * @param {Array<Object>} foglalasLista - A foglalások listája.
     * @param {HTMLElement} szuloElem - A szülő DOM elem, ahol a foglalások megjelennek.
     */
    constructor(foglalasLista, szuloElem) {
        this.#foglalasLista = foglalasLista;
        this.szuloElem = szuloElem;
        this.foglalasokMegjelenit();

        window.addEventListener(
            "lemond",
            (event) => { this.lemond(event.detail); }
        );
    }

    /**
     * Megjeleníti az összes foglalást.
     */
    foglalasokMegjelenit() {
        this.szuloElem.innerHTML = "";
        this.#foglalasLista.forEach(
            (foglalas) => {
                new Foglalas(foglalas, this.szuloElem);
            }
        );
    }

    /**
     * Hozzáad egy új foglalást a listához.
     *
     * @param {Object} ujFoglalas - Az új foglalás adatai.
     */
    hozzaad(ujFoglalas) {
        this.#foglalasLista.push(ujFoglalas);
        this.foglalasokMegjelenit();
    }

    /**
     * Törli a kiválasztott foglalást a listából.
     *
     * @param {Foglalas} foglalas - A törlendő foglalás.
     */
    lemond(foglalas) {
        const index = this.#foglalasLista.findIndex(
            (elem) => elem.nev === foglalas.nev
        );

        if (index !== -1) {
            this.#foglalasLista.splice(index, 1);
            this.foglalasokMegjelenit();
        }
    }
}