import { obter_numero_positivo, print, print_inline, clear_screen, obter_numero_minimo, obter_numero, obter_texto, menu_boi, enter_to_continue, menu } from "./input.js"


export function obter_inteiros(){
    print('\n========== NÚMEROS INTEIROS ==========')
    const N = obter_numero_positivo('Quantidade de números inteiros: ')
    const lista_inteiros = []
    
    clear_screen()
    print('\n')
    for(let i = 0; i < N; i++){
        let num_inteiro = obter_numero_positivo(`>> Informe o ${i + 1}º número inteiro: `)
        lista_inteiros.push(num_inteiro)
    }
    
    clear_screen()
    print('\n>>> LISTA DE INTEIROS <<<')
    print(lista_inteiros)
}

export function num_pares(){
    print('\n========== NÚMEROS INTEIROS ==========')
    const N = obter_numero_positivo('Quantidade de números inteiros: ')
    const lista_inteiros_pares = []
    
    clear_screen()
    print('\n')
    for(let i = 0; i < N; i++){
        let num_inteiro = obter_numero_positivo(`>> Informe o ${i + 1}º número inteiro: `)
        if(num_inteiro % 2 === 0){
            lista_inteiros_pares.push(num_inteiro)
        }
    }
    
    clear_screen()
    print('\n>>> LISTA DE INTEIROS PARES <<<')
    print(lista_inteiros_pares)
}

export function progressao_aritmetrica(){
    print('\n>>>>>>>>>>> DADOS PROGRESSÃO ARITMÉTICA <<<<<<<<<<<')
    const a0 = obter_numero_positivo('Informe o valor de A0: ')
    const limite = obter_numero_positivo('Informe o Limite: ')
    const r = obter_numero_positivo('Informe a Razão: ')
    
    clear_screen()

    const valores_menor_limites = []
    for(let i = a0; i < limite; i += r){
        valores_menor_limites.push(i)
    }
    return {a0, limite, r, valores_menor_limites}
}

export function progressao_geometrica(){
    print('\n>>>>>>>>>>> DADOS PROGRESSÃO GEOMÉTRICA <<<<<<<<<<<')
    const a0 = obter_numero_positivo('Informe o valor de A0: ')
    const limite = obter_numero_positivo('Informe o Limite: ')
    const r = obter_numero_positivo('Informe a Razão: ')
    
    clear_screen()

    const valores_menor_limites = []
    for(let i = a0; i < limite; i *= r){
        valores_menor_limites.push(i)
    }
    return {a0, limite, r, valores_menor_limites}
}

export function fatorial(numero){
    let fatorial_num = 1
    for(let i = numero; i > 1; i -= 1){
        fatorial_num *= i
        print_inline(`${i} x `)
    }
    print(`1 = ${fatorial_num}`)
    print('*******************************')
}

export function tabuada(menu, numero){
    clear_screen()
    while (menu !== 9) {
        if(menu === 1){
            tabuada_somar(numero)
        }else if(menu === 2){
            tabuada_diminuir(numero)
        }else if(menu === 3){
            tabuada_multiplicar(numero)
        }else if(menu === 4){
            tabuada_dividir(numero)
        }
        numero = obter_numero_positivo('\n>> Tabuada do número: ')
        menu = obter_numero_positivo(`
        >> Escolha qual tabuada você quer ver:
        1 - SOMAR
        2 - DIMINUIR
        3 - MULTIPLICAR
        4 - DIVIDIR
        ................
        9 - Sair
        
        >> Digite a opção: `) 
        clear_screen()
    }
    print('          \n----- FIM -----')
}

export function tabuada_somar(numero){
    print(`\n=== TABUADA DE SOMAR ===`)
    for(let parcela = 1; parcela <= 10; parcela++){
        const soma = numero + parcela
        print(`> ${numero} + ${parcela} = ${soma}`)
        }
    }

export function tabuada_diminuir(numero){
    print(`\n=== TABUADA DE DIMINUIR ===`)
    for(let minueno = numero; minueno <= (numero + 9); minueno++){
        const diferenca = minueno - numero
        print(`> ${minueno} - ${numero} = ${diferenca}`)
    }
}

export function tabuada_multiplicar(numero){
    print(`\n=== TABUADA DE MULTIPLICAR ===`)
    for(let fator = 1; fator <= 10; fator++){
        const produto = numero * fator
        print(`> ${numero} x ${fator} = ${produto}`)
    }
}

export function tabuada_dividir(numero){
    print(`\n=== TABUADA DE DIVIDIR ===`)
    for(let dividendo = numero; dividendo <= (10 * numero); dividendo += numero){
        const quociente = dividendo / numero
        print(`> ${dividendo} ÷ ${numero} = ${quociente}`)
    }
}

export function soma_inteiros(N){
    let soma = 0
    for(let i = 2; i < N; i++){
        soma += i
    }
    return soma
}

export function numeros_multiplos(numero, limite_inferior, limite_superior, contador, multiplos) {
    for (contador; contador >= limite_inferior && contador < limite_superior; contador++) {
      if (contador % numero === 0) {
        multiplos = contador
        print_inline(`${multiplos} `)
      }
    }
    if (multiplos === 0) {
      print(`\nNão há múltiplos de ${numero} entre ${limite_inferior} e ${limite_superior}.\n`)
    }
}

export function numeros_pares(limite_inferior, limite_superior, contador, pares) {
    for (contador; contador >= limite_inferior && contador < limite_superior; contador++) {
      if (contador % 2 === 0) {
        pares = contador
        print_inline(`${pares} `)
      }
    }
    print(`]\n---------------------------\n`)
}

export function numeros_impares(limite_inferior, limite_superior, contador, impares) {
    for (contador; contador >= limite_inferior && contador < limite_superior; contador++) {
      if (contador % 2 !== 0) {
        impares = contador
        print_inline(`${impares} `)
      }
    }
    print(`]\n---------------------------\n`)
}

export function num_primos(contador, limite_superior) {
    for (contador; contador <= limite_superior; contador++) {
      if (contador > 1) {
        let divisor = 2
        let eh_primo = true
  
        while (divisor * divisor <= contador && eh_primo) {
          if (contador % divisor === 0) {
            eh_primo = false
          }
          divisor += 1
        }
  
        if (eh_primo) {
          print_inline(`${contador} `)
        }
      }
    }
    print(`]\n---------------------------\n`)
}
 
export function soma_media(n, contador, soma, media) {
    for (contador; contador <= n; contador++) {
      let numeros = obter_numero_positivo(`Informe o ${contador}º número: `)
      soma += numeros
    }
    media = soma / n
    return { soma, media }
}
  
export function maior_numero(n, contador, maior) {
    let numeros = []
  
    for (contador; contador <= n; contador++) {
      let numero = obter_numero_positivo(`Informe o ${contador}º número: `)
      numeros.push(numero)
  
      if (numero > maior) {
        maior = numero
      }
    }  
    return maior
}

export function valor_maior_quadrado(n, contador, maiorQuadrado) {
    for (contador; contador <= n; contador++) {
      let quadrado = contador ** 2
      if (quadrado <= n) {
        maiorQuadrado = contador
      }
    }
    return maiorQuadrado
}
  
export function sequencia(n, contador, termoAtual) {
    const sequencia = []
  
    for (contador; contador <= n; contador++) {
      sequencia.push(termoAtual)
      termoAtual += contador + 1
    }  
    return sequencia
}
    
export function fibonacci(n) {
    const sequencia = [];
    let termoAnterior = 0;
    let termoAtual = 1;
  
    sequencia.push(termoAnterior, termoAtual);
  
    for (let contador = 2; contador < n; contador++) {
      const proximoTermo = termoAnterior + termoAtual
      sequencia.push(proximoTermo)
      termoAnterior = termoAtual
      termoAtual = proximoTermo
    }
    return sequencia
}

export function ficha_boi(fichas) {
    let contador = 1
    let boi_mais_gordo
    let boi_mais_magro
  
    while (contador <= fichas) {
      print(`\n|---------- DADOS ${contador}º BOI ----------|`)
      let numero_id = obter_numero_positivo(`Número de identificação: `)
      let nome = obter_texto(`Nome: `)
      let peso = obter_numero_positivo(`Peso (Kg): `)
      print(`\n|--------------------------------------------|`)
  
      if (!boi_mais_gordo || peso > boi_mais_gordo.peso) {
        boi_mais_gordo = { numero_id, nome, peso }
      }
  
      if (!boi_mais_magro || peso < boi_mais_magro.peso) {
        boi_mais_magro = { numero_id, nome, peso }
      }
  
      contador++
      clear_screen()
    }
  
    let nome_maior_boi = boi_mais_gordo.nome
    let id_maior_boi = boi_mais_gordo.numero_id
    let peso_maior = boi_mais_gordo.peso
    let nome_menor_boi = boi_mais_magro.nome
    let id_menor_boi = boi_mais_magro.numero_id
    let peso_menor = boi_mais_magro.peso
  
    return {
      nome_maior_boi,
      id_maior_boi,
      peso_maior,
      nome_menor_boi,
      id_menor_boi,
      peso_menor,
    }
}

export function porcentagem(valor, percentual){
    return valor * (percentual / 100)
}

export function colocar_em_porcentagem(valor, valor_total){
    return (valor / valor_total) * 100
}

export function dinheiro(valor){
    return `${valor.toFixed(2)}`
}

export function calcular_salario(horas, dependentes){
    return ((horas * 12) + (dependentes * 40))
}

export function contracheque(qtd_funcionarios){
    for (let i = 0; i < qtd_funcionarios; i++) {
      const codigo = obter_texto('Código: ')
      const horas = obter_numero_positivo('Horas: ')
      const dependentes = obter_numero_minimo('Dependentes: ', 0)
    
      const salario_bruto = calcular_salario(horas, dependentes)
      const inss = porcentagem(salario_bruto, 8.5)
      const ir = porcentagem(salario_bruto, 5)
      const descontos = inss + ir
    
      const salario_liquido = salario_bruto - descontos
    
      const contra_cheque = `
          |---------- CONTRACHEQUE ----------|
          | GANHOS: 
          | - Salário: R$ ${dinheiro(salario_bruto)}
          | DESCONTOS: 
          | - INSS: R$ ${dinheiro(inss)}
          | - IR: R$ ${dinheiro(ir)}
          ------------------------------------
          | - LÍQUIDO: R$ ${dinheiro(salario_liquido)}
          -----------------------------------
    
          `
      print(contra_cheque)
    }
}

export function verificar_salario(numHabitantes) {
    let totalSalario = 0
    let totalFilhos = 0
    let numPessoas = 0
    let numPessoasSalarioAteMil = 0
  
    for (let i = 0; i < numHabitantes; i++) {
      print(`\n|---------- DADOS DO ${i + 1}º HABITANTE ----------|`)
      const salario = obter_numero_positivo(`\n >> Salário do habitante: R$ `)
      const numDeFilhos = obter_numero_minimo(` >> Número de filhos do habitante: `, 0)
  
      totalSalario += salario
      totalFilhos += numDeFilhos
      numPessoas++
  
      if (salario <= 1000) {
        numPessoasSalarioAteMil++
      }
      clear_screen()
    }
  
    return { totalSalario, totalFilhos, numPessoas, numPessoasSalarioAteMil }
}
  
export function resultado(opcao_escolhida, mediaSalario, mediaFilhos, percentualSalarioAteMil) {
    for (; opcao_escolhida > 0;) {
      if (opcao_escolhida === 1) {
        clear_screen()
        print('\n=======================================================')
        print(`\n>>> Média de salário da população: R$ ${dinheiro(mediaSalario)}`)
        print('\n=======================================================\n')
      } else if (opcao_escolhida === 2) {
        clear_screen()
        print('\n=======================================================')
        print(`\n>>> Média de número de filhos: ${dinheiro(mediaFilhos)}`)
        print('\n=======================================================\n')
      } else if (opcao_escolhida === 3) {
        clear_screen()
        print('\n===============================================================')
        print(`\n>>> Percentual de pessoas com salário até R$ 1.000,00: ${dinheiro(percentualSalarioAteMil)}%`)
        print('\n===============================================================\n')
      } else {
        clear_screen()
        print('\n---- > Opção inválida! Informe novamente.')
      }
      opcao_escolhida = obter_numero(menu())
    }
    clear_screen()
    print('\n >>> Obrigado(a) por utilizar nossos serviços. \n      Volte sempre !! <<<')
}
  
export function calcular_media(total, qtd_total){
    return total / qtd_total
}

export function computar_vencedor(votos_1, votos_2, votos_3) {
    if (votos_1 > votos_2 && votos_1 > votos_3) {
        return 1
    } else if (votos_2 > votos_1 && votos_2 > votos_3) {
        return 2
    } else if (votos_3 > votos_1 && votos_3 > votos_2) {
        return 3
    } else {
        return -1
    }
}

export function soma_fracoes(N){
    let soma = 1
    print_inline(`(1 / 1)`)
    for(let i = 2; i <= N; i++){
        let divisao = 1 / i
        soma += divisao
        print_inline(` + (1 / ${i})`)
    }
    return soma
    
}

export function soma_sequencia(N) {
    let soma = 0
    for(let i = 1; i <= N; i++) {
        let termo = i / (N - i + 1)
        soma += termo
        if (i === 1) {
            print_inline(`${i}/${N}`)
        } else {
            print_inline(` + ${i}/(${N}-${i-1})`)
        }
    }
    return soma
}

export function soma_sequencia2(N) {
    let soma = 0
    let operacao = 1 // 1 para adição, -1 para subtração
    for (let i = 1; i <= N; i++) {
        let numerador = i
        let denominador = N - i + 1
        let termo

        if (i === 1) {
            termo = i / N
            print_inline(`${i}/${N}`)
        } else {
            if (i % 2 === 0) {
                operacao = -operacao
                termo = ((denominador / numerador) * operacao)
                print_inline(` - ((${N}${-i + 1})/ ${i})`)
               
            } else {
                operacao = 1
                termo = ((numerador / denominador) * operacao)
                print_inline(` + (${i}/(${N}${-i + 1}))`)
            }
        }
        soma += termo
    }
    return soma
}

export function soma_fracoes2(N){
    let soma = 0
    let operacao = 1
    for(let i = 1; i <= N; i++){
        let denominador = i
        let divisao 
        if (denominador === 1){
            divisao = 1 / denominador
            divisao *= operacao
            print_inline(` (1 / ${i}) `)
        }else{
            if (i % 2 === 0){
                operacao = -1
                divisao = 1 / denominador
                divisao *= operacao
                print_inline(` - (1 / ${i}) `)
            }else{
                operacao = 1
                divisao = 1 / denominador
                divisao *= operacao
                print_inline(` + (1 / ${i}) `)
            }
        }
        soma += divisao
        
    }
    return soma
    
}

export function soma_fracoes3(N){
    let soma = 0
    let numerador = 1
    for(let denominador = 1; denominador <= N; denominador++){
        let divisao = numerador / denominador
        soma += divisao
        print_inline(` (${numerador} / ${denominador}) `)
        numerador += 2
        if(denominador < N){
            print_inline('+')
        }
    }
    return soma
    
}