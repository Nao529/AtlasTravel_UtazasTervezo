export default class Rendezes {
    alapertelmezett(lista) {
        return lista;
    }
    arNovekvo(lista) {
        return lista.sort((a, b) => a.ar - b.ar);
    }
    arCsokkeno(lista) {
        return lista.sort((a, b) => b.ar - a.ar);
    }
}