# Lista de exercícios 03 - Sequenciais - testes de mesa


#### Considerando que uma variável é um local (na memória RAM) que guarda alguma coisa.
#### Para todos os exercícios, calcule e mostre o valor que estará na variável ou variáveis da pergunta após realizar os cálculos (processamento).


1) Qual o valor de soma? (exemplo do que deve ser feito para cada um dos exercícios)

   ```js
   let x=3;
   let y=4;
   let soma = x + y;
   console.log("O resultado da soma é " + soma);
   ```
      Neste caso, para resolver pode ser feito assim:
      ####
      soma = 3 + 4  // soma recebe 3 + 4. Ou seja, o local chamado ***soma*** vai receber o resultado da conta que é 7.
      o console.log, vai literalmente escrever na tela o que está entre aspas e na sequência colocar o conteúdo da variável soma.
      O resultado da soma é 7 //mostra o valor contido em ***soma***, que é 7.


2. Qual o valor de z?

```js
   let x=5;
   let y=2;
   let z = x**2-5+y;
   console.log("Na variável z tem o valor " + z);
   ```

3. Qual o valor de k?

   ```js
   let x=3;
   let y=4+x;
   let k = x**3*y+7;
   console.log("O valor de k é "+k);
   ```
4. Qual o valor de x?

   ```js

   let a=6;
   let b=4-a;
   let x = (a**3*b+7)/2;    
   console.log("O valor de x é " + x)

   ```
5. Qual o valor de s?

   ```js
   function soma(a,b){
       let soma = a+b;
       return soma;
   }
   let s = soma(6,7);
   console.log("O valor de s é " + s)
   ```
6. Qual o valor de x?

   ```js
   function pitagoras(b,c){
    return Math.sqrt(b**2+c**2)
   }
   let h = pitagoras(3,4);
    console.log("O valor da hipotenusa é "+ h)
   ```
7. Quais os valores das médias?

   ```js
   function media(n1,n2,n3,n4){
      return (n1+n2+n3+n4)/4;
   }

   let m1 = media(8,8,8,8);
   let m2 = media(5,6,7,8);
   let m3 = media(4,4,4,4);
   let m4 = media(10,9,10,9);
   let n1=7;
   let n2=10;
   let n3=n1+2;
   let n4=90/100*n2;
   let m5 = media(n1,n2,n3,n4);
   console.log("Média 1 = " + m1);
   console.log("Média 2 = " + m2);
   console.log("Média 3 = " + m3);
   console.log("Média 4 = " + m4);
   console.log("Média 5 = " + m5);

   ```
8. Quais os valores de x1 e x2?

   ```js
   let x1=4,  x2=6 , y1=5 , y2=7;
   let distancia = ((x2-x1)**2+(y2-y1)**2)**(1/2);
   console.log("Distância = "+ distancia);

   ```
9. Qual o valor de x?

   ```js
   // ax + b = 0
   let a = 4, b = -8;
   let x = -b / a;
   console.log("Solução da equação 4x - 8 = 0 → x =", x);

   ```

10. Qual a área do triângulo?

      ```js
      let base = 10, altura = 5;
      let area = (base * altura) / 2;
      console.log("Área do triângulo =", area);
      ```

11. Porcentagem com desconto, qual o valor do preço final?

      ```js
      let preco = 150;
      let desconto = 10; // 10%
      let precoFinal = preco * (1 - desconto / 100);
      console.log("6. Preço com 10% de desconto =", precoFinal);
      ```
