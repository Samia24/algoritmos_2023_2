//10. Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.

import { obter_numero } from "./utils/input.js"
import { numeros_impares } from "./utils/math.js"

function main(){
    const limite_inferior = obter_numero('Informe um número mínimo para uma faixa numérica: ')
    const limite_superior = obter_numero('Informe um número máxima para uma faixa numérica: ')

    let contador = limite_inferior
    let impares = 0
    
    console.log(`\n >>> Números ímpares:`)
    numeros_impares(limite_inferior, limite_superior, contador, impares)
}

main()