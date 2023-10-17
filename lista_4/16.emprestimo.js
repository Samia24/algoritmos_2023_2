/*16. Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.*/

import { print } from "./utils/input.js"
import { calcular_dias_uteis } from "./utils/math.js"

function main() {
    const saldo_inicial = 3000.00
    const pagamento_diario = 200.00
    const taxa_juro_diaria = 0.0085

    const dias_uteis_necessarios = calcular_dias_uteis(saldo_inicial, pagamento_diario, taxa_juro_diaria)

    print(`\n========= PAGAMENTO DO EMPRÉSTIMO ==========`)
    print(`\nQuantidade de dias úteis necessários: ${dias_uteis_necessarios}`)
    print(`\n============================================\n`)
}

main()

