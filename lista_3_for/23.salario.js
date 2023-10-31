/*23. Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.*/

import { obter_numero_positivo, print } from "./utils/input.js"
import { contracheque } from "./utils/math.js"

function main() {
  print('\n|---------- EMPRESA ----------|')
  let qtd_funcionarios = obter_numero_positivo('\nQuantidade de funcionários: ')
  contracheque(qtd_funcionarios)
}

main()
