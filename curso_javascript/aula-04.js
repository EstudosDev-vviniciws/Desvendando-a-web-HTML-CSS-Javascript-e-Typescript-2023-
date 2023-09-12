const quantidade = 10;
let soma = 1;

for(let i = 0; i < quantidade; i = i +1){
console.log(i);
soma = soma + i;
}

console.log(`acabouu`,soma);

/*
A declaração for começa declarando a variável i e inicializando-a como 0.
Ela verifica se i é menor que quantidade, executa as duas instruções subsequentes e
incrementa 1 a variável i após cada passagem pelo loop.

For necessariamente precisa de 3 coisas simples:

Variavel (Armazenamento de dados -   let i)
Validação (A variavel verificando a quantidade presente no codigo -   i < quantidade )
Finalização (Teste do comando)


Operadores aritméticos:

Incremento (++) / Adiciona um ao seu operando.
Decremento (--) / Subtrai um de seu operando.
Negação (-) / Retorna a negação de seu operando.
Adição (+) /  Tenta converter o operando em um número, sempre que possível.

OBS: CONTAGEM EM PROGRAMAÇÃO SEMPRE COMEÇA PELO 0.
*/