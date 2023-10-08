//8. Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.

import { obter_numero } from "./utils/input.js"
import { numeros_multiplos } from "./utils/math.js"

function main(){
    const n = obter_numero('Digite um número: ')
    const limite_inferior = obter_numero('Informe um número mínimo para uma faixa numérica: ')
    const limite_superior = obter_numero('Informe um número máxima para uma faixa numérica: ')

    let contador = limite_inferior
    let multiplos = 0
    
    console.log(`\n >>> Múltiplos de ${n}:\n`)
    numeros_multiplos(n, limite_inferior, limite_superior, contador, multiplos)
    
}

main()