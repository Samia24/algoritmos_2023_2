import { obter_numero_positivo, print, print_inline, clear_screen, obter_numero_minimo, obter_numero, obter_texto } from "./input.js"

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

export function fim_partida(jogador1, jogador2, diferenca){
    if((jogador1 >= 21 || jogador2 >= 21) && diferenca >= 2){
        if(jogador1 > jogador2){
            print(`VENCEDOR da partida: Jogador 1 !`)
        }else if(jogador2 > jogador1){
            print(`VENCEDOR da partida: Jogador 2 !`)
        }
        return true
    }
    return false
}

export function calcularReajuste(salario) {
    if (salario <= 2999.99) {
        return salario * 1.25
    } else if (salario >= 3000 && salario <= 5999.99) {
        return salario * 1.20
    } else if (salario >= 6000 && salario <= 9999.99) {
        return salario * 1.15
    } else {
        return salario * 1.10
    }
}

export function decimal_Hexadecimal(decimal) {
    let hexadecimal = ''
    const caracteres_hexadecimais = '0123456789ABCDEF' 

    let temp_decimal = decimal

    while (temp_decimal > 0) {
        const resto = temp_decimal % 16
        hexadecimal = caracteres_hexadecimais[resto] + hexadecimal
        temp_decimal = (temp_decimal - resto) / 16
    }

    return hexadecimal
}

export function decimal_Binario(decimal) {
    let binario = ''
    let temp_decimal = decimal
    let base = 128

    while (base >= 1) {
        let bit = 0

        if (temp_decimal >= base) {
            bit = 1;
            temp_decimal -= base
        }

        binario += bit
        base /= 2
    }

    return binario
}

export function calcular_dias_uteis(saldo_inicial, pagamento_diario, taxa_juro_diaria) {
    let saldo_atual = saldo_inicial
    let dias_uteis = 0

    while (saldo_atual > 0) {
        saldo_atual -= pagamento_diario
        saldo_atual += saldo_atual * taxa_juro_diaria

        if (saldo_atual > 0) {
            dias_uteis++
        }
    }

    return dias_uteis
}

export function encontrar_candidatas() {
    let nome_mais_alta = ''
    let nome_mais_baixa = ''
    let nome_mais_magra = ''
    let nome_mais_gorda = ''
    let altura_mais_alta = 0
    let altura_mais_baixa = 0
    let peso_mais_magra = 0
    let peso_mais_gorda = 0
    let primeira_candidata = true

    let continuar = true

    while (continuar) {
        const nome = obter_texto('Digite o nome da candidata (ou "FIM" para encerrar): ')

        if (nome === 'FIM') {
            continuar = false
        } else {
            const altura = obter_numero('Digite a altura da candidata (em cm): ')
            const peso = obter_numero('Digite o peso da candidata (em kg): ')
            clear_screen()

            if (primeira_candidata || altura > altura_mais_alta) {
                altura_mais_alta = altura
                nome_mais_alta = nome
            }

            if (primeira_candidata || altura < altura_mais_baixa) {
                altura_mais_baixa = altura
                nome_mais_baixa = nome
            }

            if (primeira_candidata || peso < peso_mais_magra) {
                peso_mais_magra = peso
                nome_mais_magra = nome
            }

            if (primeira_candidata || peso > peso_mais_gorda) {
                peso_mais_gorda = peso
                nome_mais_gorda = nome
            }

            primeira_candidata = false
        }
    }

    return {
        nome_mais_alta,
        nome_mais_baixa,
        nome_mais_magra,
        nome_mais_gorda,
        altura_mais_alta,
        altura_mais_baixa,
        peso_mais_magra,
        peso_mais_gorda
    }
}

export function calcularAnosParaUltrapassar(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0

    while (populacaoA < populacaoB) {
        populacaoA += populacaoA * taxaCrescimentoA
        populacaoB += populacaoB * taxaCrescimentoB
        anos++
    }

    return anos
}

