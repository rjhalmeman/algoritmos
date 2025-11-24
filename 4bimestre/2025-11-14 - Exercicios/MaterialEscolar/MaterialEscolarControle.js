let listaMaterialEscolar = []; //conjunto de dados
let oQueEstaFazendo = ''; //variável global de controle
let materialEscolar = null; //variavel global 
bloquearAtributos(true);
//backend (não interage com o html)
function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaMaterialEscolar.length; i++) {
        const materialEscolar = listaMaterialEscolar[i];
        if (materialEscolar.id_material == chave) {
            materialEscolar.posicaoNaLista = i;
            return listaMaterialEscolar[i];
        }
    }
    return null;//não achou
}

function verData(){
    let aux = document.getElementById("inputData_de_validade").value;
    alert(aux);
}

// Função para procurar um elemento pela chave primária   -------------------------------------------------------------
function procure() {
    const id_material = document.getElementById("inputId_material").value;
    if (isNaN(id_material) || !Number.isInteger(Number(id_material))) {
        mostrarAviso("Precisa ser um número inteiro");
        document.getElementById("inputId_material").focus();
        return;
    }

    if (id_material) { // se digitou um Id_material
        materialEscolar = procurePorChavePrimaria(id_material);
        if (materialEscolar) { //achou na lista
            mostrarDadosMaterialEscolar(materialEscolar);
            visibilidadeDosBotoes('inline', 'none', 'inline', 'inline', 'none'); // Habilita botões de alterar e excluir
            mostrarAviso("Achou na lista, pode alterar ou excluir");
        } else { //não achou na lista
            limparAtributos();
            visibilidadeDosBotoes('inline', 'inline', 'none', 'none', 'none');
            mostrarAviso("Não achou na lista, pode inserir");
        }
    } else {
        document.getElementById("inputId_material").focus();
        return;
    }
}

//backend->frontend
function inserir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); //visibilidadeDosBotoes(procure,inserir,alterar,excluir,salvar)
    oQueEstaFazendo = 'inserindo';
    mostrarAviso("INSERINDO - Digite os atributos e clic o botão salvar");
    document.getElementById("inputId_material").focus();

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

    let id_material;
    if (materialEscolar == null) {
        id_material = parseInt(document.getElementById("inputId_material").value);
    } else {
        id_material = materialEscolar.id_material;
    }

    const nome_material = document.getElementById("inputNome_material").value;
    const data_de_validade = document.getElementById("inputData_de_validade").value;
    const quantidade_estoque = parseInt(document.getElementById("inputQuantidade_estoque").value);
    const preco_unitario = parseFloat(document.getElementById("inputPreco_unitario").value);
    const categoria = document.getElementById("inputCategoria").value;
    //verificar se o que foi digitado pelo USUÁRIO está correto
    if (id_material && nome_material && data_de_validade && quantidade_estoque && preco_unitario && categoria) {// se tudo certo 
        switch (oQueEstaFazendo) {
            case 'inserindo':
                materialEscolar = new MaterialEscolar(id_material, nome_material, data_de_validade, quantidade_estoque, preco_unitario, categoria);
                listaMaterialEscolar.push(materialEscolar);
                mostrarAviso("Inserido na lista");
                break;
            case 'alterando':
                materialEscolarAlterado = new MaterialEscolar(id_material, nome_material, data_de_validade, quantidade_estoque, preco_unitario, categoria);
                listaMaterialEscolar[materialEscolar.posicaoNaLista] = materialEscolarAlterado;
                mostrarAviso("Alterado");
                break;
            case 'excluindo':
                let novaLista = [];
                for (let i = 0; i < listaMaterialEscolar.length; i++) {
                    if (materialEscolar.posicaoNaLista != i) {
                        novaLista.push(listaMaterialEscolar[i]);
                    }
                }
                listaMaterialEscolar = novaLista;
                mostrarAviso("EXCLUIDO");
                break;
            default:
                // console.error('Ação não reconhecida: ' + oQueEstaFazendo);
                mostrarAviso("Erro aleatório");
        }
        visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
        limparAtributos();
        listar();
        document.getElementById("inputId_material").focus();
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
            linha.id_material + " - " +
            linha.nome_material + " - " +
            linha.data_de_validade + " - " +
            linha.quantidade_estoque + " - " +
            linha.preco_unitario + " - " +
            linha.categoria + "<br>";
    }
    return texto;
}

//backend->frontend (interage com html)
function listar() {
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaMaterialEscolar);
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

// Função para mostrar os dados do MaterialEscolar nos campos
function mostrarDadosMaterialEscolar(materialEscolar) {
    document.getElementById("inputId_material").value = materialEscolar.id_material;
    document.getElementById("inputNome_material").value = materialEscolar.nome_material;
    document.getElementById("inputData_de_validade").value = materialEscolar.data_de_validade;
    document.getElementById("inputQuantidade_estoque").value = materialEscolar.quantidade_estoque;
    document.getElementById("inputPreco_unitario").value = materialEscolar.preco_unitario;
    document.getElementById("inputCategoria").value = materialEscolar.categoria;

    // Define os campos como readonly
    bloquearAtributos(true);
}

// Função para limpar os dados dos campos
function limparAtributos() {
    document.getElementById("inputNome_material").value = "";
    document.getElementById("inputData_de_validade").value = "";
    document.getElementById("inputQuantidade_estoque").value = "";
    document.getElementById("inputPreco_unitario").value = "";
    document.getElementById("inputCategoria").value = "";

    bloquearAtributos(true);
}

function bloquearAtributos(soLeitura) {
    //quando a chave primaria possibilita edicao, tranca (readonly) os outros e vice-versa
    document.getElementById("inputId_material").readOnly = !soLeitura;
    document.getElementById("inputNome_material").readOnly = soLeitura;
    document.getElementById("inputData_de_validade").readOnly = soLeitura;
    document.getElementById("inputQuantidade_estoque").readOnly = soLeitura;
    document.getElementById("inputPreco_unitario").readOnly = soLeitura;
    document.getElementById("inputCategoria").readOnly = soLeitura;
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
    document.getElementById("inputId_material").focus();
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
    let nomeDoArquivoDestino = "./MaterialEscolar.csv";  //define o nome do arquivo csv
    let textoCSV = "";
    for (let i = 0; i < listaMaterialEscolar.length; i++) {
        const linha = listaMaterialEscolar[i]; //variavel linha contem as informações de cada materialEscolar
        textoCSV += linha.id_material + ";" +
            linha.nome_material + ";" +
            linha.data_de_validade + ";" +
            linha.quantidade_estoque + ";" +
            linha.preco_unitario + ";" +
            linha.categoria + "\n";
    }
    persistirEmLocalPermanente(nomeDoArquivoDestino, textoCSV);
}


// Função para processar o arquivo CSV e transferir os dados para a listaMaterialEscolar
function converterDeCSVparaListaObjeto(arquivo) {
    const leitor = new FileReader();  //objeto que permite ler arquivos locais no navegador 
    leitor.onload = function (e) {
        const conteudo = e.target.result; // Conteúdo do arquivo CSV
        const linhas = conteudo.split('\n'); // Separa o conteúdo por linha
        listaMaterialEscolar = []; // Limpa a lista atual (se necessário)
        for (let i = 0; i < linhas.length; i++) {
            const linha = linhas[i].trim();  //linhas[i] representa cada linha do arquivo CSV
            if (linha) { //verifica se a linha não está vazia
                const dados = linha.split(';'); // Separa os dados por ';'
                if (dados.length === 6) { //verifica os seis campos
                    // Adiciona os dados à listaMaterialEscolar como um objeto
                    listaMaterialEscolar.push({
                        id_material: dados[0],
                        nome_material: dados[1],
                        data_de_validade: dados[2],
                        quantidade_estoque: dados[3],
                        preco_unitario: dados[4],
                        categoria: dados[5]
                    });
                }
            }
        }
        listar(); //exibe a lista atualizada
    };
    leitor.readAsText(arquivo); // Lê o arquivo como texto
}

