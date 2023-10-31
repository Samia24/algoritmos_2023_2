//5. Leia um número, calcule e escreva seu fatorial.

import { clear_screen, obter_numero_positivo, print, print_inline } from "./utils/input.js"
import { fatorial } from "./utils/math.js"

function main(){
    print('\n|----- CÁLCULO DO FATORIAL -----|')
    const numero = obter_numero_positivo('Informe um número: ')

    clear_screen()

    print(`\n******** FATORIAL DE ${numero} ********`)
    fatorial(numero)
    
}

main()