import {readFileSync} from 'fs'
import {enter_to_continue, obter_numero, obter_numero_positivo, obter_texto, print} from '../lista4_while_js/utils/input.js'

function main(){
    const palavras = load_palavras()
    let opcao = obter_numero(menu(palavras.length))
   

    while(opcao !== 0){
        if (opcao === 1){
            mostrar_palavras_20_letras(palavras)

        }else if( opcao === 2){
            nao_contem_letra_e(palavras)
            
        }else if(opcao === 3){
            let letras_proibidas = []
            const qtd_letras_proibidas = obter_numero_positivo('\n>> Informe a quantidade de letras proibidas: ')
            
            for (let i = 1; i <= qtd_letras_proibidas; i++) {
                let letra_proibida = obter_texto(`\n> Informe a ${i}ª letra proibida: `)
                letras_proibidas.push(letra_proibida)
            }

            const qtd_proibidas = nao_contem_letra_proibida(palavras, letras_proibidas)
            print('\n===========================================================')
            print(`->> Letras proibidas: ${letras_proibidas}`)
            print(`>> Quantidade de palavras sem letras proibidas: ${qtd_proibidas}.`)
            print('===========================================================')

        }else if(opcao === 4){
            let letras_permitidas = []
            const qtd_letras_permitidas = obter_numero_positivo('\n>> Informe a quantidade de letras permitidas: ')
            
            for (let i = 1; i <= qtd_letras_permitidas; i++) {
                let letra_permitida = obter_texto(`\n> Informe a ${i}ª letra permitida: `)
                letras_permitidas.push(letra_permitida)
            }

            const qtd_permitidas = contem_letra_permitida(palavras, letras_permitidas)
            print('\n===========================================================')
            print(`->> Letras permitidas: ${letras_permitidas}`)
            print(`>> Quantidade de palavras com letras permitidas: ${qtd_permitidas}.`)
            print('===========================================================')

        }else if(opcao === 5){
            let letras_permitidas = []
            const qtd_letras_permitidas = obter_numero_positivo('\n>> Informe a quantidade de letras permitidas: ')

            for (let i = 1; i <= qtd_letras_permitidas; i++) {
                let letra_permitida = obter_texto(`\n> Informe a ${i}ª letra permitida: `)
                letras_permitidas.push(letra_permitida)
            }

            const palavras_com_letras_permitidas = verificar_palavras_com_letras_permitidas(palavras, letras_permitidas)

            print('\n===========================================================')
            print(`->> Letras à verificar: ${letras_permitidas}`)
            print(`\n>> Palavras que contêm todas essas letras :`)
            for (let palavra of palavras_com_letras_permitidas) {
                print(palavra)
            }
            print(`\n>> Quantidade de palavras com todas as letras permitidas: ${palavras_com_letras_permitidas.length}.`)
            print('===========================================================')

        }else if(opcao === 6){
            const palavras_em_ordem = letras_em_ordem_alfabetica(palavras)

            print('Palavras em ordem alfabética: ')
            for (let palavra of palavras_em_ordem) {
                print(palavra)
            }
        }
        print('\n')
        opcao = obter_numero(menu(palavras.length))
    }
    

}

function menu(qtd_palavras){
    return `
    ********** WORDPLAY **********
    ${qtd_palavras} palavras
    ------------------------------
    1 - Palavras com mais de 20 letras
    2 - Palavras que não contém a letra "e"
    3 - Palavras sem as letras informadas pelo usuário
    4 - Palavras com alguma das letras de uma lista informada pelo usuário
    5 - Palavras que contém todas as letras de uma lista informada pelo usuário
    6 - Palavras com letras em ordem alfabética

    0- Sair
    >>>  `
}

function load_palavras(){
    const arquivo = readFileSync('palavras.txt', 'utf-8')
    const palavras = arquivo.split('\n')
    return palavras

}

//9.1

function mostrar_palavras_20_letras(palavras){
    for(let palavra of palavras){
        if(palavra.length > 20){
            print(palavra)
        }
    }
}

//9.2

function nao_contem_letra_e(palavras){
    let palavras_sem_e = ""
    let qtd_palavras_sem_e = 0
    for (let palavra of palavras) {
        if (!contem_letra_e(palavra)) {
            palavras_sem_e += `${palavra}\n`
            qtd_palavras_sem_e++
        }
    }
    print('Palavras sem a letra "e": ')
    print(palavras_sem_e)
    const qtd_sem_e = ((qtd_palavras_sem_e) / (palavras.length)) * 100
    print('\n============================================================================================')
    print(`>> Percentual de ${qtd_sem_e.toFixed(2)}% de ${qtd_palavras_sem_e} palavras sem a letra "e".`)
    print('==============================================================================================')

}

function contem_letra_e(palavra){
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === 'e') {
            return true
        }
    }
    return false
}

//9.3

function contem_letra(palavra, letras_proibidas){
    for (let i = 0; i < letras_proibidas.length; i++) {
        for (let j = 0; j < palavra.length; j++) {
            if (palavra[j] === letras_proibidas[i]) {
                return true;
            }
        }
    }
    return false;
}

function nao_contem_letra_proibida(palavras, letras_proibidas){
    let palavras_sem_letras_proibidas = ""
    let qtd_palavras_sem_letras_proibidas = 0
    for (let palavra of palavras) {
        if (!contem_letra(palavra, letras_proibidas)) {
            palavras_sem_letras_proibidas += `${palavra}\n`
            qtd_palavras_sem_letras_proibidas++
        }
    }
    print(palavras_sem_letras_proibidas)
    return qtd_palavras_sem_letras_proibidas
}

//9.4

function contem_letra_permitida(palavras, letras_permitidas){
    let palavras_com_letras_permitidas = ""
    let qtd_palavras_com_letras_permitidas = 0
    for (let palavra of palavras) {
        if (contem_letra(palavra, letras_permitidas)) {
            palavras_com_letras_permitidas += `${palavra}\n`
            qtd_palavras_com_letras_permitidas++
        }
    }
    print(palavras_com_letras_permitidas)
    return qtd_palavras_com_letras_permitidas
}

//9.5

function contem_todas_letras(palavra, letras_permitidas) {
    for (let letra of letras_permitidas) {
        let encontrou = false
        for (let i = 0; i < palavra.length && !encontrou; i++) {
            if (palavra[i] === letra) {
                encontrou = true
            }
        }
        if (!encontrou) {
            return false 
        }
    }
    return true 
}

function verificar_palavras_com_letras_permitidas(palavras, letras_permitidas) {
    let palavras_com_letras_permitidas = []

    for (let palavra of palavras) {
        if (contem_todas_letras(palavra, letras_permitidas)) {
            palavras_com_letras_permitidas.push(palavra)
        }
    }
    return palavras_com_letras_permitidas
}

//9.6

function letras_em_ordem_alfabetica(palavras) {
    const palavras_em_ordem = []

    for (let palavra of palavras) {
        let em_ordem = true
        for (let i = 0; i < palavra.length - 1 && em_ordem; i++) {
            if (palavra[i] > palavra[i + 1]) {
                em_ordem = false
            }
        }
        if (em_ordem) {
            palavras_em_ordem.push(palavra)
        }
    }
    return palavras_em_ordem
}


main()