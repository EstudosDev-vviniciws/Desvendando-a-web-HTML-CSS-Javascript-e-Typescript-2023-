const qualquer = {
    meio: 'primo',
    l:'LilMendes',
    van:'Jinjer',
    cabecinha:'jtp',
}

const novoQualquer = {
    ...qualquer,
    //meio: qualquer.meio,
    // l: qualquer.l,
    //van: qualquer.van,
    //cabecinha: qualquer.cabecinha,
    final: 'FINAL'
}

const lista = [54, 45 , 34 , 234 , 325 ,432];
const lista2 = [18 , 19 , 39 , 56 , 79 ,112];

//console.log(qualquer);
//console.log(novoQualquer);

//console.log(lista);
//console.log(lista2);


const listaJunta = [
    ...lista, ...lista2
]

console.log(listaJunta);






/*Spread:Permite expandir objetos iteráveis em elementos individuais ou 
copiar propriedades de um objeto para outro.*/