import { obter_numero_positivo, print_inline, obter_texto, print, clear_screen } from "./input.js"

export function numero_inteiro(numero, inteiros){
    while (inteiros >= 1 && inteiros < (numero + 1)){
        console.log(inteiros)
        inteiros += 1
    }
}

export function eh_par(numero, contador, num_pares){
    while(contador >= 1 && contador < (numero+1)){
        if (contador % 2 === 0){
            num_pares = contador
            console.log(num_pares)
        }
        contador += 1
    }
}

export function prog_aritmetica(variavel, limite, razao, contador, menor_limite){
    while(contador >= variavel && contador <= (limite+1)){
        if (contador < limite){
            menor_limite = contador
            console.log(menor_limite)
        }
        contador += razao
    }
}

export function prog_geometrica(variavel, limite, razao, contador, menor_limite){
    while(contador >= variavel && contador <= (limite+1)){
        if (contador < limite){
            menor_limite = contador
            console.log(menor_limite)
        }
        contador *= razao
    }
}

export function fatorial_numero(numero, contador, fatorial){
    while(contador <= numero){
        fatorial *= contador
        contador += 1
    }
    console.log(`\n >>> O fatorial de ${numero}! é ${fatorial}.`)
}

export function tabuada(numero, tipo){
    if (tipo === 'SOMAR'){
      tabuada_somar(numero)
    }else if (tipo === 'DIMINUIR'){
      tabuada_diminuir(numero)
    }else if (tipo === 'MULTIPLICAR'){
      tabuada_multiplicar(numero)
    }else if (tipo === 'DIVIDIR'){
      tabuada_dividir(numero)
    }else{
      print('Tipo inválido!')
    }
  }

export function tabuada_somar(numero){
    let parcela = 1
    console.log('\n>>> SOMAR <<<')
    console.log('---------------')
    
    while (parcela <= 10){
      const soma = numero + parcela
      console.log(`${numero} + ${parcela} = ${soma}`)
      parcela++
    }
  }
  
  export function tabuada_diminuir(numero){
    let minueno = numero
    console.log('\n>>> DIMINUIR <<<')
    console.log('------------------')
    while (minueno <= (numero + 9)){
      const diferenca = minueno - numero
      console.log(`${minueno} - ${numero} = ${diferenca}`)
      minueno++
    }
  }
  
  export function tabuada_multiplicar(numero){
    let fator = 1
    console.log('\n>>> MULTIPLICAR <<<')
    console.log('---------------------')
    
    while (fator <= 10){
      const produto = numero * fator
      console.log(`${numero} * ${fator} = ${produto}`)
      fator++
    }
  }
  
  
  export function tabuada_dividir(numero){
    let dividendo = numero
    console.log('\n>>> DIVIDIR <<<')
    console.log('-----------------')
    
    while (dividendo <= (10 * numero)){
      const quociente = dividendo / numero
      console.log(`${dividendo} ÷ ${numero} = ${quociente}`)
      dividendo = dividendo + numero
    }
}

export function somar_inteiros(numero, contador, soma){
    while(contador > 1 && contador < numero){
        soma += contador
        contador += 1
    }
    console.log(`\n >>> A soma dos números inteiros entre 1 e ${numero} é ${soma}.`)
}

export function numeros_multiplos(numero, limite_inferior, limite_superior, contador, multiplos){
    while(contador >= limite_inferior && contador < limite_superior){
        if(contador % numero === 0){
            multiplos = contador
            console.log(multiplos)
        }
        contador += 1
    }

    if (multiplos === 0){
        console.log(`\nNão há múltiplos de ${numero} entre ${limite_inferior} e ${limite_superior}.\n`)
    }
}

export function numeros_pares(limite_inferior, limite_superior, contador, pares){
    while(contador >= limite_inferior && contador < limite_superior){
        if(contador % 2 === 0){
            pares = contador
            console.log(pares)
        }
        contador += 1
    }
    console.log(`---------------------------\n`)
}

export function numeros_impares(limite_inferior, limite_superior, contador, impares){
    while(contador >= limite_inferior && contador < limite_superior){
        if(contador % 2 !== 0){
            impares = contador
            console.log(impares)
        }
        contador += 1
    }
    console.log(`---------------------------\n`)
}

export function num_primos(contador, limite_superior) {
    while (contador <= limite_superior) {
        if (contador > 1) {
            let divisor = 2;
            let eh_primo = true;

            while (divisor * divisor <= contador && eh_primo) {
                if (contador % divisor === 0) {
                    eh_primo = false;
                }
                divisor += 1;
            }

            if (eh_primo) {
                console.log(contador);
            }
        }

        contador += 1;
    }
}

export function soma_media(n, contador, soma, media){
    while (contador <= n){
        let numeros = obter_numero_positivo(`Informe o ${contador}º número: `)
        soma += numeros
        contador += 1
     }
     media = soma / n
     return {soma, media}
}

export function maior_numero(n, contador, maior){
    while (contador <= n){
        let numeros = obter_numero_positivo(`Informe o ${contador}º número: `)
        if (numeros > maior){
            maior = numeros
        }
        contador += 1
     }
     return maior
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

export function valor_maior_quadrado(n, contador, maiorQuadrado){
    while (contador <= n){
        let quadrado = contador **2
        if (quadrado <= n){
            maiorQuadrado = contador
        }
        contador++
    }
    return maiorQuadrado
}

export function sequencia(n, contador, termoAtual){
    while (contador <= n) {
        console.log(termoAtual)
        termoAtual += contador + 1
        contador++
    }
}

export function fibonacci(n, contador, termoAnterior, termoAtual){
    while (contador < n) {
        let proximoTermo = termoAnterior + termoAtual
    
        print_inline(' ' + proximoTermo)
    
        termoAnterior = termoAtual
        termoAtual = proximoTermo
    
        contador++
        }
    
}

export function is_prime(number){
    let count_dividers = 0
    let candidated = 1

    while(candidated <= number){
        if (number % candidated === 0){
            count_dividers++
        }
        candidated++
    }
    return count_dividers === 2
}

export function ficha_boi(fichas){
    let contador = 1
    let boi_mais_gordo = { numero_id: 0, nome: '', peso: -Infinity }
    let boi_mais_magro = { numero_id: 0, nome: '', peso: Infinity }
    
    while (contador <= fichas){
        print(`\n|---------- DADOS ${contador}º BOI ----------|`)
        let numero_id = obter_numero_positivo(`Número de identificação: `)
        let nome = obter_texto(`Nome: `)
        let peso = obter_numero_positivo(`Peso (Kg): `)
        print(`\n|--------------------------------------------|`)

        if (contador === 1){
            boi_mais_magro = {numero_id, nome, peso}
            boi_mais_gordo = {numero_id, nome, peso}
        }else{
            if (peso > boi_mais_gordo.peso){
                boi_mais_gordo = {numero_id, nome, peso}    
            }else if (peso < boi_mais_magro.peso){
                boi_mais_magro = {numero_id, nome, peso}
            }
        }
        contador++
        clear_screen()
    }
    let nome_maior_boi = boi_mais_gordo.nome;
    let id_maior_boi = boi_mais_gordo.numero_id;
    let peso_maior = boi_mais_gordo.peso;
    let nome_menor_boi = boi_mais_magro.nome;
    let id_menor_boi = boi_mais_magro.numero_id;
    let peso_menor = boi_mais_magro.peso;

    
    return {nome_maior_boi, id_maior_boi, peso_maior, nome_menor_boi, id_menor_boi, peso_menor}
}

export function verificar_salario(numHabitantes){
    let totalSalario = 0
    let totalFilhos = 0
    let numPessoas = 0
    let numPessoasSalarioAteMil = 0

    let i = 0

    while (i < numHabitantes) {
        print(`\n|---------- DADOS DO ${i + 1}º HABITANTE ----------|`)
        const salario = obter_numero_positivo(`\n >> Salário do habitante: R$ `)
        const numDeFilhos = obter_numero_positivo(` >> Número de filhos do habitante: `)
        
        totalSalario += salario;
        totalFilhos += numDeFilhos;
        numPessoas++;

        if (salario <= 1000) {
            numPessoasSalarioAteMil++;
        }
        i++
        clear_screen()
    }

    return {totalSalario, totalFilhos, numPessoas, numPessoasSalarioAteMil}
}

export function calcular_media(total, qtd_total){
    return total / qtd_total
}