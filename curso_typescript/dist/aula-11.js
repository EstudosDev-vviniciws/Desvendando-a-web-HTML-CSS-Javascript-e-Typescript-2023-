"use strict";
class Escola {
    constructor(nome) {
        this.nome = nome;
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
}
class Aluno {
    constructor(nome) {
        this.nome = nome;
    }
}
const escola = new Escola("NOVA ESCOLA");
//const aluno1 = new Aluno("Mendes");
//const aluno2 = new Aluno("Luigi");
//const aluno3 = new Aluno("Alice");
escola.adicionarAluno(new Aluno("Mendes"));
escola.adicionarAluno(new Aluno("Luigi"));
escola.adicionarAluno(new Aluno("Alice"));
console.log("escola", escola);
