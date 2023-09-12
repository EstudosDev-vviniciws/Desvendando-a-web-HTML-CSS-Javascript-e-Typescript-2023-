
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
   const filtrarPessoa = (pessoa) => pessoa.idade > 30;  // pessoa.nome === 'Vini';
   const listaFiltrada = lista.filter(filtrarPessoa);
    
    console.log(lista);

    console.log(listaFiltrada);

    /*.filter : Podemos buscar alguma informação específica , como por exemplo 
     nome , idade dentre outras informações. */