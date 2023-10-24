/*19. Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu
peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
boi mais magro e do boi mais gordo. (Flag: n.o identificação=0)*/

import { obter_numero_positivo, obter_numero, clear_screen, menu_boi } from "./utils/input.js";
import { ficha_boi, preencher_fichas } from "./utils/math.js";

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
    let escolha = obter_numero(menu_boi())
    
    clear_screen()
    preencher_fichas(escolha, nome_maior, id_maior, peso_mai, nome_menor, id_menor, peso_men)

}

main()