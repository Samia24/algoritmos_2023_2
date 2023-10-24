/*28. Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand())
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
escreva em quantas tentativas o usuário acertou.*/

import { clear_screen, obter_numero_positivo, print } from "./utils/input.js";

function main(){
    let numeroGerado = Math.floor(Math.random() * 100) + 1
    let tentativas = 0
    let adivinhado = false

    while (!adivinhado) {
        print('\n>>>>>>>>>> ADIVINHE O NÚMERO <<<<<<<<<<')
        let palpite = obter_numero_positivo(`Digite o ${tentativas + 1}º palpite (entre 1 e 100): `)
        tentativas++

        clear_screen()
        if (palpite === numeroGerado) {
            adivinhado = true
            print(`\n  >>> Parabéns! Você adivinhou o número em ${tentativas} tentativas. <<<`)
        } else if (palpite < numeroGerado) {
            print('\n> Maior \n-> Tente novamente!')
        } else {
            print('\n> Menor \n-> Tente novamente!')
        }
    }
}

main()