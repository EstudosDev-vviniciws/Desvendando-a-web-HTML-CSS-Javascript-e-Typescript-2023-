const idadeluigi = 18;
const idadeMendes = 20;
const idadePrimo = 19;

const idades = [18, 23, 149 ,18, 250, 179 ,158, 2230, 19213]; /*Sempre começe a contar de 0 até número
desejado*/

console.log('O resultado é:', idades[2]);


//Como saber quantos objetos existem em um array :


console.log('O resultado é:', idades.length);


//ultilizando For:

for(let i = 0; i < idades.length; i++) {
    console.log('resultado', idades[i]);
}


/*
i = 0, ou seja a variavel i = 0,
enquanto i for menor que idades.length / idades.length = quantidade de itens dentro do array ,
([18,20,19,18,20,19,18,20,19,18])
enquanto i for menor que 10 ele executara o código. */
