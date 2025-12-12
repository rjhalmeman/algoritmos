class Professor {
    constructor(id_prof, nome, disciplina, tempo_experiencia, titulacao, aposentado, data_contratacao, posicaoNaLista) {
        this.id_prof = id_prof;
        this.nome = nome;
        this.disciplina = disciplina;
        this.tempo_experiencia = tempo_experiencia;
        this.titulacao = titulacao;
        this.aposentado = aposentado;
        this.data_contratacao = data_contratacao;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
