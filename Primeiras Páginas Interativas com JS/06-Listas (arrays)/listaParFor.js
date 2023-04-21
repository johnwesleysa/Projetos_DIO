/*
    Crie um program que receba uma lista e imprima cada número par
*/

//declando o array que vai receber a lista de números
const list = [1,2,3,4,5,6]
let par = []
console.log(`Segue a lista com os números par da seguinte lista:\n------------${list}------------`)
//iniciando o loop for para verificar a lista de 1 a 1 e com uma condicional verificar se o resto da divisão por 2 é 0, se for ele imprime na tela
for (i = 0; i < list.length; i++) {
    const lista = list[i]

    if (lista % 2 === 0) {
        console.log(lista)
    } 
}