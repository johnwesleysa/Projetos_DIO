//Declacar uma váriavel
const numero = 1

//Declarando a condição para ser divisivel por 5
const numeroDivisivelPorCinco = (numero % 5) === 0

//Usando se senao se e senao para criar minha estrutura condicional
if (numero === 0) {
    console.log("O número é inválido")
//Caso seja invalido ele vai parar o programa, caso contrario ele vai verificar se é divisil por 5 e vai continuar o programa
} else if (numeroDivisivelPorCinco) {
    console.log("Sim")
} else {
    console.log("Não")
}