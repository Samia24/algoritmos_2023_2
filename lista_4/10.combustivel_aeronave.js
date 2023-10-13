/*10. Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios:
· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
passageiros;
· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
estimado de 10kg.
O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
mensagem indicando a liberação da decolagem ou não.*/

import { obter_numero_positivo, print, obter_numero } from "./utils/input.js"
import { calcular_carga, calcular_peso_passageiros } from "./utils/math.js"

function main(){
    print(`\n========== INFORMAÇÕES SOBRE A CARGA ==========`)
    const num_containers = obter_numero_positivo('Digite a quantidade de containers: ')
    const peso_carga = calcular_carga(num_containers)
    

    print(`\n========== INFORMAÇÕES SOBRE OS PASSAGEIROS ==========`)
    let numero_bilhete = obter_numero('Informe o número do bilhete (0 para sair): ')
    const resultado = calcular_peso_passageiros(numero_bilhete)
    let quant_passageiros = resultado.qtd_passageiros
    let quant_bagagens = resultado.qtd_bagagens
    let peso_total_passag = resultado.peso_total_passageiros

    const peso_combustivel = 500000 - peso_carga - peso_total_passag
    const qtd_combustivel = peso_combustivel / 1.5

    print(`\n======================= ANÁLISE DE VÔO ======================`)
    print(`     > Quantidade de passageiros: ${quant_passageiros}
     > Quantidade de bagagens: ${quant_bagagens}
     > Peso total de passageiros: ${peso_total_passag} kg
     > Peso total da carga: ${peso_carga} kg
     > Quantidade de combustível: ${qtd_combustivel.toFixed(2)} L`)
    print(`============================================================`)

    if (qtd_combustivel >= 10000){
        print(`\n  >>> DECOLAGEM AUTORIZADA <<<\n`)
    }else{
        print(`\n  >>> DECOLAGEM NÃO AUTORIZADA <<<\n`)
        print('Quantidade de combustível insuficiente !')
    }
}


main()