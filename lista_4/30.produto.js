/*30. Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).
a. Até 10 unidades: valor total
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto */

import { calcular_valor_desconto_produto } from "./utils/math.js";

function main() {
    calcular_valor_desconto_produto()
}

main()


