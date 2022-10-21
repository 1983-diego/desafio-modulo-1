function solucao(numeros) {
    // seu codigo aqui
 
   
   let numeroJogadores = numeros.length;
   
   let somaNumeros = 0
   for (let i = 0; i<numeros.length; i++) {
       somaNumeros += numeros[i]
   }
 
   let dividirModulo = somaNumeros % numeroJogadores;
   
   if (numeroJogadores === somaNumeros){
       console.log(somaNumeros)
   } else if (numeroJogadores > somaNumeros) {
       console.log(somaNumeros)
   } else if (numeroJogadores < somaNumeros && somaNumeros % numeroJogadores !== 0) {
       console.log(dividirModulo)
   } else if (numeroJogadores < somaNumeros && somaNumeros % numeroJogadores === 0)
       console.log(numeroJogadores)
}
