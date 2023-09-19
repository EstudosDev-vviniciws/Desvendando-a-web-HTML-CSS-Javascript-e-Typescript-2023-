"use strict";
var _a;
const endereço = {
    bairro: "Joaquim",
    rua: "Perola",
    cidade: {
        nome: "BH",
        estado: {
            nome: "MG",
        },
    },
};
console.log(((_a = endereço.complemento) === null || _a === void 0 ? void 0 : _a.substring(3)) || "DEU ERRO");
console.log(endereço);
