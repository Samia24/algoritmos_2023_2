//8. Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo quando a soma de dois números consecutivos da lista for igual a X.

import { obter_numero_positivo, print } from "./utils/input.js"
import { encontrar_soma_igual_x } from "./utils/math.js"

function main(){
    const x = obter_numero_positivo('Informe o valor de X: ')

    encontrar_soma_igual_x(x)

}



main()