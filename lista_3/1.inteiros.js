//1. Leia N e escreva todos os números inteiros de 1 a N.

import { obter_numero } from "./utils/input.js"
import { numero_inteiro } from "./utils/math.js"

function main(){
    const n = obter_numero('Informe o valor de N: ')
    let inteiros = 1

    console.log(`Os números inteiros de 1 à ${n} são: `)
    numero_inteiro(n, inteiros)
}

main()