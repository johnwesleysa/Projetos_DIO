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

function compararPesoa(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nom} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

    const john = new Pessoa ('John Wesley', 23)

    
    //Criando nova aluna
    const vitoria = new Pessoa ('Maria Vitória', 24)
    
    

compararPesoa(john, vitoria)
console.log('\n')
