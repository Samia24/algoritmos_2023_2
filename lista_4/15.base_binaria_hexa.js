/*15. Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
e na base hexadecimal.*/

import { clear_screen, obter_numero, print } from "./utils/input.js"
import { decimal_Hexadecimal, decimal_Binario } from "./utils/math.js"

function main() {
    let decimal
    let hexadecimal
    let binario
    let encerrar = false

    while (!encerrar) {
        decimal = obter_numero('\nDigite um número decimal entre 0 e 255 (ou -1 para encerrar): ')
        clear_screen()

        if (decimal === -1) {
            encerrar = true
        } else if (decimal < 0 || decimal > 255) {
            print('Número fora do intervalo permitido (0 a 255).')
        } else {
            hexadecimal = decimal_Hexadecimal(decimal)
            binario = decimal_Binario(decimal)

            print(`\n=======================================`)
            print(`Número decimal ${decimal} é igual a:`)
            print(`Número binário: ${binario}`)
            print(`Número hexadecimal: 0x${hexadecimal}`)
            print(`=======================================\n`)
        }
    }
}

main()
