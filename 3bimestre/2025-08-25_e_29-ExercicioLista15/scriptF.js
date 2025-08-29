function funcaoProcurarOMaior() {
    let maioral = matriz[0][0];
    let l = 0;
    let c = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            if (maioral < matriz[i][j]) {
                maioral = matriz[i][j];
                l = i;
                c = j;
            }
        }
    }
    document.getElementById("spanMaioral").innerHTML = "O maior é "
        + maioral + "na posição " + l + "," + c;
}