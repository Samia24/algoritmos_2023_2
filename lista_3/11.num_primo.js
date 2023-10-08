//11. Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.

import { obter_numero } from "./utils/input.js"
import { num_primos } from "./utils/math.js"

function main(){
    const limite_inferior = obter_numero('Informe um número mínimo para uma faixa numérica: ')
    const limite_superior = obter_numero('Informe um número máxima para uma faixa numérica: ')

    let contador = limite_inferior
    
    console.log(`\n >>> Números primos:`)
    num_primos(contador, limite_superior)
}

main()