class Usuário {
    email;
    senha;
    nome;

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}


class Administrador extends Usuário {
     permissoes;
    
     constructor(email, senha, nome, permissoes) {
        super(email, senha, nome);
        this.permissoes = permissoes;
    }
}


class Comprador extends Usuário {
     compras;
}


const admin = new Administrador('primo@gmail.com', 'batatinha123', 'Primoo' ,[4, 0]);

console.log(admin);