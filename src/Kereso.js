/**
 * @class Kereso
 * @classdesc Az utazások kereséséért és szűréséért felelős osztály.
 */
export default class Kereso {

    /**
     * Az utazások listáját név alapján szűri.
     *
     * @param {Array<Object>} lista - Az utazások listája.
     * @param {string} nev - A keresett név vagy névrészlet.
     * @returns {Array<Object>} A feltételnek megfelelő utazások listája.
     */
    nevSzerint(lista, nev){
        return lista.filter((utazas)=>{
            return utazas.nev
                .toLowerCase()
                .includes(nev.toLowerCase());
        });
    }

    /**
     * Az utazások listáját létszám alapján szűri.
     *
     * @param {Array<Object>} lista - Az utazások listája.
     * @param {string} letszam - A keresett létszám.
     * @returns {Array<Object>} A feltételnek megfelelő utazások listája.
     */
    letszamSzerint(lista, letszam){
        if(letszam===""){
            return lista;
        }
        return lista.filter((utazas)=>{
            return utazas.letszam.includes(letszam);
        });
    }
}