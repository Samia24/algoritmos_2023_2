/*12. Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário.*/

import { clear_screen, obter_numero, print } from "./utils/input.js";
import { fim_partida } from "./utils/math.js";

function main(){
    let jogador1 = 0
    let jogador2 = 0
    let diferenca = 0

    
    while(!fim_partida(jogador1, jogador2, diferenca)){
        let ponto = obter_numero('Qual jogador pontuou? (1 ou 2): ')
        clear_screen()
        if(ponto === 1){
            jogador1++
            
        }else if(ponto === 2){
            jogador2++
           
        }
        print('\n========== QUADRO DE PONTUAÇÃO ==========')
        print(`Jogador 1: ${jogador1}`)
        print(`Jogador 2: ${jogador2}`)
    
        diferenca = Math.abs(jogador1 - jogador2)
        print('Diferença de pontos: ' + diferenca)
        print('=========================================\n')

    }

}


main()