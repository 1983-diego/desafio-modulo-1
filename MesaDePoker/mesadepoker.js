function solucao(min, max, valores) {
    //seu codigo aqui
      let arrayDeJogadores = [];
      for (let valor of valores) {
          if (valor >= min && valor <= max) {
              arrayDeJogadores.push(valor);
          }
      }
      console.log(arrayDeJogadores);
  }
  