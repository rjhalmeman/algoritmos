# 04/08/2025 - Retorno após férias de julho

Recapitulação
- algoritmos
  - sequência de passos finitos para resolver um problema (entrada, processamento e saída)

- algoritmos sequenciais (sem desvios)
- variáveis (numéricas e texto)
- condicionais (com desvios condicionais - if)
- funções
- laços de repetição
- variáveis indexadas (arrays - vetores) e manipulação de strings (vetor de caracteres) - conjuntos

# Conteúdo do 3º bimestre

### agregados homogêneos multidimensionais (matrizes)
![alt text](matrizBidimensional.png)

 <p>Leia uma matriz de ordem 3x4 (3 linhas e 4 colunas).Faça uma
        função (para cada item) que calcule e mostre.<br>
        a) soma dos elementos de cada coluna.<br>
        b) média de cada linha.<br>
        c) a soma de todos os elementos da matriz.<br></p>



### agregados heterogêneos (uni e multidimensionais)


data da avaliação bimestral (19/09/2025)

Conceitos e aplicações de matrizes

### 08/08/2025		3	sex
Aula teórica (g102) exercícios com matrizes. Entrada de dados.


### 11/08/2025		2	seg
Matrizes, funções e organização de código.


Separar HTML de JS em documentos diferentes.


[Lista de exercícios 15](https://github.com/rjhalmeman/algoritmos/blob/main/3bimestre/Listas%20de%20exerc%C3%ADcios/AL15%20-%20Algoritmos%20-%20Matrizes.md)




15/08/2025		3	sex exercícios com matrizes (lista 15)

18/08/2025		2	seg (gincana)

22/08/2025		3	sex (gincana)

25/08/2025		2	seg exercícios com matrizes (lista 15)

29/08/2025		3	sex exercícios com matrizes (lista 15)

## as soluções para os exercícios da lista 15 estão em:

[Solução do exercício da lista 15 estão no github] (https://github.com/rjhalmeman/algoritmos/tree/main/3bimestre/2025-08-25_e_29-ExercicioLista15)

01/09/2025		2	seg Agregados Heterogêneos 

Estrutura de dados que armazena em cada elemento de variáveis agregadas (vetores e matrizes) diferentes tipos de dados. 

# Há várias maneiras de trabalhar, vamos usar classes para representar a estrutura dos dados (class). Uma classe, depois que recebe dados é chamada de Objeto.

## Classe aluno (exemplo)
```
class Aluno {
    constructor(ra, nome, nota1, nota2, nota3, nota4) {
        this.ra = ra;
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
}
```

## Estrutura do tipo vetor
let listaAlunos = []; //conjunto de dados

# Adicionando aluno na listaAlunos

```
//Adicionando um aluno no vetor
let aluno = new Aluno('111', 'Ana Silva', 8.5, 7.2, 9.0, 8.0);
    listaAlunos.push(aluno);
```

## como mostrar os dados armazenados em um vetor com dados heterogêneos
```
function listar(vetor) {
    let texto = "";
    for (let i = 0; i < vetor.length; i++) {
        const linha = vetor[i];
        texto += linha.ra + " - " +
            linha.nome + " - " +
            linha.nota1 + " - " +
            linha.nota2 + " - " +
            linha.nota3 + " - " +
            linha.nota4 + "<br>";
    }
    return texto;
}
```

## operações com os dados armazenados
```
function mediaDaTurma() {
    let somaMediasDeAluno = 0;
    for (let i = 0; i < listaAlunos.length; i++) {
        const aluno = listaAlunos[i];
        let mediaAluno = (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4;
        somaMediasDeAluno = somaMediasDeAluno + mediaAluno;
    }
    let mediaGeral = somaMediasDeAluno / listaAlunos.length;

    document.getElementById("spanMediaTurma").innerHTML = mediaGeral.toFixed(1);

}
```



05/09/2025		3	sex
https://github.com/rjhalmeman/algoritmos/tree/main/3bimestre/2025-09-05%20-%20ED

08/09/2025		2	seg
https://github.com/rjhalmeman/algoritmos/tree/main/3bimestre/2025-09-08%20-%20Exerc%C3%ADcios
(alunos fazendo o exercício)

09/09/2025 - RP para alunos que solicitaram via DERAC (horário do p-aluno)

11/09/2025 - repescagem (nesta semana - todo o conteúdo do primeiro semestre - 13h50 até 17h30)
  
12/09/2025		3	sex


15/09/2025		2	seg

19/09/2025		3	sex - avaliação 3º Bimestre

22/09/2025		2	seg

26/09/2025		3	sex

29/09/2025		2	seg

03/10/2025		3	sex -	Recuperação paralela 3º bimestre

06/10/2025		2	seg


--- 

10/10/2025		3	sex -  inicio do 4º bimestre

17/10/2025		3	sex - 

20/10/2025		2	seg

24/10/2025		3	sex

31/10/2025		3	sex

03/11/2025		2	seg

07/11/2025		3	sex

10/11/2025		2	seg

14/11/2025		3	sex

17/11/2025		2	seg

24/11/2025		2	seg

28/11/2025		3	sex

01/12/2025		2	seg

05/12/2025		3	sex - Avaliação 4º Bimestre

08/12/2025		2	seg

12/12/2025		3	sex - Recuperação paralela 4º bimestre

15/12/2025		2	seg

19/12/2025		3	sex


