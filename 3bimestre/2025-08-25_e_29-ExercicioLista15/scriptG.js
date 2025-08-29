function multipliqueValores(){
    let linhaA = parseInt(document.getElementById("inputLinhaA").value);
    let colunaA = parseInt(document.getElementById("inputColunaA").value);
    let linhaB = parseInt(document.getElementById("inputLinhaB").value);
    let colunaB = parseInt(document.getElementById("inputColunaB").value);

    let mult = matriz[linhaA][colunaA]* matriz[linhaB][colunaB];

    document.getElementById("spanMultiplicacao").innerHTML = mult;
}