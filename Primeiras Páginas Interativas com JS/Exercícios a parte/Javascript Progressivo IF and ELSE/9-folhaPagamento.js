/*
    Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

    Desconto do IR:
    Salário Bruto até 900 (inclusive) - isento
    Salário Bruto até 1500 (inclusive) - desconto de 5%
    Salário Bruto até 2500 (inclusive) - desconto de 10%

    Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

    Salário Bruto: (5 * 220)        : R$ 1100,00
    (-) IR (5%)                                : R$   55,00
    (-) INSS ( 10%)                       : R$  110,00
    FGTS (11%)                            : R$  121,00
    Total de descontos                : R$  165,00
    Salário Liquido                       : R$  935,00
*/

//Criando uma classe para o colaborador

class colaborador {
    nome;
    funcao;
    valorHoras;
    dias;

    //construindo o colaborador
    constructor (nome,funcao,valorHoras,dias) {
        this.nome = nome
        this.funcao = funcao
        this.valorHoras = valorHoras
        this.dias = dias
        this.salario = this.valorHoras * this.dias
    }

    //metodo para calcular porcentagem
    calciR (percentual) {
        return this.salario + (this.salario * (percentual/100))
    } 
    
    calcInss () {
        return this.salario + (this.salario * (10/100))
    }

    calcFGTS () {
        return this.salario + (this.salario * (11/100))
    }


    //metodo para aplicar os descontos corretos
    descontosSalario () {
        let ir = this.calciR()
        let inss = this.calcInss()
        let fgts = this.calcFGTS()
        let salarioBruto = this.salario
        let descontos = ir - inss
        let salarioLiquido = (salarioBruto - inss)

        if (this.salario <= 900) {
            console.log (`Salário Bruto........................... : R$${salarioBruto}\n(-) IR (0)..................... : ISENTO\n(-) INSS (10%)................. : R$${inss}\nFGTS (11%)..................... : R$${fgts}\nTotal de descontos: R$${this.calcInss()}\nSalário Líquido: R$${salarioLiquido}`)
        }
    }
}

(function main () {
    const john = new colaborador ('John', 'Assistente de TI', 12, 2)
    john.descontosSalario()
})()
