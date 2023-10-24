/*29. Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
Saldo do investimento após 1 ano: 1268.25
Deseja processar mais um ano (S/N) ?*/

import { clear_screen, obter_numero, obter_texto, print } from "./utils/input.js";

function main() {
    
    print('\n|=============== DADOS DO INVESTIMENTO ===============|')
    let investimento_mensal = obter_numero('Informe o valor a ser investido por mês: R$ ')
    let taxa_juros_mensal = obter_numero('Informe a taxa de juros mensal (%): ')
    
    let saldo = 0
    let meses = 0
    
    calcular_investimento(saldo, meses, investimento_mensal, taxa_juros_mensal)
    
}

main()