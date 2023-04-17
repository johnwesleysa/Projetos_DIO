/*
     Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
*/

function verificarDia (dia) {
    if (dia === 1) {
        console.log("Hoje é domingo")
    } else if (dia === 2) {
        console.log("Hoje é segunda")
    } else if (dia === 3) {
        console.log("Hoje é terça")
    } else if (dia === 4) {
        console.log("Hoje é quarta")
    } else if (dia === 5) {
        console.log("Hoje é quinta")
    } else if (dia === 6) {
        console.log("Hoje é sexta")
    } else if (dia === 7) {
        console.log("Hoje é sábado")
    } else {
        console.log ("Valor inválido")
    }
}

(function main () {
    verificarDia(1)
})()