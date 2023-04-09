console.log("Programa para calcular o valor de uma viagem:\n")

//Valor Combustivel
precoCombustivel = 5.79
console.log(`Valor do combustível: R$${precoCombustivel}\n`)

//Gasto médio de combustível do carro por KM, Gol 2019
gastoMedio = 1
console.log(`Gasto médio por KM de um Gol 2019: ${gastoMedio}KM\n `)

//Distância em KM da viagem
distanciaKm = 100 
console.log(`Distância em KM de PE para CE: ${distanciaKm}KM\n`)

//Quantos litros necessários para viajar
qtdCombustivel = distanciaKm/gastoMedio
console.log(`Você precisa de ${qtdCombustivel.toFixed(2)} litros de combustivel para viajar\n`)

//O valor total da viagem
valorTotal = qtdCombustivel*precoCombustivel
console.log(`O valor total para viagem é de R$${valorTotal.toFixed(2)}\n`)