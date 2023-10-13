/*9. Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo, clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:
                          
                         Lugar Pontos:
                            1      9
                            2      6
                            3      4
                            4      3
         
Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor.*/

import { obter_numero, obter_numero_minimo, obter_numero_positivo, obter_texto, print } from "./utils/input.js"

function main(){
    let numero_prova = obter_numero_minimo('Número da prova: ', 0)
    let qtd_nadadores = obter_numero_minimo('Quantidade de nadadores: ', 0)

    let resultado = calcular_pontuacao(numero_prova, qtd_nadadores)

    let pont_a = resultado.pontuacao_a
    let pont_b = resultado.pontuacao_b

    print(`Pontuação Clube A: ${pont_a}`)
    print(`Pontuação Clube B: ${pont_b}`)

}

function calcular_pontuacao(numero_prova, qtd_nadadores){
    let pontuacao_a = 0
    let pontuacao_b = 0

    while(numero_prova > 0 && qtd_nadadores > 0){
        let contador = 1

        while(contador <= qtd_nadadores){
            print(`|--------------- DADOS DO ${contador}º NADADOR ---------------|`)
            let nome = obter_texto(`Nome: `)
            let classificacao = obter_numero_positivo(`Classificação: `)
            let tempo = obter_numero_positivo(`Tempo: `)
            let clube = obter_texto(`Clube: `)

            
            if(classificacao === 1){
                if (clube === 'a'){
                    pontuacao_a += 9
                }if(clube === 'b'){
                    pontuacao_b += 9
                }
                contador++
            }else if(classificacao === 2){
                if (clube === 'a'){
                    pontuacao_a += 6
                }if(clube === 'b'){
                    pontuacao_b += 6
                }              
                contador++ 
            }else if(classificacao === 3){
                if (clube === 'a'){
                    pontuacao_a += 4
                }if(clube === 'b'){
                    pontuacao_b += 4
                }
                contador++
            }else if(classificacao === 4){
                if (clube === 'a'){
                    pontuacao_a += 3
                }if(clube === 'b'){
                    pontuacao_b += 3
                }
                contador++
            }
        }
        
        numero_prova = obter_numero('Número da prova: ')
        qtd_nadadores = obter_numero('Quantidade de nadadores: ')
            
    }
    return {pontuacao_a, pontuacao_b}     
}

main()