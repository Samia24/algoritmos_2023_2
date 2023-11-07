import { obter_numero, print } from "./utils.js"
import { mapear } from "./vetor_utils.js"

export function menor_maior(vetor){
    let maior = vetor[0]
    let menor = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
        if(vetor[i] < menor){
            menor = vetor[i]
        }
    }
    return {menor, maior}
}

export function somatorio(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma
}

export function media(vetor){
    let soma_valores = somatorio(vetor)
    let media = soma_valores / vetor.length
    return media
}

export function num_positivos(vetor){
    let positivos = []

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 0){
            positivos.push(vetor[i])
        }
    }    
    return positivos
}

export function num_negativos(vetor){
    let negativos = []

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            negativos.push(vetor[i])
        }
    }    
    return negativos
}

export function multiplicar_valores_vetor(vetor){
    const numero = obter_numero(`\n> Informe o valor para multiplicar cada item do vetor: `)
    return mapear(item => item * numero, vetor)

}

export function exponenciacao(vetor){
    const numero = obter_numero(`\n> Informe o valor exponencial para cada item do vetor: `)
    return mapear(item => item ** numero, vetor)

}

