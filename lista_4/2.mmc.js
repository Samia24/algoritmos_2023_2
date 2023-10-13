//2. Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.

import {obter_numero_minimo, print} from "./utils/input.js";
import { calcularMDC, calcularMMC } from "./utils/math.js";

function main(){
    const numero1 = obter_numero_minimo('Digite o primeiro número: ', 0)
    const numero2 = obter_numero_minimo('Digite o segundo número: ', 0)

    const mdc = calcularMDC(numero1, numero2)
    const mmc = calcularMMC(numero1, numero2, mdc)
    

    print(`\n============================`)
    print(`>> O MMC de {${numero1}, ${numero2}} é: ${mmc} `)
    print(`============================\n`)
}

main()