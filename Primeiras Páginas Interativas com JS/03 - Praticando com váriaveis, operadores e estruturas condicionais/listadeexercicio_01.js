/*
1 - Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e sua classificação conforme e tabela abaixo.

média = (nota 1 + nota 2 + nota 3) / 3;

classificação:

- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

//Declarando as váriaveis das notas e da média
let nota1 = 5
let nota2 = 9
let nota3 = 0
let media = (nota1+nota2+nota3) / 3
console.log(`Sua média é: ${media.toFixed(2)}`)

//Estrutura condicional de acordo com o exercício.
if (media > 7 ) {
    console.log("Passou de semestre")
} else if ((media >= 5) && (media <= 7)) {
    console.log("Recuperação")
} else {
    console.log("Reprovado!")
}