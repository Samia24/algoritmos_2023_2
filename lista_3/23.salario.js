import { obter_numero_positivo, obter_texto, print } from "./utils/input.js";
import { dinheiro, porcentagem, calcular_salario } from "./utils/math.js";

function main(){
    print('\n|---------- EMPRESA ----------|')
    let qtd_funcionarios = obter_numero_positivo('\nQuantidade de funcionários: ')

    while(qtd_funcionarios > 0){
        const codigo = obter_texto('Código: ')
        const horas = obter_numero_positivo('Horas: ')
        const dependentes = obter_numero_positivo('Dependentes: ')

        const salario_bruto = calcular_salario(horas, dependentes)
        const inss = porcentagem(salario_bruto, 8.5)
        const ir = porcentagem(salario_bruto, 5)
        const descontos = inss + ir

        const salario_liquido = salario_bruto - descontos

        const contra_cheque = `
        |---------- CONTRACHEQUE ----------|
        | GANHOS: 
        | - Salário: R$ ${dinheiro(salario_bruto)}
        | DESCONTOS: 
        | - INSS: R$ ${dinheiro(inss)}
        | - IR: R$ ${dinheiro(ir)}
        ------------------------------------
        | - LÍQUIDO: R$ ${dinheiro(salario_liquido)}
        ------------------------------------

        `
        print(contra_cheque)
        qtd_funcionarios--
    }

}
main()