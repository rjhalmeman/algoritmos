class Imovel {
    constructor(numeroContrato, nomeProprietario, nomeInquilino, valorAluguel, prazoDoContratoEmMeses, estaAlugado, dataDeInicioDoContrato, cepImovel, enderecoImovel, bairro, cidade, posicaoNaLista) {
        this.numeroContrato = numeroContrato;
        this.nomeProprietario = nomeProprietario;
        this.nomeInquilino = nomeInquilino;
        this.valorAluguel = valorAluguel;
        this.prazoDoContratoEmMeses = prazoDoContratoEmMeses;
        this.estaAlugado = estaAlugado;
        this.dataDeInicioDoContrato = dataDeInicioDoContrato;
        this.cepImovel = cepImovel;
        this.enderecoImovel = enderecoImovel;
        this.bairro = bairro;
        this.cidade = cidade;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
