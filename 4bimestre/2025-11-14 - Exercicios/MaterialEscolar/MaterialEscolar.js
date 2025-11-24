class MaterialEscolar {
    constructor(id_material, nome_material, data_de_validade, quantidade_estoque, preco_unitario, categoria, posicaoNaLista) {
        this.id_material = id_material;
        this.nome_material = nome_material;
        this.data_de_validade = data_de_validade;
        this.quantidade_estoque = quantidade_estoque;
        this.preco_unitario = preco_unitario;
        this.categoria = categoria;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
