export  class Foglalas{
    #nev;
    #email;
    #telefon;
    #datum;
    #letszam;
    #utazas;
    constructor(foglalas,szuloElem){
        this.#nev=foglalas.nev;
        this.#email=foglalas.email;
        this.#telefon=foglalas.telefon;
        this.#datum=foglalas.datum;
        this.#letszam=foglalas.letszam;
        this.#utazas=foglalas.utazas;

        this.foglalasMegjelenit(szuloElem)
        this.foglalasElem=this.szuloElem.children().last();
        this.foglalasElem.find(".lemond").on("click",()=>{
            this.ment
        })

    }

    ment() {
        const esemeny = new CustomEvent("lemond", {
            detail: this
        });

        window.dispatchEvent(esemeny);
    }

    foglalasMegjelenit(szuloElem){
        let txt=`
            <div class="foglalas">
                <h3>${this.#nev}</h3>
                <p>${this.#email}</p>
                <p>${this.#telefon}</p>
                <p>${this.#datum}</p>
                <p>${this.#letszam}</p>
                <p>${this.#utazas}</p>
            </div>
        `
        this.szuloElem.append(txt);
    }
    
    osszegSzamol(){
        return this.#letszam*10000;
    }


}