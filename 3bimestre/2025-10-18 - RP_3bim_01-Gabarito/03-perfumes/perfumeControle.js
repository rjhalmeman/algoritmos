// perfumeControle.js

let perfumes = []; // Array para armazenar os perfumes
adicionarDados(); // Adiciona alguns dados iniciais para teste
function adicionarDados() {
    perfumes.push(new Perfume('1', 'Chanel N°5', 299.90, 'Chanel'));
    perfumes.push(new Perfume('2', 'Dior Sauvage', 350.00, 'Dior'));
    perfumes.push(new Perfume('3', 'Acqua di Gio', 280.00, 'Armani'));
    perfumes.push(new Perfume('4', 'J\'adore', 320.00, 'Dior'));
    perfumes.push(new Perfume('5', 'Light Blue', 150.00, 'Dolce & Gabbana'));
}
function inserir() {
    const id = document.getElementById('inputId').value;
    const nome = document.getElementById('inputNome').value;
    const preco = parseFloat(document.getElementById('inputPreco').value);
    const fabricante = document.getElementById('inputFabricante').value;
    const novoPerfume = new Perfume(id, nome, preco, fabricante);
    perfumes.push(novoPerfume);
    document.getElementById('inputId').value = '';
    document.getElementById('inputNome').value = '';
    document.getElementById('inputPreco').value = '';
    document.getElementById('inputFabricante').value = '';
}
function listarTodos() {
    const output = document.getElementById('outputSaida');
    if (perfumes.length === 0) {
        output.innerHTML = 'Nenhum perfume cadastrado.';
        return;
    }
    output.innerHTML = printar(perfumes);
}

function printar(vetor) {
    let resposta = "";
    for (let i = 0; i < vetor.length; i++) {
        let perfume = vetor[i];
        resposta += perfume.id + " - " + perfume.nome + " - R$ " + perfume.preco.toFixed(2) + " - " + perfume.fabricante + "<br>";
    }
    return resposta;
}

//3a) Função que seleciona perfumes por fabricante
function selecionePorFabricante(fabricante) {
    let perfumesFabricante = [];
    for (let i = 0; i < perfumes.length; i++) {
        if (perfumes[i].fabricante.toLowerCase() === fabricante.toLowerCase()) {
            perfumesFabricante.push(perfumes[i]);
        }
    }
    if (perfumesFabricante.length === 0) {
        return `Nenhum perfume encontrado para o fabricante: ${fabricante}`;
    }
    return `<h3>Perfumes do fabricante ${fabricante}:</h3>` + printar(perfumesFabricante);
}

function listarPorFabricante() {
    debugger;
    const fabricante = document.getElementById('inputBuscaFabricante').value;
    document.getElementById('outputSaida').innerHTML = selecionePorFabricante(fabricante);
}

// 3b) Função que lista os perfumes com uma faixa de preço
function listarPorFaixa(precoMin, precoMax) {
    let perfumesNaFaixa = [];
    for (let i = 0; i < perfumes.length; i++) {
        if (perfumes[i].preco >= precoMin && perfumes[i].preco <= precoMax) {
            perfumesNaFaixa.push(perfumes[i]);
        }
    }
    if (perfumesNaFaixa.length === 0) {
        return "Nenhum perfume encontrado na faixa de preço R$ " + precoMin.toFixed(2) + " - R$ " + precoMax.toFixed(2);
    }
    return "<h3>Perfumes na faixa de preço R$ " + precoMin.toFixed(2) + " - R$ " + precoMax.toFixed(2) + ":</h3>" + printar(perfumesNaFaixa);
}

function listarPorFaixaPreco(precoMin, precoMax) {
    const min = parseFloat(document.getElementById('inputPrecoMin').value);
    const max = parseFloat(document.getElementById('inputPrecoMax').value);
    document.getElementById('outputSaida').innerHTML = listarPorFaixa(min, max);
}


// 3c) Função que procura um perfume por id
function buscarPorId() {
    const id = document.getElementById('inputBuscaId').value;
    document.getElementById('outputSaida').innerHTML = procurePorId(id);
}

function procurePorId() {
    const id = document.getElementById('inputBuscaId').value;
    for (let i = 0; i < perfumes.length; i++) {
        if (perfumes[i].id === id) {
            const perfume = perfumes[i];
            return "Perfume encontrado: " + perfume.id + " - " + perfume.nome + " - R$ " + perfume.preco.toFixed(2) + " - " + perfume.fabricante;
        }
    }
    return "Nenhum perfume encontrado com o ID: " + id;
}


// 3d Função que lista todos os perfumes com 10% de desconto
function listarComDesconto() {
    let resultado = "<h3>Perfumes com 10% de desconto:</h3>";
    for (let i = 0; i < perfumes.length; i++) {
        const perfume = perfumes[i];
        const precoOriginal = perfume.preco;
        const precoComDesconto = precoOriginal * 0.9;
        
        resultado += "ID: " + perfume.id + " - " + perfume.nome + 
                    " - Fabricante: " + perfume.fabricante + 
                    " - Preço original: R$ " + precoOriginal.toFixed(2) + 
                    " - Preço com desconto: R$ " + precoComDesconto.toFixed(2) + "<br>";
    }
    return resultado;
}

function exibirPerfumesComDesconto() {
    document.getElementById('outputSaida').innerHTML = listarComDesconto();
}


