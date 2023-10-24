/*20. Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
· Distância percorrida desde a última medição;
· Quantidade de litros consumidos para percorrer a distância indicada.
Escreva um algoritmo que leia estas informações e escreva:
· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);
· o consumo em km/l do carro.*/

import { obter_numero_positivo, print } from "./utils/input.js"

function main(){
    let distancia_percorrida = 0
    let litros_consumidos = 0
    const capacidade_tanque = 50
    const distancia_total = 600

    calculos_viagem(distancia_percorrida, distancia_total, litros_consumidos, capacidade_tanque)
    
}

function calculos_viagem(distancia_percorrida, distancia_total, litros_consumidos, capacidade_tanque){
    while (distancia_percorrida < distancia_total && litros_consumidos < capacidade_tanque) {
        print('\n>>>>>>>>>> INFORME OS DADOS DA VIAGEM <<<<<<<<<<')
        const distancia_medida = obter_numero_positivo('Informe a distância percorrida (em km): ')
        const litros_medidos = obter_numero_positivo('Informe a quantidade de litros consumidos: ')
        
        distancia_percorrida += distancia_medida
        litros_consumidos += litros_medidos

        const consumoMedio = distancia_percorrida / litros_consumidos
        print('\n--------------------------------------------------')
        print(`> Consumo médio: ${consumoMedio.toFixed(2)} km/l`)
    }

    if (distancia_percorrida >= distancia_total) {
        print('\n>>> O carro chegou ao destino! <<<')
        print('--------------------------------------------------')

    }else if(litros_consumidos >= capacidade_tanque) {
        print('\n>>> O carro parou por falta de combustível. <<<')
        print('--------------------------------------------------')
    }

}

main()