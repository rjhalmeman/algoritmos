let listaPapelaria = []; //conjunto de dados
let oQueEstaFazendo = ''; //variável global de controle
let papelaria = null; //variavel global 
bloquearAtributos(true);
//backend (não interage com o html)
function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaPapelaria.length; i++) {
        const papelaria = listaPapelaria[i];
        if (papelaria.id == chave) {
            papelaria.posicaoNaLista = i;
            return listaPapelaria[i];
        }
    }
    return null;//não achou
}

// Função para procurar um elemento pela chave primária   -------------------------------------------------------------
function procure() {
    const id = document.getElementById("inputId").value;
    if (isNaN(id) || !Number.isInteger(Number(id))) {
        mostrarAviso("Precisa ser um número inteiro");
        document.getElementById("inputId").focus();
        return;
    }

    if (id) { // se digitou um Id
        papelaria = procurePorChavePrimaria(id);
        if (papelaria) { //achou na lista
            mostrarDadosPapelaria(papelaria);
            visibilidadeDosBotoes('inline', 'none', 'inline', 'inline', 'none'); // Habilita botões de alterar e excluir
            mostrarAviso("Achou na lista, pode alterar ou excluir");
        } else { //não achou na lista
            limparAtributos();
            visibilidadeDosBotoes('inline', 'inline', 'none', 'none', 'none');
            mostrarAviso("Não achou na lista, pode inserir");
        }
    } else {
        document.getElementById("inputId").focus();
        return;
    }
}

//backend->frontend
function inserir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); //visibilidadeDosBotoes(procure,inserir,alterar,excluir,salvar)
    oQueEstaFazendo = 'inserindo';
    mostrarAviso("INSERINDO - Digite os atributos e clic o botão salvar");
    document.getElementById("inputId").focus();

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

    let id;
    if (papelaria == null) {
        id = parseInt(document.getElementById("inputId").value);
    } else {
        id = papelaria.id;
    }

    const nome = document.getElementById("inputNome").value;
    const categoria = document.getElementById("inputCategoria").value;
    const quantidadeEstoque = parseInt(document.getElementById("inputQuantidadeEstoque").value);
    const precoUnitario = parseFloat(document.getElementById("inputPrecoUnitario").value);
    //verificar se o que foi digitado pelo USUÁRIO está correto
    if (id && nome && categoria && quantidadeEstoque && precoUnitario) {// se tudo certo 
        switch (oQueEstaFazendo) {
            case 'inserindo':
                papelaria = new Papelaria(id, nome, categoria, quantidadeEstoque, precoUnitario);
                listaPapelaria.push(papelaria);
                mostrarAviso("Inserido na lista");
                break;
            case 'alterando':
                papelariaAlterado = new Papelaria(id, nome, categoria, quantidadeEstoque, precoUnitario);
                listaPapelaria[papelaria.posicaoNaLista] = papelariaAlterado;
                mostrarAviso("Alterado");
                break;
            case 'excluindo':
                let novaLista = [];
                for (let i = 0; i < listaPapelaria.length; i++) {
                    if (papelaria.posicaoNaLista != i) {
                        novaLista.push(listaPapelaria[i]);
                    }
                }
                listaPapelaria = novaLista;
                mostrarAviso("EXCLUIDO");
                break;
            default:
                // console.error('Ação não reconhecida: ' + oQueEstaFazendo);
                mostrarAviso("Erro aleatório");
        }
        visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
        limparAtributos();
        listar();
        document.getElementById("inputId").focus();
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
            linha.id + " - " +
            linha.nome + " - " +
            linha.categoria + " - " +
            linha.quantidadeEstoque + " - " +
            linha.precoUnitario + "<br>";
    }
    return texto;
}

//backend->frontend (interage com html)
function listar() {
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaPapelaria);
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

// Função para mostrar os dados do Papelaria nos campos
function mostrarDadosPapelaria(papelaria) {
    document.getElementById("inputId").value = papelaria.id;
    document.getElementById("inputNome").value = papelaria.nome;
    document.getElementById("inputCategoria").value = papelaria.categoria;
    document.getElementById("inputQuantidadeEstoque").value = papelaria.quantidadeEstoque;
    document.getElementById("inputPrecoUnitario").value = papelaria.precoUnitario;

    // Define os campos como readonly
    bloquearAtributos(true);
}

// Função para limpar os dados dos campos
function limparAtributos() {
    document.getElementById("inputNome").value = "";
    document.getElementById("inputCategoria").value = "";
    document.getElementById("inputQuantidadeEstoque").value = "";
    document.getElementById("inputPrecoUnitario").value = "";

    bloquearAtributos(true);
}

function bloquearAtributos(soLeitura) {
    //quando a chave primaria possibilita edicao, tranca (readonly) os outros e vice-versa
    document.getElementById("inputId").readOnly = !soLeitura;
    document.getElementById("inputNome").readOnly = soLeitura;
    document.getElementById("inputCategoria").readOnly = soLeitura;
    document.getElementById("inputQuantidadeEstoque").readOnly = soLeitura;
    document.getElementById("inputPrecoUnitario").readOnly = soLeitura;
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
    document.getElementById("inputId").focus();
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
    let nomeDoArquivoDestino = "./Papelaria.csv";  //define o nome do arquivo csv
    let textoCSV = "";
    for (let i = 0; i < listaPapelaria.length; i++) {
        const linha = listaPapelaria[i]; //variavel linha contem as informações de cada papelaria
        textoCSV += linha.id + ";" +
            linha.nome + ";" +
            linha.categoria + ";" +
            linha.quantidadeEstoque + ";" +
            linha.precoUnitario
    }
    persistirEmLocalPermanente(nomeDoArquivoDestino, textoCSV);
}


// Função para processar o arquivo CSV e transferir os dados para a listaPapelaria
function converterDeCSVparaListaObjeto(arquivo) {
    const leitor = new FileReader();  //objeto que permite ler arquivos locais no navegador 
    leitor.onload = function (e) {
        const conteudo = e.target.result; // Conteúdo do arquivo CSV
        const linhas = conteudo.split('\n'); // Separa o conteúdo por linha
        listaPapelaria = []; // Limpa a lista atual (se necessário)
        for (let i = 0; i < linhas.length; i++) {
            const linha = linhas[i].trim();  //linhas[i] representa cada linha do arquivo CSV
            if (linha) { //verifica se a linha não está vazia
                const dados = linha.split(';'); // Separa os dados por ';'
                if (dados.length === 5) { //verifica os seis campos
                    // Adiciona os dados à listaPapelaria como um objeto
                    listaPapelaria.push({
                        id: dados[0],
                        nome: dados[1],
                        categoria: dados[2],
                        quantidadeEstoque: dados[3],
                        precoUnitario: dados[4]
                    });
                }
            }
        }
        listar(); //exibe a lista atualizada
    };
    leitor.readAsText(arquivo); // Lê o arquivo como texto
}

function filtrarPorCategoria() {
    const categoriaFiltro = document.getElementById("selectCategorias").value;
    if (categoriaFiltro) {

        if (categoriaFiltro=="todas") {
            document.getElementById("outputSaida").innerHTML =
             preparaListagem(listaPapelaria);
            return;
        }

        //  const listaFiltrada = listaPapelaria.filter(papelaria => papelaria.categoria === categoriaFiltro);
        let listaFiltrada = [];
        for (let i = 0; i < listaPapelaria.length; i++) {
            const linha = listaPapelaria[i];
            if (linha.categoria == categoriaFiltro) {
                listaFiltrada.push(linha);
            }

        }
        document.getElementById("outputSaida").innerHTML = 
        preparaListagem(listaFiltrada);
    } else {
        listar(); // Se o filtro estiver vazio, mostra toda a lista
        mostrarAviso("Mostrando todos os itens (sem filtro)");
    }
}
