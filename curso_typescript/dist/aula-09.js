"use strict";
const andar = {
    passos: null,
};
const funcaoTest = () => {
    if (andar.passos && andar.passos > 5) {
        return 324;
    }
    return undefined;
};
const outoNome = funcaoTest();
if (!andar.passos) {
    console.log("é nulo");
}
if (outoNome) {
    outoNome === null || outoNome === void 0 ? void 0 : outoNome.toFixed();
}
console.log("andar", andar);
