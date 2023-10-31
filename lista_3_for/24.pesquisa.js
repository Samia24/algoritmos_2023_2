/*24. A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00.*/

import { obter_numero_positivo, obter_numero, print, menu } from "./utils/input.js"
import { verificar_salario, calcular_media, colocar_em_porcentagem, resultado } from "./utils/math.js"

function main() {
  print(`\n>>>>>>>>>> PROCESSO DE COLETA DE INFORMAÇÕES DOS HABITANTES <<<<<<<<<<`)
  const numHabitantes = obter_numero_positivo('\nInforme o número de habitantes: ')

  const result = verificar_salario(numHabitantes)
  let total_salario = result.totalSalario
  let total_filhos = result.totalFilhos
  let num_pessoas = result.numPessoas
  let num_pessoas_salario_ate_mil = result.numPessoasSalarioAteMil

  const mediaSalario = calcular_media(total_salario, num_pessoas)
  const mediaFilhos = calcular_media(total_filhos, num_pessoas)
  const percentualSalarioAteMil = colocar_em_porcentagem(num_pessoas_salario_ate_mil, num_pessoas)

  let opcao_escolhida = obter_numero(menu())

  resultado(opcao_escolhida, mediaSalario, mediaFilhos, percentualSalarioAteMil)
}


main()
