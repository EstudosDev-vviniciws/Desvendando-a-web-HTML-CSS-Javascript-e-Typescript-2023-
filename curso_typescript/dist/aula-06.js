"use strict";
const funçãoTeste = (param1, param2) => {
    if (!param2) {
        return param1;
    }
    return param1 + param2;
};
const ObjetoQualquer = {
    função: funçãoTeste,
};
console.log(ObjetoQualquer.função(1));
