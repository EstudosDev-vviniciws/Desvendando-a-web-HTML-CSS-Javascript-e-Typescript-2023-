
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

 

 const funçãoReduce =(acc, objeto) => {
     // const objeto = {
     //   Vini : {
     //       idade: 19
     //    }
     //  }
      return {
        ...acc,
        [objeto.nome]: {
            idade:objeto.idade
        }
      }
 }
 
 const pessoas = lista.reduce(funçãoReduce, {});

 const chaves = Object.keys(pessoas);

 const listaDeVolta = chaves.map((chave) => ({
    nome: chave,
    idade: pessoas[chave].idade
}))
 
// console.log(pessoas);
 
// console.log(chaves);

// console.log(Object.keys(lista[0]))

console.log(listaDeVolta);

// .keys: Serve para converter um objeto em um array de keys.