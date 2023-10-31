//12. Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

import { obter_numero_positivo, print } from "./utils/input.js";
import { soma_media } from "./utils/math.js";

function main(){
    const n = obter_numero_positivo('Informe a quantidade de números: ')
    let contador = 1
    let soma = 0
    let media = 0
    
    const {soma: soma_num, media: media_num} = soma_media(n, contador, soma, media)

    print(`\n>>> Soma dos números: ${soma_num}\n>>> Média dos números: ${media_num.toFixed(1)}`)

}
main()