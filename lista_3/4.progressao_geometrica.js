//4. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Geométrica que tem por valor inicial A0 e razão R.

import { obter_numero } from "./utils/input.js"
import { prog_geometrica } from "./utils/math.js"

function main(){
    const a0 = obter_numero('Informe o valor da variável A0: ')
    const limite = obter_numero('Informe o valor da variável Limite: ')
    const r = obter_numero('Informe o valor da variável R: ')
    let contador = a0
    let menor_limite = limite

    console.log(`\n>>> Número(s) menor(es) que ${limite} na progressão geométrica com razão ${r}: `)
    prog_geometrica(a0, limite, r, contador, menor_limite)
}

main()