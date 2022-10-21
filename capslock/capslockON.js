function processData(input) {
    //Enter your code here

    let palavraMudada = ""
   
    if (input === input.toUpperCase() || input[0] === input[0].toLowerCase() && input.substr(1) === input.substr(1).toUpperCase()) {
        for (let letra of input) {
            if (letra === letra.toUpperCase()) {
                palavraMudada += letra.toLowerCase()
            } else {
                palavraMudada += letra.toUpperCase()
            }
        }
    } 
    else {
        palavraMudada = input
    }
    console.log(palavraMudada)

}