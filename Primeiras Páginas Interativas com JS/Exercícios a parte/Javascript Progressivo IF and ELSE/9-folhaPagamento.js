/*
    Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

    Desconto do IR:
    Salário Bruto até 900 (inclusive) - isento
    Salário Bruto até 1500 (inclusive) - desconto de 5%
    Salário Bruto até 2500 (inclusive) - desconto de 10%

    Desconto INSS :
    Salário de até R$1.302,00 (salário-mínimo): desconto de 7,5% sobre o salário bruto;
    Salário de R$1.302,01 até R$ 2.571,29: desconto de 9% sobre o salário bruto;
    Salário de R$2.571,30 até R$3.856,94: desconto de 12% sobre o salário bruto;
    Salário de R$3.856,95 até R$7.507,49: desconto de 14% sobre o salário bruto.

    Desconto FGTS:
    11%

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
    calciR (percentiR) {
        return this.salario * (percentiR/100)
    } 
    
    calcInss (percentInss) {
        return this.salario * (percentInss/100)
    }

    calcFGTS () {
        return this.salario * (11/100)
    }


    //metodo para aplicar os descontos corretos
    descontosSalario () {
        let FGTS = this.calcFGTS()

        //Salario de até 1302
        if (this.salario <= 1302.00) {
            let inss = this.calcInss(7.5)
            let descontos = inss
            let salarioLiquido = this.salario - inss
            console.log (
                `
                Salário Bruto........................... : R$${this.salario.toFixed(2)}\n
                (-) IR (0)..................... : ISENTO\n
                (-) INSS (7.5%)................. : R$${inss.toFixed(2)}\n
                FGTS (11%)..................... : R$${FGTS.toFixed(2)}\n
                Total de descontos: R$${descontos.toFixed(2)}\n
                Salário Líquido: R$${salarioLiquido.toFixed(2)}
                `
                )
        } 
        //Salário de 1302 até 2571
            else if (this.salario >= 1302.01 && this.salario <= 2571.29) {
            let inss = this.calcInss(9)
            let ir = this.calciR(5)
            let descontos = inss + ir
            let salarioLiquido = this.salario - descontos
            console.log (
                `
                Salário Bruto........................... : R$${this.salario.toFixed(2)}\n
                (-) IR (5%)..................... : R${ir.toFixed(2)}\n
                (-) INSS (9%)................. : R$${inss.toFixed(2)}\n
                FGTS (11%)..................... : R$${FGTS.toFixed(2)}\n
                Total de descontos: R$${descontos.toFixed(2)}\n
                Salário Líquido: R$${salarioLiquido.toFixed(2)}
                `
                )
        } 
        //Salário de R$2.571,30 até R$3.856,94
            else if (this.salario >= 2571.30 && this.salario <= 3856.94) {
            let inss = this.calcInss(12)
            let ir = this.calciR(10)
            let descontos = inss + ir
            let salarioLiquido = this.salario - descontos
            console.log (
                `
                Salário Bruto........................... : R$${this.salario.toFixed(2)}\n
                (-) IR (10%)..................... : R${ir.toFixed(2)}\n
                (-) INSS (12%)................. : R$${inss.toFixed(2)}\n
                FGTS (11%)..................... : R$${FGTS.toFixed(2)}\n
                Total de descontos: R$${descontos.toFixed(2)}\n
                Salário Líquido: R$${salarioLiquido.toFixed(2)}
                `
                )
        }
        //Salário de R$3.856,95 até R$7.507,49
            else if (this.salario >= 3856.95 && this.salario <= 7507.49) {
            let inss = this.calcInss(14)
            let ir = this.calciR(10)
            let descontos = inss + ir
            let salarioLiquido = this.salario - descontos
            console.log (
                `
                Salário Bruto........................... : R$${this.salario.toFixed(2)}\n
                (-) IR (10%)..................... : R${ir.toFixed(2)}\n
                (-) INSS (14%)................. : R$${inss.toFixed(2)}\n
                FGTS (11%)..................... : R$${FGTS.toFixed(2)}\n
                Total de descontos: R$${descontos.toFixed(2)}\n
                Salário Líquido: R$${salarioLiquido.toFixed(2)}
                `
                )
        } else {
            let inss = this.calcInss(14)
            let ir = this.calciR(10)
            let descontos = inss + ir
            let salarioLiquido = this.salario - descontos
            console.log (
                `
                Salário Bruto........................... : R$${this.salario.toFixed(2)}\n
                (-) IR (10%)..................... : R${ir.toFixed(2)}\n
                (-) INSS (14%)................. : R$${inss.toFixed(2)}\n
                FGTS (11%)..................... : R$${FGTS.toFixed(2)}\n
                Total de descontos: R$${descontos.toFixed(2)}\n
                Salário Líquido: R$${salarioLiquido.toFixed(2)}
                `
                )
        }
    }
}

(function main () {
    const john = new colaborador ('John', 'Assistente de TI', 800, 160)
    john.descontosSalario()
})()
