/*14. Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2o turno.*/

import { clear_screen, obter_numero, print } from "./utils/input.js";

function main() {
    let votosSerra = 0
    let votosDilma = 0
    let votosCiroGomes = 0
    let votosIndecisos = 0
    let votosOutros = 0
    let votosNulos = 0
    let totalEntrevistados = 0
    let opiniao = 1 
    let encerrarPesquisa = false

    while (!encerrarPesquisa) {
        totalEntrevistados++
        opiniao = obter_numero(`
        ================ CANDIDATOS ================
        > Serra = 45 
        > Dilma = 13
        > Ciro Gomes = 23 
        > Indeciso = 99
        > Outros = 98
        > Nulo/Branco = 0 

        ->>> Digite o número correspondente à opinião (ou -1 para encerrar a pesquisa): `)

        clear_screen()
        if (opiniao === -1) {
            encerrarPesquisa = true
        } else {
            if (opiniao === 45) {
                votosSerra++
            } else if (opiniao === 13) {
                votosDilma++
            } else if (opiniao === 23) {
                votosCiroGomes++
            } else if (opiniao === 99) {
                votosIndecisos++
            } else if (opiniao === 98) {
                votosOutros++
            } else if (opiniao === 0) {
                votosNulos++
            } else {
                print('Opinião inválida. Por favor, escolha um número válido.')
            }
        }
    }

    const totalVotosValidos = votosSerra + votosDilma + votosCiroGomes
    const porcentagemSerra = (votosSerra / totalVotosValidos) * 100
    const porcentagemDilma = (votosDilma / totalVotosValidos) * 100
    const porcentagemCiroGomes = (votosCiroGomes / totalVotosValidos) * 100
    const porcentagemIndecisos = (votosIndecisos / totalEntrevistados) * 100
    const porcentagemNulos = (votosNulos / totalEntrevistados) * 100
    const porcentagemOutros = (votosOutros / totalEntrevistados) * 100

    print('\n>>>>>>>>>> Resultados da pesquisa de opinião pública <<<<<<<<<<')
    print(`\nPorcentagem de votos para Serra: ${porcentagemSerra.toFixed(2)}%`)
    print(`Porcentagem de votos para Dilma: ${porcentagemDilma.toFixed(2)}%`)
    print(`Porcentagem de votos para Ciro Gomes: ${porcentagemCiroGomes.toFixed(2)}%`)
    print(`Porcentagem de eleitores indecisos: ${porcentagemIndecisos.toFixed(2)}%`)
    print(`Porcentagem de votos nulos/brancos: ${porcentagemNulos.toFixed(2)}%`)
    print(`Porcentagem de votos para outros candidatos: ${porcentagemOutros.toFixed(2)}%`)
    print(`\nTotal de entrevistados: ${totalEntrevistados}`)

    if (porcentagemSerra >= 50 || porcentagemDilma >= 50 || porcentagemCiroGomes >= 50) {
        print('\n->> Haverá 2º turno nas eleições presidenciais.')
    } else {
        print('\n->> Não haverá 2º turno nas eleições presidenciais.')
    }

    print('-----------------------------------------------------------------\n')
}

main()
