## Para cada descrição, faça um crud completo. Use o modelo https://github.com/rjhalmeman/algoritmos/tree/main/4bimestre/2025-09-29-CrudBase


1) Fruta

- int;id
- string;nome
- string;cor

--- 
2) Chocolate

- int;codigo
- string;nome
- string;fabricante
- date;dataDeLancamento
--- 
3) Celular

- int;numeroMac
- string;modelo
- string;fabricante
- float;preco

--- 
4) Bebida

- int;id
- string;nome
- string;fabricante
- double;precoEtiqueta
- boolean;ehAlcolico

--- 
5) Notebook

- string; id
- string; modelo
- date; dataLancamento
- string; fabricante
- int;quantidadeDeRAM (em GB)
- string;processador
- string;fabricanteDoProcessador
- int;armazenamentoPermanente (em GB)

Adicione um botão extra e um input, onde será lida uma quantidade de RAM e liste apenas os computadores que possuirem aquela quantidade ou mais de RAM.

--- 
6) Boletim

- string;materia
- float;nota1
- float;nota2
- float;nota3
- float;nota4

Após fazer o CRUD, adicione um botão que calcule e mostre a média para cada disciplina (pode modificar o listar)

---

** adicionados 20/10/2025

---
7) Filme

- int;id  
- string;titulo  
- string;diretor  
- date;dataLancamento  
- float;avaliacao  

🔹 Adicione um botão que filtre e mostre apenas os filmes com **avaliação acima de 8.0**.

---

8) Animal

- int;id  
- string;especie  
- string;nome  
- int;idade  
- float;peso  

🔹 Adicione um botão que mostre o **animal mais pesado** cadastrado.

---

9) Livro

- int;codigo  
- string;titulo  
- string;autor  
- int;anoPublicacao  
- string;genero  

🔹 Adicione um campo de busca que mostre **apenas os livros de um determinado gênero**.
🔹 Adicione um campo de busca que mostre **apenas os livros de um determinado autor**.
🔹 Adicione um campo de busca que mostre **apenas os livros de um determinado ano de publicação**.


---

10) Aluno

- int;ra  
- string;nome  
- float;nota1  
- float;nota2  
- float;nota3  
- float;nota4  

🔹 Adicione um botão que calcule a **média de cada aluno** e mostre se o aluno **passou (≥6)** ou **reprovou**.
🔹 Adicione um botão que calcule a **maior nota de cada aluno**.
🔹 Adicione um botão que calcule a **média da turma**.
🔹 Adicione um botão que calcule a **porcentagem de alunos reprovados**.



---

11) Jogo

- int;codigo  
- string;titulo  
- string;plataforma  
- string;genero  
- float;preco  

🔹 Adicione um filtro para mostrar apenas **jogos de uma plataforma específica**.
🔹 Adicione um filtro para mostrar apenas **jogos em uma faixa de preço**.


---

12) Restaurante

- int;id  
- string;nome  
- string;cozinha  (comida chinesa, por exemplo)
- float;nota  
- boolean;fazEntrega  

🔹 Adicione um botão que **liste apenas os restaurantes que fazem entrega e têm nota ≥ 4**.
🔹 Adicione um botão que **liste os restaurante em ordem do melhor avaliado para o pior avaliado.

---

13) Série

- int;id  
- string;titulo  
- int;temporadas  
- string;plataforma  
- float;avaliacao  

🔹 Adicione um botão que mostre **a série com o maior número de temporadas**.
🔹 Adicione um botão que mostre **a série com o menor número de temporadas**.
🔹 Adicione um botão que mostre **a série de uma plataforma específica melhor avaliada**.

---
