/*
    6. Faça um script que leia três números e mostre-os em ordem decrescente.
*/

function descrescente(n1,n2,n3) {
    //verificar qual número é maior
    if (n1 > n2 && n1 > n3) {
        maior = n1
    }  else if (n2 > n1 && n2 > n3) {
        maior = n2
    } else {
        maior = n3
    }

    //verificar qual número é menor
    if (n1 < n2 && n1 < n3) {
        menor = n1
    } else if (n2 < n1 && n2 < n3) {
        menor = n2
    } else {
        menor = n3
    }

    //verificar qual número é o do meio
    if (n1 < maior && n1 > menor) {
        meio = n1
    } else if (n2 < maior && n2 > menor) {
        meio = n2
    } else {
        meio = n3
    }

    return `Ordem crescente: ${menor}, ${meio}, ${maior}.\n\nOrdem Decrescente: ${maior}, ${meio}, ${menor}`
}

(function main() {
    console.log(descrescente(2,1,3))
})()