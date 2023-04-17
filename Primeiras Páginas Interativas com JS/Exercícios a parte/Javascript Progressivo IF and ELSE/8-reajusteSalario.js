/*
    8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

    Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% 
    
    Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/


//Programa para calcular o reajuste do colaborador.

//Criando a classe de colaborador
class colaborador {
    nome;
    funcao;
    salario;

    constructor (nome, funcao, salario) {
        this.nome = nome
        this.funcao = funcao
        this.salario = salario
    }

    //calcular procentagem do reajuste
    calcReajuste (percentual) {
        return this.salario + (this.salario * (percentual/100))
    }

    //condições para o reajuste
    reajuste () {
        if (this.salario <= 280) {
            console.log(`Olá ${this.nome}, seu reajuste salarial foi de 25%, seu salário bruto atual fica no valor de: R$${this.calcReajuste(25).toFixed(2)}`)
        } else if (this.salario > 280 && this.salario <= 700) {
            console.log(`Olá ${this.nome}, seu reajuste salarial foi de 15%, seu salário bruto atual fica no valor de: R$${this.calcReajuste(15).toFixed(2)}`)
        } else if (this.salario > 700 && this.salario < 1500) {
            console.log(`Olá ${this.nome}, seu reajuste salarial foi de 10%, seu salário bruto atual fica no valor de: R$${this.calcReajuste(10).toFixed(2)}`)
        } else if (this.salario >= 1500) {
            console.log(`Olá ${this.nome}, seu reajuste salarial foi de 5%, seu salário bruto atual fica no valor de: R$${this.calcReajuste(5).toFixed(2)}`)
        }
    }
}

//Função main do programa.
(function main () {
    const john = new colaborador('John Wesley', 'Assistente de TI', 2000)
    const vitoria = new colaborador('Maria Vitória', 'Analista de RH', 1800)
    const joao = new colaborador('Joao', 'Teste', 500)

    john.reajuste()
    vitoria.reajuste()
    joao.reajuste()
})()