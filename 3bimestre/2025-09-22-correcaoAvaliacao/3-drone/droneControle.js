let conjuntoDrones = [];
dadosIniciais();

function dadosIniciais() {
    let drone = new Drone("D001", "DJI Mavic 3", 45, 15000);
    conjuntoDrones.push(drone);
    drone = new Drone("D002", "Parrot Anafi", 25, 4000);
    conjuntoDrones.push(drone);
    drone = new Drone("D003", "Autel Evo II", 40, 9000);
    conjuntoDrones.push(drone);
    drone = new Drone("D004", "Skydio 2+", 27, 6000);
    conjuntoDrones.push(drone);
}

function adicionarDrone() {
    let elementoId = document.getElementById("inputId");
    let id = elementoId.value;
    let elementoModelo = document.getElementById("inputModelo");
    let modelo = elementoModelo.value;
    let elementoAutonomia = document.getElementById("inputAutonomia");
    let autonomia = parseInt(elementoAutonomia.value);
    let elementoAlcance = document.getElementById("inputAlcance");
    let alcance = parseInt(elementoAlcance.value);

    let drone = new Drone(id, modelo, autonomia, alcance);
    conjuntoDrones.push(drone);

    // limpa os inputs
    elementoId.value = "";
    elementoModelo.value = "";
    elementoAutonomia.value = "";
    elementoAlcance.value = "";
    elementoId.focus();
}

function printar(vetor) {
    let resposta = "";
    for (let i = 0; i < vetor.length; i++) {
        let drone = vetor[i];
        resposta += drone.id + " - " + drone.modelo
            + " - " + drone.autonomiaBateria + " min"
            + " - " + drone.alcanceMaximo + " m<br>";
    }
    return resposta;
}

function listarTodos() {
    document.getElementById("listaDeDrones").innerHTML = printar(conjuntoDrones);
}

function listarPorId() {
    let idProdurado = document.getElementById("inputIdProcurado").value;

    let resposta = "";
    for (let i = 0; i < conjuntoDrones.length; i++) {
        let drone = conjuntoDrones[i];
        if (drone.id === idProdurado) {
            resposta += drone.id + " - " + drone.modelo
                + " - " + drone.autonomiaBateria + " min"
                + " - " + drone.alcanceMaximo + " m<br>";
            break; // sai do laço após encontrar o primeiro 
        }
    }
    document.getElementById("listaDeDrones").innerHTML = resposta;
}



function listarPorAlcance() {
    let alcanceMinimo = parseInt(document.getElementById("inputAlcanceMinimo").value);
    let alcanceMaximo = parseInt(document.getElementById("inputAlcanceMaximo").value);

    let resposta = "";
    for (let i = 0; i < conjuntoDrones.length; i++) {
        let drone = conjuntoDrones[i];
        if (drone.alcanceMaximo >= alcanceMinimo && drone.alcanceMaximo <= alcanceMaximo) {
            resposta += drone.id + " - " + drone.modelo
                + " - " + drone.autonomiaBateria + " min"
                + " - " + drone.alcanceMaximo + " m<br>";
        }
    }
    document.getElementById("listaDeDrones").innerHTML = resposta;
}

function listarPorAlcanceFiltro() {
    let alcanceMinimo = parseInt(document.getElementById("inputAlcanceMinimo").value);
    let alcanceMaximo = parseInt(document.getElementById("inputAlcanceMaximo").value);
    let resposta = "";
    let filtro = conjuntoDrones.filter(p => p.alcanceMaximo >= alcanceMinimo && p.alcanceMaximo <= alcanceMaximo);

    resposta = printar(filtro);

    document.getElementById("listaDeDrones").innerHTML = resposta;
}
