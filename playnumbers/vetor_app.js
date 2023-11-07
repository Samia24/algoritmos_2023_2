import {readFileSync} from 'fs';
import { clear_screen, enter_to_continue, obter_numero, obter_numero_na_faixa, obter_numero_positivo, obter_texto, print } from "./utils.js";
import { mapear } from './vetor_utils.js';
import { exponenciacao, multiplicar_valores_vetor } from './vetor_funcionalidades.js';

export let min
export let max

export function inicializar_vetor_automatico(tamanho, min, max, vetor){
    for (let i = 0; i < tamanho; i++) {
        const valor = Math.floor(Math.random() * (max - min + 1)) + min
        vetor.push(valor)
  }
  return vetor
}

export function load_numeros(nome_arquivo){
    const arquivo = readFileSync(nome_arquivo, 'utf-8')
    const numeros = arquivo.split('\n')
    return numeros

}

export function inicializar_vetor_numerico(vetor){
    clear_screen()
    const opcao = obter_numero_positivo(`
    \n>> INICIANDO UM VETOR <<

    1. Inicializar com dados automáticos
    2. Informar valores manualmente
    3. Carregar valores de um arquivo

    >>>> Escolha uma opção: `)

    if(opcao >= 1 && opcao <= 3){
        if(opcao === 1 || opcao === 2){
            const tamanho = obter_numero_positivo('\n> Informe o tamanho do vetor: ')
            min = obter_numero('> Informe o valor mínimo: ')
            max = obter_numero('> Informe o valor máximo: ')
           

            if(opcao === 1){
                inicializar_vetor_automatico(tamanho, min, max, vetor)
                print('\nVetor inicializado com dados automáticos!')
    
            } else if (opcao === 2) {
    
                for (let i = 0; i < tamanho; i++) {
                    const valor = obter_numero_na_faixa(`Informe o valor para a posição ${i}: `, min, max)
                    vetor.push(valor)
                }

                print('\nVetor inicializado com valores informados manualmente!')   
            }

        } else{
            const nome_arquivo = obter_texto('\nInforme o nome do arquivo: ')
            vetor.push(load_numeros(nome_arquivo))
            print('\nVetor carregado do arquivo!')
            
        }
        enter_to_continue()
        
    }else{
        print('Opção inválida!')
            
        opcao = obter_numero_positivo(`
        >> Opções de inicialização <<
        1. Inicializar com dados automáticos
        2. Informar valores manualmente
        3. Carregar valores de um arquivo

        >>>> Escolha uma opção: `)
    }
}

export function adicionar_valores(vetor){
    let qtd_num_a_adicionar = obter_numero_positivo('\nInforme a quantidade de novos números que deseja adicionar ao vetor: ')
    for (let i = 0; i < qtd_num_a_adicionar; i++) {
        let numero = obter_numero(`\nDigite o ${i + 1}º a ser adicionado: `)

        while (numero < min || numero > max) {
            print('\n> Valor INVÁLIDO!')
            numero = obter_numero(`\nInforme um valor entre ${min} e ${max}. \nDigite o ${i + 1}º a ser adicionado: `)
        }
        vetor.push(numero)
    }
    return vetor
}

export function menu_regras(vetor){
    clear_screen()
    let opcao = obter_numero(`
    ---------- MENU REGRAS ----------
    1 - Multiplicar por um valor
    2 - Elevar a um valor (exponenciação)
    3 - Reduzir a uma fração (pedir  a fração fração ex: ⅕)
    4 - Substituir valores negativos por um número aleatórios da uma faixa(min, max)
    5 - Ordenar valores (reverse?)
    6 - Embaralhar valores
    0 - Voltar ao menu principal
    
    >>> Escolha uma opção: `)
        
    while(opcao >= 1 && opcao <= 6 || opcao > 6 || opcao < 0){
        if(opcao === 1){
            clear_screen()
            print('\n-------------------------------------------------------------')
            print(`\n> Antigo vetor: { ${vetor} }`)
            vetor = (multiplicar_valores_vetor(vetor))
            print(`\n> Novo vetor: { ${vetor} }`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcao === 2){
            clear_screen()
            print('\n-------------------------------------------------------------')
            print(`\n> Antigo vetor: { ${vetor} }`)
            vetor = (exponenciacao(vetor))
            print(`\n> Novo vetor: { ${vetor} }`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcao === 3){
            clear_screen()
            print('\n-------------------------------------------------------------')
            print(`\n> Antigo vetor: { ${vetor} }`)
            //vetor = (reduzir_valores_a_fracoes(vetor))
            print(`\n> Novo vetor: { ${vetor} }`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcao === 4){
            clear_screen()
            print('\n-------------------------------------------------------------')
            print(`\n> Antigo vetor: { ${vetor} }`)
            vetor = (reduzir_valores_a_fracoes(vetor))
            print(`\n> Novo vetor: { ${vetor} }`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcao === 5){
            clear_screen()
            print('\n-------------------------------------------------------------')
            print(`\n> Antigo vetor: { ${vetor} }`)
            vetor = (reduzir_valores_a_fracoes(vetor))
            print(`\n> Novo vetor: { ${vetor} }`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }else if(opcao === 6){
            clear_screen()
            print('\n-------------------------------------------------------------')
            print(`\n> Antigo vetor: { ${vetor} }`)
            vetor = (reduzir_valores_a_fracoes(vetor))
            print(`\n> Novo vetor: { ${vetor} }`)
            print('\n-------------------------------------------------------------\n')
            enter_to_continue()
        }

        else if(opcao > 6 || opcao < 0){
            print('\n*** Opção INVÁLIDA! ***')
        }
        opcao = obter_numero(`
        ---------- MENU REGRAS ----------
        1 - Multiplicar por um valor
        2 - Elevar a um valor (exponenciação)
        3 - Reduzir a uma fração (pedir  a fração fração ex: ⅕)
        4 - Substituir valores negativos por um número aleatórios da uma faixa(min, max)
        5 - Ordenar valores (reverse?)
        6 - Embaralhar valores
        0 - Voltar ao menu principal
        
        >>> Escolha uma opção: `)
    
    }
    print('\n*** Voltando ao Menu Principal ***\n')
    return vetor
}