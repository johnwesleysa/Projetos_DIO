
const notas = [1,2,3]
let soma = 0
let media = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma = soma + nota
    media = media +1
    console.log(soma)

}

media = soma / media
console.log(`\n${media}`)