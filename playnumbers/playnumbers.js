import { enter_to_continue, obter_numero_positivo, print, clear_screen, obter_numero } from "./utils.js"
import { adicionar_valores, inicializar_vetor_numerico, menu_regras } from "./vetor_app.js"
import { media, menor_maior, multiplicar_valores_vetor, num_negativos, num_positivos, somatorio } from "./vetor_funcionalidades.js"
import { mapear, mostrar_valores, qtd_itens_vetor, remover_item_valor, resetar_vetor, remover_item_por_indice, substituir_item_por_indice } from "./vetor_utils.js"

let vetor = []

function main(){
    menu()
    
}

function menu(){
    let opcoes = obter_numero_positivo(`
    |========== MENU ==========|

    1 - Inicializar Vetor Numérico
    2 - Mostrar todos os valores
    3 - Resetar Vetor (pedir valor número padrão)
    4 - Ver quantidade de itens no vetor
    5 - Ver Menor e Maior valores e suas posições
    6 - Somatório dos Valores	
    7 - Média dos Valores
    8 - Mostrar Valores Positivos e Quantidade
    9 - Mostrar Valores Negativos e Suas Quantidades
    10 - Atualizar todos os valores utilizando uma das regras
    11 - Adicionar Novos Valores
    12 - Remover Itens por Valor exato
    13 - Remover por Posição
    14 - Editar valor específico por Posição
    15 - Salvar valores em arquivo (https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/)
    16 - Sair (salvar valores automaticamente ao sair)
    
    >> Digite a opção: `)
    print('\n    |=========================|')
    

    while(opcoes >= 1 && opcoes < 16 || opcoes > 16){
        if (opcoes === 1){
            inicializar_vetor_numerico(vetor)
        }else if(opcoes === 2){
            mostrar_valores(vetor)
        }else if(opcoes === 3){
            resetar_vetor(vetor)
        }else if(opcoes === 4){
            clear_screen()
            print('\n-------------------------------------------------------------')
            print(`\n>>> Quantidade de itens no vetor: ${qtd_itens_vetor(vetor)}`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcoes === 5){
            clear_screen()
            print('\n-------------------------------------------------------------')
            const resultado = menor_maior(vetor)
            print(`\n>>> Menor valor: ${resultado.menor}`)
            print(`\n>>> Maior valor: ${resultado.maior}`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcoes === 6){
            clear_screen()
            print('\n-------------------------------------------------------------')
            print(`\n>>> Somatório dos valores do vetor { ${vetor} }: ${somatorio(vetor)}`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcoes === 7){
            clear_screen()
            print('\n-------------------------------------------------------------')
            print(`\n>>> Média dos valores do vetor { ${vetor} }: ${media(vetor).toFixed(1)}`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcoes === 8){
            clear_screen()
            print('\n-------------------------------------------------------------')
            const resultado = num_positivos(vetor)
            if(resultado.length > 0){
                print(`\n>>> Valores positivos do vetor: { ${resultado} }`)
                print(`\n>>> Quantidade de valores positivos do vetor: { ${resultado.length} }`)
            }else{
                print(`\n>>> Não há valores positivos no vetor! <<<`)
            }
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcoes === 9){
            clear_screen()
            print('\n-------------------------------------------------------------')
            const resultado = num_negativos(vetor)
            if(resultado.length > 0){
                print(`\n>>> Valores negativos do vetor: { ${resultado} }`)
                print(`\n>>> Quantidade de valores negativos do vetor: { ${resultado.length} }`)
            }else{
                print(`\n>>> Não há valores negativos no vetor! <<<`)
            }
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcoes === 10){
            vetor = menu_regras(vetor)
            enter_to_continue()      
        }else if(opcoes === 11){
            vetor = adicionar_valores(vetor)
            enter_to_continue()
        }else if(opcoes === 12){
            vetor = remover_item_valor(vetor)
            enter_to_continue()
        }else if(opcoes === 13){
            vetor = remover_item_por_indice(vetor)
            enter_to_continue()
        }else if(opcoes === 14){
            vetor = substituir_item_por_indice(vetor)
            enter_to_continue()
        }else if(opcoes === 15){
            
        }
        else if(opcoes > 16){
            print('\n*** Opção INVÁLIDA! ***')
        }

        opcoes = obter_numero_positivo(`
        |========== MENU ==========|
    
        1 - Inicializar Vetor Numérico
        2 - Mostrar todos os valores
        3 - Resetar Vetor (pedir valor número padrão)
        4 - Ver quantidade de itens no vetor
        5 - Ver Menor e Maior valores e suas posições
        6 - Somatório dos Valores	
        7 - Média dos Valores
        8 - Mostrar Valores Positivos e Quantidade
        9 - Mostrar Valores Negativos e Suas Quantidades
        10 - Atualizar todos os valores utilizando uma das regras
        11 - Adicionar Novos Valores
        12 - Remover Itens por Valor exato
        13 - Remover por Posição
        14 - Editar valor específico por Posição
        15 - Salvar valores em arquivo (https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/)
        16 - Sair (salvar valores automaticamente ao sair)
        
        >> Digite a opção: `)
        
    }
    clear_screen()
    print(`\n*** Aplicação Encerrada! ***`)
    
}

main()