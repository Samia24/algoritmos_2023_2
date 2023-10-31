//3. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Aritmética que tem por valor inicial A0 e razão R.

import { print } from "./utils/input.js"
import { progressao_aritmetrica } from "./utils/math.js"

function main(){
    const pa = progressao_aritmetrica()
    
    print(`\n>>> PROGRESSÃO ARITMÉTICA DE ${pa.a0} À ${pa.limite} COM RAZÃO ${pa.r} <<<`)
    print(pa.valores_menor_limites)
    print('>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<\n')
    
}

main()