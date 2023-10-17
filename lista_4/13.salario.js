/*13. Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)

De Até Acréscimo
R$ 0,00 R$ 2.999,99 25 %
R$ 3.000,00 R$ 5.999,99 20 %
R$ 6.000,00 R$ 9.999,99 15 %
Acima de R$ 10.000,00 10 % */

import { clear_screen, obter_numero, print } from "./utils/input.js";
import { calcularReajuste } from "./utils/math.js";

function main() {
    let somaSalariosAtuais = 0
    let somaSalariosReajustados = 0

    let salario = obter_numero('\nInforme o salário do funcionário (ou 0 para encerrar): ')
    
    while (salario !== 0) {
        clear_screen()
        const novoSalario = calcularReajuste(salario)

        somaSalariosAtuais += salario
        somaSalariosReajustados += novoSalario

        print(`\n|---------- DETALHAMENTO DE SALÁRIOS DOS FUNCIONÁRIOS ----------|`)
        print(`\n> Salário atual: R$ ${salario.toFixed(2)}`)
        print(`> Novo salário: R$ ${novoSalario.toFixed(2)}`)
        print(`> Soma dos salários atuais: R$ ${somaSalariosAtuais.toFixed(2)}`)
        print(`> Soma dos salários reajustados: R$ ${somaSalariosReajustados.toFixed(2)}`)
        print(`> Diferença entre as somas: R$ ${(somaSalariosReajustados - somaSalariosAtuais).toFixed(2)}`)
        print(`\n|---------------------------------------------------------------|`)

        salario = obter_numero('\nInforme o salário do próximo funcionário (ou 0 para encerrar): ')
    }
}

main()
