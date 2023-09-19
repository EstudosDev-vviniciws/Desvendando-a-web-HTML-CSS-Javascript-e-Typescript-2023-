interface ObjetoQualquer {
    função: (param1:number, param2?:number) => number;
}

const funçãoTeste = (param1:number, param2?:number):number => {
    if (!param2) {
      return param1;
    }

    return param1 + param2;
};

const ObjetoQualquer: ObjetoQualquer = {
    função: funçãoTeste,
};

console.log(ObjetoQualquer.função(1));