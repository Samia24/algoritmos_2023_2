/*Leia N, calcule e escreva o valor de S.

18. S = 1/N + 2/N-1 + 3/N-2 + ... + N/1 */

import { obter_numero_positivo, print, print_inline } from "./utils/input.js"
import { soma_sequencia } from "./utils/math.js"

function main() {
    const N = obter_numero_positivo('\nInforme o valor de N: ')

    print(`\n===== SOMA DA SEQUÊNCIA =====`)
    print_inline('\nS = ')
    const resultado = soma_sequencia(N)
    print(` = ${resultado.toFixed(2)}`)
    print('\n===========================')
}


main()

