//2. Leia N e escreva todos os números inteiros pares de 1 a N.

import { obter_numero } from "./utils/input.js"
import { eh_par } from "./utils/math.js"

function main(){
    const n = obter_numero('Informe o valor de N: ')
    let contador = 1
    let num_pares = 0

    console.log(`Número(s) inteiro(s) par(es) de 1 à ${n}: `)
    eh_par(n, contador, num_pares)
}

main()