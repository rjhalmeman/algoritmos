// Array para armazenar os produtos
let produtos = [];
acrescentarDados();

function acrescentarDados() {
    let novoProduto = new Produto('arroz', 3, 17);
    produtos.push(novoProduto);

    novoProduto = new Produto('feijao', 2, 8);
    produtos.push(novoProduto);

    novoProduto = new Produto('farinha', 5, 19);
    produtos.push(novoProduto);

}


// Função para adicionar produto
function adicionarProduto() {
    const nome = document.getElementById('inputNome').value;
    const quantidade = parseInt(document.getElementById('inputQuantidade').value);
    const preco = parseFloat(document.getElementById('inputPreco').value);

    // Validação básica
    if (nome && quantidade > 0 && preco > 0) {
        const novoProduto = new Produto(nome, quantidade, preco);
        if (estaNaLista(nome)) {
            alert("Já está na lista");
        } else {
            produtos.push(novoProduto);
        }

        // Limpar os campos
        document.getElementById('inputNome').value = '';
        document.getElementById('inputQuantidade').value = '';
        document.getElementById('inputPreco').value = '';
        listarProdutos();
    } else {
        alert('Por favor, preencha todos os campos corretamente!');
    }
}
function estaNaLista(novoProduto) {
    debugger;
    for (let i = 0; i < produtos.length; i++) {
        let p = produtos[i];
        if (p.nome_produto == novoProduto) {
            return true;
        }
    }
    return false;
}

// Função para listar todos os produtos
function listarProdutos() {
    const listaElement = document.getElementById('listaDeProdutos');
    if (produtos.length === 0) {
        listaElement.innerHTML = 'Nenhum produto cadastrado.';
        return;
    }
    let listaHTML = "";
    let soma = 0;
    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let subtotal = produto.quantidade * produto.preco_unitario;
        soma += subtotal;

        listaHTML = listaHTML + '<p>' + produto.nome_produto + ' - ' +
            produto.quantidade + ' un. x R$ ' +
            produto.preco_unitario.toFixed(2) + ' = R$ ' +
            subtotal.toFixed(2) + '</p>';
    }


    listaElement.innerHTML = listaHTML;
    document.getElementById("valorTotalEstoque").innerHTML = soma.toFixed(2);
}

function procurePorNomeNaLista(nomeProcurado) {
    for (let i = 0; i < produtos.length; i++) {
        let p = produtos[i];
        if (p.nome_produto == nomeProcurado) {
            return p; //retorna todos os dados daquele produto
        }
    }
    return null;// não achou, retorna nenhum dado
}

function buscarPorNome() {
    let nome = document.getElementById("inputNomeProcurado").value;
    let resp = procurePorNomeNaLista(nome);
    if (resp) { // se não está null
        document.getElementById("nomeNaLista").innerHTML
            = "Achou =>" + resp.nome_produto + " quantidade = " + resp.quantidade;
    } else {
        document.getElementById("nomeNaLista").innerHTML = "Não achou o nome na lista";
    }
}

function maiorGasto(){
    let p = produtos[0];
    let oMaior = p.quantidade * p.preco_unitario;
    let posicao = 0;

    for (let i = 1; i < produtos.length; i++) {
        p = produtos[i];
        let subTotal = p.quantidade*p.preco_unitario;
        if ( subTotal>oMaior) {
            oMaior = subTotal;
            posicao = i;
        }        
    }
    document.getElementById("oMaiorGasto").innerHTML = 
        produtos[posicao].nome_produto+" - R$"+ oMaior.toFixed(2);
}

