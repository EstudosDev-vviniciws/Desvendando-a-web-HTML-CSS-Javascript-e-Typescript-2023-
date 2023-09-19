"use strict";
class Outro {
    constructor() {
        this.endereco = "";
    }
}
const funcao = (validacao) => {
    if (validacao) {
        return {
            idade: 54,
            nome: "gol",
        };
    }
    return {
        endereco: "fdsfs",
    };
};
const resultado = funcao(false);
if (resultado instanceof Outro) {
    console.log("passou aqui");
}
if ("idade" in resultado) {
    if (typeof resultado.idade === "string") {
        console.log(resultado.idade);
    }
}
if ("rodas" in resultado) {
    console.log(resultado.rodas);
}
