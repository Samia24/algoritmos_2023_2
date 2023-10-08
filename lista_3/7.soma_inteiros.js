//7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
import { obter_numero } from "./utils/input.js"
import { somar_inteiros } from "./utils/math.js"

function main(){
    const numero = obter_numero('Digite um número: ')
    if (numero < 0) {
        numero = obter_numero('Informe um número positivo! \nDigite novamente um número: ')
      }
    let contador = 2
    let soma = 0

    somar_inteiros(numero, contador, soma)
}

main()