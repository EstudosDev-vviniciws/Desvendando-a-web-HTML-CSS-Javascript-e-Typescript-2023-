interface Andar {
    passos: number | null;
}

const andar: Andar = {
    passos: null,
};

const funcaoTest = (): undefined | number => {
    if (andar.passos && andar.passos > 5) {
        return 324; 
    }
    return undefined;

}

const outoNome = funcaoTest();

if (!andar.passos) {
    console.log("é nulo");
}

if(outoNome) {
   outoNome?.toFixed();
}

console.log("andar", andar);