
class Produto {
    nome;
    preço;
    descrição;
    código;
    quantidade_em_estoque;

    alterarPreço(novoPreço) {
        if (novoPreço >= 0) {
            this.preço = novoPreço;
        } 
        
    }

    adicionarEstoque(quantidade) {
        this.quantidade_em_estoque += quantidade;
    }

    removerEstoque(quantidade) {
        const novoEstoque = this.quantidade_em_estoque - quantidade;
        if (novoEstoque >= 0) {
            this.quantidade_em_estoque = novoEstoque;
        }
        
    }

    constructor(nome, descrição , código) {
        this.nome = nome;
        this.descrição = descrição;
        this.código = código;
        this.preço = 0;
        this,this.quantidade_em_estoque = 0;
    }
}


class Smartphone extends Produto {
    marca;
    modelo;
    sistema_operacional;

    descrição() {
        return `
        nome: ${this.nome} /n
        preço: ${this.preço} /n
        descrição: ${this.descrição} /n
        Quantidade: ${this.quantidade_em_estoque} /n
        marca: ${this.marca} /n
        modelo: ${this.modelo} /n
        sistema_operacional : ${this.sistema_operacional} /n
        `
            
        
    }

    constructor(nome, descrição , código, marca , modelo , sistema_operacional) {
        super(nome, descrição, código);
        this.marca = marca;
        this.modelo = modelo;
        this.sistema_operacional = sistema_operacional;

    }
}

const smartphone1 = new Smartphone(
    'Iphone',
    'Celular Iphone 11',
    '242420=of-==39',
    'Apple',
    'Iphone 11',
    'IOS16',
);

smartphone1.alterarPreço(2200.00);
smartphone1.adicionarEstoque(10);

smartphone1.removerEstoque(11);
smartphone1.alterarPreço(-300);


console.log(smartphone1);
