/*
    5. Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.
*/

function verificarMaiorMenor(n1,n2,n3) {
    
    //verificar qual número é o menor

    if (n1 < n2 && n1 < n3) {
        menor = n1
    } else if (n2 < n1 && n2 < n3) {
        menor = n2
    } else {
        menor = n3
    }

    //verificar qual número é o menor

    if (n1 > n2 && n1 > n3) {
        maior = n1
    } else if (n2 > n1 && n2 > n3) {
        maior = n2
    } else {
        maior = n3
    }

    return `O maior número é ${maior} e o menor é ${menor}`
}

(function main (){
    console.log(verificarMaiorMenor(1,2,3))
})()