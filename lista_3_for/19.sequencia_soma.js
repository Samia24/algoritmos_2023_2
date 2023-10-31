/*Leia N, calcule e escreva o valor de S.

19. S = (1/N) - ((N-1)/2) + (3/N-2) - ... +/- (N/1) */

import { obter_numero_positivo, print, print_inline } from "./utils/input.js";
import { soma_sequencia2 } from "./utils/math.js";

function main() {
    const N = obter_numero_positivo('\nInforme o valor de N: ')

    print(`\n===== SOMA DA SEQUÊNCIA =====`)
    print_inline('\nS = ')
    const resultado = soma_sequencia2(N)
    print(` = ${resultado.toFixed(2)}`)
    print('\n===========================')
}

main()
