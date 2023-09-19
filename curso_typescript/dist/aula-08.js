"use strict";
class Outro {
    constructor() {
        this.endereço = "";
    }
}
const função = (validação) => {
    if (validação) {
        return {
            idade: 32,
            nome: "Lancer Evo",
        };
    }
    return {
        endereço: "nohdoahsd",
    };
};
const resultado = função(false);
if (resultado instanceof Outro) {
    console.log("PASSOU AQUI");
}
if ("idade" in resultado) {
    if (typeof resultado.idade === "string") {
        console.log(resultado.idade);
    }
}
if ("rodas" in resultado) {
    console.log(resultado.rodas);
}
