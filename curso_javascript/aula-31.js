const lista = [
    {
        nome: 'Vini',
        idade: 19
    },
    {
        nome: 'Mendes',
        idade: 20
    },
    {
        nome: 'Luigi',
        idade: 18
    },   
    {
        nome: 'Humberto',
        idade: 43
    },
    {
        nome: 'Erick',
        idade: 17
    },
    {
        nome: 'ViniRed',
        idade: 23
    },
    {
        nome: 'Luan',
        idade: 21
    },
    
    
    
    
    
    
    ]

const resultadoSome = lista.some((objeto) => objeto.idade > 40);
const resultadoEvery = lista.every((objeto) => objeto.idade >= 10);

console.log('resultadoSome:', resultadoSome)
console.log('resultadoEvery:', resultadoEvery)




/*.some: Executa a função callback uma vez para cada elemento do array 
até encontrar aquele retorne true. Então o método
 .some() retorna true imediatamente e não avalia os elementos restantes.
Se nenhum elemento retornar true, o método some() 
vai retornar false. */

/*.every:Já é ao contrário pois é necessário que todos retornem verdadeiro ,
caso algum elemento não retorne verdadeiro o resultado será false.*/