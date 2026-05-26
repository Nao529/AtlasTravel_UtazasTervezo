export default class Kereso {

    nevSzerint(lista, nev){
        return lista.filter((utazas)=>{
            return utazas.nev
                .toLowerCase()
                .includes(nev.toLowerCase());
        });

    }

    letszamSzerint(lista, letszam){
    if(letszam===""){
        return lista;
    }
    return lista.filter((utazas)=>{
        return utazas.letszam.includes(letszam);
    });

}

}