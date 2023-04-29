
const numeros = [5,5,50,10,98,23]
const teste = {numeros}
let i = 0

function gets () { 
    const valores = numeros[i]
    i = i + 1
    return valores
}

function print (texto) {
    console.log(texto)
}

module.exports = {gets,print}



