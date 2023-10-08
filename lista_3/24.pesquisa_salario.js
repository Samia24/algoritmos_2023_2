import { obter_numero_positivo, obter_numero, print, clear_screen } from "./utils/input.js";
import { verificar_salario, calcular_media, colocar_em_porcentagem, dinheiro } from "./utils/math.js";

function main(){
    print(`\n>>>>>>>>>> PROCESSO DE COLETA DE INFORMAÇÕES DOS HABITANTES <<<<<<<<<<`)
    const numHabitantes = obter_numero_positivo('\nInforme o número de habitantes: ')

    const result = verificar_salario(numHabitantes)
    let total_salario = result.totalSalario
    let total_filhos = result.totalFilhos
    let num_pessoas = result.numPessoas
    let num_pessoas_salario_ate_mil = result.numPessoasSalarioAteMil


    const mediaSalario = calcular_media(total_salario, num_pessoas)
    const mediaFilhos = calcular_media(total_filhos, num_pessoas)

    const percentualSalarioAteMil = colocar_em_porcentagem(num_pessoas_salario_ate_mil, num_pessoas)

    let opcao_escolhida = obter_numero(menu())

    resultado(opcao_escolhida, mediaSalario, mediaFilhos, percentualSalarioAteMil)

}

function menu(){
    const opcao = `
    \n>>>>>> DADOS DOS HABITANTES <<<<<<
     1 - Média de salário da população
     2 - Média de números de filhos
     3 - Percentual de pessoas com salário até R$ 1000,00
     0 - Sair
        
     OPÇÃO >>>> `
    
    return opcao
}

function resultado(opcao_escolhida, mediaSalario, mediaFilhos, percentualSalarioAteMil){
    while (opcao_escolhida > 0){
        if (opcao_escolhida === 1){
            clear_screen()
            print('\n=======================================================')
            print(`\n>>> Média de salário da população: R$ ${dinheiro(mediaSalario)}`)
            print('\n=======================================================\n')
        }else if(opcao_escolhida === 2){
            clear_screen()
            print('\n=======================================================')
            print(`\n>>> Média de número de filhos: ${dinheiro(mediaFilhos)}`)
            print('\n=======================================================\n')
        }else if(opcao_escolhida === 3){
            clear_screen()
            print('\n===============================================================')
            print(`\n>>> Percentual de pessoas com salário até R$ 1.000,00: ${dinheiro(percentualSalarioAteMil)}%`)
            print('\n===============================================================\n')
        }else{
            clear_screen()
            print('\n---- > Opção inválida! Informe novamente.')
        }
        opcao_escolhida = obter_numero(menu())
    }
    clear_screen()
    print('\n >>> Obrigado(a) por utilizar nossos serviços. \n      Volte sempre !! <<<')
}


main()