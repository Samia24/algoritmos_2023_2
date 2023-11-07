import { question } from "readline-sync";

export function obter_numero(descricao){
    return Number(question(descricao))
}

export function obter_numero_minimo(descricao, minimo){
    let numero = obter_numero(descricao)

    while (numero < minimo){
        console.log(`ERROR: Digite um número maior ou igual a ${minimo}`)
        numero = obter_numero(descricao)
    }
    return numero
}

export function obter_numero_maximo(descricao, maximo){
    let numero = obter_numero(descricao)

    while (numero > maximo){
        console.log(`ERROR: Digite um número menor ou igual a ${maximo}!\n`)
        numero = obter_numero(descricao)
    }
    return numero
}

export function obter_numero_na_faixa(descricao, minimo, maximo){
    let numero = obter_numero(descricao)

    while (numero < minimo || numero > maximo){
        console.log(`ERROR: Digite um número entre ${minimo} e ${maximo}!\n`)
        numero = obter_numero(descricao)
    }
    return numero
}

export function obter_numero_positivo(descricao){
    return obter_numero_minimo(descricao, 1)
}

export function obter_numero_negativo(descricao){
    return obter_numero_maximo(descricao, -1)
}

export function obter_texto(descricao){
    return question(descricao)
}

export function print(descricao){
    console.log(descricao)
}

export function print_inline(descricao){
    process.stdout.write(`${descricao}`)
}

export function clear_screen(){
    console.clear()
}

export function enter_to_continue(){
    obter_texto('<enter>... to continue')
    clear_screen()
}

