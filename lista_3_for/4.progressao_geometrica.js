//4. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Geométrica que tem por valor inicial A0 e razão R.

import { print } from "./utils/input.js"
import {progressao_geometrica } from "./utils/math.js"

function main(){
    const pg = progressao_geometrica()
    
    print(`\n>>> PROGRESSÃO GEOMÉTRICA DE ${pg.a0} À ${pg.limite} COM RAZÃO ${pg.r} <<<`)
    print(pg.valores_menor_limites)
    print('>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<\n')
    
}

main()