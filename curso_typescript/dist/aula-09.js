"use strict";
const andar = {
    passos: null,
};
/* Null:É utilizado quando se quer intencionalmente dizer que há uma ausência
de qualquer valor de objeto para aquela variável. */
const funcaoTest = () => {
    if (andar.passos && andar.passos > 5) {
        return 324;
    }
    return undefined; // Undefined:É utilizado quando uma variável não possui um valor. 
};
const outoNome = funcaoTest();
if (!andar.passos) {
    console.log("é nulo");
}
if (outoNome) {
    outoNome === null || outoNome === void 0 ? void 0 : outoNome.toFixed();
}
console.log("andar", andar);
