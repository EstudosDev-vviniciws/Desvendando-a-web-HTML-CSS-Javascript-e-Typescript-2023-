const idade = 8;
const nome = `Julio`;
let podeEntrar = false

if(idade >= 18 && nome === `Julio`) {
    podeEntrar = true;
    console.log(`entraaa`)
} else {
    console.log(`nao entraaa`)
}

// console.log(`usuario pode entrar`,podeEntrar)


/* Explicações DevMendes

if (If é utilizado quando queremos que um bloco de comandos seja executado se uma condição 
    específica for verdadeira.)

>= (Maior/Igual que)

else (else significa algo mais ou algum outro, Ela é utilizada em conjunto com if
quando vamos apresentar o bloco de comando que deve ser executado se a condição original 
do if não for verdadeira.)

 = Quando utilizado com valores booleanos,  retorna verdadeiro caso um dos operandos sejam 
 verdadeiro; se ambos forem falsos, retorna falso.

&& = && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.
/


/
Diferença de =

Igual (==)
Estritamente igual (===)
Não igual (!=)
*/