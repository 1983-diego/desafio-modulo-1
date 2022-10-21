
function solucao(lista) {
    //seu codigo aqui
    
      let total = 0;
      for (let i = 0; i < lista.length; i++) {
          total += lista[i];
      }
      console.log(total);
  }
  
  
  function processData(input) {
        const strings = input.split(" ");
      const numeros = [];
      for(let i = 0; i < strings.length; i++) {
            numeros.push(parseInt(strings[i] ,10));
        }
      solucao(numeros);
  }