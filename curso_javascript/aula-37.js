// Object.defineProperty
// Object.defineProperties

const propriedadePadrão = (valorInicial) => ({
    value: valorInicial,
    writable: false, // se estiver true => usuario.nome = 'novo nome '
    configurable: false, // se estiver true => posso deletar o nome
    enumerable: true, // se estiver true => ele será exibido no objeto
})

class Usuário {
  

    constructor(email, senha, nome) {

       
        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: (value) => nome = value
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if (value.length < 4) {
                        throw new TypeError('Precisa de pelo menos 4 letras')
                    }
                    senha = value
                }
            },
            email: {
                get: () => email,
                set: (value) => email = value
            }
    })
}
    getEmail() {
        return this.email
    }

}


const usuario = new Usuário('emails', 'senhas', 'nomes');
usuario.senha = 'furianotopo';

console.log(usuario.senha);

//Você pode definir como pública ou privada .

/*Get:É usado apenas para exibir/retornar valor, nunca pra alterar. */

/*Set:É usado quando você quer alterar o valor/conteúdo de um atributo.*/ 