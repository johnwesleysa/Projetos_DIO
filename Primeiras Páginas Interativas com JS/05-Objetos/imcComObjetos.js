/* 
    2- Crie uma classe para representar pessoas:
    Para cada pessoa teremos os atributos nome, altura, peso.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura *altura))
    Instancie uma pessoa chamada josé que tenha 70KG de peso, 1,75 de altura e peça ao josé para dizer o valor do seu IMC.
*/  

//definindo a classe pessoas, que irá gerar novas pessoas.
class Pessoas {
    nome;
    altura;
    peso;
    //criando o constructor para construir a pessoa automaticamente após receber os valores definidos
    constructor (nome, altura, peso) {
        this.nome = nome
        this.altura = altura
        this.peso = peso
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    classificarIMC() {
        const imc = this.calcularIMC()
         if (imc < 18.5) {
            return (`Eu ${this.nome} estou abaixo do peso`)
        }else if (imc >= 18.5 && imc < 25) {
            return (`Eu ${this.nome} estou com peso normal`)
        }else if (imc >= 25 && imc < 30) {
            return `Eu ${this.nome} estou acima do peso`
        }else if (imc >= 30 && imc < 40) {
            return (`Eu ${this.nome} estou obeso`)
        }else if (imc >= 40) {
            return (`Eu ${this.nome} estou com obesidade grave`)
            }
        }
}


(function main () {
    const jose = new Pessoas('José', 1.75 , 80)
    console.log(jose.classificarIMC())
})()