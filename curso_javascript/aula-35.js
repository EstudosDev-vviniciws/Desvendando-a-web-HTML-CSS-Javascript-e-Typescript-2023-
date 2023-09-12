class Usuário {
    email;
    senha;
    nome;

    ValidarSenha(email, senha) {
        return email + senha === this.nome;
       
    }

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}


class Administrador extends Usuário {
     permissoes;
     
     ValidarSenha(email, senha) {
        return email === this.email && senha === this.senha;
    }

    
     constructor(email, senha, nome, permissoes) {
        super(email, senha, nome);
        this.permissoes = permissoes;
    }
}


class Comprador extends Usuário {
     compras;
}


const admin = new Administrador('primo@gmail.com', 'batatinha123', 'Primoo' ,[4, 0]);
const usuario = new Usuário('pxbedo@gmail.com', 'bk124', 'Erick');

console.log(usuario.ValidarSenha('vini167@gmail.com', 'slyline345'));
console.log(admin.ValidarSenha('primo@gmail.com', 'batatinha123'));



/* Polimorfismo:São classes derivadas de uma única classe base que são capazes
 de invocar os métodos que, embora apresentem a mesma assinatura, comportam-se
  de maneira diferente para cada uma das classes derivadas. */

  /* O Polimorfismo seria como se fosse um animal , ele acaba tendo a mesma função de algum
   outro determinado animal mas na hora de emitir o som é totalmente diferente.*/