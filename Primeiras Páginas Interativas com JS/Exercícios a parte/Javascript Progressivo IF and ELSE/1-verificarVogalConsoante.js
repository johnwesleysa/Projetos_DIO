/*
1 - Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.
*/

function verificarVogalConsoante (letra) {
    letra = letra.toLowerCase()
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        return `A letra '${letra}' é uma vogal`
    } else  {
        return `A letra '${letra}' é uma consoante`
    }
}

(function main () {
    console.log(verificarVogalConsoante('A'))
})()