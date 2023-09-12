
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

    //for(let i = 0; i < lista.length; i++ ) {
     //   console.log(lista[i])
    //}
               
let soma = 0;
const somaIdade = (objeto) => {
   soma += objeto.idade
 }

 lista.forEach(somaIdade);
 
 console.log('Soma: ', soma)


 // .forEach: Seria uma substituição do for , de uma maneira mais simples.