//15. Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).

import { obter_numero_positivo, print } from "./utils/input.js";
import { sequencia } from "./utils/math.js";

function main(){
    const n = obter_numero_positivo('Digite um número para N: ')
    
    let termoAtual = 1
    let contador = 1

    print(`\n>>> A sequência é: `)
    const sequencia_numerica = sequencia(n, contador, termoAtual)
    print(sequencia_numerica)

}

main()