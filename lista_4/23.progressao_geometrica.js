//23. Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e escreva os N termos da PG. Ler o valor de N.

import { obter_numero_positivo, print_inline, print } from "./utils/input.js";
import { progressao_geometrica } from "./utils/math.js";

function main(){
    print('\n=================== ENTRADA DE DADOS DA PG ===================')
    const razao = obter_numero_positivo('Digite o valor referente à razão da PG: ')
    const N = obter_numero_positivo('Informe a quantidade de termos: ')
    let contador = 1
    let termo = obter_numero_positivo(`Digite o ${contador}º termo: `)
    print('==============================================================')

    print('\n|================== RESULTADO ==================|')
    print_inline(`\n >> Termos da PG: { ${termo} `)
    progressao_geometrica(razao, N, contador, termo)
    print('}')
    print('\n|===============================================|')
}

main()