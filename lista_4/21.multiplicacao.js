//21. Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*) seja utilizado.

import { obter_numero_positivo, print } from "./utils/input.js";
import { multiplicacao } from "./utils/math.js";

function main(){
    const num1 = obter_numero_positivo('Digite o primeiro número inteiro: ')
    const num2 = obter_numero_positivo('Digite o segundo número inteiro: ')

    
    const multiplicacao_numeros = multiplicacao(num1, num2)

    print('\n=================================================================')
    print(`>> Multiplicação de ${num1} x ${num2} = ${multiplicacao_numeros}`)
    print('=================================================================')
}

main()