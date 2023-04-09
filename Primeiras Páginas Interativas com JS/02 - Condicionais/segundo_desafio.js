/*
Programa para calcular o valor de uma viagem:

Terei 5 váriaveis. Sendo Elas:

1 - Preço do etanol;
2 - Preço da Gasolina;
3 - Tipo de combustível do carro;
4 - Gasto médio de combustível por KM do carro;
5 - Distância em KM da viagem;

Imprimir no console o valor que será gasto para realizar a viagem;
*/

//Title do programa
console.log("Programa para calcular o gasto em R$ de combustivel para uma viagem de PE para CE")

//Declarar o valor dos combustíveis
let valueEtanol = 5.79
let valueGasolina = 6.66

//Declarando o tipo de combustível do carro
let typeCombustivelCarro = "etanol"

//Declarando o gasto médio de combustivel do carro
consumoMedioPorKm = 10

//Declarando a distancia da viagem
distanciaViagem = 100

//Declarando a quantidade de combustivel em litros para a viagem
qtdCombustivel = distanciaViagem / consumoMedioPorKm

//condicional para calcular a quantidade de combustivel em litros e o valor total da viagem
if (typeCombustivelCarro === "etanol") {
    valorTotal = qtdCombustivel * valueEtanol
    console.log(`O valor gasto de R$ de gasolina é de: R$${valorTotal.toFixed(2)}`)
} else {
    valorTotal = qtdCombustivel * valueGasolina
    console.log(`O valor gasto de R$ de gasolina é de: R$${valorTotal.toFixed(2)}`)
}