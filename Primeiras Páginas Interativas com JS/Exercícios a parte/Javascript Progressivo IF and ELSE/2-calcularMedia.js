/*
    2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/

function calcMedia(nota1, nota2, nomeAluno) {
    const media = (nota1 + nota2) / 2
    if (media === 10) {
        return `O aluno ${nomeAluno} teve média de ${media.toFixed(2)} e foi Aprovado com Distinção`
    } else if (media >= 7) {
        return `O aluno ${nomeAluno} teve média de ${media.toFixed(2)} e foi Aprovado`
    } else if (media < 7) {
        return `O aluno ${nomeAluno} teve média de ${media.toFixed(2)} e foi Reprovado.\n\nBoa sorte no próximo ano!`
    } else {
        return `Por favor digite número de 1 à 10 e eeu nome corretamente`
    }

}

(function main () {
    console.log(calcMedia(1.7,10,'John'))
})()