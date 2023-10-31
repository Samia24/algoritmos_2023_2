/*Leia N, calcule e escreva o valor de S.

17. S = 1/1 + 1/2 + 1/3 + ... + 1/N*/

import { obter_numero_positivo, print, print_inline } from "./utils/input.js";
import { soma_fracoes } from "./utils/math.js";

function main(){
    const N = obter_numero_positivo('\nInforme o valor de N: ')

    print(`\n===== SOMA DE FRAÇÕES =====`)
    print_inline('\nS = ')
    const resultado = soma_fracoes(N)
    print(` = ${resultado.toFixed(2)}\n`)
    print('===========================')


}

main()