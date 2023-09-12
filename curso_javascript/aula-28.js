
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

 // const pessoa = {
 //   Vini: {
 //       idade: 19,
 //   },
 //   Luigi: {
 //      idade: 18,
 //   },
 //   Mendes: {
 //       idade: 20,
 //   }
 //  }

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

 const pessoasArray = lista.reduce((acc, objeto) => {
     acc.push(objeto.idade);
     return acc;
 }, []);

 
 console.log(pessoas);
 console.log(pessoas.Mendes.idade);
 console.log(pessoasArray);
    

// acc : Seria o acumulador de informações.

/* .reduce: Vai converter o seu array pra um objeto específico , ele 
pode ser convertido tanto pra um array quanto pra um objeto .  */