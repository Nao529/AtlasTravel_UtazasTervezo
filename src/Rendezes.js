/**
 * @class Rendezes
 * @classdesc Az utazások különböző szempontok szerinti rendezéséért felelős osztály.
 */
export default class Rendezes {

    /**
     * Visszaadja az utazások listáját eredeti sorrendben.
     *
     * @param {Array<Object>} lista - Az utazások listája.
     * @returns {Array<Object>} Az eredeti lista.
     */
    alapertelmezett(lista) {
        return lista;
    }

    /**
     * Az utazásokat ár szerint növekvő sorrendbe rendezi.
     *
     * @param {Array<Object>} lista - Az utazások listája.
     * @returns {Array<Object>} Ár szerint növekvően rendezett lista.
     */
    arNovekvo(lista) {
        return lista.sort((a, b) => a.ar - b.ar);
    }

    /**
     * Az utazásokat ár szerint csökkenő sorrendbe rendezi.
     *
     * @param {Array<Object>} lista - Az utazások listája.
     * @returns {Array<Object>} Ár szerint csökkenően rendezett lista.
     */
    arCsokkeno(lista) {
        return lista.sort((a, b) => b.ar - a.ar);
    }
}