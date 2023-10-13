//5. Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até chegar a 2.

import {obter_numero_positivo, print} from "./utils/input.js";
import { divisao_x_n } from "./utils/math.js";

function main(){
    let x = obter_numero_positivo('Digite o número equivalente a X: ')
    let n = obter_numero_positivo('Digite o número equivalente a N: ')
    
    divisao_x_n(x, n)
}

main()