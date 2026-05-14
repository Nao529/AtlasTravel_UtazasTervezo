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
        this.szuloElem=szuloElem

        this.foglalasMegjelenit(szuloElem)
        this.foglalasElem =
            this.szuloElem.lastElementChild;

        this.foglalasElem
            .querySelector(".lemond").addEventListener("click", () => {

                this.ment();

            });
    }

    ment() {
        const esemeny = new CustomEvent("lemond", {
            detail: this
        });

        window.dispatchEvent(esemeny);
    }

    foglalasMegjelenit(){
        let txt=`
            <div class="foglalasKartya">
                <h2>${this.#nev}</h2>
                <p><strong>Email:</strong> ${this.#email}</p>
                <p><strong>Telefon:</strong> ${this.#telefon}</p>
                <p><strong>Dátum:</strong> ${this.#datum}</p>
                <p><strong>Létszám:</strong> ${this.#letszam} fő</p>
                <p><strong>Utazás:</strong> ${this.#utazas}</p>
                <p><strong>Összeg:</strong> ${this.osszegSzamol()} Ft</p>
                <button class ="lemond">Lemondás</button>
            </div>
        `
        this.szuloElem.append(txt);
    }
    
    osszegSzamol(){
        return this.#letszam*10000;
    }
    get nev() {
        return this.#nev
    }

    get email() {
        return this.#email
    }

    get telefon() {
        return this.#telefon
    }

    get datum() {
        return this.#datum
    }

    get letszam() {
        return this.#letszam
    }

    get utazas() {
        return this.#utazas
    }

}