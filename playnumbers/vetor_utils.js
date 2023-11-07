import { clear_screen, enter_to_continue, obter_numero, print } from "./utils.js"
import { min, max } from "./vetor_app.js"


export function mostrar_valores(vetor){
    clear_screen()
    print('\n***********************************************\n')
    for(let i = 0; i < vetor.length; i++){
        print(`Valor na posição ${i}: ${vetor[i]}`)
    }
    print('\n***********************************************\n')
    enter_to_continue()
}

export function resetar_vetor(vetor){
    clear_screen()
    for(let i = 0; i < vetor.length; i++){
        vetor.splice(i)
    }
    print('\n>>> Vetor resetado com sucesso ! <<<')
    enter_to_continue()
}

export function qtd_itens_vetor(vetor){
    return vetor.length
}

export function remover_item_valor(vetor){
    let item = obter_numero('Informe o número a ser removido do vetor: ');
    let encontrado = false

    while (!encontrado) {
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] === item) {
                vetor.splice(i, 1)
                encontrado = true
                console.log(`\n> Número ${item} removido!`)
            }
        }
        if (!encontrado) {
            console.log(`\n> Número ${item} não encontrado no vetor!`)
            item = obter_numero('Informe outro número a ser removido do vetor: ')
        }
    }

    return vetor
}

export function remover_item_por_indice(vetor) {
    let indice = obter_numero('Informe o índice do item a ser removido: ')

    while (indice < 0 || indice >= vetor.length) {
        print(`\n> Índice inválido. Certifique-se de informar um índice válido!`)
        indice = obter_numero('Informe o índice do item a ser removido: ')
    }

    const item_removido = vetor.splice(indice, 1)
    print(`\n> Item no índice ${indice} (${item_removido}) removido do vetor!`)

    return vetor
}

export function substituir_item_por_indice(vetor) {
    let indice = obter_numero('Informe o índice do item a ser substituído: ')

    while (indice < 0 || indice >= vetor.length) {
        print(`\n> Índice inválido. Certifique-se de informar um índice válido!`)
        indice = obter_numero('Informe o índice do item a ser substituído: ')
    }

    const valor_antigo = vetor[indice]
    let novo_valor = obter_numero('Informe o novo valor: ')

    while (novo_valor < min || novo_valor > max) {
        print(`\n> Valor fora do intervalo. Certifique-se de informar um valor entre ${min} e ${max}.`)
        novo_valor = obter_numero('Informe o novo valor: ')
    }

    vetor[indice] = novo_valor

    print(`\n> Valor ${valor_antigo} no índice ${indice} substituído por ${novo_valor}!`)

    return vetor
}


export function mapear(funcao, vetor) {
    let resultado = []
    for (var i = 0; i < vetor.length; i++) {
      resultado.push(funcao(vetor[i]))
    }
    return resultado
}