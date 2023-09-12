const fatorial = (valor) => {
if (valor === 0 || valor === 1 ){
    return 1;
}
    return valor * fatorial(valor - 1);
    // 5 * Fatorial 4
    // 4 * Fatorial 3
    // 3 * Fatorial 2
    // 2 * Fatorial 1 -> 1
    // 1
}


console.log(fatorial(5));

/* Fução recursiva : Uma função que invoca
 ela mesma e que pode ser quebrada em uma única função . */