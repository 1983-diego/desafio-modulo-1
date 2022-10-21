function processData(input) {
    //Enter your code here
    const linhas = input.trim().split("\n");
    const n = linhas[0]

    const coordenadas = []

    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push([
            x = Number(coord[0]),
            y = Number(coord[1])
        ])
    }
    //console.log(coordenadas)

    let pontos = []
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            let xa = coordenadas[i][0]
            let ya = coordenadas[i][1]
            let xb = coordenadas[j][0]
            let yb = coordenadas[j][1]
            pontos.push(Math.sqrt((xb-xa)**2 + (yb-ya)**2))
            //console.log(xa, ya, xb, yb)
        }
    }
   //console.log(pontos)

    let maiorPonto = 0;
    for (let ponto of pontos) {
        if (maiorPonto === 0) {
            maiorPonto = ponto;
        } else {
            if (maiorPonto < ponto) {
                maiorPonto = ponto;
            }
        }
    }
    console.log(maiorPonto)

}