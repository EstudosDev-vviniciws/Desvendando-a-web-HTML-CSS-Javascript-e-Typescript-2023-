function calcular(){
    console.log('calcular')

}

const calcular2 = function(){
    console.log('calcular2');
return 32555;
}

const calcular3 = (função) => {
    console.log('calcular3')
    return função();
}
  

    console.log('resultado:', calcular3(calcular2));


// A função ela recebe os parâmetros e ela pode exucutar outras funções la dentro .