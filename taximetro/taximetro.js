function solucao(min, km) {
    //seu codigo aqui
    
    let minutos = 0
    let min2 = 0
    //minutos
    if (min > 20) {
        min2 = min - 20
        minutos = (20 * 0.5) + (min2 * 0.3)
        
    } else {
        minutos = min * 0.5
    }
    //console.log(minutos)

    let kilometros = 0
    let km2 = 0 
    //km
    if (km > 10) {
        km2 = km - 10
        kilometros = (10 * 0.7) + (km2 * 0.5)
    } else {
        kilometros = km * 0.7
    }
    
    //console.log(kilometros)
    
    let somaDeValores = (minutos + kilometros) * 100
    console.log(somaDeValores)
    
}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
}