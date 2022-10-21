function solucao(texto) {
    // Seu codigo aqui
    let arrayTexto = texto.trim().split(" ")

    for (let char of arrayTexto) {
        if (char === " " || char === "  " || char === '') { 
            arrayTexto.shift()
        }
    }

    console.log(arrayTexto.length)
}