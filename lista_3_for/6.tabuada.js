//6. Escreva a tabuada dos números de 1 a 10.

import { obter_numero_positivo, print } from "./utils/input.js"
import { tabuada } from "./utils/math.js"

function main(){
    let numero = obter_numero_positivo('\n>> Tabuada do número: ')
    let menu = obter_numero_positivo(`
    >> Escolha qual tabuada você quer ver:
    1 - SOMAR
    2 - DIMINUIR
    3 - MULTIPLICAR
    4 - DIVIDIR
    ................
    9 - Sair

      >> Digite a opção: `)
    
    tabuada(menu, numero)
}

main()