/*27. Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
· Média de idade das mulheres;
· Média de idade dos homens;
· O percentual de homens solteiros;
· O percentual de mulheres solteiras;
· A quantidade de mulheres divorciadas acima de 30 anos.*/

import { clear_screen, print } from "./utils/input.js";
import { calcular_estatisticas_pessoas } from "./utils/math.js";

function main(){

    const resultado = calcular_estatisticas_pessoas()
    
    const media_idade_homens = resultado.total_idade_homens / resultado.total_pessoas
    const media_idade_mulheres = resultado.total_idade_mulheres / resultado.total_pessoas
    const percentual_homens_solteiros = (resultado.total_homens_solteiros / resultado.total_pessoas) * 100
    const percentual_mulheres_solteiras = (resultado.total_mulheres_solteiras / resultado.total_pessoas) * 100
    
    clear_screen()
    print(`\n|-------------- DADOS DA PESQUISA --------------|`)
    print(`Média de idade das mulheres: ${media_idade_mulheres.toFixed(2)}`)
    print(`Média de idade dos homens: ${media_idade_homens.toFixed(2)}`)
    print(`Percentual de homens solteiros: ${percentual_homens_solteiros.toFixed(2)}%`)
    print(`Percentual de mulheres solteiras: ${percentual_mulheres_solteiras.toFixed(2)}%`)
    print(`Quantidade de mulheres divorciadas acima de 30 anos: ${resultado.total_mulheres_divorciadas_acima_30}`)
    print('--------------------------------------------------\n')
}

main()

