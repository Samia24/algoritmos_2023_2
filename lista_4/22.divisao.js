//22. Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores de divisão (/ e %) sejam utilizados.

import { obter_numero_positivo, print } from "./utils/input.js";

function main(){
    
    const dividendo = obter_numero_positivo('Digite o dividendo (número a ser dividido): ')
    const divisor = obter_numero_positivo('Digite o divisor (número pelo qual será dividido): ')
    
    let quociente = 0
    let resto = dividendo
    
    while (resto >= divisor){
      resto -= divisor
      quociente++
    }

    print('\n|----- RESULTADO DA DIVISÃO -----|')     
    print(`> Quociente: ${quociente}`)
    print(`> Resto: ${resto}`)
    print('|--------------------------------|')
}

main()
