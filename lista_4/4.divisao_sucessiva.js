//4. Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o resultado da última divisão efetuada.

import {obter_numero_positivo, print} from "./utils/input.js";
import { divisao_sucessiva } from "./utils/math.js";

function main(){
    const numero = obter_numero_positivo('Digite um número: ')
    
    const divisao = divisao_sucessiva(numero)

    print(`\n====================================`)
    print(`>> O resultado da última divisão é: ${divisao} `)
    print(`====================================\n`)
}

main()