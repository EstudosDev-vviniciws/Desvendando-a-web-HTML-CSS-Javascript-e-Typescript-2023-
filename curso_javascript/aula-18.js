const idade = 19;

const exibirIdade = () => {
    const idade = 20;
    console.log(idade);
    }

    const exibirExibirIdade = () => {
        exibirIdade();
        console.log(idade);    
    }

exibirExibirIdade();

/* O escopo sempre irá processar o que pertence a ele , se não 
tiver nada , ele irá processar o que está acima dele e se por acaso
não encontrar nada ele irá provocar um erro e sinalizar que aquela
 variável não existe .*/