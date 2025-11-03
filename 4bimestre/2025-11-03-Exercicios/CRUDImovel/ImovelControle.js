let listaImovel = []; //conjunto de dados
let oQueEstaFazendo = ''; //variável global de controle
let imovel = null; //variavel global 
bloquearAtributos(true);
//backend (não interage com o html)
function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaImovel.length; i++) {
        const imovel = listaImovel[i];
        if (imovel.numMatricula == chave) {
            imovel.posicaoNaLista = i;
            return listaImovel[i];
        }
    }
    return null;//não achou
}

// Função para procurar um elemento pela chave primária   -------------------------------------------------------------
function procure() {
    const numMatricula = document.getElementById("inputNumMatricula").value;
    if (isNaN(numMatricula) || !Number.isInteger(Number(numMatricula))) {
        mostrarAviso("Precisa ser um número inteiro");
        document.getElementById("inputNumMatricula").focus();
        return;
    }

    if (numMatricula) { // se digitou um NumMatricula
        imovel = procurePorChavePrimaria(numMatricula);
        if (imovel) { //achou na lista
            mostrarDadosImovel(imovel);
            visibilidadeDosBotoes('inline', 'none', 'inline', 'inline', 'none'); // Habilita botões de alterar e excluir
            mostrarAviso("Achou na lista, pode alterar ou excluir");
        } else { //não achou na lista
            limparAtributos();
            visibilidadeDosBotoes('inline', 'inline', 'none', 'none', 'none');
            mostrarAviso("Não achou na lista, pode inserir");
        }
    } else {
        document.getElementById("inputNumMatricula").focus();
        return;
    }
}

//backend->frontend
function inserir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); //visibilidadeDosBotoes(procure,inserir,alterar,excluir,salvar)
    oQueEstaFazendo = 'inserindo';
    mostrarAviso("INSERINDO - Digite os atributos e clic o botão salvar");
    document.getElementById("inputNumMatricula").focus();

}

// Função para alterar um elemento da lista
function alterar() {

    // Remove o readonly dos campos
    bloquearAtributos(false);

    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');

    oQueEstaFazendo = 'alterando';
    mostrarAviso("ALTERANDO - Digite os atributos e clic o botão salvar");
}

// Função para excluir um elemento da lista
function excluir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); //visibilidadeDosBotoes(procure,inserir,alterar,excluir,salvar)

    oQueEstaFazendo = 'excluindo';
    mostrarAviso("EXCLUINDO - clic o botão salvar para confirmar a exclusão");
}

function salvar() {
    //gerencia operações inserir, alterar e excluir na lista

    // obter os dados a partir do html

    let numMatricula;
    if (imovel == null) {
        numMatricula = parseInt(document.getElementById("inputNumMatricula").value);
    } else {
        numMatricula = imovel.numMatricula;
    }

    const endereco = document.getElementById("inputEndereco").value;
    const bairro = document.getElementById("inputBairro").value;
    const tipo = document.getElementById("inputTipo").value;
    const area = parseInt(document.getElementById("inputArea").value);
    const comodos = parseInt(document.getElementById("inputComodos").value);
    const alugado = parseInt(document.getElementById("inputAlugado").value);
    const dataConclusao = document.getElementById("inputDataConclusao").value;
    //verificar se o que foi digitado pelo USUÁRIO está correto
    if (numMatricula && endereco && bairro && tipo && area && comodos && alugado && dataConclusao) {// se tudo certo 
        switch (oQueEstaFazendo) {
            case 'inserindo':
                imovel = new Imovel(numMatricula, endereco, bairro, tipo, area, comodos, alugado, dataConclusao);
                listaImovel.push(imovel);
                mostrarAviso("Inserido na lista");
                break;
            case 'alterando':
                imovelAlterado = new Imovel(numMatricula, endereco, bairro, tipo, area, comodos, alugado, dataConclusao);
                listaImovel[imovel.posicaoNaLista] = imovelAlterado;
                mostrarAviso("Alterado");
                break;
            case 'excluindo':
                let novaLista = [];
                for (let i = 0; i < listaImovel.length; i++) {
                    if (imovel.posicaoNaLista != i) {
                        novaLista.push(listaImovel[i]);
                    }
                }
                listaImovel = novaLista;
                mostrarAviso("EXCLUIDO");
                break;
            default:
                // console.error('Ação não reconhecida: ' + oQueEstaFazendo);
                mostrarAviso("Erro aleatório");
        }
        visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
        limparAtributos();
        listar();
        document.getElementById("inputNumMatricula").focus();
    } else {
        alert("Erro nos dados digitados");
        return;
    }
}

//backend
function preparaListagem(vetor) {
    let texto = "";
    for (let i = 0; i < vetor.length; i++) {
        const linha = vetor[i];
        texto +=
            linha.numMatricula + " - " +
            linha.endereco + " - " +
            linha.bairro + " - " +
            linha.tipo + " - " +
            linha.area + " - " +
            linha.comodos + " - " +
            linha.alugado + " - " +
            linha.dataConclusao + "<br>";
    }
    return texto;
}

//backend->frontend (interage com html)
function listar() {
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaImovel);
}

function cancelarOperacao() {
    limparAtributos();
    bloquearAtributos(true);
    visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
    mostrarAviso("Cancelou a operação de edição");
}

function mostrarAviso(mensagem) {
    //printa a mensagem na divAviso
    document.getElementById("divAviso").innerHTML = mensagem;
}

// Função para mostrar os dados do Imovel nos campos
function mostrarDadosImovel(imovel) {
    document.getElementById("inputNumMatricula").value = imovel.numMatricula;
    document.getElementById("inputEndereco").value = imovel.endereco;
    document.getElementById("inputBairro").value = imovel.bairro;
    document.getElementById("inputTipo").value = imovel.tipo;
    document.getElementById("inputArea").value = imovel.area;
    document.getElementById("inputComodos").value = imovel.comodos;
    document.getElementById("inputAlugado").value = imovel.alugado;
    document.getElementById("inputDataConclusao").value = imovel.dataConclusao;

    // Define os campos como readonly
    bloquearAtributos(true);
}

// Função para limpar os dados dos campos
function limparAtributos() {
    document.getElementById("inputEndereco").value = "";
    document.getElementById("inputBairro").value = "";
    document.getElementById("inputTipo").value = "";
    document.getElementById("inputArea").value = "";
    document.getElementById("inputComodos").value = "";
    document.getElementById("inputAlugado").value = "";
    document.getElementById("inputDataConclusao").value = "";

    bloquearAtributos(true);
}

function bloquearAtributos(soLeitura) {
    //quando a chave primaria possibilita edicao, tranca (readonly) os outros e vice-versa
    document.getElementById("inputNumMatricula").readOnly = !soLeitura;
    document.getElementById("inputEndereco").readOnly = soLeitura;
    document.getElementById("inputBairro").readOnly = soLeitura;
    document.getElementById("inputTipo").readOnly = soLeitura;
    document.getElementById("inputArea").readOnly = soLeitura;
    document.getElementById("inputComodos").readOnly = soLeitura;
    document.getElementById("inputAlugado").readOnly = soLeitura;
    document.getElementById("inputDataConclusao").readOnly = soLeitura;
}

// Função para deixar visível ou invisível os botões
function visibilidadeDosBotoes(btProcure, btInserir, btAlterar, btExcluir, btSalvar) {
    //  visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); 
    //none significa que o botão ficará invisível (visibilidade == none)
    //inline significa que o botão ficará visível 

    document.getElementById("btProcure").style.display = btProcure;
    document.getElementById("btInserir").style.display = btInserir;
    document.getElementById("btAlterar").style.display = btAlterar;
    document.getElementById("btExcluir").style.display = btExcluir;
    document.getElementById("btSalvar").style.display = btSalvar;
    document.getElementById("btCancelar").style.display = btSalvar; // o cancelar sempre aparece junto com o salvar
    document.getElementById("inputNumMatricula").focus();
}

function persistirEmLocalPermanente(arquivoDestino, conteudo) {
    /*cria um blob (objeto que representa dados de arquivo) que armazena "[conteudo]" como arquivo de texto,
    criando um arquivo temporário*/
    const blob = new Blob([conteudo], { type: 'text/plain' });
    //cria o elemento "a" (link temporário) usado para adicionar o dowload do arquivo
    const link = document.createElement('a'); /*cria uma URL temporária que aponta para o blob e
    atribui ela ao href do link para que ele "aponte" para o arquivo gerado (permitindo seu download)*/
    link.href = URL.createObjectURL(blob);
    link.download = arquivoDestino; // Nome do arquivo de download
    link.click(); //inicia o processo de dowload automaticamente
    // Libera o objeto URL
    URL.revokeObjectURL(link.href); //remove a URL temporária que foi criada (liberando a memória)
}


// Função para abrir o seletor de arquivos para upload (para processar o arquivo selecionado)
function abrirArquivoSalvoEmLocalPermanente() {

    const input = document.createElement('input');
    //cria o elemento input do tipo file (serve para abrir o seletor de arquivos)
    input.type = 'file';
    input.accept = '.csv'; // Aceita apenas arquivos CSV do sistema local
    input.onchange = function (event) {
        /*associa uma função de evento ao onchange, que será chamada quando o usuário selecionar um arquivo
        O evento change é disparado quando um arquivo é selecionado*/
        const arquivo = event.target.files[0]; //acessa o arquivo selecionado e armazena na variavel arquivo
        console.log(arquivo.name);
        if (arquivo) {
            converterDeCSVparaListaObjeto(arquivo);
        }
        /*verifica se um arquivo foi selecionado: 
        se sim, chama a função processarArquivo e passa o arquivo selecionado como argumento
        permitindo que o arquivo seja lido e processado na função processarArquivo*/
    };
    input.click(); //seletor de arquivos exibido automaticamente    
}

function prepararESalvarCSV() { //gera um arquivo csv com as informações da lista. Vai enviar da memória RAM para dispositivo de armazenamento permanente.
    let nomeDoArquivoDestino = "./Imovel.csv";  //define o nome do arquivo csv
    let textoCSV = "";
    for (let i = 0; i < listaImovel.length; i++) {
        const linha = listaImovel[i]; //variavel linha contem as informações de cada imovel
        textoCSV += linha.numMatricula + ";" +
            linha.endereco + ";" +
            linha.bairro + ";" +
            linha.tipo + ";" +
            linha.area + ";" +
            linha.comodos + ";" +
            linha.alugado + ";" +
            linha.dataConclusao + ";" 
          }
    persistirEmLocalPermanente(nomeDoArquivoDestino, textoCSV);
}


// Função para processar o arquivo CSV e transferir os dados para a listaImovel
function converterDeCSVparaListaObjeto(arquivo) {
    const leitor = new FileReader();  //objeto que permite ler arquivos locais no navegador 
    leitor.onload = function (e) {
        const conteudo = e.target.result; // Conteúdo do arquivo CSV
        const linhas = conteudo.split('\n'); // Separa o conteúdo por linha
        listaImovel = []; // Limpa a lista atual (se necessário)
        for (let i = 0; i < linhas.length; i++) {
            const linha = linhas[i].trim();  //linhas[i] representa cada linha do arquivo CSV
            if (linha) { //verifica se a linha não está vazia
                const dados = linha.split(';'); // Separa os dados por ';'
                if (dados.length === 8) { //verifica os seis campos
                    // Adiciona os dados à listaImovel como um objeto
                    listaImovel.push({
                        numMatricula: dados[0],
                        endereco: dados[1],
                        bairro: dados[2],
                        tipo: dados[3],
                        area: dados[4],
                        comodos: dados[5],
                        alugado: dados[6],
                        dataConclusao: dados[7]
                    });
                }
            }
        }
        listar(); //exibe a lista atualizada
    };
    leitor.readAsText(arquivo); // Lê o arquivo como texto
}

