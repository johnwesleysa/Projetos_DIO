/*
    7. Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/
function saudacaoPorTurno(turno){
    turno = turno.toLowerCase()
    if (turno == 'v') {
        return `Boa tarde!`
    } else if (turno == 'm') {
        return `Bom dia!`
    } else if (turno == 'n') {
        return `Boa noite!`
    } else {
        return `Valor Inválido.`
    }
}


(function main() {
    console.log(saudacaoPorTurno('m'))
})()