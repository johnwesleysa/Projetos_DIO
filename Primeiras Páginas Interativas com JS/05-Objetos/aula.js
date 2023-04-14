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
        return `${p1.nome} é mais velho que ${p2.nome}`
    } else if (p1.idade < p2.idade) {
        return `${p1.nome} é mais novo que ${p2.nome}`
    } else if (p2.idade < p1.idade) {
        return `${p1.nome} é mais novo que ${p2.nome}`
    } else if (p2.idade < p1.idade) {
        return `${p1.nome} é mais novo que ${p2.nome}`
    } else {
        return `${p1.nome} tem a a mesma idade de ${p2.nome}`
    }
}
    const john = new Pessoa ('John Wesley', 23)

    
    //Criando nova aluna
    const vitoria = new Pessoa ('Maria Vitória', 24)
    
    

console.log(compararPesoa())
console.log('\n')
