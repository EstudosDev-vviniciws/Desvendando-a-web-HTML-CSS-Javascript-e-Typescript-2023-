const funçãoCallback = (valor:number): void => {
    console.log("DEU BOM" + valor);
};

const funçãoTeste2 = (
valor1: number, 
valor2: number, 
callback: (n: number) => void
): string => {
    if (valor1 > valor2) {
        callback(valor1);
    }
    return "";
};

funçãoTeste2(217, 19, funçãoCallback);
funçãoTeste2(27, 24, (x: number) => {
    console.log("outra função" + x);
});