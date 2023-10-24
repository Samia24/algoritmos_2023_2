/*18. Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B.*/

import { print } from "./utils/input.js"

function main() {
    const populacaoA = 200000
    const taxaCrescimentoA = 0.035
    const populacaoB = 800000
    const taxaCrescimentoB = 0.0135

    const anosNecessarios = calcularAnosParaUltrapassar(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB)

    print(`Serão necessários ${anosNecessarios} anos para a população da cidade A ultrapassar a população da cidade B.`)
}

main()

