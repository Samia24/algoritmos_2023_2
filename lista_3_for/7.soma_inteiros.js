//7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.

import { obter_numero_positivo, print } from "./utils/input.js"
import { soma_inteiros } from "./utils/math.js"

function main(){
    let N = obter_numero_positivo('\n>> Informe o valor de N: ')
    const resultado = soma_inteiros(N)
    print(`\n->> Soma dos números entre 1 e ${N} = ${resultado}`)
}

main()