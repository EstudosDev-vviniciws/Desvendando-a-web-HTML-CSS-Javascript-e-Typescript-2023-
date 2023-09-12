
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

    const buscaPessoa = (pessoa) => pessoa.nome === 'Mendes';
    
    const novaPessoa = lista.find(buscaPessoa);
    
    //const novaPessoa = lista.find((pessoa) => pessoa.idade > 30); 
  
    console.log(novaPessoa);


    //.find : Vai buscar o primeiro item e assim ele irá trata-lo.