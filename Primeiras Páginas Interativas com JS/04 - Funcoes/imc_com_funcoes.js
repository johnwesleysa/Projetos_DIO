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
//Criar funcção para calculo do IMC
function calculadoraIMC(peso,altura){
    return peso / Math.pow(altura,2)
}

//criando uma função para classificar o tipo de imc
function classificarIMC(imc) {
    if (imc < 18.5) {
        return `Você está Abaixo do peso`
    }else if (imc >= 18.5 && imc < 25) {
        return "Você está com peso normal"
    }else if (imc >= 25 && imc < 30) {
        return "Você está acima do peso"
    }else if (imc >= 30 && imc < 40) {
        return "Você apresenta obesidade"
    }else if (imc >= 40) {
        return "Você apresenta obesidade grave"
    }
}

//funcão anonima principal main
(function () {
    const peso = 75
    const altura = 1.74
    const imc = calculadoraIMC(peso,altura)
    console.log(classificarIMC(imc))
})()
