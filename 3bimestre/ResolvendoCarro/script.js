
let conjuntoCarros = [];
dadosIniciais();

function dadosIniciais(){
    let carro = new Carro("abcd1234","fusca","volkswagen", 1975);
    conjuntoCarros.push(carro); 
    carro = new Carro("xyzk4345","palio","fiat", 2005);
    conjuntoCarros.push(carro);
    carro = new Carro("ddds2322","dolphin","BYD", 2025);
    conjuntoCarros.push(carro);
    carro = new Carro("gtre1245","camaro","ford", 2020);
    conjuntoCarros.push(carro);   
}
function adicionarCarro() {
    let elementoPlaca = document.getElementById("inputPlaca");
    let placa = elementoPlaca.value;
    let elementoModelo = document.getElementById("inputModelo");
    let modelo = elementoModelo.value;
    let elementoMarca = document.getElementById("inputMarca");
    let marca = elementoMarca.value;
    let elementoAno = document.getElementById("inputAno");
    let ano = parseInt(elementoAno.value);

    // Agora passando a placa também
    let carro = new Carro(placa, modelo, marca, ano);
    conjuntoCarros.push(carro);

    // limpa os inputs
    elementoPlaca.value = "";
    elementoModelo.value = "";
    elementoMarca.value = "";
    elementoAno.value = "";
    elementoPlaca.focus();
}

function listarCarros() {
    let resposta = "";
    for (let i = 0; i < conjuntoCarros.length; i++) {
        let carro = conjuntoCarros[i];
        resposta += carro.placa + " - " + carro.modelo
            + " - " + carro.marca + " - " + carro.ano + "<br>";
    }
    document.getElementById("listaDeCarros").innerHTML = resposta;
}

function listaPorMarca() {

    let marcaProcurada = document.getElementById("inputMarcaProcurada").value;


    let resposta = "";
    for (let i = 0; i < conjuntoCarros.length; i++) {
        let carro = conjuntoCarros[i];
        if (carro.marca == marcaProcurada) {
            resposta += carro.placa + " - " + carro.modelo
                + " - " + carro.marca + " - " + carro.ano + "<br>";
        }
    }
    document.getElementById("listaDeCarros").innerHTML = resposta;
}
