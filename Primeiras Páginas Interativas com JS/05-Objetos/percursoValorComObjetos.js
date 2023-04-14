/* 
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de comsbustível por km rodado.
    Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

//Criando a classe car para representar os carros
class car {
    marca;
    cor;
    gastoMedio;

    //Definindo um constructor para receber os valores enviados e construir um novo obejto de carro.
    constructor (marca,cor,gastoMedio) {
        this.marca = marca
        this.cor = cor
        this.gastoMedio = gastoMedio
    }

    //calcular o valor da viagem
    calcValorViagem (distanciaPercorrida, valorCombstivel) {
        let qtdCombustivel = distanciaPercorrida/this.gastoMedio
        let valorTotalGasto = qtdCombustivel * valorCombstivel

        console.log(`Será necessário R$${valorTotalGasto.toFixed(2)} para realizar uma viagem de ${distanciaPercorrida}KM`)

    }
}
//função princpal do programa
(function main (){
    const mobi = new car ('mobi', 'vermelho', 12)
    const fusca = new car ('Fusca', 'branco', 12)

    mobi.calcValorViagem(70,5)
    
})()