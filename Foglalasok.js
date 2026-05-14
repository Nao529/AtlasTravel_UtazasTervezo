import { Foglalas } from "./Foglalas.js";

export class Foglalasok{
    #foglalasLista;
    constructor(foglalasLista,szuloElem){
        this.#foglalasLista=foglalasLista;
        this.szuloElem=szuloElem;

        this.foglalasokMegjelenit();
        window.addEventListener(
            "lemond",
            (event) => {

                this.lemond(event.detail);

            }
        );
    }

    foglalasokMegjelenit(){
        this.szuloElem.innerHTML = "";

        this.#foglalasLista.forEach(
            (foglalas) => {new Foglalas(foglalas,this.szuloElem);

            }
        );
    }
}