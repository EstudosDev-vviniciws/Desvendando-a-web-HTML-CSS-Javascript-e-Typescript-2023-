class Escola {
    public readonly nome: string;   //Readonly: Quando é usado a variável não será mais modificada.
    private readonly alunos: Aluno[];
    
    constructor(nome: string) {
        this.nome = nome;
        this.alunos = [];
    }

    public adicionarAluno(aluno: Aluno) {
        this.alunos.push(aluno);
    }
}

class Aluno {
    constructor(public readonly nome: string) {}
}

const escola = new Escola("NOVA ESCOLA");
//const aluno1 = new Aluno("Mendes");
//const aluno2 = new Aluno("Luigi");
//const aluno3 = new Aluno("Alice");

escola.adicionarAluno(new Aluno("Mendes"));
escola.adicionarAluno(new Aluno("Luigi"));
escola.adicionarAluno(new Aluno("Alice"));

console.log("escola", escola);