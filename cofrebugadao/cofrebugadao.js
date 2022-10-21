function processData(input) {
    //Enter your code here
    let linhas = input.split("\n");
    let senha = linhas[0]
    let string = linhas[1]

    let senhaNaString = true
    for (let char of senha) {
        if (string.indexOf(char) == -1) {
            senhaNaString = false
            console.log("NAO")
            break
        } else {
            string = string.slice(string.indexOf(char))
            //console.log(string)
        }
    }
    
    if (senhaNaString) {
        console.log("SIM")
    }

}