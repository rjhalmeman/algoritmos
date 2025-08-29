function separarParesImpares(){
    let vetorPares = [];
    let vetorImpares = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j]%2==0) {
                vetorPares.push(matriz[i][j]);
            } else {
                vetorImpares.push(matriz[i][j]);
            }            
        }
    }
    document.getElementById("spanHPares").innerHTML = vetorPares;
    document.getElementById("spanHImpares").innerHTML = vetorImpares;
    

}