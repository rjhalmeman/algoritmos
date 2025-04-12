# Algoritmos

## Definição Formal de Algoritmo
Um algoritmo é um conjunto finito de instruções bem definidas, ordenadas e não ambíguas que, quando seguidas, resolvem um problema ou realizam uma tarefa específica, em um tempo finito.

**Os algoritmos possuem:**
    - entrada de dados
    - processamento
    - saída


## 1. Algoritmos sequenciais
São instruções executadas na ordem em que aparecem no código. É a base de todo algoritmo.



**Programa exemplo que solicita dois números, efetua a soma e mostra o resultado**

<div style="border: 1px solid #000; display: inline-block; padding: 4px;">
  <img src="./1bimestre/imagens/somarDoisNumeros.png" alt="alt text" />
</div>


## Código fonte para resolver o problema da soma de dois números

```html
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

Para executar esse código fonte você pode copiar e colar em uma plataforma de execução/teste de códigos como 
https://www.w3schools.com/Html/tryit.asp?filename=tryhtml_default

cole o código do lado esquerdo, clic no botão [RUN] e o programa será executado e mostrado do lado direito da tela.

No entanto, para estudantes de programação é melhor instalar o VSCode e a extensão Live Server. É uma solução mais completa e adequada.

https://code.visualstudio.com/

(no youtube há vários tutoriais de como instalar)

---

## 2. Variáveis 
 
Variáveis são espaços (locais) na memória (normalmente memória RAM) que são usados para armazenar valores. Em JavaScript, elas podem conter diferentes tipos de dados como números, textos, booleanos, listas e objetos.



**Exemplo:**
```html
<script>
  let idade = 25;               // guarda o número 25 em um local da memória RAM chamado idade
  let nome = "Ana";             // guarda o nome "Ana" em um local da memória RAM chamado nome  
  let ativo = true;             // boolean
  let lista = [10, 20, 30];     // array
  let pessoa = {nome: "Leo", idade: 30}; // objeto
</script>
```

## 3. Constantes

Constantes são espaços (locais) na memória (normalmente memória RAM) que são usados para armazenar valores. Em JavaScript, elas podem conter diferentes tipos de dados como números, textos, booleanos, listas e objetos. **Após ter sido feita a atribuição do valor este não pode mais ser modificado torna-se uma CONSTANTE.**


```html
   <script>
     const pi = 3.14;    // guarda o valor em um local, depois de atribuído o valor não muda mais.
     const velocidadeDoSom = 343; //343 metros por segundo no ar
   </script>
```

---
## 4. Tipos de Variáveis

Considerando que uma variável é um local onde algo será guardado, temos que considerar o tipo do que será guardado.

**Tipos comuns:**
- `string` → textos
- `number` → números
- `boolean` → verdadeiro ou falso
- `array` → listas
- `object` → estruturas com chave e valor

```html
<script>
  let idade = 25;               // number
  let nome = "Ana";             // string
  const pi = 3.14;              // constante
  let ativo = true;             // boolean
  let lista = [10, 20, 30];     // array
  let pessoa = {nome: "Leo", idade: 30}; // objeto
</script>
```

## 5. Funções

São blocos de código que executam tarefas específicas. Podem receber parâmetros e retornar resultados.

**Exemplo:**
```html
<script>
  function somar(a,b) {
    return a+b;
  }
  let s = somar(3,5);
  console.log("resultado da soma = "+s);
</script>
```

**Um programa usando funções**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Programa soma usando função </title>
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
        function somar(a, b) {
            return a + b;
        }

        function funcaoResponsavelPeloCalculo() {
            let x = parseFloat(document.getElementById("inputN1").value);
            let y = parseFloat(document.getElementById("inputN2").value);
            let s = somar(x, y); // atribui os valores de x e y para os parâmetros a e b, faz a conta e devolve o resultado
            document.getElementById("resposta").innerHTML = s;
        }
    </script>

</body>

</html>
```

---

## 6. Condicionais

**Permitem tomar decisões, executando diferentes blocos de código com base em condições lógicas.**

Operadores

| Operador | Significado                 | Exemplo           | Resultado (a = 10, b = 5) |
|----------|-----------------------------|--------------------|----------------------------|
| `==`     | Igual (valor)               | `a == 10`          | `true`                     |
| `!=`     | Diferente (valor)           | `a != b`           | `true`                     |
| `===`    | Igual (valor e tipo)        | `a === "10"`       | `false`                    |
| `!==`    | Diferente (valor ou tipo)   | `a !== "10"`       | `true`                     |
| `>`      | Maior que                   | `a > b`            | `true`                     |
| `<`      | Menor que                   | `a < b`            | `false`                    |
| `>=`     | Maior ou igual              | `a >= 10`          | `true`                     |
| `<=`     | Menor ou igual              | `a <= 5`           | `false`                    |
| `&&`     | E lógico (AND)              | `a > 5 && b < 10`  | `true`                     |
| `\|\|`     | Ou lógico (OR)              | `a < 5 \|\| b < 10`  | `true`                 |
| `!`      | Negação                     | `!(a > b)`         | `false`                    |





**Exemplos**
```html
//verifica se o aluno está aprovado ou reprovado conforme o valor da média.

let media = 7;
if (media>=6){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
```

O programa completo para determinar a situação do aluno conforme a média
```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <title>Situação do aluno</title>
</head>
<!-- Lê a média de um aluno, calcula e mostra a situação (aprovado ou reprovado) -->
<body>

  <label for="inputMedia">Informe sua média:</label>
  <input type="number" id="inputMedia" placeholder="Digite sua média final">
  <input type="button" value="Verifique" onclick="verificarSituacao()">
  <br><br>
  <h1 id="resultado"></h1>

  <script>
    function verificarSituacao() {
      const media = parseInt(document.getElementById("inputMedia").value);
      const resultado = document.getElementById("resultado");

      if (media < 6) {
        resultado.innerHTML = "Deu ruim, reprovado..."
      } else {
        resultado.textContent = "Aprovado";
      }
    }
  </script>

</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <title>Verificar Maioridade</title>
</head>
<!-- Lê a idade de uma pessoa e se for maior de idade mostra o que ela pode fazer -->
<body>

  <h2>Maioridade:</h2>
  <label for="idadeInput">Idade</label>
  <input type="number" id="idadeInput" placeholder="Digite sua idade">
  <input type="button" value="Verifique" onclick="verificarIdade()">
  <br><br>
  <span id="resultado"></span>

  <script>
    function verificarIdade() {
      let idade = parseInt(document.getElementById("idadeInput").value);
      let resultado = document.getElementById("resultado");

      if (idade >= 18) {
        resultado.innerHTML = "A maioridade civil no Brasil é aos 18 anos completos, de acordo com o Código Civil. " +
          "<br><br> A partir dessa idade, a pessoa pode exercer todos os atos " +
          "<br>da vida civil sem precisar de representação legal." +
          "<h3> Implicações da maioridade civil </h3>" +
          "<br>Pode tirar a carteira de habilitação" + "<br>Pode fazer compra e venda de imóveis." +
          "<br>Pode abrir uma empresa. " +
          "<br>Pode casar. " +
          "<br>Pode ser responsabilizada civilmente por ilícitos civis. " +
          "<br>Pode responder por suas próprias dívidas. " +
          "<br>É obrigada a votar nas eleições";
      } else {
        resultado.textContent = "Você é menor de idade.";
      }
    }
  </script>

</body>

</html>
```

---

# Daqui para frente é matéria dos próximos bimestres

## 7. Repetição
**O que é:**  
Permite executar um bloco de código várias vezes. Usamos `for`, `while`, entre outros.

**Exemplo:**
```html
<script>
  for (let i = 1; i <= 5; i++) {
    console.log("Contador: " + i);
  }
</script>
```

---

## 8. Conjuntos (Vetores e Matrizes)
**O que é:**  
São estruturas que armazenam vários valores. Vetores são listas simples; matrizes são tabelas com linhas e colunas.

**Exemplo - Vetor:**
```html
<script>
  let frutas = ["maçã", "banana", "laranja"];
  console.log(frutas[1]); // banana
</script>
```

**Exemplo - Matriz:**
```html
<script>
  let matriz = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  console.log(matriz[1][0]); // 4
</script>
```
