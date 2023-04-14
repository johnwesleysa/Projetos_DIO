//Classe aluno responsável por armazenar a estrutura de o que é um aluno
class Pessoa {
    nome
    idade
    anoDeNascimento

    //Definindo a construção de uma nova instância com o constructor:
    constructor (nome,idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2023 - idade
    }
    //mostrar na tela uma apresentação da pessoa atravé de um método
    descrever() {
        console.log(`Olá, ${this.nome}, sua idade é ${this.idade} e você nasceu no ano de ${this.anoDeNascimento}`)
    }
}

    const john = new Pessoa ('John Wesley', 23)

    
    //Criando nova aluna
    const vitoria = new Pessoa ('Maria Vitória', 24)
    
    

john.descrever()
console.log('\n')
vitoria.descrever()