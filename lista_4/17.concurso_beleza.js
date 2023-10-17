/*17. Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').*/

import { print } from "./utils/input.js";
import { encontrar_candidatas } from "./utils/math.js";


function main() {
    const {
        nome_mais_alta,
        nome_mais_baixa,
        nome_mais_magra,
        nome_mais_gorda,
        altura_mais_alta,
        altura_mais_baixa,
        peso_mais_magra,
        peso_mais_gorda
    } = encontrar_candidatas()

    if (!nome_mais_alta || !nome_mais_baixa || !nome_mais_magra || !nome_mais_gorda) {
        print('Nenhum dado de candidata fornecido.')
    } else {
        print('\n=========== DADOS DAS CANDIDATAS ===========')
        print(`Candidata mais alta: ${nome_mais_alta}, Altura: ${altura_mais_alta} cm`)
        print(`Candidata mais baixa: ${nome_mais_baixa}, Altura: ${altura_mais_baixa} cm`)
        print(`Candidata mais magra: ${nome_mais_magra}, Peso: ${peso_mais_magra} kg`)
        print(`Candidata mais gorda: ${nome_mais_gorda}, Peso: ${peso_mais_gorda} kg`)
        print('============================================\n')
    }
}



main()
