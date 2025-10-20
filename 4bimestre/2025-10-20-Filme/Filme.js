class Filme {
    constructor(id, titulo, diretor, dataLancamento, avaliacao, posicaoNaLista) {
        this.id = id;
        this.titulo = titulo;
        this.diretor = diretor;
        this.dataLancamento = dataLancamento;
        this.avaliacao = avaliacao;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
