
const test1 = (callback) => {
    setTimeout(() => {
        console.log('test1'); 
    } , 200)
    
}

const test2 = (callback) => {
    setTimeout(() => {
        console.log('test2'); 
        callback()
    } , 600)
}

const test3 = (callback) => {
    setTimeout(() => {
        console.log('test3'); 
    } , 300)
 }
    

const test4 = (callback) => {
    setTimeout(() => {
        console.log('test4'); 
    } , 1)
}

const funcaoCallBack = () => {
    console.log('SALVOU O USUARIO')
}

test1();
console.log(1 + 1)
test2(funcaoCallBack);
test3();
console.log(2 + 2)
test4();

/* CallBack: É uma função passada a outra função como argumento, que é então
 invocado dentro da função externa para completar algum tipo de rotina ou ação.
 */