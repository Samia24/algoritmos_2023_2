import { question } from "readline-sync"

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

export function obter_numero_positivo(descricao){
    return obter_numero_minimo(descricao, 1)
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
    console.log('<enter>... to continue')
}

export function menu_boi(){
    const opcao = `
     \n>>>>>> FICHAS DE CONTROLE DA BOIADA <<<<<<
      1 - Menor boi (kg)
      2 - Maior boi (kg)
      0 - Sair
         
      OPÇÃO >>>> `
     
     return opcao
 }
 