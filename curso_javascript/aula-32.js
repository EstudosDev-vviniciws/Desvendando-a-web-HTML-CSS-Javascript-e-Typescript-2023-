const lista = [
    {
        nome: 'Vini',
        idade: 19,
        cartões: ['2345', '9753']
    },
    {
        nome: 'Mendes',
        idade: 20,
        cartões: ['4445', '2145']
    },
    {
        nome: 'Luigi',
        idade: 18,
        cartões: ['3345', '2345']
    },   
    {
        nome: 'Humberto',
        idade: 43,
        cartões: ['0865', '2398']
    },
    {
        nome: 'Erick',
        idade: 17,
        cartões: ['2563', '1364']
    },
    {
        nome: 'ViniRed',
        idade: 23,
        cartões: ['2976', '0643']
    },
    {
        nome: 'Luan',
        idade: 21,
        cartões: ['8503', '0863']
    },
    
    
    
    
    
    
    ]


const cartões = lista.flatMap((cartão) => cartão.cartões);

console.log(cartões);



/*.flatMap:Serve pra ele conseguir pegar um array dentro de 
outro array e transformar ele em um array único.*/