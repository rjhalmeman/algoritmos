function somarTodos(){
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            soma+=matriz[i][j];            
        }        
    }
    document.getElementById("outputSomarTodos").innerHTML = soma;
}