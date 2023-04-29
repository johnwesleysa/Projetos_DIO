const {gets,print} = require('./moduloComplementar.js')

let maiorEncontrado = 0
const tamanho = gets()

for (let i = 0; i < tamanho; i++) {
    const maiorValor = gets()
    if (maiorEncontrado <= maiorValor) {
        maiorEncontrado = maiorValor
    }
}

print(maiorEncontrado)



