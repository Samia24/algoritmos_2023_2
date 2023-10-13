//6. Escreva um algoritmo para determinar o número de dígitos de um número informado.

import { obter_numero, print } from "./utils/input.js";
import { contar_digitos } from "./utils/math.js";

function main(){
    let numero = obter_numero('Digite um número: ')

    const qtd_digitos = contar_digitos(numero)
    
    print(`\n===========================================================`)
    print(`>> A quantidade de dígitos do número ${numero} é: ${qtd_digitos}`)
    print(`===========================================================\n`)
}

main()