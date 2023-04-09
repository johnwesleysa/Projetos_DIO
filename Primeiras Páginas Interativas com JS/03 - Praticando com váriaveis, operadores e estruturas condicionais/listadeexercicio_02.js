/*
Calculo de IMC

Formula do IMC
IMC = peso / (altura* altura) 

Elaborar um algoritmo que dado o peso em KG e altura de um adukto mostre sua condição de acordo com a tabela abaixo.

IMC em adulto Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obesidade;
- Acima de 40 Obesidade Grave;
*/

//Declarando váriaveis de peso em KG, altura e formula do IMC

const pesoKg = 92
const altura = 1.74
const imc = pesoKg / Math.pow(altura,2) //Math.pow serve para calcular potenciação 
console.log(`Seu IMC é: ${imc.toFixed(2)}\n`)

//Estrutura condicional de acordo com a tabea do exercício
if (imc < 18.5) {
    console.log(`Você está Abaixo do peso`)
}else if (imc >= 18.5 && imc < 25) {
    console.log("Você está com peso normal")
}else if (imc >= 25 && imc < 30) {
    console.log("Você está acima do peso")
}else if (imc >= 30 && imc < 40) {
    console.log("Você apresenta obesidade")
}else if (imc >= 40) {
    console.log("Você apresenta obesidade grave")
}
