/*26. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados.*/

import {print } from "./utils/input.js"
import { entrevistados_cinema } from "./utils/math.js"

function main(){
    const resultado = entrevistados_cinema()

    let media_otimo = 0
    if(resultado.qtd_otimo > 0){
        media_otimo = (resultado.idades_otimo) / (resultado.qtd_otimo)
    }

    const percentual_bom = ((resultado.qtd_bom) / (resultado.total_entrevistados)) * 100  


    print(`\n========================= DADOS DA PESQUISA =========================
    > Média de idade das pessoas que responderam "Ótimo" : ${media_otimo}
    > Quantidade de pessoas que responderam "Regular": ${resultado.qtd_regular}
    > Percentual de pessoas que responderam "Bom": ${percentual_bom.toFixed(2)}% \n=====================================================================\n`)
    
}



main()