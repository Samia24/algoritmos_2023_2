import { obter_numero_positivo, print, print_inline, clear_screen, obter_numero_minimo, obter_numero } from "./input.js"

export function divisores_do_numero(){
    let num = 1
    let contador = 1
    while(num > 0){
        print('\n** Digite 0 para sair !**')
        num = obter_numero_minimo(`\n>>> Digite o ${contador}º número: `, 0)
        let divisores = 0
        let cont = 1
        
        clear_screen()

        if(num === 0){
            print('\n >>> Obrigado(a) por utilizar nossa aplicação !')
        }else{
            print('\n|----- LISTA DE DIVISORES -----|')
            print_inline(`  >> Número: ${num}\n  >> Divisores de ${num}: `)
            while(cont <= num){
                if(num % cont === 0){
                    divisores = cont
                    cont++
                    print_inline(`${divisores}`)
                    print_inline(' ')
                }else{
                    cont++
                }
                
                
            }
            print('\n|------------------------------|')
            contador++
        }
    }
}

export function calcularMDC(num1, num2) {
    while (num2 !== 0) {
        let temp = num2
        num2 = num1 % num2
        num1 = temp
    }
    return num1
}

export function calcularMMC(num1, num2, mdc) {
    return (num1 * num2) / mdc
}

export function divisao_sucessiva(num){
    while(num >= 1){
        num = num / 2
    }
    return num
}

export function divisao_x_n(x, n){
    while (n <= 2) {
        print('\nO valor de N deve ser maior que 2 !');
        n = obter_numero_positivo('Informe novamente o valor de N: ');
    }
    print(`\n======================================================`)
    print(`>> O resultado das divisões de X / N é:  `)

    while(n > 2){
        x = x / n
        n--
        print_inline(` -> ${x} `)
    }
    print(`\n======================================================\n`)
    
}

export function contar_digitos(numero){
    if (numero < 0) {
        numero = -numero
    }

    let contadorDeDigitos = 0

    if (numero === 0) {
        contadorDeDigitos = 1
    } else {
        while (numero > 0) {
            numero = Math.floor(numero / 10)
            contadorDeDigitos++
        }
    }
    return contadorDeDigitos
}

export function lista_numeros(primeiroNumero){
    let numero 
    let encontrado = false

    while (encontrado === false) {
        numero = obter_numero('Digite um número da lista (ou o mesmo número para encerrar): ')

        if (numero === primeiroNumero) {
            encontrado = true;
            return numero
        }
    }
}

export function encontrar_soma_igual_x(x){
    let cont = 1
    let numero_anterior = obter_numero_positivo(`Digite o ${cont}º número: `)
    cont++
    let numero_atual
    let continuar = true

    while(continuar){
        numero_atual = obter_numero_positivo(`Digite o ${cont}º número: `)
    
        if(numero_atual + numero_anterior === x){
            print(`\n===========================================================================`)
            print(`>> A soma dos números: ${numero_anterior} + ${numero_atual} é igual ao valor de X: ${x}.`)
            print(`===========================================================================\n`)
            continuar = false
        }else{
        numero_anterior = numero_atual
        cont++
        }
    }
}

export function calcular_carga(num_containers){
    let contador = 1
    let soma_peso_containers = 0
    while(contador <= num_containers){
        let peso_containers = obter_numero_positivo(`Peso do ${contador}º container (kg): `)
        soma_peso_containers += peso_containers
        contador++
    }
    return soma_peso_containers
}

export function calcular_peso_passageiros(numero_bilhete){
    let qtd_passageiros = 0
    let qtd_bagagens = 0
    let peso_total_passageiros = 0

    if(numero_bilhete !== 0){
        qtd_passageiros += 1
    }

    while(numero_bilhete !== 0){
        qtd_passageiros++
        let qtd_bagagens_por_passageiro = obter_numero('Informe a quantidade de bagagens: ')
        qtd_bagagens += qtd_bagagens_por_passageiro
        peso_total_passageiros += (70 + 10 * qtd_bagagens_por_passageiro)
        numero_bilhete = obter_numero('Informe o número do bilhete (0 para sair): ')
    }

    return {qtd_passageiros, qtd_bagagens, peso_total_passageiros}
}

export function resultado_final(){
    let nota1 = 0
    let nota2 = 0
    let nota3 = 0
    let matricula = 0
    
    let total_aprovados = 0
    let total_reprovados = 0
    let total_alunos = 0
    
    let contador = 1
    print(`\n========== INFORMAÇÕES DO ${contador}º ALUNO ==========`)
    matricula = obter_numero_minimo('Número de matrícula: ', 0)
    while(matricula !== 0){
        nota1 = obter_numero_positivo(`Nota 1: `)
        nota2 = obter_numero_positivo(`Nota 2: `)
        nota3 = obter_numero_positivo(`Nota 3: `)
        
        let media_Final = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10

        if(media_Final >= 7){
            print('\n----------------------------------')
            print(`Média final: ${media_Final}`)
            print(`>>> APROVADO <<<`)
            print('----------------------------------')
            total_aprovados++
            total_alunos++
        }else{
            print('\n----------------------------------')
            print(`Média final: ${media_Final}`)
            print(`>>> REPROVADO <<<`)
            print('----------------------------------')
            total_reprovados++
            total_alunos++
        }
        contador++
        print(`========== INFORMAÇÕES DO ${contador}º ALUNO ==========`)
        matricula = obter_numero_minimo('Número de matrícula: ', 0)
    }
    clear_screen()
    return {total_alunos, total_aprovados, total_reprovados}
}