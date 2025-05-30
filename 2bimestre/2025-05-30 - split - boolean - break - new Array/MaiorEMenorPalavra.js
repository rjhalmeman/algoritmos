function separar(frase){
     let f = frase.split(" ");
     console.log(f);
     let me = f[0].length;
     let menorPalavra = 0;
     let maiorPalavra =0;
     let ma = f[0].length;
     for (let i = 1; i < f.length; i++) {
        if (f[i].length<me) {
            me = f[i].length;
            menorPalavra = i;
        }  
        if (f[i].length>ma) {
            ma = f[i].length;
            maiorPalavra = i;
        }        
     }
     console.log("a menor palavra é ====> "+ f[menorPalavra]);
     console.log("a maior palavra é ====> "+ f[maiorPalavra]);

}
separar("uma frase qualquer para ajudar na compreensão")