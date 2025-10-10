class Celular {
    constructor(numeroMac, modelo, fabricante, preco, posicaoNaLista) {
        this.numeroMac = numeroMac;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.preco = preco;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
