const Primo = {
    idade: 19,
    peso: 80,
    nome: 'Vinicius',
    genero: 'masculino',
    nacionalidade: 'Brasileiro',
    endereço: 'Rua do Vicimm',
    numero: 332,
    pais:'Brasil',
    TemFilhos: false,
}

const exibirInformacoes = (pessoa) => {
     console.log('Peso do(a) Primo:', pessoa.peso);
     console.log('Idade do(a) Primo:', pessoa.idade);
     console.log('pais do(a) ${pessoa.nome}:', pessoa.pais);
     console.log('endereço do(a) ${pessoa.nome}:', pessoa.endereço);
}

exibirInformacoes(Primo) 

/* Obejeto simples: Seria uma forma de passar diversas informações
 de um objeto de uma vez só, sem ter que passar uma informação de cada vez . */
