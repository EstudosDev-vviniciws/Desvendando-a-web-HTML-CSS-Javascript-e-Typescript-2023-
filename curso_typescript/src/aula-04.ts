interface Pessoas {
    idade: number;
    nome: string;
}

interface Usuarios {
    pessoas: Pessoas[];
    cidade: string;
}

const usuario: Usuarios = {
    cidade: "BH",
    pessoas:[
        {
            idade: 22,
            nome: "Renatinho",
        },
        {
            idade: 26,
            nome: "Renan",
        },
        {
            idade: 19,
            nome: "Ricardo",
        },
    ],

};

console.log(usuario.pessoas.length);

console.log(usuario);