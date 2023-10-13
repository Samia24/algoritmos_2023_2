/*11. Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:

Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3) / 10

Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma.*/

import { print } from "./utils/input.js"
import { resultado_final } from "./utils/math.js"

function main(){
    
    const resultado = resultado_final()
    
    let num_total_alunos = resultado.total_alunos
    let aprovados = resultado.total_aprovados
    let reprovados = resultado.total_reprovados

    print('\n|---------- SITUAÇÃO GERAL DOS ALUNOS ----------|')
    print(`  Total de alunos na turma: ${num_total_alunos}`)
    print(`  Total de alunos APROVADOS: ${aprovados}`)
    print(`  Total de alunos REPROVADOS: ${reprovados}`)
    print(`|-----------------------------------------------|\n`)
    
    

}

main()