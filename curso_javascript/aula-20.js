const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}



const aguardar = async () => {
    console.log('passou 1', 2 ** 2);
    const resultado = await aguardarComRetorno();
    console.log('resultado', resultado);
    console.log('passou 1', 4 ** 4);
    console.log('passou 1', 5 ** 5);
    console.log('passou 1', 7 ** 7);
}

aguardar();

/* Asycn Await : Serve para simplificar o uso de forma síncrona das 
Promises e executar alguns procedimentos em um grupo de Promises . */