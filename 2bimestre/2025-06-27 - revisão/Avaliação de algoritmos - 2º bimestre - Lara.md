Avaliação de algoritmos \- 2º bimestre 

1\) Considerando o código fonte abaixo.  
1.1) Faça um teste de mesa (mostrando o passo a passo) para a frase: Essa prova de algoritmos está muito fácil.  
1.2) O que o programa faz?

| 1 | \<body\> |
| :---- | :---- |
| 2 |    \<label for="inputFrase"\>Digite uma frase: \</label\> |
| 3 |    \<input type="text" name="inputFrase" id="inputFrase"\> |
| 4 |    \<input type="button" value="Processar" onclick="doSomething()"\> |
| 5 |    \<div id="resposta"\>...\</div\> |
| 6 |    \<script\> |
| 7 |        function doSomething() { |
| 8 |            let frase \= document.getElementById("inputFrase").value; |
| 9 |            let novaFrase \= ""; |
| 10 |            for (let i \= 0; i \< frase.length; i++) { |
| 11 |                const elemento \= frase\[i\]; |
| 12 |                if (\!estaAqui(elemento)) { |
| 13 |                    novaFrase \+= elemento; |
| 14 |                } |
| 15 |            } |
| 16 |            document.getElementById("resposta").innerText \= "Fica assim: " \+ novaFrase; |
| 17 |        } |
| 18 |        function estaAqui(c) { |
| 19 |            c \= c.toLowerCase(); |
| 20 |            if (c \=== 'a' || c \=== 'á' || c \=== 'à' || c \=== 'â' || c \=== 'ã' || c \=== 'e' || c \=== 'é' || c \=== 'ê' || |
| 21 |                c \=== 'i' || c \=== 'í' || c \=== 'o' || c \=== 'ó' || c \=== 'õ' || c \=== 'ô' || c \=== 'u' || c \=== 'ú' |
| 22 |            ) { |
| 23 |                return true; |
| 24 |            } else { |
| 25 |                return false; |
| 26 |            } |
| 27 |        }  |
| 28 |    \</script\> |
| 29 | \</body\> |

02\) Faça um programa usando HTML e Javascript que solicite ao usuário que insira uma data (por exemplo, 26/06/2025). Seu programa deverá usar um conjunto (vetor) predefinido com os nomes dos meses para obter no nome do mês correspondente e exibir uma mensagem nesse formato: 

Hoje é 26 de junho de 2025\.

É obrigatório o uso um input do tipo text para ler a data e deve-se usar uma função que receba a data, processe e devolva a mensagem. Ou seja, são 2 funções. A que é chamada no onclick e mais uma.

3\) A escola de Springfield cobra mensalidade com base em um conjunto de regras. Faça um programa com HTML e JS que leia o nome do aluno e o valor da renda familiar (soma de quanto ganha o pai e a mãe juntos) e armazene esses dados em dois vetores distintos (alunos e rendas). O valor padrão da mensalidade da escola é de R$1000,00 por mês. Com base nos dados armazenados nos vetores alunos e rendas, calcule e exiba uma listagem com o nome do aluno, renda familiar e valor da mensalidade que ele deve pagar. Para calcular o valor da mensalidade deve ser considerada a renda familiar. Se for abaixo de R$10000,00 haverá um desconto de 10% e se for abaixo de R$6000,00 o desconto será de 20%. Os descontos são sempre calculados em relação ao valor padrão da mensalidade.  
