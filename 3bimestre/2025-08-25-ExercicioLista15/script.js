
let matriz = [];
let linhas = 0;
let colunas = 0;
let linha = 0;
let coluna = 0;
let posAtual = 0;

function iniciarMatriz() {
    linhas = parseInt(document.getElementById("inputLinhas").value);
    colunas = parseInt(document.getElementById("inputColunas").value);

    matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(0); // Inicializa com zero
        }
        matriz.push(linha);
    }

    posAtual = 0;
    // Habilita os campos
    document.getElementById("inputNumero").disabled = false;
    document.getElementById("btnAdicionar").disabled = false;

    atualizarSaida();
    document.getElementById("inputNumero").focus();
}

function adicionarNumero() {
    if (posAtual >= linhas * colunas) {
        alert("A matriz já está completa.");
        return;
    }

    let input = document.getElementById("inputNumero");
    let valor = parseFloat(input.value);

    matriz[linha][coluna] = valor;

    if (coluna < colunas - 1) {
        coluna++;
    } else {
        coluna = 0;
        linha++;
    }
    posAtual++;

    atualizarSaida();

    input.value = "";
    input.focus();

    if (posAtual >= linhas * colunas) {
        input.disabled = true;
        document.getElementById("btnAdicionar").disabled = true;
    }
}

function atualizarSaida() {
    let texto = "";
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            let valor = matriz[i][j];
            if (valor === "") {
                texto += "_";
            } else {
                texto += valor;
            }
            texto += " ";
        }
        texto += "\n";
    }
    document.getElementById("saidaMatriz").innerText = texto;
}


function somarTodos(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function somarTodosOsElementos() {
    let resultado = somarTodos(matriz);
    document.getElementById("spanSomaTodos").innerHTML = resultado;
}

function somarColuna(coluna, matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][coluna];
    }
    return soma;
}

function botaoSomarColuna() {
    let coluna = parseInt(document.getElementById("inputNumeroDaColuna").value);
    let resultado = somarColuna(coluna, matriz);
    document.getElementById("spanSomaColuna").innerHTML = resultado;
}

//calcular a média aritmética simples de uma linha informada pelo usuário

function botaoMediaLinha() {
    let linha = parseInt(document.getElementById("inputNumeroDaLinha").value);
    let resultado = calculeAMediaDaLinha(linha, matriz);
    document.getElementById("spanMediaLinha").innerHTML = resultado;
}

function calculeAMediaDaLinha(linha, matriz) {
    let soma = 0;
    for (let i = 0; i < matriz[0].length; i++) {
        soma += matriz[linha][i];
    }
    let media = soma / matriz[0].length;
    return media;
}


function botaoSepararPares() {
    let vetor = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            if (matriz[i][j] % 2 == 0) {
                vetor.push(matriz[i][j]);
            }
        }
    }
    document.getElementById("spanPares").innerHTML = vetor;
}

function ehPrimo(num){
    let cont = 0;
    for (let i = 1; i <= num ; i++) {
      if (num%i==0) {
        cont++;
      }          
    }
    if (cont==2) {
        return true;
    }else {
        return false;
    }
}

function botaoContarPrimos() {
    let cont = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) { 
            if (ehPrimo(matriz[i][j])) {
                cont++;
            }
        }
    }
    document.getElementById("spanContagemDePrimos").innerHTML = cont;
}

