// Array para armazenar os produtos
let produtos = [];

// Função para adicionar produto
function adicionarProduto() {
    const nome = document.getElementById('inputNome').value;
    const quantidade = parseInt(document.getElementById('inputQuantidade').value);
    const preco = parseFloat(document.getElementById('inputPreco').value);

    // Validação básica
    if (nome && quantidade > 0 && preco > 0) {
        const novoProduto = new Produto(nome, quantidade, preco);
        produtos.push(novoProduto);

        // Limpar os campos
        document.getElementById('inputNome').value = '';
        document.getElementById('inputQuantidade').value = '';
        document.getElementById('inputPreco').value = '';

        alert('Produto adicionado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos corretamente!');
    }
}

// Função para listar todos os produtos
function listarProdutos() {
    const listaElement = document.getElementById('listaDeProdutos');

    if (produtos.length === 0) {
        listaElement.innerHTML = 'Nenhum produto cadastrado.';
        return;
    }

    let listaHTML = "";

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let total = produto.quantidade * produto.preco_unitario;

        listaHTML = listaHTML + '<p>' + produto.nome_produto + ' - ' +
            produto.quantidade + ' un. x R$ ' +
            produto.preco_unitario.toFixed(2) + ' = R$ ' +
            total.toFixed(2) + '</p>';
    }


    listaElement.innerHTML = listaHTML;
}

