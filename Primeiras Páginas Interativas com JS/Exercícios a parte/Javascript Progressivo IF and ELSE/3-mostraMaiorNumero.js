/*
    3. Faça um script que leia três números inteiros e mostre o maior deles.
*/

function verificarMaior(num1,num2,num3) {
    //Foi definida a variavel maior para receber o numero 1 de inicio e em seguida verificar se num1 é menor que o num2 se sim, maior passa a ser num2 e assim sucessivamente.
    let maior = num1
    if (maior < num2) {
        maior = num2
    } else if (maior < num3) {
        maior = num3
    }

    return `O maior número é ${maior}`
}

(function main() {
    console.log(verificarMaior(1,2,))
})()