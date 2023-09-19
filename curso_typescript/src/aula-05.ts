interface Estado {
    nome: string;
}

interface Cidade {
    nome: string;
    estado: Estado;
}

interface Endereço {
    rua: string;
    bairro: string;
    cidade: Cidade;
    complemento?: string;
}

const endereço: Endereço = {
    bairro: "Joaquim",
    rua: "Perola",
    cidade: {
        nome: "BH",
        estado: {
            nome: "MG",
        },
    },
};

console.log(endereço.complemento?.substring(3) || "DEU ERRO");

console.log(endereço);