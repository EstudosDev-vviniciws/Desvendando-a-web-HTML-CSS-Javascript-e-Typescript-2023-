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
            nome: propriedadePadrão(nome),
            senha: propriedadePadrão(senha),
            email: propriedadePadrão(email),
             
     
        //Object.defineProperty(this, 'nome', {
         //   value: nome,
         //   writable: false, // se estiver true => usuario.nome = 'novo nome '
         //   configurable: false, // se estiver true => posso deletar o nome
         //   enumerable: true, // se estiver true => ele será exibido no objeto
        //})
    })
}
}


const usuario = new Usuário('emails', 'senhas', 'nomes');

console.log(usuario);




/*Object.defineProperty:Define uma nova propriedade ou modifica uma
 existente no objeto, retornando o objeto. */


 /*Objectdefine.Properties:Define todas as propriedades correspondentes 
 para as propriedades próprias enumeráveis de props sobre o objeto. */