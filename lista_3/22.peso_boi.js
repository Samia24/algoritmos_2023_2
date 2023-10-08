import { obter_numero_positivo, obter_numero, print, clear_screen } from "./utils/input.js";
import { ficha_boi } from "./utils/math.js";

function main(){
    console.log('\n>>>>>>>>>> FICHAS DE CONTROLE DA BOIADA <<<<<<<<<<')
    const fichas = obter_numero_positivo('Informe a quantidade de fichas: ')
    
    let result = ficha_boi(fichas)
    let nome_maior = result.nome_maior_boi
    let id_maior = result.id_maior_boi
    let peso_mai = result.peso_maior
    let nome_menor = result.nome_menor_boi
    let id_menor = result.id_menor_boi
    let peso_men = result.peso_menor
    
    clear_screen()
    let escolha = obter_numero(menu())
    
    clear_screen()
    resultado(escolha, nome_maior, id_maior, peso_mai, nome_menor, id_menor, peso_men)

}

function menu(){
   const opcao = `
    \n>>>>>> FICHAS DE CONTROLE DA BOIADA <<<<<<
     1 - Menor boi (kg)
     2 - Maior boi (kg)
     0 - Sair
        
     OPÇÃO >>>> `
    
    return opcao
}

function resultado(escolha, nome_maior, id_maior, peso_mai, nome_menor, id_menor, peso_men){
    while (escolha > 0){
        if (escolha === 1){
            clear_screen()
            print('\n======== FICHA DO BOI MENOR ========')
            print(`\n>> Número ID: ${id_menor} \n>> Nome: ${nome_menor} \n>> Peso: ${peso_men}kg`)
            print('===================================')
        }else if(escolha === 2){
            clear_screen()
            print('\n======== FICHA DO BOI MAIOR ========')
            print(`\n>> Número ID: ${id_maior} \n>> Nome: ${nome_maior} \n>> Peso: ${peso_mai}kg`)
            print('===================================')
        }else{
            clear_screen()
            print('\n---- > Opção inválida! Informe novamente.')
        }
        escolha = obter_numero(menu())
    }
    print('\n >>> Obrigado(a) por utilizar nossos serviços. \n      Volte sempre !! <<<')
}

main()