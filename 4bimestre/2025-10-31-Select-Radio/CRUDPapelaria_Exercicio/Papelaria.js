class Papelaria {
    constructor(id, nome, categoria, quantidadeEstoque, precoUnitario, posicaoNaLista) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidadeEstoque = quantidadeEstoque;
        this.precoUnitario = precoUnitario;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
