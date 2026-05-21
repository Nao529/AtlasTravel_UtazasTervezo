export default class Rendezes {

    static alapertelmezett(lista) {
        return [...lista];
    }

    static arNovekvo(lista) {
        return [...lista].sort((a, b) => a.ar - b.ar);
    }

    static arCsokkeno(lista) {
        return [...lista].sort((a, b) => b.ar - a.ar);
    }

}