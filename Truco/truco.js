function solucao(carta) {
    //seu codigo aqui
    
    let arrayCartas = ["Q", "J", "K", "A", "2", "3"];
    
    
    if (carta === "3") {
        console.log("Q")
    } else {
        for (let i = 0; i<arrayCartas.length; i++) {
            if (carta === arrayCartas[i]) {
                console.log(arrayCartas[i+1])
            }
        }
    }
   
}
