//5. Leia um número, calcule e escreva seu fatorial.

import { obter_numero_minimo } from "./utils/input.js"
import { fatorial_numero } from "./utils/math.js";

function main(){
    const numero = obter_numero_minimo('Digite um número: ', 0)
    let contador = 1
    let fatorial = 1

    fatorial_numero(numero, contador, fatorial)
}

main()