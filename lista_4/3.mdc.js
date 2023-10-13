//3. Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.

import {obter_numero_minimo, print} from "./utils/input.js";
import { calcularMDC, calcularMMC } from "./utils/math.js";

function main(){
    const numero1 = obter_numero_minimo('Digite o primeiro número: ', 0)
    const numero2 = obter_numero_minimo('Digite o segundo número: ', 0)

    const mdc = calcularMDC(numero1, numero2)
    

    print(`\n============================`)
    print(`>> O MDC de {${numero1}, ${numero2}} é: ${mdc} `)
    print(`============================\n`)
}

main()