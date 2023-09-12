const mensagem = 'stop BLOWING my mind';
const mensagem2 = 'fallen na furia';

// mensagem.length:Possibilita ver o tamanho da mensagem
console.log('tamanho', mensagem.length);

/*.substring:A partir do número escolhido em () , irá começar a contar 
os caracteres*/
console.log(mensagem.substring(5));

//Diferentes tipos para juntar mensagens :
console.log('Concat', mensagem.concat(mensagem2));
console.log('Concat +', "falenn" + " " + mensagem + " " + mensagem2);
console.log('ES:', 'fallenn ${mensagem} ${mensagem}');

/*.split:Possibilita quebrar alguma determinada  parte da mensagem
ou até mesmo algumas partes , se não tiver nada dentro da string
por exemplo ('')*/
console.log('Quebrar em array ' , mensagem.split(' '))

//.toUpperCase : Passar pra maiúsculo
console.log('UP:', mensagem.toUpperCase());
//.toLowerCase : Passar pra  minuscúlo
console.log('DOWN:', mensagem.toLowerCase());
//.replace : Substituir alguma parte específica
console.log('Replace: ', mensagem.replace('stop BLOWING my mind', 'FallenBemOuFallenMal'));