/*31. Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).*/

import { obter_numero, print } from "./utils/input.js";
import { converter_para_romano } from "./utils/math.js";

function main() {
    print('\n>>>>>>>>>>>>>>> ENTRADA DE DADOS <<<<<<<<<<<<<<<')
    const numero_decimal = obter_numero('Informe um número decimal (até 3 dígitos): ')

    if (numero_decimal < 1 || numero_decimal > 999) {
        print('\n>> Número fora do intervalo válido !')
    }

    const unidades = numero_decimal % 10
    const dezenas = Math.floor((numero_decimal % 100) / 10)
    const centenas = Math.floor(numero_decimal / 100)

    const num_romano_centenas = converter_para_romano(centenas, 'C', 'D', 'M')
    const num_romano_dezenas = converter_para_romano(dezenas, 'X', 'L', 'C')
    const num_romano_unidades = converter_para_romano(unidades, 'I', 'V', 'X')

    const num_romano = num_romano_centenas + num_romano_dezenas + num_romano_unidades

    print('\n\n>>>>>>>>>>>>>>> CONVERSÃO DE DADOS <<<<<<<<<<<<<<<')
    print(`  > Número Decimal ${numero_decimal} em Romano: ${num_romano}`)
    print('--------------------------------------------------\n')
}

main()
