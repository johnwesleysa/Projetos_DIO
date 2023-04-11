/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

Codigo Condiç¿o de pagamento
- A vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

//Declarando variaveis
const valorProduto = 800
const formaDePagamento = "a vista no pix"
const qtdVezes = 12

//Calculo de subtração de 10% sobre o valor do produto.
const subtraiDezPorcento = valorProduto - ((10 * valorProduto) / 100)

//Calculo de subtração de 15% sobre o valor do pruduto.
const subtraiQuinzePorcento = valorProduto - ((15 * valorProduto) / 100)

//Calculo de soma de 10% sobre o valor do produto.
const somaDezPorcento = valorProduto + ((10 * valorProduto) / 100)

//Estrutura condicional baseada na forma de pagamento
if (formaDePagamento === "a vista débito") {
    console.log(`Você recebeu 10% de desconto, o valor atual do produto é de: R$${subtraiDezPorcento}`)
}else if (formaDePagamento === "a vista no pix" || formaDePagamento ==="a vista em dinheiro") {
    console.log(`Você recebeu 15% de desconto, o valor atual do produto é de: R$${subtraiQuinzePorcento}`)
}else if (formaDePagamento === "em duas vezes") {
    console.log(`O valor total do seu produto é de R$${valorProduto} e cada parcela fica no valor de R${(valorProduto/2).toFixed(2)}`)
}else if (formaDePagamento === "a vista no crédito") {
    console.log(`O valor total do seu produto é de R$${valorProduto}`)
}else if (formaDePagamento === "acima de duas vezes"){
    console.log(`O valor total do seu produto com juros de 10% é de R$${somaDezPorcento} e cada parcela fica no valor de R$${(somaDezPorcento/qtdVezes).toFixed(2)}`)
}else {
    console.log(`Forma de pagamento inválida`)
}

