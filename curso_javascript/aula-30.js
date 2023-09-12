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


    lista.sort((a, b) => {
        if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
            return -1;
        }
        if (a.nome.toUpperCase() > b.nome.toUpperCase()) {
            return 1;
        }
        return 0;
    });

    console.log(lista)



//.sort:Serve para ordenar um array , a partir de informações de um objeto.

//.sort:Ele não devolve um array novo , e sim mapeia o que ele ja tem.