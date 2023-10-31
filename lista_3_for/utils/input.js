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
    clear_screen()
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

export function menu() {
    const opcao = `
      \n>>>>>> DADOS DOS HABITANTES <<<<<<
       1 - Média de salário da população
       2 - Média de números de filhos
       3 - Percentual de pessoas com salário até R$ 1000,00
       0 - Sair.
          
       OPÇÃO >>>> `
  
    return opcao
}

export function urna(){
    const tela = `
    |---------- URNA ----------|
     1 - Candidato 01
     2 - Candidato 02
     3 - Candidato 03
     9 - Nulo
     0 - Branco

     VOTO >>>>
    `
    return tela
}

export function mostrar_votacoes(votos_1, votos_2, votos_3, nulos, brancos) {
    print(`
    |---------- RESULTADO ----------|
     > Candidato 1: ${votos_1}
     > Candidato 2: ${votos_2}
     > Candidato 3: ${votos_3}
     
     . Brancos: ${brancos}
     . Nulos: ${nulos}
    `
    )
}

  