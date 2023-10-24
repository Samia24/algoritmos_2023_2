//25. Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora, mostrando ao final, o número de cada canal e sua respectiva audiência.

import { clear_screen, print } from "./utils/input.js"
import { audiencia_tv } from "./utils/math.js";

function main(){  

    const num_espectadores = audiencia_tv()
    const total_Espectadores = num_espectadores.canal_2 + num_espectadores.canal_4 + num_espectadores.canal_5 + num_espectadores.canal_7 + num_espectadores.canal_10;


    const percentual_canal_2 = (num_espectadores.canal_2 / total_Espectadores) * 100
    const percentual_canal_4 = (num_espectadores.canal_4 / total_Espectadores) * 100
    const percentual_canal_5 = (num_espectadores.canal_5 / total_Espectadores) * 100
    const percentual_canal_7 = (num_espectadores.canal_7 / total_Espectadores) * 100
    const percentual_canal_10 = (num_espectadores.canal_10 / total_Espectadores) * 100

    clear_screen()
    print(`\n>>>>>>>>>> AUDIÊNCIA REDE TV <<<<<<<<<<`)
    print(`            > Canal 2 <`)
    print(`Audiência: ${percentual_canal_2.toFixed(2)}%`)
    print(`---------------------------------------`)
    
    print(`\n>>>>>>>>>> AUDIÊNCIA GLOBO <<<<<<<<<<`)
    print(`            > Canal 4 <`)
    print(`Audiência: ${percentual_canal_4.toFixed(2)}%`)
    print(`---------------------------------------`)
    
    print(`\n>>>>>>>>>> AUDIÊNCIA SBT <<<<<<<<<<`)
    print(`            > Canal 5 <`)
    print(`Audiência: ${percentual_canal_5.toFixed(2)}%`)
    print(`---------------------------------------`)
    
    print(`\n>>>>>>>>>> AUDIÊNCIA MEIO NORTE <<<<<<<<<<`)
    print(`            > Canal 7 <`)
    print(`Audiência: ${percentual_canal_7.toFixed(2)}%`)
    print(`---------------------------------------`)
    
    print(`\n>>>>>>>>>> AUDIÊNCIA SBT <<<<<<<<<<`)
    print(`            > Canal 10 <`)
    print(`Audiência: ${percentual_canal_10.toFixed(2)}%`)
    print(`---------------------------------------`)
    
}


main()