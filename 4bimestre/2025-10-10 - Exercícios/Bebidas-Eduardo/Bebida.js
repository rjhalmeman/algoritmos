class Bebida {
    constructor(id, nome, fabricante, precoEtiqueta, ehAlcolico, posicaoNaLista) {
        this.id = id;
        this.nome = nome;
        this.fabricante = fabricante;
        this.precoEtiqueta = precoEtiqueta;
        this.ehAlcolico = ehAlcolico;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
