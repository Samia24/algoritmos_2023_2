//13. Leia N e uma lista de N números e escreva o maior número da lista.
import { obter_numero_positivo, print } from "./utils/input.js";
import { maior_numero} from "./utils/math.js";

function main(){
    const n = obter_numero_positivo('Informe a quantidade de números: ')
    let contador = 1
    let maior = 0
    
    const num_maior = maior_numero(n, contador, maior)

    print(`\n>>> Maior número: ${num_maior}.`)
}

main()