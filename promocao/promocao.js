function solucao(precos) {
    //seu codigo aqui
    
      let menorPreco = precos[0]
      let somaTotal = 0
      if (precos.length <= 2) {
          for (let item of precos) {
              somaTotal += item
          }
          console.log(somaTotal)
      } 
      else {
          for (let i = 0; i < precos.length; i++) {
              somaTotal += precos[i];
              if (precos[i] < menorPreco) {
                  menorPreco = precos[i];
              }
          }
          let comDesconto = somaTotal - (menorPreco / 2)
          console.log(comDesconto)
      }
  
  }