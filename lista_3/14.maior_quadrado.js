//14. Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o maior quadrado menor que 38 é 36 (quadrado de 6).

import { obter_numero } from "./utils/input.js";
import { valor_maior_quadrado } from "./utils/math.js";

function main(){
   const n = obter_numero('Digite um número: ')

   let maiorQuadrado = 0
   let contador = 1

   const maior_quadrado = valor_maior_quadrado(n, contador, maiorQuadrado)

   console.log(`\n>>> O maior número que ao quadrado é menor ou igual a ${n} é ${maior_quadrado}.`)

}

main()