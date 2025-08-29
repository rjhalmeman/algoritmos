function botaoProcureEConte() {
    let cont = 0;
    let posI = 0;
    let posJ = 0;
    let resp = "";
    let elemento = document.getElementById("inputQualElementoContar").value;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (elemento == matriz[i][j]) {
                achou = true;
                posI = i;
                posJ = j;
                resp += "[" + i + "][" + j + "] <br>";
                cont++;
            }
        }
    }

    if (cont > 0) {
        document.getElementById("spanQuantosElementos").innerHTML
            = "Achou " + cont + " elementos nas posições <br>" + resp;
    } else {
        document.getElementById("spanQuantosElementos").innerHTML
            = "<h1>Não achou</h1>";
    }



}