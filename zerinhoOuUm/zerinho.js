function solucao(jogadores) {
    //seu codigo aqui
      let jogou0 = []
      let jogou1 = []
      
      for (let jogador of jogadores) {
          if (jogador.jogada === 0) {
              jogou0.push(jogador.nome)
          } else {
              jogou1.push(jogador.nome)
          }
      }
      
      if (jogou0.length === 1) {
          console.log(jogou0[0])
      } else if (jogou1.length === 1) {
          console.log(jogou1[0])
      } else {
          console.log("NINGUEM")
      }
  }