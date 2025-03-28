# Notas de aulas - Algoritmos - 2025/1 - TIII - UTFPR/CM

## 21/03/2025 - Sexta-feira
Apresentação da disciplina

Dinâmica: o robô segue os comandos.

Linguagem: a importância da terminologia 

Byte - Sistema computacional

## 24/03/2025 - Segunda

### recapitulação das aulas anteriores

1. Problema
2. Algoritmo (para resolver o problema)
3. Código fonte é o algoritmo escrito em uma linguagem de programação (humanos entendem)
4. Programa (ou app) é o código fonte compilado (traduzido) para uma linguagem que o computador entende e executa.

Formalização de conceitos sobre algoritmos: entrada, processamento, saída. Características: estado inicial, limite de resolução, condição e repetição.

Exercício/Exemplo
https://github.com/rjhalmeman/algoritmos/tree/main/1bimestre/2025-03-24%20-%20SomarDoisNumeros


## 28/03/2025 - Sexta
Aulas em sala teórica: G101
`Estruturas sequenciais. `

Estruturação de raciocínio lógico.
    - Entrada
    - Processamento
    - Saída


Leitura de algoritmos e teste de mesa.


### Desenhe a fruta conforme a descrição abaixo

Uma fruta de formato redondo ou ligeiramente achatado. Sua casca é lisa e pode ter diferentes cores, como vermelho, verde ou amarelo. Quando você segura, ela tem uma textura firme, mas suave ao toque. Ao pressioná-la levemente, você sente que ela é um pouco dura, mas tem uma leve elasticidade.

O cheiro é doce e refrescante, e quando você a morde, sente um gosto doce ou levemente ácido, dependendo da variedade. O interior é crocante e suculento, com pequenas sementes no centro, que ficam dentro de um pequeno núcleo, geralmente de cor marrom.

Tem um peso que é fácil de segurar com uma mão, e ao mordê-la, o som da crocância é nítido. O sabor é uma mistura de frescor e doçura, com uma leve acidez que pode ser refrescante.

### Desenhe a interface gráfica (tela), conforme a descrição abaixo:

``` HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo 02</title>
</head>
<body>

    <h1>Calculadora de Troco</h1>
    <label for="valorCompra">Valor da Compra: R$ </label>
    <input type="number" id="valorCompra" >
    <br><br>
    <label for="valorPago">Valor Pago: R$ </label>
    <input type="number" id="valorPago">
    <br><br>
    <input type="button" value="Calcular" onclick="calcular()">
    <br><br>
    <label for="resultado">Troco</label>
    <p id="resultado"></p>

    <script>
        function calcular() {
            let valorCompra = parseFloat(document.getElementById("valorCompra").value);
            let valorPago = parseFloat(document.getElementById("valorPago").value);

            let troco = valorPago - valorCompra;

            document.getElementById("resultado").innerHTML = troco.toFixed(2);
        }
    </script>

</body>
</html>
```


## 31/03/2025 - Segunda
Leitura de algoritmos - Exercícios

## 04/04/2025
Formalização de passos para a resolução de problemas. Estruturas sequenciais. 
Teste de mesa.

## 07/04/2025
Variáveis. Tipos de dados. Ambiente de desenvolvimento
Exercícios com expressões aritméticas, atribuição e saída simples.

## 11/04/2025
Condicionais

## 14/04/2025
Variáveis - exercícios

## 25/04/2025
Funções

## 28/04/2025
Exercícios com funções

## 05/05/2025
Exercícios com funções

## 09/05/2025
# Avaliação 1º bimestre



