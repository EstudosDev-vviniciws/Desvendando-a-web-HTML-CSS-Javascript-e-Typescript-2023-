interface Pessoa {
    idade: number;
    nome: string;
    isMaiorIdade: boolean;
}


const pessoa: Pessoa = {
    idade: 19,
    nome:"Primo",
    isMaiorIdade:true,
};

console.log(pessoa);