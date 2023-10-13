//7. Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.

import { obter_numero, print } from "./utils/input.js";
import { lista_numeros } from "./utils/math.js";

function main(){

    let primeiroNumero = obter_numero('Digite o primeiro número: ')

    const lista = lista_numeros(primeiroNumero)

    print(`\n===========================================================`)
    print(`>>> Número igual ao primeiro número encontrado na lista: ${lista}`)
    print(`===========================================================\n`)

}
main()