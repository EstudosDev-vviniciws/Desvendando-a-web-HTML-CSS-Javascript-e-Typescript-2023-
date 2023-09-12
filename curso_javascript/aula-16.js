
function calcular(valor) {
    if (valor === 0) {
        throw new Error('Não pode ser 0');
    }
    return valor / 2;
}

// Try é usado para se caso houver algum erro no "try" ele é passado pro "catch" .
try {
    const resultado = calcular(830);
    console.log('resultado:', resultado);

// Geralmete no "catch" é usado para tratar os erros .  
} catch (error){
console.log(error.message)

/* O "finally" evita que propague outros erros diferentes . 
Ou seja , fechar um erro que surgiu dentro do "try" . */
} finally {
console.log('Chegou no finally ')
}

