/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

Codigo Condição de pagamento
1 - A vista Débito, recebe 10% de desconto;
2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

//Calcular porcentagem do desconto
function calcPorcentagemDesconto (valorEtiqueta, tipoPagamento) {

    //Subtrair 10% de desconto sobre o produto
    const subtrairDezDesconto = valorEtiqueta - ((10 * valorEtiqueta) / 100)

    //Subtrair 15% de desconto sobre o produto
    const subtrairQuinzeDesconto = valorEtiqueta - ((15 * valorEtiqueta) / 100)

    //Somar 10% de desconto sobre o produto
    const somarDezDesconto = valorEtiqueta + ((10 * valorEtiqueta) / 100)
    
    if (tipoPagamento === 1) {
        return subtrairDezDesconto
    } else if (tipoPagamento === 2) {
        return subtrairQuinzeDesconto
    } else if (tipoPagamento === 4) {
        return somarDezDesconto
    } else
        return valorEtiqueta
    
}


//Verificar o tipo de pagamento e guardar o nome do pagamento em uma váriavel
function nomePagamento (tipoPagamento) {
    
    if (tipoPagamento === 1) {
        return 'Débito'
    } else if (tipoPagamento === 2) {
        return 'À vista'
    } else if (tipoPagamento === 3) {
        return 'Em duas Vezes'
    } else if (tipoPagamento === 4) {
        return 'Mais de duas vezes'
    }
    
}

(function () {
    const valorEtiqueta = 1000
    const tipoPagamento = 3
    console.log(`Você escolheu a forma de pagamento ${nomePagamento(tipoPagamento)} e o valor final do seu produto é RS${calcPorcentagemDesconto(valorEtiqueta, tipoPagamento)}`)
})()