function solucao(lista) {
    // seu codigo aqui
    
      let podeParticipar = 0;
      
      for (let i = 0; i < lista.length; i++) {
          if (podeParticipar === 0 && lista[i] >= 18) {
              podeParticipar = lista[i];
          } else if (lista[i] >= 18 && lista[i] < podeParticipar) {
              podeParticipar = lista[i];
      }
      }
      if (podeParticipar >= 18) {
          console.log(podeParticipar);
      } else {
          console.log("CRESCA E APARECA")
      }
      
  }