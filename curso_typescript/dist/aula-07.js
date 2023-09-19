"use strict";
const funçãoCallback = (valor) => {
    console.log("DEU BOM" + valor);
};
const funçãoTeste2 = (valor1, valor2, callback) => {
    if (valor1 > valor2) {
        callback(valor1);
    }
    return "";
};
funçãoTeste2(217, 19, funçãoCallback);
funçãoTeste2(27, 24, (x) => {
    console.log("outra função" + x);
});
