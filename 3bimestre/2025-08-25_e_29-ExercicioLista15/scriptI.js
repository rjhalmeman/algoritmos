function botaoProcure() {
    let achou = false;
    let posI = 0;
    let posJ =0;
    let elemento = document.getElementById("inputQualElemento").value;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (elemento == matriz[i][j]) {
                achou = true;
                posI = i;
                posJ = j;
            }
        }
    }

    if (achou) {
        document.getElementById("spanElemento").innerHTML 
          = "Achou o "+elemento+" na posição ["+posI+"]["+posJ+"]";
    } else {
        document.getElementById("spanElemento").innerHTML 
              = "<h1>Não achou</h1>";
    }



}