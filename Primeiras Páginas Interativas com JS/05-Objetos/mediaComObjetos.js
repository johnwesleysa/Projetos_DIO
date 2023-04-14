//Classe aluno responsável por armazenar a estrutura de o que é um aluno
class Aluno {
    nome
    n1
    n2
    n3

    //Definindo a construção de uma nova instância com o constructor:
    constructor (nome,n1,n2,n3) {
        this.nome = nome
        this.n1 = n1
        this.n2 = n2
        this.n3 = n3
    }
    //Método (função) para calcular a média do aluno
    calcMedia() {
        let calc = (this.n1 + this.n2 + this.n3) / 3
        if (calc >= 7) {
            console.log(`Aluno ${this.nome} ficou com média ${calc.toFixed(2)}.\nParabéns! Você foi aprovado!`)
        } else if (calc >= 5 && calc < 7) {
            console.log(`Aluno ${this.nome} ficou com média ${calc.toFixed(2)}.\nVocê está na recuperação!\nData da prova dia 05/06/2023`)
        } else {
            console.log(`Aluno ${this.nome} ficou com média ${calc.toFixed(2)}.\nInfelizmente...Você foi reprovado :(`)
        }
    }
}

    const john = new Aluno ('John Wesley', 10,10,10)

    
    //Criando nova aluna
    const vitoria = new Aluno ('Maria Vitória', 10,5,3)
    
    

john.calcMedia()
console.log('\n')
vitoria.calcMedia()