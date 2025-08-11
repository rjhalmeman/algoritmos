# Lista complementar

O objetivo dessa lista de exercícios é rever todos os assuntos e principais conceitos trabalhados desde o inicio do curso de algoritmos.

## Cada exercício deve ser repetido para possa ser feito tanto no papel (sem olhar nenhuma anotação) quanto no computador (funcionando). O estudante deve ser capaz de explicar todo o código. Não avance para o próximo exercício enquanto não for capaz de fazer isso.

1) Faça um programa para somar dois números. Usar HTML e Javascript. 

2) Faça um programa para subtrair dois números. Considere que o usuário pode informar quaisquer números mas que a subtração será feita sempre com o menor número sendo subtraído do maior. Por exemplo, se o usuário informar, nessa ordem, 5 e 7 a subtração a ser feita será 7-5 resultando em 2. 

3) Faça um programa que leia num número, calcule e mostre esse número elevado à sétima potência. x⁷.

4) Faça um programa que calcule a hipotenusa usando o teorema de Pitágoras.

5) Faça um programa que calcule o quanto um usuário vai pagar em um produto. Considere que o preço na etiqueta é o valor base. Se for pago à vista, terá 10% de desconto. Se for pago à prazo, terá 5% de acréscimo.

6) Faça um programa que leia N números e armazene esses números em um vetor. Calcule e mostre:
    a) a soma dos números
    b) a média dos números
    c) uma lista com cada número multiplicado por 5;
    d) uma lista com cada número dividido por outro número informado pelo usuário.


Para os códigos abaixo, faça testes de mesa


7) Considere valores abaixo para fazer os testes de mesa
   5,3
   6,9
   2,89
   -5,3

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Programa soma</title>
</head>
<body>
    <h1>Programa exemplo que soma dois números</h1>
    <!-- Programa em HTML e JavaScript para somar 2 números -->
    <label for="inputN1">X</label>
    <input type="number" name="inputN1" id="inputN1">
    <br>
    <label for="inputN2">Y</label>
    <input type="number" name="inputN2" id="inputN2">
    <br>
    <br>
    <input type="button" value="Somar" onclick="funcaoResponsavelPeloCalculo()">
    <br>
    <label for="resposta">x+y = </label>
    <span id="resposta">innerHTML</span>
    <script>
        function funcaoResponsavelPeloCalculo() {
            let x = parseFloat(document.getElementById("inputN1").value);
            let y = parseFloat(document.getElementById("inputN2").value);
            let s = x + y;
            document.getElementById("resposta").innerHTML = s;
        }
    </script>
</body>
</html>


```

8) Considerando o algoritmo que você fez para o exercício 6 item b e os valores [5,7,2,3,9,1,6] faça o teste de mesa.




