/*25. Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição.*/

import { clear_screen, obter_numero, obter_numero_positivo, print, urna, mostrar_votacoes } from "./utils/input.js"
import { computar_vencedor } from "./utils/math.js"


function main() {
    print('********** ELEIÇÕES 2023 **********')
    let qtd_eleitores = obter_numero_positivo('Informe a quantidade de eleitores: ')
    let votos_1 = 0
    let votos_2 = 0
    let votos_3 = 0
    let nulos = 0
    let brancos = 0

    for (let i = 0; i < qtd_eleitores; i++) {
        clear_screen()
        const voto = obter_numero(urna())
        if (voto === 1) {
            votos_1++
        } else if (voto === 2) {
            votos_2++
        } else if (voto === 3) {
            votos_3++
        } else if (voto === 9) {
            nulos++
        } else if (voto === 0) {
            brancos++
        } else {
            print('Voto Inválido! ')
            i--
        }
    }

    mostrar_votacoes(votos_1, votos_2, votos_3, nulos, brancos)

    const vencedor = computar_vencedor(votos_1, votos_2, votos_3)
    if (vencedor === -1) {
        print('EMPATE ! Temos que fazer uma nova eleição!')
    } else {
        print(`>> O Candidato vencedor foi: ${vencedor}`)
    }

    print('*****-----------*****')
}

main()
