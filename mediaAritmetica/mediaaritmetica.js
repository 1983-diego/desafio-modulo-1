function solucao(lista) {
    //seu codigo aqui

  let quantidadeDeDepositos = lista.length;
  let somaTotal = 0
  for (let i = 0; i < lista.length; i++) {
      somaTotal += lista[i];
  }
  
  let resultado = somaTotal / quantidadeDeDepositos;
  console.log(resultado);
  

  
}