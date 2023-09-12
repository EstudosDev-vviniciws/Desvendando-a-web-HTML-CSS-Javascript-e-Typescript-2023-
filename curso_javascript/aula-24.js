
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

const converterObjeto = (objeto) => {
    return objeto.idade  
}
  

console.log(lista.map(converterObjeto));


/*Ou se vc quiser que apareça todas as informações , vc pode colocar { ...objeto, } ao 
inves de objeto.idade ou objeto.nome */


//.map : Usado para fazer uma conversão de um objeto pra outro objeto .