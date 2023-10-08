//6. Escreva a tabuada dos números de 1 a 10.

import { obter_numero_positivo } from "./utils/input.js"
import { tabuada } from "./utils/math.js"

function main(){
    const number = obter_numero_positivo('Número: ')
    tabuada(number, 'SOMAR')
    tabuada(number, 'DIMINUIR')
    tabuada(number, 'MULTIPLICAR')
    tabuada(number, 'DIVIDIR')

}

main()