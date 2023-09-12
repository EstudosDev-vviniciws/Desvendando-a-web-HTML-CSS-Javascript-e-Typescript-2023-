
class Pessoa {
    nome;
    idade;
    filhos;

    quantosFilhos() {
        if (this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }

    constructor(nome, idade , filhos) {
          this.nome = nome;
          this.idade = idade;
          this.filhos = filhos;
    }
}

const filho1 = new Pessoa('Renatinho', 4);
const filho2 = new Pessoa('Renatinha', 8);
const filho3 = new Pessoa('Carlinhos', 10);
console.log('filho1 tem:', filho1.quantosFilhos());

const pessoa = new Pessoa('Vini', 30, [filho1 , filho2, filho3]);


console.log('Quantos filhos?', pessoa.quantosFilhos());
console.log(pessoa);
